# Use Node.js 20 as the base image
FROM node:18-alpine

# Install a specific version of npm known to work well with Strapi 4.23.1
RUN npm install -g npm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./

# install depenedencies
RUN npm install && npm cache clean -f

# Copy the rest of your app's source code
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose the port Strapi runs on
EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]