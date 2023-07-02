

localStorage.removeItem('Punkte');

let points = 0;





function newNumber(){

    let newsolution = parseInt(number1.innerText) +  parseInt(number2.innerText);
    // console.log(solution);
    
    // document.getElementById("solutionTest").innerText = solution;
    
    return newsolution;
    

}

function MathGame (){

    
    
    let number1 = document.getElementById("number1");

number1.innerText = Math.floor(Math.random() * 10);

let number2 = document.getElementById("number2");

number2.innerText = Math.floor(Math.random() * 10);

let solution = parseInt(number1.innerText) +  parseInt(number2.innerText);
// console.log(solution);

document.getElementById("solutionTest").innerText = solution;



}

 

function toLocalstorage(key, value){
    localStorage.setItem(key, value);
}



MathGame();


function submit(solution){
    
    thisSolution = solution;
    
    let UserInput = document.getElementById("userInput").value;
    
    let UserInputInt =  parseInt(UserInput); 

    // console.log(UserInputInt);
    
    // let points;

    // if(points != true){
    //    let points = 0;
    // }
    console.log(thisSolution);
    
    if (solution ==UserInputInt){
        points++;
        console.log(points);
    } else{
        toLocalstorage('Punkte', JSON.stringify(points));
        // localStorage.setItem(Punkte, points);
        window.open("score.html")
    
    }
    if(points==2){

        toLocalstorage('Punkte', JSON.stringify(points));
        // localStorage.setItem(Punkte, points);
        window.open("level2.html")
    }

    
}



// submit();
