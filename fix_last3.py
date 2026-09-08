import json

with open('moviesData.js', 'r', encoding='utf-8') as f:
    content = f.read()
movies = json.loads(content.replace('const moviesData = ', '').rstrip(';\n '))

fixes = {
    40: "https://image.tmdb.org/t/p/w500/jTi6pvvK5oiBPbQ4tYv3Djh97ir.jpg",
    207: "https://image.tmdb.org/t/p/w500/kc8jT1MAiKM0iwdjAwC5lQrTNry.jpg",
    737: "https://image.tmdb.org/t/p/w500/jO2aHAiWgQSlpAIPGZikiMDdMXx.jpg"
}

for m in movies:
    if m['id'] in fixes:
        m['poster'] = fixes[m['id']]
        print(f"Fixed: {m['title']}")

js_content = "const moviesData = " + json.dumps(movies, indent=2) + ";\n"
with open('moviesData.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

remaining = len([m for m in movies if 'placehold.co' in m['poster']])
print(f"Done! Remaining without poster: {remaining}")
