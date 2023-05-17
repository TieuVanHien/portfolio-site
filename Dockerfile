# Use an official Node.js 18 runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the desired port (change it to match your Next.js app's port)
EXPOSE 3000

# Transpile and start the Next.js app
CMD ["npm", "run"]
