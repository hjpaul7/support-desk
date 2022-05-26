# Support Desk App

A simple MERN stack Support Desk app with authentication, ability to view/create/close tickets and leave notes.

Built with:

- React
- Express
- MongoDB
- Redux Toolkit
- JWT

## **How to steup**

- Create your database and collection (tickets or users) in MongoDB

```bash
git clone https://github.com/hustin-paul/support-desk.git

# backend
cd support-desk/backend
npm install

# frontend
cd support-desk/frontend
npm install
```

Once project dependencies are installed create a .env file in the root backend directory and add the following variables and their values:

```bash
NODE_ENV
PORT
MONGO_URI
JWT_SECRET
```

> Note: The frontend uses a proxy for the backend api of port 3001. Make sure your server port in your .env file matches the proxy in **_vite.config.js_**

## **Running**

```bash
# backend
npm start

# frontend
npm run dev
```
