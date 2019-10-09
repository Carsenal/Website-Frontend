var board;
var next = [];
for(var x=0; x<200; x++){
    next.push([]);
    for(var y=0; y<50; y++){
        next[x].push(false);
    }
}

self.addEventListener('message', function(e) {
    board = e.data;
    step();
    self.postMessage(next);
}, false);

function get(x, y){
    try {
        return board[x][y];
    } catch {
        return false;
    }
}

function step(){
    var x, y, n;
    for(x = 0; x < 200; x ++){
        for(y = 0; y < 50; y ++){
            n = get(x-1, y+1) + get(x, y+1) + get(x+1, y+1) + get(x-1, y) + get(x+1, y) + get(x-1, y-1) + get(x, y-1) + get(x+1, y-1);
            if(n == 3) next[x][y] = true;
            else if (n == 2)next[x][y] = get(x, y);
            else next[x][y] = false;
        }
    }
}