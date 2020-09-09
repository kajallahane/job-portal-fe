## To run this project locally follow below stpes

In the project directory, you can run:

### `npm install`
Installs all dependencies

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment 

Heroku is being used for this application to run in remote server.
Added on static.json to run static buildpack from heroku.

Heroku Url : https://job-portal-kajal.herokuapp.com/

## Folder Structure
src > pages --> Has all components which maps to all routes
src > server --> Has api related information

If backend server is also running locally 
Change APP_BASE_URL in src/server/EndPoint.js
