# Classroom Seating Chart Randomizer
Randomize classroom seating charts

## Launching and using the app
1. In a terminal window, launch a simple HTTP server with Cross-Origin
Resource Service (CORS) enabled:
```
python src/simple-cors-http-server.py 8888
```
The above port number must match the port number specified in
[main.js].

2. Open a browser to http://localhost:8888
3. Reload the page to shuffle student positions.

## Changing the classroom and student data
To update the classroom informaton or student rosters, edit the following files:

* [courses.json](./data/courses.json)
* [rooms.json](./data/rooms.json)

## Known issues
Due to browser and/or server caching, step 5 above might be insufficient to capture
changes in the above `json` input files.  If the shuffled list displayed in the
browser does not reflect the latest information in the `json` files, try

1. Click the browser's reload button.
2. Clear the browser data.

[main.js]: ./src/main.js
