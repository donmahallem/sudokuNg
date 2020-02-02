#!/bin/bash
npm install -g pm2
npm run build:ssr:github
pm2 start ./.github/workflows/pm2.config.js
sleep 5
pm2 ls
sleep 5
mkdir -p ./dist/browser/play
mkdir -p ./dist/browser/solve
curl localhost:4000/play > ./dist/browser/play/index.html
curl localhost:4000/solve > ./dist/browser/solve/index.html
curl localhost:4000/404 > ./dist/browser/404.html
# render index as index2 as it otherwise interferes with rendering
curl localhost:4000 > ./dist/browser/index2.html
pm2 stop all
pm2 delete all
rm ./dist/browser/index.html
mv ./dist/browser/index2.html ./dist/browser/index.html