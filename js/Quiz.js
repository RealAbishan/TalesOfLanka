function check() {
    var q1 = document.questions.qus1.value;
    var q2 = document.questions.qus2.value;
    var q3 = document.questions.qus3.value;
    var q4 = document.questions.qus4.value;
    var q5 = document.questions.qus5.value;
    var q6 = document.questions.qus6.value;
    var q7 = document.questions.qus7.value;
    var q8 = document.questions.qus8.value;
    var q9 = document.questions.qus9.value;
    var q10 = document.questions.qus10.value;
    var Correct_answers = 0;
    var marks = 0;

    if(q1 == "30m (98ft)") {
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img1").src="./Assets/img/correct.png";
    }else{
        marks--;
        document.getElementById("quest_1").innerHTML = "Your answer is Wrong, The correct answer is 30m(98ft)";
        document.getElementById("img1").src="./Assets/img/wrong.jpg";
    }

    if(q2 == "Galle"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img2").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_2").innerHTML = "Your answer is Wrong, The correct answer is Galle";
        document.getElementById("img2").src="./Assets/img/wrong.jpg";;
    }
	
	if(q3 == "Pidurutalagala – Nuwara Eliya"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img3").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_3").innerHTML = "Your answer is Wrong, The correct answer is Pidurutalagala – Nuwara Eliya";
        document.getElementById("img3").src="./Assets/img/wrong.jpg";;
    }

	if(q4 == "Portugese"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img4").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_4").innerHTML = "Your answer is Wrong, The correct answer is Portugese";
        document.getElementById("img4").src="./Assets/img/wrong.jpg";;
    }

	if(q5 == "Watagoda"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img5").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_5").innerHTML = "Your answer is Wrong, The correct answer is Watagoda";
        document.getElementById("img5").src="./Assets/img/wrong.jpg";;
    }
	
	if(q6 == "Natural Limestone Pool") {
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img6").src="./Assets/img/correct.png";
    }else{
        marks--;
        document.getElementById("quest_6").innerHTML = "Your answer is Wrong, The correct answer is Natural Limestone Pool";
        document.getElementById("img6").src="./Assets/img/wrong.jpg";
    }

    if(q7 == "46Km"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img7").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_7").innerHTML = "Your answer is Wrong, The correct answer is 46Km";
        document.getElementById("img7").src="./Assets/img/wrong.jpg";;
    }
	
	if(q8 == "Hummanaya Blowhole"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img8").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_8").innerHTML = "Your answer is Wrong, The correct answer is Hummanaya Blowhole";
        document.getElementById("img8").src="./Assets/img/wrong.jpg";;
    }

	if(q9 == "1765"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img9").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_9").innerHTML = "Your answer is Wrong, The correct answer is 1765";
        document.getElementById("img9").src="./Assets/img/wrong.jpg";;
    }

	if(q10 == "48m"){
        Correct_answers++;
        marks = marks + 2;
        document.getElementById("img10").src="./Assets/img/correct.png";
    }else {
        marks--;
        document.getElementById("quest_10").innerHTML = "Your answer is Wrong, The correct answer is 48m";
        document.getElementById("img10").src="./Assets/img/wrong.jpg";;
    }


    var div = document.getElementById("a_submit");
    if(Correct_answers >= 0 && Correct_answers <=3){
        div.style.backgroundColor = '#ff0000';
    }if(Correct_answers >= 4 && Correct_answers <=7){
        div.style.backgroundColor = '#000080';
    }if(Correct_answers >= 8 && Correct_answers <=10){
        div.style.backgroundColor = '#006600';
    }
	
    document.getElementById("a_submit").style.visibility = "visible";
	document.getElementById("Quiztime").style.display ='none';
    document.getElementById("correct").innerHTML = "Correct answers are : " + Correct_answers;
    document.getElementById("marks").innerHTML = "Your Marks is: " + marks;
    document.getElementById("time").innerHTML = "Your Time is : " + (120-count_Time) + " Seconds";
    document.getElementById("submit").style.display ='none';


}


var count_Time = 120;
function countdown(){
    document.getElementById("Quiztime").style.display="block"
    if(count_Time > 0){
        count_Time--;
        document.getElementById("Quiztime").innerHTML = "Remaining Time "+count_Time+" seconds.";
        setTimeout("countdown()", 1000);
    }else{
        check();
    }
}
//countDown()
document.getElementById("Quiztime").style.display="none"
setTimeout("countdown()", 3000);