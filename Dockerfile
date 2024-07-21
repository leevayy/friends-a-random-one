FROM node:22-alpine
WORKDIR /usr/local/app

COPY . .
RUN npm install

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
