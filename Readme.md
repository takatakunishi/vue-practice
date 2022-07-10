# What is this project

このレポジトリは vue の練習用レポジトリです。

make コマンド, node, docker が使えることが前提となっています。

## 使用フロー

1. `make up` => localhost3000 で動いている<br/>
   docker を起動する
2. `make shell`<br/>
   shell を起動する
3. 2.で出力された値を実行してシェルに入る。<br/>
   - `npm run dev`でアプリ(vue)を起動
   - `npm run build`でビルド
   - `npm run preview`でビルド結果を起動
4. `make down`<br/>
   コンテナ群を落とす

## 起動確認

使用バージョン

- node version => 16(16.15.0)<br/>
- npm => 8(8.5.5)

docker に権限を与えるために root ユーザーで make up してください(wsl 使用時)

## 参考資料
### Vue
[Vue3 todoアプリ作成 ① ~ compositionAPI 使ってみた ~](https://qiita.com/nakamo-03/items/5f1a8283648f87ab0230)