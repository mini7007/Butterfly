import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

// Initialize butterfly background
const pc = butterfliesBackground({
  el: document.getElementById('app'),
  eventsEl: document.body,
  gpgpuSize: 18,
  background: 0x88CEFF,
  material: 'phong',
  lights: [
    { type: 'ambient', params: [0xffffff, 0.5] },
    { type: 'directional', params: [0xffffff, 1], props: { position: [10, 0, 0] } }
  ],
  materialParams: { transparent: true, alphaTest: 0.5 },
  texture: 'https://assets.codepen.io/33787/butterflies.png',
  textureCount: 4,
  wingsScale: [2, 2, 2],
  wingsWidthSegments: 16,
  wingsHeightSegments: 16,
  wingsSpeed: 0.75,
  wingsDisplacementScale: 1.25,
  noiseCoordScale: 0.01,
  noiseTimeCoef: 0.0005,
  noiseIntensity: 0.0025,
  attractionRadius1: 100,
  attractionRadius2: 150,
  maxVelocity: 0.1
});

// Create an audio element
const audio = new Audio('https://ik.imagekit.io/Myimage/yung%20kai%20-%20blue%20(live).mp3?updatedAt=1741720011060');  // Replace with your actual song URL
audio.loop = true;  // Keep playing in a loop

// Attempt to autoplay (some browsers may block it)
audio.play().catch(() => {
  console.log('Autoplay blocked! Waiting for user interaction.');

  // Play when user interacts with the page
  document.addEventListener('click', () => {
    audio.play();
  }, { once: true });
});
