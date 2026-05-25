#!/usr/bin/env bash

set -euxo pipefail

jekyll build

ts=$(date +%Y%M%D-%H%M%S)

pushd _site
# For some reason, jekyll wants to remove our CNAME file
# TODO: configure jekyll to leave it alone?
git checkout -- CNAME
git add .
git commit -m "Publish $ts"
popd

git add .
git commit -m "Update $ts"
