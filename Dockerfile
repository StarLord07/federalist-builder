FROM node:14.17

WORKDIR /app

COPY package.json yarn.lock ./
