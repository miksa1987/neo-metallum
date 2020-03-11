FROM node:lts

RUN mkdir -p /app/frontend
WORKDIR /app/frontend

COPY ./ /app/frontend
RUN npm install