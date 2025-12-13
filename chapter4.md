# 第四章: 二重人格（スイッチの作成） 🎭

第三章の答え合わせです！
`.value` はつけ忘れなかったですか？最初はみんな忘れるので、動かなかったらまずはそこを疑いましょう！

### 📘 第三章の答え
```javascript
const handleClick = () => {
  telop.value = 'アチーー!!'
  mainImg.value = ochiImg
  btnText.value = 'RESET'
}
```

---

## 📝 今回のミッション

今は「変化させる」ことしかできません。
「元に戻す」こともできるようにするには、「今どういう状態か？」を知る必要があります。

### 1. スイッチ（フラグ）を作る
「今は押されてる？押されてない？」を管理する、専用のデータを作りましょう。
`<script setup>` に追加してください。

```javascript
const isPushed = ref(false) // false = 押されてない
```

### 2. 状況判断する (if/else)
`handleClick` 関数の中で、「もしスイッチがONなら〜」「OFFなら〜」という風に動きを分けます。
これを **「条件分岐（if文）」** と言います。

```javascript
const handleClick = () => {
  if (isPushed.value) {
    // ■ ON（すでに押されてる）なら… 元に戻す！
    isPushed.value = false // スイッチをOFFに戻す
    telop.value = '絶対に押すなよ!?'
    mainImg.value = furiImg
    btnText.value = 'PUSH'
  } else {
    // ■ OFF（まだ押されてない）なら… 押す！
    isPushed.value = true // スイッチをONにする
    telop.value = 'アチーー!!'
    mainImg.value = ochiImg
    btnText.value = 'RESET'
  }
}
```

---

## ✅ できたかな？

ブラウザでボタンを連打してみてください。
PUSH ↔ RESET
押すなよ ↔ アチー
行ったり来たりできるようになりましたか？

これでアプリとしての機能（ロジック）は完成です！👏
でも、ダチョウ倶楽部の芸はもっと派手ですよね？
最後は、見た目の演出を加えて完成させましょう！

[👉 第五章へ進む (chapter5.md)](./chapter5.md)
