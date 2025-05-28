# LevichAssignement

Postman Collection - https://api.postman.com/collections/25710761-fc2df1d1-fbfd-4adf-a0cf-980044e6ec5b?access_key=PMAT-01JWAM4VX3VAW2RCJMFJ3JSK3V

Installation 

Clone the repository:
1. git clone https://github.com/RiteshParouha/LevichAssignement.git

2. cd LevichAssignement

3. Install dependencies: npm install

Environment Variables

1. Create a .env file in the root directory and add the following:

   PORT=5000,
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.irty6.mongodb.net/user?retryWrites=true&w=majority,
   JWT_ACCESS_SECRET=your_jwt_secret,
   JWT_REFRESH_SECRET=your_jwt_secret

Running the App

1. Start the server with:
2. npm start
3. Your API will run at:
   http://localhost:5000

API Documentation

1. Full API collection is available in Postman:
   Link: https://api.postman.com/collections/25710761-fc2df1d1-fbfd-4adf-a0cf-980044e6ec5b?access_key=PMAT-01JWAM4VX3VAW2RCJMFJ3JSK3V
2. For protected routes, include the JWT token in the Authorization header as:
Bearer <your_token>

Test Credentials:

1. email - test@gmail.com
2. password - 1234

Note :- On expiration of JWT token it can be refreshed by using Get(/v1/auth/refreshToken) and pass the refesh token as Bearer token.
