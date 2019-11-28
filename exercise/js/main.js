$(function(){
    $('h1').css('color','#802b00')
    $('.p1').css('color','teal');
    $('h2').css('color','blue');
    $('.p0').css('color','red');
    $('.p2').css('color','green');
    $('li').css('color','rgb(255, 153, 102)');
    $('.p4').css('color','rgb(128, 96, 0)' , "font-family", "Arial, Helvetica, sans-serif");
    $('blockqoute').css(' background','rgb(255, 198, 26)');
})

function question1() {
	$('p').css('color','blue');




}
$("#button1").on('click', question1);

function question2(){
$('h2').text('OMAR')
}

$("#button2").on('click', question2);


function question3(){
	$('.falseFact').text("TrueFact");
}

$("#button3").on('click', question3);


function question4(){
	$('body').css('background','pink')
}

$("#button4").on('click', question4);


function question5(){
	$('h2').css('color','green');
}

$("#button5").on('click', question5);



function question6(){
    $('blockquotes').html('<span>no quote</span>')
    
}

$("#button6").on('click', question6);



function question7(){
	$('header h1').text('jQuery Ninja')
}


$("#button7").on('click', question7);


function question8(){
    $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
}

$("#button8").on('click', question8);



function question9(){
    $('p').css('color','blue');
    $('p').css('fontWieght','Georgia')
}

$("#button9").on('click', question9);

function question10(){

    $('p').css({
        color:'blue',
        "font-weight":'Georgia'


    })
    
}

$("#button10").on('click', question10);


