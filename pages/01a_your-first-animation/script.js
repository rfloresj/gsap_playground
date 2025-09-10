gsap.to('.card', {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to('.card', {
      y: -20,
      repeat: -1, // it'll repeat indefinitely
      yoyo: true, // does exactly what it sounds, it's gonna make it come back and forth
      duration: 0.5, // throughout a duration of maybe 0.5 seconds
    });
    gsap.to('.card', {
      boxShadow: '0px 0px 50px rgb(255, 255, 255, 0.3)',
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
