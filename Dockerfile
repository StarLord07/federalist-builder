FROM node:14.21.1

WORKDIR /app

COPY package.json yarn.lock ./
