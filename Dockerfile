FROM node:13-alpine

RUN yarn global add parcel-bundler

RUN apk add util-linux
