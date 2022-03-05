// TIP: to run in console browser;
const height1 = document.documentElement.scrollHeight;
const height2 = document.documentElement.clientHeight;
const scrollUnit = (height1 - height2) / 100;
const rootStyle = document.documentElement.style;

addEventListener('scroll', () => {
  rootStyle.setProperty('--width', Math.round(scrollY / scrollUnit))
  console.log(Math.round(scrollY / scrollUnit))
})