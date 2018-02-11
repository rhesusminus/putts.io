FROM node:8.9.4-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3090
CMD ["npm", "run", "serve"]
