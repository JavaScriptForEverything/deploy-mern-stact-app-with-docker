# Simple backend for Docker deploy

###### Directory Structure

```
├── index.js
├── models
│ ├── database.js
│ └── userModel.js
│
├── controllers
│ └── userController.js
│
├── routes
│ └── userRoute.js
│
├── util
│ └── index.js
│
├── README.md
├── .gitignore
├── package.json
└── yarn.lock

```


###### Routes

	. ***GET*** 		/api/users
	. ***POST***		/api/users 		{ name: 'user name', email: 'validEmail@.com' }
	. ***DELETE*** 		/api/users/:id


###### Packages and Commands

	. express
	. mongoose
	. validator

	. $ yarn dev 		: $ nodemon index.js
	. $ yarn start 		: $ node index.js
	. $ node index.js 	:

