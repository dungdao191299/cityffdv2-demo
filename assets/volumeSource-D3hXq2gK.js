import{k as oe,n as It,e as St,d as At}from"./mapbox-gl-geocoder-DM874Y6j.js";import{c as Pe}from"./index-D6bWIqpK.js";import{m as Ee,a as be}from"./projection-CjDDR_2P.js";const Zr=[-73.5673,45.5017],Qr=14,_=4,B=1.5,et=240,en=3e3,Tt=.5,tn=.5,rn=16,Ct={directionDeg:0,speedMps:6,model:"v2",layerSpacingM:3},nn=30,sn={v2:"Model v2",v3:"Model v3"},an=["v2","v3"],Bt=.5,Rt=20,on=320,un=.35,cn=35,fn=.75,ln={low:800,medium:1600,high:3200},tt={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.1,sliceCut:"#ff2bd6"},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.2,sliceCut:"#c2189b"}};let _e="dark";function dn(n){n in tt?_e=n:_e="dark"}function hn(){return tt[_e]}function rt(n){const e=[1/0,1/0,-1/0,-1/0];return Pe(n,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function Le(n,e){for(const b of[n,e])if(!(Array.isArray(b)&&b.length>=2&&b.every(Number.isFinite)&&Math.abs(b[0])<=180&&Math.abs(b[1])<=85.051129))throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(n[0],e[0]),Math.min(n[1],e[1])];if(Math.abs(n[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=Ee(t),s=be(t),[o,i]=r([Math.max(n[0],e[0]),Math.max(n[1],e[1])]);if(o<=0||i<=0)throw new Error("The region is empty.");const a=Math.ceil((o-1e-6)/_),c=Math.ceil((i-1e-6)/_),u=s([a*_,c*_]),f=[...t,...u],[l,d,h,g]=f,p={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[l,d],[h,d],[h,g],[l,g],[l,d]]]}};return{origin:t,bounds:f,extentM:[a*_,c*_],polygon:p}}function gn(n){var s;if(((s=n==null?void 0:n.geometry)==null?void 0:s.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(Pe(n,o=>{if(!Number.isFinite(o[0])||!Number.isFinite(o[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=rt(n);return{...Le(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(n.geometry)}}}function pn(n,e=Tt){const t=structuredClone({origin:n.origin,bounds:n.bounds,extentM:n.extentM,polygon:n.polygon}),r=n.extentM.map(u=>Math.ceil(u*e/_)*_),s=be(n.origin)([0,-r[1]]),o=be(s)([-r[0],0]),i=Ee(o)(n.bounds.slice(2,4)),a=be(o)([i[0]+r[0],i[1]+r[1]]),c=Le(o,a);return{...n,...c,mainDomain:t,buffer:{fraction:e,paddingM:r}}}function nt(n){var r,s,o;const e=new Map,t=new Set;for(const i of n){if(!["Polygon","MultiPolygon"].includes((r=i.geometry)==null?void 0:r.type))continue;Pe(i,h=>{if(!Number.isFinite(h[0])||!Number.isFinite(h[1])||Math.abs(h[0])>180||Math.abs(h[1])>85.051129)throw new Error("Invalid building coordinates.")});const a=Number((s=i.properties)==null?void 0:s.height),c=Number((o=i.properties)==null?void 0:o.min_height)||0,u=JSON.stringify([i.geometry,a,c]);if(t.has(u))continue;t.add(u);const f=oe(i);let l=u;f!=null&&(l=JSON.stringify([f,a,c])),e.has(l)||e.set(l,[]);const d={type:"Feature"};i.id!==null&&i.id!==void 0&&(d.id=i.id),d.properties=structuredClone(i.properties??{}),d.geometry=structuredClone(i.geometry),e.get(l).push(d)}return Array.from(e.values(),i=>{const a=i[0];if(i.length>1){const c=At({type:"FeatureCollection",features:i});if(!c)throw new Error("Building parts produced empty geometry.");a.geometry=c.geometry,delete a.bbox}return a})}function bn(n,e){var g,p,b;const t=nt(n),r=e.selection??e.polygon,s=new Set(t.filter(m=>St(m,r))),o=Array.from(s,oe),i=new Set(o.filter(m=>m!=null)),a=[],c=[],u=[];let f=0,l=0;for(const m of t){const M=oe(m),x=M!=null&&i.has(M);if(!(s.has(m)||x)){c.push(m);continue}const v=(g=m.properties)==null?void 0:g.height;if(v==null||v===""){f++;continue}const w=Number(v);if(!Number.isFinite(w)||w<0||w>et)throw new Error("Building height must be finite and between 0 and 240 m.");if(w===0){f++;continue}Number((p=m.properties)==null?void 0:p.min_height)>0&&l++,a.push({...m,properties:{...m.properties,source_height:w,source_min_height:Number((b=m.properties)==null?void 0:b.min_height)||0,height:Math.max(1,Math.round(w/B))*B,min_height:0}})}const d={type:"FeatureCollection",features:a};let h=e;if(a.length){const m=rt(d);h=Le(m.slice(0,2),m.slice(2,4))}return f&&u.push(f+" parts have missing/zero height and were omitted."),l&&u.push(l+" raised parts are treated as solid from the ground to their roof."),a.length||u.push("No buildings found in loaded map data. This run will use open ground."),a.some(m=>oe(m)==null)&&u.push("Selected parts without provider IDs cannot be joined across tile boundaries."),u.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...h,selection:structuredClone(e.selection??e.polygon),buildings:d,surroundings:{type:"FeatureCollection",features:c},warnings:u}}function mn(n){var t,r;const e=[];for(const s of nt(n)){const o=Number((t=s.properties)==null?void 0:t.height);if(!Number.isFinite(o)||o<=0)continue;const i=Math.min(o,Math.max(0,Number((r=s.properties)==null?void 0:r.min_height)||0));e.push({...s,properties:{...s.properties,height:o,min_height:i}})}return{type:"FeatureCollection",features:e}}function yn(n,e=null){const t=n.map(oe);if(t.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const r=Array.from(new Set(t)),s=["in",It,["literal",r]],o=["!",s];return e?{selected:["all",e,s],surroundings:["all",e,o]}:{selected:s,surroundings:o}}function xn(n){const[e,t]=n.extentM,r=Math.round(e/_),s=Math.round(t/_);if(r<1||s<1||!Number.isSafeInteger(r*s)||Math.abs(r*_-e)>1e-5||Math.abs(s*_-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const o=Ee(n.origin),i=new Float32Array(r*s);for(const u of n.buildings.features){const f=Number(u.properties.height);if(!Number.isFinite(f)||f<0||f>et)throw new Error("Invalid building height (0..240 metres).");if(!f)continue;const l=Math.max(1,Math.round(f/B));let d;u.geometry.type==="Polygon"?d=[u.geometry.coordinates]:d=u.geometry.coordinates;for(const h of d){const g=h.map(x=>x.map(o));let p=1/0,b=-1/0;for(const x of g)for(const y of x)p=Math.min(p,y[1]),b=Math.max(b,y[1]);const m=Math.max(0,Math.ceil(p/_-.5)),M=Math.min(s,Math.ceil(b/_-.5));for(let x=m;x<M;x++){const y=(x+.5)*_,v=[];for(const w of g)for(let $=0,k=w.length-1;$<w.length;k=$++){const S=w[k],T=w[$],D=S[1]<=y&&T[1]>y,F=T[1]<=y&&S[1]>y;if(D||F){const P=S[0]+(y-S[1])*(T[0]-S[0])/(T[1]-S[1]);v.push(P)}}v.sort((w,$)=>w-$);for(let w=0;w+1<v.length;w+=2){const $=Math.max(0,Math.ceil(v[w]/_-.5-1e-8)),k=Math.min(r,Math.ceil(v[w+1]/_-.5-1e-8));for(let S=$;S<k;S++)i[x*r+S]=Math.max(i[x*r+S],l)}}}}let a=0,c=0;for(const u of i)u>0&&a++,c=Math.max(c,u);return{layers:i,nx:r,ny:s,origin:[...n.origin],extentM:[...n.extentM],mainDomain:n.mainDomain,buffer:n.buffer,spacingM:_,layerSpacingM:B,statistics:{builtCells:a,maximumHeightM:c*B}}}function Pt(n){const e=Number(n);return Number.isFinite(e)&&e>=Bt&&e<=Rt}function wn({directionDeg:n,speedMps:e}){const t=(a,c)=>{if(a===""||a===null||a===void 0||!Number.isFinite(Number(a)))throw new Error("Invalid "+c+".");return Number(a)},r=t(n,"direction"),s=t(e,"speed");if(!Pt(s))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const o=(r%360+360)%360,i=o*Math.PI/180;return{directionDeg:o,thetaRad:i,speedMps:s}}const ce=Object.freeze({TIMEOUT:"timeout",CANCELLED:"cancelled",DOWNLOAD:"download",GPU:"gpu",PLANNER:"planner",MODEL:"model",MISSION:"mission",TOO_LARGE:"too-large"});class fe extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const U=n=>new fe(ce.MODEL,n),st=8,it=new MessageChannel,at=[];it.port1.onmessage=()=>{var n;return(n=at.shift())==null?void 0:n()};const ot=()=>new Promise(n=>{at.push(n),it.port2.postMessage(0)});class ut{constructor(){this.buffers=[null,null],this.slot=1}next(e){var t;return this.slot^=1,((t=this.buffers[this.slot])==null?void 0:t.byteLength)>=e||(this.buffers[this.slot]=new SharedArrayBuffer(e)),this.buffers[this.slot]}}const I=256,ve=1<<20;class ct{constructor(e,t,r){this.adapterInfo=r,this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[],this.halfRing=new ut}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new fe(ce.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new fe(ce.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),s=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new ct(s,r,t.info??null)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t,r){const s=Math.max(4,Math.ceil(e/4)*4),o=this.device.createBuffer({size:s,usage:t,label:r});return o.tracked=!0,o}storage(e,t){const r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,r,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),s=new Uint32Array(r),o=new Int32Array(r),i=new Float32Array(r);e.forEach(([c,u],f)=>{c==="u"?s[f]=u:c==="i"?o[f]=u:i[f]=u});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,r),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,s,o=I){this.dispatchGroups(e,t,r,...this.workgroups(s,o))}workgroups(e,t=I){const r=Math.max(1,Math.ceil(e/t)),s=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,s),Math.ceil(r/s)]}dispatchGroups(e,t,r,...s){this.replay(e,this.prepared(t,r,s))}prepared(e,t,r){const s=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((o,i)=>({binding:i,resource:{buffer:o}}))});return{pipeline:e,bindGroup:s,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:s}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...s)}async readBack(e,t,r,s){const o=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,r),i=this.device.createCommandEncoder();t(i,o),this.device.queue.submit([i.finish()]);try{await o.mapAsync(GPUMapMode.READ);const a=await s(o.getMappedRange());return o.unmap(),a}finally{this.free(o)}}async readHalf(e,t,r){const s=(o,i)=>o.copyBufferToBuffer(e,0,i,0,i.size);return this.readBack(t*2,s,"staging",o=>this.copyHalves(o,t,r))}async copyHalves(e,t,r){const s=r?new Uint16Array(this.halfRing.next(t*2),0,t):new Uint16Array(t),o=new Uint16Array(e,0,t);let i=performance.now();for(let a=0;a<t;a+=ve)s.set(o.subarray(a,Math.min(t,a+ve)),a),a+ve<t&&performance.now()-i>st&&(await ot(),i=performance.now());return s}}const J=4,Z=1.5,Mn=n=>(n+.5)*J,vn=n=>n/J-.5,$n=n=>Math.floor(n/J),ft=n=>(n+.5)*Z;let W=20,le=80,ue=le-W+1;function kn(n,e){W=n,le=e,ue=e-n+1}const _n=ft(W),In=ft(le),Et=2,Lt=32,C=4,Ft=()=>!!globalThis.crossOriginIsolated&&typeof SharedArrayBuffer<"u",Nt=()=>navigator.hardwareConcurrency||4;function Sn(n,e,t){let r=!1;for(let s=0,o=n.length-1;s<n.length;o=s++){const i=n[s][0],a=n[s][1],c=n[o][0],u=n[o][1];a>t!=u>t&&e<(c-i)*(t-a)/(u-a)+i&&(r=!r)}return r}function Ot(n){let e=0;for(let t=0;t<n.length;t++){const r=n[t],s=n[(t+1)%n.length];e+=r[0]*s[1]-s[0]*r[1]}return e}function Dt(n,e){const t=e.reduce((o,i)=>o+i[0],0)/e.length,r=e.reduce((o,i)=>o+i[1],0)/e.length;let s=n;for(let o=0;o<e.length&&s.length;o++){const i=e[o],a=e[(o+1)%e.length],c=l=>(a[0]-i[0])*(l[1]-i[1])-(a[1]-i[1])*(l[0]-i[0]),u=c([t,r])>0?1:-1,f=s;s=[];for(let l=0;l<f.length;l++){const d=f[l],h=f[(l+1)%f.length],g=u*c(d),p=u*c(h);if(g>=0&&s.push(d),g>=0!=p>=0){const b=g/(g-p);s.push([d[0]+b*(h[0]-d[0]),d[1]+b*(h[1]-d[1])])}}}return s}function lt(n,e,t){const r=(e-1)/2,s=(t-1)/2,o=Math.cos(n),i=Math.sin(n);return{theta:n,cX:r,cY:s,cos:o,sin:i,toWind:([a,c])=>{const u=a-r,f=c-s;return[r+u*o+f*i,s-u*i+f*o]},toCity:([a,c])=>{const u=a-r,f=c-s;return[r+u*o-f*i,s+u*i+f*o]}}}const E=64,R=180,dt=1600,Ut=640,X=8,A=32,G=n=>n.toFixed(6),Y=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Wt=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,Xt=()=>`
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
}`;function Yt(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,s)=>`  sums[e + ${s}u] += ${e(r)};`).join(`
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
}`}const z=64,N=8,V=z/N,O=V*V,Ie=N*N,qe=Math.log2(z),je=Math.log2(N),ge=N-1,Fe="15u",Se="4u",ht="0xfffu",Ae="2048",Gt="4095",Ne="16u",ze=(n,e,t,r,s)=>`
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
  headers[t * ${O}u + b] = w | (u32(clamp(mn + ${Ae}, 0, ${Gt})) << ${Se});`}
}`,qt=()=>`
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
}`,jt=n=>{const e=`array<f32, ${X}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Wt}
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
    for (var step = 0u; step < ${Ut}u; step++) {
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
}`},zt=(n,e,t)=>{const r=e.stored.length,s=e.up.length,{usesHeight:o}=e,i=[["field","array<u32>"]];o&&i.push(["height","array<f32>"]),i.push(["origins","array<i32>"],["slots","array<i32>"]),s&&i.push(["up","array<u32>"],["upTable","array<i32>"]);const a=i.map(([f,l],d)=>`@group(0) @binding(${d}) var<storage, read> ${f}: ${l};`);a.push(`@group(0) @binding(${i.length}) var<storage, read_write> out: array<${n}>;`),a.push(`@group(0) @binding(${i.length+1}) var<uniform> u: P;`);const c=(f,l)=>`(${f} - ${Y(l.center)}) / ${Y(l.scale)}`,u=e.inputs.map((f,l)=>{let d;if(f.source==="r1")if(f.part==="dc")d=`value = ${c(`sampleField(ry, rx, slot, ${e.storedIndex(f.signal,"dc",0)}u)`,f)};`;else{const h=e.storedIndex(f.signal,"re",f.mode),g=e.storedIndex(f.signal,"im",f.mode);d=`let re = sampleField(ry, rx, slot, ${h}u);
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
${a.join(`
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
  let h = field[u.packTiles + t * ${O}u + ((y >> ${je}u) & ${ge}u) * ${V}u + ((x >> ${je}u) & ${ge}u)];
  let w = h & ${Fe};
  var q = i32((h >> ${Se}) & ${ht}) - ${Ae};
  if (w > 0u) {
    let bit = (((y & ${ge}u) * ${N}u) + (x & ${ge}u)) * w;
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
${o?`fn roofHeight(iy: f32, ix: f32) -> f32 {
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
}`},Ht=4,Kt=48<<20,Vt=3,Jt=.016,Zt=256;class Qt{constructor(e,{layers:t,ny:r,nx:s},o,i,a){this.context=e,this.inputPlan=a,this.ny=r,this.nx=s,this.margin=o,this.gy=r+2*o,this.gx=s+2*o;const c=new Float32Array(this.gy*this.gx);for(let g=0;g<r;g++)for(let p=0;p<s;p++)c[(g+o)*this.gx+p+o]=t[g*s+p]*Z;this.heightBuffer=e.upload(c,"mddf.height");const u=new Float32Array(R),f=new Float32Array(R);for(let g=0;g<R;g++)u[g]=Math.cos(2*Math.PI*g/R),f[g]=Math.sin(2*Math.PI*g/R);this.cosT=u,this.sinT=f,this.scanPipeline=e.pipeline(Xt()),this.accumulatePipeline=e.pipeline(Yt(a.stored)),this.upWind=a.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(jt(a.up)));const l=a.stored.map(g=>2*Jt*g.scale),d=Math.ceil(this.gx/z),h=Math.ceil(this.gy/z);this.packed={steps:l,tx:d,ty:h},this.packHeaderPipeline=e.pipeline(ze(a.stored,l,d,h,!1)),this.packPayloadPipeline=e.pipeline(ze(a.stored,l,d,h,!0)),this.packTilePipeline=e.pipeline(qt()),this.assemblePipeline=e.pipeline(zt(i,a,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,s=this.storedBytesPerCellLayer*r;let o=Math.max(1,Math.min(e.length,Math.floor(t/s)));if(o=Math.min(o,Ht),s>t)throw new fe(ce.TOO_LARGE,`one layer needs ${s} bytes, above the ${t}-byte buffer limit`);const i=[];for(let a=0;a<e.length;a+=o){const c=e.slice(a,a+o),u=new Int32Array(Zt).fill(-1);c.forEach((f,l)=>{u[f]=l}),i.push({layers:c,slots:u,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return i}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots,"mddf.slots"),r.layerBuffer=t.upload(new Uint32Array(r.layers),"mddf.layers");this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),s=new Int32Array(R*r),o=new ArrayBuffer(R*32),i=new Uint32Array(o),a=new Int32Array(o),c=new Float32Array(o),u=new Float32Array(R*4);let f=0;for(let l=0;l<R;l++){const d=this.cosT[l],h=this.sinT[l],g=Math.abs(d)>=Math.abs(h),p=g?d:h,b=g?h:d,m=Math.abs(b/p),M=g?e:t,x=g?t:e;for(let w=0;w<M;w++)s[l*r+w]=Math.round(m*w);const y=s[l*r+M-1],v=x+y;f=Math.max(f,v),i[8*l]=g?1:0,a[8*l+1]=p>=0?1:-1,a[8*l+2]=b>=0?1:-1,a[8*l+3]=y,i[8*l+4]=v,i[8*l+5]=l*r,c[8*l+6]=J*Math.sqrt(1+m*m),u.set([d,h,Math.cos(4*Math.PI*l/R),Math.sin(4*Math.PI*l/R)],4*l)}return this.offsetBuffer=this.context.upload(s,"mddf.offsets"),this.tableBuffer=this.context.upload(i,"mddf.scanTable"),this.trigBuffer=this.context.upload(u,"mddf.trig"),this.scanInfo={lineMax:f},this.scanInfo}async scan(e,t){if(this.destroyed)return;const{context:r,gx:s,gy:o}=this,{lineMax:i}=this.scanTables(),a=s*o,c=this.inputPlan.stored.length,u=e.layers.length,f=Math.ceil(u/2),l=Math.max(1,Math.min(R,Math.floor(Kt/(f*a*4)))),d=l*f*a*4,h=u*a*c*4;(!this.scanRaw||this.scanRaw.size<d)&&(r.free(this.scanRaw),this.scanRaw=r.storage(d,"mddf.scanRaw")),(!this.sumsBuffer||this.sumsBuffer.size<h)&&(r.free(this.sumsBuffer),this.sumsBuffer=r.storage(h,"mddf.sums"));const g=r.device.createCommandEncoder();g.clearBuffer(this.sumsBuffer,0,u*a*c*4),r.device.queue.submit([g.finish()]);const p=[];for(let b=0;b<R;b+=l){if(this.destroyed)return;const m=Math.min(l,R-b),M=r.device.createCommandEncoder(),x=M.beginComputePass(),y=r.uniform([["u",s],["u",o],["u",a],["u",0],["u",u],["u",f],["u",b],["u",m],["u",i],["u",0],["u",0],["u",0]]);r.dispatch(x,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,y],i*f*m,E);const v=r.uniform([["u",a],["u",u],["u",f],["u",b],["u",m],["u",0],["u",0],["u",0]]);r.dispatch(x,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,v],a*u,E),x.end(),r.device.queue.submit([M.finish()]),p.push(r.device.queue.onSubmittedWorkDone()),p.length>=Vt&&await p.shift(),t((b+m)/R)}this.destroyed||(await this.packGroup(e,u,a),!this.destroyed&&(await r.device.queue.onSubmittedWorkDone(),!this.destroyed&&(r.free(this.scanRaw),this.scanRaw=null,r.free(this.sumsBuffer),this.sumsBuffer=null,r.releaseScratch())))}async packGroup(e,t,r){const{context:s,gx:o,gy:i}=this,{tx:a,ty:c}=this.packed,u=t*this.inputPlan.stored.length*a*c,f=s.storage(u*O*4,"mddf.packHeaders"),l=s.storage(u*4,"mddf.packTileWords"),d=s.uniform([["u",o],["u",i],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]),h=s.uniform([["u",u],["u",0],["u",0],["u",0]]),g=()=>{s.free(f),s.free(l)},p=(w,$)=>{const k=w.beginComputePass();s.dispatch(k,this.packHeaderPipeline,[this.sumsBuffer,f,d],u*O,E),s.dispatch(k,this.packTilePipeline,[f,l,h],u,E),k.end(),w.copyBufferToBuffer(l,0,$,0,u*4)};let b;try{b=await s.readBack(u*4,p,"mddf.packTileWords read",w=>this.destroyed?null:new Uint32Array(w.slice(0)))}catch(w){throw g(),w}if(!b){g();return}const m=new Uint32Array(u);let M=u+u*O;for(let w=0;w<u;w++)m[w]=M,M+=b[w];s.free(e.field),e.field=s.storage(Math.max(4,M*4),"mddf.field"),e.packTiles=u,s.write(e.field,m);const x=s.device.createCommandEncoder();x.copyBufferToBuffer(f,0,e.field,u*4,u*O*4);const y=x.beginComputePass(),v=s.uniform([["u",o],["u",i],["u",r],["u",t],["u",u],["u",0],["u",0],["u",0]]);s.dispatch(y,this.packPayloadPipeline,[this.sumsBuffer,e.field,v],u*O,E),y.end(),s.device.queue.submit([x.finish()]),await s.device.queue.onSubmittedWorkDone(),g()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*R,s=Math.round(r)%R;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[s],this.sinT[s]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=lt(e,this.nx,this.ny);let s=1/0,o=-1/0,i=1/0,a=-1/0;for(const d of[-.5,this.nx-.5])for(const h of[-.5,this.ny-.5]){const[g,p]=r.toWind([d,h]);s=Math.min(s,g),o=Math.max(o,g),i=Math.min(i,p),a=Math.max(a,p)}const c=Math.floor((s-t)/A)*A,u=Math.floor((i-t)/A)*A,f=Math.ceil((o+t+1-c)/A),l=Math.ceil((a+t+1-u)/A);return{theta:e,x0:c,y0:u,tw:f,th:l,table:new Int32Array(f*l).fill(-1),count:0}}ensureUpTiles(e,t,r,s,o){const{context:i}=this;let a=this.upGrid;(!a||a.theta!==t||a.count>0&&e.some(y=>y.upGrid!==a))&&(a=this.upGrid=this.upTileGrid(t,s));const c=[];for(const[y,v]of r){const w=Math.floor((v-a.x0)/A),$=Math.floor((v+s-1-a.x0)/A),k=Math.floor((y-a.y0)/A),S=Math.floor((y+s-1-a.y0)/A);if(w<0||k<0||$>=a.tw||S>=a.th)throw new Error("a patch lies outside the wind-frame tile grid");for(let T=k;T<=S;T++)for(let D=w;D<=$;D++){const F=T*a.tw+D;a.table[F]<0&&(a.table[F]=a.count+c.length/3,c.push(D,T,a.table[F]))}}const u=c.length/3;if(!u)return 0;o();const f=a.count,l=f+u,d=this.inputPlan.up.length,h=A*A,g=i.device.createCommandEncoder(),p=[];for(const y of e){const v=y.layers.length*h*d*2;if(y.upGrid!==a&&(y.upCount=0),!y.upTiles||y.upCapacity<l){const w=Math.min(a.tw*a.th,Math.max(l,Math.ceil(y.upCapacity*1.5))),$=i.storage(w*v,"mddf.upTiles");y.upTiles&&y.upCount&&g.copyBufferToBuffer(y.upTiles,0,$,0,y.upCount*v),y.upTiles&&p.push(y.upTiles),y.upTiles=$,y.upCapacity=w}y.upGrid=a,g.clearBuffer(y.upTiles,f*v,u*v),y.upCount=l}const b=i.upload(new Int32Array(c),"mddf.upTileList"),[m,M]=this.upwindDirection(t),x=g.beginComputePass();for(const y of e){const v=[this.heightBuffer,y.layerBuffer,y.upTiles,b];i.dispatch(x,this.alongPipeline,[...v,i.uniform([["u",this.gx],["u",this.gy],["u",u],["u",y.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",a.x0],["i",a.y0],["u",0],["u",0],["f",m],["f",M],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*h*Math.ceil(y.layers.length/X),E)}x.end(),(!this.upTableBuffer||this.upTableBuffer.size!==a.table.byteLength)&&(i.free(this.upTableBuffer),this.upTableBuffer=i.storage(a.table.byteLength,"mddf.upTable")),i.write(this.upTableBuffer,a.table),i.device.queue.submit([g.finish()]);for(const y of p)i.free(y);return i.free(b),a.count=l,u}assemble(e,t,r,s,o,i){var b,m,M,x;const{context:a,inputPlan:c,gx:u,gy:f}=this,l=t.length/3,d=a.upload(t,"assemble.origins"),h=a.uniform([["u",l],["u",c.inputs.length],["u",o],["u",o],["u",u],["u",f],["u",0],["u",0],["u",u],["u",f],["u",u*f],["u",this.margin],["f",Math.cos(s)],["f",Math.sin(s)],["f",s],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((b=this.upGrid)==null?void 0:b.x0)??0],["i",((m=this.upGrid)==null?void 0:m.y0)??0],["u",((M=this.upGrid)==null?void 0:M.tw)??0],["u",((x=this.upGrid)==null?void 0:x.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),g=[r.field];if(c.usesHeight&&g.push(this.heightBuffer),g.push(d,r.slotBuffer),c.up.length){if(r.upGrid!==this.upGrid)throw new Error("along-wind tiles of another direction (ensureUpTiles first)");g.push(r.upTiles,this.upTableBuffer)}g.push(i,h);const p=e.beginComputePass();return a.dispatch(p,this.assemblePipeline,g,l*c.inputs.length*o*o),p.end(),d}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function er(n){const e=n.inputs;if(!e)throw U("the model metadata has no input manifest (metadata.inputs)");if(e.length!==n.model.input_channels)throw U(`manifest has ${e.length} inputs, model expects ${n.model.input_channels}`);const t=[],r=(c,u,f)=>t.findIndex(l=>l.key===`${c}:${u}:${f}`),s=(c,u,f)=>{r(c.signal,u,f)>=0||t.push({key:`${c.signal}:${u}:${f}`,signal:c.signal,part:u,mode:f,scale:c.scale})},o=[];for(const c of e){if(c.source==="r1")c.part==="dc"?s(c,"dc",0):(s(c,"re",c.mode),s(c,"im",c.mode));else if(c.source==="up")o.includes(c.index)||o.push(c.index);else if(!["geo","solid","coord"].includes(c.source))throw U(`unsupported input source ${c.source}`);if(c.source==="geo"&&![0,1].includes(c.index))throw U(`unsupported geo channel ${c.index}`);if(c.source==="up"&&!(c.index>=0&&c.index<4))throw U(`unsupported up channel ${c.index}`)}for(const c of t)if(c.mode>2)throw U("Fourier modes above 2 are not computed");const i=[...new Set(t.map(c=>c.signal))].sort();if(i.length!==1||i[0]!==0)throw U("the stored channels must be those of the upper distance (signal 0) only");const a=e.some(c=>c.source==="solid"||c.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:o,usesHeight:a}}function Te(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let K=null;function gt(){if(K)return K;K=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?K[n]=e*r*2**-24:t===31?K[n]=r?NaN:e*(1/0):K[n]=e*(1+r/1024)*2**(t-15)}return K}function tr(n){const e=new Float32Array(n.length),t=gt();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function pt(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let s=0;s<n.length;s++){t[0]=n[s];const o=r[0],i=o>>>16&32768,a=o>>>23&255;let c=o&8388607;if(a===255){e[s]=i|31744|(c?1:0);continue}const u=a-127+15;if(u>=31){e[s]=i|31744;continue}if(u<=0){if(u<-10){e[s]=i;continue}c|=8388608;const l=14-u;let d=c>>>l;c>>>l-1&1&&(d+=1),e[s]=i|d;continue}let f=u<<10|c>>>13;c&4096&&(f+=1),e[s]=i|f}return e}const Oe=`
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
`,rr=`
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
}`;function He(n,e,t){const{enable:r,load:s,save:o}=ne(n);return`${r}
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
    Y[base + i] = ${o("("+s("X[base + i]")+" - mean) * inverse")};
  }
}`}const Ce=32,Ke=1e-5,me=16;function ne(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function nr(n){const{store:e,patch:t}=n,r=t*t,{enable:s,load:o,save:i}=ne(e);return`${s}${Oe}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${me}u;
var<workgroup> w: array<f32, ${me*n.cinMax}>;
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
    w[k] = select(0.0, ${o("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${me}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${o("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${o("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${i("v")};
  }
}`}function sr(n){const{store:e,patch:t}=n,r=t*t,{enable:s,load:o,save:i}=ne(e);return`${s}${Oe}
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
  let value = ${o("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${o("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${i("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function ir(n){const{store:e,patch:t,modes2:r}=n,s=t*t,{enable:o,load:i}=ne(e);return`${o}
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
}`}function ar(n){const{modes2:e}=n;return`
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
}`}function or(n){const{modes1:e,modes2:t}=n,r=2*e;return`
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
}`}function ur(n){const{store:e,patch:t,modes2:r}=n,s=t*t,{enable:o,save:i}=ne(e);return`${o}
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
  Y[g] = ${i("acc * "+1/Ce)};
}`}function cr(n){const{store:e}=n,{enable:t,load:r,save:s}=ne(e);return`${t}${Oe}
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
}`}function fr(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:nr(n),gate:sr(n),instanceNorm:He(e,r,Ke),instanceNormScaled:He(e,r,Ke/(Ce*Ce)),forwardColumns:ir(n),rowMix:ar(n),spectralMix:or(n),inverseColumns:ur(n),residual:cr(n)}}function lr(n,e,t){const r=2*e,s=[];for(let h=0;h<e;h++)s.push(h);for(let h=n-e;h<n;h++)s.push(h);const o=new Float32Array(n*t),i=new Float32Array(n*t);for(let h=0;h<n;h++)for(let g=0;g<t;g++){const p=2*Math.PI*h*g/n;o[h*t+g]=Math.cos(p),i[h*t+g]=-Math.sin(p)}const a=new Float32Array(r*n),c=new Float32Array(r*n);for(let h=0;h<r;h++)for(let g=0;g<n;g++){const p=2*Math.PI*s[h]*g/n;a[h*n+g]=Math.cos(p),c[h*n+g]=-Math.sin(p)}const u=new Float32Array(n*r),f=new Float32Array(n*r);for(let h=0;h<n;h++)for(let g=0;g<r;g++){const p=2*Math.PI*s[g]*h/n;u[h*r+g]=Math.cos(p)/n,f[h*r+g]=Math.sin(p)/n}const l=new Float32Array(t*n),d=new Float32Array(t*n);for(let h=0;h<t;h++){const g=(h===0?1:2)/n;for(let p=0;p<n;p++){const b=2*Math.PI*h*p/n;l[h*n+p]=g*Math.cos(b),d[h*n+p]=-g*Math.sin(b)}}return{forwardCos:o,forwardSin:i,rowRe:a,rowIm:c,inverseRowRe:u,inverseRowIm:f,inverseColCos:l,inverseColSin:d}}function dr(n,e,t){const r=n.tensors[t];if(!r)throw U(`missing tensor ${t}`);return tr(new Uint16Array(e,r.offset,r.count))}class hr{constructor(e,t,r,s){const o=t.model;if(this.context=e,this.metadata=t,this.width=o.width,this.depth=o.layers,this.inputChannels=o.input_channels,this.outputChannels=o.output_channels,this.patch=t.inference.patch[0],this.modes1=o.modes[0],this.modes2=o.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw U("only square patches are supported");if(this.patch*this.patch%I)throw U(`the patch area must be a multiple of ${I}`);const i={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[u,f]of Object.entries(fr(i)))this.pipelines[u]=e.pipeline(f);this.contractPipeline=e.pipeline(rr);const a=u=>dr(t,r,u);this.tables={};for(const[u,f]of Object.entries(lr(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(f,`fno.table.${u}`);this.weights={};const c=(u,f)=>{const l=a(f);this.weights[u]=this.store==="f16"?e.upload(pt(l),`fno.${u}`):e.upload(l,`fno.${u}`)};c("p1w","p.mlp1.weight"),c("p1b","p.mlp1.bias"),c("p2w","p.mlp2.weight"),c("p2b","p.mlp2.bias"),c("q1w","q.mlp1.weight"),c("q1b","q.mlp1.bias"),c("q2w","q.mlp2.weight"),c("q2b","q.mlp2.bias");for(let u=0;u<this.depth;u++)c(`m1w${u}`,`mlp_layers.${u}.mlp1.weight`),c(`m1b${u}`,`mlp_layers.${u}.mlp1.bias`),c(`m2w${u}`,`mlp_layers.${u}.mlp2.weight`),c(`m2b${u}`,`mlp_layers.${u}.mlp2.bias`),c(`lw${u}`,`w_layers.${u}.weight`),c(`lb${u}`,`w_layers.${u}.bias`);this.buildSpectralWeights(a),this.allocate(s),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,s=r.tucker;let o=s.core_shape.slice(),i=t.upload(e(`${s.core}.re`),"tucker.core.re"),a=t.upload(e(`${s.core}.im`),"tucker.core.im");for(const u of s.factors){const[f,l]=u.shape;if(o[u.mode]!==l)throw U(`factor ${u.name} does not match the core`);const d=o.slice();d[u.mode]=f;const h=d.reduce((w,$)=>w*$,1),g=d.slice(u.mode+1).reduce((w,$)=>w*$,1),p=t.storage(h*4,"tucker.re"),b=t.storage(h*4,"tucker.im"),m=t.upload(e(`${u.name}.re`),"tucker.f"),M=t.upload(e(`${u.name}.im`),"tucker.f"),x=t.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",u.mode],["u",f],["u",l],["u",g],["u",0],["u",h],["u",0]]),y=t.device.createCommandEncoder(),v=y.beginComputePass();t.dispatch(v,this.contractPipeline,[i,a,m,M,p,b,x],h),v.end(),t.device.queue.submit([y.finish()]),t.free(i),t.free(a),t.free(m),t.free(M),i=p,a=b,o=d}t.releaseScratch();const c=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(o.join()!==c.join())throw U(`spectral stack is ${o} but ${c} was expected`);this.spectralRe=i,this.spectralIm=a}allocate(e){const{context:t}=this,r=this.patch*this.patch,s=this.width,o=2*this.modes1,i=(d,h)=>t.storage(e*d*r*this.elementBytes,h),a=(d,h)=>t.storage(e*s*d*4,h),c=i(Math.max(4*s,this.inputChannels,this.outputChannels),"fno.large"),u=i(2*s,"fno.medium"),f=a(this.patch*this.modes2,"fno.xwRe"),l=a(this.patch*this.modes2,"fno.xwIm");this.buffers={x:i(s,"fno.x"),input:c,t2:c,gates:c,spectral:c,output:c,wide:u,t1:u,hidden:u,local:u,xRe:f,xIm:l,yRe:a(o*this.modes2,"fno.yRe"),yIm:a(o*this.modes2,"fno.yIm"),zRe:a(o*this.modes2,"fno.zRe"),zIm:a(o*this.modes2,"fno.zIm"),wRe:f,wIm:l}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/me)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const s of this.passes.get(t))this.context.replay(r,s);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:s,tables:o}=this,i=this.width,a=this.patch*this.patch,c=2*this.modes1,u=[],f=(d,h,g,p)=>{u.push(t.prepared(d,[...h,t.keptUniform(g)],t.workgroups(p)))},l=(d,h,g=s.instanceNorm)=>{u.push(t.prepared(g,[d,h],[e*i]))};f(s.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*i],["u",1]],this.convThreads(e,2*i)),f(s.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*i],["u",i],["u",0]],this.convThreads(e,i));for(let d=0;d<this.depth;d++)l(r.x,r.t1),f(s.forwardColumns,[r.t1,o.forwardCos,o.forwardSin,r.xRe,r.xIm],[["u",e],["u",i],["u",0],["u",0]],e*i*this.patch*this.modes2),f(s.rowMix,[r.xRe,r.xIm,o.rowRe,o.rowIm,r.yRe,r.yIm],[["u",e],["u",i],["u",c],["u",this.patch]],e*i*c*this.modes2),f(s.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",i],["u",2*d],["u",0]],e*i*c*this.modes2),f(s.rowMix,[r.zRe,r.zIm,o.inverseRowRe,o.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",i],["u",this.patch],["u",c]],e*i*this.patch*this.modes2),f(s.inverseColumns,[r.wRe,r.wIm,o.inverseColCos,o.inverseColSin,r.t2],[["u",e],["u",i],["u",0],["u",0]],e*i*a),l(r.t2,r.t1,s.instanceNormScaled),f(s.conv1x1,[r.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],r.gates],[["u",e],["u",i],["u",4*i],["u",0]],this.convThreads(e,4*i)),f(s.gate,[r.gates,r.hidden],[["u",e],["u",2*i],["u",0],["u",0]],e*2*i*a),f(s.conv1x1,[r.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],r.spectral],[["u",e],["u",2*i],["u",i],["u",0]],this.convThreads(e,i)),f(s.conv1x1,[r.x,this.weights[`lw${d}`],this.weights[`lb${d}`],r.local],[["u",e],["u",i],["u",i],["u",0]],this.convThreads(e,i)),f(s.residual,[r.spectral,r.local,r.x],[["u",e*i*a],["u",d<this.depth-1?1:0],["u",0],["u",0]],e*i*a);return f(s.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",i],["u",2*i],["u",1]],this.convThreads(e,2*i)),f(s.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*i],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),u}}const bt="1.0e-6",gr=Number(bt),pr="1.0e-5",ye=n=>({rowX0:n+1,rowLen:2*n+1,slots:3*n+1});function br(n,e,t){const{half:r,values:s,gy:o,gz:i,gx:a,gridX0:c,gridY0:u,theta:f,nx:l,ny:d,layerMap:h,predicted:g,firstLayer:p,compactTable:b}=n,m=ye(o),M=gt(),x=i*a*C,y=new Int32Array(t-e),v=new Int32Array(t-e),w=g.length;for(let k=e;k<t;k++){s.fill(0,k*x,(k+1)*x);const S=b[m.rowLen+k],T=b[m.rowX0+k],D=b[k];y[k-e]=T,v[k-e]=T+S;for(let F=0;F<w;F++){const P=(D+F*S)*C,xe=((k*i+g[F])*a+T)*C;for(let Q=0;Q<C*S;Q++)s[xe+Q]=M[r[P+Q]]}}if(n.interpolate){const k=(d-1)/2,S=(l-1)/2,T=Math.cos(f),D=Math.sin(f),F=new Float32Array(a);for(let P=e;P<t;P++){for(let q=0;q<a;q++){const j=c+q-S,ee=u+P-k,H=S+j*T-ee*D,we=k+j*D+ee*T,se=Te(H),ie=Te(we);F[q]=se>=0&&se<l&&ie>=0&&ie<d?h[ie*l+se]:0}const xe=y[P-e],Q=v[P-e];for(let q=0;q<g.length-1;q++){const j=g[q],ee=g[q+1];for(let H=j+1;H<ee;H++){const we=(H-j)/(ee-j),se=p+j,ie=p+H,Xe=(P*i+j)*a*C,Ye=(P*i+ee)*a*C,$t=(P*i+H)*a*C;for(let he=xe;he<Q;he++){const Ge=F[he],kt=Ge>se,_t=Ge>ie;for(let Me=0;Me<C;Me++){const ae=C*he+Me;s[$t+ae]=kt&&!_t?s[Ye+ae]:s[Xe+ae]+we*(s[Ye+ae]-s[Xe+ae])}}}}}}let $=0;for(let k=e*x;k<t*x;k+=C)if(s[k+3]>gr){const S=s[k]*s[k]+s[k+1]*s[k+1]+s[k+2]*s[k+2];S>$&&($=S)}return{maxSpeed2:$}}const mr=n=>`${n==="f16"?`enable f16;
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
  let cell = (table[cy] + table[3u * u.gy + 1u + cz] * len + cx - table[u.gy + 1u + cy]) * ${C}u;
  sums[cell] += s0; sums[cell + 1u] += s1; sums[cell + 2u] += s2; sums[cell + 3u] += total;
}`,yr=`
struct P { count: u32, c0: f32, c1: f32, c2: f32, s0: f32, s1: f32, s2: f32, pad0: f32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed: array<u32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${I})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${I}u;
  if (g >= u.count) { return; }
  let w = sums[g * ${C}u + 3u];
  var a = vec3<f32>(0.0);
  var stored = 0.0;
  if (w > ${bt}) {
    a = vec3<f32>(sums[g * ${C}u], sums[g * ${C}u + 1u], sums[g * ${C}u + 2u]) / w
        * vec3<f32>(u.s0, u.s1, u.s2) + vec3<f32>(u.c0, u.c1, u.c2);
    stored = max(w, ${pr});
  }
  packed[g * 2u] = pack2x16float(vec2<f32>(a.x, a.y));
  packed[g * 2u + 1u] = pack2x16float(vec2<f32>(a.z, stored));
}`,xr=Math.ceil(Lt/J+Et+Math.SQRT2),pe=8,wr=.5;function Ve(n,e,t,r){if(e<=t)return[n];const s=Math.ceil((e-t)/r)+1,o=[];for(let i=0;i<s;i++)o.push(n+i*t-Te(i*(s*t-e)/(s-1)));return o}function Mr(n,e,t){let r=1/0,s=-1/0;const o=i=>{r=Math.min(r,i),s=Math.max(s,i)};for(let i=0;i<n.length;i++){const a=n[i],c=n[(i+1)%n.length];a[0]>=e&&a[0]<=t&&o(a[1]);for(const u of[e,t])(a[0]-u)*(c[0]-u)<0&&o(a[1]+(u-a[0])/(c[0]-a[0])*(c[1]-a[1]))}return r<=s?[r,s]:null}function vr(n,e){const t=Ot(n)>0?1:-1,r=n.map((s,o)=>{const i=n[(o+1)%n.length],a=Math.hypot(i[0]-s[0],i[1]-s[1])||1;return[t*(i[1]-s[1])/a,-t*(i[0]-s[0])/a]});return n.map(([s,o],i)=>{const a=r[(i+n.length-1)%n.length],c=r[i],u=e/(1+a[0]*c[0]+a[1]*c[1]);return[s+u*(a[0]+c[0]),o+u*(a[1]+c[1])]})}function $r(n,e){const t=e[0]-n[0],r=e[1]-n[1],s=Math.hypot(t,r)||1,o=t/s,i=r/s,a=-i,c=o,u=.5*wr*s,f=[n[0]-o*pe,n[1]-i*pe],l=[e[0]+o*pe,e[1]+i*pe];return[[f[0]+a*u,f[1]+c*u],[l[0]+a*u,l[1]+c*u],[l[0]-a*u,l[1]-c*u],[f[0]-a*u,f[1]-c*u]]}function kr(n,e,t,r,s,o){const i=lt(e,t,r),{toWind:a,toCity:c}=i,u=n.map(a),f=[[-.5,-.5],[t-.5,-.5],[t-.5,r-.5],[-.5,r-.5]].map(a),l=Dt(vr(u,xr),f);if(l.length<3)throw new Error("the corridor does not touch the city");const d=Math.floor(Math.min(...l.map(m=>m[0]))),h=Math.floor(Math.min(...l.map(m=>m[1]))),g=Math.ceil(Math.max(...l.map(m=>m[0])))-d+1,p=Math.ceil(Math.max(...l.map(m=>m[1])))-h+1,b=[];for(const m of Ve(d,g,s,o)){const M=Mr(l,m,m+s-1);if(!M)continue;const x=Math.floor(M[0]),y=Math.max(s,Math.ceil(M[1])-x+1);for(const v of Ve(x,y,s,o))b.push([v,m])}return{theta:e,gx:g,gy:p,gridX0:d,gridY0:h,patches:b,toWind:a,toCity:c}}const _r=n=>Math.ceil(n*Math.SQRT2),Je=4*1024**3,Ir=128<<20,Sr=2,Ze=6e4,Ar=4,Qe=1;function Tr(n,e,t){let r=1/0,s=-1/0,o=1/0,i=-1/0,a=1/0,c=-1/0;for(const[u,f,l]of n)r=Math.min(r,u-e.gridY0),s=Math.max(s,u-e.gridY0+t),o=Math.min(o,l-e.gridX0),i=Math.max(i,l-e.gridX0+t),a=Math.min(a,f-W),c=Math.max(c,f-W+1);return{ry0:Math.max(0,r),ry1:Math.min(e.gy,s),rx0:Math.max(0,o),rx1:Math.min(e.gx,i),rz0:a,rz1:c}}function Cr(n){const e=[];for(let t=W;t<=le;t++)((t-W)%n===0||t===le)&&e.push(t);return e}class An{constructor(e,t,r,{batchSize:s,layerStride:o}){if(this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=s,(ue-1)%o!==0)throw new Error(`layer stride ${o} does not divide the ${ue-1} layer steps of the band`);this.layerStride=o,this.bufferLimit=Math.min(Ir,e.device.limits.maxStorageBufferBindingSize),this.fno=new hr(e,t,r,s),this.blendPipeline=e.pipeline(mr(this.fno.store)),this.finalizePipeline=e.pipeline(yr),this.inputPlan=er(t),this.city=null,this.generation=0,this.fieldWorkers=null,this.fieldJobs=new Map,this.fieldJobCount=0,this.valuesRing=new ut}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.mddf.destroy(),this.city=null,this.stopFieldWorkers(t=>t.cancel())}setCity(e,t=null){var u;const{layers:r,ny:s,nx:o}=e;this.cancel(),(u=this.city)==null||u.mddf.destroy();const i=new Qt(this.context,e,_r(this.patch),this.fno.store,this.inputPlan),a=t??Cr(this.layerStride),c=i.gx*i.gy*a.length*i.storedBytesPerCellLayer;if(c>Je){i.destroy(),this.city=null;const f=(c/2**20).toFixed(0),l=Je/2**20;throw new fe(ce.TOO_LARGE,`the city's stored field needs ${f} MiB, above the ${l} MiB budget`)}return this.city={mddf:i,ny:s,nx:o,layerMap:r,predictedLayers:a,ready:null,progress:0,groups:null},this.city.ready=this.scanCity(this.city),this.city.ready.catch(()=>{}),this.city}async scanCity(e){const{mddf:t}=e,r=t.planGroups(e.predictedLayers,this.bufferLimit);t.allocate(r),e.progress=0;for(let s=0;s<r.length;s++){if(t.destroyed)return e;await t.scan(r[s],o=>{e.progress=(s+o)/r.length})}return e.progress=1,t.destroyed||(e.groups=r),e}async predict(e,t,r,s){const o=++this.generation,i=()=>o!==this.generation,{context:a}=this,c=this.city,u=s.polygon??$r(e,t),{overlap:f}=s,l=Math.max(1,Math.round(this.patch*(1-f))),d=kr(u,r,c.nx,c.ny,this.patch,l),h=performance.now(),{mddf:g}=c;if(await c.ready,i()||g.destroyed||(g.upWind&&g.ensureUpTiles(c.groups,r,d.patches,this.patch,()=>{var x;return(x=s.onStage)==null?void 0:x.call(s,"geometry")})&&(await a.device.queue.onSubmittedWorkDone(),a.releaseScratch()),i()))return null;const p=Br(d,this.patch,c.predictedLayers.map(M=>M-W)),b=await this.runNetwork(c,d,p,r,s,i);if(!b)return null;const m=await this.finish(c,d,p,b,r,i);return m?{...m,milliseconds:performance.now()-h}:null}async runNetwork(e,t,r,s,o,i){var m;const{context:a,patch:c}=this,u=a.storage(r.count*C*4,"predictor.sums"),f=a.upload(r.table,"predictor.rows"),l=[],d=e.predictedLayers,h=new Map(d.map(M=>[M,t.patches.length])),g=Math.max(1,o.sweepEvery||1),p=new Set(d.filter((M,x)=>x%g===0||x===d.length-1)),b=()=>(a.free(u),a.free(f),null);for(const M of e.groups){if(i())return b();(m=o.onStage)==null||m.call(o,"network");const x=[];for(const y of M.layers)for(const[v,w]of t.patches)x.push([v,y,w]);for(let y=0;y<x.length;y+=this.batchSize){const v=x.slice(y,y+this.batchSize),w=new Int32Array(v.flat()),$=a.device.createCommandEncoder(),k=e.mddf.assemble($,w,M,s,c,this.fno.inputBuffer),S=this.fno.encode($,v.length);if(this.encodeBlend($,S,k,u,f,v.length,Tr(v,t,c),t),a.device.queue.submit([$.finish()]),l.push(a.device.queue.onSubmittedWorkDone()),l.length>Sr&&await l.shift(),a.free(k),a.releaseScratch(),o.onLayer)for(const[,T]of v)h.set(T,h.get(T)-1),h.get(T)===0&&p.has(T)&&this.readSweptLayer(u,T,r,t,o,i);if(i())return b()}}return await Promise.all(l),a.free(f),u}encodeBlend(e,t,r,s,o,i,a,c){const{context:u,patch:f}=this,{gy:l}=c,{ry0:d,ry1:h,rx0:g,rx1:p,rz0:b,rz1:m}=a;if(!(h>d&&p>g))return;const M=e.beginComputePass();u.dispatch(M,this.blendPipeline,[t,r,s,o,u.uniform([["u",i],["u",f],["u",this.metadata.model.output_channels],["u",f],["u",l],["u",W],["u",0],["u",0],["u",d],["u",b],["u",g],["u",h-d],["u",m-b],["u",p-g],["i",c.gridY0],["i",c.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(h-d)*(m-b)*(p-g)),M.end()}readSweptLayer(e,t,r,s,o,i){const a=ye(s.gy);this.readLayer(e,r.table[a.slots+t-W],r.table,s).then(c=>{i()||o.onLayer(t,c,s,this.metadata.target)}).catch(()=>{})}async readLayer(e,t,r,{gx:s,gy:o}){const i=ye(o),a=C*4,c=(u,f)=>{for(let l=0;l<o;l++){const d=r[i.rowLen+l];d&&u.copyBufferToBuffer(e,(r[l]+t*d)*a,f,(l*s+r[i.rowX0+l])*a,d*a)}};return this.context.readBack(o*s*a,c,"layer staging",u=>new Float32Array(u.slice(0)))}async finish(e,t,r,s,o,i){const{context:a}=this,{gx:c,gy:u}=t,f=ue,l=c*u*f,{predicted:d}=r,h=this.metadata.target,g=a.storage(Math.max(8,r.count*C*2),"predictor.packed"),p=a.device.createCommandEncoder(),b=p.beginComputePass();a.dispatch(b,this.finalizePipeline,[s,g,a.uniform([["u",r.count],["f",h.center[0]],["f",h.center[1]],["f",h.center[2]],["f",h.scale[0]],["f",h.scale[1]],["f",h.scale[2]],["f",0]])],r.count),b.end(),a.device.queue.submit([p.finish()]),await a.device.queue.onSubmittedWorkDone(),a.free(s);const m=Ft(),M=await a.readHalf(g,r.count*C,m);if(a.free(g),a.releaseScratch(),i())return null;let x;m?x=new Float32Array(this.valuesRing.next(l*C*4),0,l*C):x=new Float32Array(l*C);const y={half:M,values:x,gy:u,gz:f,gx:c,gridX0:t.gridX0,gridY0:t.gridY0,theta:o,nx:e.nx,ny:e.ny,layerMap:e.layerMap,predicted:d,firstLayer:W,interpolate:this.layerStride>1,compactTable:r.table},v=m?await this.postInWorkers(y,u):await Rr(y,u);if(i())return null;let w=0;for(const $ of v)$.maxSpeed2>w&&(w=$.maxSpeed2);return{maxSpeed2:w,layout:t,gx:c,gy:u,gz:f,firstLayer:W,layerStride:this.layerStride,values:x,valuesPerCell:C}}stopFieldWorkers(e){for(const t of this.fieldWorkers??[])t.terminate();this.fieldWorkers=null;for(const t of[...this.fieldJobs.values()])e(t)}failFieldWorkers(e){this.stopFieldWorkers(t=>t.answer({error:e}))}startFieldWorkers(){const e=Math.max(1,Math.min(Ar,Math.floor(Nt()/3)));return Array.from({length:e},(t,r)=>{const s=new Worker(new URL("/cityffdv2-demo/assets/field_worker-CNcnW6Nn.js",import.meta.url),{type:"module"});return s.onmessage=({data:o})=>{var i;return(i=this.fieldJobs.get(`${o.id}:${r}`))==null?void 0:i.answer(o)},s.onerror=o=>{o.preventDefault(),this.failFieldWorkers(`field worker failed: ${o.message||"it did not load"}`)},s})}postInWorkers(e,t){this.fieldWorkers??(this.fieldWorkers=this.startFieldWorkers());const r=++this.fieldJobCount,s=this.fieldWorkers,o=s.length,i={...e,half:e.half.buffer,halfLength:e.half.length,values:e.values.buffer,valuesLength:e.values.length};return Promise.all(s.map((a,c)=>new Promise((u,f)=>{const l=`${r}:${c}`,d=()=>{clearTimeout(h),this.fieldJobs.delete(l)},h=setTimeout(()=>{this.failFieldWorkers(`field worker did not answer in ${Ze/1e3} s`)},Ze);this.fieldJobs.set(l,{answer:g=>{d(),g.error?f(new Error(g.error)):u(g)},cancel:()=>{d(),u(null)}}),a.postMessage({id:r,p:i,yLo:Math.floor(c*t/o),yHi:Math.floor((c+1)*t/o)})})))}}function Br(n,e,t){const{gx:r,gy:s}=n,o=new Int32Array(s).fill(r),i=new Int32Array(s).fill(0);for(const[f,l]of n.patches){const d=Math.max(0,f-n.gridY0),h=Math.min(s,f-n.gridY0+e),g=Math.max(0,l-n.gridX0),p=Math.min(r,l-n.gridX0+e);for(let b=d;b<h;b++)g<o[b]&&(o[b]=g),p>i[b]&&(i[b]=p)}const a=ye(s),c=new Uint32Array(a.slots+ue).fill(4294967295,a.slots);let u=0;for(let f=0;f<s;f++){const l=Math.max(0,i[f]-o[f]);c[f]=u,c[a.rowX0+f]=l?o[f]:0,c[a.rowLen+f]=l,u+=l*t.length}return c[s]=u,t.forEach((f,l)=>{c[a.slots+f]=l}),{table:c,count:u,predicted:t}}async function Rr(n,e){const t=[];let r=performance.now();for(let s=0;s<e;s+=Qe)t.push(br(n,s,Math.min(e,s+Qe))),performance.now()-r>st&&(await ot(),r=performance.now());return t}const mt={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},$e=new Map;function Pr(n){if(!$e.has(n)){const e=mt[n],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);$e.set(n,t)}return $e.get(n)}function Er(n,e){let t="viridis";mt[n]&&(t=n);const r=Pr(t),s=Math.min(1,Math.max(0,e))*255,o=Math.floor(s),i=Math.min(255,o+1),a=s-o;return[r[o*3]*(1-a)+r[i*3]*a,r[o*3+1]*(1-a)+r[i*3+1]*a,r[o*3+2]*(1-a)+r[i*3+2]*a]}const Lr=new Set(["u","v","w"]),Tn=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis",notInV2:!0},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno",notInV2:!0},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],te={u:0,w:1,v:2,T:3,tke:4};function De(n,e,t,r){const s=n[e+te.u]*r,o=n[e+te.v]*r;switch(t){case"u":return s;case"v":return o;case"w":return n[e+te.w]*r;case"speed":{const i=n[e+te.w]*r;return Math.sqrt(s*s+o*o+i*i)}case"T":return n[e+te.T];case"tke":return n[e+te.tke]*r*r;default:return 0}}function Cn(n,e,t,r,s){if(e==="T")return n.fixed.T.slice();let o=n.quantiles[r];if(!o){const f=Object.keys(n.quantiles)[0];o=n.quantiles[f]}const i=o[e],a=Math.min(i.length-1,Math.max(0,Math.round(t)));let c=s;e==="tke"&&(c=s*s);const u=i[a]*c;return n.shape[e]==="symmetric"?[-u,u]:[0,u]}function Bn(n,e){var s;const t=n.solid.length,r=new Float32Array(t*4);for(let o=0;o<t;o++){const i=o*4,a=De(n.values,o*5,e,1);r[i]=a,(s=n.missing)!=null&&s[o]||!Number.isFinite(a)||n.solid[o]===1?r[i+1]=0:r[i+1]=1}return pt(r)}function Rn(n){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,s,o]=Er(n,t/255);e[t*4]=r,e[t*4+1]=s,e[t*4+2]=o,e[t*4+3]=255}return e}function Pn(n,e){const{width:t,height:r}=n,s=i=>{var a;return!n.solid[i]&&!((a=n.missing)!=null&&a[i])};let o=n.values;for(const[i,a]of[[1,0],[0,1]]){const c=new Float32Array(o);for(let u=0;u<r;u++)for(let f=0;f<t;f++){const l=u*t+f;if(!s(l))continue;const d=new Float64Array(5);let h=0;for(let g=-e;g<=e;g++){const p=f+g*i,b=u+g*a;if(p<0||b<0||p>=t||b>=r)continue;const m=b*t+p;if(!(!s(m)||!Number.isFinite(o[m*5]))){for(let M=0;M<5;M++)d[M]+=o[m*5+M];h++}}if(h)for(let g=0;g<5;g++)c[l*5+g]=d[g]/h}o=c}return{...n,values:o}}function En(n,e){var s;let t=1/0,r=-1/0;for(let o=0;o<n.solid.length;o++){if(n.solid[o]===1||(s=n.missing)!=null&&s[o])continue;const i=De(n.values,o*5,e,1);Number.isFinite(i)&&(i<t&&(t=i),i>r&&(r=i))}return[t,r]}function Ln([n,e],t){if(t==="T")return e>n?[n,e]:null;if(Lr.has(t)){const r=Math.max(-n,e);return r>0?[-r,r]:null}return e>0?[0,e]:null}function Ue(n,e,t){const r=(n.grid.nx-1)/2,s=(n.grid.ny-1)/2,o=n.originX+e-r,i=n.originY+t-s,a=Math.cos(n.theta),c=Math.sin(n.theta),u=(r+o*a-i*c+.5)*4,f=(s+o*c+i*a+.5)*4;return[u,f]}function Fn(n){const e=n.values.slice(),t=n.settings.speedMps/n.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const L=5,Fr=159,Nr=30,Or=1.2;function Dr(n){var s;const e=((s=n.statistics)==null?void 0:s.maximumHeightM)??0,t=Math.max(Nr,Or*e),r=Math.round(t/B-.5);return Math.max(0,Math.min(Fr,r))}function Ur(n,e){const t=[];for(let r=0;r<n;r+=e)t.push(r);return t.push(n),t}function Wr(n){const e=Math.round(Number(n)/B);return e>=1?e:Math.round(Ct.layerSpacingM/B)}const Nn=(n,e)=>Ur(Dr(n),Wr(e)),yt=5;function xt(n,e=yt){const t=n.length,r=Math.min(e,t),s=new Set;for(let i=0;i<r;i++){const a=Math.round(i*(t-1)/Math.max(1,r-1));s.add(a)}const o=[...s].sort((i,a)=>i-a);for(;o.length<t;){const i=[...o].sort((c,u)=>c-u);let a=0;for(let c=1;c+1<i.length;c++)i[c+1]-i[c]>i[a+1]-i[a]&&(a=c);o.push(Math.floor((i[a]+i[a+1])/2))}return o.map(i=>n[i])}function On(n){const e=new Set(xt(n).slice(0,yt));return n.filter(t=>e.has(t))}function Dn(n,e){const t=new Set(e),r=[];for(const s of xt(n))t.has(s)||(t.add(s),r.push(s));return r}function Un(n,e){let t=0,r=0,s=0;for(let o=0;o<e.length;o++){if(e[o])continue;t++;const i=n[o*5],a=n[o*5+1],c=n[o*5+2];!Number.isFinite(i)||!Number.isFinite(a)||!Number.isFinite(c)?r++:(i||a||c)&&s++}return r||(t&&!s?t:0)}function Wn(n,e,t=!0){const r=n.width*n.height;let s=[],o=[];return t&&(s=[...e],o=e.map((i,a)=>a)),{width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta,plan:[...e],layers:s,slots:o,values:new Float32Array(e.length*r*L),solid:new Uint8Array(e.length*r)}}function Xn(n,e,t){if(t.width!==n.width||t.height!==n.height||t.originX!==n.originX)throw new Error("Wind layers do not share one wind-frame grid.");const r=n.width*n.height;n.values.set(t.values,e*r*L),n.solid.set(t.solid,e*r),Xr(n,e)}function Xr(n,e){if(n.slots.includes(e))return;const t=n.plan[e];let r=0;for(;r<n.layers.length&&n.layers[r]<t;)r++;n.layers.splice(r,0,t),n.slots.splice(r,0,e)}function Yn(n,e){const t=n.width*n.height,r=n.slots[e];return{values:n.values.subarray(r*t*L,(r+1)*t*L),solid:n.solid.subarray(r*t,(r+1)*t)}}function de(n,e){const t=e/B-.5,{layers:r,slots:s,plan:o}=n;if(t<=r[0])return{k0:0,k1:0,f:0,ready:!o||s[0]===0};const i=r.length-1;if(t>=r[i])return{k0:i,k1:i,f:0,ready:!o||s[i]===o.length-1};let a=1;for(;r[a]<t;)a++;const c=a-1,u=(t-r[c])/(r[a]-r[c]),f=!o||u===0||u===1||s[a]-s[c]===1;return{k0:c,k1:a,f:u,ready:f}}const wt=n=>(n.layers.at(-1)+.5)*B,Mt=-1;function We(n,e,t,r,s,o,i=!1){const{k0:a,k1:c,f:u}=de(n,r),f=n.width*n.height,l=t*n.width+e,d=x=>n.slots[x]*f+l,h=d(a);let g=d(c),p=n.solid[h],b=n.solid[g],m=!1;if(n.grid){const[x,y]=Ue(n,e,t),v=$=>n.solid[d($)]||Re(n.grid,x,y,(n.layers[$]+.5)*B);let w;if(i?w=Yr(n.grid,x,y,r):w=Re(n.grid,x,y,r),w){let $=p||b;$||($=1),p=$,b=$}else if(!p&&v(a)&&(p=1),!b&&v(c)&&(b=1),i&&p&&b){const $=c+1;if($<n.layers.length&&n.slots[$]===n.slots[c]+1&&!v($))g=d($),b=0,m=!0;else return Mt}}let M;m||p&&!b?M=1:b&&!p?M=0:M=u;for(let x=0;x<L;x++){const y=n.values[h*L+x],v=n.values[g*L+x];s[o+x]=y*(1-M)+v*M}return m?0:M<.5?p:b}function Yr(n,e,t,r){var u;const s=Math.floor(e/_),o=Math.floor(t/_);if(s<0||o<0||s>=n.nx||o>=n.ny)return!0;const i=o*n.nx+s,a=(((u=n.groundLayers)==null?void 0:u[i])??0)*B,c=n.layers[i]*B;return c>a&&r<c}function Gr(n,e){const{ready:t}=de(n,e),r=n.width*n.height,s=new Float32Array(r*L),o=new Uint8Array(r);for(let a=0;a<n.height;a++)for(let c=0;c<n.width;c++){const u=a*n.width+c;o[u]=We(n,c,a,e,s,u*L)}let i=1;return t&&(i=0),{values:s,solid:o,missing:new Uint8Array(r).fill(i),width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta}}const Be=B/2;function re(n,e,t){const r=n.groundLayers;if(!r)return 0;const s=Math.max(0,Math.min(n.nx-1,e/_-.5)),o=Math.max(0,Math.min(n.ny-1,t/_-.5)),i=Math.floor(s),a=Math.floor(o),c=Math.min(n.nx-1,i+1),u=Math.min(n.ny-1,a+1),f=s-i,l=o-a,d=(p,b)=>r[b*n.nx+p],h=d(i,a)*(1-f)+d(c,a)*f,g=d(i,u)*(1-f)+d(c,u)*f;return B*(h*(1-l)+g*l)}function qr(n,e,t){const r=Math.floor(e/_),s=Math.floor(t/_);return!n.groundLayers||r<0||s<0||r>=n.nx||s>=n.ny?0:n.groundLayers[s*n.nx+r]*B}function jr(n,e){const{width:t,height:r}=n,s=t*r,o=new Float32Array(s*L),i=new Uint8Array(s),a=new Uint8Array(s),c=new Float32Array(s),u=new Float32Array(s);for(let f=0;f<r;f++)for(let l=0;l<t;l++){const d=f*t+l,[h,g]=Ue(n,l,f);c[d]=re(n.grid,h,g),u[d]=Math.max(0,c[d]+Be-e);const p=Math.max(e,qr(n.grid,h,g)+Be);de(n,p).ready?a[d]=0:a[d]=1;const b=We(n,l,f,p,o,d*L,!0);b===Mt?(a[d]=1,i[d]=0):i[d]=b}return{values:o,solid:i,missing:a,groundM:c,liftM:u,width:t,height:r,originX:n.originX,originY:n.originY,theta:n.theta}}function vt(n,e,t,r,s){const o=(e-1)/2,i=(t-1)/2,a=r/_-.5-o,c=s/_-.5-i,u=Math.cos(n.theta),f=Math.sin(n.theta),l=a*u+c*f+o-n.originX,d=-a*f+c*u+i-n.originY;return[l,d]}function zr(n,e,t,r,s,o,i){const[a,c]=vt(n,e,t,r,s),{width:u,height:f}=n;if(!(a>=0&&c>=0&&a<=u-1&&c<=f-1))return null;const l=Math.min(u-2,Math.floor(a)),d=Math.min(f-2,Math.floor(c));let h=0;u>1&&(h=a-l);let g=0;f>1&&(g=c-d);const{k0:p,k1:b,f:m}=de(n,o),M=u*f;for(let x=0;x<L;x++)i[x]=0;for(const[x,y]of[[p,1-m],[b,m]])if(y!==0)for(const[v,w]of[[0,1-g],[1,g]])for(const[$,k]of[[0,1-h],[1,h]]){const S=y*w*k;if(S===0)continue;const T=Math.min(f-1,d+v),D=Math.min(u-1,l+$),F=(n.slots[x]*M+T*u+D)*L;for(let P=0;P<L;P++)i[P]+=n.values[F+P]*S}return i}function Hr(n,e,t){const r=Math.cos(e),s=Math.sin(e);return t[0]=n[0]*r-n[2]*s,t[1]=n[0]*s+n[2]*r,t[2]=n[1],t}function Re(n,e,t,r){const s=Math.floor(e/_),o=Math.floor(t/_);return s<0||o<0||s>=n.nx||o>=n.ny?!0:r<n.layers[o*n.nx+s]*B}function Gn(n,e,t=!1){var a;const r=Number(e)||0,s=Math.max(B/2,Math.min(wt(n),r)),o=Math.max(0,Math.round(s/B-.5));let i;return t&&((a=n.grid)!=null&&a.groundLayers)?i=jr(n,s):i=Gr(n,s),{...i,grid:n.grid,settings:{...n.settings,heightM:s,layerIndex:o},referenceSpeed:n.referenceSpeed,colorbar:n.colorbar,modelLabel:n.modelLabel,patchCount:n.patchCount,milliseconds:n.milliseconds}}function qn(n,e){const t=(n.height-1)/2,r=Math.round(t+Number(e)/_);return Math.max(0,Math.min(n.height-1,r))}function jn(n){const{nx:e,ny:t}=n.grid,s=[[0,0],[e,0],[0,t],[e,t]].map(([c,u])=>vt(n,e,t,c*_,u*_)[1]),o=(n.height-1)/2,i=Math.max(0,Math.min(...s))-o,a=Math.min(n.height-1,Math.max(...s))-o;return[Math.ceil(i)*_,Math.floor(a)*_]}function zn(n,e){const{width:t}=n,r=n.layers.at(-1)+1,s=new Float32Array(t*r*L),o=new Uint8Array(t*r),i=new Uint8Array(t*r);for(let a=0;a<r;a++){const c=(a+.5)*B;de(n,c).ready||i.fill(1,a*t,(a+1)*t);for(let u=0;u<t;u++)o[a*t+u]=We(n,u,e,c,s,(a*t+u)*L)}return{values:s,solid:o,missing:i,width:t,height:r}}const ke=B/2;function Hn(n){const{grid:e,theta:t}=n,r=wt(n),s=new Float32Array(5),o=(u,f,l)=>zr(n,e.nx,e.ny,u,f,l,s)!==null,i=(u,f,l)=>Math.max(u,re(e,f,l)+Be),a=(u,f,l)=>{const d=(re(e,u+_,f)-re(e,u-_,f))/(2*_),h=(re(e,u,f+_)-re(e,u,f-_))/(2*_);return d*l[0]+h*l[1]},c={plane:null,variable:"speed",wind(u,f,l,d){if(!o(u,f,l))return!1;Hr(s,t,d);const h=c.plane;return h!=null&&h.flat&&h.kind==="h"&&(h.aboveGround&&i(h.z,u,f)>h.z?d[2]=a(u,f,d):d[2]=0),h!=null&&h.flat&&h.kind==="v"&&(d[0]=s[0]*Math.cos(t),d[1]=s[0]*Math.sin(t)),!0},inside:(u,f,l)=>l>=ke&&l<=r&&!Re(e,u,f,l)&&o(u,f,l),value:()=>De(s,0,c.variable,1),valueAt:(u,f,l)=>o(u,f,l)?c.value():0,spawn(u,f){var l,d;for(let h=0;h<20;h++){if(f[0]=u()*e.nx*_,f[1]=u()*e.ny*_,f[2]=ke+u()**2*(r-ke),((l=c.plane)==null?void 0:l.kind)==="h"&&(c.plane.aboveGround?f[2]=i(c.plane.z,f[0],f[1]):f[2]=c.plane.z),((d=c.plane)==null?void 0:d.kind)==="v"){const[g,p]=Ue(n,u()*(n.width-1),c.plane.row);f[0]=g,f[1]=p}if(c.inside(f[0],f[1],f[2]))return}}};return c}export{on as $,R as A,Tt as B,_ as C,En as D,Ln as E,Cn as F,ct as G,ln as H,Yn as I,Be as J,yn as K,B as L,tn as M,Fn as N,dn as O,An as P,en as Q,Pt as R,un as S,Nn as T,wn as U,Tn as V,cn as W,Ct as X,Wr as Y,nn as Z,xn as _,Le as a,Qr as a0,Zr as a1,an as a2,Rt as a3,Bt as a4,fn as a5,jn as a6,Er as a7,J as a8,vn as a9,Z as aa,$n as ab,_n as ac,In as ad,Mn as ae,Sn as af,pn as b,gn as c,mn as d,et as e,Qt as f,kn as g,On as h,Wn as i,Xr as j,Un as k,sn as l,hn as m,rn as n,Ue as o,Xn as p,Rn as q,Dn as r,bn as s,qn as t,wt as u,Hn as v,zn as w,Gn as x,Pn as y,Bn as z};
