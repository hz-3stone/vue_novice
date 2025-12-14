# 第五章: 派手な演出（クラスと条件付き表示） ✨

第四章の答え合わせです！
if文とフラグ（isPushed）を使うことで、アプリに「状態」を持たせることができました。

### 📘 第四章の答え (App.vue)
```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'
import ochiImg from './assets/ochi.png'

// フラグを追加
const isPushed = ref(false)

const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')

const handleClick = () => {
  // 分岐させる
  if (isPushed.value) {
    // 元に戻す
    isPushed.value = false
    telop.value = '絶対に押すなよ!?'
    mainImg.value = furiImg
    btnText.value = 'PUSH'
  } else {
    // 押した時の変化
    isPushed.value = true
    telop.value = 'アチーー!!'
    mainImg.value = ochiImg
    btnText.value = 'RESET'
  }
}
</script>

<template>
  <span class="telop">{{ telop }}</span>
  <img :src="mainImg" class="main-img" />
  <button class="btn" @click="handleClick">{{ btnText }}</button>
</template>
```

---

## 📝 今回のミッション

CSSにはすでに演出用のクラスが用意してあります。
Vue.jsを使って、タイミングよくそのクラスをつけてあげましょう。

### 💡 例：「いいね」ボタン
「いいね」された時だけ、ハートを赤くする（`.active` クラスをつける）例です。

```html
<!-- :class="{ クラス名: 条件 }" -->
<!-- isLiked が true のときだけ、active クラスがつく -->
<button :class="{ active: isLiked }">
  いいね！
</button>
```

そして、条件によって「表示・非表示」を切り替える例です。

```html
<!-- v-if="条件" -->
<!-- isLiked が true のときだけ、この要素が表示される -->
<div v-if="isLiked">ありがとう！</div>
```

### やること

1. **文字を赤く大きくする**
    - `.telop` クラスがついている要素に、`isPushed` がオンの時だけ `'-pushed'` クラスがつくようにしてください。
2. **画面をフラッシュさせる**
    - `<div class="overlay"></div>` という要素を追加してください。
    - ただし、この要素は `isPushed` がオンの時だけ表示される（v-if）ようにしてください。

---

## ✅ できたかな？

ボタンを押してみましょう。
文字がボンッ！と赤くなり、画面がビカッ！と光れば大成功です🎊

これで、あなたの初めてのVue.jsアプリが完成しました！

[👉 答え合わせと卒業 (chapter6.md)](./chapter6.md)
