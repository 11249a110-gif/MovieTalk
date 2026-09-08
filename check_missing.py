import json
data = json.loads(open('moviesData.js', encoding='utf-8').read().replace('const moviesData = ', '').rstrip('; \n'))
for m in data:
    if 'placehold.co' in m['poster']:
        print(f"ID:{m['id']} - {m['title']} ({m['year']})")
