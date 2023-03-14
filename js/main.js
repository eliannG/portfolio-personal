
$('.education-body').css('overflow-y', 'hidden')
$('.about-body_bgcolor').css('overflow-y', 'hidden')

window.onload = function() {
    setTimeout(function() {
        $('#onload').fadeOut();
    }, 1500) 
    setTimeout(function() {
        $('#onload2').fadeOut();
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
    setTimeout(function() {
        $('#onload5').fadeOut();
        $('.education-body').css('overflow-y', 'visible')
    }, 10800) 
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

function menuClick5 () {
    setTimeout(function() {
        window.location.href ='../pages/portfolio.html'
    }, 1650) 
}   

function menuClick1 () {
    setTimeout(function() {
        window.location.href ='../pages/home.html'
    }, 1650) 
}

function menuClick2 () {
    setTimeout(function() {
        window.location.href ='../pages/about.html'
    }, 1650) 
}

function menuClick3 () {
    setTimeout(function() {
        window.location.href ='../pages/education.html'
    }, 1650) 
}

function menuClick4 () {
    setTimeout(function() {
        window.location.href ='../pages/services.html'
    }, 1650) 
}

function menuClick6 () {
    setTimeout(function() {
        window.location.href ='../pages/contact.html'
    }, 1650) 
}
