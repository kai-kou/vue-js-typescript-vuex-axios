FROM node:10.8.0-stretch

RUN npm install --global @vue/cli
RUN npm install -g drakov

WORKDIR /projects