# Savor

## Problem Statement

## Set up
To run the React app, you'll need to connect to the project's Firestore. You should have been added as collaborators to the Firebase project by the client.

### Getting your API keys
1. Navigate to Savor's Firebase console. In the project's settings, go to the General tab and find the "Your Apps" section.

2. Click on "Add App" and the web app option.

3. Give the app a name (probably something like "Savor") and click "Register app".

4. A code block will pop-up-- the keys of interest are in the `firebaseConfig` object. Copy these somewhere or keep the browser tab open as they'll be needed for the next step.

### Adding the keys to the frontend
1. Create a `.env` file in the frontend folder. It should have these variables:<br/>
`REACT_APP_FIREBASE_API_KEY=""`<br/>
`REACT_APP_FIREBASE_AUTH_DOMAIN=""`<br/>
`REACT_APP_FIREBASE_PROJECT_ID=""`<br/>
`REACT_APP_FIREBASE_STORAGE_BUCKET=""`<br/>
`REACT_APP_FIREBASE_MESSAGING_SENDER_ID=""`<br/>
`REACT_APP_FIREBASE_APP_ID=""`<br/>
`REACT_APP_FIREBASE_MEASUREMENT_ID=""`<br/>

2. Place the keys from the `firebaseConfig` object in the corresponding environment variables, eg:<br/>
`REACT_APP_FIREBASE_API_KEY="value of the apiKey field in firebaseConfig"`<br/>

## Running the app
1. Install Docker on your machine. See [Get Docker](https://docs.docker.com/get-docker/) for help. If you're on macOS and have [Homebrew](https://brew.sh/) installed you can do<br/>
`brew install --cask docker`<br/>
You have to open up the desktop app before you can use the `docker` command in your shell.

2. In your shell, navigate to the frontend folder.

3. To build the container image, do<br/>
`docker build -t savor .`<br/>
To verify it was created, use<br/>
`docker image ls`

4. To run the container, do<br/>
`docker run -p 5000:5000 savor`<br/>
This forwards requests made to `localhost:5000` to port 5000 of the container.

5. Bonus: To delete old Docker containers do<br/>
`docker ps -a`<br/>
Under the NAMES column, find the one you want to remove and do<br/>
`docker rm CONTAINER_NAME_HERE`<br/>
To delete old Docker images do<br/>
`docker images`<br/>
Under the IMAGE ID column, find the one you want to remove and do<br/>
`docker rmi IMAGE_ID_HERE`

## Known Bugs