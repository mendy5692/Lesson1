const counters = {};

function clicked(element) {
  if (element.id in counters) {
    counters[element.id]++;
  } else {
    counters[element.id] = 1;
  }
  if (element.style.color === "black") {
    element.style.color = "red";
    element.style.backgroundColor = "white";
  } else {
    element.style.color = "black";
    element.style.backgroundColor = "chartreuse";
  }
  element.innerHTML = counters[element.id];
}

function reset(){
    for(const hech in counters){
        counters[hech] = ''
        document.getElementById(hech).innerHTML = counters[hech];
        document.getElementById(hech).style.backgroundColor = "chartreuse";
    }
    
}
