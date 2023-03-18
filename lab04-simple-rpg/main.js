let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;

//mapArray-決定地圖中每個格子的元素
//ctx-HTML5Canvas用
//currentImgMainX,currentImgMainY-決定主角所在座標
//imgMountain,imgMain,imgEnemy-障礙物,主角,敵人的圖片物件
const gridLength=200;

//網頁載入完成後初始化動作
$(function(){
    mapArray=[//0-可走,1-障礙,2-終點,3-敵人
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];

    ctx =$("#myCanvas")[0].getContext("2d");

    imgMain= new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMain={
        "x":0,
        "y":0
    };

    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,80,130, currentImgMain.x, currentImgMain.y,gridLength, gridLength);   
    };

});

//處理使用者按下按鍵
$(document).on("keydown",function(event){
    //console.log(event.key);
    let targetImg, targetBlock, cutImagePositionX;

    switch(event.code){
        case "ArrowLeft":
            break;

        case "ArrowLeft":
            break;

        case "ArrowLeft":
            break;

        case "ArrowLeft":
            break;
            
        default:
            break;

    }
    event.preventDefault();
   
});