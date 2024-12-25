# task-reaper-front

# 環境構築手順
最初に1度だけ実行する. 2回目以降は必要ない.
1. appディレクトリを作成  
`mkdir app`
2. コンテナをビルドする  
`docker compose build`
3. アプリケーションを作成   
`docker compose run --rm feeps_nuxt sh -c 'yarn init -y'`
4. コンテナを立ち上げる  
`docker compose up -d`
5. コンテナに入る  
`docker compose exec feeps_nuxt bash`
6. nuxt/starterをインストール  
`npx nuxi init . --force`
このとき, managerはnpmを選択し, Initialize git repository?はYesを選択する.  
7. nuxtをインストール  
`npm install`

# pullしてきたときの環境構築手順
1. コンテナを立ち上げる  
`docker compose up -d --build`
2. コンテナに入る  
`docker compose exec feeps_nuxt bash`
3. サーバーを動かす  
下記参照

# サーバー実行方法
1. コンテナを動かす  
`docker compose start`
2. コンテナに入る  
`docker compose exec feeps_nuxt bash`
3. サーバーを起動する  
`npm run dev`
4. webページにアクセスする  
`http://localhost/pageXX`

# 終了方法
1. サーバーを止める  
control + C
2. コンテナから抜ける  
`exit`
