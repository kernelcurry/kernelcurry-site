#!/bin/sh

if [[ $(git status -s) ]]
then
    echo "***The working directory is dirty. Please commit any pending changes.***"
    exit 1;
fi

echo "---------------------------------------------------------------"
echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "---------------------------------------------------------------"
echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public

echo "---------------------------------------------------------------"
echo "Removing existing files"
rm -rf public/*

echo "---------------------------------------------------------------"
echo "Generating site"
hugo

echo "---------------------------------------------------------------"
echo "Generating CNAME file"
cp CNAME public/CNAME

echo "---------------------------------------------------------------"
echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)" && git push && cd ..