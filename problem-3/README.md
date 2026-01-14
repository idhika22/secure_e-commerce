# React App

This is a React application that can be run locally for development, tested with unit tests, built for production, or run inside Docker.

---

## 🚀 Development

Start the app in development mode with hot reload:

npm run dev

The app will be available at http://localhost:5173
 (default Vite port).

 ## 🧪 Testing

Run unit tests with:

npm run test

## 📦 Production Build

Build the app:

npm run build


## Preview the production build locally:

serve -s dist


This will serve the optimized production build from the dist/ folder.

## 🐳 Running with Docker

You can also run the app inside a Docker container.

Option 1: Using the helper script
./start-frontend.sh


This will build and start the container, and the app will run on http://localhost:3000
.

Option 2: Manual Docker commands

Build the Docker image:

docker build -t react-app .


Run the container:

docker run -p 3000:80 react-app


The app will be accessible at http://localhost:3000

## Note: Testing lighthouse score 

To test lighthouse score please run in docker 
Go to docker-compose folder
then run ./start-frontend.sh

The app will be accessible at http://localhost:3000