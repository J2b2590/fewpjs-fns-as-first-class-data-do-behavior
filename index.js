/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */




function greet(e){

  let hr = parseInt(e.split(":"))
   
  if (hr < 12){
  return "Good Morning"
  } else if (hr > 17 ){
    return "Good Evening"
  }else{
    return "Good Afternoon"
  }

}

function displayMessage(e){
  document.getElementById("greeting").innerText = e
}

