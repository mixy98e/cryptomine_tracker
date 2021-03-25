export default (data) => {
  let tmp = 0;

  let h = 0;
  let l = 0;

  data.forEach((e) => {
    if (tmp !== 0) {
      if (tmp > e) l++;
      else if (tmp < e) h++;
    }
    tmp = e;
  });

  return { h, l };
};
