console.log(localStorage)

let testArray = localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : [0,0,0,0,0,0]

console.log(testArray);
let prisTotal = localStorage.getItem('prisT') ? JSON.parse(localStorage.getItem('prisT')) : 0
console.log(prisTotal);
function fungera(){
    document.getElementById("antal1").innerHTML = testArray[0];
    document.getElementById("antal2").innerHTML = testArray[1]; 
    document.getElementById("antal3").innerHTML = testArray[2]; 
    document.getElementById("antal4").innerHTML = testArray[3]; 
    document.getElementById("antal5").innerHTML = testArray[4]; 
    document.getElementById("antal6").innerHTML = testArray[5]; 
}


function add(produkt, pris){
    switch(produkt) {
        case 1:
            testArray[0]++;
            localStorage.setItem('array',JSON.stringify(testArray))
            document.getElementById("antal1").innerHTML = testArray[0];
            break;
        case 2:
            testArray[1]++;
            localStorage.setItem('array',JSON.stringify(testArray))
            document.getElementById("antal2").innerHTML = testArray[1]; 
            break;
        case 3:
            testArray[2]++;
            localStorage.setItem('array',JSON.stringify(testArray))
            document.getElementById("antal3").innerHTML = testArray[2]; 
            break;  
        case 4:
            testArray[3]++;
            localStorage.setItem('array',JSON.stringify(testArray))
            document.getElementById("antal4").innerHTML = testArray[3]; 
            break;
        case 5:
            testArray[4]++;
            localStorage.setItem('array',JSON.stringify(testArray))
            document.getElementById("antal5").innerHTML = testArray[4]; 
            break;  
        case 6:
            testArray[5]++;
            localStorage.setItem('array',JSON.stringify(testArray))
            document.getElementById("antal6").innerHTML = testArray[5]; 
            break;  
        default:
      }
      prisTotal+=pris;
      localStorage.setItem('prisT',JSON.stringify(prisTotal))
      console.log(localStorage.getItem('prisT'))

    }
function remove(produkt, pris){
    if (testArray[produkt-1]>0) {
        prisTotal-=pris;
    }
    switch(produkt) {
        case 1:
            if(testArray[0]>0){
                testArray[0]--;
                localStorage.setItem('array',JSON.stringify(testArray))
                document.getElementById("antal1").innerHTML = testArray[0];
            }
            break;
        case 2:
            if(testArray[1]>0){
                testArray[1]--;
                localStorage.setItem('array',JSON.stringify(testArray))
                document.getElementById("antal2").innerHTML = testArray[1];
            }
            break;
        case 3:
            if(testArray[2]>0){
                testArray[2]--;
                localStorage.setItem('array',JSON.stringify(testArray))
                document.getElementById("antal3").innerHTML = testArray[2];
            }
            break;  
        case 4:
            if(testArray[3]>0){
                testArray[3]--;
                localStorage.setItem('array',JSON.stringify(testArray))
                document.getElementById("antal4").innerHTML = testArray[3];
            }
            break;
        case 5:
            if(testArray[4]>0){
                testArray[4]--;
                localStorage.setItem('array',JSON.stringify(testArray))
                document.getElementById("antal5").innerHTML = testArray[4];
            }
            break;  
        case 6:
            if(testArray[5]>0){
                testArray[5]--;
                localStorage.setItem('array',JSON.stringify(testArray))
                document.getElementById("antal6").innerHTML = testArray[5];
            }
            break;  
        default:
    }
    localStorage.setItem('prisT',JSON.stringify(prisTotal))
    console.log(localStorage.getItem('prisT'))
}
function prisBeräkning(){
    const prisHållare = document.getElementById("prisHållare")
    if(prisHållare.childElementCount !== 0){
        prisHållare.removeChild(prisHållare.firstElementChild);
    }
    let prisElement = document.createElement("li");
    prisElement.innerHTML = "totalt: "+prisTotal+"kr";
    prisHållare.appendChild(prisElement);
}
