
var nums = 100;

var fizzSound = new Audio ('sound/fizz.mp3');

var buzzSound = new Audio('sound/buzz.mp3');

var list = document.getElementById('list');


function delay(i){
  setTimeout(function(){
    if( i % 3 === 0 && i % 5 === 0 ){
      console.log("FizzBuzz")
      buzzSound.play();
      list.innerHTML += "<li class='fizzbuzz'>" + "FizzBuzz" + "</li>"
    }else{
      if (i % 3 === 0){
        fizzSound.play();
        console.log('Fizz');
        list.innerHTML += "<li class='fizz'>" + "Fizz" + "</li>"
      }else if ( i % 5 === 0){
        console.log('Buzz');
        buzzSound.play();
        list.innerHTML += "<li class='buzz'>" + "Buzz" + "</li>"
      }else{
        console.log(i);
        list.innerHTML += "<li>" + i + "</li>"
              }
    }
  }, i * 300)
};


document.getElementById('btn').addEventListener('click',function(){
  for (i = 1 ; i <= nums ; i++){
    delay(i);
}});
