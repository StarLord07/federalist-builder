FROM node:14

WORKDIR /app

COPY package.json yarn.lock ./
