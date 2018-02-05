## putts.io-client
React & Redux app that is going to be a Progressive Web App at some point of it's lifecycle. And for now it's "mobile only"-app. We'll see if we need to refactor it to be more responsive ie. tablet, desktop, etc. Trust me. It's not pretty in desktop or tablet :-)

### development
Basic stuff. `git clone`, `yarn install`, etc.

We use [json-server](https://github.com/typicode/json-server) as a development server. Data is in `dev-server`-folder. And for the port `3090`. So the command to run server is `json-server db.json --port 3090` in the `dev-server`-folder.

### usage
At the moment `Login`-button will send an action that will write JWT-token to localstorage and let the user in.

Useful links for development:
* [React FontAwesome](https://github.com/FortAwesome/react-fontawesome)
* [Create React App -guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
* [https://material-ui-next.com/](https://material-ui-next.com/)
