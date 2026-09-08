import csv
import json
import urllib.parse

movies = []

with open('movies.csv', mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Genre in CSV might have multiple comma separated?
        # Actually in this dataset it looks like a single string per row, but let's split by comma just in case
        genres = [g.strip() for g in row['Genre'].split(',') if g.strip()]
        
        # Revenue
        rev_str = row['Revenue_millions'].strip()
        revenue = float(rev_str) * 1000000 if rev_str else 0
        
        # Placeholder poster
        encoded_title = urllib.parse.quote(row['Title'])
        poster = f"https://placehold.co/500x750/141414/ffffff?text={encoded_title}"
        
        movie = {
            "id": int(row['ID']),
            "title": row['Title'].strip(),
            "year": int(row['Year']) if row['Year'].strip() else 0,
            "genre": genres,
            "director": row['Director'].strip(),
            "rating": float(row['Rating']) if row['Rating'].strip() else 0,
            "votes": int(row['Votes']) if row['Votes'].strip() else 0,
            "revenue": revenue,
            "poster": poster,
            "tagline": "A Hollywood Classic.",
            "synopsis": f"{row['Title'].strip()} is a {row['Genre'].strip()} directed by {row['Director'].strip()}."
        }
        movies.append(movie)

# Write to moviesData.js
js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
with open('moviesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("Successfully generated moviesData.js with 1000 movies!")
