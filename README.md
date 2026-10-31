![](https://github.com/kernelcurry/kernelcurry-site/workflows/Pages/badge.svg)
---

## Overview 

This repository contains the code for https://kernelcurry.com.  

## Local development

```sh
brew install hugo
cd kernelcurry.com
hugo server -D
```

The site is served at http://localhost:1313/ with live reload. The `public/` output directory is git-ignored.

## Deployment

The `Pages` workflow in `.github/workflows/pages.yml` builds the site on every push and pull request. On a push to `master` it also uploads the built site as a Pages artifact and deploys it with GitHub's `actions/deploy-pages`. No branch is written to and no deploy key is used.

The repository's **Settings → Pages → Source** must be set to **GitHub Actions** (not "Deploy from a branch"). The custom domain `kernelcurry.com` is configured there and mirrored in `kernelcurry.com/static/CNAME`.

### Supply-chain hygiene

- Only GitHub-owned actions (`actions/*`) are used, each pinned to a full commit SHA with the version tag in a comment.
- Hugo is downloaded from the official GitHub release and verified against a SHA256 pinned in the workflow before it is installed.
- `.github/dependabot.yml` opens a monthly PR when a pinned action has a new release.

### Upgrading Hugo

Pick a version from https://github.com/gohugoio/hugo/releases, copy the `hugo_<version>_linux-amd64.deb` line from that release's `hugo_<version>_checksums.txt`, and update both `HUGO_VERSION` and `HUGO_SHA256` in `pages.yml`.
