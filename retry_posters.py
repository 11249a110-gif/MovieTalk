import json, urllib.request, urllib.parse, time
from concurrent.futures import ThreadPoolExecutor, as_completed

API_KEY = "2f57cf2df3880a081e10e12194d4735b"

with open('moviesData.js', 'r', encoding='utf-8') as f:
    content = f.read()
movies = json.loads(content.replace('const moviesData = ', '').rstrip(';\n '))

missing_indices = [i for i, m in enumerate(movies) if 'placehold.co' in m['poster']]
print(f"Retrying {len(missing_indices)} movies...")

def fetch(idx):
    m = movies[idx]
    query = urllib.parse.quote(m['title'])
    for url in [
        f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}&year={m['year']}",
        f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}"
    ]:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            res = urllib.request.urlopen(req, timeout=10)
            data = json.loads(res.read())
            for r in data.get('results', []):
                if r.get('poster_path'):
                    return (idx, f"https://image.tmdb.org/t/p/w500{r['poster_path']}")
        except:
            time.sleep(1)
    return (idx, None)

# Process in batches of 40 with small delays between batches
fixed = 0
batch_size = 40
for batch_start in range(0, len(missing_indices), batch_size):
    batch = missing_indices[batch_start:batch_start + batch_size]
    with ThreadPoolExecutor(max_workers=5) as ex:
        futures = {ex.submit(fetch, i): i for i in batch}
        for f in as_completed(futures):
            idx, poster = f.result()
            if poster:
                movies[idx]['poster'] = poster
                fixed += 1
    done = min(batch_start + batch_size, len(missing_indices))
    print(f"  {done}/{len(missing_indices)} done ({fixed} fixed)")
    time.sleep(0.5)

js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
with open('moviesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

remaining = len([m for m in movies if 'placehold.co' in m['poster']])
print(f"DONE! Fixed {fixed}. Remaining without poster: {remaining}")
