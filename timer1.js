

const inputArray = process.argv.slice(2);
if (inputArray.length ===0){
  return;
}
for (num of inputArray){
  if ((num >=0)&& (typeof(Number(num))==='number')){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num*1000);
  }
}
