FROM node:14.21.3

WORKDIR /app

COPY package.json yarn.lock ./
