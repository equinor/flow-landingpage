FROM node:17.5.0-alpine as frontend-builder

WORKDIR /app
COPY . .
RUN yarn
RUN ls
RUN yarn build

FROM nginxinc/nginx-unprivileged:1-alpine

WORKDIR /app
COPY --from=frontend-builder /app/dist ./www

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8001