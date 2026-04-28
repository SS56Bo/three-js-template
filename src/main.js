import * as THREE from 'three';

//============= RENDERER =============================

// Create renderer with anti-aliasing for smoother edges
const renderer = new THREE.WebGLRenderer({antialias: true});

// Initial viewport size
const width = window.innerWidth;
const height = window.innerHeight;

// Set renderer size
renderer.setSize(width, height);

// Improve rendering on high-DPI displays (Retina, etc.)
renderer.setPixelRatio(window.devicePixelRatio);

// Append canvas to DOM
document.body.appendChild(renderer.domElement);

//============= CAMERA =============================

// Camera settings
const camera = new THREE.PerspectiveCamera(
    75,     // Field of view (degrees)
    width/height,    // Aspect Ratio (defines how wide the view is relative to its height)
    0.01,   // Near clipping plane
    10     // Far clipping plane
);
camera.position.z = 2; 

//============= SCENE SETUP ==================
const scene = new THREE.Scene();

//============= MATERIALS ===================
const geometry = new THREE.BoxGeometry(1,1,1)
const mesh = new THREE.MeshStandardMaterial({
    color: 0xffffff,
});

const meshObject = new THREE.Mesh(geometry, mesh);
meshObject.scale.setScalar(1.001);

//============= LIGHT ========================
const hemilight = new THREE.HemisphereLight(0xff3211, 0x111111);

//============= ADD TO SCENE ========================
scene.add(meshObject);
scene.add(hemilight);

//============= ANIMATION LOOP ========================
function animateScene() {
    requestAnimationFrame(animateScene);
    // YOUR CODE HERE //
    meshObject.rotation.y += 0.01; // added a little animation for development purposes
    meshObject.rotation.x += 0.01;
    renderer.render(scene, camera);
}

animateScene();