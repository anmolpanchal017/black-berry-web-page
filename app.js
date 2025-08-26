
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
var timeout;
function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;

    var Xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(event) {
        clearTimeout(timeout);
        // scale calculate karo
        xscale = gsap.utils.clamp(0.8, 1.2, (event.clientX - Xprev) / 20);
        yscale = gsap.utils.clamp(0.8, 1.2, (event.clientY - yprev) / 20);

        Xprev = event.clientX;
        yprev = event.clientY;

        // position + scale ek hi jagah apply karo
        document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;

        timeout = setTimeout(function () {
                timer = document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1, 1)`;
        },100);
    });
}

circleChaptaKaro();

firstPageAnim();

let rotate = 0; // initialize

document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        let diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power3.out",   // correct ease
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            duration: 0.3
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            duration: 0.3,
            ease: "power3.out"
        });
    });
});
