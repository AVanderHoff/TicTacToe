var bodyParser = require('body-parser');



module.exports = function(app){

  // board representation   *index 0 not used
  // 1  |   2    |   3
  // 4  |   5    |   6
  // 7  |   8    |   9
  var board = [0,1,1,1,1,1,1,1,1,1];

  //display main page
  app.get('/',function(req,res){
    res.send(index.html);
  	

  })

  // main game logic
  app.post('/move',function(req,res){
  	
  	// check to see if space free to choose
  	// req.body.move from move function in app.js
  	// req.body.move from move function in app.js
  	if(board[req.body.move] == 1){
  		board[req.body.move] = req.body.player;
  	
  	// object that data is sent in
  	var obj = {
  		current:req.body.player,
  		next:"",
  		move:req.body.move,
  		win:"",
  		
  	}
  	
  	// check if there is a winning position on board
  	if(checkWin()){
  		obj.win = req.body.player;
  	}

  	// check for tie
  	if(!checkWin() && board.indexOf(1) == -1 ){
  		obj.win = "TIE";
  	}

  	// switch player for next turn
  	if(req.body.player == "X"){
  		obj.next = "O";
  	}
  	else if(req.body.player == "O"){
  		obj.next = "X";
  	}

  	// send data to app.js
  	res.send(obj);

  	}

  });

  // reset board
  app.post('/reset',function(req,res){

  	board = [0,1,1,1,1,1,1,1,1,1];

  })

  // check if board has winning configuration
  function checkWin(){

	if(board[1] != 1 && board[1] === board[2] && board[2] === board [3]){
		return true;
	}
	else if(board[4] != 1 && board[4] === board[5] && board[5] === board[6]){
		return true;
	}
	else if(board[7] != 1 && board[7] === board[8] && board[8] === board[9]){
		return true;
	}
	else if(board[1] != 1 && board[1] === board[4] && board[4] === board[7]){
		return true;
	}
	else if(board[2] != 1 && board[2] === board[5] && board[5] === board[8]){
		return true;
	}
	else if(board[3] != 1 && board[3] === board[6] && board[6] === board[9]){
		return true;
	}
	else if(board[1] != 1 && board[1] === board[5] && board[5] === board[9]){
		return true;
	}
	else if(board[3] != 1 && board[3] === board[5] && board[5] === board[7]){
		return true;
	}
	else{
		return false;
	}
		
  }





}