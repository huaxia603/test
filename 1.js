$(function () {
    $(".holder-l").html($(".holder-m").html());
    $(".holder-r").html($(".holder-m").html());
    $(".prev").click(function(){
        if(parseInt($(".holder-big").css("left")) <= -5000) {
            $(".holder-big").css("left","-2500px")
        }
        $(".holder-big").animate({left:'-=250px'},"slow");
    });
    $(".next").click(function(){
        if(parseInt($(".holder-big").css("left")) >= -2500) {
            $(".holder-big").css("left","-5000px")
        }
        $(".holder-big").animate({left:'+=250px'},"slow");
    });
    function carousel() {
        if(parseInt($(".holder-big").css("left")) <= -5000) {
            $(".holder-big").css("left","-2500px")
        }
        $(".holder-big").animate({left:'-=250px'},1000,carousel);
    }
    $(".holder-big").animate({left:'-=250px'},1000,carousel);
    $(".carousel").hover(function(){
        $(".holder-big").stop(true,false);
        var left = parseInt($(".holder-big").css("left"));
        var i = -(left % 250);
        console.log(i);
        if(i >= 125){
            $(".holder-big").animate({left:"-="+(250-i)+"px"},500);
        } else{
            $(".holder-big").animate({left:"+="+i+"px"},500);
        }
    },function(){
        $(".holder-big").animate({left:'-=250px'},1000,carousel);
    });
});
