# Stage-1: Build-Stage
FROM node:16.13.2-alpine3.15
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
ENV DB_LOCAL_URL=mongodb://localhost:27017/mern-stack
ENV PORT=5000
EXPOSE 5000
ENTRYPOINT ["yarn", "start"]



