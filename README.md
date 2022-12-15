# Readme

## 目的
時間を測る

## 立ち上げ手順
以下のコマンドを実行
```
git clone git@github.com:mthd0918/timer.git
docker-compose up -d
docker-compose exec app bash
rails db:create && rails db:migrate
```