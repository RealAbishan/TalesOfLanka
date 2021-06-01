
//increases font size of the page
function increaseFont(){
    body = document.getElementById('fontChange');
    style = window.getComputedStyle(body, null).getPropertyValue('font-size');
	setSize = parseFloat(style);
	body.style.fontSize = (setSize + 3) + 'px'; //increases the current font size of the page by 3px 
}


//decreases font size of the page
function decreaseFont(){
	body = document.getElementById('fontChange');
	style = window.getComputedStyle(body, null).getPropertyValue('font-size');
	settSize = parseFloat(style);
	body.style.fontSize = (setSize -3) + 'px'; //decreases the current font size of the page by 3px 
}