import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  handleMouseMove,
  handleTouchEnd,
  handleTouchMove,
} from "./utils/mouseUtils";

gsap.registerPlugin(ScrollTrigger);

const NODE_COUNT = 7;
const CORE_COLOR = 0xc2a4ff;
const NODE_COLOR = 0xc481ff;
const LINE_COLOR = 0x8a76b3;

const buildTopology = () => {
  const group = new THREE.Group();

  const coreGeometry = new THREE.IcosahedronGeometry(0.55, 1);
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: CORE_COLOR,
    emissive: CORE_COLOR,
    emissiveIntensity: 0.6,
    roughness: 0.25,
    metalness: 0.4,
    wireframe: false,
  });
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);

  const coreWire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.66, 1),
    new THREE.MeshBasicMaterial({
      color: CORE_COLOR,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })
  );
  group.add(coreWire);

  const nodeGeometry = new THREE.SphereGeometry(0.09, 16, 16);
  const nodes: THREE.Mesh[] = [];
  const lineMaterial = new THREE.LineBasicMaterial({
    color: LINE_COLOR,
    transparent: true,
    opacity: 0.55,
  });

  for (let i = 0; i < NODE_COUNT; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
    const radius = 1.3;
    const position = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: NODE_COLOR,
      emissive: NODE_COLOR,
      emissiveIntensity: 0.9,
      roughness: 0.3,
      metalness: 0.3,
    });
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.copy(position);
    node.userData.baseScale = 0.85 + Math.random() * 0.3;
    node.userData.pulseOffset = Math.random() * Math.PI * 2;
    node.scale.setScalar(0);
    group.add(node);
    nodes.push(node);

    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      position,
    ]);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    line.userData.isEdge = true;
    line.scale.setScalar(0.001);
    group.add(line);
  }

  return { group, core, coreWire, nodes };
};

const setLighting = (scene: THREE.Scene) => {
  const directionalLight = new THREE.DirectionalLight(0xc7a9ff, 0.9);
  directionalLight.position.set(-2, 3, 4);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xc2a4ff, 1.2, 100, 2.5);
  pointLight.position.set(3, 4, 4);
  scene.add(pointLight);

  const ambient = new THREE.AmbientLight(0x3a2f4d, 0.6);
  scene.add(ambient);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0.5;
    });
};

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasDiv.current) return;

    const rect = canvasDiv.current.getBoundingClientRect();
    const aspect = rect.width / rect.height;
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: "high-performance",
    });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    canvasDiv.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 1000);
    camera.position.set(0, 0, 11);

    setLighting(scene);
    const { group, coreWire, nodes } = buildTopology();
    scene.add(group);

    gsap.to(group.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.4,
      ease: "back.out(1.4)",
      delay: 0.2,
    });
    group.scale.setScalar(0.001);

    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      duration: 2,
      delay: 0.4,
      ease: "power2.inOut",
    });

    nodes.forEach((node, i) => {
      gsap.to(node.scale, {
        x: node.userData.baseScale,
        y: node.userData.baseScale,
        z: node.userData.baseScale,
        duration: 0.6,
        delay: 0.6 + i * 0.08,
        ease: "back.out(2)",
      });
    });
    group.children
      .filter((child) => child.userData.isEdge)
      .forEach((line, i) => {
        gsap.to(line.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.8,
          delay: 0.5 + i * 0.08,
          ease: "power2.out",
        });
      });

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.05, y: 0.08 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };
    let debounce: ReturnType<typeof setTimeout> | undefined;
    const onTouchStart = (event: TouchEvent) => {
      const element = event.target as HTMLElement;
      debounce = setTimeout(() => {
        element?.addEventListener("touchmove", (e: TouchEvent) =>
          handleTouchMove(e, (x, y) => (mouse = { x, y }))
        );
      }, 200);
    };
    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart);
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      group.rotation.y = THREE.MathUtils.lerp(
        group.rotation.y,
        elapsed * 0.12 + mouse.x * 0.5,
        interpolation.y
      );
      group.rotation.x = THREE.MathUtils.lerp(
        group.rotation.x,
        mouse.y * 0.3,
        interpolation.x
      );

      coreWire.rotation.y -= 0.0015;
      coreWire.rotation.x += 0.0008;

      nodes.forEach((node) => {
        const pulse =
          0.75 +
          Math.sin(elapsed * 1.6 + node.userData.pulseOffset) * 0.2;
        (node.material as THREE.MeshStandardMaterial).emissiveIntensity =
          pulse;
      });

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!canvasDiv.current) return;
      const box = canvasDiv.current.getBoundingClientRect();
      renderer.setSize(box.width, box.height);
      camera.aspect = box.width / box.height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // The container is position:fixed, so once scrolled past the hero
    // it would otherwise sit on top of every section below it. Fade it
    // out (and stop it from intercepting clicks) over the hero scroll.
    const fadeTrigger = ScrollTrigger.create({
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const el = canvasDiv.current;
        if (!el) return;
        el.style.opacity = String(1 - self.progress);
        el.style.pointerEvents = self.progress > 0.85 ? "none" : "auto";
      },
    });

    return () => {
      clearTimeout(debounce);
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouseMove);
      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }
      fadeTrigger.kill();
      scene.clear();
      renderer.dispose();
      if (canvasDiv.current) {
        canvasDiv.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim"></div>
      </div>
    </div>
  );
};

export default Scene;
