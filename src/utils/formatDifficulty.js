export default (value) => {
  let x = value;
  //console.log(x);

  //console.log(x.toFixed(5));

  let y = 1000000 / parseFloat(x.toFixed(5));

  //console.log(y, y.toFixed(20));

  return parseFloat(y.toFixed(20));
};
