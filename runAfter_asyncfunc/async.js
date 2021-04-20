
// Run After Func:
function afterFirstPromise(one){
  let newNum = one * 2
  return `FisrtPromiseValue * 2 equals to: ${newNum}` 
};

function afterSecondPromise(two){
  let newNum = two * 3
  return `SecondPromiseValue * 3 equals to: ${newNum}` 
};

function afterThirdPromise(three){
  let newNum = three * 4
  return `ThirdPromiseValue * 4 equals to: ${newNum}` 
};

let afterFunctions = [afterFirstPromise,afterSecondPromise,afterThirdPromise];


const getRandom = seconds =>{
  return new Promise ((resolve, reject)=>{
    
    setTimeout(()=>{
      resolve(Math.ceil(Math.random()*100))
    },seconds);
  })
}


function runAfter(vA){
  let result = vA.map(function(e,i){
  return afterFunctions[i](e);
  });

  return console.log(result); 
}

// ////////////// Working Version 1
  
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.ceil(Math.random()*100))
    }, t)
  })
}

const durations = [1000, 2000, 3000]

const promises = []

durations.map((duration) => {
  promises.push(timeOut(duration)) 
})

Promise.all(promises)
.then (all => {
  runAfter(all);
})
.catch(
      () => console.log("Oops! Smth went wrong!")
    )

////////Working Version 2
//  Promise
//   .all([
//     getRandom(1000)
//       .then(
//         data => `${data}`
//       ),
//     getRandom(2000)
//       .then(
//         data2 => `${data2}`
//       ),
//     getRandom(3000)
//       .then(
//         data3 => `${data3}`
//       )
//   ])
//   .then(
//     all => {
//       runAfter(all);
//     }
//   )
//   .catch(
//     () => console.log("Oops! Smth went wrong!")
//   )