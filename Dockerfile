FROM node:14.19.1

WORKDIR /app

COPY package.json yarn.lock ./
