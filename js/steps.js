function steps(n) {
  let steps = "#";
  let spaces = " ";
  for (let i = 1;i <= n;i++){
    console.log(steps.repeat(i).concat(spaces.repeat(n - i)));
  }
}
function steps_2(n) {
  for (let row = 0;row < n;row++){
    let stair = '';
    for (let col = 0; col < n;col++){
      if(col <= row) {
        stair += '#';
      }
      else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
