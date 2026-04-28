import * as THREE from 'three';

//============= RENDERER =============================

// Create renderer with anti-aliasing for smoother edges
const renderer = new THREE.WebGLRenderer({antialias: true});

// Initial viewport size
const w = window.innerWidth;
const h = window.innerHeight;

// Set renderer size
renderer.setSize(w, h);

// Improve rendering on high-DPI displays (Retina, etc.)
renderer.setPixelRatio(window.devicePixelRatio);

// Append canvas to DOM
document.body.appendChild(renderer.domElement);

//============= CAMERA =============================

// Camera settings
const camera = new THREE.PerspectiveCamera(
    75,     // Field of view (degrees)
    w/h,    // Aspect Ratio (defines how wide the view is relative to its height)
    0.01,   // Near clipping plane
    100     // Far clipping plane
);
camera.position.z = 2; 

//============= SCENE SETUP ==================
const scene = new THREE.Scene();


//============= ANIMATION LOOP ========================
function animateScene() {
    requestAnimationFrame(animateScene);

    renderer.render(scene, camera);
}

animateScene()