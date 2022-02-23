FROM node:14.18.2-alpine as ui-builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY  --from=ui-builder /app/build /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENV TZ=America/Sao_Paulo

CMD ["nginx", "-g", "daemon off;"]