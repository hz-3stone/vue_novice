# 第六章: 卒業おめでとう！ 🎓

お疲れ様でした！
最後に、完成したコード（答え）を確認しましょう。

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

## あなたが手に入れた武器 ⚔️

1. **`npm`**: 開発環境を作る魔法
2. **`ref`**: データを生きたまま管理する箱
3. **`{{ }} / :src`**: データをHTMLに埋め込む術
4. **`@click`**: ユーザーの操作を受け取る耳
5. **`.value`**: 箱の中身を取り出す作法
6. **`if/else`**: 状況を判断する頭脳
7. **`:class / v-if`**: 見た目を操る演出力

これらはVue.jsの「基本」ですが、プロの現場でも毎日使う「奥義」でもあります。
この感覚を覚えておけば、もっと複雑なアプリもきっと作れます。

また新しいネタを思いついたら、ぜひコードで表現してみてくださいね！
Enjoy Vue.js! 🖖
