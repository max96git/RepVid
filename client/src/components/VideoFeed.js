useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight);

  const avatarContainer = document.getElementById('avatar-preview');
  avatarContainer.appendChild(renderer.domElement);

  const loader = new OBJLoader();
  loader.load('/models/roblox-avatar.obj', (object) => {
    object.scale.set(2, 2, 2);
    scene.add(object);

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 2, 0); 
    scene.add(cube);
  });

  camera.position.z = 5;

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  return () => {
    avatarContainer.removeChild(renderer.domElement);
  };
}, []);
