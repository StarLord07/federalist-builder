FROM node:14.19

WORKDIR /app

COPY package.json yarn.lock ./
