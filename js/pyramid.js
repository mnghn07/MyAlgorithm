function pyramid(n) {
  let stair = "#";
  let left = " ";
  let right = " ";
  for (let i = 1; i <= n;i++){
    console.log(left.repeat(n-i) + stair.repeat(2*i - 1) + right.repeat(n - i));
  }
}

module.exports = pyramid;
