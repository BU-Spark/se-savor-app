# Savor

## Problem Statement

## Installation
1. Install Docker on your machine. See https://docs.docker.com/get-docker/ for help. If you're on macOS and have Homebrew installed you can do `brew install --cask docker`. You have to open up the desktop app before you can use the `docker` command in your shell.

2. In your shell, navigate to the frontend folder.

3. To build the container image, do `docker build -t savor .`. To verify it was created, use `docker image ls`.

4. To run the container, do `docker run -p 5000:5000 savor`. This forwards requests made to `localhost:5000` to port 5000 of the container.

## Known Bugs