export default (data) => {
  console.log(data);
  let dif = parseFloat(data.diff);

  let rez = ((data.mhs * data.blockRev * 1000000) / dif) * 60 * 60 * data.price;

  let electricity = data.power * 0.001 * data.cost;

  let rev = rez;
  let cost = electricity;
  let profit = rez - electricity;

  rez = rez.toFixed(2);
  cost = cost.toFixed(2);
  profit = profit.toFixed(2);
  //return [rev, cost, profit];
  return [
    { name: "day", rev: rev * 24, cost: cost * 24, profit: profit * 24 },
    {
      name: "month",
      rev: rev * 24 * 30,
      cost: cost * 24 * 30,
      profit: profit * 24 * 30,
    },
    {
      name: "period",
      rev: rev * 24 * data.period,
      cost: cost * 24 * data.period,
      profit: profit * 24 * data.period,
    },
  ];
};

/*
function test(){

	let x = 5.407256463815861e+15;
	console.log(x);

	console.log(x.toFixed(5));

	let y = 1000000 / parseInt(x.toFixed(5));

	console.log(y, y.toFixed(20));
}
*/
