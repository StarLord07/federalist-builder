FROM node:14.19.0

WORKDIR /app

COPY package.json yarn.lock ./
