const formatDate = data => {
  let dd = data.substring(8, 10);
  let mm = data.substring(5, 7);
  let yy = data.substring(0, 4);
  return `${dd}/${mm}/${yy}`;
};

export default formatDate;
