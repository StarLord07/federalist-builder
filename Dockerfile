FROM node:14.18.2

WORKDIR /app

COPY package.json yarn.lock ./
