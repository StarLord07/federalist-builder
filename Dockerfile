FROM node:14.18.3

WORKDIR /app

COPY package.json yarn.lock ./
