# 23年後期集中授業、wordpressブログテーマ作成

## 授業内コード
1. 10月5日（木）初めての一歩
2. 10月5日（木）githab リポジトリ作成


## 10 月　12　日

　リテラルと演算子
文字列の連結
変数と定数
複合代入演算子

###　文字列の計算

```js
//文字列の連結
console.log("ABC" + "DEF"); //文字列
        console.log("円周率は" + 3, 14 + "です。"); //文字列＋数値
        console.log("計算結果;" + 123 + 456); //文字列＋数値の計算
        console.log(123 + 456 + "となりました。") //数値の計算＋文字列
        console.log("計算結果;" + (123 + 456)); //文字列＋数値の計算
        console.log("2" - 1);  //文字列ー数値
        console.log("2" * 3);  //文字列ー数値
        console.log("2" / 4);  //文字列ー数値

```
 ### 変数の宣言・代入

```js
        let a; //変数の宣言
        a = 10; //値の移入 (数値型)
        console.log(a);

        a = "hello"; //値の再代入（文字列型）
        console.log(a);

        // let = a "world"; //変数の宣言と代入を同時に行って行きます。さらに再宣言なので、エラーとなります。

        //定数の宣言・代入
        const PI = 3.14;
        console.log(PI);

        //再代入
        // PI = 3.1415926535;
        // const PI;

        //複合代入演算子

        let n = 5;
        n = n + 2;
        console.log(n); //7


        let n2 = 5;
        n2 += 2; //複合演算子 n2 = 2 + 2と同じ。
        console.log(n2)


        // インクリメント
        let n3 = 5;
        n3++; //インクリメント　1足す
        console.log(n3); //6
```
  <!--リストを操作するDOM操作のスクリプト-->
  ```js

        //メロンを加えたい。処理↓
        //ul 要素を取り入れる。
        const element = document.querySelector("ul");
        console.log(element);

        //selecterはCSSのセレクターなので、
        const element2 = document.querySelector("#fruitslist");
        console.log(element2);

        //classも行ける？
        const element3 = document.querySelector(".listbox__list");
        console.log(element3);

        //新しい要素を作る！
        const lilist = document.createElement("li");
        console.log(lilist);　//dirに変更、オブジェクトの中身が見れる。
        lilist.textContent = "メロン";
        console.log(lilist);

```

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
</script>
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。


## 10月１９日
コレクション（配列）
繰り返し処理(for文)
配列を使った複数要素の追加

 ```js

    <h1>人気フルーツ一覧</h1>
    <ul id="fruitslist" class="listbox__list"></ul>


        //ulの中に果物を一度にliで入れたい。
        //配列fruitsを宣言・値を代入
        const fruits = ["りんご", "もも", "バナナ"];

        //バナナがほしい
        console.log(fruits[2]);

        //ulをjavaScriptを引きずり込む
        const element = document.querySelector("#fruitslist");
        console.log(element);

        //fruitsの要素数文だけfor文で回す
        for (let i = 0; i < fruits.length; i++) {
            //liを送出する
            const lilast = document.createElement("li");

            //liに値(果物➡配列fruitsの中にある)を代入
            console.log(fruits[i]); //りんご・もも・バナナが取れる。

            //創出したliの内容に果物を代入
            lilast.textContent = fruits[i];

            //element(*ul)の中の最後に追加
            element.appendChild(lilast);
        }

```
```js
<h1>果物の種類</h1>
    <ul id="fruitslist" class="listbox__list">
        <li>りんご</li>
        <li>みかん</li>
        <li>バナナ</li>
    </ul>
    <!--リストを操作するDOM操作のスクリプト-->

        //メロンを加えたい。処理↓
        //ul 要素を取り入れる。
        const element = document.querySelector("ul");
        console.log(element);

        //selecterはCSSのセレクターなので、
        const element2 = document.querySelector("#fruitslist");
        console.log(element2);

        //classも行ける？
        const element3 = document.querySelector(".listbox__list");
        console.log(element3);

        //新しい要素を作るli
        const lilist = document.createElement("li");
        console.dir(lilist);　//dirに変更、オブジェクトの中身が見れる。
        lilist.textContent = "メロン";
        console.log(lilist);


        //リストの最後に追加する.↑変数lilastの<li>メロン</li>を変数element内の<ul></ul>に追加する
        element.appendChild(lilist);


        //いちごを追加したい
        const liLast2 = document.createElement("li");
        //いちごを追加
        liLast2.textContent = "いちご";
        // リストの最後の子要素として追加
        element.appendChild(liLast2);

    ```

## 10月26日
```js
<body>
  <section>
    <h1>犬のギャラリー</h1>
    <div class="card1">
      <h2>柴犬の散歩</h2>
      <p>雨だったけど、散歩に連れて行った</p>
    </div>
    <div class="card2">
      <h2>秋田犬の寝顔</h2>
      <p>普段は不細工だけど、寝顔はかわいい</p>
    </div>
    <img src="images/dog001.png" alt="柴犬" id="pochi" class="shibaDog" />
    <img src="images/dog002.png" alt="秋田犬" id="hachiko" class="akitaDog" />
  </section>
  <script>
    //ここに記述していきます
    //柴犬の画像を取得する
    const shiba = document.querySelector(".shibaDog");
    console.log(shiba);
    //秋田犬の画像を取得する
    const akita = document.querySelector(".akitaDog");
    console.log(akita);
    //<div class="card1">を取得する
    const shiba_card = document.querySelector(
      ".card1"
    );
    //<div class="card2">を取得する
    console.log(shiba_card);
    const akita_card = document.querySelector(
      ".card2"
    );
    console.log(akita_card);
    //柴犬が入った変数をappendChild で追加する
    const shiba_Dog = document.querySelector("card1");
    shiba_card.appendChild(shiba);
    //秋田犬が入った変数をappendChild で追加する
    const akita_Dog = document.querySelector("card2");
    akita_card.appendChild(akita);



  </script>
  <script>


    //両方とも秋田犬にする
    const shibainu = document.querySelector(".shibaDog");
    shiba.setAttribute("src", "images/dog002.png");
    //Attributeは属性という意味








  </script>
```