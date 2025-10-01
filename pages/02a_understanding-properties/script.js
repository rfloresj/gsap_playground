import gsap from 'gsap';

gsap.to('.box', {
    opacity: 1,
    rotation: 360, // could be rotationX or rotationY
    background: '#ff6f61',
    scale: 1.25, // could be scaleX or scaleY
    duration: 2,
    ease: 'bounce',
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
    paused: true
})
