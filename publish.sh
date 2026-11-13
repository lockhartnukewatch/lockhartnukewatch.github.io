#!/usr/bin/env bash

set -euxo pipefail

npm install
npm run build

ts=$(date +%Y%M%D-%H%M%S)

# Copy build output into the _site submodule (working tree of the gh-pages
# branch). CNAME and robots.txt live in public/, so they're already in
# dist/ — the old "jekyll removes CNAME" checkout workaround is gone.
# (--exclude .git keeps the submodule's own git repo intact with --delete.)
rsync -a --delete --exclude .git dist/ _site/

pushd _site
git add .
git commit -m "Publish $ts"
git push origin HEAD:gh-pages
popd

# Update the submodule pointer in the source repo.
git add .
git commit -m "Update $ts"
