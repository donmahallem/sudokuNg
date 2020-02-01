#!/bin/bash
npm install -g pm2
npm run build:ssr
pm2 start ./dist/server/main.js --no-autorestart
sleep 5
pm2 ls
sleep 5
curl localhost:4000 > ./dist/browser/405.html
pm2 stop all
pm2 delete all