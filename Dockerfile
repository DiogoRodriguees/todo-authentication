FROM node:lts-alpine

EXPOSE 3000

CMD node /usr/src/dist/Main

COPY node_modules /usr/src/node_modules
COPY dist /usr/src/dist