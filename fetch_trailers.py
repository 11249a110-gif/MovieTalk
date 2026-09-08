import json, urllib.request, urllib.parse, time
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY = "2f57cf2df3880a081e10e12194d4735b"

with open('moviesData.js', 'r', encoding='utf-8') as f:
    content = f.read()
movies = json.loads(content.replace('const moviesData = ', '').rstrip(';\n '))

print(f"Fetching trailers for {len(movies)} movies...")

def fetch_trailer(movie):
    title = movie['title']
    year = movie['year']
    query = urllib.parse.quote(title)
    
    # Step 1: Search for movie to get TMDB ID
    tmdb_id = None
    for url in [
        f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}&year={year}",
        f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}"
    ]:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            res = urllib.request.urlopen(req, timeout=10)
            data = json.loads(res.read())
            if data.get('results'):
                tmdb_id = data['results'][0]['id']
                break
        except:
            time.sleep(0.5)
    
    if not tmdb_id:
        return (movie['id'], None)
    
    # Step 2: Get videos for that movie
    try:
        vid_url = f"https://api.themoviedb.org/3/movie/{tmdb_id}/videos?api_key={API_KEY}"
        req2 = urllib.request.Request(vid_url, headers={'User-Agent': 'Mozilla/5.0'})
        res2 = urllib.request.urlopen(req2, timeout=10)
        vid_data = json.loads(res2.read())
        
        # Look for official YouTube trailer
        for v in vid_data.get('results', []):
            if v.get('site') == 'YouTube' and v.get('type') == 'Trailer':
                return (movie['id'], f"https://www.youtube.com/watch?v={v['key']}")
        
        # Fallback: any YouTube teaser
        for v in vid_data.get('results', []):
            if v.get('site') == 'YouTube' and v.get('type') == 'Teaser':
                return (movie['id'], f"https://www.youtube.com/watch?v={v['key']}")
        
        # Fallback: any YouTube video
        for v in vid_data.get('results', []):
            if v.get('site') == 'YouTube':
                return (movie['id'], f"https://www.youtube.com/watch?v={v['key']}")
                
    except:
        pass
    
    return (movie['id'], None)

# Process in batches
trailer_map = {}
batch_size = 40
fixed = 0

for batch_start in range(0, len(movies), batch_size):
    batch = movies[batch_start:batch_start + batch_size]
    with ThreadPoolExecutor(max_workers=5) as ex:
        futures = {ex.submit(fetch_trailer, m): m for m in batch}
        for f in as_completed(futures):
            mid, trailer = f.result()
            if trailer:
                trailer_map[mid] = trailer
                fixed += 1
    done = min(batch_start + batch_size, len(movies))
    print(f"  {done}/{len(movies)} done ({fixed} trailers found)")
    time.sleep(0.5)

# Apply trailers to movies
for m in movies:
    m['trailer'] = trailer_map.get(m['id'], '')

js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
with open('moviesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

no_trailer = len([m for m in movies if not m['trailer']])
print(f"\nDONE! Found trailers for {fixed} movies. {no_trailer} without trailers.")
