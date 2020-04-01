
let arr = ['421421421', '321321', '21321321', '10321321', '52156', '442421'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});
