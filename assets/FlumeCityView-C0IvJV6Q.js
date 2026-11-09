import{m as he,s as ht,x as Ce,l as pt,y as tr,z as Br,p as j,q as We,a5 as Pr,a6 as Ir,o as L,c as U,b as D,u as $,w as G,d as K,t as E,a as F,h as $e,i as H,a7 as rr,R as Ar,V as Ke,Y as mt,U as ir,Q as Ze,G as Qe,_ as yt,O as Rr,e as Tr,F as ve,r as nr,n as Fr,E as Er,S as Dr,$ as Lr,a0 as zr,a8 as Oe,a3 as Or,K as Vr}from"./index-D1-PS71X.js";import{m as or,s as Xr,b as Nr,u as Ur,a as Yr,M as Ve}from"./mapbox-gl-geocoder-Lf0yDngw.js";import{z as Wr}from"./archive-Dz16c6AW.js";import{d as Hr}from"./download-B6B1Q6H-.js";import{m as se,c as Bt,B as jr,Q as et,a as Gr,s as qr,M as ar,b as Kr,d as He,f as Zr,t as Qr,e as Jr,A as ei,g as ti,r as wt,F as bt,h as xt,G as ri,P as ii,p as vt,C as ni,i as _t,j as Le,l as Pt,k as ae,L as je,v as oi,V as ze,n as ai,o as si,q as li,u as sr,w as ui,x as It,y as ci,z as di,D as At,E as fi,H as lr,S as Rt,I as ur,J as Tt,K as tt,N as cr,O as gi,R as hi,T as pi,U as Ft,W as mi,X as yi,Y as wi,Z as bi,_ as Et,$ as Dt,a0 as Lt,a1 as xi,a2 as vi,a3 as _i}from"./volumeSource-Yqfeos7Y.js";import{M as rt}from"./mapbox-gl-draw-qggDpl7i.js";import{D as dr,a as $i,S as Mi}from"./drawShapes-qJkSTojK.js";import{c as zt,m as ki}from"./geojsonToStl-Bbo8coar.js";import{r as Si,l as Ci}from"./buildingTiles-CrUawQKQ.js";import{M as Ot,P as Xe,V as ue,S as Bi,C as Pi,a as Ii,m as fr,i as gr,n as hr,k as Ge,o as at,W as Ai,D as Vt,R as Xt,c as Ri,L as Nt,H as Ti,p as Ut,q as Fi,B as Ei,d as Di,l as Li}from"./MapActions-a5PiQ5Uw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";import"./earcut-Drp1yMsm.js";const fe="flume-detailed-buildings",ge="flume-region-domain",Re="flume-main-domain";function st(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(fe)&&n.removeLayer(fe),n.getSource(fe)&&n.removeSource(fe);return}n.getSource(fe)?n.getSource(fe).setData(e):n.addSource(fe,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(fe)||n.addLayer({id:fe,type:"fill-extrusion",source:fe,minzoom:0,paint:{"fill-extrusion-color":se().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function zi(n,e){if(!e){n.getLayer(Re)&&n.removeLayer(Re),n.getLayer(ge)&&n.removeLayer(ge),n.getSource(ge)&&n.removeSource(ge);return}const t=[{...e.polygon,properties:{role:"outer"}}];e.mainDomain&&t.push({...e.mainDomain.polygon,properties:{role:"main"}});const i={type:"FeatureCollection",features:t};n.getSource(ge)?n.getSource(ge).setData(i):(n.addSource(ge,{type:"geojson",data:i}),n.addLayer({id:ge,type:"line",source:ge,filter:["==",["get","role"],"outer"],paint:{"line-color":se().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!n.getLayer(Re)&&n.addLayer({id:Re,type:"line",source:ge,filter:["==",["get","role"],"main"],paint:{"line-color":se().mainArea,"line-width":3}}),!e.mainDomain&&n.getLayer(Re)&&n.removeLayer(Re)}const Yt=["draw.create","draw.update","draw.delete"];function Oi({getMap:n,ready:e,onChange:t,accessToken:i}){const r=pt({source:"concordia",bufferPercent:jr*100,shape:"polygon",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,o=!1,l=null,u=0,s=null;function f(k=!1){u++,l==null||l.abort(),k||(s=null,r.loadedArea=null),r.snapshot=null,t==null||t()}function h(){const k=n();!k||!e.value||(st(k,s==null?void 0:s.preview),zi(k,r.region??(s==null?void 0:s.area)??null))}function g(){return(s==null?void 0:s.preview)??null}function d(k){f(!r.region&&!r.snapshot),r.error="";try{r.region=Ce(Bt(k))}catch(C){r.region=null,r.error=C.message}h()}function c(k){var X;if(o||!a)return;const C=(X=k.features)==null?void 0:X.at(-1);if(k.type==="draw.create"&&C)for(const W of a.getAll().features)W.id!==C.id&&a.delete(W.id);const A=a.getAll().features.find(W=>W.geometry.type==="Polygon");A?d(A):(f(),r.region=null,h()),r.drawing=!1}function p(k){r.drawing=$i.has(k.mode)}function x(){var C;const k=n();if(!k||!e.value)throw new Error("Wait for the map to load.");if(!a){const A={...rt.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};a=new rt({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...rt.modes,...Mi,simple_select:A}}),k.addControl(a,"bottom-left");for(const X of Yt)k.on(X,c);k.on("draw.modechange",p),w(k),k.once("idle",()=>w(k)),(C=r.region)!=null&&C.selection&&a.add(r.region.selection)}return a}function w(k){var C;for(const A of((C=k.getStyle())==null?void 0:C.layers)??[])A.id.startsWith("gl-draw-")&&(A.type==="fill"&&(k.setPaintProperty(A.id,"fill-color",se().mainArea),k.setPaintProperty(A.id,"fill-opacity",se().drawFillOpacity)),A.type==="line"&&(k.setPaintProperty(A.id,"line-color",se().mainArea),k.setPaintProperty(A.id,"line-width",3)))}function y(){const k=n();if(!(!a||!k)){for(const C of Yt)k.off(C,c);k.off("draw.modechange",p),k.removeControl(a),a=null,r.drawing=!1}}function m(){var k;if(!r.loading)try{const C=x();n().stop(),f(!r.region&&!r.snapshot),r.region=null,C.deleteAll(),h(),C.changeMode(((k=dr.find(A=>A.value===r.shape))==null?void 0:k.mode)??"draw_polygon"),r.drawing=!0,r.error=""}catch(C){r.error=C.message}}function b(){a&&a.changeMode("simple_select"),r.drawing=!1}function M(){var k;(k=n())==null||k.stop(),y(),f(),r.region=null,r.error="",h()}async function v(k){const C=new AbortController,A=u;l=C,r.loading=!0,r.progress=0,r.error="";const X=()=>o||C.signal.aborted||A!==u;try{return await k({signal:C.signal,epoch:A,isStale:X})}catch(W){return C.abort(),!o&&A===u&&W.name!=="AbortError"&&(r.error=W.message),null}finally{l===C&&(l=null,o||(r.loading=!1))}}async function _(k,C,{signal:A,epoch:X,isStale:W}){if(A.throwIfAborted(),(s==null?void 0:s.source)===C){const[R,N,Q,de]=k.bounds,le=s.area.bounds;if(R>=le[0]&&N>=le[1]&&Q<=le[2]&&de<=le[3])return s.tiles}const ne=n(),z=C==="osm"?"composite":"city-concordia",te=Si({map:ne,sourceId:z,source:C,bounds:k.bounds})??await Ci({sourceConfig:ne.getStyle().sources[z],source:C,bounds:k.bounds,accessToken:i,signal:A,paddingTiles:1,onProgress:R=>{X===u&&(r.progress=R)}});if(W())throw new DOMException("Cancelled","AbortError");const ce=He(te.features);return s={source:C,area:k,tiles:te,preview:ce},r.loadedArea=Ce({source:C,bounds:[...k.bounds],extentM:[...k.extentM],count:ce.features.length,fromMap:!!te.fromMap}),h(),te}function S(k){var X;const C=n(),A=C.getCanvas().clientWidth;(X=C.resize)==null||X.call(C),C.fitBounds([k.bounds.slice(0,2),k.bounds.slice(2,4)],{padding:A>=640?{top:40,bottom:40,left:Math.min(320,A*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function B(){if(r.loading||o)return null;const k=n();if(!k||!e.value)return r.error="Wait for the map to load.",null;const C=r.source;return v(async A=>{const X=et/2,W=k.getCenter().wrap().toArray(),ne=zt(W)([-X,-X]),z=Gr(ne,zt(ne)([et,et]));return S(z),await _(z,C,A),A.isStale()?null:(r.snapshot=null,t==null||t(),r.loadedArea)})}async function P(){if(r.loading||o)return null;!r.region&&(s==null?void 0:s.source)===r.source&&d(s.area.polygon);const k=n(),C=r.region,A=r.source;return!k||!e.value||!C?(r.error="Draw and finish a valid polygon first.",null):v(async X=>{const W=Bt(C.selection??C.polygon);let ne=W,z,Z;for(let R=0;R<4;R++){if(Z=await _(ne,A,X),X.isStale())return null;z=qr(Z.features,W);const[N,Q,de,le]=z.bounds,ee=Z.coverageBounds,we=1e-8;if(N>ee[0]+we&&Q>ee[1]+we&&de<ee[2]-we&&le<ee[3]-we||!z.buildings.features.length)break;if(R===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");ne=z}const te=Math.min(Math.max(Number(r.bufferPercent)||0,0),ar*100)/100;z=Kr(z,te),z.source=A,z.dataZoom=Z.zoom,z.tileCount=Z.tileCount,z.surroundings=He(z.surroundings.features),z.warnings=z.warnings.filter(R=>!R.startsWith("Loaded map tiles only"));const ce=Z.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return z.warnings.push(ce+Z.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(z.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),r.snapshot=Ce(z),r.region=Ce({origin:z.origin,bounds:z.bounds,extentM:z.extentM,polygon:z.polygon,selection:z.selection,mainDomain:z.mainDomain,buffer:z.buffer}),h(),S(z),t==null||t(),z})}function T(){l==null||l.abort(),y()}function I(){var k;h(),(k=r.region)!=null&&k.selection&&x()}function V(){o=!0,u++,l==null||l.abort(),y()}return he(()=>r.source,()=>{f(),h(),r.error=""}),ht(V),{state:r,startSelection:m,stopSelection:b,clearSelection:M,setSelection:d,captureRegion:P,loadBuildings:B,getPreview:g,restore:I,beforeStyleChange:T}}const xe=180,pr=4,mr=7,$t=pr*mr,qe=1.5,Wt=4,Vi=1600,Xi=256*1024*1024,Ue=n=>n.toFixed(6),Ni=640,Ui=`
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
  let gxr = cosT[angle] / ${Ue(Wt)};
  let gyr = sinT[angle] / ${Ue(Wt)};

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

  let cutoff = ${Ue(Vi)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Ni}u; step++) {
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
}`,Yi=`
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
          + sig * ${mr}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Wi=n=>`${n==="f16"?`enable f16;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Ue(qe)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`;class Hi{constructor(e,t,i,r,a,o="f32"){this.context=e,this.store=o,this.ny=i,this.nx=r,this.margin=a,this.gy=i+2*a,this.gx=r+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const l=new Float32Array(this.gy*this.gx);for(let f=0;f<i;f++){const h=f*r,g=(f+a)*this.gx+a;for(let d=0;d<r;d++)l[g+d]=t[h+d]*qe}this.heightBuffer=e.upload(l,"mddf.height");const u=new Float32Array(xe),s=new Float32Array(xe);for(let f=0;f<xe;f++){const h=2*Math.PI*f/xe;u[f]=Math.cos(h),s[f]=Math.sin(h)}this.cosBuffer=e.upload(u,"mddf.cos"),this.sinBuffer=e.upload(s,"mddf.sin"),this.rawBuffer=e.storage(pr*this.chunk*xe*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*$t*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(Ui),this.fourierPipeline=e.pipeline(Yi),this.assemblePipeline=e.pipeline(Wi(o)),this.currentLayer=-1}async compute(e,t={}){var u,s,f;const{context:i}=this,r=this.cache.get(e);if(r){this.fieldBuffer=r,this.currentLayer=e,(u=t.onProgress)==null||u.call(t,1);return}const a=(this.cache.size+1)*this.fieldBytes<=Xi;this.fieldBuffer=a?i.storage(this.fieldBytes,"mddf.field."+e):this.spare;const o=(e+.5)*qe,l=this.gy*this.gx;for(let h=0;h<l;h+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const g=Math.min(this.chunk,l-h),d=i.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",h],["u",g],["u",0],["u",0],["u",0],["f",o],["f",0],["f",0],["f",0]]),c=i.device.createCommandEncoder(),p=c.beginComputePass();i.dispatch(p,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,d],g*xe),i.dispatch(p,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,d],g*4,64),p.end(),i.device.queue.submit([c.finish()])}await i.device.queue.onSubmittedWorkDone(),(f=t.onProgress)==null||f.call(t,1),i.releaseScratch(),a&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,t,i,r,a,o,l){const{context:u}=this,s=t.length/2,f=u.upload(t,"assemble.origins"),h=u.uniform([["u",s],["u",i.channels],["u",i.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",i.solidChannel],["i",i.coordChannel],["i",0],["i",0],["f",Math.cos(r)],["f",Math.sin(r)],["f",r],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",i.coordYScale],["f",(a-i.coordZCentre)/i.coordZScale],["f",i.coordXCentre],["f",i.coordXScale],["f",0],["f",0]]),g=e.beginComputePass();return u.dispatch(g,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,f,i.tableBuffer,i.normBuffer,l,h],s*i.channels*o*o),g.end(),f}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const it=`
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
`,ji=`
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
}`}const nt=32;function Gi(n){const{store:e,patch:t,modes1:i,modes2:r}=n,a=t*t,o=2*i,l=e==="f16"?`enable f16;
`:"",u=f=>e==="f16"?`f32(${f})`:f,s=f=>e==="f16"?`f16(${f})`:f;return{conv1x1:`${l}${it}
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
}`}}function qi(n,e,t){const i=2*e,r=[];for(let d=0;d<e;d++)r.push(d);for(let d=n-e;d<n;d++)r.push(d);const a=new Float32Array(n*t),o=new Float32Array(n*t);for(let d=0;d<n;d++)for(let c=0;c<t;c++){const p=2*Math.PI*d*c/n;a[d*t+c]=Math.cos(p),o[d*t+c]=-Math.sin(p)}const l=new Float32Array(i*n),u=new Float32Array(i*n);for(let d=0;d<i;d++)for(let c=0;c<n;c++){const p=2*Math.PI*r[d]*c/n;l[d*n+c]=Math.cos(p),u[d*n+c]=-Math.sin(p)}const s=new Float32Array(n*i),f=new Float32Array(n*i);for(let d=0;d<n;d++)for(let c=0;c<i;c++){const p=2*Math.PI*r[c]*d/n;s[d*i+c]=Math.cos(p)/n,f[d*i+c]=Math.sin(p)/n}const h=new Float32Array(t*n),g=new Float32Array(t*n);for(let d=0;d<t;d++){const c=(d===0?1:2)/n;for(let p=0;p<n;p++){const x=2*Math.PI*d*p/n;h[d*n+p]=c*Math.cos(x),g[d*n+p]=-c*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:l,rowIm:u,inverseRowRe:s,inverseRowIm:f,inverseColCos:h,inverseColSin:g}}class Ki{constructor(e,t,i,r){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=r,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[s,f]of Object.entries(Gi(o)))this.pipelines[s]=e.pipeline(f);this.contractPipeline=e.pipeline(ji);const l=s=>{const f=t.tensors[s];if(!f)throw new Error(`missing tensor ${s}`);return Zr(new Uint16Array(i,f.offset,f.count))};this.read=l,this.tables={};for(const[s,f]of Object.entries(qi(this.patch,this.modes1,this.modes2)))this.tables[s]=e.upload(f,`fno.table.${s}`);this.weights={};const u=(s,f)=>{const h=l(f);this.weights[s]=this.store==="f16"?e.upload(Qr(h),`fno.${s}`):e.upload(h,`fno.${s}`)};u("p1w","p.mlp1.weight"),u("p1b","p.mlp1.bias"),u("p2w","p.mlp2.weight"),u("p2b","p.mlp2.bias"),u("q1w","q.mlp1.weight"),u("q1b","q.mlp1.bias"),u("q2w","q.mlp2.weight"),u("q2b","q.mlp2.bias");for(let s=0;s<this.layers;s++)u(`m1w${s}`,`mlp_layers.${s}.mlp1.weight`),u(`m1b${s}`,`mlp_layers.${s}.mlp1.bias`),u(`m2w${s}`,`mlp_layers.${s}.mlp2.weight`),u(`m2b${s}`,`mlp_layers.${s}.mlp2.bias`),u(`lw${s}`,`w_layers.${s}.weight`),u(`lb${s}`,`w_layers.${s}.bias`);this.buildSpectralWeights(),this.allocate(r)}buildSpectralWeights(){const{context:e,metadata:t}=this,i=t.tucker;let r=i.core_shape.slice(),a=e.upload(this.read(`${i.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${i.core}.im`),"tucker.core.im");for(const u of i.factors){const[s,f]=u.shape;if(r[u.mode]!==f)throw new Error(`factor ${u.name} does not match the core`);const h=r.slice();h[u.mode]=s;const g=h.reduce((M,v)=>M*v,1),d=h.slice(u.mode+1).reduce((M,v)=>M*v,1),c=e.storage(g*4,"tucker.re"),p=e.storage(g*4,"tucker.im"),x=e.upload(this.read(`${u.name}.re`),"tucker.f"),w=e.upload(this.read(`${u.name}.im`),"tucker.f"),y=e.uniform([["u",h[0]],["u",h[1]],["u",h[2]],["u",h[3]],["u",h[4]],["u",u.mode],["u",s],["u",f],["u",d],["u",0],["u",g],["u",0]]),m=e.device.createCommandEncoder(),b=m.beginComputePass();e.dispatch(b,this.contractPipeline,[a,o,x,w,c,p,y],g),b.end(),e.device.queue.submit([m.finish()]),e.free(a),e.free(o),e.free(x),e.free(w),a=c,o=p,r=h}e.releaseScratch();const l=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(r.join()!==l.join())throw new Error(`spectral stack is ${r} but ${l} was expected`);this.spectralRe=a,this.spectralIm=o}allocate(e){const{context:t}=this,i=this.patch*this.patch,r=this.width,a=2*this.modes1,o=(u,s)=>t.storage(e*u*i*this.elementBytes,s),l=(u,s)=>t.storage(e*r*u*4,s);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(r,"fno.x"),t1:o(r,"fno.t1"),t2:o(r,"fno.t2"),gates:o(4*r,"fno.gates"),hidden:o(2*r,"fno.hidden"),spectral:o(r,"fno.spectral"),local:o(r,"fno.local"),wide:o(2*r,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:l(this.patch*this.modes2,"fno.xRe"),xIm:l(this.patch*this.modes2,"fno.xIm"),yRe:l(a*this.modes2,"fno.yRe"),yIm:l(a*this.modes2,"fno.yIm"),zRe:l(a*this.modes2,"fno.zRe"),zIm:l(a*this.modes2,"fno.zIm"),wRe:l(this.patch*this.modes2,"fno.wRe"),wIm:l(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,i=this.width,r=2*this.modes1,a=this.inputChannels+5*i+4*i+2*i+2*i+this.outputChannels,o=i*(2*this.patch*this.modes2*2+4*r*this.modes2)*4;return e*(a*t*this.elementBytes+o)}encode(e,t){const{context:i,buffers:r,pipelines:a,tables:o}=this,l=this.width,u=this.patch*this.patch,s=2*this.modes1,f=e.beginComputePass(),h=(d,c,p,x,w=256)=>{i.dispatch(f,d,[...c,i.uniform(p)],x,w)},g=(d,c,p=a.instanceNorm)=>{f.setPipeline(p),f.setBindGroup(0,i.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:{buffer:c}}]})),f.dispatchWorkgroups(t*l)};h(a.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",t],["u",this.inputChannels],["u",2*l],["u",1]],t*2*l*u),h(a.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",t],["u",2*l],["u",l],["u",0]],t*l*u);for(let d=0;d<this.layers;d++)g(r.x,r.t1),h(a.forwardColumns,[r.t1,o.forwardCos,o.forwardSin,r.xRe,r.xIm],[["u",t],["u",l],["u",0],["u",0]],t*l*this.patch*this.modes2),h(a.rowMix,[r.xRe,r.xIm,o.rowRe,o.rowIm,r.yRe,r.yIm],[["u",t],["u",l],["u",s],["u",this.patch]],t*l*s*this.modes2),h(a.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",t],["u",l],["u",2*d],["u",0]],t*l*s*this.modes2),h(a.rowMix,[r.zRe,r.zIm,o.inverseRowRe,o.inverseRowIm,r.wRe,r.wIm],[["u",t],["u",l],["u",this.patch],["u",s]],t*l*this.patch*this.modes2),h(a.inverseColumns,[r.wRe,r.wIm,o.inverseColCos,o.inverseColSin,r.t2],[["u",t],["u",l],["u",0],["u",0]],t*l*u),g(r.t2,r.t1,a.instanceNormScaled),h(a.conv1x1,[r.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],r.gates],[["u",t],["u",l],["u",4*l],["u",0]],t*4*l*u),h(a.gate,[r.gates,r.hidden],[["u",t],["u",2*l],["u",0],["u",0]],t*2*l*u),h(a.conv1x1,[r.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],r.spectral],[["u",t],["u",2*l],["u",l],["u",0]],t*l*u),h(a.conv1x1,[r.x,this.weights[`lw${d}`],this.weights[`lb${d}`],r.local],[["u",t],["u",l],["u",l],["u",0]],t*l*u),h(a.residual,[r.spectral,r.local,r.x],[["u",t*l*u],["u",d<this.layers-1?1:0],["u",0],["u",0]],t*l*u);return h(a.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",t],["u",l],["u",2*l],["u",1]],t*2*l*u),h(a.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",t],["u",2*l],["u",this.outputChannels],["u",0]],t*this.outputChannels*u),f.end(),r.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const Zi=n=>n.toFixed(6),Qi=n=>`${n==="f16"?`enable f16;
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
}`,Ji=`
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
                      / ${Zi(qe)});
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
}`;function en(n,e){if(!n)return e;if(!e)return n;const t=Math.min(n.y0,e.y0),i=Math.min(n.x0,e.x0);return{y0:t,x0:i,h:Math.max(n.y0+n.h,e.y0+e.h)-t,w:Math.max(n.x0+n.w,e.x0+e.w)-i}}function tn(n,e,t){let i=1/0,r=-1/0;const a=o=>{i=Math.min(i,o),r=Math.max(r,o)};for(let o=0;o<4;o++){const l=n[o],u=n[(o+1)%4];l[1]>=e&&l[1]<=t&&a(l[0]);for(const s of[e,t])if((l[1]-s)*(u[1]-s)<0){const f=(s-l[1])/(u[1]-l[1]);a(l[0]+f*(u[0]-l[0]))}}return i<=r?[i,r]:null}let rn=class{constructor(e,t,i,r={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=r.batchSize||16,this.fno=new Ki(e,t,i,this.batchSize),this.blendPipeline=e.pipeline(Qi(this.fno.store)),this.finalizePipeline=e.pipeline(Ji),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,i=t.features,r=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,o=i.mddf_source_indices,l=new Uint32Array(o.length*4),u=new Float32Array(o.length*2);o.forEach((f,h)=>{const g=Math.floor(f/r),d=f%r,c=d>a?1:0,p=d===0?0:c?d-a:d;l.set([g*r+p,g*r+(p===0?0:a+p),p,c],h*4),u[h*2]=i.mddf_center[h],u[h*2+1]=i.mddf_scale[h]});const s=t.coordinates;return{channels:t.model.input_channels,mddfChannels:o.length,solidChannel:i.use_building_input?o.length:-1,coordChannel:o.length+(i.use_building_input?1:0),coordYScale:s.y_scale,coordZCentre:s.z_center,coordZScale:s.z_scale,coordXCentre:s.x_center,coordXScale:s.x_scale,tableBuffer:e.upload(l,"plan.table"),normBuffer:e.upload(u,"plan.norm")}}setCity(e,t,i){this.city&&this.city.field.destroy();const r=Math.ceil(this.patch*Math.SQRT2),a=(t+2*r)*(i+2*r)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(a>o)throw new Error(`city ${i} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const l=new Hi(this.context,e,t,i,r,this.fno.store);return this.city={field:l,ny:t,nx:i,layerMap:e,margin:r,layerIndex:-1},{margin:r,gy:l.gy,gx:l.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:i}=this.city,r=(t-1)/2,a=(i-1)/2,o=Math.cos(e),l=Math.sin(e),u=[[0,0],[i-1,0],[i-1,t-1],[0,t-1]].map(([m,b])=>{const M=m-a,v=b-r;return[a+M*o+v*l,r-M*l+v*o]}),s=Math.floor(Math.min(...u.map(m=>m[1]))),f=Math.ceil(Math.max(...u.map(m=>m[1]))),h=Math.floor(Math.min(...u.map(m=>m[0]))),g=Math.ceil(Math.max(...u.map(m=>m[0]))),d=g-h+1,c=Math.max(1,Math.ceil((d-this.patch)/this.stride)+1),p=c>1?(d-this.patch)/(c-1):0,x=u.map(([m,b])=>[b,m]),w=[],y=[];for(let m=0;m<c;m++){const b=Math.round(h+m*p),M=tn(x,b,b+this.patch-1)||[s,s+this.patch-1],v=Math.floor(M[0]),_=Math.max(this.patch,Math.ceil(M[1])-v+1),S=Math.max(1,Math.ceil((_-this.patch)/this.stride)+1),B=S>1?(_-this.patch)/(S-1):0;y.push([w.length/2,S,b-h]);for(let P=0;P<S;P++)w.push(b,Math.round(v+P*B))}return{origins:new Float32Array(w),columns:y,columnCount:c,columnStride:p,syMin:s,sxMin:h,gridH:f-s+1,gridW:g-h+1,patchCount:w.length/2}}patchRect(e,t,i){let r=1/0,a=1/0,o=-1/0,l=-1/0;for(const[u,s,f]of e.columns)for(let h=0;h<s;h++){const g=u+h;if(g<t||g>=i)continue;const d=e.origins[g*2+1]-e.syMin;r=Math.min(r,d),a=Math.min(a,f),o=Math.max(o,d+this.patch),l=Math.max(l,f+this.patch)}return Number.isFinite(r)?(r=Math.max(0,r),a=Math.max(0,a),o=Math.min(e.gridH,o),l=Math.min(e.gridW,l),{y0:r,x0:a,h:Math.max(0,o-r),w:Math.max(0,l-a)}):null}async predict(e,t={}){var Z,te,ce;const{context:i,city:r}=this,a=this.tiling(e),o=this.metadata.model.output_channels,l=a.gridH*a.gridW,u=this.patch*this.patch,s=performance.now(),f=!!(t.shouldDraw&&t.onDraw),h=o+2,g=i.storage(a.patchCount*o*u*this.fno.elementBytes,"predict.patches"),d=new Int32Array(a.patchCount);for(let R=0;R<a.patchCount;R++)d[R]=a.origins[R*2+1]-a.syMin;const c=i.upload(d,"blend.origins"),p=i.upload(new Int32Array(a.columns.flat()),"blend.columns"),x=i.storage(l*o*4,"blend.field"),w=i.storage(l*4,"blend.weight"),y=i.storage(l*4,"blend.solid"),m=i.storage(f?l*4:4,"blend.finalWeight"),b=i.storage(f?l*h*4:4,"blend.packed"),M=this.metadata.target,v=i.upload(new Float32Array(M.center),"final.centre"),_=i.upload(new Float32Array(M.scale),"final.scale"),S={y0:0,x0:0,h:a.gridH,w:a.gridW},B=(R,N,Q,de)=>{const le=R.beginComputePass();i.dispatch(le,this.blendPipeline,[g,c,p,x,de,i.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",o],["u",a.columnCount],["u",a.patchCount],["u",Q],["u",0],["u",N.y0],["u",N.x0],["u",N.h],["u",N.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],N.h*N.w),le.end()},P=(R,N,Q)=>{const de=R.beginComputePass();i.dispatch(de,this.finalizePipeline,[x,w,v,_,r.field.heightBuffer,y,m,b,i.uniform([["u",a.gridH],["u",a.gridW],["u",o],["u",Q?1:0],["u",N.y0],["u",N.x0],["u",N.h],["u",N.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(r.ny-1)/2],["f",(r.nx-1)/2],["f",r.field.gy],["f",r.field.gx],["f",r.margin],["f",r.layerIndex],["f",r.ny],["f",r.nx],["f",0],["f",0]])],N.h*N.w),de.end()};if(f){const R=i.device.createCommandEncoder();B(R,S,a.patchCount,m),i.device.queue.submit([R.finish()]),(Z=t.onStart)==null||Z.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const T=2,I=[];let V=null;for(let R=0;R<a.patchCount;R+=this.batchSize){(te=t.signal)==null||te.throwIfAborted();const N=Math.min(this.batchSize,a.patchCount-R),Q=i.device.createCommandEncoder(),de=r.field.assemble(Q,a.origins.subarray(R*2,(R+N)*2),this.plan,e,r.layerIndex,this.patch,this.fno.inputBuffer),le=this.fno.encode(Q,N);Q.copyBufferToBuffer(le,0,g,R*o*u*this.fno.elementBytes,N*o*u*this.fno.elementBytes);let ee=null;if(f){V=en(V,this.patchRect(a,R,R+N));const we=R+N>=a.patchCount;V&&V.h>0&&V.w>0&&(we||t.shouldDraw())&&(ee=V,V=null,B(Q,ee,R+N,w),P(Q,ee,!0))}if(i.device.queue.submit([Q.finish()]),i.free(de),I.push(i.device.queue.onSubmittedWorkDone()),I.length>T&&await I.shift(),(ce=t.onProgress)==null||ce.call(t,(R+N)/a.patchCount),ee){const we=await i.readFloat32(b,ee.h*ee.w*h);t.onDraw({x0:ee.x0,y0:ee.y0,width:ee.w,height:ee.h,stride:h,channels:o,theta:e,values:we,readyCount:R+N,patchCount:a.patchCount})}}const k=i.device.createCommandEncoder();B(k,S,a.patchCount,w),P(k,S,!1),i.device.queue.submit([k.finish()]);const[C,A,X]=await Promise.all([i.readFloat32(x,l*o),i.readFloat32(y,l),i.readFloat32(w,l)]),W=performance.now()-s;let ne=0,z=0;for(let R=0;R<l;R++)if(A[R]!==2){if(X[R]<=1e-6){ne+=1;continue}for(let N=0;N<o;N++)if(!Number.isFinite(C[R*o+N])){z+=1;break}}for(const R of[g,x,w,y,c,p,v,_,m,b])i.free(R);return i.releaseScratch(),{values:C,solid:A,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:M.channel_names,milliseconds:W,uncovered:ne,nonFinite:z,insideCells:l}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}};function nn(n,e){var t,i,r,a,o,l,u,s,f;if(n.dtype!=="float16"||n.total_bytes!==e||((t=n.grid)==null?void 0:t.horizontal_spacing_m)!==4||((i=n.grid)==null?void 0:i.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((r=n.model)==null?void 0:r.input_channels)!==24||((a=n.model)==null?void 0:a.output_channels)!==5||((l=(o=n.inference)==null?void 0:o.patch)==null?void 0:l.join())!=="64,64"||((s=(u=n.target)==null?void 0:u.channel_names)==null?void 0:s.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const h of Object.values(n.tensors??{}))if(!Number.isInteger(h.offset)||h.offset<0||h.offset%2||!Number.isInteger(h.count)||h.count<=0||h.offset+h.count*2>e||!Array.isArray(h.shape)||h.shape.some(g=>!Number.isInteger(g)||g<1)||h.shape.reduce((g,d)=>g*d,1)!==h.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(n.tensors??{}).length||!Number.isFinite((f=n.wind)==null?void 0:f.reference_speed_m_s)||n.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function on(n){if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<1||n.height<1||n.values.length!==n.width*n.height*5||n.solid.length!==n.width*n.height)throw new Error("Invalid prediction shape.");for(let e=0;e<n.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(n.values[e*5+t])||(n.solid[e]=2,n.values[e*5+t]=0)}const an=16,sn=4;function ln(){let n=null,e=null,t=[];async function i(u){if(n)return;const s="/cityffdv2-demo/flume/model-v2/",[f,h]=await Promise.all(["metadata.json","weights.bin"].map(async g=>{const d=await fetch(s+g,{signal:u});if(!d.ok)throw new Error("Could not load model v2 "+g+" (HTTP "+d.status+").");return g.endsWith(".bin")?d.arrayBuffer():d.json()}));n=await ri.create(),e=f,t=[0,1].map(()=>({predictor:new ii(n,e,h,{batchSize:an,layerStride:1}),grid:null,key:""}))}async function r(u,s,f,h){const g=f.join(",");(s!==u.grid||g!==u.key)&&(u.predictor.setCity({layers:s.layers,nx:s.nx,ny:s.ny},f),u.grid=s,u.key=g);const{nx:d,ny:c}=s,p=[[-.5,-.5],[d-.5,-.5],[d-.5,c-.5],[-.5,c-.5]];return u.predictor.predict(null,null,h,{polygon:p,overlap:e.inference.overlap})}function a(u,s,f){const h=s.gx*s.gy,g=new Float32Array(h*5),d=new Uint8Array(h),c=f-s.firstLayer;for(let x=0;x<s.gy;x++)for(let w=0;w<s.gx;w++){const y=((x*s.gz+c)*s.gx+w)*sn,m=x*s.gx+w;g[m*5]=s.values[y],g[m*5+1]=s.values[y+1],g[m*5+2]=s.values[y+2],d[m]=s.values[y+3]>0?0:2}const p={width:s.gx,height:s.gy,originX:s.layout.gridX0,values:g,solid:d};vt(u,u.plan.indexOf(f),p)}async function o(u,s,f,{signal:h,onFirstWave:g,onMoreLayers:d}={}){await i(h),ti(s[0],s.at(-1));const c=wt(s).slice(0,bt),p=s.filter(b=>c.includes(b)),x=s.filter(b=>!c.includes(b)),w=await r(t[0],u,p,f);if(!w)return null;const y=xt({width:w.gx,height:w.gy,originX:w.layout.gridX0,originY:w.layout.gridY0,theta:f},s,!1);for(const b of p)a(y,w,b);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(g==null||g({volume:y,referenceSpeed:m}),x.length){const b=await r(t[1],u,x,f);if(!b)return null;for(const M of x)a(y,b,M);d==null||d()}return y}async function l(u,s,f){await i(f);const{predictor:h}=t[0],g=h.inputPlan.stored,d=Math.ceil(h.patch*Math.SQRT2),c=new Jr(n,u,d,h.fno.store,h.inputPlan),p=c.gx*c.gy*g.length*4;let x=null;c.packGroup=async()=>{x=await n.readBack(p,(m,b)=>m.copyBufferToBuffer(c.sumsBuffer,0,b,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(b=>b/ei))};try{const m=c.planGroups([s],h.bufferLimit);c.allocate(m),await c.scan(m[0],()=>{})}finally{c.destroy()}if(!x)throw new Error("Model v2 MDDF could not be read.");const w=g.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:x,ny:c.gy,nx:c.gx,margin:d,layerIndex:s,channels:w,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:o,readMddf:l,cancel(){for(const u of t)u.predictor.cancel()},destroy(){for(const u of t)u.predictor.destroy();n==null||n.device.destroy(),t=[],n=null}}}const Ie=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class Ae extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const oe=()=>new Ae(Ie.MODEL,"the model data does not match this page"),O=256;class Mt{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Ae(Ie.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(a=>setTimeout(a,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new Ae(Ie.GPU,"No WebGPU adapter available.");const i=e&&t.features.has("shader-f16"),r=await t.requestDevice({requiredFeatures:i?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Mt(r,i)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const i=Math.max(4,Math.ceil(e/4)*4),r=this.device.createBuffer({size:i,usage:t});return r.tracked=!0,r}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const i=new Uint8Array(Math.ceil(t.byteLength/4)*4);i.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,i)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,i=new ArrayBuffer(t),r=new Uint32Array(i),a=new Int32Array(i),o=new Float32Array(i);e.forEach(([u,s],f)=>{u==="u"?r[f]=s:u==="i"?a[f]=s:o[f]=s});const l=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(l,0,i),l}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),i=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,i)}return this.pipelines.get(e)}dispatch(e,t,i,r,a=O){this.dispatchGroups(e,t,i,...this.workgroups(r,a))}workgroups(e,t=O){const i=Math.max(1,Math.ceil(e/t)),r=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(i,r),Math.ceil(i/r)]}dispatchGroups(e,t,i,...r){this.replay(e,this.prepared(t,i,r))}prepared(e,t,i){const r=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((a,o)=>({binding:o,resource:{buffer:a}}))});return{pipeline:e,bindGroup:r,groups:i}}replay(e,{pipeline:t,bindGroup:i,groups:r}){e.setPipeline(t),e.setBindGroup(0,i),e.dispatchWorkgroups(...r)}async readBack(e,t,i){const r=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),a=this.device.createCommandEncoder();t(a,r),this.device.queue.submit([a.finish()]);try{await r.mapAsync(GPUMapMode.READ);const o=await i(r.getMappedRange());return r.unmap(),o}finally{this.free(r)}}}const lt=4,Te=1.5;function yr(n,e,t){const i=(e-1)/2,r=(t-1)/2,a=Math.cos(n),o=Math.sin(n);return{theta:n,cX:i,cY:r,cos:a,sin:o,toWind:([l,u])=>{const s=l-i,f=u-r;return[i+s*a+f*o,r-s*o+f*a]},toCity:([l,u])=>{const s=l-i,f=u-r;return[i+s*a-f*o,r+s*o+f*a]}}}const J=64,q=180,wr=1600,un=640,pe=8,Y=32,ye=n=>n.toFixed(6),me=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},cn=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,dn=()=>`
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
  let cutoff = ${ye(wr)};
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
}`;function fn(n){const e=i=>i.part==="dc"?"dc":`${i.part}.${i.mode===1?"x":"y"}`,t=n.map((i,r)=>`  sums[e + ${r}u] += ${e(i)};`).join(`
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
}`}const _e=64,re=8,Be=_e/re,ie=Be*Be,ut=re*re,jt=Math.log2(_e),Gt=Math.log2(re),Ne=re-1,kt="15u",ct="4u",br="0xfffu",dt="2048",gn="4095",St="16u",qt=(n,e,t,i,r)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${r?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(me).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${ye(q)} / STEPS[c]));
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
  let base = i32((h >> ${ct}) & ${br}) - ${dt};
  var wi = field[t] + (h >> ${St});
  let x0 = tx * ${_e}u + (b % ${Be}u) * ${re}u;
  let y0 = ty * ${_e}u + (b / ${Be}u) * ${re}u;
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
  }`:`  let x0 = tx * ${_e}u + (b % ${Be}u) * ${re}u;
  let y0 = ty * ${_e}u + (b / ${Be}u) * ${re}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${ut}u; j++) {
    let x = x0 + j % ${re}u; let y = y0 + j / ${re}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ie}u + b] = w | (u32(clamp(mn + ${dt}, 0, ${gn})) << ${ct});`}
}`,hn=()=>`
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
}`,pn=n=>{const e=`array<f32, ${pe}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${cn}
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
    let cutoff = ${ye(wr)};
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
    for (var step = 0u; step < ${un}u; step++) {
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
}`},mn=(n,e,t)=>{const i=e.stored.length,r=e.up.length,{usesHeight:a}=e,o=[["field","array<u32>"]];a&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),r&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const l=o.map(([f,h],g)=>`@group(0) @binding(${g}) var<storage, read> ${f}: ${h};`);l.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${n}>;`),l.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const u=(f,h)=>`(${f} - ${me(h.center)}) / ${me(h.scale)}`,s=e.inputs.map((f,h)=>{let g;if(f.source==="r1")if(f.part==="dc")g=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(f.signal,"dc",0)}u)`,f)};`;else{const d=e.storedIndex(f.signal,"re",f.mode),c=e.storedIndex(f.signal,"im",f.mode);g=`let re = sampleField(ry, rx, slot, ${d}u);
      let im = sampleField(ry, rx, slot, ${c}u);
      let angle = ${me(f.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(f.part==="im"?"(re * s + im * c)":"(re * c - im * s)",f)};`}else if(f.source==="geo"){const d=f.index===0?"h / 100.0":"asinh((h - z) / 10.0)";g=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${d})`,f)};`}else f.source==="up"?g=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(f.index)}u)`,f)};`:f.source==="solid"?g=`let roofLayer = round(roofHeight(iy, ix) / ${ye(Te)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:f.axis==="y"?g=`value = (sy - u.centreY) / ${me(f.scale)};`:f.axis==="z"?g=`value = (f32(layer) - ${me(f.center)}) / ${me(f.scale)};`:g=`value = (sx - ${me(f.center)}) / ${me(f.scale)};`;return`    case ${h}u: {
      ${g}
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
  let h = field[u.packTiles + t * ${ie}u + ((y >> ${Gt}u) & ${Ne}u) * ${Be}u + ((x >> ${Gt}u) & ${Ne}u)];
  let w = h & ${kt};
  var q = i32((h >> ${ct}) & ${br}) - ${dt};
  if (w > 0u) {
    let bit = (((y & ${Ne}u) * ${re}u) + (x & ${Ne}u)) * w;
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
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(Y)}u) >= u.upTW || u32(ty >> ${Math.log2(Y)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(Y)}u) * u.upTW + u32(tx >> ${Math.log2(Y)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${Y*Y}u + u32(ty & ${Y-1}) * ${Y}u + u32(tx & ${Y-1})) * ${r}u + c;
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
}`},yn=4,wn=3,bn=.016,xn=256;class xr{constructor(e,{layers:t,ny:i,nx:r},a,o,l){this.context=e,this.inputPlan=l,this.ny=i,this.nx=r,this.margin=a,this.gy=i+2*a,this.gx=r+2*a;const u=new Float32Array(this.gy*this.gx);for(let c=0;c<i;c++)for(let p=0;p<r;p++)u[(c+a)*this.gx+p+a]=t[c*r+p]*Te;this.heightBuffer=e.upload(u);const s=new Float32Array(q),f=new Float32Array(q);for(let c=0;c<q;c++)s[c]=Math.cos(2*Math.PI*c/q),f[c]=Math.sin(2*Math.PI*c/q);this.cosT=s,this.sinT=f,this.scanPipeline=e.pipeline(dn()),this.accumulatePipeline=e.pipeline(fn(l.stored)),this.upWind=l.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(pn(l.up)));const h=l.stored.map(c=>2*bn*c.scale),g=Math.ceil(this.gx/_e),d=Math.ceil(this.gy/_e);this.packed={steps:h,tx:g,ty:d},this.packHeaderPipeline=e.pipeline(qt(l.stored,h,g,d,!1)),this.packPayloadPipeline=e.pipeline(qt(l.stored,h,g,d,!0)),this.packTilePipeline=e.pipeline(hn()),this.assemblePipeline=e.pipeline(mn(o,l,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const i=this.gx*this.gy,r=this.storedBytesPerCellLayer*i;let a=Math.max(1,Math.min(e.length,Math.floor(t/r)));if(a=Math.min(a,yn),r>t)throw new Ae(Ie.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let l=0;l<e.length;l+=a){const u=e.slice(l,l+a),s=new Int32Array(xn).fill(-1);u.forEach((f,h)=>{s[f]=h}),o.push({layers:u,slots:s,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const i of e)i.slotBuffer=t.upload(i.slots),i.layerBuffer=t.upload(new Uint32Array(i.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,i=Math.max(e,t),r=new Int32Array(q*i),a=new ArrayBuffer(q*32),o=new Uint32Array(a),l=new Int32Array(a),u=new Float32Array(a),s=new Float32Array(q*4);let f=0;for(let h=0;h<q;h++){const g=this.cosT[h],d=this.sinT[h],c=Math.abs(g)>=Math.abs(d),p=c?g:d,x=c?d:g,w=Math.abs(x/p),y=c?e:t,m=c?t:e;for(let v=0;v<y;v++)r[h*i+v]=Math.round(w*v);const b=r[h*i+y-1],M=m+b;f=Math.max(f,M),o[8*h]=c?1:0,l[8*h+1]=p>=0?1:-1,l[8*h+2]=x>=0?1:-1,l[8*h+3]=b,o[8*h+4]=M,o[8*h+5]=h*i,u[8*h+6]=lt*Math.sqrt(1+w*w),s.set([g,d,Math.cos(4*Math.PI*h/q),Math.sin(4*Math.PI*h/q)],4*h)}return this.offsetBuffer=this.context.upload(r),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(s),this.scanInfo={lineMax:f},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:i,gy:r}=this,{lineMax:a}=this.scanTables(),o=i*r,l=this.inputPlan.stored.length,u=e.layers.length,s=Math.ceil(u/2),f=Math.max(1,Math.min(q,Math.floor(this.scanRawBytes/(s*o*4)))),h=f*s*o*4,g=u*o*l*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<g)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(g));const d=t.device.createCommandEncoder();d.clearBuffer(this.sumsBuffer,0,u*o*l*4),t.device.queue.submit([d.finish()]);const c=[];for(let p=0;p<q;p+=f){if(this.destroyed)return;const x=Math.min(f,q-p),w=t.device.createCommandEncoder(),y=w.beginComputePass(),m=t.uniform([["u",i],["u",r],["u",o],["u",0],["u",u],["u",s],["u",p],["u",x],["u",a],["u",0],["u",0],["u",0]]);t.dispatch(y,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],a*s*x,J);const b=t.uniform([["u",o],["u",u],["u",s],["u",p],["u",x],["u",0],["u",0],["u",0]]);t.dispatch(y,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,b],o*u,J),y.end(),t.device.queue.submit([w.finish()]),c.push(t.device.queue.onSubmittedWorkDone()),c.length>=wn&&await c.shift()}this.destroyed||(await this.packGroup(e,u,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,i){const{context:r,gx:a,gy:o}=this,{tx:l,ty:u}=this.packed,s=t*this.inputPlan.stored.length*l*u,f=r.storage(s*ie*4),h=r.storage(s*4),g=r.uniform([["u",a],["u",o],["u",i],["u",t],["u",s],["u",0],["u",0],["u",0]]),d=r.uniform([["u",s],["u",0],["u",0],["u",0]]),c=()=>{r.free(f),r.free(h)},p=(v,_)=>{const S=v.beginComputePass();r.dispatch(S,this.packHeaderPipeline,[this.sumsBuffer,f,g],s*ie,J),r.dispatch(S,this.packTilePipeline,[f,h,d],s,J),S.end(),v.copyBufferToBuffer(h,0,_,0,s*4)};let x;try{x=await r.readBack(s*4,p,v=>this.destroyed?null:new Uint32Array(v.slice(0)))}catch(v){throw c(),v}if(!x){c();return}const w=new Uint32Array(s);let y=s+s*ie;for(let v=0;v<s;v++)w[v]=y,y+=x[v];r.free(e.field),e.field=r.storage(Math.max(4,y*4)),e.packTiles=s,r.write(e.field,w);const m=r.device.createCommandEncoder();m.copyBufferToBuffer(f,0,e.field,s*4,s*ie*4);const b=m.beginComputePass(),M=r.uniform([["u",a],["u",o],["u",i],["u",t],["u",s],["u",0],["u",0],["u",0]]);r.dispatch(b,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],s*ie,J),b.end(),r.device.queue.submit([m.finish()]),await r.device.queue.onSubmittedWorkDone(),c()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const i=t/(2*Math.PI)*q,r=Math.round(i)%q;return Math.abs(i-Math.round(i))<1e-6?[this.cosT[r],this.sinT[r]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const i=yr(e,this.nx,this.ny);let r=1/0,a=-1/0,o=1/0,l=-1/0;for(const g of[-.5,this.nx-.5])for(const d of[-.5,this.ny-.5]){const[c,p]=i.toWind([g,d]);r=Math.min(r,c),a=Math.max(a,c),o=Math.min(o,p),l=Math.max(l,p)}const u=Math.floor((r-t)/Y)*Y,s=Math.floor((o-t)/Y)*Y,f=Math.ceil((a+t+1-u)/Y),h=Math.ceil((l+t+1-s)/Y);return{theta:e,x0:u,y0:s,tw:f,th:h,table:new Int32Array(f*h).fill(-1),count:0}}ensureUpTiles(e,t,i,r){const{context:a}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,r));const l=[];for(const[m,b]of i){const M=Math.floor((b-o.x0)/Y),v=Math.floor((b+r-1-o.x0)/Y),_=Math.floor((m-o.y0)/Y),S=Math.floor((m+r-1-o.y0)/Y);if(M<0||_<0||v>=o.tw||S>=o.th)throw new Error("internal layout error");for(let B=_;B<=S;B++)for(let P=M;P<=v;P++){const T=B*o.tw+P;o.table[T]<0&&(o.table[T]=o.count+l.length/3,l.push(P,B,o.table[T]))}}const u=l.length/3;if(!u)return 0;const s=o.count,f=s+u,h=this.inputPlan.up.length,g=Y*Y,d=a.device.createCommandEncoder(),c=[];for(const m of e){const b=m.layers.length*g*h*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<f){const M=Math.min(o.tw*o.th,Math.max(f,Math.ceil(m.upCapacity*1.5))),v=a.storage(M*b);m.upTiles&&m.upCount&&d.copyBufferToBuffer(m.upTiles,0,v,0,m.upCount*b),m.upTiles&&c.push(m.upTiles),m.upTiles=v,m.upCapacity=M}m.upGrid=o,d.clearBuffer(m.upTiles,s*b,u*b),m.upCount=f}const p=a.upload(new Int32Array(l)),[x,w]=this.upwindDirection(t),y=d.beginComputePass();for(const m of e){const b=[this.heightBuffer,m.layerBuffer,m.upTiles,p];a.dispatch(y,this.alongPipeline,[...b,a.uniform([["u",this.gx],["u",this.gy],["u",u],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",x],["f",w],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*g*Math.ceil(m.layers.length/pe),J)}y.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(a.free(this.upTableBuffer),this.upTableBuffer=a.storage(o.table.byteLength)),a.write(this.upTableBuffer,o.table),a.device.queue.submit([d.finish()]);for(const m of c)a.free(m);return a.free(p),o.count=f,u}assemble(e,t,i,r,a,o){var x,w,y,m;const{context:l,inputPlan:u,gx:s,gy:f}=this,h=t.length/3,g=l.upload(t),d=l.uniform([["u",h],["u",u.inputs.length],["u",a],["u",a],["u",s],["u",f],["u",0],["u",0],["u",s],["u",f],["u",s*f],["u",this.margin],["f",Math.cos(r)],["f",Math.sin(r)],["f",r],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",i.packTiles],["f",0],["f",0],["i",((x=this.upGrid)==null?void 0:x.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((y=this.upGrid)==null?void 0:y.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",i.layers.length],["u",0],["u",0],["u",0]]),c=[i.field];if(u.usesHeight&&c.push(this.heightBuffer),c.push(g,i.slotBuffer),u.up.length){if(i.upGrid!==this.upGrid)throw new Error("internal layout error");c.push(i.upTiles,this.upTableBuffer)}c.push(o,d);const p=e.beginComputePass();return l.dispatch(p,this.assemblePipeline,c,h*u.inputs.length*a*a),p.end(),g}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function vn(n){const e=n.inputs;if(!e||e.length!==n.model.input_channels)throw oe();const t=[],i=(u,s,f)=>t.findIndex(h=>h.key===`${u}:${s}:${f}`),r=(u,s,f)=>{i(u.signal,s,f)>=0||t.push({key:`${u.signal}:${s}:${f}`,signal:u.signal,part:s,mode:f,scale:u.scale})},a=[];for(const u of e){if(u.source==="r1")u.part==="dc"?r(u,"dc",0):(r(u,"re",u.mode),r(u,"im",u.mode));else if(u.source==="up")a.includes(u.index)||a.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw oe();if(u.source==="geo"&&![0,1].includes(u.index)||u.source==="up"&&!(u.index>=0&&u.index<4))throw oe()}for(const u of t)if(u.mode>2)throw oe();const o=[...new Set(t.map(u=>u.signal))].sort();if(o.length!==1||o[0]!==0)throw oe();const l=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:i,up:a,usesHeight:l}}function ft(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let Me=null;function _n(){if(Me)return Me;Me=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,i=n&1023;t===0?Me[n]=e*i*2**-24:t===31?Me[n]=i?NaN:e*(1/0):Me[n]=e*(1+i/1024)*2**(t-15)}return Me}function $n(n){const e=new Float32Array(n.length),t=_n();for(let i=0;i<n.length;i++)e[i]=t[n[i]];return e}function Mn(n){const e=new Uint16Array(n.length),t=new Float32Array(1),i=new Uint32Array(t.buffer);for(let r=0;r<n.length;r++){t[0]=n[r];const a=i[0],o=a>>>16&32768,l=a>>>23&255;let u=a&8388607;if(l===255){e[r]=o|31744|(u?1:0);continue}const s=l-127+15;if(s>=31){e[r]=o|31744;continue}if(s<=0){if(s<-10){e[r]=o;continue}u|=8388608;const h=14-s;let g=u>>>h;u>>>h-1&1&&(g+=1),e[r]=o|g;continue}let f=s<<10|u>>>13;u&4096&&(f+=1),e[r]=o|f}return e}const Ct=`
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
`,kn=`
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
}`}const gt=32,Zt=1e-5,Ye=16;function Fe(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function Sn(n){const{store:e,patch:t}=n,i=t*t,{enable:r,load:a,save:o}=Fe(e);return`${r}${Ct}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${Ye}u;
var<workgroup> w: array<f32, ${Ye*n.cinMax}>;
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
  var acc: array<f32, ${Ye}>;
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
}`}function Cn(n){const{store:e,patch:t}=n,i=t*t,{enable:r,load:a,save:o}=Fe(e);return`${r}${Ct}
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
}`}function Bn(n){const{store:e,patch:t,modes2:i}=n,r=t*t,{enable:a,load:o}=Fe(e);return`${a}
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
}`}function Pn(n){const{modes2:e}=n;return`
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
}`}function In(n){const{modes1:e,modes2:t}=n,i=2*e;return`
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
}`}function An(n){const{store:e,patch:t,modes2:i}=n,r=t*t,{enable:a,save:o}=Fe(e);return`${a}
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
}`}function Rn(n){const{store:e}=n,{enable:t,load:i,save:r}=Fe(e);return`${t}${Ct}
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
}`}function Tn(n){const{store:e,patch:t}=n,i=t*t;return{conv1x1:Sn(n),gate:Cn(n),instanceNorm:Kt(e,i,Zt),instanceNormScaled:Kt(e,i,Zt/(gt*gt)),forwardColumns:Bn(n),rowMix:Pn(n),spectralMix:In(n),inverseColumns:An(n),residual:Rn(n)}}function Fn(n,e,t){const i=2*e,r=[];for(let d=0;d<e;d++)r.push(d);for(let d=n-e;d<n;d++)r.push(d);const a=new Float32Array(n*t),o=new Float32Array(n*t);for(let d=0;d<n;d++)for(let c=0;c<t;c++){const p=2*Math.PI*d*c/n;a[d*t+c]=Math.cos(p),o[d*t+c]=-Math.sin(p)}const l=new Float32Array(i*n),u=new Float32Array(i*n);for(let d=0;d<i;d++)for(let c=0;c<n;c++){const p=2*Math.PI*r[d]*c/n;l[d*n+c]=Math.cos(p),u[d*n+c]=-Math.sin(p)}const s=new Float32Array(n*i),f=new Float32Array(n*i);for(let d=0;d<n;d++)for(let c=0;c<i;c++){const p=2*Math.PI*r[c]*d/n;s[d*i+c]=Math.cos(p)/n,f[d*i+c]=Math.sin(p)/n}const h=new Float32Array(t*n),g=new Float32Array(t*n);for(let d=0;d<t;d++){const c=(d===0?1:2)/n;for(let p=0;p<n;p++){const x=2*Math.PI*d*p/n;h[d*n+p]=c*Math.cos(x),g[d*n+p]=-c*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:l,rowIm:u,inverseRowRe:s,inverseRowIm:f,inverseColCos:h,inverseColSin:g}}function En(n,e,t){const i=n.tensors[t];if(!i)throw oe();return $n(new Uint16Array(e,i.offset,i.count))}class Dn{constructor(e,t,i,r){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.depth=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%O)throw oe();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[s,f]of Object.entries(Tn(o)))this.pipelines[s]=e.pipeline(f);this.contractPipeline=e.pipeline(kn);const l=s=>En(t,i,s);this.tables={};for(const[s,f]of Object.entries(Fn(this.patch,this.modes1,this.modes2)))this.tables[s]=e.upload(f);this.weights={};const u=(s,f)=>{const h=l(f);this.weights[s]=this.store==="f16"?e.upload(Mn(h)):e.upload(h)};u("p1w","a.m1.weight"),u("p1b","a.m1.bias"),u("p2w","a.m2.weight"),u("p2b","a.m2.bias"),u("q1w","b.m1.weight"),u("q1b","b.m1.bias"),u("q2w","b.m2.weight"),u("q2b","b.m2.bias");for(let s=0;s<this.depth;s++)u(`m1w${s}`,`c.${s}.m1.weight`),u(`m1b${s}`,`c.${s}.m1.bias`),u(`m2w${s}`,`c.${s}.m2.weight`),u(`m2b${s}`,`c.${s}.m2.bias`),u(`lw${s}`,`d.${s}.weight`),u(`lb${s}`,`d.${s}.bias`);this.buildSpectralWeights(l),this.allocate(r),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:i}=this,r=i.factored;let a=r.core_shape.slice(),o=t.upload(e(`${r.core}.re`)),l=t.upload(e(`${r.core}.im`));for(const s of r.factors){const[f,h]=s.shape;if(a[s.mode]!==h)throw oe();const g=a.slice();g[s.mode]=f;const d=g.reduce((v,_)=>v*_,1),c=g.slice(s.mode+1).reduce((v,_)=>v*_,1),p=t.storage(d*4),x=t.storage(d*4),w=t.upload(e(`${s.name}.re`)),y=t.upload(e(`${s.name}.im`)),m=t.uniform([["u",g[0]],["u",g[1]],["u",g[2]],["u",g[3]],["u",g[4]],["u",s.mode],["u",f],["u",h],["u",c],["u",0],["u",d],["u",0]]),b=t.device.createCommandEncoder(),M=b.beginComputePass();t.dispatch(M,this.contractPipeline,[o,l,w,y,p,x,m],d),M.end(),t.device.queue.submit([b.finish()]),t.free(o),t.free(l),t.free(w),t.free(y),o=p,l=x,a=g}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(a.join()!==u.join())throw oe();this.spectralRe=o,this.spectralIm=l}allocate(e){const{context:t}=this,i=this.patch*this.patch,r=this.width,a=2*this.modes1,o=g=>t.storage(e*g*i*this.elementBytes),l=g=>t.storage(e*r*g*4),u=o(Math.max(4*r,this.inputChannels,this.outputChannels)),s=o(2*r),f=l(this.patch*this.modes2),h=l(this.patch*this.modes2);this.buffers={x:o(r),input:u,t2:u,gates:u,spectral:u,output:u,wide:s,t1:s,hidden:s,local:s,xRe:f,xIm:h,yRe:l(a*this.modes2),yIm:l(a*this.modes2),zRe:l(a*this.modes2),zIm:l(a*this.modes2),wRe:f,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/Ye)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const i=e.beginComputePass();for(const r of this.passes.get(t))this.context.replay(i,r);return i.end(),this.buffers.output}dispatches(e){const{context:t,buffers:i,pipelines:r,tables:a}=this,o=this.width,l=this.patch*this.patch,u=2*this.modes1,s=[],f=(g,d,c,p)=>{s.push(t.prepared(g,[...d,t.keptUniform(c)],t.workgroups(p)))},h=(g,d,c=r.instanceNorm)=>{s.push(t.prepared(c,[g,d],[e*o]))};f(r.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),f(r.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let g=0;g<this.depth;g++)h(i.x,i.t1),f(r.forwardColumns,[i.t1,a.forwardCos,a.forwardSin,i.xRe,i.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),f(r.rowMix,[i.xRe,i.xIm,a.rowRe,a.rowIm,i.yRe,i.yIm],[["u",e],["u",o],["u",u],["u",this.patch]],e*o*u*this.modes2),f(r.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",e],["u",o],["u",2*g],["u",0]],e*o*u*this.modes2),f(r.rowMix,[i.zRe,i.zIm,a.inverseRowRe,a.inverseRowIm,i.wRe,i.wIm],[["u",e],["u",o],["u",this.patch],["u",u]],e*o*this.patch*this.modes2),f(r.inverseColumns,[i.wRe,i.wIm,a.inverseColCos,a.inverseColSin,i.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*l),h(i.t2,i.t1,r.instanceNormScaled),f(r.conv1x1,[i.t1,this.weights[`m1w${g}`],this.weights[`m1b${g}`],i.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),f(r.gate,[i.gates,i.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*l),f(r.conv1x1,[i.hidden,this.weights[`m2w${g}`],this.weights[`m2b${g}`],i.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),f(r.conv1x1,[i.x,this.weights[`lw${g}`],this.weights[`lb${g}`],i.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),f(r.residual,[i.spectral,i.local,i.x],[["u",e*o*l],["u",g<this.depth-1?1:0],["u",0],["u",0]],e*o*l);return f(r.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),f(r.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),s}}const Ln=(n,e)=>`${n==="f16"?`enable f16;
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
}`;function Qt(n,e,t,i){if(e<=t)return[n];const r=Math.ceil((e-t)/i)+1,a=[];for(let o=0;o<r;o++)a.push(n+o*t-ft(o*(r*t-e)/(r-1)));return a}function zn(n,e,t){let i=1/0,r=-1/0;const a=o=>{i=Math.min(i,o),r=Math.max(r,o)};for(let o=0;o<n.length;o++){const l=n[o],u=n[(o+1)%n.length];l[0]>=e&&l[0]<=t&&a(l[1]);for(const s of[e,t])(l[0]-s)*(u[0]-s)<0&&a(l[1]+(s-l[0])/(u[0]-l[0])*(u[1]-l[1]))}return i<=r?[i,r]:null}const On=(n,e)=>Math.max(1,Math.round(n*(1-e)));function vr(n,e,t,i,r){const a=yr(n,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(a.toWind),l=Math.floor(Math.min(...o.map(g=>g[0]))),u=Math.floor(Math.min(...o.map(g=>g[1]))),s=Math.ceil(Math.max(...o.map(g=>g[0])))-l+1,f=Math.ceil(Math.max(...o.map(g=>g[1])))-u+1,h=[];for(const g of Qt(l,s,i,r)){const d=zn(o,g,g+i-1);if(!d)continue;const c=Math.floor(d[0]),p=Math.max(i,Math.ceil(d[1])-c+1);for(const x of Qt(c,p,i,r))h.push([x,g])}return{theta:n,gx:s,gy:f,gridX0:l,gridY0:u,patches:h,frame:a}}const Vn=8,_r=new MessageChannel,$r=[];_r.port1.onmessage=()=>{var n;return(n=$r.shift())==null?void 0:n()};const Xn=()=>new Promise(n=>{$r.push(n),_r.port2.postMessage(0)}),Nn=n=>Math.ceil(n*Math.SQRT2),Un=128<<20,Yn=2,Ee=1e-6,ke=6e4,Wn=4,Hn=48<<20,jn=16;function Se(n,e,t){let i;const r=new Promise((a,o)=>{i=setTimeout(()=>o(new Ae(Ie.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([n,r]).finally(()=>clearTimeout(i))}function Gn(n,e,t,i){let r=1/0,a=-1/0,o=1/0,l=-1/0,u=1/0,s=-1/0;for(const[f,h,g]of n)r=Math.min(r,f-e.gridY0),a=Math.max(a,f-e.gridY0+t),o=Math.min(o,g-e.gridX0),l=Math.max(l,g-e.gridX0+t),u=Math.min(u,h-i),s=Math.max(s,h-i+1);return{ry0:Math.max(0,r),ry1:Math.min(e.gy,a),rx0:Math.max(0,o),rx1:Math.min(e.gx,l),rz0:u,rz1:s}}function qn(n,e,t){const{gx:i,gy:r}=n,a=new Int32Array(r).fill(i),o=new Int32Array(r).fill(0);for(const[s,f]of n.patches){const h=Math.max(0,s-n.gridY0),g=Math.min(r,s-n.gridY0+e),d=Math.max(0,f-n.gridX0),c=Math.min(i,f-n.gridX0+e);for(let p=h;p<g;p++)d<a[p]&&(a[p]=d),c>o[p]&&(o[p]=c)}const l=new Uint32Array(3*r+1);let u=0;for(let s=0;s<r;s++){const f=Math.max(0,o[s]-a[s]);l[s]=u,l[r+1+s]=f?a[s]:0,l[2*r+1+s]=f,u+=f*t}return l[r]=u,{table:l,count:u}}function Kn(n,e){const t=new Float32Array(n);for(let i=0;i<n;i++)t[i]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*i/(n-1)));return t}function Zn(n,e,t){const{gx:i,gy:r,gridX0:a,gridY0:o,patches:l}=n,u=new Float32Array(i*r),s=Kn(e,t);for(const[f,h]of l)for(let g=0;g<e;g++){const d=f-o+g;if(d<0||d>=r)continue;const c=d*i,p=s[g];for(let x=0;x<e;x++){const w=h-a+x;w>=0&&w<i&&(u[c+w]+=p*s[x])}}return u}function Qn(n,e,t,i){const{gx:r,gy:a,gridX0:o,gridY0:l,frame:{cX:u,cY:s,cos:f,sin:h}}=n,g=new Float32Array(r*a);for(let d=0;d<a;d++){const c=l+d-s;for(let p=0;p<r;p++){const x=o+p-u,w=u+x*f-c*h,y=s+x*h+c*f;if(w<-.5||y<-.5||w>i-.5||y>t-.5){g[d*r+p]=-1;continue}const m=Math.min(i-1,Math.max(0,ft(w))),b=Math.min(t-1,Math.max(0,ft(y)));g[d*r+p]=e[b*i+m]}}return g}class Jn{constructor(e,t,i,{batchSize:r}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=r,this.channels=t.model.output_channels,this.bufferLimit=Math.min(Un,e.device.limits.maxStorageBufferBindingSize),this.network=new Dn(e,t,i,r),this.blendPipeline=e.pipeline(Ln(this.network.store,this.channels)),this.inputPlan=vn(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,i){var a;this.cancel(),(a=this.city)==null||a.distanceField.destroy();const r=new xr(this.context,{layers:e,ny:t,nx:i},Nn(this.patch),this.network.store,this.inputPlan);r.scanRawBytes=Math.ceil(Hn*Math.min(1,this.batchSize/jn)),this.city={distanceField:r,ny:t,nx:i,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:i,patch:r}=this,a=`${e}:${t}`;return((o=i.frame)==null?void 0:o.key)!==a&&(i.frame={key:a,layout:vr(e,i.nx,i.ny,r,t),final:null,roof:null}),i.frame}finalOf(e){return e.final??(e.final=Zn(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=Qn(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,i=e.join();if(t.storedKey===i)return!1;const{distanceField:r}=t;r.releaseGroups(),r.upGrid=null,t.storedKey=null;const[a]=r.planGroups(e,this.bufferLimit);return r.allocate([a]),await Se(r.scan(a),4*ke,"the computation"),r.destroyed?!1:(t.group=a,t.storedKey=i,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>Se(e.popErrorScope().catch(()=>null),ke,"the graphics device"),i=await t(),r=await t();if(i)throw new Ae(Ie.GPU,`out of graphics memory: ${i.message}`);if(r)throw new Ae(Ie.GPU,`the graphics device refused the work: ${r.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,i){const r=++this.generation,a=()=>r!==this.generation,{context:o,city:l,patch:u}=this,{device:s}=o;this.openScopes();let f=null;const h=()=>this.closeScopes();try{const g=this.frameOf(t,On(u,i.overlap)),{layout:d}=g;if(await this.ensureLayers(e),a()||l.distanceField.destroyed)return null;const{distanceField:c,group:p}=l;if(c.upWind&&c.ensureUpTiles([p],t,d.patches,u)&&(await Se(s.queue.onSubmittedWorkDone(),ke,"the computation"),o.releaseScratch()),a())return null;const x=qn(d,u,e.length),w=o.storage(x.count*(this.channels+1)*4);try{if(!await this.runNetwork(p,e,g,x,w,t,i,a))return null;f=await this.readField(e,d,x,w)}finally{o.free(w),o.releaseScratch()}}finally{await h()}return a()?null:f}async runNetwork(e,t,i,r,a,o,l,u){var b;const{context:s,patch:f}=this,{layout:h}=i,{device:g}=s,{distanceField:d}=this.city,c=s.upload(r.table),p=[],x=t[0],w=!!(l.shouldDraw&&l.onDraw)&&t.length===1;let y=null,m=null;w&&(y={final:this.finalOf(i),roof:this.roofOf(i)},(b=l.onStart)==null||b.call(l,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const M=t.length*h.patches.length;for(let v=0;v<M;){if(u())return!1;const _=Math.floor(v/h.patches.length),S=v%h.patches.length,B=h.patches.slice(S,S+this.batchSize).map(([C,A])=>[C,t[_],A]);v+=B.length;const P=new Int32Array(B.flat()),T=g.createCommandEncoder(),I=d.assemble(T,P,e,o,f,this.network.inputBuffer),V=this.network.encode(T,B.length),k=Gn(B,h,f,x);if(this.encodeBlend(T,V,I,a,c,B.length,k,h,x),g.queue.submit([T.finish()]),s.free(I),s.releaseScratch(),p.push(g.queue.onSubmittedWorkDone()),p.length>Yn&&await Se(p.shift(),ke,"the computation"),w){m=eo(m,k);const C=v>=M;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(C||l.shouldDraw())){const A=m;m=null;const X=await this.readRect(A,h,r,a,y,t[0]);if(u())return!1;l.onDraw({...X,stride:this.channels+2,channels:this.channels,theta:o,readyCount:v,patchCount:M})}}}return await Se(Promise.all(p),ke,"the computation"),!0}finally{s.free(c)}}encodeBlend(e,t,i,r,a,o,l,u,s){const{context:f,patch:h}=this,{gy:g}=u,{ry0:d,ry1:c,rx0:p,rx1:x,rz0:w,rz1:y}=l;if(!(c>d&&x>p))return;const m=e.beginComputePass();f.dispatch(m,this.blendPipeline,[t,i,r,a,f.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",g],["u",s],["u",0],["u",0],["u",d],["u",w],["u",p],["u",c-d],["u",y-w],["u",x-p],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(c-d)*(y-w)*(x-p)),m.end()}async readRect({ry0:e,ry1:t,rx0:i,rx1:r},a,{table:o},l,{final:u,roof:s},f){const{gx:h,gy:g}=a,d=this.channels,c=(d+1)*4,p=r-i,x=t-e,w=(v,_)=>{for(let S=e;S<t;S++){const B=o[g+1+S],P=o[2*g+1+S],T=Math.max(i,B),I=Math.min(r,B+P);I>T&&v.copyBufferToBuffer(l,(o[S]+T-B)*c,_,((S-e)*p+T-i)*c,(I-T)*c)}},y=await Se(this.context.readBack(p*x*c,w,v=>new Float32Array(v.slice(0))),ke,"reading the wind back"),{center:m,scale:b}=this.metadata.target,M=new Float32Array(p*x*(d+2));for(let v=0;v<p*x;v++){const _=y[v*(d+1)+d],S=v*(d+2),B=_>Ee?1/_:0;for(let I=0;I<d;I++)M[S+I]=y[v*(d+1)+I]*B*b[I]+m[I];const P=(e+Math.floor(v/p))*h+i+v%p,T=s[P];M[S+d]=T<0||_<=Ee?2:T>f?1:0,M[S+d+1]=u[P]>Ee?Math.min(1,_/u[P]):0}return{x0:i,y0:e,width:p,height:x,values:M}}async readField(e,t,{table:i,count:r},a){const{gx:o,gy:l}=t,u=this.channels,s=u+1,{center:f,scale:h}=this.metadata.target,g=(x,w)=>x.copyBufferToBuffer(a,0,w,0,w.size),d=await Se(this.context.readBack(r*s*4,g,x=>new Float32Array(x.slice(0))),4*ke,"reading the wind back"),c=e.map(x=>({layer:x,values:new Float32Array(o*l*u),weights:new Float32Array(o*l)}));let p=performance.now();for(let x=0;x<l;x++){performance.now()-p>Vn&&(await Xn(),p=performance.now());const w=i[x],y=i[l+1+x],m=i[2*l+1+x];for(let b=0;b<e.length;b++){const{values:M,weights:v}=c[b];for(let _=0;_<m;_++){const S=(w+b*m+_)*s,B=x*o+y+_,P=d[S+u];if(P>Ee){v[B]=P;const T=1/P;for(let I=0;I<u;I++)M[B*u+I]=d[S+I]*T*h[I]+f[I]}else for(let T=0;T<u;T++)M[B*u+T]=f[T]}}}return{layout:t,gx:o,gy:l,layers:c}}async predict(e,t={}){const{city:i}=this,r=i.layerIndex,a=await this.predictLayers([r],e,t);if(!a)return null;const{gx:o,gy:l,layers:[{values:u,weights:s}]}=a,f=this.channels,h=this.roofOf(i.frame),g=new Uint8Array(o*l);let d=0;for(let c=0;c<o*l;c++){if(h[c]<0){g[c]=2;continue}if(s[c]<=Ee){g[c]=2;continue}g[c]=h[c]>r?1:0;for(let p=0;p<f;p++)if(!Number.isFinite(u[c*f+p])){d+=1;break}}return{values:u,solid:g,theta:e,height:l,width:o,nonFinite:d}}}function eo(n,e){return n?{ry0:Math.min(n.ry0,e.ry0),ry1:Math.max(n.ry1,e.ry1),rx0:Math.min(n.rx0,e.rx0),rx1:Math.max(n.rx1,e.rx1),rz0:0,rz1:1}:e}const to=16,ro=.4,io=6.278,no=1e-6;function oo(){let n=null,e=null,t=null,i=null,r=null,a=0;async function o({allowF16:g=!0}={},d){if(!t){const c="/cityffdv2-demo/flume/model-v3/";[t,i]=await Promise.all(["metadata.json","weights.bin"].map(async p=>{const x=await fetch(c+p,{signal:d});if(!x.ok)throw new Error("Could not load model v3 "+p+" (HTTP "+x.status+").");return p.endsWith(".bin")?x.arrayBuffer():x.json()}))}n&&(g||!n.useF16)||(l(),n=await Mt.create({allowF16:g}),e=new Jn(n,t,i,{batchSize:to}))}function l(){e==null||e.destroy(),n==null||n.destroy(),e=null,n=null,r=null}function u(g,d,c){const p=d.gx*d.gy,x=e.roofOf(e.city.frame),w=new Uint8Array(p);let y=0;for(let b=0;b<p;b++)x[b]<0||c.weights[b]<=no?w[b]=2:w[b]=x[b]>c.layer?1:0,!w[b]&&!Number.isFinite(c.values[b*5])&&y++;const m={width:d.gx,height:d.gy,originX:d.layout.gridX0,values:c.values,solid:w};return vt(g,g.plan.indexOf(c.layer),m),y}async function s(g,d,c,p,x){const{gx:w,gy:y}=vr(p,d.nx,d.ny,e.patch,e.patch),m=Math.max(1,Math.floor(e.bufferLimit/(w*y*(e.channels+1)*4))),b=Math.min(Wn,m);for(let M=0;M<c.length;M+=b){if(g.generation!==a||x!=null&&x.aborted)return!1;const v=await e.predictLayers(c.slice(M,M+b),p,{overlap:ro});if(!v||g.generation!==a)return!1;g.volume??(g.volume=xt({width:v.gx,height:v.gy,originX:v.layout.gridX0,originY:v.layout.gridY0,theta:p},g.layers,!1));for(const _ of v.layers)g.nonFinite+=u(g.volume,v,_)}return!0}async function f(g,d,c,{signal:p,onFirstWave:x,onMoreLayers:w}={},y=!0){await o({allowF16:y},p),g!==r&&(e.setCity(g.layers,g.ny,g.nx),r=g);const m=wt(d).slice(0,bt),b={layers:d,volume:null,nonFinite:0,generation:++a};if(!await s(b,g,d.filter(v=>m.includes(v)),c,p))return null;if(b.nonFinite&&n.useF16&&y)return f(g,d,c,{signal:p,onFirstWave:x,onMoreLayers:w},!1);if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");x==null||x({volume:b.volume,referenceSpeed:io});const M=d.filter(v=>!m.includes(v));if(M.length){if(!await s(b,g,M,c,p))return null;if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");w==null||w()}return e.releaseLayers(),b.volume}async function h(g,d,c){await o({},c);const p=e.inputPlan.stored,x=Math.ceil(e.patch*Math.SQRT2),w=new xr(n,{layers:g.layers,ny:g.ny,nx:g.nx},x,e.network.store,e.inputPlan),y=w.gx*w.gy*p.length*4;let m=null;w.packGroup=async()=>{m=await n.readBack(y,(v,_)=>v.copyBufferToBuffer(w.sumsBuffer,0,_,0,y),v=>new Float32Array(v.slice(0)).map(_=>_/q))};try{const v=w.planGroups([d],e.bufferLimit);w.allocate(v),await w.scan(v[0])}finally{w.destroy()}if(!m)throw new Error("Model v3 MDDF could not be read.");const b=p.map(v=>"upper_distance_"+v.part+(v.part==="dc"?"":v.mode));return{values:m,ny:w.gy,nx:w.gx,margin:x,layerIndex:d,channels:b,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:f,readMddf:h,cancel(){a++,e==null||e.cancel()},destroy:l}}const Jt={v2:ln,v3:oo},ao=32;function so(){const n=pt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=null,i=null,r=null,a=null,o=!1,l=0;const u={},s=new AbortController;function f(){try{t==null||t.destroy();for(const y of Object.values(u))y.destroy()}finally{for(const y of Object.keys(u))delete u[y];e==null||e.device.destroy(),t=null,e=null,a=null}}async function h(){if(t)return;n.stage="Loading model";const y="/cityffdv2-demo/flume/",[m,b,M]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async v=>{const _=await fetch(y+v,{signal:s.signal});if(!_.ok)throw new Error("Could not load "+v+" (HTTP "+_.status+").");return v.endsWith(".bin")?_.arrayBuffer():_.json()}));nn(m,b.byteLength),s.signal.throwIfAborted(),e=await ni.create(),s.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",v=>{n.error="WebGPU: "+v.error.message.split(`
`)[0]}),e.device.lost.then(v=>{!o&&v.reason!=="destroyed"&&(n.error="GPU device lost. Run again to initialize a new session.",n.prediction=null,t=null,e=null,a=null)}),i=m,r=M,t=new rn(e,i,b,{batchSize:ao})}async function g(y,m){if(o||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const b=++l,M=()=>o||b!==l;try{if(await h(),M())return null;if(Jt[m.model])return await d(y,m,M,b);y!==a&&(t.setCity(y.layers,y.ny,y.nx),a=y);const v=performance.now(),_=(C,A)=>{const X={...C,grid:y,settings:{...m,layers:A},referenceSpeed:i.wind.reference_speed_m_s,modelLabel:i.label,colorbar:r,patchCount:I,milliseconds:performance.now()-v,inputRevision:b};return n.prediction=Ce(X),n.layersReady=C.layers.length,X},S=[...m.layers],B=wt(S);let P=null,T=null,I=0;const V=C=>({signal:s.signal,onProgress:A=>{M()||(n.progress=(C+A*.3)/B.length)}});let k=t.setHeight(B[0],V(0));for(let C=0;C<B.length;C++){if(n.stage="Predicting 3D wind · layer "+(C+1)+" / "+B.length,await k,M())return null;const A=await t.predict(m.thetaRad,{signal:s.signal,onProgress:X=>{M()||(n.progress=(C+.3+X*.7)/B.length)}});if(s.signal.throwIfAborted(),M())return null;if(n.error)throw new Error(n.error);P||(P=xt(A,S,!1)),k=C+1<B.length?t.setHeight(B[C+1],V(C+1)):null,k==null||k.catch(()=>{}),on(A),I=A.patchCount??I,vt(P,S.indexOf(B[C]),A),T?(T.milliseconds=performance.now()-v,n.layersReady=P.layers.length):C+1>=Math.min(bt,B.length)&&(T=_(P,S))}return n.progress=1,n.stage="Prediction ready",T}catch(v){return!o&&b===l&&(n.error=v.message,n.stage="Prediction failed",n.prediction=null),f(),null}finally{o?f():n.busy=!1}}async function d(y,m,b,M){var T;const v=_t[m.model],_=u[T=m.model]??(u[T]=Jt[m.model]());n.stage=v+" · predicting the first layers";const S=performance.now();let B=null;if(!await _.run(y,m.layers,m.thetaRad,{signal:s.signal,onFirstWave({volume:I,referenceSpeed:V}){b()||(B={...I,grid:y,settings:{...m},referenceSpeed:V,modelLabel:v,colorbar:r,patchCount:0,milliseconds:performance.now()-S,inputRevision:M},n.prediction=Ce(B),n.layersReady=I.layers.length,n.progress=.3,n.stage=v+" · predicting the remaining layers")},onMoreLayers(){b()||!B||(B.milliseconds=performance.now()-S,n.layersReady=B.layers.length)}})||b())return null;if(n.error)throw new Error(n.error);return n.progress=1,n.stage="Prediction ready",B}async function c(y){if(!t||!n.prediction||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{const m=u[n.prediction.settings.model];if(m)return await m.readMddf(n.prediction.grid,y,s.signal);Number.isInteger(y)&&await t.setHeight(y,{signal:s.signal});const b=t.city.field,M=await e.readFloat32(b.fieldBuffer,b.gy*b.gx*28);if(o)throw new Error("The page was closed.");return{values:M,ny:b.gy,nx:b.gx,margin:b.margin,layerIndex:t.city.layerIndex}}finally{n.downloading=!1,o&&f()}}function p(){n.busy&&l++;for(const y of Object.values(u))y.cancel()}function x(){l++,n.prediction=null,n.layersReady=0,n.error="",n.progress=0,n.stage="Ready"}function w(){o=!0,l++,s.abort(),!n.busy&&!n.downloading&&f()}return ht(w),{state:n,run:g,readMddf:c,cancel:p,invalidate:x,dispose:w}}const be="flume-retained-buildings",er="flume-retained-selected";function lo(n,e){let t=null,i=null,r=null,a=null,o=null;function l(){if(t){n.getSource(be)?r!==a&&n.getSource(be).setData(r):n.addSource(be,{type:"geojson",data:r,maxzoom:22,tolerance:0}),a=r;for(const[g,d]of[[be,!1],[er,!0]]){const c=t.filters[d?"selected":"surroundings"],p=d?1:t.surroundingsOpacity;n.getLayer(g)?n.setFilter(g,c):n.addLayer({id:g,type:"fill-extrusion",source:be,maxzoom:Le,filter:c,layout:{visibility:"visible"},paint:{"fill-extrusion-color":d?se().selectedBuildings:se().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),n.setPaintProperty(g,"fill-extrusion-opacity",p),n.setLayoutProperty(g,"visibility",d||t.showSurroundings?"visible":"none")}}}function u(){if(!(!t||n.getZoom()<Le||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const g=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(d=>!d.tile||d.tile.z>=(t.dataZoom??Le));r=He([...r.features,...g]),l()}catch(g){e==null||e(g)}}function s(g){!t||g!=null&&g.sourceId&&g.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(u,120))}function f(g){var d;(i!==g.collection||(t==null?void 0:t.sourceId)!==g.sourceId||(t==null?void 0:t.sourceLayer)!==g.sourceLayer)&&(r=He(((d=g.collection)==null?void 0:d.features)??[]),i=g.collection),t=g,l(),s()}function h(){clearTimeout(o),t=null,i=null,r=null,a=null;for(const g of[er,be])n.getLayer(g)&&n.removeLayer(g);n.getSource(be)&&n.removeSource(be)}return n.on("sourcedata",s),n.on("moveend",s),{update:f,clear:h,dispose(){n.off("sourcedata",s),n.off("moveend",s),h()}}}const uo=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,co=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function fo(n,e,t){let i,r,a,o,l,u,s,f,h,g,d,c="",p=0;const x=new Ot,w=new Ot,y=or.MercatorCoordinate.fromLngLat(n.grid.origin),m=y.meterInMercatorCoordinateUnits(),[b,M]=Pt(n,n.width/2-.5,n.height/2-.5),v=[new Xe(new ue(1,0,0),0),new Xe(new ue(-1,0,0),n.grid.nx*ae),new Xe(new ue(0,1,0),0),new Xe(new ue(0,-1,0),n.grid.ny*ae)],_=()=>Number(e.speedMps)/n.referenceSpeed,S=new Map;function B(I){let V=1/0,k=-1/0;for(let C=0;C<n.layers.length;C++){const A=I+"@"+n.slots[C];S.has(A)||S.set(A,It(fi(n,C),I));const[X,W]=S.get(A);V=Math.min(V,X),k=Math.max(k,W)}return[V,k]}let P=[0,0];function T(){if(!r)return;const I=ze.find(R=>R.id===e.variable)??ze[0];g==null||g.dispose(),g=new Vt(ai(I.ramp),256,1,Xt),g.colorSpace=Ri,g.minFilter=g.magFilter=Nt,g.needsUpdate=!0;const V=e.plane==="3d"?"h":e.plane,k=si(n,e.planeOffsetM),C=e.view==="slice"||e.view==="particles"&&e.particles==="white";l.visible=C&&V==="h",u.visible=C&&V==="v";const A=I.id+"@"+(V==="v"?"v"+k:e.sliceHeightM);if(A!==c){let R;if(V==="v"){R=li(n,k);const[N,Q]=Pt(n,(n.width-1)/2,k);u.position.set(N,Q,R.height*je/2)}else R=sr(n,Number(e.sliceHeightM)),l.position.z=R.settings.heightM;h==null||h.dispose(),h=new Vt(ui(R,I.id),R.width,R.height,Xt,Ti),h.minFilter=h.magFilter=Nt,h.needsUpdate=!0,P=It(R,I.id),c=A}const X=_();let W=X;I.id==="T"&&(W=1),I.id==="tke"&&(W=X*X);const z=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?B(I.id):P,Z=ci(z,I.id)??di(n.colorbar,I.id,n.settings.layers.at(-1),"99.9",1);d.uniforms.field.value=h??null,d.uniforms.palette.value=g,d.uniforms.range.value.set(...Z),f.enabled=e.view!=="off",f.mesh.visible=f.enabled;const te=e.view==="slice"||e.particles==="white",ce=te?V:e.plane;ce==="h"?f.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:te}):ce==="v"?f.setPlane({kind:"v",row:k,flat:te}):f.setPlane(null),f.setCount(At[e.density]??At.medium),f.setColouring(te?"white":e.particles,I.id,g,Z),t==null||t({low:Z[0]*W,high:Z[1]*W,...I}),i.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:T,refresh(){c="",T()},onAdd(I,V){i=I,a=new Bi,o=new Pi,r=new Ii({canvas:i.getCanvas(),context:V,antialias:!0}),r.autoClear=!1,r.localClippingEnabled=!0,d=new fr({vertexShader:uo,fragmentShader:co,uniforms:{field:{value:null},palette:{value:null},range:{value:new hr(0,1)}},transparent:!0,depthWrite:!1,side:gr,clipping:!0,clippingPlanes:v}),l=new Ge(new at(n.width*ae,n.height*ae),d),l.position.set(b,M,0),l.rotation.z=n.theta,l.frustumCulled=!1,a.add(l);const k=new at(n.width*ae,(n.layers.at(-1)+1)*je);k.rotateX(Math.PI/2),u=new Ge(k,d),u.rotation.z=n.theta,u.frustumCulled=!1,a.add(u),f=new Ai(oi(n)),a.add(f.mesh),s=go(n.grid,.5),s&&a.add(s),T()},render(I,V){const k=performance.now(),C=Math.min(p?(k-p)/1e3:0,.05);p=k,x.makeTranslation(y.x,y.y,y.z).scale(new ue(m,-m,m)),o.projectionMatrix.copy(w.fromArray(V)).multiply(x),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),f.setViewport(I.drawingBufferWidth,I.drawingBufferHeight);const A=f.enabled&&!e.paused;A&&f.step(C,_()),r.resetState(),r.setViewport(0,0,I.drawingBufferWidth,I.drawingBufferHeight),r.render(a,o),A&&i.triggerRepaint()},onRemove(){h==null||h.dispose(),g==null||g.dispose(),l==null||l.geometry.dispose(),u==null||u.geometry.dispose(),d==null||d.dispose(),f==null||f.dispose(),s==null||s.geometry.dispose(),s==null||s.material.dispose(),r==null||r.dispose(),i=null,r=null}}}function go(n,e){if(!n.mainDomain)return null;const t=ki(n.origin),i=[...t(n.mainDomain.bounds.slice(0,2)),...t(n.mainDomain.bounds.slice(2,4))],r=new fr({uniforms:{extent:{value:new hr(n.nx*ae,n.ny*ae)},mainBounds:{value:new Fi(...i)},mainColour:{value:new Ut(se().mainArea)},bufferColour:{value:new Ut(se().bufferArea)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:gr}),a=new Ge(new at(n.nx*ae,n.ny*ae),r);return a.name="flume-domain-overlay",a.position.set(n.nx*ae/2,n.ny*ae/2,e+.05),a.renderOrder=4,a.frustumCulled=!1,a}const ot="flume-field",De="flume-buildings";function Mr(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function ho(n){return n.type==="fill-extrusion"?"fill-extrusion-opacity":n["source-layer"]==="building"&&(n.type==="fill"||n.type==="line")?n.type+"-opacity":null}function po(n,e,t){let i=null,r=null;const a=new Map,o=lo(n,t);function l(){n.getLayer(ot)&&n.removeLayer(ot),i=null}function u(){for(const[h,g]of a)n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",g.visibility),n.setPaintProperty(h,g.property,g.opacity),n.setFilter(h,g.filter),n.setLayerZoomRange(h,g.minzoom,g.maxzoom),g.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",g.color));a.clear()}function s(h){for(const g of n.getStyle().layers){if(g.id.startsWith("flume-"))continue;const d=ho(g);if(!d)continue;const c=g.type==="fill-extrusion";a.set(g.id,{visibility:n.getLayoutProperty(g.id,"visibility")??"visible",property:d,opacity:n.getPaintProperty(g.id,d)??1,filter:n.getFilter(g.id)??null,minzoom:g.minzoom??0,maxzoom:g.maxzoom??24,color:c?n.getPaintProperty(g.id,"fill-extrusion-color")??null:void 0}),n.setPaintProperty(g.id,d,Rt),c&&n.setPaintProperty(g.id,"fill-extrusion-color",se().previewBuildings),h||n.setLayoutProperty(g.id,"visibility","none")}}function f({source:h,input:g,prediction:d,preview:c,display:p}){if(d!==r&&(l(),r=d),!d&&n.getLayer(De)&&n.removeLayer(De),u(),Xr(n,Mr(h)),!d){o.clear(),st(n,c);return}st(n,null);const x=Nr.find(y=>y.id===(h==="osm"?"city-osm-3d":"city-concordia-3d")),w=lr(g.buildings.features,n.getFilter(x.id));s(p.showSurroundings),n.setFilter(x.id,w.surroundings),n.setLayerZoomRange(x.id,Le,x.layer.maxzoom??24),n.getLayer(De)?n.setFilter(De,w.selected):n.addLayer({...x.layer,id:De,minzoom:Le,layout:{visibility:"visible"},filter:w.selected,paint:{...x.layer.paint,"fill-extrusion-color":se().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:x.layer.source,sourceLayer:x.layer["source-layer"],collection:c,dataZoom:g.dataZoom,filters:w,surroundingsOpacity:Rt,showSurroundings:p.showSurroundings}),n.getLayer(ot)||(i=fo(d,p,e),n.addLayer(i)),n.triggerRepaint()}return{update:f,configure(){i==null||i.configure()},refresh(){i==null||i.refresh()},beforeStyleChange(){l(),r=null,a.clear()},dispose(){l(),o.dispose(),a.clear()}}}function Pe(n,e,t,i,r){if(t.reduce((l,u)=>l*u,1)!==e.length)throw new Error("Invalid "+n+" shape.");const a=new Uint8Array(e.length*4),o=new DataView(a.buffer);for(let l=0;l<e.length;l++){if(!Number.isFinite(e[l]))throw new Error("Cannot export non-finite "+n);o.setFloat32(l*4,e[l],!0)}return{name:n,content:a,description:{dtype:"float32",shape:t,channels:i,unit:r}}}function kr(n,e,t,i,r=null){var o,l,u;const a={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((o=n.selection)==null?void 0:o.geometry)??((l=n.polygon)==null?void 0:l.geometry),computationalDomain:(u=n.polygon)==null?void 0:u.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:i.nx,ny:i.ny,margin:i.margin,layerIndex:i.layerIndex,representation:i.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return r&&(a.volume={layers:r.settings.layers,heightsM:r.settings.layers.map(s=>(s+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),a.files=Object.fromEntries(t.map(s=>[s.name,s.description])),[{name:"metadata.json",content:JSON.stringify(a,null,2)},...t.map(({name:s,content:f})=>({name:s,content:f}))]}function Sr(n,e){const i=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(l=>o+"_"+l)),r=Pe("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer"),a=e.channels??i;return[Pe("mddf.f32.bin",e.values,[e.ny,e.nx,a.length],a,"m"),r]}function mo(n){const e=ur(n),t=n.width*n.height,i=new Float32Array(t*3),r=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t);for(let s=0;s<t;s++){const f=s*5;i.set([e[f],e[f+2],e[f+1]],s*3),r[s]=e[f+3],a[s]=e[f+4],o[s]=Math.hypot(e[f],e[f+1],e[f+2])}const l=[n.height,n.width],u=[Pe("velocity.f32.bin",i,[...l,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:l,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Pe("speed.f32.bin",o,l,["speed"],"m/s")];return n.settings.model!=="v2"&&u.push(Pe("temperature.f32.bin",r,l,["T"],"degC"),Pe("tke.f32.bin",a,l,["TKE"],"m2/s2")),u}function yo(n){const e=n.width*n.height,t=n.settings.layers.length,i=ur(n),r=new Float32Array(t*e*3);for(let a=0;a<t*e;a++)r.set([i[a*5],i[a*5+2],i[a*5+1]],a*3);return[Pe("velocity3d.f32.bin",r,[t,n.height,n.width,3],["u","v","w"],"m/s")]}function wo(n,e,t){return kr(n,t,Sr(t,e),e)}function bo(n,e,t,i=null){const r=[...Sr(t,e),...mo(t)];return i&&r.push(...yo(i)),r.push({name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),kr(n,t,r,e,i)}class xo{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,r=[];let a=0;e.traverse(function(w){if(w.isMesh){const y=w.geometry,m=y.index,b=y.getAttribute("position");a+=m!==null?m.count/3:b.count/3,r.push({object3d:w,geometry:y})}});let o,l=80;if(i===!0){const w=a*2+a*3*4*4+80+4,y=new ArrayBuffer(w);o=new DataView(y),o.setUint32(l,a,!0),l+=4}else o="",o+=`solid exported
`;const u=new ue,s=new ue,f=new ue,h=new ue,g=new ue,d=new ue;for(let w=0,y=r.length;w<y;w++){const m=r[w].object3d,b=r[w].geometry,M=b.index,v=b.getAttribute("position");if(M!==null)for(let _=0;_<M.count;_+=3){const S=M.getX(_+0),B=M.getX(_+1),P=M.getX(_+2);c(S,B,P,v,m)}else for(let _=0;_<v.count;_+=3){const S=_+0,B=_+1,P=_+2;c(S,B,P,v,m)}}return i===!1&&(o+=`endsolid exported
`),o;function c(w,y,m,b,M){u.fromBufferAttribute(b,w),s.fromBufferAttribute(b,y),f.fromBufferAttribute(b,m),M.isSkinnedMesh===!0&&(M.applyBoneTransform(w,u),M.applyBoneTransform(y,s),M.applyBoneTransform(m,f)),u.applyMatrix4(M.matrixWorld),s.applyMatrix4(M.matrixWorld),f.applyMatrix4(M.matrixWorld),p(u,s,f),x(u),x(s),x(f),i===!0?(o.setUint16(l,0,!0),l+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(w,y,m){h.subVectors(m,y),g.subVectors(w,y),h.cross(g).normalize(),d.copy(h).normalize(),i===!0?(o.setFloat32(l,d.x,!0),l+=4,o.setFloat32(l,d.y,!0),l+=4,o.setFloat32(l,d.z,!0),l+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function x(w){i===!0?(o.setFloat32(l,w.x,!0),l+=4,o.setFloat32(l,w.y,!0),l+=4,o.setFloat32(l,w.z,!0),l+=4):o+="			vertex "+w.x+" "+w.y+" "+w.z+`
`}}}async function vo(n,e,t={}){var w,y;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((w=e.layers)==null?void 0:w.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:i,ny:r,layers:a,spacingM:o,layerSpacingM:l}=e,u=(m,b)=>m<0||b<0||m>=i||b>=r?0:a[b*i+m],s=async()=>{var m;if(await new Promise(b=>setTimeout(b,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let f=0;for(let m=0;m<r;m++){m%32===0&&await s();for(let b=0;b<i;b++){const M=u(b,m);if(!Number.isInteger(M)||M<0||M>160)throw new Error("Invalid MDDF building height.");M&&(f+=2+ +(M>u(b-1,m))+ +(M>u(b+1,m))+ +(M>u(b,m-1))+ +(M>u(b,m+1)))}}if(!f)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(f*18);let g=0;const d=(m,b,M,v)=>{for(const _ of[m,b,M,m,M,v])h.set(_,g),g+=3};for(let m=0;m<r;m++){m%32===0&&await s();for(let b=0;b<i;b++){const M=u(b,m)*l;if(!M)continue;const v=b*o,_=v+o,S=-m*o,B=S-o;d([v,M,S],[_,M,S],[_,M,B],[v,M,B]),d([v,0,S],[v,0,B],[_,0,B],[_,0,S]);let P=u(b-1,m)*l;M>P&&d([v,P,B],[v,P,S],[v,M,S],[v,M,B]),P=u(b+1,m)*l,M>P&&d([_,P,S],[_,P,B],[_,M,B],[_,M,S]),P=u(b,m-1)*l,M>P&&d([v,P,S],[_,P,S],[_,M,S],[v,M,S]),P=u(b,m+1)*l,M>P&&d([_,P,B],[v,P,B],[v,M,B],[_,M,B])}}const c=new Ei;c.setAttribute("position",new Di(h,3));const p=new Ge(c);let x;try{x=new xo().parse(p,{binary:!0}).buffer}finally{c.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:x},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(y=n.polygon)==null?void 0:y.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:i,ny:r,spacingM:o,layerSpacingM:l,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:f*2}}},null,2)}]}const Cr=Symbol("flume");function Je(){return Pr(Cr)}function _o(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=We(null),t=We(!1);let i=null,r=null,a=null,o=!1,l=null,u=!1;const s=()=>i,{currentPresetName:f}=tr();Tt(f.value);const h=Ur({getMap:s,accessToken:n}),g=Oi({getMap:s,ready:t,onChange:x,accessToken:n}),d=so(),c=pt({mapCreated:!1,mapReady:t,error:"",area:g.state,grid:null,wind:{...Ft},engine:d.state,display:{variable:"speed",speedMps:Ft.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:pi,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=j(()=>c.downloading||c.engine.downloading||c.area.loading);function x(){clearTimeout(l),l=null,u=!1,c.grid=null,c.legend=null,c.error="",c.downloadError="",d.invalidate(),b()}async function w(){if(p.value)return;const _=await g.captureRegion();if(!(!_||o))try{lr(_.buildings.features),c.grid=Ce(hi(_)),c.error="",y()}catch(S){c.error=S.message}}function y(){!c.grid||o||(clearTimeout(l),l=setTimeout(()=>{l=null,m()},mi))}async function m(){if(clearTimeout(l),l=null,!(o||!c.grid||p.value)){if(c.engine.busy){u=!0,d.cancel();return}try{const _={...gi(c.wind),model:c.wind.model,layers:cr(c.grid)};c.display.speedMps=_.speedMps,c.error="",await d.run(c.grid,_)}catch(_){c.error=_.message}u&&!o&&(u=!1,await m())}}function b(){!i||!t.value||r==null||r.update({source:c.area.source,input:c.area.snapshot,prediction:c.engine.prediction,preview:g.getPreview(),display:c.display})}async function M(_){if(!(p.value||!c.grid)&&!(_!=="model"&&(c.engine.busy||!c.engine.prediction))){c.downloading=!0,c.downloadError="";try{const S=c.area.snapshot;let B;if(_==="model")B=await vo(S,c.grid,{shouldCancel:()=>o});else{const T=Number(c.display.speedMps);if(!tt(T))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const I=c.engine.prediction,V={...I,settings:{...I.settings,speedMps:T}},k=sr(V,c.display.sliceHeightM),C=await d.readMddf(k.settings.layerIndex);_==="mddf"?B=wo(S,C,k):B=bo(S,C,k,V)}const P=await Wr(B);o||Hr(P,"flume-"+_+".zip","application/zip")}catch(S){o||(c.downloadError=S.message)}finally{o||(c.downloading=!1)}}}he([()=>c.engine.prediction,()=>c.area.source,()=>c.display.showSurroundings],b),he(()=>c.engine.layersReady,()=>r==null?void 0:r.refresh()),he(()=>[c.wind.directionDeg,c.wind.model],()=>{c.grid&&y()}),he(()=>c.wind.speedMps,_=>{tt(_)&&(c.display.speedMps=Number(_))}),he(()=>c.engine.prediction,_=>{const S=ze.find(B=>B.id===c.display.variable);(_==null?void 0:_.settings.model)==="v2"&&(S!=null&&S.notInV2)&&(c.display.variable="speed")}),he(()=>[c.display.variable,c.display.particles,c.display.density,c.display.speedMps,c.display.view,c.display.plane,c.display.sliceHeightM,c.display.planeOffsetM],()=>{tt(c.display.speedMps)?(c.downloadError="",r==null||r.configure()):c.downloadError="Use a wind speed between 0.5 and 20 m/s."}),he(()=>c.display.paused,()=>i==null?void 0:i.triggerRepaint()),he(f,_=>Tt(_)),he(h.mapStyle,_=>{i&&(g.beforeStyleChange(),t.value=!1,r==null||r.beforeStyleChange(),i.setStyle(_,{diff:!1}))}),Br(()=>{if(!(n!=null&&n.startsWith("pk."))){c.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{i=new or.Map({container:e.value,accessToken:n,style:h.mapStyle.value,center:wi,zoom:yi,pitch:0,antialias:!0,attributionControl:!1}),r=po(i,_=>{o||(c.legend=_)},_=>{o||(c.error=_.message)}),c.mapCreated=!0,i.on("style.load",()=>{if(!o)try{Yr(i,Mr(c.area.source)),t.value=!0,g.restore(),b()}catch(_){c.error=_.message}}),i.on("error",_=>{if(o)return;const S=_.sourceId?" ("+_.sourceId+")":"";c.error="Map data unavailable"+S+". Check token, allowed domains and connection."}),h.attach(),a=new ResizeObserver(()=>i==null?void 0:i.resize()),a.observe(e.value)}catch(_){c.error=_.message}}),ht(()=>{o=!0,clearTimeout(l),d.dispose(),r==null||r.dispose(),a==null||a.disconnect(),i==null||i.remove(),i=null});const v={mapElement:e,store:c,controls:h,locked:p,area:g,acceptArea:w,runPrediction:m,download:M};return Ir(Cr,v),v}const $o={class:"flume-compact"},Mo={key:0,class:"map-hud-muted",role:"status"},ko={key:1,class:"map-hud-muted"},So={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Co={class:"map-hud-actions"},Bo={key:2,role:"status",class:"map-hud-muted"},Po={key:3,class:"map-hud-muted"},Io={key:4,class:"map-hud-muted"},Ao={__name:"AreaHud",setup(n){const{store:e,area:t,locked:i,acceptArea:r}=Je(),a=ar*100,o=e.area,l=j(()=>!e.mapReady||i.value),u=j(()=>!!(o.region||o.loadedArea)),s=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],f=dr.map(({label:c,value:p})=>({label:c,value:p}));function h(c){o.shape=c,t.startSelection()}const g={rectangle:"Click one corner, then the opposite corner.",circle:"Click the centre, then a point on the edge.",polygon:"Click the first point to finish."},d=bi.map(c=>({label:_t[c],value:c}));return(c,p)=>{var _;const x=rr,w=Ar,y=Ke,m=mt,b=ir,M=Ze,v=Qe;return L(),U("div",$o,[D(x,{modelValue:$(e).wind.model,"onUpdate:modelValue":p[0]||(p[0]=S=>$(e).wind.model=S),options:$(d),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:$(i)},null,8,["modelValue","options","disabled"]),D(w,{modelValue:$(o).source,"onUpdate:modelValue":p[1]||(p[1]=S=>$(o).source=S),label:"Buildings","aria-label":"Building source",size:"small",options:s,"text-by":"text","value-by":"value",disabled:$(i)},null,8,["modelValue","disabled"]),D(y,{block:"",size:"small",preset:u.value?"secondary":void 0,icon:"mso-location_city",disabled:l.value,loading:$(o).loading,onClick:$(t).loadBuildings},{default:G(()=>[...p[4]||(p[4]=[K("Show detailed buildings",-1)])]),_:1},8,["preset","disabled","loading","onClick"]),$(o).loadedArea?(L(),U("p",Mo," Loaded detailed buildings: "+E($(o).loadedArea.count)+" parts · "+E(($(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+E(($(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+E($(o).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(L(),U("p",ko," Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly. ")),F("div",So,[p[5]||(p[5]=F("span",{class:"map-hud-muted"},"Buffer",-1)),D(m,{modelValue:$(o).bufferPercent,"onUpdate:modelValue":p[2]||(p[2]=S=>$(o).bufferPercent=S),min:0,max:a,step:5,"aria-label":"Buffer per side (%)",disabled:$(i)},null,8,["modelValue","disabled"]),D(b,{modelValue:$(o).bufferPercent,"onUpdate:modelValue":p[3]||(p[3]=S=>$(o).bufferPercent=S),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:a,step:5,disabled:$(i)},null,8,["modelValue","disabled"]),p[6]||(p[6]=F("span",{class:"map-hud-muted"},"%",-1))]),D(x,{"model-value":$(o).shape,options:$(f),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Area shape",class:"even-toggle",disabled:l.value,"onUpdate:modelValue":h},null,8,["model-value","options","disabled"]),F("div",Co,[D(y,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:l.value,"aria-label":"Select region",onClick:$(t).startSelection},{default:G(()=>[...p[7]||(p[7]=[K("Draw area",-1)])]),_:1},8,["disabled","onClick"]),D(y,{size:"small",preset:u.value?void 0:"secondary",disabled:!$(e).mapReady||!u.value||$(i),loading:$(o).loading,"aria-label":$(o).region?"Use selected region":"Use full loaded area",onClick:$(r)},{default:G(()=>[K(E($(o).region?"Use region":"Use full area"),1)]),_:1},8,["preset","disabled","loading","aria-label","onClick"]),$(o).region?(L(),$e(y,{key:0,size:"small",preset:"secondary",icon:"mso-close",disabled:$(i),onClick:$(t).clearSelection},{default:G(()=>[...p[8]||(p[8]=[K("Clear",-1)])]),_:1},8,["disabled","onClick"])):H("",!0)]),$(o).drawing?(L(),U("p",Bo," Draw around buildings; touching the edge selects the whole building. "+E(g[$(o).shape])+" Esc cancels. ",1)):$(o).region?(L(),U("p",Po,E($(o).region.extentM[0])+" × "+E($(o).region.extentM[1])+" m · 4 m cells · "+E($(o).region.buffer?"main + buffer":"main domain"),1)):H("",!0),(_=$(o).region)!=null&&_.mainDomain?(L(),U("p",Io," Main: "+E($(o).region.mainDomain.extentM[0])+" × "+E($(o).region.mainDomain.extentM[1])+" m. Buffer: "+E(($(o).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):H("",!0),$(o).loading?(L(),$e(M,{key:5,"model-value":$(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):H("",!0),$(o).error?(L(),$e(v,{key:6,color:"danger"},{default:G(()=>[K(E($(o).error),1)]),_:1})):H("",!0)])}}},Ro={class:"flex flex-col gap-3"},To={key:0,class:"map-hud-muted"},Fo={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Eo={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Do=["aria-valuenow","aria-disabled"],Lo=["x1","y1","x2","y2"],zo=["cx","cy"],Oo={class:"flex flex-col gap-2 min-w-0"},Vo={class:"cardinals grid grid-cols-4 gap-1"},Xo={key:3,class:"flex flex-col gap-1"},No={role:"status",class:"map-hud-muted"},Uo={key:4,class:"map-hud-muted"},Yo={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:i}=Je(),r=e.wind,a=e.engine,o=j(()=>!!e.grid&&!t.value),l=j(()=>{if(!e.grid)return null;const d=cr(e.grid);return{topM:Math.round((d.at(-1)+.5)*je),layers:d.length}}),u=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],s=We(null),f=j(()=>Number(r.directionDeg)*Math.PI/180);function h(d){if(!o.value||d.type==="pointermove"&&!d.buttons)return;d.type==="pointerdown"&&d.currentTarget.setPointerCapture(d.pointerId);const c=s.value.getBoundingClientRect(),p=d.clientX-c.left-c.width/2,x=-(d.clientY-c.top-c.height/2);r.directionDeg=(Math.round(Math.atan2(x,p)*180/Math.PI)+360)%360}function g(d){if(!o.value)return;const c={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[d.key]??0;c&&(d.preventDefault(),r.directionDeg=(Number(r.directionDeg)+c+360)%360)}return(d,c)=>{const p=mt,x=ir,w=Ke,y=Qe,m=Ze;return L(),U("div",Ro,[$(e).grid?H("",!0):(L(),U("p",To,"Choose a simulation area in step 1 first.")),F("div",Fo,[c[3]||(c[3]=F("span",{class:"map-hud-muted"},"Speed",-1)),D(p,{modelValue:$(r).speedMps,"onUpdate:modelValue":c[0]||(c[0]=b=>$(r).speedMps=b),min:$(Dt),max:$(Et),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),D(x,{modelValue:$(r).speedMps,"onUpdate:modelValue":c[1]||(c[1]=b=>$(r).speedMps=b),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:$(Dt),max:$(Et),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),c[4]||(c[4]=F("span",{class:"map-hud-muted"},"m/s",-1))]),F("div",Eo,[(L(),U("svg",{ref_key:"dial",ref:s,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":$(r).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Rr(h,["prevent"]),onPointermove:h,onKeydown:g},[c[5]||(c[5]=Tr('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-8f54e644></circle><text x="80" y="16" text-anchor="middle" data-v-8f54e644>90°</text><text x="146" y="84" text-anchor="middle" data-v-8f54e644>0°</text><text x="80" y="152" text-anchor="middle" data-v-8f54e644>270°</text><text x="14" y="84" text-anchor="middle" data-v-8f54e644>180°</text>',5)),F("line",{x1:80-Math.cos(f.value)*30,y1:80+Math.sin(f.value)*30,x2:80+Math.cos(f.value)*42,y2:80-Math.sin(f.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Lo),F("circle",{cx:80+Math.cos(f.value)*42,cy:80-Math.sin(f.value)*42,r:"5",class:"needle-tip"},null,8,zo)],40,Do)),F("div",Oo,[D(x,{modelValue:$(r).directionDeg,"onUpdate:modelValue":c[2]||(c[2]=b=>$(r).directionDeg=b),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),F("div",Vo,[(L(),U(ve,null,nr(u,b=>D(w,{key:b.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+b.text,onClick:M=>$(r).directionDeg=b.value},{default:G(()=>[K(E(b.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),$(e).error?(L(),$e(y,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:G(()=>[K(E($(e).error),1)]),_:1})):H("",!0),$(a).error?(L(),$e(y,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:G(()=>[K(E($(a).error),1)]),_:1})):H("",!0),$(a).busy?(L(),U("div",Xo,[D(m,{"model-value":$(a).progress*100,indeterminate:$(a).progress===0},null,8,["model-value","indeterminate"]),F("p",No,E($(a).stage),1)])):H("",!0),l.value&&!$(a).busy?(L(),U("p",Uo," 3D wind: ground to "+E(l.value.topM)+" m · "+E(l.value.layers)+" layers ",1)):H("",!0),D(w,{block:"",disabled:!o.value,loading:$(a).busy,"aria-label":"Run prediction",onClick:$(i)},{default:G(()=>[...c[6]||(c[6]=[K("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},Wo=yt(Yo,[["__scopeId","data-v-8f54e644"]]),Ho={class:"flex flex-col gap-3"},jo={key:0,class:"map-hud-muted"},Go={key:0,class:"hud-row hud-row--value"},qo={class:"hud-value"},Ko={key:1,class:"hud-row hud-row--value"},Zo={class:"hud-value"},Qo={key:0,class:"hud-row"},Jo={class:"hud-row"},ea={key:0,class:"flex flex-col gap-1 text-xs"},ta={class:"flex justify-between gap-2 map-hud-muted"},ra={class:"map-hud-muted"},ia={__name:"VisualizeHud",setup(n){const{store:e}=Je(),t=e.display,i=j(()=>e.engine.prediction),r=j(()=>{var w;return e.engine.layersReady||((w=i.value)==null?void 0:w.layers.length)||0}),a=j(()=>i.value?xi(i.value):Lt),o=j(()=>i.value?vi(i.value):[0,0]),l=j(()=>ze.filter(w=>{var y;return!(w.notInV2&&((y=i.value)==null?void 0:y.settings.model)==="v2")}).map(w=>({label:w.label,value:w.id}))),u=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],s=j(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(w=>w.value!=="3d"||t.view==="particles")),f=j({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:w=>t.plane=w}),h=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],g=j(()=>f.value==="h"||f.value==="3d"&&t.view==="particles"&&t.particles==="white"),d=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],c=j(()=>{const w=Math.round(Number(t.planeOffsetM));return(w>0?"+":"")+w+" m"}),p=j(()=>{var w;return((w=ze.find(y=>y.id===t.variable))==null?void 0:w.ramp)??"turbo"}),x=j(()=>"linear-gradient(to right,"+Array.from({length:17},(w,y)=>"rgb("+_i(p.value,y/16).join(",")+") "+y*100/16+"%").join(",")+")");return(w,y)=>{const m=rr,b=mt,M=Er,v=Dr;return L(),U("div",Ho,[i.value?(L(),U(ve,{key:1},[D(m,{modelValue:$(t).view,"onUpdate:modelValue":y[0]||(y[0]=_=>$(t).view=_),options:u,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),$(t).view!=="off"?(L(),U(ve,{key:0},[D(m,{modelValue:f.value,"onUpdate:modelValue":y[1]||(y[1]=_=>f.value=_),options:s.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),g.value?(L(),U("div",Go,[y[9]||(y[9]=F("span",{class:"hud-label"},"Height",-1)),D(b,{modelValue:$(t).sliceHeightM,"onUpdate:modelValue":y[2]||(y[2]=_=>$(t).sliceHeightM=_),min:$(Lt),max:a.value,step:$(je),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),F("span",qo,E(Number($(t).sliceHeightM).toFixed(1))+" m",1)])):H("",!0),f.value==="v"?(L(),U("div",Ko,[y[10]||(y[10]=F("span",{class:"hud-label"},"Position",-1)),D(b,{modelValue:$(t).planeOffsetM,"onUpdate:modelValue":y[3]||(y[3]=_=>$(t).planeOffsetM=_),min:o.value[0],max:o.value[1],step:$(ae),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),F("span",Zo,E(c.value),1)])):H("",!0)],64)):H("",!0),$(t).view!=="off"?(L(),U(ve,{key:1},[$(t).view==="particles"?(L(),U("div",Qo,[y[11]||(y[11]=F("span",{class:"hud-label"},"View mode",-1)),D(m,{modelValue:$(t).particles,"onUpdate:modelValue":y[4]||(y[4]=_=>$(t).particles=_),options:h,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])])):H("",!0),F("div",Jo,[y[12]||(y[12]=F("span",{class:"hud-label"},"Density",-1)),D(m,{modelValue:$(t).density,"onUpdate:modelValue":y[5]||(y[5]=_=>$(t).density=_),options:d,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),D(M,{modelValue:$(t).paused,"onUpdate:modelValue":y[6]||(y[6]=_=>$(t).paused=_),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):H("",!0),$(t).view!=="off"?(L(),U(ve,{key:2},[D(v,{class:"!my-0"}),D(m,{modelValue:$(t).variable,"onUpdate:modelValue":y[7]||(y[7]=_=>$(t).variable=_),options:l.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),$(e).legend?(L(),U("div",ea,[F("div",{class:"colorbar",style:Fr({background:x.value})},null,4),F("div",ta,[F("span",null,E($(e).legend.low.toFixed(2)),1),F("strong",null,E($(e).legend.legend)+" ("+E($(e).legend.unit)+")",1),F("span",null,E($(e).legend.high.toFixed(2)),1)])])):H("",!0)],64)):H("",!0),D(v,{class:"!my-0"}),D(M,{modelValue:$(t).showSurroundings,"onUpdate:modelValue":y[8]||(y[8]=_=>$(t).showSurroundings=_),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),F("p",ra,[K(E($(_t)[i.value.settings.model])+" · 3D wind up to "+E(a.value.toFixed(0))+" m · "+E(r.value)+" / "+E(i.value.settings.layers.length)+" layers · "+E((i.value.milliseconds/1e3).toFixed(1))+" s ",1),i.value.grid.mainDomain?(L(),U(ve,{key:0},[K(" · solid outline: main area, dashed: "+E((i.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):H("",!0)])],64)):(L(),U("p",jo,"Run a prediction to see the 3D wind."))])}}},na=yt(ia,[["__scopeId","data-v-ce293a4f"]]),oa={class:"space-y-2"},aa={key:0,class:"map-hud-muted"},sa={class:"grid grid-cols-2 gap-2"},la={__name:"DownloadsHud",setup(n){const{store:e,download:t}=Je(),i=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function r(a){const o=e.engine;return e.downloading||o.downloading||a!=="model"&&(o.busy||!o.prediction)}return(a,o)=>{const l=Ke,u=Ze,s=Qe;return L(),U("div",oa,[$(e).grid?(L(),U(ve,{key:1},[F("div",sa,[(L(),U(ve,null,nr(i,f=>D(l,{key:f.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":f.label,disabled:r(f.id),onClick:h=>$(t)(f.id)},{default:G(()=>[K(E(f.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),$(e).downloading?(L(),$e(u,{key:0,indeterminate:"","aria-label":"Preparing download"})):H("",!0),$(e).downloadError?(L(),$e(s,{key:1,color:"danger"},{default:G(()=>[K(E($(e).downloadError),1)]),_:1})):H("",!0)],64)):(L(),U("p",aa,"Choose a simulation area before downloading its model."))])}}},ua={class:"flume-hud-stack map-hud-column"},ca={class:"flume-heading map-hud-heading city-glass"},da={class:"flume-heading__row"},fa={key:0,class:"flume-info"},ga={class:"flume-info__title"},ha={class:"flume-info__copyright"},pa=["href"],ma={class:"map-hud-muted normal-case"},ya={class:"map-hud-muted normal-case"},wa={key:0,class:"flume-status"},ba={__name:"FlumeCityView",setup(n){const{mapElement:e,store:t,controls:i,locked:r,area:a}=_o(),{controlsVisible:o}=i,{currentPresetName:l}=tr(),u=j(()=>l.value==="dark"),s=We(!1),f=j(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),h={particles:"Particles",slice:"Slice",off:"Off"},g=j(()=>t.engine.prediction?h[t.display.view]:""),d={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(c,p)=>{const x=Ke,w=Qe,y=Ze;return L(),U("section",{class:Vr(["flume-page map-glass",{"map-glass--dark":u.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=Or((...m)=>$(a).stopSelection&&$(a).stopSelection(...m),["esc"]))},[Lr(F("div",ua,[F("header",ca,[F("div",da,[p[2]||(p[2]=F("h1",null,"Flume City",-1)),D(x,{preset:"secondary",color:"textPrimary",size:"small",icon:s.value?"mso-close":"mso-info","aria-label":s.value?"Hide Flume City information":"Show Flume City information","aria-expanded":s.value,onClick:p[0]||(p[0]=m=>s.value=!s.value)},null,8,["icon","aria-label","aria-expanded"])]),s.value?(L(),U("div",fa,[F("p",ga,E(d.title),1),F("p",null,E(d.authors),1),F("p",null,E(d.summary),1),D(x,{preset:"secondary",size:"small",icon:"mso-description",href:d.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:G(()=>[...p[3]||(p[3]=[K("arXiv",-1)])]),_:1},8,["href"]),F("div",ha,[F("p",null,[p[4]||(p[4]=K(" Developed and maintained by ",-1)),F("a",{href:$(Oe).lab.url,target:"_blank",rel:"noopener"},E($(Oe).lab.name),9,pa),p[5]||(p[5]=F("br",null,null,-1)),K("("+E($(Oe).lead)+") ",1)]),F("p",null,E($(Oe).place),1)])])):H("",!0)]),D(Ve,{title:"1 · Simulation area",inert:$(r),collapsed:!!$(t).grid},{default:G(()=>[D(Ao)]),_:1},8,["inert","collapsed"]),D(Ve,{title:"2 · Wind configuration",collapsed:!$(t).grid},{"header-extra":G(()=>[F("span",ma,E(f.value),1)]),default:G(()=>[D(Wo)]),_:1},8,["collapsed"]),D(Ve,{title:"3 · Wind visualization",collapsed:!$(t).engine.prediction},{"header-extra":G(()=>[F("span",ya,E(g.value),1)]),default:G(()=>[D(na)]),_:1},8,["collapsed"]),D(Ve,{title:"4 · Downloads",collapsed:!$(t).grid},{default:G(()=>[D(la)]),_:1},8,["collapsed"]),$(t).error&&!$(t).grid?(L(),$e(w,{key:0,color:"danger"},{default:G(()=>[K(E($(t).error),1)]),_:1})):H("",!0)],512),[[zr,$(o)]]),F("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),D(Li,{controls:$(i),shown:$(t).mapCreated,disabled:$(r)},null,8,["controls","shown","disabled"]),!$(t).mapReady&&!$(t).error?(L(),U("div",wa,[D(y,{indeterminate:"","aria-label":"Loading Flume map"})])):H("",!0)],34)}}},Da=yt(ba,[["__scopeId","data-v-195ac9c9"]]);export{Da as default};
