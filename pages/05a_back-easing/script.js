import gsap from 'gsap';

const tabs = document.querySelectorAll('.tab');
const indicator = document.querySelector('.indicator');

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    gsap.to(indicator, {
      x: tab.offsetLeft,
      duration: 0.5,
      ease: 'back.inOut',
    });
  });
});
