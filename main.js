	// quiz begins, no answers correct
	var correct = 0;
	
	var answer1 = prompt("What programming language is a gem?");
	if(answer1.toUpperCase() === 'RUBY') {
		correct += 1;
	}
	
	var answer2 = prompt("What programming language is a snake?");
	if(answer2.toUpperCase() === 'PYTHON') {
		correct +=1;	
	}
	
	var answer3 = prompt("What language is used to style web pages?");
	if(answer3.toUpperCase() === "CSS") {
		correct += 1;
	}
	
	var answer4 = prompt("What language makes up the structure of a web page?");
	if(answer4.toUpperCase() === "HTML") {
		correct += 1;
	}
	
	var answer5 = prompt("What programming language is used to add interactiviy to a web page?");
	if(answer5.toUpperCase() === "JAVASCRIPT"){
		correct += 1;
	}
	// output results
	document.write("<div class='container'><div class='jumbotron text-center'><h3>You got " + correct + " out of 5 questions correct!</h3>");

	// output rank
	if(correct === 5){
		document.write("<p><strong>You get a <span id='gold'>gold</span> crown!</strong></p>");
	} else if (correct >=3){
		document.write("<p><strong>You get a <span id='silver'>silver</span> crown!</strong></p>");
	} else if (correct >=1){
		document.write("<p><strong>You get a <span id='orange'>bronze</span> crown!</strong></p>");
	} else {
		document.write("<p><strong>No crown for you. You need to study more.</strong></p></div></div>");
	}
