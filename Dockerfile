FROM node:14.21.0

WORKDIR /app

COPY package.json yarn.lock ./
