## Background
There is approximately 133 billion pounds of food waste and 45 trillion gallons of water waste every year along with the land used to grow food and produce meat which contributes to the largest part of global warming. Savor is aimed to solve this problem by generating meal plan for users so that the food waste from grocery shopping is minimized. Savor is trying to generate a personalized meal plan based on user's preference, and than give user recommendation on what to buy and what amount to buy during grocery shopping. With Savor, users can gain sustainability and finantial stability.

## Technical architecture
Database for this project is hosted on firestore. The frontend uses firebase api to fetch data from backend and store them in redux store. Major pages in the frontend includes the dashboard, mealplan page, cooking page, grocery page and user profile page. The dashboard serves as the home page after the user logs in. The mealplan page displays the generated mealplans for the user. The cooking page shows detailed instruction for a certain recipe. The grocery page is the corresponding shopping list for the user's mealplan. In addition, we have a sidebar component for navigation and a searchbar component for looking up recipes. Frontend is deployed on github pages. 

## Set up
To run the React app, you'll need to connect to the project's Firestore. You should have been added as collaborators to the Firebase project by the client.

#### Getting your API keys
1. Navigate to Savor's Firebase console. In the project's settings, go to the General tab and find the "Your Apps" section.

2. Click on "Add App" and the web app option.

3. Give the app a name (probably something like "Savor") and click "Register app".

4. A code block will pop-up-- the keys of interest are in the `firebaseConfig` object. Copy these somewhere or keep the browser tab open as they'll be needed for the next step.

#### Adding the keys to the frontend
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

#### A note about Firebase keys
Per the [Firebase docs](https://firebase.google.com/docs/projects/api-keys), Firebase API keys are not meant to be guarded like regular API keys. Futhermore, the way you would secure them in a production environment is to create [restrictions](https://firebase.google.com/docs/projects/api-keys#apply-restrictions).<br/>
However, because our team is not currently working in a production environment, our security rules are only in test mode and allow all users to read/write the data.
If future teams want to deploy to production, they should ensure that the [security rules](https://firebase.google.com/docs/rules) they have for the Firestore are up to par. Perhaps they could create separate databases for deployment and production as well.

## Running the app
0. Please make sure you have the `.env` file set up correctly and have placed it in the frontend folder before building with Docker! Otherwise, the app will build but when you run it and visit localhost, there will only be a blank page displayed.

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

5. Visit `localhost:5000` in your browser to test the app. Please use Chrome or Firefox because there are some bugs with Safari and IE, as noted in the `Known Bugs & Unimplemented Features` section.

6. Bonus: To delete old Docker containers do<br/>
`docker ps -a`<br/>
Under the NAMES column, find the one you want to remove and do<br/>
`docker rm CONTAINER_NAME_HERE`<br/>
To delete old Docker images do<br/>
`docker images`<br/>
Under the IMAGE ID column, find the one you want to remove and do<br/>
`docker rmi IMAGE_ID_HERE`

## Deployment 
To deploy a newer version of the project, navigate to the frontend directory and run `npm run deploy`, which will build and deploy the code to gh-pages branch.<br/>
The app should be available at https://bu-spark.github.io/se-savor-app/ after deployment.

## Known Bugs & Unimplemented Features
#### General:
* Reloading the page logs the user out
* Currently, our Firestore security rules allow anyone read/write access to the data since we are not deploying and are still in [Test Mode](https://firebase.google.com/docs/rules/basics#default_rules_locked_mode). A malicious user could write lots of records to our "Users" collection because we ask new users to fill out a profile form before they have verified their email and logged-in for the first time. A possible solution would be to ask them to verify their email first, then log-in, then create their profile; if this were the case, we could change our security rules so that only authenticated users have read/write access to the data.
* There's no rate-limiter set up, so a malicious user could keep logging in and out, forcing the app to read lots of recipe data from the database when the dashboard is reloaded and eventually making it so we've reached our Firebase plan's Read quota.
* If an HTTP request to the database fails, Google's Firebase auth module will console log the request URL, which includes the Firebase API key. For example, in the login form we can enter an email/password combo we know doesn't work and in the console the message will be something like: `POST https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=THE_API_KEY 400`<br/>
These keys are not meant to be guarded, as stated in the `A note about Firebase keys` section above, but we're restating it here to make sure we don't get points taken off.
* If a non-logged in user tries to visit a page that requires them to be logged in, it will redirect to the login form, BUT the original page they were trying to visit does display on the screen for <1sec
* Redundancy in code, especially with some component styles. Possible solutions include having common component styles in one file which is imported wherever needed.
* Lots of CSS warnings about unknown properties when using Firefox.
* Unique key props for list items in Dashboard, Meal Plan, and Recommendations not yet implemented; warnings about this will pop-up in the console.
* User profile page (/detail) is not complete but can be visited by logged in users; currently, it just says "Detail"
* Links in main nav bar ("Our Menu", "Plans", "Our Vision") and links in the footer not yet implemented
* Budget, Group Size, and Dietary Restrictions buttons in the orange nav bar redirect to the home page as the client does not yet have wireframes for these pages
#### Sign-up form:
* Birthday date selector doesn't work on Safari or IE, user is able to enter text in this field when using these browsers
* Non-numeric characters can be entered in the phone number field
* Non-alpha characters can be entered in the name fields
* The "get user profile" form only shows up during sign-up process. If a user registered their email but didn't fill out the form, they could still verify their email and log-on to the site. This means that in our Users data collection, we wouldn't have their budget, group size, or dietary restrictions-- which would be necessary for recommending them meals.
* User will be unable to verify account if they do not use the original verification link within the expiration timeframe. Currently, we do not send them a 2nd link and their new account will be locked.
* Single Sign On (SSO) doesn't take you to the next page to the sign up/enter details page or to the dashboard page.
* There's a "Can't perform a React state update on an unmounted component" warning in the console when this page is loaded
#### Log-in form:
* Facebook and Twitter sign-in not yet implemented
* Google sign-in not working anymore
* Forgot password not yet implemented
#### Dashboard page:
* Budget, Group Size, and Dietary Restrictions buttons do not yet allow the user to edit their settings
* Date selector for Meal Plan component shown in wireframe is not yet implemented
#### Meal Plan page:
* Date selector shown in wireframe is not yet implemented
* Edit button on the meal plan page has some display errors, and functionality is not implemented
#### Recommendations page:
* Like and bookmark buttons are not yet implemented, they currently redirect to the home page
#### Sidebar Component:
* The Savor logo on the sidebar cannot redirect to the dashboard page
* Logout on the sidebar is not implemented
#### Cooking Page:
* Cooking page has some display issues, cooking page is cut off by sidebar component
* Cooking page needs to connect to the firestore in order to render dynamically
#### Firebase:
* See `databaseNotes.md` in the top-level directory (should be the same directory this `README` is in)
#### OWASP Zap Security Alerts:
* Application Error Disclosure
* CSP: Wildcard Directive (5)
* X-Frame-Options Header Not Set (2)
* Absence of Anti-CSRF Tokens (24)
* Private IP Disclosure
* Server Leads Information via "X-Powered-By" HTTP Response
* X-Content-Type-Options Header Missing (12)
* Information Disclosure - Suspicious Comments (22)
* Timestamp Disclosure - Unix (85)
