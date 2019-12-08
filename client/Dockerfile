FROM node:12

WORKDIR /app

COPY . .

RUN yarn install
RUN ./node_modules/.bin/quasar build -m ssr

WORKDIR /app/dist/ssr

EXPOSE 3000
CMD [ "yarn", "run", "start"]