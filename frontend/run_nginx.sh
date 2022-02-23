#!/bin/bash

envsubst '
${APIM_SUB_KEY}
' </default.conf > /etc/nginx/conf.d/tmp.conf

mv /etc/nginx/conf.d/tmp.conf /etc/nginx/conf.d/default.conf

cat /etc/nginx/conf.d/default.conf
echo $(date) Starting Nginx...
nginx -g "daemon off;"