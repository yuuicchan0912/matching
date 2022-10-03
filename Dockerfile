# イメージの指定
FROM node:lts-alpine3.11

# コンテナ内で cd /app しているようなもの
WORKDIR /app

# コマンド実行
# linux 最新化,gitのインストール、npm最新化、vue-cli インストール　をしている。
RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g vue-cli && \
    npm install -g create-nuxt-app@2.15.0

ENV HOST 0.0.0.0
EXPOSE 8080