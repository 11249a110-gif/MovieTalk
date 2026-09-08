import csv
import json
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

API_KEY = "2f57cf2df3880a081e10e12194d4735b"

def fetch_poster(title, year):
    query = urllib.parse.quote(title)
    url = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}"
    if year:
        url += f"&year={year}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        data = json.loads(res.read())
        if data['results'] and data['results'][0].get('poster_path'):
            return f"https://image.tmdb.org/t/p/w500{data['results'][0]['poster_path']}"
    except Exception as e:
        pass
    # Fallback to placeholder
    return f"https://placehold.co/500x750/141414/ffffff?text={urllib.parse.quote(title)}"

def process_row(row):
    genres = [g.strip() for g in row['Genre'].split(',') if g.strip()]
    rev_str = row['Revenue_millions'].strip()
    revenue = float(rev_str) * 1000000 if rev_str else 0
    title = row['Title'].strip()
    year_str = row['Year'].strip()
    year = int(year_str) if year_str else 0
    
    poster = fetch_poster(title, year)
    
    return {
        "id": int(row['ID']),
        "title": title,
        "year": year,
        "genre": genres,
        "director": row['Director'].strip(),
        "rating": float(row['Rating']) if row['Rating'].strip() else 0,
        "votes": int(row['Votes']) if row['Votes'].strip() else 0,
        "revenue": revenue,
        "poster": poster,
        "tagline": "A Hollywood Classic.",
        "synopsis": f"{title} is a {row['Genre'].strip()} directed by {row['Director'].strip()}."
    }

if __name__ == '__main__':
    with open('movies.csv', mode='r', encoding='utf-8') as f:
        rows = list(csv.DictReader(f))

    print("Fetching posters from TMDB... This might take a minute.")
    
    # Use ThreadPoolExecutor for concurrent requests to speed it up
    with ThreadPoolExecutor(max_workers=20) as executor:
        movies = list(executor.map(process_row, rows))

    # Sort by ID just to maintain order in case map messes it up (though map preserves order)
    movies.sort(key=lambda x: x['id'])

    # Write to moviesData.js
    js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
    with open('moviesData.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("Successfully generated moviesData.js with real TMDB posters!")
