#!/usr/bin/env bash

echo 'Building Project!'

echo 'Clear Cache'
yarn clear:cache

echo 'Building...'
nuxt generate

echo 'Removing README.md'
rm -fR dist/README.md

echo 'Zip'
zip -r application.zip dist -x ".*" -x "__*"
