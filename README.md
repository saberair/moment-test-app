- to run the app with dev mode you may rename the file .torename to .env.development
and put your moviedbservice apiKey to  REACT_APP_API_KEY env variable.

- you may execute the command "npm install" the first time when you run the app 

- you may execute the command "npm run start:dev" to test

Thank you in advance
Saber CHAABANE

// DOCKER Mode
docker build -t react-app .
docker run -p 80:3000 --env REACT_APP_API_KEY=<your_Api_Key> -it  react-app