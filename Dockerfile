# Use Node.js 20 as the base image
FROM node:20-alpine AS build

# Install a specific version of npm known to work well with Strapi 4.23.1
RUN npm install -g npm@8.19.4

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Build your Strapi application
RUN npm run build

# Create a new stage for the runtime
FROM node:20-alpine

# Install the same specific version of npm
RUN npm install -g npm@8.19.4

# Set the working directory
WORKDIR /app

# Copy built assets from the build stage
COPY --from=build /app .

# Install only production dependencies
RUN npm install --production --legacy-peer-deps

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose the port Strapi runs on
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]