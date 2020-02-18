

//first load functions
 


  $(document).ready(function(){


    $('#buttonPi').click(function pi (){
    	let number=$("#piInput").val();
    	number=parseInt(number);
if (number<15 && Number.isInteger(number))
	{$( "#pii" ).empty();
  return  	$( "#pii" ).append(Math.PI.toFixed(number));}
  else 
  	return alert("Number too large or not an integer");
});



 $('#buttonE').click(function e (){
    	let numberE=$("#eInput").val();
    	numberE=parseInt(numberE);
if (numberE<15 && Number.isInteger(numberE))
	{$( "#ee" ).empty();
  return  	$( "#ee" ).append(Math.exp(1).toFixed(numberE));}
  else 
  	return alert("Number too large or not an integer");
});
  });


  function fibo (){
	let number=document.getElementById("fiboInput").value;
	let array=[];
	for(let i=0; i<=number;i++){
	  if(array.length<2){
	  array.push(i);
	  }
	  else{
		array[i]=array[i-1]+array[i-2];
	  }
	}
	document.getElementById("fibo").value = array;
  return console.log(array);
  }
