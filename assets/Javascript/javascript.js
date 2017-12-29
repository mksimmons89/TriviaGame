function submitAnswers(){
  var total = 8;
  var score = 0;

//obtaining user input
  var q1 = document.forms["quizform"]["q1"].value;
  var q2 = document.forms["quizform"]["q2"].value;
  var q3 = document.forms["quizform"]["q3"].value;
  var q4 = document.forms["quizform"]["q4"].value;
  var q5 = document.forms["quizform"]["q5"].value;
  var q6 = document.forms["quizform"]["q6"].value;
  var q7 = document.forms["quizform"]["q7"].value;
  var q8 = document.forms["quizform"]["q8"].value;


// validation

// this is the for loop that will run the function that says you can't miss selecting any of the questions. Below however, only applies to one question but we want it to run thru all eight, so in order to change q1 the q2, q3, ect, we need to put an eval on it. See below

    // for (i = 0; i <= total; i++) {
    //    if (q1 == null || q1 == ""){
    //        alert("you missed q1");
    //        return false;
    //      }
    for(i = 1; i <= total; i++){
       if (eval("q"+ i) == null || eval("q" + i) == ""){
           alert("you missed question " + i);
           return false;
         }


    }

}
