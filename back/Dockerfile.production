FROM node:16.14-alpine

ENV HOME=/elice

WORKDIR $HOME/node_docker

COPY package*.json yarn.lock $HOME/node_docker/

RUN yarn install --silent --progress=false

COPY . $HOME/node_docker

# linux 서버에 저장된 env 파일(mongoDB Atlas 개인디비 주소, 카카오 redirectURL 등 저장) 복사!
COPY /home/elice/env $HOME/node_docker/

ENTRYPOINT ["yarn", "build"]