# 第一章: マジックのタネ（データの定義） 🎩

画面は表示されましたか？
今はまだ、ただのHTMLとCSSで書かれた「絵」です。
これをVue.jsを使って「動かせる状態」にしていきます。

## 🤔 なぜVue.jsを使うの？

HTMLに直接 `<span>絶対に押すなよ!?</span>` と書いてもいいのですが、それだと後で「アチーー!!」に書き換えるのが大変です。
Vue.jsを使うと、**「データ（セリフや画像）」**と**「場所（HTML）」**を別々に管理できます。

- **データ**: 「絶対に押すなよ!?」という文字
- **場所**: ここにデータを表示してね！という指示

こうしておくと、後でデータを書き換えるだけで、画面も自動的に変わるようになるんです！

---

## 📝 今回のミッション

`src/App.vue` を編集して、Vue.jsの機能を使って文字と画像を表示させてみましょう！

### 1. タネ（データ）を作る
`src/App.vue` の `<template>` タグの上に、以下の `<script setup>` を追加してください。
ここで、箱（変数）の中に中身（値）を入れます。

```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'

// ここにデータ（セリフや画像）を定義するよ！
const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')
</script>
```

### 2. タネを仕込む
HTMLの中で、さっき定義したデータを使ってみましょう。
直接書いていた文字を消して、魔法の記号 `{{ }}` と `:` に置き換えます。

```html
<template>
  <span class="telop">{{ telop }}</span>
  <img :src="mainImg" class="main-img" />
  <button class="btn">{{ btnText }}</button>
</template>
```

---

## ✅ できたかな？

書き換えて保存（Ctrl+S）すると、ブラウザが勝手に更新されます。
見た目は変わっていませんが、もしエラーが出て真っ白になっていたら、スペルミスがないか確認してみましょう！

「本当にVue.jsで動いてるの？」と疑り深いあなた。
次の章で、このコードの正解合わせと、実際に動く瞬間をお見せします！

[👉 第二章へ進む (chapter2.md)](./chapter2.md)
