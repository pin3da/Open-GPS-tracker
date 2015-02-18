Open GPS-tracker
========

Open GPS-tracker is a GPS-tracking-thing written in JavaScript. It is primarily built for tracking running events, but may be modified to track anything.

It utilizes Node.js and WebSockets to communicate between the 'runners', 'server' and 'viewers.'

This project was forked from [Adrianod's Repository](https://github.com/Adrianod/Open-GPS-tracker) and aims:

- Versioning dependencies.
- Remove MySQL stuff.
- Remove GoogleMaps-related visualization.
- Add OpenStreetMaps visualization.

##Structure

###Tracking app

mobile_app - the tracking app, to be run on a GPS-enabled device. Sends location data on a set interval to the Node.js-server.

###Server

The server recieves the tracking data, sends it to all connected viewers.

###Viewer

The viewer gets data from the server via WebSockets and show them in the Map (provided by Open Street Maps).

##Instructions

Dependencies:

- NodeJS.

###Installation and running:

    npm install
    npm start
