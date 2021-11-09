function startCarousel() {
    
    //creating a listener on carousel creation
    $('.carousel-home').on('initialized.owl.carousel translate.owl.carousel', function(e) {
        idx = e.item.index;
        $('.owl-item.big').removeClass('big');
        $('.owl-item.medium').removeClass('medium');
        $('.owl-item').eq(idx).addClass('big');
        $('.owl-item').eq(idx - 1).addClass('medium');
        $('.owl-item').eq(idx + 1).addClass('medium');
        $('.owl-item').eq(idx - 2).addClass('medium');
        $('.owl-item').eq(idx + 2).addClass('medium');
    });

    //creation of the carousel
    $('.carousel-home').owlCarousel({
        center: true,
        items: 5,
        loop: true,
        dots: false,
        margin: -100,
        touchDrag: true,
        mouseDrag: true,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true
    })

    $('.carousel-next').click(function() {
        $('.carousel-home').trigger('next.owl.carousel');
    });
    $('.carousel-prev').click(function() {
        $('.carousel-home').trigger('prev.owl.carousel');
    });

    $(document).on("click", "#item1", function() {
        window.location = "./harness-detail.html"; 
    });
    
    $(document).on("click", "#item2", function() {
    window.location = "./harness2-detail.html"; 
    });
    
    $(document).on("click", "#item3", function() {
        window.location = "./dog-gps-collar.html"; 
    });
    
    $(document).on("click", "#item4", function() {
        window.location = "./cat-harness1.html"; 
    });
    
    $(document).on("click", "#item5", function() {
        window.location = "./cat-harness2.html"; 
    });

    $(document).on("click", "#item6", function() {
        window.location = "./cat-backpack.html"; 
    });
    

}

startCarousel();