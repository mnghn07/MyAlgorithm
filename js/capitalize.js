function capitalize(str) {
  let arr = str.split(' ');
  const res = [];
  for (let i = 0; i < arr.length;i++) {
    res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return res.join(' ');
}
