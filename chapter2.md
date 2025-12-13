# 第二章: 指令室（関数の作成） 📡

第一章の答え合わせです！
正しく書けていれば、`src/App.vue` は以下のようになっているはずです。

### 📘 第一章の答え
```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'

const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')
</script>

<template>
  <span class="telop">{{ telop }}</span>
  <img :src="mainImg" class="main-img" />
  <button class="btn">{{ btnText }}</button>
</template>
```

どうでしたか？
`{{ }}` は「文字を出すとき」、`:src` は「属性（設定）を変えるとき」に使います。

---

## 📝 今回のミッション

今はまだボタンを押しても何も起きません。
Vue.jsに「ボタンが押されたらこれをやって！」と命令するには、2つのステップが必要です。

1. **命令書（関数）を作る**
2. **ボタンに命令書を渡す**

### 1. 命令書（関数）を作ろう
`<script setup>` の中に、`handleClick` という名前の関数を作ってください。
まずは手始めに、コンソール（ブラウザの裏側にあるログ）にメッセージを出してみましょう。

```javascript
// 変数の下あたりに書いてね
const handleClick = () => {
  console.log('ボタンが押されました！')
}
```

### 2. ボタンに渡そう
`<button>` タグに、`@click` という魔法の言葉をつけます。

```html
<button class="btn" @click="handleClick">{{ btnText }}</button>
```

---

## ✅ できたかな？

ブラウザを開いて、F12キーを押して「コンソール (Console)」タブを開いてください。
その状態で「PUSH」ボタンを押すと…？
`ボタンが押されました！` という文字が出たら大成功です！🎉

これで、あなたのクリックがプログラムに届くようになりました。
次はこれを使って、画面を実際に書き換えてみましょう！

[👉 第三章へ進む (chapter3.md)](./chapter3.md)
