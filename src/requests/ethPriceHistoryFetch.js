export default async function getChartData() {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=2&interval=hourly"
  );

  const chartData = data.json();

  return chartData;
}
