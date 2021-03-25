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

  return [
    {
      name: "day",
      rev: (rev * 24).toFixed(2),
      cost: (cost * 24).toFixed(2),
      profit: (profit * 24).toFixed(2),
    },
    {
      name: "month",
      rev: (rev * 24 * 30).toFixed(2),
      cost: (cost * 24 * 30).toFixed(2),
      profit: (profit * 24 * 30).toFixed(2),
    },
    {
      name: "period",
      rev: (rev * 24 * data.period).toFixed(2),
      cost: (cost * 24 * data.period).toFixed(2),
      profit: (profit * 24 * data.period).toFixed(2),
    },
  ];
};
