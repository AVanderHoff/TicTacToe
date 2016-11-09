
var currentURL = window.location.origin;

var player = "X";

function move(move){
	
	// data
	var obj = {
		move:move,
		player:player
	};

	// sends move and player to controller.js
	// recieves back move if valid to set board
	// receivs back status of game Win for either player or Tie
	$.post(currentURL + "/move" , obj, function(res){
		
		player = res.next;
		$("#" + res.move).html(res.current);

		if(res.win === "X"){
			$("#status").html("X wins");
			buttonEnableDisable(true);
		}
		else if(res.win === "O"){
			$("#status").html("O wins");
			buttonEnableDisable(true);
		}
		else if(res.win === "TIE"){
			$("#status").html("Tie Game");
			buttonEnableDisable(true);
		}

		
	});

}

// reset board on index.html
// re enable buttons
function reset(){
	$.post(currentURL + "/reset" );
	$("#1").html("_");
	$("#2").html("_");
	$("#3").html("_");
	$("#4").html("_");
	$("#5").html("_");
	$("#6").html("_");
	$("#7").html("_");
	$("#8").html("_");
	$("#9").html("_");
	$("#status").html("");
	buttonEnableDisable(false);
}

// enables or disables buttons
function buttonEnableDisable(bool){
	$("#1").prop('disabled',bool);
	$("#2").prop('disabled',bool);
	$("#3").prop('disabled',bool);
	$("#4").prop('disabled',bool);
	$("#5").prop('disabled',bool);
	$("#6").prop('disabled',bool);
	$("#7").prop('disabled',bool);
	$("#8").prop('disabled',bool);
	$("#9").prop('disabled',bool);
}


//get move from index.html and calling move function
$('#1').on('click',function(){
	move(1);
});

$('#2').on('click',function(){
	move(2);
});

$('#3').on('click',function(){
	move(3);
});

$('#4').on('click',function(){
	move(4);
});

$('#5').on('click',function(){
	move(5);
});

$('#6').on('click',function(){
	move(6);
});

$('#7').on('click',function(){
	move(7);
});

$('#8').on('click',function(){
	move(8);
});

$('#9').on('click',function(){
	move(9);
});

$('#reset').on('click',function(){
	reset();
})


