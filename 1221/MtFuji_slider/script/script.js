// //初期化
// const slide = document.querySelector(".slide");
// const images = document.querySelectorAll(".slideimg");//グローバル変数
// console.log(images[images.length - 1]); //4番目の画像がほしい

// console.log(images);
// //div="slide"の中の最後の画像[images.length - 1]を最初の画像の前
// //insertBeforeはappendChildの逆、前に入れる
// slide.insertBefore(images[images.length - 1], images[0]);

//left btn　を取得
const leftBtn = document.querySelector(".leftBtn");
// //querySelectorAll で画像をすべて取得する
// const slideImage = document.querySelectorAll(".slide img");

// //クリックしたら移動
// leftBtn.addEventListener("click", function () {
//     //ローカル変数　このブロック内でしか使えない
//     const slideImages = document.querySelector(".slide img");
//     console.log(slideImages);
//     // slideImage[0].style.marginLeft = "-100%";
// });

// // right btn　を取得
const rightBtn = document.querySelector(".rightBtn");

// //クリックしたら移動
// rightBtn.addEventListener("click", function () {
//     slideImage[0].style.marginLeft = "0%";
// });


//初期化
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img"); //グローバル変数
console.log(images[images.length - 1]); //４番目の画像がほしい
console.log(images); //初期値
slide.insertBefore(images[images.length - 1], images[0]);
//div="slide"の中の際おｇのぞう[images.length-1]を最初の画像[0]の前
// insertBeforeはappendChildの逆、前にいれる

const leftSlider = function () {
    //ローカル変数
    const slideImgs = document.querySelectorAll(".slide img");
    console.log(slideImgs); //クリックを押した時点でのhtml
    //左側の余分な画像を、最後に移動
    // slideImgs[0].style.marginLeft = "-100%";
    slide.appendChild(slideImgs[0]);
    //入ってるstyle属性を削除
    slideImgs[1].removeAttribute("style");
};


const rightSlider = function () {
    const slideImgs = document.querySelectorAll(".slide img");
    console.log(slideImgs);
    slideImgs[1].removeAttribute("style");

    slideImgs[0].style.marginLeft = "0";
    slide.insertBefore(slideImgs[slideImgs.length - 1], slideImgs[0]);
};

// button 左
leftBtn.addEventListener("click", () => {
    leftSlider();
});



// button　右
rightBtn.addEventListener("click", () => {
    rightSlider();
});