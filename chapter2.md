# 第二章: ユーザーの行動に反応する（イベントハンドラ） 👆

---

### 🐣 「先輩！データは表示できたんですが、ボタンを押してもシーン...としてます」
### 🦉 「そりゃそうじゃ。まだ『ボタンを押したら何をしろ』と命令しておらんからな」
### 🐣 「命令！どうやってするんですか？」
### 🦉 「**`v-on`** （または **`@`**）という呪文を使うのじゃ。これが『何かが起きたときの引き金（トリガー）』になるぞ」

---

## 👂 イベントを待ち構える「@click」

Webアプリは、ユーザーのアクション（クリック、入力など）に反応して動きます。
Vue.jsでは、**`@click`** という書き方で、「クリックされたときに実行する関数」を指定できます。

```html
<script setup>
import { ref } from 'vue'

const count = ref(0)

// クリックされたら動く関数（ロジック）
const increment = () => {
  count.value = count.value + 1
  console.log('ボタンが押されたよ！')
}
</script>

<template>
  <p>現在のかず: {{ count }}</p>
  
  <!-- @click="関数名" で関連付ける -->
  <button @click="increment">増やす</button>
</template>
```

### 🧙‍♂️ 解説：ロジックの書き方
`<script>` の中では、JavaScript（変数の世界）でロジックを書きます。
`count.value` のように、`ref` の中身を触るときは **`.value`** が必要です！

---

## 📝 今回のミッション

「PUSH」ボタンを押したら、文字や画像が変わる準備をしましょう。
まずは**「クリックされたら変数の値を書き換える」**処理を作ります。

### 1. ロジック（関数）を作る
`src/App.vue` の `<script setup>` の中に、`handleClick` という関数を作ってください。
この関数の中で、以下のようにデータを書き換えます。

- `isPushed` という新しい変数を用意（初期値 `false`）
- ボタンが押されたら...
  - `telop` を `'アチーー!!'` に変更
  - `isPushed` を `true` に変更
  - `btnText` を `'RESET'` に変更
  - `mainImg` を `ochiImg` (新しい画像) に変更
    - ※ `import ochiImg from './assets/ochi.png'` が必要です！

### 2. トリガーを仕込む
HTMLの `<button>` タグに、`@click="handleClick"` を追加してください。

---

## 🚨 ここでハマる！よくある間違いチェック

### ❌ `ochiImg` が undefined って言われる！
- 画像のimport文を書き忘れていませんか？
  - `import ochiImg from './assets/ochi.png'`

### ❌ クリックしても反応しない！
- ボタンに `@click="handleClick"` を書き忘れていませんか？
- 関数名（`handleClick`）の綴りは合っていますか？

### ❌ `telop = '...'` って書いたらエラーになった！
- `ref` で作った変数は、`.value` をつけないと書き換えられません。
  - 正解: `telop.value = 'アチーー!!'`

### 🐣 「先輩！クリックしたら文字が変わりました！...でも画像が変わりません！」
### 🦉 「ふむ、それはおそらく画像の変え方が間違っておるな。画像を `ref` に入れたのなら、その `.value` に新しい画像のパス（importした変数）を入れるのじゃ」

---

[👉 第三章へ進む (chapter3.md)](./chapter3.md)
