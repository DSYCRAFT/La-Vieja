// Function called whenever user tab on any box
function myfunc() {

    //Setting variables
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    // Checking if Player X won or not and after
    // that disabled all other boxes
    if ((b1 == "X") && (b2 == "X") && (b3 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b4").disabled = true
        document.getElementById("b5").disabled = true
        document.getElementById("b6").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }

    else if((b4 == "X") && (b5 == "X") && (b6 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }
    else if((b7 == "X") && (b8 == "X") && (b9 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
      }
    else if((b1 == "X") && (b4 == "X") && (b7 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b5").disabled = true
        document.getElementById("b6").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }
    else if((b2 == "X") && (b5 == "X") && (b8 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b4").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b5").disabled = true
        document.getElementById("b9").disabled = true
      }
    else if((b3 == "X") && (b6 == "X") && (b9 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b4").disabled = true
        document.getElementById("b5").disabled = true
      }
    else if((b1 == "X") && (b5 == "X") && (b9 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b4").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b6").disabled = true
      }
    else if((b3 == "X") && (b5 == "X") && (b7 == "X")) {
        document.getElementById("print").innerHTML = "THE PLAYER X WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b4").disabled = true
        document.getElementById("b6").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }

 
   // Checking if Player X won or not and after
    // that disabled all other boxes
    else if ((b1 == "O") && (b2 == "O") && (b3 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b4").disabled = true
        document.getElementById("b5").disabled = true
        document.getElementById("b6").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }

    else if((b4 == "O") && (b5 == "O") && (b6 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }
    else if((b7 == "O") && (b8 == "O") && (b9 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
      }
    else if((b1 == "O") && (b4 == "O") && (b7 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b5").disabled = true
        document.getElementById("b6").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }
    else if((b2 == "O") && (b5 == "O") && (b8 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b4").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b5").disabled = true
        document.getElementById("b9").disabled = true
      }
    else if((b3 == "O") && (b6 == "O") && (b9 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b4").disabled = true
        document.getElementById("b5").disabled = true
      }
    else if((b1 == "O") && (b5 == "O") && (b9 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b4").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b3").disabled = true
        document.getElementById("b7").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b6").disabled = true
      }
    else if((b3 == "O") && (b5 == "O") && (b7 == "O")) {
        document.getElementById("print").innerHTML = "THE PLAYER O WON!!";
        document.getElementById("b1").disabled = true
        document.getElementById("b2").disabled = true
        document.getElementById("b4").disabled = true
        document.getElementById("b6").disabled = true
        document.getElementById("b8").disabled = true
        document.getElementById("b9").disabled = true
      }
    


    // Checking of Player O finish
    // Here, checking about tie
    else if ((b1== "X" || b1 == "O") && (b2== "X" || b2 == "O") && (b3== "X" || b3 == "O")
     && (b4== "X" || b4 == "O") && (b5== "X" || b5 == "O") && (b6== "X" || b6 == "O") 
     && (b7== "X" || b7 == "O") && (b8== "X" || b8 == "O") && (b9== "X" || b9 == "O")) {
         document.getElementById("print").innerHTML = "The Vieja won..." 
     }
    
     else {
          // Here, printing result
          if (flag == 1){
            document.getElementById("print").innerHTML = "Player X turn"
          }

          else {
            document.getElementById("print").innerHTML = "Player 0 turn"
          }
     }


}
// Function to reset game
function reset() { 
    location.reload();
    document.getElementsByName("b1").value = "";
    document.getElementsByName("b2").value = "";
    document.getElementsByName("b3").value = "";
    document.getElementsByName("b4").value = "";
    document.getElementsByName("b5").value = "";
    document.getElementsByName("b6").value = "";
    document.getElementsByName("b7").value = "";
    document.getElementsByName("b8").value = "";
    document.getElementsByName("b9").value = "";
}


/*  function check turn of the player 
and put accordingly value X or O*/ 
flag = 1;
function myfunc_1() { 
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}


function myfunc_2() { 
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}


function myfunc_3() {
        if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}


function myfunc_4() {
            if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_7() { 
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}