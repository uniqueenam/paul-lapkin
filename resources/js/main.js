$(document).ready(function(){
        'use strict'
    /*===========Portfolio mixit up=============*/
    var mixer = mixitup('.portfolio-section-content');
    /*===============Scrollify===============*/
    $.scrollify({
            section : ".my-scrollify",
            setHeights: false,
            updateHash: false
          });
    /*=========smooth scroll=========*/
    $(function(){
        $('.menu-items a, .scroll-next a').on('click',function(){
            $('html,body').animate({
                scrollTop: $($.attr(this,'href')).offset().top
            },600);
            return false;
        });
    });
});


            /*=========Humburger Navbar=========*/
function openNav(){
    document.querySelector('.menu-container').setAttribute('style','height:100vh;visibility:visible');
    document.querySelector('.navbar-nav').setAttribute('style','height:100vh;visibility:visible');
}
function closeNav(){
    document.querySelector('.menu-container').setAttribute('style','height:0;visibility:hidden');
    document.querySelector('.navbar-nav').setAttribute('style','height:0;visibility:hidden');
}