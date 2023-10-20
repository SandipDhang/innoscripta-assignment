# node version
FROM node:18.15.0-alpine3.17 as builder

# Create app directory inside docker container
WORKDIR /app

# Copy required files
COPY . /app

# Install Dependencies (only production dependencies)
RUN npm install --omit=dev

# Compile projects
RUN npm run build

# Expose a port (usually 80) that the app will run on
EXPOSE 8080

# Define the command to start your app
CMD ["npm", "start"]