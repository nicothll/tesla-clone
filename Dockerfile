FROM node:18.12.0-alpine3.16
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY [ "package.json", "yarn.lock", "./" ]
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn" , "start" ]
