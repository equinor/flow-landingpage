FROM node:17.5.0-alpine as frontend-builders

WORKDIR /app
COPY . .
RUN yarn
RUN ls
RUN yarn build
