##########################################
# Etapa 1 - Build
##########################################

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


##########################################
# Etapa 2 - Producción
##########################################

FROM nginx:1.28-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
COPY security-headers.conf /etc/nginx/security-headers.conf

COPY --from=builder /app/dist /usr/share/nginx/html

RUN mkdir -p /tmp/nginx \
  && chown -R nginx:nginx /tmp/nginx \
  && chown -R nginx:nginx /usr/share/nginx/html \
  && chown -R nginx:nginx /var/cache/nginx

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]