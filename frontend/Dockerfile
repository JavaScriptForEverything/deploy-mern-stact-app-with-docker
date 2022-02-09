# Stage-1: Build-Stage
FROM node:16.13.2-alpine3.15 AS build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build


# Stage-1: Production-Stage
FROM nginx:1.21.6-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

