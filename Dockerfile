# Use nginx image
FROM nginx:alpine

# Copy only the necessary files to nginx html directory
COPY docs/ /usr/share/nginx/html/

# Expose port 80 (nginx default port)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]