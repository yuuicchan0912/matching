## DEV

### Frontend

Nuxt.js

### Backend

Node.js(Express)

## 手順

### ① クローンする

```
git clone git@github.com:ssk9597/Docker-Nuxtjs-Express.git
```

### ② ディレクトリに移動する

```
cd Docker-Nuxtjs-Express
```

### ③`api`ディレクトリの必要なパッケージをインストールする

```
cd api
npm install cors dotenv express mysql2 sequelize sequelize-cli
npm i -D nodemon
```

### ④Nuxt.js の作成と Docker の起動を行う

```
make nuxt
```

### ⑤`nuxt.config.js`と`.env`と`pages/index.vue`を修正してバックエンドとの通信を図る
