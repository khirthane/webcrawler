FROM node:13.12.0-alpine
RUN mkdir -p /usr/src/app

WORKDIR '/usr/src/app'

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
RUN npm install

COPY package.json ./
COPY package-lock.json ./

COPY . /usr/src/app

# start app
CMD ["npm", "start"]
