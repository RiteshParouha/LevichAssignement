# LevichAssignement

Postman Collection - https://api.postman.com/collections/25710761-fc2df1d1-fbfd-4adf-a0cf-980044e6ec5b?access_key=PMAT-01JWAM4VX3VAW2RCJMFJ3JSK3V

Installation 
Clone the repository:
git clone https://github.com/RiteshParouha/LevichAssignement.git
cd LevichAssignement
Install dependencies: npm install

Environment Variables
Create a .env file in the root directory and add the following:
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.irty6.mongodb.net/user?retryWrites=true&w=majority
JWT_ACCESS_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_secret

Running the App
Start the server with:
npm start
Your API will run at:
http://localhost:5000

API Documentation
Full API collection is available in Postman:
Link: https://api.postman.com/collections/25710761-fc2df1d1-fbfd-4adf-a0cf-980044e6ec5b?access_key=PMAT-01JWAM4VX3VAW2RCJMFJ3JSK3V

For protected routes, include the JWT token in the Authorization header as:
Bearer <your_token>

Test Credentials:
email - test@gmail.com
password - 1234

Note :- On expiration of JWT token it can be refreshed by using Get(/v1/auth/refreshToken) and pass the refesh token as Bearer token.
