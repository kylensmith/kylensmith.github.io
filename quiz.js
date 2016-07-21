window.onload = function() {
    // current question being asked
    var currentQuestion = 0;
    // number of questions correctly answered
    var correct = 0;
    //array of question objects
    var qList = [];


    // note: there should not be other buttons on the page.
    var match = document.body.querySelectorAll('button');

    function hideAnswers(number) {
        for (i = number; i < match.length; i++) {
            match[i].style.visibility = "hidden";
        }
    };

    function showAnswers(number) {
        for (i = number; i < match.length; i++) {
            match[i].style.visibility = "visible";
        }
    };

    function confirmation() {
        document.getElementById("question").innerHTML = "Would you like to take a quiz?";
        document.getElementById("answer-1").innerHTML = "yes";
        document.getElementById("answer-2").innerHTML = "no";
        hideAnswers(2);
        document.getElementById("answer-1").onclick = function() {
            quiz();
            qList.shuffle;
            showAnswers(2);
            nextQ();    
        };


    };
    confirmation();


    // Array.prototype.shuffle = function() {
    //     var i = this.length,
    //         j, temp;
    //     if (i == 0) return this;
    //     while (--i) {
    //         j = Math.floor(Math.random() * (i + 1));
    //         temp = this[i];
    //         this[i] = this[j];
    //         this[j] = temp;
    //     }
    //     return this;

    // };

    //object constructor for the questions
    function question(question, answer1, answer2, answer3, answer4, correctAnswer, reply) {
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctAnswer = correctAnswer;
        this.reply = reply;
    };



    function quiz() {
        // list of question objects that are then pushed into the array
        firstQ = new question("What is a group of Wobbles called?", "Bobble", "Wubble", "Bubble", "Wobbley", "Bubble", "According to Steven Rayesky of the popular Philly Dev podcast, a group of Wobbles is a Bubble.")
        qList.push(firstQ);

        secondQ = new question("Which one of these is a client side language?", "Java", "C#", "Ruby", "JavaScript", "JavaScript", "JavaScript is a client side language.")
        qList.push(secondQ);

        thirdQ = new question("You plan to make a trip to which of these locations for a night out?", "Camden, NJ", "Lancaster, PA", "Wilmington, DE", "The Hub", "Wilmington, DE", "Wilmington, Delaware is where you are going for a night out!")
        qList.push(thirdQ);


        //pick answer 1
        document.getElementById("answer-1").onclick = function() {
            if (qList[currentQuestion].answer1 == qList[currentQuestion].correctAnswer) {
                correct++;
            }
            // if 
            currentQuestion += 1;
            displayAnswer();
        }

        //pick answer 2
        document.getElementById("answer-2").onclick = function() {
            if (qList[currentQuestion].answer2 == qList[currentQuestion].correctAnswer) {
                correct++;
            }
            currentQuestion += 1;
            displayAnswer();
        }

        // picked answer 3
        document.getElementById("answer-3").onclick = function() {
            if (qList[currentQuestion].answer3 == qList[currentQuestion].correctAnswer) {
                correct++;
            }
            currentQuestion += 1;
            displayAnswer();
        }

        //picked answer 4
        document.getElementById("answer-4").onclick = function() {
            if (qList[currentQuestion].answer4 == qList[currentQuestion].correctAnswer) {
                correct++;
            }
            currentQuestion += 1;
            displayAnswer();
            // nextQ();
        }


    };

    function passFail(){
        if(correct > qList.length/2){
            return "passed";
        }
        else 
            return "failed";

    };

    function nextQ() {
        if (currentQuestion <= qList.length -1){
        this.loadQ = document.getElementById("question").innerHTML = qList[currentQuestion].question;
        this.loanA1 = document.getElementById("answer-1").innerHTML = qList[currentQuestion].answer1;
        this.loadA2 = document.getElementById("answer-2").innerHTML = qList[currentQuestion].answer2;
        this.loadA3 = document.getElementById("answer-3").innerHTML = qList[currentQuestion].answer3;
        this.loadA4 = document.getElementById("answer-4").innerHTML = qList[currentQuestion].answer4;
        }
        else {
            hideAnswers(0);
            document.getElementById("question").innerHTML = "You answered " + correct + " out of " + qList.length + " questions correctly.  You have " +passFail()+ " this quiz.";
            hideAnswers(0);
        }
    };


    function displayAnswer() {
        document.getElementById("question").innerHTML = qList[currentQuestion-1].reply;
        hideAnswers(0);
        setTimeout(function() { nextQ(); if (currentQuestion <= qList.length -1){showAnswers(0);}; }, 6000);
    };



};
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Status Help