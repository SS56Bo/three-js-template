# Three.js Vite Starter Template

A minimal and practical **Three.js starter template** built with Vite.  
Designed for quick setup, team consistency, and reuse via `degit`.

---

## 🚀 Getting Started

### 1. Use this template with degit

    npx degit <your-username>/<repo-name> my-three-project
    cd my-three-project
    npm install
    npm run dev

---

### 2. Alternative: Create with Vite manually

    npm create vite@latest my-project
    cd my-project
    npm install

Then copy this template’s files into your project.

---

## 📁 Project Structure

    my-three-project/
    │
    ├── public/              # Static assets (textures, models, etc.)
    ├── src/
    │   ├── main.js          # Entry point (Three.js setup)
    │   ├── style.css        # Optional styling
    │   └── assets/          # Images, textures
    │
    ├── index.html           # Root HTML
    ├── package.json
    └── vite.config.js

---

## ⚙️ What This Template Includes

- WebGLRenderer with anti-aliasing  
- PerspectiveCamera with proper defaults  
- Scene setup  
- Resize handling  
- Animation loop  
- High-DPI (retina) support  

---

## 🧠 Core Concepts

### Camera Aspect Ratio

```javascript
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
```

- Must match renderer size  
- Always update on window resize  

---

### Render Loop

```javascript
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
```

- All animations go here  
- Do not create multiple loops  

---

### Resize Handling (Required)

```javascript
    window.addEventListener('resize', () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        renderer.setSize(w, h);
        renderer.setPixelRatio(window.devicePixelRatio);

        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    });
```
---

## 🧩 Quick Start Example

```javascript
    import * as THREE from 'three';

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Resize
    window.addEventListener('resize', () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    });

    // Loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
```
---

## ⚠️ Common Mistakes

- Creating `PerspectiveCamera` without parameters  
- Not updating `camera.aspect` on resize  
- Forgetting `camera.updateProjectionMatrix()`  
- Multiple animation loops  
- Not setting `renderer.setPixelRatio()`  
- Forgetting `scene.add()`  

---

## 🧪 Scripts

```bash
    npm run dev      # Start dev server  
    npm run build    # Build for production  
    npm run preview  # Preview production build  
```
---

## 🎯 Team Conventions

- Keep `main.js` clean and readable  
- Structure code into sections:
  - Renderer  
  - Camera  
  - Scene  
  - Objects  
  - Lights  
  - Animation loop  
- Comment non-obvious logic  
- Avoid unexplained magic numbers  

---

## 📌 Notes

This template is intentionally minimal.  
Add complexity only when needed.
