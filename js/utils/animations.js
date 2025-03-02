export function fade(element, start, end, duration) {
    return new Promise((resolve) => {
      let startTime = null;
      let rafId = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
  
        element.style.opacity = start + (end - start) * progress;
  
        if (progress < 1) {
          rafId = requestAnimationFrame(animation);
        } else {
          resolve();
        }
      }
  
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(animation);
    });
  }
  