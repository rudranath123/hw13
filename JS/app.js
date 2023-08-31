$( function () {

    $(window).scroll(function() {
        let scrollTopValue = $(window).scrollTop();
        console.log(scrollTopValue);

       
        if(scrollTopValue > 1300){
            console.log('menu fixed')


            $('nav').addClass('menuFixed')
            $('.topBtn').fadeIn()

        } else {

            $("nav").removeClass('menuFixed')
            $('.topBtn').fadeOut()

            
        }

    })



    $(".topBtn").click(function() {

        $('html,body').animate({
            scrollTop: 0

        },5000)


    });

   
    
})

$(window).on('load', function(){
    $(".preloader").fadeOut();
})

