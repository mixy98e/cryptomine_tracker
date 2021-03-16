import useFetch from "../context/useFetch";
import formatDifficulty from "./formatDifficulty";

export default (formData, calcData) => {
  console.log(calcData);

  if (!formData) return 0;
  if (!calcData) return 0;

  const blrew = calcData.block_rewards;
  const diff = calcData.difficulty;
  const ethp = calcData.ethPrice;

  let result =
    ((formData.mhs * blrew * 1000000) / formatDifficulty(diff)) *
    60 *
    60 *
    24 *
    ethp;

  const e1 = { name: "hour", result, result, result }; //ovde se treba izracunati i profit i gubici
  const e2 = { name: "month", result, result, result }; //ovde se treba izracunati i profit i gubici i * 30
  const e3 = { name: "custom", result, result, result }; //ovde se treba izracunati i profit i gubici i * custom period

  console.log(e1, e2, e3);
  return [e1, e2, e3];
};
