FROM node:22
# Based on Node image 22

ENV PORT=3030
# 

WORKDIR /usr/src/app
# Working directory - folder in Linux, in which the app is hosted
COPY . .
# Copy all files from current folder to working directory
EXPOSE 3030
# Define a port to be opened from the Docker container
CMD ["node","index.js"]
