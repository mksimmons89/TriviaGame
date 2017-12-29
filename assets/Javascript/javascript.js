function submitAnswers(){
  var total = 5;
  var score = 0;

//obtaining user input
  var q1 = document.forms["quizform"]["q1"].value;
  var q2 = document.forms["quizform"]["q2"].value;
  var q3 = document.forms["quizform"]["q3"].value;
  var q4 = document.forms["quizform"]["q4"].value;
  var q5 = document.forms["quizform"]["q5"].value;



// validation
  if (q1 == null || q1 == ""){
      alert("you missed q1");
      return false;
    }
}
