# 23年後期集中授業、wordpressブログテーマ作成

## 授業内コード
1. 10月5日（木）初めての一歩
2. 10月5日（木）githab リポジトリ作成
3. 10月12日（木）文字列の連結　変数　定数　複合代入演算子
4. 10月19日（木）docment オブジェクトと　DOM
5. 10月26日（木）その他の　document の取得と挿入、イベント
6. 11月2日（木）classlist とイベント
7. 11月9日　(木)if文で条件分岐、左右まで
8. 11月16日　(木)中間確認テスト
9.  11月30日　(木)関数
10. 12月07日　(木)関数、引数、戻り地、関数式、変数のスコープ
11. 12月14日　(木)コールバック関数、アロー関数


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





    //両方とも秋田犬にする
    const shibainu = document.querySelector(".shibaDog");
    shiba.setAttribute("src", "images/dog002.png");
    //Attributeは属性という意味




```



###　文字列の計算

```js
elem.classList.add("class"); //クラスの追加します。
elem.classList.remove("class"); //クラスの削除をします。
elem.classList.toggle("class"); //クラスが存在する場合は削除します。なければ追加します。
elem.classList.contains("class"); //クラスをの有無をチェックし、true/falseを返します。

//※nameは属性名、valueは値（属性値
elem.hasAttribute(name); //存在をチェックします。
elem.getAttribute(name); //値を取得します。
elem.setAttribute(name, value); //値を設定します。
elem.removeAttribute(name); //属性を削除します。

```


## 1207


```js



        const cake = 450;

        const takeOutBtn = document.querySelector(".takeOut");
        console.log(takeOutBtn);
        const eatInBtn = document.querySelector(".eatIn");
        console.log(eatInBtn);
        const result = document.querySelector(".taxIn");
        console.log(result);

        const calculation = function (cake, tax) {
            const result = cake + cake * tax;//商品＋消費税
            return result; //戻り値
        };

        //クリックイベント
        takeOutBtn.addEventListener("click", function () {
            //関数の実行
            const price = calculation(cake, 0.08);
            result.innerHTML = price;

        })

        eatInBtn.addEventListener("click", function () {
            //関数の実行
            const price = calculation(cake, 0.1)
            result.innerHTML = price;

        })
```

## 12月１４日


```js


 //関数式1
        const concatenateSpace = function (lastName, firstName) {
            return lastName + " " + firstName;
        };
        //関数式2
        const useConcatenate = function (name, func) {
            //nameには、配列が入っている
            //funcには、関数式1が入っている
            let concatName = func(name[0], name[1]);
            //concaNameには、関数式1の戻り地が入っている
            console.log("結合結果：" + concatName);
        };

        let nameParam = ["梶田", "星弥"];//配列

        //関数式2の実行(引数1 = 配列 , 引数2 = 関数の名前(関数名) )
        useConcatenate(nameParam, concatenateSpace);

        //結合結果：中田 雄二


        //コールバック関数基本　*よく使う

        //関数式1
        const testFunc = function (func) {
            //funcには、関数式2
            //関数の実行後すぐに表示される
            console.log("testFuncが実行されました");
            //2秒後に実行される
            setTimeout(function () {
                func();
            }, 2000);
        };
        //関数式2
        const callback = function () {
            console.log("callbackが実行されました");
        };


        //関数式1を実行している
        //callbackは関数式2の関数名
        testFunc(callback);




 const dog = function () {
            return "わんわん";

        }
        //関数の定義
        function dog2() {
            return "パウワウ";
        }



        //関数dogを実行=()があるから
        console.log(dog());　//わんわん
        console.log(dog2());//パウワウ


        //アロー関数の関数式　*アロー関数は関数式で使う
        const cat = () => {
            return "にゃーにゃー";
        }

        //関数catの実行　= ()があるから
        console.log(cat())



        //鳴き方を決めたい アロー関数+引数
        const animal = (voice) => {
            return voice
        }


        //関数アニマルの実行
        //みゃあみゃあ
        //関数の実行の中にあるのが引数
        console.log(animal("みゃあみゃあ"));


        //thisは予約後なので変数名・関数名に使えない
        const thisElm = document.querySelector("p");
        console.log(thisElm);

        thisElm.addEventListener("click", (e) => {
            console.log("クリック");
            // console.log(this.textContent);
            console.log(e);
        })
 ```

</body>
