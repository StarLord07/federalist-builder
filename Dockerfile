FROM node:14.19.3

WORKDIR /app

COPY package.json yarn.lock ./
