import json, urllib.request, urllib.parse, time
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY = "2f57cf2df3880a081e10e12194d4735b"

with open('moviesData.js', 'r', encoding='utf-8') as f:
    content = f.read()
movies = json.loads(content.replace('const moviesData = ', '').rstrip(';\n '))

missing_trailers = [m for m in movies if not m.get('trailer')]
print(f"Total movies missing explicit trailers: {len(missing_trailers)}")

def fetch_single_trailer(movie):
    title = movie['title']
    year = movie['year']
    query = urllib.parse.quote(title)
    
    # Try searching with retry
    tmdb_id = None
    for attempt in range(3):
        try:
            url = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}&year={year}"
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as res:
                data = json.loads(res.read().decode('utf-8'))
                if data.get('results'):
                    tmdb_id = data['results'][0]['id']
                    break
        except Exception as e:
            time.sleep(1 + attempt * 2)
            
    if not tmdb_id:
        # Retry without year filter
        for attempt in range(2):
            try:
                url = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}"
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=10) as res:
                    data = json.loads(res.read().decode('utf-8'))
                    if data.get('results'):
                        tmdb_id = data['results'][0]['id']
                        break
            except Exception as e:
                time.sleep(1 + attempt * 2)

    if not tmdb_id:
        return (movie['id'], None)

    # Get videos for tmdb_id
    trailer_url = None
    for attempt in range(3):
        try:
            vid_url = f"https://api.themoviedb.org/3/movie/{tmdb_id}/videos?api_key={API_KEY}"
            req2 = urllib.request.Request(vid_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2, timeout=10) as res2:
                vid_data = json.loads(res2.read().decode('utf-8'))
                
                results = vid_data.get('results', [])
                # 1. Official YouTube Trailer
                for v in results:
                    if v.get('site') == 'YouTube' and v.get('type') == 'Trailer':
                        trailer_url = f"https://www.youtube.com/watch?v={v['key']}"
                        break
                if not trailer_url:
                    # 2. Any YouTube Teaser / Video
                    for v in results:
                        if v.get('site') == 'YouTube':
                            trailer_url = f"https://www.youtube.com/watch?v={v['key']}"
                            break
            if trailer_url:
                break
        except Exception as e:
            time.sleep(1 + attempt * 2)

    return (movie['id'], trailer_url)

# Process in smaller batches with delays to respect rate limits
batch_size = 25
fixed_map = {}

for batch_start in range(0, len(missing_trailers), batch_size):
    batch = missing_trailers[batch_start:batch_start + batch_size]
    with ThreadPoolExecutor(max_workers=3) as ex:
        futures = {ex.submit(fetch_single_trailer, m): m for m in batch}
        for f in as_completed(futures):
            mid, tr = f.result()
            if tr:
                fixed_map[mid] = tr
    
    done = min(batch_start + batch_size, len(missing_trailers))
    print(f"Batch completed: {done}/{len(missing_trailers)} processed ({len(fixed_map)} trailers retrieved)")
    time.sleep(1.5)

# Save progress
for m in movies:
    if m['id'] in fixed_map:
        m['trailer'] = fixed_map[m['id']]

js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
with open('moviesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

total_has_trailer = len([m for m in movies if m.get('trailer')])
print(f"Updated moviesData.js! Total movies with direct trailers: {total_has_trailer}/1000")
