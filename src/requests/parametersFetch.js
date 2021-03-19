export default async function getCoinParameters() {
  const data = await fetch("https://api.coincap.io/v2/assets");
  const parameters = await data.json();

  console.log(parameters);
  //return parameters;
}
