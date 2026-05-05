import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

const AuroraBackground = () => {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    Object.assign(renderer.domElement.style, {
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "0",
      display: "block",
      pointerEvents: "none",
    });
    currentMount.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        #define NUM_OCTAVES 3
        float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}
        float noise(vec2 p){vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);return mix(mix(rand(ip),rand(ip+vec2(1,0)),u.x),mix(rand(ip+vec2(0,1)),rand(ip+vec2(1,1)),u.x),u.y);}
        float fbm(vec2 x){float v=0.;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.5));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.+shift;a*=0.4;}return v;}
        void main(){
          vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(4.,-2.8,2.8,4.);
          vec4 o=vec4(0.);
          float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
          for(float i=0.;i++<28.;){
            vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*5.0;
            float tn=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/28.));
            vec4 ac=vec4(.08+.2*sin(i*.2+iTime*.4),.15+.35*cos(i*.3+iTime*.5),.5+.3*sin(i*.4+iTime*.3),1.);
            vec4 cc=ac*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));
            float tf=smoothstep(0.,1.,i/28.)*.55;
            o+=cc*(1.+tn*.8)*tf;
          }
          o=tanh(pow(o/100.,vec4(1.6)));
          vec3 col=o.rgb*1.4;
          float lum=dot(col,vec3(0.299,0.587,0.114));
          gl_FragColor=vec4(col,clamp(lum*2.5,0.,1.));
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let id;
    const animate = () => {
      id = requestAnimationFrame(animate);
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
    };
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    };
    window.addEventListener("resize", onResize);
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
      if (currentMount.contains(renderer.domElement))
        currentMount.removeChild(renderer.domElement);
      renderer.dispose();
      material.dispose();
      mesh.geometry.dispose();
    };
  }, [theme]);

  return <div ref={mountRef} style={{ pointerEvents: "none" }} />;
};

export default AuroraBackground;
