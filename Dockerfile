
FROM node:latest AS builder
WORKDIR /image-dock
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /image-dock/dist/image-dock/ /usr/share/nginx/html
