$(document).ready(function(){
    
    $('.staff-list').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
    
});