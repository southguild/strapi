# Use Node.js 20 as the base image
FROM node:20-alpine AS build

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if available)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of your app's source code
COPY . .

# Build your Strapi application
RUN pnpm run build

# Create a new stage for the runtime
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy built assets from the build stage
COPY --from=build /app .

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose the port Strapi runs on
EXPOSE 1337

# Start Strapi
CMD ["pnpm", "start"]