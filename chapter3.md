# 第三章: 変身！（データの書き換え） 🦸

第二章の答え合わせです！
クリックイベントの書き方はバッチリですか？

### 📘 第二章の答え (App.vue)
```html
<script setup>
import { ref } from 'vue'
import furiImg from './assets/furi.png'

const telop = ref('絶対に押すなよ!?')
const mainImg = ref(furiImg)
const btnText = ref('PUSH')

// 関数を追加
const handleClick = () => {
  console.log('ボタンが押されました！')
}
</script>

<template>
  <span class="telop">{{ telop }}</span>
  <img :src="mainImg" class="main-img" />
  <!-- @click を追加 -->
  <button class="btn" @click="handleClick">{{ btnText }}</button>
</template>
```

---

## 📝 今回のミッション

いよいよ本番です。
ボタンが押されたら、文字や画像が変化するようにしましょう。

### 💡 例：カウントアップ
ボタンを押すと数字が増える例を見てみましょう。

**超重要なルール⚠️**:
`ref` で作ったデータをJavaScriptの中で書き換えるときは、**必ず `.value` をつけます！**

```javascript
const count = ref(0)

const increment = () => {
  // × count = count + 1  <- これはダメ
  // ○ count.value = count.value + 1
  count.value = count.value + 1
}
```
「箱（ref）の中から中身（value）を取り出して書き換える」イメージです。

### やること

1. **新しい画像を読み込む**
    - `assets` フォルダにある `ochi.png` を `ochiImg` という名前で import してください。
2. **中身を書き換える**
    - `handleClick` 関数の中で、データを以下のように上書きしてください（`.value` を忘れずに！）。
        - `telop` → `'アチーー!!'`
        - `mainImg` → `ochiImg`
        - `btnText` → `'RESET'`

---

## ✅ できたかな？

ブラウザで「PUSH」ボタンを押してみてください。
コンソールを見る必要はありません。画面が変わりましたか？

「押すなよ!?」 → 「アチーー!!」
画像も切り替わりましたか？

でも…「RESET」ボタンになっても、押しても元に戻りませんね。
次は、何度でも遊べるように「状況判断」を実装します。

[👉 第四章へ進む (chapter4.md)](./chapter4.md)
