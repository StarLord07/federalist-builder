FROM node:14.15

WORKDIR /app

COPY package.json yarn.lock ./
