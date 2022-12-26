# this is for building a dev image

# base image
FROM node:12.2.0

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# argument for angular version
ARG ANGULAR_VERSION=9.0.7

# set working directory
WORKDIR /app

# add node modules to the path
ENV PATH /app/node_modules/.bin:$PATH

# install and cache dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@${ANGULAR_VERSION:-9.0.7}

COPY . /app
CMD ng serve --host 0.0.0.0
