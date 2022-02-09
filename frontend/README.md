# Simple Frontend (with CRUD in Database) for Docker deploy

###### Directory Structure

```
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
│
├── src
│ ├── app.js
│ ├── index.js
│ │
│ ├── components
│ │ └── home
│ │     ├── addUser.js
│ │     ├── list.js
│ │     └── showUsers.js
│ │
│ ├── layout
│ │ ├── index.js
│ │ └── snackbarAlert.js
│ │
│ ├── store
│ │ ├── index.js
│ │ ├── layoutReducer.js
│ │ └── userReducer.js
│ │
│ └── util
│     └── index.js
│
├── README.md
├── .gitignore
├── package.json
└── yarn.lock

```

###### Routes

	. ***GET*** 		/api/users
	. ***POST***		/api/users 		: { name: 'user name', email: 'validEmail@.com' }
	. ***DELETE*** 		/api/users/:id


###### Packages and Commands

	. @mui/material @mui/icons-material @emotion/react @emotion/styled
	. @reduxjs/toolkit react-redux
	. axios validator

	. $ yarn start 		: $ node index.js


