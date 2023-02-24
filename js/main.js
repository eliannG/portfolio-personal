
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
};



