/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */

////////////////////////////////////////////////////////////////////////////////
// SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE. //
////////////////////////////////////////////////////////////////////////////////

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */

function question1() {
	// your answer here
}

$("#button1").on('click', question1);

/**
 * Question 2:
 * When button 2 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

function question2(){
	// your answer here
}

$("#button2").on('click', question2);

/**
 * Question 3:
 * When button 3 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

function question3(){
	// your answer here
}

$("#button3").on('click', question3);

///////////////////////////////////////////////////////////////////////////////////////////////
// SECTION 2: Now you are on your own. Write the necessary code to accomplish the following. //
///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Question 4:
 * When button 4 is clicked, change the background color of the whole page to "pink"
 */

// your answer here

/**
 * Question 5:
 * When button 5 is clicked, change the color of all h2's to "green"
 */

// your answer here

/**
 * Question 6:
 * When button 6 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

 // your answer here

///////////////////////////////////////////////////////////////////////////////////////
// SECTION 3: This section is more difficult. Try your hand at the next 3 questions. //
///////////////////////////////////////////////////////////////////////////////////////

/**
 * Question 7:
 * When button 7 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

 // your answer here

/**
 * Question 8:
 * Have the following code execute when button 8 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

 // your answer here

/**
 * Question 9:
 * When button 9 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */

// your answer here

/**
 * Question 10:
 * When button 10 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * but with only one jQuery. $("selector").css({attribute: "value", attribute: "value"})
 */

// your answer here


$(function(){
	$("header h3").css({color:"red"})
})

$(function(){
	$("header h1").css({color:"#fcba03"})
})

$(function(){
	$("header h2").css({color:"#fc2803"})
})

$(function(){
	$("header p").css({color:"#03fca5"})
})

$(function(){
	$("#button1 p").css({color:"#03fcfc"})
})


$(function(){
	$("#button2 p").css({color:"#0390fc"})
})

$(function(){
	$("#button3 p").css({color:"#2d03fc"})
})

$(function(){
	$("#button4 p").css({color:"#6b03fc"})
})

$(function(){
	$("#button5 p").css({color:"#8a71ad"})
})

$(function(){
	$("#button6 p").css({color:"#4d3d63"})
})

$(function(){
	$("#button7 p").css({color:"#5e3a50"})
})

$(function(){
	$("#button8 p").css({color:"#5e3a42"})
})

$(function(){
	$("#button9 p").css({color:"#806262"})
})

$(function(){
	$("#button10 p").css({color:"#73807a"})
})

$(function(){
	$(".wrapper h2").css({color:"#484a49"})
})

$(function(){
	$(".wrapper .p1").css({color:"#77b071"})
})

$(function(){
	$(".wrapper .p2").css({color:"#9cb071"})
})

$(function(){
	$("blockquote").css({color:"#b0b071"})
})

$(function(){
	$(".wrapper .p3").css({color:"#b09371"})
})


$(function(){
	$(".ol").css({color:"#945913"})
})

$(function(){
	$(".wrapper .p3").css({color:"#8c2a06"})
})

$(function(){
	$(" .p4").css({color:"#8c1806"})
})
