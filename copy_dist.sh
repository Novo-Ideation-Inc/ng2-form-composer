#!/usr/bin/env bash

rm -rf dist

cd src
find . -name "*.d.ts" -exec rsync -R {} ../dist/ \;
find . -name "*.js" -exec rsync -R {} ../dist/ \;

rm ../dist/*.spec.*
rm ../dist/tests.*