# syntax=docker/dockerfile:1
FROM node:16.10.0

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
# RUN npm install && npm audit fix

COPY . .

RUN npm run-script build

# RUN npm test 

CMD npm start --production




