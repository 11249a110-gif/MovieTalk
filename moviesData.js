const moviesData = [
  {
    "id": 1,
    "title": "Guardians of the Galaxy",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "James Gunn",
    "rating": 8.1,
    "votes": 757074,
    "revenue": 333130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Guardians of the Galaxy is a Action directed by James Gunn.",
    "trailer": "https://www.youtube.com/results?search_query=Guardians%20of%20the%20Galaxy%202014%20official%20trailer"
  },
  {
    "id": 2,
    "title": "Prometheus",
    "year": 2012,
    "genre": [
      "Adventure"
    ],
    "director": "Ridley Scott",
    "rating": 7.0,
    "votes": 485820,
    "revenue": 126460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qsYQflQhOuhDpQ0W2aOcwqgDAeI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Prometheus is a Adventure directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/watch?v=cJMIzdf1eo8"
  },
  {
    "id": 3,
    "title": "Split",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "M. Night Shyamalan",
    "rating": 7.3,
    "votes": 157606,
    "revenue": 138120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Split is a Horror directed by M. Night Shyamalan.",
    "trailer": "https://www.youtube.com/watch?v=6bfooooTKyM"
  },
  {
    "id": 4,
    "title": "Sing",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Christophe Lourdelet",
    "rating": 7.2,
    "votes": 60545,
    "revenue": 270320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rwopfpHqPCYBSgBuZwkaXXqHp14.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sing is a Animation directed by Christophe Lourdelet.",
    "trailer": "https://www.youtube.com/watch?v=GIgXWuLQPFY"
  },
  {
    "id": 5,
    "title": "Suicide Squad",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "David Ayer",
    "rating": 6.2,
    "votes": 393727,
    "revenue": 325020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sk3FZgh3sRrmr8vyhaitNobMcfh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Suicide Squad is a Action directed by David Ayer.",
    "trailer": "https://www.youtube.com/watch?v=pimz7kmkW6o"
  },
  {
    "id": 6,
    "title": "The Great Wall",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Yimou Zhang",
    "rating": 6.1,
    "votes": 56036,
    "revenue": 45130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/p70dq1YxabemdZDm5K6Q8G10wSn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Great Wall is a Action directed by Yimou Zhang.",
    "trailer": "https://www.youtube.com/watch?v=Bnsesxk5LF4"
  },
  {
    "id": 7,
    "title": "La La Land",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Damien Chazelle",
    "rating": 8.3,
    "votes": 258682,
    "revenue": 151060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "La La Land is a Comedy directed by Damien Chazelle.",
    "trailer": "https://www.youtube.com/watch?v=_oBwwSXdO_E"
  },
  {
    "id": 8,
    "title": "Mindhorn",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Sean Foley",
    "rating": 6.4,
    "votes": 2490,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/1cg6oZo7C7iqYTZgbfOvscAFiP2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mindhorn is a Comedy directed by Sean Foley.",
    "trailer": "https://www.youtube.com/results?search_query=Mindhorn%202016%20official%20trailer"
  },
  {
    "id": 9,
    "title": "The Lost City of Z",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "James Gray",
    "rating": 7.1,
    "votes": 7188,
    "revenue": 8010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8SxHVNk6tqXYwygmDzz1YuJEm2J.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lost City of Z is a Action directed by James Gray.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Lost%20City%20of%20Z%202016%20official%20trailer"
  },
  {
    "id": 10,
    "title": "Passengers",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Morten Tyldum",
    "rating": 7.0,
    "votes": 192177,
    "revenue": 100010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jK9S6HANSf2no64v1x1HxfcpmcA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Passengers is a Adventure directed by Morten Tyldum.",
    "trailer": "https://www.youtube.com/results?search_query=Passengers%202016%20official%20trailer"
  },
  {
    "id": 11,
    "title": "Fantastic Beasts and Where to Find Them",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "David Yates",
    "rating": 7.5,
    "votes": 232072,
    "revenue": 234020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fantastic Beasts and Where to Find Them is a Adventure directed by David Yates.",
    "trailer": "https://www.youtube.com/watch?v=Vso5o11LuGU"
  },
  {
    "id": 12,
    "title": "Hidden Figures",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Theodore Melfi",
    "rating": 7.8,
    "votes": 93103,
    "revenue": 169270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hidden Figures is a Biography directed by Theodore Melfi.",
    "trailer": "https://www.youtube.com/watch?v=5wfrDhgUMGI"
  },
  {
    "id": 13,
    "title": "Rogue One",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Gareth Edwards",
    "rating": 7.9,
    "votes": 323118,
    "revenue": 532169999.99999994,
    "poster": "https://image.tmdb.org/t/p/w500/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rogue One is a Action directed by Gareth Edwards.",
    "trailer": "https://www.youtube.com/results?search_query=Rogue%20One%202016%20official%20trailer"
  },
  {
    "id": 14,
    "title": "Moana",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Ron Clements",
    "rating": 7.7,
    "votes": 118151,
    "revenue": 248750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zKVgiv5qHCvCLT4A2ymJi5QeXDH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Moana is a Animation directed by Ron Clements.",
    "trailer": "https://www.youtube.com/watch?v=LKFuXETZUsI"
  },
  {
    "id": 15,
    "title": "Colossal",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Nacho Vigalondo",
    "rating": 6.4,
    "votes": 8612,
    "revenue": 2870000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4VOyofBd1pexblxtDZYtYIk7NI4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Colossal is a Action directed by Nacho Vigalondo.",
    "trailer": "https://www.youtube.com/results?search_query=Colossal%202016%20official%20trailer"
  },
  {
    "id": 16,
    "title": "The Secret Life of Pets",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Chris Renaud",
    "rating": 6.6,
    "votes": 120259,
    "revenue": 368310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/s9xg4V5EDKiphgIksVJ9gewBM11.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Secret Life of Pets is a Animation directed by Chris Renaud.",
    "trailer": "https://www.youtube.com/watch?v=mYocfuqu2A8"
  },
  {
    "id": 17,
    "title": "Hacksaw Ridge",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Mel Gibson",
    "rating": 8.2,
    "votes": 211760,
    "revenue": 67120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fnOMP6mjmOmZwmlC1n0K7ivrzt1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hacksaw Ridge is a Biography directed by Mel Gibson.",
    "trailer": "https://www.youtube.com/watch?v=s2-1hz1juBI"
  },
  {
    "id": 18,
    "title": "Jason Bourne",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Paul Greengrass",
    "rating": 6.7,
    "votes": 150823,
    "revenue": 162160000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xA7N41glw17MBQtcWSm2eBlBRuG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jason Bourne is a Action directed by Paul Greengrass.",
    "trailer": "https://www.youtube.com/watch?v=F4gJsKZvqE4"
  },
  {
    "id": 19,
    "title": "Lion",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Garth Davis",
    "rating": 8.1,
    "votes": 102061,
    "revenue": 51690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lion is a Biography directed by Garth Davis.",
    "trailer": "https://www.youtube.com/results?search_query=Lion%202016%20official%20trailer"
  },
  {
    "id": 20,
    "title": "Arrival",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Denis Villeneuve",
    "rating": 8.0,
    "votes": 340798,
    "revenue": 100500000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Arrival is a Drama directed by Denis Villeneuve.",
    "trailer": "https://www.youtube.com/watch?v=7W1m5ER3I1Y"
  },
  {
    "id": 21,
    "title": "Gold",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Stephen Gaghan",
    "rating": 6.7,
    "votes": 19053,
    "revenue": 7220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ukMXAdr325Tn1mLGkxdG8Lab16l.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gold is a Adventure directed by Stephen Gaghan.",
    "trailer": "https://www.youtube.com/watch?v=VXSrDNFG8Xw"
  },
  {
    "id": 22,
    "title": "Manchester by the Sea",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Kenneth Lonergan",
    "rating": 7.9,
    "votes": 134213,
    "revenue": 47700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/o9VXYOuaJxCEKOxbA86xqtwmqYn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Manchester by the Sea is a Drama directed by Kenneth Lonergan.",
    "trailer": "https://www.youtube.com/watch?v=Je7Qw5kCJbM"
  },
  {
    "id": 23,
    "title": "Hounds of Love",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Ben Young",
    "rating": 6.7,
    "votes": 1115,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/b4niGo8hpxIpmAZsGkpZK4mXiDo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hounds of Love is a Crime directed by Ben Young.",
    "trailer": "https://www.youtube.com/watch?v=bEK7g7qXVx0"
  },
  {
    "id": 24,
    "title": "Trolls",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Walt Dohrn",
    "rating": 6.5,
    "votes": 38552,
    "revenue": 153690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9VlK2j0THZWzhQPq0W3Oc0IIdBB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Trolls is a Animation directed by Walt Dohrn.",
    "trailer": "https://www.youtube.com/watch?v=xyjm5VQ11TQ"
  },
  {
    "id": 25,
    "title": "Independence Day: Resurgence",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Roland Emmerich",
    "rating": 5.3,
    "votes": 127553,
    "revenue": 103140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9S50foUIYGwiNPWOxi1WJF6IPwI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Independence Day: Resurgence is a Action directed by Roland Emmerich.",
    "trailer": "https://www.youtube.com/watch?v=FrS7PThzR8s"
  },
  {
    "id": 26,
    "title": "Paris pieds nus",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Dominique Abel",
    "rating": 6.8,
    "votes": 222,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/8XVNkOslnv5Atxy47RfPUtTDBkH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Paris pieds nus is a Comedy directed by Dominique Abel.",
    "trailer": "https://www.youtube.com/results?search_query=Paris%20pieds%20nus%202016%20official%20trailer"
  },
  {
    "id": 27,
    "title": "Bahubali: The Beginning",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "S.S. Rajamouli",
    "rating": 8.3,
    "votes": 76193,
    "revenue": 6500000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bahubali: The Beginning is a Action directed by S.S. Rajamouli.",
    "trailer": "https://www.youtube.com/watch?v=3NQRhE772b0"
  },
  {
    "id": 28,
    "title": "Dead Awake",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Phillip Guzman",
    "rating": 4.7,
    "votes": 523,
    "revenue": 10000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2962UpmXU2flDWCQj9ImeHfWXRG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dead Awake is a Horror directed by Phillip Guzman.",
    "trailer": "https://www.youtube.com/results?search_query=Dead%20Awake%202016%20official%20trailer"
  },
  {
    "id": 29,
    "title": "Bad Moms",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Jon Lucas",
    "rating": 6.2,
    "votes": 66540,
    "revenue": 113080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/u9q10ljhkLj0tNCjlVqe3DCjoU4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bad Moms is a Comedy directed by Jon Lucas.",
    "trailer": "https://www.youtube.com/watch?v=MVzDKTh49zs"
  },
  {
    "id": 30,
    "title": "Assassin's Creed",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Justin Kurzel",
    "rating": 5.9,
    "votes": 112813,
    "revenue": 54650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kDXewoEcvbn0pUvJ8W3vfkuWgHw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Assassin's Creed is a Action directed by Justin Kurzel.",
    "trailer": "https://www.youtube.com/watch?v=vzWVVla8WWA"
  },
  {
    "id": 31,
    "title": "Why Him?",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "John Hamburg",
    "rating": 6.3,
    "votes": 48123,
    "revenue": 60310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eezFoKz7bXgdbjeieeCYJFXPKSu.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Why Him? is a Comedy directed by John Hamburg.",
    "trailer": "https://www.youtube.com/results?search_query=Why%20Him%3F%202016%20official%20trailer"
  },
  {
    "id": 32,
    "title": "Nocturnal Animals",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Tom Ford",
    "rating": 7.5,
    "votes": 126030,
    "revenue": 10640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mdLDgQBD0va09npSQX5Zgo2evXM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Nocturnal Animals is a Drama directed by Tom Ford.",
    "trailer": "https://www.youtube.com/watch?v=SI45fDplBpw"
  },
  {
    "id": 33,
    "title": "X-Men: Apocalypse",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Bryan Singer",
    "rating": 7.1,
    "votes": 275510,
    "revenue": 155330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ikA8UhYdTGpqbatFa93nIf6noSr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "X-Men: Apocalypse is a Action directed by Bryan Singer.",
    "trailer": "https://www.youtube.com/watch?v=Jer8XjMrUB4"
  },
  {
    "id": 34,
    "title": "Deadpool",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Tim Miller",
    "rating": 8.0,
    "votes": 627797,
    "revenue": 363020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Deadpool is a Action directed by Tim Miller.",
    "trailer": "https://www.youtube.com/watch?v=9vN6DHB6bJc"
  },
  {
    "id": 35,
    "title": "Resident Evil: The Final Chapter",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Paul W.S. Anderson",
    "rating": 5.6,
    "votes": 46165,
    "revenue": 26840000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7glPlA0xPpxPxBu0TnY4ulQVCV1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Resident Evil: The Final Chapter is a Action directed by Paul W.S. Anderson.",
    "trailer": "https://www.youtube.com/watch?v=79Sd4GtOXuI"
  },
  {
    "id": 36,
    "title": "Captain America: Civil War",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Anthony Russo",
    "rating": 7.9,
    "votes": 411656,
    "revenue": 408080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Captain America: Civil War is a Action directed by Anthony Russo.",
    "trailer": "https://www.youtube.com/watch?v=dKrVegVI0Us"
  },
  {
    "id": 37,
    "title": "Interstellar",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Christopher Nolan",
    "rating": 8.6,
    "votes": 1047747,
    "revenue": 187990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Interstellar is a Adventure directed by Christopher Nolan.",
    "trailer": "https://www.youtube.com/watch?v=LY19rHKAaAg"
  },
  {
    "id": 38,
    "title": "Doctor Strange",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Scott Derrickson",
    "rating": 7.6,
    "votes": 293732,
    "revenue": 232600000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Doctor Strange is a Action directed by Scott Derrickson.",
    "trailer": "https://www.youtube.com/results?search_query=Doctor%20Strange%202016%20official%20trailer"
  },
  {
    "id": 39,
    "title": "The Magnificent Seven",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Antoine Fuqua",
    "rating": 6.9,
    "votes": 122853,
    "revenue": 93380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ezcS78TIjgr85pVdaPDd2rSPVNs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Magnificent Seven is a Action directed by Antoine Fuqua.",
    "trailer": "https://www.youtube.com/watch?v=q-RBA0xoaWU"
  },
  {
    "id": 40,
    "title": "5- 25- 77",
    "year": 2007,
    "genre": [
      "Comedy"
    ],
    "director": "Patrick Read Johnson",
    "rating": 7.1,
    "votes": 241,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/jTi6pvvK5oiBPbQ4tYv3Djh97ir.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "5- 25- 77 is a Comedy directed by Patrick Read Johnson.",
    "trailer": "https://www.youtube.com/results?search_query=5-%2025-%2077%202007%20official%20trailer"
  },
  {
    "id": 41,
    "title": "Sausage Party",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Greg Tiernan",
    "rating": 6.3,
    "votes": 120690,
    "revenue": 97660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vNgdPJQ5CI60oEiiHLKRNrsDhMy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sausage Party is a Animation directed by Greg Tiernan.",
    "trailer": "https://www.youtube.com/watch?v=GAJrBPUVDJM"
  },
  {
    "id": 42,
    "title": "Moonlight",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Barry Jenkins",
    "rating": 7.5,
    "votes": 135095,
    "revenue": 27850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qLnfEmPrDjJfPyyddLJPkXmshkp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Moonlight is a Drama directed by Barry Jenkins.",
    "trailer": "https://www.youtube.com/watch?v=9NJj12tJzqc"
  },
  {
    "id": 43,
    "title": "Don't Fuck in the Woods",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Shawn Burkett",
    "rating": 2.7,
    "votes": 496,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/y3Q7Qkt67LXCEXSxpWlFY18G5WT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Don't Fuck in the Woods is a Horror directed by Shawn Burkett.",
    "trailer": "https://www.youtube.com/watch?v=gHzjml8t45M"
  },
  {
    "id": 44,
    "title": "The Founder",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "John Lee Hancock",
    "rating": 7.2,
    "votes": 37033,
    "revenue": 12790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8gLIksu5ggdfBL1UbeTeonHquxl.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Founder is a Biography directed by John Lee Hancock.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Founder%202016%20official%20trailer"
  },
  {
    "id": 45,
    "title": "Lowriders",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Ricardo de Montreuil",
    "rating": 6.3,
    "votes": 279,
    "revenue": 4210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mafycJVTwbsArAycD9yv1KzeAxH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lowriders is a Drama directed by Ricardo de Montreuil.",
    "trailer": "https://www.youtube.com/watch?v=6k0mm_cxzy0"
  },
  {
    "id": 46,
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Rob Marshall",
    "rating": 6.7,
    "votes": 395025,
    "revenue": 241060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pirates of the Caribbean: On Stranger Tides is a Action directed by Rob Marshall.",
    "trailer": "https://www.youtube.com/watch?v=0BXCVe8Yww4"
  },
  {
    "id": 47,
    "title": "Miss Sloane",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "John Madden",
    "rating": 7.3,
    "votes": 17818,
    "revenue": 3440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ptfvQlqe2xJiMSewSj52qAVq5z0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Miss Sloane is a Drama directed by John Madden.",
    "trailer": "https://www.youtube.com/watch?v=s9NRIUYvOfo"
  },
  {
    "id": 48,
    "title": "Fallen",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Scott Hicks",
    "rating": 5.6,
    "votes": 5103,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/sWGqNkWVr6JWL4grHFFGV3datuQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fallen is a Adventure directed by Scott Hicks.",
    "trailer": "https://www.youtube.com/results?search_query=Fallen%202016%20official%20trailer"
  },
  {
    "id": 49,
    "title": "Star Trek Beyond",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Justin Lin",
    "rating": 7.1,
    "votes": 164567,
    "revenue": 158800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cnQp8GmOWahIgQaH60Kwez3TNzw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Star Trek Beyond is a Action directed by Justin Lin.",
    "trailer": "https://www.youtube.com/watch?v=NwpvjQKdpvI"
  },
  {
    "id": 50,
    "title": "The Last Face",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Sean Penn",
    "rating": 3.7,
    "votes": 987,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/egOM3BJgA44fR6YdiQJD51iQ4On.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Last Face is a Drama directed by Sean Penn.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Last%20Face%202016%20official%20trailer"
  },
  {
    "id": 51,
    "title": "Star Wars: Episode VII - The Force Awakens",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "J.J. Abrams",
    "rating": 8.1,
    "votes": 661608,
    "revenue": 936630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Star Wars: Episode VII - The Force Awakens is a Action directed by J.J. Abrams.",
    "trailer": "https://www.youtube.com/watch?v=sGbxmsDFVnE"
  },
  {
    "id": 52,
    "title": "Underworld: Blood Wars",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Anna Foerster",
    "rating": 5.8,
    "votes": 41362,
    "revenue": 30350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/v1ciDCWMG47gdT4kMyjyQbnLQQn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Underworld: Blood Wars is a Action directed by Anna Foerster.",
    "trailer": "https://www.youtube.com/results?search_query=Underworld%3A%20Blood%20Wars%202016%20official%20trailer"
  },
  {
    "id": 53,
    "title": "Mother's Day",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Garry Marshall",
    "rating": 5.6,
    "votes": 20221,
    "revenue": 32460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1TGkhTsbkm2v1nMGJW0eTOFBjAd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mother's Day is a Comedy directed by Garry Marshall.",
    "trailer": "https://www.youtube.com/watch?v=dQMb6pxUU5E"
  },
  {
    "id": 54,
    "title": "John Wick",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Chad Stahelski",
    "rating": 7.2,
    "votes": 321933,
    "revenue": 43000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "John Wick is a Action directed by Chad Stahelski.",
    "trailer": "https://www.youtube.com/results?search_query=John%20Wick%202014%20official%20trailer"
  },
  {
    "id": 55,
    "title": "The Dark Knight",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Christopher Nolan",
    "rating": 9.0,
    "votes": 1791916,
    "revenue": 533320000.00000006,
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Dark Knight is a Action directed by Christopher Nolan.",
    "trailer": "https://www.youtube.com/watch?v=_PZpmTj1Q8Q"
  },
  {
    "id": 56,
    "title": "Silence",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Martin Scorsese",
    "rating": 7.3,
    "votes": 49190,
    "revenue": 7080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/x5T0cQDYws0xRBVG4Q3wpcrcmax.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Silence is a Adventure directed by Martin Scorsese.",
    "trailer": "https://www.youtube.com/watch?v=IqrgxZLd_gE"
  },
  {
    "id": 57,
    "title": "Don't Breathe",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Fede Alvarez",
    "rating": 7.2,
    "votes": 121103,
    "revenue": 89210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dSxHyPZ2nipSfvdft4IhQKjk5eZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Don't Breathe is a Crime directed by Fede Alvarez.",
    "trailer": "https://www.youtube.com/results?search_query=Don%27t%20Breathe%202016%20official%20trailer"
  },
  {
    "id": 58,
    "title": "Me Before You",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Thea Sharrock",
    "rating": 7.4,
    "votes": 113322,
    "revenue": 56230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Me Before You is a Drama directed by Thea Sharrock.",
    "trailer": "https://www.youtube.com/watch?v=T0MmkG_nG1U"
  },
  {
    "id": 59,
    "title": "Their Finest",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Lone Scherfig",
    "rating": 7.0,
    "votes": 3739,
    "revenue": 3180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tF0dhJfxzOjvkybJVfNPuuj5ClH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Their Finest is a Comedy directed by Lone Scherfig.",
    "trailer": "https://www.youtube.com/watch?v=GLj3l7eZRfA"
  },
  {
    "id": 60,
    "title": "Sully",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Clint Eastwood",
    "rating": 7.5,
    "votes": 137608,
    "revenue": 125070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4vs83YcJ8TsabADDtaeCJ6ZTjYY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sully is a Biography directed by Clint Eastwood.",
    "trailer": "https://www.youtube.com/watch?v=6Tbkbx4Hz8Q"
  },
  {
    "id": 61,
    "title": "Batman v Superman: Dawn of Justice",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Zack Snyder",
    "rating": 6.7,
    "votes": 472307,
    "revenue": 330250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Batman v Superman: Dawn of Justice is a Action directed by Zack Snyder.",
    "trailer": "https://www.youtube.com/watch?v=s9EkdAHqtvU"
  },
  {
    "id": 62,
    "title": "The Autopsy of Jane Doe",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Andr\u00e9 \u00d8vredal",
    "rating": 6.8,
    "votes": 35870,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/6K0wjP8kPCiPYy9PtXBGuypyt5I.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Autopsy of Jane Doe is a Horror directed by Andr\u00e9 \u00d8vredal.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Autopsy%20of%20Jane%20Doe%202016%20official%20trailer"
  },
  {
    "id": 63,
    "title": "The Girl on the Train",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Tate Taylor",
    "rating": 6.5,
    "votes": 102177,
    "revenue": 75310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AhTO2QWG0tug7yDoh0XoaMhPt3J.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Girl on the Train is a Crime directed by Tate Taylor.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Girl%20on%20the%20Train%202016%20official%20trailer"
  },
  {
    "id": 64,
    "title": "Fifty Shades of Grey",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Sam Taylor-Johnson",
    "rating": 4.1,
    "votes": 244474,
    "revenue": 166150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fifty Shades of Grey is a Drama directed by Sam Taylor-Johnson.",
    "trailer": "https://www.youtube.com/watch?v=6FDTMRK7-24"
  },
  {
    "id": 65,
    "title": "The Prestige",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Christopher Nolan",
    "rating": 8.5,
    "votes": 913152,
    "revenue": 53080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Prestige is a Drama directed by Christopher Nolan.",
    "trailer": "https://www.youtube.com/watch?v=ObGVA1WOqyE"
  },
  {
    "id": 66,
    "title": "Kingsman: The Secret Service",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Matthew Vaughn",
    "rating": 7.7,
    "votes": 440209,
    "revenue": 128250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kingsman: The Secret Service is a Action directed by Matthew Vaughn.",
    "trailer": "https://www.youtube.com/results?search_query=Kingsman%3A%20The%20Secret%20Service%202014%20official%20trailer"
  },
  {
    "id": 67,
    "title": "Patriots Day",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Peter Berg",
    "rating": 7.4,
    "votes": 39784,
    "revenue": 31860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mIDxsJTrOC7NhgOo3GziiHyKfsQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Patriots Day is a Drama directed by Peter Berg.",
    "trailer": "https://www.youtube.com/results?search_query=Patriots%20Day%202016%20official%20trailer"
  },
  {
    "id": 68,
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "George Miller",
    "rating": 8.1,
    "votes": 632842,
    "revenue": 153630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mad Max: Fury Road is a Action directed by George Miller.",
    "trailer": "https://www.youtube.com/results?search_query=Mad%20Max%3A%20Fury%20Road%202015%20official%20trailer"
  },
  {
    "id": 69,
    "title": "Wakefield",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Robin Swicord",
    "rating": 7.5,
    "votes": 291,
    "revenue": 10000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1SOw7s1g429ZnbJyKxGIXalSywR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wakefield is a Drama directed by Robin Swicord.",
    "trailer": "https://www.youtube.com/watch?v=E00DODio0Wk"
  },
  {
    "id": 70,
    "title": "Deepwater Horizon",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Peter Berg",
    "rating": 7.2,
    "votes": 89849,
    "revenue": 61280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jgBIYCZACe3iaS9TL2XzVGkO5p5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Deepwater Horizon is a Action directed by Peter Berg.",
    "trailer": "https://www.youtube.com/watch?v=S-UPJyEHmM0"
  },
  {
    "id": 71,
    "title": "The Promise",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Terry George",
    "rating": 5.9,
    "votes": 149791,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/iDWer2VFikupdqDc7d5sxCWZ3gW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Promise is a Drama directed by Terry George.",
    "trailer": "https://www.youtube.com/watch?v=gnwgMYeaqr4"
  },
  {
    "id": 72,
    "title": "Allied",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Robert Zemeckis",
    "rating": 7.1,
    "votes": 78079,
    "revenue": 40070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sV4lXM32quwminL3TP36nlNPp7Q.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Allied is a Action directed by Robert Zemeckis.",
    "trailer": "https://www.youtube.com/watch?v=qsjQlGNs3BY"
  },
  {
    "id": 73,
    "title": "A Monster Calls",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "J.A. Bayona",
    "rating": 7.5,
    "votes": 39134,
    "revenue": 3730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vNzWJwVqjszWwXrA7ZfsrJmhgV9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Monster Calls is a Drama directed by J.A. Bayona.",
    "trailer": "https://www.youtube.com/watch?v=8q-7trUd8Vw"
  },
  {
    "id": 74,
    "title": "Collateral Beauty",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "David Frankel",
    "rating": 6.8,
    "votes": 43977,
    "revenue": 30980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4vfqosgik5pLb32RpskYifp8PWJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Collateral Beauty is a Drama directed by David Frankel.",
    "trailer": "https://www.youtube.com/results?search_query=Collateral%20Beauty%202016%20official%20trailer"
  },
  {
    "id": 75,
    "title": "Zootopia",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Byron Howard",
    "rating": 8.1,
    "votes": 296853,
    "revenue": 341260000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zootopia is a Animation directed by Byron Howard.",
    "trailer": "https://www.youtube.com/watch?v=jWM0ct-OLsM"
  },
  {
    "id": 76,
    "title": "Pirates of the Caribbean: At World's End",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Gore Verbinski",
    "rating": 7.1,
    "votes": 498821,
    "revenue": 309400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pirates of the Caribbean: At World's End is a Action directed by Gore Verbinski.",
    "trailer": "https://www.youtube.com/results?search_query=Pirates%20of%20the%20Caribbean%3A%20At%20World%27s%20End%202007%20official%20trailer"
  },
  {
    "id": 77,
    "title": "The Avengers",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Joss Whedon",
    "rating": 8.1,
    "votes": 1045588,
    "revenue": 623280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Avengers is a Action directed by Joss Whedon.",
    "trailer": "https://www.youtube.com/watch?v=hIR8Ar-Z4hw"
  },
  {
    "id": 78,
    "title": "Inglourious Basterds",
    "year": 2009,
    "genre": [
      "Adventure"
    ],
    "director": "Quentin Tarantino",
    "rating": 8.3,
    "votes": 959065,
    "revenue": 120520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aupnPtagH9JVBuMrGEanf4iqXEQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inglourious Basterds is a Adventure directed by Quentin Tarantino.",
    "trailer": "https://www.youtube.com/watch?v=uSEDz-my7XQ"
  },
  {
    "id": 79,
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Gore Verbinski",
    "rating": 7.3,
    "votes": 552027,
    "revenue": 423030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pirates of the Caribbean: Dead Man's Chest is a Action directed by Gore Verbinski.",
    "trailer": "https://www.youtube.com/results?search_query=Pirates%20of%20the%20Caribbean%3A%20Dead%20Man%27s%20Chest%202006%20official%20trailer"
  },
  {
    "id": 80,
    "title": "Ghostbusters",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Paul Feig",
    "rating": 5.3,
    "votes": 147717,
    "revenue": 128340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wJmWliwXIgZOCCVOcGRBhce7xPS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ghostbusters is a Action directed by Paul Feig.",
    "trailer": "https://www.youtube.com/watch?v=3_5F998AFug"
  },
  {
    "id": 81,
    "title": "Inception",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Christopher Nolan",
    "rating": 8.8,
    "votes": 1583625,
    "revenue": 292570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inception is a Action directed by Christopher Nolan.",
    "trailer": "https://www.youtube.com/watch?v=cdx31ak4KbQ"
  },
  {
    "id": 82,
    "title": "Captain Fantastic",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Matt Ross",
    "rating": 7.9,
    "votes": 105081,
    "revenue": 5880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2sFME73GaD8UsUxPUKe60cPdLif.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Captain Fantastic is a Comedy directed by Matt Ross.",
    "trailer": "https://www.youtube.com/watch?v=w5jeBvjcJe4"
  },
  {
    "id": 83,
    "title": "The Wolf of Wall Street",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Martin Scorsese",
    "rating": 8.2,
    "votes": 865134,
    "revenue": 116870000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Wolf of Wall Street is a Biography directed by Martin Scorsese.",
    "trailer": "https://www.youtube.com/watch?v=Slj4-Sv-YNA"
  },
  {
    "id": 84,
    "title": "Gone Girl",
    "year": 2014,
    "genre": [
      "Crime"
    ],
    "director": "David Fincher",
    "rating": 8.1,
    "votes": 636243,
    "revenue": 167740000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gone Girl is a Crime directed by David Fincher.",
    "trailer": "https://www.youtube.com/watch?v=e1AZgJg3OEA"
  },
  {
    "id": 85,
    "title": "Furious Seven",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "James Wan",
    "rating": 7.2,
    "votes": 301249,
    "revenue": 350030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Furious Seven is a Action directed by James Wan.",
    "trailer": "https://www.youtube.com/watch?v=B3Ms2yFvus0"
  },
  {
    "id": 86,
    "title": "Jurassic World",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Colin Trevorrow",
    "rating": 7.0,
    "votes": 455169,
    "revenue": 652180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jurassic World is a Action directed by Colin Trevorrow.",
    "trailer": "https://www.youtube.com/watch?v=aJJrkyHas78"
  },
  {
    "id": 87,
    "title": "Live by Night",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Ben Affleck",
    "rating": 6.4,
    "votes": 27869,
    "revenue": 10380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bkd46T4RplawnDjpHoI8mhzTLks.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Live by Night is a Crime directed by Ben Affleck.",
    "trailer": "https://www.youtube.com/watch?v=ClcQUlXcCKw"
  },
  {
    "id": 88,
    "title": "Avatar",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "James Cameron",
    "rating": 7.8,
    "votes": 935408,
    "revenue": 760510000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Avatar is a Action directed by James Cameron.",
    "trailer": "https://www.youtube.com/watch?v=LgZ2MDuJvhc"
  },
  {
    "id": 89,
    "title": "The Hateful Eight",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Quentin Tarantino",
    "rating": 7.8,
    "votes": 341170,
    "revenue": 54120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hateful Eight is a Crime directed by Quentin Tarantino.",
    "trailer": "https://www.youtube.com/watch?v=GRG7fAPksbg"
  },
  {
    "id": 90,
    "title": "The Accountant",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Gavin O'Connor",
    "rating": 7.4,
    "votes": 162122,
    "revenue": 86200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fceheXB5fC4WrLVuWJ6OZv9FXYr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Accountant is a Action directed by Gavin O'Connor.",
    "trailer": "https://www.youtube.com/watch?v=RwXDphhQ9Tg"
  },
  {
    "id": 91,
    "title": "Prisoners",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "Denis Villeneuve",
    "rating": 8.1,
    "votes": 431185,
    "revenue": 60960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Prisoners is a Crime directed by Denis Villeneuve.",
    "trailer": "https://www.youtube.com/results?search_query=Prisoners%202013%20official%20trailer"
  },
  {
    "id": 92,
    "title": "Warcraft",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Duncan Jones",
    "rating": 7.0,
    "votes": 187547,
    "revenue": 47170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eGi5aoxaZveqNLtE7BZJCuWwR3G.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Warcraft is a Action directed by Duncan Jones.",
    "trailer": "https://www.youtube.com/watch?v=65AjY_nRdqE"
  },
  {
    "id": 93,
    "title": "The Help",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Tate Taylor",
    "rating": 8.1,
    "votes": 342429,
    "revenue": 169710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3kmfoWWEc9Vtyuaf9v5VipRgdjx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Help is a Drama directed by Tate Taylor.",
    "trailer": "https://www.youtube.com/watch?v=3eajzW3XW7Q"
  },
  {
    "id": 94,
    "title": "War Dogs",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Todd Phillips",
    "rating": 7.1,
    "votes": 106463,
    "revenue": 43020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mDcPRjZC1bb6LavFU3gwsWdVfCM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "War Dogs is a Comedy directed by Todd Phillips.",
    "trailer": "https://www.youtube.com/results?search_query=War%20Dogs%202016%20official%20trailer"
  },
  {
    "id": 95,
    "title": "Avengers: Age of Ultron",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Joss Whedon",
    "rating": 7.4,
    "votes": 516895,
    "revenue": 458990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Avengers: Age of Ultron is a Action directed by Joss Whedon.",
    "trailer": "https://www.youtube.com/watch?v=JAUoeqvedMo"
  },
  {
    "id": 96,
    "title": "The Nice Guys",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Shane Black",
    "rating": 7.4,
    "votes": 175067,
    "revenue": 36250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/clq4So9spa9cXk3MZy2iMdqkxP2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Nice Guys is a Action directed by Shane Black.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Nice%20Guys%202016%20official%20trailer"
  },
  {
    "id": 97,
    "title": "Kimi no na wa",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Makoto Shinkai",
    "rating": 8.6,
    "votes": 34110,
    "revenue": 4680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vfJFJPepRKapMd5G2ro7klIRysq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kimi no na wa is a Animation directed by Makoto Shinkai.",
    "trailer": "https://www.youtube.com/watch?v=TYku4P7MHdo"
  },
  {
    "id": 98,
    "title": "The Void",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Jeremy Gillespie",
    "rating": 5.8,
    "votes": 9247,
    "revenue": 150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xY6DmuBP6xSxs2TtPXkcP9wIXdd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Void is a Horror directed by Jeremy Gillespie.",
    "trailer": "https://www.youtube.com/watch?v=IkmSNt4moNg"
  },
  {
    "id": 99,
    "title": "Personal Shopper",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Olivier Assayas",
    "rating": 6.3,
    "votes": 10181,
    "revenue": 1290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cdm6qZgmbaIwjKBZnUSGWS4eyM2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Personal Shopper is a Drama directed by Olivier Assayas.",
    "trailer": "https://www.youtube.com/watch?v=xC8AjoqpBAY"
  },
  {
    "id": 100,
    "title": "The Departed",
    "year": 2006,
    "genre": [
      "Crime"
    ],
    "director": "Martin Scorsese",
    "rating": 8.5,
    "votes": 937414,
    "revenue": 132370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Departed is a Crime directed by Martin Scorsese.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Departed%202006%20official%20trailer"
  },
  {
    "id": 101,
    "title": "Legend",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Brian Helgeland",
    "rating": 7.0,
    "votes": 108836,
    "revenue": 1870000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4shf5Alq4KWCKqrAAQe0JGJHYp5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Legend is a Biography directed by Brian Helgeland.",
    "trailer": "https://www.youtube.com/results?search_query=Legend%202015%20official%20trailer"
  },
  {
    "id": 102,
    "title": "Thor",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Kenneth Branagh",
    "rating": 7.0,
    "votes": 570814,
    "revenue": 181020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Thor is a Action directed by Kenneth Branagh.",
    "trailer": "https://www.youtube.com/results?search_query=Thor%202011%20official%20trailer"
  },
  {
    "id": 103,
    "title": "The Martian",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Ridley Scott",
    "rating": 8.0,
    "votes": 556097,
    "revenue": 228430000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fASz8A0yFE3QB6LgGoOfwvFSseV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Martian is a Adventure directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Martian%202015%20official%20trailer"
  },
  {
    "id": 104,
    "title": "Contratiempo",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Oriol Paulo",
    "rating": 7.9,
    "votes": 7204,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Contratiempo is a Crime directed by Oriol Paulo.",
    "trailer": "https://www.youtube.com/watch?v=epCg2RbyF80"
  },
  {
    "id": 105,
    "title": "The Man from U.N.C.L.E.",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Guy Ritchie",
    "rating": 7.3,
    "votes": 202973,
    "revenue": 45430000.0,
    "poster": "https://image.tmdb.org/t/p/w500/y5yZaForGSJbPD66Cvq9AT5WMAD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Man from U.N.C.L.E. is a Action directed by Guy Ritchie.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Man%20from%20U.N.C.L.E.%202015%20official%20trailer"
  },
  {
    "id": 106,
    "title": "Hell or High Water",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "David Mackenzie",
    "rating": 7.7,
    "votes": 115546,
    "revenue": 26860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ljRRxqy2aXIkIBXLmOVifcOR021.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hell or High Water is a Crime directed by David Mackenzie.",
    "trailer": "https://www.youtube.com/watch?v=igD-fXiHRRY"
  },
  {
    "id": 107,
    "title": "The Comedian",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Taylor Hackford",
    "rating": 5.4,
    "votes": 1954,
    "revenue": 1660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jR7PZd7K0dFT6oL9qhbSsiJXDsR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Comedian is a Comedy directed by Taylor Hackford.",
    "trailer": "https://www.youtube.com/watch?v=QJit_DU2XhM"
  },
  {
    "id": 108,
    "title": "The Legend of Tarzan",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "David Yates",
    "rating": 6.3,
    "votes": 117590,
    "revenue": 126590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eJrfz178xBGlxjDGxnBXTzWWa4w.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Legend of Tarzan is a Action directed by David Yates.",
    "trailer": "https://www.youtube.com/watch?v=dLmKio67pVQ"
  },
  {
    "id": 109,
    "title": "All We Had",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Katie Holmes",
    "rating": 5.8,
    "votes": 1004,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/fnOb1xstKaHY6IR3ujPPobGR6DX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "All We Had is a Drama directed by Katie Holmes.",
    "trailer": "https://www.youtube.com/results?search_query=All%20We%20Had%202016%20official%20trailer"
  },
  {
    "id": 110,
    "title": "Ex Machina",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Alex Garland",
    "rating": 7.7,
    "votes": 339797,
    "revenue": 25440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ex Machina is a Drama directed by Alex Garland.",
    "trailer": "https://www.youtube.com/watch?v=sDkEF7Db7Gw"
  },
  {
    "id": 111,
    "title": "The Belko Experiment",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Greg McLean",
    "rating": 6.3,
    "votes": 3712,
    "revenue": 10160000.0,
    "poster": "https://image.tmdb.org/t/p/w500/faJK0dP3S92kQoKtO4LZMjy41kf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Belko Experiment is a Action directed by Greg McLean.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Belko%20Experiment%202016%20official%20trailer"
  },
  {
    "id": 112,
    "title": "12 Years a Slave",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Steve McQueen",
    "rating": 8.1,
    "votes": 486338,
    "revenue": 56670000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "12 Years a Slave is a Biography directed by Steve McQueen.",
    "trailer": "https://www.youtube.com/watch?v=9WeM8a9CJNs"
  },
  {
    "id": 113,
    "title": "The Bad Batch",
    "year": 2016,
    "genre": [
      "Romance"
    ],
    "director": "Ana Lily Amirpour",
    "rating": 6.1,
    "votes": 512,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/7o14VaMphEIzPwzeW6FP3A6zb4W.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Bad Batch is a Romance directed by Ana Lily Amirpour.",
    "trailer": "https://www.youtube.com/watch?v=4aJeVSMaf20"
  },
  {
    "id": 114,
    "title": "300",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Zack Snyder",
    "rating": 7.7,
    "votes": 637104,
    "revenue": 210590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/h7Lcio0c9ohxPhSZg42eTlKIVVY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "300 is a Action directed by Zack Snyder.",
    "trailer": "https://www.youtube.com/results?search_query=300%202006%20official%20trailer"
  },
  {
    "id": 115,
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "year": 2011,
    "genre": [
      "Adventure"
    ],
    "director": "David Yates",
    "rating": 8.1,
    "votes": 590595,
    "revenue": 380960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Harry Potter and the Deathly Hallows: Part 2 is a Adventure directed by David Yates.",
    "trailer": "https://www.youtube.com/watch?v=kwM3kN8PNOc"
  },
  {
    "id": 116,
    "title": "Office Christmas Party",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Josh Gordon",
    "rating": 5.8,
    "votes": 30761,
    "revenue": 54730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7r3w3cPTbNEIr1imb8zXyeIJCJe.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Office Christmas Party is a Comedy directed by Josh Gordon.",
    "trailer": "https://www.youtube.com/results?search_query=Office%20Christmas%20Party%202016%20official%20trailer"
  },
  {
    "id": 117,
    "title": "The Neon Demon",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Nicolas Winding Refn",
    "rating": 6.2,
    "votes": 50359,
    "revenue": 1330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/d93h9dHIez9zRg4ooG6o1ZiQ776.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Neon Demon is a Horror directed by Nicolas Winding Refn.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Neon%20Demon%202016%20official%20trailer"
  },
  {
    "id": 118,
    "title": "Dangal",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Nitesh Tiwari",
    "rating": 8.8,
    "votes": 48969,
    "revenue": 11150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dangal is a Action directed by Nitesh Tiwari.",
    "trailer": "https://www.youtube.com/watch?v=x_7YlGv9u1g"
  },
  {
    "id": 119,
    "title": "10 Cloverfield Lane",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Dan Trachtenberg",
    "rating": 7.2,
    "votes": 192968,
    "revenue": 71900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/q8A39vcBDruhvoDTJd6L8a4lnTi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "10 Cloverfield Lane is a Drama directed by Dan Trachtenberg.",
    "trailer": "https://www.youtube.com/watch?v=yQy-ANhnUpE"
  },
  {
    "id": 120,
    "title": "Finding Dory",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Andrew Stanton",
    "rating": 7.4,
    "votes": 157026,
    "revenue": 486290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Finding Dory is a Animation directed by Andrew Stanton.",
    "trailer": "https://www.youtube.com/watch?v=NQu-153MnGQ"
  },
  {
    "id": 121,
    "title": "Miss Peregrine's Home for Peculiar Children",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Tim Burton",
    "rating": 6.7,
    "votes": 101058,
    "revenue": 87240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/CIlbMFOfYDj0MP23hsIYhFGrL6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Miss Peregrine's Home for Peculiar Children is a Adventure directed by Tim Burton.",
    "trailer": "https://www.youtube.com/watch?v=Rv7pPYhg46E"
  },
  {
    "id": 122,
    "title": "Divergent",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Neil Burger",
    "rating": 6.7,
    "votes": 362093,
    "revenue": 150830000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aNh4Q3iuPKDMPi2SL7GgOpiLukX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Divergent is a Adventure directed by Neil Burger.",
    "trailer": "https://www.youtube.com/watch?v=WI1Jqx47Uw8"
  },
  {
    "id": 123,
    "title": "Mike and Dave Need Wedding Dates",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Jake Szymanski",
    "rating": 6.0,
    "votes": 53183,
    "revenue": 46010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/alWBdyvXf1LSixnn1IfID5HMtLx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mike and Dave Need Wedding Dates is a Adventure directed by Jake Szymanski.",
    "trailer": "https://www.youtube.com/results?search_query=Mike%20and%20Dave%20Need%20Wedding%20Dates%202016%20official%20trailer"
  },
  {
    "id": 124,
    "title": "Boyka: Undisputed IV",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Todor Chapkanov",
    "rating": 7.4,
    "votes": 10428,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/7QGdIJWWTkPhVjpQ0zA6z69khod.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Boyka: Undisputed IV is a Action directed by Todor Chapkanov.",
    "trailer": "https://www.youtube.com/results?search_query=Boyka%3A%20Undisputed%20IV%202016%20official%20trailer"
  },
  {
    "id": 125,
    "title": "The Dark Knight Rises",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Christopher Nolan",
    "rating": 8.5,
    "votes": 1222645,
    "revenue": 448130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Dark Knight Rises is a Action directed by Christopher Nolan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Dark%20Knight%20Rises%202012%20official%20trailer"
  },
  {
    "id": 126,
    "title": "The Jungle Book",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Jon Favreau",
    "rating": 7.5,
    "votes": 198243,
    "revenue": 364000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2Epx7F9X7DrFptn4seqn4mzBVks.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Jungle Book is a Adventure directed by Jon Favreau.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Jungle%20Book%202016%20official%20trailer"
  },
  {
    "id": 127,
    "title": "Transformers: Age of Extinction",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Michael Bay",
    "rating": 5.7,
    "votes": 255483,
    "revenue": 245430000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Transformers: Age of Extinction is a Action directed by Michael Bay.",
    "trailer": "https://www.youtube.com/watch?v=glcOSZrUw2Q"
  },
  {
    "id": 128,
    "title": "Nerve",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Henry Joost",
    "rating": 6.6,
    "votes": 69651,
    "revenue": 38560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qmSpHC0CSNyNll9WhlwWYuwoQ28.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Nerve is a Adventure directed by Henry Joost.",
    "trailer": "https://www.youtube.com/watch?v=woYHFcMVtlw"
  },
  {
    "id": 129,
    "title": "Mamma Mia!",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Phyllida Lloyd",
    "rating": 6.4,
    "votes": 153481,
    "revenue": 143700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xYLiCWmAMHJubx5jNZ7HuXKjAbV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mamma Mia! is a Comedy directed by Phyllida Lloyd.",
    "trailer": "https://www.youtube.com/watch?v=8RBNHdG35WY"
  },
  {
    "id": 130,
    "title": "The Revenant",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
    "rating": 8.0,
    "votes": 499424,
    "revenue": 183640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Revenant is a Adventure directed by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Revenant%202015%20official%20trailer"
  },
  {
    "id": 131,
    "title": "Fences",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Denzel Washington",
    "rating": 7.3,
    "votes": 50953,
    "revenue": 57640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8NvnB8aeWQvBEz2ruN4g313j991.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fences is a Drama directed by Denzel Washington.",
    "trailer": "https://www.youtube.com/watch?v=spCxVd9ctFs"
  },
  {
    "id": 132,
    "title": "Into the Woods",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Rob Marshall",
    "rating": 6.0,
    "votes": 109756,
    "revenue": 128000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bINGDDuvUnZyde2sIcSx41IE5b6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Into the Woods is a Adventure directed by Rob Marshall.",
    "trailer": "https://www.youtube.com/watch?v=dRgr7itwgak"
  },
  {
    "id": 133,
    "title": "The Shallows",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Jaume Collet-Serra",
    "rating": 6.4,
    "votes": 78328,
    "revenue": 55120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bnBV7hZmLuA0Si5Aop481sPF2RY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Shallows is a Drama directed by Jaume Collet-Serra.",
    "trailer": "https://www.youtube.com/watch?v=EgdxIlSuB70"
  },
  {
    "id": 134,
    "title": "Whiplash",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Damien Chazelle",
    "rating": 8.5,
    "votes": 477276,
    "revenue": 13090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Whiplash is a Drama directed by Damien Chazelle.",
    "trailer": "https://www.youtube.com/watch?v=Q7kZy3T6vRM"
  },
  {
    "id": 135,
    "title": "Furious 6",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Justin Lin",
    "rating": 7.1,
    "votes": 318051,
    "revenue": 238670000.0,
    "poster": "https://image.tmdb.org/t/p/w500/thSmnRdrzPBBospIOJjLZBReqzo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Furious 6 is a Action directed by Justin Lin.",
    "trailer": "https://www.youtube.com/results?search_query=Furious%206%202013%20official%20trailer"
  },
  {
    "id": 136,
    "title": "The Place Beyond the Pines",
    "year": 2012,
    "genre": [
      "Crime"
    ],
    "director": "Derek Cianfrance",
    "rating": 7.3,
    "votes": 200090,
    "revenue": 21380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vY5j2xQzMGWmxBuhQo0HfA4Lxqb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Place Beyond the Pines is a Crime directed by Derek Cianfrance.",
    "trailer": "https://www.youtube.com/watch?v=M7Bt0NtDzTU"
  },
  {
    "id": 137,
    "title": "No Country for Old Men",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Ethan Coen",
    "rating": 8.1,
    "votes": 660286,
    "revenue": 74270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "No Country for Old Men is a Crime directed by Ethan Coen.",
    "trailer": "https://www.youtube.com/watch?v=A0oNrgumrlE"
  },
  {
    "id": 138,
    "title": "The Great Gatsby",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Baz Luhrmann",
    "rating": 7.3,
    "votes": 386102,
    "revenue": 144810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nimh1rrDDLhgpG8XAYoUZXHYwb6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Great Gatsby is a Drama directed by Baz Luhrmann.",
    "trailer": "https://www.youtube.com/watch?v=l6yANES3TMM"
  },
  {
    "id": 139,
    "title": "Shutter Island",
    "year": 2010,
    "genre": [
      "Mystery"
    ],
    "director": "Martin Scorsese",
    "rating": 8.1,
    "votes": 855604,
    "revenue": 127970000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Shutter Island is a Mystery directed by Martin Scorsese.",
    "trailer": "https://www.youtube.com/watch?v=qdPw9x9h5CY"
  },
  {
    "id": 140,
    "title": "Brimstone",
    "year": 2016,
    "genre": [
      "Mystery"
    ],
    "director": "Martin Koolhoven",
    "rating": 7.1,
    "votes": 13004,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/aNxU4eZrfiChOgCEtyKWSCExdEi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Brimstone is a Mystery directed by Martin Koolhoven.",
    "trailer": "https://www.youtube.com/watch?v=aq7bglR5Zc0"
  },
  {
    "id": 141,
    "title": "Star Trek",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "J.J. Abrams",
    "rating": 8.0,
    "votes": 526324,
    "revenue": 257700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9vaRPXj44Q2meHgt3VVfQufiHOJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Star Trek is a Action directed by J.J. Abrams.",
    "trailer": "https://www.youtube.com/watch?v=pFVvigZ5wQY"
  },
  {
    "id": 142,
    "title": "Diary of a Wimpy Kid",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Thor Freudenthal",
    "rating": 6.2,
    "votes": 34184,
    "revenue": 64000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iLAGiPnSuODt9cn332bkFElrRig.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Diary of a Wimpy Kid is a Comedy directed by Thor Freudenthal.",
    "trailer": "https://www.youtube.com/watch?v=It4DJi918z4"
  },
  {
    "id": 143,
    "title": "The Big Short",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Adam McKay",
    "rating": 7.8,
    "votes": 246360,
    "revenue": 70240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/scVEaJEwP8zUix8vgmMoJJ9Nq0w.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Big Short is a Biography directed by Adam McKay.",
    "trailer": "https://www.youtube.com/watch?v=1kQc3mmtH-o"
  },
  {
    "id": 144,
    "title": "Room",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Lenny Abrahamson",
    "rating": 8.2,
    "votes": 224132,
    "revenue": 14680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2hHDMeYyZjbGWn0BeNH1cTMxuM7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Room is a Drama directed by Lenny Abrahamson.",
    "trailer": "https://www.youtube.com/watch?v=3ba5JNnkMzs"
  },
  {
    "id": 145,
    "title": "Django Unchained",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Quentin Tarantino",
    "rating": 8.4,
    "votes": 1039115,
    "revenue": 162800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Django Unchained is a Drama directed by Quentin Tarantino.",
    "trailer": "https://www.youtube.com/watch?v=_iH0UBYDI4g"
  },
  {
    "id": 146,
    "title": "Ah-ga-ssi",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Chan-wook Park",
    "rating": 8.1,
    "votes": 33418,
    "revenue": 2009999.9999999998,
    "poster": "https://image.tmdb.org/t/p/w500/dLlH4aNHdnmf62umnInL8xPlPzw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ah-ga-ssi is a Drama directed by Chan-wook Park.",
    "trailer": "https://www.youtube.com/results?search_query=Ah-ga-ssi%202016%20official%20trailer"
  },
  {
    "id": 147,
    "title": "The Edge of Seventeen",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Kelly Fremon Craig",
    "rating": 7.4,
    "votes": 47694,
    "revenue": 14260000.0,
    "poster": "https://image.tmdb.org/t/p/w500/15FykQKiM0aYpC1MuybR43xl8eF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Edge of Seventeen is a Comedy directed by Kelly Fremon Craig.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Edge%20of%20Seventeen%202016%20official%20trailer"
  },
  {
    "id": 148,
    "title": "Watchmen",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Zack Snyder",
    "rating": 7.6,
    "votes": 410249,
    "revenue": 107500000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aVURelN3pM56lFM7Dgfs5TixcIf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Watchmen is a Action directed by Zack Snyder.",
    "trailer": "https://www.youtube.com/results?search_query=Watchmen%202009%20official%20trailer"
  },
  {
    "id": 149,
    "title": "Superbad",
    "year": 2007,
    "genre": [
      "Comedy"
    ],
    "director": "Greg Mottola",
    "rating": 7.6,
    "votes": 442082,
    "revenue": 121460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Superbad is a Comedy directed by Greg Mottola.",
    "trailer": "https://www.youtube.com/watch?v=MuhWxdD0qno"
  },
  {
    "id": 150,
    "title": "Inferno",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Ron Howard",
    "rating": 6.2,
    "votes": 97623,
    "revenue": 34260000.0,
    "poster": "https://image.tmdb.org/t/p/w500/smaWxdIMH24gD96lKNe1a036LVG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inferno is a Action directed by Ron Howard.",
    "trailer": "https://www.youtube.com/results?search_query=Inferno%202016%20official%20trailer"
  },
  {
    "id": 151,
    "title": "The BFG",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Steven Spielberg",
    "rating": 6.4,
    "votes": 50853,
    "revenue": 55470000.0,
    "poster": "https://image.tmdb.org/t/p/w500/w17Mc2x2olB5CtewznUFxgpvne0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The BFG is a Adventure directed by Steven Spielberg.",
    "trailer": "https://www.youtube.com/watch?v=Y6ZbRD1T7uI"
  },
  {
    "id": 152,
    "title": "The Hunger Games",
    "year": 2012,
    "genre": [
      "Adventure"
    ],
    "director": "Gary Ross",
    "rating": 7.2,
    "votes": 735604,
    "revenue": 408000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/apa5G43Hha7kH7wJG0gkkHT7FA9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hunger Games is a Adventure directed by Gary Ross.",
    "trailer": "https://www.youtube.com/watch?v=qoUT7q2iTbQ"
  },
  {
    "id": 153,
    "title": "White Girl",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Elizabeth Wood",
    "rating": 5.8,
    "votes": 4299,
    "revenue": 200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kng43UXWxdYAkst1ggnX4PfOe5Z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "White Girl is a Drama directed by Elizabeth Wood.",
    "trailer": "https://www.youtube.com/results?search_query=White%20Girl%202016%20official%20trailer"
  },
  {
    "id": 154,
    "title": "Sicario",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Denis Villeneuve",
    "rating": 7.6,
    "votes": 243230,
    "revenue": 46880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lz8vNyXeidqqOdJW9ZjnDAMb5Vr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sicario is a Action directed by Denis Villeneuve.",
    "trailer": "https://www.youtube.com/watch?v=Yfhu5JIxnZc"
  },
  {
    "id": 155,
    "title": "Twin Peaks: The Missing Pieces",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "David Lynch",
    "rating": 8.1,
    "votes": 1973,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/xQevnHeRxlQTfXQ5RxXJE4PnVUO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Twin Peaks: The Missing Pieces is a Drama directed by David Lynch.",
    "trailer": "https://www.youtube.com/watch?v=g5EqPZMZO4s"
  },
  {
    "id": 156,
    "title": "Aliens vs Predator - Requiem",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Colin Strause",
    "rating": 4.7,
    "votes": 97618,
    "revenue": 41800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5iTwPDNtvK6ZZF607BHBbU3HO0B.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Aliens vs Predator - Requiem is a Action directed by Colin Strause.",
    "trailer": "https://www.youtube.com/watch?v=XbTWLrZLYmU"
  },
  {
    "id": 157,
    "title": "Pacific Rim",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Guillermo del Toro",
    "rating": 7.0,
    "votes": 400519,
    "revenue": 101790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8wo4eN8dWKaKlxhSvBz19uvj8gA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pacific Rim is a Action directed by Guillermo del Toro.",
    "trailer": "https://www.youtube.com/watch?v=iqQUjXAJ-ag"
  },
  {
    "id": 158,
    "title": "Crazy, Stupid, Love.",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Glenn Ficarra",
    "rating": 7.4,
    "votes": 396714,
    "revenue": 84240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/p4RafgAPk558muOjnBMHhMArjS2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Crazy, Stupid, Love. is a Comedy directed by Glenn Ficarra.",
    "trailer": "https://www.youtube.com/watch?v=W7U03cW7k-Y"
  },
  {
    "id": 159,
    "title": "Scott Pilgrim vs. the World",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Edgar Wright",
    "rating": 7.5,
    "votes": 291457,
    "revenue": 31490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Scott Pilgrim vs. the World is a Action directed by Edgar Wright.",
    "trailer": "https://www.youtube.com/results?search_query=Scott%20Pilgrim%20vs.%20the%20World%202010%20official%20trailer"
  },
  {
    "id": 160,
    "title": "Hot Fuzz",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Edgar Wright",
    "rating": 7.9,
    "votes": 373244,
    "revenue": 23620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zPib4ukTSdXvHP9pxGkFCe34f3y.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hot Fuzz is a Action directed by Edgar Wright.",
    "trailer": "https://www.youtube.com/watch?v=L6PKkxn7pq0"
  },
  {
    "id": 161,
    "title": "Mine",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Fabio Guaglione",
    "rating": 6.0,
    "votes": 5926,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/dYmkd3azwbamZ3wsIsMXQY5evjH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mine is a Thriller directed by Fabio Guaglione.",
    "trailer": "https://www.youtube.com/watch?v=hzUj42eaHEc"
  },
  {
    "id": 162,
    "title": "Free Fire",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Ben Wheatley",
    "rating": 7.0,
    "votes": 6946,
    "revenue": 1800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/olpgs0OPE8sdBGcuuWhKYzxAwN4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Free Fire is a Action directed by Ben Wheatley.",
    "trailer": "https://www.youtube.com/watch?v=iverhjhXlFM"
  },
  {
    "id": 163,
    "title": "X-Men: Days of Future Past",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Bryan Singer",
    "rating": 8.0,
    "votes": 552298,
    "revenue": 233910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "X-Men: Days of Future Past is a Action directed by Bryan Singer.",
    "trailer": "https://www.youtube.com/watch?v=gsjtg7m1MMM"
  },
  {
    "id": 164,
    "title": "Jack Reacher",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Edward Zwick",
    "rating": 6.1,
    "votes": 78043,
    "revenue": 58400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cOg3UT2NYWHZxp41vpxAnVCOC4M.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jack Reacher is a Action directed by Edward Zwick.",
    "trailer": "https://www.youtube.com/results?search_query=Jack%20Reacher%202016%20official%20trailer"
  },
  {
    "id": 165,
    "title": "Casino Royale",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Martin Campbell",
    "rating": 8.0,
    "votes": 495106,
    "revenue": 167010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lMrxYKKhd4lqRzwUHAy5gcx9PSO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Casino Royale is a Action directed by Martin Campbell.",
    "trailer": "https://www.youtube.com/watch?v=U4NT78c-pYs"
  },
  {
    "id": 166,
    "title": "Twilight",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Catherine Hardwicke",
    "rating": 5.2,
    "votes": 361449,
    "revenue": 191450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Twilight is a Drama directed by Catherine Hardwicke.",
    "trailer": "https://www.youtube.com/watch?v=uxjNDE2fMjI"
  },
  {
    "id": 167,
    "title": "Now You See Me 2",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Jon M. Chu",
    "rating": 6.5,
    "votes": 156567,
    "revenue": 65030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/A81kDB6a1K86YLlcOtZB27jriJh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Now You See Me 2 is a Action directed by Jon M. Chu.",
    "trailer": "https://www.youtube.com/watch?v=JzZh8kJJwe4"
  },
  {
    "id": 168,
    "title": "Woman in Gold",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Simon Curtis",
    "rating": 7.3,
    "votes": 39723,
    "revenue": 33310000.000000004,
    "poster": "https://image.tmdb.org/t/p/w500/6eoj6bozvgwNuDV3vOrqlvrCrX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Woman in Gold is a Biography directed by Simon Curtis.",
    "trailer": "https://www.youtube.com/watch?v=wu9JeTX6Sdw"
  },
  {
    "id": 169,
    "title": "13 Hours",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Michael Bay",
    "rating": 7.3,
    "votes": 76935,
    "revenue": 52820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fZlAxZMo6BId1SiqyjLmkd7oUB7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "13 Hours is a Action directed by Michael Bay.",
    "trailer": "https://www.youtube.com/watch?v=Wpsqh73gB78"
  },
  {
    "id": 170,
    "title": "Spectre",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Sam Mendes",
    "rating": 6.8,
    "votes": 308981,
    "revenue": 200070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zj8ongFhtWNsVlfjOGo8pSr7PQg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Spectre is a Action directed by Sam Mendes.",
    "trailer": "https://www.youtube.com/watch?v=z4UDNzXD3qA"
  },
  {
    "id": 171,
    "title": "Nightcrawler",
    "year": 2014,
    "genre": [
      "Crime"
    ],
    "director": "Dan Gilroy",
    "rating": 7.9,
    "votes": 332476,
    "revenue": 32280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Nightcrawler is a Crime directed by Dan Gilroy.",
    "trailer": "https://www.youtube.com/watch?v=7uaYhPpV7G4"
  },
  {
    "id": 172,
    "title": "Kubo and the Two Strings",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Travis Knight",
    "rating": 7.9,
    "votes": 72778,
    "revenue": 48020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ewcOCkuuKAKULGUnbBVaO1htt0D.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kubo and the Two Strings is a Animation directed by Travis Knight.",
    "trailer": "https://www.youtube.com/results?search_query=Kubo%20and%20the%20Two%20Strings%202016%20official%20trailer"
  },
  {
    "id": 173,
    "title": "Beyond the Gates",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Jackson Stewart",
    "rating": 5.2,
    "votes": 2127,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/44PPliIILbsM6IedGw3o6ipC17q.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Beyond the Gates is a Adventure directed by Jackson Stewart.",
    "trailer": "https://www.youtube.com/results?search_query=Beyond%20the%20Gates%202016%20official%20trailer"
  },
  {
    "id": 174,
    "title": "Her",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Spike Jonze",
    "rating": 8.0,
    "votes": 390531,
    "revenue": 25560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Her is a Drama directed by Spike Jonze.",
    "trailer": "https://www.youtube.com/watch?v=ne6p6MfLBxc"
  },
  {
    "id": 175,
    "title": "Frozen",
    "year": 2013,
    "genre": [
      "Animation"
    ],
    "director": "Chris Buck",
    "rating": 7.5,
    "votes": 451894,
    "revenue": 400740000.0,
    "poster": "https://image.tmdb.org/t/p/w500/itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Frozen is a Animation directed by Chris Buck.",
    "trailer": "https://www.youtube.com/results?search_query=Frozen%202013%20official%20trailer"
  },
  {
    "id": 176,
    "title": "Tomorrowland",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Brad Bird",
    "rating": 6.5,
    "votes": 143069,
    "revenue": 93420000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kziYpr5Nfw60P0My8aj1sgCEqed.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tomorrowland is a Action directed by Brad Bird.",
    "trailer": "https://www.youtube.com/results?search_query=Tomorrowland%202015%20official%20trailer"
  },
  {
    "id": 177,
    "title": "Dawn of the Planet of the Apes",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Matt Reeves",
    "rating": 7.6,
    "votes": 337777,
    "revenue": 208540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mSmAc9G25fhOHH45SLEeagR0qi7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dawn of the Planet of the Apes is a Action directed by Matt Reeves.",
    "trailer": "https://www.youtube.com/watch?v=DpSaTrW4leg"
  },
  {
    "id": 178,
    "title": "Tropic Thunder",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Ben Stiller",
    "rating": 7.0,
    "votes": 321442,
    "revenue": 110420000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zAurB9mNxfYRoVrVjAJJwGV3sPg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tropic Thunder is a Action directed by Ben Stiller.",
    "trailer": "https://www.youtube.com/watch?v=VsEdmjAudSI"
  },
  {
    "id": 179,
    "title": "The Conjuring 2",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "James Wan",
    "rating": 7.4,
    "votes": 137203,
    "revenue": 102460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Conjuring 2 is a Horror directed by James Wan.",
    "trailer": "https://www.youtube.com/watch?v=VFsmuRPClr4"
  },
  {
    "id": 180,
    "title": "Ant-Man",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Peyton Reed",
    "rating": 7.3,
    "votes": 368912,
    "revenue": 180190000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ant-Man is a Action directed by Peyton Reed.",
    "trailer": "https://www.youtube.com/watch?v=cx3joJnXydc"
  },
  {
    "id": 181,
    "title": "Bridget Jones's Baby",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Sharon Maguire",
    "rating": 6.7,
    "votes": 43086,
    "revenue": 24090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5hHomngoPZrNoXOPlyaHV6eXaQW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bridget Jones's Baby is a Comedy directed by Sharon Maguire.",
    "trailer": "https://www.youtube.com/watch?v=5aaWY7rQS3I"
  },
  {
    "id": 182,
    "title": "The VVitch: A New-England Folktale",
    "year": 2015,
    "genre": [
      "Horror"
    ],
    "director": "Robert Eggers",
    "rating": 6.8,
    "votes": 101781,
    "revenue": 25140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zap5hpFCWSvdWSuPGAQyjUv2wAC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The VVitch: A New-England Folktale is a Horror directed by Robert Eggers.",
    "trailer": "https://www.youtube.com/results?search_query=The%20VVitch%3A%20A%20New-England%20Folktale%202015%20official%20trailer"
  },
  {
    "id": 183,
    "title": "Cinderella",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Kenneth Branagh",
    "rating": 7.0,
    "votes": 117018,
    "revenue": 201150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/j91LJmcWo16CArFOoapsz84bwxb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Cinderella is a Drama directed by Kenneth Branagh.",
    "trailer": "https://www.youtube.com/results?search_query=Cinderella%202015%20official%20trailer"
  },
  {
    "id": 184,
    "title": "Realive",
    "year": 2016,
    "genre": [
      "Sci-Fi"
    ],
    "director": "Mateo Gil",
    "rating": 5.9,
    "votes": 1176,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3FsN7qGW1U7Oi52vx3eVoGn9r8H.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Realive is a Sci-Fi directed by Mateo Gil.",
    "trailer": "https://www.youtube.com/watch?v=xQ5Ht9psEDI"
  },
  {
    "id": 185,
    "title": "Forushande",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Asghar Farhadi",
    "rating": 8.0,
    "votes": 22389,
    "revenue": 3400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/x4PIuYU5ZMMXiTrheNR8vCTYPBf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Forushande is a Drama directed by Asghar Farhadi.",
    "trailer": "https://www.youtube.com/results?search_query=Forushande%202016%20official%20trailer"
  },
  {
    "id": 186,
    "title": "Love",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Gaspar No\u00e9",
    "rating": 6.0,
    "votes": 24003,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/7QPeVsr9rcFU9Gl90yg0gTOTpVv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Love is a Drama directed by Gaspar No\u00e9.",
    "trailer": "https://www.youtube.com/watch?v=r3mJrSA1x5s"
  },
  {
    "id": 187,
    "title": "Billy Lynn's Long Halftime Walk",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Ang Lee",
    "rating": 6.3,
    "votes": 11944,
    "revenue": 1720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jjuDRavgTazvs5ishEgnfZ8YhbV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Billy Lynn's Long Halftime Walk is a Drama directed by Ang Lee.",
    "trailer": "https://www.youtube.com/watch?v=ErKiCXGrtWI"
  },
  {
    "id": 188,
    "title": "Crimson Peak",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Guillermo del Toro",
    "rating": 6.6,
    "votes": 97454,
    "revenue": 31060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/f9TOb5anVwZeSbYjU1qNxPk3KUk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Crimson Peak is a Drama directed by Guillermo del Toro.",
    "trailer": "https://www.youtube.com/watch?v=Jkvgz-3bN74"
  },
  {
    "id": 189,
    "title": "Drive",
    "year": 2011,
    "genre": [
      "Crime"
    ],
    "director": "Nicolas Winding Refn",
    "rating": 7.8,
    "votes": 461509,
    "revenue": 35050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Drive is a Crime directed by Nicolas Winding Refn.",
    "trailer": "https://www.youtube.com/watch?v=J8lZi3ocbYk"
  },
  {
    "id": 190,
    "title": "Trainwreck",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Judd Apatow",
    "rating": 6.3,
    "votes": 106364,
    "revenue": 110010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wrY629UTCUAKLJ4CxQXz6DCE7pr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Trainwreck is a Comedy directed by Judd Apatow.",
    "trailer": "https://www.youtube.com/results?search_query=Trainwreck%202015%20official%20trailer"
  },
  {
    "id": 191,
    "title": "The Light Between Oceans",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Derek Cianfrance",
    "rating": 7.2,
    "votes": 27382,
    "revenue": 12530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/c9S6VKZPllNgdxBUuI3GYJiqcKO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Light Between Oceans is a Drama directed by Derek Cianfrance.",
    "trailer": "https://www.youtube.com/watch?v=w51IR_BFGyc"
  },
  {
    "id": 192,
    "title": "Below Her Mouth",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "April Mullen",
    "rating": 5.6,
    "votes": 1445,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tPhBftWySbanfEialbsUzOuccgN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Below Her Mouth is a Drama directed by April Mullen.",
    "trailer": "https://www.youtube.com/results?search_query=Below%20Her%20Mouth%202016%20official%20trailer"
  },
  {
    "id": 193,
    "title": "Spotlight",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Tom McCarthy",
    "rating": 8.1,
    "votes": 268282,
    "revenue": 44990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8DPGG400FgaFWaqcv11n8mRd2NG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Spotlight is a Crime directed by Tom McCarthy.",
    "trailer": "https://www.youtube.com/watch?v=WgnrwwiIDlI"
  },
  {
    "id": 194,
    "title": "Morgan",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Luke Scott",
    "rating": 5.8,
    "votes": 22107,
    "revenue": 3910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iqEFG5ldyeLIFPp7mMI7ZmS7Upm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Morgan is a Horror directed by Luke Scott.",
    "trailer": "https://www.youtube.com/watch?v=rqmHSR0bFU8"
  },
  {
    "id": 195,
    "title": "Warrior",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Gavin O'Connor",
    "rating": 8.2,
    "votes": 355722,
    "revenue": 13650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/waxnw1NpzTPY5JkqWvu0muSopRJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Warrior is a Action directed by Gavin O'Connor.",
    "trailer": "https://www.youtube.com/results?search_query=Warrior%202011%20official%20trailer"
  },
  {
    "id": 196,
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Joe Johnston",
    "rating": 6.9,
    "votes": 547368,
    "revenue": 176640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Captain America: The First Avenger is a Action directed by Joe Johnston.",
    "trailer": "https://www.youtube.com/results?search_query=Captain%20America%3A%20The%20First%20Avenger%202011%20official%20trailer"
  },
  {
    "id": 197,
    "title": "Hacker",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Akan Satayev",
    "rating": 6.3,
    "votes": 3799,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/gpYwKrP6s749b5Nzgm2174jKrpf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hacker is a Crime directed by Akan Satayev.",
    "trailer": "https://www.youtube.com/results?search_query=Hacker%202016%20official%20trailer"
  },
  {
    "id": 198,
    "title": "Into the Wild",
    "year": 2007,
    "genre": [
      "Adventure"
    ],
    "director": "Sean Penn",
    "rating": 8.1,
    "votes": 459304,
    "revenue": 18350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jnLnLYP5pGDfri04gxtAqAvkHMw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Into the Wild is a Adventure directed by Sean Penn.",
    "trailer": "https://www.youtube.com/results?search_query=Into%20the%20Wild%202007%20official%20trailer"
  },
  {
    "id": 199,
    "title": "The Imitation Game",
    "year": 2014,
    "genre": [
      "Biography"
    ],
    "director": "Morten Tyldum",
    "rating": 8.1,
    "votes": 532353,
    "revenue": 91120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Imitation Game is a Biography directed by Morten Tyldum.",
    "trailer": "https://www.youtube.com/watch?v=INCp2P6UK5c"
  },
  {
    "id": 200,
    "title": "Central Intelligence",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Rawson Marshall Thurber",
    "rating": 6.3,
    "votes": 97082,
    "revenue": 127380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hXQVMbRNpf7c93e8clMY4W5DRm6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Central Intelligence is a Action directed by Rawson Marshall Thurber.",
    "trailer": "https://www.youtube.com/watch?v=J_8OsnCTRx8"
  },
  {
    "id": 201,
    "title": "Edge of Tomorrow",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Doug Liman",
    "rating": 7.9,
    "votes": 471815,
    "revenue": 100190000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Edge of Tomorrow is a Action directed by Doug Liman.",
    "trailer": "https://www.youtube.com/watch?v=eb8wTIcGLgQ"
  },
  {
    "id": 202,
    "title": "A Cure for Wellness",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Gore Verbinski",
    "rating": 6.5,
    "votes": 12193,
    "revenue": 8100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8QWJtne0pTsNoJ86KE993aQYTLW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Cure for Wellness is a Drama directed by Gore Verbinski.",
    "trailer": "https://www.youtube.com/results?search_query=A%20Cure%20for%20Wellness%202016%20official%20trailer"
  },
  {
    "id": 203,
    "title": "Snowden",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Oliver Stone",
    "rating": 7.3,
    "votes": 79855,
    "revenue": 21480000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yfK7zxNL63VWfluFuoUaJj5PdNw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Snowden is a Biography directed by Oliver Stone.",
    "trailer": "https://www.youtube.com/watch?v=QlSAiI3xMh4"
  },
  {
    "id": 204,
    "title": "Iron Man",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Jon Favreau",
    "rating": 7.9,
    "votes": 737719,
    "revenue": 318300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Iron Man is a Action directed by Jon Favreau.",
    "trailer": "https://www.youtube.com/watch?v=8ugaeA-nMTc"
  },
  {
    "id": 205,
    "title": "Allegiant",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Robert Schwentke",
    "rating": 5.7,
    "votes": 70504,
    "revenue": 66000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/faq9JlF8znUGQ5p3En1W61Fi5p0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Allegiant is a Action directed by Robert Schwentke.",
    "trailer": "https://www.youtube.com/watch?v=ESJBomF-9Y8"
  },
  {
    "id": 206,
    "title": "X: First Class",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Matthew Vaughn",
    "rating": 7.8,
    "votes": 550011,
    "revenue": 146410000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hNEokmUke0dazoBhttFN0o3L7Xv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "X: First Class is a Action directed by Matthew Vaughn.",
    "trailer": "https://www.youtube.com/results?search_query=X%3A%20First%20Class%202011%20official%20trailer"
  },
  {
    "id": 207,
    "title": "Raw (II)",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Julia Ducournau",
    "rating": 7.5,
    "votes": 5435,
    "revenue": 510000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kc8jT1MAiKM0iwdjAwC5lQrTNry.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Raw (II) is a Drama directed by Julia Ducournau.",
    "trailer": "https://www.youtube.com/results?search_query=Raw%20%28II%29%202016%20official%20trailer"
  },
  {
    "id": 208,
    "title": "Paterson",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Jim Jarmusch",
    "rating": 7.5,
    "votes": 26089,
    "revenue": 2140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AuJ1ZlfqwuAr9H5Qr1U9KILylse.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Paterson is a Comedy directed by Jim Jarmusch.",
    "trailer": "https://www.youtube.com/watch?v=V4s0pFnNabk"
  },
  {
    "id": 209,
    "title": "Bridesmaids",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Paul Feig",
    "rating": 6.8,
    "votes": 227912,
    "revenue": 169080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gJtA7hYsBMQ7EM3sPBMUdBfU7a0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bridesmaids is a Comedy directed by Paul Feig.",
    "trailer": "https://www.youtube.com/watch?v=kg6HHhrxBIk"
  },
  {
    "id": 210,
    "title": "The Girl with All the Gifts",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Colm McCarthy",
    "rating": 6.7,
    "votes": 23713,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/vdCD8z55a4RNmHQDPIpuMFqoY2B.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Girl with All the Gifts is a Drama directed by Colm McCarthy.",
    "trailer": "https://www.youtube.com/watch?v=HjGkB_oWTe0"
  },
  {
    "id": 211,
    "title": "San Andreas",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Brad Peyton",
    "rating": 6.1,
    "votes": 161396,
    "revenue": 155180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "San Andreas is a Action directed by Brad Peyton.",
    "trailer": "https://www.youtube.com/watch?v=0o9k9stwVR0"
  },
  {
    "id": 212,
    "title": "Spring Breakers",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Harmony Korine",
    "rating": 5.3,
    "votes": 114290,
    "revenue": 14120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9tyPnyEkL44qbAliM9jMRWc6bjg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Spring Breakers is a Drama directed by Harmony Korine.",
    "trailer": "https://www.youtube.com/watch?v=m0AMLz5NMl4"
  },
  {
    "id": 213,
    "title": "Transformers",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Michael Bay",
    "rating": 7.1,
    "votes": 531112,
    "revenue": 318760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lkZ9gqCEjzX85lKR6Jjd1uGAXNp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Transformers is a Action directed by Michael Bay.",
    "trailer": "https://www.youtube.com/watch?v=ahYjx0rQvqQ"
  },
  {
    "id": 214,
    "title": "Old Boy",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Spike Lee",
    "rating": 5.8,
    "votes": 54679,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/iX93YdBrZA1EpGbphmjf4ARj1Za.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Old Boy is a Action directed by Spike Lee.",
    "trailer": "https://www.youtube.com/results?search_query=Old%20Boy%202013%20official%20trailer"
  },
  {
    "id": 215,
    "title": "Thor: The Dark World",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Alan Taylor",
    "rating": 7.0,
    "votes": 443584,
    "revenue": 206360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Thor: The Dark World is a Action directed by Alan Taylor.",
    "trailer": "https://www.youtube.com/watch?v=npvJ9FTgZbM"
  },
  {
    "id": 216,
    "title": "Gods of Egypt",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Alex Proyas",
    "rating": 5.5,
    "votes": 73568,
    "revenue": 31140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hzH7fwaTyQNITLo40Hu3R7cVMqv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gods of Egypt is a Action directed by Alex Proyas.",
    "trailer": "https://www.youtube.com/results?search_query=Gods%20of%20Egypt%202016%20official%20trailer"
  },
  {
    "id": 217,
    "title": "Captain America: The Winter Soldier",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Anthony Russo",
    "rating": 7.8,
    "votes": 542362,
    "revenue": 259750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Captain America: The Winter Soldier is a Action directed by Anthony Russo.",
    "trailer": "https://www.youtube.com/watch?v=7SlILk2WMTI"
  },
  {
    "id": 218,
    "title": "Monster Trucks",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Chris Wedge",
    "rating": 5.7,
    "votes": 7044,
    "revenue": 33040000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aUzNybWqURfeg9BveLr4GOVCkti.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Monster Trucks is a Action directed by Chris Wedge.",
    "trailer": "https://www.youtube.com/watch?v=Fd0GdvApn-o"
  },
  {
    "id": 219,
    "title": "A Dark Song",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Liam Gavin",
    "rating": 6.1,
    "votes": 1703,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/fguce8M1bZnWjVkRWCFh9P3kt6A.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Dark Song is a Drama directed by Liam Gavin.",
    "trailer": "https://www.youtube.com/results?search_query=A%20Dark%20Song%202016%20official%20trailer"
  },
  {
    "id": 220,
    "title": "Kick-Ass",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Matthew Vaughn",
    "rating": 7.7,
    "votes": 456749,
    "revenue": 48040000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iHMbrTHJwocsNvo5murCBw0CwTo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kick-Ass is a Action directed by Matthew Vaughn.",
    "trailer": "https://www.youtube.com/watch?v=RdBiTjy7AEI"
  },
  {
    "id": 221,
    "title": "Hardcore Henry",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Ilya Naishuller",
    "rating": 6.7,
    "votes": 61098,
    "revenue": 9240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ik1uZyiMSxF9HqrgRKUNfMCfr3z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hardcore Henry is a Action directed by Ilya Naishuller.",
    "trailer": "https://www.youtube.com/watch?v=4JVgQzBG5Ho"
  },
  {
    "id": 222,
    "title": "Cars",
    "year": 2006,
    "genre": [
      "Animation"
    ],
    "director": "John Lasseter",
    "rating": 7.1,
    "votes": 283445,
    "revenue": 244050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Cars is a Animation directed by John Lasseter.",
    "trailer": "https://www.youtube.com/watch?v=bOs0p2E4sZw"
  },
  {
    "id": 223,
    "title": "It Follows",
    "year": 2014,
    "genre": [
      "Horror"
    ],
    "director": "David Robert Mitchell",
    "rating": 6.9,
    "votes": 136399,
    "revenue": 14670000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iwnQ1JH1wdWrGYkgWySptJ5284A.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "It Follows is a Horror directed by David Robert Mitchell.",
    "trailer": "https://www.youtube.com/watch?v=VII8i2Pw8uM"
  },
  {
    "id": 224,
    "title": "The Girl with the Dragon Tattoo",
    "year": 2011,
    "genre": [
      "Crime"
    ],
    "director": "David Fincher",
    "rating": 7.8,
    "votes": 348551,
    "revenue": 102520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8bokS83zGdhaXgN9tjidUKmAftW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Girl with the Dragon Tattoo is a Crime directed by David Fincher.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Girl%20with%20the%20Dragon%20Tattoo%202011%20official%20trailer"
  },
  {
    "id": 225,
    "title": "We're the Millers",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Rawson Marshall Thurber",
    "rating": 7.0,
    "votes": 334867,
    "revenue": 150370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qF2LJ0jwWrtXSuT4AFD5OS2IqaT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "We're the Millers is a Comedy directed by Rawson Marshall Thurber.",
    "trailer": "https://www.youtube.com/watch?v=O7NHfAzg7Yg"
  },
  {
    "id": 226,
    "title": "American Honey",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Andrea Arnold",
    "rating": 7.0,
    "votes": 19660,
    "revenue": 660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/41SVO0AElBAl7zks9dFhJ0OjHni.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Honey is a Drama directed by Andrea Arnold.",
    "trailer": "https://www.youtube.com/results?search_query=American%20Honey%202016%20official%20trailer"
  },
  {
    "id": 227,
    "title": "The Lobster",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Yorgos Lanthimos",
    "rating": 7.1,
    "votes": 121313,
    "revenue": 8700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7Y9ILV1unpW9mLpGcqyGQU72LUy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lobster is a Comedy directed by Yorgos Lanthimos.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Lobster%202015%20official%20trailer"
  },
  {
    "id": 228,
    "title": "Predators",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Nimr\u00f3d Antal",
    "rating": 6.4,
    "votes": 179450,
    "revenue": 52000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wdniP8NDaJIydi1hMxhpbJMUfr6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Predators is a Action directed by Nimr\u00f3d Antal.",
    "trailer": "https://www.youtube.com/watch?v=N2jJOy8rzog"
  },
  {
    "id": 229,
    "title": "Maleficent",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Robert Stromberg",
    "rating": 7.0,
    "votes": 268877,
    "revenue": 241410000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ik8PugpL41s137RAWEGTAWu0dPo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Maleficent is a Action directed by Robert Stromberg.",
    "trailer": "https://www.youtube.com/results?search_query=Maleficent%202014%20official%20trailer"
  },
  {
    "id": 230,
    "title": "Rupture",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Steven Shainberg",
    "rating": 4.8,
    "votes": 2382,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/41MCf9bzSpqhr7EAu95su0XdjVQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rupture is a Horror directed by Steven Shainberg.",
    "trailer": "https://www.youtube.com/watch?v=F2SSdtQUX5U"
  },
  {
    "id": 231,
    "title": "Pan's Labyrinth",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Guillermo del Toro",
    "rating": 8.2,
    "votes": 498879,
    "revenue": 37620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z7xXihu5wHuSMWymq5VAulPVuvg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pan's Labyrinth is a Drama directed by Guillermo del Toro.",
    "trailer": "https://www.youtube.com/watch?v=OBGKGm3RYos"
  },
  {
    "id": 232,
    "title": "A Kind of Murder",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Andy Goddard",
    "rating": 5.2,
    "votes": 3305,
    "revenue": 0.0,
    "poster": "https://image.tmdb.org/t/p/w500/hEeuCjUnGFCPdHbHFUUGGsCIrNt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Kind of Murder is a Crime directed by Andy Goddard.",
    "trailer": "https://www.youtube.com/watch?v=12zoi09mRoE"
  },
  {
    "id": 233,
    "title": "Apocalypto",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Mel Gibson",
    "rating": 7.8,
    "votes": 247926,
    "revenue": 50860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cRY25Q32kDNPFDkFkxAs6bgCq3L.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Apocalypto is a Action directed by Mel Gibson.",
    "trailer": "https://www.youtube.com/watch?v=gSw5l5jMnPM"
  },
  {
    "id": 234,
    "title": "Mission: Impossible - Rogue Nation",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Christopher McQuarrie",
    "rating": 7.4,
    "votes": 257472,
    "revenue": 195000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fRJLXQBHK2wyznK5yZbO7vmsuVK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mission: Impossible - Rogue Nation is a Action directed by Christopher McQuarrie.",
    "trailer": "https://www.youtube.com/results?search_query=Mission%3A%20Impossible%20-%20Rogue%20Nation%202015%20official%20trailer"
  },
  {
    "id": 235,
    "title": "The Huntsman: Winter's War",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Cedric Nicolas-Troyan",
    "rating": 6.1,
    "votes": 66766,
    "revenue": 47950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ekHPrneEoa1EoDclWdillOKznqM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Huntsman: Winter's War is a Action directed by Cedric Nicolas-Troyan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Huntsman%3A%20Winter%27s%20War%202016%20official%20trailer"
  },
  {
    "id": 236,
    "title": "The Perks of Being a Wallflower",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Stephen Chbosky",
    "rating": 8.0,
    "votes": 377336,
    "revenue": 17740000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aKCvdFFF5n80P2VdS7d8YBwbCjh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Perks of Being a Wallflower is a Drama directed by Stephen Chbosky.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Perks%20of%20Being%20a%20Wallflower%202012%20official%20trailer"
  },
  {
    "id": 237,
    "title": "Jackie",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Pablo Larra\u00edn",
    "rating": 6.8,
    "votes": 41446,
    "revenue": 13960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nF9N33PfhizMEzbfxHoxXBo2vx9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jackie is a Biography directed by Pablo Larra\u00edn.",
    "trailer": "https://www.youtube.com/watch?v=g9pW3B8Ycc4"
  },
  {
    "id": 238,
    "title": "The Disappointments Room",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "D.J. Caruso",
    "rating": 3.9,
    "votes": 4895,
    "revenue": 2410000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4zHfitHwW1XDaJo9IF8LOsUbnif.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Disappointments Room is a Drama directed by D.J. Caruso.",
    "trailer": "https://www.youtube.com/watch?v=9Nyp-LGHj8o"
  },
  {
    "id": 239,
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Wes Anderson",
    "rating": 8.1,
    "votes": 530881,
    "revenue": 59070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Grand Budapest Hotel is a Adventure directed by Wes Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Grand%20Budapest%20Hotel%202014%20official%20trailer"
  },
  {
    "id": 240,
    "title": "The Host",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Andrew Niccol",
    "rating": 5.9,
    "votes": 96852,
    "revenue": 26620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1mfIZw6WgkCX310eoe0Ys14c3Fi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Host is a Action directed by Andrew Niccol.",
    "trailer": "https://www.youtube.com/watch?v=SRKjf8b4f2E"
  },
  {
    "id": 241,
    "title": "Fury",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "David Ayer",
    "rating": 7.6,
    "votes": 332234,
    "revenue": 85710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fury is a Action directed by David Ayer.",
    "trailer": "https://www.youtube.com/watch?v=09w9MTtZDEM"
  },
  {
    "id": 242,
    "title": "Inside Out",
    "year": 2015,
    "genre": [
      "Animation"
    ],
    "director": "Pete Docter",
    "rating": 8.2,
    "votes": 416689,
    "revenue": 356450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inside Out is a Animation directed by Pete Docter.",
    "trailer": "https://www.youtube.com/watch?v=ZNz2qF6r3Kc"
  },
  {
    "id": 243,
    "title": "Rock Dog",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Ash Brannon",
    "rating": 5.8,
    "votes": 1109,
    "revenue": 9400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7RXi2afiNJGU8EB79SD8HYoSz4O.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rock Dog is a Animation directed by Ash Brannon.",
    "trailer": "https://www.youtube.com/results?search_query=Rock%20Dog%202016%20official%20trailer"
  },
  {
    "id": 244,
    "title": "Terminator Genisys",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Alan Taylor",
    "rating": 6.5,
    "votes": 205365,
    "revenue": 89730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Terminator Genisys is a Action directed by Alan Taylor.",
    "trailer": "https://www.youtube.com/watch?v=Dx3ShEjUId0"
  },
  {
    "id": 245,
    "title": "Percy Jackson & the Olympians: The Lightning Thief",
    "year": 2010,
    "genre": [
      "Adventure"
    ],
    "director": "Chris Columbus",
    "rating": 5.9,
    "votes": 148949,
    "revenue": 88760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/brzpTyZ5bnM7s53C1KSk1TmrMO6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Percy Jackson & the Olympians: The Lightning Thief is a Adventure directed by Chris Columbus.",
    "trailer": "https://www.youtube.com/results?search_query=Percy%20Jackson%20%26%20the%20Olympians%3A%20The%20Lightning%20Thief%202010%20official%20trailer"
  },
  {
    "id": 246,
    "title": "Les Mis\u00e9rables",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Tom Hooper",
    "rating": 7.6,
    "votes": 257426,
    "revenue": 148780000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6CuzBs2Lb8At7qQr64mLXg2RYRb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Les Mis\u00e9rables is a Drama directed by Tom Hooper.",
    "trailer": "https://www.youtube.com/results?search_query=Les%20Mis%C3%A9rables%202012%20official%20trailer"
  },
  {
    "id": 247,
    "title": "Children of Men",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Alfonso Cuar\u00f3n",
    "rating": 7.9,
    "votes": 382910,
    "revenue": 35290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/k9IAS4TehZFcKi4HVByxZNPfqex.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Children of Men is a Drama directed by Alfonso Cuar\u00f3n.",
    "trailer": "https://www.youtube.com/results?search_query=Children%20of%20Men%202006%20official%20trailer"
  },
  {
    "id": 248,
    "title": "20th Century Women",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Mike Mills",
    "rating": 7.4,
    "votes": 14708,
    "revenue": 5660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mso2rEr9i0MilRIOao5HaWFipS9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "20th Century Women is a Comedy directed by Mike Mills.",
    "trailer": "https://www.youtube.com/watch?v=6JnFaltqnAY"
  },
  {
    "id": 249,
    "title": "Spy",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Paul Feig",
    "rating": 7.1,
    "votes": 188017,
    "revenue": 110820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vPBmfMHxQvRRNGYD5S5ko2KnX56.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Spy is a Action directed by Paul Feig.",
    "trailer": "https://www.youtube.com/watch?v=ltijEmlyqlg"
  },
  {
    "id": 250,
    "title": "The Intouchables",
    "year": 2011,
    "genre": [
      "Biography"
    ],
    "director": "Olivier Nakache",
    "rating": 8.6,
    "votes": 557965,
    "revenue": 13180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Intouchables is a Biography directed by Olivier Nakache.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Intouchables%202011%20official%20trailer"
  },
  {
    "id": 251,
    "title": "Bonjour Anne",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Eleanor Coppola",
    "rating": 4.9,
    "votes": 178,
    "revenue": 320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jLzfHNU1JldQpC5TNEvQMnWQxx6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bonjour Anne is a Comedy directed by Eleanor Coppola.",
    "trailer": "https://www.youtube.com/watch?v=HTrT6QSqnGs"
  },
  {
    "id": 252,
    "title": "Kynodontas",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Yorgos Lanthimos",
    "rating": 7.3,
    "votes": 50946,
    "revenue": 110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7nLuUGlH12cegPfR84QX4xIIH9k.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kynodontas is a Drama directed by Yorgos Lanthimos.",
    "trailer": "https://www.youtube.com/watch?v=YJe4eZ9l5KY"
  },
  {
    "id": 253,
    "title": "Straight Outta Compton",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "F. Gary Gray",
    "rating": 7.9,
    "votes": 139831,
    "revenue": 161030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1CiLJx8Xtv3TbbFj6k7BboSmKgC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Straight Outta Compton is a Biography directed by F. Gary Gray.",
    "trailer": "https://www.youtube.com/watch?v=-F5WcFPDzko"
  },
  {
    "id": 254,
    "title": "The Amazing Spider-Man 2",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Marc Webb",
    "rating": 6.7,
    "votes": 342183,
    "revenue": 202850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bU7nTmvmy0h3VUP01v1T2imgH6N.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Amazing Spider-Man 2 is a Action directed by Marc Webb.",
    "trailer": "https://www.youtube.com/watch?v=DlM2CWNTQ84"
  },
  {
    "id": 255,
    "title": "The Conjuring",
    "year": 2013,
    "genre": [
      "Horror"
    ],
    "director": "James Wan",
    "rating": 7.5,
    "votes": 330305,
    "revenue": 137390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Conjuring is a Horror directed by James Wan.",
    "trailer": "https://www.youtube.com/watch?v=k10ETZ41q5o"
  },
  {
    "id": 256,
    "title": "The Hangover",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Todd Phillips",
    "rating": 7.8,
    "votes": 611563,
    "revenue": 277310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/A0uS9rHR56FeBtpjVki16M5xxSW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hangover is a Comedy directed by Todd Phillips.",
    "trailer": "https://www.youtube.com/watch?v=tlize92ffnY"
  },
  {
    "id": 257,
    "title": "Battleship",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Peter Berg",
    "rating": 5.8,
    "votes": 210349,
    "revenue": 65170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9b0Im7SfedHiajTwzSL9zGyBI7M.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Battleship is a Action directed by Peter Berg.",
    "trailer": "https://www.youtube.com/watch?v=wvXKvbIAq2k"
  },
  {
    "id": 258,
    "title": "Rise of the Planet of the Apes",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Rupert Wyatt",
    "rating": 7.6,
    "votes": 422290,
    "revenue": 176740000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oqA45qMyyo1TtrnVEBKxqmTPhbN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rise of the Planet of the Apes is a Action directed by Rupert Wyatt.",
    "trailer": "https://www.youtube.com/watch?v=P1yKN0llkrY"
  },
  {
    "id": 259,
    "title": "Lights Out",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "David F. Sandberg",
    "rating": 6.4,
    "votes": 69823,
    "revenue": 67240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8BnElzAQQpp7ZgdJJiAe1diomr4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lights Out is a Horror directed by David F. Sandberg.",
    "trailer": "https://www.youtube.com/watch?v=H_nTMprod00"
  },
  {
    "id": 260,
    "title": "Norman: The Moderate Rise and Tragic Fall of a New York Fixer",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Joseph Cedar",
    "rating": 7.1,
    "votes": 664,
    "revenue": 2270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2pVxTxpFZafeGcbx2c5M6TSxJgT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Norman: The Moderate Rise and Tragic Fall of a New York Fixer is a Drama directed by Joseph Cedar.",
    "trailer": "https://www.youtube.com/watch?v=TZMCfZq3qc4"
  },
  {
    "id": 261,
    "title": "Birdman or (The Unexpected Virtue of Ignorance)",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
    "rating": 7.8,
    "votes": 440299,
    "revenue": 42340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Birdman or (The Unexpected Virtue of Ignorance) is a Comedy directed by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "trailer": "https://www.youtube.com/watch?v=egYzOALlYyU"
  },
  {
    "id": 262,
    "title": "Black Swan",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Darren Aronofsky",
    "rating": 8.0,
    "votes": 581518,
    "revenue": 106950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/viWheBd44bouiLCHgNMvahLThqx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Black Swan is a Drama directed by Darren Aronofsky.",
    "trailer": "https://www.youtube.com/results?search_query=Black%20Swan%202010%20official%20trailer"
  },
  {
    "id": 263,
    "title": "Dear White People",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Justin Simien",
    "rating": 6.2,
    "votes": 21715,
    "revenue": 4400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jH3851P2DjjnBsrjphbR1CWRzm6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dear White People is a Comedy directed by Justin Simien.",
    "trailer": "https://www.youtube.com/watch?v=JMgWMzbM2Pk"
  },
  {
    "id": 264,
    "title": "Nymphomaniac: Vol. I",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Lars von Trier",
    "rating": 7.0,
    "votes": 90556,
    "revenue": 790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/piikL8vRh3s1ysHGTIqaZpdjfNU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Nymphomaniac: Vol. I is a Drama directed by Lars von Trier.",
    "trailer": "https://www.youtube.com/watch?v=w7-UH6d_Oyo"
  },
  {
    "id": 265,
    "title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Dave Green",
    "rating": 6.0,
    "votes": 59312,
    "revenue": 540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/euVaCiCWz3AALcQXHT6aUqdGUo6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Teenage Mutant Ninja Turtles: Out of the Shadows is a Action directed by Dave Green.",
    "trailer": "https://www.youtube.com/results?search_query=Teenage%20Mutant%20Ninja%20Turtles%3A%20Out%20of%20the%20Shadows%202016%20official%20trailer"
  },
  {
    "id": 266,
    "title": "Knock Knock",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Eli Roth",
    "rating": 4.9,
    "votes": 53441,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cUC4rUb1Cs2KMaZ6RD4uYUEEwls.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Knock Knock is a Drama directed by Eli Roth.",
    "trailer": "https://www.youtube.com/watch?v=1vGZWY5MFY0"
  },
  {
    "id": 267,
    "title": "Dirty Grandpa",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Dan Mazer",
    "rating": 6.0,
    "votes": 75137,
    "revenue": 35540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/k0Lz1TfSlbcQthQKYGwE7blDfwN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dirty Grandpa is a Comedy directed by Dan Mazer.",
    "trailer": "https://www.youtube.com/results?search_query=Dirty%20Grandpa%202016%20official%20trailer"
  },
  {
    "id": 268,
    "title": "Cloud Atlas",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Tom Tykwer",
    "rating": 7.5,
    "votes": 298651,
    "revenue": 27100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8naVv2Xu3rWI5JKHz0vCujx6GaJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Cloud Atlas is a Drama directed by Tom Tykwer.",
    "trailer": "https://www.youtube.com/watch?v=ByehYal_cCs"
  },
  {
    "id": 269,
    "title": "X-Men Origins: Wolverine",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Gavin Hood",
    "rating": 6.7,
    "votes": 388447,
    "revenue": 179880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yj8LbTju1p7CUJg7US2unSBk33s.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "X-Men Origins: Wolverine is a Action directed by Gavin Hood.",
    "trailer": "https://www.youtube.com/results?search_query=X-Men%20Origins%3A%20Wolverine%202009%20official%20trailer"
  },
  {
    "id": 270,
    "title": "Satanic",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Jeffrey G. Hunt",
    "rating": 3.7,
    "votes": 2384,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/me74BRzuDvzD5LuAPU4EZOJtsyU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Satanic is a Horror directed by Jeffrey G. Hunt.",
    "trailer": "https://www.youtube.com/watch?v=T-bH1EeUhpQ"
  },
  {
    "id": 271,
    "title": "Skyfall",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Sam Mendes",
    "rating": 7.8,
    "votes": 547386,
    "revenue": 304360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/d0IVecFQvsGdSbnMAHqiYsNYaJT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Skyfall is a Action directed by Sam Mendes.",
    "trailer": "https://www.youtube.com/watch?v=YvV3g8hLlyU"
  },
  {
    "id": 272,
    "title": "The Hobbit: An Unexpected Journey",
    "year": 2012,
    "genre": [
      "Adventure"
    ],
    "director": "Peter Jackson",
    "rating": 7.9,
    "votes": 668651,
    "revenue": 303000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hobbit: An Unexpected Journey is a Adventure directed by Peter Jackson.",
    "trailer": "https://www.youtube.com/watch?v=CXqZK-nbZ74"
  },
  {
    "id": 273,
    "title": "21 Jump Street",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Phil Lord",
    "rating": 7.2,
    "votes": 432046,
    "revenue": 138450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "21 Jump Street is a Action directed by Phil Lord.",
    "trailer": "https://www.youtube.com/results?search_query=21%20Jump%20Street%202012%20official%20trailer"
  },
  {
    "id": 274,
    "title": "Sing Street",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "John Carney",
    "rating": 8.0,
    "votes": 52144,
    "revenue": 3230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sUWpVlrvzU2SJbnVZqIeKulPKwk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sing Street is a Comedy directed by John Carney.",
    "trailer": "https://www.youtube.com/watch?v=TxT30uAoSHA"
  },
  {
    "id": 275,
    "title": "Ballerina",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Eric Summer",
    "rating": 6.8,
    "votes": 4729,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/qBxMhcmNnFniuDAZTKEHcSgKtsn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ballerina is a Animation directed by Eric Summer.",
    "trailer": "https://www.youtube.com/results?search_query=Ballerina%202016%20official%20trailer"
  },
  {
    "id": 276,
    "title": "Oblivion",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Joseph Kosinski",
    "rating": 7.0,
    "votes": 410125,
    "revenue": 89020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bYLM3GpNUZnoFElPXp1zlhDPdtv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Oblivion is a Action directed by Joseph Kosinski.",
    "trailer": "https://www.youtube.com/watch?v=tx6_JMDFfWI"
  },
  {
    "id": 277,
    "title": "22 Jump Street",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Phil Lord",
    "rating": 7.1,
    "votes": 280110,
    "revenue": 191620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/850chzYHYbT3IISl6Q7dbBuFP2B.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "22 Jump Street is a Action directed by Phil Lord.",
    "trailer": "https://www.youtube.com/results?search_query=22%20Jump%20Street%202014%20official%20trailer"
  },
  {
    "id": 278,
    "title": "Zodiac",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "David Fincher",
    "rating": 7.7,
    "votes": 329683,
    "revenue": 33049999.999999996,
    "poster": "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zodiac is a Crime directed by David Fincher.",
    "trailer": "https://www.youtube.com/results?search_query=Zodiac%202007%20official%20trailer"
  },
  {
    "id": 279,
    "title": "Everybody Wants Some!!",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Richard Linklater",
    "rating": 7.0,
    "votes": 36312,
    "revenue": 3370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vAIFZ8bw0spSvcIYgfuX99B3H2w.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Everybody Wants Some!! is a Comedy directed by Richard Linklater.",
    "trailer": "https://www.youtube.com/watch?v=8WAulKwKHbY"
  },
  {
    "id": 280,
    "title": "Iron Man Three",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Shane Black",
    "rating": 7.2,
    "votes": 591023,
    "revenue": 408990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Iron Man Three is a Action directed by Shane Black.",
    "trailer": "https://www.youtube.com/results?search_query=Iron%20Man%20Three%202013%20official%20trailer"
  },
  {
    "id": 281,
    "title": "Now You See Me",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "Louis Leterrier",
    "rating": 7.3,
    "votes": 492324,
    "revenue": 117700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Now You See Me is a Crime directed by Louis Leterrier.",
    "trailer": "https://www.youtube.com/results?search_query=Now%20You%20See%20Me%202013%20official%20trailer"
  },
  {
    "id": 282,
    "title": "Sherlock Holmes",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Guy Ritchie",
    "rating": 7.6,
    "votes": 501769,
    "revenue": 209020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sherlock Holmes is a Action directed by Guy Ritchie.",
    "trailer": "https://www.youtube.com/watch?v=zBQfbc1t_I8"
  },
  {
    "id": 283,
    "title": "Death Proof",
    "year": 2007,
    "genre": [
      "Thriller"
    ],
    "director": "Quentin Tarantino",
    "rating": 7.1,
    "votes": 220236,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/vtu6H4NWnQVqEp3aanUq3hNeeot.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Death Proof is a Thriller directed by Quentin Tarantino.",
    "trailer": "https://www.youtube.com/watch?v=EAPy76vxF5s"
  },
  {
    "id": 284,
    "title": "The Danish Girl",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Tom Hooper",
    "rating": 7.0,
    "votes": 110773,
    "revenue": 12710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kiJTZ5oFRO961wWn7mLxjUcRlf3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Danish Girl is a Biography directed by Tom Hooper.",
    "trailer": "https://www.youtube.com/watch?v=vtaBl-uAX-8"
  },
  {
    "id": 285,
    "title": "Hercules",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Brett Ratner",
    "rating": 6.0,
    "votes": 122838,
    "revenue": 72660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dK9rNoC97tgX3xXg5zdxFisdfcp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hercules is a Action directed by Brett Ratner.",
    "trailer": "https://www.youtube.com/watch?v=mXRDoJqg5Oo"
  },
  {
    "id": 286,
    "title": "Sucker Punch",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Zack Snyder",
    "rating": 6.1,
    "votes": 204874,
    "revenue": 36380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jtaUDnvIiHUd2ranDcjB5AbPx6o.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sucker Punch is a Action directed by Zack Snyder.",
    "trailer": "https://www.youtube.com/results?search_query=Sucker%20Punch%202011%20official%20trailer"
  },
  {
    "id": 287,
    "title": "Keeping Up with the Joneses",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Greg Mottola",
    "rating": 5.8,
    "votes": 30405,
    "revenue": 14900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yvWcTrRCzE4C2hkd2wV4erPuKCn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Keeping Up with the Joneses is a Action directed by Greg Mottola.",
    "trailer": "https://www.youtube.com/watch?v=nPfYXXg65qA"
  },
  {
    "id": 288,
    "title": "Jupiter Ascending",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Lana Wachowski",
    "rating": 5.3,
    "votes": 150121,
    "revenue": 47380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2NCcAZ3M3F0FxENYmammBknwpVn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jupiter Ascending is a Action directed by Lana Wachowski.",
    "trailer": "https://www.youtube.com/watch?v=gQHKolIqBGs"
  },
  {
    "id": 289,
    "title": "Masterminds",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Jared Hess",
    "rating": 5.8,
    "votes": 26508,
    "revenue": 17360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4CXgye1p8Vr7taDG389QhhHDUZ4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Masterminds is a Action directed by Jared Hess.",
    "trailer": "https://www.youtube.com/watch?v=zIkzuXDhCcQ"
  },
  {
    "id": 290,
    "title": "Iris",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Jalil Lespert",
    "rating": 6.1,
    "votes": 726,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tzVLPSoLfs0U3JHeGW5RKvsRAO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Iris is a Thriller directed by Jalil Lespert.",
    "trailer": "https://www.youtube.com/watch?v=BNHyTnzxeyk"
  },
  {
    "id": 291,
    "title": "Busanhaeng",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Sang-ho Yeon",
    "rating": 7.5,
    "votes": 58782,
    "revenue": 2130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Busanhaeng is a Action directed by Sang-ho Yeon.",
    "trailer": "https://www.youtube.com/watch?v=e1trTAC1r6k"
  },
  {
    "id": 292,
    "title": "Pitch Perfect",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Jason Moore",
    "rating": 7.2,
    "votes": 226631,
    "revenue": 65000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gsFoJk9g8W3zgaipRrrURk7LbiF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pitch Perfect is a Comedy directed by Jason Moore.",
    "trailer": "https://www.youtube.com/results?search_query=Pitch%20Perfect%202012%20official%20trailer"
  },
  {
    "id": 293,
    "title": "Neighbors 2: Sorority Rising",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Nicholas Stoller",
    "rating": 5.7,
    "votes": 76327,
    "revenue": 55290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eyjcLLwxuRXACbglIbwWwaXK9DN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Neighbors 2: Sorority Rising is a Comedy directed by Nicholas Stoller.",
    "trailer": "https://www.youtube.com/watch?v=uldqs2kW25g"
  },
  {
    "id": 294,
    "title": "The Exception",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "David Leveaux",
    "rating": 7.7,
    "votes": 96,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/nNCS7JdLFzLKaqtce4lzjtGfdp4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Exception is a Drama directed by David Leveaux.",
    "trailer": "https://www.youtube.com/watch?v=ld4eE2HU-ig"
  },
  {
    "id": 295,
    "title": "Man of Steel",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Zack Snyder",
    "rating": 7.1,
    "votes": 577010,
    "revenue": 291020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Man of Steel is a Action directed by Zack Snyder.",
    "trailer": "https://www.youtube.com/watch?v=vGrBV1C4hgo"
  },
  {
    "id": 296,
    "title": "The Choice",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Ross Katz",
    "rating": 6.6,
    "votes": 20514,
    "revenue": 18710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6MF3cdAasnF17SG9bmeamQ066iJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Choice is a Drama directed by Ross Katz.",
    "trailer": "https://www.youtube.com/watch?v=3igwHv6Msjo"
  },
  {
    "id": 297,
    "title": "Ice Age: Collision Course",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Mike Thurmeier",
    "rating": 5.7,
    "votes": 34523,
    "revenue": 64060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tFzUkdhPOForVrEfvxydXfPLrZR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ice Age: Collision Course is a Animation directed by Mike Thurmeier.",
    "trailer": "https://www.youtube.com/results?search_query=Ice%20Age%3A%20Collision%20Course%202016%20official%20trailer"
  },
  {
    "id": 298,
    "title": "The Devil Wears Prada",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "David Frankel",
    "rating": 6.8,
    "votes": 302268,
    "revenue": 124730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Devil Wears Prada is a Comedy directed by David Frankel.",
    "trailer": "https://www.youtube.com/watch?v=6ZOZwUQKu3E"
  },
  {
    "id": 299,
    "title": "The Infiltrator",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Brad Furman",
    "rating": 7.1,
    "votes": 43929,
    "revenue": 15430000.0,
    "poster": "https://image.tmdb.org/t/p/w500/758F57DxVRLe38S1Je4O1Bjx2u6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Infiltrator is a Biography directed by Brad Furman.",
    "trailer": "https://www.youtube.com/watch?v=hiPO2mTg2XE"
  },
  {
    "id": 300,
    "title": "There Will Be Blood",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Paul Thomas Anderson",
    "rating": 8.1,
    "votes": 400682,
    "revenue": 40220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "There Will Be Blood is a Drama directed by Paul Thomas Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=There%20Will%20Be%20Blood%202007%20official%20trailer"
  },
  {
    "id": 301,
    "title": "The Equalizer",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Antoine Fuqua",
    "rating": 7.2,
    "votes": 249425,
    "revenue": 101530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Equalizer is a Action directed by Antoine Fuqua.",
    "trailer": "https://www.youtube.com/watch?v=BP_FwE0Z7no"
  },
  {
    "id": 302,
    "title": "Lone Survivor",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Peter Berg",
    "rating": 7.5,
    "votes": 218996,
    "revenue": 125070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zaBIrloyhGK7iNTZMb3f9SARsl8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lone Survivor is a Action directed by Peter Berg.",
    "trailer": "https://www.youtube.com/watch?v=0cPJ1ifjBDs"
  },
  {
    "id": 303,
    "title": "The Cabin in the Woods",
    "year": 2012,
    "genre": [
      "Horror"
    ],
    "director": "Drew Goddard",
    "rating": 7.0,
    "votes": 295554,
    "revenue": 42040000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zZZe5wn0udlhMtdlDjN4NB72R6e.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Cabin in the Woods is a Horror directed by Drew Goddard.",
    "trailer": "https://www.youtube.com/watch?v=7NiAWF7VIFY"
  },
  {
    "id": 304,
    "title": "The House Bunny",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Fred Wolf",
    "rating": 5.5,
    "votes": 67033,
    "revenue": 48240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4oGGJ824vqIqDtyMvMuK44pDEmx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The House Bunny is a Comedy directed by Fred Wolf.",
    "trailer": "https://www.youtube.com/watch?v=NX_Ufhxprto"
  },
  {
    "id": 305,
    "title": "She's Out of My League",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Jim Field Smith",
    "rating": 6.4,
    "votes": 105619,
    "revenue": 31580000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mpYHjyPX0DAxbsnWKmSK5jZ1s4T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "She's Out of My League is a Comedy directed by Jim Field Smith.",
    "trailer": "https://www.youtube.com/watch?v=oWJJGXvL7PM"
  },
  {
    "id": 306,
    "title": "Inherent Vice",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Paul Thomas Anderson",
    "rating": 6.7,
    "votes": 69509,
    "revenue": 8090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pfVua7TzzttOh3RTOuBqT7xN0oY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inherent Vice is a Comedy directed by Paul Thomas Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=Inherent%20Vice%202014%20official%20trailer"
  },
  {
    "id": 307,
    "title": "Alice Through the Looking Glass",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "James Bobin",
    "rating": 6.2,
    "votes": 57207,
    "revenue": 77040000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kbGamUkYfgKIYIrU8kW5oc0NatZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Alice Through the Looking Glass is a Adventure directed by James Bobin.",
    "trailer": "https://www.youtube.com/results?search_query=Alice%20Through%20the%20Looking%20Glass%202016%20official%20trailer"
  },
  {
    "id": 308,
    "title": "Vincent N Roxxy",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Gary Michael Schultz",
    "rating": 5.5,
    "votes": 403,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/pK5pEto2thTo8fRcSQIJc63IbSK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Vincent N Roxxy is a Crime directed by Gary Michael Schultz.",
    "trailer": "https://www.youtube.com/results?search_query=Vincent%20N%20Roxxy%202016%20official%20trailer"
  },
  {
    "id": 309,
    "title": "The Fast and the Furious: Tokyo Drift",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Justin Lin",
    "rating": 6.0,
    "votes": 193479,
    "revenue": 62490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/46xqGOwHbh2TH2avWSw3SMXph4E.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Fast and the Furious: Tokyo Drift is a Action directed by Justin Lin.",
    "trailer": "https://www.youtube.com/watch?v=K6RWbKMSDcg"
  },
  {
    "id": 310,
    "title": "How to Be Single",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Christian Ditter",
    "rating": 6.1,
    "votes": 59886,
    "revenue": 46810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/a4Ce3qHqIyHM3QfGsiVTAu3YADJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "How to Be Single is a Comedy directed by Christian Ditter.",
    "trailer": "https://www.youtube.com/watch?v=akwGjUeU6YA"
  },
  {
    "id": 311,
    "title": "The Blind Side",
    "year": 2009,
    "genre": [
      "Biography"
    ],
    "director": "John Lee Hancock",
    "rating": 7.7,
    "votes": 237221,
    "revenue": 255950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/PhpAdRopu0sOWf0BY7vVtxrRD3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Blind Side is a Biography directed by John Lee Hancock.",
    "trailer": "https://www.youtube.com/watch?v=KA56LqFszYI"
  },
  {
    "id": 312,
    "title": "La vie d'Ad\u00e8le",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Abdellatif Kechiche",
    "rating": 7.8,
    "votes": 103150,
    "revenue": 2200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kgUk1wti2cvrptIgUz0VTAtSF6w.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "La vie d'Ad\u00e8le is a Drama directed by Abdellatif Kechiche.",
    "trailer": "https://www.youtube.com/watch?v=J_ekBcdPzIk"
  },
  {
    "id": 313,
    "title": "The Babadook",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Jennifer Kent",
    "rating": 6.8,
    "votes": 132580,
    "revenue": 920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qt3fqapeo94TfvMyld8P7gkpXLz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Babadook is a Drama directed by Jennifer Kent.",
    "trailer": "https://www.youtube.com/watch?v=88DDAyYkvis"
  },
  {
    "id": 314,
    "title": "The Hobbit: The Battle of the Five Armies",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Peter Jackson",
    "rating": 7.4,
    "votes": 385598,
    "revenue": 255110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hobbit: The Battle of the Five Armies is a Adventure directed by Peter Jackson.",
    "trailer": "https://www.youtube.com/watch?v=BRg2QEeBLuY"
  },
  {
    "id": 315,
    "title": "Harry Potter and the Order of the Phoenix",
    "year": 2007,
    "genre": [
      "Adventure"
    ],
    "director": "David Yates",
    "rating": 7.5,
    "votes": 385325,
    "revenue": 292000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Harry Potter and the Order of the Phoenix is a Adventure directed by David Yates.",
    "trailer": "https://www.youtube.com/watch?v=47PHbQTmw5g"
  },
  {
    "id": 316,
    "title": "Snowpiercer",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Bong Joon Ho",
    "rating": 7.0,
    "votes": 199048,
    "revenue": 4560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kw6YQudA0TMcNmGUGy5XIw7zbnV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Snowpiercer is a Action directed by Bong Joon Ho.",
    "trailer": "https://www.youtube.com/watch?v=3Np3v7xnNJk"
  },
  {
    "id": 317,
    "title": "The 5th Wave",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "J Blakeson",
    "rating": 5.2,
    "votes": 73093,
    "revenue": 34910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ja34BV577dtjWl2S5G1tB93IjYb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The 5th Wave is a Action directed by J Blakeson.",
    "trailer": "https://www.youtube.com/results?search_query=The%205th%20Wave%202016%20official%20trailer"
  },
  {
    "id": 318,
    "title": "The Stakelander",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Dan Berk",
    "rating": 5.3,
    "votes": 1263,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3K9sca6hMxVzCtE7EnAxTjdKWpM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Stakelander is a Action directed by Dan Berk.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Stakelander%202016%20official%20trailer"
  },
  {
    "id": 319,
    "title": "The Visit",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "M. Night Shyamalan",
    "rating": 6.2,
    "votes": 81429,
    "revenue": 65069999.99999999,
    "poster": "https://image.tmdb.org/t/p/w500/mtMfKRCa2V5b7d9k4piogB72mcY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Visit is a Comedy directed by M. Night Shyamalan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Visit%202015%20official%20trailer"
  },
  {
    "id": 320,
    "title": "Fast Five",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Justin Lin",
    "rating": 7.3,
    "votes": 300803,
    "revenue": 209810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gEfQjjQwY7fh5bI4GlG0RrBu7Pz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fast Five is a Action directed by Justin Lin.",
    "trailer": "https://www.youtube.com/watch?v=P1UVXvKnCLM"
  },
  {
    "id": 321,
    "title": "Step Up",
    "year": 2006,
    "genre": [
      "Crime"
    ],
    "director": "Anne Fletcher",
    "rating": 6.5,
    "votes": 95960,
    "revenue": 65269999.99999999,
    "poster": "https://image.tmdb.org/t/p/w500/fmw52kXk2kN8AQil7tgOD41gt4Q.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Step Up is a Crime directed by Anne Fletcher.",
    "trailer": "https://www.youtube.com/watch?v=2_g--dceQoY"
  },
  {
    "id": 322,
    "title": "Lovesong",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "So Yong Kim",
    "rating": 6.4,
    "votes": 616,
    "revenue": 10000.0,
    "poster": "https://image.tmdb.org/t/p/w500/43yEeZbFeFOah9mZWIIJe57STKS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lovesong is a Drama directed by So Yong Kim.",
    "trailer": "https://www.youtube.com/watch?v=7xbr-l-m-Fo"
  },
  {
    "id": 323,
    "title": "RocknRolla",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Guy Ritchie",
    "rating": 7.3,
    "votes": 203096,
    "revenue": 5690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6mLXG2f7LBRpbZZgxsOFO5scgzd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "RocknRolla is a Action directed by Guy Ritchie.",
    "trailer": "https://www.youtube.com/watch?v=mnigSqJ2i10"
  },
  {
    "id": 324,
    "title": "In Time",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Andrew Niccol",
    "rating": 6.7,
    "votes": 319025,
    "revenue": 37550000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3Mwj2sIONQckOZP3YwsUXF7U5I4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "In Time is a Action directed by Andrew Niccol.",
    "trailer": "https://www.youtube.com/watch?v=xhYUaR5QiUs"
  },
  {
    "id": 325,
    "title": "The Social Network",
    "year": 2010,
    "genre": [
      "Biography"
    ],
    "director": "David Fincher",
    "rating": 7.7,
    "votes": 510100,
    "revenue": 96920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Social Network is a Biography directed by David Fincher.",
    "trailer": "https://www.youtube.com/watch?v=rBCNU0XT9GY"
  },
  {
    "id": 326,
    "title": "The Last Witch Hunter",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Breck Eisner",
    "rating": 6.0,
    "votes": 71149,
    "revenue": 27360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dS9YdnJkxtKE2PKCSsxTaO7Jpf5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Last Witch Hunter is a Action directed by Breck Eisner.",
    "trailer": "https://www.youtube.com/watch?v=QJDRdGxGw8U"
  },
  {
    "id": 327,
    "title": "Victor Frankenstein",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Paul McGuigan",
    "rating": 6.0,
    "votes": 37975,
    "revenue": 5770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bYUmSLPtWylFKbEBHOXT1kt9l5b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Victor Frankenstein is a Drama directed by Paul McGuigan.",
    "trailer": "https://www.youtube.com/watch?v=cvESrJ5GdHc"
  },
  {
    "id": 328,
    "title": "A Street Cat Named Bob",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Roger Spottiswoode",
    "rating": 7.4,
    "votes": 12643,
    "revenue": 40000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nBYG0D2FcbL1m926sIj7RN4m0sb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Street Cat Named Bob is a Biography directed by Roger Spottiswoode.",
    "trailer": "https://www.youtube.com/watch?v=ai3hleBXRpo"
  },
  {
    "id": 329,
    "title": "Green Room",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Jeremy Saulnier",
    "rating": 7.0,
    "votes": 62885,
    "revenue": 3220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/evZicaR7nXe4LiD9G6QYTorcJGO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Green Room is a Crime directed by Jeremy Saulnier.",
    "trailer": "https://www.youtube.com/results?search_query=Green%20Room%202015%20official%20trailer"
  },
  {
    "id": 330,
    "title": "Blackhat",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Michael Mann",
    "rating": 5.4,
    "votes": 43085,
    "revenue": 7100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7zu6HPnKPjNA7NuR4DGRdaH0PdX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blackhat is a Crime directed by Michael Mann.",
    "trailer": "https://www.youtube.com/watch?v=-CA95Bzpy7s"
  },
  {
    "id": 331,
    "title": "Storks",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Nicholas Stoller",
    "rating": 6.9,
    "votes": 34248,
    "revenue": 72660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pwGolX8JmGJhhcUjO5SJt38Uk0m.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Storks is a Animation directed by Nicholas Stoller.",
    "trailer": "https://www.youtube.com/watch?v=O3W90X_O3JE"
  },
  {
    "id": 332,
    "title": "American Sniper",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Clint Eastwood",
    "rating": 7.3,
    "votes": 353305,
    "revenue": 350120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/i1U46OwMc6vlm7OoSUKfqUH615e.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Sniper is a Action directed by Clint Eastwood.",
    "trailer": "https://www.youtube.com/results?search_query=American%20Sniper%202014%20official%20trailer"
  },
  {
    "id": 333,
    "title": "Dallas Buyers Club",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Jean-Marc Vall\u00e9e",
    "rating": 8.0,
    "votes": 352801,
    "revenue": 27300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7Fdh7gUq3plvQqxRbNYhWvDABXA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dallas Buyers Club is a Biography directed by Jean-Marc Vall\u00e9e.",
    "trailer": "https://www.youtube.com/watch?v=KDvPcBeOn8E"
  },
  {
    "id": 334,
    "title": "Lincoln",
    "year": 2012,
    "genre": [
      "Biography"
    ],
    "director": "Steven Spielberg",
    "rating": 7.4,
    "votes": 207497,
    "revenue": 182200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7mUYEkv9W3ek61eetZCfMQYVoi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lincoln is a Biography directed by Steven Spielberg.",
    "trailer": "https://www.youtube.com/results?search_query=Lincoln%202012%20official%20trailer"
  },
  {
    "id": 335,
    "title": "Rush",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Ron Howard",
    "rating": 8.1,
    "votes": 339722,
    "revenue": 26900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/95BDrWmcfJDEa2WCfjmLgi67jhi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rush is a Action directed by Ron Howard.",
    "trailer": "https://www.youtube.com/results?search_query=Rush%202013%20official%20trailer"
  },
  {
    "id": 336,
    "title": "Before I Wake",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Mike Flanagan",
    "rating": 6.1,
    "votes": 18201,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/sI9neTbF3ECdpf2MpC88EMGJH13.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Before I Wake is a Drama directed by Mike Flanagan.",
    "trailer": "https://www.youtube.com/results?search_query=Before%20I%20Wake%202016%20official%20trailer"
  },
  {
    "id": 337,
    "title": "Silver Linings Playbook",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "David O. Russell",
    "rating": 7.8,
    "votes": 564364,
    "revenue": 132090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fhHB1uvfFKKFbj6bTKE8xdtsjKi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Silver Linings Playbook is a Comedy directed by David O. Russell.",
    "trailer": "https://www.youtube.com/results?search_query=Silver%20Linings%20Playbook%202012%20official%20trailer"
  },
  {
    "id": 338,
    "title": "Tracktown",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Alexi Pappas",
    "rating": 5.9,
    "votes": 115,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/o5ym6La6Czr9vUGS28rJV8aXoPE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tracktown is a Drama directed by Alexi Pappas.",
    "trailer": "https://www.youtube.com/watch?v=ZEfJF21C_cY"
  },
  {
    "id": 339,
    "title": "The Fault in Our Stars",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Josh Boone",
    "rating": 7.8,
    "votes": 271301,
    "revenue": 124870000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kcVuktIlrn9SAN1uBmPDnocTQmF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Fault in Our Stars is a Drama directed by Josh Boone.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Fault%20in%20Our%20Stars%202014%20official%20trailer"
  },
  {
    "id": 340,
    "title": "Blended",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Frank Coraci",
    "rating": 6.5,
    "votes": 93764,
    "revenue": 46280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/o2YrH9jS7CAfWjETHFeL0tth79E.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blended is a Comedy directed by Frank Coraci.",
    "trailer": "https://www.youtube.com/watch?v=V6cKLTmDB-k"
  },
  {
    "id": 341,
    "title": "Fast & Furious",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Justin Lin",
    "rating": 6.6,
    "votes": 217464,
    "revenue": 155020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6nDZExrDKIXvSAghsFKVFRVJuSf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fast & Furious is a Action directed by Justin Lin.",
    "trailer": "https://www.youtube.com/watch?v=ne5E7hOQqn0"
  },
  {
    "id": 342,
    "title": "Looper",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Rian Johnson",
    "rating": 7.4,
    "votes": 452369,
    "revenue": 66470000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sNjL6SqErDBE8OUZlrDLkexfsCj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Looper is a Action directed by Rian Johnson.",
    "trailer": "https://www.youtube.com/results?search_query=Looper%202012%20official%20trailer"
  },
  {
    "id": 343,
    "title": "White House Down",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Roland Emmerich",
    "rating": 6.4,
    "votes": 173320,
    "revenue": 73100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6TeIVKPw7nXXWy2zKmDmlnSwzb7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "White House Down is a Action directed by Roland Emmerich.",
    "trailer": "https://www.youtube.com/watch?v=aVzMUz3coio"
  },
  {
    "id": 344,
    "title": "Pete's Dragon",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "David Lowery",
    "rating": 6.8,
    "votes": 36322,
    "revenue": 76200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/A9x4Ogk8KUXTfU649NS6lS9TCmu.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pete's Dragon is a Adventure directed by David Lowery.",
    "trailer": "https://www.youtube.com/watch?v=Xhv5Kc8dmv8"
  },
  {
    "id": 345,
    "title": "Spider-Man 3",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Sam Raimi",
    "rating": 6.2,
    "votes": 406219,
    "revenue": 336530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sJMTTGjtjvrMZ7G0oP9D13wNUum.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Spider-Man 3 is a Action directed by Sam Raimi.",
    "trailer": "https://www.youtube.com/watch?v=e5wUilOeOmg"
  },
  {
    "id": 346,
    "title": "The Three Musketeers",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Paul W.S. Anderson",
    "rating": 5.8,
    "votes": 92329,
    "revenue": 20320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/woCADkkDIIKrOMEokbFOEsAYtUa.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Three Musketeers is a Action directed by Paul W.S. Anderson.",
    "trailer": "https://www.youtube.com/watch?v=tNMeRJMKpdw"
  },
  {
    "id": 347,
    "title": "Stardust",
    "year": 2007,
    "genre": [
      "Adventure"
    ],
    "director": "Matthew Vaughn",
    "rating": 7.7,
    "votes": 220664,
    "revenue": 38350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7zbFmxy3DqKYL2M8Hop6uylp2Uy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Stardust is a Adventure directed by Matthew Vaughn.",
    "trailer": "https://www.youtube.com/watch?v=8fsi_QqU5j8"
  },
  {
    "id": 348,
    "title": "American Hustle",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "David O. Russell",
    "rating": 7.3,
    "votes": 379088,
    "revenue": 150120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z6O1KDhfWDTm5ZBr6Ovr0eg8LqO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Hustle is a Crime directed by David O. Russell.",
    "trailer": "https://www.youtube.com/watch?v=h5Cb4SFt7gE"
  },
  {
    "id": 349,
    "title": "Jennifer's Body",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Karyn Kusama",
    "rating": 5.1,
    "votes": 96617,
    "revenue": 16200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wrkjsGcFJxcQqR56kJUYAEKKg2T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jennifer's Body is a Comedy directed by Karyn Kusama.",
    "trailer": "https://www.youtube.com/results?search_query=Jennifer%27s%20Body%202009%20official%20trailer"
  },
  {
    "id": 350,
    "title": "Midnight in Paris",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Woody Allen",
    "rating": 7.7,
    "votes": 320323,
    "revenue": 56820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4wBG5kbfagTQclETblPRRGihk0I.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Midnight in Paris is a Comedy directed by Woody Allen.",
    "trailer": "https://www.youtube.com/watch?v=FAfR8omt-CY"
  },
  {
    "id": 351,
    "title": "Lady Macbeth",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "William Oldroyd",
    "rating": 7.3,
    "votes": 1396,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/xWTJbhTwSTJmhLlX5xAOxPhdnXc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lady Macbeth is a Drama directed by William Oldroyd.",
    "trailer": "https://www.youtube.com/watch?v=TubDRQQA3-k"
  },
  {
    "id": 352,
    "title": "Joy",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "David O. Russell",
    "rating": 6.6,
    "votes": 97679,
    "revenue": 56440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nZAs0HbW82TI1i4Xid83M941Pki.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Joy is a Drama directed by David O. Russell.",
    "trailer": "https://www.youtube.com/watch?v=GVzSZFz7jF8"
  },
  {
    "id": 353,
    "title": "The Dressmaker",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Jocelyn Moorhouse",
    "rating": 7.1,
    "votes": 33352,
    "revenue": 2020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5Loofmo5GTt1Qe2Dz5ERLVlN98T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Dressmaker is a Comedy directed by Jocelyn Moorhouse.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Dressmaker%202015%20official%20trailer"
  },
  {
    "id": 354,
    "title": "Caf\u00e9 Society",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Woody Allen",
    "rating": 6.7,
    "votes": 45579,
    "revenue": 11080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/q9fohCRpQ7m8OTyi82fxa3B86te.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Caf\u00e9 Society is a Comedy directed by Woody Allen.",
    "trailer": "https://www.youtube.com/watch?v=07Bz52514gI"
  },
  {
    "id": 355,
    "title": "Insurgent",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Robert Schwentke",
    "rating": 6.3,
    "votes": 171970,
    "revenue": 130000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dP5Fb6YRfzmCQtRbHOr2kO7tJW9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Insurgent is a Adventure directed by Robert Schwentke.",
    "trailer": "https://www.youtube.com/watch?v=jfaqVegF2mo"
  },
  {
    "id": 356,
    "title": "Seventh Son",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Sergei Bodrov",
    "rating": 5.5,
    "votes": 59958,
    "revenue": 17180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7Q8DfXSjcFSSQDOxz1Sk865wNqI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Seventh Son is a Action directed by Sergei Bodrov.",
    "trailer": "https://www.youtube.com/watch?v=5i90Qr0Qi6w"
  },
  {
    "id": 357,
    "title": "Demain tout commence",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Hugo G\u00e9lin",
    "rating": 7.4,
    "votes": 5496,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/aFgtdhuzgI2eqnIVWtRB03x3pnt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Demain tout commence is a Comedy directed by Hugo G\u00e9lin.",
    "trailer": "https://www.youtube.com/results?search_query=Demain%20tout%20commence%202016%20official%20trailer"
  },
  {
    "id": 358,
    "title": "The Theory of Everything",
    "year": 2014,
    "genre": [
      "Biography"
    ],
    "director": "James Marsh",
    "rating": 7.7,
    "votes": 299718,
    "revenue": 35890000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7kwcLFNt887saoQAL7EY0XnW7VI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Theory of Everything is a Biography directed by James Marsh.",
    "trailer": "https://www.youtube.com/watch?v=PNEUT7R8F4k"
  },
  {
    "id": 359,
    "title": "This Is the End",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Evan Goldberg",
    "rating": 6.6,
    "votes": 327838,
    "revenue": 101470000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tNIW0NhX1hKvUsy6PQ80DOKUhkD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "This Is the End is a Comedy directed by Evan Goldberg.",
    "trailer": "https://www.youtube.com/watch?v=kliQSsD_npo"
  },
  {
    "id": 360,
    "title": "About Time",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Richard Curtis",
    "rating": 7.8,
    "votes": 221600,
    "revenue": 15290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ls6zswrOZVhCXQBh96DlbnLBajM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "About Time is a Comedy directed by Richard Curtis.",
    "trailer": "https://www.youtube.com/watch?v=7OIFdWk83no"
  },
  {
    "id": 361,
    "title": "Step Brothers",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Adam McKay",
    "rating": 6.9,
    "votes": 223065,
    "revenue": 100470000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nvggBbEraUTAVR6ffP3AaBUWSHs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Step Brothers is a Comedy directed by Adam McKay.",
    "trailer": "https://www.youtube.com/watch?v=CewglxElBK0"
  },
  {
    "id": 362,
    "title": "Clown",
    "year": 2014,
    "genre": [
      "Horror"
    ],
    "director": "Jon Watts",
    "rating": 5.7,
    "votes": 14248,
    "revenue": 50000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gp5QyaU49utfWVVL698BzlN2vMh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Clown is a Horror directed by Jon Watts.",
    "trailer": "https://www.youtube.com/watch?v=PNtZu-3di38"
  },
  {
    "id": 363,
    "title": "Star Trek Into Darkness",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "J.J. Abrams",
    "rating": 7.8,
    "votes": 417663,
    "revenue": 228760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/Aim3kVNh1MPIxPEFeJrl9e9Uf1a.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Star Trek Into Darkness is a Action directed by J.J. Abrams.",
    "trailer": "https://www.youtube.com/results?search_query=Star%20Trek%20Into%20Darkness%202013%20official%20trailer"
  },
  {
    "id": 364,
    "title": "Zombieland",
    "year": 2009,
    "genre": [
      "Adventure"
    ],
    "director": "Ruben Fleischer",
    "rating": 7.7,
    "votes": 409403,
    "revenue": 75590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zombieland is a Adventure directed by Ruben Fleischer.",
    "trailer": "https://www.youtube.com/results?search_query=Zombieland%202009%20official%20trailer"
  },
  {
    "id": 365,
    "title": "Hail, Caesar!",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Ethan Coen",
    "rating": 6.3,
    "votes": 89059,
    "revenue": 30000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qvecZ7WyemhGW8fuJ8190p472jQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hail, Caesar! is a Comedy directed by Ethan Coen.",
    "trailer": "https://www.youtube.com/watch?v=4F4Thdn0vlE"
  },
  {
    "id": 366,
    "title": "Slumdog Millionaire",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Danny Boyle",
    "rating": 8.0,
    "votes": 677044,
    "revenue": 141320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5leCCi7ZF0CawAfM5Qo2ECKPprc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Slumdog Millionaire is a Drama directed by Danny Boyle.",
    "trailer": "https://www.youtube.com/watch?v=AIzbwV7on6Q"
  },
  {
    "id": 367,
    "title": "The Twilight Saga: Breaking Dawn - Part 2",
    "year": 2012,
    "genre": [
      "Adventure"
    ],
    "director": "Bill Condon",
    "rating": 5.5,
    "votes": 194329,
    "revenue": 292300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qs8LsHKYlVRmJbFUiSUhhRAygwj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Twilight Saga: Breaking Dawn - Part 2 is a Adventure directed by Bill Condon.",
    "trailer": "https://www.youtube.com/watch?v=fgC8YyYUAmI"
  },
  {
    "id": 368,
    "title": "American Wrestler: The Wizard",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Alex Ranarivelo",
    "rating": 6.9,
    "votes": 286,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/yxK8NVydY0p4ZymT5HB2JXJ8xPW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Wrestler: The Wizard is a Drama directed by Alex Ranarivelo.",
    "trailer": "https://www.youtube.com/results?search_query=American%20Wrestler%3A%20The%20Wizard%202016%20official%20trailer"
  },
  {
    "id": 369,
    "title": "The Amazing Spider-Man",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Marc Webb",
    "rating": 7.0,
    "votes": 474320,
    "revenue": 262029999.99999997,
    "poster": "https://image.tmdb.org/t/p/w500/jexoNYnPd6vVrmygwF6QZmWPFdu.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Amazing Spider-Man is a Action directed by Marc Webb.",
    "trailer": "https://www.youtube.com/watch?v=UERgtSo82WI"
  },
  {
    "id": 370,
    "title": "Ben-Hur",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Timur Bekmambetov",
    "rating": 5.7,
    "votes": 28326,
    "revenue": 26380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/c9CoGrBA5yw8A7YBMz0hGzfzpNq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ben-Hur is a Action directed by Timur Bekmambetov.",
    "trailer": "https://www.youtube.com/results?search_query=Ben-Hur%202016%20official%20trailer"
  },
  {
    "id": 371,
    "title": "Sleight",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "J.D. Dillard",
    "rating": 6.0,
    "votes": 702,
    "revenue": 3850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eLk7yoWxK4S0xkV24YWoPKbIsbf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sleight is a Action directed by J.D. Dillard.",
    "trailer": "https://www.youtube.com/watch?v=lVAwc1Ll7t4"
  },
  {
    "id": 372,
    "title": "The Maze Runner",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Wes Ball",
    "rating": 6.8,
    "votes": 335531,
    "revenue": 102410000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Maze Runner is a Action directed by Wes Ball.",
    "trailer": "https://www.youtube.com/watch?v=3b946aGm0zs"
  },
  {
    "id": 373,
    "title": "Criminal",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Ariel Vromen",
    "rating": 6.3,
    "votes": 38430,
    "revenue": 14270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hn6HmGTopbbxv4Myy2IwGWxViFP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Criminal is a Action directed by Ariel Vromen.",
    "trailer": "https://www.youtube.com/watch?v=--ny4HSCs5U"
  },
  {
    "id": 374,
    "title": "Wanted",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Timur Bekmambetov",
    "rating": 6.7,
    "votes": 312495,
    "revenue": 134570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/njy7Pz7ZHZceO7lNfGIHKphY8Hd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wanted is a Action directed by Timur Bekmambetov.",
    "trailer": "https://www.youtube.com/watch?v=b9YEdjEKme0"
  },
  {
    "id": 375,
    "title": "Florence Foster Jenkins",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Stephen Frears",
    "rating": 6.9,
    "votes": 31776,
    "revenue": 27370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1HAdtUchzWEo0LMFHrgD2UBIBS3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Florence Foster Jenkins is a Biography directed by Stephen Frears.",
    "trailer": "https://www.youtube.com/watch?v=9rRVCNffvKk"
  },
  {
    "id": 376,
    "title": "Collide",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Eran Creevy",
    "rating": 5.7,
    "votes": 7583,
    "revenue": 2200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gVbAyw6GVvkgYH5nsBIrxOmeoia.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Collide is a Action directed by Eran Creevy.",
    "trailer": "https://www.youtube.com/watch?v=gubU4V3ewQw"
  },
  {
    "id": 377,
    "title": "Black Mass",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Scott Cooper",
    "rating": 6.9,
    "votes": 135706,
    "revenue": 62560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zfwciv4LIJkNQsfuhYGv0Nkiweg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Black Mass is a Biography directed by Scott Cooper.",
    "trailer": "https://www.youtube.com/results?search_query=Black%20Mass%202015%20official%20trailer"
  },
  {
    "id": 378,
    "title": "Creed",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Ryan Coogler",
    "rating": 7.6,
    "votes": 175673,
    "revenue": 109710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1BfTsk5VWuw8FCocAhCyqnRbEzq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Creed is a Drama directed by Ryan Coogler.",
    "trailer": "https://www.youtube.com/watch?v=aaVvBYAUQlw"
  },
  {
    "id": 379,
    "title": "Swiss Army Man",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Dan Kwan",
    "rating": 7.1,
    "votes": 61812,
    "revenue": 4210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xE2QfqvAGI8n8ckIiy9FzS9XF94.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Swiss Army Man is a Adventure directed by Dan Kwan.",
    "trailer": "https://www.youtube.com/results?search_query=Swiss%20Army%20Man%202016%20official%20trailer"
  },
  {
    "id": 380,
    "title": "The Expendables 3",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Patrick Hughes",
    "rating": 6.1,
    "votes": 137568,
    "revenue": 39290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/utS5euWHlEdKBNnEFwjpZ2oGuhF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Expendables 3 is a Action directed by Patrick Hughes.",
    "trailer": "https://www.youtube.com/watch?v=KATn_m-AX9I"
  },
  {
    "id": 381,
    "title": "What We Do in the Shadows",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Jemaine Clement",
    "rating": 7.6,
    "votes": 84016,
    "revenue": 3330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/a2rD3i3DBMeYbA34rBv6z3B9S3a.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "What We Do in the Shadows is a Comedy directed by Jemaine Clement.",
    "trailer": "https://www.youtube.com/results?search_query=What%20We%20Do%20in%20the%20Shadows%202014%20official%20trailer"
  },
  {
    "id": 382,
    "title": "Southpaw",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Antoine Fuqua",
    "rating": 7.4,
    "votes": 169083,
    "revenue": 52420000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kSQ49Fi3NVTqGGXILmxV2T2pdkG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Southpaw is a Drama directed by Antoine Fuqua.",
    "trailer": "https://www.youtube.com/results?search_query=Southpaw%202015%20official%20trailer"
  },
  {
    "id": 383,
    "title": "Hush",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Mike Flanagan",
    "rating": 6.6,
    "votes": 45867,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tyqD4C2vVKrvP3FkFK0GS9IWbTo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hush is a Horror directed by Mike Flanagan.",
    "trailer": "https://www.youtube.com/results?search_query=Hush%202016%20official%20trailer"
  },
  {
    "id": 384,
    "title": "Bridge of Spies",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Steven Spielberg",
    "rating": 7.6,
    "votes": 217938,
    "revenue": 72310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fmOOjHAQzxr0c1sfcY4qkiSRBH6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bridge of Spies is a Drama directed by Steven Spielberg.",
    "trailer": "https://www.youtube.com/results?search_query=Bridge%20of%20Spies%202015%20official%20trailer"
  },
  {
    "id": 385,
    "title": "The Lego Movie",
    "year": 2014,
    "genre": [
      "Animation"
    ],
    "director": "Phil Lord",
    "rating": 7.8,
    "votes": 266508,
    "revenue": 257760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lbctonEnewCYZ4FYoTZhs8cidAl.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lego Movie is a Animation directed by Phil Lord.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Lego%20Movie%202014%20official%20trailer"
  },
  {
    "id": 386,
    "title": "Everest",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Baltasar Korm\u00e1kur",
    "rating": 7.1,
    "votes": 154647,
    "revenue": 43250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2jKOu2bjpLP6NXJcm7Ep14bDGtA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Everest is a Action directed by Baltasar Korm\u00e1kur.",
    "trailer": "https://www.youtube.com/watch?v=25hCa-gKD6U"
  },
  {
    "id": 387,
    "title": "Pixels",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Chris Columbus",
    "rating": 5.6,
    "votes": 101092,
    "revenue": 78750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/d26S5EfVXLNxRXqyFy1yyl3qRq3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pixels is a Action directed by Chris Columbus.",
    "trailer": "https://www.youtube.com/watch?v=oNSr8aqJ5Q4"
  },
  {
    "id": 388,
    "title": "Robin Hood",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Ridley Scott",
    "rating": 6.7,
    "votes": 221117,
    "revenue": 105220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9NS5QGOfck24yL3bZqWeW06PgPC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Robin Hood is a Action directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/watch?v=gnT3DRvQXXM"
  },
  {
    "id": 389,
    "title": "The Wolverine",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "James Mangold",
    "rating": 6.7,
    "votes": 355362,
    "revenue": 132550000.00000001,
    "poster": "https://image.tmdb.org/t/p/w500/t2wVAcoRlKvEIVSbiYDb8d0QqqS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Wolverine is a Action directed by James Mangold.",
    "trailer": "https://www.youtube.com/watch?v=DwG56k6VGOE"
  },
  {
    "id": 390,
    "title": "John Carter",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Andrew Stanton",
    "rating": 6.6,
    "votes": 220667,
    "revenue": 73060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lCxz1Yus07QCQQCb6I0Dr3Lmqpx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "John Carter is a Action directed by Andrew Stanton.",
    "trailer": "https://www.youtube.com/watch?v=WR6HUkzxjR0"
  },
  {
    "id": 391,
    "title": "Keanu",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Peter Atencio",
    "rating": 6.3,
    "votes": 31913,
    "revenue": 20570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uswOLfIUdDjqSz1x28GR72ffhff.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Keanu is a Action directed by Peter Atencio.",
    "trailer": "https://www.youtube.com/watch?v=K9zy27apgI8"
  },
  {
    "id": 392,
    "title": "The Gunman",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Pierre Morel",
    "rating": 5.8,
    "votes": 31194,
    "revenue": 10640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lnUozDnDANTsDYEdsNsHC6b8IiS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Gunman is a Action directed by Pierre Morel.",
    "trailer": "https://www.youtube.com/watch?v=Ug9xufczPVE"
  },
  {
    "id": 393,
    "title": "Steve Jobs",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Danny Boyle",
    "rating": 7.2,
    "votes": 116112,
    "revenue": 17750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ljiRO29Y9khEERRqMluptUYunJ9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Steve Jobs is a Biography directed by Danny Boyle.",
    "trailer": "https://www.youtube.com/results?search_query=Steve%20Jobs%202015%20official%20trailer"
  },
  {
    "id": 394,
    "title": "Whisky Galore",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Gillies MacKinnon",
    "rating": 5.0,
    "votes": 102,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/A15APXObFPol0J1YqHp1nbAe1A7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Whisky Galore is a Comedy directed by Gillies MacKinnon.",
    "trailer": "https://www.youtube.com/watch?v=ClRUmO7_Bkc"
  },
  {
    "id": 395,
    "title": "Grown Ups 2",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Dennis Dugan",
    "rating": 5.4,
    "votes": 114482,
    "revenue": 133669999.99999999,
    "poster": "https://image.tmdb.org/t/p/w500/hT6ijOtjtYrnyDhN7VA2QWyGFAm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Grown Ups 2 is a Comedy directed by Dennis Dugan.",
    "trailer": "https://www.youtube.com/watch?v=EClDbUb-bgc"
  },
  {
    "id": 396,
    "title": "The Age of Adaline",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Lee Toland Krieger",
    "rating": 7.2,
    "votes": 112288,
    "revenue": 42480000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3XFuCS6wBfpSnUQboLd1JtkJqe0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Age of Adaline is a Drama directed by Lee Toland Krieger.",
    "trailer": "https://www.youtube.com/watch?v=7UzSekc0LoQ"
  },
  {
    "id": 397,
    "title": "The Incredible Hulk",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Louis Leterrier",
    "rating": 6.8,
    "votes": 342355,
    "revenue": 134520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Incredible Hulk is a Action directed by Louis Leterrier.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Incredible%20Hulk%202008%20official%20trailer"
  },
  {
    "id": 398,
    "title": "Couples Retreat",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Peter Billingsley",
    "rating": 5.5,
    "votes": 86417,
    "revenue": 109180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/igXVSRZsNX3TZsKrQqSyEJvzHRF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Couples Retreat is a Comedy directed by Peter Billingsley.",
    "trailer": "https://www.youtube.com/results?search_query=Couples%20Retreat%202009%20official%20trailer"
  },
  {
    "id": 399,
    "title": "Absolutely Anything",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Terry Jones",
    "rating": 6.0,
    "votes": 26587,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/8tkhYdm324iCX1LaUc1EmY2Pth7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Absolutely Anything is a Comedy directed by Terry Jones.",
    "trailer": "https://www.youtube.com/results?search_query=Absolutely%20Anything%202015%20official%20trailer"
  },
  {
    "id": 400,
    "title": "Magic Mike",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Steven Soderbergh",
    "rating": 6.1,
    "votes": 113686,
    "revenue": 113710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cfRv1INLSSumjvxAqEGOP6b0Aw1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Magic Mike is a Comedy directed by Steven Soderbergh.",
    "trailer": "https://www.youtube.com/results?search_query=Magic%20Mike%202012%20official%20trailer"
  },
  {
    "id": 401,
    "title": "Minions",
    "year": 2015,
    "genre": [
      "Animation"
    ],
    "director": "Kyle Balda",
    "rating": 6.4,
    "votes": 159830,
    "revenue": 336030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Minions is a Animation directed by Kyle Balda.",
    "trailer": "https://www.youtube.com/results?search_query=Minions%202015%20official%20trailer"
  },
  {
    "id": 402,
    "title": "The Black Room",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Rolfe Kanefsky",
    "rating": 3.9,
    "votes": 240,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/sBlF5Gh4GQO5WC96MSfa2S5p4R6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Black Room is a Horror directed by Rolfe Kanefsky.",
    "trailer": "https://www.youtube.com/watch?v=gBjE7bBKzZo"
  },
  {
    "id": 403,
    "title": "Bronson",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Nicolas Winding Refn",
    "rating": 7.1,
    "votes": 93972,
    "revenue": 100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6diyyGIbBNiANsdIaCGtyv4IofR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bronson is a Action directed by Nicolas Winding Refn.",
    "trailer": "https://www.youtube.com/results?search_query=Bronson%202008%20official%20trailer"
  },
  {
    "id": 404,
    "title": "Despicable Me",
    "year": 2010,
    "genre": [
      "Animation"
    ],
    "director": "Pierre Coffin",
    "rating": 7.7,
    "votes": 410607,
    "revenue": 251500000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b1BT309QWjtFUlJPLmXmrcHOWEL.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Despicable Me is a Animation directed by Pierre Coffin.",
    "trailer": "https://www.youtube.com/watch?v=zzCZ1W_CUoI"
  },
  {
    "id": 405,
    "title": "The Best of Me",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Michael Hoffman",
    "rating": 6.7,
    "votes": 49041,
    "revenue": 26760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/g11FuvrR8EH5ui16A8juKoavhb3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Best of Me is a Drama directed by Michael Hoffman.",
    "trailer": "https://www.youtube.com/watch?v=emc9uAdvIBo"
  },
  {
    "id": 406,
    "title": "The Invitation",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Karyn Kusama",
    "rating": 6.7,
    "votes": 40529,
    "revenue": 230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/esubm23z8N5JUA1wQ5yLSjLicDx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Invitation is a Drama directed by Karyn Kusama.",
    "trailer": "https://www.youtube.com/watch?v=wcFaLtnx43w"
  },
  {
    "id": 407,
    "title": "Zero Dark Thirty",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Kathryn Bigelow",
    "rating": 7.4,
    "votes": 226661,
    "revenue": 95720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wNSdSSxowM3WIqmPJNg3RagYbwP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zero Dark Thirty is a Drama directed by Kathryn Bigelow.",
    "trailer": "https://www.youtube.com/results?search_query=Zero%20Dark%20Thirty%202012%20official%20trailer"
  },
  {
    "id": 408,
    "title": "Tangled",
    "year": 2010,
    "genre": [
      "Animation"
    ],
    "director": "Nathan Greno",
    "rating": 7.8,
    "votes": 316459,
    "revenue": 200810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tangled is a Animation directed by Nathan Greno.",
    "trailer": "https://www.youtube.com/watch?v=gsYKF8ecC8g"
  },
  {
    "id": 409,
    "title": "The Hunger Games: Mockingjay - Part 2",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Francis Lawrence",
    "rating": 6.6,
    "votes": 202380,
    "revenue": 281670000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lImKHDfExAulp16grYm8zD5eONE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hunger Games: Mockingjay - Part 2 is a Action directed by Francis Lawrence.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Hunger%20Games%3A%20Mockingjay%20-%20Part%202%202015%20official%20trailer"
  },
  {
    "id": 410,
    "title": "Vacation",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "John Francis Daley",
    "rating": 6.1,
    "votes": 74589,
    "revenue": 58880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fYDALvoCt3DBlSWN6pSAnGQ9ld7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Vacation is a Adventure directed by John Francis Daley.",
    "trailer": "https://www.youtube.com/results?search_query=Vacation%202015%20official%20trailer"
  },
  {
    "id": 411,
    "title": "Taken",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Pierre Morel",
    "rating": 7.8,
    "votes": 502961,
    "revenue": 145000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ognkaUSNgJe1a2pjB4UNdzEo5jT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Taken is a Action directed by Pierre Morel.",
    "trailer": "https://www.youtube.com/watch?v=ZxKDnpiJaVc"
  },
  {
    "id": 412,
    "title": "Pitch Perfect 2",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Elizabeth Banks",
    "rating": 6.5,
    "votes": 108306,
    "revenue": 183440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fQaEGzFmvTYu3G641WV0Tg9auAt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pitch Perfect 2 is a Comedy directed by Elizabeth Banks.",
    "trailer": "https://www.youtube.com/results?search_query=Pitch%20Perfect%202%202015%20official%20trailer"
  },
  {
    "id": 413,
    "title": "Monsters University",
    "year": 2013,
    "genre": [
      "Animation"
    ],
    "director": "Dan Scanlon",
    "rating": 7.3,
    "votes": 252119,
    "revenue": 268490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Monsters University is a Animation directed by Dan Scanlon.",
    "trailer": "https://www.youtube.com/watch?v=xBzPioph8CI"
  },
  {
    "id": 414,
    "title": "Elle",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Paul Verhoeven",
    "rating": 7.2,
    "votes": 35417,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/z446adpGUVXXPxrLpKBGnYBcofk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Elle is a Crime directed by Paul Verhoeven.",
    "trailer": "https://www.youtube.com/results?search_query=Elle%202016%20official%20trailer"
  },
  {
    "id": 415,
    "title": "Mechanic: Resurrection",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Dennis Gansel",
    "rating": 5.6,
    "votes": 48161,
    "revenue": 21200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bG3Q6EFcngpPn7uPuQTzTuq9DgV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mechanic: Resurrection is a Action directed by Dennis Gansel.",
    "trailer": "https://www.youtube.com/results?search_query=Mechanic%3A%20Resurrection%202016%20official%20trailer"
  },
  {
    "id": 416,
    "title": "Tusk",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Kevin Smith",
    "rating": 5.4,
    "votes": 34546,
    "revenue": 1820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pA2SgITmH0lzet9Nn5cxeinRKMv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tusk is a Comedy directed by Kevin Smith.",
    "trailer": "https://www.youtube.com/results?search_query=Tusk%202014%20official%20trailer"
  },
  {
    "id": 417,
    "title": "The Headhunter's Calling",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Mark Williams",
    "rating": 6.9,
    "votes": 164,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/s8utY6usadSNU82yFnAlFRZyScM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Headhunter's Calling is a Drama directed by Mark Williams.",
    "trailer": "https://www.youtube.com/watch?v=StVCeIli1hI"
  },
  {
    "id": 418,
    "title": "Atonement",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Joe Wright",
    "rating": 7.8,
    "votes": 202890,
    "revenue": 50920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hMRIyBjPzxaSXWM06se3OcNjIQa.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Atonement is a Drama directed by Joe Wright.",
    "trailer": "https://www.youtube.com/watch?v=WZAttjca0b8"
  },
  {
    "id": 419,
    "title": "Harry Potter and the Deathly Hallows: Part 1",
    "year": 2010,
    "genre": [
      "Adventure"
    ],
    "director": "David Yates",
    "rating": 7.7,
    "votes": 357213,
    "revenue": 294980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Harry Potter and the Deathly Hallows: Part 1 is a Adventure directed by David Yates.",
    "trailer": "https://www.youtube.com/results?search_query=Harry%20Potter%20and%20the%20Deathly%20Hallows%3A%20Part%201%202010%20official%20trailer"
  },
  {
    "id": 420,
    "title": "Shame",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Steve McQueen",
    "rating": 7.2,
    "votes": 155010,
    "revenue": 4000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cAWLz9kFv4xc6IsEXTj2DrcqD55.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Shame is a Drama directed by Steve McQueen.",
    "trailer": "https://www.youtube.com/watch?v=Op9iQiB_ANI"
  },
  {
    "id": 421,
    "title": "Hanna",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Joe Wright",
    "rating": 6.8,
    "votes": 164208,
    "revenue": 40250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6QDeHwBXDHbCbuzStgUpuUAqnap.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hanna is a Action directed by Joe Wright.",
    "trailer": "https://www.youtube.com/watch?v=Tjtv8tVtVRw"
  },
  {
    "id": 422,
    "title": "The Babysitters",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "David Ross",
    "rating": 5.7,
    "votes": 8914,
    "revenue": 40000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nsrNUqGXI95unRKZEu8BJ584xWn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Babysitters is a Drama directed by David Ross.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Babysitters%202007%20official%20trailer"
  },
  {
    "id": 423,
    "title": "Pride and Prejudice and Zombies",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Burr Steers",
    "rating": 5.8,
    "votes": 35003,
    "revenue": 10910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jsJlOhVHiz1xXr36616EI8tJ4b2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pride and Prejudice and Zombies is a Action directed by Burr Steers.",
    "trailer": "https://www.youtube.com/results?search_query=Pride%20and%20Prejudice%20and%20Zombies%202016%20official%20trailer"
  },
  {
    "id": 424,
    "title": "300: Rise of an Empire",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Noam Murro",
    "rating": 6.2,
    "votes": 237887,
    "revenue": 106370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wYDdWN1McB1Sio4z1dPSkb40Z78.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "300: Rise of an Empire is a Action directed by Noam Murro.",
    "trailer": "https://www.youtube.com/watch?v=bsoJaQ2gZh4"
  },
  {
    "id": 425,
    "title": "London Has Fallen",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Babak Najafi",
    "rating": 5.9,
    "votes": 100702,
    "revenue": 62400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iEbLkYzyiUdOKNK4WNBFyGH7r2Y.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "London Has Fallen is a Action directed by Babak Najafi.",
    "trailer": "https://www.youtube.com/watch?v=oQhX4JxGHtw"
  },
  {
    "id": 426,
    "title": "The Curious Case of Benjamin Button",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "David Fincher",
    "rating": 7.8,
    "votes": 485075,
    "revenue": 127490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Curious Case of Benjamin Button is a Drama directed by David Fincher.",
    "trailer": "https://www.youtube.com/watch?v=G-BXR2k780Y"
  },
  {
    "id": 427,
    "title": "Sin City: A Dame to Kill For",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Frank Miller",
    "rating": 6.5,
    "votes": 122185,
    "revenue": 13750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/50kALxDX4mmzIRljbNbPY0u4cie.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sin City: A Dame to Kill For is a Action directed by Frank Miller.",
    "trailer": "https://www.youtube.com/watch?v=XVjDcUCui0w"
  },
  {
    "id": 428,
    "title": "The Bourne Ultimatum",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Paul Greengrass",
    "rating": 8.1,
    "votes": 525700,
    "revenue": 227140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/15rMz5MRXFp7CP4VxhjYw4y0FUn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Bourne Ultimatum is a Action directed by Paul Greengrass.",
    "trailer": "https://www.youtube.com/watch?v=ohkW_xbPl9A"
  },
  {
    "id": 429,
    "title": "Srpski film",
    "year": 2010,
    "genre": [
      "Horror"
    ],
    "director": "Srdjan Spasojevic",
    "rating": 5.2,
    "votes": 43648,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/yIQqiw3Az5QYNHLCUoCTtxXH24G.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Srpski film is a Horror directed by Srdjan Spasojevic.",
    "trailer": "https://www.youtube.com/watch?v=RcHq2W1dXRU"
  },
  {
    "id": 430,
    "title": "The Purge: Election Year",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "James DeMonaco",
    "rating": 6.0,
    "votes": 54216,
    "revenue": 79000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gg7tlp45xqGWMra0sqQVPvybje2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Purge: Election Year is a Action directed by James DeMonaco.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Purge%3A%20Election%20Year%202016%20official%20trailer"
  },
  {
    "id": 431,
    "title": "3 Idiots",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Rajkumar Hirani",
    "rating": 8.4,
    "votes": 238789,
    "revenue": 6520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "3 Idiots is a Comedy directed by Rajkumar Hirani.",
    "trailer": "https://www.youtube.com/watch?v=22zjP29xZGM"
  },
  {
    "id": 432,
    "title": "Zoolander 2",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Ben Stiller",
    "rating": 4.7,
    "votes": 48297,
    "revenue": 28840000.0,
    "poster": "https://image.tmdb.org/t/p/w500/n8AJzALlTPBwe9Tkv3tdxbiAr9i.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zoolander 2 is a Comedy directed by Ben Stiller.",
    "trailer": "https://www.youtube.com/watch?v=4CL4LNWHegk"
  },
  {
    "id": 433,
    "title": "World War Z",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Marc Forster",
    "rating": 7.0,
    "votes": 494819,
    "revenue": 202350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aCnVdvExw6UWSeQfr0tUH3jr4qG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "World War Z is a Action directed by Marc Forster.",
    "trailer": "https://www.youtube.com/watch?v=TvRCQM2HrXs"
  },
  {
    "id": 434,
    "title": "Mission: Impossible - Ghost Protocol",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Brad Bird",
    "rating": 7.4,
    "votes": 382459,
    "revenue": 209360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eRZTGx7GsiKqPch96k27LK005ZL.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mission: Impossible - Ghost Protocol is a Action directed by Brad Bird.",
    "trailer": "https://www.youtube.com/results?search_query=Mission%3A%20Impossible%20-%20Ghost%20Protocol%202011%20official%20trailer"
  },
  {
    "id": 435,
    "title": "Let Me Make You a Martyr",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Corey Asraf",
    "rating": 6.4,
    "votes": 223,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/AjtdZc2CIdOeTElbvvC8Dh3z980.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Let Me Make You a Martyr is a Action directed by Corey Asraf.",
    "trailer": "https://www.youtube.com/results?search_query=Let%20Me%20Make%20You%20a%20Martyr%202016%20official%20trailer"
  },
  {
    "id": 436,
    "title": "Filth",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Jon S. Baird",
    "rating": 7.1,
    "votes": 81301,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tzTKDgF6GcGaxKvRHR5J4MeWJ7b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Filth is a Comedy directed by Jon S. Baird.",
    "trailer": "https://www.youtube.com/results?search_query=Filth%202013%20official%20trailer"
  },
  {
    "id": 437,
    "title": "The Longest Ride",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "George Tillman Jr.",
    "rating": 7.1,
    "votes": 58421,
    "revenue": 37430000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qdUVfvPBvT6cetDDM7rn8y2CNZE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Longest Ride is a Drama directed by George Tillman Jr..",
    "trailer": "https://www.youtube.com/watch?v=uEDb35R7na8"
  },
  {
    "id": 438,
    "title": "The imposible",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "J.A. Bayona",
    "rating": 7.6,
    "votes": 156189,
    "revenue": 19000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/k0DLCiDbnYywOHiISALbl2EH2NE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The imposible is a Drama directed by J.A. Bayona.",
    "trailer": "https://www.youtube.com/watch?v=PaY8EeUYh10"
  },
  {
    "id": 439,
    "title": "Kick-Ass 2",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Jeff Wadlow",
    "rating": 6.6,
    "votes": 214825,
    "revenue": 28750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1go2A3gdQjaMuHWquybgoJlQRcX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kick-Ass 2 is a Action directed by Jeff Wadlow.",
    "trailer": "https://www.youtube.com/results?search_query=Kick-Ass%202%202013%20official%20trailer"
  },
  {
    "id": 440,
    "title": "Folk Hero & Funny Guy",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Jeff Grace",
    "rating": 5.6,
    "votes": 220,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/dLazZ9AiumqJXBpF3x08b5NyOfh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Folk Hero & Funny Guy is a Comedy directed by Jeff Grace.",
    "trailer": "https://www.youtube.com/watch?v=hdBCp60TpN0"
  },
  {
    "id": 441,
    "title": "Oz the Great and Powerful",
    "year": 2013,
    "genre": [
      "Adventure"
    ],
    "director": "Sam Raimi",
    "rating": 6.3,
    "votes": 181521,
    "revenue": 234900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tkzfAUEKoUp4YFNbZV9hfpZOz0z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Oz the Great and Powerful is a Adventure directed by Sam Raimi.",
    "trailer": "https://www.youtube.com/results?search_query=Oz%20the%20Great%20and%20Powerful%202013%20official%20trailer"
  },
  {
    "id": 442,
    "title": "Brooklyn",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "John Crowley",
    "rating": 7.5,
    "votes": 94977,
    "revenue": 38320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cs7W8j5lI7qzRW6tKSj9p1Q0Ze7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Brooklyn is a Drama directed by John Crowley.",
    "trailer": "https://www.youtube.com/results?search_query=Brooklyn%202015%20official%20trailer"
  },
  {
    "id": 443,
    "title": "Coraline",
    "year": 2009,
    "genre": [
      "Animation"
    ],
    "director": "Henry Selick",
    "rating": 7.7,
    "votes": 156620,
    "revenue": 75280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4jeFXQYytChdZYE9JYO7Un87IlW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Coraline is a Animation directed by Henry Selick.",
    "trailer": "https://www.youtube.com/results?search_query=Coraline%202009%20official%20trailer"
  },
  {
    "id": 444,
    "title": "Blue Valentine",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Derek Cianfrance",
    "rating": 7.4,
    "votes": 151409,
    "revenue": 9700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dc8BdKnDY5Iy28KzUGtHIXuqqFK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blue Valentine is a Drama directed by Derek Cianfrance.",
    "trailer": "https://www.youtube.com/results?search_query=Blue%20Valentine%202010%20official%20trailer"
  },
  {
    "id": 445,
    "title": "The Thinning",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Michael J. Gallagher",
    "rating": 6.0,
    "votes": 4531,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/1vgtCoBbBzeoW78g8fHT4EekoM2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Thinning is a Thriller directed by Michael J. Gallagher.",
    "trailer": "https://www.youtube.com/watch?v=8FbQoI8P7c4"
  },
  {
    "id": 446,
    "title": "Silent Hill",
    "year": 2006,
    "genre": [
      "Adventure"
    ],
    "director": "Christophe Gans",
    "rating": 6.6,
    "votes": 184152,
    "revenue": 46980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/r0bEDWO2w4a43K2xTNSF284qOsc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Silent Hill is a Adventure directed by Christophe Gans.",
    "trailer": "https://www.youtube.com/watch?v=1mfnhu8sO5k"
  },
  {
    "id": 447,
    "title": "Dredd",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Pete Travis",
    "rating": 7.1,
    "votes": 213764,
    "revenue": 13400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wLx65gtGVnUFCxceHWGszcruCZj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dredd is a Action directed by Pete Travis.",
    "trailer": "https://www.youtube.com/results?search_query=Dredd%202012%20official%20trailer"
  },
  {
    "id": 448,
    "title": "Hunt for the Wilderpeople",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Taika Waititi",
    "rating": 7.9,
    "votes": 52331,
    "revenue": 5200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hkmz9rxgcweizXNElozGeKwmAJE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hunt for the Wilderpeople is a Adventure directed by Taika Waititi.",
    "trailer": "https://www.youtube.com/results?search_query=Hunt%20for%20the%20Wilderpeople%202016%20official%20trailer"
  },
  {
    "id": 449,
    "title": "Big Hero 6",
    "year": 2014,
    "genre": [
      "Animation"
    ],
    "director": "Don Hall",
    "rating": 7.8,
    "votes": 309186,
    "revenue": 222490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Big Hero 6 is a Animation directed by Don Hall.",
    "trailer": "https://www.youtube.com/results?search_query=Big%20Hero%206%202014%20official%20trailer"
  },
  {
    "id": 450,
    "title": "Carrie",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Kimberly Peirce",
    "rating": 5.9,
    "votes": 113272,
    "revenue": 35270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bJJ3xK4pMnfao0wfzySfC47dp8G.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Carrie is a Drama directed by Kimberly Peirce.",
    "trailer": "https://www.youtube.com/watch?v=zbdIXI1s3aU"
  },
  {
    "id": 451,
    "title": "Iron Man 2",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Jon Favreau",
    "rating": 7.0,
    "votes": 556666,
    "revenue": 312060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Iron Man 2 is a Action directed by Jon Favreau.",
    "trailer": "https://www.youtube.com/results?search_query=Iron%20Man%202%202010%20official%20trailer"
  },
  {
    "id": 452,
    "title": "Demolition",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Jean-Marc Vall\u00e9e",
    "rating": 7.0,
    "votes": 58720,
    "revenue": 1820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4t56LZ1KbOOxgKfqMKN6truBDVc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Demolition is a Comedy directed by Jean-Marc Vall\u00e9e.",
    "trailer": "https://www.youtube.com/results?search_query=Demolition%202015%20official%20trailer"
  },
  {
    "id": 453,
    "title": "Pandorum",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Christian Alvart",
    "rating": 6.8,
    "votes": 126656,
    "revenue": 10330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mNMfa6r3pl0EzFIKEkVcxyr6Rc7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pandorum is a Action directed by Christian Alvart.",
    "trailer": "https://www.youtube.com/watch?v=9q42L4XNVhQ"
  },
  {
    "id": 454,
    "title": "Olympus Has Fallen",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Antoine Fuqua",
    "rating": 6.5,
    "votes": 214994,
    "revenue": 98900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/u3GTFGwesNBNd0t1hiLaEk1iqZU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Olympus Has Fallen is a Action directed by Antoine Fuqua.",
    "trailer": "https://www.youtube.com/watch?v=74F_pts7Uhg"
  },
  {
    "id": 455,
    "title": "I Am Number Four",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "D.J. Caruso",
    "rating": 6.1,
    "votes": 202682,
    "revenue": 55090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2NrP3h3GEsrPXX60bmjKuYWAvl9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I Am Number Four is a Action directed by D.J. Caruso.",
    "trailer": "https://www.youtube.com/watch?v=XR2QSlHpKg4"
  },
  {
    "id": 456,
    "title": "Jagten",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Thomas Vinterberg",
    "rating": 8.3,
    "votes": 192263,
    "revenue": 610000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jkixsXzRh28q3PCqFoWcf7unghT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jagten is a Drama directed by Thomas Vinterberg.",
    "trailer": "https://www.youtube.com/results?search_query=Jagten%202012%20official%20trailer"
  },
  {
    "id": 457,
    "title": "The Proposal",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Anne Fletcher",
    "rating": 6.7,
    "votes": 241709,
    "revenue": 163950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6stnAm1wSek8ZrislwK4xGTyCnt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Proposal is a Comedy directed by Anne Fletcher.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Proposal%202009%20official%20trailer"
  },
  {
    "id": 458,
    "title": "Get Hard",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Etan Cohen",
    "rating": 6.0,
    "votes": 95119,
    "revenue": 90350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rJPbS2cYOYhDCjT5NmW1Fm6gFl3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Get Hard is a Comedy directed by Etan Cohen.",
    "trailer": "https://www.youtube.com/watch?v=dC1JWT4iB94"
  },
  {
    "id": 459,
    "title": "Just Go with It",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Dennis Dugan",
    "rating": 6.4,
    "votes": 182069,
    "revenue": 103030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3rz7bfGsPGcI6cfY002n9VrUgao.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Just Go with It is a Comedy directed by Dennis Dugan.",
    "trailer": "https://www.youtube.com/watch?v=fpj7i2CPt8M"
  },
  {
    "id": 460,
    "title": "Revolutionary Road",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Sam Mendes",
    "rating": 7.3,
    "votes": 159736,
    "revenue": 22880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cvkD3yiVXLg3as8EAG3LaTycONQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Revolutionary Road is a Drama directed by Sam Mendes.",
    "trailer": "https://www.youtube.com/results?search_query=Revolutionary%20Road%202008%20official%20trailer"
  },
  {
    "id": 461,
    "title": "The Town",
    "year": 2010,
    "genre": [
      "Crime"
    ],
    "director": "Ben Affleck",
    "rating": 7.6,
    "votes": 294553,
    "revenue": 92170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3NIzyXkfylsjflRKSz8Fts3lXzm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Town is a Crime directed by Ben Affleck.",
    "trailer": "https://www.youtube.com/watch?v=uAjECYnrYks"
  },
  {
    "id": 462,
    "title": "The Boy",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "William Brent Bell",
    "rating": 6.0,
    "votes": 51235,
    "revenue": 35790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kW2vgzhyWXQu5UxNzebPokipBqH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Boy is a Horror directed by William Brent Bell.",
    "trailer": "https://www.youtube.com/watch?v=jfhHg3eeqS0"
  },
  {
    "id": 463,
    "title": "Denial",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Mick Jackson",
    "rating": 6.6,
    "votes": 8229,
    "revenue": 4070000.0000000005,
    "poster": "https://image.tmdb.org/t/p/w500/cJLbcWqV6sKwPpX5uT4xaklTgQz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Denial is a Biography directed by Mick Jackson.",
    "trailer": "https://www.youtube.com/watch?v=Gfyw7Uz8_2A"
  },
  {
    "id": 464,
    "title": "Predestination",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Michael Spierig",
    "rating": 7.5,
    "votes": 187760,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/38Xr1JnV1ZcLQ55zmdSp6n475cZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Predestination is a Drama directed by Michael Spierig.",
    "trailer": "https://www.youtube.com/watch?v=xxG-YfedrfU"
  },
  {
    "id": 465,
    "title": "Goosebumps",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Rob Letterman",
    "rating": 6.3,
    "votes": 57602,
    "revenue": 80020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aeZT9pqEgrmXOGdESFkAuVjX6kw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Goosebumps is a Adventure directed by Rob Letterman.",
    "trailer": "https://www.youtube.com/watch?v=dr8hmqAgbtg"
  },
  {
    "id": 466,
    "title": "Sherlock Holmes: A Game of Shadows",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Guy Ritchie",
    "rating": 7.5,
    "votes": 357436,
    "revenue": 186830000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2HsHurlnTOyU6yUS14gY6BQCyRs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sherlock Holmes: A Game of Shadows is a Action directed by Guy Ritchie.",
    "trailer": "https://www.youtube.com/watch?v=amE1MxxRUFI"
  },
  {
    "id": 467,
    "title": "Salt",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Phillip Noyce",
    "rating": 6.4,
    "votes": 255813,
    "revenue": 118310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ppXyhOe8UCEOrBRSYqE3SkHwrcR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Salt is a Action directed by Phillip Noyce.",
    "trailer": "https://www.youtube.com/watch?v=LbkQTB-OJsk"
  },
  {
    "id": 468,
    "title": "Enemy",
    "year": 2013,
    "genre": [
      "Mystery"
    ],
    "director": "Denis Villeneuve",
    "rating": 6.9,
    "votes": 111558,
    "revenue": 1010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vf40tyDRKZsBmaLsYeopzfFLzLx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Enemy is a Mystery directed by Denis Villeneuve.",
    "trailer": "https://www.youtube.com/results?search_query=Enemy%202013%20official%20trailer"
  },
  {
    "id": 469,
    "title": "District 9",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Neill Blomkamp",
    "rating": 8.0,
    "votes": 556794,
    "revenue": 115650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "District 9 is a Action directed by Neill Blomkamp.",
    "trailer": "https://www.youtube.com/watch?v=_BjWEn5yvmw"
  },
  {
    "id": 470,
    "title": "The Other Guys",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Adam McKay",
    "rating": 6.7,
    "votes": 199900,
    "revenue": 119220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wNEHNqo3MgHmj3BUiPSqqq5czcm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Other Guys is a Action directed by Adam McKay.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Other%20Guys%202010%20official%20trailer"
  },
  {
    "id": 471,
    "title": "American Gangster",
    "year": 2007,
    "genre": [
      "Biography"
    ],
    "director": "Ridley Scott",
    "rating": 7.8,
    "votes": 337835,
    "revenue": 130130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sX9idXDqRUxE5ffww3n3RV5gL55.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Gangster is a Biography directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/watch?v=BV_nssS6Zkg"
  },
  {
    "id": 472,
    "title": "Marie Antoinette",
    "year": 2006,
    "genre": [
      "Biography"
    ],
    "director": "Sofia Coppola",
    "rating": 6.4,
    "votes": 83941,
    "revenue": 15960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cybXGmv8Rjd5Os8Xml6YxMBQ0Zt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Marie Antoinette is a Biography directed by Sofia Coppola.",
    "trailer": "https://www.youtube.com/results?search_query=Marie%20Antoinette%202006%20official%20trailer"
  },
  {
    "id": 473,
    "title": "2012",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Roland Emmerich",
    "rating": 5.8,
    "votes": 297984,
    "revenue": 166110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zaqam2RNscH5ooYFWInV6hjx6y5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "2012 is a Action directed by Roland Emmerich.",
    "trailer": "https://www.youtube.com/watch?v=ce0N3TEcFw0"
  },
  {
    "id": 474,
    "title": "Harry Potter and the Half-Blood Prince",
    "year": 2009,
    "genre": [
      "Adventure"
    ],
    "director": "David Yates",
    "rating": 7.5,
    "votes": 351059,
    "revenue": 301960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Harry Potter and the Half-Blood Prince is a Adventure directed by David Yates.",
    "trailer": "https://www.youtube.com/results?search_query=Harry%20Potter%20and%20the%20Half-Blood%20Prince%202009%20official%20trailer"
  },
  {
    "id": 475,
    "title": "Argo",
    "year": 2012,
    "genre": [
      "Biography"
    ],
    "director": "Ben Affleck",
    "rating": 7.7,
    "votes": 481274,
    "revenue": 136020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/m5gPWFZFIp4UJFABgWyLkbXv8GX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Argo is a Biography directed by Ben Affleck.",
    "trailer": "https://www.youtube.com/watch?v=3RrtxIci4T0"
  },
  {
    "id": 476,
    "title": "Eddie the Eagle",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Dexter Fletcher",
    "rating": 7.4,
    "votes": 56332,
    "revenue": 15790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/r562gvTRVHnDSvG7MrKHEECSn1V.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Eddie the Eagle is a Biography directed by Dexter Fletcher.",
    "trailer": "https://www.youtube.com/watch?v=hyzQjVUmIxk"
  },
  {
    "id": 477,
    "title": "The Lives of Others",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Florian Henckel von Donnersmarck",
    "rating": 8.5,
    "votes": 278103,
    "revenue": 11280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cVUDMnskSc01rdbyH0tLATTJUdP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lives of Others is a Drama directed by Florian Henckel von Donnersmarck.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Lives%20of%20Others%202006%20official%20trailer"
  },
  {
    "id": 478,
    "title": "Pet",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Carles Torrens",
    "rating": 5.7,
    "votes": 8404,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/cO5debLXk54GhgXd92GVD0Hpinv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pet is a Horror directed by Carles Torrens.",
    "trailer": "https://www.youtube.com/watch?v=giV9VK9MQqs"
  },
  {
    "id": 479,
    "title": "Paint It Black",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Amber Tamblyn",
    "rating": 8.3,
    "votes": 61,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/1i9CTlb2gabuIQJEDuPsc05GfEb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Paint It Black is a Drama directed by Amber Tamblyn.",
    "trailer": "https://www.youtube.com/watch?v=pQeIDXxxd-0"
  },
  {
    "id": 480,
    "title": "Macbeth",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Justin Kurzel",
    "rating": 6.7,
    "votes": 41642,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/a5NEpil29Uns1wEYF8k99qVgj1T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Macbeth is a Drama directed by Justin Kurzel.",
    "trailer": "https://www.youtube.com/watch?v=lu4xhBotbxo"
  },
  {
    "id": 481,
    "title": "Forgetting Sarah Marshall",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Nicholas Stoller",
    "rating": 7.2,
    "votes": 226619,
    "revenue": 62880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/d4elOzyhNWVlxpG7BwigrumkFTe.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Forgetting Sarah Marshall is a Comedy directed by Nicholas Stoller.",
    "trailer": "https://www.youtube.com/watch?v=K4xD8ZMdJms"
  },
  {
    "id": 482,
    "title": "The Giver",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Phillip Noyce",
    "rating": 6.5,
    "votes": 93799,
    "revenue": 45090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dul62Av4pgi5x8LP7ELHzNyka9Z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Giver is a Drama directed by Phillip Noyce.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Giver%202014%20official%20trailer"
  },
  {
    "id": 483,
    "title": "Triple 9",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "John Hillcoat",
    "rating": 6.3,
    "votes": 48400,
    "revenue": 12630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/q2kIq9yzEkOVhl1aeo0alJHtdfz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Triple 9 is a Action directed by John Hillcoat.",
    "trailer": "https://www.youtube.com/results?search_query=Triple%209%202016%20official%20trailer"
  },
  {
    "id": 484,
    "title": "Perfetti sconosciuti",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Paolo Genovese",
    "rating": 7.7,
    "votes": 17584,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3wknM629Vryofb1HNo2YnLQnQyn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Perfetti sconosciuti is a Comedy directed by Paolo Genovese.",
    "trailer": "https://www.youtube.com/watch?v=-lOUnBsjGuY"
  },
  {
    "id": 485,
    "title": "Angry Birds",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Clay Kaytis",
    "rating": 6.3,
    "votes": 55781,
    "revenue": 107510000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iOH0fEFtV9z9rZp9zmBFGGeWicv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Angry Birds is a Animation directed by Clay Kaytis.",
    "trailer": "https://www.youtube.com/watch?v=Hksyh33N5dg"
  },
  {
    "id": 486,
    "title": "Moonrise Kingdom",
    "year": 2012,
    "genre": [
      "Adventure"
    ],
    "director": "Wes Anderson",
    "rating": 7.8,
    "votes": 254446,
    "revenue": 45510000.0,
    "poster": "https://image.tmdb.org/t/p/w500/y4SXcbNl6CEF2t36icuzuBioj7K.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Moonrise Kingdom is a Adventure directed by Wes Anderson.",
    "trailer": "https://www.youtube.com/watch?v=RBCRe73dZb0"
  },
  {
    "id": 487,
    "title": "Hairspray",
    "year": 2007,
    "genre": [
      "Comedy"
    ],
    "director": "Adam Shankman",
    "rating": 6.7,
    "votes": 102954,
    "revenue": 118820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fgMka3HtFvI5OgW1eYdR9XpySxH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hairspray is a Comedy directed by Adam Shankman.",
    "trailer": "https://www.youtube.com/results?search_query=Hairspray%202007%20official%20trailer"
  },
  {
    "id": 488,
    "title": "Safe Haven",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Lasse Hallstr\u00f6m",
    "rating": 6.7,
    "votes": 84765,
    "revenue": 71350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2CbJ3HTb6SFbMeguYH52UQSHOwY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Safe Haven is a Drama directed by Lasse Hallstr\u00f6m.",
    "trailer": "https://www.youtube.com/results?search_query=Safe%20Haven%202013%20official%20trailer"
  },
  {
    "id": 489,
    "title": "Focus",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Glenn Ficarra",
    "rating": 6.6,
    "votes": 166489,
    "revenue": 53850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lOzGWjceYTd0kd5HyX7Ch46O9kh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Focus is a Comedy directed by Glenn Ficarra.",
    "trailer": "https://www.youtube.com/watch?v=6vY9UPiI4eQ"
  },
  {
    "id": 490,
    "title": "Ratatouille",
    "year": 2007,
    "genre": [
      "Animation"
    ],
    "director": "Brad Bird",
    "rating": 8.0,
    "votes": 504039,
    "revenue": 206440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ratatouille is a Animation directed by Brad Bird.",
    "trailer": "https://www.youtube.com/results?search_query=Ratatouille%202007%20official%20trailer"
  },
  {
    "id": 491,
    "title": "Stake Land",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Jim Mickle",
    "rating": 6.5,
    "votes": 36091,
    "revenue": 20000.0,
    "poster": "https://image.tmdb.org/t/p/w500/q5Cq3svR0XPEb9VkVBHPowT1Bxf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Stake Land is a Drama directed by Jim Mickle.",
    "trailer": "https://www.youtube.com/watch?v=atjH_jEr1Io"
  },
  {
    "id": 492,
    "title": "The Book of Eli",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Albert Hughes",
    "rating": 6.9,
    "votes": 241359,
    "revenue": 94820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1H1y9ZiqNFaLgQiRDDZLA55PviW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Book of Eli is a Action directed by Albert Hughes.",
    "trailer": "https://www.youtube.com/watch?v=yAQcwKY0Dik"
  },
  {
    "id": 493,
    "title": "Cloverfield",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Matt Reeves",
    "rating": 7.0,
    "votes": 313803,
    "revenue": 80030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qIegUGJqyMMCRjkKV1s7A9MqdJ8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Cloverfield is a Action directed by Matt Reeves.",
    "trailer": "https://www.youtube.com/watch?v=wxqSIsxMlYQ"
  },
  {
    "id": 494,
    "title": "Point Break",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Ericson Core",
    "rating": 5.3,
    "votes": 44553,
    "revenue": 28770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z7JOvw5Lqs9ezoFTJxmz3nx3av2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Point Break is a Action directed by Ericson Core.",
    "trailer": "https://www.youtube.com/results?search_query=Point%20Break%202015%20official%20trailer"
  },
  {
    "id": 495,
    "title": "Under the Skin",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Jonathan Glazer",
    "rating": 6.3,
    "votes": 94707,
    "revenue": 2610000.0,
    "poster": "https://image.tmdb.org/t/p/w500/55wmcXJIDYITr7JDijJTdvwSaAv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Under the Skin is a Drama directed by Jonathan Glazer.",
    "trailer": "https://www.youtube.com/watch?v=J7bAZCOk0Sc"
  },
  {
    "id": 496,
    "title": "I Am Legend",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Francis Lawrence",
    "rating": 7.2,
    "votes": 565721,
    "revenue": 256390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I Am Legend is a Drama directed by Francis Lawrence.",
    "trailer": "https://www.youtube.com/watch?v=4uDU6SUpr8k"
  },
  {
    "id": 497,
    "title": "Men in Black 3",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Barry Sonnenfeld",
    "rating": 6.8,
    "votes": 278379,
    "revenue": 179020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/90DdoEStzeObs96fsYf4GG544iN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Men in Black 3 is a Action directed by Barry Sonnenfeld.",
    "trailer": "https://www.youtube.com/results?search_query=Men%20in%20Black%203%202012%20official%20trailer"
  },
  {
    "id": 498,
    "title": "Super 8",
    "year": 2011,
    "genre": [
      "Mystery"
    ],
    "director": "J.J. Abrams",
    "rating": 7.1,
    "votes": 298913,
    "revenue": 126980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pUWIjaMMYJjeBm5bJyE3mIXdQ62.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Super 8 is a Mystery directed by J.J. Abrams.",
    "trailer": "https://www.youtube.com/watch?v=US1E9i6BpUw"
  },
  {
    "id": 499,
    "title": "Law Abiding Citizen",
    "year": 2009,
    "genre": [
      "Crime"
    ],
    "director": "F. Gary Gray",
    "rating": 7.4,
    "votes": 228339,
    "revenue": 73340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fcEXcip7v0O1ndV4VUdFqJSqbOg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Law Abiding Citizen is a Crime directed by F. Gary Gray.",
    "trailer": "https://www.youtube.com/results?search_query=Law%20Abiding%20Citizen%202009%20official%20trailer"
  },
  {
    "id": 500,
    "title": "Up",
    "year": 2009,
    "genre": [
      "Animation"
    ],
    "director": "Pete Docter",
    "rating": 8.3,
    "votes": 722203,
    "revenue": 292980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Up is a Animation directed by Pete Docter.",
    "trailer": "https://www.youtube.com/results?search_query=Up%202009%20official%20trailer"
  },
  {
    "id": 501,
    "title": "Maze Runner: The Scorch Trials",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Wes Ball",
    "rating": 6.3,
    "votes": 159364,
    "revenue": 81690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Maze Runner: The Scorch Trials is a Action directed by Wes Ball.",
    "trailer": "https://www.youtube.com/watch?v=SDofO3P2HpE"
  },
  {
    "id": 502,
    "title": "Carol",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Todd Haynes",
    "rating": 7.2,
    "votes": 77995,
    "revenue": 250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cJeled7EyPdur6TnCA5GYg0UVna.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Carol is a Drama directed by Todd Haynes.",
    "trailer": "https://www.youtube.com/results?search_query=Carol%202015%20official%20trailer"
  },
  {
    "id": 503,
    "title": "Imperium",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Daniel Ragussis",
    "rating": 6.5,
    "votes": 27428,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/fEwo3gZfbeoovdcTyf4o4wATE1r.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Imperium is a Crime directed by Daniel Ragussis.",
    "trailer": "https://www.youtube.com/results?search_query=Imperium%202016%20official%20trailer"
  },
  {
    "id": 504,
    "title": "Youth",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Paolo Sorrentino",
    "rating": 7.3,
    "votes": 52636,
    "revenue": 2700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ceRN51oeadmccAvqvDxpnnNRcLU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Youth is a Comedy directed by Paolo Sorrentino.",
    "trailer": "https://www.youtube.com/results?search_query=Youth%202015%20official%20trailer"
  },
  {
    "id": 505,
    "title": "Mr. Nobody",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Jaco Van Dormael",
    "rating": 7.9,
    "votes": 166872,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/qNkIONc4Rgmzo23ph7qWp9QfVnW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mr. Nobody is a Drama directed by Jaco Van Dormael.",
    "trailer": "https://www.youtube.com/results?search_query=Mr.%20Nobody%202009%20official%20trailer"
  },
  {
    "id": 506,
    "title": "City of Tiny Lights",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Pete Travis",
    "rating": 5.7,
    "votes": 291,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/eX9iEZdU2w1elGQhNY50DmKqiaE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "City of Tiny Lights is a Crime directed by Pete Travis.",
    "trailer": "https://www.youtube.com/watch?v=9I2z4YPuMZ0"
  },
  {
    "id": 507,
    "title": "Savages",
    "year": 2012,
    "genre": [
      "Crime"
    ],
    "director": "Oliver Stone",
    "rating": 6.5,
    "votes": 107960,
    "revenue": 47310000.0,
    "poster": "https://image.tmdb.org/t/p/w500/joyiyBwYY5QCpldqT1FzrTqsTJK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Savages is a Crime directed by Oliver Stone.",
    "trailer": "https://www.youtube.com/watch?v=8imzQaoEwsA"
  },
  {
    "id": 508,
    "title": "(500) Days of Summer",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Marc Webb",
    "rating": 7.7,
    "votes": 398972,
    "revenue": 32390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qXAuQ9hF30sQRsXf40OfRVl0MJZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "(500) Days of Summer is a Comedy directed by Marc Webb.",
    "trailer": "https://www.youtube.com/results?search_query=%28500%29%20Days%20of%20Summer%202009%20official%20trailer"
  },
  {
    "id": 509,
    "title": "Movie 43",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Elizabeth Banks",
    "rating": 4.3,
    "votes": 83625,
    "revenue": 8830000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uYa06GxHsCsELx9vOQ11vsT0Aa6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Movie 43 is a Comedy directed by Elizabeth Banks.",
    "trailer": "https://www.youtube.com/watch?v=RrvFBjsglA4"
  },
  {
    "id": 510,
    "title": "Gravity",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Alfonso Cuar\u00f3n",
    "rating": 7.8,
    "votes": 622089,
    "revenue": 274080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gravity is a Drama directed by Alfonso Cuar\u00f3n.",
    "trailer": "https://www.youtube.com/results?search_query=Gravity%202013%20official%20trailer"
  },
  {
    "id": 511,
    "title": "The Boy in the Striped Pyjamas",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Mark Herman",
    "rating": 7.8,
    "votes": 144614,
    "revenue": 9030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2C8QCXdMlojTxZjfBlINr4FWcb6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Boy in the Striped Pyjamas is a Drama directed by Mark Herman.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Boy%20in%20the%20Striped%20Pyjamas%202008%20official%20trailer"
  },
  {
    "id": 512,
    "title": "Shooter",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Antoine Fuqua",
    "rating": 7.2,
    "votes": 267820,
    "revenue": 46980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2aWGxo1E5polpBjPvtBRkWp7qaS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Shooter is a Action directed by Antoine Fuqua.",
    "trailer": "https://www.youtube.com/results?search_query=Shooter%202007%20official%20trailer"
  },
  {
    "id": 513,
    "title": "The Happening",
    "year": 2008,
    "genre": [
      "Sci-Fi"
    ],
    "director": "M. Night Shyamalan",
    "rating": 5.0,
    "votes": 170897,
    "revenue": 64510000.00000001,
    "poster": "https://image.tmdb.org/t/p/w500/fP4nBrtmc0teSDDHzYmDE7TLQBT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Happening is a Sci-Fi directed by M. Night Shyamalan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Happening%202008%20official%20trailer"
  },
  {
    "id": 514,
    "title": "Bone Tomahawk",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "S. Craig Zahler",
    "rating": 7.1,
    "votes": 47289,
    "revenue": 66010000.00000001,
    "poster": "https://image.tmdb.org/t/p/w500/4MmTHpn2Y8emqvBgvOjufImUmKZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bone Tomahawk is a Adventure directed by S. Craig Zahler.",
    "trailer": "https://www.youtube.com/results?search_query=Bone%20Tomahawk%202015%20official%20trailer"
  },
  {
    "id": 515,
    "title": "Magic Mike XXL",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Gregory Jacobs",
    "rating": 5.7,
    "votes": 42506,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/jkuCNd3wOmf4sDlZ89HEt8jmsqr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Magic Mike XXL is a Comedy directed by Gregory Jacobs.",
    "trailer": "https://www.youtube.com/watch?v=oLoyU3xYwbs"
  },
  {
    "id": 516,
    "title": "Easy A",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Will Gluck",
    "rating": 7.1,
    "votes": 294950,
    "revenue": 58400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/v5f1qO6NJnxWgONgkYg21TW39DT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Easy A is a Comedy directed by Will Gluck.",
    "trailer": "https://www.youtube.com/results?search_query=Easy%20A%202010%20official%20trailer"
  },
  {
    "id": 517,
    "title": "Exodus: Gods and Kings",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Ridley Scott",
    "rating": 6.0,
    "votes": 137299,
    "revenue": 65010000.00000001,
    "poster": "https://image.tmdb.org/t/p/w500/uaDj37JtvLan9tihxZ18e6qL33b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Exodus: Gods and Kings is a Action directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/watch?v=6k8qeqZycgE"
  },
  {
    "id": 518,
    "title": "Chappie",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Neill Blomkamp",
    "rating": 6.9,
    "votes": 188769,
    "revenue": 31570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uuDUpzlMFomdSfNWlpEPS9nVZWV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Chappie is a Action directed by Neill Blomkamp.",
    "trailer": "https://www.youtube.com/watch?v=GmFu5Kqp5o8"
  },
  {
    "id": 519,
    "title": "The Hobbit: The Desolation of Smaug",
    "year": 2013,
    "genre": [
      "Adventure"
    ],
    "director": "Peter Jackson",
    "rating": 7.9,
    "votes": 513744,
    "revenue": 258360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hobbit: The Desolation of Smaug is a Adventure directed by Peter Jackson.",
    "trailer": "https://www.youtube.com/watch?v=gAo95e7_XKA"
  },
  {
    "id": 520,
    "title": "Half of a Yellow Sun",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Biyi Bandele",
    "rating": 6.2,
    "votes": 1356,
    "revenue": 50000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dMNg70yFZt1w7lXoHqCu4U43MVZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Half of a Yellow Sun is a Drama directed by Biyi Bandele.",
    "trailer": "https://www.youtube.com/results?search_query=Half%20of%20a%20Yellow%20Sun%202013%20official%20trailer"
  },
  {
    "id": 521,
    "title": "Anthropoid",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Sean Ellis",
    "rating": 7.2,
    "votes": 24100,
    "revenue": 2960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5hUghRVVkBYufftfNQkGevY5AmE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Anthropoid is a Biography directed by Sean Ellis.",
    "trailer": "https://www.youtube.com/results?search_query=Anthropoid%202016%20official%20trailer"
  },
  {
    "id": 522,
    "title": "The Counselor",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "Ridley Scott",
    "rating": 5.3,
    "votes": 84927,
    "revenue": 16970000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aNiLkGnzVb5CorZHKk16w9S4COt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Counselor is a Crime directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Counselor%202013%20official%20trailer"
  },
  {
    "id": 523,
    "title": "Viking",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Andrey Kravchuk",
    "rating": 4.7,
    "votes": 1830,
    "revenue": 23050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cgvGExc0kfHRUffTKBSQHPKchrq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Viking is a Action directed by Andrey Kravchuk.",
    "trailer": "https://www.youtube.com/results?search_query=Viking%202016%20official%20trailer"
  },
  {
    "id": 524,
    "title": "Whiskey Tango Foxtrot",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Glenn Ficarra",
    "rating": 6.6,
    "votes": 36156,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/wAxhQsY63VY6eF3EilXTkX0YRoU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Whiskey Tango Foxtrot is a Biography directed by Glenn Ficarra.",
    "trailer": "https://www.youtube.com/results?search_query=Whiskey%20Tango%20Foxtrot%202016%20official%20trailer"
  },
  {
    "id": 525,
    "title": "Trust",
    "year": 2010,
    "genre": [
      "Crime"
    ],
    "director": "David Schwimmer",
    "rating": 7.0,
    "votes": 36043,
    "revenue": 60000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rXoZYWd2G7pBh8N8Cp5ZO5Sjzbl.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Trust is a Crime directed by David Schwimmer.",
    "trailer": "https://www.youtube.com/results?search_query=Trust%202010%20official%20trailer"
  },
  {
    "id": 526,
    "title": "Birth of the Dragon",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "George Nolfi",
    "rating": 3.9,
    "votes": 552,
    "revenue": 93050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/odn4Hj2u7IQhJRmr15pTYZbkbc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Birth of the Dragon is a Action directed by George Nolfi.",
    "trailer": "https://www.youtube.com/watch?v=SL7OfxJo2oA"
  },
  {
    "id": 527,
    "title": "Elysium",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Neill Blomkamp",
    "rating": 6.6,
    "votes": 358932,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/aRjuJuPXHtVs6YegfeeQWXGRs1E.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Elysium is a Action directed by Neill Blomkamp.",
    "trailer": "https://www.youtube.com/watch?v=oIBtePb-dGY"
  },
  {
    "id": 528,
    "title": "The Green Inferno",
    "year": 2013,
    "genre": [
      "Adventure"
    ],
    "director": "Eli Roth",
    "rating": 5.4,
    "votes": 26461,
    "revenue": 7190000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nh2EAkJEWaOFdzK2DMaITrdmM2a.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Green Inferno is a Adventure directed by Eli Roth.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Green%20Inferno%202013%20official%20trailer"
  },
  {
    "id": 529,
    "title": "Godzilla",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Gareth Edwards",
    "rating": 6.4,
    "votes": 318058,
    "revenue": 200660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z0CpCYiaUikJrcftPnb0jYCYmoo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Godzilla is a Action directed by Gareth Edwards.",
    "trailer": "https://www.youtube.com/watch?v=oHKGx1pzczg"
  },
  {
    "id": 530,
    "title": "The Bourne Legacy",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Tony Gilroy",
    "rating": 6.7,
    "votes": 245374,
    "revenue": 113170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1aExL5DTGHj25ZfIC3dDwS84RWi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Bourne Legacy is a Action directed by Tony Gilroy.",
    "trailer": "https://www.youtube.com/watch?v=43WTCO8-C4w"
  },
  {
    "id": 531,
    "title": "A Good Year",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "Ridley Scott",
    "rating": 6.9,
    "votes": 74674,
    "revenue": 7460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/10ErazhJxfL68rWg2KLfwiRuIou.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Good Year is a Comedy directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/watch?v=bKKrLj5ZHiM"
  },
  {
    "id": 532,
    "title": "Friend Request",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Simon Verhoeven",
    "rating": 5.4,
    "votes": 12758,
    "revenue": 64030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7gfG9tGRPzmVyg3nEwQrTGOJ8C6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Friend Request is a Horror directed by Simon Verhoeven.",
    "trailer": "https://www.youtube.com/watch?v=llEP88wJqiY"
  },
  {
    "id": 533,
    "title": "Deja Vu",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Tony Scott",
    "rating": 7.0,
    "votes": 253858,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/eTX6hklzFOiEVqVukNCEedZKhix.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Deja Vu is a Action directed by Tony Scott.",
    "trailer": "https://www.youtube.com/results?search_query=Deja%20Vu%202006%20official%20trailer"
  },
  {
    "id": 534,
    "title": "Lucy",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Luc Besson",
    "rating": 6.4,
    "votes": 352698,
    "revenue": 126550000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lucy is a Action directed by Luc Besson.",
    "trailer": "https://www.youtube.com/watch?v=l7zAV_MDC68"
  },
  {
    "id": 535,
    "title": "A Quiet Passion",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Terence Davies",
    "rating": 7.2,
    "votes": 1024,
    "revenue": 1080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/k2WWlrMbuINyzDCfBuD48eN22QY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Quiet Passion is a Biography directed by Terence Davies.",
    "trailer": "https://www.youtube.com/results?search_query=A%20Quiet%20Passion%202016%20official%20trailer"
  },
  {
    "id": 536,
    "title": "Need for Speed",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Scott Waugh",
    "rating": 6.5,
    "votes": 143389,
    "revenue": 43570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4ktdbrhCnAoDGLW36afjB717Sa.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Need for Speed is a Action directed by Scott Waugh.",
    "trailer": "https://www.youtube.com/watch?v=FJdRJn7FzN4"
  },
  {
    "id": 537,
    "title": "Jack Reacher",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Christopher McQuarrie",
    "rating": 7.0,
    "votes": 250811,
    "revenue": 58680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jack Reacher is a Action directed by Christopher McQuarrie.",
    "trailer": "https://www.youtube.com/results?search_query=Jack%20Reacher%202012%20official%20trailer"
  },
  {
    "id": 538,
    "title": "The Do-Over",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Steven Brill",
    "rating": 5.7,
    "votes": 24761,
    "revenue": 540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z9VCm2E6gCAwbM2SELRawfqdXBO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Do-Over is a Action directed by Steven Brill.",
    "trailer": "https://www.youtube.com/watch?v=lZ1fKYmF4qU"
  },
  {
    "id": 539,
    "title": "True Crimes",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Alexandros Avranas",
    "rating": 7.3,
    "votes": 198,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/bEwK1r4pmJ9huEjqrZf73NXJvFy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "True Crimes is a Crime directed by Alexandros Avranas.",
    "trailer": "https://www.youtube.com/results?search_query=True%20Crimes%202016%20official%20trailer"
  },
  {
    "id": 540,
    "title": "American Pastoral",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Ewan McGregor",
    "rating": 6.1,
    "votes": 7115,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/pgpMzdML9FUj3GpDU3LFi7AWbHQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Pastoral is a Crime directed by Ewan McGregor.",
    "trailer": "https://www.youtube.com/results?search_query=American%20Pastoral%202016%20official%20trailer"
  },
  {
    "id": 541,
    "title": "The Ghost Writer",
    "year": 2010,
    "genre": [
      "Mystery"
    ],
    "director": "Roman Polanski",
    "rating": 7.2,
    "votes": 137964,
    "revenue": 15520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rK7m2Ba0ieXa37NaAmrx4dfRvvM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Ghost Writer is a Mystery directed by Roman Polanski.",
    "trailer": "https://www.youtube.com/watch?v=B3NrIz5lwVo"
  },
  {
    "id": 542,
    "title": "Limitless",
    "year": 2011,
    "genre": [
      "Mystery"
    ],
    "director": "Neil Burger",
    "rating": 7.4,
    "votes": 444417,
    "revenue": 79240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kCokPP4WCQRrrAuZ7FcpIyHr8b2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Limitless is a Mystery directed by Neil Burger.",
    "trailer": "https://www.youtube.com/results?search_query=Limitless%202011%20official%20trailer"
  },
  {
    "id": 543,
    "title": "Spectral",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Nic Mathieu",
    "rating": 6.3,
    "votes": 27042,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/5yprxs7ZyBr58RsTQJrKCVmqk8X.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Spectral is a Action directed by Nic Mathieu.",
    "trailer": "https://www.youtube.com/watch?v=rmC3ZhIHHi4"
  },
  {
    "id": 544,
    "title": "P.S. I Love You",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Richard LaGravenese",
    "rating": 7.1,
    "votes": 177247,
    "revenue": 53680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/x6M9nlTpgpI4AOw0tMkOAVbhL5z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "P.S. I Love You is a Drama directed by Richard LaGravenese.",
    "trailer": "https://www.youtube.com/results?search_query=P.S.%20I%20Love%20You%202007%20official%20trailer"
  },
  {
    "id": 545,
    "title": "Zipper",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Mora Stephens",
    "rating": 5.7,
    "votes": 4912,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/qHQbXfdYhh3CRtIufoiD4AxPWi0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zipper is a Drama directed by Mora Stephens.",
    "trailer": "https://www.youtube.com/results?search_query=Zipper%202015%20official%20trailer"
  },
  {
    "id": 546,
    "title": "Midnight Special",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Jeff Nichols",
    "rating": 6.7,
    "votes": 54787,
    "revenue": 3710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hgDRq1l4ATxwufWjILKsYtglbI6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Midnight Special is a Drama directed by Jeff Nichols.",
    "trailer": "https://www.youtube.com/results?search_query=Midnight%20Special%202016%20official%20trailer"
  },
  {
    "id": 547,
    "title": "Don't Think Twice",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Mike Birbiglia",
    "rating": 6.8,
    "votes": 10485,
    "revenue": 4420000.0,
    "poster": "https://image.tmdb.org/t/p/w500/f8PuoewhI3qeROdfXSw2Utjf1On.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Don't Think Twice is a Comedy directed by Mike Birbiglia.",
    "trailer": "https://www.youtube.com/watch?v=rzbJXNiEdEg"
  },
  {
    "id": 548,
    "title": "Alice in Wonderland",
    "year": 2010,
    "genre": [
      "Adventure"
    ],
    "director": "Tim Burton",
    "rating": 6.5,
    "votes": 324898,
    "revenue": 334190000.0,
    "poster": "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Alice in Wonderland is a Adventure directed by Tim Burton.",
    "trailer": "https://www.youtube.com/results?search_query=Alice%20in%20Wonderland%202010%20official%20trailer"
  },
  {
    "id": 549,
    "title": "Chuck",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Philippe Falardeau",
    "rating": 6.8,
    "votes": 391,
    "revenue": 110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b2VgUoXR9iAtAf8nA0mvdTr7cOt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Chuck is a Biography directed by Philippe Falardeau.",
    "trailer": "https://www.youtube.com/results?search_query=Chuck%202016%20official%20trailer"
  },
  {
    "id": 550,
    "title": "I, Daniel Blake",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Ken Loach",
    "rating": 7.9,
    "votes": 22941,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/nu3WVABXz2W85N6JXTZOT1aWS3b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I, Daniel Blake is a Drama directed by Ken Loach.",
    "trailer": "https://www.youtube.com/watch?v=tWaZFvdW7Pc"
  },
  {
    "id": 551,
    "title": "The Break-Up",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "Peyton Reed",
    "rating": 5.8,
    "votes": 106381,
    "revenue": 118680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ghCLIPRZNAndBoIZJ8f7lN5Mlly.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Break-Up is a Comedy directed by Peyton Reed.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Break-Up%202006%20official%20trailer"
  },
  {
    "id": 552,
    "title": "Loving",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Jeff Nichols",
    "rating": 7.1,
    "votes": 17141,
    "revenue": 7700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/teNPeDIRGWxtvMaJsNa7lw5IgiL.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Loving is a Biography directed by Jeff Nichols.",
    "trailer": "https://www.youtube.com/watch?v=33g-ZHBQdNU"
  },
  {
    "id": 553,
    "title": "Fantastic Four",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Josh Trank",
    "rating": 4.3,
    "votes": 121847,
    "revenue": 56110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cDroz5qSlP8xZ6tOpeYoPkBvKyL.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fantastic Four is a Action directed by Josh Trank.",
    "trailer": "https://www.youtube.com/results?search_query=Fantastic%20Four%202015%20official%20trailer"
  },
  {
    "id": 554,
    "title": "The Survivalist",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Stephen Fingleton",
    "rating": 6.3,
    "votes": 9187,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/hd491WgKPxeQus2LnvFbYmyUFmt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Survivalist is a Drama directed by Stephen Fingleton.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Survivalist%202015%20official%20trailer"
  },
  {
    "id": 555,
    "title": "Colonia",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Florian Gallenberger",
    "rating": 7.1,
    "votes": 30074,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/p7oGFkMGaQR27R1olN9RoMzg4vS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Colonia is a Drama directed by Florian Gallenberger.",
    "trailer": "https://www.youtube.com/results?search_query=Colonia%202015%20official%20trailer"
  },
  {
    "id": 556,
    "title": "The Boy Next Door",
    "year": 2015,
    "genre": [
      "Mystery"
    ],
    "director": "Rob Cohen",
    "rating": 4.6,
    "votes": 30180,
    "revenue": 35390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gicmSeLG6Uh7BF1r1mxZHUQ8r26.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Boy Next Door is a Mystery directed by Rob Cohen.",
    "trailer": "https://www.youtube.com/watch?v=MgbBwovOOoc"
  },
  {
    "id": 557,
    "title": "The Gift",
    "year": 2015,
    "genre": [
      "Mystery"
    ],
    "director": "Joel Edgerton",
    "rating": 7.1,
    "votes": 96688,
    "revenue": 43770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kH3qLP8pn68Xq5XwvmPkCyaAU7W.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Gift is a Mystery directed by Joel Edgerton.",
    "trailer": "https://www.youtube.com/watch?v=CJ1cbndN3y4"
  },
  {
    "id": 558,
    "title": "Dracula Untold",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Gary Shore",
    "rating": 6.3,
    "votes": 148504,
    "revenue": 55940000.0,
    "poster": "https://image.tmdb.org/t/p/w500/m5h3NtZ2ZfryIHl1MvatmANvIqQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dracula Untold is a Action directed by Gary Shore.",
    "trailer": "https://www.youtube.com/results?search_query=Dracula%20Untold%202014%20official%20trailer"
  },
  {
    "id": 559,
    "title": "In the Heart of the Sea",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Ron Howard",
    "rating": 6.9,
    "votes": 90372,
    "revenue": 24990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/weVvNPfk6FM9vBg3BXtRtNAmiYM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "In the Heart of the Sea is a Action directed by Ron Howard.",
    "trailer": "https://www.youtube.com/watch?v=VewQ4Yv6304"
  },
  {
    "id": 560,
    "title": "Idiocracy",
    "year": 2006,
    "genre": [
      "Adventure"
    ],
    "director": "Mike Judge",
    "rating": 6.6,
    "votes": 115355,
    "revenue": 440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6cTHBq49ApwsJaRr3ojlY1cmiXk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Idiocracy is a Adventure directed by Mike Judge.",
    "trailer": "https://www.youtube.com/watch?v=clYwX8Z43zg"
  },
  {
    "id": 561,
    "title": "The Expendables",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Sylvester Stallone",
    "rating": 6.5,
    "votes": 283282,
    "revenue": 102980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/j09ZkH6R4JWVylBcDai1laCmGw7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Expendables is a Action directed by Sylvester Stallone.",
    "trailer": "https://www.youtube.com/watch?v=43Jy9DcbvIc"
  },
  {
    "id": 562,
    "title": "Evil Dead",
    "year": 2013,
    "genre": [
      "Fantasy"
    ],
    "director": "Fede Alvarez",
    "rating": 6.5,
    "votes": 133113,
    "revenue": 54240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1gDV0Lm9y8ufIKzyf0h0GBgb9Zj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Evil Dead is a Fantasy directed by Fede Alvarez.",
    "trailer": "https://www.youtube.com/results?search_query=Evil%20Dead%202013%20official%20trailer"
  },
  {
    "id": 563,
    "title": "Sinister",
    "year": 2012,
    "genre": [
      "Horror"
    ],
    "director": "Scott Derrickson",
    "rating": 6.8,
    "votes": 171169,
    "revenue": 48060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nzx10sca3arCeYBAomHan4Q6wa1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sinister is a Horror directed by Scott Derrickson.",
    "trailer": "https://www.youtube.com/watch?v=apghx7q9oeY"
  },
  {
    "id": 564,
    "title": "Wreck-It Ralph",
    "year": 2012,
    "genre": [
      "Animation"
    ],
    "director": "Rich Moore",
    "rating": 7.8,
    "votes": 290559,
    "revenue": 189410000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nrEupcBwf4O1zihCM34NoXusZDq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wreck-It Ralph is a Animation directed by Rich Moore.",
    "trailer": "https://www.youtube.com/watch?v=87E6N7ToCxs"
  },
  {
    "id": 565,
    "title": "Snow White and the Huntsman",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Rupert Sanders",
    "rating": 6.1,
    "votes": 239772,
    "revenue": 155110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8HUa5kRubYbnAD5UVpnhTGGgMTW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Snow White and the Huntsman is a Action directed by Rupert Sanders.",
    "trailer": "https://www.youtube.com/watch?v=hDzRFcxlkMw"
  },
  {
    "id": 566,
    "title": "Pan",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Joe Wright",
    "rating": 5.8,
    "votes": 47804,
    "revenue": 34960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/w8i0mZR7MEL7c3bXSsuYg7VJsew.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pan is a Adventure directed by Joe Wright.",
    "trailer": "https://www.youtube.com/results?search_query=Pan%202015%20official%20trailer"
  },
  {
    "id": 567,
    "title": "Transformers: Dark of the Moon",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Michael Bay",
    "rating": 6.3,
    "votes": 338369,
    "revenue": 352360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/28YlCLrFhONteYSs9hKjD1Km0Cj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Transformers: Dark of the Moon is a Action directed by Michael Bay.",
    "trailer": "https://www.youtube.com/results?search_query=Transformers%3A%20Dark%20of%20the%20Moon%202011%20official%20trailer"
  },
  {
    "id": 568,
    "title": "Juno",
    "year": 2007,
    "genre": [
      "Comedy"
    ],
    "director": "Jason Reitman",
    "rating": 7.5,
    "votes": 432461,
    "revenue": 143490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jNIn2tVhpvFD6P9IojldI3mNYcn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Juno is a Comedy directed by Jason Reitman.",
    "trailer": "https://www.youtube.com/results?search_query=Juno%202007%20official%20trailer"
  },
  {
    "id": 569,
    "title": "A Hologram for the King",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Tom Tykwer",
    "rating": 6.1,
    "votes": 26521,
    "revenue": 4200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wmjWGb2tqtOA4XPnK1tpIfzRtSQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Hologram for the King is a Comedy directed by Tom Tykwer.",
    "trailer": "https://www.youtube.com/results?search_query=A%20Hologram%20for%20the%20King%202016%20official%20trailer"
  },
  {
    "id": 570,
    "title": "Money Monster",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Jodie Foster",
    "rating": 6.5,
    "votes": 68654,
    "revenue": 41010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/DlgdAkAKirD01R1mBejhFjS6nQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Money Monster is a Crime directed by Jodie Foster.",
    "trailer": "https://www.youtube.com/watch?v=PfbhS_2y3PI"
  },
  {
    "id": 571,
    "title": "The Other Woman",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Nick Cassavetes",
    "rating": 6.0,
    "votes": 110825,
    "revenue": 83910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yHnbb6z8REuFIyBLT2Nj3MX54dY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Other Woman is a Comedy directed by Nick Cassavetes.",
    "trailer": "https://www.youtube.com/watch?v=BlHMHLuJWbo"
  },
  {
    "id": 572,
    "title": "Enchanted",
    "year": 2007,
    "genre": [
      "Animation"
    ],
    "director": "Kevin Lima",
    "rating": 7.1,
    "votes": 150353,
    "revenue": 127710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8KCNzCArLlvLdQoHx6npua2VSVc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Enchanted is a Animation directed by Kevin Lima.",
    "trailer": "https://www.youtube.com/watch?v=IJwUFq8uOr0"
  },
  {
    "id": 573,
    "title": "The Intern",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Nancy Meyers",
    "rating": 7.1,
    "votes": 159582,
    "revenue": 75270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lSQueArijcGyq6btZqCvNRbluay.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Intern is a Comedy directed by Nancy Meyers.",
    "trailer": "https://www.youtube.com/watch?v=f6dKhzYgksc"
  },
  {
    "id": 574,
    "title": "Little Miss Sunshine",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "Jonathan Dayton",
    "rating": 7.8,
    "votes": 374044,
    "revenue": 59890000.0,
    "poster": "https://image.tmdb.org/t/p/w500/niNdhTpPHSgw22tK0PLjQMV640v.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Little Miss Sunshine is a Comedy directed by Jonathan Dayton.",
    "trailer": "https://www.youtube.com/watch?v=oabGaaCLZ5g"
  },
  {
    "id": 575,
    "title": "Bleed for This",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Ben Younger",
    "rating": 6.8,
    "votes": 11900,
    "revenue": 4850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cMM9frT6sFEvz7PwHniIDUKcLDo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bleed for This is a Biography directed by Ben Younger.",
    "trailer": "https://www.youtube.com/results?search_query=Bleed%20for%20This%202016%20official%20trailer"
  },
  {
    "id": 576,
    "title": "Clash of the Titans",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Louis Leterrier",
    "rating": 5.8,
    "votes": 238206,
    "revenue": 163190000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6iHYLipwEyZUPNO8MM3l1yHDaFE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Clash of the Titans is a Action directed by Louis Leterrier.",
    "trailer": "https://www.youtube.com/watch?v=TfyunOnMGqM"
  },
  {
    "id": 577,
    "title": "The Finest Hours",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Craig Gillespie",
    "rating": 6.8,
    "votes": 44425,
    "revenue": 27550000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6UG91TJ4DKI6FGdqXZfDBeRZHX8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Finest Hours is a Action directed by Craig Gillespie.",
    "trailer": "https://www.youtube.com/watch?v=v_j0gXEtKVs"
  },
  {
    "id": 578,
    "title": "Tron",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Joseph Kosinski",
    "rating": 6.8,
    "votes": 273959,
    "revenue": 172050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8Nc6R8k7bG8frSiDJo0oLucF7dN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tron is a Action directed by Joseph Kosinski.",
    "trailer": "https://www.youtube.com/watch?v=m9CTGwEZiPk"
  },
  {
    "id": 579,
    "title": "The Hunger Games: Catching Fire",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Francis Lawrence",
    "rating": 7.6,
    "votes": 525646,
    "revenue": 424650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hunger Games: Catching Fire is a Action directed by Francis Lawrence.",
    "trailer": "https://www.youtube.com/watch?v=zoKj7TdJk98"
  },
  {
    "id": 580,
    "title": "All Good Things",
    "year": 2010,
    "genre": [
      "Crime"
    ],
    "director": "Andrew Jarecki",
    "rating": 6.3,
    "votes": 44158,
    "revenue": 580000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3RM8SyB0yHanJbYeHdgi5eLv21C.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "All Good Things is a Crime directed by Andrew Jarecki.",
    "trailer": "https://www.youtube.com/results?search_query=All%20Good%20Things%202010%20official%20trailer"
  },
  {
    "id": 581,
    "title": "Kickboxer: Vengeance",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "John Stockwell",
    "rating": 4.9,
    "votes": 6809,
    "revenue": 131560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9suFyXDE1MhZ8I8tuhmTd0fJ7G8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kickboxer: Vengeance is a Action directed by John Stockwell.",
    "trailer": "https://www.youtube.com/results?search_query=Kickboxer%3A%20Vengeance%202016%20official%20trailer"
  },
  {
    "id": 582,
    "title": "The Last Airbender",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "M. Night Shyamalan",
    "rating": 4.2,
    "votes": 125129,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3sgnSfNT27Bx5O5ukr7B26mhEQq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Last Airbender is a Action directed by M. Night Shyamalan.",
    "trailer": "https://www.youtube.com/watch?v=WdoiHMCVqMQ"
  },
  {
    "id": 583,
    "title": "Sex Tape",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Jake Kasdan",
    "rating": 5.1,
    "votes": 89885,
    "revenue": 38540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/u2h7UnSHrbAA5WBoKhdH1rlDZfz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sex Tape is a Comedy directed by Jake Kasdan.",
    "trailer": "https://www.youtube.com/results?search_query=Sex%20Tape%202014%20official%20trailer"
  },
  {
    "id": 584,
    "title": "What to Expect When You're Expecting",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Kirk Jones",
    "rating": 5.7,
    "votes": 60059,
    "revenue": 41100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dHLN64hvTtbqVqeJI67Ali5XSBE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "What to Expect When You're Expecting is a Comedy directed by Kirk Jones.",
    "trailer": "https://www.youtube.com/watch?v=3Ef0GCdpnN4"
  },
  {
    "id": 585,
    "title": "Moneyball",
    "year": 2011,
    "genre": [
      "Biography"
    ],
    "director": "Bennett Miller",
    "rating": 7.6,
    "votes": 297395,
    "revenue": 75610000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4yIQq1e6iOcaZ5rLDG3lZBP3j7a.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Moneyball is a Biography directed by Bennett Miller.",
    "trailer": "https://www.youtube.com/watch?v=RAG74hfW4pM"
  },
  {
    "id": 586,
    "title": "Ghost Rider",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Mark Steven Johnson",
    "rating": 5.2,
    "votes": 190673,
    "revenue": 115800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4quwR1VwZouD0YF9AaD72kQAjxH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ghost Rider is a Action directed by Mark Steven Johnson.",
    "trailer": "https://www.youtube.com/results?search_query=Ghost%20Rider%202007%20official%20trailer"
  },
  {
    "id": 587,
    "title": "Unbroken",
    "year": 2014,
    "genre": [
      "Biography"
    ],
    "director": "Angelina Jolie",
    "rating": 7.2,
    "votes": 114006,
    "revenue": 115600000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vAlHUjHwLWMV5mg4epGR9WSIfiy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Unbroken is a Biography directed by Angelina Jolie.",
    "trailer": "https://www.youtube.com/watch?v=rGlsxVfCSyQ"
  },
  {
    "id": 588,
    "title": "Immortals",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Tarsem Singh",
    "rating": 6.0,
    "votes": 142900,
    "revenue": 83500000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4SPPX5KIyaQ9O8n5rLvvUIiIhpF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Immortals is a Action directed by Tarsem Singh.",
    "trailer": "https://www.youtube.com/watch?v=pE3yR8bZ1pY"
  },
  {
    "id": 589,
    "title": "Sunshine",
    "year": 2007,
    "genre": [
      "Adventure"
    ],
    "director": "Danny Boyle",
    "rating": 7.3,
    "votes": 199860,
    "revenue": 3680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oKGGeJ8qvm0UmClz43VJ31fzPP7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sunshine is a Adventure directed by Danny Boyle.",
    "trailer": "https://www.youtube.com/watch?v=Ig1BU6PUt0A"
  },
  {
    "id": 590,
    "title": "Brave",
    "year": 2012,
    "genre": [
      "Animation"
    ],
    "director": "Mark Andrews",
    "rating": 7.2,
    "votes": 293941,
    "revenue": 237280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Brave is a Animation directed by Mark Andrews.",
    "trailer": "https://www.youtube.com/results?search_query=Brave%202012%20official%20trailer"
  },
  {
    "id": 591,
    "title": "M\u00e4n som hatar kvinnor",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Niels Arden Oplev",
    "rating": 7.8,
    "votes": 182074,
    "revenue": 10100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/r2pFUXKK20KD9RE3yybpQsNynRE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "M\u00e4n som hatar kvinnor is a Drama directed by Niels Arden Oplev.",
    "trailer": "https://www.youtube.com/results?search_query=M%C3%A4n%20som%20hatar%20kvinnor%202009%20official%20trailer"
  },
  {
    "id": 592,
    "title": "Adoration",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Anne Fontaine",
    "rating": 6.2,
    "votes": 25208,
    "revenue": 320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hIQqIeG7Ude0QRUFntdLtsAUEBB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Adoration is a Drama directed by Anne Fontaine.",
    "trailer": "https://www.youtube.com/results?search_query=Adoration%202013%20official%20trailer"
  },
  {
    "id": 593,
    "title": "The Drop",
    "year": 2014,
    "genre": [
      "Crime"
    ],
    "director": "Micha\u00ebl R. Roskam",
    "rating": 7.1,
    "votes": 116118,
    "revenue": 10720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/olQInYvVCW2wycMSU1ogo9Jshml.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Drop is a Crime directed by Micha\u00ebl R. Roskam.",
    "trailer": "https://www.youtube.com/watch?v=RJZtoAKDf_8"
  },
  {
    "id": 594,
    "title": "She's the Man",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "Andy Fickman",
    "rating": 6.4,
    "votes": 122864,
    "revenue": 2340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xRElqFcUVuGf0s2rAQSSNAn1IS9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "She's the Man is a Comedy directed by Andy Fickman.",
    "trailer": "https://www.youtube.com/results?search_query=She%27s%20the%20Man%202006%20official%20trailer"
  },
  {
    "id": 595,
    "title": "Daddy's Home",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Sean Anders",
    "rating": 6.1,
    "votes": 68306,
    "revenue": 150320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fB9lALk9zKsMYWvf0bJSkJN219Z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Daddy's Home is a Comedy directed by Sean Anders.",
    "trailer": "https://www.youtube.com/watch?v=arhMMJx7tCU"
  },
  {
    "id": 596,
    "title": "Let Me In",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Matt Reeves",
    "rating": 7.2,
    "votes": 97141,
    "revenue": 12130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rgNb9nwPKwV45c5PTvFqFmpzGt0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Let Me In is a Drama directed by Matt Reeves.",
    "trailer": "https://www.youtube.com/results?search_query=Let%20Me%20In%202010%20official%20trailer"
  },
  {
    "id": 597,
    "title": "Never Back Down",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Jeff Wadlow",
    "rating": 6.6,
    "votes": 84083,
    "revenue": 24850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8oRUTyP1QAtGDMvRpKZyuyFPG0U.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Never Back Down is a Action directed by Jeff Wadlow.",
    "trailer": "https://www.youtube.com/watch?v=7X8O-OBJY4g"
  },
  {
    "id": 598,
    "title": "Grimsby",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Louis Leterrier",
    "rating": 6.2,
    "votes": 63408,
    "revenue": 6860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2jQGFmShpdflApc5oidJZ97m1d1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Grimsby is a Action directed by Louis Leterrier.",
    "trailer": "https://www.youtube.com/watch?v=_YtclB_02wA"
  },
  {
    "id": 599,
    "title": "Moon",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Duncan Jones",
    "rating": 7.9,
    "votes": 277123,
    "revenue": 5010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/k2qTooPlHffgNABNWxeJdGMglPK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Moon is a Drama directed by Duncan Jones.",
    "trailer": "https://www.youtube.com/watch?v=R3EMSHqkbfI"
  },
  {
    "id": 600,
    "title": "Megamind",
    "year": 2010,
    "genre": [
      "Animation"
    ],
    "director": "Tom McGrath",
    "rating": 7.3,
    "votes": 183926,
    "revenue": 148340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uZ9ytt3sPTx62XTfN56ILSuYWRe.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Megamind is a Animation directed by Tom McGrath.",
    "trailer": "https://www.youtube.com/watch?v=xAw_kw8LTHI"
  },
  {
    "id": 601,
    "title": "Gangster Squad",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Ruben Fleischer",
    "rating": 6.7,
    "votes": 181432,
    "revenue": 46000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wAuQNTBFBu2yXZsX6yLhUPiwTlW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gangster Squad is a Action directed by Ruben Fleischer.",
    "trailer": "https://www.youtube.com/watch?v=LlbN5cQKZik"
  },
  {
    "id": 602,
    "title": "Blood Father",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Jean-Fran\u00e7ois Richet",
    "rating": 6.4,
    "votes": 40357,
    "revenue": 93950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xgzmEJNM2ePcwwDZOGGznwPPnsc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blood Father is a Action directed by Jean-Fran\u00e7ois Richet.",
    "trailer": "https://www.youtube.com/results?search_query=Blood%20Father%202016%20official%20trailer"
  },
  {
    "id": 603,
    "title": "He's Just Not That Into You",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Ken Kwapis",
    "rating": 6.4,
    "votes": 137684,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/jip2ap24Y6JxEgzVRyNqyYssnyR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "He's Just Not That Into You is a Comedy directed by Ken Kwapis.",
    "trailer": "https://www.youtube.com/results?search_query=He%27s%20Just%20Not%20That%20Into%20You%202009%20official%20trailer"
  },
  {
    "id": 604,
    "title": "Kung Fu Panda 3",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Alessandro Carloni",
    "rating": 7.2,
    "votes": 89791,
    "revenue": 143520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oajNi4Su39WAByHI6EONu8G8HYn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kung Fu Panda 3 is a Animation directed by Alessandro Carloni.",
    "trailer": "https://www.youtube.com/watch?v=yqN7nHM1YTA"
  },
  {
    "id": 605,
    "title": "The Rise of the Krays",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Zackary Adler",
    "rating": 5.1,
    "votes": 1630,
    "revenue": 6530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mIvQHEkuwUxqUr3XicrUWzdmrv4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Rise of the Krays is a Crime directed by Zackary Adler.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Rise%20of%20the%20Krays%202015%20official%20trailer"
  },
  {
    "id": 606,
    "title": "Handsome Devil",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "John Butler",
    "rating": 7.4,
    "votes": 338,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/xlHOWQFgcGV4KcZKLzYBZ21gjGT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Handsome Devil is a Drama directed by John Butler.",
    "trailer": "https://www.youtube.com/results?search_query=Handsome%20Devil%202016%20official%20trailer"
  },
  {
    "id": 607,
    "title": "Winter's Bone",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Debra Granik",
    "rating": 7.2,
    "votes": 116435,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/a0qhPkNlxLfsf5B2jFyI1Pp04XV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Winter's Bone is a Drama directed by Debra Granik.",
    "trailer": "https://www.youtube.com/watch?v=bE_X2pDRXyY"
  },
  {
    "id": 608,
    "title": "Horrible Bosses",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Seth Gordon",
    "rating": 6.9,
    "votes": 368556,
    "revenue": 117530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uQkUwgyFHAm0jGQERPG6Z9o9Zbj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Horrible Bosses is a Comedy directed by Seth Gordon.",
    "trailer": "https://www.youtube.com/watch?v=VpUeQV8sdOc"
  },
  {
    "id": 609,
    "title": "Mommy",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Xavier Dolan",
    "rating": 8.1,
    "votes": 33560,
    "revenue": 3490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uPDP0cHGOpkr47rdCdHWo4CyiPj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mommy is a Drama directed by Xavier Dolan.",
    "trailer": "https://www.youtube.com/watch?v=bEpTgowZ1dI"
  },
  {
    "id": 610,
    "title": "Hellboy II: The Golden Army",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Guillermo del Toro",
    "rating": 7.0,
    "votes": 216932,
    "revenue": 75750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zO0Wdrxnhx3KoJEvychSmnY3urC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hellboy II: The Golden Army is a Action directed by Guillermo del Toro.",
    "trailer": "https://www.youtube.com/results?search_query=Hellboy%20II%3A%20The%20Golden%20Army%202008%20official%20trailer"
  },
  {
    "id": 611,
    "title": "Beautiful Creatures",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Richard LaGravenese",
    "rating": 6.2,
    "votes": 71822,
    "revenue": 19450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/t7PWQHpJHb2ozALCfaPaC5aHxBs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Beautiful Creatures is a Drama directed by Richard LaGravenese.",
    "trailer": "https://www.youtube.com/watch?v=r9rjhB7KWEc"
  },
  {
    "id": 612,
    "title": "Toni Erdmann",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Maren Ade",
    "rating": 7.6,
    "votes": 24387,
    "revenue": 1480000.0,
    "poster": "https://image.tmdb.org/t/p/w500/v3gf7T8hb8aYv05X2jHmxJQWPZr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Toni Erdmann is a Comedy directed by Maren Ade.",
    "trailer": "https://www.youtube.com/results?search_query=Toni%20Erdmann%202016%20official%20trailer"
  },
  {
    "id": 613,
    "title": "The Lovely Bones",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Peter Jackson",
    "rating": 6.7,
    "votes": 130702,
    "revenue": 43980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kIa9CyK2yiE4CAy7RJPGe7lztse.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lovely Bones is a Drama directed by Peter Jackson.",
    "trailer": "https://www.youtube.com/watch?v=QydPyttFzhs"
  },
  {
    "id": 614,
    "title": "The Assassination of Jesse James by the Coward Robert Ford",
    "year": 2007,
    "genre": [
      "Biography"
    ],
    "director": "Andrew Dominik",
    "rating": 7.5,
    "votes": 143564,
    "revenue": 3900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xMKn6EQS7eR5ubhPJbw5pQSBZMw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Assassination of Jesse James by the Coward Robert Ford is a Biography directed by Andrew Dominik.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Assassination%20of%20Jesse%20James%20by%20the%20Coward%20Robert%20Ford%202007%20official%20trailer"
  },
  {
    "id": 615,
    "title": "Don Jon",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Joseph Gordon-Levitt",
    "rating": 6.6,
    "votes": 199973,
    "revenue": 24480000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uh8bwvgGXeUKzdL4oSul9zxyTcd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Don Jon is a Comedy directed by Joseph Gordon-Levitt.",
    "trailer": "https://www.youtube.com/watch?v=zAE6YFikffs"
  },
  {
    "id": 616,
    "title": "Bastille Day",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "James Watkins",
    "rating": 6.3,
    "votes": 21089,
    "revenue": 40000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lTby7l0zX7xG8Pt0eNrWBrNzdqX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bastille Day is a Action directed by James Watkins.",
    "trailer": "https://www.youtube.com/results?search_query=Bastille%20Day%202016%20official%20trailer"
  },
  {
    "id": 617,
    "title": "2307: Winter's Dream",
    "year": 2016,
    "genre": [
      "Sci-Fi"
    ],
    "director": "Joey Curtis",
    "rating": 4.0,
    "votes": 277,
    "revenue": 20760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hMEYVCklgfmQziL573tZGtOFH34.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "2307: Winter's Dream is a Sci-Fi directed by Joey Curtis.",
    "trailer": "https://www.youtube.com/results?search_query=2307%3A%20Winter%27s%20Dream%202016%20official%20trailer"
  },
  {
    "id": 618,
    "title": "Free State of Jones",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Gary Ross",
    "rating": 6.9,
    "votes": 29895,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/fTB6p9QwPRKIuK5LtB5CZXlkx5b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Free State of Jones is a Action directed by Gary Ross.",
    "trailer": "https://www.youtube.com/results?search_query=Free%20State%20of%20Jones%202016%20official%20trailer"
  },
  {
    "id": 619,
    "title": "Mr. Right",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Paco Cabezas",
    "rating": 6.3,
    "votes": 30053,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aSx5YUCLcSUAR4nt93aeIpZYHF6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mr. Right is a Action directed by Paco Cabezas.",
    "trailer": "https://www.youtube.com/results?search_query=Mr.%20Right%202015%20official%20trailer"
  },
  {
    "id": 620,
    "title": "The Secret Life of Walter Mitty",
    "year": 2013,
    "genre": [
      "Adventure"
    ],
    "director": "Ben Stiller",
    "rating": 7.3,
    "votes": 249877,
    "revenue": 58230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iAo1hlzsPV9XpYcLQp6Ud065tGO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Secret Life of Walter Mitty is a Adventure directed by Ben Stiller.",
    "trailer": "https://www.youtube.com/watch?v=Bp_cxxqOaPM"
  },
  {
    "id": 621,
    "title": "Dope",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Rick Famuyiwa",
    "rating": 7.3,
    "votes": 66400,
    "revenue": 17470000.0,
    "poster": "https://image.tmdb.org/t/p/w500/n6u00imN7AX2NiyWUc5kTgHXmEf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dope is a Comedy directed by Rick Famuyiwa.",
    "trailer": "https://www.youtube.com/results?search_query=Dope%202015%20official%20trailer"
  },
  {
    "id": 622,
    "title": "Underworld Awakening",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "M\u00e5ns M\u00e5rlind",
    "rating": 6.4,
    "votes": 127157,
    "revenue": 62320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jN0uuc8U6M3sTg9zEaliJV60Stf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Underworld Awakening is a Action directed by M\u00e5ns M\u00e5rlind.",
    "trailer": "https://www.youtube.com/results?search_query=Underworld%20Awakening%202012%20official%20trailer"
  },
  {
    "id": 623,
    "title": "Antichrist",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Lars von Trier",
    "rating": 6.6,
    "votes": 94069,
    "revenue": 400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ge7zbYvpfsDP3luKi0iSpzOgncM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Antichrist is a Drama directed by Lars von Trier.",
    "trailer": "https://www.youtube.com/results?search_query=Antichrist%202009%20official%20trailer"
  },
  {
    "id": 624,
    "title": "Friday the 13th",
    "year": 2009,
    "genre": [
      "Horror"
    ],
    "director": "Marcus Nispel",
    "rating": 5.6,
    "votes": 78631,
    "revenue": 65000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uGGpnWHOmWTARVN9wbC1nPxNgps.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Friday the 13th is a Horror directed by Marcus Nispel.",
    "trailer": "https://www.youtube.com/watch?v=J-gx4AHReGs"
  },
  {
    "id": 625,
    "title": "Taken 3",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Olivier Megaton",
    "rating": 6.0,
    "votes": 144715,
    "revenue": 89250000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Taken 3 is a Action directed by Olivier Megaton.",
    "trailer": "https://www.youtube.com/results?search_query=Taken%203%202014%20official%20trailer"
  },
  {
    "id": 626,
    "title": "Total Recall",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Len Wiseman",
    "rating": 6.3,
    "votes": 210965,
    "revenue": 58880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hVUxVVzZ0WvvPIpKwsMPMDOQyqi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Total Recall is a Action directed by Len Wiseman.",
    "trailer": "https://www.youtube.com/watch?v=P5HKzf5OWWc"
  },
  {
    "id": 627,
    "title": "X-Men: The Last Stand",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Brett Ratner",
    "rating": 6.7,
    "votes": 406540,
    "revenue": 234360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/a2xicU8DpKtRizOHjQLC1JyCSRS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "X-Men: The Last Stand is a Action directed by Brett Ratner.",
    "trailer": "https://www.youtube.com/results?search_query=X-Men%3A%20The%20Last%20Stand%202006%20official%20trailer"
  },
  {
    "id": 628,
    "title": "The Escort",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Will Slocombe",
    "rating": 6.0,
    "votes": 7181,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/ueiLy3gu0yeoJy7hf9TzTdXfWa1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Escort is a Comedy directed by Will Slocombe.",
    "trailer": "https://www.youtube.com/watch?v=O0Vvy5RI8WU"
  },
  {
    "id": 629,
    "title": "The Whole Truth",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Courtney Hunt",
    "rating": 6.1,
    "votes": 10700,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/iL3Bx4YOqYdAMlx4czLyygA09MC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Whole Truth is a Crime directed by Courtney Hunt.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Whole%20Truth%202016%20official%20trailer"
  },
  {
    "id": 630,
    "title": "Night at the Museum: Secret of the Tomb",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Shawn Levy",
    "rating": 6.2,
    "votes": 74886,
    "revenue": 113730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xwgy305K6qDs3D20xUO4OZu1HPY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Night at the Museum: Secret of the Tomb is a Adventure directed by Shawn Levy.",
    "trailer": "https://www.youtube.com/results?search_query=Night%20at%20the%20Museum%3A%20Secret%20of%20the%20Tomb%202014%20official%20trailer"
  },
  {
    "id": 631,
    "title": "Love & Other Drugs",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Edward Zwick",
    "rating": 6.7,
    "votes": 151519,
    "revenue": 32360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wZLM2uKJRYNchLmiCIjosX0rXy8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Love & Other Drugs is a Comedy directed by Edward Zwick.",
    "trailer": "https://www.youtube.com/results?search_query=Love%20%26%20Other%20Drugs%202010%20official%20trailer"
  },
  {
    "id": 632,
    "title": "The Interview",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Evan Goldberg",
    "rating": 6.6,
    "votes": 261536,
    "revenue": 6110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tIDC4xT65l7a8qbgg8GvwD5g8c5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Interview is a Comedy directed by Evan Goldberg.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Interview%202014%20official%20trailer"
  },
  {
    "id": 633,
    "title": "The Host",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "Bong Joon Ho",
    "rating": 7.0,
    "votes": 73491,
    "revenue": 2200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dEDLY3KeghKFzks5nTDWdigVikr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Host is a Comedy directed by Bong Joon Ho.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Host%202006%20official%20trailer"
  },
  {
    "id": 634,
    "title": "Megan Is Missing",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Michael Goi",
    "rating": 4.9,
    "votes": 6683,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/lDmIqn0HJDjQJZDZaofuyaAnw2X.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Megan Is Missing is a Drama directed by Michael Goi.",
    "trailer": "https://www.youtube.com/results?search_query=Megan%20Is%20Missing%202011%20official%20trailer"
  },
  {
    "id": 635,
    "title": "WALL\u00b7E",
    "year": 2008,
    "genre": [
      "Animation"
    ],
    "director": "Andrew Stanton",
    "rating": 8.4,
    "votes": 776897,
    "revenue": 223810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "WALL\u00b7E is a Animation directed by Andrew Stanton.",
    "trailer": "https://www.youtube.com/watch?v=Tbr_L9Gap_M"
  },
  {
    "id": 636,
    "title": "Knocked Up",
    "year": 2007,
    "genre": [
      "Comedy"
    ],
    "director": "Judd Apatow",
    "rating": 7.0,
    "votes": 309398,
    "revenue": 148730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b4OaXw2MW97VvIiZE0Sbn1NfxSh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Knocked Up is a Comedy directed by Judd Apatow.",
    "trailer": "https://www.youtube.com/watch?v=K6oqO-xMERc"
  },
  {
    "id": 637,
    "title": "Source Code",
    "year": 2011,
    "genre": [
      "Mystery"
    ],
    "director": "Duncan Jones",
    "rating": 7.5,
    "votes": 404884,
    "revenue": 54700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nTr0lvAzeQmUjgSgDEHTJpnrxTz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Source Code is a Mystery directed by Duncan Jones.",
    "trailer": "https://www.youtube.com/watch?v=0dafmG_c8kc"
  },
  {
    "id": 638,
    "title": "Lawless",
    "year": 2012,
    "genre": [
      "Crime"
    ],
    "director": "John Hillcoat",
    "rating": 7.3,
    "votes": 195360,
    "revenue": 37400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/Ahtzwts22ayviD3LEVslfL4nRWB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lawless is a Crime directed by John Hillcoat.",
    "trailer": "https://www.youtube.com/watch?v=HK-Q3wYsOgA"
  },
  {
    "id": 639,
    "title": "Unfriended",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Levan Gabriadze",
    "rating": 5.6,
    "votes": 50402,
    "revenue": 31540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8byPxREr3BqBNyyij5WHVSOVtYk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Unfriended is a Drama directed by Levan Gabriadze.",
    "trailer": "https://www.youtube.com/watch?v=Lgj4GjqCFlY"
  },
  {
    "id": 640,
    "title": "American Reunion",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Jon Hurwitz",
    "rating": 6.7,
    "votes": 178471,
    "revenue": 56720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/de5QBIdVR4dnkBZ4a0zjkS4lTg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "American Reunion is a Comedy directed by Jon Hurwitz.",
    "trailer": "https://www.youtube.com/watch?v=1akixU65dDY"
  },
  {
    "id": 641,
    "title": "The Pursuit of Happyness",
    "year": 2006,
    "genre": [
      "Biography"
    ],
    "director": "Gabriele Muccino",
    "rating": 8.0,
    "votes": 361105,
    "revenue": 162590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Pursuit of Happyness is a Biography directed by Gabriele Muccino.",
    "trailer": "https://www.youtube.com/watch?v=DMOBlEcRuw8"
  },
  {
    "id": 642,
    "title": "Relatos salvajes",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Dami\u00e1n Szifron",
    "rating": 8.1,
    "votes": 110100,
    "revenue": 3080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vmeCDuWJ6B2cqi9f3QFyIwRKqFV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Relatos salvajes is a Comedy directed by Dami\u00e1n Szifron.",
    "trailer": "https://www.youtube.com/watch?v=Utq0aDEp084"
  },
  {
    "id": 643,
    "title": "The Ridiculous 6",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Frank Coraci",
    "rating": 4.8,
    "votes": 31149,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/kPc80jywR5Nm2KIQjkY5i4VXSx4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Ridiculous 6 is a Comedy directed by Frank Coraci.",
    "trailer": "https://www.youtube.com/watch?v=qUp7Qgimn38"
  },
  {
    "id": 644,
    "title": "Frantz",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Fran\u00e7ois Ozon",
    "rating": 7.5,
    "votes": 4304,
    "revenue": 860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cL77uNb2BB8eXjYl9JIrWXCM8so.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Frantz is a Drama directed by Fran\u00e7ois Ozon.",
    "trailer": "https://www.youtube.com/watch?v=oop8_CgSgmo"
  },
  {
    "id": 645,
    "title": "Viral",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Henry Joost",
    "rating": 5.5,
    "votes": 3564,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/2Rul30PXj13zTAx9RgYZQ8fnlif.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Viral is a Drama directed by Henry Joost.",
    "trailer": "https://www.youtube.com/results?search_query=Viral%202016%20official%20trailer"
  },
  {
    "id": 646,
    "title": "Gran Torino",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Clint Eastwood",
    "rating": 8.2,
    "votes": 595779,
    "revenue": 148090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zUybYvxWdAJy5hhYovsXtHSWI1l.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gran Torino is a Drama directed by Clint Eastwood.",
    "trailer": "https://www.youtube.com/watch?v=F8zue_BzNsw"
  },
  {
    "id": 647,
    "title": "Burnt",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "John Wells",
    "rating": 6.6,
    "votes": 76469,
    "revenue": 13650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iptu4zfvbeULkeuoVkTl2mOqTPS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Burnt is a Comedy directed by John Wells.",
    "trailer": "https://www.youtube.com/results?search_query=Burnt%202015%20official%20trailer"
  },
  {
    "id": 648,
    "title": "Tall Men",
    "year": 2016,
    "genre": [
      "Fantasy"
    ],
    "director": "Jonathan Holbrook",
    "rating": 3.2,
    "votes": 173,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tvMX9de89OXkbn0aLOd1DjIU5fA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tall Men is a Fantasy directed by Jonathan Holbrook.",
    "trailer": "https://www.youtube.com/watch?v=9p42NjVG2f0"
  },
  {
    "id": 649,
    "title": "Sleeping Beauty",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Julia Leigh",
    "rating": 5.3,
    "votes": 27006,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pO9YMLSmj3essVSWSGygjGxX6Kw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sleeping Beauty is a Drama directed by Julia Leigh.",
    "trailer": "https://www.youtube.com/results?search_query=Sleeping%20Beauty%202011%20official%20trailer"
  },
  {
    "id": 650,
    "title": "Vampire Academy",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Mark Waters",
    "rating": 5.6,
    "votes": 44111,
    "revenue": 7790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cJZpKgiFfjDZ6L5aOJvbmDhsGqY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Vampire Academy is a Action directed by Mark Waters.",
    "trailer": "https://www.youtube.com/results?search_query=Vampire%20Academy%202014%20official%20trailer"
  },
  {
    "id": 651,
    "title": "Sweeney Todd: The Demon Barber of Fleet Street",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Tim Burton",
    "rating": 7.4,
    "votes": 296289,
    "revenue": 52880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gAW4J1bkRjZKmFsJsIiOBASeoAp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sweeney Todd: The Demon Barber of Fleet Street is a Drama directed by Tim Burton.",
    "trailer": "https://www.youtube.com/watch?v=AAU7dRxGvco"
  },
  {
    "id": 652,
    "title": "Solace",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Afonso Poyart",
    "rating": 6.4,
    "votes": 36300,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/pbcXpZgem8kgr90RwIUNAbC2ite.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Solace is a Crime directed by Afonso Poyart.",
    "trailer": "https://www.youtube.com/results?search_query=Solace%202015%20official%20trailer"
  },
  {
    "id": 653,
    "title": "Insidious",
    "year": 2010,
    "genre": [
      "Horror"
    ],
    "director": "James Wan",
    "rating": 6.8,
    "votes": 219916,
    "revenue": 53990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1egpmVXuXed58TH2UOnX1nATTrf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Insidious is a Horror directed by James Wan.",
    "trailer": "https://www.youtube.com/results?search_query=Insidious%202010%20official%20trailer"
  },
  {
    "id": 654,
    "title": "Popstar: Never Stop Never Stopping",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Akiva Schaffer",
    "rating": 6.7,
    "votes": 30875,
    "revenue": 9390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jBZeZZNjYBUU21zFvBnin5n62bv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Popstar: Never Stop Never Stopping is a Comedy directed by Akiva Schaffer.",
    "trailer": "https://www.youtube.com/results?search_query=Popstar%3A%20Never%20Stop%20Never%20Stopping%202016%20official%20trailer"
  },
  {
    "id": 655,
    "title": "The Levelling",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Hope Dickson Leach",
    "rating": 6.4,
    "votes": 482,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tLp1mJMvoeQm1xKxQUzja8swRua.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Levelling is a Drama directed by Hope Dickson Leach.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Levelling%202016%20official%20trailer"
  },
  {
    "id": 656,
    "title": "Public Enemies",
    "year": 2009,
    "genre": [
      "Biography"
    ],
    "director": "Michael Mann",
    "rating": 7.0,
    "votes": 240323,
    "revenue": 97030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3KgtekisQBrHRsm2cD5UOB6Ce3k.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Public Enemies is a Biography directed by Michael Mann.",
    "trailer": "https://www.youtube.com/watch?v=pv0DMzFwEW4"
  },
  {
    "id": 657,
    "title": "Boyhood",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Richard Linklater",
    "rating": 7.9,
    "votes": 286722,
    "revenue": 25360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2BvtvDUyxiMJ4dmKfiQf4qdOHQN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Boyhood is a Drama directed by Richard Linklater.",
    "trailer": "https://www.youtube.com/results?search_query=Boyhood%202014%20official%20trailer"
  },
  {
    "id": 658,
    "title": "Teenage Mutant Ninja Turtles",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Jonathan Liebesman",
    "rating": 5.9,
    "votes": 178527,
    "revenue": 190870000.0,
    "poster": "https://image.tmdb.org/t/p/w500/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Teenage Mutant Ninja Turtles is a Action directed by Jonathan Liebesman.",
    "trailer": "https://www.youtube.com/watch?v=dwXFsrp6WBs"
  },
  {
    "id": 659,
    "title": "Eastern Promises",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "David Cronenberg",
    "rating": 7.7,
    "votes": 198006,
    "revenue": 17110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nLwv1pxRCRZucQaqs6oPkq7HH3K.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Eastern Promises is a Crime directed by David Cronenberg.",
    "trailer": "https://www.youtube.com/results?search_query=Eastern%20Promises%202007%20official%20trailer"
  },
  {
    "id": 660,
    "title": "The Daughter",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Simon Stone",
    "rating": 6.7,
    "votes": 2798,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jdHe8nyuvn67XBq0JQEwkNGUQ9I.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Daughter is a Drama directed by Simon Stone.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Daughter%202015%20official%20trailer"
  },
  {
    "id": 661,
    "title": "Pineapple Express",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "David Gordon Green",
    "rating": 7.0,
    "votes": 267872,
    "revenue": 87340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6E50WjeOYjDZg9HXgPjYdGtY2jG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pineapple Express is a Action directed by David Gordon Green.",
    "trailer": "https://www.youtube.com/results?search_query=Pineapple%20Express%202008%20official%20trailer"
  },
  {
    "id": 662,
    "title": "The First Time",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Jon Kasdan",
    "rating": 6.9,
    "votes": 54027,
    "revenue": 20000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tG6jUndWd9FRuvI4j5Z2bhTuq0V.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The First Time is a Comedy directed by Jon Kasdan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20First%20Time%202012%20official%20trailer"
  },
  {
    "id": 663,
    "title": "Gone Baby Gone",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Ben Affleck",
    "rating": 7.7,
    "votes": 206707,
    "revenue": 20300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5BXDhjKZ4AL9VPxcygdG3oL60GP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Gone Baby Gone is a Crime directed by Ben Affleck.",
    "trailer": "https://www.youtube.com/results?search_query=Gone%20Baby%20Gone%202007%20official%20trailer"
  },
  {
    "id": 664,
    "title": "The Heat",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Paul Feig",
    "rating": 6.6,
    "votes": 140151,
    "revenue": 159580000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yERBa1y5zNUOTRKQPiDCPIc2fuv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Heat is a Action directed by Paul Feig.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Heat%202013%20official%20trailer"
  },
  {
    "id": 665,
    "title": "L'avenir",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Mia Hansen-L\u00f8ve",
    "rating": 7.1,
    "votes": 5796,
    "revenue": 280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6MAAJJ51y2RUa1gvvVje4s0FB7W.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "L'avenir is a Drama directed by Mia Hansen-L\u00f8ve.",
    "trailer": "https://www.youtube.com/results?search_query=L%27avenir%202016%20official%20trailer"
  },
  {
    "id": 666,
    "title": "Anna Karenina",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Joe Wright",
    "rating": 6.6,
    "votes": 75291,
    "revenue": 12800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b9mvt1kKqDuveD1AJuGSkBEuagU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Anna Karenina is a Drama directed by Joe Wright.",
    "trailer": "https://www.youtube.com/results?search_query=Anna%20Karenina%202012%20official%20trailer"
  },
  {
    "id": 667,
    "title": "Regression",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Alejandro Amen\u00e1bar",
    "rating": 5.7,
    "votes": 26320,
    "revenue": 50000.0,
    "poster": "https://image.tmdb.org/t/p/w500/luHpMTmU1ygtEgdOTSSj0i9nd8E.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Regression is a Crime directed by Alejandro Amen\u00e1bar.",
    "trailer": "https://www.youtube.com/results?search_query=Regression%202015%20official%20trailer"
  },
  {
    "id": 668,
    "title": "Ted 2",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Seth MacFarlane",
    "rating": 6.3,
    "votes": 136323,
    "revenue": 81260000.0,
    "poster": "https://image.tmdb.org/t/p/w500/38C91I7Xft0gyY7BITm8i4yvuRb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ted 2 is a Adventure directed by Seth MacFarlane.",
    "trailer": "https://www.youtube.com/results?search_query=Ted%202%202015%20official%20trailer"
  },
  {
    "id": 669,
    "title": "Pain & Gain",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Michael Bay",
    "rating": 6.5,
    "votes": 168875,
    "revenue": 49870000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9WqA0Ry9wmTzFvom8mNbcyKZQgP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pain & Gain is a Comedy directed by Michael Bay.",
    "trailer": "https://www.youtube.com/watch?v=59P-wFkL370"
  },
  {
    "id": 670,
    "title": "Blood Diamond",
    "year": 2006,
    "genre": [
      "Adventure"
    ],
    "director": "Edward Zwick",
    "rating": 8.0,
    "votes": 422014,
    "revenue": 57370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sYAUuiWpoXGKHxUfHyjTj7Apj2h.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blood Diamond is a Adventure directed by Edward Zwick.",
    "trailer": "https://www.youtube.com/results?search_query=Blood%20Diamond%202006%20official%20trailer"
  },
  {
    "id": 671,
    "title": "Devil's Knot",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Atom Egoyan",
    "rating": 6.1,
    "votes": 15514,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/8DMDx7XMylIL7lpBEOMzIjuwhw0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Devil's Knot is a Biography directed by Atom Egoyan.",
    "trailer": "https://www.youtube.com/results?search_query=Devil%27s%20Knot%202013%20official%20trailer"
  },
  {
    "id": 672,
    "title": "Child 44",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Daniel Espinosa",
    "rating": 6.5,
    "votes": 47703,
    "revenue": 1210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/p8uTx2xm72vXqI0H4W5kU3ku9ND.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Child 44 is a Crime directed by Daniel Espinosa.",
    "trailer": "https://www.youtube.com/results?search_query=Child%2044%202015%20official%20trailer"
  },
  {
    "id": 673,
    "title": "The Hurt Locker",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Kathryn Bigelow",
    "rating": 7.6,
    "votes": 352023,
    "revenue": 15700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/io2dfBJhasvGbgkCX9cCGVOiA99.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hurt Locker is a Drama directed by Kathryn Bigelow.",
    "trailer": "https://www.youtube.com/watch?v=4mgWq9wZs2o"
  },
  {
    "id": 674,
    "title": "Green Lantern",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Martin Campbell",
    "rating": 5.6,
    "votes": 231907,
    "revenue": 116590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Green Lantern is a Action directed by Martin Campbell.",
    "trailer": "https://www.youtube.com/results?search_query=Green%20Lantern%202011%20official%20trailer"
  },
  {
    "id": 675,
    "title": "War on Everyone",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "John Michael McDonagh",
    "rating": 5.9,
    "votes": 9285,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/iJAe5fBN90JbFj7AhZpyorY2W7i.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "War on Everyone is a Action directed by John Michael McDonagh.",
    "trailer": "https://www.youtube.com/results?search_query=War%20on%20Everyone%202016%20official%20trailer"
  },
  {
    "id": 676,
    "title": "The Mist",
    "year": 2007,
    "genre": [
      "Horror"
    ],
    "director": "Frank Darabont",
    "rating": 7.2,
    "votes": 233346,
    "revenue": 25590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/c4UgUKZjM0Qzy5t4hAXSOFHYsnb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Mist is a Horror directed by Frank Darabont.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Mist%202007%20official%20trailer"
  },
  {
    "id": 677,
    "title": "Escape Plan",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Mikael H\u00e5fstr\u00f6m",
    "rating": 6.7,
    "votes": 188004,
    "revenue": 25120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qOZPLflxDqKogu9v9hYw3lolxGs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Escape Plan is a Action directed by Mikael H\u00e5fstr\u00f6m.",
    "trailer": "https://www.youtube.com/results?search_query=Escape%20Plan%202013%20official%20trailer"
  },
  {
    "id": 678,
    "title": "Love, Rosie",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Christian Ditter",
    "rating": 7.2,
    "votes": 80415,
    "revenue": 10000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2HOd431LX9ggqSpBIJ7qyYhATyo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Love, Rosie is a Comedy directed by Christian Ditter.",
    "trailer": "https://www.youtube.com/results?search_query=Love%2C%20Rosie%202014%20official%20trailer"
  },
  {
    "id": 679,
    "title": "The DUFF",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Ari Sandel",
    "rating": 6.5,
    "votes": 57874,
    "revenue": 34020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/A6ScveWmIPL9vSYyULD8ObqyHDQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The DUFF is a Comedy directed by Ari Sandel.",
    "trailer": "https://www.youtube.com/watch?v=YGBNMNaJ6M4"
  },
  {
    "id": 680,
    "title": "The Age of Shadows",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Jee-woon Kim",
    "rating": 7.2,
    "votes": 2403,
    "revenue": 540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/kHiBkgmMY8QJQo2r5yXRhJ7P7k.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Age of Shadows is a Action directed by Jee-woon Kim.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Age%20of%20Shadows%202016%20official%20trailer"
  },
  {
    "id": 681,
    "title": "The Hunger Games: Mockingjay - Part 1",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Francis Lawrence",
    "rating": 6.7,
    "votes": 331902,
    "revenue": 337100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hunger Games: Mockingjay - Part 1 is a Action directed by Francis Lawrence.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Hunger%20Games%3A%20Mockingjay%20-%20Part%201%202014%20official%20trailer"
  },
  {
    "id": 682,
    "title": "We Need to Talk About Kevin",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Lynne Ramsay",
    "rating": 7.5,
    "votes": 104953,
    "revenue": 1740000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AtdYbs1SqYwFOLyi2v6ldVTawbn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "We Need to Talk About Kevin is a Drama directed by Lynne Ramsay.",
    "trailer": "https://www.youtube.com/results?search_query=We%20Need%20to%20Talk%20About%20Kevin%202011%20official%20trailer"
  },
  {
    "id": 683,
    "title": "Love & Friendship",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Whit Stillman",
    "rating": 6.5,
    "votes": 16164,
    "revenue": 14010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ptpdUQiRjeHgE1dmpCd38N64ENV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Love & Friendship is a Comedy directed by Whit Stillman.",
    "trailer": "https://www.youtube.com/results?search_query=Love%20%26%20Friendship%202016%20official%20trailer"
  },
  {
    "id": 684,
    "title": "The Mortal Instruments: City of Bones",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Harald Zwart",
    "rating": 5.9,
    "votes": 112313,
    "revenue": 31170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zaK1aVn5vXfNwLIDop9U8XA3Q0x.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Mortal Instruments: City of Bones is a Action directed by Harald Zwart.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Mortal%20Instruments%3A%20City%20of%20Bones%202013%20official%20trailer"
  },
  {
    "id": 685,
    "title": "Seven Pounds",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Gabriele Muccino",
    "rating": 7.7,
    "votes": 245144,
    "revenue": 69950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/85zUipgVy2QbvAJ6djZXYaGckMv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Seven Pounds is a Drama directed by Gabriele Muccino.",
    "trailer": "https://www.youtube.com/watch?v=hvu2F6t26hs"
  },
  {
    "id": 686,
    "title": "The King's Speech",
    "year": 2010,
    "genre": [
      "Biography"
    ],
    "director": "Tom Hooper",
    "rating": 8.0,
    "votes": 534388,
    "revenue": 138800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pVNKXVQFukBaCz6ML7GH3kiPlQP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The King's Speech is a Biography directed by Tom Hooper.",
    "trailer": "https://www.youtube.com/results?search_query=The%20King%27s%20Speech%202010%20official%20trailer"
  },
  {
    "id": 687,
    "title": "Hunger",
    "year": 2008,
    "genre": [
      "Biography"
    ],
    "director": "Steve McQueen",
    "rating": 7.6,
    "votes": 54486,
    "revenue": 150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/84HdTM39G2MzyTl8N9R0wVU9I5b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hunger is a Biography directed by Steve McQueen.",
    "trailer": "https://www.youtube.com/results?search_query=Hunger%202008%20official%20trailer"
  },
  {
    "id": 688,
    "title": "Jumper",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Doug Liman",
    "rating": 6.1,
    "votes": 252503,
    "revenue": 80170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3pPZ9JhNz3VMmASVir5SMHvTDUU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jumper is a Action directed by Doug Liman.",
    "trailer": "https://www.youtube.com/results?search_query=Jumper%202008%20official%20trailer"
  },
  {
    "id": 689,
    "title": "Toy Story 3",
    "year": 2010,
    "genre": [
      "Animation"
    ],
    "director": "Lee Unkrich",
    "rating": 8.3,
    "votes": 586669,
    "revenue": 414980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Toy Story 3 is a Animation directed by Lee Unkrich.",
    "trailer": "https://www.youtube.com/results?search_query=Toy%20Story%203%202010%20official%20trailer"
  },
  {
    "id": 690,
    "title": "Tinker Tailor Soldier Spy",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Tomas Alfredson",
    "rating": 7.1,
    "votes": 157053,
    "revenue": 24100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/e0dZ7TapGY9HtJ9xk1TUHPEOccl.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tinker Tailor Soldier Spy is a Drama directed by Tomas Alfredson.",
    "trailer": "https://www.youtube.com/results?search_query=Tinker%20Tailor%20Soldier%20Spy%202011%20official%20trailer"
  },
  {
    "id": 691,
    "title": "Resident Evil: Retribution",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Paul W.S. Anderson",
    "rating": 5.4,
    "votes": 114144,
    "revenue": 42350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ohdUDWVlcbuWphaLu6wS91xdJ73.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Resident Evil: Retribution is a Action directed by Paul W.S. Anderson.",
    "trailer": "https://www.youtube.com/watch?v=hoyMT-7wEqs"
  },
  {
    "id": 692,
    "title": "Dear Zindagi",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Gauri Shinde",
    "rating": 7.8,
    "votes": 23540,
    "revenue": 1400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oUg0N2isgZ5rrxdXnsemcKolfKZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dear Zindagi is a Drama directed by Gauri Shinde.",
    "trailer": "https://www.youtube.com/watch?v=Y3DlwnW-SmM"
  },
  {
    "id": 693,
    "title": "Genius",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Michael Grandage",
    "rating": 6.5,
    "votes": 10708,
    "revenue": 1360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/f3KG63zvQGvakfwOTUb8ODgHEnP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Genius is a Biography directed by Michael Grandage.",
    "trailer": "https://www.youtube.com/results?search_query=Genius%202016%20official%20trailer"
  },
  {
    "id": 694,
    "title": "Pompeii",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Paul W.S. Anderson",
    "rating": 5.5,
    "votes": 90188,
    "revenue": 23220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dxxM3lLDjGRC50i5rhvfQziskAN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Pompeii is a Action directed by Paul W.S. Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=Pompeii%202014%20official%20trailer"
  },
  {
    "id": 695,
    "title": "Life of Pi",
    "year": 2012,
    "genre": [
      "Adventure"
    ],
    "director": "Ang Lee",
    "rating": 7.9,
    "votes": 471109,
    "revenue": 124980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iLgRu4hhSr6V1uManX6ukDriiSc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Life of Pi is a Adventure directed by Ang Lee.",
    "trailer": "https://www.youtube.com/results?search_query=Life%20of%20Pi%202012%20official%20trailer"
  },
  {
    "id": 696,
    "title": "Hachi: A Dog's Tale",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Lasse Hallstr\u00f6m",
    "rating": 8.1,
    "votes": 177602,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/lsy3aEsEfYIHdLRk4dontZ4s85h.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hachi: A Dog's Tale is a Drama directed by Lasse Hallstr\u00f6m.",
    "trailer": "https://www.youtube.com/results?search_query=Hachi%3A%20A%20Dog%27s%20Tale%202009%20official%20trailer"
  },
  {
    "id": 697,
    "title": "10 Years",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Jamie Linden",
    "rating": 6.1,
    "votes": 19636,
    "revenue": 200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AuCM5jU751cMLKOtHybzUoL6RaX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "10 Years is a Comedy directed by Jamie Linden.",
    "trailer": "https://www.youtube.com/watch?v=-k5y4bLU5X4"
  },
  {
    "id": 698,
    "title": "I Origins",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Mike Cahill",
    "rating": 7.3,
    "votes": 86271,
    "revenue": 330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2P31jhd1dWUAPD8dmnSrwkQ8CNN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I Origins is a Drama directed by Mike Cahill.",
    "trailer": "https://www.youtube.com/results?search_query=I%20Origins%202014%20official%20trailer"
  },
  {
    "id": 699,
    "title": "Live Free or Die Hard",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Len Wiseman",
    "rating": 7.2,
    "votes": 347567,
    "revenue": 134520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/31TT47YjBl7a7uvJ3ff1nrirXhP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Live Free or Die Hard is a Action directed by Len Wiseman.",
    "trailer": "https://www.youtube.com/watch?v=svIjk-nlh_c"
  },
  {
    "id": 700,
    "title": "The Matchbreaker",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Caleb Vetter",
    "rating": 5.5,
    "votes": 1427,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/m9RWMUNtaFZpYKtB8HH5Yg11P5G.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Matchbreaker is a Comedy directed by Caleb Vetter.",
    "trailer": "https://www.youtube.com/watch?v=krbC2ZODinE"
  },
  {
    "id": 701,
    "title": "Funny Games",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Michael Haneke",
    "rating": 6.5,
    "votes": 73835,
    "revenue": 1290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zs92sAOh3Q0kDIJkgaJFTBzSFka.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Funny Games is a Crime directed by Michael Haneke.",
    "trailer": "https://www.youtube.com/watch?v=_bq_oqer-oQ"
  },
  {
    "id": 702,
    "title": "Ted",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Seth MacFarlane",
    "rating": 7.0,
    "votes": 494641,
    "revenue": 218630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1QVZXQQHCEIj8lyUhdBYd2qOYtq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ted is a Comedy directed by Seth MacFarlane.",
    "trailer": "https://www.youtube.com/results?search_query=Ted%202012%20official%20trailer"
  },
  {
    "id": 703,
    "title": "RED",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Robert Schwentke",
    "rating": 7.1,
    "votes": 250012,
    "revenue": 90360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8eeK3OB5PeSRQD7BpZcGZKkehG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "RED is a Action directed by Robert Schwentke.",
    "trailer": "https://www.youtube.com/results?search_query=RED%202010%20official%20trailer"
  },
  {
    "id": 704,
    "title": "Australia",
    "year": 2008,
    "genre": [
      "Adventure"
    ],
    "director": "Baz Luhrmann",
    "rating": 6.6,
    "votes": 106115,
    "revenue": 49550000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tFQpccGMTWe24eWxK5U9rb7tK3M.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Australia is a Adventure directed by Baz Luhrmann.",
    "trailer": "https://www.youtube.com/results?search_query=Australia%202008%20official%20trailer"
  },
  {
    "id": 705,
    "title": "Faster",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "George Tillman Jr.",
    "rating": 6.5,
    "votes": 83788,
    "revenue": 23230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AsUeaXrhw4oscCSjUZ6heh1pVvd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Faster is a Action directed by George Tillman Jr..",
    "trailer": "https://www.youtube.com/results?search_query=Faster%202010%20official%20trailer"
  },
  {
    "id": 706,
    "title": "The Neighbor",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Marcus Dunstan",
    "rating": 5.8,
    "votes": 4754,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/ub0hBxjkfOUoymQR3NOWIVH400A.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Neighbor is a Crime directed by Marcus Dunstan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Neighbor%202016%20official%20trailer"
  },
  {
    "id": 707,
    "title": "The Adjustment Bureau",
    "year": 2011,
    "genre": [
      "Romance"
    ],
    "director": "George Nolfi",
    "rating": 7.1,
    "votes": 208632,
    "revenue": 62450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5ZzeR8iz1nEFLp94OBnbakLZawo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Adjustment Bureau is a Romance directed by George Nolfi.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Adjustment%20Bureau%202011%20official%20trailer"
  },
  {
    "id": 708,
    "title": "The Hollars",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "John Krasinski",
    "rating": 6.5,
    "votes": 5908,
    "revenue": 1020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/57azlJsftQyxuQ2EXl0I1JodwjA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hollars is a Comedy directed by John Krasinski.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Hollars%202016%20official%20trailer"
  },
  {
    "id": 709,
    "title": "The Judge",
    "year": 2014,
    "genre": [
      "Crime"
    ],
    "director": "David Dobkin",
    "rating": 7.4,
    "votes": 146812,
    "revenue": 47110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3K93GWotLXe4FqpErri0xkpLaD5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Judge is a Crime directed by David Dobkin.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Judge%202014%20official%20trailer"
  },
  {
    "id": 710,
    "title": "Closed Circuit",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "John Crowley",
    "rating": 6.2,
    "votes": 18437,
    "revenue": 5730000.0,
    "poster": "https://image.tmdb.org/t/p/w500/keW2sLB9yJbdkRy9yHQjqUjmzbB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Closed Circuit is a Crime directed by John Crowley.",
    "trailer": "https://www.youtube.com/watch?v=_dDiMp-gTHA"
  },
  {
    "id": 711,
    "title": "Transformers: Revenge of the Fallen",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Michael Bay",
    "rating": 6.0,
    "votes": 335757,
    "revenue": 402080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pLBb0whOzVDtJvyD4DPeQyQNOqp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Transformers: Revenge of the Fallen is a Action directed by Michael Bay.",
    "trailer": "https://www.youtube.com/results?search_query=Transformers%3A%20Revenge%20of%20the%20Fallen%202009%20official%20trailer"
  },
  {
    "id": 712,
    "title": "La tortue rouge",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Michael Dudok de Wit",
    "rating": 7.6,
    "votes": 11482,
    "revenue": 920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wOBU3SLjQ9358Km9YWYasPZyebp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "La tortue rouge is a Animation directed by Michael Dudok de Wit.",
    "trailer": "https://www.youtube.com/results?search_query=La%20tortue%20rouge%202016%20official%20trailer"
  },
  {
    "id": 713,
    "title": "The Book of Life",
    "year": 2014,
    "genre": [
      "Animation"
    ],
    "director": "Jorge R. Guti\u00e9rrez",
    "rating": 7.3,
    "votes": 50388,
    "revenue": 50150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aotTZos5KswgCryEzx2rlOjFsm1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Book of Life is a Animation directed by Jorge R. Guti\u00e9rrez.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Book%20of%20Life%202014%20official%20trailer"
  },
  {
    "id": 714,
    "title": "Incendies",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Denis Villeneuve",
    "rating": 8.2,
    "votes": 92863,
    "revenue": 6860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yH6DAQVgbyj72S66gN4WWVoTjuf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Incendies is a Drama directed by Denis Villeneuve.",
    "trailer": "https://www.youtube.com/watch?v=XJ69WnwvZhE"
  },
  {
    "id": 715,
    "title": "The Heartbreak Kid",
    "year": 2007,
    "genre": [
      "Comedy"
    ],
    "director": "Bobby Farrelly",
    "rating": 5.8,
    "votes": 74664,
    "revenue": 36770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bVWM0L3DqFpNE3Yt49WjAgTQUc0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Heartbreak Kid is a Comedy directed by Bobby Farrelly.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Heartbreak%20Kid%202007%20official%20trailer"
  },
  {
    "id": 716,
    "title": "Happy Feet",
    "year": 2006,
    "genre": [
      "Animation"
    ],
    "director": "George Miller",
    "rating": 6.5,
    "votes": 141141,
    "revenue": 197990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zP4CK9O70P8GDilfTkPm4lrmaks.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Happy Feet is a Animation directed by George Miller.",
    "trailer": "https://www.youtube.com/results?search_query=Happy%20Feet%202006%20official%20trailer"
  },
  {
    "id": 717,
    "title": "Entourage",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Doug Ellin",
    "rating": 6.6,
    "votes": 64557,
    "revenue": 32360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/28dqsx1jCxhR05DfH35ui13ywNZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Entourage is a Comedy directed by Doug Ellin.",
    "trailer": "https://www.youtube.com/results?search_query=Entourage%202015%20official%20trailer"
  },
  {
    "id": 718,
    "title": "The Strangers",
    "year": 2008,
    "genre": [
      "Horror"
    ],
    "director": "Bryan Bertino",
    "rating": 6.2,
    "votes": 96718,
    "revenue": 52530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gwsg4qFmLOvlhwXj4OZuxfFUdP0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Strangers is a Horror directed by Bryan Bertino.",
    "trailer": "https://www.youtube.com/watch?v=jKGiF5m-FNY"
  },
  {
    "id": 719,
    "title": "Noah",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Darren Aronofsky",
    "rating": 5.8,
    "votes": 209700,
    "revenue": 101160000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vVLkHabnF5lVpCpqyhZBI5iCYMA.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Noah is a Action directed by Darren Aronofsky.",
    "trailer": "https://www.youtube.com/results?search_query=Noah%202014%20official%20trailer"
  },
  {
    "id": 720,
    "title": "Neighbors",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Nicholas Stoller",
    "rating": 6.4,
    "votes": 236500,
    "revenue": 150060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sN1RU08CMi8xkRIibremh3AOdgw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Neighbors is a Comedy directed by Nicholas Stoller.",
    "trailer": "https://www.youtube.com/results?search_query=Neighbors%202014%20official%20trailer"
  },
  {
    "id": 721,
    "title": "Nymphomaniac: Vol. II",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Lars von Trier",
    "rating": 6.7,
    "votes": 65824,
    "revenue": 330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iLUNqgNKuWn667kXCKztSxYbT3k.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Nymphomaniac: Vol. II is a Drama directed by Lars von Trier.",
    "trailer": "https://www.youtube.com/results?search_query=Nymphomaniac%3A%20Vol.%20II%202013%20official%20trailer"
  },
  {
    "id": 722,
    "title": "Wild",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Jean-Marc Vall\u00e9e",
    "rating": 7.1,
    "votes": 95553,
    "revenue": 37880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ohhWI4Xwf4m4HjbQiIkyAhLekUy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wild is a Adventure directed by Jean-Marc Vall\u00e9e.",
    "trailer": "https://www.youtube.com/results?search_query=Wild%202014%20official%20trailer"
  },
  {
    "id": 723,
    "title": "Grown Ups",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Dennis Dugan",
    "rating": 6.0,
    "votes": 190385,
    "revenue": 162000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cQGM5k1NtU85n4TUlrOrwijSCcm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Grown Ups is a Comedy directed by Dennis Dugan.",
    "trailer": "https://www.youtube.com/watch?v=Nk1ERmswxsY"
  },
  {
    "id": 724,
    "title": "Blair Witch",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Adam Wingard",
    "rating": 5.1,
    "votes": 26088,
    "revenue": 20750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9050VGrYjYrEjpOvDZVAngLbg1f.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blair Witch is a Horror directed by Adam Wingard.",
    "trailer": "https://www.youtube.com/results?search_query=Blair%20Witch%202016%20official%20trailer"
  },
  {
    "id": 725,
    "title": "The Karate Kid",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Harald Zwart",
    "rating": 6.2,
    "votes": 127983,
    "revenue": 176590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b1RBy3l297N0c7PHjlz35cClWju.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Karate Kid is a Action directed by Harald Zwart.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Karate%20Kid%202010%20official%20trailer"
  },
  {
    "id": 726,
    "title": "Dark Shadows",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Tim Burton",
    "rating": 6.2,
    "votes": 209326,
    "revenue": 79710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fd9Ck4cxVlmtXsbeGtQW7WFuUFI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dark Shadows is a Comedy directed by Tim Burton.",
    "trailer": "https://www.youtube.com/results?search_query=Dark%20Shadows%202012%20official%20trailer"
  },
  {
    "id": 727,
    "title": "Friends with Benefits",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Will Gluck",
    "rating": 6.6,
    "votes": 286543,
    "revenue": 55800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nKhhDFCdzxeJ3GUunQ570LDpUkz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Friends with Benefits is a Comedy directed by Will Gluck.",
    "trailer": "https://www.youtube.com/results?search_query=Friends%20with%20Benefits%202011%20official%20trailer"
  },
  {
    "id": 728,
    "title": "The Illusionist",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Neil Burger",
    "rating": 7.6,
    "votes": 309934,
    "revenue": 39830000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1O9jUvqkHaGBMVRyOJz1AlkmALW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Illusionist is a Drama directed by Neil Burger.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Illusionist%202006%20official%20trailer"
  },
  {
    "id": 729,
    "title": "The A-Team",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Joe Carnahan",
    "rating": 6.8,
    "votes": 219116,
    "revenue": 77210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bkAWEx5g5tvRPjtDQyvIZ7LRxQm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The A-Team is a Action directed by Joe Carnahan.",
    "trailer": "https://www.youtube.com/watch?v=exyzEFrmLuM"
  },
  {
    "id": 730,
    "title": "The Guest",
    "year": 2014,
    "genre": [
      "Thriller"
    ],
    "director": "Adam Wingard",
    "rating": 6.7,
    "votes": 71069,
    "revenue": 320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gvlEFHu9FuYLmBZwsARTtuNIiDO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Guest is a Thriller directed by Adam Wingard.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Guest%202014%20official%20trailer"
  },
  {
    "id": 731,
    "title": "The Internship",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Shawn Levy",
    "rating": 6.3,
    "votes": 166342,
    "revenue": 44670000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fYqSOkix4rbDiZW0ACNnvZCpT6X.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Internship is a Comedy directed by Shawn Levy.",
    "trailer": "https://www.youtube.com/watch?v=G3W6IESxRKs"
  },
  {
    "id": 732,
    "title": "Paul",
    "year": 2011,
    "genre": [
      "Adventure"
    ],
    "director": "Greg Mottola",
    "rating": 7.0,
    "votes": 201707,
    "revenue": 37370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dKhexH8nS08lVlSmwSs00cHFxbY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Paul is a Adventure directed by Greg Mottola.",
    "trailer": "https://www.youtube.com/results?search_query=Paul%202011%20official%20trailer"
  },
  {
    "id": 733,
    "title": "This Beautiful Fantastic",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Simon Aboud",
    "rating": 6.9,
    "votes": 688,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/22b9jLGJ8OVzlEnWzqF0yRy5Na3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "This Beautiful Fantastic is a Comedy directed by Simon Aboud.",
    "trailer": "https://www.youtube.com/watch?v=c-aOWzQ4dF0"
  },
  {
    "id": 734,
    "title": "The Da Vinci Code",
    "year": 2006,
    "genre": [
      "Mystery"
    ],
    "director": "Ron Howard",
    "rating": 6.6,
    "votes": 338280,
    "revenue": 217540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9ejKfNk0LBhSI9AahH4f9NJNZNM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Da Vinci Code is a Mystery directed by Ron Howard.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Da%20Vinci%20Code%202006%20official%20trailer"
  },
  {
    "id": 735,
    "title": "Mr. Church",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Bruce Beresford",
    "rating": 7.7,
    "votes": 16163,
    "revenue": 690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5fCfZEQwcbuqVPyMu7pN5XNpK5V.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mr. Church is a Comedy directed by Bruce Beresford.",
    "trailer": "https://www.youtube.com/results?search_query=Mr.%20Church%202016%20official%20trailer"
  },
  {
    "id": 736,
    "title": "Hugo",
    "year": 2011,
    "genre": [
      "Adventure"
    ],
    "director": "Martin Scorsese",
    "rating": 7.5,
    "votes": 259182,
    "revenue": 73820000.0,
    "poster": "https://image.tmdb.org/t/p/w500/1dxRq3o3l3bVWNRvvSb7rRf68qp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hugo is a Adventure directed by Martin Scorsese.",
    "trailer": "https://www.youtube.com/watch?v=nZGyAx7YyYM"
  },
  {
    "id": 737,
    "title": "The Blackcoat's Daughter",
    "year": 2015,
    "genre": [
      "Horror"
    ],
    "director": "Oz Perkins",
    "rating": 5.6,
    "votes": 4155,
    "revenue": 20000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jO2aHAiWgQSlpAIPGZikiMDdMXx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Blackcoat's Daughter is a Horror directed by Oz Perkins.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Blackcoat%27s%20Daughter%202015%20official%20trailer"
  },
  {
    "id": 738,
    "title": "Body of Lies",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Ridley Scott",
    "rating": 7.1,
    "votes": 182305,
    "revenue": 39380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sLjVDPPfNQfAma9XyOqHPClQb2V.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Body of Lies is a Action directed by Ridley Scott.",
    "trailer": "https://www.youtube.com/results?search_query=Body%20of%20Lies%202008%20official%20trailer"
  },
  {
    "id": 739,
    "title": "Knight of Cups",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Terrence Malick",
    "rating": 5.7,
    "votes": 17439,
    "revenue": 560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xejFBC19Nc7Xi1MiIvcf84ZCy2g.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Knight of Cups is a Drama directed by Terrence Malick.",
    "trailer": "https://www.youtube.com/results?search_query=Knight%20of%20Cups%202015%20official%20trailer"
  },
  {
    "id": 740,
    "title": "The Mummy: Tomb of the Dragon Emperor",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Rob Cohen",
    "rating": 5.2,
    "votes": 124554,
    "revenue": 102180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/A3acM1lX5PNWQa6r5qeMAJOxbnT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Mummy: Tomb of the Dragon Emperor is a Action directed by Rob Cohen.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Mummy%3A%20Tomb%20of%20the%20Dragon%20Emperor%202008%20official%20trailer"
  },
  {
    "id": 741,
    "title": "The Boss",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Ben Falcone",
    "rating": 5.4,
    "votes": 29642,
    "revenue": 63030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/f43EUrZvE9bV0EmuqgtPgWVXnUc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Boss is a Comedy directed by Ben Falcone.",
    "trailer": "https://www.youtube.com/watch?v=V8GAMZqJqjs"
  },
  {
    "id": 742,
    "title": "Hands of Stone",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Jonathan Jakubowicz",
    "rating": 6.6,
    "votes": 8998,
    "revenue": 4710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rpAYkkc7ltnxnMXOZLPuI9A6cuB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hands of Stone is a Action directed by Jonathan Jakubowicz.",
    "trailer": "https://www.youtube.com/results?search_query=Hands%20of%20Stone%202016%20official%20trailer"
  },
  {
    "id": 743,
    "title": "El secreto de sus ojos",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Juan Jos\u00e9 Campanella",
    "rating": 8.2,
    "votes": 144524,
    "revenue": 20170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dkeAwfZzwL3WvToydE3CXiY80E0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "El secreto de sus ojos is a Drama directed by Juan Jos\u00e9 Campanella.",
    "trailer": "https://www.youtube.com/results?search_query=El%20secreto%20de%20sus%20ojos%202009%20official%20trailer"
  },
  {
    "id": 744,
    "title": "True Grit",
    "year": 2010,
    "genre": [
      "Adventure"
    ],
    "director": "Ethan Coen",
    "rating": 7.6,
    "votes": 254904,
    "revenue": 171030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tCrB8pcjadZjsDk7rleGJaIv78k.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "True Grit is a Adventure directed by Ethan Coen.",
    "trailer": "https://www.youtube.com/results?search_query=True%20Grit%202010%20official%20trailer"
  },
  {
    "id": 745,
    "title": "We Are Your Friends",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Max Joseph",
    "rating": 6.2,
    "votes": 25903,
    "revenue": 3590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7RzpN4aLjM5FUc7Q3WsvNn2MuaR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "We Are Your Friends is a Drama directed by Max Joseph.",
    "trailer": "https://www.youtube.com/results?search_query=We%20Are%20Your%20Friends%202015%20official%20trailer"
  },
  {
    "id": 746,
    "title": "A Million Ways to Die in the West",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Seth MacFarlane",
    "rating": 6.1,
    "votes": 144779,
    "revenue": 42620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/n9SicwnoNGWBwE75le27sUhCLMm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Million Ways to Die in the West is a Comedy directed by Seth MacFarlane.",
    "trailer": "https://www.youtube.com/results?search_query=A%20Million%20Ways%20to%20Die%20in%20the%20West%202014%20official%20trailer"
  },
  {
    "id": 747,
    "title": "Only for One Night",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Chris Stokes",
    "rating": 4.6,
    "votes": 313,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/itF3zi543LCOicdzAXIuyqBZ0yz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Only for One Night is a Thriller directed by Chris Stokes.",
    "trailer": "https://www.youtube.com/results?search_query=Only%20for%20One%20Night%202016%20official%20trailer"
  },
  {
    "id": 748,
    "title": "Rules Don't Apply",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Warren Beatty",
    "rating": 5.7,
    "votes": 3731,
    "revenue": 3650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/y7MlOsOYMFcaG8a29ELRN0jw18T.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rules Don't Apply is a Comedy directed by Warren Beatty.",
    "trailer": "https://www.youtube.com/results?search_query=Rules%20Don%27t%20Apply%202016%20official%20trailer"
  },
  {
    "id": 749,
    "title": "Ouija: Origin of Evil",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Mike Flanagan",
    "rating": 6.1,
    "votes": 30035,
    "revenue": 34900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gwynHc2RrOFaplYMMpQRpr3TIA4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ouija: Origin of Evil is a Horror directed by Mike Flanagan.",
    "trailer": "https://www.youtube.com/results?search_query=Ouija%3A%20Origin%20of%20Evil%202016%20official%20trailer"
  },
  {
    "id": 750,
    "title": "Percy Jackson: Sea of Monsters",
    "year": 2013,
    "genre": [
      "Adventure"
    ],
    "director": "Thor Freudenthal",
    "rating": 5.9,
    "votes": 91684,
    "revenue": 68560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tAu90qEpLqwqiZLsMqpaMVr55oN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Percy Jackson: Sea of Monsters is a Adventure directed by Thor Freudenthal.",
    "trailer": "https://www.youtube.com/results?search_query=Percy%20Jackson%3A%20Sea%20of%20Monsters%202013%20official%20trailer"
  },
  {
    "id": 751,
    "title": "Fracture",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Gregory Hoblit",
    "rating": 7.2,
    "votes": 148943,
    "revenue": 39000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qNen8x5gaikjIg9CFihgxYcJwQe.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fracture is a Crime directed by Gregory Hoblit.",
    "trailer": "https://www.youtube.com/watch?v=B9jSN5CXO-g"
  },
  {
    "id": 752,
    "title": "Oculus",
    "year": 2013,
    "genre": [
      "Horror"
    ],
    "director": "Mike Flanagan",
    "rating": 6.5,
    "votes": 92875,
    "revenue": 27690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yCzR1yKRLiJyTDLgY1ppazXEmdE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Oculus is a Horror directed by Mike Flanagan.",
    "trailer": "https://www.youtube.com/results?search_query=Oculus%202013%20official%20trailer"
  },
  {
    "id": 753,
    "title": "In Bruges",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Martin McDonagh",
    "rating": 7.9,
    "votes": 322536,
    "revenue": 7760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vz3Vd6nfq9YZrVvyYx5RHFaYKV3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "In Bruges is a Comedy directed by Martin McDonagh.",
    "trailer": "https://www.youtube.com/results?search_query=In%20Bruges%202008%20official%20trailer"
  },
  {
    "id": 754,
    "title": "This Means War",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "McG",
    "rating": 6.3,
    "votes": 154400,
    "revenue": 54760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7d1hwECRc1NZlGfAeYE42ki7Fem.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "This Means War is a Action directed by McG.",
    "trailer": "https://www.youtube.com/results?search_query=This%20Means%20War%202012%20official%20trailer"
  },
  {
    "id": 755,
    "title": "L\u00edda Baarov\u00e1",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Filip Renc",
    "rating": 5.0,
    "votes": 353,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/lViWHUj8m4XT7KsUTZiKVtYIedm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "L\u00edda Baarov\u00e1 is a Biography directed by Filip Renc.",
    "trailer": "https://www.youtube.com/results?search_query=L%C3%ADda%20Baarov%C3%A1%202016%20official%20trailer"
  },
  {
    "id": 756,
    "title": "The Road",
    "year": 2009,
    "genre": [
      "Adventure"
    ],
    "director": "John Hillcoat",
    "rating": 7.3,
    "votes": 187302,
    "revenue": 60000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qLaXnLzqleBWQtjvZ6JGVSaKoC3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Road is a Adventure directed by John Hillcoat.",
    "trailer": "https://www.youtube.com/watch?v=P8PyedKdTIY"
  },
  {
    "id": 757,
    "title": "Lavender",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Ed Gass-Donnelly",
    "rating": 5.2,
    "votes": 2083,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tAPvkv0XTeLFqlvMgtlFB8mqk3L.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lavender is a Drama directed by Ed Gass-Donnelly.",
    "trailer": "https://www.youtube.com/watch?v=Fmyw_ktuB6w"
  },
  {
    "id": 758,
    "title": "Deuces",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Jamal Hill",
    "rating": 6.6,
    "votes": 256,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/nyr9WT4mLYZHFRINuyWCQExV9ku.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Deuces is a Drama directed by Jamal Hill.",
    "trailer": "https://www.youtube.com/results?search_query=Deuces%202016%20official%20trailer"
  },
  {
    "id": 759,
    "title": "Conan the Barbarian",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Marcus Nispel",
    "rating": 5.2,
    "votes": 84893,
    "revenue": 21270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qw2A587Ee61IwcSOLNFRhuOACZZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Conan the Barbarian is a Action directed by Marcus Nispel.",
    "trailer": "https://www.youtube.com/results?search_query=Conan%20the%20Barbarian%202011%20official%20trailer"
  },
  {
    "id": 760,
    "title": "The Fighter",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "David O. Russell",
    "rating": 7.8,
    "votes": 290056,
    "revenue": 93570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xfsFerGhO1h6rLk8vwLgMyQ8WVJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Fighter is a Action directed by David O. Russell.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Fighter%202010%20official%20trailer"
  },
  {
    "id": 761,
    "title": "August Rush",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Kirsten Sheridan",
    "rating": 7.5,
    "votes": 91229,
    "revenue": 31660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oA6ZeICPINiS6YtD5WZeBaGVmuT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "August Rush is a Drama directed by Kirsten Sheridan.",
    "trailer": "https://www.youtube.com/results?search_query=August%20Rush%202007%20official%20trailer"
  },
  {
    "id": 762,
    "title": "Chef",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Jon Favreau",
    "rating": 7.3,
    "votes": 151970,
    "revenue": 31240000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hyp8EXDmO4dSC8V6Q5jU7gD1kcg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Chef is a Comedy directed by Jon Favreau.",
    "trailer": "https://www.youtube.com/results?search_query=Chef%202014%20official%20trailer"
  },
  {
    "id": 763,
    "title": "Eye in the Sky",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Gavin Hood",
    "rating": 7.3,
    "votes": 57826,
    "revenue": 18700000.0,
    "poster": "https://image.tmdb.org/t/p/w500/faRGb9SuyGuZpsNRoIxoVSLLCId.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Eye in the Sky is a Drama directed by Gavin Hood.",
    "trailer": "https://www.youtube.com/watch?v=jGOdNUGLfRI"
  },
  {
    "id": 764,
    "title": "Eagle Eye",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "D.J. Caruso",
    "rating": 6.6,
    "votes": 156158,
    "revenue": 101110000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9KCOv0hL37IN3tWG3j86eZg3xDH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Eagle Eye is a Action directed by D.J. Caruso.",
    "trailer": "https://www.youtube.com/results?search_query=Eagle%20Eye%202008%20official%20trailer"
  },
  {
    "id": 765,
    "title": "The Purge",
    "year": 2013,
    "genre": [
      "Horror"
    ],
    "director": "James DeMonaco",
    "rating": 5.7,
    "votes": 154588,
    "revenue": 64420000.0,
    "poster": "https://image.tmdb.org/t/p/w500/46X1ei9uf13nkkr0OhWldGyr5Uh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Purge is a Horror directed by James DeMonaco.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Purge%202013%20official%20trailer"
  },
  {
    "id": 766,
    "title": "PK",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Rajkumar Hirani",
    "rating": 8.2,
    "votes": 103279,
    "revenue": 10570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "PK is a Comedy directed by Rajkumar Hirani.",
    "trailer": "https://www.youtube.com/results?search_query=PK%202014%20official%20trailer"
  },
  {
    "id": 767,
    "title": "Ender's Game",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Gavin Hood",
    "rating": 6.7,
    "votes": 194236,
    "revenue": 61660000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pVcRI5YKnkkgaAD876jBeKb189d.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ender's Game is a Action directed by Gavin Hood.",
    "trailer": "https://www.youtube.com/watch?v=KecVAykkfCM"
  },
  {
    "id": 768,
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Steven Spielberg",
    "rating": 6.2,
    "votes": 351361,
    "revenue": 317010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/56As6XEM1flWvprX4LgkPl8ii4K.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Indiana Jones and the Kingdom of the Crystal Skull is a Action directed by Steven Spielberg.",
    "trailer": "https://www.youtube.com/results?search_query=Indiana%20Jones%20and%20the%20Kingdom%20of%20the%20Crystal%20Skull%202008%20official%20trailer"
  },
  {
    "id": 769,
    "title": "Paper Towns",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Jake Schreier",
    "rating": 6.3,
    "votes": 72515,
    "revenue": 31990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lVW67w7eWwmBhbBCc4f983pO8m6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Paper Towns is a Drama directed by Jake Schreier.",
    "trailer": "https://www.youtube.com/results?search_query=Paper%20Towns%202015%20official%20trailer"
  },
  {
    "id": 770,
    "title": "High-Rise",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Ben Wheatley",
    "rating": 5.7,
    "votes": 25928,
    "revenue": 340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/47aaJXO87scDABLUT7vg2bHsdrF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "High-Rise is a Drama directed by Ben Wheatley.",
    "trailer": "https://www.youtube.com/results?search_query=High-Rise%202015%20official%20trailer"
  },
  {
    "id": 771,
    "title": "Quantum of Solace",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Marc Forster",
    "rating": 6.6,
    "votes": 347798,
    "revenue": 168370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Quantum of Solace is a Action directed by Marc Forster.",
    "trailer": "https://www.youtube.com/results?search_query=Quantum%20of%20Solace%202008%20official%20trailer"
  },
  {
    "id": 772,
    "title": "The Assignment",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Walter Hill",
    "rating": 4.5,
    "votes": 2043,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3wx83iGCATiIAyrZHI6AeeNfiAT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Assignment is a Action directed by Walter Hill.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Assignment%202016%20official%20trailer"
  },
  {
    "id": 773,
    "title": "How to Train Your Dragon",
    "year": 2010,
    "genre": [
      "Animation"
    ],
    "director": "Dean DeBlois",
    "rating": 8.1,
    "votes": 523893,
    "revenue": 217390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/53dsJ3oEnBhTBVMigWJ9tkA5bzJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "How to Train Your Dragon is a Animation directed by Dean DeBlois.",
    "trailer": "https://www.youtube.com/results?search_query=How%20to%20Train%20Your%20Dragon%202010%20official%20trailer"
  },
  {
    "id": 774,
    "title": "Lady in the Water",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "M. Night Shyamalan",
    "rating": 5.6,
    "votes": 82701,
    "revenue": 42270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ddNmoSy1Jd3PBF5XDZvrrBIfrja.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lady in the Water is a Drama directed by M. Night Shyamalan.",
    "trailer": "https://www.youtube.com/results?search_query=Lady%20in%20the%20Water%202006%20official%20trailer"
  },
  {
    "id": 775,
    "title": "The Fountain",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Darren Aronofsky",
    "rating": 7.3,
    "votes": 199193,
    "revenue": 10140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4XTf8GuCVLWolubANaKkpk62YPq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Fountain is a Drama directed by Darren Aronofsky.",
    "trailer": "https://www.youtube.com/watch?v=pT1B1ykme2M"
  },
  {
    "id": 776,
    "title": "Cars 2",
    "year": 2011,
    "genre": [
      "Animation"
    ],
    "director": "John Lasseter",
    "rating": 6.2,
    "votes": 110490,
    "revenue": 191450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Cars 2 is a Animation directed by John Lasseter.",
    "trailer": "https://www.youtube.com/watch?v=LAmOI2MSW20"
  },
  {
    "id": 777,
    "title": "31",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Rob Zombie",
    "rating": 5.1,
    "votes": 10871,
    "revenue": 780000.0,
    "poster": "https://image.tmdb.org/t/p/w500/s5Y0qRZGgdbNsxshhuIwXyslUYc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "31 is a Horror directed by Rob Zombie.",
    "trailer": "https://www.youtube.com/results?search_query=31%202016%20official%20trailer"
  },
  {
    "id": 778,
    "title": "Final Girl",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Tyler Shields",
    "rating": 4.7,
    "votes": 9026,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/7liOzGi6DNESPv5gFC7g6mpqBSK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Final Girl is a Action directed by Tyler Shields.",
    "trailer": "https://www.youtube.com/results?search_query=Final%20Girl%202015%20official%20trailer"
  },
  {
    "id": 779,
    "title": "Chalk It Up",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Hisonni Johnson",
    "rating": 4.8,
    "votes": 499,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/uyzjLmRSkSasG5cXv1x9v5TaWLt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Chalk It Up is a Comedy directed by Hisonni Johnson.",
    "trailer": "https://www.youtube.com/results?search_query=Chalk%20It%20Up%202016%20official%20trailer"
  },
  {
    "id": 780,
    "title": "The Man Who Knew Infinity",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Matt Brown",
    "rating": 7.2,
    "votes": 29912,
    "revenue": 3860000.0,
    "poster": "https://image.tmdb.org/t/p/w500/v2X1BtkxaV8pzLbmM8a5gTdpg7B.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Man Who Knew Infinity is a Biography directed by Matt Brown.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Man%20Who%20Knew%20Infinity%202015%20official%20trailer"
  },
  {
    "id": 781,
    "title": "Unknown",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Jaume Collet-Serra",
    "rating": 6.9,
    "votes": 218679,
    "revenue": 61090000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4TpBhdaSl5ALHbgeaYOLF8Q3haz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Unknown is a Action directed by Jaume Collet-Serra.",
    "trailer": "https://www.youtube.com/results?search_query=Unknown%202011%20official%20trailer"
  },
  {
    "id": 782,
    "title": "Self/less",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Tarsem Singh",
    "rating": 6.5,
    "votes": 67196,
    "revenue": 12280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hCqXcAMeBiPVnLUU8PNsKUYi6Gn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Self/less is a Action directed by Tarsem Singh.",
    "trailer": "https://www.youtube.com/results?search_query=Self/less%202015%20official%20trailer"
  },
  {
    "id": 783,
    "title": "Mr. Brooks",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Bruce A. Evans",
    "rating": 7.3,
    "votes": 128146,
    "revenue": 28480000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yYleq0qmb67Ig2ViY3hFmUOrH77.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mr. Brooks is a Crime directed by Bruce A. Evans.",
    "trailer": "https://www.youtube.com/watch?v=hXfbVIFc6t4"
  },
  {
    "id": 784,
    "title": "Tramps",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Adam Leon",
    "rating": 6.5,
    "votes": 1031,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/baXRDIafCF0qVkpySLpQp8bQMEv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Tramps is a Comedy directed by Adam Leon.",
    "trailer": "https://www.youtube.com/results?search_query=Tramps%202016%20official%20trailer"
  },
  {
    "id": 785,
    "title": "Before We Go",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Chris Evans",
    "rating": 6.9,
    "votes": 31370,
    "revenue": 40000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qBnkNKjbJV0E8GvEPidBS1nIRWD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Before We Go is a Comedy directed by Chris Evans.",
    "trailer": "https://www.youtube.com/results?search_query=Before%20We%20Go%202014%20official%20trailer"
  },
  {
    "id": 786,
    "title": "Captain Phillips",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Paul Greengrass",
    "rating": 7.8,
    "votes": 346154,
    "revenue": 107100000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8Td0kkocW6sD3uRpzwfMfkqMWhx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Captain Phillips is a Biography directed by Paul Greengrass.",
    "trailer": "https://www.youtube.com/results?search_query=Captain%20Phillips%202013%20official%20trailer"
  },
  {
    "id": 787,
    "title": "The Secret Scripture",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Jim Sheridan",
    "rating": 6.8,
    "votes": 378,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/iVoZqwvGAwxvGVbYV5y04wpiBob.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Secret Scripture is a Drama directed by Jim Sheridan.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Secret%20Scripture%202016%20official%20trailer"
  },
  {
    "id": 788,
    "title": "Max Steel",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Stewart Hendler",
    "rating": 4.6,
    "votes": 11555,
    "revenue": 3770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AuEzNLF8yvzd169guYEFisqvy5z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Max Steel is a Action directed by Stewart Hendler.",
    "trailer": "https://www.youtube.com/results?search_query=Max%20Steel%202016%20official%20trailer"
  },
  {
    "id": 789,
    "title": "Hotel Transylvania 2",
    "year": 2015,
    "genre": [
      "Animation"
    ],
    "director": "Genndy Tartakovsky",
    "rating": 6.7,
    "votes": 69157,
    "revenue": 169690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3nFnrivNgipSKZ8LZJJbRSlAcTR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hotel Transylvania 2 is a Animation directed by Genndy Tartakovsky.",
    "trailer": "https://www.youtube.com/watch?v=C76LGN7YqFs"
  },
  {
    "id": 790,
    "title": "Hancock",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Peter Berg",
    "rating": 6.4,
    "votes": 366138,
    "revenue": 227950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7DyuV2G0hLEqHeueDfOqhZ2DVut.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hancock is a Action directed by Peter Berg.",
    "trailer": "https://www.youtube.com/watch?v=vexi9xLS-bQ"
  },
  {
    "id": 791,
    "title": "Sisters",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Jason Moore",
    "rating": 6.0,
    "votes": 50241,
    "revenue": 87030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5zhk4DhSwF8rATE4J7iZD05u1jd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sisters is a Comedy directed by Jason Moore.",
    "trailer": "https://www.youtube.com/watch?v=U-BbvE5iZR4"
  },
  {
    "id": 792,
    "title": "The Family",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Luc Besson",
    "rating": 6.3,
    "votes": 92868,
    "revenue": 36920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/x2arN02JFsZcDKmBb0SIjG8Smc8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Family is a Comedy directed by Luc Besson.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Family%202013%20official%20trailer"
  },
  {
    "id": 793,
    "title": "Zack and Miri Make a Porno",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Kevin Smith",
    "rating": 6.6,
    "votes": 154936,
    "revenue": 31450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ipePhKf87FixwfAVJ8MMWK53caI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Zack and Miri Make a Porno is a Comedy directed by Kevin Smith.",
    "trailer": "https://www.youtube.com/results?search_query=Zack%20and%20Miri%20Make%20a%20Porno%202008%20official%20trailer"
  },
  {
    "id": 794,
    "title": "Ma vie de Courgette",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Claude Barras",
    "rating": 7.8,
    "votes": 4370,
    "revenue": 290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2uu8fIzl76C9MFiUQhjKYSLKVq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ma vie de Courgette is a Animation directed by Claude Barras.",
    "trailer": "https://www.youtube.com/results?search_query=Ma%20vie%20de%20Courgette%202016%20official%20trailer"
  },
  {
    "id": 795,
    "title": "Man on a Ledge",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Asger Leth",
    "rating": 6.6,
    "votes": 129252,
    "revenue": 18600000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pziTpiYy5dtVdvXctYIZv09r5Nk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Man on a Ledge is a Action directed by Asger Leth.",
    "trailer": "https://www.youtube.com/results?search_query=Man%20on%20a%20Ledge%202012%20official%20trailer"
  },
  {
    "id": 796,
    "title": "No Strings Attached",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Ivan Reitman",
    "rating": 6.2,
    "votes": 178243,
    "revenue": 70630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9C09L1U9S13J4Ut029Qhu0oLcTQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "No Strings Attached is a Comedy directed by Ivan Reitman.",
    "trailer": "https://www.youtube.com/watch?v=X7bRikS7C3o"
  },
  {
    "id": 797,
    "title": "Rescue Dawn",
    "year": 2006,
    "genre": [
      "Adventure"
    ],
    "director": "Werner Herzog",
    "rating": 7.3,
    "votes": 87887,
    "revenue": 5480000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ymPlV2ymUBSctfRzpehFOxFmJiS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rescue Dawn is a Adventure directed by Werner Herzog.",
    "trailer": "https://www.youtube.com/results?search_query=Rescue%20Dawn%202006%20official%20trailer"
  },
  {
    "id": 798,
    "title": "Despicable Me 2",
    "year": 2013,
    "genre": [
      "Animation"
    ],
    "director": "Pierre Coffin",
    "rating": 7.4,
    "votes": 304837,
    "revenue": 368050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Despicable Me 2 is a Animation directed by Pierre Coffin.",
    "trailer": "https://www.youtube.com/watch?v=Q_QF_v0ZdxM"
  },
  {
    "id": 799,
    "title": "A Walk Among the Tombstones",
    "year": 2014,
    "genre": [
      "Crime"
    ],
    "director": "Scott Frank",
    "rating": 6.5,
    "votes": 93883,
    "revenue": 25980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/euPgyPsiNFp6gOBB7nUFxvN5ZaY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Walk Among the Tombstones is a Crime directed by Scott Frank.",
    "trailer": "https://www.youtube.com/watch?v=_WMDP7f0LJg"
  },
  {
    "id": 800,
    "title": "The World's End",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Edgar Wright",
    "rating": 7.0,
    "votes": 199813,
    "revenue": 26000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The World's End is a Action directed by Edgar Wright.",
    "trailer": "https://www.youtube.com/results?search_query=The%20World%27s%20End%202013%20official%20trailer"
  },
  {
    "id": 801,
    "title": "Yoga Hosers",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Kevin Smith",
    "rating": 4.3,
    "votes": 7091,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/cc40P3lKEiK0H8ZSd8hmBBI0HEV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Yoga Hosers is a Comedy directed by Kevin Smith.",
    "trailer": "https://www.youtube.com/watch?v=AAK0u60D66w"
  },
  {
    "id": 802,
    "title": "Seven Psychopaths",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Martin McDonagh",
    "rating": 7.2,
    "votes": 196652,
    "revenue": 14990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4ukEYAxlSivFcDG6vLxJB6PjTjg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Seven Psychopaths is a Comedy directed by Martin McDonagh.",
    "trailer": "https://www.youtube.com/results?search_query=Seven%20Psychopaths%202012%20official%20trailer"
  },
  {
    "id": 803,
    "title": "Beowulf",
    "year": 2007,
    "genre": [
      "Animation"
    ],
    "director": "Robert Zemeckis",
    "rating": 6.2,
    "votes": 146566,
    "revenue": 82160000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7QsWYyJAV97N9jOh21pdRIqJeJq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Beowulf is a Animation directed by Robert Zemeckis.",
    "trailer": "https://www.youtube.com/results?search_query=Beowulf%202007%20official%20trailer"
  },
  {
    "id": 804,
    "title": "Jack Ryan: Shadow Recruit",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Kenneth Branagh",
    "rating": 6.2,
    "votes": 103681,
    "revenue": 50550000.0,
    "poster": "https://image.tmdb.org/t/p/w500/m7HcLUodrD4lM4s0Hui1tzO2pjO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jack Ryan: Shadow Recruit is a Action directed by Kenneth Branagh.",
    "trailer": "https://www.youtube.com/results?search_query=Jack%20Ryan%3A%20Shadow%20Recruit%202014%20official%20trailer"
  },
  {
    "id": 805,
    "title": "1408",
    "year": 2007,
    "genre": [
      "Fantasy"
    ],
    "director": "Mikael H\u00e5fstr\u00f6m",
    "rating": 6.8,
    "votes": 221073,
    "revenue": 71980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yE9MCW7ZNxSw5SC1TMqm51pMBIV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "1408 is a Fantasy directed by Mikael H\u00e5fstr\u00f6m.",
    "trailer": "https://www.youtube.com/results?search_query=1408%202007%20official%20trailer"
  },
  {
    "id": 806,
    "title": "The Gambler",
    "year": 2014,
    "genre": [
      "Crime"
    ],
    "director": "Rupert Wyatt",
    "rating": 6.0,
    "votes": 52537,
    "revenue": 33630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hIgU3cxn7Y87joQGM3srofnXOm5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Gambler is a Crime directed by Rupert Wyatt.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Gambler%202014%20official%20trailer"
  },
  {
    "id": 807,
    "title": "Prince of Persia: The Sands of Time",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Mike Newell",
    "rating": 6.6,
    "votes": 233148,
    "revenue": 90760000.0,
    "poster": "https://image.tmdb.org/t/p/w500/siNGMLdOUNYLEGtlsnmQcpO2XZX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Prince of Persia: The Sands of Time is a Action directed by Mike Newell.",
    "trailer": "https://www.youtube.com/results?search_query=Prince%20of%20Persia%3A%20The%20Sands%20of%20Time%202010%20official%20trailer"
  },
  {
    "id": 808,
    "title": "The Spectacular Now",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "James Ponsoldt",
    "rating": 7.1,
    "votes": 115751,
    "revenue": 6850000.0,
    "poster": "https://image.tmdb.org/t/p/w500/obDS8pTWVWZiNAaTyfIFWYZbRsZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Spectacular Now is a Comedy directed by James Ponsoldt.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Spectacular%20Now%202013%20official%20trailer"
  },
  {
    "id": 809,
    "title": "A United Kingdom",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Amma Asante",
    "rating": 6.8,
    "votes": 4771,
    "revenue": 3900000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xyhoW9qK7ZaDM1V4A6pPL9DWjn8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A United Kingdom is a Biography directed by Amma Asante.",
    "trailer": "https://www.youtube.com/watch?v=dlgwjo9YvtQ"
  },
  {
    "id": 810,
    "title": "USS Indianapolis: Men of Courage",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Mario Van Peebles",
    "rating": 5.2,
    "votes": 4964,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/aREeJV7avhlLnCicVG3fBjXiaW1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "USS Indianapolis: Men of Courage is a Action directed by Mario Van Peebles.",
    "trailer": "https://www.youtube.com/results?search_query=USS%20Indianapolis%3A%20Men%20of%20Courage%202016%20official%20trailer"
  },
  {
    "id": 811,
    "title": "Turbo Kid",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Fran\u00e7ois Simard",
    "rating": 6.7,
    "votes": 19309,
    "revenue": 50000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ArUqADkwycYtNVuXSoSXVrdJ8iJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Turbo Kid is a Action directed by Fran\u00e7ois Simard.",
    "trailer": "https://www.youtube.com/watch?v=AFlZ6pVtnv0"
  },
  {
    "id": 812,
    "title": "Mama",
    "year": 2013,
    "genre": [
      "Horror"
    ],
    "director": "Andr\u00e9s Muschietti",
    "rating": 6.2,
    "votes": 142560,
    "revenue": 71590000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eo8BhR8Q5STmWE9sMLsEPagxmy6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mama is a Horror directed by Andr\u00e9s Muschietti.",
    "trailer": "https://www.youtube.com/results?search_query=Mama%202013%20official%20trailer"
  },
  {
    "id": 813,
    "title": "Orphan",
    "year": 2009,
    "genre": [
      "Horror"
    ],
    "director": "Jaume Collet-Serra",
    "rating": 7.0,
    "votes": 153448,
    "revenue": 41570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lCGpOgoTOGLtZnBiGY9HRg5Xnjd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Orphan is a Horror directed by Jaume Collet-Serra.",
    "trailer": "https://www.youtube.com/results?search_query=Orphan%202009%20official%20trailer"
  },
  {
    "id": 814,
    "title": "To Rome with Love",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Woody Allen",
    "rating": 6.3,
    "votes": 72050,
    "revenue": 16680000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sMmYRgvFRk5Ginhytx7ciU7UwVs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "To Rome with Love is a Comedy directed by Woody Allen.",
    "trailer": "https://www.youtube.com/results?search_query=To%20Rome%20with%20Love%202012%20official%20trailer"
  },
  {
    "id": 815,
    "title": "Fantastic Mr. Fox",
    "year": 2009,
    "genre": [
      "Animation"
    ],
    "director": "Wes Anderson",
    "rating": 7.8,
    "votes": 149779,
    "revenue": 21000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/euZyZb6iGreujYKrGyZHRddhUYh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fantastic Mr. Fox is a Animation directed by Wes Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=Fantastic%20Mr.%20Fox%202009%20official%20trailer"
  },
  {
    "id": 816,
    "title": "Inside Man",
    "year": 2006,
    "genre": [
      "Crime"
    ],
    "director": "Spike Lee",
    "rating": 7.6,
    "votes": 285441,
    "revenue": 88500000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ffMUgkDZICNiyaws1Jkv8qG8uFW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inside Man is a Crime directed by Spike Lee.",
    "trailer": "https://www.youtube.com/results?search_query=Inside%20Man%202006%20official%20trailer"
  },
  {
    "id": 817,
    "title": "I.T.",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "John Moore",
    "rating": 5.4,
    "votes": 8755,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/A5VrX0pzM2pnPNXwKO3jKTt35ux.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I.T. is a Crime directed by John Moore.",
    "trailer": "https://www.youtube.com/results?search_query=I.T.%202016%20official%20trailer"
  },
  {
    "id": 818,
    "title": "127 Hours",
    "year": 2010,
    "genre": [
      "Adventure"
    ],
    "director": "Danny Boyle",
    "rating": 7.6,
    "votes": 294010,
    "revenue": 18330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/h0RMdn0rfl9l5hWXz3tUh6QVkhi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "127 Hours is a Adventure directed by Danny Boyle.",
    "trailer": "https://www.youtube.com/results?search_query=127%20Hours%202010%20official%20trailer"
  },
  {
    "id": 819,
    "title": "Annabelle",
    "year": 2014,
    "genre": [
      "Horror"
    ],
    "director": "John R. Leonetti",
    "rating": 5.4,
    "votes": 91106,
    "revenue": 84260000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Annabelle is a Horror directed by John R. Leonetti.",
    "trailer": "https://www.youtube.com/watch?v=xabuZwG3XyM"
  },
  {
    "id": 820,
    "title": "Wolves at the Door",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "John R. Leonetti",
    "rating": 4.6,
    "votes": 564,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/kizBwSEfvJFEOuYfwbOGtWZit3v.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wolves at the Door is a Horror directed by John R. Leonetti.",
    "trailer": "https://www.youtube.com/results?search_query=Wolves%20at%20the%20Door%202016%20official%20trailer"
  },
  {
    "id": 821,
    "title": "Suite Fran\u00e7aise",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Saul Dibb",
    "rating": 6.9,
    "votes": 13711,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/mPgijY9f79FfD7K8MmzsynXpq0R.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Suite Fran\u00e7aise is a Drama directed by Saul Dibb.",
    "trailer": "https://www.youtube.com/results?search_query=Suite%20Fran%C3%A7aise%202014%20official%20trailer"
  },
  {
    "id": 822,
    "title": "The Imaginarium of Doctor Parnassus",
    "year": 2009,
    "genre": [
      "Adventure"
    ],
    "director": "Terry Gilliam",
    "rating": 6.8,
    "votes": 130153,
    "revenue": 7690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/DtrqQHa0wT9AWrk2WA9beROJJx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Imaginarium of Doctor Parnassus is a Adventure directed by Terry Gilliam.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Imaginarium%20of%20Doctor%20Parnassus%202009%20official%20trailer"
  },
  {
    "id": 823,
    "title": "G.I. Joe: The Rise of Cobra",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Stephen Sommers",
    "rating": 5.8,
    "votes": 180105,
    "revenue": 150170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mc9b25IAprHfsaOz0wTshOwGHcY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "G.I. Joe: The Rise of Cobra is a Action directed by Stephen Sommers.",
    "trailer": "https://www.youtube.com/results?search_query=G.I.%20Joe%3A%20The%20Rise%20of%20Cobra%202009%20official%20trailer"
  },
  {
    "id": 824,
    "title": "Christine",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Antonio Campos",
    "rating": 7.0,
    "votes": 5855,
    "revenue": 300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/enZy6Yx6sjdOXxcnQVC200RjeKM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Christine is a Biography directed by Antonio Campos.",
    "trailer": "https://www.youtube.com/results?search_query=Christine%202016%20official%20trailer"
  },
  {
    "id": 825,
    "title": "Man Down",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Dito Montiel",
    "rating": 5.8,
    "votes": 4779,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/8xWo2WE36JdBwlCmwvXM4bb5rBg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Man Down is a Drama directed by Dito Montiel.",
    "trailer": "https://www.youtube.com/results?search_query=Man%20Down%202015%20official%20trailer"
  },
  {
    "id": 826,
    "title": "Crawlspace",
    "year": 2016,
    "genre": [
      "Horror"
    ],
    "director": "Phil Claydon",
    "rating": 5.3,
    "votes": 1427,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/wfOaPl9lfzRuMjbnJZ8joBHG1h2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Crawlspace is a Horror directed by Phil Claydon.",
    "trailer": "https://www.youtube.com/results?search_query=Crawlspace%202016%20official%20trailer"
  },
  {
    "id": 827,
    "title": "Shut In",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Farren Blackburn",
    "rating": 4.6,
    "votes": 5715,
    "revenue": 6880000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qXIGq6ddQhIYe4Z7A86nZ1qjUME.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Shut In is a Drama directed by Farren Blackburn.",
    "trailer": "https://www.youtube.com/results?search_query=Shut%20In%202016%20official%20trailer"
  },
  {
    "id": 828,
    "title": "The Warriors Gate",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Matthias Hoene",
    "rating": 5.3,
    "votes": 1391,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/8l2DHcrCTgy1XuFHZmL2BbClJVO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Warriors Gate is a Action directed by Matthias Hoene.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Warriors%20Gate%202016%20official%20trailer"
  },
  {
    "id": 829,
    "title": "Grindhouse",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Robert Rodriguez",
    "rating": 7.6,
    "votes": 160350,
    "revenue": 25030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tvMBwJlmQTIQf5EBjHzzyE9tjcN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Grindhouse is a Action directed by Robert Rodriguez.",
    "trailer": "https://www.youtube.com/results?search_query=Grindhouse%202007%20official%20trailer"
  },
  {
    "id": 830,
    "title": "Disaster Movie",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Jason Friedberg",
    "rating": 1.9,
    "votes": 77207,
    "revenue": 14170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3J8XKUfhJiNzwobUZVtizXYPe8b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Disaster Movie is a Comedy directed by Jason Friedberg.",
    "trailer": "https://www.youtube.com/watch?v=tihG_2BSUqg"
  },
  {
    "id": 831,
    "title": "Rocky Balboa",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Sylvester Stallone",
    "rating": 7.2,
    "votes": 171356,
    "revenue": 70270000.0,
    "poster": "https://image.tmdb.org/t/p/w500/byBlJvZwCqgtIwrZNv0pyE974jC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rocky Balboa is a Drama directed by Sylvester Stallone.",
    "trailer": "https://www.youtube.com/results?search_query=Rocky%20Balboa%202006%20official%20trailer"
  },
  {
    "id": 832,
    "title": "Diary of a Wimpy Kid: Dog Days",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "David Bowers",
    "rating": 6.4,
    "votes": 16917,
    "revenue": 49000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7pTvjELxw0f0E6sUPGtPEl4WD0S.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Diary of a Wimpy Kid: Dog Days is a Comedy directed by David Bowers.",
    "trailer": "https://www.youtube.com/results?search_query=Diary%20of%20a%20Wimpy%20Kid%3A%20Dog%20Days%202012%20official%20trailer"
  },
  {
    "id": 833,
    "title": "Jane Eyre",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Cary Joji Fukunaga",
    "rating": 7.4,
    "votes": 67464,
    "revenue": 11230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3Cn7D0wEaxnvm8kTta1osNu3QJv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Jane Eyre is a Drama directed by Cary Joji Fukunaga.",
    "trailer": "https://www.youtube.com/results?search_query=Jane%20Eyre%202011%20official%20trailer"
  },
  {
    "id": 834,
    "title": "Fool's Gold",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Andy Tennant",
    "rating": 5.7,
    "votes": 62719,
    "revenue": 70220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/f4djEBW3nyGRPLTcDlWYyaO43mx.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Fool's Gold is a Action directed by Andy Tennant.",
    "trailer": "https://www.youtube.com/results?search_query=Fool%27s%20Gold%202008%20official%20trailer"
  },
  {
    "id": 835,
    "title": "The Dictator",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Larry Charles",
    "rating": 6.4,
    "votes": 225394,
    "revenue": 59620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/n0W7kajF4GFMRk2c0wWwMQqTaDM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Dictator is a Comedy directed by Larry Charles.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Dictator%202012%20official%20trailer"
  },
  {
    "id": 836,
    "title": "The Loft",
    "year": 2014,
    "genre": [
      "Mystery"
    ],
    "director": "Erik Van Looy",
    "rating": 6.3,
    "votes": 38804,
    "revenue": 5980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/msHg4MRKZBcGwIakhMEaYRSdYag.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Loft is a Mystery directed by Erik Van Looy.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Loft%202014%20official%20trailer"
  },
  {
    "id": 837,
    "title": "Bacalaureat",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Cristian Mungiu",
    "rating": 7.5,
    "votes": 5531,
    "revenue": 130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/FLocEtNx189qFvqRpaYArNK8w2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bacalaureat is a Crime directed by Cristian Mungiu.",
    "trailer": "https://www.youtube.com/results?search_query=Bacalaureat%202016%20official%20trailer"
  },
  {
    "id": 838,
    "title": "You Don't Mess with the Zohan",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Dennis Dugan",
    "rating": 5.5,
    "votes": 163144,
    "revenue": 100020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gBhLQmpCPoKFMCGsulMbIFzrBID.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "You Don't Mess with the Zohan is a Action directed by Dennis Dugan.",
    "trailer": "https://www.youtube.com/results?search_query=You%20Don%27t%20Mess%20with%20the%20Zohan%202008%20official%20trailer"
  },
  {
    "id": 839,
    "title": "Exposed",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Gee Malik Linton",
    "rating": 4.2,
    "votes": 8409,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/nM26QosEfgjEegONCiNNrYMBTxD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Exposed is a Crime directed by Gee Malik Linton.",
    "trailer": "https://www.youtube.com/results?search_query=Exposed%202016%20official%20trailer"
  },
  {
    "id": 840,
    "title": "Maudie",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Aisling Walsh",
    "rating": 7.8,
    "votes": 346,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/wu9RPdV0uEemFEewJQ6fWwJ9ZcU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Maudie is a Biography directed by Aisling Walsh.",
    "trailer": "https://www.youtube.com/watch?v=u6E8isRedHo"
  },
  {
    "id": 841,
    "title": "Horrible Bosses 2",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Sean Anders",
    "rating": 6.3,
    "votes": 125190,
    "revenue": 54410000.0,
    "poster": "https://image.tmdb.org/t/p/w500/boBOkwIqgrs8noxBUSDkkicKa4K.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Horrible Bosses 2 is a Comedy directed by Sean Anders.",
    "trailer": "https://www.youtube.com/results?search_query=Horrible%20Bosses%202%202014%20official%20trailer"
  },
  {
    "id": 842,
    "title": "A Bigger Splash",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Luca Guadagnino",
    "rating": 6.4,
    "votes": 15232,
    "revenue": 1980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b9ca2L41R43Lg1hpSzJHwtDTvYU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "A Bigger Splash is a Drama directed by Luca Guadagnino.",
    "trailer": "https://www.youtube.com/results?search_query=A%20Bigger%20Splash%202015%20official%20trailer"
  },
  {
    "id": 843,
    "title": "Melancholia",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Lars von Trier",
    "rating": 7.1,
    "votes": 137117,
    "revenue": 3030000.0,
    "poster": "https://image.tmdb.org/t/p/w500/fMneszMiQuTKY8JUXrGGB5vwqJf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Melancholia is a Drama directed by Lars von Trier.",
    "trailer": "https://www.youtube.com/results?search_query=Melancholia%202011%20official%20trailer"
  },
  {
    "id": 844,
    "title": "The Princess and the Frog",
    "year": 2009,
    "genre": [
      "Animation"
    ],
    "director": "Ron Clements",
    "rating": 7.1,
    "votes": 95480,
    "revenue": 104370000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yprv5PbnEksoVj2v6XEnDBg9joR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Princess and the Frog is a Animation directed by Ron Clements.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Princess%20and%20the%20Frog%202009%20official%20trailer"
  },
  {
    "id": 845,
    "title": "Unstoppable",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Tony Scott",
    "rating": 6.8,
    "votes": 157499,
    "revenue": 81560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zKvHwL0GqLOear8rTnUPSTRYY0r.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Unstoppable is a Action directed by Tony Scott.",
    "trailer": "https://www.youtube.com/results?search_query=Unstoppable%202010%20official%20trailer"
  },
  {
    "id": 846,
    "title": "Flight",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Robert Zemeckis",
    "rating": 7.3,
    "votes": 276347,
    "revenue": 93750000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tFsHDNclXoCKy2xMxskzXXMaFJS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Flight is a Drama directed by Robert Zemeckis.",
    "trailer": "https://www.youtube.com/results?search_query=Flight%202012%20official%20trailer"
  },
  {
    "id": 847,
    "title": "Home",
    "year": 2015,
    "genre": [
      "Animation"
    ],
    "director": "Tim Johnson",
    "rating": 6.7,
    "votes": 77447,
    "revenue": 177340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/usFenYnk6mr8C62dB1MoAfSWMGR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Home is a Animation directed by Tim Johnson.",
    "trailer": "https://www.youtube.com/results?search_query=Home%202015%20official%20trailer"
  },
  {
    "id": 848,
    "title": "La migliore offerta",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "Giuseppe Tornatore",
    "rating": 7.8,
    "votes": 77986,
    "revenue": 90000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ibDGPgUZn6vxHiSgt2xeQyFp8Np.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "La migliore offerta is a Crime directed by Giuseppe Tornatore.",
    "trailer": "https://www.youtube.com/results?search_query=La%20migliore%20offerta%202013%20official%20trailer"
  },
  {
    "id": 849,
    "title": "Mean Dreams",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Nathan Morlando",
    "rating": 6.3,
    "votes": 1066,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/sf1yPzqPNfmwh7RumTunOUir3f0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mean Dreams is a Thriller directed by Nathan Morlando.",
    "trailer": "https://www.youtube.com/results?search_query=Mean%20Dreams%202016%20official%20trailer"
  },
  {
    "id": 850,
    "title": "42",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Brian Helgeland",
    "rating": 7.5,
    "votes": 69659,
    "revenue": 95000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iZ7jVGQWj3eBUdqwAPUlKk0BaS2.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "42 is a Biography directed by Brian Helgeland.",
    "trailer": "https://www.youtube.com/watch?v=PKtFzI4l7wk"
  },
  {
    "id": 851,
    "title": "21",
    "year": 2008,
    "genre": [
      "Crime"
    ],
    "director": "Robert Luketic",
    "rating": 6.8,
    "votes": 198395,
    "revenue": 81160000.0,
    "poster": "https://image.tmdb.org/t/p/w500/efG8Po57alqSlhqHU1lXJ3duG6t.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "21 is a Crime directed by Robert Luketic.",
    "trailer": "https://www.youtube.com/watch?v=0DpvqzPdXoc"
  },
  {
    "id": 852,
    "title": "Begin Again",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "John Carney",
    "rating": 7.4,
    "votes": 111875,
    "revenue": 16170000.000000002,
    "poster": "https://image.tmdb.org/t/p/w500/qx4HXHXt528hS4rwePZbZo20xqZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Begin Again is a Drama directed by John Carney.",
    "trailer": "https://www.youtube.com/results?search_query=Begin%20Again%202013%20official%20trailer"
  },
  {
    "id": 853,
    "title": "Out of the Furnace",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "Scott Cooper",
    "rating": 6.8,
    "votes": 88829,
    "revenue": 11330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cOuQQ4eRpSBxb0G9OXzWE1pHPeq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Out of the Furnace is a Crime directed by Scott Cooper.",
    "trailer": "https://www.youtube.com/watch?v=nKZMZLd6TqE"
  },
  {
    "id": 854,
    "title": "Vicky Cristina Barcelona",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Woody Allen",
    "rating": 7.1,
    "votes": 208770,
    "revenue": 23210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ekAIg0GSbbHTH7y1GPgWj0brLTW.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Vicky Cristina Barcelona is a Drama directed by Woody Allen.",
    "trailer": "https://www.youtube.com/results?search_query=Vicky%20Cristina%20Barcelona%202008%20official%20trailer"
  },
  {
    "id": 855,
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": [
      "Animation"
    ],
    "director": "Mark Osborne",
    "rating": 7.6,
    "votes": 329788,
    "revenue": 215400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kung Fu Panda is a Animation directed by Mark Osborne.",
    "trailer": "https://www.youtube.com/watch?v=TD0YUZw_oHY"
  },
  {
    "id": 856,
    "title": "Barbershop: The Next Cut",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Malcolm D. Lee",
    "rating": 5.9,
    "votes": 9993,
    "revenue": 54010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9mwzidlGgWfr2hcMWUKM86lOqdo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Barbershop: The Next Cut is a Comedy directed by Malcolm D. Lee.",
    "trailer": "https://www.youtube.com/results?search_query=Barbershop%3A%20The%20Next%20Cut%202016%20official%20trailer"
  },
  {
    "id": 857,
    "title": "Terminator Salvation",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "McG",
    "rating": 6.6,
    "votes": 297093,
    "revenue": 125320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Terminator Salvation is a Action directed by McG.",
    "trailer": "https://www.youtube.com/results?search_query=Terminator%20Salvation%202009%20official%20trailer"
  },
  {
    "id": 858,
    "title": "Freedom Writers",
    "year": 2007,
    "genre": [
      "Biography"
    ],
    "director": "Richard LaGravenese",
    "rating": 7.5,
    "votes": 55648,
    "revenue": 36580000.0,
    "poster": "https://image.tmdb.org/t/p/w500/81AdeUQT99N0xPg3j6RVh0YGOTk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Freedom Writers is a Biography directed by Richard LaGravenese.",
    "trailer": "https://www.youtube.com/watch?v=miz1V13QWsU"
  },
  {
    "id": 859,
    "title": "The Hills Have Eyes",
    "year": 2006,
    "genre": [
      "Horror"
    ],
    "director": "Alexandre Aja",
    "rating": 6.4,
    "votes": 136642,
    "revenue": 41780000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2eJL1Ccr1FN3dm9OSDwyd8uaX1b.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Hills Have Eyes is a Horror directed by Alexandre Aja.",
    "trailer": "https://www.youtube.com/watch?v=weZ6GEXeYl0"
  },
  {
    "id": 860,
    "title": "Changeling",
    "year": 2008,
    "genre": [
      "Biography"
    ],
    "director": "Clint Eastwood",
    "rating": 7.8,
    "votes": 206793,
    "revenue": 35710000.0,
    "poster": "https://image.tmdb.org/t/p/w500/y9Qi39dL3PceGCH8afyC7QrhbhI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Changeling is a Biography directed by Clint Eastwood.",
    "trailer": "https://www.youtube.com/watch?v=IF5hwg4FNEU"
  },
  {
    "id": 861,
    "title": "Remember Me",
    "year": 2010,
    "genre": [
      "Drama"
    ],
    "director": "Allen Coulter",
    "rating": 7.2,
    "votes": 119376,
    "revenue": 19060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/j7umuMiLCHvWT7wYhFKJOTFSokF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Remember Me is a Drama directed by Allen Coulter.",
    "trailer": "https://www.youtube.com/results?search_query=Remember%20Me%202010%20official%20trailer"
  },
  {
    "id": 862,
    "title": "Koe no katachi",
    "year": 2016,
    "genre": [
      "Animation"
    ],
    "director": "Naoko Yamada",
    "rating": 8.4,
    "votes": 2421,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Koe no katachi is a Animation directed by Naoko Yamada.",
    "trailer": "https://www.youtube.com/results?search_query=Koe%20no%20katachi%202016%20official%20trailer"
  },
  {
    "id": 863,
    "title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Miguel Arteta",
    "rating": 6.2,
    "votes": 32310,
    "revenue": 66950000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pxbAepXQjsGFDHaR3dPndFSxDU0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Alexander and the Terrible, Horrible, No Good, Very Bad Day is a Comedy directed by Miguel Arteta.",
    "trailer": "https://www.youtube.com/results?search_query=Alexander%20and%20the%20Terrible%2C%20Horrible%2C%20No%20Good%2C%20Very%20Bad%20Day%202014%20official%20trailer"
  },
  {
    "id": 864,
    "title": "Locke",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Steven Knight",
    "rating": 7.1,
    "votes": 100890,
    "revenue": 1360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tTREq5tTyYwmSLDRMhybJ82zXcX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Locke is a Drama directed by Steven Knight.",
    "trailer": "https://www.youtube.com/results?search_query=Locke%202013%20official%20trailer"
  },
  {
    "id": 865,
    "title": "The 9th Life of Louis Drax",
    "year": 2016,
    "genre": [
      "Mystery"
    ],
    "director": "Alexandre Aja",
    "rating": 6.3,
    "votes": 6175,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/w1DUBuhET3OEPBwoay8UL2OUxs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The 9th Life of Louis Drax is a Mystery directed by Alexandre Aja.",
    "trailer": "https://www.youtube.com/results?search_query=The%209th%20Life%20of%20Louis%20Drax%202016%20official%20trailer"
  },
  {
    "id": 866,
    "title": "Horns",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Alexandre Aja",
    "rating": 6.5,
    "votes": 61060,
    "revenue": 160000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tjTy6W05mPXXw87IqpjeGNhIcM4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Horns is a Drama directed by Alexandre Aja.",
    "trailer": "https://www.youtube.com/results?search_query=Horns%202013%20official%20trailer"
  },
  {
    "id": 867,
    "title": "Indignation",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "James Schamus",
    "rating": 6.9,
    "votes": 7402,
    "revenue": 3400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lh3tx877oO0z88L8NZRMJrLXu1z.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Indignation is a Drama directed by James Schamus.",
    "trailer": "https://www.youtube.com/results?search_query=Indignation%202016%20official%20trailer"
  },
  {
    "id": 868,
    "title": "The Stanford Prison Experiment",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Kyle Patrick Alvarez",
    "rating": 6.9,
    "votes": 20907,
    "revenue": 640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/orMkBkPqu7szuBRdMLUB4TWKiVV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Stanford Prison Experiment is a Biography directed by Kyle Patrick Alvarez.",
    "trailer": "https://www.youtube.com/watch?v=7LviGTHud5w"
  },
  {
    "id": 869,
    "title": "Diary of a Wimpy Kid: Rodrick Rules",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "David Bowers",
    "rating": 6.6,
    "votes": 20194,
    "revenue": 52690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/w77ZoDmHNf6lnk8NWsXqWYOQqnp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Diary of a Wimpy Kid: Rodrick Rules is a Comedy directed by David Bowers.",
    "trailer": "https://www.youtube.com/results?search_query=Diary%20of%20a%20Wimpy%20Kid%3A%20Rodrick%20Rules%202011%20official%20trailer"
  },
  {
    "id": 870,
    "title": "Mission: Impossible III",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "J.J. Abrams",
    "rating": 6.9,
    "votes": 270429,
    "revenue": 133380000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vKGYCpmQyV9uHybWDzXuII8Los5.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Mission: Impossible III is a Action directed by J.J. Abrams.",
    "trailer": "https://www.youtube.com/results?search_query=Mission%3A%20Impossible%20III%202006%20official%20trailer"
  },
  {
    "id": 871,
    "title": "En man som heter Ove",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Hannes Holm",
    "rating": 7.7,
    "votes": 21569,
    "revenue": 3360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/a41uvFqze4PI7N3E9jPNwN9ypV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "En man som heter Ove is a Comedy directed by Hannes Holm.",
    "trailer": "https://www.youtube.com/results?search_query=En%20man%20som%20heter%20Ove%202015%20official%20trailer"
  },
  {
    "id": 872,
    "title": "Dragonball Evolution",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "James Wong",
    "rating": 2.7,
    "votes": 59512,
    "revenue": 9350000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sunS9xhPnFNP5wlOWrvbpBteAB.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dragonball Evolution is a Action directed by James Wong.",
    "trailer": "https://www.youtube.com/results?search_query=Dragonball%20Evolution%202009%20official%20trailer"
  },
  {
    "id": 873,
    "title": "Red Dawn",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Dan Bradley",
    "rating": 5.4,
    "votes": 64584,
    "revenue": 44800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pwOcFK1hFZ5NJybBGfvzU6UHCPg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Red Dawn is a Action directed by Dan Bradley.",
    "trailer": "https://www.youtube.com/results?search_query=Red%20Dawn%202012%20official%20trailer"
  },
  {
    "id": 874,
    "title": "One Day",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Lone Scherfig",
    "rating": 7.0,
    "votes": 113599,
    "revenue": 13770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/n9jMwSg4IavdD8wqdYnyW5w3Mvp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "One Day is a Drama directed by Lone Scherfig.",
    "trailer": "https://www.youtube.com/results?search_query=One%20Day%202011%20official%20trailer"
  },
  {
    "id": 875,
    "title": "Life as We Know It",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Greg Berlanti",
    "rating": 6.6,
    "votes": 101301,
    "revenue": 53360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zLzS2aOqKsS0QvEaY6SfBw4VBqh.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Life as We Know It is a Comedy directed by Greg Berlanti.",
    "trailer": "https://www.youtube.com/results?search_query=Life%20as%20We%20Know%20It%202010%20official%20trailer"
  },
  {
    "id": 876,
    "title": "28 Weeks Later",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Juan Carlos Fresnadillo",
    "rating": 7.0,
    "votes": 221858,
    "revenue": 28640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oix0aNv1lvW3nUGspUyvSIBlpbs.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "28 Weeks Later is a Drama directed by Juan Carlos Fresnadillo.",
    "trailer": "https://www.youtube.com/watch?v=gPOt4mAEfBE"
  },
  {
    "id": 877,
    "title": "Warm Bodies",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Jonathan Levine",
    "rating": 6.9,
    "votes": 193579,
    "revenue": 66360000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pvVpl38YOBDOANb0pWbXFb8X3iZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Warm Bodies is a Comedy directed by Jonathan Levine.",
    "trailer": "https://www.youtube.com/results?search_query=Warm%20Bodies%202013%20official%20trailer"
  },
  {
    "id": 878,
    "title": "Blue Jasmine",
    "year": 2013,
    "genre": [
      "Drama"
    ],
    "director": "Woody Allen",
    "rating": 7.3,
    "votes": 160592,
    "revenue": 33400000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nsj0RLRI10351uYMoAKPur6Derd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Blue Jasmine is a Drama directed by Woody Allen.",
    "trailer": "https://www.youtube.com/watch?v=3UBv1S4Ajfs"
  },
  {
    "id": 879,
    "title": "G.I. Joe: Retaliation",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Jon M. Chu",
    "rating": 5.8,
    "votes": 152145,
    "revenue": 122510000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3rWIZMzTKcCtV0eHJ70Z4Ru659f.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "G.I. Joe: Retaliation is a Action directed by Jon M. Chu.",
    "trailer": "https://www.youtube.com/results?search_query=G.I.%20Joe%3A%20Retaliation%202013%20official%20trailer"
  },
  {
    "id": 880,
    "title": "Wrath of the Titans",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Jonathan Liebesman",
    "rating": 5.8,
    "votes": 159230,
    "revenue": 83640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/b9n2R3xZWQ8MVZgndQoV34stS0h.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wrath of the Titans is a Action directed by Jonathan Liebesman.",
    "trailer": "https://www.youtube.com/watch?v=8jEWLCZA7R8"
  },
  {
    "id": 881,
    "title": "Shin Gojira",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Hideaki Anno",
    "rating": 6.9,
    "votes": 8365,
    "revenue": 1910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jPNShaWZMpVF0iQ7j1dvTuZLD20.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Shin Gojira is a Action directed by Hideaki Anno.",
    "trailer": "https://www.youtube.com/results?search_query=Shin%20Gojira%202016%20official%20trailer"
  },
  {
    "id": 882,
    "title": "Saving Mr. Banks",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "John Lee Hancock",
    "rating": 7.5,
    "votes": 125693,
    "revenue": 83300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4RkcUe5PKnYvrCwMjk8giUAoID7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Saving Mr. Banks is a Biography directed by John Lee Hancock.",
    "trailer": "https://www.youtube.com/results?search_query=Saving%20Mr.%20Banks%202013%20official%20trailer"
  },
  {
    "id": 883,
    "title": "Transcendence",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Wally Pfister",
    "rating": 6.3,
    "votes": 184564,
    "revenue": 23010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/i3JqPtiJWnidaif3UA2K2Eng0hp.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Transcendence is a Drama directed by Wally Pfister.",
    "trailer": "https://www.youtube.com/results?search_query=Transcendence%202014%20official%20trailer"
  },
  {
    "id": 884,
    "title": "Rio",
    "year": 2011,
    "genre": [
      "Animation"
    ],
    "director": "Carlos Saldanha",
    "rating": 6.9,
    "votes": 173919,
    "revenue": 143620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4nJxhUknKV8Gqdhov8pU1YWDYfb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rio is a Animation directed by Carlos Saldanha.",
    "trailer": "https://www.youtube.com/results?search_query=Rio%202011%20official%20trailer"
  },
  {
    "id": 885,
    "title": "Equals",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Drake Doremus",
    "rating": 6.1,
    "votes": 16361,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vP1i0dddTbLL3pyddrSCPnJa8S7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Equals is a Drama directed by Drake Doremus.",
    "trailer": "https://www.youtube.com/watch?v=_RTN3HnQV3c"
  },
  {
    "id": 886,
    "title": "Babel",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
    "rating": 7.5,
    "votes": 253417,
    "revenue": 34300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/bZByZbvU7u14WjoUJERqCRW9saN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Babel is a Drama directed by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "trailer": "https://www.youtube.com/results?search_query=Babel%202006%20official%20trailer"
  },
  {
    "id": 887,
    "title": "The Tree of Life",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Terrence Malick",
    "rating": 6.8,
    "votes": 143517,
    "revenue": 13300000.0,
    "poster": "https://image.tmdb.org/t/p/w500/l8cwuB5WJSoj4uMAsnzuHBOMaSJ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Tree of Life is a Drama directed by Terrence Malick.",
    "trailer": "https://www.youtube.com/watch?v=gy69JdRsg2c"
  },
  {
    "id": 888,
    "title": "The Lucky One",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Scott Hicks",
    "rating": 6.5,
    "votes": 82874,
    "revenue": 60440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vF1ZuIkF9Z71VzVvG265xJUawb0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lucky One is a Drama directed by Scott Hicks.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Lucky%20One%202012%20official%20trailer"
  },
  {
    "id": 889,
    "title": "Piranha 3D",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Alexandre Aja",
    "rating": 5.5,
    "votes": 75262,
    "revenue": 25000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lMLS2OFBbNYMSB1ZbVp4q2S4zTU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Piranha 3D is a Comedy directed by Alexandre Aja.",
    "trailer": "https://www.youtube.com/results?search_query=Piranha%203D%202010%20official%20trailer"
  },
  {
    "id": 890,
    "title": "50/50",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Jonathan Levine",
    "rating": 7.7,
    "votes": 281625,
    "revenue": 34960000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8f9tM9JVB4ETBhxlQcXIjLckArl.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "50/50 is a Comedy directed by Jonathan Levine.",
    "trailer": "https://www.youtube.com/watch?v=pVObFYOU9rE"
  },
  {
    "id": 891,
    "title": "The Intent",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Femi Oyeniran",
    "rating": 3.5,
    "votes": 202,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/wvv1StbUhxRSyQXfpR0GwHZrE6w.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Intent is a Crime directed by Femi Oyeniran.",
    "trailer": "https://www.youtube.com/watch?v=lCiNOr5nlP0"
  },
  {
    "id": 892,
    "title": "This Is 40",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Judd Apatow",
    "rating": 6.2,
    "votes": 108156,
    "revenue": 67520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/mzUuOIFoVkRTHACRb58vm6mkbBN.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "This Is 40 is a Comedy directed by Judd Apatow.",
    "trailer": "https://www.youtube.com/results?search_query=This%20Is%2040%202012%20official%20trailer"
  },
  {
    "id": 893,
    "title": "Real Steel",
    "year": 2011,
    "genre": [
      "Action"
    ],
    "director": "Shawn Levy",
    "rating": 7.1,
    "votes": 264480,
    "revenue": 85460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/4GIeI5K5YdDUkR3mNQBoScpSFEf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Real Steel is a Action directed by Shawn Levy.",
    "trailer": "https://www.youtube.com/results?search_query=Real%20Steel%202011%20official%20trailer"
  },
  {
    "id": 894,
    "title": "Sex and the City",
    "year": 2008,
    "genre": [
      "Comedy"
    ],
    "director": "Michael Patrick King",
    "rating": 5.5,
    "votes": 102547,
    "revenue": 152640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/AhNfnsGW95RKHQNLdgFH48UN0Zy.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sex and the City is a Comedy directed by Michael Patrick King.",
    "trailer": "https://www.youtube.com/results?search_query=Sex%20and%20the%20City%202008%20official%20trailer"
  },
  {
    "id": 895,
    "title": "Rambo",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Sylvester Stallone",
    "rating": 7.1,
    "votes": 187077,
    "revenue": 42720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3mInub5c8o00H7EJ1TrjAqOzIuc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rambo is a Action directed by Sylvester Stallone.",
    "trailer": "https://www.youtube.com/results?search_query=Rambo%202008%20official%20trailer"
  },
  {
    "id": 896,
    "title": "Planet Terror",
    "year": 2007,
    "genre": [
      "Action"
    ],
    "director": "Robert Rodriguez",
    "rating": 7.1,
    "votes": 174553,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3705GxG0RN9XDV5y9IiXKYHw1fK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Planet Terror is a Action directed by Robert Rodriguez.",
    "trailer": "https://www.youtube.com/watch?v=j1cjXKdox0M"
  },
  {
    "id": 897,
    "title": "Concussion",
    "year": 2015,
    "genre": [
      "Biography"
    ],
    "director": "Peter Landesman",
    "rating": 7.1,
    "votes": 61274,
    "revenue": 34530000.0,
    "poster": "https://image.tmdb.org/t/p/w500/uuRFr7Jhsq7bITDyyvxZrQMAr9e.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Concussion is a Biography directed by Peter Landesman.",
    "trailer": "https://www.youtube.com/watch?v=oYGt8Cy_nUc"
  },
  {
    "id": 898,
    "title": "The Fall",
    "year": 2006,
    "genre": [
      "Adventure"
    ],
    "director": "Tarsem Singh",
    "rating": 7.9,
    "votes": 93036,
    "revenue": 2280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ez7xavvDr5yDz4sSvI55xDp0BoU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Fall is a Adventure directed by Tarsem Singh.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Fall%202006%20official%20trailer"
  },
  {
    "id": 899,
    "title": "The Ugly Truth",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Robert Luketic",
    "rating": 6.5,
    "votes": 172558,
    "revenue": 88920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2rq96Ihbqb1eU3TEBVtgFlqbeX7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Ugly Truth is a Comedy directed by Robert Luketic.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Ugly%20Truth%202009%20official%20trailer"
  },
  {
    "id": 900,
    "title": "Bride Wars",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Gary Winick",
    "rating": 5.5,
    "votes": 83976,
    "revenue": 58720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eyXT8tmUoyHrg7YX1UVjmecHCWP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bride Wars is a Comedy directed by Gary Winick.",
    "trailer": "https://www.youtube.com/results?search_query=Bride%20Wars%202009%20official%20trailer"
  },
  {
    "id": 901,
    "title": "Sleeping with Other People",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Leslye Headland",
    "rating": 6.5,
    "votes": 27730,
    "revenue": 810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/thYomS3wTYDTRZaM98ADMfBiDxm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sleeping with Other People is a Comedy directed by Leslye Headland.",
    "trailer": "https://www.youtube.com/results?search_query=Sleeping%20with%20Other%20People%202015%20official%20trailer"
  },
  {
    "id": 902,
    "title": "Snakes on a Plane",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "David R. Ellis",
    "rating": 5.6,
    "votes": 118905,
    "revenue": 34010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/i0ynvZ89tV1t8MAL9FmeQELfXH0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Snakes on a Plane is a Action directed by David R. Ellis.",
    "trailer": "https://www.youtube.com/results?search_query=Snakes%20on%20a%20Plane%202006%20official%20trailer"
  },
  {
    "id": 903,
    "title": "What If",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "director": "Michael Dowse",
    "rating": 6.8,
    "votes": 55243,
    "revenue": 3450000.0,
    "poster": "https://image.tmdb.org/t/p/w500/67x9NJyjK4u02NpISnChDMKzCUr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "What If is a Comedy directed by Michael Dowse.",
    "trailer": "https://www.youtube.com/results?search_query=What%20If%202013%20official%20trailer"
  },
  {
    "id": 904,
    "title": "How to Train Your Dragon 2",
    "year": 2014,
    "genre": [
      "Animation"
    ],
    "director": "Dean DeBlois",
    "rating": 7.9,
    "votes": 237565,
    "revenue": 177000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "How to Train Your Dragon 2 is a Animation directed by Dean DeBlois.",
    "trailer": "https://www.youtube.com/watch?v=1Y0erVF9cLI"
  },
  {
    "id": 905,
    "title": "RoboCop",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "Jos\u00e9 Padilha",
    "rating": 6.2,
    "votes": 190833,
    "revenue": 58610000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hHtOgGb3NihlyRATHlKPaFApbrd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "RoboCop is a Action directed by Jos\u00e9 Padilha.",
    "trailer": "https://www.youtube.com/results?search_query=RoboCop%202014%20official%20trailer"
  },
  {
    "id": 906,
    "title": "In Dubious Battle",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "James Franco",
    "rating": 6.2,
    "votes": 1455,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/bC7N0pUc6RzuDqSNHsV0VXk06Cq.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "In Dubious Battle is a Drama directed by James Franco.",
    "trailer": "https://www.youtube.com/results?search_query=In%20Dubious%20Battle%202016%20official%20trailer"
  },
  {
    "id": 907,
    "title": "Hello, My Name Is Doris",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Michael Showalter",
    "rating": 6.7,
    "votes": 12361,
    "revenue": 14440000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tV7MKM6xFGzO3zhYTC7rDmx5B4Y.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hello, My Name Is Doris is a Comedy directed by Michael Showalter.",
    "trailer": "https://www.youtube.com/results?search_query=Hello%2C%20My%20Name%20Is%20Doris%202015%20official%20trailer"
  },
  {
    "id": 908,
    "title": "Ocean's Thirteen",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Steven Soderbergh",
    "rating": 6.9,
    "votes": 269581,
    "revenue": 117140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pBsZs4zYUiUTemqbikTZ76iQRaU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Ocean's Thirteen is a Crime directed by Steven Soderbergh.",
    "trailer": "https://www.youtube.com/results?search_query=Ocean%27s%20Thirteen%202007%20official%20trailer"
  },
  {
    "id": 909,
    "title": "Slither",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "director": "James Gunn",
    "rating": 6.5,
    "votes": 64351,
    "revenue": 7770000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zNlJvCY3Pz7SE09Lf4G7uPs5XFZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Slither is a Comedy directed by James Gunn.",
    "trailer": "https://www.youtube.com/results?search_query=Slither%202006%20official%20trailer"
  },
  {
    "id": 910,
    "title": "Contagion",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Steven Soderbergh",
    "rating": 6.6,
    "votes": 187004,
    "revenue": 75640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qL0IooP0bjXy0KXl9KEyPo22ll0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Contagion is a Drama directed by Steven Soderbergh.",
    "trailer": "https://www.youtube.com/results?search_query=Contagion%202011%20official%20trailer"
  },
  {
    "id": 911,
    "title": "Il racconto dei racconti - Tale of Tales",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Matteo Garrone",
    "rating": 6.4,
    "votes": 17565,
    "revenue": 80000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7gWBy9z4JrkDPSfG5VbjWbbgvxk.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Il racconto dei racconti - Tale of Tales is a Drama directed by Matteo Garrone.",
    "trailer": "https://www.youtube.com/results?search_query=Il%20racconto%20dei%20racconti%20-%20Tale%20of%20Tales%202015%20official%20trailer"
  },
  {
    "id": 912,
    "title": "I Am the Pretty Thing That Lives in the House",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Oz Perkins",
    "rating": 4.7,
    "votes": 4204,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/lq8ktDO2uqJFgV0jRlMQlPSmNm8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I Am the Pretty Thing That Lives in the House is a Thriller directed by Oz Perkins.",
    "trailer": "https://www.youtube.com/results?search_query=I%20Am%20the%20Pretty%20Thing%20That%20Lives%20in%20the%20House%202016%20official%20trailer"
  },
  {
    "id": 913,
    "title": "Bridge to Terabithia",
    "year": 2007,
    "genre": [
      "Adventure"
    ],
    "director": "Gabor Csupo",
    "rating": 7.2,
    "votes": 117297,
    "revenue": 82230000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3xFxGodKPMFLheS8rujFSmLfcq4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Bridge to Terabithia is a Adventure directed by Gabor Csupo.",
    "trailer": "https://www.youtube.com/results?search_query=Bridge%20to%20Terabithia%202007%20official%20trailer"
  },
  {
    "id": 914,
    "title": "Coherence",
    "year": 2013,
    "genre": [
      "Mystery"
    ],
    "director": "James Ward Byrkit",
    "rating": 7.2,
    "votes": 66265,
    "revenue": 70000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ezUtb9m5DeLwL2gxi4gktzNCvQv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Coherence is a Mystery directed by James Ward Byrkit.",
    "trailer": "https://www.youtube.com/results?search_query=Coherence%202013%20official%20trailer"
  },
  {
    "id": 915,
    "title": "Notorious",
    "year": 2009,
    "genre": [
      "Biography"
    ],
    "director": "George Tillman Jr.",
    "rating": 6.7,
    "votes": 33007,
    "revenue": 36840000.0,
    "poster": "https://image.tmdb.org/t/p/w500/62NsZPgueSiE8y7dqtU3FSLFwYw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Notorious is a Biography directed by George Tillman Jr..",
    "trailer": "https://www.youtube.com/results?search_query=Notorious%202009%20official%20trailer"
  },
  {
    "id": 916,
    "title": "Goksung",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Hong-jin Na",
    "rating": 7.5,
    "votes": 17962,
    "revenue": 790000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nRrhrNWcPVgVR5qQdFy4fmLvyKZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Goksung is a Drama directed by Hong-jin Na.",
    "trailer": "https://www.youtube.com/results?search_query=Goksung%202016%20official%20trailer"
  },
  {
    "id": 917,
    "title": "The Expendables 2",
    "year": 2012,
    "genre": [
      "Action"
    ],
    "director": "Simon West",
    "rating": 6.6,
    "votes": 257395,
    "revenue": 85020000.0,
    "poster": "https://image.tmdb.org/t/p/w500/74rTIGyGoIu5KSxDVMdr8H3MtMo.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Expendables 2 is a Action directed by Simon West.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Expendables%202%202012%20official%20trailer"
  },
  {
    "id": 918,
    "title": "The Girl Next Door",
    "year": 2007,
    "genre": [
      "Crime"
    ],
    "director": "Gregory Wilson",
    "rating": 6.7,
    "votes": 19351,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/dXjLp7k7ILyg22T0s9VvpPKc9jn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Girl Next Door is a Crime directed by Gregory Wilson.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Girl%20Next%20Door%202007%20official%20trailer"
  },
  {
    "id": 919,
    "title": "Perfume: The Story of a Murderer",
    "year": 2006,
    "genre": [
      "Crime"
    ],
    "director": "Tom Tykwer",
    "rating": 7.5,
    "votes": 199387,
    "revenue": 2210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2wrFrUej8ri5EpjgIkjKTAnr686.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Perfume: The Story of a Murderer is a Crime directed by Tom Tykwer.",
    "trailer": "https://www.youtube.com/watch?v=zutiIw_2e2g"
  },
  {
    "id": 920,
    "title": "The Golden Compass",
    "year": 2007,
    "genre": [
      "Adventure"
    ],
    "director": "Chris Weitz",
    "rating": 6.1,
    "votes": 155078,
    "revenue": 70080000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6DTH9poR8RAw859L6OuokT7z993.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Golden Compass is a Adventure directed by Chris Weitz.",
    "trailer": "https://www.youtube.com/watch?v=x7u-Ve9kBeQ"
  },
  {
    "id": 921,
    "title": "Centurion",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Neil Marshall",
    "rating": 6.4,
    "votes": 67801,
    "revenue": 120000.0,
    "poster": "https://image.tmdb.org/t/p/w500/9ZdfrcP2QCqoRSk7JF06tDWtrhP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Centurion is a Action directed by Neil Marshall.",
    "trailer": "https://www.youtube.com/watch?v=zxgqJttU3iM"
  },
  {
    "id": 922,
    "title": "Scouts Guide to the Zombie Apocalypse",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Christopher Landon",
    "rating": 6.3,
    "votes": 31651,
    "revenue": 3640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lUKvvSnjFlazrdh6wyHxHrdMknD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Scouts Guide to the Zombie Apocalypse is a Action directed by Christopher Landon.",
    "trailer": "https://www.youtube.com/results?search_query=Scouts%20Guide%20to%20the%20Zombie%20Apocalypse%202015%20official%20trailer"
  },
  {
    "id": 923,
    "title": "17 Again",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "director": "Burr Steers",
    "rating": 6.4,
    "votes": 152808,
    "revenue": 64150000.00000001,
    "poster": "https://image.tmdb.org/t/p/w500/yEcfFXEWpuXcfsR9nKESVCFneqV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "17 Again is a Comedy directed by Burr Steers.",
    "trailer": "https://www.youtube.com/watch?v=2wn6pAIRjjY"
  },
  {
    "id": 924,
    "title": "No Escape",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "John Erick Dowdle",
    "rating": 6.8,
    "votes": 57921,
    "revenue": 27290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6WLnzTG4Hz3lFvfZGSsyB8NFGgM.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "No Escape is a Action directed by John Erick Dowdle.",
    "trailer": "https://www.youtube.com/results?search_query=No%20Escape%202015%20official%20trailer"
  },
  {
    "id": 925,
    "title": "Superman Returns",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Bryan Singer",
    "rating": 6.1,
    "votes": 246797,
    "revenue": 200070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/385XwTQZDpRX2d3kxtnpiLrjBXw.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Superman Returns is a Action directed by Bryan Singer.",
    "trailer": "https://www.youtube.com/results?search_query=Superman%20Returns%202006%20official%20trailer"
  },
  {
    "id": 926,
    "title": "The Twilight Saga: Breaking Dawn - Part 1",
    "year": 2011,
    "genre": [
      "Adventure"
    ],
    "director": "Bill Condon",
    "rating": 4.9,
    "votes": 190244,
    "revenue": 281280000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qs8LsHKYlVRmJbFUiSUhhRAygwj.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Twilight Saga: Breaking Dawn - Part 1 is a Adventure directed by Bill Condon.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Twilight%20Saga%3A%20Breaking%20Dawn%20-%20Part%201%202011%20official%20trailer"
  },
  {
    "id": 927,
    "title": "Precious",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Lee Daniels",
    "rating": 7.3,
    "votes": 91623,
    "revenue": 47540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/d4ltLIDbvZskSwbzXqi0Hfv5ma4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Precious is a Drama directed by Lee Daniels.",
    "trailer": "https://www.youtube.com/results?search_query=Precious%202009%20official%20trailer"
  },
  {
    "id": 928,
    "title": "The Sea of Trees",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Gus Van Sant",
    "rating": 5.9,
    "votes": 7475,
    "revenue": 20000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gmVGIEfzxupZUTer1Z5n80CHFnD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Sea of Trees is a Drama directed by Gus Van Sant.",
    "trailer": "https://www.youtube.com/watch?v=PQvC9V1eLsE"
  },
  {
    "id": 929,
    "title": "Good Kids",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Chris McCoy",
    "rating": 6.1,
    "votes": 3843,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/9R3hZnqFNyFmG10qwKzaUntlUbg.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Good Kids is a Comedy directed by Chris McCoy.",
    "trailer": "https://www.youtube.com/results?search_query=Good%20Kids%202016%20official%20trailer"
  },
  {
    "id": 930,
    "title": "The Master",
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "director": "Paul Thomas Anderson",
    "rating": 7.1,
    "votes": 112902,
    "revenue": 16379999.999999998,
    "poster": "https://image.tmdb.org/t/p/w500/rUSjbyvYWN9H4az8xt0tDtU7I6v.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Master is a Drama directed by Paul Thomas Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Master%202012%20official%20trailer"
  },
  {
    "id": 931,
    "title": "Footloose",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Craig Brewer",
    "rating": 5.9,
    "votes": 39380,
    "revenue": 51780000.0,
    "poster": "https://image.tmdb.org/t/p/w500/cDUW5RWmyHcTxu7eg9eMqhBQy2J.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Footloose is a Comedy directed by Craig Brewer.",
    "trailer": "https://www.youtube.com/results?search_query=Footloose%202011%20official%20trailer"
  },
  {
    "id": 932,
    "title": "If I Stay",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "R.J. Cutler",
    "rating": 6.8,
    "votes": 92170,
    "revenue": 50460000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7Twh8h3Wh7GC9npTAEUThgkxkWL.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "If I Stay is a Drama directed by R.J. Cutler.",
    "trailer": "https://www.youtube.com/watch?v=wH6PNeTy6Nc"
  },
  {
    "id": 933,
    "title": "The Ticket",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Ido Fluk",
    "rating": 5.4,
    "votes": 924,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/uyaUbLVoxgJMw3JSGljyOGYpXtz.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Ticket is a Drama directed by Ido Fluk.",
    "trailer": "https://www.youtube.com/watch?v=sZvXKRbFgf0"
  },
  {
    "id": 934,
    "title": "Detour",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Christopher Smith",
    "rating": 6.3,
    "votes": 2205,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/9BHMuMQPe62UG9DlQH97rm7jKnG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Detour is a Thriller directed by Christopher Smith.",
    "trailer": "https://www.youtube.com/results?search_query=Detour%202016%20official%20trailer"
  },
  {
    "id": 935,
    "title": "The Love Witch",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Anna Biller",
    "rating": 6.2,
    "votes": 4669,
    "revenue": 220000.0,
    "poster": "https://image.tmdb.org/t/p/w500/q6mZjCwGn9KCTrStTRM88pui0is.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Love Witch is a Comedy directed by Anna Biller.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Love%20Witch%202016%20official%20trailer"
  },
  {
    "id": 936,
    "title": "Talladega Nights: The Ballad of Ricky Bobby",
    "year": 2006,
    "genre": [
      "Action"
    ],
    "director": "Adam McKay",
    "rating": 6.6,
    "votes": 137502,
    "revenue": 148210000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3iCiTqsmJz1mO85AHzTiHNkRmb6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Talladega Nights: The Ballad of Ricky Bobby is a Action directed by Adam McKay.",
    "trailer": "https://www.youtube.com/results?search_query=Talladega%20Nights%3A%20The%20Ballad%20of%20Ricky%20Bobby%202006%20official%20trailer"
  },
  {
    "id": 937,
    "title": "The Human Centipede (First Sequence)",
    "year": 2009,
    "genre": [
      "Horror"
    ],
    "director": "Tom Six",
    "rating": 4.4,
    "votes": 60655,
    "revenue": 180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/gMtjxIkEi0hnTV5lPHbgeZ4ZpUZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Human Centipede (First Sequence) is a Horror directed by Tom Six.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Human%20Centipede%20%28First%20Sequence%29%202009%20official%20trailer"
  },
  {
    "id": 938,
    "title": "Super",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "James Gunn",
    "rating": 6.8,
    "votes": 64535,
    "revenue": 320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/jZrRMGSajZQehg8mz74A5A00L3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Super is a Comedy directed by James Gunn.",
    "trailer": "https://www.youtube.com/watch?v=-LLhj6QYQi8"
  },
  {
    "id": 939,
    "title": "The Siege of Jadotville",
    "year": 2016,
    "genre": [
      "Action"
    ],
    "director": "Richie Smyth",
    "rating": 7.3,
    "votes": 14689,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/adrno1y0mKpMwjSlMQojZEUk82V.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Siege of Jadotville is a Action directed by Richie Smyth.",
    "trailer": "https://www.youtube.com/watch?v=rHNtzyXvyLc"
  },
  {
    "id": 940,
    "title": "Up in the Air",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "director": "Jason Reitman",
    "rating": 7.4,
    "votes": 279694,
    "revenue": 83810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/useGH8nfwlaHK44IWEZdUYJOE2N.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Up in the Air is a Drama directed by Jason Reitman.",
    "trailer": "https://www.youtube.com/watch?v=En0DYdjMVoY"
  },
  {
    "id": 941,
    "title": "The Midnight Meat Train",
    "year": 2008,
    "genre": [
      "Horror"
    ],
    "director": "Ry\u00fbhei Kitamura",
    "rating": 6.1,
    "votes": 50255,
    "revenue": 70000.0,
    "poster": "https://image.tmdb.org/t/p/w500/x5YbfyUA8huK0shr008xwzNVJ5Y.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Midnight Meat Train is a Horror directed by Ry\u00fbhei Kitamura.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Midnight%20Meat%20Train%202008%20official%20trailer"
  },
  {
    "id": 942,
    "title": "The Twilight Saga: Eclipse",
    "year": 2010,
    "genre": [
      "Adventure"
    ],
    "director": "David Slade",
    "rating": 4.9,
    "votes": 192740,
    "revenue": 300520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dK4Gi1UdMiHzHc7r7CZQG4IQ9Sr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Twilight Saga: Eclipse is a Adventure directed by David Slade.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Twilight%20Saga%3A%20Eclipse%202010%20official%20trailer"
  },
  {
    "id": 943,
    "title": "Transpecos",
    "year": 2016,
    "genre": [
      "Thriller"
    ],
    "director": "Greg Kwedar",
    "rating": 5.8,
    "votes": 1292,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/3GglkPWXxHTqf7H2ptPLUb7p3Fb.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Transpecos is a Thriller directed by Greg Kwedar.",
    "trailer": "https://www.youtube.com/watch?v=kENbfHA1TQ0"
  },
  {
    "id": 944,
    "title": "What's Your Number?",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Mark Mylod",
    "rating": 6.1,
    "votes": 62095,
    "revenue": 13990000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eqn3UeXMY9W1Ow3jIZ6COqbjUWX.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "What's Your Number? is a Comedy directed by Mark Mylod.",
    "trailer": "https://www.youtube.com/watch?v=bgkxGrsX-A4"
  },
  {
    "id": 945,
    "title": "Riddick",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "David Twohy",
    "rating": 6.4,
    "votes": 132098,
    "revenue": 42000000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pUul9pGWOKT7X0smkTvsIEIQxcP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Riddick is a Action directed by David Twohy.",
    "trailer": "https://www.youtube.com/results?search_query=Riddick%202013%20official%20trailer"
  },
  {
    "id": 946,
    "title": "Triangle",
    "year": 2009,
    "genre": [
      "Fantasy"
    ],
    "director": "Christopher Smith",
    "rating": 6.9,
    "votes": 72533,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/cRlMrbc4Iof7vN0ZqHwJnMBYBLi.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Triangle is a Fantasy directed by Christopher Smith.",
    "trailer": "https://www.youtube.com/watch?v=RFLvVYetuTE"
  },
  {
    "id": 947,
    "title": "The Butler",
    "year": 2013,
    "genre": [
      "Biography"
    ],
    "director": "Lee Daniels",
    "rating": 7.2,
    "votes": 93322,
    "revenue": 116630000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pAi8Bl3ZKX6pANPVhNwbhbQANop.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Butler is a Biography directed by Lee Daniels.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Butler%202013%20official%20trailer"
  },
  {
    "id": 948,
    "title": "King Cobra",
    "year": 2016,
    "genre": [
      "Crime"
    ],
    "director": "Justin Kelly",
    "rating": 5.6,
    "votes": 3990,
    "revenue": 30000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sEun5y2q3aIrmpIAAhtS9G2JwH0.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "King Cobra is a Crime directed by Justin Kelly.",
    "trailer": "https://www.youtube.com/results?search_query=King%20Cobra%202016%20official%20trailer"
  },
  {
    "id": 949,
    "title": "After Earth",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "M. Night Shyamalan",
    "rating": 4.9,
    "votes": 166512,
    "revenue": 60520000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iXMvYIlzzJBs352CfeiQcBvovZt.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "After Earth is a Action directed by M. Night Shyamalan.",
    "trailer": "https://www.youtube.com/results?search_query=After%20Earth%202013%20official%20trailer"
  },
  {
    "id": 950,
    "title": "Kicks",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "Justin Tipping",
    "rating": 6.1,
    "votes": 2417,
    "revenue": 150000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5lW7mFOQW5wPlCIT0gUuYbhNtVP.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Kicks is a Adventure directed by Justin Tipping.",
    "trailer": "https://www.youtube.com/watch?v=wWV2hK4HVEk"
  },
  {
    "id": 951,
    "title": "Me and Earl and the Dying Girl",
    "year": 2015,
    "genre": [
      "Comedy"
    ],
    "director": "Alfonso Gomez-Rejon",
    "rating": 7.8,
    "votes": 92076,
    "revenue": 6740000.0,
    "poster": "https://image.tmdb.org/t/p/w500/eLjS2bLMjln2n2I73Xu6TaANPDZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Me and Earl and the Dying Girl is a Comedy directed by Alfonso Gomez-Rejon.",
    "trailer": "https://www.youtube.com/watch?v=FjU1M24Jlek"
  },
  {
    "id": 952,
    "title": "The Descendants",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Alexander Payne",
    "rating": 7.3,
    "votes": 211348,
    "revenue": 82620000.0,
    "poster": "https://image.tmdb.org/t/p/w500/8fYluTtB3b3HKO7KQa5tzrvGaps.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Descendants is a Comedy directed by Alexander Payne.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Descendants%202011%20official%20trailer"
  },
  {
    "id": 953,
    "title": "Sex and the City 2",
    "year": 2010,
    "genre": [
      "Comedy"
    ],
    "director": "Michael Patrick King",
    "rating": 4.3,
    "votes": 62403,
    "revenue": 95330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/iHSRxhZsPaVuLCivvV6WEkMVGWU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Sex and the City 2 is a Comedy directed by Michael Patrick King.",
    "trailer": "https://www.youtube.com/watch?v=pY7sAJm8Fuk"
  },
  {
    "id": 954,
    "title": "The Kings of Summer",
    "year": 2013,
    "genre": [
      "Adventure"
    ],
    "director": "Jordan Vogt-Roberts",
    "rating": 7.2,
    "votes": 65653,
    "revenue": 1290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/6dcIbwJuxlEnzLe0EaGFvsh4ZdS.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Kings of Summer is a Adventure directed by Jordan Vogt-Roberts.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Kings%20of%20Summer%202013%20official%20trailer"
  },
  {
    "id": 955,
    "title": "Death Race",
    "year": 2008,
    "genre": [
      "Action"
    ],
    "director": "Paul W.S. Anderson",
    "rating": 6.4,
    "votes": 173731,
    "revenue": 36060000.0,
    "poster": "https://image.tmdb.org/t/p/w500/5A79GeOb3uChQ0l0ZDjDyODKQp3.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Death Race is a Action directed by Paul W.S. Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=Death%20Race%202008%20official%20trailer"
  },
  {
    "id": 956,
    "title": "That Awkward Moment",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Tom Gormican",
    "rating": 6.2,
    "votes": 81823,
    "revenue": 26050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/tjDAdesZNYFyRNnZvLT0osc7S2t.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "That Awkward Moment is a Comedy directed by Tom Gormican.",
    "trailer": "https://www.youtube.com/watch?v=Mvr-NQrqF6I"
  },
  {
    "id": 957,
    "title": "Legion",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Scott Stewart",
    "rating": 5.2,
    "votes": 84158,
    "revenue": 40170000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ykocDqwg5PRUopnBVb1x1DWnEJF.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Legion is a Action directed by Scott Stewart.",
    "trailer": "https://www.youtube.com/watch?v=P6p01-in6-k"
  },
  {
    "id": 958,
    "title": "End of Watch",
    "year": 2012,
    "genre": [
      "Crime"
    ],
    "director": "David Ayer",
    "rating": 7.7,
    "votes": 192190,
    "revenue": 40980000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pDeVKQICkcdwwjHxGj0MeS14YJ6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "End of Watch is a Crime directed by David Ayer.",
    "trailer": "https://www.youtube.com/results?search_query=End%20of%20Watch%202012%20official%20trailer"
  },
  {
    "id": 959,
    "title": "3 Days to Kill",
    "year": 2014,
    "genre": [
      "Action"
    ],
    "director": "McG",
    "rating": 6.2,
    "votes": 73567,
    "revenue": 30690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/paDgMlfQIrK6PCG5g7UYv9YOdmK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "3 Days to Kill is a Action directed by McG.",
    "trailer": "https://www.youtube.com/watch?v=iVLRDwLv3kg"
  },
  {
    "id": 960,
    "title": "Lucky Number Slevin",
    "year": 2006,
    "genre": [
      "Crime"
    ],
    "director": "Paul McGuigan",
    "rating": 7.8,
    "votes": 271940,
    "revenue": 22490000.0,
    "poster": "https://image.tmdb.org/t/p/w500/x21s3p5wPww534nYj1cWakTcqz4.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Lucky Number Slevin is a Crime directed by Paul McGuigan.",
    "trailer": "https://www.youtube.com/results?search_query=Lucky%20Number%20Slevin%202006%20official%20trailer"
  },
  {
    "id": 961,
    "title": "Trance",
    "year": 2013,
    "genre": [
      "Crime"
    ],
    "director": "Danny Boyle",
    "rating": 7.0,
    "votes": 97141,
    "revenue": 2320000.0,
    "poster": "https://image.tmdb.org/t/p/w500/rR3F4fIn0JUJa1hlq2focd2W3zH.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Trance is a Crime directed by Danny Boyle.",
    "trailer": "https://www.youtube.com/watch?v=976y9Xm6BkY"
  },
  {
    "id": 962,
    "title": "Into the Forest",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Patricia Rozema",
    "rating": 5.9,
    "votes": 10220,
    "revenue": 10000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3xBUU6pYZPe9tqVH2R430y6psEm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Into the Forest is a Drama directed by Patricia Rozema.",
    "trailer": "https://www.youtube.com/results?search_query=Into%20the%20Forest%202015%20official%20trailer"
  },
  {
    "id": 963,
    "title": "The Other Boleyn Girl",
    "year": 2008,
    "genre": [
      "Biography"
    ],
    "director": "Justin Chadwick",
    "rating": 6.7,
    "votes": 88260,
    "revenue": 26810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/q2lgC8mmAltWTkbqPM8n5EYF4XL.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Other Boleyn Girl is a Biography directed by Justin Chadwick.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Other%20Boleyn%20Girl%202008%20official%20trailer"
  },
  {
    "id": 964,
    "title": "I Spit on Your Grave",
    "year": 2010,
    "genre": [
      "Crime"
    ],
    "director": "Steven R. Monroe",
    "rating": 6.3,
    "votes": 60133,
    "revenue": 90000.0,
    "poster": "https://image.tmdb.org/t/p/w500/sD5mBllYcBR5sQTyR2VGYhpHf6B.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "I Spit on Your Grave is a Crime directed by Steven R. Monroe.",
    "trailer": "https://www.youtube.com/results?search_query=I%20Spit%20on%20Your%20Grave%202010%20official%20trailer"
  },
  {
    "id": 965,
    "title": "Custody",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "James Lapine",
    "rating": 6.9,
    "votes": 280,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/9HBvD29HeQf0DeQx2ec4TgmRtS7.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Custody is a Drama directed by James Lapine.",
    "trailer": "https://www.youtube.com/results?search_query=Custody%202016%20official%20trailer"
  },
  {
    "id": 966,
    "title": "Inland Empire",
    "year": 2006,
    "genre": [
      "Drama"
    ],
    "director": "David Lynch",
    "rating": 7.0,
    "votes": 44227,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/s5f0FbVAABEnJYKaApWORTxhiFC.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Inland Empire is a Drama directed by David Lynch.",
    "trailer": "https://www.youtube.com/results?search_query=Inland%20Empire%202006%20official%20trailer"
  },
  {
    "id": 967,
    "title": "L'odyss\u00e9e",
    "year": 2016,
    "genre": [
      "Adventure"
    ],
    "director": "J\u00e9r\u00f4me Salle",
    "rating": 6.7,
    "votes": 1810,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/bAlXiq2SLqPU3hs3HgxPpNNq3CI.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "L'odyss\u00e9e is a Adventure directed by J\u00e9r\u00f4me Salle.",
    "trailer": "https://www.youtube.com/results?search_query=L%27odyss%C3%A9e%202016%20official%20trailer"
  },
  {
    "id": 968,
    "title": "The Walk",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Robert Zemeckis",
    "rating": 7.3,
    "votes": 92378,
    "revenue": 10140000.0,
    "poster": "https://image.tmdb.org/t/p/w500/euPgyPsiNFp6gOBB7nUFxvN5ZaY.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Walk is a Adventure directed by Robert Zemeckis.",
    "trailer": "https://www.youtube.com/watch?v=_WMDP7f0LJg"
  },
  {
    "id": 969,
    "title": "Wrecker",
    "year": 2015,
    "genre": [
      "Action"
    ],
    "director": "Micheal Bafaro",
    "rating": 3.5,
    "votes": 1210,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/bFYMEhWEBo3UYaU28n7g1nWqTgc.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Wrecker is a Action directed by Micheal Bafaro.",
    "trailer": "https://www.youtube.com/results?search_query=Wrecker%202015%20official%20trailer"
  },
  {
    "id": 970,
    "title": "The Lone Ranger",
    "year": 2013,
    "genre": [
      "Action"
    ],
    "director": "Gore Verbinski",
    "rating": 6.5,
    "votes": 190855,
    "revenue": 89290000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yDuJGq8biNMW7zM3w95UaDJv0KG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Lone Ranger is a Action directed by Gore Verbinski.",
    "trailer": "https://www.youtube.com/watch?v=LoVhgaj6PiE"
  },
  {
    "id": 971,
    "title": "Texas Chainsaw 3D",
    "year": 2013,
    "genre": [
      "Horror"
    ],
    "director": "John Luessenhop",
    "rating": 4.8,
    "votes": 37060,
    "revenue": 34330000.0,
    "poster": "https://image.tmdb.org/t/p/w500/dwIQ7WDCSiIcNdbferTcU7uI0KV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Texas Chainsaw 3D is a Horror directed by John Luessenhop.",
    "trailer": "https://www.youtube.com/results?search_query=Texas%20Chainsaw%203D%202013%20official%20trailer"
  },
  {
    "id": 972,
    "title": "Disturbia",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "D.J. Caruso",
    "rating": 6.9,
    "votes": 193491,
    "revenue": 80050000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3f9KwSrieczuH9nRrwfOsoMoMNd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Disturbia is a Drama directed by D.J. Caruso.",
    "trailer": "https://www.youtube.com/results?search_query=Disturbia%202007%20official%20trailer"
  },
  {
    "id": 973,
    "title": "Rock of Ages",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Adam Shankman",
    "rating": 5.9,
    "votes": 64513,
    "revenue": 38510000.0,
    "poster": "https://image.tmdb.org/t/p/w500/oVeE2QTUb14jPU2lYEGPE3s8T9j.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Rock of Ages is a Comedy directed by Adam Shankman.",
    "trailer": "https://www.youtube.com/watch?v=jFiDeufhxSY"
  },
  {
    "id": 974,
    "title": "Scream 4",
    "year": 2011,
    "genre": [
      "Horror"
    ],
    "director": "Wes Craven",
    "rating": 6.2,
    "votes": 108544,
    "revenue": 38180000.0,
    "poster": "https://image.tmdb.org/t/p/w500/3cf8p2qw9qnsaaFWc64AG6U05eT.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Scream 4 is a Horror directed by Wes Craven.",
    "trailer": "https://www.youtube.com/results?search_query=Scream%204%202011%20official%20trailer"
  },
  {
    "id": 975,
    "title": "Queen of Katwe",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Mira Nair",
    "rating": 7.4,
    "votes": 6753,
    "revenue": 8810000.0,
    "poster": "https://image.tmdb.org/t/p/w500/m8V2ud6uhV7qH6wEDoQ4Ujw99ji.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Queen of Katwe is a Biography directed by Mira Nair.",
    "trailer": "https://www.youtube.com/results?search_query=Queen%20of%20Katwe%202016%20official%20trailer"
  },
  {
    "id": 976,
    "title": "My Big Fat Greek Wedding 2",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Kirk Jones",
    "rating": 6.0,
    "votes": 20966,
    "revenue": 59570000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lfPqApnLVPsYfdbpSHNnHIxTdmd.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "My Big Fat Greek Wedding 2 is a Comedy directed by Kirk Jones.",
    "trailer": "https://www.youtube.com/watch?v=Xw9SAbYZMpc"
  },
  {
    "id": 977,
    "title": "Dark Places",
    "year": 2015,
    "genre": [
      "Drama"
    ],
    "director": "Gilles Paquet-Brenner",
    "rating": 6.2,
    "votes": 31634,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/acJXtT4ZX7nWIhOaCfSAGBxFw71.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Dark Places is a Drama directed by Gilles Paquet-Brenner.",
    "trailer": "https://www.youtube.com/results?search_query=Dark%20Places%202015%20official%20trailer"
  },
  {
    "id": 978,
    "title": "Amateur Night",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Lisa Addario",
    "rating": 5.0,
    "votes": 2229,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/dzJFu1F0miZKHbR7tRIX6cQcI8c.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Amateur Night is a Comedy directed by Lisa Addario.",
    "trailer": "https://www.youtube.com/results?search_query=Amateur%20Night%202016%20official%20trailer"
  },
  {
    "id": 979,
    "title": "It's Only the End of the World",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "director": "Xavier Dolan",
    "rating": 7.0,
    "votes": 10658,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/riWa3WZrO3n8lLWuaEVMgaqAZGn.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "It's Only the End of the World is a Drama directed by Xavier Dolan.",
    "trailer": "https://www.youtube.com/watch?v=KKYmIoKr8y8"
  },
  {
    "id": 980,
    "title": "The Skin I Live In",
    "year": 2011,
    "genre": [
      "Drama"
    ],
    "director": "Pedro Almod\u00f3var",
    "rating": 7.6,
    "votes": 108772,
    "revenue": 3190000.0,
    "poster": "https://image.tmdb.org/t/p/w500/xa7uCwGYykrf8MMI8iF5dZvNlrG.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "The Skin I Live In is a Drama directed by Pedro Almod\u00f3var.",
    "trailer": "https://www.youtube.com/results?search_query=The%20Skin%20I%20Live%20In%202011%20official%20trailer"
  },
  {
    "id": 981,
    "title": "Miracles from Heaven",
    "year": 2016,
    "genre": [
      "Biography"
    ],
    "director": "Patricia Riggen",
    "rating": 7.0,
    "votes": 12048,
    "revenue": 61690000.0,
    "poster": "https://image.tmdb.org/t/p/w500/hz9VF1TfaM0D04pYneSXUkNeOZv.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Miracles from Heaven is a Biography directed by Patricia Riggen.",
    "trailer": "https://www.youtube.com/results?search_query=Miracles%20from%20Heaven%202016%20official%20trailer"
  },
  {
    "id": 982,
    "title": "Annie",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Will Gluck",
    "rating": 5.3,
    "votes": 27312,
    "revenue": 85910000.0,
    "poster": "https://image.tmdb.org/t/p/w500/aKAM9V0izx4VhsdyAdBvAB26UCZ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Annie is a Comedy directed by Will Gluck.",
    "trailer": "https://www.youtube.com/results?search_query=Annie%202014%20official%20trailer"
  },
  {
    "id": 983,
    "title": "Across the Universe",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Julie Taymor",
    "rating": 7.4,
    "votes": 95172,
    "revenue": 24340000.0,
    "poster": "https://image.tmdb.org/t/p/w500/447c8Te3DXC46rQvDEixKGO4dS6.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Across the Universe is a Drama directed by Julie Taymor.",
    "trailer": "https://www.youtube.com/results?search_query=Across%20the%20Universe%202007%20official%20trailer"
  },
  {
    "id": 984,
    "title": "Let's Be Cops",
    "year": 2014,
    "genre": [
      "Comedy"
    ],
    "director": "Luke Greenfield",
    "rating": 6.5,
    "votes": 112729,
    "revenue": 82390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/pf4FoUr2phn5WyZjU7rLXSiW1Ve.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Let's Be Cops is a Comedy directed by Luke Greenfield.",
    "trailer": "https://www.youtube.com/watch?v=Mx03VkB-TPE"
  },
  {
    "id": 985,
    "title": "Max",
    "year": 2015,
    "genre": [
      "Adventure"
    ],
    "director": "Boaz Yakin",
    "rating": 6.8,
    "votes": 21405,
    "revenue": 42650000.0,
    "poster": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Max is a Adventure directed by Boaz Yakin.",
    "trailer": "https://www.youtube.com/results?search_query=Max%202015%20official%20trailer"
  },
  {
    "id": 986,
    "title": "Your Highness",
    "year": 2011,
    "genre": [
      "Adventure"
    ],
    "director": "David Gordon Green",
    "rating": 5.6,
    "votes": 87904,
    "revenue": 21560000.0,
    "poster": "https://image.tmdb.org/t/p/w500/zw1tEKhR1ncGGtuYkkf30GYlvYQ.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Your Highness is a Adventure directed by David Gordon Green.",
    "trailer": "https://www.youtube.com/results?search_query=Your%20Highness%202011%20official%20trailer"
  },
  {
    "id": 987,
    "title": "Final Destination 5",
    "year": 2011,
    "genre": [
      "Horror"
    ],
    "director": "Steven Quale",
    "rating": 5.9,
    "votes": 88000,
    "revenue": 42580000.0,
    "poster": "https://image.tmdb.org/t/p/w500/Akx1Po4ZLetOWfYJhQf75tbhTtK.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Final Destination 5 is a Horror directed by Steven Quale.",
    "trailer": "https://www.youtube.com/results?search_query=Final%20Destination%205%202011%20official%20trailer"
  },
  {
    "id": 988,
    "title": "Endless Love",
    "year": 2014,
    "genre": [
      "Drama"
    ],
    "director": "Shana Feste",
    "rating": 6.3,
    "votes": 33688,
    "revenue": 23390000.0,
    "poster": "https://image.tmdb.org/t/p/w500/7WDqvNmy4p6IJx8JjvzOtaV2IRr.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Endless Love is a Drama directed by Shana Feste.",
    "trailer": "https://www.youtube.com/results?search_query=Endless%20Love%202014%20official%20trailer"
  },
  {
    "id": 989,
    "title": "Martyrs",
    "year": 2008,
    "genre": [
      "Horror"
    ],
    "director": "Pascal Laugier",
    "rating": 7.1,
    "votes": 63785,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/sT5ITTlTcnPOeFzHEu5j0hTZUvD.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Martyrs is a Horror directed by Pascal Laugier.",
    "trailer": "https://www.youtube.com/results?search_query=Martyrs%202008%20official%20trailer"
  },
  {
    "id": 990,
    "title": "Selma",
    "year": 2014,
    "genre": [
      "Biography"
    ],
    "director": "Ava DuVernay",
    "rating": 7.5,
    "votes": 67637,
    "revenue": 52070000.0,
    "poster": "https://image.tmdb.org/t/p/w500/2QyUcitU0hrxy6B2zkyJ0EhNlqm.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Selma is a Biography directed by Ava DuVernay.",
    "trailer": "https://www.youtube.com/results?search_query=Selma%202014%20official%20trailer"
  },
  {
    "id": 991,
    "title": "Underworld: Rise of the Lycans",
    "year": 2009,
    "genre": [
      "Action"
    ],
    "director": "Patrick Tatopoulos",
    "rating": 6.6,
    "votes": 129708,
    "revenue": 45800000.0,
    "poster": "https://image.tmdb.org/t/p/w500/yW9gF7rGn8EoV8B8rxOx1xjxVZf.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Underworld: Rise of the Lycans is a Action directed by Patrick Tatopoulos.",
    "trailer": "https://www.youtube.com/results?search_query=Underworld%3A%20Rise%20of%20the%20Lycans%202009%20official%20trailer"
  },
  {
    "id": 992,
    "title": "Taare Zameen Par",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "director": "Aamir Khan",
    "rating": 8.5,
    "votes": 102697,
    "revenue": 1200000.0,
    "poster": "https://image.tmdb.org/t/p/w500/puHRt6Raovm5ujGCdwLWvRv4NHU.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Taare Zameen Par is a Drama directed by Aamir Khan.",
    "trailer": "https://www.youtube.com/results?search_query=Taare%20Zameen%20Par%202007%20official%20trailer"
  },
  {
    "id": 993,
    "title": "Take Me Home Tonight",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "director": "Michael Dowse",
    "rating": 6.3,
    "votes": 45419,
    "revenue": 6920000.0,
    "poster": "https://image.tmdb.org/t/p/w500/nInduPOusI1alDIC0UttFjDIKsO.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Take Me Home Tonight is a Comedy directed by Michael Dowse.",
    "trailer": "https://www.youtube.com/watch?v=ZsSNCmGUK2I"
  },
  {
    "id": 994,
    "title": "Resident Evil: Afterlife",
    "year": 2010,
    "genre": [
      "Action"
    ],
    "director": "Paul W.S. Anderson",
    "rating": 5.9,
    "votes": 140900,
    "revenue": 60130000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qZHDnt8bnsD2cSJfIbjWbCkIq3G.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Resident Evil: Afterlife is a Action directed by Paul W.S. Anderson.",
    "trailer": "https://www.youtube.com/results?search_query=Resident%20Evil%3A%20Afterlife%202010%20official%20trailer"
  },
  {
    "id": 995,
    "title": "Project X",
    "year": 2012,
    "genre": [
      "Comedy"
    ],
    "director": "Nima Nourizadeh",
    "rating": 6.7,
    "votes": 164088,
    "revenue": 54720000.0,
    "poster": "https://image.tmdb.org/t/p/w500/lUPDGT3lyRrq8SvWuNWG2DP64bR.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Project X is a Comedy directed by Nima Nourizadeh.",
    "trailer": "https://www.youtube.com/watch?v=iaA0XX8odmM"
  },
  {
    "id": 996,
    "title": "Secret in Their Eyes",
    "year": 2015,
    "genre": [
      "Crime"
    ],
    "director": "Billy Ray",
    "rating": 6.2,
    "votes": 27585,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/gJl4iTxQlazkPCplGmSLGBUwqg9.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Secret in Their Eyes is a Crime directed by Billy Ray.",
    "trailer": "https://www.youtube.com/watch?v=NODxOb3hgag"
  },
  {
    "id": 997,
    "title": "Hostel: Part II",
    "year": 2007,
    "genre": [
      "Horror"
    ],
    "director": "Eli Roth",
    "rating": 5.5,
    "votes": 73152,
    "revenue": 17540000.0,
    "poster": "https://image.tmdb.org/t/p/w500/qB20aiY8Ah3pQikkBxm3j7jQVc8.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Hostel: Part II is a Horror directed by Eli Roth.",
    "trailer": "https://www.youtube.com/results?search_query=Hostel%3A%20Part%20II%202007%20official%20trailer"
  },
  {
    "id": 998,
    "title": "Step Up 2: The Streets",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "director": "Jon M. Chu",
    "rating": 6.2,
    "votes": 70699,
    "revenue": 58010000.0,
    "poster": "https://image.tmdb.org/t/p/w500/vYdlRTvA5fneB88NchV3sirzCE1.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Step Up 2: The Streets is a Drama directed by Jon M. Chu.",
    "trailer": "https://www.youtube.com/results?search_query=Step%20Up%202%3A%20The%20Streets%202008%20official%20trailer"
  },
  {
    "id": 999,
    "title": "Search Party",
    "year": 2014,
    "genre": [
      "Adventure"
    ],
    "director": "Scot Armstrong",
    "rating": 5.6,
    "votes": 4881,
    "revenue": 0,
    "poster": "https://image.tmdb.org/t/p/w500/qnhMdtcbZnzcA9cMuZttwosaXji.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Search Party is a Adventure directed by Scot Armstrong.",
    "trailer": "https://www.youtube.com/watch?v=8FJu4H7-OwE"
  },
  {
    "id": 1000,
    "title": "Nine Lives",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "director": "Barry Sonnenfeld",
    "rating": 5.3,
    "votes": 12435,
    "revenue": 19640000.0,
    "poster": "https://image.tmdb.org/t/p/w500/i457G22lL9t2yhEFdYz5Nd1M5DV.jpg",
    "tagline": "A Hollywood Classic.",
    "synopsis": "Nine Lives is a Comedy directed by Barry Sonnenfeld.",
    "trailer": "https://www.youtube.com/watch?v=_jHA97HzhxE"
  }
];
