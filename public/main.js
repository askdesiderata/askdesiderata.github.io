//$('.slick').slick({
//    infinite: true,
//    variableWidth: true,
//    centerMode: true
//});

//$(document).ready(function(){
//    var s = skrollr.init();
//})

$(document).ready(function(){



    function setupScrollr(){
        $(".parallax_pic1,.parallax_pic2," +
        ".parallax_pic3,.parallax_pic4," +
        ".parallax_pic5,.parallax_pic6," +
        ".parallax_pic7,.parallax_pic8,.parallax_heading").attr("data-0","background-position:0px 0px;")
            .attr("data-end","background-position:0px -500px;")
        //$(".label").attr()
        $(".flippable").attr("data-bottom-top","transform:rotateY(-180deg)")
            .attr("data-center-center","transform:rotateY(0deg)")

        $(".blurup").attr("data-bottom-top","filter:blur(10px)")
            .attr("data-center-center","filter:blur(0px)")

        window.s = skrollr.init()

    }
    function setupSlick(){
        $(".items").slick({
            slidesToShow: 3,
            slidesToScroll:1,
            centerMode: true,
            dots: true,
            infinitScroll:true,
            arrows: true
        })
    }
    function setupSlickForPhones(){
        $(".items").slick({
            slidesToShow: 2,
            slidesToScroll:1,
            centerMode: true,
            dots: true,
            infinitScroll:true,
            mobileFirst: true,
            variableWidth: true,
            arrows: true
        })
    }
    // skrollr works in chrome, iceweasel, not in IE < 8 OR Mobile.
    // Thus: Disable scrollr on mobile
    //       Disable slick and scrollr on ie < 8
    if((bowser.msie && bowser.version < 8 )){
        // do nothing with IE
    }else if(bowser.tablet || bowser.mobile){
        // only slick
        setupSlickForPhones()
    }else{
        // For not mobile, and not IE
        setupSlick()
        setupScrollr()
    }

        // do nothing
    //}else{
    //
    //
    //}

})





