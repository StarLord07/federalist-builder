FROM node:14.21.2

WORKDIR /app

COPY package.json yarn.lock ./
