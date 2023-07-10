# Stage 1: Build the React application
FROM node:18-slim AS build

WORKDIR /app

# Install Yarn
# RUN npm install -g yarn
RUN corepack enable
RUN corepack prepare yarn@3.5.0 --activate
RUN yarn set version 3.5.0
RUN yarn plugin import interactive-tools

# Copy package.json, yarn.lock, and .yarnrc.yml for yarn 3
COPY package.json yarn.lock .yarnrc.yml .yarn ./

# Install dependencies with Yarn 3
RUN yarn install

# Copy the current directory contents into the container at /app
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the app using the serve package
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Install Yarn and the serve package
RUN npm install -g serve

# Install Yarn
# RUN npm install -g yarn
RUN corepack enable
RUN corepack prepare yarn@3.5.0 --activate
RUN yarn set version 3.5.0
RUN yarn plugin import interactive-tools

# Copy the build directory from the previous stage
COPY --from=build /app/dist /app

# Make port 5000 available to the world outside this container
EXPOSE 7000

# Serve the app
CMD ["serve", "-s", "/app", "-l", "7000"]
