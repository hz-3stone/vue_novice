# 第四章: 二重人格（スイッチの作成） 🎭

第三章の答え合わせです！
`.value` はつけ忘れなかったですか？最初はみんな忘れるので、動かなかったらまずはそこを疑いましょう！

### 📘 第三章の答え (App.vue)
```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'
import ochiImg from './assets/ochi.png' // 追加

const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')

const handleClick = () => {
  // 中身を書き換える（.valueが必要！）
  telop.value = 'アチーー!!'
  mainImg.value = ochiImg
  btnText.value = 'RESET'
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

今は「変化させる」ことしかできません。
「元に戻す」こともできるようにするには、「今どういう状態か？（押す前？押した後？）」を知る必要があります。

### 💡 例：部屋の電気スイッチ
電気が「ついているか」「消えているか」でやることを変える例です。

```javascript
const isOn = ref(false) // スイッチの状態（最初は消えてる）

const toggleLight = () => {
  // if (条件) { ... } else { ... }
  if (isOn.value) {
    // スイッチがついているなら → 消す
    console.log('電気を消します')
    isOn.value = false
  } else {
    // スイッチが消えているなら → つける
    console.log('電気をつけます')
    isOn.value = true
  }
}
```

### やること

1. **スイッチ（フラグ）を作る**
    - `isPushed` という名前で、初期値 `false` のデータを作ってください。
2. **状況判断する (if/else)**
    - `handleClick` 関数の中で、`isPushed` が `true` か `false` かで処理を分けてください。
    - **ON（すでに押されてる）なら**: 元に戻す（文字や画像を最初の状態に戻す。`isPushed` も `false` に戻す）
    - **OFF（まだ押されてない）なら**: アクションする（文字や画像を `ochiImg` などに変える。`isPushed` を `true` にする）

---

## ✅ できたかな？

ブラウザでボタンを連打してみてください。
PUSH ↔ RESET
押すなよ ↔ アチー
行ったり来たりできるようになりましたか？

これでアプリとしての機能（ロジック）は完成です！👏
最後は、見た目の演出を加えて完成させましょう！

[👉 第五章へ進む (chapter5.md)](./chapter5.md)
