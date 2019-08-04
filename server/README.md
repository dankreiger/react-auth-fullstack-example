### Prerequisites:

Make sure [mongodb](https://www.mongodb.com/) is installed locally

### Installation

```sh
nvm use
npm install
```

### Getting Started

1. create config/secrets.js file with secret string

   ```js
   // Hold application secrets
   module.exports = {
     secret: 'SOME_SECRET_STRING'
   };
   ```

2. Run dev server

   ```sh
     npm run dev
   ```
