import { useState, useEffect } from "react";

const calculateState = {
  block_rewards: 4.18968596639766,
  difficulty: "5.407256463815861e15",
  ethPrice: 1886,
};

const useFetch = () => {
  const [data, setData] = useState();
  const [clacData, setCalcData] = useState();
  const [clacResult, setCalcResult] = useState();

  useEffect(() => {
    const tmp = [
      { name: "hour", rev: 55, cost: 123, profit: 555.555 },
      { name: "month", rev: 456, cost: 456, profit: 456 },
      { name: "custom", rev: 456, cost: 456, profit: 456 },
    ];
    setCalcResult(tmp);
    setCalcData(calculateState);
  }, []);

  return { data, setData, clacResult, setCalcData, clacData, setCalcResult };
};

export default useFetch;
