export default async function getCoinsDetailData() {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2Cbinancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const detailedData = data.json();

  return detailedData;
}
