## Service-People-Also-Bought: Readme
> Relational data according to the current item.
 > Project description	It shows the list of stocks. The stocks are the ones that people who have the current stock also bought.
 ## Related Projects	
   - https://github.com/teamName/repo	### Repo Instructions
  - https://github.com/teamName/repo	
  - https://github.com/teamName/repo	
  - https://github.com/teamName/repo	
 ## Table of Contents	* npm install
* npm start (port 3006)
* npm run react-dev (build Webpack)
* npm run db:setup (seeding the fake data)
 1. [Usage](#Usage)	### API Routes
1. [Requirements](#requirements)	
1. [Development](#development)	
 ## Usage	#### stocks
 > Some usage instructions	|     Method    |          Endpoint          |                     Description          |
| ------------- | -------------------------  | -----------------------------------------|
|      Get      | /api/stocks/:stockIdentifier | get a specific stock listing's details    |
|      Post     |        /api/stocks         | add a stock listing                       |
|      Put      | /api/stocks/:stockIdentifier | replace a stock listing's details         |
|     Patch     | /api/stocks/:stockIdentifier | update a stock listing's details          |
|     Delete    | /api/stocks/:stockIdentifier | delete a stock listing's details          |
 ## Requirements	#### users
 An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).	|     Method    |          Endpoint          |                     Description          |
| ------------- | -------------------------  | -----------------------------------------|
|      Get      | /api/users/:userIdentifier | get a specific user listing's details    |
|      Post     |        /api/users         | add a user listing                       |
|      Put      | /api/users/:userIdentifier | replace a user listing's details         |
|     Patch     | /api/users/:userIdentifier | update a user listing's details          |
|     Delete    | /api/users/:userIdentifier | delete a user listing's details          |
 - Node 6.13.0	#### purchases (buy / sell)
- etc	| Method | Endpoint | Description |
| - | - | - |
| Get | /api/purchases/ | get all purchases listing |
| Get | /api/purchases/:purchasesIdentifier | get a specific purchase listing's details |
| Get | /api/purchases/users/:userIdentifier | get a specific user's purchase listing's details  |
| Get | /api/purchases/stocks/:stockIdentifier | get a specific stock's trading listing's details |
| Get | /api/purchases/users/:userIdentifier/stocks/:stockIdentifier | get a specific user's purchases of specific stock listing's details |
| Post | /api/purchases | add a purchase listing |
 ## Development	
 ### Installing Dependencies	#### people also bought
| Method | Endpoint | Description |
| - | - | - |
| Get | /api/people-also-bought/:stockIdentifier | get what stocks people also bought who bought the current stock
