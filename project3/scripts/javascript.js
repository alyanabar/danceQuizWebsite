var processEntries = function() {
    var answer = true;
    //question 1 check
    if (document.getElementById("q1ans1").checked) {
     document.getElementById("q1ans1").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
        answer = false;
    }
    else {
        document.getElementById("q1ans1").nextElementSibling.nextElementSibling.innerHTML = "";
    }
    if (document.getElementById("q1ans2").checked) {
     document.getElementById("q1ans2").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
        answer = true;
    }
    else {
        document.getElementById("q1ans2").nextElementSibling.nextElementSibling.innerHTML = "";
    }
    if (document.getElementById("q1ans3").checked) {
     document.getElementById("q1ans3").nextElementSibling.nextElementSibling.innerHTML = "Incorrect";
        answer = true;
    }
    else {
        document.getElementById("q1ans3").nextElementSibling.nextElementSibling.innerHTML = "";
    }
    if (document.getElementById("q1ans4").checked) {
    document.getElementById("q1ans4").nextElementSibling.nextElementSibling.innerHTML = "Correct!";
        answer = false;
    }
    else {
        document.getElementById("q1ans4").nextElementSibling.nextElementSibling.innerHTML = "";
    }
    
    //question 2 check 
    if (document.getElementById("q2ans1").checked) {
    document.getElementById("q2ans1").nextElementSibling.nextElementSibling.innerHTML = "Incorrect -- this answer should not be selected";
        answer = false;
    }
    else {
        document.getElementById("q2ans1").nextElementSibling.nextElementSibling.innerHTML = "Correct -- this answer should not be selected";
    }
    if (document.getElementById("q2ans2").checked) {
    document.getElementById("q2ans2").nextElementSibling.nextElementSibling.innerHTML = "Correct! You got it right";
        answer = false;
    }
    else {
        document.getElementById("q2ans2").nextElementSibling.nextElementSibling.innerHTML = "Incorrect -- this answer should be selected";
    }
    if (document.getElementById("q2ans3").checked) {
    document.getElementById("q2ans3").nextElementSibling.nextElementSibling.innerHTML = "Incorrect -- this answer should not be selected";
        answer = false;
    }
    else {
        document.getElementById("q2ans3").nextElementSibling.nextElementSibling.innerHTML = "Correct -- this answer should not be selected";
    }
    if (document.getElementById("q2ans4").checked) {
    document.getElementById("q2ans4").nextElementSibling.nextElementSibling.innerHTML = "Correct! You got it right";
        answer = false;
    }
    else {
        document.getElementById("q2ans4").nextElementSibling.nextElementSibling.innerHTML = "Incorrect -- this answer should be selected";
    }
    
    //question 3 check
    var question3 = document.getElementById("q3").value;
    question3 = question3.toLowerCase();
    if (question3 == "pointe") {
        document.getElementById("q3").nextElementSibling.innerHTML = "Correct!"
        answer = false;
    }
    else if (question3 == "") {
        document.getElementById("q3").nextElementSibling.innerHTML = "Incorrect -- no answer has been submitted";
    }
    else {
        document.getElementById("q3").nextElementSibling.innerHTML = "Incorrect -- this is not the correct answer";
    }
}
    
window.onload = function() {
    document.getElementById("check_answers").onclick = processEntries;
};