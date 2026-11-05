import{m as he,s as ht,x as Se,l as pt,y as tr,z as Cr,p as j,q as We,a5 as Br,a6 as Pr,o as D,c as N,b as L,u as M,w as q,d as K,t as E,a as T,i as H,h as Pe,a7 as rr,R as Ir,V as Ke,Y as mt,U as ir,Q as Ze,G as Qe,_ as yt,O as Ar,e as Rr,F as ve,r as nr,n as Tr,E as Fr,S as Er,$ as Lr,a0 as Dr,a8 as Oe,a3 as zr,K as Or}from"./index-DOV1LX0i.js";import{m as or,s as Vr,b as Xr,u as Yr,a as Nr,M as Ve}from"./mapbox-gl-Z9TFhRko.js";import{z as Ur}from"./archive-Dz16c6AW.js";import{d as Wr}from"./download-B6B1Q6H-.js";import{m as se,c as Bt,B as Hr,Q as et,a as jr,s as Gr,M as ar,b as qr,d as He,f as Kr,t as Zr,e as Qr,A as Jr,g as ei,r as wt,F as bt,h as xt,G as ti,P as ri,p as vt,C as ii,i as _t,j as De,l as Pt,k as ae,L as je,v as ni,V as ze,n as oi,o as ai,q as si,u as sr,w as li,x as It,y as ui,z as ci,D as At,E as di,H as lr,S as Rt,I as ur,J as Tt,K as tt,N as cr,O as fi,R as gi,T as hi,U as Ft,W as pi,X as mi,Y as yi,Z as wi,_ as Et,$ as Lt,a0 as Dt,a1 as bi,a2 as xi,a3 as vi}from"./volumeSource-BiyaM4BG.js";import{M as rt}from"./mapbox-gl-draw-BDI1A9uN.js";import{c as zt,m as _i}from"./geojsonToStl-Bbo8coar.js";import{r as $i,l as Mi}from"./buildingTiles-BvpTsQHc.js";import{M as Ot,P as Xe,V as ue,S as ki,C as Si,a as Ci,n as dr,j as fr,o as gr,l as Ge,p as at,W as Bi,D as Vt,R as Xt,c as Pi,L as Yt,H as Ii,q as Nt,r as Ai,B as Ri,d as Ti,m as Fi}from"./mapbox-gl-geocoder-Capzi51k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";import"./earcut-Drp1yMsm.js";const fe="flume-detailed-buildings",ge="flume-region-domain",Re="flume-main-domain";function st(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(fe)&&n.removeLayer(fe),n.getSource(fe)&&n.removeSource(fe);return}n.getSource(fe)?n.getSource(fe).setData(e):n.addSource(fe,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(fe)||n.addLayer({id:fe,type:"fill-extrusion",source:fe,minzoom:0,paint:{"fill-extrusion-color":se().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function Ei(n,e){if(!e){n.getLayer(Re)&&n.removeLayer(Re),n.getLayer(ge)&&n.removeLayer(ge),n.getSource(ge)&&n.removeSource(ge);return}const t=[{...e.polygon,properties:{role:"outer"}}];e.mainDomain&&t.push({...e.mainDomain.polygon,properties:{role:"main"}});const i={type:"FeatureCollection",features:t};n.getSource(ge)?n.getSource(ge).setData(i):(n.addSource(ge,{type:"geojson",data:i}),n.addLayer({id:ge,type:"line",source:ge,filter:["==",["get","role"],"outer"],paint:{"line-color":se().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!n.getLayer(Re)&&n.addLayer({id:Re,type:"line",source:ge,filter:["==",["get","role"],"main"],paint:{"line-color":se().mainArea,"line-width":3}}),!e.mainDomain&&n.getLayer(Re)&&n.removeLayer(Re)}const Ut=["draw.create","draw.update","draw.delete"];function Li({getMap:n,ready:e,onChange:t,accessToken:i}){const r=pt({source:"concordia",bufferPercent:Hr*100,drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,o=!1,l=null,u=0,s=null;function g(k=!1){u++,l==null||l.abort(),k||(s=null,r.loadedArea=null),r.snapshot=null,t==null||t()}function h(){const k=n();!k||!e.value||(st(k,s==null?void 0:s.preview),Ei(k,r.region??(s==null?void 0:s.area)??null))}function f(){return(s==null?void 0:s.preview)??null}function c(k){g(!r.region&&!r.snapshot),r.error="";try{r.region=Se(Bt(k))}catch(C){r.region=null,r.error=C.message}h()}function d(k){var X;if(o||!a)return;const C=(X=k.features)==null?void 0:X.at(-1);if(k.type==="draw.create"&&C)for(const W of a.getAll().features)W.id!==C.id&&a.delete(W.id);const A=a.getAll().features.find(W=>W.geometry.type==="Polygon");A?c(A):(g(),r.region=null,h()),r.drawing=!1}function p(k){r.drawing=k.mode==="draw_polygon"||k.mode==="direct_select"}function x(){var C;const k=n();if(!k||!e.value)throw new Error("Wait for the map to load.");if(!a){const A={...rt.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};a=new rt({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...rt.modes,simple_select:A}}),k.addControl(a,"bottom-left");for(const X of Ut)k.on(X,d);k.on("draw.modechange",p),y(k),k.once("idle",()=>y(k)),(C=r.region)!=null&&C.selection&&a.add(r.region.selection)}return a}function y(k){var C;for(const A of((C=k.getStyle())==null?void 0:C.layers)??[])A.id.startsWith("gl-draw-")&&(A.type==="fill"&&(k.setPaintProperty(A.id,"fill-color",se().mainArea),k.setPaintProperty(A.id,"fill-opacity",se().drawFillOpacity)),A.type==="line"&&(k.setPaintProperty(A.id,"line-color",se().mainArea),k.setPaintProperty(A.id,"line-width",3)))}function w(){const k=n();if(!(!a||!k)){for(const C of Ut)k.off(C,d);k.off("draw.modechange",p),k.removeControl(a),a=null,r.drawing=!1}}function m(){if(!r.loading)try{const k=x();n().stop(),g(!r.region&&!r.snapshot),r.region=null,k.deleteAll(),h(),k.changeMode("draw_polygon"),r.drawing=!0,r.error=""}catch(k){r.error=k.message}}function b(){a&&a.changeMode("simple_select"),r.drawing=!1}function $(){var k;(k=n())==null||k.stop(),w(),g(),r.region=null,r.error="",h()}async function v(k){const C=new AbortController,A=u;l=C,r.loading=!0,r.progress=0,r.error="";const X=()=>o||C.signal.aborted||A!==u;try{return await k({signal:C.signal,epoch:A,isStale:X})}catch(W){return C.abort(),!o&&A===u&&W.name!=="AbortError"&&(r.error=W.message),null}finally{l===C&&(l=null,o||(r.loading=!1))}}async function _(k,C,{signal:A,epoch:X,isStale:W}){if(A.throwIfAborted(),(s==null?void 0:s.source)===C){const[R,Y,Q,de]=k.bounds,le=s.area.bounds;if(R>=le[0]&&Y>=le[1]&&Q<=le[2]&&de<=le[3])return s.tiles}const ne=n(),z=C==="osm"?"composite":"city-concordia",te=$i({map:ne,sourceId:z,source:C,bounds:k.bounds})??await Mi({sourceConfig:ne.getStyle().sources[z],source:C,bounds:k.bounds,accessToken:i,signal:A,paddingTiles:1,onProgress:R=>{X===u&&(r.progress=R)}});if(W())throw new DOMException("Cancelled","AbortError");const ce=He(te.features);return s={source:C,area:k,tiles:te,preview:ce},r.loadedArea=Se({source:C,bounds:[...k.bounds],extentM:[...k.extentM],count:ce.features.length,fromMap:!!te.fromMap}),h(),te}function S(k){var X;const C=n(),A=C.getCanvas().clientWidth;(X=C.resize)==null||X.call(C),C.fitBounds([k.bounds.slice(0,2),k.bounds.slice(2,4)],{padding:A>=640?{top:40,bottom:40,left:Math.min(320,A*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function B(){if(r.loading||o)return null;const k=n();if(!k||!e.value)return r.error="Wait for the map to load.",null;const C=r.source;return v(async A=>{const X=et/2,W=k.getCenter().wrap().toArray(),ne=zt(W)([-X,-X]),z=jr(ne,zt(ne)([et,et]));return S(z),await _(z,C,A),A.isStale()?null:(r.snapshot=null,t==null||t(),r.loadedArea)})}async function P(){if(r.loading||o)return null;!r.region&&(s==null?void 0:s.source)===r.source&&c(s.area.polygon);const k=n(),C=r.region,A=r.source;return!k||!e.value||!C?(r.error="Draw and finish a valid polygon first.",null):v(async X=>{const W=Bt(C.selection??C.polygon);let ne=W,z,Z;for(let R=0;R<4;R++){if(Z=await _(ne,A,X),X.isStale())return null;z=Gr(Z.features,W);const[Y,Q,de,le]=z.bounds,ee=Z.coverageBounds,we=1e-8;if(Y>ee[0]+we&&Q>ee[1]+we&&de<ee[2]-we&&le<ee[3]-we||!z.buildings.features.length)break;if(R===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");ne=z}const te=Math.min(Math.max(Number(r.bufferPercent)||0,0),ar*100)/100;z=qr(z,te),z.source=A,z.dataZoom=Z.zoom,z.tileCount=Z.tileCount,z.surroundings=He(z.surroundings.features),z.warnings=z.warnings.filter(R=>!R.startsWith("Loaded map tiles only"));const ce=Z.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return z.warnings.push(ce+Z.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(z.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),r.snapshot=Se(z),r.region=Se({origin:z.origin,bounds:z.bounds,extentM:z.extentM,polygon:z.polygon,selection:z.selection,mainDomain:z.mainDomain,buffer:z.buffer}),h(),S(z),t==null||t(),z})}function F(){l==null||l.abort(),w()}function I(){var k;h(),(k=r.region)!=null&&k.selection&&x()}function V(){o=!0,u++,l==null||l.abort(),w()}return he(()=>r.source,()=>{g(),h(),r.error=""}),ht(V),{state:r,startSelection:m,stopSelection:b,clearSelection:$,setSelection:c,captureRegion:P,loadBuildings:B,getPreview:f,restore:I,beforeStyleChange:F}}const xe=180,hr=4,pr=7,$t=hr*pr,qe=1.5,Wt=4,Di=1600,zi=256*1024*1024,Ne=n=>n.toFixed(6),Oi=640,Vi=`
struct P { gy: u32, gx: u32, chunk: u32, pixelOffset: u32,
           pixelCount: u32, pad0: u32, pad1: u32, pad2: u32,
           queryHeight: f32, pad3: f32, pad4: f32, pad5: f32 };
@group(0) @binding(0) var<storage, read> height: array<f32>;
@group(0) @binding(1) var<storage, read> cosT: array<f32>;
@group(0) @binding(2) var<storage, read> sinT: array<f32>;
@group(0) @binding(3) var<storage, read_write> raw: array<f32>;
@group(0) @binding(4) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  let angles = ${xe}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${Ne(Wt)};
  let gyr = sinT[angle] / ${Ne(Wt)};

  var stepX = 0; var nextX = 1.0e20; var deltaX = 1.0e20;
  if (abs(gxr) >= 1.0e-10) {
    if (gxr > 0.0) { stepX = 1; nextX = 0.5 / gxr; deltaX = 1.0 / gxr; }
    else { stepX = -1; nextX = -0.5 / gxr; deltaX = -1.0 / gxr; }
  }
  var stepY = 0; var nextY = 1.0e20; var deltaY = 1.0e20;
  if (abs(gyr) >= 1.0e-10) {
    if (gyr > 0.0) { stepY = 1; nextY = 0.5 / gyr; deltaY = 1.0 / gyr; }
    else { stepY = -1; nextY = -0.5 / gyr; deltaY = -1.0 / gyr; }
  }

  let cutoff = ${Ne(Di)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Oi}u; step++) {
    if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff) { break; }
    let leaving = min(min(nextX, nextY), cutoff);
    let roof = height[u32(y) * u.gx + u32(x)];
    if (roof >= u.queryHeight) {
      upperDistance = entered;
      upperHeight = roof - u.queryHeight;
      lowerDistance = entered;
      lowerHeight = 0.0;
      break;
    }
    if (roof > 0.0) {
      let slope = (roof - u.queryHeight) / max(leaving, 1.0e-8);
      if (slope > bestSlope) {
        bestSlope = slope;
        lowerDistance = leaving;
        lowerHeight = roof - u.queryHeight;
      }
    }
    let crossX = nextX <= nextY + 1.0e-7;
    let crossY = nextY <= nextX + 1.0e-7;
    if (crossX) { x += stepX; nextX += deltaX; }
    if (crossY) { y += stepY; nextY += deltaY; }
    entered = leaving;
  }
  let base = localPixel * angles + angle;
  let stride = u.chunk * angles;
  raw[base] = upperDistance;
  raw[stride + base] = upperHeight;
  raw[2u * stride + base] = lowerDistance;
  raw[3u * stride + base] = lowerHeight;
}`,Xi=`
struct P { gy: u32, gx: u32, chunk: u32, pixelOffset: u32,
           pixelCount: u32, pad0: u32, pad1: u32, pad2: u32,
           queryHeight: f32, pad3: f32, pad4: f32, pad5: f32 };
@group(0) @binding(0) var<storage, read> raw: array<f32>;
@group(0) @binding(1) var<storage, read_write> field: array<f32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 64u;
  if (g >= u.pixelCount * 4u) { return; }
  let sig = g % 4u;
  let localPixel = g / 4u;
  let angles = ${xe}u;
  var dc = 0.0;
  var re = vec3<f32>(0.0);
  var im = vec3<f32>(0.0);
  let base = sig * u.chunk * angles + localPixel * angles;
  let n = f32(angles);
  for (var a = 0u; a < angles; a++) {
    let v = raw[base + a];
    let t = 6.283185307179586 * f32(a) / n;
    dc += v;
    re += v * vec3<f32>(cos(t), cos(2.0 * t), cos(3.0 * t));
    im -= v * vec3<f32>(sin(t), sin(2.0 * t), sin(3.0 * t));
  }
  let out = (u.pixelOffset + localPixel) * ${$t}u
          + sig * ${pr}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Yi=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, channels: u32, mddfChannels: u32, patchSize: u32,
  gy: u32, gx: u32, margin: u32, pad0: u32,
  solidChannel: i32, coordChannel: i32, pad1: i32, pad2: i32,
  cosT: f32, sinT: f32, theta: f32, queryLayer: f32,
  centreY: f32, centreX: f32, coordYScale: f32, coordZ: f32,
  coordXCentre: f32, coordXScale: f32, pad3: f32, pad4: f32,
};
@group(0) @binding(0) var<storage, read> field: array<f32>;
@group(0) @binding(1) var<storage, read> height: array<f32>;
@group(0) @binding(2) var<storage, read> origins: array<f32>;
@group(0) @binding(3) var<storage, read> table: array<u32>;
@group(0) @binding(4) var<storage, read> norm: array<f32>;
@group(0) @binding(5) var<storage, read_write> out: array<${n}>;
@group(0) @binding(6) var<uniform> u: P;

fn sampleField(ey: f32, ex: f32, channel: u32) -> f32 {
  let y0 = floor(ey); let x0 = floor(ex);
  let fy = ey - y0; let fx = ex - x0;
  let iy0 = clamp(i32(y0), 0, i32(u.gy) - 1);
  let ix0 = clamp(i32(x0), 0, i32(u.gx) - 1);
  let iy1 = clamp(iy0 + 1, 0, i32(u.gy) - 1);
  let ix1 = clamp(ix0 + 1, 0, i32(u.gx) - 1);
  let c = ${$t}u;
  let v00 = field[(u32(iy0) * u.gx + u32(ix0)) * c + channel];
  let v01 = field[(u32(iy0) * u.gx + u32(ix1)) * c + channel];
  let v10 = field[(u32(iy1) * u.gx + u32(ix0)) * c + channel];
  let v11 = field[(u32(iy1) * u.gx + u32(ix1)) * c + channel];
  return mix(mix(v00, v01, fx), mix(v10, v11, fx), fy);
}

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  let area = u.patchSize * u.patchSize;
  if (g >= u.batch * u.channels * area) { return; }
  let p = g % area;
  let channel = (g / area) % u.channels;
  let b = g / (area * u.channels);

  // Wind-frame position of this pixel, then the city cell it samples.
  let sx = origins[b * 2u] + f32(p % u.patchSize);
  let sy = origins[b * 2u + 1u] + f32(p / u.patchSize);
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  let ix = u.centreX + dx * u.cosT - dy * u.sinT;
  let iy = u.centreY + dx * u.sinT + dy * u.cosT;
  let ex = ix + f32(u.margin);
  let ey = iy + f32(u.margin);

  var value = 0.0;
  if (channel < u.mddfChannels) {
    let srcRe = table[channel * 4u];
    let srcIm = table[channel * 4u + 1u];
    let mode = table[channel * 4u + 2u];
    let isIm = table[channel * 4u + 3u];
    if (mode == 0u) {
      value = sampleField(ey, ex, srcRe);
    } else {
      let re = sampleField(ey, ex, srcRe);
      let im = sampleField(ey, ex, srcIm);
      let angle = f32(mode) * u.theta;
      let c = cos(angle); let s = sin(angle);
      if (isIm == 1u) { value = re * s + im * c; }
      else { value = re * c - im * s; }
    }
    value = (value - norm[channel * 2u]) / norm[channel * 2u + 1u];
  } else if (i32(channel) == u.solidChannel) {
    let ry = clamp(i32(round(ey)), 0, i32(u.gy) - 1);
    let rx = clamp(i32(round(ex)), 0, i32(u.gx) - 1);
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Ne(qe)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`;class Ni{constructor(e,t,i,r,a,o="f32"){this.context=e,this.store=o,this.ny=i,this.nx=r,this.margin=a,this.gy=i+2*a,this.gx=r+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const l=new Float32Array(this.gy*this.gx);for(let g=0;g<i;g++){const h=g*r,f=(g+a)*this.gx+a;for(let c=0;c<r;c++)l[f+c]=t[h+c]*qe}this.heightBuffer=e.upload(l,"mddf.height");const u=new Float32Array(xe),s=new Float32Array(xe);for(let g=0;g<xe;g++){const h=2*Math.PI*g/xe;u[g]=Math.cos(h),s[g]=Math.sin(h)}this.cosBuffer=e.upload(u,"mddf.cos"),this.sinBuffer=e.upload(s,"mddf.sin"),this.rawBuffer=e.storage(hr*this.chunk*xe*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*$t*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(Vi),this.fourierPipeline=e.pipeline(Xi),this.assemblePipeline=e.pipeline(Yi(o)),this.currentLayer=-1}async compute(e,t={}){var u,s,g;const{context:i}=this,r=this.cache.get(e);if(r){this.fieldBuffer=r,this.currentLayer=e,(u=t.onProgress)==null||u.call(t,1);return}const a=(this.cache.size+1)*this.fieldBytes<=zi;this.fieldBuffer=a?i.storage(this.fieldBytes,"mddf.field."+e):this.spare;const o=(e+.5)*qe,l=this.gy*this.gx;for(let h=0;h<l;h+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const f=Math.min(this.chunk,l-h),c=i.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",h],["u",f],["u",0],["u",0],["u",0],["f",o],["f",0],["f",0],["f",0]]),d=i.device.createCommandEncoder(),p=d.beginComputePass();i.dispatch(p,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,c],f*xe),i.dispatch(p,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,c],f*4,64),p.end(),i.device.queue.submit([d.finish()])}await i.device.queue.onSubmittedWorkDone(),(g=t.onProgress)==null||g.call(t,1),i.releaseScratch(),a&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,t,i,r,a,o,l){const{context:u}=this,s=t.length/2,g=u.upload(t,"assemble.origins"),h=u.uniform([["u",s],["u",i.channels],["u",i.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",i.solidChannel],["i",i.coordChannel],["i",0],["i",0],["f",Math.cos(r)],["f",Math.sin(r)],["f",r],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",i.coordYScale],["f",(a-i.coordZCentre)/i.coordZScale],["f",i.coordXCentre],["f",i.coordXScale],["f",0],["f",0]]),f=e.beginComputePass();return u.dispatch(f,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,g,i.tableBuffer,i.normBuffer,l,h],s*i.channels*o*o),f.end(),g}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const it=`
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
`,Ui=`
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
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
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
}`;function Ht(n,e,t,i=1e-5){const r=n==="f16"||e==="f16"?`enable f16;
`:"",a=l=>n==="f16"?`f32(${l})`:l,o=l=>e==="f16"?`f16(${l})`:l;return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${e}>;
var<workgroup> partial: array<f32, 256>;
@compute @workgroup_size(256)
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${t}u;
  var s = 0.0;
  for (var i = lid.x; i < ${t}u; i += 256u) { s += ${a("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = 128u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${t}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${t}u; i += 256u) {
    let d = ${a("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = 128u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${t}.0, 0.0) + ${i.toExponential(12)});
  for (var i = lid.x; i < ${t}u; i += 256u) {
    Y[base + i] = ${o("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const nt=32;function Wi(n){const{store:e,patch:t,modes1:i,modes2:r}=n,a=t*t,o=2*i,l=e==="f16"?`enable f16;
`:"",u=g=>e==="f16"?`f32(${g})`:g,s=g=>e==="f16"?`f16(${g})`:g;return{conv1x1:`${l}${it}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.cout * ${a}u) { return; }
  let p = g % ${a}u;
  let o = (g / ${a}u) % u.cout;
  let b = g / (${a}u * u.cout);
  var acc = ${u("B[o]")};
  let xBase = b * u.cin * ${a}u + p;
  let wBase = o * u.cin;
  for (var i = 0u; i < u.cin; i++) {
    acc += ${u("W[wBase + i]")} * ${u("X[xBase + i * "+a+"u]")};
  }
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${s("acc")};
}`,gate:`${l}${it}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.mid * ${a}u) { return; }
  let p = g % ${a}u;
  let m = (g / ${a}u) % u.mid;
  let b = g / (${a}u * u.mid);
  let value = ${u("G[(b * 2u * u.mid + m) * "+a+"u + p]")};
  let gateValue = ${u("G[(b * 2u * u.mid + u.mid + m) * "+a+"u + p]")};
  H[g] = ${s("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:Ht(e,e,a),instanceNormScaled:Ht(e,e,a,1e-5/(nt*nt)),forwardColumns:`${l}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${a}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${u("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,rowMix:`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.channels * u.rows * ${r}u) { return; }
  let k = g % ${r}u;
  let r = (g / ${r}u) % u.rows;
  let bc = g / (${r}u * u.rows);
  var accRe = 0.0; var accIm = 0.0;
  let inBase = bc * u.inner * ${r}u + k;
  let tableBase = r * u.inner;
  for (var j = 0u; j < u.inner; j++) {
    let ar = inRe[inBase + j * ${r}u];
    let ai = inIm[inBase + j * ${r}u];
    let cr = tableRe[tableBase + j];
    let ci = tableIm[tableBase + j];
    accRe += ar * cr - ai * ci;
    accIm += ar * ci + ai * cr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,spectralMix:`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  let block = ${o*r}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${r}u;
  let s = (g / ${r}u) % ${o}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${i}u);
  let sp = s - half * ${i}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${i*r}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${r}u + k;
  let xBase = (b * u.channels * ${o}u + s) * ${r}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,inverseColumns:`${l}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.batch * u.channels * ${a}u) { return; }
  let p = g % ${a}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${a}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${r}u;
  for (var k = 0u; k < ${r}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${s("acc * "+1/nt)};
}`,residual:`${l}${it}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.total) { return; }
  var acc = ${u("A[g]")} + ${u("B[g]")} + ${u("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${s("acc")};
}`}}function Hi(n,e,t){const i=2*e,r=[];for(let c=0;c<e;c++)r.push(c);for(let c=n-e;c<n;c++)r.push(c);const a=new Float32Array(n*t),o=new Float32Array(n*t);for(let c=0;c<n;c++)for(let d=0;d<t;d++){const p=2*Math.PI*c*d/n;a[c*t+d]=Math.cos(p),o[c*t+d]=-Math.sin(p)}const l=new Float32Array(i*n),u=new Float32Array(i*n);for(let c=0;c<i;c++)for(let d=0;d<n;d++){const p=2*Math.PI*r[c]*d/n;l[c*n+d]=Math.cos(p),u[c*n+d]=-Math.sin(p)}const s=new Float32Array(n*i),g=new Float32Array(n*i);for(let c=0;c<n;c++)for(let d=0;d<i;d++){const p=2*Math.PI*r[d]*c/n;s[c*i+d]=Math.cos(p)/n,g[c*i+d]=Math.sin(p)/n}const h=new Float32Array(t*n),f=new Float32Array(t*n);for(let c=0;c<t;c++){const d=(c===0?1:2)/n;for(let p=0;p<n;p++){const x=2*Math.PI*c*p/n;h[c*n+p]=d*Math.cos(x),f[c*n+p]=-d*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:l,rowIm:u,inverseRowRe:s,inverseRowIm:g,inverseColCos:h,inverseColSin:f}}class ji{constructor(e,t,i,r){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=r,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[s,g]of Object.entries(Wi(o)))this.pipelines[s]=e.pipeline(g);this.contractPipeline=e.pipeline(Ui);const l=s=>{const g=t.tensors[s];if(!g)throw new Error(`missing tensor ${s}`);return Kr(new Uint16Array(i,g.offset,g.count))};this.read=l,this.tables={};for(const[s,g]of Object.entries(Hi(this.patch,this.modes1,this.modes2)))this.tables[s]=e.upload(g,`fno.table.${s}`);this.weights={};const u=(s,g)=>{const h=l(g);this.weights[s]=this.store==="f16"?e.upload(Zr(h),`fno.${s}`):e.upload(h,`fno.${s}`)};u("p1w","p.mlp1.weight"),u("p1b","p.mlp1.bias"),u("p2w","p.mlp2.weight"),u("p2b","p.mlp2.bias"),u("q1w","q.mlp1.weight"),u("q1b","q.mlp1.bias"),u("q2w","q.mlp2.weight"),u("q2b","q.mlp2.bias");for(let s=0;s<this.layers;s++)u(`m1w${s}`,`mlp_layers.${s}.mlp1.weight`),u(`m1b${s}`,`mlp_layers.${s}.mlp1.bias`),u(`m2w${s}`,`mlp_layers.${s}.mlp2.weight`),u(`m2b${s}`,`mlp_layers.${s}.mlp2.bias`),u(`lw${s}`,`w_layers.${s}.weight`),u(`lb${s}`,`w_layers.${s}.bias`);this.buildSpectralWeights(),this.allocate(r)}buildSpectralWeights(){const{context:e,metadata:t}=this,i=t.tucker;let r=i.core_shape.slice(),a=e.upload(this.read(`${i.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${i.core}.im`),"tucker.core.im");for(const u of i.factors){const[s,g]=u.shape;if(r[u.mode]!==g)throw new Error(`factor ${u.name} does not match the core`);const h=r.slice();h[u.mode]=s;const f=h.reduce(($,v)=>$*v,1),c=h.slice(u.mode+1).reduce(($,v)=>$*v,1),d=e.storage(f*4,"tucker.re"),p=e.storage(f*4,"tucker.im"),x=e.upload(this.read(`${u.name}.re`),"tucker.f"),y=e.upload(this.read(`${u.name}.im`),"tucker.f"),w=e.uniform([["u",h[0]],["u",h[1]],["u",h[2]],["u",h[3]],["u",h[4]],["u",u.mode],["u",s],["u",g],["u",c],["u",0],["u",f],["u",0]]),m=e.device.createCommandEncoder(),b=m.beginComputePass();e.dispatch(b,this.contractPipeline,[a,o,x,y,d,p,w],f),b.end(),e.device.queue.submit([m.finish()]),e.free(a),e.free(o),e.free(x),e.free(y),a=d,o=p,r=h}e.releaseScratch();const l=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(r.join()!==l.join())throw new Error(`spectral stack is ${r} but ${l} was expected`);this.spectralRe=a,this.spectralIm=o}allocate(e){const{context:t}=this,i=this.patch*this.patch,r=this.width,a=2*this.modes1,o=(u,s)=>t.storage(e*u*i*this.elementBytes,s),l=(u,s)=>t.storage(e*r*u*4,s);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(r,"fno.x"),t1:o(r,"fno.t1"),t2:o(r,"fno.t2"),gates:o(4*r,"fno.gates"),hidden:o(2*r,"fno.hidden"),spectral:o(r,"fno.spectral"),local:o(r,"fno.local"),wide:o(2*r,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:l(this.patch*this.modes2,"fno.xRe"),xIm:l(this.patch*this.modes2,"fno.xIm"),yRe:l(a*this.modes2,"fno.yRe"),yIm:l(a*this.modes2,"fno.yIm"),zRe:l(a*this.modes2,"fno.zRe"),zIm:l(a*this.modes2,"fno.zIm"),wRe:l(this.patch*this.modes2,"fno.wRe"),wIm:l(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,i=this.width,r=2*this.modes1,a=this.inputChannels+5*i+4*i+2*i+2*i+this.outputChannels,o=i*(2*this.patch*this.modes2*2+4*r*this.modes2)*4;return e*(a*t*this.elementBytes+o)}encode(e,t){const{context:i,buffers:r,pipelines:a,tables:o}=this,l=this.width,u=this.patch*this.patch,s=2*this.modes1,g=e.beginComputePass(),h=(c,d,p,x,y=256)=>{i.dispatch(g,c,[...d,i.uniform(p)],x,y)},f=(c,d,p=a.instanceNorm)=>{g.setPipeline(p),g.setBindGroup(0,i.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:c}},{binding:1,resource:{buffer:d}}]})),g.dispatchWorkgroups(t*l)};h(a.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",t],["u",this.inputChannels],["u",2*l],["u",1]],t*2*l*u),h(a.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",t],["u",2*l],["u",l],["u",0]],t*l*u);for(let c=0;c<this.layers;c++)f(r.x,r.t1),h(a.forwardColumns,[r.t1,o.forwardCos,o.forwardSin,r.xRe,r.xIm],[["u",t],["u",l],["u",0],["u",0]],t*l*this.patch*this.modes2),h(a.rowMix,[r.xRe,r.xIm,o.rowRe,o.rowIm,r.yRe,r.yIm],[["u",t],["u",l],["u",s],["u",this.patch]],t*l*s*this.modes2),h(a.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",t],["u",l],["u",2*c],["u",0]],t*l*s*this.modes2),h(a.rowMix,[r.zRe,r.zIm,o.inverseRowRe,o.inverseRowIm,r.wRe,r.wIm],[["u",t],["u",l],["u",this.patch],["u",s]],t*l*this.patch*this.modes2),h(a.inverseColumns,[r.wRe,r.wIm,o.inverseColCos,o.inverseColSin,r.t2],[["u",t],["u",l],["u",0],["u",0]],t*l*u),f(r.t2,r.t1,a.instanceNormScaled),h(a.conv1x1,[r.t1,this.weights[`m1w${c}`],this.weights[`m1b${c}`],r.gates],[["u",t],["u",l],["u",4*l],["u",0]],t*4*l*u),h(a.gate,[r.gates,r.hidden],[["u",t],["u",2*l],["u",0],["u",0]],t*2*l*u),h(a.conv1x1,[r.hidden,this.weights[`m2w${c}`],this.weights[`m2b${c}`],r.spectral],[["u",t],["u",2*l],["u",l],["u",0]],t*l*u),h(a.conv1x1,[r.x,this.weights[`lw${c}`],this.weights[`lb${c}`],r.local],[["u",t],["u",l],["u",l],["u",0]],t*l*u),h(a.residual,[r.spectral,r.local,r.x],[["u",t*l*u],["u",c<this.layers-1?1:0],["u",0],["u",0]],t*l*u);return h(a.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",t],["u",l],["u",2*l],["u",1]],t*2*l*u),h(a.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",t],["u",2*l],["u",this.outputChannels],["u",0]],t*this.outputChannels*u),g.end(),r.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const Gi=n=>n.toFixed(6),qi=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  gridH: u32, gridW: u32, patchSize: u32, channels: u32,
  columnCount: u32, patchCount: u32, readyCount: u32, pad0: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  columnStride: f32, minimumWeight: f32, pad1: f32, pad2: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${n}>;
// Cross-wind origin of each patch, in blend coordinates.
@group(0) @binding(1) var<storage, read> origins: array<i32>;
// Per column: first patch index, patch count, streamwise origin.
@group(0) @binding(2) var<storage, read> columns: array<i32>;
@group(0) @binding(3) var<storage, read_write> field: array<f32>;
@group(0) @binding(4) var<storage, read_write> weight: array<f32>;
@group(0) @binding(5) var<uniform> u: P;

fn hann(index: u32, size: u32) -> f32 {
  let t = 6.283185307179586 * f32(index) / f32(size - 1u);
  return u.minimumWeight + (1.0 - u.minimumWeight) * (0.5 - 0.5 * cos(t));
}

@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  // The dispatch covers a rectangle of the wind-frame grid, not the whole
  // grid: a progressive fill re-blends only the cells the newest patches
  // touch, so the total work stays proportional to the patch area no matter
  // how often the display is refreshed.
  if (g >= u.rectH * u.rectW) { return; }
  let sy = i32(u.rectY0 + g / u.rectW);
  let sx = i32(u.rectX0 + g % u.rectW);
  let cell = u32(sy) * u.gridW + u32(sx);
  let patchSize = i32(u.patchSize);
  let area = u.patchSize * u.patchSize;

  var sums = array<f32, 8>();
  var total = 0.0;
  // Columns are regularly spaced, so only a couple can cover this cell.
  let firstColumn = max(0,
    i32(floor((f32(sx) - f32(patchSize) + 1.0) / max(u.columnStride, 1.0e-6))));
  let lastColumn = min(i32(u.columnCount) - 1,
    i32(floor(f32(sx) / max(u.columnStride, 1.0e-6))));
  for (var k = firstColumn; k <= lastColumn; k++) {
    let columnBase = u32(k) * 3u;
    let first = columns[columnBase];
    let count = columns[columnBase + 1u];
    let px = sx - columns[columnBase + 2u];
    if (px < 0 || px >= patchSize) { continue; }
    for (var j = 0; j < count; j++) {
      let index = first + j;
      // Patches are submitted in index order, so everything from readyCount
      // onwards has not been computed yet and must not enter the sum.
      if (u32(index) >= u.readyCount) { break; }
      let py = sy - origins[index];
      if (py < 0 || py >= patchSize) { continue; }
      let w = hann(u32(py), u.patchSize) * hann(u32(px), u.patchSize);
      let base = u32(index) * u.channels * area + u32(py) * u.patchSize + u32(px);
      for (var c = 0u; c < u.channels; c++) {
        sums[c] += w * f32(patches[base + c * area]);
      }
      total += w;
    }
  }
  for (var c = 0u; c < u.channels; c++) {
    field[cell * u.channels + c] = sums[c];
  }
  weight[cell] = total;
}`,Ki=`
struct P {
  gridH: u32, gridW: u32, channels: u32, pack: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  syStart: i32, sxStart: i32, pad0: i32, pad1: i32,
  cosT: f32, sinT: f32, centreY: f32, centreX: f32,
  gy: f32, gx: f32, margin: f32, queryLayer: f32,
  cityY: f32, cityX: f32, pad2: f32, pad3: f32,
};
@group(0) @binding(0) var<storage, read_write> field: array<f32>;
@group(0) @binding(1) var<storage, read> weight: array<f32>;
@group(0) @binding(2) var<storage, read> centre: array<f32>;
@group(0) @binding(3) var<storage, read> scale: array<f32>;
@group(0) @binding(4) var<storage, read> height: array<f32>;
@group(0) @binding(5) var<storage, read_write> solid: array<f32>;
@group(0) @binding(6) var<storage, read> finalWeight: array<f32>;
@group(0) @binding(7) var<storage, read_write> packed: array<f32>;
@group(0) @binding(8) var<uniform> u: P;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * 256u;
  if (g >= u.rectH * u.rectW) { return; }
  let ly = g / u.rectW;
  let lx = g % u.rectW;
  let cell = (u.rectY0 + ly) * u.gridW + (u.rectX0 + lx);
  let w = weight[cell];
  let inverse = select(0.0, 1.0 / w, w > 1.0e-6);
  for (var c = 0u; c < u.channels; c++) {
    field[cell * u.channels + c] =
      field[cell * u.channels + c] * inverse * scale[c] + centre[c];
  }
  let sx = f32(i32(u.rectX0 + lx) + u.sxStart);
  let sy = f32(i32(u.rectY0 + ly) + u.syStart);
  let dx = sx - u.centreX;
  let dy = sy - u.centreY;
  let ix = u.centreX + dx * u.cosT - dy * u.sinT;
  let iy = u.centreY + dx * u.sinT + dy * u.cosT;
  var flag = 0.0;
  if (ix < -0.5 || iy < -0.5 || ix > u.cityX - 0.5 || iy > u.cityY - 0.5
      || w <= 1.0e-6) {
    flag = 2.0;
  } else {
    let ry = clamp(i32(round(iy + u.margin)), 0, i32(u.gy) - 1);
    let rx = clamp(i32(round(ix + u.margin)), 0, i32(u.gx) - 1);
    let layer = round(height[u32(ry) * u32(u.gx) + u32(rx)]
                      / ${Gi(qe)});
    if (layer > u.queryLayer) { flag = 1.0; }
  }
  solid[cell] = flag;
  if (u.pack == 1u) {
    let fw = finalWeight[cell];
    let coverage = select(0.0, clamp(w / fw, 0.0, 1.0), fw > 1.0e-6);
    let out = g * (u.channels + 2u);
    for (var c = 0u; c < u.channels; c++) {
      packed[out + c] = field[cell * u.channels + c];
    }
    packed[out + u.channels] = flag;
    packed[out + u.channels + 1u] = coverage;
  }
}`;function Zi(n,e){if(!n)return e;if(!e)return n;const t=Math.min(n.y0,e.y0),i=Math.min(n.x0,e.x0);return{y0:t,x0:i,h:Math.max(n.y0+n.h,e.y0+e.h)-t,w:Math.max(n.x0+n.w,e.x0+e.w)-i}}function Qi(n,e,t){let i=1/0,r=-1/0;const a=o=>{i=Math.min(i,o),r=Math.max(r,o)};for(let o=0;o<4;o++){const l=n[o],u=n[(o+1)%4];l[1]>=e&&l[1]<=t&&a(l[0]);for(const s of[e,t])if((l[1]-s)*(u[1]-s)<0){const g=(s-l[1])/(u[1]-l[1]);a(l[0]+g*(u[0]-l[0]))}}return i<=r?[i,r]:null}let Ji=class{constructor(e,t,i,r={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=r.batchSize||16,this.fno=new ji(e,t,i,this.batchSize),this.blendPipeline=e.pipeline(qi(this.fno.store)),this.finalizePipeline=e.pipeline(Ki),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,i=t.features,r=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,o=i.mddf_source_indices,l=new Uint32Array(o.length*4),u=new Float32Array(o.length*2);o.forEach((g,h)=>{const f=Math.floor(g/r),c=g%r,d=c>a?1:0,p=c===0?0:d?c-a:c;l.set([f*r+p,f*r+(p===0?0:a+p),p,d],h*4),u[h*2]=i.mddf_center[h],u[h*2+1]=i.mddf_scale[h]});const s=t.coordinates;return{channels:t.model.input_channels,mddfChannels:o.length,solidChannel:i.use_building_input?o.length:-1,coordChannel:o.length+(i.use_building_input?1:0),coordYScale:s.y_scale,coordZCentre:s.z_center,coordZScale:s.z_scale,coordXCentre:s.x_center,coordXScale:s.x_scale,tableBuffer:e.upload(l,"plan.table"),normBuffer:e.upload(u,"plan.norm")}}setCity(e,t,i){this.city&&this.city.field.destroy();const r=Math.ceil(this.patch*Math.SQRT2),a=(t+2*r)*(i+2*r)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(a>o)throw new Error(`city ${i} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const l=new Ni(this.context,e,t,i,r,this.fno.store);return this.city={field:l,ny:t,nx:i,layerMap:e,margin:r,layerIndex:-1},{margin:r,gy:l.gy,gx:l.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:i}=this.city,r=(t-1)/2,a=(i-1)/2,o=Math.cos(e),l=Math.sin(e),u=[[0,0],[i-1,0],[i-1,t-1],[0,t-1]].map(([m,b])=>{const $=m-a,v=b-r;return[a+$*o+v*l,r-$*l+v*o]}),s=Math.floor(Math.min(...u.map(m=>m[1]))),g=Math.ceil(Math.max(...u.map(m=>m[1]))),h=Math.floor(Math.min(...u.map(m=>m[0]))),f=Math.ceil(Math.max(...u.map(m=>m[0]))),c=f-h+1,d=Math.max(1,Math.ceil((c-this.patch)/this.stride)+1),p=d>1?(c-this.patch)/(d-1):0,x=u.map(([m,b])=>[b,m]),y=[],w=[];for(let m=0;m<d;m++){const b=Math.round(h+m*p),$=Qi(x,b,b+this.patch-1)||[s,s+this.patch-1],v=Math.floor($[0]),_=Math.max(this.patch,Math.ceil($[1])-v+1),S=Math.max(1,Math.ceil((_-this.patch)/this.stride)+1),B=S>1?(_-this.patch)/(S-1):0;w.push([y.length/2,S,b-h]);for(let P=0;P<S;P++)y.push(b,Math.round(v+P*B))}return{origins:new Float32Array(y),columns:w,columnCount:d,columnStride:p,syMin:s,sxMin:h,gridH:g-s+1,gridW:f-h+1,patchCount:y.length/2}}patchRect(e,t,i){let r=1/0,a=1/0,o=-1/0,l=-1/0;for(const[u,s,g]of e.columns)for(let h=0;h<s;h++){const f=u+h;if(f<t||f>=i)continue;const c=e.origins[f*2+1]-e.syMin;r=Math.min(r,c),a=Math.min(a,g),o=Math.max(o,c+this.patch),l=Math.max(l,g+this.patch)}return Number.isFinite(r)?(r=Math.max(0,r),a=Math.max(0,a),o=Math.min(e.gridH,o),l=Math.min(e.gridW,l),{y0:r,x0:a,h:Math.max(0,o-r),w:Math.max(0,l-a)}):null}async predict(e,t={}){var Z,te,ce;const{context:i,city:r}=this,a=this.tiling(e),o=this.metadata.model.output_channels,l=a.gridH*a.gridW,u=this.patch*this.patch,s=performance.now(),g=!!(t.shouldDraw&&t.onDraw),h=o+2,f=i.storage(a.patchCount*o*u*this.fno.elementBytes,"predict.patches"),c=new Int32Array(a.patchCount);for(let R=0;R<a.patchCount;R++)c[R]=a.origins[R*2+1]-a.syMin;const d=i.upload(c,"blend.origins"),p=i.upload(new Int32Array(a.columns.flat()),"blend.columns"),x=i.storage(l*o*4,"blend.field"),y=i.storage(l*4,"blend.weight"),w=i.storage(l*4,"blend.solid"),m=i.storage(g?l*4:4,"blend.finalWeight"),b=i.storage(g?l*h*4:4,"blend.packed"),$=this.metadata.target,v=i.upload(new Float32Array($.center),"final.centre"),_=i.upload(new Float32Array($.scale),"final.scale"),S={y0:0,x0:0,h:a.gridH,w:a.gridW},B=(R,Y,Q,de)=>{const le=R.beginComputePass();i.dispatch(le,this.blendPipeline,[f,d,p,x,de,i.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",o],["u",a.columnCount],["u",a.patchCount],["u",Q],["u",0],["u",Y.y0],["u",Y.x0],["u",Y.h],["u",Y.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],Y.h*Y.w),le.end()},P=(R,Y,Q)=>{const de=R.beginComputePass();i.dispatch(de,this.finalizePipeline,[x,y,v,_,r.field.heightBuffer,w,m,b,i.uniform([["u",a.gridH],["u",a.gridW],["u",o],["u",Q?1:0],["u",Y.y0],["u",Y.x0],["u",Y.h],["u",Y.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(r.ny-1)/2],["f",(r.nx-1)/2],["f",r.field.gy],["f",r.field.gx],["f",r.margin],["f",r.layerIndex],["f",r.ny],["f",r.nx],["f",0],["f",0]])],Y.h*Y.w),de.end()};if(g){const R=i.device.createCommandEncoder();B(R,S,a.patchCount,m),i.device.queue.submit([R.finish()]),(Z=t.onStart)==null||Z.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const F=2,I=[];let V=null;for(let R=0;R<a.patchCount;R+=this.batchSize){(te=t.signal)==null||te.throwIfAborted();const Y=Math.min(this.batchSize,a.patchCount-R),Q=i.device.createCommandEncoder(),de=r.field.assemble(Q,a.origins.subarray(R*2,(R+Y)*2),this.plan,e,r.layerIndex,this.patch,this.fno.inputBuffer),le=this.fno.encode(Q,Y);Q.copyBufferToBuffer(le,0,f,R*o*u*this.fno.elementBytes,Y*o*u*this.fno.elementBytes);let ee=null;if(g){V=Zi(V,this.patchRect(a,R,R+Y));const we=R+Y>=a.patchCount;V&&V.h>0&&V.w>0&&(we||t.shouldDraw())&&(ee=V,V=null,B(Q,ee,R+Y,y),P(Q,ee,!0))}if(i.device.queue.submit([Q.finish()]),i.free(de),I.push(i.device.queue.onSubmittedWorkDone()),I.length>F&&await I.shift(),(ce=t.onProgress)==null||ce.call(t,(R+Y)/a.patchCount),ee){const we=await i.readFloat32(b,ee.h*ee.w*h);t.onDraw({x0:ee.x0,y0:ee.y0,width:ee.w,height:ee.h,stride:h,channels:o,theta:e,values:we,readyCount:R+Y,patchCount:a.patchCount})}}const k=i.device.createCommandEncoder();B(k,S,a.patchCount,y),P(k,S,!1),i.device.queue.submit([k.finish()]);const[C,A,X]=await Promise.all([i.readFloat32(x,l*o),i.readFloat32(w,l),i.readFloat32(y,l)]),W=performance.now()-s;let ne=0,z=0;for(let R=0;R<l;R++)if(A[R]!==2){if(X[R]<=1e-6){ne+=1;continue}for(let Y=0;Y<o;Y++)if(!Number.isFinite(C[R*o+Y])){z+=1;break}}for(const R of[f,x,y,w,d,p,v,_,m,b])i.free(R);return i.releaseScratch(),{values:C,solid:A,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:$.channel_names,milliseconds:W,uncovered:ne,nonFinite:z,insideCells:l}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}};function en(n,e){var t,i,r,a,o,l,u,s,g;if(n.dtype!=="float16"||n.total_bytes!==e||((t=n.grid)==null?void 0:t.horizontal_spacing_m)!==4||((i=n.grid)==null?void 0:i.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((r=n.model)==null?void 0:r.input_channels)!==24||((a=n.model)==null?void 0:a.output_channels)!==5||((l=(o=n.inference)==null?void 0:o.patch)==null?void 0:l.join())!=="64,64"||((s=(u=n.target)==null?void 0:u.channel_names)==null?void 0:s.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const h of Object.values(n.tensors??{}))if(!Number.isInteger(h.offset)||h.offset<0||h.offset%2||!Number.isInteger(h.count)||h.count<=0||h.offset+h.count*2>e||!Array.isArray(h.shape)||h.shape.some(f=>!Number.isInteger(f)||f<1)||h.shape.reduce((f,c)=>f*c,1)!==h.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(n.tensors??{}).length||!Number.isFinite((g=n.wind)==null?void 0:g.reference_speed_m_s)||n.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function tn(n){if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<1||n.height<1||n.values.length!==n.width*n.height*5||n.solid.length!==n.width*n.height)throw new Error("Invalid prediction shape.");for(let e=0;e<n.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(n.values[e*5+t])||(n.solid[e]=2,n.values[e*5+t]=0)}const rn=16,nn=4;function on(){let n=null,e=null,t=[];async function i(u){if(n)return;const s="/cityffdv2-demo/flume/model-v2/",[g,h]=await Promise.all(["metadata.json","weights.bin"].map(async f=>{const c=await fetch(s+f,{signal:u});if(!c.ok)throw new Error("Could not load model v2 "+f+" (HTTP "+c.status+").");return f.endsWith(".bin")?c.arrayBuffer():c.json()}));n=await ti.create(),e=g,t=[0,1].map(()=>({predictor:new ri(n,e,h,{batchSize:rn,layerStride:1}),grid:null,key:""}))}async function r(u,s,g,h){const f=g.join(",");(s!==u.grid||f!==u.key)&&(u.predictor.setCity({layers:s.layers,nx:s.nx,ny:s.ny},g),u.grid=s,u.key=f);const{nx:c,ny:d}=s,p=[[-.5,-.5],[c-.5,-.5],[c-.5,d-.5],[-.5,d-.5]];return u.predictor.predict(null,null,h,{polygon:p,overlap:e.inference.overlap})}function a(u,s,g){const h=s.gx*s.gy,f=new Float32Array(h*5),c=new Uint8Array(h),d=g-s.firstLayer;for(let x=0;x<s.gy;x++)for(let y=0;y<s.gx;y++){const w=((x*s.gz+d)*s.gx+y)*nn,m=x*s.gx+y;f[m*5]=s.values[w],f[m*5+1]=s.values[w+1],f[m*5+2]=s.values[w+2],c[m]=s.values[w+3]>0?0:2}const p={width:s.gx,height:s.gy,originX:s.layout.gridX0,values:f,solid:c};vt(u,u.plan.indexOf(g),p)}async function o(u,s,g,{signal:h,onFirstWave:f,onMoreLayers:c}={}){await i(h),ei(s[0],s.at(-1));const d=wt(s).slice(0,bt),p=s.filter(b=>d.includes(b)),x=s.filter(b=>!d.includes(b)),y=await r(t[0],u,p,g);if(!y)return null;const w=xt({width:y.gx,height:y.gy,originX:y.layout.gridX0,originY:y.layout.gridY0,theta:g},s,!1);for(const b of p)a(w,y,b);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(f==null||f({volume:w,referenceSpeed:m}),x.length){const b=await r(t[1],u,x,g);if(!b)return null;for(const $ of x)a(w,b,$);c==null||c()}return w}async function l(u,s,g){await i(g);const{predictor:h}=t[0],f=h.inputPlan.stored,c=Math.ceil(h.patch*Math.SQRT2),d=new Qr(n,u,c,h.fno.store,h.inputPlan),p=d.gx*d.gy*f.length*4;let x=null;d.packGroup=async()=>{x=await n.readBack(p,(m,b)=>m.copyBufferToBuffer(d.sumsBuffer,0,b,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(b=>b/Jr))};try{const m=d.planGroups([s],h.bufferLimit);d.allocate(m),await d.scan(m[0],()=>{})}finally{d.destroy()}if(!x)throw new Error("Model v2 MDDF could not be read.");const y=f.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:x,ny:d.gy,nx:d.gx,margin:c,layerIndex:s,channels:y,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:o,readMddf:l,cancel(){for(const u of t)u.predictor.cancel()},destroy(){for(const u of t)u.predictor.destroy();n==null||n.device.destroy(),t=[],n=null}}}const Ie=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class Ae extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const oe=()=>new Ae(Ie.MODEL,"the model data does not match this page"),O=256;class Mt{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Ae(Ie.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(a=>setTimeout(a,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new Ae(Ie.GPU,"No WebGPU adapter available.");const i=e&&t.features.has("shader-f16"),r=await t.requestDevice({requiredFeatures:i?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Mt(r,i)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const i=Math.max(4,Math.ceil(e/4)*4),r=this.device.createBuffer({size:i,usage:t});return r.tracked=!0,r}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const i=new Uint8Array(Math.ceil(t.byteLength/4)*4);i.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,i)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,i=new ArrayBuffer(t),r=new Uint32Array(i),a=new Int32Array(i),o=new Float32Array(i);e.forEach(([u,s],g)=>{u==="u"?r[g]=s:u==="i"?a[g]=s:o[g]=s});const l=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(l,0,i),l}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),i=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,i)}return this.pipelines.get(e)}dispatch(e,t,i,r,a=O){this.dispatchGroups(e,t,i,...this.workgroups(r,a))}workgroups(e,t=O){const i=Math.max(1,Math.ceil(e/t)),r=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(i,r),Math.ceil(i/r)]}dispatchGroups(e,t,i,...r){this.replay(e,this.prepared(t,i,r))}prepared(e,t,i){const r=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((a,o)=>({binding:o,resource:{buffer:a}}))});return{pipeline:e,bindGroup:r,groups:i}}replay(e,{pipeline:t,bindGroup:i,groups:r}){e.setPipeline(t),e.setBindGroup(0,i),e.dispatchWorkgroups(...r)}async readBack(e,t,i){const r=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),a=this.device.createCommandEncoder();t(a,r),this.device.queue.submit([a.finish()]);try{await r.mapAsync(GPUMapMode.READ);const o=await i(r.getMappedRange());return r.unmap(),o}finally{this.free(r)}}}const lt=4,Te=1.5;function mr(n,e,t){const i=(e-1)/2,r=(t-1)/2,a=Math.cos(n),o=Math.sin(n);return{theta:n,cX:i,cY:r,cos:a,sin:o,toWind:([l,u])=>{const s=l-i,g=u-r;return[i+s*a+g*o,r-s*o+g*a]},toCity:([l,u])=>{const s=l-i,g=u-r;return[i+s*a-g*o,r+s*o+g*a]}}}const J=64,G=180,yr=1600,an=640,pe=8,U=32,ye=n=>n.toFixed(6),me=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},sn=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,ln=()=>`
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
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${J}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${ye(Te)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${ye(Te)}, has1);
  let cutoff = ${ye(yr)};
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
}`;function un(n){const e=i=>i.part==="dc"?"dc":`${i.part}.${i.mode===1?"x":"y"}`,t=n.map((i,r)=>`  sums[e + ${r}u] += ${e(i)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${J}u;
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
}`}const _e=64,re=8,Ce=_e/re,ie=Ce*Ce,ut=re*re,jt=Math.log2(_e),Gt=Math.log2(re),Ye=re-1,kt="15u",ct="4u",wr="0xfffu",dt="2048",cn="4095",St="16u",qt=(n,e,t,i,r)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${r?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(me).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${ye(G)} / STEPS[c]));
}
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${J}u;
  if (g >= u.nTiles * ${ie}u) { return; }
  let t = g / ${ie}u;
  let b = g % ${ie}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${i}u;
  let c = (t / ${t*i}u) % ${n.length}u;
  let k = t / ${t*i*n.length}u;
${r?`  let h = field[u.nTiles + t * ${ie}u + b];
  let w = h & ${kt};
  if (w == 0u) { return; }
  let base = i32((h >> ${ct}) & ${wr}) - ${dt};
  var wi = field[t] + (h >> ${St});
  let x0 = tx * ${_e}u + (b % ${Ce}u) * ${re}u;
  let y0 = ty * ${_e}u + (b / ${Ce}u) * ${re}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${ut}u; j++) {
    let x = x0 + j % ${re}u; let y = y0 + j / ${re}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${_e}u + (b % ${Ce}u) * ${re}u;
  let y0 = ty * ${_e}u + (b / ${Ce}u) * ${re}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${ut}u; j++) {
    let x = x0 + j % ${re}u; let y = y0 + j / ${re}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ie}u + b] = w | (u32(clamp(mn + ${dt}, 0, ${cn})) << ${ct});`}
}`,dn=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${J}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${ie}u; b++) {
    let h = headers[t * ${ie}u + b];
    headers[t * ${ie}u + b] = h | (local << ${St});
    local += ${ut/32}u * (h & ${kt});
  }
  tileWords[t] = local;
}`,fn=n=>{const e=`array<f32, ${pe}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${sn}
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
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${J}u;
  let groupsPerPixel = (u.layerCount + ${pe-1}u) / ${pe}u;
  let cells = ${U*U}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${U} + i32(cell % ${U}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${U} + i32(cell / ${U}u));
  let slotTile = u32(tiles[3u * tile + 2u]);
  let dxw = sx - u.centreX;
  let dyw = sy - u.centreY;
  let px = u.centreX + dxw * u.cosT - dyw * u.sinT + f32(u.margin);
  let py = u.centreY + dxw * u.sinT + dyw * u.cosT + f32(u.margin);
  let x0 = i32(floor(px + 0.5));
  let y0 = i32(floor(py + 0.5));
  let fx = px + 0.5 - f32(x0);
  let fy = py + 0.5 - f32(y0);
  let first = layerGroup * ${pe}u;
  let count = min(${pe}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${pe}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${ye(Te)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${ye(lt)};
    let gyr = u.sinU / ${ye(lt)};
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
    let cutoff = ${ye(yr)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${pe}>;
    for (var k = 0u; k < ${pe}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${an}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${pe}u; k++) {
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
${n.map((i,r)=>`    put(e0 + ${r}u, ${t[i]});`).join(`
`)}
  }
}`},gn=(n,e,t)=>{const i=e.stored.length,r=e.up.length,{usesHeight:a}=e,o=[["field","array<u32>"]];a&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),r&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const l=o.map(([g,h],f)=>`@group(0) @binding(${f}) var<storage, read> ${g}: ${h};`);l.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${n}>;`),l.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const u=(g,h)=>`(${g} - ${me(h.center)}) / ${me(h.scale)}`,s=e.inputs.map((g,h)=>{let f;if(g.source==="r1")if(g.part==="dc")f=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(g.signal,"dc",0)}u)`,g)};`;else{const c=e.storedIndex(g.signal,"re",g.mode),d=e.storedIndex(g.signal,"im",g.mode);f=`let re = sampleField(ry, rx, slot, ${c}u);
      let im = sampleField(ry, rx, slot, ${d}u);
      let angle = ${me(g.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(g.part==="im"?"(re * s + im * c)":"(re * c - im * s)",g)};`}else if(g.source==="geo"){const c=g.index===0?"h / 100.0":"asinh((h - z) / 10.0)";f=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${c})`,g)};`}else g.source==="up"?f=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(g.index)}u)`,g)};`:g.source==="solid"?f=`let roofLayer = round(roofHeight(iy, ix) / ${ye(Te)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:g.axis==="y"?f=`value = (sy - u.centreY) / ${me(g.scale)};`:g.axis==="z"?f=`value = (f32(layer) - ${me(g.center)}) / ${me(g.scale)};`:f=`value = (sx - ${me(g.center)}) / ${me(g.scale)};`;return`    case ${h}u: {
      ${f}
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
${l.join(`
`)}
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${i}> = array<f32, ${i}>(${t.steps.map(me).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${i}u + c) * ${t.ty}u + (y >> ${jt}u)) * ${t.tx}u + (x >> ${jt}u);
  let h = field[u.packTiles + t * ${ie}u + ((y >> ${Gt}u) & ${Ye}u) * ${Ce}u + ((x >> ${Gt}u) & ${Ye}u)];
  let w = h & ${kt};
  var q = i32((h >> ${ct}) & ${wr}) - ${dt};
  if (w > 0u) {
    let bit = (((y & ${Ye}u) * ${re}u) + (x & ${Ye}u)) * w;
    let word = field[t] + (h >> ${St}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${r?`
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(U)}u) >= u.upTW || u32(ty >> ${Math.log2(U)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(U)}u) * u.upTW + u32(tx >> ${Math.log2(U)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${U*U}u + u32(ty & ${U-1}) * ${U}u + u32(tx & ${U-1})) * ${r}u + c;
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
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
  let z = (f32(layer) + 0.5) * ${ye(Te)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${s.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},hn=4,pn=3,mn=.016,yn=256;class br{constructor(e,{layers:t,ny:i,nx:r},a,o,l){this.context=e,this.inputPlan=l,this.ny=i,this.nx=r,this.margin=a,this.gy=i+2*a,this.gx=r+2*a;const u=new Float32Array(this.gy*this.gx);for(let d=0;d<i;d++)for(let p=0;p<r;p++)u[(d+a)*this.gx+p+a]=t[d*r+p]*Te;this.heightBuffer=e.upload(u);const s=new Float32Array(G),g=new Float32Array(G);for(let d=0;d<G;d++)s[d]=Math.cos(2*Math.PI*d/G),g[d]=Math.sin(2*Math.PI*d/G);this.cosT=s,this.sinT=g,this.scanPipeline=e.pipeline(ln()),this.accumulatePipeline=e.pipeline(un(l.stored)),this.upWind=l.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(fn(l.up)));const h=l.stored.map(d=>2*mn*d.scale),f=Math.ceil(this.gx/_e),c=Math.ceil(this.gy/_e);this.packed={steps:h,tx:f,ty:c},this.packHeaderPipeline=e.pipeline(qt(l.stored,h,f,c,!1)),this.packPayloadPipeline=e.pipeline(qt(l.stored,h,f,c,!0)),this.packTilePipeline=e.pipeline(dn()),this.assemblePipeline=e.pipeline(gn(o,l,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const i=this.gx*this.gy,r=this.storedBytesPerCellLayer*i;let a=Math.max(1,Math.min(e.length,Math.floor(t/r)));if(a=Math.min(a,hn),r>t)throw new Ae(Ie.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let l=0;l<e.length;l+=a){const u=e.slice(l,l+a),s=new Int32Array(yn).fill(-1);u.forEach((g,h)=>{s[g]=h}),o.push({layers:u,slots:s,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const i of e)i.slotBuffer=t.upload(i.slots),i.layerBuffer=t.upload(new Uint32Array(i.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,i=Math.max(e,t),r=new Int32Array(G*i),a=new ArrayBuffer(G*32),o=new Uint32Array(a),l=new Int32Array(a),u=new Float32Array(a),s=new Float32Array(G*4);let g=0;for(let h=0;h<G;h++){const f=this.cosT[h],c=this.sinT[h],d=Math.abs(f)>=Math.abs(c),p=d?f:c,x=d?c:f,y=Math.abs(x/p),w=d?e:t,m=d?t:e;for(let v=0;v<w;v++)r[h*i+v]=Math.round(y*v);const b=r[h*i+w-1],$=m+b;g=Math.max(g,$),o[8*h]=d?1:0,l[8*h+1]=p>=0?1:-1,l[8*h+2]=x>=0?1:-1,l[8*h+3]=b,o[8*h+4]=$,o[8*h+5]=h*i,u[8*h+6]=lt*Math.sqrt(1+y*y),s.set([f,c,Math.cos(4*Math.PI*h/G),Math.sin(4*Math.PI*h/G)],4*h)}return this.offsetBuffer=this.context.upload(r),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(s),this.scanInfo={lineMax:g},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:i,gy:r}=this,{lineMax:a}=this.scanTables(),o=i*r,l=this.inputPlan.stored.length,u=e.layers.length,s=Math.ceil(u/2),g=Math.max(1,Math.min(G,Math.floor(this.scanRawBytes/(s*o*4)))),h=g*s*o*4,f=u*o*l*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<f)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(f));const c=t.device.createCommandEncoder();c.clearBuffer(this.sumsBuffer,0,u*o*l*4),t.device.queue.submit([c.finish()]);const d=[];for(let p=0;p<G;p+=g){if(this.destroyed)return;const x=Math.min(g,G-p),y=t.device.createCommandEncoder(),w=y.beginComputePass(),m=t.uniform([["u",i],["u",r],["u",o],["u",0],["u",u],["u",s],["u",p],["u",x],["u",a],["u",0],["u",0],["u",0]]);t.dispatch(w,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],a*s*x,J);const b=t.uniform([["u",o],["u",u],["u",s],["u",p],["u",x],["u",0],["u",0],["u",0]]);t.dispatch(w,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,b],o*u,J),w.end(),t.device.queue.submit([y.finish()]),d.push(t.device.queue.onSubmittedWorkDone()),d.length>=pn&&await d.shift()}this.destroyed||(await this.packGroup(e,u,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,i){const{context:r,gx:a,gy:o}=this,{tx:l,ty:u}=this.packed,s=t*this.inputPlan.stored.length*l*u,g=r.storage(s*ie*4),h=r.storage(s*4),f=r.uniform([["u",a],["u",o],["u",i],["u",t],["u",s],["u",0],["u",0],["u",0]]),c=r.uniform([["u",s],["u",0],["u",0],["u",0]]),d=()=>{r.free(g),r.free(h)},p=(v,_)=>{const S=v.beginComputePass();r.dispatch(S,this.packHeaderPipeline,[this.sumsBuffer,g,f],s*ie,J),r.dispatch(S,this.packTilePipeline,[g,h,c],s,J),S.end(),v.copyBufferToBuffer(h,0,_,0,s*4)};let x;try{x=await r.readBack(s*4,p,v=>this.destroyed?null:new Uint32Array(v.slice(0)))}catch(v){throw d(),v}if(!x){d();return}const y=new Uint32Array(s);let w=s+s*ie;for(let v=0;v<s;v++)y[v]=w,w+=x[v];r.free(e.field),e.field=r.storage(Math.max(4,w*4)),e.packTiles=s,r.write(e.field,y);const m=r.device.createCommandEncoder();m.copyBufferToBuffer(g,0,e.field,s*4,s*ie*4);const b=m.beginComputePass(),$=r.uniform([["u",a],["u",o],["u",i],["u",t],["u",s],["u",0],["u",0],["u",0]]);r.dispatch(b,this.packPayloadPipeline,[this.sumsBuffer,e.field,$],s*ie,J),b.end(),r.device.queue.submit([m.finish()]),await r.device.queue.onSubmittedWorkDone(),d()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const i=t/(2*Math.PI)*G,r=Math.round(i)%G;return Math.abs(i-Math.round(i))<1e-6?[this.cosT[r],this.sinT[r]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const i=mr(e,this.nx,this.ny);let r=1/0,a=-1/0,o=1/0,l=-1/0;for(const f of[-.5,this.nx-.5])for(const c of[-.5,this.ny-.5]){const[d,p]=i.toWind([f,c]);r=Math.min(r,d),a=Math.max(a,d),o=Math.min(o,p),l=Math.max(l,p)}const u=Math.floor((r-t)/U)*U,s=Math.floor((o-t)/U)*U,g=Math.ceil((a+t+1-u)/U),h=Math.ceil((l+t+1-s)/U);return{theta:e,x0:u,y0:s,tw:g,th:h,table:new Int32Array(g*h).fill(-1),count:0}}ensureUpTiles(e,t,i,r){const{context:a}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,r));const l=[];for(const[m,b]of i){const $=Math.floor((b-o.x0)/U),v=Math.floor((b+r-1-o.x0)/U),_=Math.floor((m-o.y0)/U),S=Math.floor((m+r-1-o.y0)/U);if($<0||_<0||v>=o.tw||S>=o.th)throw new Error("internal layout error");for(let B=_;B<=S;B++)for(let P=$;P<=v;P++){const F=B*o.tw+P;o.table[F]<0&&(o.table[F]=o.count+l.length/3,l.push(P,B,o.table[F]))}}const u=l.length/3;if(!u)return 0;const s=o.count,g=s+u,h=this.inputPlan.up.length,f=U*U,c=a.device.createCommandEncoder(),d=[];for(const m of e){const b=m.layers.length*f*h*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<g){const $=Math.min(o.tw*o.th,Math.max(g,Math.ceil(m.upCapacity*1.5))),v=a.storage($*b);m.upTiles&&m.upCount&&c.copyBufferToBuffer(m.upTiles,0,v,0,m.upCount*b),m.upTiles&&d.push(m.upTiles),m.upTiles=v,m.upCapacity=$}m.upGrid=o,c.clearBuffer(m.upTiles,s*b,u*b),m.upCount=g}const p=a.upload(new Int32Array(l)),[x,y]=this.upwindDirection(t),w=c.beginComputePass();for(const m of e){const b=[this.heightBuffer,m.layerBuffer,m.upTiles,p];a.dispatch(w,this.alongPipeline,[...b,a.uniform([["u",this.gx],["u",this.gy],["u",u],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",x],["f",y],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*f*Math.ceil(m.layers.length/pe),J)}w.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(a.free(this.upTableBuffer),this.upTableBuffer=a.storage(o.table.byteLength)),a.write(this.upTableBuffer,o.table),a.device.queue.submit([c.finish()]);for(const m of d)a.free(m);return a.free(p),o.count=g,u}assemble(e,t,i,r,a,o){var x,y,w,m;const{context:l,inputPlan:u,gx:s,gy:g}=this,h=t.length/3,f=l.upload(t),c=l.uniform([["u",h],["u",u.inputs.length],["u",a],["u",a],["u",s],["u",g],["u",0],["u",0],["u",s],["u",g],["u",s*g],["u",this.margin],["f",Math.cos(r)],["f",Math.sin(r)],["f",r],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",i.packTiles],["f",0],["f",0],["i",((x=this.upGrid)==null?void 0:x.x0)??0],["i",((y=this.upGrid)==null?void 0:y.y0)??0],["u",((w=this.upGrid)==null?void 0:w.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",i.layers.length],["u",0],["u",0],["u",0]]),d=[i.field];if(u.usesHeight&&d.push(this.heightBuffer),d.push(f,i.slotBuffer),u.up.length){if(i.upGrid!==this.upGrid)throw new Error("internal layout error");d.push(i.upTiles,this.upTableBuffer)}d.push(o,c);const p=e.beginComputePass();return l.dispatch(p,this.assemblePipeline,d,h*u.inputs.length*a*a),p.end(),f}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function wn(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw oe();const t=[],i=(u,s,g)=>t.findIndex(h=>h.key===`${u}:${s}:${g}`),r=(u,s,g)=>{i(u.signal,s,g)>=0||t.push({key:`${u.signal}:${s}:${g}`,signal:u.signal,part:s,mode:g,scale:u.scale})},a=[];for(const u of e){if(u.source==="r1")u.part==="dc"?r(u,"dc",0):(r(u,"re",u.mode),r(u,"im",u.mode));else if(u.source==="up")a.includes(u.index)||a.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw oe();if(u.source==="geo"&&![0,1].includes(u.index)||u.source==="up"&&!(u.index>=0&&u.index<4))throw oe()}for(const u of t)if(u.mode>2)throw oe();const o=[...new Set(t.map(u=>u.signal))].sort();if(o.length!==1||o[0]!==0)throw oe();const l=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:i,up:a,usesHeight:l}}function ft(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let $e=null;function bn(){if($e)return $e;$e=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,i=n&1023;t===0?$e[n]=e*i*2**-24:t===31?$e[n]=i?NaN:e*(1/0):$e[n]=e*(1+i/1024)*2**(t-15)}return $e}function xn(n){const e=new Float32Array(n.length),t=bn();for(let i=0;i<n.length;i++)e[i]=t[n[i]];return e}function vn(n){const e=new Uint16Array(n.length),t=new Float32Array(1),i=new Uint32Array(t.buffer);for(let r=0;r<n.length;r++){t[0]=n[r];const a=i[0],o=a>>>16&32768,l=a>>>23&255;let u=a&8388607;if(l===255){e[r]=o|31744|(u?1:0);continue}const s=l-127+15;if(s>=31){e[r]=o|31744;continue}if(s<=0){if(s<-10){e[r]=o;continue}u|=8388608;const h=14-s;let f=u>>>h;u>>>h-1&1&&(f+=1),e[r]=o|f;continue}let g=s<<10|u>>>13;u&4096&&(g+=1),e[r]=o|g}return e}const Ct=`
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
`,_n=`
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
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`;function Kt(n,e,t){const{enable:i,load:r,save:a}=Fe(n);return`${i}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${O}>;
@compute @workgroup_size(${O})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${O}u) { s += ${r("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${O/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${O}u) {
    let d = ${r("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${O/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${O}u) {
    Y[base + i] = ${a("("+r("X[base + i]")+" - mean) * inverse")};
  }
}`}const gt=32,Zt=1e-5,Ue=16;function Fe(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function $n(n){const{store:e,patch:t}=n,i=t*t,{enable:r,load:a,save:o}=Fe(e);return`${r}${Ct}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${Ue}u;
var<workgroup> w: array<f32, ${Ue*n.cinMax}>;
@compute @workgroup_size(${O})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${i/O}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${i/O}u;
  let p = (wg % ${i/O}u) * ${O}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${O}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${a("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${Ue}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${a("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${i}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${a("X[xBase + i * "+i+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${i}u + p] = ${o("v")};
  }
}`}function Mn(n){const{store:e,patch:t}=n,i=t*t,{enable:r,load:a,save:o}=Fe(e);return`${r}${Ct}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  if (g >= u.batch * u.mid * ${i}u) { return; }
  let p = g % ${i}u;
  let m = (g / ${i}u) % u.mid;
  let b = g / (${i}u * u.mid);
  let value = ${a("G[(b * 2u * u.mid + m) * "+i+"u + p]")};
  let gateValue = ${a("G[(b * 2u * u.mid + u.mid + m) * "+i+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function kn(n){const{store:e,patch:t,modes2:i}=n,r=t*t,{enable:a,load:o}=Fe(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  if (g >= u.batch * u.channels * ${t*i}u) { return; }
  let k = g % ${i}u;
  let y = (g / ${i}u) % ${t}u;
  let bc = g / ${t*i}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${r}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${o("X[base + x]")};
    accRe += v * tableCos[x * ${i}u + k];
    accIm += v * tableSin[x * ${i}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Sn(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`}function Cn(n){const{modes1:e,modes2:t}=n,i=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  let block = ${i*t}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${t}u;
  let s = (g / ${t}u) % ${i}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${e}u);
  let sp = s - half * ${e}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${e*t}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${t}u + k;
  let xBase = (b * u.channels * ${i}u + s) * ${t}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Bn(n){const{store:e,patch:t,modes2:i}=n,r=t*t,{enable:a,save:o}=Fe(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  if (g >= u.batch * u.channels * ${r}u) { return; }
  let p = g % ${r}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${r}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${o("acc * "+1/gt)};
}`}function Pn(n){const{store:e}=n,{enable:t,load:i,save:r}=Fe(e);return`${t}${Ct}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
  if (g >= u.total) { return; }
  var acc = ${i("A[g]")} + ${i("B[g]")} + ${i("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${r("acc")};
}`}function In(n){const{store:e,patch:t}=n,i=t*t;return{conv1x1:$n(n),gate:Mn(n),instanceNorm:Kt(e,i,Zt),instanceNormScaled:Kt(e,i,Zt/(gt*gt)),forwardColumns:kn(n),rowMix:Sn(n),spectralMix:Cn(n),inverseColumns:Bn(n),residual:Pn(n)}}function An(n,e,t){const i=2*e,r=[];for(let c=0;c<e;c++)r.push(c);for(let c=n-e;c<n;c++)r.push(c);const a=new Float32Array(n*t),o=new Float32Array(n*t);for(let c=0;c<n;c++)for(let d=0;d<t;d++){const p=2*Math.PI*c*d/n;a[c*t+d]=Math.cos(p),o[c*t+d]=-Math.sin(p)}const l=new Float32Array(i*n),u=new Float32Array(i*n);for(let c=0;c<i;c++)for(let d=0;d<n;d++){const p=2*Math.PI*r[c]*d/n;l[c*n+d]=Math.cos(p),u[c*n+d]=-Math.sin(p)}const s=new Float32Array(n*i),g=new Float32Array(n*i);for(let c=0;c<n;c++)for(let d=0;d<i;d++){const p=2*Math.PI*r[d]*c/n;s[c*i+d]=Math.cos(p)/n,g[c*i+d]=Math.sin(p)/n}const h=new Float32Array(t*n),f=new Float32Array(t*n);for(let c=0;c<t;c++){const d=(c===0?1:2)/n;for(let p=0;p<n;p++){const x=2*Math.PI*c*p/n;h[c*n+p]=d*Math.cos(x),f[c*n+p]=-d*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:l,rowIm:u,inverseRowRe:s,inverseRowIm:g,inverseColCos:h,inverseColSin:f}}function Rn(n,e,t){const i=n.tensors[t];if(!i)throw oe();return xn(new Uint16Array(e,i.offset,i.count))}class Tn{constructor(e,t,i,r){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.depth=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%O)throw oe();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[s,g]of Object.entries(In(o)))this.pipelines[s]=e.pipeline(g);this.contractPipeline=e.pipeline(_n);const l=s=>Rn(t,i,s);this.tables={};for(const[s,g]of Object.entries(An(this.patch,this.modes1,this.modes2)))this.tables[s]=e.upload(g);this.weights={};const u=(s,g)=>{const h=l(g);this.weights[s]=this.store==="f16"?e.upload(vn(h)):e.upload(h)};u("p1w","a.m1.weight"),u("p1b","a.m1.bias"),u("p2w","a.m2.weight"),u("p2b","a.m2.bias"),u("q1w","b.m1.weight"),u("q1b","b.m1.bias"),u("q2w","b.m2.weight"),u("q2b","b.m2.bias");for(let s=0;s<this.depth;s++)u(`m1w${s}`,`c.${s}.m1.weight`),u(`m1b${s}`,`c.${s}.m1.bias`),u(`m2w${s}`,`c.${s}.m2.weight`),u(`m2b${s}`,`c.${s}.m2.bias`),u(`lw${s}`,`d.${s}.weight`),u(`lb${s}`,`d.${s}.bias`);this.buildSpectralWeights(l),this.allocate(r),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:i}=this,r=i.factored;let a=r.core_shape.slice(),o=t.upload(e(`${r.core}.re`)),l=t.upload(e(`${r.core}.im`));for(const s of r.factors){const[g,h]=s.shape;if(a[s.mode]!==h)throw oe();const f=a.slice();f[s.mode]=g;const c=f.reduce((v,_)=>v*_,1),d=f.slice(s.mode+1).reduce((v,_)=>v*_,1),p=t.storage(c*4),x=t.storage(c*4),y=t.upload(e(`${s.name}.re`)),w=t.upload(e(`${s.name}.im`)),m=t.uniform([["u",f[0]],["u",f[1]],["u",f[2]],["u",f[3]],["u",f[4]],["u",s.mode],["u",g],["u",h],["u",d],["u",0],["u",c],["u",0]]),b=t.device.createCommandEncoder(),$=b.beginComputePass();t.dispatch($,this.contractPipeline,[o,l,y,w,p,x,m],c),$.end(),t.device.queue.submit([b.finish()]),t.free(o),t.free(l),t.free(y),t.free(w),o=p,l=x,a=f}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(a.join()!==u.join())throw oe();this.spectralRe=o,this.spectralIm=l}allocate(e){const{context:t}=this,i=this.patch*this.patch,r=this.width,a=2*this.modes1,o=f=>t.storage(e*f*i*this.elementBytes),l=f=>t.storage(e*r*f*4),u=o(Math.max(4*r,this.inputChannels,this.outputChannels)),s=o(2*r),g=l(this.patch*this.modes2),h=l(this.patch*this.modes2);this.buffers={x:o(r),input:u,t2:u,gates:u,spectral:u,output:u,wide:s,t1:s,hidden:s,local:s,xRe:g,xIm:h,yRe:l(a*this.modes2),yIm:l(a*this.modes2),zRe:l(a*this.modes2),zIm:l(a*this.modes2),wRe:g,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/Ue)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const i=e.beginComputePass();for(const r of this.passes.get(t))this.context.replay(i,r);return i.end(),this.buffers.output}dispatches(e){const{context:t,buffers:i,pipelines:r,tables:a}=this,o=this.width,l=this.patch*this.patch,u=2*this.modes1,s=[],g=(f,c,d,p)=>{s.push(t.prepared(f,[...c,t.keptUniform(d)],t.workgroups(p)))},h=(f,c,d=r.instanceNorm)=>{s.push(t.prepared(d,[f,c],[e*o]))};g(r.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),g(r.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let f=0;f<this.depth;f++)h(i.x,i.t1),g(r.forwardColumns,[i.t1,a.forwardCos,a.forwardSin,i.xRe,i.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),g(r.rowMix,[i.xRe,i.xIm,a.rowRe,a.rowIm,i.yRe,i.yIm],[["u",e],["u",o],["u",u],["u",this.patch]],e*o*u*this.modes2),g(r.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",e],["u",o],["u",2*f],["u",0]],e*o*u*this.modes2),g(r.rowMix,[i.zRe,i.zIm,a.inverseRowRe,a.inverseRowIm,i.wRe,i.wIm],[["u",e],["u",o],["u",this.patch],["u",u]],e*o*this.patch*this.modes2),g(r.inverseColumns,[i.wRe,i.wIm,a.inverseColCos,a.inverseColSin,i.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*l),h(i.t2,i.t1,r.instanceNormScaled),g(r.conv1x1,[i.t1,this.weights[`m1w${f}`],this.weights[`m1b${f}`],i.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),g(r.gate,[i.gates,i.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*l),g(r.conv1x1,[i.hidden,this.weights[`m2w${f}`],this.weights[`m2b${f}`],i.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),g(r.conv1x1,[i.x,this.weights[`lw${f}`],this.weights[`lb${f}`],i.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),g(r.residual,[i.spectral,i.local,i.x],[["u",e*o*l],["u",f<this.depth-1?1:0],["u",0],["u",0]],e*o*l);return g(r.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),g(r.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),s}}const Fn=(n,e)=>`${n==="f16"?`enable f16;
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
@compute @workgroup_size(${O})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${O}u;
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
}`;function Qt(n,e,t,i){if(e<=t)return[n];const r=Math.ceil((e-t)/i)+1,a=[];for(let o=0;o<r;o++)a.push(n+o*t-ft(o*(r*t-e)/(r-1)));return a}function En(n,e,t){let i=1/0,r=-1/0;const a=o=>{i=Math.min(i,o),r=Math.max(r,o)};for(let o=0;o<n.length;o++){const l=n[o],u=n[(o+1)%n.length];l[0]>=e&&l[0]<=t&&a(l[1]);for(const s of[e,t])(l[0]-s)*(u[0]-s)<0&&a(l[1]+(s-l[0])/(u[0]-l[0])*(u[1]-l[1]))}return i<=r?[i,r]:null}const Ln=(n,e)=>Math.max(1,Math.round(n*(1-e)));function xr(n,e,t,i,r){const a=mr(n,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(a.toWind),l=Math.floor(Math.min(...o.map(f=>f[0]))),u=Math.floor(Math.min(...o.map(f=>f[1]))),s=Math.ceil(Math.max(...o.map(f=>f[0])))-l+1,g=Math.ceil(Math.max(...o.map(f=>f[1])))-u+1,h=[];for(const f of Qt(l,s,i,r)){const c=En(o,f,f+i-1);if(!c)continue;const d=Math.floor(c[0]),p=Math.max(i,Math.ceil(c[1])-d+1);for(const x of Qt(d,p,i,r))h.push([x,f])}return{theta:n,gx:s,gy:g,gridX0:l,gridY0:u,patches:h,frame:a}}const Dn=8,vr=new MessageChannel,_r=[];vr.port1.onmessage=()=>{var n;return(n=_r.shift())==null?void 0:n()};const zn=()=>new Promise(n=>{_r.push(n),vr.port2.postMessage(0)}),On=n=>Math.ceil(n*Math.SQRT2),Vn=128<<20,Xn=2,Ee=1e-6,Me=6e4,Yn=4,Nn=48<<20,Un=16;function ke(n,e,t){let i;const r=new Promise((a,o)=>{i=setTimeout(()=>o(new Ae(Ie.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,r]).finally(()=>clearTimeout(i))}function Wn(n,e,t,i){let r=1/0,a=-1/0,o=1/0,l=-1/0,u=1/0,s=-1/0;for(const[g,h,f]of n)r=Math.min(r,g-e.gridY0),a=Math.max(a,g-e.gridY0+t),o=Math.min(o,f-e.gridX0),l=Math.max(l,f-e.gridX0+t),u=Math.min(u,h-i),s=Math.max(s,h-i+1);return{ry0:Math.max(0,r),ry1:Math.min(e.gy,a),rx0:Math.max(0,o),rx1:Math.min(e.gx,l),rz0:u,rz1:s}}function Hn(n,e,t){const{gx:i,gy:r}=n,a=new Int32Array(r).fill(i),o=new Int32Array(r).fill(0);for(const[s,g]of n.patches){const h=Math.max(0,s-n.gridY0),f=Math.min(r,s-n.gridY0+e),c=Math.max(0,g-n.gridX0),d=Math.min(i,g-n.gridX0+e);for(let p=h;p<f;p++)c<a[p]&&(a[p]=c),d>o[p]&&(o[p]=d)}const l=new Uint32Array(3*r+1);let u=0;for(let s=0;s<r;s++){const g=Math.max(0,o[s]-a[s]);l[s]=u,l[r+1+s]=g?a[s]:0,l[2*r+1+s]=g,u+=g*t}return l[r]=u,{table:l,count:u}}function jn(n,e){const t=new Float32Array(n);for(let i=0;i<n;i++)t[i]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*i/(n-1)));return t}function Gn(n,e,t){const{gx:i,gy:r,gridX0:a,gridY0:o,patches:l}=n,u=new Float32Array(i*r),s=jn(e,t);for(const[g,h]of l)for(let f=0;f<e;f++){const c=g-o+f;if(c<0||c>=r)continue;const d=c*i,p=s[f];for(let x=0;x<e;x++){const y=h-a+x;y>=0&&y<i&&(u[d+y]+=p*s[x])}}return u}function qn(n,e,t,i){const{gx:r,gy:a,gridX0:o,gridY0:l,frame:{cX:u,cY:s,cos:g,sin:h}}=n,f=new Float32Array(r*a);for(let c=0;c<a;c++){const d=l+c-s;for(let p=0;p<r;p++){const x=o+p-u,y=u+x*g-d*h,w=s+x*h+d*g;if(y<-.5||w<-.5||y>i-.5||w>t-.5){f[c*r+p]=-1;continue}const m=Math.min(i-1,Math.max(0,ft(y))),b=Math.min(t-1,Math.max(0,ft(w)));f[c*r+p]=e[b*i+m]}}return f}class Kn{constructor(e,t,i,{batchSize:r}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=r,this.channels=t.model.output_channels,this.bufferLimit=Math.min(Vn,e.device.limits.maxStorageBufferBindingSize),this.network=new Tn(e,t,i,r),this.blendPipeline=e.pipeline(Fn(this.network.store,this.channels)),this.inputPlan=wn(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,i){var a;this.cancel(),(a=this.city)==null||a.distanceField.destroy();const r=new br(this.context,{layers:e,ny:t,nx:i},On(this.patch),this.network.store,this.inputPlan);r.scanRawBytes=Math.ceil(Nn*Math.min(1,this.batchSize/Un)),this.city={distanceField:r,ny:t,nx:i,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:i,patch:r}=this,a=`${e}:${t}`;return((o=i.frame)==null?void 0:o.key)!==a&&(i.frame={key:a,layout:xr(e,i.nx,i.ny,r,t),final:null,roof:null}),i.frame}finalOf(e){return e.final??(e.final=Gn(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=qn(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,i=e.join();if(t.storedKey===i)return!1;const{distanceField:r}=t;r.releaseGroups(),r.upGrid=null,t.storedKey=null;const[a]=r.planGroups(e,this.bufferLimit);return r.allocate([a]),await ke(r.scan(a),4*Me,"the computation"),r.destroyed?!1:(t.group=a,t.storedKey=i,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>ke(e.popErrorScope().catch(()=>null),Me,"the graphics device"),i=await t(),r=await t();if(i)throw new Ae(Ie.GPU,`out of graphics memory: ${i.message}`);if(r)throw new Ae(Ie.GPU,`the graphics device refused the work: ${r.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,i){const r=++this.generation,a=()=>r!==this.generation,{context:o,city:l,patch:u}=this,{device:s}=o;this.openScopes();let g=null;const h=()=>this.closeScopes();try{const f=this.frameOf(t,Ln(u,i.overlap)),{layout:c}=f;if(await this.ensureLayers(e),a()||l.distanceField.destroyed)return null;const{distanceField:d,group:p}=l;if(d.upWind&&d.ensureUpTiles([p],t,c.patches,u)&&(await ke(s.queue.onSubmittedWorkDone(),Me,"the computation"),o.releaseScratch()),a())return null;const x=Hn(c,u,e.length),y=o.storage(x.count*(this.channels+1)*4);try{if(!await this.runNetwork(p,e,f,x,y,t,i,a))return null;g=await this.readField(e,c,x,y)}finally{o.free(y),o.releaseScratch()}}finally{await h()}return a()?null:g}async runNetwork(e,t,i,r,a,o,l,u){var b;const{context:s,patch:g}=this,{layout:h}=i,{device:f}=s,{distanceField:c}=this.city,d=s.upload(r.table),p=[],x=t[0],y=!!(l.shouldDraw&&l.onDraw)&&t.length===1;let w=null,m=null;y&&(w={final:this.finalOf(i),roof:this.roofOf(i)},(b=l.onStart)==null||b.call(l,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const $=t.length*h.patches.length;for(let v=0;v<$;){if(u())return!1;const _=Math.floor(v/h.patches.length),S=v%h.patches.length,B=h.patches.slice(S,S+this.batchSize).map(([C,A])=>[C,t[_],A]);v+=B.length;const P=new Int32Array(B.flat()),F=f.createCommandEncoder(),I=c.assemble(F,P,e,o,g,this.network.inputBuffer),V=this.network.encode(F,B.length),k=Wn(B,h,g,x);if(this.encodeBlend(F,V,I,a,d,B.length,k,h,x),f.queue.submit([F.finish()]),s.free(I),s.releaseScratch(),p.push(f.queue.onSubmittedWorkDone()),p.length>Xn&&await ke(p.shift(),Me,"the computation"),y){m=Zn(m,k);const C=v>=$;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(C||l.shouldDraw())){const A=m;m=null;const X=await this.readRect(A,h,r,a,w,t[0]);if(u())return!1;l.onDraw({...X,stride:this.channels+2,channels:this.channels,theta:o,readyCount:v,patchCount:$})}}}return await ke(Promise.all(p),Me,"the computation"),!0}finally{s.free(d)}}encodeBlend(e,t,i,r,a,o,l,u,s){const{context:g,patch:h}=this,{gy:f}=u,{ry0:c,ry1:d,rx0:p,rx1:x,rz0:y,rz1:w}=l;if(!(d>c&&x>p))return;const m=e.beginComputePass();g.dispatch(m,this.blendPipeline,[t,i,r,a,g.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",f],["u",s],["u",0],["u",0],["u",c],["u",y],["u",p],["u",d-c],["u",w-y],["u",x-p],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(d-c)*(w-y)*(x-p)),m.end()}async readRect({ry0:e,ry1:t,rx0:i,rx1:r},a,{table:o},l,{final:u,roof:s},g){const{gx:h,gy:f}=a,c=this.channels,d=(c+1)*4,p=r-i,x=t-e,y=(v,_)=>{for(let S=e;S<t;S++){const B=o[f+1+S],P=o[2*f+1+S],F=Math.max(i,B),I=Math.min(r,B+P);I>F&&v.copyBufferToBuffer(l,(o[S]+F-B)*d,_,((S-e)*p+F-i)*d,(I-F)*d)}},w=await ke(this.context.readBack(p*x*d,y,v=>new Float32Array(v.slice(0))),Me,"reading the wind back"),{center:m,scale:b}=this.metadata.target,$=new Float32Array(p*x*(c+2));for(let v=0;v<p*x;v++){const _=w[v*(c+1)+c],S=v*(c+2),B=_>Ee?1/_:0;for(let I=0;I<c;I++)$[S+I]=w[v*(c+1)+I]*B*b[I]+m[I];const P=(e+Math.floor(v/p))*h+i+v%p,F=s[P];$[S+c]=F<0||_<=Ee?2:F>g?1:0,$[S+c+1]=u[P]>Ee?Math.min(1,_/u[P]):0}return{x0:i,y0:e,width:p,height:x,values:$}}async readField(e,t,{table:i,count:r},a){const{gx:o,gy:l}=t,u=this.channels,s=u+1,{center:g,scale:h}=this.metadata.target,f=(x,y)=>x.copyBufferToBuffer(a,0,y,0,y.size),c=await ke(this.context.readBack(r*s*4,f,x=>new Float32Array(x.slice(0))),4*Me,"reading the wind back"),d=e.map(x=>({layer:x,values:new Float32Array(o*l*u),weights:new Float32Array(o*l)}));let p=performance.now();for(let x=0;x<l;x++){performance.now()-p>Dn&&(await zn(),p=performance.now());const y=i[x],w=i[l+1+x],m=i[2*l+1+x];for(let b=0;b<e.length;b++){const{values:$,weights:v}=d[b];for(let _=0;_<m;_++){const S=(y+b*m+_)*s,B=x*o+w+_,P=c[S+u];if(P>Ee){v[B]=P;const F=1/P;for(let I=0;I<u;I++)$[B*u+I]=c[S+I]*F*h[I]+g[I]}else for(let F=0;F<u;F++)$[B*u+F]=g[F]}}}return{layout:t,gx:o,gy:l,layers:d}}async predict(e,t={}){const{city:i}=this,r=i.layerIndex,a=await this.predictLayers([r],e,t);if(!a)return null;const{gx:o,gy:l,layers:[{values:u,weights:s}]}=a,g=this.channels,h=this.roofOf(i.frame),f=new Uint8Array(o*l);let c=0;for(let d=0;d<o*l;d++){if(h[d]<0){f[d]=2;continue}if(s[d]<=Ee){f[d]=2;continue}f[d]=h[d]>r?1:0;for(let p=0;p<g;p++)if(!Number.isFinite(u[d*g+p])){c+=1;break}}return{values:u,solid:f,theta:e,height:l,width:o,nonFinite:c}}}function Zn(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const Qn=16,Jn=.4,eo=6.278,to=1e-6;function ro(){let n=null,e=null,t=null,i=null,r=null,a=0;async function o({allowF16:f=!0}={},c){if(!t){const d="/cityffdv2-demo/flume/model-v3/";[t,i]=await Promise.all(["metadata.json","weights.bin"].map(async p=>{const x=await fetch(d+p,{signal:c});if(!x.ok)throw new Error("Could not load model v3 "+p+" (HTTP "+x.status+").");return p.endsWith(".bin")?x.arrayBuffer():x.json()}))}n&&(f||!n.useF16)||(l(),n=await Mt.create({allowF16:f}),e=new Kn(n,t,i,{batchSize:Qn}))}function l(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,r=null}function u(f,c,d){const p=c.gx*c.gy,x=e.roofOf(e.city.frame),y=new Uint8Array(p);let w=0;for(let b=0;b<p;b++)x[b]<0||d.weights[b]<=to?y[b]=2:y[b]=x[b]>d.layer?1:0,!y[b]&&!Number.isFinite(d.values[b*5])&&w++;const m={width:c.gx,height:c.gy,originX:c.layout.gridX0,values:d.values,solid:y};return vt(f,f.plan.indexOf(d.layer),m),w}async function s(f,c,d,p,x){const{gx:y,gy:w}=xr(p,c.nx,c.ny,e.patch,e.patch),m=Math.max(1,Math.floor(e.bufferLimit/(y*w*(e.channels+1)*4))),b=Math.min(Yn,m);for(let $=0;$<d.length;$+=b){if(f.generation!==a||x!=null&&x.aborted)return!1;const v=await e.predictLayers(d.slice($,$+b),p,{overlap:Jn});if(!v||f.generation!==a)return!1;f.volume??(f.volume=xt({width:v.gx,height:v.gy,originX:v.layout.gridX0,originY:v.layout.gridY0,theta:p},f.layers,!1));for(const _ of v.layers)f.nonFinite+=u(f.volume,v,_)}return!0}async function g(f,c,d,{signal:p,onFirstWave:x,onMoreLayers:y}={},w=!0){await o({allowF16:w},p),f!==r&&(e.setCity(f.layers,f.ny,f.nx),r=f);const m=wt(c).slice(0,bt),b={layers:c,volume:null,nonFinite:0,generation:++a};if(!await s(b,f,c.filter(v=>m.includes(v)),d,p))return null;if(b.nonFinite&&n.useF16&&w)return g(f,c,d,{signal:p,onFirstWave:x,onMoreLayers:y},!1);if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");x==null||x({volume:b.volume,referenceSpeed:eo});const $=c.filter(v=>!m.includes(v));if($.length){if(!await s(b,f,$,d,p))return null;if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");y==null||y()}return e.releaseLayers(),b.volume}async function h(f,c,d){await o({},d);const p=e.inputPlan.stored,x=Math.ceil(e.patch*Math.SQRT2),y=new br(n,{layers:f.layers,ny:f.ny,nx:f.nx},x,e.network.store,e.inputPlan),w=y.gx*y.gy*p.length*4;let m=null;y.packGroup=async()=>{m=await n.readBack(w,(v,_)=>v.copyBufferToBuffer(y.sumsBuffer,0,_,0,w),v=>new Float32Array(v.slice(0)).map(_=>_/G))};try{const v=y.planGroups([c],e.bufferLimit);y.allocate(v),await y.scan(v[0])}finally{y.destroy()}if(!m)throw new Error("Model v3 MDDF could not be read.");const b=p.map(v=>"upper_distance_"+v.part+(v.part==="dc"?"":v.mode));return{values:m,ny:y.gy,nx:y.gx,margin:x,layerIndex:c,channels:b,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:g,readMddf:h,cancel(){a++,e==null||e.cancel()},destroy:l}}const Jt={v2:on,v3:ro},io=32;function no(){const n=pt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=null,i=null,r=null,a=null,o=!1,l=0;const u={},s=new AbortController;function g(){try{t==null||t.destroy();for(const w of Object.values(u))w.destroy()}finally{for(const w of Object.keys(u))delete u[w];e==null||e.device.destroy(),t=null,e=null,a=null}}async function h(){if(t)return;n.stage="Loading model";const w="/cityffdv2-demo/flume/",[m,b,$]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async v=>{const _=await fetch(w+v,{signal:s.signal});if(!_.ok)throw new Error("Could not load "+v+" (HTTP "+_.status+").");return v.endsWith(".bin")?_.arrayBuffer():_.json()}));en(m,b.byteLength),s.signal.throwIfAborted(),e=await ii.create(),s.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",v=>{n.error="WebGPU: "+v.error.message.split(`
`)[0]}),e.device.lost.then(v=>{!o&&v.reason!=="destroyed"&&(n.error="GPU device lost. Run again to initialize a new session.",n.prediction=null,t=null,e=null,a=null)}),i=m,r=$,t=new Ji(e,i,b,{batchSize:io})}async function f(w,m){if(o||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const b=++l,$=()=>o||b!==l;try{if(await h(),$())return null;if(Jt[m.model])return await c(w,m,$,b);w!==a&&(t.setCity(w.layers,w.ny,w.nx),a=w);const v=performance.now(),_=(C,A)=>{const X={...C,grid:w,settings:{...m,layers:A},referenceSpeed:i.wind.reference_speed_m_s,modelLabel:i.label,colorbar:r,patchCount:I,milliseconds:performance.now()-v,inputRevision:b};return n.prediction=Se(X),n.layersReady=C.layers.length,X},S=[...m.layers],B=wt(S);let P=null,F=null,I=0;const V=C=>({signal:s.signal,onProgress:A=>{$()||(n.progress=(C+A*.3)/B.length)}});let k=t.setHeight(B[0],V(0));for(let C=0;C<B.length;C++){if(n.stage="Predicting 3D wind · layer "+(C+1)+" / "+B.length,await k,$())return null;const A=await t.predict(m.thetaRad,{signal:s.signal,onProgress:X=>{$()||(n.progress=(C+.3+X*.7)/B.length)}});if(s.signal.throwIfAborted(),$())return null;if(n.error)throw new Error(n.error);P||(P=xt(A,S,!1)),k=C+1<B.length?t.setHeight(B[C+1],V(C+1)):null,k==null||k.catch(()=>{}),tn(A),I=A.patchCount??I,vt(P,S.indexOf(B[C]),A),F?(F.milliseconds=performance.now()-v,n.layersReady=P.layers.length):C+1>=Math.min(bt,B.length)&&(F=_(P,S))}return n.progress=1,n.stage="Prediction ready",F}catch(v){return!o&&b===l&&(n.error=v.message,n.stage="Prediction failed",n.prediction=null),g(),null}finally{o?g():n.busy=!1}}async function c(w,m,b,$){var F;const v=_t[m.model],_=u[F=m.model]??(u[F]=Jt[m.model]());n.stage=v+" · predicting the first layers";const S=performance.now();let B=null;if(!await _.run(w,m.layers,m.thetaRad,{signal:s.signal,onFirstWave({volume:I,referenceSpeed:V}){b()||(B={...I,grid:w,settings:{...m},referenceSpeed:V,modelLabel:v,colorbar:r,patchCount:0,milliseconds:performance.now()-S,inputRevision:$},n.prediction=Se(B),n.layersReady=I.layers.length,n.progress=.3,n.stage=v+" · predicting the remaining layers")},onMoreLayers(){b()||!B||(B.milliseconds=performance.now()-S,n.layersReady=B.layers.length)}})||b())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",B}async function d(w){if(!t||!n.prediction||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{const m=u[n.prediction.settings.model];if(m)return await m.readMddf(n.prediction.grid,w,s.signal);Number.isInteger(w)&&await t.setHeight(w,{signal:s.signal});const b=t.city.field,$=await e.readFloat32(b.fieldBuffer,b.gy*b.gx*28);if(o)throw new Error("The page was closed.");return{values:$,ny:b.gy,nx:b.gx,margin:b.margin,layerIndex:t.city.layerIndex}}finally{n.downloading=!1,o&&g()}}function p(){n.busy&&l++;for(const w of Object.values(u))w.cancel()}function x(){l++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function y(){o=!0,l++,s.abort(),!n.busy&&!n.downloading&&g()}return ht(y),{state:n,run:f,readMddf:d,cancel:p,invalidate:x,dispose:y}}const be="flume-retained-buildings",er="flume-retained-selected";function oo(n,e){let t=null,i=null,r=null,a=null,o=null;function l(){if(t){n.getSource(be)?r!==a&&n.getSource(be).setData(r):n.addSource(be,{type:"geojson",data:r,maxzoom:22,tolerance:0}),a=r;for(const[f,c]of[[be,!1],[er,!0]]){const d=t.filters[c?"selected":"surroundings"],p=c?1:t.surroundingsOpacity;n.getLayer(f)?n.setFilter(f,d):n.addLayer({id:f,type:"fill-extrusion",source:be,maxzoom:De,filter:d,layout:{visibility:"visible"},paint:{"fill-extrusion-color":c?se().selectedBuildings:se().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),n.setPaintProperty(f,"fill-extrusion-opacity",p),n.setLayoutProperty(f,"visibility",c||t.showSurroundings?"visible":"none")}}}function u(){if(!(!t||n.getZoom()<De||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const f=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(c=>!c.tile||c.tile.z>=(t.dataZoom??De));r=He([...r.features,...f]),l()}catch(f){e==null||e(f)}}function s(f){!t||f!=null&&f.sourceId&&f.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(u,120))}function g(f){var c;(i!==f.collection||(t==null?void 0:t.sourceId)!==f.sourceId||(t==null?void 0:t.sourceLayer)!==f.sourceLayer)&&(r=He(((c=f.collection)==null?void 0:c.features)??[]),i=f.collection),t=f,l(),s()}function h(){clearTimeout(o),t=null,i=null,r=null,a=null;for(const f of[er,be])n.getLayer(f)&&n.removeLayer(f);n.getSource(be)&&n.removeSource(be)}return n.on("sourcedata",s),n.on("moveend",s),{update:g,clear:h,dispose(){n.off("sourcedata",s),n.off("moveend",s),h()}}}const ao=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,so=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function lo(n,e,t){let i,r,a,o,l,u,s,g,h,f,c,d="",p=0;const x=new Ot,y=new Ot,w=or.MercatorCoordinate.fromLngLat(n.grid.origin),m=w.meterInMercatorCoordinateUnits(),[b,$]=Pt(n,n.width/2-.5,n.height/2-.5),v=[new Xe(new ue(1,0,0),0),new Xe(new ue(-1,0,0),n.grid.nx*ae),new Xe(new ue(0,1,0),0),new Xe(new ue(0,-1,0),n.grid.ny*ae)],_=()=>Number(e.speedMps)/n.referenceSpeed,S=new Map;function B(I){let V=1/0,k=-1/0;for(let C=0;C<n.layers.length;C++){const A=I+"@"+n.slots[C];S.has(A)||S.set(A,It(di(n,C),I));const[X,W]=S.get(A);V=Math.min(V,X),k=Math.max(k,W)}return[V,k]}let P=[0,0];function F(){if(!r)return;const I=ze.find(R=>R.id===e.variable)??ze[0];f==null||f.dispose(),f=new Vt(oi(I.ramp),256,1,Xt),f.colorSpace=Pi,f.minFilter=f.magFilter=Yt,f.needsUpdate=!0;const V=e.plane==="3d"?"h":e.plane,k=ai(n,e.planeOffsetM),C=e.view==="slice"||e.view==="particles"&&e.particles==="white";l.visible=C&&V==="h",u.visible=C&&V==="v";const A=I.id+"@"+(V==="v"?"v"+k:e.sliceHeightM);if(A!==d){let R;if(V==="v"){R=si(n,k);const[Y,Q]=Pt(n,(n.width-1)/2,k);u.position.set(Y,Q,R.height*je/2)}else R=sr(n,Number(e.sliceHeightM)),l.position.z=R.settings.heightM;h==null||h.dispose(),h=new Vt(li(R,I.id),R.width,R.height,Xt,Ii),h.minFilter=h.magFilter=Yt,h.needsUpdate=!0,P=It(R,I.id),d=A}const X=_();let W=X;I.id==="T"&&(W=1),I.id==="tke"&&(W=X*X);const z=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?B(I.id):P,Z=ui(z,I.id)??ci(n.colorbar,I.id,n.settings.layers.at(-1),"99.9",1);c.uniforms.field.value=h??null,c.uniforms.palette.value=f,c.uniforms.range.value.set(...Z),g.enabled=e.view!=="off",g.mesh.visible=g.enabled;const te=e.view==="slice"||e.particles==="white",ce=te?V:e.plane;ce==="h"?g.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:te}):ce==="v"?g.setPlane({kind:"v",row:k,flat:te}):g.setPlane(null),g.setCount(At[e.density]??At.medium),g.setColouring(te?"white":e.particles,I.id,f,Z),t==null||t({low:Z[0]*W,high:Z[1]*W,...I}),i.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:F,refresh(){d="",F()},onAdd(I,V){i=I,a=new ki,o=new Si,r=new Ci({canvas:i.getCanvas(),context:V,antialias:!0}),r.autoClear=!1,r.localClippingEnabled=!0,c=new dr({vertexShader:ao,fragmentShader:so,uniforms:{field:{value:null},palette:{value:null},range:{value:new gr(0,1)}},transparent:!0,depthWrite:!1,side:fr,clipping:!0,clippingPlanes:v}),l=new Ge(new at(n.width*ae,n.height*ae),c),l.position.set(b,$,0),l.rotation.z=n.theta,l.frustumCulled=!1,a.add(l);const k=new at(n.width*ae,(n.layers.at(-1)+1)*je);k.rotateX(Math.PI/2),u=new Ge(k,c),u.rotation.z=n.theta,u.frustumCulled=!1,a.add(u),g=new Bi(ni(n)),a.add(g.mesh),s=uo(n.grid,.5),s&&a.add(s),F()},render(I,V){const k=performance.now(),C=Math.min(p?(k-p)/1e3:0,.05);p=k,x.makeTranslation(w.x,w.y,w.z).scale(new ue(m,-m,m)),o.projectionMatrix.copy(y.fromArray(V)).multiply(x),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),g.setViewport(I.drawingBufferWidth,I.drawingBufferHeight);const A=g.enabled&&!e.paused;A&&g.step(C,_()),r.resetState(),r.setViewport(0,0,I.drawingBufferWidth,I.drawingBufferHeight),r.render(a,o),A&&i.triggerRepaint()},onRemove(){h==null||h.dispose(),f==null||f.dispose(),l==null||l.geometry.dispose(),u==null||u.geometry.dispose(),c==null||c.dispose(),g==null||g.dispose(),s==null||s.geometry.dispose(),s==null||s.material.dispose(),r==null||r.dispose(),i=null,r=null}}}function uo(n,e){if(!n.mainDomain)return null;const t=_i(n.origin),i=[...t(n.mainDomain.bounds.slice(0,2)),...t(n.mainDomain.bounds.slice(2,4))],r=new dr({uniforms:{extent:{value:new gr(n.nx*ae,n.ny*ae)},mainBounds:{value:new Ai(...i)},mainColour:{value:new Nt(se().mainArea)},bufferColour:{value:new Nt(se().bufferArea)}},vertexShader:`
      uniform vec2 extent;
      varying vec2 localPoint;
      void main() {
        localPoint = uv * extent;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec2 extent;
      uniform vec4 mainBounds;
      uniform vec3 mainColour;
      uniform vec3 bufferColour;
      varying vec2 localPoint;
      void main() {
        float d = max(max(mainBounds.x-localPoint.x, localPoint.x-mainBounds.z),
                      max(mainBounds.y-localPoint.y, localPoint.y-mainBounds.w));
        float mainEdge = 1.0-smoothstep(0.0, max(fwidth(d)*2.0, 0.001), abs(d));
        float outer = min(min(localPoint.x, extent.x-localPoint.x), min(localPoint.y, extent.y-localPoint.y));
        float outerEdge = (1.0-smoothstep(0.0, max(fwidth(outer)*2.0, 0.001), outer))
                          * step(0.4, fract((gl_FragCoord.x+gl_FragCoord.y)/14.0));
        float alpha = max(d > 0.0 ? 0.07 : 0.0, max(mainEdge, outerEdge));
        if (alpha < 0.001) discard;
        gl_FragColor = vec4(mix(bufferColour, mainColour, mainEdge), alpha);
        #include <colorspace_fragment>
      }
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:fr}),a=new Ge(new at(n.nx*ae,n.ny*ae),r);return a.name="flume-domain-overlay",a.position.set(n.nx*ae/2,n.ny*ae/2,e+.05),a.renderOrder=4,a.frustumCulled=!1,a}const ot="flume-field",Le="flume-buildings";function $r(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function co(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function fo(n,e,t){let i=null,r=null;const a=new Map,o=oo(n,t);function l(){n.getLayer(ot)&&n.removeLayer(ot),i=null}function u(){for(const[h,f]of a)n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",f.visibility),n.setPaintProperty(h,f.property,f.opacity),n.setFilter(h,f.filter),n.setLayerZoomRange(h,f.minzoom,f.maxzoom),f.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",f.color));a.clear()}function s(h){for(const f of n.getStyle().layers){if(f.id.startsWith("flume-"))continue;const c=co(f);if(!c)continue;const d=f.type==="fill-extrusion";a.set(f.id,{visibility:n.getLayoutProperty(f.id,"visibility")??"visible",property:c,opacity:n.getPaintProperty(f.id,c)??1,filter:n.getFilter(f.id)??null,minzoom:f.minzoom??0,maxzoom:f.maxzoom??24,color:d?n.getPaintProperty(f.id,"fill-extrusion-color")??null:void 0}),n.setPaintProperty(f.id,c,Rt),d&&n.setPaintProperty(f.id,"fill-extrusion-color",se().previewBuildings),h||n.setLayoutProperty(f.id,"visibility","none")}}function g({source:h,input:f,prediction:c,preview:d,display:p}){if(c!==r&&(l(),r=c),!c&&n.getLayer(Le)&&n.removeLayer(Le),u(),Vr(n,$r(h)),!c){o.clear(),st(n,d);return}st(n,null);const x=Xr.find(w=>w.id===(h==="osm"?"city-osm-3d":"city-concordia-3d")),y=lr(f.buildings.features,n.getFilter(x.id));s(p.showSurroundings),n.setFilter(x.id,y.surroundings),n.setLayerZoomRange(x.id,De,x.layer.maxzoom??24),n.getLayer(Le)?n.setFilter(Le,y.selected):n.addLayer({...x.layer,id:Le,minzoom:De,layout:{visibility:"visible"},filter:y.selected,paint:{...x.layer.paint,"fill-extrusion-color":se().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:x.layer.source,sourceLayer:x.layer["source-layer"],collection:d,dataZoom:f.dataZoom,filters:y,surroundingsOpacity:Rt,showSurroundings:p.showSurroundings}),n.getLayer(ot)||(i=lo(c,p,e),n.addLayer(i)),n.triggerRepaint()}return{update:g,configure(){i==null||i.configure()},refresh(){i==null||i.refresh()},beforeStyleChange(){l(),r=null,a.clear()},dispose(){l(),o.dispose(),a.clear()}}}function Be(n,e,t,i,r){if(t.reduce((l,u)=>l*u,1)!==e.length)throw new Error("Invalid "+n+" shape.");const a=new Uint8Array(e.length*4),o=new DataView(a.buffer);for(let l=0;l<e.length;l++){if(!Number.isFinite(e[l]))throw new Error("Cannot export non-finite "+n);o.setFloat32(l*4,e[l],!0)}return{name:n,content:a,description:{dtype:"float32",shape:t,channels:i,unit:r}}}function Mr(n,e,t,i,r=null){var o,l,u;const a={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((o=n.selection)==null?void 0:o.geometry)??((l=n.polygon)==null?void 0:l.geometry),computationalDomain:(u=n.polygon)==null?void 0:u.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:i.nx,ny:i.ny,margin:i.margin,layerIndex:i.layerIndex,representation:i.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return r&&(a.volume={layers:r.settings.layers,heightsM:r.settings.layers.map(s=>(s+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),a.files=Object.fromEntries(t.map(s=>[s.name,s.description])),[{name:"metadata.json",content:JSON.stringify(a,null,2)},...t.map(({name:s,content:g})=>({name:s,content:g}))]}function kr(n,e){const i=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(l=>o+"_"+l)),r=Be("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),a=e.channels??i;return[Be("mddf.f32.bin",e.values,[e.ny,e.nx,a.length],a,"m"),r]}function go(n){const e=ur(n),t=n.width*n.height,i=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t);for(let s=0;s<t;s++){const g=s*5;i.set([e[g],e[g+2],e[g+1]],s*3),r[s]=e[g+3],a[s]=e[g+4],o[s]=Math.hypot(e[g],e[g+1],e[g+2])}const l=[n.height,n.width],u=[Be("velocity.f32.bin",i,[...l,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:l,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Be("speed.f32.bin",o,l,["speed"],"m/s")];return n.settings.model!=="v2"&&u.push(Be("temperature.f32.bin",r,l,["T"],"degC"),Be("tke.f32.bin",a,l,["TKE"],"m2/s2")),u}function ho(n){const e=n.width*n.height,t=n.settings.layers.length,i=ur(n),r=new Float32Array(t*e*3);for(let a=0;a<t*e;a++)r.set([i[a*5],i[a*5+2],i[a*5+1]],a*3);return[Be("velocity3d.f32.bin",r,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function po(n,e,t){return Mr(n,t,kr(t,e),e)}function mo(n,e,t,i=null){const r=[...kr(t,e),...go(t)];return i&&r.push(...ho(i)),r.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),Mr(n,t,r,e,i)}class yo{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let a=0;e.traverse(function(y){if(y.isMesh){const w=y.geometry,m=w.index,b=w.getAttribute("position");a+=m!==null?m.count/3:b.count/3,r.push({object3d:y,geometry:w})}});let o,l=80;if(i===!0){const y=a*2+a*3*4*4+80+4,w=new ArrayBuffer(y);o=new DataView(w),o.setUint32(l,a,!0),l+=4}else o="",o+=`solid exported
`;const u=new ue,s=new ue,g=new ue,h=new ue,f=new ue,c=new ue;for(let y=0,w=r.length;y<w;y++){const m=r[y].object3d,b=r[y].geometry,$=b.index,v=b.getAttribute("position");if($!==null)for(let _=0;_<$.count;_+=3){const S=$.getX(_+0),B=$.getX(_+1),P=$.getX(_+2);d(S,B,P,v,m)}else for(let _=0;_<v.count;_+=3){const S=_+0,B=_+1,P=_+2;d(S,B,P,v,m)}}return i===!1&&(o+=`endsolid exported
`),o;function d(y,w,m,b,$){u.fromBufferAttribute(b,y),s.fromBufferAttribute(b,w),g.fromBufferAttribute(b,m),$.isSkinnedMesh===!0&&($.applyBoneTransform(y,u),$.applyBoneTransform(w,s),$.applyBoneTransform(m,g)),u.applyMatrix4($.matrixWorld),s.applyMatrix4($.matrixWorld),g.applyMatrix4($.matrixWorld),p(u,s,g),x(u),x(s),x(g),i===!0?(o.setUint16(l,0,!0),l+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(y,w,m){h.subVectors(m,w),f.subVectors(y,w),h.cross(f).normalize(),c.copy(h).normalize(),i===!0?(o.setFloat32(l,c.x,!0),l+=4,o.setFloat32(l,c.y,!0),l+=4,o.setFloat32(l,c.z,!0),l+=4):(o+="	facet normal "+c.x+" "+c.y+" "+c.z+`
`,o+=`		outer loop
`)}function x(y){i===!0?(o.setFloat32(l,y.x,!0),l+=4,o.setFloat32(l,y.y,!0),l+=4,o.setFloat32(l,y.z,!0),l+=4):o+="			vertex "+y.x+" "+y.y+" "+y.z+`
`}}}async function wo(n,e,t={}){var y,w;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((y=e.layers)==null?void 0:y.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:i,ny:r,layers:a,spacingM:o,layerSpacingM:l}=e,u=(m,b)=>m<0||b<0||m>=i||b>=r?0:a[b*i+m],s=async()=>{var m;if(await new Promise(b=>setTimeout(b,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let g=0;for(let m=0;m<r;m++){m%32===0&&await s();for(let b=0;b<i;b++){const $=u(b,m);if(!Number.isInteger($)||$<0||$>160)throw new Error("Invalid MDDF building height.");$&&(g+=2+ +($>u(b-1,m))+ +($>u(b+1,m))+ +($>u(b,m-1))+ +($>u(b,m+1)))}}if(!g)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(g*18);let f=0;const c=(m,b,$,v)=>{for(const _ of[m,b,$,m,$,v])h.set(_,f),f+=3};for(let m=0;m<r;m++){m%32===0&&await s();for(let b=0;b<i;b++){const $=u(b,m)*l;if(!$)continue;const v=b*o,_=v+o,S=-m*o,B=S-o;c([v,$,S],[_,$,S],[_,$,B],[v,$,B]),c([v,0,S],[v,0,B],[_,0,B],[_,0,S]);let P=u(b-1,m)*l;$>P&&c([v,P,B],[v,P,S],[v,$,S],[v,$,B]),P=u(b+1,m)*l,$>P&&c([_,P,S],[_,P,B],[_,$,B],[_,$,S]),P=u(b,m-1)*l,$>P&&c([v,P,S],[_,P,S],[_,$,S],[v,$,S]),P=u(b,m+1)*l,$>P&&c([_,P,B],[v,P,B],[v,$,B],[_,$,B])}}const d=new Ri;d.setAttribute("position",new Ti(h,3));const p=new Ge(d);let x;try{x=new yo().parse(p,{binary:!0}).buffer}finally{d.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:x},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(w=n.polygon)==null?void 0:w.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:i,ny:r,spacingM:o,layerSpacingM:l,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:g*2}}},null,2)}]}const Sr=Symbol("flume");function Je(){return Br(Sr)}function bo(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=We(null),t=We(!1);let i=null,r=null,a=null,o=!1,l=null,u=!1;const s=()=>i,{currentPresetName:g}=tr();Tt(g.value);const h=Yr({getMap:s,accessToken:n}),f=Li({getMap:s,ready:t,onChange:x,accessToken:n}),c=no(),d=pt({mapCreated:!1,mapReady:t,error:"",area:f.state,grid:null,wind:{...Ft},engine:c.state,display:{variable:"speed",speedMps:Ft.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:hi,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=j(()=>d.downloading||d.engine.downloading||d.area.loading);function x(){clearTimeout(l),l=null,u=!1,d.grid=null,d.legend=null,d.error="",d.downloadError="",c.invalidate(),b()}async function y(){if(p.value)return;const _=await f.captureRegion();if(!(!_||o))try{lr(_.buildings.features),d.grid=Se(gi(_)),d.error="",w()}catch(S){d.error=S.message}}function w(){!d.grid||o||(clearTimeout(l),l=setTimeout(()=>{l=null,m()},pi))}async function m(){if(clearTimeout(l),l=null,!(o||!d.grid||p.value)){if(d.engine.busy){u=!0,c.cancel();return}try{const _={...fi(d.wind),model:d.wind.model,layers:cr(d.grid)};d.display.speedMps=_.speedMps,d.error="",await c.run(d.grid,_)}catch(_){d.error=_.message}u&&!o&&(u=!1,await m())}}function b(){!i||!t.value||r==null||r.update({source:d.area.source,input:d.area.snapshot,prediction:d.engine.prediction,preview:f.getPreview(),display:d.display})}async function $(_){if(!(p.value||!d.grid)&&!(_!=="model"&&(d.engine.busy||!d.engine.prediction))){d.downloading=!0,d.downloadError="";try{const S=d.area.snapshot;let B;if(_==="model")B=await wo(S,d.grid,{shouldCancel:()=>o});else{const F=Number(d.display.speedMps);if(!tt(F))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const I=d.engine.prediction,V={...I,settings:{...I.settings,speedMps:F}},k=sr(V,d.display.sliceHeightM),C=await c.readMddf(k.settings.layerIndex);_==="mddf"?B=po(S,C,k):B=mo(S,C,k,V)}const P=await Ur(B);o||Wr(P,"flume-"+_+".zip","application/zip")}catch(S){o||(d.downloadError=S.message)}finally{o||(d.downloading=!1)}}}he([()=>d.engine.prediction,()=>d.area.source,()=>d.display.showSurroundings],b),he(()=>d.engine.layersReady,()=>r==null?void 0:r.refresh()),he(()=>[d.wind.directionDeg,d.wind.model],()=>{d.grid&&w()}),he(()=>d.wind.speedMps,_=>{tt(_)&&(d.display.speedMps=Number(_))}),he(()=>d.engine.prediction,_=>{const S=ze.find(B=>B.id===d.display.variable);(_==null?void 0:_.settings.model)==="v2"&&(S!=null&&S.notInV2)&&(d.display.variable="speed")}),he(()=>[d.display.variable,d.display.particles,d.display.density,d.display.speedMps,d.display.view,d.display.plane,d.display.sliceHeightM,d.display.planeOffsetM],()=>{tt(d.display.speedMps)?(d.downloadError="",r==null||r.configure()):d.downloadError="Use a wind speed between 0.5 and 20 m/s."}),he(()=>d.display.paused,()=>i==null?void 0:i.triggerRepaint()),he(g,_=>Tt(_)),he(h.mapStyle,_=>{i&&(f.beforeStyleChange(),t.value=!1,r==null||r.beforeStyleChange(),i.setStyle(_,{diff:!1}))}),Cr(()=>{if(!(n!=null&&n.startsWith("pk."))){d.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{i=new or.Map({container:e.value,accessToken:n,style:h.mapStyle.value,center:yi,zoom:mi,pitch:0,antialias:!0,attributionControl:!1}),r=fo(i,_=>{o||(d.legend=_)},_=>{o||(d.error=_.message)}),d.mapCreated=!0,i.on("style.load",()=>{if(!o)try{Nr(i,$r(d.area.source)),t.value=!0,f.restore(),b()}catch(_){d.error=_.message}}),i.on("error",_=>{if(o)return;const S=_.sourceId?" ("+_.sourceId+")":"";d.error="Map data unavailable"+S+". Check token, allowed domains and connection."}),h.attach(),a=new ResizeObserver(()=>i==null?void 0:i.resize()),a.observe(e.value)}catch(_){d.error=_.message}}),ht(()=>{o=!0,clearTimeout(l),c.dispose(),r==null||r.dispose(),a==null||a.disconnect(),i==null||i.remove(),i=null});const v={mapElement:e,store:d,controls:h,locked:p,area:f,acceptArea:y,runPrediction:m,download:$};return Pr(Sr,v),v}const xo={class:"flume-compact"},vo={key:0,class:"map-hud-muted",role:"status"},_o={key:1,class:"map-hud-muted"},$o={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Mo={class:"map-hud-actions"},ko={key:2,role:"status",class:"map-hud-muted"},So={key:3,class:"map-hud-muted"},Co=["disabled"],Bo={key:4,class:"map-hud-muted"},Po={__name:"AreaHud",setup(n){const{store:e,area:t,locked:i,acceptArea:r}=Je(),a=ar*100,o=e.area,l=j(()=>!e.mapReady||i.value),u=j(()=>!!(o.region||o.loadedArea)),s=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],g=wi.map(h=>({label:_t[h],value:h}));return(h,f)=>{var b;const c=rr,d=Ir,p=Ke,x=mt,y=ir,w=Ze,m=Qe;return D(),N("div",xo,[L(c,{modelValue:M(e).wind.model,"onUpdate:modelValue":f[0]||(f[0]=$=>M(e).wind.model=$),options:M(g),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:M(i)},null,8,["modelValue","options","disabled"]),L(d,{modelValue:M(o).source,"onUpdate:modelValue":f[1]||(f[1]=$=>M(o).source=$),label:"Buildings","aria-label":"Building source",size:"small",options:s,"text-by":"text","value-by":"value",disabled:M(i)},null,8,["modelValue","disabled"]),L(p,{block:"",size:"small",preset:u.value?"secondary":void 0,icon:"mso-location_city",disabled:l.value,loading:M(o).loading,onClick:M(t).loadBuildings},{default:q(()=>[...f[5]||(f[5]=[K("Show detailed buildings",-1)])]),_:1},8,["preset","disabled","loading","onClick"]),M(o).loadedArea?(D(),N("p",vo," Loaded detailed buildings: "+E(M(o).loadedArea.count)+" parts · "+E((M(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+E((M(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+E(M(o).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(D(),N("p",_o," Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly. ")),T("div",$o,[f[6]||(f[6]=T("span",{class:"map-hud-muted"},"Buffer",-1)),L(x,{modelValue:M(o).bufferPercent,"onUpdate:modelValue":f[2]||(f[2]=$=>M(o).bufferPercent=$),min:0,max:a,step:5,"aria-label":"Buffer per side (%)",disabled:M(i)},null,8,["modelValue","disabled"]),L(y,{modelValue:M(o).bufferPercent,"onUpdate:modelValue":f[3]||(f[3]=$=>M(o).bufferPercent=$),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:a,step:5,disabled:M(i)},null,8,["modelValue","disabled"]),f[7]||(f[7]=T("span",{class:"map-hud-muted"},"%",-1))]),T("div",Mo,[L(p,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:l.value,"aria-label":"Select region",onClick:M(t).startSelection},{default:q(()=>[...f[8]||(f[8]=[K("Draw area",-1)])]),_:1},8,["disabled","onClick"]),L(p,{size:"small",preset:u.value?void 0:"secondary",disabled:!M(e).mapReady||!u.value||M(i),loading:M(o).loading,"aria-label":M(o).region?"Use selected region":"Use full loaded area",onClick:M(r)},{default:q(()=>[K(E(M(o).region?"Use region":"Use full area"),1)]),_:1},8,["preset","disabled","loading","aria-label","onClick"])]),M(o).drawing?(D(),N("p",ko," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):M(o).region?(D(),N("p",So,[K(E(M(o).region.extentM[0])+" × "+E(M(o).region.extentM[1])+" m · 4 m cells · "+E(M(o).region.buffer?"main + buffer":"main domain")+" ",1),T("button",{type:"button",class:"flume-link",disabled:M(i),onClick:f[4]||(f[4]=(...$)=>M(t).clearSelection&&M(t).clearSelection(...$))},"Clear",8,Co)])):H("",!0),(b=M(o).region)!=null&&b.mainDomain?(D(),N("p",Bo," Main: "+E(M(o).region.mainDomain.extentM[0])+" × "+E(M(o).region.mainDomain.extentM[1])+" m. Buffer: "+E((M(o).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):H("",!0),M(o).loading?(D(),Pe(w,{key:5,"model-value":M(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):H("",!0),M(o).error?(D(),Pe(m,{key:6,color:"danger"},{default:q(()=>[K(E(M(o).error),1)]),_:1})):H("",!0)])}}},Io={class:"flex flex-col gap-3"},Ao={key:0,class:"map-hud-muted"},Ro={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},To={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Fo=["aria-valuenow","aria-disabled"],Eo=["x1","y1","x2","y2"],Lo=["cx","cy"],Do={class:"flex flex-col gap-2 min-w-0"},zo={class:"cardinals grid grid-cols-4 gap-1"},Oo={key:3,class:"flex flex-col gap-1"},Vo={role:"status",class:"map-hud-muted"},Xo={key:4,class:"map-hud-muted"},Yo={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:i}=Je(),r=e.wind,a=e.engine,o=j(()=>!!e.grid&&!t.value),l=j(()=>{if(!e.grid)return null;const c=cr(e.grid);return{topM:Math.round((c.at(-1)+.5)*je),layers:c.length}}),u=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],s=We(null),g=j(()=>Number(r.directionDeg)*Math.PI/180);function h(c){if(!o.value||c.type==="pointermove"&&!c.buttons)return;c.type==="pointerdown"&&c.currentTarget.setPointerCapture(c.pointerId);const d=s.value.getBoundingClientRect(),p=c.clientX-d.left-d.width/2,x=-(c.clientY-d.top-d.height/2);r.directionDeg=(Math.round(Math.atan2(x,p)*180/Math.PI)+360)%360}function f(c){if(!o.value)return;const d={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[c.key]??0;d&&(c.preventDefault(),r.directionDeg=(Number(r.directionDeg)+d+360)%360)}return(c,d)=>{const p=mt,x=ir,y=Ke,w=Qe,m=Ze;return D(),N("div",Io,[M(e).grid?H("",!0):(D(),N("p",Ao,"Choose a simulation area in step 1 first.")),T("div",Ro,[d[3]||(d[3]=T("span",{class:"map-hud-muted"},"Speed",-1)),L(p,{modelValue:M(r).speedMps,"onUpdate:modelValue":d[0]||(d[0]=b=>M(r).speedMps=b),min:M(Lt),max:M(Et),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),L(x,{modelValue:M(r).speedMps,"onUpdate:modelValue":d[1]||(d[1]=b=>M(r).speedMps=b),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:M(Lt),max:M(Et),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),d[4]||(d[4]=T("span",{class:"map-hud-muted"},"m/s",-1))]),T("div",To,[(D(),N("svg",{ref_key:"dial",ref:s,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":M(r).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Ar(h,["prevent"]),onPointermove:h,onKeydown:f},[d[5]||(d[5]=Rr('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-8f54e644></circle><text x="80" y="16" text-anchor="middle" data-v-8f54e644>90°</text><text x="146" y="84" text-anchor="middle" data-v-8f54e644>0°</text><text x="80" y="152" text-anchor="middle" data-v-8f54e644>270°</text><text x="14" y="84" text-anchor="middle" data-v-8f54e644>180°</text>',5)),T("line",{x1:80-Math.cos(g.value)*30,y1:80+Math.sin(g.value)*30,x2:80+Math.cos(g.value)*42,y2:80-Math.sin(g.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Eo),T("circle",{cx:80+Math.cos(g.value)*42,cy:80-Math.sin(g.value)*42,r:"5",class:"needle-tip"},null,8,Lo)],40,Fo)),T("div",Do,[L(x,{modelValue:M(r).directionDeg,"onUpdate:modelValue":d[2]||(d[2]=b=>M(r).directionDeg=b),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),T("div",zo,[(D(),N(ve,null,nr(u,b=>L(y,{key:b.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+b.text,onClick:$=>M(r).directionDeg=b.value},{default:q(()=>[K(E(b.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),M(e).error?(D(),Pe(w,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:q(()=>[K(E(M(e).error),1)]),_:1})):H("",!0),M(a).error?(D(),Pe(w,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:q(()=>[K(E(M(a).error),1)]),_:1})):H("",!0),M(a).busy?(D(),N("div",Oo,[L(m,{"model-value":M(a).progress*100,indeterminate:M(a).progress===0},null,8,["model-value","indeterminate"]),T("p",Vo,E(M(a).stage),1)])):H("",!0),l.value&&!M(a).busy?(D(),N("p",Xo," 3D wind: ground to "+E(l.value.topM)+" m · "+E(l.value.layers)+" layers ",1)):H("",!0),L(y,{block:"",disabled:!o.value,loading:M(a).busy,"aria-label":"Run prediction",onClick:M(i)},{default:q(()=>[...d[6]||(d[6]=[K("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},No=yt(Yo,[["__scopeId","data-v-8f54e644"]]),Uo={class:"flex flex-col gap-3"},Wo={key:0,class:"map-hud-muted"},Ho={key:0,class:"hud-row hud-row--value"},jo={class:"hud-value"},Go={key:1,class:"hud-row hud-row--value"},qo={class:"hud-value"},Ko={key:0,class:"hud-row"},Zo={class:"hud-row"},Qo={key:0,class:"flex flex-col gap-1 text-xs"},Jo={class:"flex justify-between gap-2 map-hud-muted"},ea={class:"map-hud-muted"},ta={__name:"VisualizeHud",setup(n){const{store:e}=Je(),t=e.display,i=j(()=>e.engine.prediction),r=j(()=>{var y;return e.engine.layersReady||((y=i.value)==null?void 0:y.layers.length)||0}),a=j(()=>i.value?bi(i.value):Dt),o=j(()=>i.value?xi(i.value):[0,0]),l=j(()=>ze.filter(y=>{var w;return!(y.notInV2&&((w=i.value)==null?void 0:w.settings.model)==="v2")}).map(y=>({label:y.label,value:y.id}))),u=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],s=j(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(y=>y.value!=="3d"||t.view==="particles")),g=j({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:y=>t.plane=y}),h=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],f=j(()=>g.value==="h"||g.value==="3d"&&t.view==="particles"&&t.particles==="white"),c=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],d=j(()=>{const y=Math.round(Number(t.planeOffsetM));return(y>0?"+":"")+y+" m"}),p=j(()=>{var y;return((y=ze.find(w=>w.id===t.variable))==null?void 0:y.ramp)??"turbo"}),x=j(()=>"linear-gradient(to right,"+Array.from({length:17},(y,w)=>"rgb("+vi(p.value,w/16).join(",")+") "+w*100/16+"%").join(",")+")");return(y,w)=>{const m=rr,b=mt,$=Fr,v=Er;return D(),N("div",Uo,[i.value?(D(),N(ve,{key:1},[L(m,{modelValue:M(t).view,"onUpdate:modelValue":w[0]||(w[0]=_=>M(t).view=_),options:u,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),M(t).view!=="off"?(D(),N(ve,{key:0},[L(m,{modelValue:g.value,"onUpdate:modelValue":w[1]||(w[1]=_=>g.value=_),options:s.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),f.value?(D(),N("div",Ho,[w[9]||(w[9]=T("span",{class:"hud-label"},"Height",-1)),L(b,{modelValue:M(t).sliceHeightM,"onUpdate:modelValue":w[2]||(w[2]=_=>M(t).sliceHeightM=_),min:M(Dt),max:a.value,step:M(je),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),T("span",jo,E(Number(M(t).sliceHeightM).toFixed(1))+" m",1)])):H("",!0),g.value==="v"?(D(),N("div",Go,[w[10]||(w[10]=T("span",{class:"hud-label"},"Position",-1)),L(b,{modelValue:M(t).planeOffsetM,"onUpdate:modelValue":w[3]||(w[3]=_=>M(t).planeOffsetM=_),min:o.value[0],max:o.value[1],step:M(ae),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),T("span",qo,E(d.value),1)])):H("",!0)],64)):H("",!0),M(t).view!=="off"?(D(),N(ve,{key:1},[M(t).view==="particles"?(D(),N("div",Ko,[w[11]||(w[11]=T("span",{class:"hud-label"},"View mode",-1)),L(m,{modelValue:M(t).particles,"onUpdate:modelValue":w[4]||(w[4]=_=>M(t).particles=_),options:h,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])])):H("",!0),T("div",Zo,[w[12]||(w[12]=T("span",{class:"hud-label"},"Density",-1)),L(m,{modelValue:M(t).density,"onUpdate:modelValue":w[5]||(w[5]=_=>M(t).density=_),options:c,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),L($,{modelValue:M(t).paused,"onUpdate:modelValue":w[6]||(w[6]=_=>M(t).paused=_),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):H("",!0),M(t).view!=="off"?(D(),N(ve,{key:2},[L(v,{class:"!my-0"}),L(m,{modelValue:M(t).variable,"onUpdate:modelValue":w[7]||(w[7]=_=>M(t).variable=_),options:l.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),M(e).legend?(D(),N("div",Qo,[T("div",{class:"colorbar",style:Tr({background:x.value})},null,4),T("div",Jo,[T("span",null,E(M(e).legend.low.toFixed(2)),1),T("strong",null,E(M(e).legend.legend)+" ("+E(M(e).legend.unit)+")",1),T("span",null,E(M(e).legend.high.toFixed(2)),1)])])):H("",!0)],64)):H("",!0),L(v,{class:"!my-0"}),L($,{modelValue:M(t).showSurroundings,"onUpdate:modelValue":w[8]||(w[8]=_=>M(t).showSurroundings=_),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),T("p",ea,[K(E(M(_t)[i.value.settings.model])+" · 3D wind up to "+E(a.value.toFixed(0))+" m · "+E(r.value)+" / "+E(i.value.settings.layers.length)+" layers · "+E((i.value.milliseconds/1e3).toFixed(1))+" s ",1),i.value.grid.mainDomain?(D(),N(ve,{key:0},[K(" · solid outline: main area, dashed: "+E((i.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):H("",!0)])],64)):(D(),N("p",Wo,"Run a prediction to see the 3D wind."))])}}},ra=yt(ta,[["__scopeId","data-v-ce293a4f"]]),ia={class:"space-y-2"},na={key:0,class:"map-hud-muted"},oa={class:"grid grid-cols-2 gap-2"},aa={__name:"DownloadsHud",setup(n){const{store:e,download:t}=Je(),i=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function r(a){const o=e.engine;return e.downloading||o.downloading||a!=="model"&&(o.busy||!o.prediction)}return(a,o)=>{const l=Ke,u=Ze,s=Qe;return D(),N("div",ia,[M(e).grid?(D(),N(ve,{key:1},[T("div",oa,[(D(),N(ve,null,nr(i,g=>L(l,{key:g.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":g.label,disabled:r(g.id),onClick:h=>M(t)(g.id)},{default:q(()=>[K(E(g.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),M(e).downloading?(D(),Pe(u,{key:0,indeterminate:"","aria-label":"Preparing download"})):H("",!0),M(e).downloadError?(D(),Pe(s,{key:1,color:"danger"},{default:q(()=>[K(E(M(e).downloadError),1)]),_:1})):H("",!0)],64)):(D(),N("p",na,"Choose a simulation area before downloading its model."))])}}},sa={class:"flume-hud-stack map-hud-column"},la={class:"flume-heading map-hud-heading city-glass"},ua={class:"flume-heading__row"},ca={key:0,class:"flume-info"},da={class:"flume-info__title"},fa={class:"flume-info__copyright"},ga=["href"],ha={class:"map-hud-muted normal-case"},pa={class:"map-hud-muted normal-case"},ma={key:0,class:"flume-status"},ya={__name:"FlumeCityView",setup(n){const{mapElement:e,store:t,controls:i,locked:r,area:a}=bo(),{controlsVisible:o}=i,{currentPresetName:l}=tr(),u=j(()=>l.value==="dark"),s=We(!1),g=j(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),h={particles:"Particles",slice:"Slice",off:"Off"},f=j(()=>t.engine.prediction?h[t.display.view]:""),c={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(d,p)=>{const x=Ke,y=Qe,w=Ze;return D(),N("section",{class:Or(["flume-page map-glass",{"map-glass--dark":u.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=zr((...m)=>M(a).stopSelection&&M(a).stopSelection(...m),["esc"]))},[Lr(T("div",sa,[T("header",la,[T("div",ua,[p[2]||(p[2]=T("h1",null,"Flume City",-1)),L(x,{preset:"secondary",color:"textPrimary",size:"small",icon:s.value?"mso-close":"mso-info","aria-label":s.value?"Hide Flume City information":"Show Flume City information","aria-expanded":s.value,onClick:p[0]||(p[0]=m=>s.value=!s.value)},null,8,["icon","aria-label","aria-expanded"])]),s.value?(D(),N("div",ca,[T("p",da,E(c.title),1),T("p",null,E(c.authors),1),T("p",null,E(c.summary),1),L(x,{preset:"secondary",size:"small",icon:"mso-description",href:c.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:q(()=>[...p[3]||(p[3]=[K("arXiv",-1)])]),_:1},8,["href"]),T("div",fa,[T("p",null,[p[4]||(p[4]=K(" Developed and maintained by ",-1)),T("a",{href:M(Oe).lab.url,target:"_blank",rel:"noopener"},E(M(Oe).lab.name),9,ga),p[5]||(p[5]=T("br",null,null,-1)),K("("+E(M(Oe).lead)+") ",1)]),T("p",null,E(M(Oe).place),1)])])):H("",!0)]),L(Ve,{title:"1 · Simulation area",inert:M(r),collapsed:!!M(t).grid},{default:q(()=>[L(Po)]),_:1},8,["inert","collapsed"]),L(Ve,{title:"2 · Wind configuration",collapsed:!M(t).grid},{"header-extra":q(()=>[T("span",ha,E(g.value),1)]),default:q(()=>[L(No)]),_:1},8,["collapsed"]),L(Ve,{title:"3 · Wind visualization",collapsed:!M(t).engine.prediction},{"header-extra":q(()=>[T("span",pa,E(f.value),1)]),default:q(()=>[L(ra)]),_:1},8,["collapsed"]),L(Ve,{title:"4 · Downloads",collapsed:!M(t).grid},{default:q(()=>[L(aa)]),_:1},8,["collapsed"]),M(t).error&&!M(t).grid?(D(),Pe(y,{key:0,color:"danger"},{default:q(()=>[K(E(M(t).error),1)]),_:1})):H("",!0)],512),[[Dr,M(o)]]),T("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),L(Fi,{controls:M(i),shown:M(t).mapCreated,disabled:M(r)},null,8,["controls","shown","disabled"]),!M(t).mapReady&&!M(t).error?(D(),N("div",ma,[L(w,{indeterminate:"","aria-label":"Loading Flume map"})])):H("",!0)],34)}}},Ta=yt(ya,[["__scopeId","data-v-df02ad43"]]);export{Ta as default};
