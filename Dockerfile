FROM node:14.20.0

WORKDIR /app

COPY package.json yarn.lock ./
