
var $q1_Global = undefined;
var $q2_Global = undefined;
var $options_Global = undefined;
var $choiceQuestion = undefined;

function randomQuestion(arr) {
    return Math.floor(Math.random()*Math.floor(arr.length));
}


function Question(question, chooseAnswer, correctAnswer) {
    this.question = question;
    this.chooseAnswer = chooseAnswer;
    this.correctAnswer = correctAnswer
}

var theQuestionLabel = document.getElementById('lblTheQuestion');
var theListOfButtons  = document.getElementById('listOfButtons');
var thedivTheResult = document.getElementById('divTheResult');


///////////////////////////////////////
///      BEGIN 
///Application startup block
///////////////////////////////////////


$q1_Global = new Question('What is the name of the Instructor for this course?', ['Mike', 'Jonas', 'Terry'], 1);
$q2_Global= new Question('How important it is to learn JavaScript?', ['very', 'not so much', 'what is javascript?'], 0);
$options_Global = [$q1_Global, $q2_Global];

var randomNumber = randomQuestion($options_Global);


console.log($options_Global[randomNumber].question);
$choiceQuestion = $options_Global[randomNumber];
console.log($choiceQuestion.correctAnswer);

var theButtons = [];
for(var i = 0; i<$choiceQuestion.chooseAnswer.length; i++){
    var tempButton = addButton(i, $choiceQuestion.chooseAnswer[i]);
    theButtons.push(tempButton);
}

theListOfButtons.innerHTML = theButtons.join(' ');
theQuestionLabel.innerHTML = $choiceQuestion.question;

///////////////////////////////////////
///      END 
///Application startup block
///////////////////////////////////////



function addButton(indexInArr, btnText){
    var btnString  ='<li> <button value="' + indexInArr + '" type="button" onclick="selectedAnswer_CLICK(this); return false;">' + btnText + '</button></li>';
    return btnString;
}

function selectedAnswer_CLICK(el){
    var test = el;
    console.log(el.value);

    var correctAnswer = false;
    if (el.value == $choiceQuestion.correctAnswer){
        correctAnswer = true;
    }

    if(correctAnswer){
        thedivTheResult.innerHTML = "Correct!";
        thedivTheResult.style.color ="#0bad62";
    }else{
        thedivTheResult.innerHTML = "Sorry, try again.";
        thedivTheResult.style.color ="#ad0b0b";
    }

    console.log(correctAnswer);
}



var theInputField = document.getElementById('txtBoxInput1');
function ReadTheText_CLICK(){


    alert(theInputField.value);
}

var theOutputWrapper = document.getElementById('divOutputWrapper');

function ReadTheText_ONKEY_EVENT(){
    theOutputWrapper.innerHTML = theInputField.value;
}


