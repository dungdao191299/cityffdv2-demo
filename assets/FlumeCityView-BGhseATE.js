import{k as pe,p as Ct,s as je,j as Tt,v as gn,x as pn,l as q,m as et,a2 as Un,a3 as zn,o as R,c as N,a as I,b as V,u as _,w as Z,d as ae,t as F,i as j,h as Fe,a4 as hn,P as Nn,W as It,R as mn,C as yn,O as ft,D as gt,_ as Lt,M as Gn,e as Hn,F as He,r as wn,n as Wn,Q as Yn,X as Xn,Y as jn,a5 as nt,a0 as qn,I as Kn,V as Zn}from"./index-C__Fo2MZ.js";import{r as Qn,l as Jn,m as bn,s as er,b as tr,u as nr,a as rr,_ as Le,M as rt}from"./mapbox-gl-geocoder-CsvoEBDQ.js";import{M as Ot,P as it,V as we,S as ir,C as or,a as sr,m as ar,i as lr,n as ur,o as ht,k as vt,e as cr,B as Mt,f as dr,W as fr,D as Ut,R as zt,c as gr,L as ot,H as pr,d as xn,p as hr,l as mr,w as yr}from"./gpuCheck-BVEFzRt8.js";import{z as wr}from"./archive-Dz16c6AW.js";import{d as br}from"./download-NHVUrqvB.js";import{m as Be,c as Nt,B as xr,Q as mt,a as vr,s as Mr,M as vn,b as _r,d as ct,C as ye,L as Pe,e as $r,f as Sr,A as kr,g as Mn,G as Br,P as Pr,F as Gt,h as yt,i as Ar,j as Cr,p as Tr,k as Et,l as Je,n as Ht,v as Ir,V as tt,o as Lr,q as Er,r as Fr,t as _n,u as Rr,w as Dr,x as Wt,y as Vr,z as Or,D as Yt,E as Ur,H as zr,I as $n,S as Xt,J as Sn,K as jt,N as wt,O as kn,R as Nr,T as Gr,U as qt,W as Hr,X as Wr,Y as Yr,Z as Xr,_ as jr,$ as Kt,a0 as Zt,a1 as qr,a2 as Kr,a3 as Zr,a4 as Qr}from"./volumeSource-BZuwEaKZ.js";import{M as bt}from"./mapbox-gl-draw-C3HLWmML.js";import{D as Bn,d as Jr,a as ei,S as ti}from"./drawShapes-mj1-EPFI.js";import{a as dt}from"./projection-CjDDR_2P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./orient2d-DArCjZZA.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";const Me="flume-detailed-buildings",_e="flume-region-domain",st="flume-main-domain";function _t(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(Me)&&n.removeLayer(Me),n.getSource(Me)&&n.removeSource(Me);return}n.getSource(Me)?n.getSource(Me).setData(e):n.addSource(Me,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(Me)||n.addLayer({id:Me,type:"fill-extrusion",source:Me,minzoom:0,paint:{"fill-extrusion-color":Be().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function ni(n,e){if(!e){n.getLayer(st)&&n.removeLayer(st),n.getLayer(_e)&&n.removeLayer(_e),n.getSource(_e)&&n.removeSource(_e);return}let t;e.mainDomain?t=[{...e.polygon,properties:{role:"outer"}},{...e.mainDomain.polygon,properties:{role:"main"}}]:t=[{...e.polygon,properties:{role:"main"}}];const r={type:"FeatureCollection",features:t};n.getSource(_e)?n.getSource(_e).setData(r):(n.addSource(_e,{type:"geojson",data:r}),n.addLayer({id:_e,type:"line",source:_e,filter:["==",["get","role"],"outer"],paint:{"line-color":Be().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),n.getLayer(st)||n.addLayer({id:st,type:"line",source:_e,filter:["==",["get","role"],"main"],paint:{"line-color":Be().mainArea,"line-width":3}})}const Qt=["draw.create","draw.update","draw.delete"];function ri({getMap:n,ready:e,onChange:t,accessToken:r}){const i=Tt({source:"concordia",bufferPercent:xr*100,shape:"polygon",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,o=!1,c=null,u=0,l=null;function f(A=!1){u++,c==null||c.abort(),A||(l=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function h(){const A=n();!A||!e.value||(_t(A,l==null?void 0:l.preview),ni(A,i.region??(l==null?void 0:l.area)??null))}function p(){return(l==null?void 0:l.preview)??null}function g(A){const T=!i.region&&!i.snapshot;f(T),i.error="";try{i.region=je(Nt(A))}catch(E){i.region=null,i.error=E.message}h()}function d(A){var L;if(o||!a)return;const T=(L=A.features)==null?void 0:L.at(-1);if(A.type==="draw.create"&&T)for(const H of a.getAll().features)H.id!==T.id&&a.delete(H.id);const E=a.getAll().features.find(H=>H.geometry.type==="Polygon");E?(g(E),a.deleteAll()):(f(),i.region=null,h()),i.drawing=!1}function s(A){i.drawing=ei.has(A.mode)}function y(){const A=n();if(!A||!e.value)throw new Error("Wait for the map to load.");if(!a){const T={...bt.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};a=new bt({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...bt.modes,...ti,simple_select:T},styles:Jr(Be().mainArea,Be().drawFillOpacity)}),A.addControl(a,"bottom-left");for(const E of Qt)A.on(E,d);A.on("draw.modechange",s)}return a}function w(){const A=n();if(!(!a||!A)){for(const T of Qt)A.off(T,d);A.off("draw.modechange",s),A.removeControl(a),a=null,i.drawing=!1}}function v(){if(!i.loading)try{const A=y();n().stop();const T=!i.region&&!i.snapshot;f(T),i.region=null,A.deleteAll(),h();const E=Bn.find(H=>H.value===i.shape);let L=E==null?void 0:E.mode;L==null&&(L="draw_polygon"),A.changeMode(L),i.drawing=!0,i.error=""}catch(A){i.error=A.message}}function m(){a&&a.changeMode("simple_select"),i.drawing=!1}function b(){var A;(A=n())==null||A.stop(),a==null||a.deleteAll(),a==null||a.changeMode("simple_select"),i.drawing=!1,f(),i.region=null,i.error="",h()}async function x(A){const T=new AbortController,E=u;c=T,i.loading=!0,i.progress=0,i.error="";const L=()=>o||T.signal.aborted||E!==u;try{return await A({signal:T.signal,epoch:E,isStale:L})}catch(H){return T.abort(),!o&&E===u&&H.name!=="AbortError"&&(i.error=H.message),null}finally{c===T&&(c=null,o||(i.loading=!1))}}async function $(A,T,{signal:E,epoch:L,isStale:H}){if(E.throwIfAborted(),(l==null?void 0:l.source)===T){const[Ae,O,U,W]=A.bounds,G=l.area.bounds;if(Ae>=G[0]&&O>=G[1]&&U<=G[2]&&W<=G[3])return l.tiles}const le=n();let D="city-concordia";T==="osm"&&(D="composite");let ge=Qn({map:le,sourceId:D,source:T,bounds:A.bounds});if(ge==null&&(ge=await Jn({sourceConfig:le.getStyle().sources[D],source:T,bounds:A.bounds,accessToken:r,signal:E,paddingTiles:1,onProgress:Ae=>{L===u&&(i.progress=Ae)}})),H())throw new DOMException("Cancelled","AbortError");const Ve=ct(ge.features);return l={source:T,area:A,tiles:ge,preview:Ve},i.loadedArea=je({source:T,bounds:[...A.bounds],extentM:[...A.extentM],count:Ve.features.length,fromMap:!!ge.fromMap}),h(),ge}function k(A){var H;const T=n(),E=T.getCanvas().clientWidth;(H=T.resize)==null||H.call(T);let L=32;E>=640&&(L={top:40,bottom:40,left:Math.min(320,E*.35),right:40}),T.fitBounds([A.bounds.slice(0,2),A.bounds.slice(2,4)],{padding:L,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function B(){if(i.loading||o)return null;const A=n();if(!A||!e.value)return i.error="Wait for the map to load.",null;const T=i.source;return x(async E=>{const L=mt/2,H=A.getCenter().wrap().toArray(),le=dt(H)([-L,-L]),D=vr(le,dt(le)([mt,mt]));return k(D),await $(D,T,E),E.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function S(){if(i.loading||o)return null;!i.region&&(l==null?void 0:l.source)===i.source&&g(l.area.polygon);const A=n(),T=i.region,E=i.source;return!A||!e.value||!T?(i.error="Draw and finish a valid polygon first.",null):x(async L=>{const H=Nt(T.selection??T.polygon);let le=H,D,ne;for(let U=0;U<4;U++){if(ne=await $(le,E,L),L.isStale())return null;D=Mr(ne.features,H);const[W,G,K,re]=D.bounds,se=ne.coverageBounds,Q=1e-8;if(W>se[0]+Q&&G>se[1]+Q&&K<se[2]-Q&&re<se[3]-Q||!D.buildings.features.length)break;if(U===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");le=D}const ge=Number(i.bufferPercent)||0,Ae=Math.min(Math.max(ge,0),vn*100)/100;D=_r(D,Ae),D.source=E,D.dataZoom=ne.zoom,D.tileCount=ne.tileCount,D.surroundings=ct(D.surroundings.features),D.warnings=D.warnings.filter(U=>!U.startsWith("Loaded map tiles only"));let O="Detailed tiles downloaded at zoom ";return ne.fromMap&&(O="Buildings read from map tiles already loaded at zoom "),D.warnings.push(O+ne.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(D.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=je(D),i.region=je({origin:D.origin,bounds:D.bounds,extentM:D.extentM,polygon:D.polygon,selection:D.selection,mainDomain:D.mainDomain,buffer:D.buffer}),h(),k(D),t==null||t(),D})}function M(){c==null||c.abort(),w()}function C(){h(),y()}function P(){o=!0,u++,c==null||c.abort(),w()}return pe(()=>i.source,()=>{f(),h(),i.error=""}),Ct(P),{state:i,startSelection:v,stopSelection:m,clearSelection:b,setSelection:g,captureRegion:S,loadBuildings:B,getPreview:p,restore:C,beforeStyleChange:M}}const Pn=14,Jt=128,en=Math.round($r/Pe),ii=(n,e,t)=>-1e4+(n*65536+e*256+t)*.1;function oi(n,e){const t=2**Pn,r=e*Math.PI/180,i=(n+180)/360*t,o=(1-Math.log(Math.tan(r)+1/Math.cos(r))/Math.PI)/2*t;return[i,o]}async function si(n,e,t,r){const i=`https://api.mapbox.com/v4/mapbox.mapbox-terrain-dem-v1/${Pn}/${n}/${e}@2x.pngraw?access_token=${encodeURIComponent(t)}`,a=await fetch(i,{signal:r});if(!a.ok)throw new Error(`Terrain data request failed (HTTP ${a.status}).`);const o=await createImageBitmap(await a.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),u=new OffscreenCanvas(o.width,o.height).getContext("2d",{willReadFrequently:!0});u.drawImage(o,0,0);const{data:l}=u.getImageData(0,0,o.width,o.height),f=new Float32Array(o.width*o.height);for(let h=0;h<f.length;h++)f[h]=ii(l[4*h],l[4*h+1],l[4*h+2]);return{heights:f,size:o.width}}async function ai(n,e,t){const r=dt(n.origin),i=n.nx*n.ny,a=new Float64Array(i*2);let o=1/0,c=1/0,u=-1/0,l=-1/0;for(let m=0;m<n.ny;m++)for(let b=0;b<n.nx;b++){const[x,$]=oi(...r([(b+.5)*ye,(m+.5)*ye])),k=m*n.nx+b;a[2*k]=x,a[2*k+1]=$,o=Math.min(o,x),c=Math.min(c,$),u=Math.max(u,x),l=Math.max(l,$)}const f=2/Jt,h=[];for(let m=Math.floor(c-f);m<=Math.floor(l+f);m++)for(let b=Math.floor(o-f);b<=Math.floor(u+f);b++)h.push([b,m]);const p=new Map;await Promise.all(h.map(async([m,b])=>{const x=await si(m,b,e,t);p.set(`${m}/${b}`,x)}));const d=p.values().next().value.size,s=(m,b)=>{const x=Math.floor(m/d),$=Math.floor(b/d);return p.get(`${x}/${$}`).heights[(b-$*d)*d+(m-x*d)]},y=(m,b)=>{const x=m-.5,$=b-.5,k=Math.floor(x),B=Math.floor($),S=x-k,M=$-B,C=s(k,B)*(1-S)+s(k+1,B)*S,P=s(k,B+1)*(1-S)+s(k+1,B+1)*S;return C*(1-M)+P*M},w=d/Jt,v=new Float32Array(i);for(let m=0;m<i;m++){const b=a[2*m]*d/w,x=a[2*m+1]*d/w,$=Math.floor(b),k=Math.floor(x),B=b-$,S=x-k,M=$*w,C=($+1)*w,P=k*w,A=(k+1)*w,T=y(M,P)*(1-B)+y(C,P)*B,E=y(M,A)*(1-B)+y(C,A)*B;v[m]=T*(1-S)+E*S}return v}function li(n,e){let t=1/0,r=-1/0;for(const c of e)t=Math.min(t,c),r=Math.max(r,c);const i=new Float32Array(n.layers.length),a=new Float32Array(n.layers.length);let o=0;for(let c=0;c<i.length;c++)a[c]=Math.min(en,Math.round((e[c]-t)/Pe)),i[c]=Math.min(en,a[c]+n.layers[c]),o=Math.max(o,i[c]);return{...n,layers:i,groundLayers:a,statistics:{...n.statistics,maximumHeightM:o*Pe},terrain:{lowM:t,highM:r}}}const ui=500,ci=.2,di=3,fi=97,gi=2,pi=16,tn=4;function hi(){let n=null,e=null,t=null,r=null,i=null;async function a(g,d=!0){n&&(d||!n.useF16)||(n&&c(),e||await o(g),n=await Br.create({allowF16:d}),t=new Pr(n,e,i,{batchSize:pi,layerStride:gi}),r=null)}async function o(g){const d="/cityffdv2-demo/flume/model-v2/",[s,y]=await Promise.all(["metadata.json","weights.bin"].map(async w=>{const v=await fetch(d+w,{signal:g});if(!v.ok)throw new Error("Could not load model v2 "+w+" (HTTP "+v.status+").");return w.endsWith(".bin")?v.arrayBuffer():v.json()}));e=s,i=y}function c(){t==null||t.destroy(),n==null||n.device.destroy(),t=null,n=null,r=null}async function u(g,d,{onScan:s,onLayer:y}={}){g!==r&&(t.setCity({layers:g.layers,nx:g.nx,ny:g.ny}),r=g);const{nx:w,ny:v}=g,b={polygon:[[-.5,-.5],[w-.5,-.5],[w-.5,v-.5],[-.5,v-.5]],overlap:ci,sweepEvery:di};y&&(b.onLayer=$=>y($));let x=null;s&&(x=setInterval(()=>{t!=null&&t.city&&s(t.city.progress)},ui));try{return await t.predict(null,null,d,b)}finally{clearInterval(x)}}function l(g,d,s){if(d.gx!==g.width||d.gy!==g.height||d.layout.gridX0!==g.originX)throw new Error("Wind layers do not share one wind-frame grid.");const y=d.gx*d.gy,w=g.plan.indexOf(s),v=w*y,m=s-d.firstLayer;for(let b=0;b<d.gy;b++){const x=(b*d.gz+m)*d.gx*tn;for(let $=0;$<d.gx;$++){const k=x+$*tn,B=v+b*d.gx+$;g.values[B*yt]=d.values[k],g.values[B*yt+1]=d.values[k+1],g.values[B*yt+2]=d.values[k+2],d.values[k+3]>0?g.solid[B]=0:g.solid[B]=2}}Ar(g,w)}function f(g){for(let d=0;d<g.length;d+=fi)if(!Number.isFinite(g[d]))return!0;return!1}async function h(g,d,s,y={},w=!0){const{signal:v,onFirstWave:m,onProgress:b}=y;await a(v,w);const x=[];for(let C=Gt;C<=Cr;C++)x.push(C);let $=0,k=!1;const B=await u(g,s,{onScan(C){k||b==null||b({layersDone:$,scanShare:C})},onLayer(C){const P=C-Gt+1;k||P<=$||($=Math.min(P,x.length),b==null||b({layersDone:$,scanShare:1}))}});if(k=!0,!B)return null;if(f(B.values)){if(n.useF16&&w)return h(g,d,s,y,!1);throw new Error("Model v2 gave non-finite values on this graphics card.")}const S=Mn({width:B.gx,height:B.gy,originX:B.layout.gridX0,originY:B.layout.gridY0,theta:s},x,!1);for(const C of x)l(S,B,C);let M=e.wind.gradient_height_speed_m_s;return M==null&&(M=e.wind.reference_speed_m_s),m==null||m({volume:S,referenceSpeed:M}),S}async function p(g,d,s){await a(s);const y=t.inputPlan.stored,w=Math.ceil(t.patch*Math.SQRT2),v=new Sr(n,g,w,t.fno.store,t.inputPlan),m=v.gx*v.gy*y.length*4;let b=null;v.packGroup=async()=>{b=await n.readBack(m,(k,B)=>k.copyBufferToBuffer(v.sumsBuffer,0,B,0,m),"mddf download",k=>new Float32Array(k.slice(0)).map(S=>S/kr))};try{const k=v.planGroups([d],t.bufferLimit);v.allocate(k),await v.scan(k[0],()=>{})}finally{v.destroy()}if(!b)throw new Error("Model v2 MDDF could not be read.");const x=y.map(k=>k.part==="dc"?"upper_distance_"+k.part:"upper_distance_"+k.part+k.mode);return{values:b,ny:v.gy,nx:v.gx,margin:w,layerIndex:d,channels:x,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:h,readMddf:p,cancel(){t==null||t.cancel()},destroy:c}}const Re=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class De extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const he=()=>new De(Re.MODEL,"the model data does not match this page"),z=256;class Ft{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new De(Re.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(a=>setTimeout(a,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new De(Re.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Ft(i,r)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const r=Math.max(4,Math.ceil(e/4)*4),i=this.device.createBuffer({size:r,usage:t});return i.tracked=!0,i}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),a=new Int32Array(r),o=new Float32Array(r);e.forEach(([u,l],f)=>{u==="u"?i[f]=l:u==="i"?a[f]=l:o[f]=l});const c=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(c,0,r),c}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,a=z){this.dispatchGroups(e,t,r,...this.workgroups(i,a))}workgroups(e,t=z){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((a,o)=>({binding:o,resource:{buffer:a}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r){const i=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),a=this.device.createCommandEncoder();t(a,i),this.device.queue.submit([a.finish()]);try{await i.mapAsync(GPUMapMode.READ);const o=await r(i.getMappedRange());return i.unmap(),o}finally{this.free(i)}}}const $t=4,qe=1.5;function An(n,e,t){const r=(e-1)/2,i=(t-1)/2,a=Math.cos(n),o=Math.sin(n);return{theta:n,cX:r,cY:i,cos:a,sin:o,toWind:([c,u])=>{const l=c-r,f=u-i;return[r+l*a+f*o,i-l*o+f*a]},toCity:([c,u])=>{const l=c-r,f=u-i;return[r+l*a-f*o,i+l*o+f*a]}}}const oe=64,ee=180,Cn=1600,mi=640,$e=8,Y=32,ke=n=>n.toFixed(6),Se=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},yi=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,wi=()=>`
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
@compute @workgroup_size(${oe})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${oe}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${ke(qe)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${ke(qe)}, has1);
  let cutoff = ${ke(Cn)};
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
}`;function bi(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${oe})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${oe}u;
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
}`}const Ee=64,ce=8,We=Ee/ce,de=We*We,St=ce*ce,nn=Math.log2(Ee),rn=Math.log2(ce),at=ce-1,Rt="15u",kt="4u",Tn="0xfffu",Bt="2048",xi="4095",Dt="16u",on=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(Se).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${ke(ee)} / STEPS[c]));
}
@compute @workgroup_size(${oe})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${oe}u;
  if (g >= u.nTiles * ${de}u) { return; }
  let t = g / ${de}u;
  let b = g % ${de}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${de}u + b];
  let w = h & ${Rt};
  if (w == 0u) { return; }
  let base = i32((h >> ${kt}) & ${Tn}) - ${Bt};
  var wi = field[t] + (h >> ${Dt});
  let x0 = tx * ${Ee}u + (b % ${We}u) * ${ce}u;
  let y0 = ty * ${Ee}u + (b / ${We}u) * ${ce}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${St}u; j++) {
    let x = x0 + j % ${ce}u; let y = y0 + j / ${ce}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${Ee}u + (b % ${We}u) * ${ce}u;
  let y0 = ty * ${Ee}u + (b / ${We}u) * ${ce}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${St}u; j++) {
    let x = x0 + j % ${ce}u; let y = y0 + j / ${ce}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${de}u + b] = w | (u32(clamp(mn + ${Bt}, 0, ${xi})) << ${kt});`}
}`,vi=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${oe})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${oe}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${de}u; b++) {
    let h = headers[t * ${de}u + b];
    headers[t * ${de}u + b] = h | (local << ${Dt});
    local += ${St/32}u * (h & ${Rt});
  }
  tileWords[t] = local;
}`,Mi=n=>{const e=`array<f32, ${$e}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${yi}
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
@compute @workgroup_size(${oe})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${oe}u;
  let groupsPerPixel = (u.layerCount + ${$e-1}u) / ${$e}u;
  let cells = ${Y*Y}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${Y} + i32(cell % ${Y}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${Y} + i32(cell / ${Y}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${$e}u;
  let count = min(${$e}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${$e}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${ke(qe)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${ke($t)};
    let gyr = u.sinU / ${ke($t)};
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
    let cutoff = ${ke(Cn)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${$e}>;
    for (var k = 0u; k < ${$e}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${mi}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${$e}u; k++) {
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
}`},_i=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:a}=e,o=[["field","array<u32>"]];a&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),i&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const c=o.map(([f,h],p)=>`@group(0) @binding(${p}) var<storage, read> ${f}: ${h};`);c.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${n}>;`),c.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const u=(f,h)=>`(${f} - ${Se(h.center)}) / ${Se(h.scale)}`,l=e.inputs.map((f,h)=>{let p;if(f.source==="r1")if(f.part==="dc")p=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(f.signal,"dc",0)}u)`,f)};`;else{const g=e.storedIndex(f.signal,"re",f.mode),d=e.storedIndex(f.signal,"im",f.mode);p=`let re = sampleField(ry, rx, slot, ${g}u);
      let im = sampleField(ry, rx, slot, ${d}u);
      let angle = ${Se(f.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(f.part==="im"?"(re * s + im * c)":"(re * c - im * s)",f)};`}else if(f.source==="geo"){const g=f.index===0?"h / 100.0":"asinh((h - z) / 10.0)";p=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${g})`,f)};`}else f.source==="up"?p=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(f.index)}u)`,f)};`:f.source==="solid"?p=`let roofLayer = round(roofHeight(iy, ix) / ${ke(qe)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:f.axis==="y"?p=`value = (sy - u.centreY) / ${Se(f.scale)};`:f.axis==="z"?p=`value = (f32(layer) - ${Se(f.center)}) / ${Se(f.scale)};`:p=`value = (sx - ${Se(f.center)}) / ${Se(f.scale)};`;return`    case ${h}u: {
      ${p}
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
${c.join(`
`)}
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(Se).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${nn}u)) * ${t.tx}u + (x >> ${nn}u);
  let h = field[u.packTiles + t * ${de}u + ((y >> ${rn}u) & ${at}u) * ${We}u + ((x >> ${rn}u) & ${at}u)];
  let w = h & ${Rt};
  var q = i32((h >> ${kt}) & ${Tn}) - ${Bt};
  if (w > 0u) {
    let bit = (((y & ${at}u) * ${ce}u) + (x & ${at}u)) * w;
    let word = field[t] + (h >> ${Dt}) + (bit >> 5u);
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
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(Y)}u) >= u.upTW || u32(ty >> ${Math.log2(Y)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(Y)}u) * u.upTW + u32(tx >> ${Math.log2(Y)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${Y*Y}u + u32(ty & ${Y-1}) * ${Y}u + u32(tx & ${Y-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${a?`fn roofHeight(iy: f32, ix: f32) -> f32 {
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
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
  let z = (f32(layer) + 0.5) * ${ke(qe)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${l.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},$i=4,Si=3,ki=.016,Bi=256;class In{constructor(e,{layers:t,ny:r,nx:i},a,o,c){this.context=e,this.inputPlan=c,this.ny=r,this.nx=i,this.margin=a,this.gy=r+2*a,this.gx=i+2*a;const u=new Float32Array(this.gy*this.gx);for(let d=0;d<r;d++)for(let s=0;s<i;s++)u[(d+a)*this.gx+s+a]=t[d*i+s]*qe;this.heightBuffer=e.upload(u);const l=new Float32Array(ee),f=new Float32Array(ee);for(let d=0;d<ee;d++)l[d]=Math.cos(2*Math.PI*d/ee),f[d]=Math.sin(2*Math.PI*d/ee);this.cosT=l,this.sinT=f,this.scanPipeline=e.pipeline(wi()),this.accumulatePipeline=e.pipeline(bi(c.stored)),this.upWind=c.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(Mi(c.up)));const h=c.stored.map(d=>2*ki*d.scale),p=Math.ceil(this.gx/Ee),g=Math.ceil(this.gy/Ee);this.packed={steps:h,tx:p,ty:g},this.packHeaderPipeline=e.pipeline(on(c.stored,h,p,g,!1)),this.packPayloadPipeline=e.pipeline(on(c.stored,h,p,g,!0)),this.packTilePipeline=e.pipeline(vi()),this.assemblePipeline=e.pipeline(_i(o,c,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let a=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(a=Math.min(a,$i),i>t)throw new De(Re.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let c=0;c<e.length;c+=a){const u=e.slice(c,c+a),l=new Int32Array(Bi).fill(-1);u.forEach((f,h)=>{l[f]=h}),o.push({layers:u,slots:l,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots),r.layerBuffer=t.upload(new Uint32Array(r.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(ee*r),a=new ArrayBuffer(ee*32),o=new Uint32Array(a),c=new Int32Array(a),u=new Float32Array(a),l=new Float32Array(ee*4);let f=0;for(let h=0;h<ee;h++){const p=this.cosT[h],g=this.sinT[h],d=Math.abs(p)>=Math.abs(g),s=d?p:g,y=d?g:p,w=Math.abs(y/s),v=d?e:t,m=d?t:e;for(let $=0;$<v;$++)i[h*r+$]=Math.round(w*$);const b=i[h*r+v-1],x=m+b;f=Math.max(f,x),o[8*h]=d?1:0,c[8*h+1]=s>=0?1:-1,c[8*h+2]=y>=0?1:-1,c[8*h+3]=b,o[8*h+4]=x,o[8*h+5]=h*r,u[8*h+6]=$t*Math.sqrt(1+w*w),l.set([p,g,Math.cos(4*Math.PI*h/ee),Math.sin(4*Math.PI*h/ee)],4*h)}return this.offsetBuffer=this.context.upload(i),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(l),this.scanInfo={lineMax:f},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:r,gy:i}=this,{lineMax:a}=this.scanTables(),o=r*i,c=this.inputPlan.stored.length,u=e.layers.length,l=Math.ceil(u/2),f=Math.max(1,Math.min(ee,Math.floor(this.scanRawBytes/(l*o*4)))),h=f*l*o*4,p=u*o*c*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<p)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(p));const g=t.device.createCommandEncoder();g.clearBuffer(this.sumsBuffer,0,u*o*c*4),t.device.queue.submit([g.finish()]);const d=[];for(let s=0;s<ee;s+=f){if(this.destroyed)return;const y=Math.min(f,ee-s),w=t.device.createCommandEncoder(),v=w.beginComputePass(),m=t.uniform([["u",r],["u",i],["u",o],["u",0],["u",u],["u",l],["u",s],["u",y],["u",a],["u",0],["u",0],["u",0]]);t.dispatch(v,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],a*l*y,oe);const b=t.uniform([["u",o],["u",u],["u",l],["u",s],["u",y],["u",0],["u",0],["u",0]]);t.dispatch(v,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,b],o*u,oe),v.end(),t.device.queue.submit([w.finish()]),d.push(t.device.queue.onSubmittedWorkDone()),d.length>=Si&&await d.shift()}this.destroyed||(await this.packGroup(e,u,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:a,gy:o}=this,{tx:c,ty:u}=this.packed,l=t*this.inputPlan.stored.length*c*u,f=i.storage(l*de*4),h=i.storage(l*4),p=i.uniform([["u",a],["u",o],["u",r],["u",t],["u",l],["u",0],["u",0],["u",0]]),g=i.uniform([["u",l],["u",0],["u",0],["u",0]]),d=()=>{i.free(f),i.free(h)},s=($,k)=>{const B=$.beginComputePass();i.dispatch(B,this.packHeaderPipeline,[this.sumsBuffer,f,p],l*de,oe),i.dispatch(B,this.packTilePipeline,[f,h,g],l,oe),B.end(),$.copyBufferToBuffer(h,0,k,0,l*4)};let y;try{y=await i.readBack(l*4,s,$=>this.destroyed?null:new Uint32Array($.slice(0)))}catch($){throw d(),$}if(!y){d();return}const w=new Uint32Array(l);let v=l+l*de;for(let $=0;$<l;$++)w[$]=v,v+=y[$];i.free(e.field),e.field=i.storage(Math.max(4,v*4)),e.packTiles=l,i.write(e.field,w);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(f,0,e.field,l*4,l*de*4);const b=m.beginComputePass(),x=i.uniform([["u",a],["u",o],["u",r],["u",t],["u",l],["u",0],["u",0],["u",0]]);i.dispatch(b,this.packPayloadPipeline,[this.sumsBuffer,e.field,x],l*de,oe),b.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),d()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*ee,i=Math.round(r)%ee;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=An(e,this.nx,this.ny);let i=1/0,a=-1/0,o=1/0,c=-1/0;for(const p of[-.5,this.nx-.5])for(const g of[-.5,this.ny-.5]){const[d,s]=r.toWind([p,g]);i=Math.min(i,d),a=Math.max(a,d),o=Math.min(o,s),c=Math.max(c,s)}const u=Math.floor((i-t)/Y)*Y,l=Math.floor((o-t)/Y)*Y,f=Math.ceil((a+t+1-u)/Y),h=Math.ceil((c+t+1-l)/Y);return{theta:e,x0:u,y0:l,tw:f,th:h,table:new Int32Array(f*h).fill(-1),count:0}}ensureUpTiles(e,t,r,i){const{context:a}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,i));const c=[];for(const[m,b]of r){const x=Math.floor((b-o.x0)/Y),$=Math.floor((b+i-1-o.x0)/Y),k=Math.floor((m-o.y0)/Y),B=Math.floor((m+i-1-o.y0)/Y);if(x<0||k<0||$>=o.tw||B>=o.th)throw new Error("internal layout error");for(let S=k;S<=B;S++)for(let M=x;M<=$;M++){const C=S*o.tw+M;o.table[C]<0&&(o.table[C]=o.count+c.length/3,c.push(M,S,o.table[C]))}}const u=c.length/3;if(!u)return 0;const l=o.count,f=l+u,h=this.inputPlan.up.length,p=Y*Y,g=a.device.createCommandEncoder(),d=[];for(const m of e){const b=m.layers.length*p*h*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<f){const x=Math.min(o.tw*o.th,Math.max(f,Math.ceil(m.upCapacity*1.5))),$=a.storage(x*b);m.upTiles&&m.upCount&&g.copyBufferToBuffer(m.upTiles,0,$,0,m.upCount*b),m.upTiles&&d.push(m.upTiles),m.upTiles=$,m.upCapacity=x}m.upGrid=o,g.clearBuffer(m.upTiles,l*b,u*b),m.upCount=f}const s=a.upload(new Int32Array(c)),[y,w]=this.upwindDirection(t),v=g.beginComputePass();for(const m of e){const b=[this.heightBuffer,m.layerBuffer,m.upTiles,s];a.dispatch(v,this.alongPipeline,[...b,a.uniform([["u",this.gx],["u",this.gy],["u",u],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",y],["f",w],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*p*Math.ceil(m.layers.length/$e),oe)}v.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(a.free(this.upTableBuffer),this.upTableBuffer=a.storage(o.table.byteLength)),a.write(this.upTableBuffer,o.table),a.device.queue.submit([g.finish()]);for(const m of d)a.free(m);return a.free(s),o.count=f,u}assemble(e,t,r,i,a,o){var y,w,v,m;const{context:c,inputPlan:u,gx:l,gy:f}=this,h=t.length/3,p=c.upload(t),g=c.uniform([["u",h],["u",u.inputs.length],["u",a],["u",a],["u",l],["u",f],["u",0],["u",0],["u",l],["u",f],["u",l*f],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((y=this.upGrid)==null?void 0:y.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((v=this.upGrid)==null?void 0:v.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),d=[r.field];if(u.usesHeight&&d.push(this.heightBuffer),d.push(p,r.slotBuffer),u.up.length){if(r.upGrid!==this.upGrid)throw new Error("internal layout error");d.push(r.upTiles,this.upTableBuffer)}d.push(o,g);const s=e.beginComputePass();return c.dispatch(s,this.assemblePipeline,d,h*u.inputs.length*a*a),s.end(),p}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function Pi(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw he();const t=[],r=(u,l,f)=>t.findIndex(h=>h.key===`${u}:${l}:${f}`),i=(u,l,f)=>{r(u.signal,l,f)>=0||t.push({key:`${u.signal}:${l}:${f}`,signal:u.signal,part:l,mode:f,scale:u.scale})},a=[];for(const u of e){if(u.source==="r1")u.part==="dc"?i(u,"dc",0):(i(u,"re",u.mode),i(u,"im",u.mode));else if(u.source==="up")a.includes(u.index)||a.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw he();if(u.source==="geo"&&![0,1].includes(u.index)||u.source==="up"&&!(u.index>=0&&u.index<4))throw he()}for(const u of t)if(u.mode>2)throw he();const o=[...new Set(t.map(u=>u.signal))].sort();if(o.length!==1||o[0]!==0)throw he();const c=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:a,usesHeight:c}}function Pt(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let ze=null;function Ai(){if(ze)return ze;ze=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?ze[n]=e*r*2**-24:t===31?ze[n]=r?NaN:e*(1/0):ze[n]=e*(1+r/1024)*2**(t-15)}return ze}function Ci(n){const e=new Float32Array(n.length),t=Ai();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function Ti(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const a=r[0],o=a>>>16&32768,c=a>>>23&255;let u=a&8388607;if(c===255){e[i]=o|31744|(u?1:0);continue}const l=c-127+15;if(l>=31){e[i]=o|31744;continue}if(l<=0){if(l<-10){e[i]=o;continue}u|=8388608;const h=14-l;let p=u>>>h;u>>>h-1&1&&(p+=1),e[i]=o|p;continue}let f=l<<10|u>>>13;u&4096&&(f+=1),e[i]=o|f}return e}const Vt=`
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
`,Ii=`
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
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
}`;function sn(n,e,t){const{enable:r,load:i,save:a}=Ke(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${z}>;
@compute @workgroup_size(${z})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${z}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${z/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${z}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${z/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${z}u) {
    Y[base + i] = ${a("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const At=32,an=1e-5,ut=16;function Ke(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function Li(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:a,save:o}=Ke(e);return`${i}${Vt}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${ut}u;
var<workgroup> w: array<f32, ${ut*n.cinMax}>;
@compute @workgroup_size(${z})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/z}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/z}u;
  let p = (wg % ${r/z}u) * ${z}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${z}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${a("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${ut}>;
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
    Y[(b * u.cout + o) * ${r}u + p] = ${o("v")};
  }
}`}function Ei(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:a,save:o}=Ke(e);return`${i}${Vt}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${a("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${a("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function Fi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:a,load:o}=Ke(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
}`}function Ri(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
}`}function Di(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
}`}function Vi(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:a,save:o}=Ke(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
  Y[g] = ${o("acc * "+1/At)};
}`}function Oi(n){const{store:e}=n,{enable:t,load:r,save:i}=Ke(e);return`${t}${Vt}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function Ui(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:Li(n),gate:Ei(n),instanceNorm:sn(e,r,an),instanceNormScaled:sn(e,r,an/(At*At)),forwardColumns:Fi(n),rowMix:Ri(n),spectralMix:Di(n),inverseColumns:Vi(n),residual:Oi(n)}}function zi(n,e,t){const r=2*e,i=[];for(let g=0;g<e;g++)i.push(g);for(let g=n-e;g<n;g++)i.push(g);const a=new Float32Array(n*t),o=new Float32Array(n*t);for(let g=0;g<n;g++)for(let d=0;d<t;d++){const s=2*Math.PI*g*d/n;a[g*t+d]=Math.cos(s),o[g*t+d]=-Math.sin(s)}const c=new Float32Array(r*n),u=new Float32Array(r*n);for(let g=0;g<r;g++)for(let d=0;d<n;d++){const s=2*Math.PI*i[g]*d/n;c[g*n+d]=Math.cos(s),u[g*n+d]=-Math.sin(s)}const l=new Float32Array(n*r),f=new Float32Array(n*r);for(let g=0;g<n;g++)for(let d=0;d<r;d++){const s=2*Math.PI*i[d]*g/n;l[g*r+d]=Math.cos(s)/n,f[g*r+d]=Math.sin(s)/n}const h=new Float32Array(t*n),p=new Float32Array(t*n);for(let g=0;g<t;g++){const d=(g===0?1:2)/n;for(let s=0;s<n;s++){const y=2*Math.PI*g*s/n;h[g*n+s]=d*Math.cos(y),p[g*n+s]=-d*Math.sin(y)}}return{forwardCos:a,forwardSin:o,rowRe:c,rowIm:u,inverseRowRe:l,inverseRowIm:f,inverseColCos:h,inverseColSin:p}}function Ni(n,e,t){const r=n.tensors[t];if(!r)throw he();return Ci(new Uint16Array(e,r.offset,r.count))}class Gi{constructor(e,t,r,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.depth=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%z)throw he();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[l,f]of Object.entries(Ui(o)))this.pipelines[l]=e.pipeline(f);this.contractPipeline=e.pipeline(Ii);const c=l=>Ni(t,r,l);this.tables={};for(const[l,f]of Object.entries(zi(this.patch,this.modes1,this.modes2)))this.tables[l]=e.upload(f);this.weights={};const u=(l,f)=>{const h=c(f);this.weights[l]=this.store==="f16"?e.upload(Ti(h)):e.upload(h)};u("p1w","a.m1.weight"),u("p1b","a.m1.bias"),u("p2w","a.m2.weight"),u("p2b","a.m2.bias"),u("q1w","b.m1.weight"),u("q1b","b.m1.bias"),u("q2w","b.m2.weight"),u("q2b","b.m2.bias");for(let l=0;l<this.depth;l++)u(`m1w${l}`,`c.${l}.m1.weight`),u(`m1b${l}`,`c.${l}.m1.bias`),u(`m2w${l}`,`c.${l}.m2.weight`),u(`m2b${l}`,`c.${l}.m2.bias`),u(`lw${l}`,`d.${l}.weight`),u(`lb${l}`,`d.${l}.bias`);this.buildSpectralWeights(c),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.factored;let a=i.core_shape.slice(),o=t.upload(e(`${i.core}.re`)),c=t.upload(e(`${i.core}.im`));for(const l of i.factors){const[f,h]=l.shape;if(a[l.mode]!==h)throw he();const p=a.slice();p[l.mode]=f;const g=p.reduce(($,k)=>$*k,1),d=p.slice(l.mode+1).reduce(($,k)=>$*k,1),s=t.storage(g*4),y=t.storage(g*4),w=t.upload(e(`${l.name}.re`)),v=t.upload(e(`${l.name}.im`)),m=t.uniform([["u",p[0]],["u",p[1]],["u",p[2]],["u",p[3]],["u",p[4]],["u",l.mode],["u",f],["u",h],["u",d],["u",0],["u",g],["u",0]]),b=t.device.createCommandEncoder(),x=b.beginComputePass();t.dispatch(x,this.contractPipeline,[o,c,w,v,s,y,m],g),x.end(),t.device.queue.submit([b.finish()]),t.free(o),t.free(c),t.free(w),t.free(v),o=s,c=y,a=p}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(a.join()!==u.join())throw he();this.spectralRe=o,this.spectralIm=c}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,a=2*this.modes1,o=p=>t.storage(e*p*r*this.elementBytes),c=p=>t.storage(e*i*p*4),u=o(Math.max(4*i,this.inputChannels,this.outputChannels)),l=o(2*i),f=c(this.patch*this.modes2),h=c(this.patch*this.modes2);this.buffers={x:o(i),input:u,t2:u,gates:u,spectral:u,output:u,wide:l,t1:l,hidden:l,local:l,xRe:f,xIm:h,yRe:c(a*this.modes2),yIm:c(a*this.modes2),zRe:c(a*this.modes2),zIm:c(a*this.modes2),wRe:f,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/ut)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:a}=this,o=this.width,c=this.patch*this.patch,u=2*this.modes1,l=[],f=(p,g,d,s)=>{l.push(t.prepared(p,[...g,t.keptUniform(d)],t.workgroups(s)))},h=(p,g,d=i.instanceNorm)=>{l.push(t.prepared(d,[p,g],[e*o]))};f(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),f(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let p=0;p<this.depth;p++)h(r.x,r.t1),f(i.forwardColumns,[r.t1,a.forwardCos,a.forwardSin,r.xRe,r.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),f(i.rowMix,[r.xRe,r.xIm,a.rowRe,a.rowIm,r.yRe,r.yIm],[["u",e],["u",o],["u",u],["u",this.patch]],e*o*u*this.modes2),f(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",o],["u",2*p],["u",0]],e*o*u*this.modes2),f(i.rowMix,[r.zRe,r.zIm,a.inverseRowRe,a.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",o],["u",this.patch],["u",u]],e*o*this.patch*this.modes2),f(i.inverseColumns,[r.wRe,r.wIm,a.inverseColCos,a.inverseColSin,r.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*c),h(r.t2,r.t1,i.instanceNormScaled),f(i.conv1x1,[r.t1,this.weights[`m1w${p}`],this.weights[`m1b${p}`],r.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),f(i.gate,[r.gates,r.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*c),f(i.conv1x1,[r.hidden,this.weights[`m2w${p}`],this.weights[`m2b${p}`],r.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),f(i.conv1x1,[r.x,this.weights[`lw${p}`],this.weights[`lb${p}`],r.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),f(i.residual,[r.spectral,r.local,r.x],[["u",e*o*c],["u",p<this.depth-1?1:0],["u",0],["u",0]],e*o*c);return f(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),f(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),l}}const Hi=(n,e)=>`${n==="f16"?`enable f16;
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
@compute @workgroup_size(${z})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${z}u;
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
}`;function ln(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,a=[];for(let o=0;o<i;o++)a.push(n+o*t-Pt(o*(i*t-e)/(i-1)));return a}function Wi(n,e,t){let r=1/0,i=-1/0;const a=o=>{r=Math.min(r,o),i=Math.max(i,o)};for(let o=0;o<n.length;o++){const c=n[o],u=n[(o+1)%n.length];c[0]>=e&&c[0]<=t&&a(c[1]);for(const l of[e,t])(c[0]-l)*(u[0]-l)<0&&a(c[1]+(l-c[0])/(u[0]-c[0])*(u[1]-c[1]))}return r<=i?[r,i]:null}const Yi=(n,e)=>Math.max(1,Math.round(n*(1-e)));function Ln(n,e,t,r,i){const a=An(n,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(a.toWind),c=Math.floor(Math.min(...o.map(p=>p[0]))),u=Math.floor(Math.min(...o.map(p=>p[1]))),l=Math.ceil(Math.max(...o.map(p=>p[0])))-c+1,f=Math.ceil(Math.max(...o.map(p=>p[1])))-u+1,h=[];for(const p of ln(c,l,r,i)){const g=Wi(o,p,p+r-1);if(!g)continue;const d=Math.floor(g[0]),s=Math.max(r,Math.ceil(g[1])-d+1);for(const y of ln(d,s,r,i))h.push([y,p])}return{theta:n,gx:l,gy:f,gridX0:c,gridY0:u,patches:h,frame:a}}const Xi=8,En=new MessageChannel,Fn=[];En.port1.onmessage=()=>{var n;return(n=Fn.shift())==null?void 0:n()};const ji=()=>new Promise(n=>{Fn.push(n),En.port2.postMessage(0)}),qi=n=>Math.ceil(n*Math.SQRT2),Ki=128<<20,Zi=2,Ze=1e-6,Ne=6e4,Qi=4,Ji=48<<20,eo=16;function Ge(n,e,t){let r;const i=new Promise((a,o)=>{r=setTimeout(()=>o(new De(Re.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,i]).finally(()=>clearTimeout(r))}function to(n,e,t,r){let i=1/0,a=-1/0,o=1/0,c=-1/0,u=1/0,l=-1/0;for(const[f,h,p]of n)i=Math.min(i,f-e.gridY0),a=Math.max(a,f-e.gridY0+t),o=Math.min(o,p-e.gridX0),c=Math.max(c,p-e.gridX0+t),u=Math.min(u,h-r),l=Math.max(l,h-r+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,a),rx0:Math.max(0,o),rx1:Math.min(e.gx,c),rz0:u,rz1:l}}function no(n,e,t){const{gx:r,gy:i}=n,a=new Int32Array(i).fill(r),o=new Int32Array(i).fill(0);for(const[l,f]of n.patches){const h=Math.max(0,l-n.gridY0),p=Math.min(i,l-n.gridY0+e),g=Math.max(0,f-n.gridX0),d=Math.min(r,f-n.gridX0+e);for(let s=h;s<p;s++)g<a[s]&&(a[s]=g),d>o[s]&&(o[s]=d)}const c=new Uint32Array(3*i+1);let u=0;for(let l=0;l<i;l++){const f=Math.max(0,o[l]-a[l]);c[l]=u,c[i+1+l]=f?a[l]:0,c[2*i+1+l]=f,u+=f*t}return c[i]=u,{table:c,count:u}}function ro(n,e){const t=new Float32Array(n);for(let r=0;r<n;r++)t[r]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*r/(n-1)));return t}function io(n,e,t){const{gx:r,gy:i,gridX0:a,gridY0:o,patches:c}=n,u=new Float32Array(r*i),l=ro(e,t);for(const[f,h]of c)for(let p=0;p<e;p++){const g=f-o+p;if(g<0||g>=i)continue;const d=g*r,s=l[p];for(let y=0;y<e;y++){const w=h-a+y;w>=0&&w<r&&(u[d+w]+=s*l[y])}}return u}function oo(n,e,t,r){const{gx:i,gy:a,gridX0:o,gridY0:c,frame:{cX:u,cY:l,cos:f,sin:h}}=n,p=new Float32Array(i*a);for(let g=0;g<a;g++){const d=c+g-l;for(let s=0;s<i;s++){const y=o+s-u,w=u+y*f-d*h,v=l+y*h+d*f;if(w<-.5||v<-.5||w>r-.5||v>t-.5){p[g*i+s]=-1;continue}const m=Math.min(r-1,Math.max(0,Pt(w))),b=Math.min(t-1,Math.max(0,Pt(v)));p[g*i+s]=e[b*r+m]}}return p}class so{constructor(e,t,r,{batchSize:i}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,this.channels=t.model.output_channels,this.bufferLimit=Math.min(Ki,e.device.limits.maxStorageBufferBindingSize),this.network=new Gi(e,t,r,i),this.blendPipeline=e.pipeline(Hi(this.network.store,this.channels)),this.inputPlan=Pi(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,r){var a;this.cancel(),(a=this.city)==null||a.distanceField.destroy();const i=new In(this.context,{layers:e,ny:t,nx:r},qi(this.patch),this.network.store,this.inputPlan);i.scanRawBytes=Math.ceil(Ji*Math.min(1,this.batchSize/eo)),this.city={distanceField:i,ny:t,nx:r,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:r,patch:i}=this,a=`${e}:${t}`;return((o=r.frame)==null?void 0:o.key)!==a&&(r.frame={key:a,layout:Ln(e,r.nx,r.ny,i,t),final:null,roof:null}),r.frame}finalOf(e){return e.final??(e.final=io(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=oo(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,r=e.join();if(t.storedKey===r)return!1;const{distanceField:i}=t;i.releaseGroups(),i.upGrid=null,t.storedKey=null;const[a]=i.planGroups(e,this.bufferLimit);return i.allocate([a]),await Ge(i.scan(a),4*Ne,"the computation"),i.destroyed?!1:(t.group=a,t.storedKey=r,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>Ge(e.popErrorScope().catch(()=>null),Ne,"the graphics device"),r=await t(),i=await t();if(r)throw new De(Re.GPU,`out of graphics memory: ${r.message}`);if(i)throw new De(Re.GPU,`the graphics device refused the work: ${i.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,r){const i=++this.generation,a=()=>i!==this.generation,{context:o,city:c,patch:u}=this,{device:l}=o;this.openScopes();let f=null;const h=()=>this.closeScopes();try{const p=this.frameOf(t,Yi(u,r.overlap)),{layout:g}=p;if(await this.ensureLayers(e),a()||c.distanceField.destroyed)return null;const{distanceField:d,group:s}=c;if(d.upWind&&d.ensureUpTiles([s],t,g.patches,u)&&(await Ge(l.queue.onSubmittedWorkDone(),Ne,"the computation"),o.releaseScratch()),a())return null;const y=no(g,u,e.length),w=o.storage(y.count*(this.channels+1)*4);try{if(!await this.runNetwork(s,e,p,y,w,t,r,a))return null;f=await this.readField(e,g,y,w)}finally{o.free(w),o.releaseScratch()}}finally{await h()}return a()?null:f}async runNetwork(e,t,r,i,a,o,c,u){var b;const{context:l,patch:f}=this,{layout:h}=r,{device:p}=l,{distanceField:g}=this.city,d=l.upload(i.table),s=[],y=t[0],w=!!(c.shouldDraw&&c.onDraw)&&t.length===1;let v=null,m=null;w&&(v={final:this.finalOf(r),roof:this.roofOf(r)},(b=c.onStart)==null||b.call(c,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const x=t.length*h.patches.length;for(let $=0;$<x;){if(u())return!1;const k=Math.floor($/h.patches.length),B=$%h.patches.length,S=h.patches.slice(B,B+this.batchSize).map(([E,L])=>[E,t[k],L]);$+=S.length;const M=new Int32Array(S.flat()),C=p.createCommandEncoder(),P=g.assemble(C,M,e,o,f,this.network.inputBuffer),A=this.network.encode(C,S.length),T=to(S,h,f,y);if(this.encodeBlend(C,A,P,a,d,S.length,T,h,y),p.queue.submit([C.finish()]),l.free(P),l.releaseScratch(),s.push(p.queue.onSubmittedWorkDone()),s.length>Zi&&await Ge(s.shift(),Ne,"the computation"),w){m=ao(m,T);const E=$>=x;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(E||c.shouldDraw())){const L=m;m=null;const H=await this.readRect(L,h,i,a,v,t[0]);if(u())return!1;c.onDraw({...H,stride:this.channels+2,channels:this.channels,theta:o,readyCount:$,patchCount:x})}}}return await Ge(Promise.all(s),Ne,"the computation"),!0}finally{l.free(d)}}encodeBlend(e,t,r,i,a,o,c,u,l){const{context:f,patch:h}=this,{gy:p}=u,{ry0:g,ry1:d,rx0:s,rx1:y,rz0:w,rz1:v}=c;if(!(d>g&&y>s))return;const m=e.beginComputePass();f.dispatch(m,this.blendPipeline,[t,r,i,a,f.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",p],["u",l],["u",0],["u",0],["u",g],["u",w],["u",s],["u",d-g],["u",v-w],["u",y-s],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(d-g)*(v-w)*(y-s)),m.end()}async readRect({ry0:e,ry1:t,rx0:r,rx1:i},a,{table:o},c,{final:u,roof:l},f){const{gx:h,gy:p}=a,g=this.channels,d=(g+1)*4,s=i-r,y=t-e,w=($,k)=>{for(let B=e;B<t;B++){const S=o[p+1+B],M=o[2*p+1+B],C=Math.max(r,S),P=Math.min(i,S+M);P>C&&$.copyBufferToBuffer(c,(o[B]+C-S)*d,k,((B-e)*s+C-r)*d,(P-C)*d)}},v=await Ge(this.context.readBack(s*y*d,w,$=>new Float32Array($.slice(0))),Ne,"reading the wind back"),{center:m,scale:b}=this.metadata.target,x=new Float32Array(s*y*(g+2));for(let $=0;$<s*y;$++){const k=v[$*(g+1)+g],B=$*(g+2),S=k>Ze?1/k:0;for(let P=0;P<g;P++)x[B+P]=v[$*(g+1)+P]*S*b[P]+m[P];const M=(e+Math.floor($/s))*h+r+$%s,C=l[M];x[B+g]=C<0||k<=Ze?2:C>f?1:0,x[B+g+1]=u[M]>Ze?Math.min(1,k/u[M]):0}return{x0:r,y0:e,width:s,height:y,values:x}}async readField(e,t,{table:r,count:i},a){const{gx:o,gy:c}=t,u=this.channels,l=u+1,{center:f,scale:h}=this.metadata.target,p=(y,w)=>y.copyBufferToBuffer(a,0,w,0,w.size),g=await Ge(this.context.readBack(i*l*4,p,y=>new Float32Array(y.slice(0))),4*Ne,"reading the wind back"),d=e.map(y=>({layer:y,values:new Float32Array(o*c*u),weights:new Float32Array(o*c)}));let s=performance.now();for(let y=0;y<c;y++){performance.now()-s>Xi&&(await ji(),s=performance.now());const w=r[y],v=r[c+1+y],m=r[2*c+1+y];for(let b=0;b<e.length;b++){const{values:x,weights:$}=d[b];for(let k=0;k<m;k++){const B=(w+b*m+k)*l,S=y*o+v+k,M=g[B+u];if(M>Ze){$[S]=M;const C=1/M;for(let P=0;P<u;P++)x[S*u+P]=g[B+P]*C*h[P]+f[P]}else for(let C=0;C<u;C++)x[S*u+C]=f[C]}}}return{layout:t,gx:o,gy:c,layers:d}}async predict(e,t={}){const{city:r}=this,i=r.layerIndex,a=await this.predictLayers([i],e,t);if(!a)return null;const{gx:o,gy:c,layers:[{values:u,weights:l}]}=a,f=this.channels,h=this.roofOf(r.frame),p=new Uint8Array(o*c);let g=0;for(let d=0;d<o*c;d++){if(h[d]<0){p[d]=2;continue}if(l[d]<=Ze){p[d]=2;continue}p[d]=h[d]>i?1:0;for(let s=0;s<f;s++)if(!Number.isFinite(u[d*f+s])){g+=1;break}}return{values:u,solid:p,theta:e,height:c,width:o,nonFinite:g}}}function ao(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const un=16,cn=1,lo=.4,uo=6.278,co=1e-6;function fo(){let n=null,e=null,t=null,r=null,i=null,a=0;async function o({allowF16:h=!0,batchSize:p=un}={},g){if(!t){const d="/cityffdv2-demo/flume/model-v3/",s=await Promise.all(["metadata.json","weights.bin"].map(async y=>{const w=await fetch(d+y,{signal:g});if(!w.ok)throw new Error("Could not load model v3 "+y+" (HTTP "+w.status+").");return y.endsWith(".bin")?w.arrayBuffer():w.json()}));t=s[0],r=s[1]}n&&(h||!n.useF16)&&e.batchSize===p||(c(),n=await Ft.create({allowF16:h}),e=new so(n,t,r,{batchSize:p}))}function c(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,i=null}function u(h,p,g){const d=p.gx*p.gy,s=e.roofOf(e.city.frame),y=new Uint8Array(d);for(let b=0;b<d;b++)s[b]<0||g.weights[b]<=co?y[b]=2:s[b]>g.layer?y[b]=1:y[b]=0;const w={width:p.gx,height:p.gy,originX:p.layout.gridX0,values:g.values,solid:y},v=h.plan.indexOf(g.layer);Tr(h,v,w);let m=0;for(let b=0;b<d;b++)y[b]===0&&!Number.isFinite(g.values[b*5])&&m++;return m}async function l(h,p,g,{signal:d,onFirstWave:s,onMoreLayers:y}={}){a++;const w=a,v=()=>w!==a||!!(d!=null&&d.aborted);let m=!0,b=un,x=Qi,$=!1,k=null,B=0;for(;B<p.length;){if(v())return null;const S=p.slice(B,B+x);let M=null;try{await o({allowF16:m,batchSize:b},d),h!==i&&(e.setCity(h.layers,h.ny,h.nx),i=h);const{gx:A,gy:T}=Ln(g,h.nx,h.ny,e.patch,e.patch),E=Math.max(1,Math.floor(e.bufferLimit/(A*T*(e.channels+1)*4)));M=await e.predictLayers(S.slice(0,E),g,{overlap:lo})}catch(A){if(v())return null;if($){if(b<=cn&&x===1)throw A;x=Math.max(1,Math.floor(x/2)),b=Math.max(cn,Math.floor(b/2))}$=!0,c();continue}if(!M||v())return null;$=!1,k===null&&(k=Mn({width:M.gx,height:M.gy,originX:M.layout.gridX0,originY:M.layout.gridY0,theta:g},p,!1));let C=0;for(const A of M.layers)C+=u(k,M,A);if(C>0){if(!n.useF16||!m)throw new De(Re.GPU,"Model v3 gave non-finite values on this graphics card.");m=!1;continue}const P=B===0;B+=M.layers.length,P?s==null||s({volume:k,referenceSpeed:uo}):y==null||y()}return e==null||e.releaseLayers(),k}async function f(h,p,g){await o({},g);const d=e.inputPlan.stored,s=Math.ceil(e.patch*Math.SQRT2),y=new In(n,{layers:h.layers,ny:h.ny,nx:h.nx},s,e.network.store,e.inputPlan),w=y.gx*y.gy*d.length*4;let v=null;y.packGroup=async()=>{v=await n.readBack(w,(x,$)=>x.copyBufferToBuffer(y.sumsBuffer,0,$,0,w),x=>new Float32Array(x.slice(0)).map(k=>k/ee))};try{const x=y.planGroups([p],e.bufferLimit);y.allocate(x),await y.scan(x[0])}finally{y.destroy()}if(!v)throw new Error("Model v3 MDDF could not be read.");const m=d.map(x=>x.part==="dc"?"upper_distance_"+x.part:"upper_distance_"+x.part+x.mode);return{values:v,ny:y.gy,nx:y.gx,margin:s,layerIndex:p,channels:m,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:l,readMddf:f,cancel(){a++,e==null||e.cancel()},destroy:c}}const dn={v2:hi,v3:fo};function go(){const n=Tt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=!1,r=0;const i={},a=new AbortController;function o(){try{for(const d of Object.values(i))d.destroy()}finally{for(const d of Object.keys(i))delete i[d]}}async function c(){if(e)return;const s=await fetch("/cityffdv2-demo/flume/colorbar.json",{signal:a.signal});if(!s.ok)throw new Error("Could not load colorbar.json (HTTP "+s.status+").");e=await s.json()}async function u(d,s){if(t||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0,r++;const y=r,w=()=>t||y!==r;try{if(!dn[s.model])throw new Error("Unknown model: "+s.model+".");return n.stage="Loading model",await c(),w()?null:await l(d,s,w,y)}catch(v){return!t&&y===r&&(n.error=v.message,n.stage="Prediction failed",n.prediction=null),o(),null}finally{t?o():n.busy=!1}}async function l(d,s,y,w){const v=Et[s.model];if(!i[s.model]){const S=dn[s.model];i[s.model]=S()}const m=i[s.model];n.stage=v+" · predicting the first layers";const b=performance.now();let x=null;const $=s.layers.length;function k(S){const M=S/$,C=Math.round(M*100);n.progress=M,n.stage=v+" · "+S+" / "+$+" layers ("+C+"%)"}if(!await m.run(d,s.layers,s.thetaRad,{signal:a.signal,onFirstWave({volume:S,referenceSpeed:M}){y()||(x={...S,grid:d,settings:{...s},referenceSpeed:M,modelLabel:v,colorbar:e,patchCount:0,milliseconds:performance.now()-b,inputRevision:w},n.prediction=je(x),n.layersReady=S.layers.length,k(S.layers.length))},onProgress({layersDone:S,scanShare:M}){if(!(y()||!x)){if(M<1){n.progress=S/$,n.stage=v+" · preparing building distances (MDDF) "+Math.round(M*100)+"%";return}k(S)}},onMoreLayers(){y()||!x||(x.milliseconds=performance.now()-b,n.layersReady=x.layers.length,k(x.layers.length))}})||y())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",x}async function f(d){let s=null;if(n.prediction&&(s=i[n.prediction.settings.model]),!s||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{return await s.readMddf(n.prediction.grid,d,a.signal)}finally{n.downloading=!1,t&&o()}}function h(){n.busy&&r++;for(const d of Object.values(i))d.cancel()}function p(){r++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function g(){t=!0,r++,a.abort(),!n.busy&&!n.downloading&&o()}return Ct(g),{state:n,run:u,readMddf:f,cancel:h,invalidate:p,dispose:g}}const Te="flume-retained-buildings",fn="flume-retained-selected";function po(n,e){let t=null,r=null,i=null,a=null,o=null;function c(){if(t){n.getSource(Te)?i!==a&&n.getSource(Te).setData(i):n.addSource(Te,{type:"geojson",data:i,maxzoom:22,tolerance:0}),a=i;for(const[p,g]of[[Te,!1],[fn,!0]]){let d=t.filters.surroundings,s=t.surroundingsOpacity,y=Be().previewBuildings;g&&(d=t.filters.selected,s=1,y=Be().selectedBuildings),n.getLayer(p)?n.setFilter(p,d):n.addLayer({id:p,type:"fill-extrusion",source:Te,maxzoom:Je,filter:d,layout:{visibility:"visible"},paint:{"fill-extrusion-color":y,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":s}}),n.setPaintProperty(p,"fill-extrusion-opacity",s);let w="none";(g||t.showSurroundings)&&(w="visible"),n.setLayoutProperty(p,"visibility",w)}}}function u(){if(!(!t||n.getZoom()<Je||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const p=t.dataZoom??Je,d=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(s=>!s.tile||s.tile.z>=p);i=ct([...i.features,...d]),c()}catch(p){e==null||e(p)}}function l(p){!t||p!=null&&p.sourceId&&p.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(u,120))}function f(p){var s;const g=r!==p.collection,d=(t==null?void 0:t.sourceId)!==p.sourceId||(t==null?void 0:t.sourceLayer)!==p.sourceLayer;if(g||d){let y=(s=p.collection)==null?void 0:s.features;y==null&&(y=[]),i=ct(y),r=p.collection}t=p,c(),l()}function h(){clearTimeout(o),t=null,r=null,i=null,a=null;for(const p of[fn,Te])n.getLayer(p)&&n.removeLayer(p);n.getSource(Te)&&n.removeSource(Te)}return n.on("sourcedata",l),n.on("moveend",l),{update:f,clear:h,dispose(){n.off("sourcedata",l),n.off("moveend",l),h()}}}function ho(n,e){const{nx:t,ny:r,groundLayers:i}=n,a=ye,o=(u,l)=>i[l*t+u]*Pe>e,c=[];for(let u=1;u<r;u++){let l=-1;for(let f=0;f<=t;f++){const h=f<t&&o(f,u-1)!==o(f,u);h&&l<0&&(l=f),!h&&l>=0&&(c.push(l*a,u*a,f*a,u*a),l=-1)}}for(let u=1;u<t;u++){let l=-1;for(let f=0;f<=r;f++){const h=f<r&&o(u-1,f)!==o(u,f);h&&l<0&&(l=f),!h&&l>=0&&(c.push(u*a,l*a,u*a,f*a),l=-1)}}return new Float32Array(c)}const Ie=4,mo=5,yo=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,wo=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function bo(n,e,t){var Ae;let r,i,a,o,c,u,l=null,f,h,p=null,g,d,s,y,w="",v=0;const m=new Ot,b=new Ot,x=((Ae=n.grid.terrain)==null?void 0:Ae.lowM)??0,$=bn.MercatorCoordinate.fromLngLat(n.grid.origin,x),k=$.meterInMercatorCoordinateUnits(),[B,S]=Ht(n,n.width/2-.5,n.height/2-.5),M=[new it(new we(1,0,0),0),new it(new we(-1,0,0),n.grid.nx*ye),new it(new we(0,1,0),0),new it(new we(0,-1,0),n.grid.ny*ye)],C=()=>Number(e.speedMps)/n.referenceSpeed,P=new Map;function A(O){let U=1/0,W=-1/0;for(let G=0;G<n.layers.length;G++){const K=O+"@"+n.slots[G];P.has(K)||P.set(K,Wt(Ur(n,G),O));const[re,se]=P.get(K);U=Math.min(U,re),W=Math.max(W,se)}return[U,W]}let T=[0,0],E=null,L=null;function H(O,U){var ie;const W=dt(n.grid.origin),G=((ie=n.grid.terrain)==null?void 0:ie.lowM)??0,K=Math.cos(n.theta),re=Math.sin(n.theta),se=l.attributes.position,Q=Math.ceil((O-1)/Ie)+1,Oe=Math.ceil((U-1)/Ie)+1,be=new Float32Array(Q*Oe);for(let te=0;te<Oe;te++)for(let J=0;J<Q;J++){const me=Math.min(U-1,te*Ie),Ce=Math.min(O-1,J*Ie),xe=me*O+Ce,ve=se.getX(xe),X=se.getY(xe),fe=W([B+ve*K-X*re,S+ve*re+X*K]),ue=r.queryTerrainElevation(fe,{exaggerated:!1});ue==null?be[te*Q+J]=NaN:be[te*Q+J]=ue-G}return{values:be,columns:Q,rows:Oe}}function le(O){const{width:U,height:W,liftM:G}=O;if(U<2||W<2)return u;l==null&&(l=new ht(U*ye,W*ye,U-1,W-1)),E=O,L=H(U,W);const{values:K,columns:re,rows:se}=L,Q=(ie,te)=>K[te*re+ie],Oe=O.settings.heightM,be=l.attributes.position;for(let ie=0;ie<W;ie++)for(let te=0;te<U;te++){const J=Math.min(Math.max(0,re-2),Math.floor(te/Ie)),me=Math.min(Math.max(0,se-2),Math.floor(ie/Ie)),Ce=Math.min(re-1,J+1),xe=Math.min(se-1,me+1),ve=Math.min(1,te/Ie-J),X=Math.min(1,ie/Ie-me),fe=(Q(J,me)*(1-ve)+Q(Ce,me)*ve)*(1-X)+(Q(J,xe)*(1-ve)+Q(Ce,xe)*ve)*X;let ue;Number.isFinite(fe)?ue=Math.max(0,fe+zr-Oe):ue=G[(W-1-ie)*U+te],be.setZ(ie*U+te,ue)}return be.needsUpdate=!0,l}let D=!1;const ne=()=>{D=!0};function ge(){if(!D||!r||!E||(c==null?void 0:c.geometry)!==l)return;D=!1;const O=L.values;H(E.width,E.height).values.every((G,K)=>Number.isNaN(G)&&Number.isNaN(O[K])||Math.abs(G-O[K])<.05)||(le(E),r.triggerRepaint())}function Ve(){if(!i)return;const O=tt.find(X=>X.id===e.variable)??tt[0];s==null||s.dispose(),s=new Ut(Lr(O.ramp),256,1,zt),s.colorSpace=gr,s.minFilter=ot,s.magFilter=ot,s.needsUpdate=!0;let U=e.plane;e.plane==="3d"&&(U="h");const W=Er(n,e.planeOffsetM),G=!!(e.sliceAboveGround&&n.grid.groundLayers),K=e.view==="slice"||e.view==="particles"&&e.particles==="white";c.visible=K&&U==="h",f.visible=K&&U==="v";let re;U==="v"?re="v"+W:G?re=e.sliceHeightM+" above ground":re=e.sliceHeightM+"";const se=O.id+"@"+re,Q=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white";if((K||!Q)&&se!==w){let X;if(U==="v"){X=Fr(n,W);const[fe,ue]=Ht(n,(n.width-1)/2,W);f.position.set(fe,ue,X.height*Pe/2)}else{const fe=_n(n,Number(e.sliceHeightM),G);X=Rr(fe,mo),c.position.z=X.settings.heightM,G?c.geometry=le(X):c.geometry=u}d==null||d.dispose(),d=new Ut(Dr(X,O.id),X.width,X.height,zt,pr),d.minFilter=ot,d.magFilter=ot,d.needsUpdate=!0,T=Wt(X,O.id),w=se}if(h.visible=c.visible&&!G&&!!n.grid.groundLayers,h.visible){const X=c.position.z;if(X!==p){const fe=ho(n.grid,X),ue=new Float32Array(fe.length/2*3);for(let Ue=0;Ue<fe.length/2;Ue++)ue[Ue*3]=fe[Ue*2],ue[Ue*3+1]=fe[Ue*2+1],ue[Ue*3+2]=X+.3;h.geometry.dispose(),h.geometry=new Mt,h.geometry.setAttribute("position",new xn(ue,3)),p=X}}const be=C();let ie=be;O.id==="T"&&(ie=1),O.id==="tke"&&(ie=be*be);let te=T;Q&&(te=A(O.id));let J=Vr(te,O.id);if(J==null){const X=n.settings.layers.at(-1);J=Or(n.colorbar,O.id,X,"99.9",1)}y.uniforms.field.value=d??null,y.uniforms.palette.value=s,y.uniforms.range.value.set(...J),g.enabled=e.view!=="off",g.mesh.visible=g.enabled;const me=e.view==="slice"||e.particles==="white";let Ce=e.plane;me&&(Ce=U),Ce==="h"?g.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:me,aboveGround:G}):Ce==="v"?g.setPlane({kind:"v",row:W,flat:me}):g.setPlane(null);let xe=Yt[e.density];xe==null&&(xe=Yt.medium),g.setCount(xe);let ve=e.particles;me&&(ve="white"),g.setColouring(ve,O.id,s,J),t==null||t({low:J[0]*ie,high:J[1]*ie,...O}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:Ve,refresh(){w="",Ve()},onAdd(O,U){r=O,a=new ir,o=new or,i=new sr({canvas:r.getCanvas(),context:U,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,y=new ar({vertexShader:yo,fragmentShader:wo,uniforms:{field:{value:null},palette:{value:null},range:{value:new ur(0,1)}},transparent:!0,depthWrite:!1,side:lr,clipping:!0,clippingPlanes:M}),u=new ht(n.width*ye,n.height*ye),c=new vt(u,y),c.position.set(B,S,0),c.rotation.z=n.theta,c.frustumCulled=!1,a.add(c),h=new cr(new Mt,new dr({color:Be().sliceCut})),h.frustumCulled=!1,h.visible=!1,a.add(h);const W=((n.plan??n.layers).at(-1)+1)*Pe,G=new ht(n.width*ye,W);G.rotateX(Math.PI/2),f=new vt(G,y),f.rotation.z=n.theta,f.frustumCulled=!1,a.add(f),g=new fr(Ir(n)),a.add(g.mesh),r.on("moveend",ne),r.on("sourcedata",ne),r.on("idle",ge),Ve()},render(O,U){const W=performance.now();let G=0;v&&(G=(W-v)/1e3),G=Math.min(G,.05),v=W,m.makeTranslation($.x,$.y,$.z).scale(new we(k,-k,k)),o.projectionMatrix.copy(b.fromArray(U)).multiply(m),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),g.setViewport(O.drawingBufferWidth,O.drawingBufferHeight);const K=g.enabled&&!e.paused;K&&g.step(G,C()),i.resetState(),i.setViewport(0,0,O.drawingBufferWidth,O.drawingBufferHeight),i.render(a,o),K&&r.triggerRepaint()},onRemove(){r==null||r.off("moveend",ne),r==null||r.off("sourcedata",ne),r==null||r.off("idle",ge),d==null||d.dispose(),s==null||s.dispose(),u==null||u.dispose(),l==null||l.dispose(),f==null||f.geometry.dispose(),h==null||h.geometry.dispose(),h==null||h.material.dispose(),y==null||y.dispose(),g==null||g.dispose(),i==null||i.dispose(),r=null,i=null}}}const xt="flume-field",Qe="flume-buildings";function Rn(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function xo(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function vo(n,e,t){let r=null,i=null;const a=new Map,o=po(n,t);function c(){n.getLayer(xt)&&n.removeLayer(xt),r=null}function u(){for(const[h,p]of a)n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",p.visibility),n.setPaintProperty(h,p.property,p.opacity),n.setFilter(h,p.filter),n.setLayerZoomRange(h,p.minzoom,p.maxzoom),p.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",p.color));a.clear()}function l(h){for(const p of n.getStyle().layers){if(p.id.startsWith("flume-"))continue;const g=xo(p);if(!g)continue;const d=p.type==="fill-extrusion";let s;d&&(s=n.getPaintProperty(p.id,"fill-extrusion-color")??null),a.set(p.id,{visibility:n.getLayoutProperty(p.id,"visibility")??"visible",property:g,opacity:n.getPaintProperty(p.id,g)??1,filter:n.getFilter(p.id)??null,minzoom:p.minzoom??0,maxzoom:p.maxzoom??24,color:s}),n.setPaintProperty(p.id,g,Xt),d&&n.setPaintProperty(p.id,"fill-extrusion-color",Be().previewBuildings),h||n.setLayoutProperty(p.id,"visibility","none")}}function f({source:h,input:p,prediction:g,preview:d,display:s}){if(g!==i&&(c(),i=g),!g&&n.getLayer(Qe)&&n.removeLayer(Qe),u(),er(n,Rn(h)),!g){o.clear(),_t(n,d);return}_t(n,null);let y="city-concordia-3d";h==="osm"&&(y="city-osm-3d");const w=tr.find(m=>m.id===y),v=$n(p.buildings.features,n.getFilter(w.id));l(s.showSurroundings),n.setFilter(w.id,v.surroundings),n.setLayerZoomRange(w.id,Je,w.layer.maxzoom??24),n.getLayer(Qe)?n.setFilter(Qe,v.selected):n.addLayer({...w.layer,id:Qe,minzoom:Je,layout:{visibility:"visible"},filter:v.selected,paint:{...w.layer.paint,"fill-extrusion-color":Be().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:w.layer.source,sourceLayer:w.layer["source-layer"],collection:d,dataZoom:p.dataZoom,filters:v,surroundingsOpacity:Xt,showSurroundings:s.showSurroundings}),n.getLayer(xt)||(r=bo(g,s,e),n.addLayer(r)),n.triggerRepaint()}return{update:f,configure(){r==null||r.configure()},refresh(){r==null||r.refresh()},beforeStyleChange(){c(),i=null,a.clear()},dispose(){c(),o.dispose(),a.clear()}}}const Xe="flume-terrain-dem",lt="flume-terrain-hillshade";function Mo(n,e){var t,r,i;if(e){if(n.getSource(Xe)||n.addSource(Xe,{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),!n.getLayer(lt)){const a=(t=n.getStyle().layers.find(o=>o.type==="symbol"))==null?void 0:t.id;n.addLayer({id:lt,type:"hillshade",source:Xe,paint:{"hillshade-exaggeration":.8,"hillshade-shadow-color":"#1b1f24","hillshade-highlight-color":"#f4f1e8","hillshade-accent-color":"#5b5544"}},a)}((r=n.getTerrain())==null?void 0:r.source)!==Xe&&n.setTerrain({source:Xe,exaggeration:1})}else((i=n.getTerrain())==null?void 0:i.source)===Xe&&n.setTerrain(null),n.getLayer(lt)&&n.removeLayer(lt)}function Ye(n,e,t,r,i){let a=1;for(const u of t)a*=u;if(a!==e.length)throw new Error("Invalid "+n+" shape.");const o=new Uint8Array(e.length*4),c=new DataView(o.buffer);for(let u=0;u<e.length;u++){if(!Number.isFinite(e[u]))throw new Error("Cannot export non-finite "+n);c.setFloat32(u*4,e[u],!0)}return{name:n,content:o,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function Dn(n,e,t,r,i=null){var o,c,u;const a={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((o=n.selection)==null?void 0:o.geometry)??((c=n.polygon)==null?void 0:c.geometry),computationalDomain:(u=n.polygon)==null?void 0:u.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:r.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(a.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(l=>(l+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),a.files=Object.fromEntries(t.map(l=>[l.name,l.description])),[{name:"metadata.json",content:JSON.stringify(a,null,2)},...t.map(({name:l,content:f})=>({name:l,content:f}))]}function Vn(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(c=>o+"_"+c)),i=Ye("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),a=e.channels??r;return[Ye("mddf.f32.bin",e.values,[e.ny,e.nx,a.length],a,"m"),i]}function _o(n){const e=Sn(n),t=n.width*n.height,r=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t);for(let l=0;l<t;l++){const f=l*5;r.set([e[f],e[f+2],e[f+1]],l*3),i[l]=e[f+3],a[l]=e[f+4],o[l]=Math.hypot(e[f],e[f+1],e[f+2])}const c=[n.height,n.width],u=[Ye("velocity.f32.bin",r,[...c,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:c,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Ye("speed.f32.bin",o,c,["speed"],"m/s")];return n.settings.model!=="v2"&&u.push(Ye("temperature.f32.bin",i,c,["T"],"degC"),Ye("tke.f32.bin",a,c,["TKE"],"m2/s2")),u}function $o(n){const e=n.width*n.height,t=n.settings.layers.length,r=Sn(n),i=new Float32Array(t*e*3);for(let a=0;a<t*e;a++)i.set([r[a*5],r[a*5+2],r[a*5+1]],a*3);return[Ye("velocity3d.f32.bin",i,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function So(n,e,t){return Dn(n,t,Vn(t,e),e)}function ko(n,e,t,r=null){const i=[...Vn(t,e),..._o(t)];return r&&i.push(...$o(r)),i.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),Dn(n,t,i,e,r)}class Bo{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let a=0;e.traverse(function(w){if(w.isMesh){const v=w.geometry,m=v.index,b=v.getAttribute("position");a+=m!==null?m.count/3:b.count/3,i.push({object3d:w,geometry:v})}});let o,c=80;if(r===!0){const w=a*2+a*3*4*4+80+4,v=new ArrayBuffer(w);o=new DataView(v),o.setUint32(c,a,!0),c+=4}else o="",o+=`solid exported
`;const u=new we,l=new we,f=new we,h=new we,p=new we,g=new we;for(let w=0,v=i.length;w<v;w++){const m=i[w].object3d,b=i[w].geometry,x=b.index,$=b.getAttribute("position");if(x!==null)for(let k=0;k<x.count;k+=3){const B=x.getX(k+0),S=x.getX(k+1),M=x.getX(k+2);d(B,S,M,$,m)}else for(let k=0;k<$.count;k+=3){const B=k+0,S=k+1,M=k+2;d(B,S,M,$,m)}}return r===!1&&(o+=`endsolid exported
`),o;function d(w,v,m,b,x){u.fromBufferAttribute(b,w),l.fromBufferAttribute(b,v),f.fromBufferAttribute(b,m),x.isSkinnedMesh===!0&&(x.applyBoneTransform(w,u),x.applyBoneTransform(v,l),x.applyBoneTransform(m,f)),u.applyMatrix4(x.matrixWorld),l.applyMatrix4(x.matrixWorld),f.applyMatrix4(x.matrixWorld),s(u,l,f),y(u),y(l),y(f),r===!0?(o.setUint16(c,0,!0),c+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function s(w,v,m){h.subVectors(m,v),p.subVectors(w,v),h.cross(p).normalize(),g.copy(h).normalize(),r===!0?(o.setFloat32(c,g.x,!0),c+=4,o.setFloat32(c,g.y,!0),c+=4,o.setFloat32(c,g.z,!0),c+=4):(o+="	facet normal "+g.x+" "+g.y+" "+g.z+`
`,o+=`		outer loop
`)}function y(w){r===!0?(o.setFloat32(c,w.x,!0),c+=4,o.setFloat32(c,w.y,!0),c+=4,o.setFloat32(c,w.z,!0),c+=4):o+="			vertex "+w.x+" "+w.y+" "+w.z+`
`}}}async function Po(n,e,t={}){var w,v;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((w=e.layers)==null?void 0:w.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:a,spacingM:o,layerSpacingM:c}=e,u=(m,b)=>m<0||b<0||m>=r||b>=i?0:a[b*r+m],l=async()=>{var m;if(await new Promise(b=>setTimeout(b,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let f=0;for(let m=0;m<i;m++){m%32===0&&await l();for(let b=0;b<r;b++){const x=u(b,m);if(!Number.isInteger(x)||x<0||x>160)throw new Error("Invalid MDDF building height.");x&&(f+=2+ +(x>u(b-1,m))+ +(x>u(b+1,m))+ +(x>u(b,m-1))+ +(x>u(b,m+1)))}}if(!f)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(f*18);let p=0;const g=(m,b,x,$)=>{for(const k of[m,b,x,m,x,$])h.set(k,p),p+=3};for(let m=0;m<i;m++){m%32===0&&await l();for(let b=0;b<r;b++){const x=u(b,m)*c;if(!x)continue;const $=b*o,k=$+o,B=-m*o,S=B-o;g([$,x,B],[k,x,B],[k,x,S],[$,x,S]),g([$,0,B],[$,0,S],[k,0,S],[k,0,B]);let M=u(b-1,m)*c;x>M&&g([$,M,S],[$,M,B],[$,x,B],[$,x,S]),M=u(b+1,m)*c,x>M&&g([k,M,B],[k,M,S],[k,x,S],[k,x,B]),M=u(b,m-1)*c,x>M&&g([$,M,B],[k,M,B],[k,x,B],[$,x,B]),M=u(b,m+1)*c,x>M&&g([k,M,S],[$,M,S],[$,x,S],[k,x,S])}}const d=new Mt;d.setAttribute("position",new xn(h,3));const s=new vt(d);let y;try{y=new Bo().parse(s,{binary:!0}).buffer}finally{d.dispose(),s.material.dispose()}return[{name:"mddf-model.stl",content:y},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(v=n.polygon)==null?void 0:v.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:o,layerSpacingM:c,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:f*2}}},null,2)}]}const On=Symbol("flume");function pt(){return Un(On)}function Ao(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=et(null),t=et(!1);let r=null,i=null,a=null,o=!1,c=!1;const u=500;let l=null;const f=()=>r,{currentPresetName:h}=gn();jt(h.value);const p=nr({getMap:f,accessToken:n}),g=ri({getMap:f,ready:t,onChange:w,accessToken:n}),d=go(),s=Tt({mapCreated:!1,mapReady:t,error:"",area:g.state,grid:null,terrain:!1,terrainLoading:!1,wind:{...qt},engine:d.state,display:{variable:"speed",speedMps:qt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:Gr,sliceAboveGround:!0,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),y=q(()=>s.downloading||s.engine.downloading||s.area.loading);function w(){clearTimeout(l),c=!1,m++,s.terrainLoading=!1,s.grid=null,s.legend=null,s.error="",s.downloadError="",d.invalidate(),B()}let v=null,m=0;async function b(){if(y.value)return;const P=await g.captureRegion();if(!(!P||o))try{$n(P.buildings.features),v=P,await x(P)}catch(A){s.error=A.message}}async function x(P){m++;const A=m;let T=Hr(P);if(s.terrain){s.terrainLoading=!0;try{const E=await ai(T,n);T=li(T,E)}finally{A===m&&(s.terrainLoading=!1)}}A!==m||o||(s.grid=je(T),s.error="",$())}pe(()=>s.terrain,async()=>{if(!s.grid||!v)return;const P=v;w();try{await x(P)}catch(A){s.error=A.message}});function $(){clearTimeout(l),l=setTimeout(()=>k(),Wr)}async function k(){if(clearTimeout(l),!(o||!s.grid||y.value)){if(s.engine.busy){c=!0,d.cancel();return}try{const P=kn(s.grid,s.wind.model),T={...Nr(s.wind),model:s.wind.model,layers:P};s.display.speedMps=T.speedMps,s.error="",await d.run(s.grid,T)}catch(P){s.error=P.message}c&&!o&&(c=!1,await k())}}function B(){!r||!t.value||(Mo(r,s.terrain),i==null||i.update({source:s.area.source,input:s.area.snapshot,prediction:s.engine.prediction,preview:g.getPreview(),display:s.display}))}async function S(P){if(!(y.value||!s.grid)&&!(P!=="model"&&(s.engine.busy||!s.engine.prediction))){s.downloading=!0,s.downloadError="";try{const A=s.area.snapshot;let T;if(P==="model")T=await Po(A,s.grid,{shouldCancel:()=>o});else{const L=Number(s.display.speedMps);if(!wt(L))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const H=s.engine.prediction,le={...H,settings:{...H.settings,speedMps:L}},D=_n(le,s.display.sliceHeightM),ne=await d.readMddf(D.settings.layerIndex);P==="mddf"?T=So(A,ne,D):T=ko(A,ne,D,le)}const E=await wr(T);o||br(E,"flume-"+P+".zip","application/zip")}catch(A){o||(s.downloadError=A.message)}finally{o||(s.downloading=!1)}}}pe([()=>s.terrain,()=>s.grid,()=>s.engine.prediction,()=>s.area.source,()=>s.display.showSurroundings],B);let M=null;pe(()=>s.engine.layersReady,()=>{M||(M=setTimeout(()=>{M=null,i==null||i.refresh()},u))}),pe(()=>[s.wind.directionDeg,s.wind.model],()=>{s.grid&&$()}),pe(()=>s.wind.speedMps,P=>{wt(P)&&(s.display.speedMps=Number(P))}),pe(()=>s.engine.prediction,P=>{const A=tt.find(T=>T.id===s.display.variable);(P==null?void 0:P.settings.model)==="v2"&&(A!=null&&A.notInV2)&&(s.display.variable="speed")}),pe(()=>[s.display.variable,s.display.particles,s.display.density,s.display.speedMps,s.display.view,s.display.plane,s.display.sliceHeightM,s.display.sliceAboveGround,s.display.planeOffsetM],()=>{wt(s.display.speedMps)?(s.downloadError="",i==null||i.configure()):s.downloadError="Use a wind speed between 0.5 and 20 m/s."}),pe(()=>s.display.paused,()=>r==null?void 0:r.triggerRepaint()),pe(h,P=>jt(P)),pe(p.mapStyle,P=>{r&&(g.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),r.setStyle(P,{diff:!1}))}),pn(()=>{if(!(n!=null&&n.startsWith("pk."))){s.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new bn.Map({container:e.value,accessToken:n,style:p.mapStyle.value,center:Xr,zoom:Yr,pitch:0,antialias:!0,attributionControl:!1}),i=vo(r,P=>{o||(s.legend=P)},P=>{o||(s.error=P.message)}),s.mapCreated=!0,r.on("style.load",()=>{if(!o)try{rr(r,Rn(s.area.source)),t.value=!0,g.restore(),B()}catch(P){s.error=P.message}}),r.on("error",P=>{if(o)return;let A="";P.sourceId&&(A=" ("+P.sourceId+")"),s.error="Map data unavailable"+A+". Check token, allowed domains and connection."}),p.attach(),a=new ResizeObserver(()=>r==null?void 0:r.resize()),a.observe(e.value)}catch(P){s.error=P.message}}),Ct(()=>{o=!0,clearTimeout(l),clearTimeout(M),d.dispose(),i==null||i.dispose(),a==null||a.disconnect(),r==null||r.remove(),r=null});const C={mapElement:e,store:s,controls:p,locked:y,area:g,acceptArea:b,runPrediction:k,download:S};return zn(On,C),C}const Co={class:"flume-compact"},To={class:"map-hud-field"},Io={key:0,class:"map-hud-muted",role:"status"},Lo={key:1,class:"map-hud-muted"},Eo={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Fo={key:2,class:"map-hud-muted",role:"status"},Ro={key:3,class:"map-hud-muted",role:"status"},Do={class:"map-hud-field"},Vo={class:"map-hud-actions"},Oo={key:4,role:"status",class:"map-hud-muted"},Uo={key:5,class:"map-hud-muted"},zo={key:6,class:"map-hud-muted"},No={__name:"AreaHud",setup(n){const{store:e,area:t,locked:r,acceptArea:i}=pt(),a=vn*100,o=e.area,c=q(()=>!e.mapReady||r.value),u=q(()=>!!(o.region||o.loadedArea)),l=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],f=Bn.map(({label:d,value:s})=>({label:d,value:s}));function h(d){o.shape=d,t.startSelection()}const p={rectangle:"Click one corner, then the opposite corner.",circle:"Click the centre, then a point on the edge.",polygon:"Click the corners; click the first point to finish."},g=jr.map(d=>({label:Et[d],value:d}));return(d,s)=>{var k,B;const y=hn,w=Nn,v=It,m=mn,b=yn,x=ft,$=gt;return R(),N("div",Co,[I("div",To,[s[5]||(s[5]=I("span",{class:"map-hud-field__label"},"Wind model",-1)),V(y,{modelValue:_(e).wind.model,"onUpdate:modelValue":s[0]||(s[0]=S=>_(e).wind.model=S),options:_(g),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:_(r)},null,8,["modelValue","options","disabled"])]),V(w,{modelValue:_(o).source,"onUpdate:modelValue":s[1]||(s[1]=S=>_(o).source=S),label:"Buildings","aria-label":"Building source",size:"small",options:l,"text-by":"text","value-by":"value",disabled:_(r)},null,8,["modelValue","disabled"]),V(Le,{block:"",icon:"mso-location_city",disabled:c.value,loading:_(o).loading,onClick:_(t).loadBuildings},{default:Z(()=>[...s[6]||(s[6]=[ae("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),_(o).loadedArea?(R(),N("p",Io," Loaded detailed buildings: "+F(_(o).loadedArea.count)+" parts · "+F((_(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+F((_(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km ",1)):(R(),N("p",Lo,"3 × 3 km around the map centre, or draw an area below.")),I("div",Eo,[s[7]||(s[7]=I("span",{class:"map-hud-muted"},"Buffer",-1)),V(v,{modelValue:_(o).bufferPercent,"onUpdate:modelValue":s[2]||(s[2]=S=>_(o).bufferPercent=S),min:0,max:a,step:5,"aria-label":"Buffer per side (%)",disabled:_(r)},null,8,["modelValue","disabled"]),V(m,{modelValue:_(o).bufferPercent,"onUpdate:modelValue":s[3]||(s[3]=S=>_(o).bufferPercent=S),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:a,step:5,disabled:_(r)},null,8,["modelValue","disabled"]),s[8]||(s[8]=I("span",{class:"map-hud-muted"},"%",-1))]),V(b,{modelValue:_(e).terrain,"onUpdate:modelValue":s[4]||(s[4]=S=>_(e).terrain=S),label:"Terrain as solid ground (test)",size:"small",disabled:_(r)||_(e).terrainLoading},null,8,["modelValue","disabled"]),_(e).terrainLoading?(R(),N("p",Fo,"Loading ground heights…")):(k=_(e).grid)!=null&&k.terrain?(R(),N("p",Ro," Ground "+F(Math.round(_(e).grid.terrain.lowM))+"–"+F(Math.round(_(e).grid.terrain.highM))+" m · test only ",1)):j("",!0),I("div",Do,[s[9]||(s[9]=I("span",{class:"map-hud-field__label"},"Draw an area",-1)),V(y,{"model-value":_(o).shape,options:_(f),color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Area shape",class:"even-toggle",disabled:c.value,"onUpdate:modelValue":h},null,8,["model-value","options","disabled"])]),I("div",Vo,[V(Le,{icon:"mso-crop_free",disabled:c.value,"aria-label":"Select region",onClick:_(t).startSelection},{default:Z(()=>[...s[10]||(s[10]=[ae("Draw area",-1)])]),_:1},8,["disabled","onClick"]),_(o).region?(R(),Fe(Le,{key:0,icon:"mso-close",disabled:_(r),onClick:_(t).clearSelection},{default:Z(()=>[...s[11]||(s[11]=[ae("Clear",-1)])]),_:1},8,["disabled","onClick"])):j("",!0)]),_(o).drawing?(R(),N("p",Oo,F(p[_(o).shape])+" Esc cancels.",1)):(B=_(o).region)!=null&&B.mainDomain?(R(),N("p",Uo,F(_(o).region.mainDomain.extentM[0])+" × "+F(_(o).region.mainDomain.extentM[1])+" m + "+F((_(o).region.buffer.fraction*100).toFixed(0))+"% buffer ",1)):_(o).region?(R(),N("p",zo,F(_(o).region.extentM[0])+" × "+F(_(o).region.extentM[1])+" m ",1)):j("",!0),V(Le,{block:"",disabled:!_(e).mapReady||!u.value||_(r),loading:_(o).loading,"aria-label":_(o).region?"Use selected region":"Use full loaded area",onClick:_(i)},{default:Z(()=>[ae(F(_(o).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"]),_(o).loading?(R(),Fe(x,{key:7,"model-value":_(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):j("",!0),_(o).error?(R(),Fe($,{key:8,color:"danger"},{default:Z(()=>[ae(F(_(o).error),1)]),_:1})):j("",!0)])}}},Go={class:"flex flex-col gap-3"},Ho={key:0,class:"map-hud-muted"},Wo={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Yo={class:"map-hud-field"},Xo={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},jo=["aria-valuenow","aria-disabled"],qo=["x1","y1","x2","y2"],Ko=["cx","cy"],Zo={class:"flex flex-col gap-2 min-w-0"},Qo={class:"cardinals grid grid-cols-4 gap-1"},Jo={key:3,class:"flex flex-col gap-1"},es={role:"status",class:"map-hud-muted"},ts={key:4,class:"map-hud-muted"},ns={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:r}=pt(),i=e.wind,a=e.engine,o=q(()=>!!e.grid&&!t.value),c=q(()=>{if(!e.grid)return null;const d=kn(e.grid,i.model),s=(d[1]-d[0]||1)*Pe,y=d.at(-1);return{topM:Math.round((y+.5)*Pe),layers:d.length,spacingM:s}}),u=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],l=et(null),f=q(()=>Number(i.directionDeg)*Math.PI/180);function h(d){if(!o.value||d.type==="pointermove"&&!d.buttons)return;d.type==="pointerdown"&&d.currentTarget.setPointerCapture(d.pointerId);const s=l.value.getBoundingClientRect(),y=d.clientX-s.left-s.width/2,w=-(d.clientY-s.top-s.height/2),v=Math.round(Math.atan2(w,y)*180/Math.PI);i.directionDeg=(v+360)%360}const p={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1};function g(d){if(!o.value)return;let s=p[d.key];s==null&&(s=0),s&&(d.preventDefault(),i.directionDeg=(Number(i.directionDeg)+s+360)%360)}return(d,s)=>{const y=It,w=mn,v=gt,m=ft;return R(),N("div",Go,[_(e).grid?j("",!0):(R(),N("p",Ho,"Choose a simulation area in step 1 first.")),I("div",Wo,[s[3]||(s[3]=I("span",{class:"map-hud-muted"},"Speed",-1)),V(y,{modelValue:_(i).speedMps,"onUpdate:modelValue":s[0]||(s[0]=b=>_(i).speedMps=b),min:_(Zt),max:_(Kt),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),V(w,{modelValue:_(i).speedMps,"onUpdate:modelValue":s[1]||(s[1]=b=>_(i).speedMps=b),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:_(Zt),max:_(Kt),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),s[4]||(s[4]=I("span",{class:"map-hud-muted"},"m/s",-1))]),I("div",Yo,[s[6]||(s[6]=I("span",{class:"map-hud-field__label"},"Wind direction (blowing towards)",-1)),I("div",Xo,[(R(),N("svg",{ref_key:"dial",ref:l,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":_(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Gn(h,["prevent"]),onPointermove:h,onKeydown:g},[s[5]||(s[5]=Hn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-c40dc3a6></circle><text x="80" y="18" text-anchor="middle" data-v-c40dc3a6>90°</text><text x="146" y="84" text-anchor="middle" data-v-c40dc3a6>0°</text><text x="80" y="152" text-anchor="middle" data-v-c40dc3a6>270°</text><text x="1" y="84" text-anchor="start" data-v-c40dc3a6>180°</text>',5)),I("line",{x1:80-Math.cos(f.value)*30,y1:80+Math.sin(f.value)*30,x2:80+Math.cos(f.value)*42,y2:80-Math.sin(f.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,qo),I("circle",{cx:80+Math.cos(f.value)*42,cy:80-Math.sin(f.value)*42,r:"5",class:"needle-tip"},null,8,Ko)],40,jo)),I("div",Zo,[V(w,{modelValue:_(i).directionDeg,"onUpdate:modelValue":s[2]||(s[2]=b=>_(i).directionDeg=b),modelModifiers:{number:!0},type:"number",label:"Degrees","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),I("div",Qo,[(R(),N(He,null,wn(u,b=>V(Le,{key:b.text,disabled:!o.value,"aria-label":"Wind towards "+b.text,onClick:x=>_(i).directionDeg=b.value},{default:Z(()=>[ae(F(b.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])])]),_(e).error?(R(),Fe(v,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Z(()=>[ae(F(_(e).error),1)]),_:1})):j("",!0),_(a).error?(R(),Fe(v,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:Z(()=>[ae(F(_(a).error),1)]),_:1})):j("",!0),_(a).busy?(R(),N("div",Jo,[V(m,{"model-value":_(a).progress*100,indeterminate:_(a).progress===0},null,8,["model-value","indeterminate"]),I("p",es,F(_(a).stage),1)])):j("",!0),c.value&&!_(a).busy?(R(),N("p",ts," 3D wind: ground to "+F(c.value.topM)+" m · "+F(c.value.layers)+" layers · every "+F(c.value.spacingM)+" m ",1)):j("",!0),V(Le,{primary:"",block:"",disabled:!o.value,loading:_(a).busy,"aria-label":"Run prediction",onClick:_(r)},{default:Z(()=>[...s[7]||(s[7]=[ae("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},rs=Lt(ns,[["__scopeId","data-v-c40dc3a6"]]),is={class:"flex flex-col gap-3"},os={key:0,class:"map-hud-muted"},ss={class:"map-hud-field"},as={class:"map-hud-muted"},ls={class:"map-hud-field"},us={class:"map-hud-muted"},cs={key:0,class:"hud-row hud-row--value"},ds={class:"hud-value"},fs={key:1,class:"map-hud-field"},gs={class:"map-hud-muted"},ps={key:2,class:"hud-row hud-row--value"},hs={class:"hud-value"},ms={key:0,class:"map-hud-field"},ys={class:"map-hud-muted"},ws={class:"hud-row"},bs={class:"map-hud-field"},xs={key:0,class:"flex flex-col gap-1 text-xs"},vs={class:"flex justify-between gap-2 map-hud-muted"},Ms={class:"map-hud-muted"},_s={key:3,class:"map-hud-muted",role:"status"},$s={__name:"VisualizeHud",setup(n){const{store:e}=pt(),t=e.display,r=q(()=>e.engine.prediction),i=q(()=>{var M;if(e.engine.layersReady)return e.engine.layersReady;const S=(M=r.value)==null?void 0:M.layers.length;return S||0}),a=q(()=>{var M;return(((M=r.value)==null?void 0:M.plan)??[]).map(C=>(C+.5)*Pe)});function o(S){let M=0;return a.value.forEach((C,P)=>{Math.abs(C-S)<Math.abs(a.value[M]-S)&&(M=P)}),M}const c=q({get:()=>o(Number(t.sliceHeightM)),set:S=>{t.sliceHeightM=a.value[S]}});pe(a,S=>{S.length&&(t.sliceHeightM=S[o(Number(t.sliceHeightM))])},{immediate:!0});const u=q(()=>r.value?qr(r.value):Kr),l=q(()=>r.value?Zr(r.value):[0,0]),f=q(()=>{var C;const S=((C=r.value)==null?void 0:C.settings.model)==="v2";return tt.filter(P=>!(P.notInV2&&S)).map(P=>({label:P.label,value:P.id}))}),h={particles:"Moving dots that follow the wind.",slice:"A coloured plane through the wind."},p={"3d":"The whole 3D wind volume.",h:"A level plane at one height.",v:"An upright plane along the wind."},g={coloured:"Each particle has the colour of its value.",white:"White particles over a coloured slice at Height."},d=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],s=[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}],y=q(()=>s.filter(S=>S.value!=="3d"?!0:t.view==="particles")),w=q({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:S=>{t.plane=S}}),v=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],m=q(()=>w.value==="h"?!0:w.value==="3d"&&t.view==="particles"&&t.particles==="white"),b=[{label:"Follow ground",value:!0},{label:"Flat",value:!1}],x=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],$=q(()=>{const S=Math.round(Number(t.planeOffsetM));let M="";return S>0&&(M="+"),M+S+" m"}),k=q(()=>{const S=tt.find(M=>M.id===t.variable);return(S==null?void 0:S.ramp)===void 0||(S==null?void 0:S.ramp)===null?"turbo":S.ramp}),B=q(()=>{const S=[];for(let M=0;M<17;M++){const C=Qr(k.value,M/16),P=M*100/16;S.push("rgb("+C.join(",")+") "+P+"%")}return"linear-gradient(to right,"+S.join(",")+")"});return(S,M)=>{var E;const C=hn,P=It,A=yn,T=Yn;return R(),N("div",is,[r.value?(R(),N(He,{key:1},[I("div",ss,[M[10]||(M[10]=I("span",{class:"map-hud-field__label"},"Show",-1)),V(C,{modelValue:_(t).view,"onUpdate:modelValue":M[0]||(M[0]=L=>_(t).view=L),options:d,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),I("p",as,F(h[_(t).view]),1)]),_(t).view!=="off"?(R(),N(He,{key:0},[I("div",ls,[M[11]||(M[11]=I("span",{class:"map-hud-field__label"},"Plane",-1)),V(C,{modelValue:w.value,"onUpdate:modelValue":M[1]||(M[1]=L=>w.value=L),options:y.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),I("p",us,F(p[w.value]),1)]),m.value?(R(),N("div",cs,[M[12]||(M[12]=I("span",{class:"hud-label"},"Height",-1)),V(P,{modelValue:c.value,"onUpdate:modelValue":M[2]||(M[2]=L=>c.value=L),min:0,max:Math.max(0,a.value.length-1),step:1,"aria-label":"Height"},null,8,["modelValue","max"]),I("span",ds,F(Number(_(t).sliceHeightM).toFixed(1))+" m",1)])):j("",!0),m.value&&((E=r.value)!=null&&E.grid.terrain)?(R(),N("div",fs,[M[13]||(M[13]=I("span",{class:"map-hud-field__label"},"Over hills",-1)),V(C,{modelValue:_(t).sliceAboveGround,"onUpdate:modelValue":M[3]||(M[3]=L=>_(t).sliceAboveGround=L),options:b,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Slice height from",class:"even-toggle"},null,8,["modelValue"]),I("p",gs,F(_(t).sliceAboveGround?"The slice rises over hills higher than Height.":"The slice stays at Height and cuts through hills."),1)])):j("",!0),w.value==="v"?(R(),N("div",ps,[M[14]||(M[14]=I("span",{class:"hud-label"},"Position",-1)),V(P,{modelValue:_(t).planeOffsetM,"onUpdate:modelValue":M[4]||(M[4]=L=>_(t).planeOffsetM=L),min:l.value[0],max:l.value[1],step:_(ye),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),I("span",hs,F($.value),1)])):j("",!0)],64)):j("",!0),_(t).view!=="off"?(R(),N(He,{key:1},[_(t).view==="particles"?(R(),N("div",ms,[M[15]||(M[15]=I("span",{class:"map-hud-field__label"},"Colour on",-1)),V(C,{modelValue:_(t).particles,"onUpdate:modelValue":M[5]||(M[5]=L=>_(t).particles=L),options:v,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"]),I("p",ys,F(g[_(t).particles]),1)])):j("",!0),I("div",ws,[M[16]||(M[16]=I("span",{class:"hud-label"},"Density",-1)),V(C,{modelValue:_(t).density,"onUpdate:modelValue":M[6]||(M[6]=L=>_(t).density=L),options:x,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),V(A,{modelValue:_(t).paused,"onUpdate:modelValue":M[7]||(M[7]=L=>_(t).paused=L),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):j("",!0),_(t).view!=="off"?(R(),N(He,{key:2},[V(T,{class:"!my-0"}),I("div",bs,[M[17]||(M[17]=I("span",{class:"map-hud-field__label"},"Colour by",-1)),V(C,{modelValue:_(t).variable,"onUpdate:modelValue":M[8]||(M[8]=L=>_(t).variable=L),options:f.value,color:"background-element","toggle-color":"backgroundBorder",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"])]),_(e).legend?(R(),N("div",xs,[I("div",{class:"colorbar",style:Wn({background:B.value})},null,4),I("div",vs,[I("span",null,F(_(e).legend.low.toFixed(2)),1),I("strong",null,F(_(e).legend.legend)+" ("+F(_(e).legend.unit)+")",1),I("span",null,F(_(e).legend.high.toFixed(2)),1)])])):j("",!0)],64)):j("",!0),V(T,{class:"!my-0"}),V(A,{modelValue:_(t).showSurroundings,"onUpdate:modelValue":M[9]||(M[9]=L=>_(t).showSurroundings=L),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),I("p",Ms,F(_(Et)[r.value.settings.model])+" · up to "+F(u.value.toFixed(0))+" m · "+F(i.value)+" / "+F(r.value.settings.layers.length)+" layers · "+F((r.value.milliseconds/1e3).toFixed(1))+" s ",1),i.value<r.value.settings.layers.length?(R(),N("p",_s," Heights still being computed stay transparent on the slice; they fill in as the layers arrive. ")):j("",!0)],64)):(R(),N("p",os,"The 3D wind shows here once the prediction has run."))])}}},Ss=Lt($s,[["__scopeId","data-v-ff8b04b2"]]),ks={class:"space-y-2"},Bs={key:0,class:"map-hud-muted"},Ps={class:"grid grid-cols-2 gap-2"},As={__name:"DownloadsHud",setup(n){const{store:e,download:t}=pt(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(a){const o=e.engine,c=e.downloading||o.downloading,u=a!=="model",l=o.busy||!o.prediction;return c||u&&l}return(a,o)=>{const c=ft,u=gt;return R(),N("div",ks,[_(e).grid?(R(),N(He,{key:1},[I("div",Ps,[(R(),N(He,null,wn(r,l=>V(Le,{key:l.id,icon:"mso-download","aria-label":l.label,disabled:i(l.id),onClick:f=>_(t)(l.id)},{default:Z(()=>[ae(F(l.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),_(e).downloading?(R(),Fe(c,{key:0,indeterminate:"","aria-label":"Preparing download"})):j("",!0),_(e).downloadError?(R(),Fe(u,{key:1,color:"danger"},{default:Z(()=>[ae(F(_(e).downloadError),1)]),_:1})):j("",!0)],64)):(R(),N("p",Bs,"Choose an area in step 1 first."))])}}},Cs={class:"flume-hud-stack map-hud-column"},Ts={class:"flume-heading map-hud-heading city-glass"},Is={class:"flume-heading__row"},Ls={"data-testid":"flume-gpu"},Es={key:0,class:"flume-info"},Fs={class:"flume-info__title"},Rs={class:"flume-info__copyright"},Ds=["href"],Vs={class:"map-hud-muted normal-case"},Os={class:"map-hud-muted normal-case"},Us={key:0,class:"flume-status"},zs={__name:"FlumeCityView",setup(n){const e=hr().name,t=et("");pn(async()=>{try{t.value=await yr()}catch{t.value=""}});const r=q(()=>{let w="GPU: ";return e?w+=e:w+="unknown",t.value?w+=" · WebGPU: "+t.value:navigator.gpu||(w+=" · no WebGPU"),w}),{mapElement:i,store:a,controls:o,locked:c,area:u}=Ao(),{controlsVisible:l}=o,{currentPresetName:f}=gn(),h=q(()=>f.value==="dark"),p=et(!1),g=q(()=>{if(!a.grid)return"";const w=Number(a.wind.speedMps).toFixed(1)+" m/s",v=a.wind.directionDeg+"°";return w+" · "+v}),d={particles:"Particles",slice:"Slice",off:"Off"},s=q(()=>a.engine.prediction?d[a.display.view]:""),y={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(w,v)=>{const m=Zn,b=gt,x=ft;return R(),N("section",{class:Kn(["flume-page map-glass",{"map-glass--dark":h.value}]),"aria-label":"Flume City wind prediction",onKeydown:v[1]||(v[1]=qn((...$)=>_(u).stopSelection&&_(u).stopSelection(...$),["esc"]))},[Xn(I("div",Cs,[I("header",Ts,[I("div",Is,[v[2]||(v[2]=I("h1",null,"Flume City",-1)),V(m,{preset:"secondary",color:"textPrimary",size:"small",icon:p.value?"mso-close":"mso-info","aria-label":p.value?"Hide Flume City information":"Show Flume City information","aria-expanded":p.value,onClick:v[0]||(v[0]=$=>p.value=!p.value)},null,8,["icon","aria-label","aria-expanded"])]),I("p",Ls,F(r.value),1),p.value?(R(),N("div",Es,[I("p",Fs,F(y.title),1),I("p",null,F(y.authors),1),I("p",null,F(y.summary),1),V(Le,{icon:"mso-description",href:y.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:Z(()=>[...v[3]||(v[3]=[ae("arXiv",-1)])]),_:1},8,["href"]),I("div",Rs,[I("p",null,[v[4]||(v[4]=ae(" Developed and maintained by ",-1)),I("a",{href:_(nt).lab.url,target:"_blank",rel:"noopener"},F(_(nt).lab.name),9,Ds),v[5]||(v[5]=I("br",null,null,-1)),ae("("+F(_(nt).lead)+") ",1)]),I("p",null,F(_(nt).place),1)])])):j("",!0)]),V(rt,{title:"1 · Simulation area",inert:_(c)},{default:Z(()=>[V(No)]),_:1},8,["inert"]),V(rt,{title:"2 · Wind configuration",collapsed:!_(a).grid},{"header-extra":Z(()=>[I("span",Vs,F(g.value),1)]),default:Z(()=>[V(rs)]),_:1},8,["collapsed"]),V(rt,{title:"3 · Wind visualization",collapsed:!_(a).engine.prediction},{"header-extra":Z(()=>[I("span",Os,F(s.value),1)]),default:Z(()=>[V(Ss)]),_:1},8,["collapsed"]),V(rt,{title:"4 · Downloads",collapsed:!_(a).grid},{default:Z(()=>[V(As)]),_:1},8,["collapsed"]),_(a).error&&!_(a).grid?(R(),Fe(b,{key:0,color:"danger"},{default:Z(()=>[ae(F(_(a).error),1)]),_:1})):j("",!0)],512),[[jn,_(l)]]),I("div",{ref_key:"mapElement",ref:i,class:"flume-map","aria-label":"Flume City map"},null,512),V(mr,{controls:_(o),shown:_(a).mapCreated,disabled:_(c)},null,8,["controls","shown","disabled"]),!_(a).mapReady&&!_(a).error?(R(),N("div",Us,[V(x,{indeterminate:"","aria-label":"Loading Flume map"})])):j("",!0)],34)}}},ta=Lt(zs,[["__scopeId","data-v-e3251833"]]);export{ta as default};
