// const balls = document.getElementsByClassName('ball');
// document.onmousemove = (event) => {
//   const x = (event.clientX * 100) / window.innerWidth + '%';
//   const y = (event.clientY * 100) / window.innerHeight + '%';

//   for (let i = 0; i < 2; i++) {
//     balls[i].style.left = x;
//     balls[i].style.top = y;
//     balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';

//   }
// };
const balls = document.getElementsByClassName('ball');

if (window.innerWidth <= 768 && window.DeviceOrientationEvent) {
  // Use device orientation for small screens
  window.addEventListener('deviceorientation', handleOrientation, true);
} else {
  // Use mousemove events for larger screens
  document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';
    for (let i = 0; i < balls.length; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
    }
  };
}

function handleOrientation(event) {
  // gamma provides left/right tilt (range roughly -90 to 90)
  const gamma = event.gamma;
  // Map gamma to a horizontal offset (adjust scaling factor as needed)
  const offsetX = (gamma / 90) * 50; // 50 is the maximum pixel offset

  // Center the ball horizontally (50%) and apply offset based on tilt
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = '50%';
    balls[i].style.top = '50%';
    balls[i].style.transform = `translate(calc(-50% + ${offsetX}px), -50%)`;
  }
}
