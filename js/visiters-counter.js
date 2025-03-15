try {
    const counters = document.querySelectorAll(".counter-value");
    const duration = 4000;

    counters.forEach(counter => {
        const animate = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const current = parseInt(counter.innerText);
            let increment = target / duration;

            if (increment < 1) {
                increment = 1;
            }

            if (current < target) {
                counter.innerText = Math.min(Math.floor(current + increment), target);
                requestAnimationFrame(animate);
            } else {
                counter.innerText = target;
            }
        };

        animate();
    });
} catch (error) {
    console.error("Counter animation error:", error);
}