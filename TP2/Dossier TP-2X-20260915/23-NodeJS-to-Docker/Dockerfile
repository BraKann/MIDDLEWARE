FROM node:15

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY main-dice-roller.js .

EXPOSE 3000

CMD [ "node", "main-dice-roller.js" ]
