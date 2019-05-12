FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY . .

ENV CHROME_BIN=/usr/bin/chromium-browser

RUN npm install &&\
  npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
