# Stage 1: Build the React application
FROM node:18-slim AS build

WORKDIR /app

# Copy package.json, yarn.lock, and .yarnrc.yml for yarn 3
COPY package.json package-lock.json index.js ./

# Install dependencies with Yarn 3
RUN npm install

# Make port 5000 available to the world outside this container
EXPOSE 4000

# Serve the app
CMD ["node", "index.js"]
