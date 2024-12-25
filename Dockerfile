FROM node:22.12.0-alpine

# タイムゾーンを設定
ENV TZ Asia/Tokyo

# 作業ディレクトリを設定
WORKDIR /app

# 必要な依存パッケージをインストール
RUN apk update && apk add --no-cache bash

# yarn init を実行して package.json を作成
RUN yarn init -y

# ポートを公開
EXPOSE 3000
