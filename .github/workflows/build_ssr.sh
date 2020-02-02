#!/bin/bash
npm install -g pm2
npm run build:ssr:github
pm2 start ./.github/workflows/pm2.config.js
sleep 5
pm2 ls
sleep 5
curl localhost:4000 > ./dist/browser/index.html
curl localhost:4000 > ./dist/browser/solve.html
curl localhost:4000 > ./dist/browser/404.html
pm2 stop all
pm2 delete all