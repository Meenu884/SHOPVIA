(function(){const cv=document.getElementById('hero3d');if(!cv||!window.THREE)return;
const mobile=innerWidth<768,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,100);cam.position.z=9;
const rd=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:!mobile});rd.setPixelRatio(Math.min(devicePixelRatio,mobile?1.5:2));
sc.add(new THREE.AmbientLight(0x8888ff,.6));const l1=new THREE.PointLight(0x8B5CF6,2.5,40);l1.position.set(5,5,6);const l2=new THREE.PointLight(0x38BDF8,2.5,40);l2.position.set(-6,-3,5);sc.add(l1,l2);
const mats=[0x8B5CF6,0x38BDF8,0xF8FAFC].map(c=>new THREE.MeshStandardMaterial({color:c,metalness:.6,roughness:.3}));
const items=[];function bag(){const g=new THREE.Group();const b=new THREE.Mesh(new THREE.BoxGeometry(1.3,1.6,.6),mats[0]);const h=new THREE.Mesh(new THREE.TorusGeometry(.35,.05,8,24,Math.PI),mats[2]);h.position.y=.8;g.add(b,h);return g}
function box(){return new THREE.Mesh(new THREE.BoxGeometry(1,1,1),mats[1])}
const count=mobile?5:10;for(let i=0;i<count;i++){const o=i%2?box():bag();o.position.set((Math.random()-.5)*14,(Math.random()-.5)*7,(Math.random()-.5)*5-1);o.scale.setScalar(.6+Math.random()*.7);o.userData={s:Math.random()*.01+.003,p:Math.random()*6};sc.add(o);items.push(o)}
const knot=new THREE.Mesh(new THREE.TorusKnotGeometry(1.1,.3,100,16),mats[0]);knot.position.set(3.2,0,0);sc.add(knot);items.push(knot);
const pg=new THREE.BufferGeometry(),N=mobile?250:900,pos=new Float32Array(N*3).map(()=>(Math.random()-.5)*22);pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
const pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0x38BDF8,size:.04}));sc.add(pts);
let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
function rs(){const w=cv.clientWidth,h=cv.clientHeight;rd.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}rs();addEventListener('resize',rs);
let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);let t=0;
function loop(){requestAnimationFrame(loop);if(!vis)return;t+=.016;items.forEach(o=>{o.rotation.y+=o.userData.s||.008;o.rotation.x+=(o.userData.s||.004)/2;o.position.y+=Math.sin(t+(o.userData.p||0))*.003});
pts.rotation.y+=.0006;cam.position.x+=(mx*3-cam.position.x)*.04;cam.position.y+=(-my*2-cam.position.y)*.04;cam.lookAt(0,0,0);rd.render(sc,cam)}
reduce?rd.render(sc,cam):loop()})();
