import{k as oe,n as kt,e as _t,d as It}from"./mapbox-gl-geocoder-CsvoEBDQ.js";import{c as Pe}from"./index-D6bWIqpK.js";import{m as Ee,a as ge}from"./projection-CjDDR_2P.js";const Hr=[-73.5673,45.5017],Kr=14,k=4,C=1.5,et=240,Vr=3e3,St=.5,Jr=.5,Zr=16,Qr={directionDeg:0,speedMps:6,model:"v2"},en={v2:"Model v2",v3:"Model v3"},tn=["v2","v3"],At=.5,Tt=20,rn=320,nn=.35,sn=35,an=.75,on={low:800,medium:1600,high:3200},tt={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.1,sliceCut:"#ff2bd6"},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.2,sliceCut:"#c2189b"}};let _e="dark";function un(n){n in tt?_e=n:_e="dark"}function cn(){return tt[_e]}function rt(n){const e=[1/0,1/0,-1/0,-1/0];return Pe(n,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function Le(n,e){for(const p of[n,e])if(!(Array.isArray(p)&&p.length>=2&&p.every(Number.isFinite)&&Math.abs(p[0])<=180&&Math.abs(p[1])<=85.051129))throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(n[0],e[0]),Math.min(n[1],e[1])];if(Math.abs(n[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=Ee(t),s=ge(t),[a,i]=r([Math.max(n[0],e[0]),Math.max(n[1],e[1])]);if(a<=0||i<=0)throw new Error("The region is empty.");const o=Math.ceil((a-1e-6)/k),c=Math.ceil((i-1e-6)/k),u=s([o*k,c*k]),f=[...t,...u],[l,d,h,g]=f,b={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[l,d],[h,d],[h,g],[l,g],[l,d]]]}};return{origin:t,bounds:f,extentM:[o*k,c*k],polygon:b}}function fn(n){var s;if(((s=n==null?void 0:n.geometry)==null?void 0:s.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(Pe(n,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=rt(n);return{...Le(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(n.geometry)}}}function ln(n,e=St){const t=structuredClone({origin:n.origin,bounds:n.bounds,extentM:n.extentM,polygon:n.polygon}),r=n.extentM.map(u=>Math.ceil(u*e/k)*k),s=ge(n.origin)([0,-r[1]]),a=ge(s)([-r[0],0]),i=Ee(a)(n.bounds.slice(2,4)),o=ge(a)([i[0]+r[0],i[1]+r[1]]),c=Le(a,o);return{...n,...c,mainDomain:t,buffer:{fraction:e,paddingM:r}}}function nt(n){var r,s,a;const e=new Map,t=new Set;for(const i of n){if(!["Polygon","MultiPolygon"].includes((r=i.geometry)==null?void 0:r.type))continue;Pe(i,h=>{if(!Number.isFinite(h[0])||!Number.isFinite(h[1])||Math.abs(h[0])>180||Math.abs(h[1])>85.051129)throw new Error("Invalid building coordinates.")});const o=Number((s=i.properties)==null?void 0:s.height),c=Number((a=i.properties)==null?void 0:a.min_height)||0,u=JSON.stringify([i.geometry,o,c]);if(t.has(u))continue;t.add(u);const f=oe(i);let l=u;f!=null&&(l=JSON.stringify([f,o,c])),e.has(l)||e.set(l,[]);const d={type:"Feature"};i.id!==null&&i.id!==void 0&&(d.id=i.id),d.properties=structuredClone(i.properties??{}),d.geometry=structuredClone(i.geometry),e.get(l).push(d)}return Array.from(e.values(),i=>{const o=i[0];if(i.length>1){const c=It({type:"FeatureCollection",features:i});if(!c)throw new Error("Building parts produced empty geometry.");o.geometry=c.geometry,delete o.bbox}return o})}function dn(n,e){var g,b,p;const t=nt(n),r=e.selection??e.polygon,s=new Set(t.filter(m=>_t(m,r))),a=Array.from(s,oe),i=new Set(a.filter(m=>m!=null)),o=[],c=[],u=[];let f=0,l=0;for(const m of t){const v=oe(m),x=v!=null&&i.has(v);if(!(s.has(m)||x)){c.push(m);continue}const M=(g=m.properties)==null?void 0:g.height;if(M==null||M===""){f++;continue}const w=Number(M);if(!Number.isFinite(w)||w<0||w>et)throw new Error("Building height must be finite and between 0 and 240 m.");if(w===0){f++;continue}Number((b=m.properties)==null?void 0:b.min_height)>0&&l++,o.push({...m,properties:{...m.properties,source_height:w,source_min_height:Number((p=m.properties)==null?void 0:p.min_height)||0,height:Math.max(1,Math.round(w/C))*C,min_height:0}})}const d={type:"FeatureCollection",features:o};let h=e;if(o.length){const m=rt(d);h=Le(m.slice(0,2),m.slice(2,4))}return f&&u.push(f+" parts have missing/zero height and were omitted."),l&&u.push(l+" raised parts are treated as solid from the ground to their roof."),o.length||u.push("No buildings found in loaded map data. This run will use open ground."),o.some(m=>oe(m)==null)&&u.push("Selected parts without provider IDs cannot be joined across tile boundaries."),u.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...h,selection:structuredClone(e.selection??e.polygon),buildings:d,surroundings:{type:"FeatureCollection",features:c},warnings:u}}function hn(n){var t,r;const e=[];for(const s of nt(n)){const a=Number((t=s.properties)==null?void 0:t.height);if(!Number.isFinite(a)||a<=0)continue;const i=Math.min(a,Math.max(0,Number((r=s.properties)==null?void 0:r.min_height)||0));e.push({...s,properties:{...s.properties,height:a,min_height:i}})}return{type:"FeatureCollection",features:e}}function gn(n,e=null){const t=n.map(oe);if(t.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const r=Array.from(new Set(t)),s=["in",kt,["literal",r]],a=["!",s];return e?{selected:["all",e,s],surroundings:["all",e,a]}:{selected:s,surroundings:a}}function pn(n){const[e,t]=n.extentM,r=Math.round(e/k),s=Math.round(t/k);if(r<1||s<1||!Number.isSafeInteger(r*s)||Math.abs(r*k-e)>1e-5||Math.abs(s*k-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const a=Ee(n.origin),i=new Float32Array(r*s);for(const u of n.buildings.features){const f=Number(u.properties.height);if(!Number.isFinite(f)||f<0||f>et)throw new Error("Invalid building height (0..240 metres).");if(!f)continue;const l=Math.max(1,Math.round(f/C));let d;u.geometry.type==="Polygon"?d=[u.geometry.coordinates]:d=u.geometry.coordinates;for(const h of d){const g=h.map(x=>x.map(a));let b=1/0,p=-1/0;for(const x of g)for(const y of x)b=Math.min(b,y[1]),p=Math.max(p,y[1]);const m=Math.max(0,Math.ceil(b/k-.5)),v=Math.min(s,Math.ceil(p/k-.5));for(let x=m;x<v;x++){const y=(x+.5)*k,M=[];for(const w of g)for(let _=0,$=w.length-1;_<w.length;$=_++){const S=w[$],T=w[_],D=S[1]<=y&&T[1]>y,F=T[1]<=y&&S[1]>y;if(D||F){const P=S[0]+(y-S[1])*(T[0]-S[0])/(T[1]-S[1]);M.push(P)}}M.sort((w,_)=>w-_);for(let w=0;w+1<M.length;w+=2){const _=Math.max(0,Math.ceil(M[w]/k-.5-1e-8)),$=Math.min(r,Math.ceil(M[w+1]/k-.5-1e-8));for(let S=_;S<$;S++)i[x*r+S]=Math.max(i[x*r+S],l)}}}}let o=0,c=0;for(const u of i)u>0&&o++,c=Math.max(c,u);return{layers:i,nx:r,ny:s,origin:[...n.origin],extentM:[...n.extentM],mainDomain:n.mainDomain,buffer:n.buffer,spacingM:k,layerSpacingM:C,statistics:{builtCells:o,maximumHeightM:c*C}}}function Bt(n){const e=Number(n);return Number.isFinite(e)&&e>=At&&e<=Tt}function bn({directionDeg:n,speedMps:e}){const t=(o,c)=>{if(o===""||o===null||o===void 0||!Number.isFinite(Number(o)))throw new Error("Invalid "+c+".");return Number(o)},r=t(n,"direction"),s=t(e,"speed");if(!Bt(s))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const a=(r%360+360)%360,i=a*Math.PI/180;return{directionDeg:a,thetaRad:i,speedMps:s}}const ue=Object.freeze({TIMEOUT:"timeout",CANCELLED:"cancelled",DOWNLOAD:"download",GPU:"gpu",PLANNER:"planner",MODEL:"model",MISSION:"mission",TOO_LARGE:"too-large"});class ce extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const U=n=>new ce(ue.MODEL,n),st=8,it=new MessageChannel,at=[];it.port1.onmessage=()=>{var n;return(n=at.shift())==null?void 0:n()};const ot=()=>new Promise(n=>{at.push(n),it.port2.postMessage(0)});class ut{constructor(){this.buffers=[null,null],this.slot=1}next(e){var t;return this.slot^=1,((t=this.buffers[this.slot])==null?void 0:t.byteLength)>=e||(this.buffers[this.slot]=new SharedArrayBuffer(e)),this.buffers[this.slot]}}const I=256,Me=1<<20;class ct{constructor(e,t,r){this.adapterInfo=r,this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[],this.halfRing=new ut}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new ce(ue.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new ce(ue.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),s=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new ct(s,r,t.info??null)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t,r){const s=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:s,usage:t,label:r});return a.tracked=!0,a}storage(e,t){const r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,r,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),s=new Uint32Array(r),a=new Int32Array(r),i=new Float32Array(r);e.forEach(([c,u],f)=>{c==="u"?s[f]=u:c==="i"?a[f]=u:i[f]=u});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,r),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,s,a=I){this.dispatchGroups(e,t,r,...this.workgroups(s,a))}workgroups(e,t=I){const r=Math.max(1,Math.ceil(e/t)),s=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,s),Math.ceil(r/s)]}dispatchGroups(e,t,r,...s){this.replay(e,this.prepared(t,r,s))}prepared(e,t,r){const s=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((a,i)=>({binding:i,resource:{buffer:a}}))});return{pipeline:e,bindGroup:s,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:s}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...s)}async readBack(e,t,r,s){const a=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,r),i=this.device.createCommandEncoder();t(i,a),this.device.queue.submit([i.finish()]);try{await a.mapAsync(GPUMapMode.READ);const o=await s(a.getMappedRange());return a.unmap(),o}finally{this.free(a)}}async readHalf(e,t,r){const s=(a,i)=>a.copyBufferToBuffer(e,0,i,0,i.size);return this.readBack(t*2,s,"staging",a=>this.copyHalves(a,t,r))}async copyHalves(e,t,r){const s=r?new Uint16Array(this.halfRing.next(t*2),0,t):new Uint16Array(t),a=new Uint16Array(e,0,t);let i=performance.now();for(let o=0;o<t;o+=Me)s.set(a.subarray(o,Math.min(t,o+Me)),o),o+Me<t&&performance.now()-i>st&&(await ot(),i=performance.now());return s}}const J=4,Z=1.5,mn=n=>(n+.5)*J,yn=n=>n/J-.5,xn=n=>Math.floor(n/J),ft=n=>(n+.5)*Z,W=20,fe=80,pe=fe-W+1,wn=ft(W),vn=ft(fe),Ct=2,Rt=32,B=4,Pt=()=>!!globalThis.crossOriginIsolated&&typeof SharedArrayBuffer<"u",Et=()=>navigator.hardwareConcurrency||4;function Mn(n,e,t){let r=!1;for(let s=0,a=n.length-1;s<n.length;a=s++){const i=n[s][0],o=n[s][1],c=n[a][0],u=n[a][1];o>t!=u>t&&e<(c-i)*(t-o)/(u-o)+i&&(r=!r)}return r}function Lt(n){let e=0;for(let t=0;t<n.length;t++){const r=n[t],s=n[(t+1)%n.length];e+=r[0]*s[1]-s[0]*r[1]}return e}function Ft(n,e){const t=e.reduce((a,i)=>a+i[0],0)/e.length,r=e.reduce((a,i)=>a+i[1],0)/e.length;let s=n;for(let a=0;a<e.length&&s.length;a++){const i=e[a],o=e[(a+1)%e.length],c=l=>(o[0]-i[0])*(l[1]-i[1])-(o[1]-i[1])*(l[0]-i[0]),u=c([t,r])>0?1:-1,f=s;s=[];for(let l=0;l<f.length;l++){const d=f[l],h=f[(l+1)%f.length],g=u*c(d),b=u*c(h);if(g>=0&&s.push(d),g>=0!=b>=0){const p=g/(g-b);s.push([d[0]+p*(h[0]-d[0]),d[1]+p*(h[1]-d[1])])}}}return s}function lt(n,e,t){const r=(e-1)/2,s=(t-1)/2,a=Math.cos(n),i=Math.sin(n);return{theta:n,cX:r,cY:s,cos:a,sin:i,toWind:([o,c])=>{const u=o-r,f=c-s;return[r+u*a+f*i,s-u*i+f*a]},toCity:([o,c])=>{const u=o-r,f=c-s;return[r+u*a-f*i,s+u*i+f*a]}}}const E=64,R=180,dt=1600,Nt=640,X=8,A=32,G=n=>n.toFixed(6),Y=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Ot=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,Dt=()=>`
struct P { gx: u32, gy: u32, pixels: u32, layerFirst: u32,
           layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32,
           lineMax: u32, pad0: u32, pad1: u32, pad2: u32 };
struct A { majorX: u32, majorSign: i32, minorSign: i32, maxShift: i32,
           lineCount: u32, offsetBase: u32, stepDist: f32, pad: u32 };
@group(0) @binding(0) var<storage, read> height: array<f32>;
@group(0) @binding(1) var<storage, read> layers: array<u32>;
@group(0) @binding(2) var<storage, read> offsets: array<i32>;
@group(0) @binding(3) var<storage, read> table: array<A>;
@group(0) @binding(4) var<storage, read_write> raw: array<u32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${E})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${E}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${G(Z)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${G(Z)}, has1);
  let cutoff = ${G(dt)};
  let majorSize = i32(select(u.gy, u.gx, t.majorX == 1u));
  let minorSize = i32(select(u.gx, u.gy, t.majorX == 1u));
  let lineOffset = i32(line) - t.maxShift;
  let out = (ai * u.pairCount + pair) * u.pixels;
  var o0 = -1;
  var o1 = -1;
  for (var m = majorSize - 1; m >= 0; m--) {
    let om = lineOffset + offsets[t.offsetBase + u32(m)];
    if (om < 0 || om >= minorSize) { continue; }
    let X = select(majorSize - 1 - m, m, t.majorSign > 0);
    let Y = select(minorSize - 1 - om, om, t.minorSign > 0);
    let x = select(Y, X, t.majorX == 1u);
    let y = select(X, Y, t.majorX == 1u);
    let cell = u32(y) * u.gx + u32(x);
    let h = height[cell];
    var d0 = cutoff;
    var d1 = cutoff;
    if (h >= q0) { o0 = m; d0 = 0.0; } else if (o0 >= 0) { d0 = min((f32(o0 - m) - 0.5) * t.stepDist, cutoff); }
    if (h >= q1) { o1 = m; d1 = 0.0; } else if (o1 >= 0) { d1 = min((f32(o1 - m) - 0.5) * t.stepDist, cutoff); }
    raw[out + cell] = pack2x16float(vec2<f32>(d0, d1));
  }
}`;function Ut(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,s)=>`  sums[e + ${s}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${E})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${E}u;
  if (g >= u.pixels * u.layerCount) { return; }
  let k = g / u.pixels;
  let pixel = g % u.pixels;
  var dc = 0.0;
  var re = vec2<f32>(0.0);
  var im = vec2<f32>(0.0);
  for (var ai = 0u; ai < u.angleCount; ai++) {
    let v = unpack2x16float(raw[(ai * u.pairCount + k / 2u) * u.pixels + pixel]);
    let d = select(v.x, v.y, (k & 1u) == 1u);
    let w = trig[u.angleFirst + ai];
    dc += d;
    re += d * w.xz;
    im -= d * w.yw;
  }
  let e = (k * u.pixels + pixel) * ${n.length}u;
${t}
}`}const z=64,N=8,V=z/N,O=V*V,Ie=N*N,qe=Math.log2(z),je=Math.log2(N),de=N-1,Fe="15u",Se="4u",ht="0xfffu",Ae="2048",Wt="4095",Ne="16u",ze=(n,e,t,r,s)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${s?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(Y).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${G(R)} / STEPS[c]));
}
@compute @workgroup_size(${E})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${E}u;
  if (g >= u.nTiles * ${O}u) { return; }
  let t = g / ${O}u;
  let b = g % ${O}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${s?`  let h = field[u.nTiles + t * ${O}u + b];
  let w = h & ${Fe};
  if (w == 0u) { return; }
  let base = i32((h >> ${Se}) & ${ht}) - ${Ae};
  var wi = field[t] + (h >> ${Ne});
  let x0 = tx * ${z}u + (b % ${V}u) * ${N}u;
  let y0 = ty * ${z}u + (b / ${V}u) * ${N}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${Ie}u; j++) {
    let x = x0 + j % ${N}u; let y = y0 + j / ${N}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${z}u + (b % ${V}u) * ${N}u;
  let y0 = ty * ${z}u + (b / ${V}u) * ${N}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${Ie}u; j++) {
    let x = x0 + j % ${N}u; let y = y0 + j / ${N}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${O}u + b] = w | (u32(clamp(mn + ${Ae}, 0, ${Wt})) << ${Se});`}
}`,Xt=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${E})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${E}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${O}u; b++) {
    let h = headers[t * ${O}u + b];
    headers[t * ${O}u + b] = h | (local << ${Ne});
    local += ${Ie/32}u * (h & ${Fe});
  }
  tileWords[t] = local;
}`,Yt=n=>{const e=`array<f32, ${X}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Ot}
struct P { gx: u32, gy: u32, tileCount: u32, layerCount: u32,
           margin: u32, nx: u32, ny: u32, pad0: u32,
           upX0: i32, upY0: i32, pad1: u32, pad2: u32,
           cosU: f32, sinU: f32, cosT: f32, sinT: f32,
           centreX: f32, centreY: f32, pad3: f32, pad4: f32 };
@group(0) @binding(0) var<storage, read> height: array<f32>;
@group(0) @binding(1) var<storage, read> layers: array<u32>;
@group(0) @binding(2) var<storage, read_write> field: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read> tiles: array<i32>;
@group(0) @binding(4) var<uniform> u: P;
fn put(e: u32, v: f32) {
  let bits = pack2x16float(vec2<f32>(v, 0.0)) & 0xffffu;
  atomicOr(&field[e >> 1u], select(bits, bits << 16u, (e & 1u) == 1u));
}
@compute @workgroup_size(${E})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${E}u;
  let groupsPerPixel = (u.layerCount + ${X-1}u) / ${X}u;
  let cells = ${A*A}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${A} + i32(cell % ${A}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${A} + i32(cell / ${A}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  // expanded-grid position (cell centres at integers), as assemble's ix / iy
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  // position inside its cell, 0..1 from the lower edge (0.5 at the centre)
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${X}u;
  let count = min(${X}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${X}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${G(Z)};
  }
  // grid traversal along the single upwind azimuth, for up to LAYER_GROUP query heights at once (the cells the ray
  // crosses do not depend on the height, only where it stops and what it records)
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${G(J)};
    let gyr = u.sinU / ${G(J)};
    // first cell boundary crossings from the start position (fx, fy: its place within the start cell)
    var stepX = 0; var nextX = 1.0e20; var deltaX = 1.0e20;
    if (abs(gxr) >= 1.0e-10) {
      if (gxr > 0.0) { stepX = 1; nextX = divr(1.0 - fx, gxr); deltaX = divr(1.0, gxr); }
      else { stepX = -1; nextX = divr(-fx, gxr); deltaX = divr(-1.0, gxr); }
    }
    var stepY = 0; var nextY = 1.0e20; var deltaY = 1.0e20;
    if (abs(gyr) >= 1.0e-10) {
      if (gyr > 0.0) { stepY = 1; nextY = divr(1.0 - fy, gyr); deltaY = divr(1.0, gyr); }
      else { stepY = -1; nextY = divr(-fy, gyr); deltaY = divr(-1.0, gyr); }
    }
    let cutoff = ${G(dt)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${X}>;
    for (var k = 0u; k < ${X}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${Nt}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${X}u; k++) {
          if (done[k]) { continue; }
          if (roof >= query[k]) {
            hs[0][k] = entered; hs[1][k] = roof - query[k]; hs[2][k] = entered; hs[3][k] = 0.0;
            done[k] = true;
            remaining -= 1u;
          } else {
            let num = roof - query[k];
            let den = max(leaving, 1.0e-8);
            if (num * bestDen[k] > bestNum[k] * den) { bestNum[k] = num; bestDen[k] = den; hs[2][k] = leaving; hs[3][k] = roof - query[k]; }
          }
        }
      }
      let crossX = nextX <= nextY + 1.0e-7;
      let crossY = nextY <= nextX + 1.0e-7;
      if (crossX) { x += stepX; nextX += deltaX; }
      if (crossY) { y += stepY; nextY += deltaY; }
      entered = leaving;
    }
  }
  for (var k = 0u; k < count; k++) {
    let z = query[k];
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${n.length}u;
${n.map((r,s)=>`    put(e0 + ${s}u, ${t[r]});`).join(`
`)}
  }
}`},Gt=(n,e,t)=>{const r=e.stored.length,s=e.up.length,{usesHeight:a}=e,i=[["field","array<u32>"]];a&&i.push(["height","array<f32>"]),i.push(["origins","array<i32>"],["slots","array<i32>"]),s&&i.push(["up","array<u32>"],["upTable","array<i32>"]);const o=i.map(([f,l],d)=>`@group(0) @binding(${d}) var<storage, read> ${f}: ${l};`);o.push(`@group(0) @binding(${i.length}) var<storage, read_write> out: array<${n}>;`),o.push(`@group(0) @binding(${i.length+1}) var<uniform> u: P;`);const c=(f,l)=>`(${f} - ${Y(l.center)}) / ${Y(l.scale)}`,u=e.inputs.map((f,l)=>{let d;if(f.source==="r1")if(f.part==="dc")d=`value = ${c(`sampleField(ry, rx, slot, ${e.storedIndex(f.signal,"dc",0)}u)`,f)};`;else{const h=e.storedIndex(f.signal,"re",f.mode),g=e.storedIndex(f.signal,"im",f.mode);d=`let re = sampleField(ry, rx, slot, ${h}u);
      let im = sampleField(ry, rx, slot, ${g}u);
      let angle = ${Y(f.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${c(f.part==="im"?"(re * s + im * c)":"(re * c - im * s)",f)};`}else if(f.source==="geo"){const h=f.index===0?"h / 100.0":"asinh((h - z) / 10.0)";d=`let h = roofHeight(iy, ix);
      value = ${c(`f16round(${h})`,f)};`}else f.source==="up"?d=`value = ${c(`upAtWind(sy, sx, slot, ${e.up.indexOf(f.index)}u)`,f)};`:f.source==="solid"?d=`let roofLayer = round(roofHeight(iy, ix) / ${G(Z)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:f.axis==="y"?d=`value = (sy - u.centreY) / ${Y(f.scale)};`:f.axis==="z"?d=`value = (f32(layer) - ${Y(f.center)}) / ${Y(f.scale)};`:d=`value = (sx - ${Y(f.center)}) / ${Y(f.scale)};`;return`    case ${l}u: {  // ${f.name}
      ${d}
    }`});return`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, channels: u32, py: u32, px: u32,
  gx: u32, gy: u32, regionX: u32, regionY: u32,
  regionW: u32, regionH: u32, regionPixels: u32, margin: u32,
  cosT: f32, sinT: f32, theta: f32, centreY: f32,
  centreX: f32, packTiles: u32, pad1: f32, pad2: f32,
  upX0: i32, upY0: i32, upTW: u32, upTH: u32,
  upLayers: u32, pad3: u32, pad4: u32, pad5: u32,
};
${o.join(`
`)}

// Round to the nearest float16 value (ties to even), as numpy astype(float16).  Done with bit
// operations: the shader compiler may fold unpack2x16float(pack2x16float(v)) away.
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }   // float16 subnormals
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(Y).join(", ")});
// one value of the packed field (region = whole padded grid)
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${qe}u)) * ${t.tx}u + (x >> ${qe}u);
  let h = field[u.packTiles + t * ${O}u + ((y >> ${je}u) & ${de}u) * ${V}u + ((x >> ${je}u) & ${de}u)];
  let w = h & ${Fe};
  var q = i32((h >> ${Se}) & ${ht}) - ${Ae};
  if (w > 0u) {
    let bit = (((y & ${de}u) * ${N}u) + (x & ${de}u)) * w;
    let word = field[t] + (h >> ${Ne}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${s?`// along-wind channels computed at the wind-frame cells (no interpolation): tile table -> tile slot -> value
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(A)}u) >= u.upTW || u32(ty >> ${Math.log2(A)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(A)}u) * u.upTW + u32(tx >> ${Math.log2(A)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${A*A}u + u32(ty & ${A-1}) * ${A}u + u32(tx & ${A-1})) * ${s}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${a?`fn roofHeight(iy: f32, ix: f32) -> f32 {
  let hy = clamp(i32(round(iy)), 0, i32(u.gy) - 1);
  let hx = clamp(i32(round(ix)), 0, i32(u.gx) - 1);
  return height[u32(hy) * u.gx + u32(hx)];
}`:""}

// Bilinear sample of the stored field at region coordinates (ry, rx).
fn sampleField(ry: f32, rx: f32, slot: u32, c: u32) -> f32 {
  let y0 = floor(ry); let x0 = floor(rx);
  let fy = ry - y0; let fx = rx - x0;
  let iy0 = u32(clamp(i32(y0), 0, i32(u.regionH) - 1));
  let ix0 = u32(clamp(i32(x0), 0, i32(u.regionW) - 1));
  let iy1 = min(iy0 + 1u, u.regionH - 1u);
  let ix1 = min(ix0 + 1u, u.regionW - 1u);
  let v00 = storedAt(iy0 * u.regionW + ix0, slot, c);
  let v01 = storedAt(iy0 * u.regionW + ix1, slot, c);
  let v10 = storedAt(iy1 * u.regionW + ix0, slot, c);
  let v11 = storedAt(iy1 * u.regionW + ix1, slot, c);
  return mix(mix(v00, v01, fx), mix(v10, v11, fx), fy);
}

@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${I}u;
  let area = u.py * u.px;
  if (g >= u.batch * u.channels * area) { return; }
  let p = g % area;
  let channel = (g / area) % u.channels;
  let b = g / (area * u.channels);
  let x = p % u.px;
  let y = p / u.px;
  // Patch origin in wind-frame cells: [sy, layer, sx].
  let sy = f32(origins[b * 3u] + i32(y));
  let layer = u32(origins[b * 3u + 1u]);
  let sx = f32(origins[b * 3u + 2u] + i32(x));
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  // City cell, then expanded-grid cell, then region cell.
  let ix = u.centreX + dx * u.cosT - dy * u.sinT + f32(u.margin);
  let iy = u.centreY + dx * u.sinT + dy * u.cosT + f32(u.margin);
  let ry = iy - f32(u.regionY);
  let rx = ix - f32(u.regionX);
  let z = (f32(layer) + 0.5) * ${G(Z)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${u.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},qt=4,jt=48<<20,zt=3,Ht=.016,Kt=256;class Vt{constructor(e,{layers:t,ny:r,nx:s},a,i,o){this.context=e,this.inputPlan=o,this.ny=r,this.nx=s,this.margin=a,this.gy=r+2*a,this.gx=s+2*a;const c=new Float32Array(this.gy*this.gx);for(let g=0;g<r;g++)for(let b=0;b<s;b++)c[(g+a)*this.gx+b+a]=t[g*s+b]*Z;this.heightBuffer=e.upload(c,"mddf.height");const u=new Float32Array(R),f=new Float32Array(R);for(let g=0;g<R;g++)u[g]=Math.cos(2*Math.PI*g/R),f[g]=Math.sin(2*Math.PI*g/R);this.cosT=u,this.sinT=f,this.scanPipeline=e.pipeline(Dt()),this.accumulatePipeline=e.pipeline(Ut(o.stored)),this.upWind=o.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(Yt(o.up)));const l=o.stored.map(g=>2*Ht*g.scale),d=Math.ceil(this.gx/z),h=Math.ceil(this.gy/z);this.packed={steps:l,tx:d,ty:h},this.packHeaderPipeline=e.pipeline(ze(o.stored,l,d,h,!1)),this.packPayloadPipeline=e.pipeline(ze(o.stored,l,d,h,!0)),this.packTilePipeline=e.pipeline(Xt()),this.assemblePipeline=e.pipeline(Gt(i,o,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,s=this.storedBytesPerCellLayer*r;let a=Math.max(1,Math.min(e.length,Math.floor(t/s)));if(a=Math.min(a,qt),s>t)throw new ce(ue.TOO_LARGE,`one layer needs ${s} bytes, above the ${t}-byte buffer limit`);const i=[];for(let o=0;o<e.length;o+=a){const c=e.slice(o,o+a),u=new Int32Array(Kt).fill(-1);c.forEach((f,l)=>{u[f]=l}),i.push({layers:c,slots:u,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return i}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots,"mddf.slots"),r.layerBuffer=t.upload(new Uint32Array(r.layers),"mddf.layers");this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),s=new Int32Array(R*r),a=new ArrayBuffer(R*32),i=new Uint32Array(a),o=new Int32Array(a),c=new Float32Array(a),u=new Float32Array(R*4);let f=0;for(let l=0;l<R;l++){const d=this.cosT[l],h=this.sinT[l],g=Math.abs(d)>=Math.abs(h),b=g?d:h,p=g?h:d,m=Math.abs(p/b),v=g?e:t,x=g?t:e;for(let w=0;w<v;w++)s[l*r+w]=Math.round(m*w);const y=s[l*r+v-1],M=x+y;f=Math.max(f,M),i[8*l]=g?1:0,o[8*l+1]=b>=0?1:-1,o[8*l+2]=p>=0?1:-1,o[8*l+3]=y,i[8*l+4]=M,i[8*l+5]=l*r,c[8*l+6]=J*Math.sqrt(1+m*m),u.set([d,h,Math.cos(4*Math.PI*l/R),Math.sin(4*Math.PI*l/R)],4*l)}return this.offsetBuffer=this.context.upload(s,"mddf.offsets"),this.tableBuffer=this.context.upload(i,"mddf.scanTable"),this.trigBuffer=this.context.upload(u,"mddf.trig"),this.scanInfo={lineMax:f},this.scanInfo}async scan(e,t){if(this.destroyed)return;const{context:r,gx:s,gy:a}=this,{lineMax:i}=this.scanTables(),o=s*a,c=this.inputPlan.stored.length,u=e.layers.length,f=Math.ceil(u/2),l=Math.max(1,Math.min(R,Math.floor(jt/(f*o*4)))),d=l*f*o*4,h=u*o*c*4;(!this.scanRaw||this.scanRaw.size<d)&&(r.free(this.scanRaw),this.scanRaw=r.storage(d,"mddf.scanRaw")),(!this.sumsBuffer||this.sumsBuffer.size<h)&&(r.free(this.sumsBuffer),this.sumsBuffer=r.storage(h,"mddf.sums"));const g=r.device.createCommandEncoder();g.clearBuffer(this.sumsBuffer,0,u*o*c*4),r.device.queue.submit([g.finish()]);const b=[];for(let p=0;p<R;p+=l){if(this.destroyed)return;const m=Math.min(l,R-p),v=r.device.createCommandEncoder(),x=v.beginComputePass(),y=r.uniform([["u",s],["u",a],["u",o],["u",0],["u",u],["u",f],["u",p],["u",m],["u",i],["u",0],["u",0],["u",0]]);r.dispatch(x,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,y],i*f*m,E);const M=r.uniform([["u",o],["u",u],["u",f],["u",p],["u",m],["u",0],["u",0],["u",0]]);r.dispatch(x,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,M],o*u,E),x.end(),r.device.queue.submit([v.finish()]),b.push(r.device.queue.onSubmittedWorkDone()),b.length>=zt&&await b.shift(),t((p+m)/R)}this.destroyed||(await this.packGroup(e,u,o),!this.destroyed&&(await r.device.queue.onSubmittedWorkDone(),!this.destroyed&&(r.free(this.scanRaw),this.scanRaw=null,r.free(this.sumsBuffer),this.sumsBuffer=null,r.releaseScratch())))}async packGroup(e,t,r){const{context:s,gx:a,gy:i}=this,{tx:o,ty:c}=this.packed,u=t*this.inputPlan.stored.length*o*c,f=s.storage(u*O*4,"mddf.packHeaders"),l=s.storage(u*4,"mddf.packTileWords"),d=s.uniform([["u",a],["u",i],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]),h=s.uniform([["u",u],["u",0],["u",0],["u",0]]),g=()=>{s.free(f),s.free(l)},b=(w,_)=>{const $=w.beginComputePass();s.dispatch($,this.packHeaderPipeline,[this.sumsBuffer,f,d],u*O,E),s.dispatch($,this.packTilePipeline,[f,l,h],u,E),$.end(),w.copyBufferToBuffer(l,0,_,0,u*4)};let p;try{p=await s.readBack(u*4,b,"mddf.packTileWords read",w=>this.destroyed?null:new Uint32Array(w.slice(0)))}catch(w){throw g(),w}if(!p){g();return}const m=new Uint32Array(u);let v=u+u*O;for(let w=0;w<u;w++)m[w]=v,v+=p[w];s.free(e.field),e.field=s.storage(Math.max(4,v*4),"mddf.field"),e.packTiles=u,s.write(e.field,m);const x=s.device.createCommandEncoder();x.copyBufferToBuffer(f,0,e.field,u*4,u*O*4);const y=x.beginComputePass(),M=s.uniform([["u",a],["u",i],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]);s.dispatch(y,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],u*O,E),y.end(),s.device.queue.submit([x.finish()]),await s.device.queue.onSubmittedWorkDone(),g()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*R,s=Math.round(r)%R;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[s],this.sinT[s]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=lt(e,this.nx,this.ny);let s=1/0,a=-1/0,i=1/0,o=-1/0;for(const d of[-.5,this.nx-.5])for(const h of[-.5,this.ny-.5]){const[g,b]=r.toWind([d,h]);s=Math.min(s,g),a=Math.max(a,g),i=Math.min(i,b),o=Math.max(o,b)}const c=Math.floor((s-t)/A)*A,u=Math.floor((i-t)/A)*A,f=Math.ceil((a+t+1-c)/A),l=Math.ceil((o+t+1-u)/A);return{theta:e,x0:c,y0:u,tw:f,th:l,table:new Int32Array(f*l).fill(-1),count:0}}ensureUpTiles(e,t,r,s,a){const{context:i}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(y=>y.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,s));const c=[];for(const[y,M]of r){const w=Math.floor((M-o.x0)/A),_=Math.floor((M+s-1-o.x0)/A),$=Math.floor((y-o.y0)/A),S=Math.floor((y+s-1-o.y0)/A);if(w<0||$<0||_>=o.tw||S>=o.th)throw new Error("a patch lies outside the wind-frame tile grid");for(let T=$;T<=S;T++)for(let D=w;D<=_;D++){const F=T*o.tw+D;o.table[F]<0&&(o.table[F]=o.count+c.length/3,c.push(D,T,o.table[F]))}}const u=c.length/3;if(!u)return 0;a();const f=o.count,l=f+u,d=this.inputPlan.up.length,h=A*A,g=i.device.createCommandEncoder(),b=[];for(const y of e){const M=y.layers.length*h*d*2;if(y.upGrid!==o&&(y.upCount=0),!y.upTiles||y.upCapacity<l){const w=Math.min(o.tw*o.th,Math.max(l,Math.ceil(y.upCapacity*1.5))),_=i.storage(w*M,"mddf.upTiles");y.upTiles&&y.upCount&&g.copyBufferToBuffer(y.upTiles,0,_,0,y.upCount*M),y.upTiles&&b.push(y.upTiles),y.upTiles=_,y.upCapacity=w}y.upGrid=o,g.clearBuffer(y.upTiles,f*M,u*M),y.upCount=l}const p=i.upload(new Int32Array(c),"mddf.upTileList"),[m,v]=this.upwindDirection(t),x=g.beginComputePass();for(const y of e){const M=[this.heightBuffer,y.layerBuffer,y.upTiles,p];i.dispatch(x,this.alongPipeline,[...M,i.uniform([["u",this.gx],["u",this.gy],["u",u],["u",y.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",m],["f",v],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*h*Math.ceil(y.layers.length/X),E)}x.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(i.free(this.upTableBuffer),this.upTableBuffer=i.storage(o.table.byteLength,"mddf.upTable")),i.write(this.upTableBuffer,o.table),i.device.queue.submit([g.finish()]);for(const y of b)i.free(y);return i.free(p),o.count=l,u}assemble(e,t,r,s,a,i){var p,m,v,x;const{context:o,inputPlan:c,gx:u,gy:f}=this,l=t.length/3,d=o.upload(t,"assemble.origins"),h=o.uniform([["u",l],["u",c.inputs.length],["u",a],["u",a],["u",u],["u",f],["u",0],["u",0],["u",u],["u",f],["u",u*f],["u",this.margin],["f",Math.cos(s)],["f",Math.sin(s)],["f",s],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((p=this.upGrid)==null?void 0:p.x0)??0],["i",((m=this.upGrid)==null?void 0:m.y0)??0],["u",((v=this.upGrid)==null?void 0:v.tw)??0],["u",((x=this.upGrid)==null?void 0:x.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),g=[r.field];if(c.usesHeight&&g.push(this.heightBuffer),g.push(d,r.slotBuffer),c.up.length){if(r.upGrid!==this.upGrid)throw new Error("along-wind tiles of another direction (ensureUpTiles first)");g.push(r.upTiles,this.upTableBuffer)}g.push(i,h);const b=e.beginComputePass();return o.dispatch(b,this.assemblePipeline,g,l*c.inputs.length*a*a),b.end(),d}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function Jt(n){const e=n.inputs;if(!e)throw U("the model metadata has no input manifest (metadata.inputs)");if(e.length!==n.model.input_channels)throw U(`manifest has ${e.length} inputs, model expects ${n.model.input_channels}`);const t=[],r=(c,u,f)=>t.findIndex(l=>l.key===`${c}:${u}:${f}`),s=(c,u,f)=>{r(c.signal,u,f)>=0||t.push({key:`${c.signal}:${u}:${f}`,signal:c.signal,part:u,mode:f,scale:c.scale})},a=[];for(const c of e){if(c.source==="r1")c.part==="dc"?s(c,"dc",0):(s(c,"re",c.mode),s(c,"im",c.mode));else if(c.source==="up")a.includes(c.index)||a.push(c.index);else if(!["geo","solid","coord"].includes(c.source))throw U(`unsupported input source ${c.source}`);if(c.source==="geo"&&![0,1].includes(c.index))throw U(`unsupported geo channel ${c.index}`);if(c.source==="up"&&!(c.index>=0&&c.index<4))throw U(`unsupported up channel ${c.index}`)}for(const c of t)if(c.mode>2)throw U("Fourier modes above 2 are not computed");const i=[...new Set(t.map(c=>c.signal))].sort();if(i.length!==1||i[0]!==0)throw U("the stored channels must be those of the upper distance (signal 0) only");const o=e.some(c=>c.source==="solid"||c.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:a,usesHeight:o}}function Te(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let K=null;function gt(){if(K)return K;K=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?K[n]=e*r*2**-24:t===31?K[n]=r?NaN:e*(1/0):K[n]=e*(1+r/1024)*2**(t-15)}return K}function Zt(n){const e=new Float32Array(n.length),t=gt();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function pt(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let s=0;s<n.length;s++){t[0]=n[s];const a=r[0],i=a>>>16&32768,o=a>>>23&255;let c=a&8388607;if(o===255){e[s]=i|31744|(c?1:0);continue}const u=o-127+15;if(u>=31){e[s]=i|31744;continue}if(u<=0){if(u<-10){e[s]=i;continue}c|=8388608;const l=14-u;let d=c>>>l;c>>>l-1&1&&(d+=1),e[s]=i|d;continue}let f=u<<10|c>>>13;c&4096&&(f+=1),e[s]=i|f}return e}const Oe=`
fn erf_approx(x: f32) -> f32 {
  let s = sign(x);
  let ax = abs(x);
  let t = 1.0 / (1.0 + 0.3275911 * ax);
  let y = 1.0 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t
      - 0.284496736) * t + 0.254829592) * t * exp(-ax * ax);
  return s * y;
}
fn gelu(x: f32) -> f32 {
  return 0.5 * x * (1.0 + erf_approx(x * 0.7071067811865476));
}
`,Qt=`
struct P { d0: u32, d1: u32, d2: u32, d3: u32,
           d4: u32, mode: u32, outer: u32, rank: u32,
           strideMode: u32, blockAbove: u32, total: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> facRe: array<f32>;
@group(0) @binding(3) var<storage, read> facIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.total) { return; }
  // Split the flat output index around the contracted mode.
  let inner = g % u.strideMode;
  let a = (g / u.strideMode) % u.outer;
  let above = g / (u.strideMode * u.outer);
  var accRe = 0.0;
  var accIm = 0.0;
  for (var r = 0u; r < u.rank; r++) {
    let source = (above * u.rank + r) * u.strideMode + inner;
    let xr = inRe[source];
    let xi = inIm[source];
    let fr = facRe[a * u.rank + r];
    let fi = facIm[a * u.rank + r];
    accRe += xr * fr - xi * fi;
    accIm += xr * fi + xi * fr;
  }
  outRe[g] = accRe;
  outIm[g] = accIm;
}`;function He(n,e,t){const{enable:r,load:s,save:a}=ne(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${I}>;
@compute @workgroup_size(${I})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${I}u) { s += ${s("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${I/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${I}u) {
    let d = ${s("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${I/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${I}u) {
    Y[base + i] = ${a("("+s("X[base + i]")+" - mean) * inverse")};
  }
}`}const Be=32,Ke=1e-5,be=16;function ne(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function er(n){const{store:e,patch:t}=n,r=t*t,{enable:s,load:a,save:i}=ne(e);return`${s}${Oe}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${be}u;
var<workgroup> w: array<f32, ${be*n.cinMax}>;
@compute @workgroup_size(${I})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear workgroup index over a 2-D grid (a single dimension is capped at 65535).
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/I}u;
  if (wg >= u.batch * perSample) { return; }       // whole workgroups only: uniform
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/I}u;
  let p = (wg % ${r/I}u) * ${I}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${I}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${a("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${be}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${a("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${a("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${i("v")};
  }
}`}function tr(n){const{store:e,patch:t}=n,r=t*t,{enable:s,load:a,save:i}=ne(e);return`${s}${Oe}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${a("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${a("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${i("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function rr(n){const{store:e,patch:t,modes2:r}=n,s=t*t,{enable:a,load:i}=ne(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${s}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${i("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function nr(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.batch * u.channels * u.rows * ${e}u) { return; }
  let k = g % ${e}u;
  let r = (g / ${e}u) % u.rows;
  let bc = g / (${e}u * u.rows);
  var accRe = 0.0; var accIm = 0.0;
  let inBase = bc * u.inner * ${e}u + k;
  let tableBase = r * u.inner;
  for (var j = 0u; j < u.inner; j++) {
    let ar = inRe[inBase + j * ${e}u];
    let ai = inIm[inBase + j * ${e}u];
    let cr = tableRe[tableBase + j];
    let ci = tableIm[tableBase + j];
    accRe += ar * cr - ai * ci;
    accIm += ar * ci + ai * cr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function sr(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  let block = ${r*t}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${t}u;
  let s = (g / ${t}u) % ${r}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${e}u);
  let sp = s - half * ${e}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${e*t}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${t}u + k;
  let xBase = (b * u.channels * ${r}u + s) * ${t}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function ir(n){const{store:e,patch:t,modes2:r}=n,s=t*t,{enable:a,save:i}=ne(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.batch * u.channels * ${s}u) { return; }
  let p = g % ${s}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${s}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${r}u;
  for (var k = 0u; k < ${r}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${i("acc * "+1/Be)};
}`}function ar(n){const{store:e}=n,{enable:t,load:r,save:s}=ne(e);return`${t}${Oe}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${s("acc")};
}`}function or(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:er(n),gate:tr(n),instanceNorm:He(e,r,Ke),instanceNormScaled:He(e,r,Ke/(Be*Be)),forwardColumns:rr(n),rowMix:nr(n),spectralMix:sr(n),inverseColumns:ir(n),residual:ar(n)}}function ur(n,e,t){const r=2*e,s=[];for(let h=0;h<e;h++)s.push(h);for(let h=n-e;h<n;h++)s.push(h);const a=new Float32Array(n*t),i=new Float32Array(n*t);for(let h=0;h<n;h++)for(let g=0;g<t;g++){const b=2*Math.PI*h*g/n;a[h*t+g]=Math.cos(b),i[h*t+g]=-Math.sin(b)}const o=new Float32Array(r*n),c=new Float32Array(r*n);for(let h=0;h<r;h++)for(let g=0;g<n;g++){const b=2*Math.PI*s[h]*g/n;o[h*n+g]=Math.cos(b),c[h*n+g]=-Math.sin(b)}const u=new Float32Array(n*r),f=new Float32Array(n*r);for(let h=0;h<n;h++)for(let g=0;g<r;g++){const b=2*Math.PI*s[g]*h/n;u[h*r+g]=Math.cos(b)/n,f[h*r+g]=Math.sin(b)/n}const l=new Float32Array(t*n),d=new Float32Array(t*n);for(let h=0;h<t;h++){const g=(h===0?1:2)/n;for(let b=0;b<n;b++){const p=2*Math.PI*h*b/n;l[h*n+b]=g*Math.cos(p),d[h*n+b]=-g*Math.sin(p)}}return{forwardCos:a,forwardSin:i,rowRe:o,rowIm:c,inverseRowRe:u,inverseRowIm:f,inverseColCos:l,inverseColSin:d}}function cr(n,e,t){const r=n.tensors[t];if(!r)throw U(`missing tensor ${t}`);return Zt(new Uint16Array(e,r.offset,r.count))}class fr{constructor(e,t,r,s){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.depth=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw U("only square patches are supported");if(this.patch*this.patch%I)throw U(`the patch area must be a multiple of ${I}`);const i={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[u,f]of Object.entries(or(i)))this.pipelines[u]=e.pipeline(f);this.contractPipeline=e.pipeline(Qt);const o=u=>cr(t,r,u);this.tables={};for(const[u,f]of Object.entries(ur(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(f,`fno.table.${u}`);this.weights={};const c=(u,f)=>{const l=o(f);this.weights[u]=this.store==="f16"?e.upload(pt(l),`fno.${u}`):e.upload(l,`fno.${u}`)};c("p1w","p.mlp1.weight"),c("p1b","p.mlp1.bias"),c("p2w","p.mlp2.weight"),c("p2b","p.mlp2.bias"),c("q1w","q.mlp1.weight"),c("q1b","q.mlp1.bias"),c("q2w","q.mlp2.weight"),c("q2b","q.mlp2.bias");for(let u=0;u<this.depth;u++)c(`m1w${u}`,`mlp_layers.${u}.mlp1.weight`),c(`m1b${u}`,`mlp_layers.${u}.mlp1.bias`),c(`m2w${u}`,`mlp_layers.${u}.mlp2.weight`),c(`m2b${u}`,`mlp_layers.${u}.mlp2.bias`),c(`lw${u}`,`w_layers.${u}.weight`),c(`lb${u}`,`w_layers.${u}.bias`);this.buildSpectralWeights(o),this.allocate(s),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,s=r.tucker;let a=s.core_shape.slice(),i=t.upload(e(`${s.core}.re`),"tucker.core.re"),o=t.upload(e(`${s.core}.im`),"tucker.core.im");for(const u of s.factors){const[f,l]=u.shape;if(a[u.mode]!==l)throw U(`factor ${u.name} does not match the core`);const d=a.slice();d[u.mode]=f;const h=d.reduce((w,_)=>w*_,1),g=d.slice(u.mode+1).reduce((w,_)=>w*_,1),b=t.storage(h*4,"tucker.re"),p=t.storage(h*4,"tucker.im"),m=t.upload(e(`${u.name}.re`),"tucker.f"),v=t.upload(e(`${u.name}.im`),"tucker.f"),x=t.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",u.mode],["u",f],["u",l],["u",g],["u",0],["u",h],["u",0]]),y=t.device.createCommandEncoder(),M=y.beginComputePass();t.dispatch(M,this.contractPipeline,[i,o,m,v,b,p,x],h),M.end(),t.device.queue.submit([y.finish()]),t.free(i),t.free(o),t.free(m),t.free(v),i=b,o=p,a=d}t.releaseScratch();const c=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(a.join()!==c.join())throw U(`spectral stack is ${a} but ${c} was expected`);this.spectralRe=i,this.spectralIm=o}allocate(e){const{context:t}=this,r=this.patch*this.patch,s=this.width,a=2*this.modes1,i=(d,h)=>t.storage(e*d*r*this.elementBytes,h),o=(d,h)=>t.storage(e*s*d*4,h),c=i(Math.max(4*s,this.inputChannels,this.outputChannels),"fno.large"),u=i(2*s,"fno.medium"),f=o(this.patch*this.modes2,"fno.xwRe"),l=o(this.patch*this.modes2,"fno.xwIm");this.buffers={x:i(s,"fno.x"),input:c,t2:c,gates:c,spectral:c,output:c,wide:u,t1:u,hidden:u,local:u,xRe:f,xIm:l,yRe:o(a*this.modes2,"fno.yRe"),yIm:o(a*this.modes2,"fno.yIm"),zRe:o(a*this.modes2,"fno.zRe"),zIm:o(a*this.modes2,"fno.zIm"),wRe:f,wIm:l}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/be)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const s of this.passes.get(t))this.context.replay(r,s);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:s,tables:a}=this,i=this.width,o=this.patch*this.patch,c=2*this.modes1,u=[],f=(d,h,g,b)=>{u.push(t.prepared(d,[...h,t.keptUniform(g)],t.workgroups(b)))},l=(d,h,g=s.instanceNorm)=>{u.push(t.prepared(g,[d,h],[e*i]))};f(s.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*i],["u",1]],this.convThreads(e,2*i)),f(s.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*i],["u",i],["u",0]],this.convThreads(e,i));for(let d=0;d<this.depth;d++)l(r.x,r.t1),f(s.forwardColumns,[r.t1,a.forwardCos,a.forwardSin,r.xRe,r.xIm],[["u",e],["u",i],["u",0],["u",0]],e*i*this.patch*this.modes2),f(s.rowMix,[r.xRe,r.xIm,a.rowRe,a.rowIm,r.yRe,r.yIm],[["u",e],["u",i],["u",c],["u",this.patch]],e*i*c*this.modes2),f(s.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",i],["u",2*d],["u",0]],e*i*c*this.modes2),f(s.rowMix,[r.zRe,r.zIm,a.inverseRowRe,a.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",i],["u",this.patch],["u",c]],e*i*this.patch*this.modes2),f(s.inverseColumns,[r.wRe,r.wIm,a.inverseColCos,a.inverseColSin,r.t2],[["u",e],["u",i],["u",0],["u",0]],e*i*o),l(r.t2,r.t1,s.instanceNormScaled),f(s.conv1x1,[r.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],r.gates],[["u",e],["u",i],["u",4*i],["u",0]],this.convThreads(e,4*i)),f(s.gate,[r.gates,r.hidden],[["u",e],["u",2*i],["u",0],["u",0]],e*2*i*o),f(s.conv1x1,[r.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],r.spectral],[["u",e],["u",2*i],["u",i],["u",0]],this.convThreads(e,i)),f(s.conv1x1,[r.x,this.weights[`lw${d}`],this.weights[`lb${d}`],r.local],[["u",e],["u",i],["u",i],["u",0]],this.convThreads(e,i)),f(s.residual,[r.spectral,r.local,r.x],[["u",e*i*o],["u",d<this.depth-1?1:0],["u",0],["u",0]],e*i*o);return f(s.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",i],["u",2*i],["u",1]],this.convThreads(e,2*i)),f(s.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*i],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),u}}const bt="1.0e-6",lr=Number(bt),dr="1.0e-5",me=n=>({rowX0:n+1,rowLen:2*n+1,slots:3*n+1});function hr(n,e,t){const{half:r,values:s,gy:a,gz:i,gx:o,gridX0:c,gridY0:u,theta:f,nx:l,ny:d,layerMap:h,predicted:g,firstLayer:b,compactTable:p}=n,m=me(a),v=gt(),x=i*o*B,y=new Int32Array(t-e),M=new Int32Array(t-e),w=g.length;for(let $=e;$<t;$++){s.fill(0,$*x,($+1)*x);const S=p[m.rowLen+$],T=p[m.rowX0+$],D=p[$];y[$-e]=T,M[$-e]=T+S;for(let F=0;F<w;F++){const P=(D+F*S)*B,xe=(($*i+g[F])*o+T)*B;for(let Q=0;Q<B*S;Q++)s[xe+Q]=v[r[P+Q]]}}if(n.interpolate){const $=(d-1)/2,S=(l-1)/2,T=Math.cos(f),D=Math.sin(f),F=new Float32Array(o);for(let P=e;P<t;P++){for(let q=0;q<o;q++){const j=c+q-S,ee=u+P-$,H=S+j*T-ee*D,we=$+j*D+ee*T,se=Te(H),ie=Te(we);F[q]=se>=0&&se<l&&ie>=0&&ie<d?h[ie*l+se]:0}const xe=y[P-e],Q=M[P-e];for(let q=0;q<g.length-1;q++){const j=g[q],ee=g[q+1];for(let H=j+1;H<ee;H++){const we=(H-j)/(ee-j),se=b+j,ie=b+H,Xe=(P*i+j)*o*B,Ye=(P*i+ee)*o*B,vt=(P*i+H)*o*B;for(let le=xe;le<Q;le++){const Ge=F[le],Mt=Ge>se,$t=Ge>ie;for(let ve=0;ve<B;ve++){const ae=B*le+ve;s[vt+ae]=Mt&&!$t?s[Ye+ae]:s[Xe+ae]+we*(s[Ye+ae]-s[Xe+ae])}}}}}}let _=0;for(let $=e*x;$<t*x;$+=B)if(s[$+3]>lr){const S=s[$]*s[$]+s[$+1]*s[$+1]+s[$+2]*s[$+2];S>_&&(_=S)}return{maxSpeed2:_}}const gr=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, outFirst: u32, pad0: u32, pad1: u32,
  rectY0: u32, rectZ0: u32, rectX0: u32, rectH: u32,
  rectD: u32, rectW: u32, gridY0: i32, gridX0: i32,
  minimumWeight: f32, pad2: f32, pad3: f32, pad4: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${n}>;
@group(0) @binding(1) var<storage, read> origins: array<i32>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<storage, read> table: array<u32>;
@group(0) @binding(4) var<uniform> u: P;
fn hann(index: i32, size: u32) -> f32 {
  let t = 6.283185307179586 * f32(index) / f32(size - 1u);
  return u.minimumWeight + (1.0 - u.minimumWeight) * (0.5 - 0.5 * cos(t));
}
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.rectH * u.rectD * u.rectW) { return; }
  let cx = u.rectX0 + g % u.rectW;
  let cz = u.rectZ0 + (g / u.rectW) % u.rectD;
  let cy = u.rectY0 + g / (u.rectW * u.rectD);
  let sy = i32(cy) + u.gridY0;
  let sx = i32(cx) + u.gridX0;
  let layer = i32(cz + u.outFirst);
  let area = u.py * u.px;
  var s0 = 0.0; var s1 = 0.0; var s2 = 0.0; var total = 0.0;
  for (var b = 0u; b < u.batch; b++) {
    if (layer != origins[b * 3u + 1u]) { continue; }
    let py = sy - origins[b * 3u];
    let px = sx - origins[b * 3u + 2u];
    if (py < 0 || px < 0 || py >= i32(u.py) || px >= i32(u.px)) { continue; }
    let w = hann(py, u.py) * hann(px, u.px);
    let base = b * u.channels * area + u32(py) * u.px + u32(px);
    s0 += w * f32(patches[base]);
    s1 += w * f32(patches[base + area]);
    s2 += w * f32(patches[base + 2u * area]);
    total += w;
  }
  if (total == 0.0) { return; }
  // row cy's offset, the layer's slot times the row's length, x from the row's first covered x
  let len = table[2u * u.gy + 1u + cy];
  let cell = (table[cy] + table[3u * u.gy + 1u + cz] * len + cx - table[u.gy + 1u + cy]) * ${B}u;
  sums[cell] += s0; sums[cell + 1u] += s1; sums[cell + 2u] += s2; sums[cell + 3u] += total;
}`,pr=`
struct P { count: u32, c0: f32, c1: f32, c2: f32, s0: f32, s1: f32, s2: f32, pad0: f32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed: array<u32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.count) { return; }
  let w = sums[g * ${B}u + 3u];
  var a = vec3<f32>(0.0);
  var stored = 0.0;
  if (w > ${bt}) {
    a = vec3<f32>(sums[g * ${B}u], sums[g * ${B}u + 1u], sums[g * ${B}u + 2u]) / w
        * vec3<f32>(u.s0, u.s1, u.s2) + vec3<f32>(u.c0, u.c1, u.c2);
    stored = max(w, ${dr});
  }
  packed[g * 2u] = pack2x16float(vec2<f32>(a.x, a.y));
  packed[g * 2u + 1u] = pack2x16float(vec2<f32>(a.z, stored));
}`,br=Math.ceil(Rt/J+Ct+Math.SQRT2),he=8,mr=.5;function Ve(n,e,t,r){if(e<=t)return[n];const s=Math.ceil((e-t)/r)+1,a=[];for(let i=0;i<s;i++)a.push(n+i*t-Te(i*(s*t-e)/(s-1)));return a}function yr(n,e,t){let r=1/0,s=-1/0;const a=i=>{r=Math.min(r,i),s=Math.max(s,i)};for(let i=0;i<n.length;i++){const o=n[i],c=n[(i+1)%n.length];o[0]>=e&&o[0]<=t&&a(o[1]);for(const u of[e,t])(o[0]-u)*(c[0]-u)<0&&a(o[1]+(u-o[0])/(c[0]-o[0])*(c[1]-o[1]))}return r<=s?[r,s]:null}function xr(n,e){const t=Lt(n)>0?1:-1,r=n.map((s,a)=>{const i=n[(a+1)%n.length],o=Math.hypot(i[0]-s[0],i[1]-s[1])||1;return[t*(i[1]-s[1])/o,-t*(i[0]-s[0])/o]});return n.map(([s,a],i)=>{const o=r[(i+n.length-1)%n.length],c=r[i],u=e/(1+o[0]*c[0]+o[1]*c[1]);return[s+u*(o[0]+c[0]),a+u*(o[1]+c[1])]})}function wr(n,e){const t=e[0]-n[0],r=e[1]-n[1],s=Math.hypot(t,r)||1,a=t/s,i=r/s,o=-i,c=a,u=.5*mr*s,f=[n[0]-a*he,n[1]-i*he],l=[e[0]+a*he,e[1]+i*he];return[[f[0]+o*u,f[1]+c*u],[l[0]+o*u,l[1]+c*u],[l[0]-o*u,l[1]-c*u],[f[0]-o*u,f[1]-c*u]]}function vr(n,e,t,r,s,a){const i=lt(e,t,r),{toWind:o,toCity:c}=i,u=n.map(o),f=[[-.5,-.5],[t-.5,-.5],[t-.5,r-.5],[-.5,r-.5]].map(o),l=Ft(xr(u,br),f);if(l.length<3)throw new Error("the corridor does not touch the city");const d=Math.floor(Math.min(...l.map(m=>m[0]))),h=Math.floor(Math.min(...l.map(m=>m[1]))),g=Math.ceil(Math.max(...l.map(m=>m[0])))-d+1,b=Math.ceil(Math.max(...l.map(m=>m[1])))-h+1,p=[];for(const m of Ve(d,g,s,a)){const v=yr(l,m,m+s-1);if(!v)continue;const x=Math.floor(v[0]),y=Math.max(s,Math.ceil(v[1])-x+1);for(const M of Ve(x,y,s,a))p.push([M,m])}return{theta:e,gx:g,gy:b,gridX0:d,gridY0:h,patches:p,toWind:o,toCity:c}}const Mr=n=>Math.ceil(n*Math.SQRT2),Je=1024<<20,$r=128<<20,kr=2,Ze=6e4,_r=4,Qe=1;function Ir(n,e,t){let r=1/0,s=-1/0,a=1/0,i=-1/0,o=1/0,c=-1/0;for(const[u,f,l]of n)r=Math.min(r,u-e.gridY0),s=Math.max(s,u-e.gridY0+t),a=Math.min(a,l-e.gridX0),i=Math.max(i,l-e.gridX0+t),o=Math.min(o,f-W),c=Math.max(c,f-W+1);return{ry0:Math.max(0,r),ry1:Math.min(e.gy,s),rx0:Math.max(0,a),rx1:Math.min(e.gx,i),rz0:o,rz1:c}}function Sr(n){const e=[];for(let t=W;t<=fe;t++)((t-W)%n===0||t===fe)&&e.push(t);return e}class $n{constructor(e,t,r,{batchSize:s,layerStride:a}){if(this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=s,(pe-1)%a!==0)throw new Error(`layer stride ${a} does not divide the ${pe-1} layer steps of the band`);this.layerStride=a,this.bufferLimit=Math.min($r,e.device.limits.maxStorageBufferBindingSize),this.fno=new fr(e,t,r,s),this.blendPipeline=e.pipeline(gr(this.fno.store)),this.finalizePipeline=e.pipeline(pr),this.inputPlan=Jt(t),this.city=null,this.generation=0,this.fieldWorkers=null,this.fieldJobs=new Map,this.fieldJobCount=0,this.valuesRing=new ut}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.mddf.destroy(),this.city=null,this.stopFieldWorkers(t=>t.cancel())}setCity(e){var c;const{layers:t,ny:r,nx:s}=e;this.cancel(),(c=this.city)==null||c.mddf.destroy();const a=new Vt(this.context,e,Mr(this.patch),this.fno.store,this.inputPlan),i=Sr(this.layerStride),o=a.gx*a.gy*i.length*a.storedBytesPerCellLayer;if(o>Je){a.destroy(),this.city=null;const u=(o/2**20).toFixed(0),f=Je/2**20;throw new ce(ue.TOO_LARGE,`the city's stored field needs ${u} MiB, above the ${f} MiB budget`)}return this.city={mddf:a,ny:r,nx:s,layerMap:t,predictedLayers:i,ready:null,progress:0,groups:null},this.city.ready=this.scanCity(this.city),this.city.ready.catch(()=>{}),this.city}async scanCity(e){const{mddf:t}=e,r=t.planGroups(e.predictedLayers,this.bufferLimit);t.allocate(r),e.progress=0;for(let s=0;s<r.length;s++){if(t.destroyed)return e;await t.scan(r[s],a=>{e.progress=(s+a)/r.length})}return e.progress=1,t.destroyed||(e.groups=r),e}async predict(e,t,r,s){const a=++this.generation,i=()=>a!==this.generation,{context:o}=this,c=this.city,u=s.polygon??wr(e,t),{overlap:f}=s,l=Math.max(1,Math.round(this.patch*(1-f))),d=vr(u,r,c.nx,c.ny,this.patch,l),h=performance.now(),{mddf:g}=c;if(await c.ready,i()||g.destroyed||(g.upWind&&g.ensureUpTiles(c.groups,r,d.patches,this.patch,()=>{var x;return(x=s.onStage)==null?void 0:x.call(s,"geometry")})&&(await o.device.queue.onSubmittedWorkDone(),o.releaseScratch()),i()))return null;const b=Ar(d,this.patch,c.predictedLayers.map(v=>v-W)),p=await this.runNetwork(c,d,b,r,s,i);if(!p)return null;const m=await this.finish(c,d,b,p,r,i);return m?{...m,milliseconds:performance.now()-h}:null}async runNetwork(e,t,r,s,a,i){var m;const{context:o,patch:c}=this,u=o.storage(r.count*B*4,"predictor.sums"),f=o.upload(r.table,"predictor.rows"),l=[],d=e.predictedLayers,h=new Map(d.map(v=>[v,t.patches.length])),g=Math.max(1,a.sweepEvery||1),b=new Set(d.filter((v,x)=>x%g===0||x===d.length-1)),p=()=>(o.free(u),o.free(f),null);for(const v of e.groups){if(i())return p();(m=a.onStage)==null||m.call(a,"network");const x=[];for(const y of v.layers)for(const[M,w]of t.patches)x.push([M,y,w]);for(let y=0;y<x.length;y+=this.batchSize){const M=x.slice(y,y+this.batchSize),w=new Int32Array(M.flat()),_=o.device.createCommandEncoder(),$=e.mddf.assemble(_,w,v,s,c,this.fno.inputBuffer),S=this.fno.encode(_,M.length);if(this.encodeBlend(_,S,$,u,f,M.length,Ir(M,t,c),t),o.device.queue.submit([_.finish()]),l.push(o.device.queue.onSubmittedWorkDone()),l.length>kr&&await l.shift(),o.free($),o.releaseScratch(),a.onLayer)for(const[,T]of M)h.set(T,h.get(T)-1),h.get(T)===0&&b.has(T)&&this.readSweptLayer(u,T,r,t,a,i);if(i())return p()}}return await Promise.all(l),o.free(f),u}encodeBlend(e,t,r,s,a,i,o,c){const{context:u,patch:f}=this,{gy:l}=c,{ry0:d,ry1:h,rx0:g,rx1:b,rz0:p,rz1:m}=o;if(!(h>d&&b>g))return;const v=e.beginComputePass();u.dispatch(v,this.blendPipeline,[t,r,s,a,u.uniform([["u",i],["u",f],["u",this.metadata.model.output_channels],["u",f],["u",l],["u",W],["u",0],["u",0],["u",d],["u",p],["u",g],["u",h-d],["u",m-p],["u",b-g],["i",c.gridY0],["i",c.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(h-d)*(m-p)*(b-g)),v.end()}readSweptLayer(e,t,r,s,a,i){const o=me(s.gy);this.readLayer(e,r.table[o.slots+t-W],r.table,s).then(c=>{i()||a.onLayer(t,c,s,this.metadata.target)}).catch(()=>{})}async readLayer(e,t,r,{gx:s,gy:a}){const i=me(a),o=B*4,c=(u,f)=>{for(let l=0;l<a;l++){const d=r[i.rowLen+l];d&&u.copyBufferToBuffer(e,(r[l]+t*d)*o,f,(l*s+r[i.rowX0+l])*o,d*o)}};return this.context.readBack(a*s*o,c,"layer staging",u=>new Float32Array(u.slice(0)))}async finish(e,t,r,s,a,i){const{context:o}=this,{gx:c,gy:u}=t,f=pe,l=c*u*f,{predicted:d}=r,h=this.metadata.target,g=o.storage(Math.max(8,r.count*B*2),"predictor.packed"),b=o.device.createCommandEncoder(),p=b.beginComputePass();o.dispatch(p,this.finalizePipeline,[s,g,o.uniform([["u",r.count],["f",h.center[0]],["f",h.center[1]],["f",h.center[2]],["f",h.scale[0]],["f",h.scale[1]],["f",h.scale[2]],["f",0]])],r.count),p.end(),o.device.queue.submit([b.finish()]),await o.device.queue.onSubmittedWorkDone(),o.free(s);const m=Pt(),v=await o.readHalf(g,r.count*B,m);if(o.free(g),o.releaseScratch(),i())return null;let x;m?x=new Float32Array(this.valuesRing.next(l*B*4),0,l*B):x=new Float32Array(l*B);const y={half:v,values:x,gy:u,gz:f,gx:c,gridX0:t.gridX0,gridY0:t.gridY0,theta:a,nx:e.nx,ny:e.ny,layerMap:e.layerMap,predicted:d,firstLayer:W,interpolate:this.layerStride>1,compactTable:r.table},M=m?await this.postInWorkers(y,u):await Tr(y,u);if(i())return null;let w=0;for(const _ of M)_.maxSpeed2>w&&(w=_.maxSpeed2);return{maxSpeed2:w,layout:t,gx:c,gy:u,gz:f,firstLayer:W,layerStride:this.layerStride,values:x,valuesPerCell:B}}stopFieldWorkers(e){for(const t of this.fieldWorkers??[])t.terminate();this.fieldWorkers=null;for(const t of[...this.fieldJobs.values()])e(t)}failFieldWorkers(e){this.stopFieldWorkers(t=>t.answer({error:e}))}startFieldWorkers(){const e=Math.max(1,Math.min(_r,Math.floor(Et()/3)));return Array.from({length:e},(t,r)=>{const s=new Worker(new URL("/cityffdv2-demo/assets/field_worker-CNcnW6Nn.js",import.meta.url),{type:"module"});return s.onmessage=({data:a})=>{var i;return(i=this.fieldJobs.get(`${a.id}:${r}`))==null?void 0:i.answer(a)},s.onerror=a=>{a.preventDefault(),this.failFieldWorkers(`field worker failed: ${a.message||"it did not load"}`)},s})}postInWorkers(e,t){this.fieldWorkers??(this.fieldWorkers=this.startFieldWorkers());const r=++this.fieldJobCount,s=this.fieldWorkers,a=s.length,i={...e,half:e.half.buffer,halfLength:e.half.length,values:e.values.buffer,valuesLength:e.values.length};return Promise.all(s.map((o,c)=>new Promise((u,f)=>{const l=`${r}:${c}`,d=()=>{clearTimeout(h),this.fieldJobs.delete(l)},h=setTimeout(()=>{this.failFieldWorkers(`field worker did not answer in ${Ze/1e3} s`)},Ze);this.fieldJobs.set(l,{answer:g=>{d(),g.error?f(new Error(g.error)):u(g)},cancel:()=>{d(),u(null)}}),o.postMessage({id:r,p:i,yLo:Math.floor(c*t/a),yHi:Math.floor((c+1)*t/a)})})))}}function Ar(n,e,t){const{gx:r,gy:s}=n,a=new Int32Array(s).fill(r),i=new Int32Array(s).fill(0);for(const[f,l]of n.patches){const d=Math.max(0,f-n.gridY0),h=Math.min(s,f-n.gridY0+e),g=Math.max(0,l-n.gridX0),b=Math.min(r,l-n.gridX0+e);for(let p=d;p<h;p++)g<a[p]&&(a[p]=g),b>i[p]&&(i[p]=b)}const o=me(s),c=new Uint32Array(o.slots+pe).fill(4294967295,o.slots);let u=0;for(let f=0;f<s;f++){const l=Math.max(0,i[f]-a[f]);c[f]=u,c[o.rowX0+f]=l?a[f]:0,c[o.rowLen+f]=l,u+=l*t.length}return c[s]=u,t.forEach((f,l)=>{c[o.slots+f]=l}),{table:c,count:u,predicted:t}}async function Tr(n,e){const t=[];let r=performance.now();for(let s=0;s<e;s+=Qe)t.push(hr(n,s,Math.min(e,s+Qe))),performance.now()-r>st&&(await ot(),r=performance.now());return t}const mt={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},$e=new Map;function Br(n){if(!$e.has(n)){const e=mt[n],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);$e.set(n,t)}return $e.get(n)}function Cr(n,e){let t="viridis";mt[n]&&(t=n);const r=Br(t),s=Math.min(1,Math.max(0,e))*255,a=Math.floor(s),i=Math.min(255,a+1),o=s-a;return[r[a*3]*(1-o)+r[i*3]*o,r[a*3+1]*(1-o)+r[i*3+1]*o,r[a*3+2]*(1-o)+r[i*3+2]*o]}const Rr=new Set(["u","v","w"]),kn=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis",notInV2:!0},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno",notInV2:!0},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],te={u:0,w:1,v:2,T:3,tke:4};function De(n,e,t,r){const s=n[e+te.u]*r,a=n[e+te.v]*r;switch(t){case"u":return s;case"v":return a;case"w":return n[e+te.w]*r;case"speed":{const i=n[e+te.w]*r;return Math.sqrt(s*s+a*a+i*i)}case"T":return n[e+te.T];case"tke":return n[e+te.tke]*r*r;default:return 0}}function _n(n,e,t,r,s){if(e==="T")return n.fixed.T.slice();let a=n.quantiles[r];if(!a){const f=Object.keys(n.quantiles)[0];a=n.quantiles[f]}const i=a[e],o=Math.min(i.length-1,Math.max(0,Math.round(t)));let c=s;e==="tke"&&(c=s*s);const u=i[o]*c;return n.shape[e]==="symmetric"?[-u,u]:[0,u]}function In(n,e){var s;const t=n.solid.length,r=new Float32Array(t*4);for(let a=0;a<t;a++){const i=a*4,o=De(n.values,a*5,e,1);r[i]=o,(s=n.missing)!=null&&s[a]||!Number.isFinite(o)||n.solid[a]===1?r[i+1]=0:r[i+1]=1}return pt(r)}function Sn(n){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,s,a]=Cr(n,t/255);e[t*4]=r,e[t*4+1]=s,e[t*4+2]=a,e[t*4+3]=255}return e}function An(n,e){var c;const{width:t,height:r}=n,s=t*r,a=new Uint8Array(s);for(let u=0;u<s;u++)!n.solid[u]&&!((c=n.missing)!=null&&c[u])&&(a[u]=1);const i=new Float64Array(5);let o=n.values;for(const[u,f]of[[1,0],[0,1]]){const l=new Float32Array(o);for(let d=0;d<r;d++)for(let h=0;h<t;h++){const g=d*t+h;if(!a[g])continue;i.fill(0);let b=0;for(let p=-e;p<=e;p++){const m=h+p*u,v=d+p*f;if(m<0||v<0||m>=t||v>=r)continue;const x=v*t+m;if(!(!a[x]||!Number.isFinite(o[x*5]))){for(let y=0;y<5;y++)i[y]+=o[x*5+y];b++}}if(b)for(let p=0;p<5;p++)l[g*5+p]=i[p]/b}o=l}return{...n,values:o}}function Tn(n,e){var s;let t=1/0,r=-1/0;for(let a=0;a<n.solid.length;a++){if(n.solid[a]===1||(s=n.missing)!=null&&s[a])continue;const i=De(n.values,a*5,e,1);Number.isFinite(i)&&(i<t&&(t=i),i>r&&(r=i))}return[t,r]}function Bn([n,e],t){if(t==="T")return e>n?[n,e]:null;if(Rr.has(t)){const r=Math.max(-n,e);return r>0?[-r,r]:null}return e>0?[0,e]:null}function Ue(n,e,t){const r=(n.grid.nx-1)/2,s=(n.grid.ny-1)/2,a=n.originX+e-r,i=n.originY+t-s,o=Math.cos(n.theta),c=Math.sin(n.theta),u=(r+a*o-i*c+.5)*4,f=(s+a*c+i*o+.5)*4;return[u,f]}function Cn(n){const e=n.values.slice(),t=n.settings.speedMps/n.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const L=5,Pr=159,Er=30,Lr=1.2;function Fr(n){var s;const e=((s=n.statistics)==null?void 0:s.maximumHeightM)??0,t=Math.max(Er,Lr*e),r=Math.round(t/C-.5);return Math.max(0,Math.min(Pr,r))}function Nr(n,e){const t=[];for(let r=0;r<n;r+=e)t.push(r);return t.push(n),t}function Rn(n,e){if(e==="v2"){const t=[];for(let r=W;r<=fe;r++)t.push(r);return t}return Nr(Fr(n),1)}function Pn(n,e,t=!0){const r=n.width*n.height;let s=[],a=[];return t&&(s=[...e],a=e.map((i,o)=>o)),{width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta,plan:[...e],layers:s,slots:a,values:new Float32Array(e.length*r*L),solid:new Uint8Array(e.length*r)}}function En(n,e,t){if(t.width!==n.width||t.height!==n.height||t.originX!==n.originX)throw new Error("Wind layers do not share one wind-frame grid.");const r=n.width*n.height;n.values.set(t.values,e*r*L),n.solid.set(t.solid,e*r),Or(n,e)}function Or(n,e){if(n.slots.includes(e))return;const t=n.plan[e];let r=0;for(;r<n.layers.length&&n.layers[r]<t;)r++;n.layers.splice(r,0,t),n.slots.splice(r,0,e)}function Ln(n,e){const t=n.width*n.height,r=n.slots[e];return{values:n.values.subarray(r*t*L,(r+1)*t*L),solid:n.solid.subarray(r*t,(r+1)*t)}}function ye(n,e){const t=e/C-.5,{layers:r,slots:s,plan:a}=n;if(a&&(t<a[0]-.5||t>a.at(-1)+.5))return{k0:0,k1:0,f:0,ready:!1};if(t<=r[0])return{k0:0,k1:0,f:0,ready:!a||s[0]===0};const i=r.length-1;if(t>=r[i])return{k0:i,k1:i,f:0,ready:!a||s[i]===a.length-1};let o=1;for(;r[o]<t;)o++;const c=o-1,u=(t-r[c])/(r[o]-r[c]),f=!a||u===0||u===1||s[o]-s[c]===1;return{k0:c,k1:o,f:u,ready:f}}const yt=n=>((n.plan??n.layers).at(-1)+.5)*C,xt=-1;function We(n,e,t,r,s,a,i,o){const{k0:c,k1:u,f}=o,l=n.width*n.height,d=t*n.width+e,h=y=>n.slots[y]*l+d,g=h(c);let b=h(u),p=n.solid[g],m=n.solid[b],v=!1;if(n.grid){const[y,M]=Ue(n,e,t),w=$=>n.solid[h($)]||Re(n.grid,y,M,(n.layers[$]+.5)*C);let _;if(i?_=Dr(n.grid,y,M,r):_=Re(n.grid,y,M,r),_){let $=p||m;$||($=1),p=$,m=$}else if(!p&&w(c)&&(p=1),!m&&w(u)&&(m=1),i&&p&&m){const $=u+1;if($<n.layers.length&&n.slots[$]===n.slots[u]+1&&!w($))b=h($),m=0,v=!0;else return xt}}let x;v||p&&!m?x=1:m&&!p?x=0:x=f;for(let y=0;y<L;y++){const M=n.values[g*L+y],w=n.values[b*L+y];s[a+y]=M*(1-x)+w*x}return v?0:x<.5?p:m}function Dr(n,e,t,r){var u;const s=Math.floor(e/k),a=Math.floor(t/k);if(s<0||a<0||s>=n.nx||a>=n.ny)return!0;const i=a*n.nx+s,o=(((u=n.groundLayers)==null?void 0:u[i])??0)*C,c=n.layers[i]*C;return c>o&&r<c}function Ur(n,e){const t=ye(n,e),{ready:r}=t,s=n.width*n.height,a=new Float32Array(s*L),i=new Uint8Array(s);for(let c=0;c<n.height;c++)for(let u=0;u<n.width;u++){const f=c*n.width+u;i[f]=We(n,u,c,e,a,f*L,!1,t)}let o=1;return r&&(o=0),{values:a,solid:i,missing:new Uint8Array(s).fill(o),width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta}}const Ce=C/2;function re(n,e,t){const r=n.groundLayers;if(!r)return 0;const s=Math.max(0,Math.min(n.nx-1,e/k-.5)),a=Math.max(0,Math.min(n.ny-1,t/k-.5)),i=Math.floor(s),o=Math.floor(a),c=Math.min(n.nx-1,i+1),u=Math.min(n.ny-1,o+1),f=s-i,l=a-o,d=(b,p)=>r[p*n.nx+b],h=d(i,o)*(1-f)+d(c,o)*f,g=d(i,u)*(1-f)+d(c,u)*f;return C*(h*(1-l)+g*l)}function Wr(n,e,t){const r=Math.floor(e/k),s=Math.floor(t/k);return!n.groundLayers||r<0||s<0||r>=n.nx||s>=n.ny?0:n.groundLayers[s*n.nx+r]*C}function Xr(n,e){const{width:t,height:r}=n,s=t*r,a=new Float32Array(s*L),i=new Uint8Array(s),o=new Uint8Array(s),c=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<r;f++)for(let l=0;l<t;l++){const d=f*t+l,[h,g]=Ue(n,l,f);c[d]=re(n.grid,h,g),u[d]=Math.max(0,c[d]+Ce-e);const b=Math.max(e,Wr(n.grid,h,g)+Ce),p=ye(n,b);p.ready?o[d]=0:o[d]=1;const m=We(n,l,f,b,a,d*L,!0,p);m===xt?(o[d]=1,i[d]=0):i[d]=m}return{values:a,solid:i,missing:o,groundM:c,liftM:u,width:t,height:r,originX:n.originX,originY:n.originY,theta:n.theta}}function wt(n,e,t,r,s){const a=(e-1)/2,i=(t-1)/2,o=r/k-.5-a,c=s/k-.5-i,u=Math.cos(n.theta),f=Math.sin(n.theta),l=o*u+c*f+a-n.originX,d=-o*f+c*u+i-n.originY;return[l,d]}function Yr(n,e,t,r,s,a,i){const[o,c]=wt(n,e,t,r,s),{width:u,height:f}=n;if(!(o>=0&&c>=0&&o<=u-1&&c<=f-1))return null;const l=Math.min(u-2,Math.floor(o)),d=Math.min(f-2,Math.floor(c));let h=0;u>1&&(h=o-l);let g=0;f>1&&(g=c-d);const{k0:b,k1:p,f:m}=ye(n,a),v=u*f;for(let x=0;x<L;x++)i[x]=0;for(const[x,y]of[[b,1-m],[p,m]])if(y!==0)for(const[M,w]of[[0,1-g],[1,g]])for(const[_,$]of[[0,1-h],[1,h]]){const S=y*w*$;if(S===0)continue;const T=Math.min(f-1,d+M),D=Math.min(u-1,l+_),F=(n.slots[x]*v+T*u+D)*L;for(let P=0;P<L;P++)i[P]+=n.values[F+P]*S}return i}function Gr(n,e,t){const r=Math.cos(e),s=Math.sin(e);return t[0]=n[0]*r-n[2]*s,t[1]=n[0]*s+n[2]*r,t[2]=n[1],t}function Re(n,e,t,r){const s=Math.floor(e/k),a=Math.floor(t/k);return s<0||a<0||s>=n.nx||a>=n.ny?!0:r<n.layers[a*n.nx+s]*C}function Fn(n,e,t=!1){var o;const r=Number(e)||0,s=Math.max(C/2,Math.min(yt(n),r)),a=Math.max(0,Math.round(s/C-.5));let i;return t&&((o=n.grid)!=null&&o.groundLayers)?i=Xr(n,s):i=Ur(n,s),{...i,grid:n.grid,settings:{...n.settings,heightM:s,layerIndex:a},referenceSpeed:n.referenceSpeed,colorbar:n.colorbar,modelLabel:n.modelLabel,patchCount:n.patchCount,milliseconds:n.milliseconds}}function Nn(n,e){const t=(n.height-1)/2,r=Math.round(t+Number(e)/k);return Math.max(0,Math.min(n.height-1,r))}function On(n){const{nx:e,ny:t}=n.grid,s=[[0,0],[e,0],[0,t],[e,t]].map(([c,u])=>wt(n,e,t,c*k,u*k)[1]),a=(n.height-1)/2,i=Math.max(0,Math.min(...s))-a,o=Math.min(n.height-1,Math.max(...s))-a;return[Math.ceil(i)*k,Math.floor(o)*k]}function Dn(n,e){const{width:t}=n,r=(n.plan??n.layers).at(-1)+1,s=new Float32Array(t*r*L),a=new Uint8Array(t*r),i=new Uint8Array(t*r);for(let o=0;o<r;o++){const c=(o+.5)*C,u=ye(n,c);u.ready||i.fill(1,o*t,(o+1)*t);for(let f=0;f<t;f++)a[o*t+f]=We(n,f,e,c,s,(o*t+f)*L,!1,u)}return{values:s,solid:a,missing:i,width:t,height:r}}const ke=C/2;function Un(n){const{grid:e,theta:t}=n,r=yt(n),s=new Float32Array(5),a=(u,f,l)=>Yr(n,e.nx,e.ny,u,f,l,s)!==null,i=(u,f,l)=>Math.max(u,re(e,f,l)+Ce),o=(u,f,l)=>{const d=(re(e,u+k,f)-re(e,u-k,f))/(2*k),h=(re(e,u,f+k)-re(e,u,f-k))/(2*k);return d*l[0]+h*l[1]},c={plane:null,variable:"speed",wind(u,f,l,d){if(!a(u,f,l))return!1;Gr(s,t,d);const h=c.plane;return h!=null&&h.flat&&h.kind==="h"&&(h.aboveGround&&i(h.z,u,f)>h.z?d[2]=o(u,f,d):d[2]=0),h!=null&&h.flat&&h.kind==="v"&&(d[0]=s[0]*Math.cos(t),d[1]=s[0]*Math.sin(t)),!0},inside:(u,f,l)=>l>=ke&&l<=r&&!Re(e,u,f,l)&&a(u,f,l),value:()=>De(s,0,c.variable,1),valueAt:(u,f,l)=>a(u,f,l)?c.value():0,spawn(u,f){var l,d;for(let h=0;h<20;h++){if(f[0]=u()*e.nx*k,f[1]=u()*e.ny*k,f[2]=ke+u()**2*(r-ke),((l=c.plane)==null?void 0:l.kind)==="h"&&(c.plane.aboveGround?f[2]=i(c.plane.z,f[0],f[1]):f[2]=c.plane.z),((d=c.plane)==null?void 0:d.kind)==="v"){const[g,b]=Ue(n,u()*(n.width-1),c.plane.row);f[0]=g,f[1]=b}if(c.inside(f[0],f[1],f[2]))return}}};return c}export{Tt as $,R as A,St as B,k as C,on as D,Ln as E,W as F,ct as G,Ce as H,gn as I,Cn as J,un as K,C as L,Jr as M,Bt as N,Rn as O,$n as P,Vr as Q,bn as R,nn as S,sn as T,Qr as U,kn as V,pn as W,rn as X,Kr as Y,Hr as Z,tn as _,Le as a,At as a0,yt as a1,an as a2,On as a3,Cr as a4,J as a5,yn as a6,Z as a7,xn as a8,wn as a9,vn as aa,mn as ab,Mn as ac,ln as b,fn as c,hn as d,et as e,Vt as f,Pn as g,L as h,Or as i,fe as j,en as k,Zr as l,cn as m,Ue as n,Sn as o,En as p,Nn as q,Dn as r,dn as s,Fn as t,An as u,Un as v,In as w,Tn as x,Bn as y,_n as z};
