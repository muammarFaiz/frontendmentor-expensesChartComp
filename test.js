const a = () => {
  setTimeout(() => {
    console.log('timeout 1');
  }, 1000);
  console.log('after timeout 1');
  setTimeout(() => {
    console.log('timeout 2');
  }, 1000);
  console.log('after timeout 2');
  setTimeout(() => {
    console.log('timeout 3');
  }, 1000);
  console.log('after timeout 3');
  setTimeout(() => {
    console.log('timeout 4');
  }, 1000);
  setTimeout(() => {
    console.log('timeout 5');
  }, 1000);
  setTimeout(() => {
    console.log('timeout 6');
  }, 1000);
}
a()