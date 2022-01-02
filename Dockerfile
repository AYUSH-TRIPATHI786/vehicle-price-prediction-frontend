FROM node:12.14.0 as builder
WORKDIR /app

RUN export NODE_OPTIONS=--max-old-space-size=8192
COPY package.json .
RUN npm install

COPY . . 
RUN npm run build

# CMD [ "npm","run","start" ]
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html