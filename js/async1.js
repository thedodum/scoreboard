console.log('start');

function resolveAfter2Second(x){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  })
}

async function add(x){
  const a = await resolveAfter2Second(20);
  console.log(a);
  const b = await resolveAfter2Second(30);
  console.log(b);
  return x + a + b;
}

console.log(add(10).then(value => console.log('add1', value)));

console.log('end');