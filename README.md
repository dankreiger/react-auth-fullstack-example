### Prerequisites

- make sure [mongodb](https://www.mongodb.com/) is installed locally
- node v12.7.0
- create server/config/secrets.js file with secret string
  ```js
  // Hold application secrets
  module.exports = {
    secret: 'SOME_SECRET_STRING'
  };
  ```

### Getting started

- use correct node version and install global dependencies

  ```sh
  nvm use
  npm install
  ```

- install dependencies for client and server

  ```sh
  npm run dev:install
  ```

- start client and server

  ```sh
  npm run dev
  ```
