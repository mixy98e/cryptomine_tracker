export default async function getPrice() {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  );
  const price = await data.json();
  console.log(price);
  return price;
}

/*
https://whattomine.com/coins/151.json

"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
*/
