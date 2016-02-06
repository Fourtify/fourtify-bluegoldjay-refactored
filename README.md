# robo_betty_alpha [![Build Status](https://travis-ci.org/bluejay112/robo_betty_alpha.svg?branch=development)](https://travis-ci.org/bluejay112/robo_betty_alpha)

# Update 1/27/16 for CSE112 Winter 2016 Students
Use https://cse112bluejay.herokuapp.com/ to access last years version of the app. Happy Refactoring!

# Pre-configuration (skip this if you already have node, npm, gulp, bower, foreman)
1. Download and install NodeJs: https://nodejs.org/en/download/ A good way to check is type in `node -v` to see the version you have.
2. `npm install -g gulp bower foreman`

# Instructions in 10 easy steps for lazy people (like Carl)
1. Delete your current project folder, and everything in it.
2. Navigate to your desired folder, and create a new folder for this project (i.e. fourtify-base)
3. cd into the folder: `cd fourtify-base`
4. Clone the repo into this folder: `git clone https://github.com/Fourtify/fourtify-base.git .`
5. `npm install` or `sudo npm install`
6. `bower install`
7. Make a file called ".env" -- `vim .env`
8. Paste the following content:
```

EXPRESS_SECRET=FOURTIFY
NODE_ENV=development
PORT=3001
NODE_TLS_REJECT_UNAUTHORIZED=0

```
9. `gulp build:dev`
10. `nf start web`


# How to install
1. `npm install -g gulp bower foreman`
2. make sure you are in the robo_betty_alpha repo dir
3. `npm install`
4. If npm install fails, try to remove the `node_modules` dir and `client/bower_components` dir


# You will need a .env file. Ask team leads about this
1. the .env file will go in the root directory of the app
2. it will be used to store server configurations
3. __This .env file should never be pushed to github__

# How to run frontend portion only
1. `gulp frontend`

This will launch a server that will host your angular app.
This server will solely serve your angular files. This will not run our backend.
This server will also be updated when you changed one of the source files.

# How to run backend portion only
1. `gulp backend`

This will only start up the backend. You can use this to quickly test API
routes.

# How To run entire app with our backend
1. `gulp build:dev`
2. `nf start web`

# If you want to run our backend while watching for changes to the frontend
1. Run our entire app with our backend with the steps above
2. In a separate terminal run `gulp frontend:combined`
