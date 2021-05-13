#!/bin/bash

if [ ! -d ./node_modules ]; then
  npm install
fi

npm start &
nodepid="$!"

trap "echo 'Stopping Node with PID $nodepid'; kill -s TERM $nodepid;" SIGINT SIGTERM
wait $nodepid
