# Step 1: Base Image
FROM node:20

# Step 2: Set Working Directory
WORKDIR /app

# Step 3: Copy Files
COPY . .

# Step 4: Install Dependencies
RUN npm install

# Step 5: Build Application
RUN npm run build

# Step 6: Install a simple HTTP server for serving static files
RUN npm install -g http-server

# Expose port 8080 to the outside once the container has launched
EXPOSE 8080

# Serve the static files from the build directory
CMD ["http-server", "dist"]