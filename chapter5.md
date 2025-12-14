# 第五章: 完成！そして伝説へ... 🚀

---

### 🐣 「できた...！完成しました先輩！！」
### 🦉 「よくやった！これで『絶対に押すなよ!?』アプリの完成じゃ！」
### 🐣 「たったこれだけのコードで、こんなに動くんですね...感動です」
### 🦉 「それがVue.jsの力じゃ。だが、これはまだ入り口にすぎんぞ」

---

## 🎊 完成おめでとう！

ここまでのコードを確認してみましょう。
`src/App.vue` はこのようになっているはずです。

```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'
import ochiImg from './assets/ochi.png'

const isPushed = ref(false)
const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')

const handleClick = () => {
  if (isPushed.value) {
    // リセット
    isPushed.value = false
    telop.value = '絶対に押すなよ!?'
    mainImg.value = furiImg
    btnText.value = 'PUSH'
  } else {
    // アクション
    isPushed.value = true
    telop.value = 'アチーー!!'
    mainImg.value = ochiImg
    btnText.value = 'RESET'
  }
}
</script>

<template>
  <span class="telop" :class="{ '-pushed': isPushed }">{{ telop }}</span>
  <img :src="mainImg" class="main-img" />
  <button class="btn" @click="handleClick">{{ btnText }}</button>
  <div v-if="isPushed" class="overlay"></div>
</template>
```

---

## 🎓 今回学んだこと

このチュートリアルを通して、Vue.jsの重要な機能を一通り触りました。

1. **`ref`**: データを入れる魔法の箱（リアクティブ）
2. **`{{ }}`**: データを文字として表示する
3. **`:src`**: データを属性（設定）として使う
4. **`@click`**: クリックイベントを拾う
5. **`v-if`**: 条件によって出したり消したりする
6. **`:class`**: 条件によってスタイルを変える

これらを組み合わせれば、もっと複雑なアプリも作れるようになります！

### 🐣 「先輩、次はもっと凄いアプリ作ってみたいです！」
### 🦉 「その意気じゃ！次は『Todoリスト』や『クイズアプリ』などに挑戦してみるとよい。基礎はもう身についておる！」

---

## 👋 これからどうする？

このプロジェクトはあくまで練習用ですが、コードを書き換えて自分なりの改造をしてみるのもおすすめです。
（例：画像を変えてみる、音を出してみる、など）

Vue.jsの旅を楽しんでください！
Happy Coding! 🦉🐣

[👉 最初のページに戻る](./README.md)
