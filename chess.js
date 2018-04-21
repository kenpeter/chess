
function isThere(myx, myy, ob) {
	// ob 2 d array	
	for(var i=0; i<ob.length; i++) {
		var item = ob[i];
		if(myx == item[0] && myy == item[1]) {
			return true;
		} else {
			continue;
		}
	}	

	debugger;

	return false;
}

function moveTopLeft(n, k, q_x, q_y, ob) {
	var myx = q_x - 1;
	var myy = q_y + 1;
	var count = 0;

	while(myx >= 1 && myy <= n) {

		debugger;

		// test
		console.log('--s--');
		console.log(myx);
		console.log(myy)

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

function queensAttack(n, k, r_q, c_q, ob) {
	var q_x = r_q;
	var q_y = c_q;
	var countTopLeft = moveTopLeft(n, k, q_x, q_y, ob);

	return countTopLeft;
}

var n = 5;
var k = 3;
var r_q = 4;
var c_q = 3;
var ob = [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]
var out = queensAttack(n, k, r_q, c_q, ob);
console.log(out);
