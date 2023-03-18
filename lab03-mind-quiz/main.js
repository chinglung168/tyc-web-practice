$(function(){
    //儲存目前作答到第幾題
    var currentQuiz=null;

    //儲存目前作答到第幾題varcurrentQuiz=null;
    //當按鈕按下後，要做的事情
    $("#startButton").on("click",function(){
        //如果還沒開始作答就從這裡開始
        if(currentQuiz==null){
            //設定目前作答從第0題開始
            currentQuiz=0;

            //顯示題目
            $("#question").text(questions[0].question);

            //將選項區清空(可以試著先不寫)
            $("#options").empty();

            //將選項逐個加入
            questions[0].answers.forEach(function(element,index,array){
                                            $("#options").append(
                                                                `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                                        });
            
            //將按鈕上的文字換成Next
            $("#startButton").attr("value","Next");
        }else{
            //已經開始作答從這邊繼續
            
        }    
    });
});
