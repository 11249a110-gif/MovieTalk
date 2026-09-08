import json, urllib.request, urllib.parse, time
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY = "2f57cf2df3880a081e10e12194d4735b"

with open('moviesData.js', 'r', encoding='utf-8') as f:
    content = f.read()
movies = json.loads(content.replace('const moviesData = ', '').rstrip(';\n '))

missing_trailers = [m for m in movies if not m.get('trailer')]
print(f"Total movies missing direct trailers: {len(missing_trailers)}")

def fetch_single_trailer(movie):
    title = movie['title']
    year = movie['year']
    query = urllib.parse.quote(title)
    
    tmdb_id = None
    try:
        url = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}&year={year}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as res:
            data = json.loads(res.read().decode('utf-8'))
            if data.get('results'):
                tmdb_id = data['results'][0]['id']
    except Exception:
        pass
            
    if not tmdb_id:
        try:
            url = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}"
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as res:
                data = json.loads(res.read().decode('utf-8'))
                if data.get('results'):
                    tmdb_id = data['results'][0]['id']
        except Exception:
            pass

    fallback_url = f"https://www.youtube.com/results?search_query={urllib.parse.quote(title + ' ' + str(year) + ' official trailer')}"

    if not tmdb_id:
        return (movie['id'], fallback_url)

    # Get videos
    try:
        vid_url = f"https://api.themoviedb.org/3/movie/{tmdb_id}/videos?api_key={API_KEY}"
        req2 = urllib.request.Request(vid_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req2, timeout=5) as res2:
            vid_data = json.loads(res2.read().decode('utf-8'))
            results = vid_data.get('results', [])
            for v in results:
                if v.get('site') == 'YouTube' and v.get('type') in ['Trailer', 'Teaser']:
                    return (movie['id'], f"https://www.youtube.com/watch?v={v['key']}")
            for v in results:
                if v.get('site') == 'YouTube':
                    return (movie['id'], f"https://www.youtube.com/watch?v={v['key']}")
    except Exception:
        pass

    return (movie['id'], fallback_url)

# Process in parallel with 10 workers
batch_size = 50
fixed_map = {}

for batch_start in range(0, len(missing_trailers), batch_size):
    batch = missing_trailers[batch_start:batch_start + batch_size]
    with ThreadPoolExecutor(max_workers=10) as ex:
        futures = {ex.submit(fetch_single_trailer, m): m for m in batch}
        for f in as_completed(futures):
            mid, tr = f.result()
            fixed_map[mid] = tr
    
    done = min(batch_start + batch_size, len(missing_trailers))
    print(f"Progress: {done}/{len(missing_trailers)} processed")
    time.sleep(0.3)

for m in movies:
    if m['id'] in fixed_map:
        m['trailer'] = fixed_map[m['id']]

js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
with open('moviesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

direct = len([m for m in movies if m.get('trailer') and 'youtube.com/watch?v=' in m.get('trailer')])
total = len([m for m in movies if m.get('trailer')])
print(f"DONE! All {total}/1000 movies now have trailer functionality ({direct} direct YouTube embeds, rest fallback search).")
