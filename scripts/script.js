

//first load functions
 


  $(document).ready(function(){


    $('#button').click(function pi (){
    	var number=$("#piInput").val();
$( "#pii" ).empty();
  return  	$( "#pii" ).append(Math.PI.toFixed(number));
 

}
);
  });
