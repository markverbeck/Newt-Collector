
var newtNeeded = Math.floor(Math.random()*(120-19+1)+19);
var newtPic1 = Math.floor(Math.random() * 12) + 1;
var newtPic2 = Math.floor(Math.random() * 12) + 1;
var newtPic3 = Math.floor(Math.random() * 12) + 1;
var newtPic4 = Math.floor(Math.random() * 12) + 1;
var totalNewt = 0;
var win = 0;
var loss = 0;

var playSong = function(){
	document.getElementById("theme").play();
	document.getElementById("theme").volume = 0.5;
}

var pauseSong = function(){
	document.getElementById("theme").pause();
}








$(document).ready(function(){

	$("#nNeeded").html(newtNeeded);

	$("#clickPic1").on("click", function(){
		totalNewt = (totalNewt + newtPic1);
		$("#nCollected").html(totalNewt);
		winLose(totalNewt, newtNeeded);

	});
	
	$("#clickPic2").on("click", function(){
		totalNewt = (totalNewt + newtPic2);
		$("#nCollected").html(totalNewt);
		winLose(totalNewt, newtNeeded);
	});

	$("#clickPic3").on("click", function(){
		totalNewt = (totalNewt + newtPic3);
		$("#nCollected").html(totalNewt);
		winLose(totalNewt, newtNeeded);
	});

	$("#clickPic4").on("click", function(){
		totalNewt = (totalNewt + newtPic4);
		$("#nCollected").html(totalNewt);
		winLose(totalNewt, newtNeeded);
	});


	var winLose = function (a,b){
		if (a === b){
			win ++;
			$("#win").html(win);
			document.getElementById("winner").play();
			document.getElementById("winner").volume = 0.8;
			reset();

		}else if (a > b){
			loss ++;
			$("#loss").html(loss);
			document.getElementById("loser").play();
			reset();
		}else{

		}
	}

	var reset = function(){
		newtNeeded = Math.floor(Math.random()*(120-19+1)+19);
		 newtPic1 = Math.floor(Math.random() * 12) + 1;
		 newtPic2 = Math.floor(Math.random() * 12) + 1;
		 newtPic3 = Math.floor(Math.random() * 12) + 1;
		 newtPic4 = Math.floor(Math.random() * 12) + 1;
		 totalNewt = 0;
		 $("#nNeeded").html(newtNeeded);
		$("#nCollected").html(totalNewt);
		

	};

	
	playSong();
	


	
	

});



