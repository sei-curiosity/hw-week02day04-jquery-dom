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

// function question1() {
// 	// your answer here
// 	$("body p").css('color','blue');
// }

// $("#button1").on('click', question1);

/**
 * Question 2:
 * When button 2 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

// function question2(){
// 	// your answer here
// 	$("body h2").text("AAlHindi");
// }

// $("#button2").on('click', question2);

/**
 * Question 3:
 * When button 3 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

// function question3(){
// 	// your answer here
	
// 	let li_items = $("ol li.falseFact");
// 	li_items.removeClass("falseFact");
// 	li_items.addClass("True Fact");
	

// }

// $("#button3").on('click', question3);

///////////////////////////////////////////////////////////////////////////////////////////////
// SECTION 2: Now you are on your own. Write the necessary code to accomplish the following. //
///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Question 4:
 * When button 4 is clicked, change the background color of the whole page to "pink"
 */

// your answer here
// function question4(){
// 	$('body').css('background-color','pink')

// }
// $("#button4").on('click', question4);

/**
 * Question 5:
 * When button 5 is clicked, change the color of all h2's to "green"
 */

// // your answer here
// function question5(){
// 	$('body h2').css('color','green')

// }
// $("#button5").on('click', question5);

/**
 * Question 6:
 * When button 6 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

//  // your answer here
//  function question6(){
// 	 $("body blockquote").html("<span>no quote</span>");
//  }
//  $("#button6").on('click',question6);


///////////////////////////////////////////////////////////////////////////////////////
// SECTION 3: This section is more difficult. Try your hand at the next 3 questions. //
///////////////////////////////////////////////////////////////////////////////////////

/**
 * Question 7:
 * When button 7 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

//  // your answer here
//  function question7(){
// 	 $("header h2").text("jQuery Ninja")
//  }
//  $("#button7").on('click',question7)

/**
 * Question 8:
 * Have the following code execute when button 8 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */

//  // your answer here
//  function question8(){
// 	$(".city").attr("src", "http://lorempixel.com/g/500/400/food");
//  }
//  $('#button8').on('click',question8);


/**
 * Question 9:
 * When button 9 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */

// // your answer here
// function question9(){
// 	$("body p").css({
// 		'color':'blue',
// 		'font-family':'Georgia'
// 	})
// }
// $("#button9").on('click',question9)

/**
 * Question 10:
 * When button 10 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * but with only one jQuery. $("selector").css({attribute: "value", attribute: "value"})
 */

// // your answer here
// function question10(){
// 	$("body p").css({
// 		'color':'blue',
// 		'font-family':'Georgia'
// 	})
// }
// $('#button10').on('click',question10)


