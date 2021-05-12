#!/bin/bash

if [ ! -d ./node_modules ]; then
  npm install
fi

npm run serve &
nodepid="$!"

trap "echo 'Stopping Node with PID $nodepid'; kill -s TERM $nodepid;" SIGINT SIGTERM
wait $nodepid
