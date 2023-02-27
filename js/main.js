
$('.education-body').css('overflow-y', 'hidden')
$('.about-body_bgcolor').css('overflow-y', 'hidden')

window.onload = function() {
    setTimeout(function() {
        $('#onload').fadeOut();
    }, 1500) 
    setTimeout(function() {
        $('#onload2').fadeOut();
        $('.education-body').css('overflow-y', 'visible')
        $('.about-body_bgcolor').css('overflow-y', 'visible')
    }, 4700) 
    setTimeout(function() {
        $('#onload3').fadeOut();
        $('.services-bgcolor').css('overflow-y', 'visible')
    }, 6300) 
    setTimeout(function() {
        $('#onload4').fadeOut();
        $('.portfolio_bgcolor').css('overflow-y', 'visible')
    }, 11400) 
};

function popup1 () {
    $('.service-icon1').css('background-color', '#06D6A0')    
}

function popup2 () {
    $('.service-icon2').css('background-color', '#06D6A0')    
}
function popup3 () {
    $('.service-icon3').css('background-color', '#06D6A0')    
}
function popup4 () {
    $('.service-icon4').css('background-color', '#06D6A0')    
}
function popup5 () {
    $('.service-icon5').css('background-color', '#06D6A0')    
}
function popup6 () {
    $('.service-icon6').css('background-color', '#06D6A0')    
}
