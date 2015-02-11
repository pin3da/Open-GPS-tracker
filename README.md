Open GPS-tracker
========

Open GPS-tracker is a GPS-tracking-thing written in JavaScript. It is primarily built for tracking running events, but may be modified to track anything.

It utilizes Node.js and WebSockets to communicate between the 'runners', server and viewers.

This project was forked from [Adrianod's Repository](https://github.com/Adrianod/Open-GPS-tracker) and aims:

- Versioning dependencies.
- Remove MySQL stuff.
- Remove GoogleMaps-related visualization.

##Structure

###Tracking app

mobile_app - the tracking app, to be run on a GPS-enabled device. Sends location data on a set interval to the Node.js-server.

###Server

The server recieves the tracking data, sends it to all connected viewers.

###Viewer

The viewer gets data from the server via WebSockets and show them as HTML.

In the *near future* this data will be shown on OpenStreetMaps.

##Instructions

Dependencies:

- NodeJS.

###Installation:
- Edit `mobile_app/app.js` with your socket.io-server.
- Edit `viewer/viewer.js` with your socket.io-server.
- Go to `server/` and run `npm install` to install dependencies.

###Tracking:
1.  Start server with `npm start`.
2.  Send someone for a walk with the mobile_app running.
1.	Browse to `viewer.html` and hopefully you'll see the tracking goodness.
