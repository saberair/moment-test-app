#simple docker file
# assumes located in the same folder as the application itself

# start with node  base image
FROM node:13.11.0

#Install git
RUN apt-get update && \
     apt-get install -y git

# Create an app directory (in the Docker container)
RUN mkdir -p /usr/apps/moment-test-app
RUN git clone https://github.com/saberair/moment-test-app.git /usr/apps/moment-test-app/

WORKDIR /usr/apps/moment-test-app

# install dependencies
RUN npm install

# expose it from Docker container
EXPOSE 3000

# Finally start the container command
CMD ["npm", "start"]