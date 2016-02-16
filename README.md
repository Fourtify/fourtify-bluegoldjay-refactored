# fourtify-visitors [![Build Status](https://travis-ci.org/bluejay112/robo_betty_alpha.svg?branch=development)](https://travis-ci.org/bluejay112/robo_betty_alpha)

## Update 2/15/16
# Pre-configuration (skip this if you already have node, npm, gulp, bower, foreman)
1. Download and install NodeJs: https://nodejs.org/en/download/ A good way to check is type in `node -v` to see the version you have.
2. `npm install -g gulp bower foreman`

# Instructions
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
9.5 `gulp`
9. `npm start`
