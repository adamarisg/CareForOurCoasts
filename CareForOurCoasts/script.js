/*fact array*/
var factList= [
    "Oil spills are not the biggest problem",
    "Unfortunately there is more plastic than fish",
    "There are garbage patches that have millions of pieces of trash",
    "Microplastic can find itself into the food chain",
    "Most plastics take 400 years to degrade",
    "70% percent of ocean trash sinks to the seafloor making it unrecoverable"
  ]
  var fact = document.getElementById("fact");
  var myButton = document.getElementById("myButton");
  var count = 0;
  
  myButton.addEventListener("click",displayFact);
  
  function displayFact(){
    fact.innerHTML = factList[count];
    count++;
    if(count == factList.length){
      count=0;
    }
  }