# Classroom Seating Chart Randomizer
Randomize classroom seating charts

## Launching and using the app
1. Launch a simple HTTP server with Cross-Origin Resource Service
(CORS) enabled:
```
python simple-cors-http-server.py 8888
```
The above port number must match the port number specified in
[main.js].

2. Open a browser to http://localhost:8888
3. Click web.
4. Click parse-json.html.
5. Reload the page to shuffle student positions.

## Changing the classroom and student data
To update the classroom informaton or student rosters, edit the following files:

* [courses.json](./web/data/courses.json)
* [rooms.json](./web/data/rooms.json)

## Known issues
Due to browser and/or server caching, step 5 above might be insufficient to capture
changes in the student list saved in `courses.json`.  If the shuffled list displayed
in the browser does not reflect the latest information in the saved list, try

1. Click the browser's reload button.
2. Restart the browser.
3. Restart the http server.
4. Clear the browser data.

[main.js]: ./web/main.js
