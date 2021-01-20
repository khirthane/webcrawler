FROM node:13.12.0-alpine
RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR '/usr/src/app'

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]
