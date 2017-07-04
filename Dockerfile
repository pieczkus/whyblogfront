FROM nginx:1.13-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/pieczki-nginx.conf /etc/nginx/conf.d/

COPY dist/prod /usr/share/nginx/html/prod
