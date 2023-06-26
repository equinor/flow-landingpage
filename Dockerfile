FROM node:18-alpine3.17 as builder

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.23-alpine
WORKDIR /app
COPY --from=builder /app/dist .
COPY proxy/server.conf /default.conf
COPY proxy/run_nginx.sh run_nginx.sh
USER 0
RUN chown -R nginx /etc/nginx/conf.d \
    && chown -R nginx /app \
    && chmod +x run_nginx.sh
USER 101
CMD /bin/sh -c ". run_nginx.sh"
