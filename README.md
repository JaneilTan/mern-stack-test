# SETUP FOR FUTURE REFERENCE

- install react + ts using vite. 
- make a client folder + transfer everything to client folder
- cd client + npm i
- make a server folder + cd to server folder + git init + npm i --save express.
- setup express at index.ts -server/src/index.ts
- npm i --save-dev ts-node nodemon @server terminal
- go to server/package.json see the scripts -> "dev"
- try running the server "npm run dev" if you have a typescript error run "npm i --save-dev @types/express"
- npm i mongoose @ server terminal and import it @ index.ts
- add this line const db = await mongoose.connect('insert mongoDB cluster link here') and change the password.
- make models folder inside src and make a file.ts e.g. Deck.ts
- follow the code in Deck.ts and "npm i --save-dev @types/mongoose"
- follow index.ts

## Security

- npm i dotenv --save
- make .env file in server folder and transfer the url in mongoose to your .env to protect it
- import dotenv in index.ts