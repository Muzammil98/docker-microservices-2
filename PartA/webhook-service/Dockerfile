FROM node:19.7.0-slim as base

WORKDIR /app

COPY /lib ./lib

RUN cd ./lib && npm install --omit=dev && cd ..

COPY package* .

RUN npm install --omit=dev

COPY . .

EXPOSE 5005

CMD ["npm","start"]
