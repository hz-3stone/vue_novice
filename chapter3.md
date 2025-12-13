# 第三章: 変身！（データの書き換え） 🦸

第二章の答え合わせです！

### 📘 第二章の答え
```javascript
const handleClick = () => {
  console.log('ボタンが押されました！')
}
```
```html
<button class="btn" @click="handleClick">{{ btnText }}</button>
```

これができれば、クリックイベントはマスターしたも同然です！

---

## 📝 今回のミッション

いよいよ本番です。
「ボタンが押されたら、文字と画像を変える」という処理を書いていきましょう。

### 1. 落ちる画像を準備
まずは新しい画像 `ochi.png` を読み込んでおかないといけません。
`<script setup>` の一番上で読み込んでください。

```javascript
import ochiImg from './assets/ochi.png'
```

### 2. 中身を書き換える
`handleClick` 関数の中身を書き換えます。
ここで超重要なルール！⚠️

`ref` で作ったデータの中身をJavaScriptで触るときは、**必ず `.value` をつけます！**
「箱（ref）の中から中身（value）を取り出す」イメージです。

```javascript
const handleClick = () => {
  // データを上書きするよ！（.valueを忘れずに！）
  telop.value = 'アチーー!!'
  mainImg.value = ochiImg
  btnText.value = 'RESET'
}
```

---

## ✅ できたかな？

ブラウザで「PUSH」ボタンを押してみてください。
コンソールを見る必要はありません。画面が変わりましたか？

「押すなよ!?」 → 「アチーー!!」
画像も切り替わりましたか？

おめでとうございます！これが **「リアクティブ（反応する）」** というVue.jsの一番すごいところです✨

でも…あれ？
「RESET」ボタンになっても、押しても元に戻りませんね。
一回きりのギャグなんて面白くない！
次は、何度でも遊べるように「賢い判断」を実装します。

[👉 第四章へ進む (chapter4.md)](./chapter4.md)
