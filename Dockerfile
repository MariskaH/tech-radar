# Use an official Node.js runtime as a base image
FROM nginx

# Expose a port (assuming your app is running on port 3000)
EXPOSE 80

COPY . /usr/share/nginx/html


# Command to run your Node.js application
CMD ["npm", "start"]
