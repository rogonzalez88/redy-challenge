# Use a base image with NodeJS 22
FROM node:22-alpine

# Install all the dependencies in the container using the package.json file
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm ci

# Expose the application port
EXPOSE 8080

# Run the App
CMD npm run dev
