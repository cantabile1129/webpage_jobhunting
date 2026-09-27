# 参考資料と反映内容

就職活動用ポートフォリオの内容と画面設計を決める際に参照した資料です。実例の文章・画像・コードは転載していません。以下は共通の必須項目を示すものではなく、研究・開発・組織活動を伝えるための試作上の判断です。

## 掲載内容・構成

- [UC Davis Career Center：Portfolios](https://careercenter.ucdavis.edu/resumes-and-materials/portfolios) — プロジェクトの要約や成果物を載せられるという案内を踏まえ、「主な取り組み」から各事例の詳細へ進める構成にした。
- [University of South Florida Career Services：ePortfolios](https://careers.usf.edu/channels/eportfolios/) — プロジェクトでの本人の役割・スキル・結果を示す考え方を、各事例の「自分の担当」「成果・資料」に反映した。
- [UCLA Career Center：Resumes & Cover Letters](https://career.ucla.edu/resources/resumes-cover-letters/) — 研究のテーマ、方法、得られた知見を説明する指針を踏まえ、研究欄に目的・担当・現在地を設けた。試作段階のため結果は作っていない。
- [Seton Hall University Career Center：Portfolio Tips](https://www.shu.edu/career-center/portfolio-tips.html) — 研究、発表、プロジェクト、受賞・資格などを裏付け資料として示す案内を踏まえ、プロフィールに資格・受賞と公開資料の欄を設けた。

## 実在のWebページ

- [Jon Barron](https://jonbarron.info/) — 所属・研究関心を短く示し、個々の研究から関連資料へ進める構成を、冒頭の紹介と研究事例の参考にした。
- [Lee Robinson](https://leerob.com/) — 文章を中心に本人の関心と活動を見せる構成を、装飾を抑えた自己紹介の参考にした。
- [Tarik Karahodžić](https://www.tarikkarahodzic.dev/) — 選んだ仕事を番号付きで並べる見せ方を、研究・開発・組織活動の一覧に反映した。

## 画面設計

- [Nielsen Norman Group：Visual Hierarchy in UX](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) — 大きさ・コントラスト・まとまりで重要度を伝える指針を、氏名・見出し・本文の階層と余白に反映した。
- [U.S. Web Design System：Typography](https://designsystem.digital.gov/components/typography/) — 読みやすい行幅と行間の指針を、本文の幅と行間の設定に反映した。
- [U.S. Web Design System：Using color](https://designsystem.digital.gov/design-tokens/color/overview/) — 色を用途ごとに使う考え方を、白・淡い背景・濃い文字・深緑のアクセントに反映した。
- [GOV.UK Design System：Type scale](https://design-system.service.gov.uk/styles/type-scale/) — 一貫した文字サイズの段階を、氏名・セクション見出し・本文・補足の差に反映した。
- [W3C：Understanding Success Criterion 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum) — 本文 4.5:1 以上、大きな文字 3:1 以上の基準を、文字色と背景色の確認に使った。
- [W3C WAI：Links and controls](https://www.w3.org/WAI/ARIA/apg/patterns/link/) — 外部リンクは文字だけに依存せず、四隅の開いた矢印アイコンを併記する。アイコンには `aria-hidden="true"` を設定し、リンクの名称は本文テキストで伝える。
- [W3C WAI：Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html) — 日本語／英語の切替時に `html` 要素の `lang` 属性を更新し、表示言語を支援技術にも伝える。
- [MDN：position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) — ページ内移動をしやすくするため、ヘッダーを `position: sticky` で固定し、各セクションのスクロール位置をヘッダーの高さに合わせる。

公開前には仮の情報を実際の経歴・成果に置き換え、文章量に合わせて画面を再確認してください。
