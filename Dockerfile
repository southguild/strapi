# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Strapi application
RUN npm run build

# Expose the Strapi default port
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "start"]
