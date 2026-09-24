# 就職活動用ポートフォリオ（サンプル）

研究、開発、組織活動を一つのページで紹介する静的Webサイトです。現時点の氏名・所属・活動内容はすべて仮の内容です。

## ファイル

- `index.html`：文章とページ構造
- `styles.css`：色、文字、余白、画面幅に応じたレイアウト
- `DESIGN_NOTES.md`：参考にした実在のWebページと設計資料

## 手元でページを確認する

[GitHub上の `index.html`](https://github.com/cantabile1129/webpage_jobhunting/blob/main/index.html) はコードの閲覧画面です。Webページそのものを表示するURLではありません。

1. このリポジトリをPCに複製するか、GitHubの「Code」→「Download ZIP」から保存して展開します。
2. `index.html` と `styles.css` が同じフォルダにある状態で、PC上の `index.html` をダブルクリックします。ブラウザのアドレスは `file:///.../index.html` の形になります。
3. 編集する場合は、そのフォルダを VS Code で開きます。この試作は静的なHTML/CSSだけなので、表示のためにサーバーやビルド操作は不要です。

`http://localhost:...` は、別途PC上で開発用サーバーを起動した場合のURLです。このページでは必須ではありません。`file:///` も `localhost` も自分のPCでの確認用で、応募先の人には見せられません。

## 応募先に見せるURL

GitHub Pagesなどで公開すると、応募先がブラウザで見られるURLを用意できます。GitHub Pagesの場合、このリポジトリの「Settings」→「Pages」で公開元を「Deploy from a branch」、ブランチを `main`、フォルダを `/(root)` に設定します。公開後のURLは通常 `https://cantabile1129.github.io/webpage_jobhunting/` です。設定後、実際に開けることを確認してください。

内容の追記や構成変更は、VS CodeのCodex拡張機能でも、このCodexデスクトップアプリでも、同じローカルのリポジトリを対象に依頼できます。VS Codeはコードを見ながら小さく直すときに便利です。

## 実際の応募に使う前に

1. 氏名・所属と研究テーマを実情報に置き換える。
2. 各事例に自分の担当、結果、公開可能な資料を記載する。
3. 資格・受賞歴と外部リンクを確認する。
4. ページ上部のサンプル表示を削除する。
5. スマートフォンで読み直し、リンク先を確認してから公開する。

ESには、公開後のWebページのURLを貼ってください。GitHubの `blob/main/index.html` のURLはコード閲覧用です。
