import{k as fe,p as bt,s as ze,j as vt,v as Jt,x as An,l as q,m as et,a2 as In,a3 as Cn,o as L,c as U,a as A,b as E,u as v,w as Q,d as ie,t as R,i as W,h as ke,a4 as en,P as Tn,W as xt,R as tn,C as nn,O as rt,D as it,_ as Mt,M as Fn,e as Rn,F as Ce,r as rn,n as En,Q as Ln,X as Dn,Y as Vn,a5 as We,a0 as On,I as zn,V as Un}from"./index-Bnd8DqKH.js";import{r as Nn,l as Gn,m as on,s as jn,b as Hn,u as Xn,a as Wn,_ as _e,M as Ye}from"./mapbox-gl-geocoder-CHYh51iC.js";import{z as Yn}from"./archive-Dz16c6AW.js";import{d as qn}from"./download-B6B1Q6H-.js";import{m as ve,c as At,B as Kn,Q as st,a as Zn,s as Qn,M as sn,b as Jn,d as tt,L as Re,C as we,e as er,f as tr,A as nr,g as rr,r as an,F as ln,h as un,G as ir,P as or,p as cn,i as _t,j as He,l as It,v as sr,V as Xe,k as ar,n as lr,o as ur,q as dn,t as cr,u as Ct,w as dr,x as fr,y as Tt,z as gr,D as pr,E as fn,S as Ft,H as gn,I as Rt,J as at,K as pn,N as hr,O as mr,R as Et,T as yr,U as wr,W as br,X as vr,Y as xr,Z as Lt,_ as Dt,$ as Vt,a0 as Mr,a1 as _r,a2 as $r}from"./volumeSource-BSRLTQlf.js";import{M as lt}from"./mapbox-gl-draw-dbHZoqLq.js";import{D as hn,d as kr,a as Sr,S as Br}from"./drawShapes-DmjMEDHh.js";import{a as nt}from"./projection-CdzuvAui.js";import{M as Ot,P as qe,V as ge,S as Pr,C as Ar,a as Ir,m as Cr,i as Tr,n as Fr,o as ut,k as dt,W as Rr,D as zt,R as Ut,c as Er,L as Nt,H as Lr,B as Dr,d as Vr,l as Or}from"./MapActions-B24wW6m7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./orient2d-DArCjZZA.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";const pe="flume-detailed-buildings",he="flume-region-domain",Ke="flume-main-domain";function ft(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(pe)&&n.removeLayer(pe),n.getSource(pe)&&n.removeSource(pe);return}n.getSource(pe)?n.getSource(pe).setData(e):n.addSource(pe,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(pe)||n.addLayer({id:pe,type:"fill-extrusion",source:pe,minzoom:0,paint:{"fill-extrusion-color":ve().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function zr(n,e){if(!e){n.getLayer(Ke)&&n.removeLayer(Ke),n.getLayer(he)&&n.removeLayer(he),n.getSource(he)&&n.removeSource(he);return}const r={type:"FeatureCollection",features:e.mainDomain?[{...e.polygon,properties:{role:"outer"}},{...e.mainDomain.polygon,properties:{role:"main"}}]:[{...e.polygon,properties:{role:"main"}}]};n.getSource(he)?n.getSource(he).setData(r):(n.addSource(he,{type:"geojson",data:r}),n.addLayer({id:he,type:"line",source:he,filter:["==",["get","role"],"outer"],paint:{"line-color":ve().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),n.getLayer(Ke)||n.addLayer({id:Ke,type:"line",source:he,filter:["==",["get","role"],"main"],paint:{"line-color":ve().mainArea,"line-width":3}})}const Gt=["draw.create","draw.update","draw.delete"];function Ur({getMap:n,ready:e,onChange:t,accessToken:r}){const i=vt({source:"concordia",bufferPercent:Kn*100,shape:"polygon",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let l=null,o=!1,f=null,d=0,a=null;function g(C=!1){d++,f==null||f.abort(),C||(a=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function h(){const C=n();!C||!e.value||(ft(C,a==null?void 0:a.preview),zr(C,i.region??(a==null?void 0:a.area)??null))}function u(){return(a==null?void 0:a.preview)??null}function c(C){g(!i.region&&!i.snapshot),i.error="";try{i.region=ze(At(C))}catch(F){i.region=null,i.error=F.message}h()}function s(C){var G;if(o||!l)return;const F=(G=C.features)==null?void 0:G.at(-1);if(C.type==="draw.create"&&F)for(const j of l.getAll().features)j.id!==F.id&&l.delete(j.id);const z=l.getAll().features.find(j=>j.geometry.type==="Polygon");z?(c(z),l.deleteAll()):(g(),i.region=null,h()),i.drawing=!1}function p(C){i.drawing=Sr.has(C.mode)}function y(){const C=n();if(!C||!e.value)throw new Error("Wait for the map to load.");if(!l){const F={...lt.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};l=new lt({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...lt.modes,...Br,simple_select:F},styles:kr(ve().mainArea,ve().drawFillOpacity)}),C.addControl(l,"bottom-left");for(const z of Gt)C.on(z,s);C.on("draw.modechange",p)}return l}function w(){const C=n();if(!(!l||!C)){for(const F of Gt)C.off(F,s);C.off("draw.modechange",p),C.removeControl(l),l=null,i.drawing=!1}}function _(){var C;if(!i.loading)try{const F=y();n().stop(),g(!i.region&&!i.snapshot),i.region=null,F.deleteAll(),h(),F.changeMode(((C=hn.find(z=>z.value===i.shape))==null?void 0:C.mode)??"draw_polygon"),i.drawing=!0,i.error=""}catch(F){i.error=F.message}}function m(){l&&l.changeMode("simple_select"),i.drawing=!1}function x(){var C;(C=n())==null||C.stop(),l==null||l.deleteAll(),l==null||l.changeMode("simple_select"),i.drawing=!1,g(),i.region=null,i.error="",h()}async function M(C){const F=new AbortController,z=d;f=F,i.loading=!0,i.progress=0,i.error="";const G=()=>o||F.signal.aborted||z!==d;try{return await C({signal:F.signal,epoch:z,isStale:G})}catch(j){return F.abort(),!o&&z===d&&j.name!=="AbortError"&&(i.error=j.message),null}finally{f===F&&(f=null,o||(i.loading=!1))}}async function b(C,F,{signal:z,epoch:G,isStale:j}){if(z.throwIfAborted(),(a==null?void 0:a.source)===F){const[H,ne,re,J]=C.bounds,le=a.area.bounds;if(H>=le[0]&&ne>=le[1]&&re<=le[2]&&J<=le[3])return a.tiles}const oe=n(),S=F==="osm"?"composite":"city-concordia",O=Nn({map:oe,sourceId:S,source:F,bounds:C.bounds})??await Gn({sourceConfig:oe.getStyle().sources[S],source:F,bounds:C.bounds,accessToken:r,signal:z,paddingTiles:1,onProgress:H=>{G===d&&(i.progress=H)}});if(j())throw new DOMException("Cancelled","AbortError");const X=tt(O.features);return a={source:F,area:C,tiles:O,preview:X},i.loadedArea=ze({source:F,bounds:[...C.bounds],extentM:[...C.extentM],count:X.features.length,fromMap:!!O.fromMap}),h(),O}function k(C){var G;const F=n(),z=F.getCanvas().clientWidth;(G=F.resize)==null||G.call(F),F.fitBounds([C.bounds.slice(0,2),C.bounds.slice(2,4)],{padding:z>=640?{top:40,bottom:40,left:Math.min(320,z*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function I(){if(i.loading||o)return null;const C=n();if(!C||!e.value)return i.error="Wait for the map to load.",null;const F=i.source;return M(async z=>{const G=st/2,j=C.getCenter().wrap().toArray(),oe=nt(j)([-G,-G]),S=Zn(oe,nt(oe)([st,st]));return k(S),await b(S,F,z),z.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function B(){if(i.loading||o)return null;!i.region&&(a==null?void 0:a.source)===i.source&&c(a.area.polygon);const C=n(),F=i.region,z=i.source;return!C||!e.value||!F?(i.error="Draw and finish a valid polygon first.",null):M(async G=>{const j=At(F.selection??F.polygon);let oe=j,S,D;for(let H=0;H<4;H++){if(D=await b(oe,z,G),G.isStale())return null;S=Qn(D.features,j);const[ne,re,J,le]=S.bounds,ue=D.coverageBounds,Y=1e-8;if(ne>ue[0]+Y&&re>ue[1]+Y&&J<ue[2]-Y&&le<ue[3]-Y||!S.buildings.features.length)break;if(H===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");oe=S}const O=Math.min(Math.max(Number(i.bufferPercent)||0,0),sn*100)/100;S=Jn(S,O),S.source=z,S.dataZoom=D.zoom,S.tileCount=D.tileCount,S.surroundings=tt(S.surroundings.features),S.warnings=S.warnings.filter(H=>!H.startsWith("Loaded map tiles only"));const X=D.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return S.warnings.push(X+D.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(S.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=ze(S),i.region=ze({origin:S.origin,bounds:S.bounds,extentM:S.extentM,polygon:S.polygon,selection:S.selection,mainDomain:S.mainDomain,buffer:S.buffer}),h(),k(S),t==null||t(),S})}function $(){f==null||f.abort(),w()}function T(){h(),y()}function P(){o=!0,d++,f==null||f.abort(),w()}return fe(()=>i.source,()=>{g(),h(),i.error=""}),bt(P),{state:i,startSelection:_,stopSelection:m,clearSelection:x,setSelection:c,captureRegion:B,loadBuildings:I,getPreview:u,restore:T,beforeStyleChange:$}}const mn=14,jt=Math.round(er/Re),Nr=(n,e,t)=>-1e4+(n*65536+e*256+t)*.1;function Gr(n,e){const t=2**mn,r=e*Math.PI/180;return[(n+180)/360*t,(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*t]}async function jr(n,e,t,r){const i=`https://api.mapbox.com/v4/mapbox.mapbox-terrain-dem-v1/${mn}/${n}/${e}@2x.pngraw?access_token=${encodeURIComponent(t)}`,l=await fetch(i,{signal:r});if(!l.ok)throw new Error(`Terrain data request failed (HTTP ${l.status}).`);const o=await createImageBitmap(await l.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),d=new OffscreenCanvas(o.width,o.height).getContext("2d",{willReadFrequently:!0});d.drawImage(o,0,0);const{data:a}=d.getImageData(0,0,o.width,o.height),g=new Float32Array(o.width*o.height);for(let h=0;h<g.length;h++)g[h]=Nr(a[4*h],a[4*h+1],a[4*h+2]);return{heights:g,size:o.width}}async function Hr(n,e,t){const r=nt(n.origin),i=n.nx*n.ny,l=new Float64Array(i*2);let o=1/0,f=1/0,d=-1/0,a=-1/0;for(let y=0;y<n.ny;y++)for(let w=0;w<n.nx;w++){const[_,m]=Gr(...r([(w+.5)*we,(y+.5)*we])),x=y*n.nx+w;l[2*x]=_,l[2*x+1]=m,o=Math.min(o,_),f=Math.min(f,m),d=Math.max(d,_),a=Math.max(a,m)}const g=1/256,h=[];for(let y=Math.floor(f-g);y<=Math.floor(a+g);y++)for(let w=Math.floor(o-g);w<=Math.floor(d+g);w++)h.push([w,y]);const u=new Map;await Promise.all(h.map(async([y,w])=>u.set(`${y}/${w}`,await jr(y,w,e,t))));const c=u.values().next().value.size,s=(y,w)=>{const _=Math.floor(y/c),m=Math.floor(w/c);return u.get(`${_}/${m}`).heights[(w-m*c)*c+(y-_*c)]},p=new Float32Array(i);for(let y=0;y<i;y++){const w=l[2*y]*c-.5,_=l[2*y+1]*c-.5,m=Math.floor(w),x=Math.floor(_),M=w-m,b=_-x;p[y]=(s(m,x)*(1-M)+s(m+1,x)*M)*(1-b)+(s(m,x+1)*(1-M)+s(m+1,x+1)*M)*b}return p}function Xr(n,e){let t=1/0,r=-1/0;for(const f of e)t=Math.min(t,f),r=Math.max(r,f);const i=new Float32Array(n.layers.length),l=new Float32Array(n.layers.length);let o=0;for(let f=0;f<i.length;f++)l[f]=Math.min(jt,Math.round((e[f]-t)/Re)),i[f]=Math.min(jt,l[f]+n.layers[f]),o=Math.max(o,i[f]);return{...n,layers:i,groundLayers:l,statistics:{...n.statistics,maximumHeightM:o*Re},terrain:{lowM:t,highM:r}}}const Wr=16,Yr=4;function qr(){let n=null,e=null,t=[];async function r(d){if(n)return;const a="/cityffdv2-demo/flume/model-v2/",[g,h]=await Promise.all(["metadata.json","weights.bin"].map(async u=>{const c=await fetch(a+u,{signal:d});if(!c.ok)throw new Error("Could not load model v2 "+u+" (HTTP "+c.status+").");return u.endsWith(".bin")?c.arrayBuffer():c.json()}));n=await ir.create(),e=g,t=[0,1].map(()=>({predictor:new or(n,e,h,{batchSize:Wr,layerStride:1}),grid:null,key:""}))}async function i(d,a,g,h){const u=g.join(",");(a!==d.grid||u!==d.key)&&(d.predictor.setCity({layers:a.layers,nx:a.nx,ny:a.ny},g),d.grid=a,d.key=u);const{nx:c,ny:s}=a,p=[[-.5,-.5],[c-.5,-.5],[c-.5,s-.5],[-.5,s-.5]];return d.predictor.predict(null,null,h,{polygon:p,overlap:e.inference.overlap})}function l(d,a,g){const h=a.gx*a.gy,u=new Float32Array(h*5),c=new Uint8Array(h),s=g-a.firstLayer;for(let y=0;y<a.gy;y++)for(let w=0;w<a.gx;w++){const _=((y*a.gz+s)*a.gx+w)*Yr,m=y*a.gx+w;u[m*5]=a.values[_],u[m*5+1]=a.values[_+1],u[m*5+2]=a.values[_+2],c[m]=a.values[_+3]>0?0:2}const p={width:a.gx,height:a.gy,originX:a.layout.gridX0,values:u,solid:c};cn(d,d.plan.indexOf(g),p)}async function o(d,a,g,{signal:h,onFirstWave:u,onMoreLayers:c}={}){await r(h),rr(a[0],a.at(-1));const s=an(a).slice(0,ln),p=a.filter(x=>s.includes(x)),y=a.filter(x=>!s.includes(x)),w=await i(t[0],d,p,g);if(!w)return null;const _=un({width:w.gx,height:w.gy,originX:w.layout.gridX0,originY:w.layout.gridY0,theta:g},a,!1);for(const x of p)l(_,w,x);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(u==null||u({volume:_,referenceSpeed:m}),y.length){const x=await i(t[1],d,y,g);if(!x)return null;for(const M of y)l(_,x,M);c==null||c()}return _}async function f(d,a,g){await r(g);const{predictor:h}=t[0],u=h.inputPlan.stored,c=Math.ceil(h.patch*Math.SQRT2),s=new tr(n,d,c,h.fno.store,h.inputPlan),p=s.gx*s.gy*u.length*4;let y=null;s.packGroup=async()=>{y=await n.readBack(p,(m,x)=>m.copyBufferToBuffer(s.sumsBuffer,0,x,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(x=>x/nr))};try{const m=s.planGroups([a],h.bufferLimit);s.allocate(m),await s.scan(m[0],()=>{})}finally{s.destroy()}if(!y)throw new Error("Model v2 MDDF could not be read.");const w=u.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:y,ny:s.gy,nx:s.gx,margin:c,layerIndex:a,channels:w,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:o,readMddf:f,cancel(){for(const d of t)d.predictor.cancel()},destroy(){for(const d of t)d.predictor.destroy();n==null||n.device.destroy(),t=[],n=null}}}const Ee=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class Le extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const de=()=>new Le(Ee.MODEL,"the model data does not match this page"),V=256;class $t{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Le(Ee.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(l=>setTimeout(l,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new Le(Ee.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new $t(i,r)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const r=Math.max(4,Math.ceil(e/4)*4),i=this.device.createBuffer({size:r,usage:t});return i.tracked=!0,i}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),l=new Int32Array(r),o=new Float32Array(r);e.forEach(([d,a],g)=>{d==="u"?i[g]=a:d==="i"?l[g]=a:o[g]=a});const f=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(f,0,r),f}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,l=V){this.dispatchGroups(e,t,r,...this.workgroups(i,l))}workgroups(e,t=V){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((l,o)=>({binding:o,resource:{buffer:l}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r){const i=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),l=this.device.createCommandEncoder();t(l,i),this.device.queue.submit([l.finish()]);try{await i.mapAsync(GPUMapMode.READ);const o=await r(i.getMappedRange());return i.unmap(),o}finally{this.free(i)}}}const gt=4,Ue=1.5;function yn(n,e,t){const r=(e-1)/2,i=(t-1)/2,l=Math.cos(n),o=Math.sin(n);return{theta:n,cX:r,cY:i,cos:l,sin:o,toWind:([f,d])=>{const a=f-r,g=d-i;return[r+a*l+g*o,i-a*o+g*l]},toCity:([f,d])=>{const a=f-r,g=d-i;return[r+a*l-g*o,i+a*o+g*l]}}}const te=64,ee=180,wn=1600,Kr=640,me=8,N=32,be=n=>n.toFixed(6),ye=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Zr=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,Qr=()=>`
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
@compute @workgroup_size(${te})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${te}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${be(Ue)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${be(Ue)}, has1);
  let cutoff = ${be(wn)};
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
}`;function Jr(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${te})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${te}u;
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
}`}const $e=64,se=8,Te=$e/se,ae=Te*Te,pt=se*se,Ht=Math.log2($e),Xt=Math.log2(se),Ze=se-1,kt="15u",ht="4u",bn="0xfffu",mt="2048",ei="4095",St="16u",Wt=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(ye).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${be(ee)} / STEPS[c]));
}
@compute @workgroup_size(${te})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${te}u;
  if (g >= u.nTiles * ${ae}u) { return; }
  let t = g / ${ae}u;
  let b = g % ${ae}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${ae}u + b];
  let w = h & ${kt};
  if (w == 0u) { return; }
  let base = i32((h >> ${ht}) & ${bn}) - ${mt};
  var wi = field[t] + (h >> ${St});
  let x0 = tx * ${$e}u + (b % ${Te}u) * ${se}u;
  let y0 = ty * ${$e}u + (b / ${Te}u) * ${se}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${pt}u; j++) {
    let x = x0 + j % ${se}u; let y = y0 + j / ${se}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${$e}u + (b % ${Te}u) * ${se}u;
  let y0 = ty * ${$e}u + (b / ${Te}u) * ${se}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${pt}u; j++) {
    let x = x0 + j % ${se}u; let y = y0 + j / ${se}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ae}u + b] = w | (u32(clamp(mn + ${mt}, 0, ${ei})) << ${ht});`}
}`,ti=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${te})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${te}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${ae}u; b++) {
    let h = headers[t * ${ae}u + b];
    headers[t * ${ae}u + b] = h | (local << ${St});
    local += ${pt/32}u * (h & ${kt});
  }
  tileWords[t] = local;
}`,ni=n=>{const e=`array<f32, ${me}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Zr}
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
@compute @workgroup_size(${te})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${te}u;
  let groupsPerPixel = (u.layerCount + ${me-1}u) / ${me}u;
  let cells = ${N*N}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${N} + i32(cell % ${N}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${N} + i32(cell / ${N}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${me}u;
  let count = min(${me}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${me}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${be(Ue)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${be(gt)};
    let gyr = u.sinU / ${be(gt)};
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
    let cutoff = ${be(wn)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${me}>;
    for (var k = 0u; k < ${me}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${Kr}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${me}u; k++) {
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
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${n.length}u;
${n.map((r,i)=>`    put(e0 + ${i}u, ${t[r]});`).join(`
`)}
  }
}`},ri=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:l}=e,o=[["field","array<u32>"]];l&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),i&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const f=o.map(([g,h],u)=>`@group(0) @binding(${u}) var<storage, read> ${g}: ${h};`);f.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${n}>;`),f.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const d=(g,h)=>`(${g} - ${ye(h.center)}) / ${ye(h.scale)}`,a=e.inputs.map((g,h)=>{let u;if(g.source==="r1")if(g.part==="dc")u=`value = ${d(`sampleField(ry, rx, slot, ${e.storedIndex(g.signal,"dc",0)}u)`,g)};`;else{const c=e.storedIndex(g.signal,"re",g.mode),s=e.storedIndex(g.signal,"im",g.mode);u=`let re = sampleField(ry, rx, slot, ${c}u);
      let im = sampleField(ry, rx, slot, ${s}u);
      let angle = ${ye(g.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${d(g.part==="im"?"(re * s + im * c)":"(re * c - im * s)",g)};`}else if(g.source==="geo"){const c=g.index===0?"h / 100.0":"asinh((h - z) / 10.0)";u=`let h = roofHeight(iy, ix);
      value = ${d(`f16round(${c})`,g)};`}else g.source==="up"?u=`value = ${d(`upAtWind(sy, sx, slot, ${e.up.indexOf(g.index)}u)`,g)};`:g.source==="solid"?u=`let roofLayer = round(roofHeight(iy, ix) / ${be(Ue)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:g.axis==="y"?u=`value = (sy - u.centreY) / ${ye(g.scale)};`:g.axis==="z"?u=`value = (f32(layer) - ${ye(g.center)}) / ${ye(g.scale)};`:u=`value = (sx - ${ye(g.center)}) / ${ye(g.scale)};`;return`    case ${h}u: {
      ${u}
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
${f.join(`
`)}
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(ye).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${Ht}u)) * ${t.tx}u + (x >> ${Ht}u);
  let h = field[u.packTiles + t * ${ae}u + ((y >> ${Xt}u) & ${Ze}u) * ${Te}u + ((x >> ${Xt}u) & ${Ze}u)];
  let w = h & ${kt};
  var q = i32((h >> ${ht}) & ${bn}) - ${mt};
  if (w > 0u) {
    let bit = (((y & ${Ze}u) * ${se}u) + (x & ${Ze}u)) * w;
    let word = field[t] + (h >> ${St}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${i?`
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(N)}u) >= u.upTW || u32(ty >> ${Math.log2(N)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(N)}u) * u.upTW + u32(tx >> ${Math.log2(N)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${N*N}u + u32(ty & ${N-1}) * ${N}u + u32(tx & ${N-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${l?`fn roofHeight(iy: f32, ix: f32) -> f32 {
  let hy = clamp(i32(round(iy)), 0, i32(u.gy) - 1);
  let hx = clamp(i32(round(ix)), 0, i32(u.gx) - 1);
  return height[u32(hy) * u.gx + u32(hx)];
}`:""}
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
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  let area = u.py * u.px;
  if (g >= u.batch * u.channels * area) { return; }
  let p = g % area;
  let channel = (g / area) % u.channels;
  let b = g / (area * u.channels);
  let x = p % u.px;
  let y = p / u.px;
  let sy = f32(origins[b * 3u] + i32(y));
  let layer = u32(origins[b * 3u + 1u]);
  let sx = f32(origins[b * 3u + 2u] + i32(x));
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  let ix = u.centreX + dx * u.cosT - dy * u.sinT + f32(u.margin);
  let iy = u.centreY + dx * u.sinT + dy * u.cosT + f32(u.margin);
  let ry = iy - f32(u.regionY);
  let rx = ix - f32(u.regionX);
  let z = (f32(layer) + 0.5) * ${be(Ue)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${a.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},ii=4,oi=3,si=.016,ai=256;class vn{constructor(e,{layers:t,ny:r,nx:i},l,o,f){this.context=e,this.inputPlan=f,this.ny=r,this.nx=i,this.margin=l,this.gy=r+2*l,this.gx=i+2*l;const d=new Float32Array(this.gy*this.gx);for(let s=0;s<r;s++)for(let p=0;p<i;p++)d[(s+l)*this.gx+p+l]=t[s*i+p]*Ue;this.heightBuffer=e.upload(d);const a=new Float32Array(ee),g=new Float32Array(ee);for(let s=0;s<ee;s++)a[s]=Math.cos(2*Math.PI*s/ee),g[s]=Math.sin(2*Math.PI*s/ee);this.cosT=a,this.sinT=g,this.scanPipeline=e.pipeline(Qr()),this.accumulatePipeline=e.pipeline(Jr(f.stored)),this.upWind=f.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(ni(f.up)));const h=f.stored.map(s=>2*si*s.scale),u=Math.ceil(this.gx/$e),c=Math.ceil(this.gy/$e);this.packed={steps:h,tx:u,ty:c},this.packHeaderPipeline=e.pipeline(Wt(f.stored,h,u,c,!1)),this.packPayloadPipeline=e.pipeline(Wt(f.stored,h,u,c,!0)),this.packTilePipeline=e.pipeline(ti()),this.assemblePipeline=e.pipeline(ri(o,f,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let l=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(l=Math.min(l,ii),i>t)throw new Le(Ee.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let f=0;f<e.length;f+=l){const d=e.slice(f,f+l),a=new Int32Array(ai).fill(-1);d.forEach((g,h)=>{a[g]=h}),o.push({layers:d,slots:a,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots),r.layerBuffer=t.upload(new Uint32Array(r.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(ee*r),l=new ArrayBuffer(ee*32),o=new Uint32Array(l),f=new Int32Array(l),d=new Float32Array(l),a=new Float32Array(ee*4);let g=0;for(let h=0;h<ee;h++){const u=this.cosT[h],c=this.sinT[h],s=Math.abs(u)>=Math.abs(c),p=s?u:c,y=s?c:u,w=Math.abs(y/p),_=s?e:t,m=s?t:e;for(let b=0;b<_;b++)i[h*r+b]=Math.round(w*b);const x=i[h*r+_-1],M=m+x;g=Math.max(g,M),o[8*h]=s?1:0,f[8*h+1]=p>=0?1:-1,f[8*h+2]=y>=0?1:-1,f[8*h+3]=x,o[8*h+4]=M,o[8*h+5]=h*r,d[8*h+6]=gt*Math.sqrt(1+w*w),a.set([u,c,Math.cos(4*Math.PI*h/ee),Math.sin(4*Math.PI*h/ee)],4*h)}return this.offsetBuffer=this.context.upload(i),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(a),this.scanInfo={lineMax:g},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:r,gy:i}=this,{lineMax:l}=this.scanTables(),o=r*i,f=this.inputPlan.stored.length,d=e.layers.length,a=Math.ceil(d/2),g=Math.max(1,Math.min(ee,Math.floor(this.scanRawBytes/(a*o*4)))),h=g*a*o*4,u=d*o*f*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<u)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(u));const c=t.device.createCommandEncoder();c.clearBuffer(this.sumsBuffer,0,d*o*f*4),t.device.queue.submit([c.finish()]);const s=[];for(let p=0;p<ee;p+=g){if(this.destroyed)return;const y=Math.min(g,ee-p),w=t.device.createCommandEncoder(),_=w.beginComputePass(),m=t.uniform([["u",r],["u",i],["u",o],["u",0],["u",d],["u",a],["u",p],["u",y],["u",l],["u",0],["u",0],["u",0]]);t.dispatch(_,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],l*a*y,te);const x=t.uniform([["u",o],["u",d],["u",a],["u",p],["u",y],["u",0],["u",0],["u",0]]);t.dispatch(_,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,x],o*d,te),_.end(),t.device.queue.submit([w.finish()]),s.push(t.device.queue.onSubmittedWorkDone()),s.length>=oi&&await s.shift()}this.destroyed||(await this.packGroup(e,d,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:l,gy:o}=this,{tx:f,ty:d}=this.packed,a=t*this.inputPlan.stored.length*f*d,g=i.storage(a*ae*4),h=i.storage(a*4),u=i.uniform([["u",l],["u",o],["u",r],["u",t],["u",a],["u",0],["u",0],["u",0]]),c=i.uniform([["u",a],["u",0],["u",0],["u",0]]),s=()=>{i.free(g),i.free(h)},p=(b,k)=>{const I=b.beginComputePass();i.dispatch(I,this.packHeaderPipeline,[this.sumsBuffer,g,u],a*ae,te),i.dispatch(I,this.packTilePipeline,[g,h,c],a,te),I.end(),b.copyBufferToBuffer(h,0,k,0,a*4)};let y;try{y=await i.readBack(a*4,p,b=>this.destroyed?null:new Uint32Array(b.slice(0)))}catch(b){throw s(),b}if(!y){s();return}const w=new Uint32Array(a);let _=a+a*ae;for(let b=0;b<a;b++)w[b]=_,_+=y[b];i.free(e.field),e.field=i.storage(Math.max(4,_*4)),e.packTiles=a,i.write(e.field,w);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(g,0,e.field,a*4,a*ae*4);const x=m.beginComputePass(),M=i.uniform([["u",l],["u",o],["u",r],["u",t],["u",a],["u",0],["u",0],["u",0]]);i.dispatch(x,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],a*ae,te),x.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),s()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*ee,i=Math.round(r)%ee;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=yn(e,this.nx,this.ny);let i=1/0,l=-1/0,o=1/0,f=-1/0;for(const u of[-.5,this.nx-.5])for(const c of[-.5,this.ny-.5]){const[s,p]=r.toWind([u,c]);i=Math.min(i,s),l=Math.max(l,s),o=Math.min(o,p),f=Math.max(f,p)}const d=Math.floor((i-t)/N)*N,a=Math.floor((o-t)/N)*N,g=Math.ceil((l+t+1-d)/N),h=Math.ceil((f+t+1-a)/N);return{theta:e,x0:d,y0:a,tw:g,th:h,table:new Int32Array(g*h).fill(-1),count:0}}ensureUpTiles(e,t,r,i){const{context:l}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,i));const f=[];for(const[m,x]of r){const M=Math.floor((x-o.x0)/N),b=Math.floor((x+i-1-o.x0)/N),k=Math.floor((m-o.y0)/N),I=Math.floor((m+i-1-o.y0)/N);if(M<0||k<0||b>=o.tw||I>=o.th)throw new Error("internal layout error");for(let B=k;B<=I;B++)for(let $=M;$<=b;$++){const T=B*o.tw+$;o.table[T]<0&&(o.table[T]=o.count+f.length/3,f.push($,B,o.table[T]))}}const d=f.length/3;if(!d)return 0;const a=o.count,g=a+d,h=this.inputPlan.up.length,u=N*N,c=l.device.createCommandEncoder(),s=[];for(const m of e){const x=m.layers.length*u*h*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<g){const M=Math.min(o.tw*o.th,Math.max(g,Math.ceil(m.upCapacity*1.5))),b=l.storage(M*x);m.upTiles&&m.upCount&&c.copyBufferToBuffer(m.upTiles,0,b,0,m.upCount*x),m.upTiles&&s.push(m.upTiles),m.upTiles=b,m.upCapacity=M}m.upGrid=o,c.clearBuffer(m.upTiles,a*x,d*x),m.upCount=g}const p=l.upload(new Int32Array(f)),[y,w]=this.upwindDirection(t),_=c.beginComputePass();for(const m of e){const x=[this.heightBuffer,m.layerBuffer,m.upTiles,p];l.dispatch(_,this.alongPipeline,[...x,l.uniform([["u",this.gx],["u",this.gy],["u",d],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",y],["f",w],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],d*u*Math.ceil(m.layers.length/me),te)}_.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(l.free(this.upTableBuffer),this.upTableBuffer=l.storage(o.table.byteLength)),l.write(this.upTableBuffer,o.table),l.device.queue.submit([c.finish()]);for(const m of s)l.free(m);return l.free(p),o.count=g,d}assemble(e,t,r,i,l,o){var y,w,_,m;const{context:f,inputPlan:d,gx:a,gy:g}=this,h=t.length/3,u=f.upload(t),c=f.uniform([["u",h],["u",d.inputs.length],["u",l],["u",l],["u",a],["u",g],["u",0],["u",0],["u",a],["u",g],["u",a*g],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((y=this.upGrid)==null?void 0:y.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((_=this.upGrid)==null?void 0:_.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),s=[r.field];if(d.usesHeight&&s.push(this.heightBuffer),s.push(u,r.slotBuffer),d.up.length){if(r.upGrid!==this.upGrid)throw new Error("internal layout error");s.push(r.upTiles,this.upTableBuffer)}s.push(o,c);const p=e.beginComputePass();return f.dispatch(p,this.assemblePipeline,s,h*d.inputs.length*l*l),p.end(),u}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function li(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw de();const t=[],r=(d,a,g)=>t.findIndex(h=>h.key===`${d}:${a}:${g}`),i=(d,a,g)=>{r(d.signal,a,g)>=0||t.push({key:`${d.signal}:${a}:${g}`,signal:d.signal,part:a,mode:g,scale:d.scale})},l=[];for(const d of e){if(d.source==="r1")d.part==="dc"?i(d,"dc",0):(i(d,"re",d.mode),i(d,"im",d.mode));else if(d.source==="up")l.includes(d.index)||l.push(d.index);else if(!["geo","solid","coord"].includes(d.source))throw de();if(d.source==="geo"&&![0,1].includes(d.index)||d.source==="up"&&!(d.index>=0&&d.index<4))throw de()}for(const d of t)if(d.mode>2)throw de();const o=[...new Set(t.map(d=>d.signal))].sort();if(o.length!==1||o[0]!==0)throw de();const f=e.some(d=>d.source==="solid"||d.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:l,usesHeight:f}}function yt(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let Pe=null;function ui(){if(Pe)return Pe;Pe=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?Pe[n]=e*r*2**-24:t===31?Pe[n]=r?NaN:e*(1/0):Pe[n]=e*(1+r/1024)*2**(t-15)}return Pe}function ci(n){const e=new Float32Array(n.length),t=ui();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function di(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const l=r[0],o=l>>>16&32768,f=l>>>23&255;let d=l&8388607;if(f===255){e[i]=o|31744|(d?1:0);continue}const a=f-127+15;if(a>=31){e[i]=o|31744;continue}if(a<=0){if(a<-10){e[i]=o;continue}d|=8388608;const h=14-a;let u=d>>>h;d>>>h-1&1&&(u+=1),e[i]=o|u;continue}let g=a<<10|d>>>13;d&4096&&(g+=1),e[i]=o|g}return e}const Bt=`
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
`,fi=`
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
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.total) { return; }
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
}`;function Yt(n,e,t){const{enable:r,load:i,save:l}=Ne(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${V}>;
@compute @workgroup_size(${V})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${V}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${V/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${V}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${V/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${V}u) {
    Y[base + i] = ${l("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const wt=32,qt=1e-5,Je=16;function Ne(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function gi(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:l,save:o}=Ne(e);return`${i}${Bt}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${Je}u;
var<workgroup> w: array<f32, ${Je*n.cinMax}>;
@compute @workgroup_size(${V})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/V}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/V}u;
  let p = (wg % ${r/V}u) * ${V}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${V}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${l("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${Je}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${l("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${l("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${o("v")};
  }
}`}function pi(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:l,save:o}=Ne(e);return`${i}${Bt}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${l("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${l("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function hi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:l,load:o}=Ne(e);return`${l}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${i}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${o("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function mi(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
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
}`}function yi(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
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
}`}function wi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:l,save:o}=Ne(e);return`${l}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.batch * u.channels * ${i}u) { return; }
  let p = g % ${i}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${i}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${r}u;
  for (var k = 0u; k < ${r}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${o("acc * "+1/wt)};
}`}function bi(n){const{store:e}=n,{enable:t,load:r,save:i}=Ne(e);return`${t}${Bt}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function vi(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:gi(n),gate:pi(n),instanceNorm:Yt(e,r,qt),instanceNormScaled:Yt(e,r,qt/(wt*wt)),forwardColumns:hi(n),rowMix:mi(n),spectralMix:yi(n),inverseColumns:wi(n),residual:bi(n)}}function xi(n,e,t){const r=2*e,i=[];for(let c=0;c<e;c++)i.push(c);for(let c=n-e;c<n;c++)i.push(c);const l=new Float32Array(n*t),o=new Float32Array(n*t);for(let c=0;c<n;c++)for(let s=0;s<t;s++){const p=2*Math.PI*c*s/n;l[c*t+s]=Math.cos(p),o[c*t+s]=-Math.sin(p)}const f=new Float32Array(r*n),d=new Float32Array(r*n);for(let c=0;c<r;c++)for(let s=0;s<n;s++){const p=2*Math.PI*i[c]*s/n;f[c*n+s]=Math.cos(p),d[c*n+s]=-Math.sin(p)}const a=new Float32Array(n*r),g=new Float32Array(n*r);for(let c=0;c<n;c++)for(let s=0;s<r;s++){const p=2*Math.PI*i[s]*c/n;a[c*r+s]=Math.cos(p)/n,g[c*r+s]=Math.sin(p)/n}const h=new Float32Array(t*n),u=new Float32Array(t*n);for(let c=0;c<t;c++){const s=(c===0?1:2)/n;for(let p=0;p<n;p++){const y=2*Math.PI*c*p/n;h[c*n+p]=s*Math.cos(y),u[c*n+p]=-s*Math.sin(y)}}return{forwardCos:l,forwardSin:o,rowRe:f,rowIm:d,inverseRowRe:a,inverseRowIm:g,inverseColCos:h,inverseColSin:u}}function Mi(n,e,t){const r=n.tensors[t];if(!r)throw de();return ci(new Uint16Array(e,r.offset,r.count))}class _i{constructor(e,t,r,i){const l=t.model;if(this.context=e,this.metadata=t,this.width=l.width,this.depth=l.layers,this.inputChannels=l.input_channels,this.outputChannels=l.output_channels,this.patch=t.inference.patch[0],this.modes1=l.modes[0],this.modes2=l.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%V)throw de();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[a,g]of Object.entries(vi(o)))this.pipelines[a]=e.pipeline(g);this.contractPipeline=e.pipeline(fi);const f=a=>Mi(t,r,a);this.tables={};for(const[a,g]of Object.entries(xi(this.patch,this.modes1,this.modes2)))this.tables[a]=e.upload(g);this.weights={};const d=(a,g)=>{const h=f(g);this.weights[a]=this.store==="f16"?e.upload(di(h)):e.upload(h)};d("p1w","a.m1.weight"),d("p1b","a.m1.bias"),d("p2w","a.m2.weight"),d("p2b","a.m2.bias"),d("q1w","b.m1.weight"),d("q1b","b.m1.bias"),d("q2w","b.m2.weight"),d("q2b","b.m2.bias");for(let a=0;a<this.depth;a++)d(`m1w${a}`,`c.${a}.m1.weight`),d(`m1b${a}`,`c.${a}.m1.bias`),d(`m2w${a}`,`c.${a}.m2.weight`),d(`m2b${a}`,`c.${a}.m2.bias`),d(`lw${a}`,`d.${a}.weight`),d(`lb${a}`,`d.${a}.bias`);this.buildSpectralWeights(f),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.factored;let l=i.core_shape.slice(),o=t.upload(e(`${i.core}.re`)),f=t.upload(e(`${i.core}.im`));for(const a of i.factors){const[g,h]=a.shape;if(l[a.mode]!==h)throw de();const u=l.slice();u[a.mode]=g;const c=u.reduce((b,k)=>b*k,1),s=u.slice(a.mode+1).reduce((b,k)=>b*k,1),p=t.storage(c*4),y=t.storage(c*4),w=t.upload(e(`${a.name}.re`)),_=t.upload(e(`${a.name}.im`)),m=t.uniform([["u",u[0]],["u",u[1]],["u",u[2]],["u",u[3]],["u",u[4]],["u",a.mode],["u",g],["u",h],["u",s],["u",0],["u",c],["u",0]]),x=t.device.createCommandEncoder(),M=x.beginComputePass();t.dispatch(M,this.contractPipeline,[o,f,w,_,p,y,m],c),M.end(),t.device.queue.submit([x.finish()]),t.free(o),t.free(f),t.free(w),t.free(_),o=p,f=y,l=u}t.releaseScratch();const d=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(l.join()!==d.join())throw de();this.spectralRe=o,this.spectralIm=f}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,l=2*this.modes1,o=u=>t.storage(e*u*r*this.elementBytes),f=u=>t.storage(e*i*u*4),d=o(Math.max(4*i,this.inputChannels,this.outputChannels)),a=o(2*i),g=f(this.patch*this.modes2),h=f(this.patch*this.modes2);this.buffers={x:o(i),input:d,t2:d,gates:d,spectral:d,output:d,wide:a,t1:a,hidden:a,local:a,xRe:g,xIm:h,yRe:f(l*this.modes2),yIm:f(l*this.modes2),zRe:f(l*this.modes2),zIm:f(l*this.modes2),wRe:g,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/Je)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:l}=this,o=this.width,f=this.patch*this.patch,d=2*this.modes1,a=[],g=(u,c,s,p)=>{a.push(t.prepared(u,[...c,t.keptUniform(s)],t.workgroups(p)))},h=(u,c,s=i.instanceNorm)=>{a.push(t.prepared(s,[u,c],[e*o]))};g(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),g(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let u=0;u<this.depth;u++)h(r.x,r.t1),g(i.forwardColumns,[r.t1,l.forwardCos,l.forwardSin,r.xRe,r.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),g(i.rowMix,[r.xRe,r.xIm,l.rowRe,l.rowIm,r.yRe,r.yIm],[["u",e],["u",o],["u",d],["u",this.patch]],e*o*d*this.modes2),g(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",o],["u",2*u],["u",0]],e*o*d*this.modes2),g(i.rowMix,[r.zRe,r.zIm,l.inverseRowRe,l.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",o],["u",this.patch],["u",d]],e*o*this.patch*this.modes2),g(i.inverseColumns,[r.wRe,r.wIm,l.inverseColCos,l.inverseColSin,r.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*f),h(r.t2,r.t1,i.instanceNormScaled),g(i.conv1x1,[r.t1,this.weights[`m1w${u}`],this.weights[`m1b${u}`],r.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),g(i.gate,[r.gates,r.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*f),g(i.conv1x1,[r.hidden,this.weights[`m2w${u}`],this.weights[`m2b${u}`],r.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),g(i.conv1x1,[r.x,this.weights[`lw${u}`],this.weights[`lb${u}`],r.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),g(i.residual,[r.spectral,r.local,r.x],[["u",e*o*f],["u",u<this.depth-1?1:0],["u",0],["u",0]],e*o*f);return g(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),g(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),a}}const $i=(n,e)=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, firstLayer: u32, pad0: u32, pad1: u32,
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
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.rectH * u.rectD * u.rectW) { return; }
  let cx = u.rectX0 + g % u.rectW;
  let cz = u.rectZ0 + (g / u.rectW) % u.rectD;
  let cy = u.rectY0 + g / (u.rectW * u.rectD);
  let sy = i32(cy) + u.gridY0;
  let sx = i32(cx) + u.gridX0;
  let layer = i32(cz + u.firstLayer);
  let area = u.py * u.px;
  var s = array<f32, ${e}>();
  var total = 0.0;
  for (var b = 0u; b < u.batch; b++) {
    if (layer != origins[b * 3u + 1u]) { continue; }
    let py = sy - origins[b * 3u];
    let px = sx - origins[b * 3u + 2u];
    if (py < 0 || px < 0 || py >= i32(u.py) || px >= i32(u.px)) { continue; }
    let w = hann(py, u.py) * hann(px, u.px);
    let base = b * u.channels * area + u32(py) * u.px + u32(px);
    for (var c = 0u; c < ${e}u; c++) { s[c] += w * f32(patches[base + c * area]); }
    total += w;
  }
  if (total == 0.0) { return; }
  let len = table[2u * u.gy + 1u + cy];
  let cell = (table[cy] + cz * len + cx - table[u.gy + 1u + cy]) * ${e+1}u;
  for (var c = 0u; c < ${e}u; c++) { sums[cell + c] += s[c]; }
  sums[cell + ${e}u] += total;
}`;function Kt(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,l=[];for(let o=0;o<i;o++)l.push(n+o*t-yt(o*(i*t-e)/(i-1)));return l}function ki(n,e,t){let r=1/0,i=-1/0;const l=o=>{r=Math.min(r,o),i=Math.max(i,o)};for(let o=0;o<n.length;o++){const f=n[o],d=n[(o+1)%n.length];f[0]>=e&&f[0]<=t&&l(f[1]);for(const a of[e,t])(f[0]-a)*(d[0]-a)<0&&l(f[1]+(a-f[0])/(d[0]-f[0])*(d[1]-f[1]))}return r<=i?[r,i]:null}const Si=(n,e)=>Math.max(1,Math.round(n*(1-e)));function xn(n,e,t,r,i){const l=yn(n,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(l.toWind),f=Math.floor(Math.min(...o.map(u=>u[0]))),d=Math.floor(Math.min(...o.map(u=>u[1]))),a=Math.ceil(Math.max(...o.map(u=>u[0])))-f+1,g=Math.ceil(Math.max(...o.map(u=>u[1])))-d+1,h=[];for(const u of Kt(f,a,r,i)){const c=ki(o,u,u+r-1);if(!c)continue;const s=Math.floor(c[0]),p=Math.max(r,Math.ceil(c[1])-s+1);for(const y of Kt(s,p,r,i))h.push([y,u])}return{theta:n,gx:a,gy:g,gridX0:f,gridY0:d,patches:h,frame:l}}const Bi=8,Mn=new MessageChannel,_n=[];Mn.port1.onmessage=()=>{var n;return(n=_n.shift())==null?void 0:n()};const Pi=()=>new Promise(n=>{_n.push(n),Mn.port2.postMessage(0)}),Ai=n=>Math.ceil(n*Math.SQRT2),Ii=128<<20,Ci=2,Ge=1e-6,Ae=6e4,Ti=4,Fi=48<<20,Ri=16;function Ie(n,e,t){let r;const i=new Promise((l,o)=>{r=setTimeout(()=>o(new Le(Ee.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,i]).finally(()=>clearTimeout(r))}function Ei(n,e,t,r){let i=1/0,l=-1/0,o=1/0,f=-1/0,d=1/0,a=-1/0;for(const[g,h,u]of n)i=Math.min(i,g-e.gridY0),l=Math.max(l,g-e.gridY0+t),o=Math.min(o,u-e.gridX0),f=Math.max(f,u-e.gridX0+t),d=Math.min(d,h-r),a=Math.max(a,h-r+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,l),rx0:Math.max(0,o),rx1:Math.min(e.gx,f),rz0:d,rz1:a}}function Li(n,e,t){const{gx:r,gy:i}=n,l=new Int32Array(i).fill(r),o=new Int32Array(i).fill(0);for(const[a,g]of n.patches){const h=Math.max(0,a-n.gridY0),u=Math.min(i,a-n.gridY0+e),c=Math.max(0,g-n.gridX0),s=Math.min(r,g-n.gridX0+e);for(let p=h;p<u;p++)c<l[p]&&(l[p]=c),s>o[p]&&(o[p]=s)}const f=new Uint32Array(3*i+1);let d=0;for(let a=0;a<i;a++){const g=Math.max(0,o[a]-l[a]);f[a]=d,f[i+1+a]=g?l[a]:0,f[2*i+1+a]=g,d+=g*t}return f[i]=d,{table:f,count:d}}function Di(n,e){const t=new Float32Array(n);for(let r=0;r<n;r++)t[r]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*r/(n-1)));return t}function Vi(n,e,t){const{gx:r,gy:i,gridX0:l,gridY0:o,patches:f}=n,d=new Float32Array(r*i),a=Di(e,t);for(const[g,h]of f)for(let u=0;u<e;u++){const c=g-o+u;if(c<0||c>=i)continue;const s=c*r,p=a[u];for(let y=0;y<e;y++){const w=h-l+y;w>=0&&w<r&&(d[s+w]+=p*a[y])}}return d}function Oi(n,e,t,r){const{gx:i,gy:l,gridX0:o,gridY0:f,frame:{cX:d,cY:a,cos:g,sin:h}}=n,u=new Float32Array(i*l);for(let c=0;c<l;c++){const s=f+c-a;for(let p=0;p<i;p++){const y=o+p-d,w=d+y*g-s*h,_=a+y*h+s*g;if(w<-.5||_<-.5||w>r-.5||_>t-.5){u[c*i+p]=-1;continue}const m=Math.min(r-1,Math.max(0,yt(w))),x=Math.min(t-1,Math.max(0,yt(_)));u[c*i+p]=e[x*r+m]}}return u}class zi{constructor(e,t,r,{batchSize:i}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,this.channels=t.model.output_channels,this.bufferLimit=Math.min(Ii,e.device.limits.maxStorageBufferBindingSize),this.network=new _i(e,t,r,i),this.blendPipeline=e.pipeline($i(this.network.store,this.channels)),this.inputPlan=li(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,r){var l;this.cancel(),(l=this.city)==null||l.distanceField.destroy();const i=new vn(this.context,{layers:e,ny:t,nx:r},Ai(this.patch),this.network.store,this.inputPlan);i.scanRawBytes=Math.ceil(Fi*Math.min(1,this.batchSize/Ri)),this.city={distanceField:i,ny:t,nx:r,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:r,patch:i}=this,l=`${e}:${t}`;return((o=r.frame)==null?void 0:o.key)!==l&&(r.frame={key:l,layout:xn(e,r.nx,r.ny,i,t),final:null,roof:null}),r.frame}finalOf(e){return e.final??(e.final=Vi(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=Oi(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,r=e.join();if(t.storedKey===r)return!1;const{distanceField:i}=t;i.releaseGroups(),i.upGrid=null,t.storedKey=null;const[l]=i.planGroups(e,this.bufferLimit);return i.allocate([l]),await Ie(i.scan(l),4*Ae,"the computation"),i.destroyed?!1:(t.group=l,t.storedKey=r,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>Ie(e.popErrorScope().catch(()=>null),Ae,"the graphics device"),r=await t(),i=await t();if(r)throw new Le(Ee.GPU,`out of graphics memory: ${r.message}`);if(i)throw new Le(Ee.GPU,`the graphics device refused the work: ${i.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,r){const i=++this.generation,l=()=>i!==this.generation,{context:o,city:f,patch:d}=this,{device:a}=o;this.openScopes();let g=null;const h=()=>this.closeScopes();try{const u=this.frameOf(t,Si(d,r.overlap)),{layout:c}=u;if(await this.ensureLayers(e),l()||f.distanceField.destroyed)return null;const{distanceField:s,group:p}=f;if(s.upWind&&s.ensureUpTiles([p],t,c.patches,d)&&(await Ie(a.queue.onSubmittedWorkDone(),Ae,"the computation"),o.releaseScratch()),l())return null;const y=Li(c,d,e.length),w=o.storage(y.count*(this.channels+1)*4);try{if(!await this.runNetwork(p,e,u,y,w,t,r,l))return null;g=await this.readField(e,c,y,w)}finally{o.free(w),o.releaseScratch()}}finally{await h()}return l()?null:g}async runNetwork(e,t,r,i,l,o,f,d){var x;const{context:a,patch:g}=this,{layout:h}=r,{device:u}=a,{distanceField:c}=this.city,s=a.upload(i.table),p=[],y=t[0],w=!!(f.shouldDraw&&f.onDraw)&&t.length===1;let _=null,m=null;w&&(_={final:this.finalOf(r),roof:this.roofOf(r)},(x=f.onStart)==null||x.call(f,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const M=t.length*h.patches.length;for(let b=0;b<M;){if(d())return!1;const k=Math.floor(b/h.patches.length),I=b%h.patches.length,B=h.patches.slice(I,I+this.batchSize).map(([z,G])=>[z,t[k],G]);b+=B.length;const $=new Int32Array(B.flat()),T=u.createCommandEncoder(),P=c.assemble(T,$,e,o,g,this.network.inputBuffer),C=this.network.encode(T,B.length),F=Ei(B,h,g,y);if(this.encodeBlend(T,C,P,l,s,B.length,F,h,y),u.queue.submit([T.finish()]),a.free(P),a.releaseScratch(),p.push(u.queue.onSubmittedWorkDone()),p.length>Ci&&await Ie(p.shift(),Ae,"the computation"),w){m=Ui(m,F);const z=b>=M;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(z||f.shouldDraw())){const G=m;m=null;const j=await this.readRect(G,h,i,l,_,t[0]);if(d())return!1;f.onDraw({...j,stride:this.channels+2,channels:this.channels,theta:o,readyCount:b,patchCount:M})}}}return await Ie(Promise.all(p),Ae,"the computation"),!0}finally{a.free(s)}}encodeBlend(e,t,r,i,l,o,f,d,a){const{context:g,patch:h}=this,{gy:u}=d,{ry0:c,ry1:s,rx0:p,rx1:y,rz0:w,rz1:_}=f;if(!(s>c&&y>p))return;const m=e.beginComputePass();g.dispatch(m,this.blendPipeline,[t,r,i,l,g.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",u],["u",a],["u",0],["u",0],["u",c],["u",w],["u",p],["u",s-c],["u",_-w],["u",y-p],["i",d.gridY0],["i",d.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(s-c)*(_-w)*(y-p)),m.end()}async readRect({ry0:e,ry1:t,rx0:r,rx1:i},l,{table:o},f,{final:d,roof:a},g){const{gx:h,gy:u}=l,c=this.channels,s=(c+1)*4,p=i-r,y=t-e,w=(b,k)=>{for(let I=e;I<t;I++){const B=o[u+1+I],$=o[2*u+1+I],T=Math.max(r,B),P=Math.min(i,B+$);P>T&&b.copyBufferToBuffer(f,(o[I]+T-B)*s,k,((I-e)*p+T-r)*s,(P-T)*s)}},_=await Ie(this.context.readBack(p*y*s,w,b=>new Float32Array(b.slice(0))),Ae,"reading the wind back"),{center:m,scale:x}=this.metadata.target,M=new Float32Array(p*y*(c+2));for(let b=0;b<p*y;b++){const k=_[b*(c+1)+c],I=b*(c+2),B=k>Ge?1/k:0;for(let P=0;P<c;P++)M[I+P]=_[b*(c+1)+P]*B*x[P]+m[P];const $=(e+Math.floor(b/p))*h+r+b%p,T=a[$];M[I+c]=T<0||k<=Ge?2:T>g?1:0,M[I+c+1]=d[$]>Ge?Math.min(1,k/d[$]):0}return{x0:r,y0:e,width:p,height:y,values:M}}async readField(e,t,{table:r,count:i},l){const{gx:o,gy:f}=t,d=this.channels,a=d+1,{center:g,scale:h}=this.metadata.target,u=(y,w)=>y.copyBufferToBuffer(l,0,w,0,w.size),c=await Ie(this.context.readBack(i*a*4,u,y=>new Float32Array(y.slice(0))),4*Ae,"reading the wind back"),s=e.map(y=>({layer:y,values:new Float32Array(o*f*d),weights:new Float32Array(o*f)}));let p=performance.now();for(let y=0;y<f;y++){performance.now()-p>Bi&&(await Pi(),p=performance.now());const w=r[y],_=r[f+1+y],m=r[2*f+1+y];for(let x=0;x<e.length;x++){const{values:M,weights:b}=s[x];for(let k=0;k<m;k++){const I=(w+x*m+k)*a,B=y*o+_+k,$=c[I+d];if($>Ge){b[B]=$;const T=1/$;for(let P=0;P<d;P++)M[B*d+P]=c[I+P]*T*h[P]+g[P]}else for(let T=0;T<d;T++)M[B*d+T]=g[T]}}}return{layout:t,gx:o,gy:f,layers:s}}async predict(e,t={}){const{city:r}=this,i=r.layerIndex,l=await this.predictLayers([i],e,t);if(!l)return null;const{gx:o,gy:f,layers:[{values:d,weights:a}]}=l,g=this.channels,h=this.roofOf(r.frame),u=new Uint8Array(o*f);let c=0;for(let s=0;s<o*f;s++){if(h[s]<0){u[s]=2;continue}if(a[s]<=Ge){u[s]=2;continue}u[s]=h[s]>i?1:0;for(let p=0;p<g;p++)if(!Number.isFinite(d[s*g+p])){c+=1;break}}return{values:d,solid:u,theta:e,height:f,width:o,nonFinite:c}}}function Ui(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const Ni=16,Gi=.4,ji=6.278,Hi=1e-6;function Xi(){let n=null,e=null,t=null,r=null,i=null,l=0;async function o({allowF16:u=!0}={},c){if(!t){const s="/cityffdv2-demo/flume/model-v3/";[t,r]=await Promise.all(["metadata.json","weights.bin"].map(async p=>{const y=await fetch(s+p,{signal:c});if(!y.ok)throw new Error("Could not load model v3 "+p+" (HTTP "+y.status+").");return p.endsWith(".bin")?y.arrayBuffer():y.json()}))}n&&(u||!n.useF16)||(f(),n=await $t.create({allowF16:u}),e=new zi(n,t,r,{batchSize:Ni}))}function f(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,i=null}function d(u,c,s){const p=c.gx*c.gy,y=e.roofOf(e.city.frame),w=new Uint8Array(p);let _=0;for(let x=0;x<p;x++)y[x]<0||s.weights[x]<=Hi?w[x]=2:w[x]=y[x]>s.layer?1:0,!w[x]&&!Number.isFinite(s.values[x*5])&&_++;const m={width:c.gx,height:c.gy,originX:c.layout.gridX0,values:s.values,solid:w};return cn(u,u.plan.indexOf(s.layer),m),_}async function a(u,c,s,p,y){const{gx:w,gy:_}=xn(p,c.nx,c.ny,e.patch,e.patch),m=Math.max(1,Math.floor(e.bufferLimit/(w*_*(e.channels+1)*4))),x=Math.min(Ti,m);for(let M=0;M<s.length;M+=x){if(u.generation!==l||y!=null&&y.aborted)return!1;const b=await e.predictLayers(s.slice(M,M+x),p,{overlap:Gi});if(!b||u.generation!==l)return!1;u.volume??(u.volume=un({width:b.gx,height:b.gy,originX:b.layout.gridX0,originY:b.layout.gridY0,theta:p},u.layers,!1));for(const k of b.layers)u.nonFinite+=d(u.volume,b,k)}return!0}async function g(u,c,s,{signal:p,onFirstWave:y,onMoreLayers:w}={},_=!0){await o({allowF16:_},p),u!==i&&(e.setCity(u.layers,u.ny,u.nx),i=u);const m=an(c).slice(0,ln),x={layers:c,volume:null,nonFinite:0,generation:++l};if(!await a(x,u,c.filter(b=>m.includes(b)),s,p))return null;if(x.nonFinite&&n.useF16&&_)return g(u,c,s,{signal:p,onFirstWave:y,onMoreLayers:w},!1);if(x.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");y==null||y({volume:x.volume,referenceSpeed:ji});const M=c.filter(b=>!m.includes(b));if(M.length){if(!await a(x,u,M,s,p))return null;if(x.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");w==null||w()}return e.releaseLayers(),x.volume}async function h(u,c,s){await o({},s);const p=e.inputPlan.stored,y=Math.ceil(e.patch*Math.SQRT2),w=new vn(n,{layers:u.layers,ny:u.ny,nx:u.nx},y,e.network.store,e.inputPlan),_=w.gx*w.gy*p.length*4;let m=null;w.packGroup=async()=>{m=await n.readBack(_,(b,k)=>b.copyBufferToBuffer(w.sumsBuffer,0,k,0,_),b=>new Float32Array(b.slice(0)).map(k=>k/ee))};try{const b=w.planGroups([c],e.bufferLimit);w.allocate(b),await w.scan(b[0])}finally{w.destroy()}if(!m)throw new Error("Model v3 MDDF could not be read.");const x=p.map(b=>"upper_distance_"+b.part+(b.part==="dc"?"":b.mode));return{values:m,ny:w.gy,nx:w.gx,margin:y,layerIndex:c,channels:x,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:g,readMddf:h,cancel(){l++,e==null||e.cancel()},destroy:f}}const Zt={v2:qr,v3:Xi};function Wi(){const n=vt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=!1,r=0;const i={},l=new AbortController;function o(){try{for(const s of Object.values(i))s.destroy()}finally{for(const s of Object.keys(i))delete i[s]}}async function f(){if(e)return;const s=await fetch("/cityffdv2-demo/flume/colorbar.json",{signal:l.signal});if(!s.ok)throw new Error("Could not load colorbar.json (HTTP "+s.status+").");e=await s.json()}async function d(s,p){if(t||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const y=++r,w=()=>t||y!==r;try{if(!Zt[p.model])throw new Error("Unknown model: "+p.model+".");return n.stage="Loading model",await f(),w()?null:await a(s,p,w,y)}catch(_){return!t&&y===r&&(n.error=_.message,n.stage="Prediction failed",n.prediction=null),o(),null}finally{t?o():n.busy=!1}}async function a(s,p,y,w){var k;const _=_t[p.model],m=i[k=p.model]??(i[k]=Zt[p.model]());n.stage=_+" · predicting the first layers";const x=performance.now();let M=null;if(!await m.run(s,p.layers,p.thetaRad,{signal:l.signal,onFirstWave({volume:I,referenceSpeed:B}){y()||(M={...I,grid:s,settings:{...p},referenceSpeed:B,modelLabel:_,colorbar:e,patchCount:0,milliseconds:performance.now()-x,inputRevision:w},n.prediction=ze(M),n.layersReady=I.layers.length,n.progress=.3,n.stage=_+" · predicting the remaining layers")},onMoreLayers(){y()||!M||(M.milliseconds=performance.now()-x,n.layersReady=M.layers.length)}})||y())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",M}async function g(s){const p=n.prediction&&i[n.prediction.settings.model];if(!p||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{return await p.readMddf(n.prediction.grid,s,l.signal)}finally{n.downloading=!1,t&&o()}}function h(){n.busy&&r++;for(const s of Object.values(i))s.cancel()}function u(){r++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function c(){t=!0,r++,l.abort(),!n.busy&&!n.downloading&&o()}return bt(c),{state:n,run:d,readMddf:g,cancel:h,invalidate:u,dispose:c}}const xe="flume-retained-buildings",Qt="flume-retained-selected";function Yi(n,e){let t=null,r=null,i=null,l=null,o=null;function f(){if(t){n.getSource(xe)?i!==l&&n.getSource(xe).setData(i):n.addSource(xe,{type:"geojson",data:i,maxzoom:22,tolerance:0}),l=i;for(const[u,c]of[[xe,!1],[Qt,!0]]){const s=t.filters[c?"selected":"surroundings"],p=c?1:t.surroundingsOpacity;n.getLayer(u)?n.setFilter(u,s):n.addLayer({id:u,type:"fill-extrusion",source:xe,maxzoom:He,filter:s,layout:{visibility:"visible"},paint:{"fill-extrusion-color":c?ve().selectedBuildings:ve().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),n.setPaintProperty(u,"fill-extrusion-opacity",p),n.setLayoutProperty(u,"visibility",c||t.showSurroundings?"visible":"none")}}}function d(){if(!(!t||n.getZoom()<He||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const u=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(c=>!c.tile||c.tile.z>=(t.dataZoom??He));i=tt([...i.features,...u]),f()}catch(u){e==null||e(u)}}function a(u){!t||u!=null&&u.sourceId&&u.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(d,120))}function g(u){var c;(r!==u.collection||(t==null?void 0:t.sourceId)!==u.sourceId||(t==null?void 0:t.sourceLayer)!==u.sourceLayer)&&(i=tt(((c=u.collection)==null?void 0:c.features)??[]),r=u.collection),t=u,f(),a()}function h(){clearTimeout(o),t=null,r=null,i=null,l=null;for(const u of[Qt,xe])n.getLayer(u)&&n.removeLayer(u);n.getSource(xe)&&n.removeSource(xe)}return n.on("sourcedata",a),n.on("moveend",a),{update:g,clear:h,dispose(){n.off("sourcedata",a),n.off("moveend",a),h()}}}const Me=4,qi=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,Ki=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function Zi(n,e,t){var oe;let r,i,l,o,f,d,a=null,g,h,u,c,s,p="",y=0;const w=new Ot,_=new Ot,m=on.MercatorCoordinate.fromLngLat(n.grid.origin,((oe=n.grid.terrain)==null?void 0:oe.lowM)??0),x=m.meterInMercatorCoordinateUnits(),[M,b]=It(n,n.width/2-.5,n.height/2-.5),k=[new qe(new ge(1,0,0),0),new qe(new ge(-1,0,0),n.grid.nx*we),new qe(new ge(0,1,0),0),new qe(new ge(0,-1,0),n.grid.ny*we)],I=()=>Number(e.speedMps)/n.referenceSpeed,B=new Map;function $(S){let D=1/0,O=-1/0;for(let X=0;X<n.layers.length;X++){const H=S+"@"+n.slots[X];B.has(H)||B.set(H,Ct(pr(n,X),S));const[ne,re]=B.get(H);D=Math.min(D,ne),O=Math.max(O,re)}return[D,O]}let T=[0,0],P=null,C=null;function F(S,D){var Y;const O=nt(n.grid.origin),X=((Y=n.grid.terrain)==null?void 0:Y.lowM)??0,H=Math.cos(n.theta),ne=Math.sin(n.theta),re=a.attributes.position,J=Math.ceil((S-1)/Me)+1,le=Math.ceil((D-1)/Me)+1,ue=new Float32Array(J*le);for(let K=0;K<le;K++)for(let ce=0;ce<J;ce++){const Z=Math.min(D-1,K*Me)*S+Math.min(S-1,ce*Me),Se=re.getX(Z),Be=re.getY(Z),De=O([M+Se*H-Be*ne,b+Se*ne+Be*H]),Ve=r.queryTerrainElevation(De,{exaggerated:!1});ue[K*J+ce]=Ve==null?NaN:Ve-X}return{values:ue,columns:J,rows:le}}function z(S){const{width:D,height:O,liftM:X}=S;if(D<2||O<2)return d;a??(a=new ut(D*we,O*we,D-1,O-1)),P=S,C=F(D,O);const{values:H,columns:ne,rows:re}=C,J=(Y,K)=>H[K*ne+Y],le=S.settings.heightM,ue=a.attributes.position;for(let Y=0;Y<O;Y++)for(let K=0;K<D;K++){const ce=Math.min(Math.max(0,ne-2),Math.floor(K/Me)),Z=Math.min(Math.max(0,re-2),Math.floor(Y/Me)),Se=Math.min(ne-1,ce+1),Be=Math.min(re-1,Z+1),De=Math.min(1,K/Me-ce),Ve=Math.min(1,Y/Me-Z),Pt=(J(ce,Z)*(1-De)+J(Se,Z)*De)*(1-Ve)+(J(ce,Be)*(1-De)+J(Se,Be)*De)*Ve,Pn=Number.isFinite(Pt)?Math.max(0,Pt+gr-le):X[(O-1-Y)*D+K];ue.setZ(Y*D+K,Pn)}return ue.needsUpdate=!0,a}function G(){if(!r||!P||(f==null?void 0:f.geometry)!==a)return;const S=C.values;F(P.width,P.height).values.every((O,X)=>Number.isNaN(O)&&Number.isNaN(S[X])||Math.abs(O-S[X])<.05)||(z(P),r.triggerRepaint())}function j(){if(!i)return;const S=Xe.find(Z=>Z.id===e.variable)??Xe[0];c==null||c.dispose(),c=new zt(ar(S.ramp),256,1,Ut),c.colorSpace=Er,c.minFilter=c.magFilter=Nt,c.needsUpdate=!0;const D=e.plane==="3d"?"h":e.plane,O=lr(n,e.planeOffsetM),X=!!(e.sliceAboveGround&&n.grid.groundLayers),H=e.view==="slice"||e.view==="particles"&&e.particles==="white";f.visible=H&&D==="h",g.visible=H&&D==="v";const ne=S.id+"@"+(D==="v"?"v"+O:e.sliceHeightM+(X?" above ground":""));if(ne!==p){let Z;if(D==="v"){Z=ur(n,O);const[Se,Be]=It(n,(n.width-1)/2,O);g.position.set(Se,Be,Z.height*Re/2)}else Z=dn(n,Number(e.sliceHeightM),X),f.position.z=Z.settings.heightM,f.geometry=X?z(Z):d;u==null||u.dispose(),u=new zt(cr(Z,S.id),Z.width,Z.height,Ut,Lr),u.minFilter=u.magFilter=Nt,u.needsUpdate=!0,T=Ct(Z,S.id),p=ne}const re=I();let J=re;S.id==="T"&&(J=1),S.id==="tke"&&(J=re*re);const ue=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?$(S.id):T,Y=dr(ue,S.id)??fr(n.colorbar,S.id,n.settings.layers.at(-1),"99.9",1);s.uniforms.field.value=u??null,s.uniforms.palette.value=c,s.uniforms.range.value.set(...Y),h.enabled=e.view!=="off",h.mesh.visible=h.enabled;const K=e.view==="slice"||e.particles==="white",ce=K?D:e.plane;ce==="h"?h.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:K,aboveGround:X}):ce==="v"?h.setPlane({kind:"v",row:O,flat:K}):h.setPlane(null),h.setCount(Tt[e.density]??Tt.medium),h.setColouring(K?"white":e.particles,S.id,c,Y),t==null||t({low:Y[0]*J,high:Y[1]*J,...S}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:j,refresh(){p="",j()},onAdd(S,D){r=S,l=new Pr,o=new Ar,i=new Ir({canvas:r.getCanvas(),context:D,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,s=new Cr({vertexShader:qi,fragmentShader:Ki,uniforms:{field:{value:null},palette:{value:null},range:{value:new Fr(0,1)}},transparent:!0,depthWrite:!1,side:Tr,clipping:!0,clippingPlanes:k}),d=new ut(n.width*we,n.height*we),f=new dt(d,s),f.position.set(M,b,0),f.rotation.z=n.theta,f.frustumCulled=!1,l.add(f);const O=new ut(n.width*we,(n.layers.at(-1)+1)*Re);O.rotateX(Math.PI/2),g=new dt(O,s),g.rotation.z=n.theta,g.frustumCulled=!1,l.add(g),h=new Rr(sr(n)),l.add(h.mesh),r.on("idle",G),j()},render(S,D){const O=performance.now(),X=Math.min(y?(O-y)/1e3:0,.05);y=O,w.makeTranslation(m.x,m.y,m.z).scale(new ge(x,-x,x)),o.projectionMatrix.copy(_.fromArray(D)).multiply(w),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),h.setViewport(S.drawingBufferWidth,S.drawingBufferHeight);const H=h.enabled&&!e.paused;H&&h.step(X,I()),i.resetState(),i.setViewport(0,0,S.drawingBufferWidth,S.drawingBufferHeight),i.render(l,o),H&&r.triggerRepaint()},onRemove(){r==null||r.off("idle",G),u==null||u.dispose(),c==null||c.dispose(),d==null||d.dispose(),a==null||a.dispose(),g==null||g.geometry.dispose(),s==null||s.dispose(),h==null||h.dispose(),i==null||i.dispose(),r=null,i=null}}}const ct="flume-field",je="flume-buildings";function $n(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function Qi(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function Ji(n,e,t){let r=null,i=null;const l=new Map,o=Yi(n,t);function f(){n.getLayer(ct)&&n.removeLayer(ct),r=null}function d(){for(const[h,u]of l)n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",u.visibility),n.setPaintProperty(h,u.property,u.opacity),n.setFilter(h,u.filter),n.setLayerZoomRange(h,u.minzoom,u.maxzoom),u.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",u.color));l.clear()}function a(h){for(const u of n.getStyle().layers){if(u.id.startsWith("flume-"))continue;const c=Qi(u);if(!c)continue;const s=u.type==="fill-extrusion";l.set(u.id,{visibility:n.getLayoutProperty(u.id,"visibility")??"visible",property:c,opacity:n.getPaintProperty(u.id,c)??1,filter:n.getFilter(u.id)??null,minzoom:u.minzoom??0,maxzoom:u.maxzoom??24,color:s?n.getPaintProperty(u.id,"fill-extrusion-color")??null:void 0}),n.setPaintProperty(u.id,c,Ft),s&&n.setPaintProperty(u.id,"fill-extrusion-color",ve().previewBuildings),h||n.setLayoutProperty(u.id,"visibility","none")}}function g({source:h,input:u,prediction:c,preview:s,display:p}){if(c!==i&&(f(),i=c),!c&&n.getLayer(je)&&n.removeLayer(je),d(),jn(n,$n(h)),!c){o.clear(),ft(n,s);return}ft(n,null);const y=Hn.find(_=>_.id===(h==="osm"?"city-osm-3d":"city-concordia-3d")),w=fn(u.buildings.features,n.getFilter(y.id));a(p.showSurroundings),n.setFilter(y.id,w.surroundings),n.setLayerZoomRange(y.id,He,y.layer.maxzoom??24),n.getLayer(je)?n.setFilter(je,w.selected):n.addLayer({...y.layer,id:je,minzoom:He,layout:{visibility:"visible"},filter:w.selected,paint:{...y.layer.paint,"fill-extrusion-color":ve().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:y.layer.source,sourceLayer:y.layer["source-layer"],collection:s,dataZoom:u.dataZoom,filters:w,surroundingsOpacity:Ft,showSurroundings:p.showSurroundings}),n.getLayer(ct)||(r=Zi(c,p,e),n.addLayer(r)),n.triggerRepaint()}return{update:g,configure(){r==null||r.configure()},refresh(){r==null||r.refresh()},beforeStyleChange(){f(),i=null,l.clear()},dispose(){f(),o.dispose(),l.clear()}}}const Oe="flume-terrain-dem",Qe="flume-terrain-hillshade";function eo(n,e){var t,r,i;if(e){if(n.getSource(Oe)||n.addSource(Oe,{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),!n.getLayer(Qe)){const l=(t=n.getStyle().layers.find(o=>o.type==="symbol"))==null?void 0:t.id;n.addLayer({id:Qe,type:"hillshade",source:Oe,paint:{"hillshade-exaggeration":.8,"hillshade-shadow-color":"#1b1f24","hillshade-highlight-color":"#f4f1e8","hillshade-accent-color":"#5b5544"}},l)}((r=n.getTerrain())==null?void 0:r.source)!==Oe&&n.setTerrain({source:Oe,exaggeration:1})}else((i=n.getTerrain())==null?void 0:i.source)===Oe&&n.setTerrain(null),n.getLayer(Qe)&&n.removeLayer(Qe)}function Fe(n,e,t,r,i){if(t.reduce((f,d)=>f*d,1)!==e.length)throw new Error("Invalid "+n+" shape.");const l=new Uint8Array(e.length*4),o=new DataView(l.buffer);for(let f=0;f<e.length;f++){if(!Number.isFinite(e[f]))throw new Error("Cannot export non-finite "+n);o.setFloat32(f*4,e[f],!0)}return{name:n,content:l,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function kn(n,e,t,r,i=null){var o,f,d;const l={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((o=n.selection)==null?void 0:o.geometry)??((f=n.polygon)==null?void 0:f.geometry),computationalDomain:(d=n.polygon)==null?void 0:d.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:r.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(l.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(a=>(a+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),l.files=Object.fromEntries(t.map(a=>[a.name,a.description])),[{name:"metadata.json",content:JSON.stringify(l,null,2)},...t.map(({name:a,content:g})=>({name:a,content:g}))]}function Sn(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(f=>o+"_"+f)),i=Fe("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),l=e.channels??r;return[Fe("mddf.f32.bin",e.values,[e.ny,e.nx,l.length],l,"m"),i]}function to(n){const e=gn(n),t=n.width*n.height,r=new Float32Array(t*3),i=new Float32Array(t),l=new Float32Array(t),o=new Float32Array(t);for(let a=0;a<t;a++){const g=a*5;r.set([e[g],e[g+2],e[g+1]],a*3),i[a]=e[g+3],l[a]=e[g+4],o[a]=Math.hypot(e[g],e[g+1],e[g+2])}const f=[n.height,n.width],d=[Fe("velocity.f32.bin",r,[...f,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:f,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Fe("speed.f32.bin",o,f,["speed"],"m/s")];return n.settings.model!=="v2"&&d.push(Fe("temperature.f32.bin",i,f,["T"],"degC"),Fe("tke.f32.bin",l,f,["TKE"],"m2/s2")),d}function no(n){const e=n.width*n.height,t=n.settings.layers.length,r=gn(n),i=new Float32Array(t*e*3);for(let l=0;l<t*e;l++)i.set([r[l*5],r[l*5+2],r[l*5+1]],l*3);return[Fe("velocity3d.f32.bin",i,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function ro(n,e,t){return kn(n,t,Sn(t,e),e)}function io(n,e,t,r=null){const i=[...Sn(t,e),...to(t)];return r&&i.push(...no(r)),i.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),kn(n,t,i,e,r)}class oo{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let l=0;e.traverse(function(w){if(w.isMesh){const _=w.geometry,m=_.index,x=_.getAttribute("position");l+=m!==null?m.count/3:x.count/3,i.push({object3d:w,geometry:_})}});let o,f=80;if(r===!0){const w=l*2+l*3*4*4+80+4,_=new ArrayBuffer(w);o=new DataView(_),o.setUint32(f,l,!0),f+=4}else o="",o+=`solid exported
`;const d=new ge,a=new ge,g=new ge,h=new ge,u=new ge,c=new ge;for(let w=0,_=i.length;w<_;w++){const m=i[w].object3d,x=i[w].geometry,M=x.index,b=x.getAttribute("position");if(M!==null)for(let k=0;k<M.count;k+=3){const I=M.getX(k+0),B=M.getX(k+1),$=M.getX(k+2);s(I,B,$,b,m)}else for(let k=0;k<b.count;k+=3){const I=k+0,B=k+1,$=k+2;s(I,B,$,b,m)}}return r===!1&&(o+=`endsolid exported
`),o;function s(w,_,m,x,M){d.fromBufferAttribute(x,w),a.fromBufferAttribute(x,_),g.fromBufferAttribute(x,m),M.isSkinnedMesh===!0&&(M.applyBoneTransform(w,d),M.applyBoneTransform(_,a),M.applyBoneTransform(m,g)),d.applyMatrix4(M.matrixWorld),a.applyMatrix4(M.matrixWorld),g.applyMatrix4(M.matrixWorld),p(d,a,g),y(d),y(a),y(g),r===!0?(o.setUint16(f,0,!0),f+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(w,_,m){h.subVectors(m,_),u.subVectors(w,_),h.cross(u).normalize(),c.copy(h).normalize(),r===!0?(o.setFloat32(f,c.x,!0),f+=4,o.setFloat32(f,c.y,!0),f+=4,o.setFloat32(f,c.z,!0),f+=4):(o+="	facet normal "+c.x+" "+c.y+" "+c.z+`
`,o+=`		outer loop
`)}function y(w){r===!0?(o.setFloat32(f,w.x,!0),f+=4,o.setFloat32(f,w.y,!0),f+=4,o.setFloat32(f,w.z,!0),f+=4):o+="			vertex "+w.x+" "+w.y+" "+w.z+`
`}}}async function so(n,e,t={}){var w,_;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((w=e.layers)==null?void 0:w.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:l,spacingM:o,layerSpacingM:f}=e,d=(m,x)=>m<0||x<0||m>=r||x>=i?0:l[x*r+m],a=async()=>{var m;if(await new Promise(x=>setTimeout(x,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let g=0;for(let m=0;m<i;m++){m%32===0&&await a();for(let x=0;x<r;x++){const M=d(x,m);if(!Number.isInteger(M)||M<0||M>160)throw new Error("Invalid MDDF building height.");M&&(g+=2+ +(M>d(x-1,m))+ +(M>d(x+1,m))+ +(M>d(x,m-1))+ +(M>d(x,m+1)))}}if(!g)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(g*18);let u=0;const c=(m,x,M,b)=>{for(const k of[m,x,M,m,M,b])h.set(k,u),u+=3};for(let m=0;m<i;m++){m%32===0&&await a();for(let x=0;x<r;x++){const M=d(x,m)*f;if(!M)continue;const b=x*o,k=b+o,I=-m*o,B=I-o;c([b,M,I],[k,M,I],[k,M,B],[b,M,B]),c([b,0,I],[b,0,B],[k,0,B],[k,0,I]);let $=d(x-1,m)*f;M>$&&c([b,$,B],[b,$,I],[b,M,I],[b,M,B]),$=d(x+1,m)*f,M>$&&c([k,$,I],[k,$,B],[k,M,B],[k,M,I]),$=d(x,m-1)*f,M>$&&c([b,$,I],[k,$,I],[k,M,I],[b,M,I]),$=d(x,m+1)*f,M>$&&c([k,$,B],[b,$,B],[b,M,B],[k,M,B])}}const s=new Dr;s.setAttribute("position",new Vr(h,3));const p=new dt(s);let y;try{y=new oo().parse(p,{binary:!0}).buffer}finally{s.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:y},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(_=n.polygon)==null?void 0:_.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:o,layerSpacingM:f,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:g*2}}},null,2)}]}const Bn=Symbol("flume");function ot(){return In(Bn)}function ao(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=et(null),t=et(!1);let r=null,i=null,l=null,o=!1,f=null,d=!1;const a=()=>r,{currentPresetName:g}=Jt();Rt(g.value);const h=Xn({getMap:a,accessToken:n}),u=Ur({getMap:a,ready:t,onChange:y,accessToken:n}),c=Wi(),s=vt({mapCreated:!1,mapReady:t,error:"",area:u.state,grid:null,terrain:!1,terrainLoading:!1,wind:{...Et},engine:c.state,display:{variable:"speed",speedMps:Et.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:mr,sliceAboveGround:!0,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=q(()=>s.downloading||s.engine.downloading||s.area.loading);function y(){clearTimeout(f),f=null,d=!1,_++,s.terrainLoading=!1,s.grid=null,s.legend=null,s.error="",s.downloadError="",c.invalidate(),k()}let w=null,_=0;async function m(){if(p.value)return;const $=await u.captureRegion();if(!(!$||o))try{fn($.buildings.features),w=$,await x($)}catch(T){s.error=T.message}}async function x($){const T=++_;let P=yr($);if(s.terrain){s.terrainLoading=!0;try{P=Xr(P,await Hr(P,n))}finally{T===_&&(s.terrainLoading=!1)}}T!==_||o||(s.grid=ze(P),s.error="",M())}fe(()=>s.terrain,async()=>{if(!s.grid||!w)return;const $=w;y();try{await x($)}catch(T){s.error=T.message}});function M(){!s.grid||o||(clearTimeout(f),f=setTimeout(()=>{f=null,b()},wr))}async function b(){if(clearTimeout(f),f=null,!(o||!s.grid||p.value)){if(s.engine.busy){d=!0,c.cancel();return}try{const $={...hr(s.wind),model:s.wind.model,layers:pn(s.grid)};s.display.speedMps=$.speedMps,s.error="",await c.run(s.grid,$)}catch($){s.error=$.message}d&&!o&&(d=!1,await b())}}function k(){!r||!t.value||(eo(r,s.terrain),i==null||i.update({source:s.area.source,input:s.area.snapshot,prediction:s.engine.prediction,preview:u.getPreview(),display:s.display}))}async function I($){if(!(p.value||!s.grid)&&!($!=="model"&&(s.engine.busy||!s.engine.prediction))){s.downloading=!0,s.downloadError="";try{const T=s.area.snapshot;let P;if($==="model")P=await so(T,s.grid,{shouldCancel:()=>o});else{const F=Number(s.display.speedMps);if(!at(F))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const z=s.engine.prediction,G={...z,settings:{...z.settings,speedMps:F}},j=dn(G,s.display.sliceHeightM),oe=await c.readMddf(j.settings.layerIndex);$==="mddf"?P=ro(T,oe,j):P=io(T,oe,j,G)}const C=await Yn(P);o||qn(C,"flume-"+$+".zip","application/zip")}catch(T){o||(s.downloadError=T.message)}finally{o||(s.downloading=!1)}}}fe([()=>s.terrain,()=>s.grid,()=>s.engine.prediction,()=>s.area.source,()=>s.display.showSurroundings],k),fe(()=>s.engine.layersReady,()=>i==null?void 0:i.refresh()),fe(()=>[s.wind.directionDeg,s.wind.model],()=>{s.grid&&M()}),fe(()=>s.wind.speedMps,$=>{at($)&&(s.display.speedMps=Number($))}),fe(()=>s.engine.prediction,$=>{const T=Xe.find(P=>P.id===s.display.variable);($==null?void 0:$.settings.model)==="v2"&&(T!=null&&T.notInV2)&&(s.display.variable="speed")}),fe(()=>[s.display.variable,s.display.particles,s.display.density,s.display.speedMps,s.display.view,s.display.plane,s.display.sliceHeightM,s.display.sliceAboveGround,s.display.planeOffsetM],()=>{at(s.display.speedMps)?(s.downloadError="",i==null||i.configure()):s.downloadError="Use a wind speed between 0.5 and 20 m/s."}),fe(()=>s.display.paused,()=>r==null?void 0:r.triggerRepaint()),fe(g,$=>Rt($)),fe(h.mapStyle,$=>{r&&(u.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),r.setStyle($,{diff:!1}))}),An(()=>{if(!(n!=null&&n.startsWith("pk."))){s.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new on.Map({container:e.value,accessToken:n,style:h.mapStyle.value,center:vr,zoom:br,pitch:0,antialias:!0,attributionControl:!1}),i=Ji(r,$=>{o||(s.legend=$)},$=>{o||(s.error=$.message)}),s.mapCreated=!0,r.on("style.load",()=>{if(!o)try{Wn(r,$n(s.area.source)),t.value=!0,u.restore(),k()}catch($){s.error=$.message}}),r.on("error",$=>{if(o)return;const T=$.sourceId?" ("+$.sourceId+")":"";s.error="Map data unavailable"+T+". Check token, allowed domains and connection."}),h.attach(),l=new ResizeObserver(()=>r==null?void 0:r.resize()),l.observe(e.value)}catch($){s.error=$.message}}),bt(()=>{o=!0,clearTimeout(f),c.dispose(),i==null||i.dispose(),l==null||l.disconnect(),r==null||r.remove(),r=null});const B={mapElement:e,store:s,controls:h,locked:p,area:u,acceptArea:m,runPrediction:b,download:I};return Cn(Bn,B),B}const lo={class:"flume-compact"},uo={class:"map-hud-field"},co={key:0,class:"map-hud-muted",role:"status"},fo={key:1,class:"map-hud-muted"},go={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},po={key:2,class:"map-hud-muted",role:"status"},ho={key:3,class:"map-hud-muted",role:"status"},mo={class:"map-hud-field"},yo={class:"map-hud-actions"},wo={key:4,role:"status",class:"map-hud-muted"},bo={key:5,class:"map-hud-muted"},vo={key:6,class:"map-hud-muted"},xo={__name:"AreaHud",setup(n){const{store:e,area:t,locked:r,acceptArea:i}=ot(),l=sn*100,o=e.area,f=q(()=>!e.mapReady||r.value),d=q(()=>!!(o.region||o.loadedArea)),a=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],g=hn.map(({label:s,value:p})=>({label:s,value:p}));function h(s){o.shape=s,t.startSelection()}const u={rectangle:"Click one corner, then the opposite corner.",circle:"Click the centre, then a point on the edge.",polygon:"Click the corners; click the first point to finish."},c=xr.map(s=>({label:_t[s],value:s}));return(s,p)=>{var k,I;const y=en,w=Tn,_=xt,m=tn,x=nn,M=rt,b=it;return L(),U("div",lo,[A("div",uo,[p[5]||(p[5]=A("span",{class:"map-hud-field__label"},"Wind model",-1)),E(y,{modelValue:v(e).wind.model,"onUpdate:modelValue":p[0]||(p[0]=B=>v(e).wind.model=B),options:v(c),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:v(r)},null,8,["modelValue","options","disabled"])]),E(w,{modelValue:v(o).source,"onUpdate:modelValue":p[1]||(p[1]=B=>v(o).source=B),label:"Buildings","aria-label":"Building source",size:"small",options:a,"text-by":"text","value-by":"value",disabled:v(r)},null,8,["modelValue","disabled"]),E(_e,{block:"",icon:"mso-location_city",disabled:f.value,loading:v(o).loading,onClick:v(t).loadBuildings},{default:Q(()=>[...p[6]||(p[6]=[ie("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),v(o).loadedArea?(L(),U("p",co," Loaded detailed buildings: "+R(v(o).loadedArea.count)+" parts · "+R((v(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+R((v(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km ",1)):(L(),U("p",fo,"3 × 3 km around the map centre, or draw an area below.")),A("div",go,[p[7]||(p[7]=A("span",{class:"map-hud-muted"},"Buffer",-1)),E(_,{modelValue:v(o).bufferPercent,"onUpdate:modelValue":p[2]||(p[2]=B=>v(o).bufferPercent=B),min:0,max:l,step:5,"aria-label":"Buffer per side (%)",disabled:v(r)},null,8,["modelValue","disabled"]),E(m,{modelValue:v(o).bufferPercent,"onUpdate:modelValue":p[3]||(p[3]=B=>v(o).bufferPercent=B),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:l,step:5,disabled:v(r)},null,8,["modelValue","disabled"]),p[8]||(p[8]=A("span",{class:"map-hud-muted"},"%",-1))]),E(x,{modelValue:v(e).terrain,"onUpdate:modelValue":p[4]||(p[4]=B=>v(e).terrain=B),label:"Terrain as solid ground (test)",size:"small",disabled:v(r)||v(e).terrainLoading},null,8,["modelValue","disabled"]),v(e).terrainLoading?(L(),U("p",po,"Loading ground heights…")):(k=v(e).grid)!=null&&k.terrain?(L(),U("p",ho," Ground "+R(Math.round(v(e).grid.terrain.lowM))+"–"+R(Math.round(v(e).grid.terrain.highM))+" m · test only ",1)):W("",!0),A("div",mo,[p[9]||(p[9]=A("span",{class:"map-hud-field__label"},"Draw an area",-1)),E(y,{"model-value":v(o).shape,options:v(g),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Area shape",class:"even-toggle",disabled:f.value,"onUpdate:modelValue":h},null,8,["model-value","options","disabled"])]),A("div",yo,[E(_e,{icon:"mso-crop_free",disabled:f.value,"aria-label":"Select region",onClick:v(t).startSelection},{default:Q(()=>[...p[10]||(p[10]=[ie("Draw area",-1)])]),_:1},8,["disabled","onClick"]),v(o).region?(L(),ke(_e,{key:0,icon:"mso-close",disabled:v(r),onClick:v(t).clearSelection},{default:Q(()=>[...p[11]||(p[11]=[ie("Clear",-1)])]),_:1},8,["disabled","onClick"])):W("",!0)]),v(o).drawing?(L(),U("p",wo,R(u[v(o).shape])+" Esc cancels.",1)):(I=v(o).region)!=null&&I.mainDomain?(L(),U("p",bo,R(v(o).region.mainDomain.extentM[0])+" × "+R(v(o).region.mainDomain.extentM[1])+" m + "+R((v(o).region.buffer.fraction*100).toFixed(0))+"% buffer ",1)):v(o).region?(L(),U("p",vo,R(v(o).region.extentM[0])+" × "+R(v(o).region.extentM[1])+" m ",1)):W("",!0),E(_e,{primary:"",block:"",disabled:!v(e).mapReady||!d.value||v(r),loading:v(o).loading,"aria-label":v(o).region?"Use selected region":"Use full loaded area",onClick:v(i)},{default:Q(()=>[ie(R(v(o).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"]),v(o).loading?(L(),ke(M,{key:7,"model-value":v(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):W("",!0),v(o).error?(L(),ke(b,{key:8,color:"danger"},{default:Q(()=>[ie(R(v(o).error),1)]),_:1})):W("",!0)])}}},Mo={class:"flex flex-col gap-3"},_o={key:0,class:"map-hud-muted"},$o={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},ko={class:"map-hud-field"},So={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Bo=["aria-valuenow","aria-disabled"],Po=["x1","y1","x2","y2"],Ao=["cx","cy"],Io={class:"flex flex-col gap-2 min-w-0"},Co={class:"cardinals grid grid-cols-4 gap-1"},To={key:3,class:"flex flex-col gap-1"},Fo={role:"status",class:"map-hud-muted"},Ro={key:4,class:"map-hud-muted"},Eo={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:r}=ot(),i=e.wind,l=e.engine,o=q(()=>!!e.grid&&!t.value),f=q(()=>{if(!e.grid)return null;const c=pn(e.grid);return{topM:Math.round((c.at(-1)+.5)*Re),layers:c.length}}),d=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],a=et(null),g=q(()=>Number(i.directionDeg)*Math.PI/180);function h(c){if(!o.value||c.type==="pointermove"&&!c.buttons)return;c.type==="pointerdown"&&c.currentTarget.setPointerCapture(c.pointerId);const s=a.value.getBoundingClientRect(),p=c.clientX-s.left-s.width/2,y=-(c.clientY-s.top-s.height/2);i.directionDeg=(Math.round(Math.atan2(y,p)*180/Math.PI)+360)%360}function u(c){if(!o.value)return;const s={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[c.key]??0;s&&(c.preventDefault(),i.directionDeg=(Number(i.directionDeg)+s+360)%360)}return(c,s)=>{const p=xt,y=tn,w=it,_=rt;return L(),U("div",Mo,[v(e).grid?W("",!0):(L(),U("p",_o,"Choose a simulation area in step 1 first.")),A("div",$o,[s[3]||(s[3]=A("span",{class:"map-hud-muted"},"Speed",-1)),E(p,{modelValue:v(i).speedMps,"onUpdate:modelValue":s[0]||(s[0]=m=>v(i).speedMps=m),min:v(Dt),max:v(Lt),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),E(y,{modelValue:v(i).speedMps,"onUpdate:modelValue":s[1]||(s[1]=m=>v(i).speedMps=m),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:v(Dt),max:v(Lt),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),s[4]||(s[4]=A("span",{class:"map-hud-muted"},"m/s",-1))]),A("div",ko,[s[6]||(s[6]=A("span",{class:"map-hud-field__label"},"Wind direction (blowing towards)",-1)),A("div",So,[(L(),U("svg",{ref_key:"dial",ref:a,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":v(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Fn(h,["prevent"]),onPointermove:h,onKeydown:u},[s[5]||(s[5]=Rn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-b60f625f></circle><text x="80" y="18" text-anchor="middle" data-v-b60f625f>90°</text><text x="146" y="84" text-anchor="middle" data-v-b60f625f>0°</text><text x="80" y="152" text-anchor="middle" data-v-b60f625f>270°</text><text x="1" y="84" text-anchor="start" data-v-b60f625f>180°</text>',5)),A("line",{x1:80-Math.cos(g.value)*30,y1:80+Math.sin(g.value)*30,x2:80+Math.cos(g.value)*42,y2:80-Math.sin(g.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Po),A("circle",{cx:80+Math.cos(g.value)*42,cy:80-Math.sin(g.value)*42,r:"5",class:"needle-tip"},null,8,Ao)],40,Bo)),A("div",Io,[E(y,{modelValue:v(i).directionDeg,"onUpdate:modelValue":s[2]||(s[2]=m=>v(i).directionDeg=m),modelModifiers:{number:!0},type:"number",label:"Degrees","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),A("div",Co,[(L(),U(Ce,null,rn(d,m=>E(_e,{key:m.text,disabled:!o.value,"aria-label":"Wind towards "+m.text,onClick:x=>v(i).directionDeg=m.value},{default:Q(()=>[ie(R(m.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])])]),v(e).error?(L(),ke(w,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Q(()=>[ie(R(v(e).error),1)]),_:1})):W("",!0),v(l).error?(L(),ke(w,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Q(()=>[ie(R(v(l).error),1)]),_:1})):W("",!0),v(l).busy?(L(),U("div",To,[E(_,{"model-value":v(l).progress*100,indeterminate:v(l).progress===0},null,8,["model-value","indeterminate"]),A("p",Fo,R(v(l).stage),1)])):W("",!0),f.value&&!v(l).busy?(L(),U("p",Ro," 3D wind: ground to "+R(f.value.topM)+" m · "+R(f.value.layers)+" layers ",1)):W("",!0),E(_e,{primary:"",block:"",disabled:!o.value,loading:v(l).busy,"aria-label":"Run prediction",onClick:v(r)},{default:Q(()=>[...s[7]||(s[7]=[ie("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},Lo=Mt(Eo,[["__scopeId","data-v-b60f625f"]]),Do={class:"flex flex-col gap-3"},Vo={key:0,class:"map-hud-muted"},Oo={class:"map-hud-field"},zo={class:"map-hud-muted"},Uo={class:"map-hud-field"},No={class:"map-hud-muted"},Go={key:0,class:"hud-row hud-row--value"},jo={class:"hud-value"},Ho={key:1,class:"map-hud-field"},Xo={class:"map-hud-muted"},Wo={key:2,class:"hud-row hud-row--value"},Yo={class:"hud-value"},qo={key:0,class:"map-hud-field"},Ko={class:"map-hud-muted"},Zo={class:"hud-row"},Qo={class:"map-hud-field"},Jo={key:0,class:"flex flex-col gap-1 text-xs"},es={class:"flex justify-between gap-2 map-hud-muted"},ts={class:"map-hud-muted"},ns={__name:"VisualizeHud",setup(n){const{store:e}=ot(),t=e.display,r=q(()=>e.engine.prediction),i=q(()=>{var M;return e.engine.layersReady||((M=r.value)==null?void 0:M.layers.length)||0}),l=q(()=>r.value?Mr(r.value):Vt),o=q(()=>r.value?_r(r.value):[0,0]),f=q(()=>Xe.filter(M=>{var b;return!(M.notInV2&&((b=r.value)==null?void 0:b.settings.model)==="v2")}).map(M=>({label:M.label,value:M.id}))),d={particles:"Moving dots that follow the wind.",slice:"A coloured plane through the wind."},a={"3d":"The whole 3D wind volume.",h:"A level plane at one height.",v:"An upright plane along the wind."},g={coloured:"Each particle has the colour of its value.",white:"White particles over a coloured slice at Height."},h=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],u=q(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(M=>M.value!=="3d"||t.view==="particles")),c=q({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:M=>t.plane=M}),s=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],p=q(()=>c.value==="h"||c.value==="3d"&&t.view==="particles"&&t.particles==="white"),y=[{label:"Follow ground",value:!0},{label:"Flat",value:!1}],w=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],_=q(()=>{const M=Math.round(Number(t.planeOffsetM));return(M>0?"+":"")+M+" m"}),m=q(()=>{var M;return((M=Xe.find(b=>b.id===t.variable))==null?void 0:M.ramp)??"turbo"}),x=q(()=>"linear-gradient(to right,"+Array.from({length:17},(M,b)=>"rgb("+$r(m.value,b/16).join(",")+") "+b*100/16+"%").join(",")+")");return(M,b)=>{var T;const k=en,I=xt,B=nn,$=Ln;return L(),U("div",Do,[r.value?(L(),U(Ce,{key:1},[A("div",Oo,[b[10]||(b[10]=A("span",{class:"map-hud-field__label"},"Show",-1)),E(k,{modelValue:v(t).view,"onUpdate:modelValue":b[0]||(b[0]=P=>v(t).view=P),options:h,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),A("p",zo,R(d[v(t).view]),1)]),v(t).view!=="off"?(L(),U(Ce,{key:0},[A("div",Uo,[b[11]||(b[11]=A("span",{class:"map-hud-field__label"},"Plane",-1)),E(k,{modelValue:c.value,"onUpdate:modelValue":b[1]||(b[1]=P=>c.value=P),options:u.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),A("p",No,R(a[c.value]),1)]),p.value?(L(),U("div",Go,[b[12]||(b[12]=A("span",{class:"hud-label"},"Height",-1)),E(I,{modelValue:v(t).sliceHeightM,"onUpdate:modelValue":b[2]||(b[2]=P=>v(t).sliceHeightM=P),min:v(Vt),max:l.value,step:v(Re),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),A("span",jo,R(Number(v(t).sliceHeightM).toFixed(1))+" m",1)])):W("",!0),p.value&&((T=r.value)!=null&&T.grid.terrain)?(L(),U("div",Ho,[b[13]||(b[13]=A("span",{class:"map-hud-field__label"},"Over hills",-1)),E(k,{modelValue:v(t).sliceAboveGround,"onUpdate:modelValue":b[3]||(b[3]=P=>v(t).sliceAboveGround=P),options:y,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Slice height from",class:"even-toggle"},null,8,["modelValue"]),A("p",Xo,R(v(t).sliceAboveGround?"The slice rises over hills higher than Height.":"The slice stays at Height and cuts through hills."),1)])):W("",!0),c.value==="v"?(L(),U("div",Wo,[b[14]||(b[14]=A("span",{class:"hud-label"},"Position",-1)),E(I,{modelValue:v(t).planeOffsetM,"onUpdate:modelValue":b[4]||(b[4]=P=>v(t).planeOffsetM=P),min:o.value[0],max:o.value[1],step:v(we),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),A("span",Yo,R(_.value),1)])):W("",!0)],64)):W("",!0),v(t).view!=="off"?(L(),U(Ce,{key:1},[v(t).view==="particles"?(L(),U("div",qo,[b[15]||(b[15]=A("span",{class:"map-hud-field__label"},"Colour on",-1)),E(k,{modelValue:v(t).particles,"onUpdate:modelValue":b[5]||(b[5]=P=>v(t).particles=P),options:s,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"]),A("p",Ko,R(g[v(t).particles]),1)])):W("",!0),A("div",Zo,[b[16]||(b[16]=A("span",{class:"hud-label"},"Density",-1)),E(k,{modelValue:v(t).density,"onUpdate:modelValue":b[6]||(b[6]=P=>v(t).density=P),options:w,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),E(B,{modelValue:v(t).paused,"onUpdate:modelValue":b[7]||(b[7]=P=>v(t).paused=P),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):W("",!0),v(t).view!=="off"?(L(),U(Ce,{key:2},[E($,{class:"!my-0"}),A("div",Qo,[b[17]||(b[17]=A("span",{class:"map-hud-field__label"},"Colour by",-1)),E(k,{modelValue:v(t).variable,"onUpdate:modelValue":b[8]||(b[8]=P=>v(t).variable=P),options:f.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"])]),v(e).legend?(L(),U("div",Jo,[A("div",{class:"colorbar",style:En({background:x.value})},null,4),A("div",es,[A("span",null,R(v(e).legend.low.toFixed(2)),1),A("strong",null,R(v(e).legend.legend)+" ("+R(v(e).legend.unit)+")",1),A("span",null,R(v(e).legend.high.toFixed(2)),1)])])):W("",!0)],64)):W("",!0),E($,{class:"!my-0"}),E(B,{modelValue:v(t).showSurroundings,"onUpdate:modelValue":b[9]||(b[9]=P=>v(t).showSurroundings=P),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),A("p",ts,R(v(_t)[r.value.settings.model])+" · up to "+R(l.value.toFixed(0))+" m · "+R(i.value)+" / "+R(r.value.settings.layers.length)+" layers · "+R((r.value.milliseconds/1e3).toFixed(1))+" s ",1)],64)):(L(),U("p",Vo,"Run a prediction to see the 3D wind."))])}}},rs=Mt(ns,[["__scopeId","data-v-139bd7f8"]]),is={class:"space-y-2"},os={key:0,class:"map-hud-muted"},ss={class:"grid grid-cols-2 gap-2"},as={__name:"DownloadsHud",setup(n){const{store:e,download:t}=ot(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(l){const o=e.engine;return e.downloading||o.downloading||l!=="model"&&(o.busy||!o.prediction)}return(l,o)=>{const f=rt,d=it;return L(),U("div",is,[v(e).grid?(L(),U(Ce,{key:1},[A("div",ss,[(L(),U(Ce,null,rn(r,a=>E(_e,{key:a.id,icon:"mso-download","aria-label":a.label,disabled:i(a.id),onClick:g=>v(t)(a.id)},{default:Q(()=>[ie(R(a.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),v(e).downloading?(L(),ke(f,{key:0,indeterminate:"","aria-label":"Preparing download"})):W("",!0),v(e).downloadError?(L(),ke(d,{key:1,color:"danger"},{default:Q(()=>[ie(R(v(e).downloadError),1)]),_:1})):W("",!0)],64)):(L(),U("p",os,"Choose an area in step 1 first."))])}}},ls={class:"flume-hud-stack map-hud-column"},us={class:"flume-heading map-hud-heading city-glass"},cs={class:"flume-heading__row"},ds={key:0,class:"flume-info"},fs={class:"flume-info__title"},gs={class:"flume-info__copyright"},ps=["href"],hs={class:"map-hud-muted normal-case"},ms={class:"map-hud-muted normal-case"},ys={key:0,class:"flume-status"},ws={__name:"FlumeCityView",setup(n){const{mapElement:e,store:t,controls:r,locked:i,area:l}=ao(),{controlsVisible:o}=r,{currentPresetName:f}=Jt(),d=q(()=>f.value==="dark"),a=et(!1),g=q(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),h={particles:"Particles",slice:"Slice",off:"Off"},u=q(()=>t.engine.prediction?h[t.display.view]:""),c={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(s,p)=>{const y=Un,w=it,_=rt;return L(),U("section",{class:zn(["flume-page map-glass",{"map-glass--dark":d.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=On((...m)=>v(l).stopSelection&&v(l).stopSelection(...m),["esc"]))},[Dn(A("div",ls,[A("header",us,[A("div",cs,[p[2]||(p[2]=A("h1",null,"Flume City",-1)),E(y,{preset:"secondary",color:"textPrimary",size:"small",icon:a.value?"mso-close":"mso-info","aria-label":a.value?"Hide Flume City information":"Show Flume City information","aria-expanded":a.value,onClick:p[0]||(p[0]=m=>a.value=!a.value)},null,8,["icon","aria-label","aria-expanded"])]),a.value?(L(),U("div",ds,[A("p",fs,R(c.title),1),A("p",null,R(c.authors),1),A("p",null,R(c.summary),1),E(_e,{icon:"mso-description",href:c.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:Q(()=>[...p[3]||(p[3]=[ie("arXiv",-1)])]),_:1},8,["href"]),A("div",gs,[A("p",null,[p[4]||(p[4]=ie(" Developed and maintained by ",-1)),A("a",{href:v(We).lab.url,target:"_blank",rel:"noopener"},R(v(We).lab.name),9,ps),p[5]||(p[5]=A("br",null,null,-1)),ie("("+R(v(We).lead)+") ",1)]),A("p",null,R(v(We).place),1)])])):W("",!0)]),E(Ye,{title:"1 · Simulation area",inert:v(i),collapsed:!!v(t).grid},{default:Q(()=>[E(xo)]),_:1},8,["inert","collapsed"]),E(Ye,{title:"2 · Wind configuration",collapsed:!v(t).grid},{"header-extra":Q(()=>[A("span",hs,R(g.value),1)]),default:Q(()=>[E(Lo)]),_:1},8,["collapsed"]),E(Ye,{title:"3 · Wind visualization",collapsed:!v(t).engine.prediction},{"header-extra":Q(()=>[A("span",ms,R(u.value),1)]),default:Q(()=>[E(rs)]),_:1},8,["collapsed"]),E(Ye,{title:"4 · Downloads",collapsed:!v(t).grid},{default:Q(()=>[E(as)]),_:1},8,["collapsed"]),v(t).error&&!v(t).grid?(L(),ke(w,{key:0,color:"danger"},{default:Q(()=>[ie(R(v(t).error),1)]),_:1})):W("",!0)],512),[[Vn,v(o)]]),A("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),E(Or,{controls:v(r),shown:v(t).mapCreated,disabled:v(i)},null,8,["controls","shown","disabled"]),!v(t).mapReady&&!v(t).error?(L(),U("div",ys,[E(_,{indeterminate:"","aria-label":"Loading Flume map"})])):W("",!0)],34)}}},Ts=Mt(ws,[["__scopeId","data-v-6b8748ad"]]);export{Ts as default};
