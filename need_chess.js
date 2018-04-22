process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function queensAttack(n, k, r_q, c_q, ob) {
	var q_x = c_q;
	var q_y = r_q;

	var up,left,right,down,uld,urd,dld,drd;
  
	//set default from queen to each side
 	var up = n - q_y; // n is ceil
  var down = q_y - 1; // 1 is floor
  var left = q_x - 1;
  var right = n - q_x;
  
	// It uses height and lenght equal to represent diagonal
	var uld = up < left ? up : left; //uoper left diagonal
  var urd = up < right ? up : right; //upper right diagonal
  var dld = down < left ? down : left; //down left diagonal
  var drd = down < right ? down : right; //down right diagonal

	for(var i=0; i<ob.length; i++) {
		var obX = ob[i][1]; // column
		var obY = ob[i][0]; // row

		// vertical, y change 
		if(q_x == obX) {
			// why -1, because the item next to queen not count
			var path = Math.abs(q_y - obY) - 1;

			// queen to up, still have space to up
			if(q_y < obY) {
				up = up < path ? up : path;
			} else {
				// queen to down 
				down = down < path ? down : path;
			}

		} else if(q_y == obY){
			// horizonal, x change
			var path = Math.abs(q_x - obX) - 1;
	
			// queen to right
			if(q_x < obX) {
				left = left < path ? left : path;
			} else {
				// queen to left
				right = right < path ? right : path;
			}
		} else {
			// diagonal
			var path = Math.abs(q_x - obX) - 1;
      var path2= Math.abs(q_y - obY) - 1;
        
			// Square theory        
      if(path==path2) {
      	if(q_x < obX && q_y < obY){
        	// ob is up right
          urd = urd < path ? urd : path;
        } else if(q_x > obX && q_y < obY){
         	// up left 
          uld = uld < path ? uld : path;
        } else if(q_x < obX && q_y > obY){
       		// down right 
          drd = drd < path ? drd : path;
        } else {
          dld = dld < path ? dld : path;
        }

			} else {

			}
		}
	} // end for loop

	total = up+down+left+right+urd+uld+drd+dld;
	return total;
}

/*
var n = 5;
var k = 3;
var r_q = 4;
var c_q = 3;
var ob = [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]
*/

/*
var n = 8;
var k = 0;
var r_q = 5;
var c_q = 4;
var ob = [ ]

var out = queensAttack(n, k, r_q, c_q, ob);
console.log(out);
*/

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var r_q_temp = readLine().split(' ');
    var r_q = parseInt(r_q_temp[0]);
    var c_q = parseInt(r_q_temp[1]);
    var obstacles = [];
    for(obstacles_i = 0; obstacles_i < k; obstacles_i++){
       obstacles[obstacles_i] = readLine().split(' ');
       obstacles[obstacles_i] = obstacles[obstacles_i].map(Number);
    }
    var result = queensAttack(n, k, r_q, c_q, obstacles);
    process.stdout.write("" + result + "\n");

}

