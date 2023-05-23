# syntax=docker/dockerfile:1
   
FROM node:18-alpine
#lưu trong thư mục này
WORKDIR /coffuel/backend
#copy file package và package-lock
COPY package*.json ./

RUN npm install

RUN npm install --production

COPY . .

CMD ["node", "src/server.js"]