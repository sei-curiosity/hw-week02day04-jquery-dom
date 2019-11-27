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
	$('p').css('color', 'blue')
	// your answer here
}

$("#button1").on('click', question1);

/**
 * Question 2:
 * When button 2 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

function question2(){
	
	let returnedH2s = $('h2')
	for (let i = 0 ; i < returnedH2s.length ; i++){
		returnedH2s[i].innerText = "Shahad Alalmai"
	}
	// console.log(returnedH2s)


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

	let returnedLis = $('ol li.falseFact')
	for (let i = 0 ; i < returnedLis.length ; i++){
		returnedLis[i].innerText = "True Fact"
	}
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

 function question4(){
	 
	 $('body').css('background', 'pink')
	 
	
 }

 $("#button4").on('click', question4);

// your answer here

/**
 * Question 5:
 * When button 5 is clicked, change the color of all h2's to "green"
 */

 function question5(){
	 $('h2').css('color', 'green')
 }

$("#button5").on('click', question5);

// your answer here

/**
 * Question 6:
 * When button 6 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */

 function question6(){
	
	let bq = $('blockquote')
	for (let i = 0 ; i < bq.length ; i++){
		bq[0].innerHTML = "<span>no quote</span>"
	}

	//  console.log("button 6 clicked")
 }

$("#button6").on('click', question6);

 // your answer here

///////////////////////////////////////////////////////////////////////////////////////
// SECTION 3: This section is more difficult. Try your hand at the next 3 questions. //
///////////////////////////////////////////////////////////////////////////////////////

/**
 * Question 7:
 * When button 7 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */
function question7(){

	let returnedh1 = $('header h1')
	for (let i = 0 ; i < returnedh1.length ; i++){
		returnedh1[0].innerText = "jQuery Ninja"
	}
}

$("#button7").on('click', question7);

 // your answer here

/**
 * Question 8:
 * Have the following code execute when button 8 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */


function question8(){

	$(".city").attr("src", "http://lorempixel.com/g/500/400/food");

}

$("#button8").on('click', question8);
 // your answer here

/**
 * Question 9:
 * When button 9 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */

function question9(){

	$('p').css({
		"color": "blue",
		"font-family": "Georgia"
	})

}

$("#button9").on('click', question9);

// your answer here

/**
 * Question 10:
 * When button 10 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 * but with only one jQuery. $("selector").css({attribute: "value", attribute: "value"})
 */


function question10(){

	console.log("hey am 10")
	console.log("Lol, I've already done this in Q#9")
	question9()

}

$("#button10").on('click', question10);

// your answer here


