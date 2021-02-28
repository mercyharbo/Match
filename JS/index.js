document.querySelector("button").addEventListener("click", loveCalculator);

function loveCalculator(e) {
    //javascript is a synchronous/runtime language, it reads codes line by line, so it is better to prevent default from the beginning
    e.preventDefault();

    // let get the input value the user enter by using the document and value grab the input value 
    let name = document.getElementById("yourName").value;
    let crush = document.getElementById("crushName").value;
    
    let calcMatch = Math.floor((Math.random() * 100) + 1);
    
    // Let specify the message the user get by their percentage by using the if, else statement
    
    if (calcMatch > 50) {
        let youMatch = document.getElementById("result").innerHTML = "Congratulation, you and " + crush + " " + " matched each other by " 
        + calcMatch + "%. " + "Remember: " + " Nobody is perfect, but you're so close and it's scary 👌👸"
    }

    else if (calcMatch < 50) {
        let youMatch = document.getElementById("result").innerHTML = "Oops, sorry you & " + crush + " " + " doesn't match as your compatibility is " 
        + calcMatch + "%. " + "Remember: if you're willing to risk it and see where things end" + " - Hearts are made to be broken anyway."
    }
}





