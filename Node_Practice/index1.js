let a = 12;
let b = 0;

// setTimeout(() => {
//   b = 30;
// }, 200);

// console.log(a + b);

// let waitingData1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 200);
//   });

//   waitingData1.then((data) => {
//     console.log(a + data);
//   });

// Alternate of the Above function
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
}).then((data) => {
  console.log(a + data);
});
