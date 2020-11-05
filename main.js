$(function(){
    
    
    var winH    = $(window).height(),
        UpperH  = $(".upper-bar").innerHeight(),
        navH    = $(".navbar").innerHeight();
    
    
    
    
    $(".slider, .carousel-item").height(winH - ( UpperH + navH));
    
    
    
    // featured work shuffle
    
    
    $(".featured-work ul li").on("click", function () {
       
        $(this).addClass("active").siblings().removeClass("active");   /* الي هيدوس عليها هيحطلها كلاس اكتف و يشيل الكلاس من الاشقاء التانيين */
        
        if ($(this).data("class") === ".all") {  /* لو الداتا كلاس بيساوي اول  هيظهر الصورة كامله */
            
            $(".shuffle-image .col-md").css("opacity", 1) // يظهر الصورة كامله 
        }
    
        else {
            
            $(".shuffle-image .col-md").css("opacity", ".08");  /*  غير كده خليه شفاف يخفيها  */
            $($(this).data("class")).parent().css("opacity", 1);   /* العنصر الي انا دوست عليه  الكلاسات المرتبطه بيه تكون الاوباستي بتاعتها كامله */
        }
        
    });
    
    
    
    
});


