var players = 0;
var gameStageName = 1;
var gameStageNum = 0;
var handCounter = 0;
var gameStage = 0;
var gameStageR = 0;
var pHands = [null];
var handValues = [null];
var handName = [null];

function pageOne(player){
	var page = document.getElementById("firstPage");
	page.className = "hidden";
	if(player < 4){
	  document.getElementById("game").className = "unhidden";
	  players = player;
	}if (player == 4){
	  document.getElementById("instructions").className = "unhidden";
	}
	switch (player) {
	  case 1: 
        document.getElementById("p2Text").innerHTML = "Computer One";
        document.getElementById("p3Text").innerHTML = "Computer Two";
	 	break;
      case 2: 
		document.getElementById("p3Text").innerHTML = "Computer One";
	}
}

function textEnter(){

  var q = document.getElementById("smhText");
  var t = document.getElementById("enterText");
  var o = document.getElementById("numPad");
	
	switch (gameStageName){
	  case 1:
	    name(1);
		if(players == 2 || players == 3){
		  q.innerHTML = "Enter Player Two's Name";
		}
		if(players == 1 && gameStageName == 2){
		  t.className = "hidden"
		  o.className = "unhidden"
		}
		break;
	  case 2:
	    if(players == 2 || players == 3){
	      name(2);
		}
		if(players == 3){
		  q.innerHTML = "Enter Player Three's Name";
		}
		if(players == 2 && gameStageName == 3){
		  t.className = "hidden"
		  o.className = "unhidden"
		}
	    break;
	  case 3:
	    if(players == 3){
		  name(3);
		}
		if(players == 3 && gameStageName == 4){
		  t.className = "hidden"
		  o.className = "unhidden"
		}
	    break;
	}
	
}

function name(num){

   var p = document.getElementById("textField");
   var z = document.getElementById("texty");
   var n = document.getElementById("p" + num + "Text");
   var g = document.getElementById("gIn");

   if(p.value.length < 17){
     n.innerHTML = p.value;
     z.reset();
     gameStageName++;
   }
   
   if(num == 1){
     g.innerHTML = n.innerHTML + ", enter your hand";
   }
}

function pressButton (num){
  
  var d = document.getElementById("numDisplay");
  var g = document.getElementById("gIn");
  
  switch (num) {
	case 11: 
	  if(handCounter == 5) {
	    switch(gameStage){
		  case 0:
	        gameHand(1, d.innerHTML);
		    d.innerHTML = "";
            handCounter = 0;
		    gameStage ++;
			if(players == 2 || players == 3){
			  g.innerHTML = p2Text.innerHTML + ", enter your number to divide " + p1Text.innerHTML;
			} else {
			  g.innerHTML = "Comp. 1's dividing number, press continue."
			  d.innerHTML = compNumD();
			  handCounter = 5;
			}
			break;
		  case 1:
		    var x = "";
		    for(var i =4 ; i < 9; i++){
			  x += document.getElementById("firstHand1").innerHTML.charAt(i);
			}
		    if(d.innerHTML != x){
		      gameHandFinal(1, document.getElementById("firstHand1").innerHTML, d.innerHTML);
			  gameStage ++;
			  if(players == 2 || players == 3){
		    	g.innerHTML = p2Text.innerHTML + ", enter your hand";
		  	  } else{
			    g.innerHTML = "Comp. 1's hand, press continue."
			    d.innerHTML = compNumD();
			    handCounter = 5;
			  }
			} else {
			  document.getElementById("error").className = "unhidden";
			  d.innerHTML = "";
              handCounter = 0;
			}
			break;
		  case 2:
		    gameHand(2, d.innerHTML);
		    d.innerHTML = "";
            handCounter = 0;
		    gameStage ++;
			if(players == 3){
			  g.innerHTML = p3Text.innerHTML + ", enter your number to divide " + p2Text.innerHTML;
			} else {
			  g.innerHTML = "Comp. 2's dividing number, press continue."
			  d.innerHTML = compNumD();
			  handCounter = 5;
			} 
			break;
		  case 3:
		    if(d.innerHTML != document.getElementById("firstHand2").innerHTML){
		      gameHandFinal(2, document.getElementById("firstHand2").innerHTML, d.innerHTML);
		      gameStage ++;
			  if(players == 3){
			    g.innerHTML = p3Text.innerHTML + ", enter your hand";
			  } else{
			    g.innerHTML = "Comp. 2's hand, press continue."
			    d.innerHTML = compNumD();
			    handCounter = 5;
			  }
			} else {
			  document.getElementById("error").className = "unhidden";
			  d.innerHTML = "";
              handCounter = 0;
			}
			break;
		  case 4:
		    gameHand(3, d.innerHTML);
		    d.innerHTML = "";
            handCounter = 0;
		    gameStage ++;
			g.innerHTML = p1Text.innerHTML + ", enter your number to divide " + p3Text.innerHTML;
			break;
		  case 5:
		    if(d.innerHTML != document.getElementById("firstHand3").innerHTML){
		      gameHandFinal(3, document.getElementById("firstHand3").innerHTML, d.innerHTML);
		      gameStage ++;
			  document.getElementById("numPad").className = "hidden";
			  document.getElementById("nextB").className = "unhidden";
			  g.innerHTML = "Press Next to see results";
			} else {
			  document.getElementById("error").className = "unhidden";
			  d.innerHTML = "";
              handCounter = 0;
			}
			break;
		  }
	  }
	  break;
	case 10: 
	  d.innerHTML = "";
	  handCounter = 0;
	  break;
    case 9: 
	  if(handCounter < 5){
	    d.innerHTML += 9;
	    handCounter++;
	  }
	  break;
    case 8: 
	  if(handCounter < 5){
	    d.innerHTML += 8;
	    handCounter++;
	  }
	  break;
	case 7: 
	  if(handCounter < 5){
	    d.innerHTML += 7;
	    handCounter++;
	  }
	  break;
	case 6: 
	  if(handCounter < 5){
	    d.innerHTML += 6;
	    handCounter++;
	  }
	  break;
	case 5: 
	  if(handCounter < 5){
	    d.innerHTML += 5;
	    handCounter++;
	  }
	  break;
	case 4: 
	  if(handCounter < 5){
	    d.innerHTML += 4;
	    handCounter++;
	  }
	  break;
	case 3: 
	  if(handCounter < 5){
	    d.innerHTML += 3;
	    handCounter++;
	  }
	  break;
	case 2: 
	  if(handCounter < 5){
	    d.innerHTML += 2;
	    handCounter++;
	  }
	  break;
	case 1: 
	  if(handCounter < 5){
	    d.innerHTML += 1;
	    handCounter++;
	  }
	  break;
	case 0: 
	  if(handCounter < 5){
	    d.innerHTML += 0;
	    handCounter++;
	  }
	  break;
  }
}

function gameHand(player, num){
  var p = document.getElementById("firstHand" + player);
  p.innerHTML = num;
}

function gameHandFinal(player, num1, num2){
  var p = document.getElementById("finalHand" + player);
  var x = num1 / num2;
  var y = parseInt(x * 10000);
  if(y < 10000) {
    y = y * 10;
    if(y < 1000){
	  y = y * 10;
	  if(y < 100){
	    y = y * 10;
	    if(y < 10){
	      y = y * 10;
	    }
	  }
	}
  }
  p.innerHTML = y;
}

function compNumD(){
  var y = Math.floor(Math.random()*90000) + 10000;
  if(y < 10000) {
    y = y * 10;
    if(y < 1000){
	  y = y * 10;
	  if(y < 100){
	    y = y * 10;
	    if(y < 10){
	      y = y * 10;
	    }
	  }
	}
  }
  return y;
}

function nexty (){
  if(gameStageR == 0){
	document.getElementById("resultsPage").className = "unhidden";
	gameEnd();
	gameDisplay();
    gameStageR++;
  } else if(gameStageR == 1){
    location.reload();
  }
}

function gameEnd() {
  for(i = 0; i < 3; i++){
    sortHand(i);
  }
  for (i = 0; i < pHands.length; i++) {
	if (fiveNumbersRank(pHands[i]) > 0) {
		handValues[i] = fiveNumbersRank(pHands[i]);
		handName[i] = "Five Numbers the Same";
	} else if (straightFlush(pHands[i]) > 0) {
		handValues[i] = straightFlush(pHands[i]);
		handName[i] = "Straight Flush";
    } else if (fourNumbersRank(pHands[i]) > 0) {
		handValues[i] = fourNumbersRank(pHands[i]);
		handName[i] = "Four Numbers the Same";
	} else if (fullHouseRank(pHands[i]) > 0) {
		handValues[i] = fullHouseRank(pHands[i]);
		handName[i] = "Full House";
	} else if (evenFlush(pHands[i]) > 0) {
		handValues[i] = evenFlush(pHands[i]);
		handName[i] = "Flush: all even numbers";
	} else if (oddFlush(pHands[i]) > 0) {
		handValues[i] = oddFlush(pHands[i]);
		handName[i] = "Flush: all odd numbers";
	} else if (straightNumSequence(pHands[i]) > 0) {
		handValues[i] = straightNumSequence(pHands[i]);
		handName[i] = "Straight: 5 number sequence";
	} else if (threeNumbersRank(pHands[i]) > 0) {
		handValues[i] = threeNumbersRank(pHands[i]);
		handName[i] = "Three Numbers the Same";
	} else if (pairsRank(pHands[i]) > 0) {
		handValues[i] = pairsRank(pHands[i]);
		if (handValues[i] > 200000) {
			handName[i] = "Two Pairs";
		} else {
			handName[i] = "One Pair";
		}
	} else if (highCardRank(pHands[i]) > 0) {
		handValues[i] = highCardRank(pHands[i]);
		handName[i] = "High Card";
		var x = handValues[i].toString().charAt(0);
		handValues[i] = x / 10;
	}
  }
}

function sortHand (pees){

	  pHands[pees] = document.getElementById("finalHand" + (pees + 1)).innerHTML;
	  pHands[pees] = pHands[pees].split("");
      pHands[pees].sort(function(a, b){return a-b});
	  pHands[pees] = pHands[pees].toString();

}

function fiveNumbersRank(hand) {
	var value = 0;
	if (hand.charAt(0) == hand.charAt(8)) {
	  var num = parseInt((hand.charAt(0)));
			value = 900000 + num * 1000;
		}
		return value;
}

function straightFlush(hand) {
	var value = 0;
	if (hand == "0,2,4,6,8" || hand == "1,3,5,7,9") {
		value = 800000 + highCardRank(hand);
	}
	return value;
}

function fourNumbersRank(hand) {
	var value = 0;
    var highNum = highCardRank(hand);
	var handArray = hand;
	if (handArray[0] == handArray[6] || handArray[2] == handArray[8]) {
		value = 700000 + highNum;
	}
	return value;
}

function fullHouseRank(hand) {
	var value = 0;
	var highNum = highCardRank(hand);
	if (hand.charAt(0) == hand.charAt(2) && hand.charAt(4) == hand.charAt(8)
			|| hand.charAt(0) == hand.charAt(4) && hand.charAt(6) == hand.charAt(8)) {
		value = 600000 + highNum;
	}
	return value;
}

function evenFlush(hand) {
	var value = 0;
	var highNum = highCardRank(hand);
	for (var i = 0; i < hand.length; i = i + 2) {
		if (hand.charAt(i) % 2 == 0) {
			value = 500000 + highNum;
		} else {
			value = 0;
			break;
		}
	}
	return value;
}

function oddFlush(hand) {
	var value = 0;
	var highNum = highCardRank(hand);
	for (var i = 0; i < hand.length; i = i + 2) {
		if (hand.charAt(i) % 2 == 0) {
			value = 0;
			break;
		} else {
			value = 500000 + highNum;
		}
	}
	return value;
}

function straightNumSequence(hand) {
	var value = 0;
	var highNum = highCardRank(hand);
	var check = false;
	var handArray = hand;
	for (var i = 0; i < handArray.length - 2; i = i + 2) {
		if (handArray[i] == handArray[i + 2] - 1) {
			check = true;
		} else {
			check = false;
			break;
		}
	}
	if (check == true) {
		value = 400000 + highNum;
	}
	return value;
}

function threeNumbersRank(hand) {
	var value = 0;
	var highNum = highCardRank(hand);
	var handArray = hand;
	if (handArray[0] == handArray[4] || handArray[4] == handArray[8] || handArray[2] == handArray[6]) {
		value = 300000 + highNum;
	}
	return value;
}

function pairsRank(hand) {
	var value = 0;
	var pairNum = 0;
	var high = 0;
	var highNum = highCardRank(hand);
	var handArray = hand;
	for (var i = 0; i < handArray.length - 2; i = i + 2) {
		if (handArray[i] == handArray[i + 2]) { // 13422
			pairNum++;
			high = handArray[i];
		}
	}
	if (pairNum == 2) {
		value = 200000 + (high * 10000) + (highNum);
	} else if (pairNum == 1) {
		value = 100000 + (high * 10000) + (highNum);
	}
	return value;
}
	
function highCardRank(hand) {
	var value = hand[8];
	return value * 1000;
}
	
function gameDisplay(){

	var max;
	var min;
	var a = document.getElementById("handName1");
	var b = document.getElementById("handName2");
	var c = document.getElementById("handName3");
	var d = document.getElementById("highCard1");
	var e = document.getElementById("highCard2");
	var f = document.getElementById("highCard3");
	var g = document.getElementById("winner");
	var h = document.getElementById("second");
	var i = document.getElementById("third");
	var j = document.getElementById("p1Text").innerHTML;
	var k = document.getElementById("p2Text").innerHTML;
	var l = document.getElementById("p3Text").innerHTML;

	// if p1 > p2 && p1 > p3, p1 wins
    if (handValues[0] > handValues[1] && handValues[0] > handValues[2]) {
		max = handValues[0];
		a.innerHTML = handName[0];
		d.innerHTML = handValues[0].toString().charAt(2);
		g.innerHTML = j;
	// if p2 > p1 && p2 > p3, p2 wins
	} else if (handValues[1] > handValues[0] && handValues[1] > handValues[2]) {
		max = handValues[1];
		a.innerHTML = handName[1];
		d.innerHTML = handValues[1].toString().charAt(2);
		g.innerHTML = k;
	// else p3 wins
	} else {
		max = handValues[2];
		a.innerHTML = handName[2];
		d.innerHTML = handValues[2].toString().charAt(2);
		g.innerHTML = l;
	}
	// if p1 < p2 && p1 < p3 p1 loses
	if (handValues[0] < handValues[1] && handValues[0] < handValues[2]) {
		min = handValues[0];
		c.innerHTML = handName[0];
		f.innerHTML = handValues[0].toString().charAt(2);
		i.innerHTML = j;
	// if p2 < p1 && p2 < p3 p2 loses
	} else if (handValues[1] < handValues[0] && handValues[1] < handValues[2]) {
		min = handValues[1];
		c.innerHTML = handName[1];
		f.innerHTML = handValues[1].toString().charAt(2);
		i.innerHTML = k;
	// else p3 loses
	} else {
		min = handValues[2];
		c.innerHTML = handName[2];
		f.innerHTML = handValues[2].toString().charAt(2);
		i.innerHTML = l;
	}
	// if p1 != 1st place & last = 2nd place
	if (handValues[0] != max && handValues[0] != min) {
		b.innerHTML = handName[0];
		e.innerHTML = handValues[0].toString().charAt(2);
		h.innerHTML = j;
	// if p2 != 1st place & last = 2nd place
	} else if (handValues[1] != max && handValues[1] != min) {
		b.innerHTML = handName[1];
		e.innerHTML = handValues[1].toString().charAt(2);
		h.innerHTML = k;
	// else p3 = 2nd place
	} else {
		b.innerHTML = handName[2];
		e.innerHTML = handValues[2].toString().charAt(2);
		h.innerHTML = l;
	} 
}
	
function closeIt(){
	document.getElementById("error").className = "hidden";
}
	
	
	
	
	
	
	
	
	
	
	

