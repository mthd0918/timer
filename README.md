# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

memo

コンテナ起動後以下のコマンドをappコンテナに入り実施する必要あり
rails webpacker:install
rails webpacker:compile

謎
docker-compose.ymlにコマンドを記述しても反映されない
→解決

コンテナ初回立ち上げ時に以下のコマンドを実行
docker-compose exec app bash
rails db:create && rails db:migrate