import { CSS3DObject } from "../libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js";
import { fade } from '../utils/animations.js';
import { setupRendering } from './arRendering.js';

const THREE = window.MINDAR.IMAGE.THREE;

export async function startAR() {
  const mindArThreejs = new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "./assets/targets/targets.mind",
    maxTrack: 2,
  });
  
  const { cssRenderer, renderer, cssScene, camera } = mindArThreejs;

  const div = new CSS3DObject(document.querySelector("#ar-business-card"));
  const div2 = new CSS3DObject(document.querySelector("#ar-business-card-back"));

  setupAnchors(mindArThreejs, div, div2);
  setupEventListeners(mindArThreejs, div, div2);

  await mindArThreejs.start();

  setupRendering(renderer, cssRenderer, cssScene, camera);
}

function setupAnchors(mindArThreejs, div, div2) {
  const anchor = mindArThreejs.addCSSAnchor(0);
  const anchor2 = mindArThreejs.addCSSAnchor(1);

  div.scale.set(2.5, 2.5, 2.5);
  div2.scale.set(2.5, 2.5, 2.5);

  anchor.group.position.set(0, 0, -0.5);
  anchor2.group.position.set(0, 0, -0.5);

  anchor.group.add(div);
  anchor2.group.add(div2);
}

function setupEventListeners(mindArThreejs, div, div2) {
  const anchor = mindArThreejs.anchors[0];
  const anchor2 = mindArThreejs.anchors[1];

  anchor.onTargetFound = async () => {
    await fade(div.element, 0, 1, 1000);
  };

  anchor.onTargetLost = () => {
    div.element.style.opacity = '0';
  };

  anchor2.onTargetFound = async () => {
    await fade(div2.element, 0, 1, 1000);
  };

  anchor2.onTargetLost = () => {
    div2.element.style.opacity = '0';
  };
}
