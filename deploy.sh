#!/bin/sh

if [[ $(git status -s) ]]; then
  echo "***The working directory is dirty. Please commit any pending changes.***"
  exit 1
fi

echo "---------------------------------------------------------------"
echo "Deleting old publication"
gatsby clean
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "---------------------------------------------------------------"
echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public

echo "---------------------------------------------------------------"
echo "Navigate to gh-pages branch"
cd public || exit

echo "---------------------------------------------------------------"
echo "Verify on gh-pages branch"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "gh-pages" ]]; then
  echo '***The public directory is not on gp-pages. Aborting (2)***'
  cd ..
  exit 1
fi

echo "---------------------------------------------------------------"
echo "Pull gh-pages changes"
git branch --set-upstream-to=origin/gh-pages gh-pages
git pull

echo "---------------------------------------------------------------"
echo "Navigate to root branch"
cd ..

echo "---------------------------------------------------------------"
echo "Removing existing files"
rm -rf public/*

echo "---------------------------------------------------------------"
echo "Generating site"
gatsby build

echo "---------------------------------------------------------------"
echo "Generating CNAME file"
cp CNAME public/CNAME

echo "---------------------------------------------------------------"
echo "Navigate to gh-pages branch"
cd public || exit

echo "---------------------------------------------------------------"
echo "Verify on gh-pages branch"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$BRANCH" != "gh-pages" ]]; then
  echo '***The public directory is not on gp-pages. Aborting (2)***'
  cd ..
  exit 1
fi

echo "---------------------------------------------------------------"
echo "Pull gh-pages changes"
git pull

echo "---------------------------------------------------------------"
echo "Updating & pushing gh-pages branch"
git add --all && git commit -m ":rocket: Publishing to gh-pages (deploy.sh)" && git push

echo "---------------------------------------------------------------"
echo "Cleaning up..."
cd ..
gatsby clean
