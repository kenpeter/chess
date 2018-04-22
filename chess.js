
function isThere(myx, myy, ob) {
	// ob 2 d array	
	for(var i=0; i<ob.length; i++) {
		var item = ob[i];
		if(myx == item[1] && myy == item[0]) {
			return true;
		} else {
			continue;
		}
	}	

	return false;
}

function moveTopLeft(n, k, q_x, q_y, ob) {
	var myx = q_x - 1;
	var myy = q_y + 1;
	var count = 0;

	while(myx >= 1 && myy <= n) {
		if(isThere(myx, myy, ob)) {
			break;
		} else {
			count++;
		}

		myx = myx - 1; // move left
    myy = myy + 1; // move top
	}

	return count;
}

function moveTopRight(n, k, q_x, q_y, ob) {
  var myx = q_x + 1;
  var myy = q_y + 1;
  var count = 0;

  while(myx <= n && myy <= n) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    }

    myx = myx + 1;
    myy = myy + 1; 
  }

  return count;
}

function moveBotLeft(n, k, q_x, q_y, ob) {
  var myx = q_x - 1;
  var myy = q_y - 1;
  var count = 0;
  
  while(myx >= 1 && myy >= 1) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    }

    myx = myx - 1; 
    myy = myy - 1; 
  }

  return count;
}

function moveBotRight(n, k, q_x, q_y, ob) {
  var myx = q_x + 1;
  var myy = q_y - 1;
  var count = 0;

  while(myx <= n && myy >= 1) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    }

    myx = myx + 1;
    myy = myy - 1;
  }

  return count;
}


function moveLeft(n, k, q_x, q_y, ob) {
	
	debugger;

  var myx = q_x - 1;
  var myy = q_y;
  var count = 0;

  while(myx >= 1) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    }

    myx = myx - 1;
  }

  return count;
}

function moveRight(n, k, q_x, q_y, ob) {
  var myx = q_x + 1;
  var myy = q_y;
  var count = 0;

  while(myx <= n) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    }
    
    myx = myx + 1;
  }

  return count;
}


function moveTop(n, k, q_x, q_y, ob) {
  var myx = q_x;
  var myy = q_y + 1;
  var count = 0;

  while(myy <= n) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    }

    myy = myy + 1;
  }

  return count;
}


function moveBot(n, k, q_x, q_y, ob) {
  var myx = q_x;
  var myy = q_y - 1;
  var count = 0;

  while(myy >= 1) {
    if(isThere(myx, myy, ob)) {
      break;
    } else {
      count++;
    } 

    myy = myy - 1;
  }

  return count;
}

function queensAttack(n, k, r_q, c_q, ob) {
	var q_x = c_q;
	var q_y = r_q;

	var countLeft = moveLeft(n, k, q_x, q_y, ob);
  var countRight = moveRight(n, k, q_x, q_y, ob);
  var countTop = moveTop(n, k, q_x, q_y, ob);
  var countBot = moveBot(n, k, q_x, q_y, ob);

	/*
  console.log('--h--');
  console.log(countLeft);
  console.log(countRight);
  console.log(countTop);
  console.log(countBot);
	*/

	var countTopLeft = moveTopLeft(n, k, q_x, q_y, ob);
	var countTopRight = moveTopRight(n, k, q_x, q_y, ob);
	var countBotLeft = moveBotLeft(n, k, q_x, q_y, ob);
	var countBotRight = moveBotRight(n, k, q_x, q_y, ob);

	/*
	console.log('--c--');
	console.log(countTopLeft);
	console.log(countTopRight);
	console.log(countBotLeft);
	console.log(countBotRight);
	*/

	var sumH = countLeft + countRight + countTop + countBot;
	var sumC = countTopLeft + countTopRight + countBotLeft + countBotRight;

	var sum = sumH + sumC;

	return sum;
}

var n = 5;
var k = 3;
var r_q = 4;
var c_q = 3;
var ob = [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]

/*
var n = 8;
var k = 0;
var r_q = 5;
var c_q = 4;
var ob = [ ]
*/

var out = queensAttack(n, k, r_q, c_q, ob);
console.log(out);
