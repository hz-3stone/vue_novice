# 第二章: 指令室（関数の作成） 📡

第一章の答え合わせです！
`App.vue` 全体が以下のようになっていれば正解です。

### 📘 第一章の答え (App.vue)
```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'

// データを定義
const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')
</script>

<template>
  <!-- データを使用 -->
  <span class="telop">{{ telop }}</span>
  <img :src="mainImg" class="main-img" />
  <button class="btn">{{ btnText }}</button>
</template>
```

---

## 📝 今回のミッション

今はまだボタンを押しても何も起きません。
「ボタンが押されたら何かする」という仕組みを作りましょう。

### 💡 例：挨拶ボタン
「挨拶」ボタンを押したら、コンソールに「やあ！」と出す例を見てみましょう。

1. **関数（命令書）を作る**
```javascript
const sayHello = () => {
  console.log('やあ！')
}
```

2. **ボタンにくっつける (@click)**
```html
<!-- @click="関数名" でクリック時に実行 -->
<button @click="sayHello">挨拶</button>
```

### やること
この例を参考に、私たちのアプリにも機能を追加してください。

1. **`handleClick` という名前の関数を作る**
    - 中身は `console.log('ボタンが押されました！')` と書いてください。
2. **ボタンがクリックされたら `handleClick` が動くようにする**
    - `<button>` タグに `@click` を追加します。

---

## ✅ できたかな？

ブラウザで「PUSH」ボタンを押しながら、F12キーでコンソールを確認してみてください。
`ボタンが押されました！` と表示されましたか？

これで、あなたのクリックがプログラムに届くようになりました。
次はこれを使って、画面を実際に書き換えてみましょう！

[👉 第三章へ進む (chapter3.md)](./chapter3.md)
