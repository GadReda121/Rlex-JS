$(document).ready(function(){

    // Start Codes

    // Start Menu-mob
    $(".header .tools .fa-ellipsis-vertical").click(function(){
        $(".menu-mob").slideDown(500);
        $(".header .tools .fa-ellipsis-vertical").css("display","none");
        $(".header .tools .fa-ellipsis").css("display","inline-block");
    });
    // up
    $(".header .tools .fa-ellipsis").click(function(){
        $(".menu-mob").slideUp(500);
        $(".header .tools .fa-ellipsis").css("display","none");
        $(".header .tools .fa-ellipsis-vertical").css("display","inline-block");
    });
    // click => a => up
    $(".header  .menu-mob ul li a").click(function(){
        $(".menu-mob").slideUp(500);
        $(".header .tools .fa-ellipsis").css("display","none");
        $(".header .tools .fa-ellipsis-vertical").css("display","inline-block");
    });
    // End Menu-mob

    // Start Dark Mood
    $(".fa-moon").click(function() {
        $("body").toggleClass("bg-dark");
        if ( $("body").hasClass("bg-dark")){
            // navbar
            $(".header .logo h3 a").addClass("text-light");
            $(".header .menu ul li a").addClass("text-light");
            // Text in Home
            $(".home .textHome").addClass("text-light");
            $(".feature h3").addClass("text-light");
            // story
            $(".story .text-story").addClass("text-light");
            // center
            $(".center .text-center").addClass("text-light");
            // scroll
            $(window).scroll(function(){
                if ( this.scrollY > 20){
                    $(".header .logo h3 a").css("color","#FFB568")
                } else{
                    $(".header .logo h3 a").css("color","#f8f9fa")
                }
            });
            // up
            $(".up i").css({
                "color":"#1A1A1A",
                "backgroundColor":"#f8f9fa"
            });
        } else{
            // navbar
            $(".header .logo h3 a").removeClass("text-light");
            $(".header .menu ul li a").removeClass("text-light");
            // Text in Home
            $(".home .textHome").removeClass("text-light");
            $(".feature h3").removeClass("text-light");
            // story
            $(".story .text-story").removeClass("text-light");
            // center
            $(".center .text-center").removeClass("text-light");
            // scroll
            $(window).scroll(function(){
                if ( this.scrollY > 20){
                    $(".header .logo h3 a").css("color","#FFB568")
                } else{
                    $(".header .logo h3 a").css("color","#1A1A1A");
                }
            });
            // up
            $(".up i").css({
                "color":"#f8f9fa",
                "backgroundColor":"#1A1A1A"
            });
        }
    });
    // End Dark Mood

    // WHEN SCROLL => NAVBAR
    $(window).scroll(function(){
        if ( this.scrollY > 20 ){
            $(".header").css({
                "backgroundColor":"#1A1A1A",
                "box-shadow":"rgba(0,0,0,.1) 0px 0px 4px"
            });
            $(".header .logo h3 a").css("color","#FFB568");
            $(".header .menu ul li a").css("color","#f9f8fa");
            $(".header .menu ul li a").hover(function(){
                $(this).css("color","#FFB568");
            },function(){
                $(this).css("color","#f8f9fa");
            });
            $(".header .tools i").css("color","#f8f9fa");
            $(".up").css("display","flex");
        } else {
            $(".header").css({
                "background":"none",
                "box-shadow":"rgba(0,0,0,.1) 0px 0px 0px"
            });
            $(".header .logo h3 a").css("color","#1a1a1a");
            $(".header .menu ul li a").hover(function(){
                $(this).css("color","#1A1A1A");
            },function(){
                $(this).css("color","#1A1A1A");
            });
            $(".header .menu ul li a").css("color","#1A1A1A");
            $(".header .tools i").css("color","#1A1A1A");
            $(".up").css("display","none");
        }
    });

    // Start Slide => Review
    // next
    $(".fa-arrow-right").click(function(){
        if( $(".point1").hasClass("active")){
            $(".point1").toggleClass("active");
            $(".point2").toggleClass("active");
            $(".center-child1").fadeOut();
            $(".center-child2").fadeIn(500);
        } else  if( $(".point2").hasClass("active")) {
            $(".point2").toggleClass("active");
            $(".point3").toggleClass("active");
            $(".center-child2").fadeOut();
            $(".center-child3").fadeIn(500);
        } else  if( $(".point3").hasClass("active")){
            $(".point1").toggleClass("active");
            $(".point3").toggleClass("active");
            $(".center-child3").fadeOut();
            $(".center-child1").fadeIn(500);
        }
    });
    // prev
    $(".fa-arrow-left").click(function(){
        if( $(".point1").hasClass("active")){
            $(".point1").toggleClass("active");
            $(".point3").toggleClass("active");
            $(".center-child1").fadeOut();
            $(".center-child3").fadeIn(500);
        } else  if( $(".point2").hasClass("active")) {
            $(".point1").toggleClass("active");
            $(".point2").toggleClass("active");
            $(".center-child2").fadeOut();
            $(".center-child1").fadeIn(500);
        } else  if( $(".point3").hasClass("active")){
            $(".point2").toggleClass("active");
            $(".point3").toggleClass("active");
            $(".center-child3").fadeOut();
            $(".center-child2").fadeIn(500);
        }
    });
    // End Slide => Review

    // Start Product =============> Hover
    $(".products").hover(function(){
        $(this).css("transform","scale(1,1");
        $(this).siblings().css("filter","blur(3px)");
    },function(){
        $(this).css("transform","scale(1,1");
        $(this).siblings().css("filter","blur(0px)");
    });
    // End Product =============> Hover

    // Start New =============> Hover
    $(".new").hover(function(){
        $(this).css("transform","scale(1,1");
        $(this).siblings().css("filter","blur(3px)");
    },function(){
        $(this).css("transform","scale(1,1");
        $(this).siblings().css("filter","blur(0px)");
    });
    // End new =============> Hover

    // Start ADD TO CARD
    $(".header .tools .fa-bag-shopping").click(function(){
        $(".add").slideToggle(500);
    });
    // Features

    // child1
    $(".feature-parent .feat-child1 a").click(function(e){
        e.preventDefault();
        $(".feat-child11").css("display","grid");
        $(".add").html($(".feat-child11"));
    });
    // child2
    $(".feature-parent .feat-child2 a").click(function(e){
        e.preventDefault();
        $(".feat-child22").css("display","grid");
        $(".add").html($(".feat-child22"));
    });
    // child3
    $(".feature-parent .feat-child3 a").click(function(e){
        e.preventDefault();
        $(".feat-child33").css("display","grid");
        $(".add").html($(".feat-child33"));
    });
    // Remove
    $(".features1 a").click(function(e){
        e.preventDefault();
        $(this).parent().css("display","none");
        $(".add").slideUp(500);
    });

    // products

    // child1
    $(".product .product-child1 i").click(function(e){
        e.preventDefault();
        $(".product-child11").css("display","grid");
        $(".add").html($(".product-child11"));
    });
    // child2
    $(".product .product-child2 i").click(function(e){
        e.preventDefault();
        $(".product-child22").css("display","grid");
        $(".add").html($(".product-child22"));
    });
    // child3
    $(".product .product-child3 i").click(function(e){
        e.preventDefault();
        $(".product-child33").css("display","grid");
        $(".add").html($(".product-child33"));
    });
    // child4
    $(".product .product-child4 i").click(function(e){
        e.preventDefault();
        $(".product-child44").css("display","grid");
        $(".add").html($(".product-child44"));
    });
    // child5
    $(".product .product-child5 i").click(function(e){
        e.preventDefault();
        $(".product-child55").css("display","grid");
        $(".add").html($(".product-child55"));
    });
    // remove
    $(".products1 i").click(function(e){
        e.preventDefault();
        $(this).parent().css("display","none");
        $(".add").slideUp(500);
    });
    // New
    // child1
    $(".new-child1 i").click(function(e){
        e.preventDefault();
        $(".new-child11").css("display","grid");
        $(".add").html($(".new-child11"));
    });
    // child2
    $(".new-child2 i").click(function(e){
        e.preventDefault();
        $(".new-child22").css("display","grid");
        $(".add").html($(".new-child22"));
    });
    // child3
    $(".new-child3 i").click(function(e){
        e.preventDefault();
        $(".new-child33").css("display","grid");
        $(".add").html($(".new-child33"));
    });
    // child4
    $(".new-child4 i").click(function(e){
        e.preventDefault();
        $(".new-child44").css("display","grid");
        $(".add").html($(".new-child44"));
    });
    // remove
    $(".new1 i").click(function(e){
        e.preventDefault();
        $(this).parent().css("display","none");
        $(".add").slideUp(500);
    });

    if ($(".header .tools .fa-bag-shopping").hasClass("features")){
        console.log("right");
    } else {
        $(".add").text("Please , Put Anything !").css("color","#f8f9fa");
    }
    // End ADD TO CARD

    // End Codes

});