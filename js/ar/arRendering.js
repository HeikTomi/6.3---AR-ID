export function setupRendering(renderer, cssRenderer, cssScene, camera) {
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
  
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }
  