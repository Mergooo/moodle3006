

// Hole aus LS (im JSON Format)
let initDataRaw = localStorage.getItem('Punkte');

// JSON konvertieren (aus JSON Format wird ein [] mit Objekten)
let points = JSON.parse(initDataRaw);


console.log("Du hast"+points+"punkte")


function newNumberLV2(){

    let newsolution = parseInt(number1.innerText) +  parseInt(number2.innerText);
    // console.log(solution);
    
    // document.getElementById("solutionTest").innerText = solution;
    
    return newsolution;
    

}

function MathGameLV2 (){

    
    
    let number1 = document.getElementById("number1");

number1.innerText = Math.floor(Math.random() * 100);

let number2 = document.getElementById("number2");

number2.innerText = Math.floor(Math.random() * 100);

let solution = parseInt(number1.innerText) +  parseInt(number2.innerText);
// console.log(solution);

document.getElementById("solutionTest").innerText = solution;



}

 

function toLocalstorageLV2(key, value){
    localStorage.setItem(key, value);
}



MathGameLV2();


function submitLV2(solution){
    
    thisSolution = solution;
    
    let UserInput = document.getElementById("userInput").value;
    
    let UserInputInt =  parseInt(UserInput); 


    console.log(thisSolution);
    
    if (solution ==UserInputInt){
        points++;
        console.log(points);
    } else{
        toLocalstorageLV2('Punkte', JSON.stringify(points));
        // localStorage.setItem(Punkte, points);
        window.open("score.html")
    
    }
    if(points==4){

        toLocalstorageLV2('Punkte', JSON.stringify(points));
        // localStorage.setItem(Punkte, points);
        window.open("score.html")
    }

    
}

    



// submit();

