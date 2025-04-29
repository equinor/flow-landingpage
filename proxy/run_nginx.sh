#!/bin/bash

envsubst '
${APIM_SUB_KEY}
${API_BASE_URL}
${EPN_URI}
${FLX_URI}
${PROJECTS_URI}
${SCM_URI}
${WOPREP_URI}
${M5LCI_URI}
${MSL_URI}
${EPF_URI}
${BL_URI}
${PLANSHUT_URI}
' </default.conf > /etc/nginx/conf.d/tmp.conf

mv /etc/nginx/conf.d/tmp.conf /etc/nginx/conf.d/default.conf

cat /etc/nginx/conf.d/default.conf
echo $(date) Starting Nginx...
nginx -g "daemon off;"