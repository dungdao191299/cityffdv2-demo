import{m as de,s as yt,x as Ce,l as wt,y as ir,z as Ar,p as j,q as Ge,a5 as Rr,a6 as Tr,o as O,c as Y,b as V,u as _,w as G,d as Z,t as F,a as E,i as W,h as $e,a7 as nr,R as Fr,V as Qe,Y as xt,U as or,Z as Er,Q as Je,G as et,_ as bt,O as Lr,e as Dr,F as ve,r as ar,n as zr,E as Or,S as Vr,$ as Xr,a0 as Ur,a8 as Xe,a3 as Yr,K as Nr}from"./index-CIGzkljK.js";import{m as sr,s as Hr,b as Wr,u as jr,a as Gr,M as Ue}from"./mapbox-gl-geocoder-DibNjCcp.js";import{z as qr}from"./archive-Dz16c6AW.js";import{d as Kr}from"./download-B6B1Q6H-.js";import{m as ue,c as At,B as Zr,Q as rt,a as Qr,s as Jr,M as lr,b as ei,d as qe,L as Ie,C as ie,e as ti,f as ri,t as ii,g as ni,A as oi,h as ai,r as vt,F as _t,i as $t,G as si,P as li,p as Mt,j as ui,k as kt,l as Oe,n as Rt,v as ci,V as Ve,o as di,q as fi,u as gi,w as ur,x as hi,y as Tt,z as pi,D as mi,E as Ft,H as yi,I as cr,S as Et,J as dr,K as Lt,N as it,O as fr,R as wi,T as xi,U as Dt,W as bi,X as vi,Y as _i,Z as $i,_ as Mi,$ as zt,a0 as Ot,a1 as Vt,a2 as ki,a3 as Si,a4 as Ci}from"./volumeSource-Bw5sEFGc.js";import{M as nt}from"./mapbox-gl-draw-CugoP3Hw.js";import{D as gr,a as Bi,S as Pi}from"./drawShapes-qJkSTojK.js";import{c as lt,m as Ii}from"./geojsonToStl-Bbo8coar.js";import{r as Ai,l as Ri}from"./buildingTiles-CdjZjrV2.js";import{M as Xt,P as Ye,V as fe,S as Ti,C as Fi,a as Ei,m as hr,i as pr,n as mr,k as Ke,o as ut,W as Li,D as Ut,R as Yt,c as Di,L as Nt,H as zi,p as Ht,q as Oi,B as Vi,d as Xi,l as Ui}from"./MapActions-BwZv9LfQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./index-D6bWIqpK.js";import"./earcut-Drp1yMsm.js";const ge="flume-detailed-buildings",he="flume-region-domain",Te="flume-main-domain";function ct(r,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){r.getLayer(ge)&&r.removeLayer(ge),r.getSource(ge)&&r.removeSource(ge);return}r.getSource(ge)?r.getSource(ge).setData(e):r.addSource(ge,{type:"geojson",data:e,maxzoom:22,tolerance:0}),r.getLayer(ge)||r.addLayer({id:ge,type:"fill-extrusion",source:ge,minzoom:0,paint:{"fill-extrusion-color":ue().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function Yi(r,e){if(!e){r.getLayer(Te)&&r.removeLayer(Te),r.getLayer(he)&&r.removeLayer(he),r.getSource(he)&&r.removeSource(he);return}const t=[{...e.polygon,properties:{role:"outer"}}];e.mainDomain&&t.push({...e.mainDomain.polygon,properties:{role:"main"}});const n={type:"FeatureCollection",features:t};r.getSource(he)?r.getSource(he).setData(n):(r.addSource(he,{type:"geojson",data:n}),r.addLayer({id:he,type:"line",source:he,filter:["==",["get","role"],"outer"],paint:{"line-color":ue().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!r.getLayer(Te)&&r.addLayer({id:Te,type:"line",source:he,filter:["==",["get","role"],"main"],paint:{"line-color":ue().mainArea,"line-width":3}}),!e.mainDomain&&r.getLayer(Te)&&r.removeLayer(Te)}const Wt=["draw.create","draw.update","draw.delete"];function Ni({getMap:r,ready:e,onChange:t,accessToken:n}){const i=wt({source:"concordia",bufferPercent:Zr*100,shape:"polygon",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,o=!1,l=null,u=0,s=null;function f(S=!1){u++,l==null||l.abort(),S||(s=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function h(){const S=r();!S||!e.value||(ct(S,s==null?void 0:s.preview),Yi(S,i.region??(s==null?void 0:s.area)??null))}function g(){return(s==null?void 0:s.preview)??null}function d(S){f(!i.region&&!i.snapshot),i.error="";try{i.region=Ce(At(S))}catch(C){i.region=null,i.error=C.message}h()}function c(S){var z;if(o||!a)return;const C=(z=S.features)==null?void 0:z.at(-1);if(S.type==="draw.create"&&C)for(const H of a.getAll().features)H.id!==C.id&&a.delete(H.id);const I=a.getAll().features.find(H=>H.geometry.type==="Polygon");I?d(I):(f(),i.region=null,h()),i.drawing=!1}function p(S){i.drawing=Bi.has(S.mode)}function x(){var C;const S=r();if(!S||!e.value)throw new Error("Wait for the map to load.");if(!a){const I={...nt.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};a=new nt({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...nt.modes,...Pi,simple_select:I}}),S.addControl(a,"bottom-left");for(const z of Wt)S.on(z,c);S.on("draw.modechange",p),y(S),S.once("idle",()=>y(S)),(C=i.region)!=null&&C.selection&&a.add(i.region.selection)}return a}function y(S){var C;for(const I of((C=S.getStyle())==null?void 0:C.layers)??[])I.id.startsWith("gl-draw-")&&(I.type==="fill"&&(S.setPaintProperty(I.id,"fill-color",ue().mainArea),S.setPaintProperty(I.id,"fill-opacity",ue().drawFillOpacity)),I.type==="line"&&(S.setPaintProperty(I.id,"line-color",ue().mainArea),S.setPaintProperty(I.id,"line-width",3)))}function w(){const S=r();if(!(!a||!S)){for(const C of Wt)S.off(C,c);S.off("draw.modechange",p),S.removeControl(a),a=null,i.drawing=!1}}function m(){var S;if(!i.loading)try{const C=x();r().stop(),f(!i.region&&!i.snapshot),i.region=null,C.deleteAll(),h(),C.changeMode(((S=gr.find(I=>I.value===i.shape))==null?void 0:S.mode)??"draw_polygon"),i.drawing=!0,i.error=""}catch(C){i.error=C.message}}function b(){a&&a.changeMode("simple_select"),i.drawing=!1}function $(){var S;(S=r())==null||S.stop(),w(),f(),i.region=null,i.error="",h()}async function v(S){const C=new AbortController,I=u;l=C,i.loading=!0,i.progress=0,i.error="";const z=()=>o||C.signal.aborted||I!==u;try{return await S({signal:C.signal,epoch:I,isStale:z})}catch(H){return C.abort(),!o&&I===u&&H.name!=="AbortError"&&(i.error=H.message),null}finally{l===C&&(l=null,o||(i.loading=!1))}}async function k(S,C,{signal:I,epoch:z,isStale:H}){if(I.throwIfAborted(),(s==null?void 0:s.source)===C){const[T,L,Q,se]=S.bounds,ce=s.area.bounds;if(T>=ce[0]&&L>=ce[1]&&Q<=ce[2]&&se<=ce[3])return s.tiles}const q=r(),X=C==="osm"?"composite":"city-concordia",te=Ai({map:q,sourceId:X,source:C,bounds:S.bounds})??await Ri({sourceConfig:q.getStyle().sources[X],source:C,bounds:S.bounds,accessToken:n,signal:I,paddingTiles:1,onProgress:T=>{z===u&&(i.progress=T)}});if(H())throw new DOMException("Cancelled","AbortError");const ae=qe(te.features);return s={source:C,area:S,tiles:te,preview:ae},i.loadedArea=Ce({source:C,bounds:[...S.bounds],extentM:[...S.extentM],count:ae.features.length,fromMap:!!te.fromMap}),h(),te}function B(S){var z;const C=r(),I=C.getCanvas().clientWidth;(z=C.resize)==null||z.call(C),C.fitBounds([S.bounds.slice(0,2),S.bounds.slice(2,4)],{padding:I>=640?{top:40,bottom:40,left:Math.min(320,I*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function P(){if(i.loading||o)return null;const S=r();if(!S||!e.value)return i.error="Wait for the map to load.",null;const C=i.source;return v(async I=>{const z=rt/2,H=S.getCenter().wrap().toArray(),q=lt(H)([-z,-z]),X=Qr(q,lt(q)([rt,rt]));return B(X),await k(X,C,I),I.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function M(){if(i.loading||o)return null;!i.region&&(s==null?void 0:s.source)===i.source&&d(s.area.polygon);const S=r(),C=i.region,I=i.source;return!S||!e.value||!C?(i.error="Draw and finish a valid polygon first.",null):v(async z=>{const H=At(C.selection??C.polygon);let q=H,X,oe;for(let T=0;T<4;T++){if(oe=await k(q,I,z),z.isStale())return null;X=Jr(oe.features,H);const[L,Q,se,ce]=X.bounds,ee=oe.coverageBounds,we=1e-8;if(L>ee[0]+we&&Q>ee[1]+we&&se<ee[2]-we&&ce<ee[3]-we||!X.buildings.features.length)break;if(T===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");q=X}const te=Math.min(Math.max(Number(i.bufferPercent)||0,0),lr*100)/100;X=ei(X,te),X.source=I,X.dataZoom=oe.zoom,X.tileCount=oe.tileCount,X.surroundings=qe(X.surroundings.features),X.warnings=X.warnings.filter(T=>!T.startsWith("Loaded map tiles only"));const ae=oe.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return X.warnings.push(ae+oe.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(X.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=Ce(X),i.region=Ce({origin:X.origin,bounds:X.bounds,extentM:X.extentM,polygon:X.polygon,selection:X.selection,mainDomain:X.mainDomain,buffer:X.buffer}),h(),B(X),t==null||t(),X})}function A(){l==null||l.abort(),w()}function R(){var S;h(),(S=i.region)!=null&&S.selection&&x()}function D(){o=!0,u++,l==null||l.abort(),w()}return de(()=>i.source,()=>{f(),h(),i.error=""}),yt(D),{state:i,startSelection:m,stopSelection:b,clearSelection:$,setSelection:d,captureRegion:M,loadBuildings:P,getPreview:g,restore:R,beforeStyleChange:A}}const yr=14,Hi=Math.round(ti/Ie),Wi=(r,e,t)=>-1e4+(r*65536+e*256+t)*.1;function ji(r,e){const t=2**yr,n=e*Math.PI/180;return[(r+180)/360*t,(1-Math.log(Math.tan(n)+1/Math.cos(n))/Math.PI)/2*t]}async function Gi(r,e,t,n){const i=`https://api.mapbox.com/v4/mapbox.mapbox-terrain-dem-v1/${yr}/${r}/${e}@2x.pngraw?access_token=${encodeURIComponent(t)}`,a=await fetch(i,{signal:n});if(!a.ok)throw new Error(`Terrain data request failed (HTTP ${a.status}).`);const o=await createImageBitmap(await a.blob(),{colorSpaceConversion:"none",premultiplyAlpha:"none"}),u=new OffscreenCanvas(o.width,o.height).getContext("2d",{willReadFrequently:!0});u.drawImage(o,0,0);const{data:s}=u.getImageData(0,0,o.width,o.height),f=new Float32Array(o.width*o.height);for(let h=0;h<f.length;h++)f[h]=Wi(s[4*h],s[4*h+1],s[4*h+2]);return{heights:f,size:o.width}}async function qi(r,e,t){const n=lt(r.origin),i=r.nx*r.ny,a=new Float64Array(i*2);let o=1/0,l=1/0,u=-1/0,s=-1/0;for(let x=0;x<r.ny;x++)for(let y=0;y<r.nx;y++){const[w,m]=ji(...n([(y+.5)*ie,(x+.5)*ie])),b=x*r.nx+y;a[2*b]=w,a[2*b+1]=m,o=Math.min(o,w),l=Math.min(l,m),u=Math.max(u,w),s=Math.max(s,m)}const f=1/256,h=[];for(let x=Math.floor(l-f);x<=Math.floor(s+f);x++)for(let y=Math.floor(o-f);y<=Math.floor(u+f);y++)h.push([y,x]);const g=new Map;await Promise.all(h.map(async([x,y])=>g.set(`${x}/${y}`,await Gi(x,y,e,t))));const d=g.values().next().value.size,c=(x,y)=>{const w=Math.floor(x/d),m=Math.floor(y/d);return g.get(`${w}/${m}`).heights[(y-m*d)*d+(x-w*d)]},p=new Float32Array(i);for(let x=0;x<i;x++){const y=a[2*x]*d-.5,w=a[2*x+1]*d-.5,m=Math.floor(y),b=Math.floor(w),$=y-m,v=w-b;p[x]=(c(m,b)*(1-$)+c(m+1,b)*$)*(1-v)+(c(m,b+1)*(1-$)+c(m+1,b+1)*$)*v}return p}function Ki(r,e){let t=1/0,n=-1/0;for(const o of e)t=Math.min(t,o),n=Math.max(n,o);const i=new Float32Array(r.layers.length);let a=0;for(let o=0;o<i.length;o++)i[o]=Math.min(Hi,Math.round((e[o]-t)/Ie)+r.layers[o]),a=Math.max(a,i[o]);return{...r,layers:i,statistics:{...r.statistics,maximumHeightM:a*Ie},terrain:{lowM:t,highM:n}}}const be=180,wr=4,xr=7,St=wr*xr,Ze=1.5,jt=4,Zi=1600,Qi=256*1024*1024,We=r=>r.toFixed(6),Ji=640,en=`
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
  let angles = ${be}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${We(jt)};
  let gyr = sinT[angle] / ${We(jt)};

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

  let cutoff = ${We(Zi)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Ji}u; step++) {
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
}`,tn=`
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
  let angles = ${be}u;
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
  let out = (u.pixelOffset + localPixel) * ${St}u
          + sig * ${xr}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,rn=r=>`${r==="f16"?`enable f16;
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
@group(0) @binding(5) var<storage, read_write> out: array<${r}>;
@group(0) @binding(6) var<uniform> u: P;

fn sampleField(ey: f32, ex: f32, channel: u32) -> f32 {
  let y0 = floor(ey); let x0 = floor(ex);
  let fy = ey - y0; let fx = ex - x0;
  let iy0 = clamp(i32(y0), 0, i32(u.gy) - 1);
  let ix0 = clamp(i32(x0), 0, i32(u.gx) - 1);
  let iy1 = clamp(iy0 + 1, 0, i32(u.gy) - 1);
  let ix1 = clamp(ix0 + 1, 0, i32(u.gx) - 1);
  let c = ${St}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${We(Ze)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`;class nn{constructor(e,t,n,i,a,o="f32"){this.context=e,this.store=o,this.ny=n,this.nx=i,this.margin=a,this.gy=n+2*a,this.gx=i+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const l=new Float32Array(this.gy*this.gx);for(let f=0;f<n;f++){const h=f*i,g=(f+a)*this.gx+a;for(let d=0;d<i;d++)l[g+d]=t[h+d]*Ze}this.heightBuffer=e.upload(l,"mddf.height");const u=new Float32Array(be),s=new Float32Array(be);for(let f=0;f<be;f++){const h=2*Math.PI*f/be;u[f]=Math.cos(h),s[f]=Math.sin(h)}this.cosBuffer=e.upload(u,"mddf.cos"),this.sinBuffer=e.upload(s,"mddf.sin"),this.rawBuffer=e.storage(wr*this.chunk*be*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*St*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(en),this.fourierPipeline=e.pipeline(tn),this.assemblePipeline=e.pipeline(rn(o)),this.currentLayer=-1}async compute(e,t={}){var u,s,f;const{context:n}=this,i=this.cache.get(e);if(i){this.fieldBuffer=i,this.currentLayer=e,(u=t.onProgress)==null||u.call(t,1);return}const a=(this.cache.size+1)*this.fieldBytes<=Qi;this.fieldBuffer=a?n.storage(this.fieldBytes,"mddf.field."+e):this.spare;const o=(e+.5)*Ze,l=this.gy*this.gx;for(let h=0;h<l;h+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const g=Math.min(this.chunk,l-h),d=n.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",h],["u",g],["u",0],["u",0],["u",0],["f",o],["f",0],["f",0],["f",0]]),c=n.device.createCommandEncoder(),p=c.beginComputePass();n.dispatch(p,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,d],g*be),n.dispatch(p,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,d],g*4,64),p.end(),n.device.queue.submit([c.finish()])}await n.device.queue.onSubmittedWorkDone(),(f=t.onProgress)==null||f.call(t,1),n.releaseScratch(),a&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,t,n,i,a,o,l){const{context:u}=this,s=t.length/2,f=u.upload(t,"assemble.origins"),h=u.uniform([["u",s],["u",n.channels],["u",n.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",n.solidChannel],["i",n.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",n.coordYScale],["f",(a-n.coordZCentre)/n.coordZScale],["f",n.coordXCentre],["f",n.coordXScale],["f",0],["f",0]]),g=e.beginComputePass();return u.dispatch(g,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,f,n.tableBuffer,n.normBuffer,l,h],s*n.channels*o*o),g.end(),f}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const ot=`
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
`,on=`
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
}`;function Gt(r,e,t,n=1e-5){const i=r==="f16"||e==="f16"?`enable f16;
`:"",a=l=>r==="f16"?`f32(${l})`:l,o=l=>e==="f16"?`f16(${l})`:l;return`${i}
@group(0) @binding(0) var<storage, read> X: array<${r}>;
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
  let inverse = inverseSqrt(max(partial[0] / ${t}.0, 0.0) + ${n.toExponential(12)});
  for (var i = lid.x; i < ${t}u; i += 256u) {
    Y[base + i] = ${o("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const at=32;function an(r){const{store:e,patch:t,modes1:n,modes2:i}=r,a=t*t,o=2*n,l=e==="f16"?`enable f16;
`:"",u=f=>e==="f16"?`f32(${f})`:f,s=f=>e==="f16"?`f16(${f})`:f;return{conv1x1:`${l}${ot}
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
}`,gate:`${l}${ot}
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
}`,instanceNorm:Gt(e,e,a),instanceNormScaled:Gt(e,e,a,1e-5/(at*at)),forwardColumns:`${l}
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
  if (g >= u.batch * u.channels * ${t*i}u) { return; }
  let k = g % ${i}u;
  let y = (g / ${i}u) % ${t}u;
  let bc = g / ${t*i}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${a}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${u("X[base + x]")};
    accRe += v * tableCos[x * ${i}u + k];
    accIm += v * tableSin[x * ${i}u + k];
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
  if (g >= u.batch * u.channels * u.rows * ${i}u) { return; }
  let k = g % ${i}u;
  let r = (g / ${i}u) % u.rows;
  let bc = g / (${i}u * u.rows);
  var accRe = 0.0; var accIm = 0.0;
  let inBase = bc * u.inner * ${i}u + k;
  let tableBase = r * u.inner;
  for (var j = 0u; j < u.inner; j++) {
    let ar = inRe[inBase + j * ${i}u];
    let ai = inIm[inBase + j * ${i}u];
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
  let block = ${o*i}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${i}u;
  let s = (g / ${i}u) % ${o}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${n}u);
  let sp = s - half * ${n}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${n*i}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${i}u + k;
  let xBase = (b * u.channels * ${o}u + s) * ${i}u + k;
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
  let base = (bc * ${t}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${s("acc * "+1/at)};
}`,residual:`${l}${ot}
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
}`}}function sn(r,e,t){const n=2*e,i=[];for(let d=0;d<e;d++)i.push(d);for(let d=r-e;d<r;d++)i.push(d);const a=new Float32Array(r*t),o=new Float32Array(r*t);for(let d=0;d<r;d++)for(let c=0;c<t;c++){const p=2*Math.PI*d*c/r;a[d*t+c]=Math.cos(p),o[d*t+c]=-Math.sin(p)}const l=new Float32Array(n*r),u=new Float32Array(n*r);for(let d=0;d<n;d++)for(let c=0;c<r;c++){const p=2*Math.PI*i[d]*c/r;l[d*r+c]=Math.cos(p),u[d*r+c]=-Math.sin(p)}const s=new Float32Array(r*n),f=new Float32Array(r*n);for(let d=0;d<r;d++)for(let c=0;c<n;c++){const p=2*Math.PI*i[c]*d/r;s[d*n+c]=Math.cos(p)/r,f[d*n+c]=Math.sin(p)/r}const h=new Float32Array(t*r),g=new Float32Array(t*r);for(let d=0;d<t;d++){const c=(d===0?1:2)/r;for(let p=0;p<r;p++){const x=2*Math.PI*d*p/r;h[d*r+p]=c*Math.cos(x),g[d*r+p]=-c*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:l,rowIm:u,inverseRowRe:s,inverseRowIm:f,inverseColCos:h,inverseColSin:g}}class ln{constructor(e,t,n,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[s,f]of Object.entries(an(o)))this.pipelines[s]=e.pipeline(f);this.contractPipeline=e.pipeline(on);const l=s=>{const f=t.tensors[s];if(!f)throw new Error(`missing tensor ${s}`);return ri(new Uint16Array(n,f.offset,f.count))};this.read=l,this.tables={};for(const[s,f]of Object.entries(sn(this.patch,this.modes1,this.modes2)))this.tables[s]=e.upload(f,`fno.table.${s}`);this.weights={};const u=(s,f)=>{const h=l(f);this.weights[s]=this.store==="f16"?e.upload(ii(h),`fno.${s}`):e.upload(h,`fno.${s}`)};u("p1w","p.mlp1.weight"),u("p1b","p.mlp1.bias"),u("p2w","p.mlp2.weight"),u("p2b","p.mlp2.bias"),u("q1w","q.mlp1.weight"),u("q1b","q.mlp1.bias"),u("q2w","q.mlp2.weight"),u("q2b","q.mlp2.bias");for(let s=0;s<this.layers;s++)u(`m1w${s}`,`mlp_layers.${s}.mlp1.weight`),u(`m1b${s}`,`mlp_layers.${s}.mlp1.bias`),u(`m2w${s}`,`mlp_layers.${s}.mlp2.weight`),u(`m2b${s}`,`mlp_layers.${s}.mlp2.bias`),u(`lw${s}`,`w_layers.${s}.weight`),u(`lb${s}`,`w_layers.${s}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,n=t.tucker;let i=n.core_shape.slice(),a=e.upload(this.read(`${n.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${n.core}.im`),"tucker.core.im");for(const u of n.factors){const[s,f]=u.shape;if(i[u.mode]!==f)throw new Error(`factor ${u.name} does not match the core`);const h=i.slice();h[u.mode]=s;const g=h.reduce(($,v)=>$*v,1),d=h.slice(u.mode+1).reduce(($,v)=>$*v,1),c=e.storage(g*4,"tucker.re"),p=e.storage(g*4,"tucker.im"),x=e.upload(this.read(`${u.name}.re`),"tucker.f"),y=e.upload(this.read(`${u.name}.im`),"tucker.f"),w=e.uniform([["u",h[0]],["u",h[1]],["u",h[2]],["u",h[3]],["u",h[4]],["u",u.mode],["u",s],["u",f],["u",d],["u",0],["u",g],["u",0]]),m=e.device.createCommandEncoder(),b=m.beginComputePass();e.dispatch(b,this.contractPipeline,[a,o,x,y,c,p,w],g),b.end(),e.device.queue.submit([m.finish()]),e.free(a),e.free(o),e.free(x),e.free(y),a=c,o=p,i=h}e.releaseScratch();const l=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==l.join())throw new Error(`spectral stack is ${i} but ${l} was expected`);this.spectralRe=a,this.spectralIm=o}allocate(e){const{context:t}=this,n=this.patch*this.patch,i=this.width,a=2*this.modes1,o=(u,s)=>t.storage(e*u*n*this.elementBytes,s),l=(u,s)=>t.storage(e*i*u*4,s);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(i,"fno.x"),t1:o(i,"fno.t1"),t2:o(i,"fno.t2"),gates:o(4*i,"fno.gates"),hidden:o(2*i,"fno.hidden"),spectral:o(i,"fno.spectral"),local:o(i,"fno.local"),wide:o(2*i,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:l(this.patch*this.modes2,"fno.xRe"),xIm:l(this.patch*this.modes2,"fno.xIm"),yRe:l(a*this.modes2,"fno.yRe"),yIm:l(a*this.modes2,"fno.yIm"),zRe:l(a*this.modes2,"fno.zRe"),zIm:l(a*this.modes2,"fno.zIm"),wRe:l(this.patch*this.modes2,"fno.wRe"),wIm:l(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,n=this.width,i=2*this.modes1,a=this.inputChannels+5*n+4*n+2*n+2*n+this.outputChannels,o=n*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(a*t*this.elementBytes+o)}encode(e,t){const{context:n,buffers:i,pipelines:a,tables:o}=this,l=this.width,u=this.patch*this.patch,s=2*this.modes1,f=e.beginComputePass(),h=(d,c,p,x,y=256)=>{n.dispatch(f,d,[...c,n.uniform(p)],x,y)},g=(d,c,p=a.instanceNorm)=>{f.setPipeline(p),f.setBindGroup(0,n.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:d}},{binding:1,resource:{buffer:c}}]})),f.dispatchWorkgroups(t*l)};h(a.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*l],["u",1]],t*2*l*u),h(a.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*l],["u",l],["u",0]],t*l*u);for(let d=0;d<this.layers;d++)g(i.x,i.t1),h(a.forwardColumns,[i.t1,o.forwardCos,o.forwardSin,i.xRe,i.xIm],[["u",t],["u",l],["u",0],["u",0]],t*l*this.patch*this.modes2),h(a.rowMix,[i.xRe,i.xIm,o.rowRe,o.rowIm,i.yRe,i.yIm],[["u",t],["u",l],["u",s],["u",this.patch]],t*l*s*this.modes2),h(a.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",l],["u",2*d],["u",0]],t*l*s*this.modes2),h(a.rowMix,[i.zRe,i.zIm,o.inverseRowRe,o.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",l],["u",this.patch],["u",s]],t*l*this.patch*this.modes2),h(a.inverseColumns,[i.wRe,i.wIm,o.inverseColCos,o.inverseColSin,i.t2],[["u",t],["u",l],["u",0],["u",0]],t*l*u),g(i.t2,i.t1,a.instanceNormScaled),h(a.conv1x1,[i.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],i.gates],[["u",t],["u",l],["u",4*l],["u",0]],t*4*l*u),h(a.gate,[i.gates,i.hidden],[["u",t],["u",2*l],["u",0],["u",0]],t*2*l*u),h(a.conv1x1,[i.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],i.spectral],[["u",t],["u",2*l],["u",l],["u",0]],t*l*u),h(a.conv1x1,[i.x,this.weights[`lw${d}`],this.weights[`lb${d}`],i.local],[["u",t],["u",l],["u",l],["u",0]],t*l*u),h(a.residual,[i.spectral,i.local,i.x],[["u",t*l*u],["u",d<this.layers-1?1:0],["u",0],["u",0]],t*l*u);return h(a.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",l],["u",2*l],["u",1]],t*2*l*u),h(a.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*l],["u",this.outputChannels],["u",0]],t*this.outputChannels*u),f.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const un=r=>r.toFixed(6),cn=r=>`${r==="f16"?`enable f16;
`:""}
struct P {
  gridH: u32, gridW: u32, patchSize: u32, channels: u32,
  columnCount: u32, patchCount: u32, readyCount: u32, pad0: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  columnStride: f32, minimumWeight: f32, pad1: f32, pad2: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${r}>;
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
}`,dn=`
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
                      / ${un(Ze)});
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
}`;function fn(r,e){if(!r)return e;if(!e)return r;const t=Math.min(r.y0,e.y0),n=Math.min(r.x0,e.x0);return{y0:t,x0:n,h:Math.max(r.y0+r.h,e.y0+e.h)-t,w:Math.max(r.x0+r.w,e.x0+e.w)-n}}function gn(r,e,t){let n=1/0,i=-1/0;const a=o=>{n=Math.min(n,o),i=Math.max(i,o)};for(let o=0;o<4;o++){const l=r[o],u=r[(o+1)%4];l[1]>=e&&l[1]<=t&&a(l[0]);for(const s of[e,t])if((l[1]-s)*(u[1]-s)<0){const f=(s-l[1])/(u[1]-l[1]);a(l[0]+f*(u[0]-l[0]))}}return n<=i?[n,i]:null}let hn=class{constructor(e,t,n,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new ln(e,t,n,this.batchSize),this.blendPipeline=e.pipeline(cn(this.fno.store)),this.finalizePipeline=e.pipeline(dn),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,n=t.features,i=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,o=n.mddf_source_indices,l=new Uint32Array(o.length*4),u=new Float32Array(o.length*2);o.forEach((f,h)=>{const g=Math.floor(f/i),d=f%i,c=d>a?1:0,p=d===0?0:c?d-a:d;l.set([g*i+p,g*i+(p===0?0:a+p),p,c],h*4),u[h*2]=n.mddf_center[h],u[h*2+1]=n.mddf_scale[h]});const s=t.coordinates;return{channels:t.model.input_channels,mddfChannels:o.length,solidChannel:n.use_building_input?o.length:-1,coordChannel:o.length+(n.use_building_input?1:0),coordYScale:s.y_scale,coordZCentre:s.z_center,coordZScale:s.z_scale,coordXCentre:s.x_center,coordXScale:s.x_scale,tableBuffer:e.upload(l,"plan.table"),normBuffer:e.upload(u,"plan.norm")}}setCity(e,t,n){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),a=(t+2*i)*(n+2*i)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(a>o)throw new Error(`city ${n} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const l=new nn(this.context,e,t,n,i,this.fno.store);return this.city={field:l,ny:t,nx:n,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:l.gy,gx:l.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:n}=this.city,i=(t-1)/2,a=(n-1)/2,o=Math.cos(e),l=Math.sin(e),u=[[0,0],[n-1,0],[n-1,t-1],[0,t-1]].map(([m,b])=>{const $=m-a,v=b-i;return[a+$*o+v*l,i-$*l+v*o]}),s=Math.floor(Math.min(...u.map(m=>m[1]))),f=Math.ceil(Math.max(...u.map(m=>m[1]))),h=Math.floor(Math.min(...u.map(m=>m[0]))),g=Math.ceil(Math.max(...u.map(m=>m[0]))),d=g-h+1,c=Math.max(1,Math.ceil((d-this.patch)/this.stride)+1),p=c>1?(d-this.patch)/(c-1):0,x=u.map(([m,b])=>[b,m]),y=[],w=[];for(let m=0;m<c;m++){const b=Math.round(h+m*p),$=gn(x,b,b+this.patch-1)||[s,s+this.patch-1],v=Math.floor($[0]),k=Math.max(this.patch,Math.ceil($[1])-v+1),B=Math.max(1,Math.ceil((k-this.patch)/this.stride)+1),P=B>1?(k-this.patch)/(B-1):0;w.push([y.length/2,B,b-h]);for(let M=0;M<B;M++)y.push(b,Math.round(v+M*P))}return{origins:new Float32Array(y),columns:w,columnCount:c,columnStride:p,syMin:s,sxMin:h,gridH:f-s+1,gridW:g-h+1,patchCount:y.length/2}}patchRect(e,t,n){let i=1/0,a=1/0,o=-1/0,l=-1/0;for(const[u,s,f]of e.columns)for(let h=0;h<s;h++){const g=u+h;if(g<t||g>=n)continue;const d=e.origins[g*2+1]-e.syMin;i=Math.min(i,d),a=Math.min(a,f),o=Math.max(o,d+this.patch),l=Math.max(l,f+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),a=Math.max(0,a),o=Math.min(e.gridH,o),l=Math.min(e.gridW,l),{y0:i,x0:a,h:Math.max(0,o-i),w:Math.max(0,l-a)}):null}async predict(e,t={}){var oe,te,ae;const{context:n,city:i}=this,a=this.tiling(e),o=this.metadata.model.output_channels,l=a.gridH*a.gridW,u=this.patch*this.patch,s=performance.now(),f=!!(t.shouldDraw&&t.onDraw),h=o+2,g=n.storage(a.patchCount*o*u*this.fno.elementBytes,"predict.patches"),d=new Int32Array(a.patchCount);for(let T=0;T<a.patchCount;T++)d[T]=a.origins[T*2+1]-a.syMin;const c=n.upload(d,"blend.origins"),p=n.upload(new Int32Array(a.columns.flat()),"blend.columns"),x=n.storage(l*o*4,"blend.field"),y=n.storage(l*4,"blend.weight"),w=n.storage(l*4,"blend.solid"),m=n.storage(f?l*4:4,"blend.finalWeight"),b=n.storage(f?l*h*4:4,"blend.packed"),$=this.metadata.target,v=n.upload(new Float32Array($.center),"final.centre"),k=n.upload(new Float32Array($.scale),"final.scale"),B={y0:0,x0:0,h:a.gridH,w:a.gridW},P=(T,L,Q,se)=>{const ce=T.beginComputePass();n.dispatch(ce,this.blendPipeline,[g,c,p,x,se,n.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",o],["u",a.columnCount],["u",a.patchCount],["u",Q],["u",0],["u",L.y0],["u",L.x0],["u",L.h],["u",L.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],L.h*L.w),ce.end()},M=(T,L,Q)=>{const se=T.beginComputePass();n.dispatch(se,this.finalizePipeline,[x,y,v,k,i.field.heightBuffer,w,m,b,n.uniform([["u",a.gridH],["u",a.gridW],["u",o],["u",Q?1:0],["u",L.y0],["u",L.x0],["u",L.h],["u",L.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],L.h*L.w),se.end()};if(f){const T=n.device.createCommandEncoder();P(T,B,a.patchCount,m),n.device.queue.submit([T.finish()]),(oe=t.onStart)==null||oe.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const A=2,R=[];let D=null;for(let T=0;T<a.patchCount;T+=this.batchSize){(te=t.signal)==null||te.throwIfAborted();const L=Math.min(this.batchSize,a.patchCount-T),Q=n.device.createCommandEncoder(),se=i.field.assemble(Q,a.origins.subarray(T*2,(T+L)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),ce=this.fno.encode(Q,L);Q.copyBufferToBuffer(ce,0,g,T*o*u*this.fno.elementBytes,L*o*u*this.fno.elementBytes);let ee=null;if(f){D=fn(D,this.patchRect(a,T,T+L));const we=T+L>=a.patchCount;D&&D.h>0&&D.w>0&&(we||t.shouldDraw())&&(ee=D,D=null,P(Q,ee,T+L,y),M(Q,ee,!0))}if(n.device.queue.submit([Q.finish()]),n.free(se),R.push(n.device.queue.onSubmittedWorkDone()),R.length>A&&await R.shift(),(ae=t.onProgress)==null||ae.call(t,(T+L)/a.patchCount),ee){const we=await n.readFloat32(b,ee.h*ee.w*h);t.onDraw({x0:ee.x0,y0:ee.y0,width:ee.w,height:ee.h,stride:h,channels:o,theta:e,values:we,readyCount:T+L,patchCount:a.patchCount})}}const S=n.device.createCommandEncoder();P(S,B,a.patchCount,y),M(S,B,!1),n.device.queue.submit([S.finish()]);const[C,I,z]=await Promise.all([n.readFloat32(x,l*o),n.readFloat32(w,l),n.readFloat32(y,l)]),H=performance.now()-s;let q=0,X=0;for(let T=0;T<l;T++)if(I[T]!==2){if(z[T]<=1e-6){q+=1;continue}for(let L=0;L<o;L++)if(!Number.isFinite(C[T*o+L])){X+=1;break}}for(const T of[g,x,y,w,c,p,v,k,m,b])n.free(T);return n.releaseScratch(),{values:C,solid:I,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:$.channel_names,milliseconds:H,uncovered:q,nonFinite:X,insideCells:l}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}};function pn(r,e){var t,n,i,a,o,l,u,s,f;if(r.dtype!=="float16"||r.total_bytes!==e||((t=r.grid)==null?void 0:t.horizontal_spacing_m)!==4||((n=r.grid)==null?void 0:n.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=r.model)==null?void 0:i.input_channels)!==24||((a=r.model)==null?void 0:a.output_channels)!==5||((l=(o=r.inference)==null?void 0:o.patch)==null?void 0:l.join())!=="64,64"||((s=(u=r.target)==null?void 0:u.channel_names)==null?void 0:s.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const h of Object.values(r.tensors??{}))if(!Number.isInteger(h.offset)||h.offset<0||h.offset%2||!Number.isInteger(h.count)||h.count<=0||h.offset+h.count*2>e||!Array.isArray(h.shape)||h.shape.some(g=>!Number.isInteger(g)||g<1)||h.shape.reduce((g,d)=>g*d,1)!==h.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(r.tensors??{}).length||!Number.isFinite((f=r.wind)==null?void 0:f.reference_speed_m_s)||r.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function mn(r){if(!Number.isInteger(r.width)||!Number.isInteger(r.height)||r.width<1||r.height<1||r.values.length!==r.width*r.height*5||r.solid.length!==r.width*r.height)throw new Error("Invalid prediction shape.");for(let e=0;e<r.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(r.values[e*5+t])||(r.solid[e]=2,r.values[e*5+t]=0)}const yn=16,wn=4;function xn(){let r=null,e=null,t=[];async function n(u){if(r)return;const s="/cityffdv2-demo/flume/model-v2/",[f,h]=await Promise.all(["metadata.json","weights.bin"].map(async g=>{const d=await fetch(s+g,{signal:u});if(!d.ok)throw new Error("Could not load model v2 "+g+" (HTTP "+d.status+").");return g.endsWith(".bin")?d.arrayBuffer():d.json()}));r=await si.create(),e=f,t=[0,1].map(()=>({predictor:new li(r,e,h,{batchSize:yn,layerStride:1}),grid:null,key:""}))}async function i(u,s,f,h){const g=f.join(",");(s!==u.grid||g!==u.key)&&(u.predictor.setCity({layers:s.layers,nx:s.nx,ny:s.ny},f),u.grid=s,u.key=g);const{nx:d,ny:c}=s,p=[[-.5,-.5],[d-.5,-.5],[d-.5,c-.5],[-.5,c-.5]];return u.predictor.predict(null,null,h,{polygon:p,overlap:e.inference.overlap})}function a(u,s,f){const h=s.gx*s.gy,g=new Float32Array(h*5),d=new Uint8Array(h),c=f-s.firstLayer;for(let x=0;x<s.gy;x++)for(let y=0;y<s.gx;y++){const w=((x*s.gz+c)*s.gx+y)*wn,m=x*s.gx+y;g[m*5]=s.values[w],g[m*5+1]=s.values[w+1],g[m*5+2]=s.values[w+2],d[m]=s.values[w+3]>0?0:2}const p={width:s.gx,height:s.gy,originX:s.layout.gridX0,values:g,solid:d};Mt(u,u.plan.indexOf(f),p)}async function o(u,s,f,{signal:h,onFirstWave:g,onMoreLayers:d}={}){await n(h),ai(s[0],s.at(-1));const c=vt(s).slice(0,_t),p=s.filter(b=>c.includes(b)),x=s.filter(b=>!c.includes(b)),y=await i(t[0],u,p,f);if(!y)return null;const w=$t({width:y.gx,height:y.gy,originX:y.layout.gridX0,originY:y.layout.gridY0,theta:f},s,!1);for(const b of p)a(w,y,b);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(g==null||g({volume:w,referenceSpeed:m}),x.length){const b=await i(t[1],u,x,f);if(!b)return null;for(const $ of x)a(w,b,$);d==null||d()}return w}async function l(u,s,f){await n(f);const{predictor:h}=t[0],g=h.inputPlan.stored,d=Math.ceil(h.patch*Math.SQRT2),c=new ni(r,u,d,h.fno.store,h.inputPlan),p=c.gx*c.gy*g.length*4;let x=null;c.packGroup=async()=>{x=await r.readBack(p,(m,b)=>m.copyBufferToBuffer(c.sumsBuffer,0,b,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(b=>b/oi))};try{const m=c.planGroups([s],h.bufferLimit);c.allocate(m),await c.scan(m[0],()=>{})}finally{c.destroy()}if(!x)throw new Error("Model v2 MDDF could not be read.");const y=g.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:x,ny:c.gy,nx:c.gx,margin:d,layerIndex:s,channels:y,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:o,readMddf:l,cancel(){for(const u of t)u.predictor.cancel()},destroy(){for(const u of t)u.predictor.destroy();r==null||r.device.destroy(),t=[],r=null}}}const Ae=Object.freeze({TIMEOUT:"timeout",DOWNLOAD:"download",GPU:"gpu",INPUT:"input",MODEL:"model",TOO_LARGE:"too-large"});class Re extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const le=()=>new Re(Ae.MODEL,"the model data does not match this page"),U=256;class Ct{constructor(e,t){this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[]}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Re(Ae.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");let t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(t||(await new Promise(a=>setTimeout(a,1e3)),t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})),!t)throw new Re(Ae.GPU,"No WebGPU adapter available.");const n=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:n?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Ct(i,n)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t){const n=Math.max(4,Math.ceil(e/4)*4),i=this.device.createBuffer({size:n,usage:t});return i.tracked=!0,i}storage(e){const t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e){const t=this.storage(e.byteLength);return this.write(t,e),t}write(e,t){if(t.byteLength%4){const n=new Uint8Array(Math.ceil(t.byteLength/4)*4);n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,n)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,n=new ArrayBuffer(t),i=new Uint32Array(n),a=new Int32Array(n),o=new Float32Array(n);e.forEach(([u,s],f)=>{u==="u"?i[f]=s:u==="i"?a[f]=s:o[f]=s});const l=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(l,0,n),l}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),n=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,n)}return this.pipelines.get(e)}dispatch(e,t,n,i,a=U){this.dispatchGroups(e,t,n,...this.workgroups(i,a))}workgroups(e,t=U){const n=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(n,i),Math.ceil(n/i)]}dispatchGroups(e,t,n,...i){this.replay(e,this.prepared(t,n,i))}prepared(e,t,n){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((a,o)=>({binding:o,resource:{buffer:a}}))});return{pipeline:e,bindGroup:i,groups:n}}replay(e,{pipeline:t,bindGroup:n,groups:i}){e.setPipeline(t),e.setBindGroup(0,n),e.dispatchWorkgroups(...i)}async readBack(e,t,n){const i=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ),a=this.device.createCommandEncoder();t(a,i),this.device.queue.submit([a.finish()]);try{await i.mapAsync(GPUMapMode.READ);const o=await n(i.getMappedRange());return i.unmap(),o}finally{this.free(i)}}}const dt=4,Ee=1.5;function br(r,e,t){const n=(e-1)/2,i=(t-1)/2,a=Math.cos(r),o=Math.sin(r);return{theta:r,cX:n,cY:i,cos:a,sin:o,toWind:([l,u])=>{const s=l-n,f=u-i;return[n+s*a+f*o,i-s*o+f*a]},toCity:([l,u])=>{const s=l-n,f=u-i;return[n+s*a-f*o,i+s*o+f*a]}}}const J=64,K=180,vr=1600,bn=640,pe=8,N=32,ye=r=>r.toFixed(6),me=r=>{const e=Math.fround(r);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},vn=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,_n=()=>`
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
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${ye(Ee)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${ye(Ee)}, has1);
  let cutoff = ${ye(vr)};
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
}`;function $n(r){const e=n=>n.part==="dc"?"dc":`${n.part}.${n.mode===1?"x":"y"}`,t=r.map((n,i)=>`  sums[e + ${i}u] += ${e(n)};`).join(`
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
  let e = (k * u.pixels + pixel) * ${r.length}u;
${t}
}`}const _e=64,re=8,Be=_e/re,ne=Be*Be,ft=re*re,qt=Math.log2(_e),Kt=Math.log2(re),Ne=re-1,Bt="15u",gt="4u",_r="0xfffu",ht="2048",Mn="4095",Pt="16u",Zt=(r,e,t,n,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${r.length}> = array<f32, ${r.length}>(${e.map(me).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${r.length}u + c] / ${ye(K)} / STEPS[c]));
}
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${J}u;
  if (g >= u.nTiles * ${ne}u) { return; }
  let t = g / ${ne}u;
  let b = g % ${ne}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${n}u;
  let c = (t / ${t*n}u) % ${r.length}u;
  let k = t / ${t*n*r.length}u;
${i?`  let h = field[u.nTiles + t * ${ne}u + b];
  let w = h & ${Bt};
  if (w == 0u) { return; }
  let base = i32((h >> ${gt}) & ${_r}) - ${ht};
  var wi = field[t] + (h >> ${Pt});
  let x0 = tx * ${_e}u + (b % ${Be}u) * ${re}u;
  let y0 = ty * ${_e}u + (b / ${Be}u) * ${re}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${ft}u; j++) {
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
  for (var j = 0u; j < ${ft}u; j++) {
    let x = x0 + j % ${re}u; let y = y0 + j / ${re}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ne}u + b] = w | (u32(clamp(mn + ${ht}, 0, ${Mn})) << ${gt});`}
}`,kn=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${J})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${J}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${ne}u; b++) {
    let h = headers[t * ${ne}u + b];
    headers[t * ${ne}u + b] = h | (local << ${Pt});
    local += ${ft/32}u * (h & ${Bt});
  }
  tileWords[t] = local;
}`,Sn=r=>{const e=`array<f32, ${pe}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${vn}
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
  let first = layerGroup * ${pe}u;
  let count = min(${pe}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${pe}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${ye(Ee)};
  }
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${ye(dt)};
    let gyr = u.sinU / ${ye(dt)};
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
    let cutoff = ${ye(vr)};
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
    for (var step = 0u; step < ${bn}u; step++) {
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
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${r.length}u;
${r.map((n,i)=>`    put(e0 + ${i}u, ${t[n]});`).join(`
`)}
  }
}`},Cn=(r,e,t)=>{const n=e.stored.length,i=e.up.length,{usesHeight:a}=e,o=[["field","array<u32>"]];a&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),i&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const l=o.map(([f,h],g)=>`@group(0) @binding(${g}) var<storage, read> ${f}: ${h};`);l.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${r}>;`),l.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const u=(f,h)=>`(${f} - ${me(h.center)}) / ${me(h.scale)}`,s=e.inputs.map((f,h)=>{let g;if(f.source==="r1")if(f.part==="dc")g=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(f.signal,"dc",0)}u)`,f)};`;else{const d=e.storedIndex(f.signal,"re",f.mode),c=e.storedIndex(f.signal,"im",f.mode);g=`let re = sampleField(ry, rx, slot, ${d}u);
      let im = sampleField(ry, rx, slot, ${c}u);
      let angle = ${me(f.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(f.part==="im"?"(re * s + im * c)":"(re * c - im * s)",f)};`}else if(f.source==="geo"){const d=f.index===0?"h / 100.0":"asinh((h - z) / 10.0)";g=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${d})`,f)};`}else f.source==="up"?g=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(f.index)}u)`,f)};`:f.source==="solid"?g=`let roofLayer = round(roofHeight(iy, ix) / ${ye(Ee)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:f.axis==="y"?g=`value = (sy - u.centreY) / ${me(f.scale)};`:f.axis==="z"?g=`value = (f32(layer) - ${me(f.center)}) / ${me(f.scale)};`:g=`value = (sx - ${me(f.center)}) / ${me(f.scale)};`;return`    case ${h}u: {
      ${g}
    }`});return`${r==="f16"?`enable f16;
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
var<private> STEPS: array<f32, ${n}> = array<f32, ${n}>(${t.steps.map(me).join(", ")});
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${n}u + c) * ${t.ty}u + (y >> ${qt}u)) * ${t.tx}u + (x >> ${qt}u);
  let h = field[u.packTiles + t * ${ne}u + ((y >> ${Kt}u) & ${Ne}u) * ${Be}u + ((x >> ${Kt}u) & ${Ne}u)];
  let w = h & ${Bt};
  var q = i32((h >> ${gt}) & ${_r}) - ${ht};
  if (w > 0u) {
    let bit = (((y & ${Ne}u) * ${re}u) + (x & ${Ne}u)) * w;
    let word = field[t] + (h >> ${Pt}) + (bit >> 5u);
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
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
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
  let z = (f32(layer) + 0.5) * ${ye(Ee)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${s.join(`
`)}
    default: {}
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`},Bn=4,Pn=3,In=.016,An=256;class $r{constructor(e,{layers:t,ny:n,nx:i},a,o,l){this.context=e,this.inputPlan=l,this.ny=n,this.nx=i,this.margin=a,this.gy=n+2*a,this.gx=i+2*a;const u=new Float32Array(this.gy*this.gx);for(let c=0;c<n;c++)for(let p=0;p<i;p++)u[(c+a)*this.gx+p+a]=t[c*i+p]*Ee;this.heightBuffer=e.upload(u);const s=new Float32Array(K),f=new Float32Array(K);for(let c=0;c<K;c++)s[c]=Math.cos(2*Math.PI*c/K),f[c]=Math.sin(2*Math.PI*c/K);this.cosT=s,this.sinT=f,this.scanPipeline=e.pipeline(_n()),this.accumulatePipeline=e.pipeline($n(l.stored)),this.upWind=l.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(Sn(l.up)));const h=l.stored.map(c=>2*In*c.scale),g=Math.ceil(this.gx/_e),d=Math.ceil(this.gy/_e);this.packed={steps:h,tx:g,ty:d},this.packHeaderPipeline=e.pipeline(Zt(l.stored,h,g,d,!1)),this.packPayloadPipeline=e.pipeline(Zt(l.stored,h,g,d,!0)),this.packTilePipeline=e.pipeline(kn()),this.assemblePipeline=e.pipeline(Cn(o,l,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.scanRawBytes=48<<20,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const n=this.gx*this.gy,i=this.storedBytesPerCellLayer*n;let a=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(a=Math.min(a,Bn),i>t)throw new Re(Ae.TOO_LARGE,"the city is too large for this graphics card");const o=[];for(let l=0;l<e.length;l+=a){const u=e.slice(l,l+a),s=new Int32Array(An).fill(-1);u.forEach((f,h)=>{s[f]=h}),o.push({layers:u,slots:s,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const n of e)n.slotBuffer=t.upload(n.slots),n.layerBuffer=t.upload(new Uint32Array(n.layers));this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,n=Math.max(e,t),i=new Int32Array(K*n),a=new ArrayBuffer(K*32),o=new Uint32Array(a),l=new Int32Array(a),u=new Float32Array(a),s=new Float32Array(K*4);let f=0;for(let h=0;h<K;h++){const g=this.cosT[h],d=this.sinT[h],c=Math.abs(g)>=Math.abs(d),p=c?g:d,x=c?d:g,y=Math.abs(x/p),w=c?e:t,m=c?t:e;for(let v=0;v<w;v++)i[h*n+v]=Math.round(y*v);const b=i[h*n+w-1],$=m+b;f=Math.max(f,$),o[8*h]=c?1:0,l[8*h+1]=p>=0?1:-1,l[8*h+2]=x>=0?1:-1,l[8*h+3]=b,o[8*h+4]=$,o[8*h+5]=h*n,u[8*h+6]=dt*Math.sqrt(1+y*y),s.set([g,d,Math.cos(4*Math.PI*h/K),Math.sin(4*Math.PI*h/K)],4*h)}return this.offsetBuffer=this.context.upload(i),this.tableBuffer=this.context.upload(o),this.trigBuffer=this.context.upload(s),this.scanInfo={lineMax:f},this.scanInfo}async scan(e){if(this.destroyed)return;const{context:t,gx:n,gy:i}=this,{lineMax:a}=this.scanTables(),o=n*i,l=this.inputPlan.stored.length,u=e.layers.length,s=Math.ceil(u/2),f=Math.max(1,Math.min(K,Math.floor(this.scanRawBytes/(s*o*4)))),h=f*s*o*4,g=u*o*l*4;(!this.scanRaw||this.scanRaw.size<h)&&(t.free(this.scanRaw),this.scanRaw=t.storage(h)),(!this.sumsBuffer||this.sumsBuffer.size<g)&&(t.free(this.sumsBuffer),this.sumsBuffer=t.storage(g));const d=t.device.createCommandEncoder();d.clearBuffer(this.sumsBuffer,0,u*o*l*4),t.device.queue.submit([d.finish()]);const c=[];for(let p=0;p<K;p+=f){if(this.destroyed)return;const x=Math.min(f,K-p),y=t.device.createCommandEncoder(),w=y.beginComputePass(),m=t.uniform([["u",n],["u",i],["u",o],["u",0],["u",u],["u",s],["u",p],["u",x],["u",a],["u",0],["u",0],["u",0]]);t.dispatch(w,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],a*s*x,J);const b=t.uniform([["u",o],["u",u],["u",s],["u",p],["u",x],["u",0],["u",0],["u",0]]);t.dispatch(w,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,b],o*u,J),w.end(),t.device.queue.submit([y.finish()]),c.push(t.device.queue.onSubmittedWorkDone()),c.length>=Pn&&await c.shift()}this.destroyed||(await this.packGroup(e,u,o),!this.destroyed&&(await t.device.queue.onSubmittedWorkDone(),!this.destroyed&&(t.free(this.scanRaw),this.scanRaw=null,t.free(this.sumsBuffer),this.sumsBuffer=null,t.releaseScratch())))}async packGroup(e,t,n){const{context:i,gx:a,gy:o}=this,{tx:l,ty:u}=this.packed,s=t*this.inputPlan.stored.length*l*u,f=i.storage(s*ne*4),h=i.storage(s*4),g=i.uniform([["u",a],["u",o],["u",n],["u",t],["u",s],["u",0],["u",0],["u",0]]),d=i.uniform([["u",s],["u",0],["u",0],["u",0]]),c=()=>{i.free(f),i.free(h)},p=(v,k)=>{const B=v.beginComputePass();i.dispatch(B,this.packHeaderPipeline,[this.sumsBuffer,f,g],s*ne,J),i.dispatch(B,this.packTilePipeline,[f,h,d],s,J),B.end(),v.copyBufferToBuffer(h,0,k,0,s*4)};let x;try{x=await i.readBack(s*4,p,v=>this.destroyed?null:new Uint32Array(v.slice(0)))}catch(v){throw c(),v}if(!x){c();return}const y=new Uint32Array(s);let w=s+s*ne;for(let v=0;v<s;v++)y[v]=w,w+=x[v];i.free(e.field),e.field=i.storage(Math.max(4,w*4)),e.packTiles=s,i.write(e.field,y);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(f,0,e.field,s*4,s*ne*4);const b=m.beginComputePass(),$=i.uniform([["u",a],["u",o],["u",n],["u",t],["u",s],["u",0],["u",0],["u",0]]);i.dispatch(b,this.packPayloadPipeline,[this.sumsBuffer,e.field,$],s*ne,J),b.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),c()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const n=t/(2*Math.PI)*K,i=Math.round(n)%K;return Math.abs(n-Math.round(n))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const n=br(e,this.nx,this.ny);let i=1/0,a=-1/0,o=1/0,l=-1/0;for(const g of[-.5,this.nx-.5])for(const d of[-.5,this.ny-.5]){const[c,p]=n.toWind([g,d]);i=Math.min(i,c),a=Math.max(a,c),o=Math.min(o,p),l=Math.max(l,p)}const u=Math.floor((i-t)/N)*N,s=Math.floor((o-t)/N)*N,f=Math.ceil((a+t+1-u)/N),h=Math.ceil((l+t+1-s)/N);return{theta:e,x0:u,y0:s,tw:f,th:h,table:new Int32Array(f*h).fill(-1),count:0}}ensureUpTiles(e,t,n,i){const{context:a}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,i));const l=[];for(const[m,b]of n){const $=Math.floor((b-o.x0)/N),v=Math.floor((b+i-1-o.x0)/N),k=Math.floor((m-o.y0)/N),B=Math.floor((m+i-1-o.y0)/N);if($<0||k<0||v>=o.tw||B>=o.th)throw new Error("internal layout error");for(let P=k;P<=B;P++)for(let M=$;M<=v;M++){const A=P*o.tw+M;o.table[A]<0&&(o.table[A]=o.count+l.length/3,l.push(M,P,o.table[A]))}}const u=l.length/3;if(!u)return 0;const s=o.count,f=s+u,h=this.inputPlan.up.length,g=N*N,d=a.device.createCommandEncoder(),c=[];for(const m of e){const b=m.layers.length*g*h*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<f){const $=Math.min(o.tw*o.th,Math.max(f,Math.ceil(m.upCapacity*1.5))),v=a.storage($*b);m.upTiles&&m.upCount&&d.copyBufferToBuffer(m.upTiles,0,v,0,m.upCount*b),m.upTiles&&c.push(m.upTiles),m.upTiles=v,m.upCapacity=$}m.upGrid=o,d.clearBuffer(m.upTiles,s*b,u*b),m.upCount=f}const p=a.upload(new Int32Array(l)),[x,y]=this.upwindDirection(t),w=d.beginComputePass();for(const m of e){const b=[this.heightBuffer,m.layerBuffer,m.upTiles,p];a.dispatch(w,this.alongPipeline,[...b,a.uniform([["u",this.gx],["u",this.gy],["u",u],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",x],["f",y],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*g*Math.ceil(m.layers.length/pe),J)}w.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(a.free(this.upTableBuffer),this.upTableBuffer=a.storage(o.table.byteLength)),a.write(this.upTableBuffer,o.table),a.device.queue.submit([d.finish()]);for(const m of c)a.free(m);return a.free(p),o.count=f,u}assemble(e,t,n,i,a,o){var x,y,w,m;const{context:l,inputPlan:u,gx:s,gy:f}=this,h=t.length/3,g=l.upload(t),d=l.uniform([["u",h],["u",u.inputs.length],["u",a],["u",a],["u",s],["u",f],["u",0],["u",0],["u",s],["u",f],["u",s*f],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",n.packTiles],["f",0],["f",0],["i",((x=this.upGrid)==null?void 0:x.x0)??0],["i",((y=this.upGrid)==null?void 0:y.y0)??0],["u",((w=this.upGrid)==null?void 0:w.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",n.layers.length],["u",0],["u",0],["u",0]]),c=[n.field];if(u.usesHeight&&c.push(this.heightBuffer),c.push(g,n.slotBuffer),u.up.length){if(n.upGrid!==this.upGrid)throw new Error("internal layout error");c.push(n.upTiles,this.upTableBuffer)}c.push(o,d);const p=e.beginComputePass();return l.dispatch(p,this.assemblePipeline,c,h*u.inputs.length*a*a),p.end(),g}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function Rn(r){const e=r.inputs;if(!e||e.length!==r.model.input_channels)throw le();const t=[],n=(u,s,f)=>t.findIndex(h=>h.key===`${u}:${s}:${f}`),i=(u,s,f)=>{n(u.signal,s,f)>=0||t.push({key:`${u.signal}:${s}:${f}`,signal:u.signal,part:s,mode:f,scale:u.scale})},a=[];for(const u of e){if(u.source==="r1")u.part==="dc"?i(u,"dc",0):(i(u,"re",u.mode),i(u,"im",u.mode));else if(u.source==="up")a.includes(u.index)||a.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw le();if(u.source==="geo"&&![0,1].includes(u.index)||u.source==="up"&&!(u.index>=0&&u.index<4))throw le()}for(const u of t)if(u.mode>2)throw le();const o=[...new Set(t.map(u=>u.signal))].sort();if(o.length!==1||o[0]!==0)throw le();const l=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:n,up:a,usesHeight:l}}function pt(r){const e=Math.round(r);return Math.abs(r%1)===.5&&e%2!==0?e-1:e}let Me=null;function Tn(){if(Me)return Me;Me=new Float32Array(65536);for(let r=0;r<65536;r++){const e=r&32768?-1:1,t=r>>10&31,n=r&1023;t===0?Me[r]=e*n*2**-24:t===31?Me[r]=n?NaN:e*(1/0):Me[r]=e*(1+n/1024)*2**(t-15)}return Me}function Fn(r){const e=new Float32Array(r.length),t=Tn();for(let n=0;n<r.length;n++)e[n]=t[r[n]];return e}function En(r){const e=new Uint16Array(r.length),t=new Float32Array(1),n=new Uint32Array(t.buffer);for(let i=0;i<r.length;i++){t[0]=r[i];const a=n[0],o=a>>>16&32768,l=a>>>23&255;let u=a&8388607;if(l===255){e[i]=o|31744|(u?1:0);continue}const s=l-127+15;if(s>=31){e[i]=o|31744;continue}if(s<=0){if(s<-10){e[i]=o;continue}u|=8388608;const h=14-s;let g=u>>>h;u>>>h-1&1&&(g+=1),e[i]=o|g;continue}let f=s<<10|u>>>13;u&4096&&(f+=1),e[i]=o|f}return e}const It=`
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
`,Ln=`
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
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
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
}`;function Qt(r,e,t){const{enable:n,load:i,save:a}=Le(r);return`${n}
@group(0) @binding(0) var<storage, read> X: array<${r}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${r}>;
var<workgroup> partial: array<f32, ${U}>;
@compute @workgroup_size(${U})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${U}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${U/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();
  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${U}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${U/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${U}u) {
    Y[base + i] = ${a("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const mt=32,Jt=1e-5,je=16;function Le(r){return{enable:r==="f16"?`enable f16;
`:"",load:e=>r==="f16"?`f32(${e})`:e,save:e=>r==="f16"?`f16(${e})`:e}}function Dn(r){const{store:e,patch:t}=r,n=t*t,{enable:i,load:a,save:o}=Le(e);return`${i}${It}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${je}u;
var<workgroup> w: array<f32, ${je*r.cinMax}>;
@compute @workgroup_size(${U})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${n/U}u;
  if (wg >= u.batch * perSample) { return; }
  let b = wg / perSample;
  let ob = (wg % perSample) / ${n/U}u;
  let p = (wg % ${n/U}u) * ${U}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${U}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${a("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${je}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${a("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${n}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${a("X[xBase + i * "+n+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${n}u + p] = ${o("v")};
  }
}`}function zn(r){const{store:e,patch:t}=r,n=t*t,{enable:i,load:a,save:o}=Le(e);return`${i}${It}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
  if (g >= u.batch * u.mid * ${n}u) { return; }
  let p = g % ${n}u;
  let m = (g / ${n}u) % u.mid;
  let b = g / (${n}u * u.mid);
  let value = ${a("G[(b * 2u * u.mid + m) * "+n+"u + p]")};
  let gateValue = ${a("G[(b * 2u * u.mid + u.mid + m) * "+n+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function On(r){const{store:e,patch:t,modes2:n}=r,i=t*t,{enable:a,load:o}=Le(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
  if (g >= u.batch * u.channels * ${t*n}u) { return; }
  let k = g % ${n}u;
  let y = (g / ${n}u) % ${t}u;
  let bc = g / ${t*n}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${i}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${o("X[base + x]")};
    accRe += v * tableCos[x * ${n}u + k];
    accIm += v * tableSin[x * ${n}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Vn(r){const{modes2:e}=r;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
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
}`}function Xn(r){const{modes1:e,modes2:t}=r,n=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
  let block = ${n*t}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${t}u;
  let s = (g / ${t}u) % ${n}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${e}u);
  let sp = s - half * ${e}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${e*t}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${t}u + k;
  let xBase = (b * u.channels * ${n}u + s) * ${t}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Un(r){const{store:e,patch:t,modes2:n}=r,i=t*t,{enable:a,save:o}=Le(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
  if (g >= u.batch * u.channels * ${i}u) { return; }
  let p = g % ${i}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${i}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${n}u;
  for (var k = 0u; k < ${n}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${o("acc * "+1/mt)};
}`}function Yn(r){const{store:e}=r,{enable:t,load:n,save:i}=Le(e);return`${t}${It}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
  if (g >= u.total) { return; }
  var acc = ${n("A[g]")} + ${n("B[g]")} + ${n("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function Nn(r){const{store:e,patch:t}=r,n=t*t;return{conv1x1:Dn(r),gate:zn(r),instanceNorm:Qt(e,n,Jt),instanceNormScaled:Qt(e,n,Jt/(mt*mt)),forwardColumns:On(r),rowMix:Vn(r),spectralMix:Xn(r),inverseColumns:Un(r),residual:Yn(r)}}function Hn(r,e,t){const n=2*e,i=[];for(let d=0;d<e;d++)i.push(d);for(let d=r-e;d<r;d++)i.push(d);const a=new Float32Array(r*t),o=new Float32Array(r*t);for(let d=0;d<r;d++)for(let c=0;c<t;c++){const p=2*Math.PI*d*c/r;a[d*t+c]=Math.cos(p),o[d*t+c]=-Math.sin(p)}const l=new Float32Array(n*r),u=new Float32Array(n*r);for(let d=0;d<n;d++)for(let c=0;c<r;c++){const p=2*Math.PI*i[d]*c/r;l[d*r+c]=Math.cos(p),u[d*r+c]=-Math.sin(p)}const s=new Float32Array(r*n),f=new Float32Array(r*n);for(let d=0;d<r;d++)for(let c=0;c<n;c++){const p=2*Math.PI*i[c]*d/r;s[d*n+c]=Math.cos(p)/r,f[d*n+c]=Math.sin(p)/r}const h=new Float32Array(t*r),g=new Float32Array(t*r);for(let d=0;d<t;d++){const c=(d===0?1:2)/r;for(let p=0;p<r;p++){const x=2*Math.PI*d*p/r;h[d*r+p]=c*Math.cos(x),g[d*r+p]=-c*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:l,rowIm:u,inverseRowRe:s,inverseRowIm:f,inverseColCos:h,inverseColSin:g}}function Wn(r,e,t){const n=r.tensors[t];if(!n)throw le();return Fn(new Uint16Array(e,n.offset,n.count))}class jn{constructor(e,t,n,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.depth=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1]||this.patch*this.patch%U)throw le();const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[s,f]of Object.entries(Nn(o)))this.pipelines[s]=e.pipeline(f);this.contractPipeline=e.pipeline(Ln);const l=s=>Wn(t,n,s);this.tables={};for(const[s,f]of Object.entries(Hn(this.patch,this.modes1,this.modes2)))this.tables[s]=e.upload(f);this.weights={};const u=(s,f)=>{const h=l(f);this.weights[s]=this.store==="f16"?e.upload(En(h)):e.upload(h)};u("p1w","a.m1.weight"),u("p1b","a.m1.bias"),u("p2w","a.m2.weight"),u("p2b","a.m2.bias"),u("q1w","b.m1.weight"),u("q1b","b.m1.bias"),u("q2w","b.m2.weight"),u("q2b","b.m2.bias");for(let s=0;s<this.depth;s++)u(`m1w${s}`,`c.${s}.m1.weight`),u(`m1b${s}`,`c.${s}.m1.bias`),u(`m2w${s}`,`c.${s}.m2.weight`),u(`m2b${s}`,`c.${s}.m2.bias`),u(`lw${s}`,`d.${s}.weight`),u(`lb${s}`,`d.${s}.bias`);this.buildSpectralWeights(l),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:n}=this,i=n.factored;let a=i.core_shape.slice(),o=t.upload(e(`${i.core}.re`)),l=t.upload(e(`${i.core}.im`));for(const s of i.factors){const[f,h]=s.shape;if(a[s.mode]!==h)throw le();const g=a.slice();g[s.mode]=f;const d=g.reduce((v,k)=>v*k,1),c=g.slice(s.mode+1).reduce((v,k)=>v*k,1),p=t.storage(d*4),x=t.storage(d*4),y=t.upload(e(`${s.name}.re`)),w=t.upload(e(`${s.name}.im`)),m=t.uniform([["u",g[0]],["u",g[1]],["u",g[2]],["u",g[3]],["u",g[4]],["u",s.mode],["u",f],["u",h],["u",c],["u",0],["u",d],["u",0]]),b=t.device.createCommandEncoder(),$=b.beginComputePass();t.dispatch($,this.contractPipeline,[o,l,y,w,p,x,m],d),$.end(),t.device.queue.submit([b.finish()]),t.free(o),t.free(l),t.free(y),t.free(w),o=p,l=x,a=g}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(a.join()!==u.join())throw le();this.spectralRe=o,this.spectralIm=l}allocate(e){const{context:t}=this,n=this.patch*this.patch,i=this.width,a=2*this.modes1,o=g=>t.storage(e*g*n*this.elementBytes),l=g=>t.storage(e*i*g*4),u=o(Math.max(4*i,this.inputChannels,this.outputChannels)),s=o(2*i),f=l(this.patch*this.modes2),h=l(this.patch*this.modes2);this.buffers={x:o(i),input:u,t2:u,gates:u,spectral:u,output:u,wide:s,t1:s,hidden:s,local:s,xRe:f,xIm:h,yRe:l(a*this.modes2),yIm:l(a*this.modes2),zRe:l(a*this.modes2),zIm:l(a*this.modes2),wRe:f,wIm:h}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/je)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const n=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(n,i);return n.end(),this.buffers.output}dispatches(e){const{context:t,buffers:n,pipelines:i,tables:a}=this,o=this.width,l=this.patch*this.patch,u=2*this.modes1,s=[],f=(g,d,c,p)=>{s.push(t.prepared(g,[...d,t.keptUniform(c)],t.workgroups(p)))},h=(g,d,c=i.instanceNorm)=>{s.push(t.prepared(c,[g,d],[e*o]))};f(i.conv1x1,[n.input,this.weights.p1w,this.weights.p1b,n.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),f(i.conv1x1,[n.wide,this.weights.p2w,this.weights.p2b,n.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let g=0;g<this.depth;g++)h(n.x,n.t1),f(i.forwardColumns,[n.t1,a.forwardCos,a.forwardSin,n.xRe,n.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),f(i.rowMix,[n.xRe,n.xIm,a.rowRe,a.rowIm,n.yRe,n.yIm],[["u",e],["u",o],["u",u],["u",this.patch]],e*o*u*this.modes2),f(i.spectralMix,[n.yRe,n.yIm,this.spectralRe,this.spectralIm,n.zRe,n.zIm],[["u",e],["u",o],["u",2*g],["u",0]],e*o*u*this.modes2),f(i.rowMix,[n.zRe,n.zIm,a.inverseRowRe,a.inverseRowIm,n.wRe,n.wIm],[["u",e],["u",o],["u",this.patch],["u",u]],e*o*this.patch*this.modes2),f(i.inverseColumns,[n.wRe,n.wIm,a.inverseColCos,a.inverseColSin,n.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*l),h(n.t2,n.t1,i.instanceNormScaled),f(i.conv1x1,[n.t1,this.weights[`m1w${g}`],this.weights[`m1b${g}`],n.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),f(i.gate,[n.gates,n.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*l),f(i.conv1x1,[n.hidden,this.weights[`m2w${g}`],this.weights[`m2b${g}`],n.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),f(i.conv1x1,[n.x,this.weights[`lw${g}`],this.weights[`lb${g}`],n.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),f(i.residual,[n.spectral,n.local,n.x],[["u",e*o*l],["u",g<this.depth-1?1:0],["u",0],["u",0]],e*o*l);return f(i.conv1x1,[n.x,this.weights.q1w,this.weights.q1b,n.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),f(i.conv1x1,[n.wide,this.weights.q2w,this.weights.q2b,n.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),s}}const Gn=(r,e)=>`${r==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, firstLayer: u32, pad0: u32, pad1: u32,
  rectY0: u32, rectZ0: u32, rectX0: u32, rectH: u32,
  rectD: u32, rectW: u32, gridY0: i32, gridX0: i32,
  minimumWeight: f32, pad2: f32, pad3: f32, pad4: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${r}>;
@group(0) @binding(1) var<storage, read> origins: array<i32>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<storage, read> table: array<u32>;
@group(0) @binding(4) var<uniform> u: P;
fn hann(index: i32, size: u32) -> f32 {
  let t = 6.283185307179586 * f32(index) / f32(size - 1u);
  return u.minimumWeight + (1.0 - u.minimumWeight) * (0.5 - 0.5 * cos(t));
}
@compute @workgroup_size(${U})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${U}u;
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
}`;function er(r,e,t,n){if(e<=t)return[r];const i=Math.ceil((e-t)/n)+1,a=[];for(let o=0;o<i;o++)a.push(r+o*t-pt(o*(i*t-e)/(i-1)));return a}function qn(r,e,t){let n=1/0,i=-1/0;const a=o=>{n=Math.min(n,o),i=Math.max(i,o)};for(let o=0;o<r.length;o++){const l=r[o],u=r[(o+1)%r.length];l[0]>=e&&l[0]<=t&&a(l[1]);for(const s of[e,t])(l[0]-s)*(u[0]-s)<0&&a(l[1]+(s-l[0])/(u[0]-l[0])*(u[1]-l[1]))}return n<=i?[n,i]:null}const Kn=(r,e)=>Math.max(1,Math.round(r*(1-e)));function Mr(r,e,t,n,i){const a=br(r,e,t),o=[[-.5,-.5],[e-.5,-.5],[e-.5,t-.5],[-.5,t-.5]].map(a.toWind),l=Math.floor(Math.min(...o.map(g=>g[0]))),u=Math.floor(Math.min(...o.map(g=>g[1]))),s=Math.ceil(Math.max(...o.map(g=>g[0])))-l+1,f=Math.ceil(Math.max(...o.map(g=>g[1])))-u+1,h=[];for(const g of er(l,s,n,i)){const d=qn(o,g,g+n-1);if(!d)continue;const c=Math.floor(d[0]),p=Math.max(n,Math.ceil(d[1])-c+1);for(const x of er(c,p,n,i))h.push([x,g])}return{theta:r,gx:s,gy:f,gridX0:l,gridY0:u,patches:h,frame:a}}const Zn=8,kr=new MessageChannel,Sr=[];kr.port1.onmessage=()=>{var r;return(r=Sr.shift())==null?void 0:r()};const Qn=()=>new Promise(r=>{Sr.push(r),kr.port2.postMessage(0)}),Jn=r=>Math.ceil(r*Math.SQRT2),eo=128<<20,to=2,De=1e-6,ke=6e4,ro=4,io=48<<20,no=16;function Se(r,e,t){let n;const i=new Promise((a,o)=>{n=setTimeout(()=>o(new Re(Ae.TIMEOUT,`${t} did not finish in ${e/1e3} s`)),e)});return Promise.race([r,i]).finally(()=>clearTimeout(n))}function oo(r,e,t,n){let i=1/0,a=-1/0,o=1/0,l=-1/0,u=1/0,s=-1/0;for(const[f,h,g]of r)i=Math.min(i,f-e.gridY0),a=Math.max(a,f-e.gridY0+t),o=Math.min(o,g-e.gridX0),l=Math.max(l,g-e.gridX0+t),u=Math.min(u,h-n),s=Math.max(s,h-n+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,a),rx0:Math.max(0,o),rx1:Math.min(e.gx,l),rz0:u,rz1:s}}function ao(r,e,t){const{gx:n,gy:i}=r,a=new Int32Array(i).fill(n),o=new Int32Array(i).fill(0);for(const[s,f]of r.patches){const h=Math.max(0,s-r.gridY0),g=Math.min(i,s-r.gridY0+e),d=Math.max(0,f-r.gridX0),c=Math.min(n,f-r.gridX0+e);for(let p=h;p<g;p++)d<a[p]&&(a[p]=d),c>o[p]&&(o[p]=c)}const l=new Uint32Array(3*i+1);let u=0;for(let s=0;s<i;s++){const f=Math.max(0,o[s]-a[s]);l[s]=u,l[i+1+s]=f?a[s]:0,l[2*i+1+s]=f,u+=f*t}return l[i]=u,{table:l,count:u}}function so(r,e){const t=new Float32Array(r);for(let n=0;n<r;n++)t[n]=e+(1-e)*(.5-.5*Math.cos(2*Math.PI*n/(r-1)));return t}function lo(r,e,t){const{gx:n,gy:i,gridX0:a,gridY0:o,patches:l}=r,u=new Float32Array(n*i),s=so(e,t);for(const[f,h]of l)for(let g=0;g<e;g++){const d=f-o+g;if(d<0||d>=i)continue;const c=d*n,p=s[g];for(let x=0;x<e;x++){const y=h-a+x;y>=0&&y<n&&(u[c+y]+=p*s[x])}}return u}function uo(r,e,t,n){const{gx:i,gy:a,gridX0:o,gridY0:l,frame:{cX:u,cY:s,cos:f,sin:h}}=r,g=new Float32Array(i*a);for(let d=0;d<a;d++){const c=l+d-s;for(let p=0;p<i;p++){const x=o+p-u,y=u+x*f-c*h,w=s+x*h+c*f;if(y<-.5||w<-.5||y>n-.5||w>t-.5){g[d*i+p]=-1;continue}const m=Math.min(n-1,Math.max(0,pt(y))),b=Math.min(t-1,Math.max(0,pt(w)));g[d*i+p]=e[b*n+m]}}return g}class co{constructor(e,t,n,{batchSize:i}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,this.channels=t.model.output_channels,this.bufferLimit=Math.min(eo,e.device.limits.maxStorageBufferBindingSize),this.network=new jn(e,t,n,i),this.blendPipeline=e.pipeline(Gn(this.network.store,this.channels)),this.inputPlan=Rn(t),this.city=null,this.generation=0}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.distanceField.destroy(),this.city=null}setCity(e,t,n){var a;this.cancel(),(a=this.city)==null||a.distanceField.destroy();const i=new $r(this.context,{layers:e,ny:t,nx:n},Jn(this.patch),this.network.store,this.inputPlan);i.scanRawBytes=Math.ceil(io*Math.min(1,this.batchSize/no)),this.city={distanceField:i,ny:t,nx:n,layerMap:e,storedKey:null,group:null,layerIndex:-1,frame:null}}frameOf(e,t){var o;const{city:n,patch:i}=this,a=`${e}:${t}`;return((o=n.frame)==null?void 0:o.key)!==a&&(n.frame={key:a,layout:Mr(e,n.nx,n.ny,i,t),final:null,roof:null}),n.frame}finalOf(e){return e.final??(e.final=lo(e.layout,this.patch,this.metadata.inference.blend_window_minimum)),e.final}roofOf(e){const{city:t}=this;return e.roof??(e.roof=uo(e.layout,t.layerMap,t.ny,t.nx)),e.roof}async ensureLayers(e){const{city:t}=this,n=e.join();if(t.storedKey===n)return!1;const{distanceField:i}=t;i.releaseGroups(),i.upGrid=null,t.storedKey=null;const[a]=i.planGroups(e,this.bufferLimit);return i.allocate([a]),await Se(i.scan(a),4*ke,"the computation"),i.destroyed?!1:(t.group=a,t.storedKey=n,!0)}openScopes(){const{device:e}=this.context;e.pushErrorScope("validation"),e.pushErrorScope("out-of-memory")}async closeScopes(){const{device:e}=this.context,t=()=>Se(e.popErrorScope().catch(()=>null),ke,"the graphics device"),n=await t(),i=await t();if(n)throw new Re(Ae.GPU,`out of graphics memory: ${n.message}`);if(i)throw new Re(Ae.GPU,`the graphics device refused the work: ${i.message}`)}releaseLayers(){const{city:e}=this;e&&(e.distanceField.releaseGroups(),e.distanceField.upGrid=null,e.storedKey=null,e.group=null)}async setHeight(e){if(this.city.layerIndex=e,this.city.storedKey===String(e))return!1;this.openScopes();try{return await this.ensureLayers([e])}finally{await this.closeScopes()}}async predictLayers(e,t,n){const i=++this.generation,a=()=>i!==this.generation,{context:o,city:l,patch:u}=this,{device:s}=o;this.openScopes();let f=null;const h=()=>this.closeScopes();try{const g=this.frameOf(t,Kn(u,n.overlap)),{layout:d}=g;if(await this.ensureLayers(e),a()||l.distanceField.destroyed)return null;const{distanceField:c,group:p}=l;if(c.upWind&&c.ensureUpTiles([p],t,d.patches,u)&&(await Se(s.queue.onSubmittedWorkDone(),ke,"the computation"),o.releaseScratch()),a())return null;const x=ao(d,u,e.length),y=o.storage(x.count*(this.channels+1)*4);try{if(!await this.runNetwork(p,e,g,x,y,t,n,a))return null;f=await this.readField(e,d,x,y)}finally{o.free(y),o.releaseScratch()}}finally{await h()}return a()?null:f}async runNetwork(e,t,n,i,a,o,l,u){var b;const{context:s,patch:f}=this,{layout:h}=n,{device:g}=s,{distanceField:d}=this.city,c=s.upload(i.table),p=[],x=t[0],y=!!(l.shouldDraw&&l.onDraw)&&t.length===1;let w=null,m=null;y&&(w={final:this.finalOf(n),roof:this.roofOf(n)},(b=l.onStart)==null||b.call(l,{gridH:h.gy,gridW:h.gx,originY:h.gridY0,originX:h.gridX0,theta:o}));try{const $=t.length*h.patches.length;for(let v=0;v<$;){if(u())return!1;const k=Math.floor(v/h.patches.length),B=v%h.patches.length,P=h.patches.slice(B,B+this.batchSize).map(([C,I])=>[C,t[k],I]);v+=P.length;const M=new Int32Array(P.flat()),A=g.createCommandEncoder(),R=d.assemble(A,M,e,o,f,this.network.inputBuffer),D=this.network.encode(A,P.length),S=oo(P,h,f,x);if(this.encodeBlend(A,D,R,a,c,P.length,S,h,x),g.queue.submit([A.finish()]),s.free(R),s.releaseScratch(),p.push(g.queue.onSubmittedWorkDone()),p.length>to&&await Se(p.shift(),ke,"the computation"),y){m=fo(m,S);const C=v>=$;if(m&&m.ry1>m.ry0&&m.rx1>m.rx0&&(C||l.shouldDraw())){const I=m;m=null;const z=await this.readRect(I,h,i,a,w,t[0]);if(u())return!1;l.onDraw({...z,stride:this.channels+2,channels:this.channels,theta:o,readyCount:v,patchCount:$})}}}return await Se(Promise.all(p),ke,"the computation"),!0}finally{s.free(c)}}encodeBlend(e,t,n,i,a,o,l,u,s){const{context:f,patch:h}=this,{gy:g}=u,{ry0:d,ry1:c,rx0:p,rx1:x,rz0:y,rz1:w}=l;if(!(c>d&&x>p))return;const m=e.beginComputePass();f.dispatch(m,this.blendPipeline,[t,n,i,a,f.uniform([["u",o],["u",h],["u",this.channels],["u",h],["u",g],["u",s],["u",0],["u",0],["u",d],["u",y],["u",p],["u",c-d],["u",w-y],["u",x-p],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(c-d)*(w-y)*(x-p)),m.end()}async readRect({ry0:e,ry1:t,rx0:n,rx1:i},a,{table:o},l,{final:u,roof:s},f){const{gx:h,gy:g}=a,d=this.channels,c=(d+1)*4,p=i-n,x=t-e,y=(v,k)=>{for(let B=e;B<t;B++){const P=o[g+1+B],M=o[2*g+1+B],A=Math.max(n,P),R=Math.min(i,P+M);R>A&&v.copyBufferToBuffer(l,(o[B]+A-P)*c,k,((B-e)*p+A-n)*c,(R-A)*c)}},w=await Se(this.context.readBack(p*x*c,y,v=>new Float32Array(v.slice(0))),ke,"reading the wind back"),{center:m,scale:b}=this.metadata.target,$=new Float32Array(p*x*(d+2));for(let v=0;v<p*x;v++){const k=w[v*(d+1)+d],B=v*(d+2),P=k>De?1/k:0;for(let R=0;R<d;R++)$[B+R]=w[v*(d+1)+R]*P*b[R]+m[R];const M=(e+Math.floor(v/p))*h+n+v%p,A=s[M];$[B+d]=A<0||k<=De?2:A>f?1:0,$[B+d+1]=u[M]>De?Math.min(1,k/u[M]):0}return{x0:n,y0:e,width:p,height:x,values:$}}async readField(e,t,{table:n,count:i},a){const{gx:o,gy:l}=t,u=this.channels,s=u+1,{center:f,scale:h}=this.metadata.target,g=(x,y)=>x.copyBufferToBuffer(a,0,y,0,y.size),d=await Se(this.context.readBack(i*s*4,g,x=>new Float32Array(x.slice(0))),4*ke,"reading the wind back"),c=e.map(x=>({layer:x,values:new Float32Array(o*l*u),weights:new Float32Array(o*l)}));let p=performance.now();for(let x=0;x<l;x++){performance.now()-p>Zn&&(await Qn(),p=performance.now());const y=n[x],w=n[l+1+x],m=n[2*l+1+x];for(let b=0;b<e.length;b++){const{values:$,weights:v}=c[b];for(let k=0;k<m;k++){const B=(y+b*m+k)*s,P=x*o+w+k,M=d[B+u];if(M>De){v[P]=M;const A=1/M;for(let R=0;R<u;R++)$[P*u+R]=d[B+R]*A*h[R]+f[R]}else for(let A=0;A<u;A++)$[P*u+A]=f[A]}}}return{layout:t,gx:o,gy:l,layers:c}}async predict(e,t={}){const{city:n}=this,i=n.layerIndex,a=await this.predictLayers([i],e,t);if(!a)return null;const{gx:o,gy:l,layers:[{values:u,weights:s}]}=a,f=this.channels,h=this.roofOf(n.frame),g=new Uint8Array(o*l);let d=0;for(let c=0;c<o*l;c++){if(h[c]<0){g[c]=2;continue}if(s[c]<=De){g[c]=2;continue}g[c]=h[c]>i?1:0;for(let p=0;p<f;p++)if(!Number.isFinite(u[c*f+p])){d+=1;break}}return{values:u,solid:g,theta:e,height:l,width:o,nonFinite:d}}}function fo(r,e){return r?{ry0:Math.min(r.ry0,e.ry0),ry1:Math.max(r.ry1,e.ry1),rx0:Math.min(r.rx0,e.rx0),rx1:Math.max(r.rx1,e.rx1),rz0:0,rz1:1}:e}const go=16,ho=.4,po=6.278,mo=1e-6;function yo(){let r=null,e=null,t=null,n=null,i=null,a=0;async function o({allowF16:g=!0}={},d){if(!t){const c="/cityffdv2-demo/flume/model-v3/";[t,n]=await Promise.all(["metadata.json","weights.bin"].map(async p=>{const x=await fetch(c+p,{signal:d});if(!x.ok)throw new Error("Could not load model v3 "+p+" (HTTP "+x.status+").");return p.endsWith(".bin")?x.arrayBuffer():x.json()}))}r&&(g||!r.useF16)||(l(),r=await Ct.create({allowF16:g}),e=new co(r,t,n,{batchSize:go}))}function l(){e==null||e.destroy(),r==null||r.destroy(),e=null,r=null,i=null}function u(g,d,c){const p=d.gx*d.gy,x=e.roofOf(e.city.frame),y=new Uint8Array(p);let w=0;for(let b=0;b<p;b++)x[b]<0||c.weights[b]<=mo?y[b]=2:y[b]=x[b]>c.layer?1:0,!y[b]&&!Number.isFinite(c.values[b*5])&&w++;const m={width:d.gx,height:d.gy,originX:d.layout.gridX0,values:c.values,solid:y};return Mt(g,g.plan.indexOf(c.layer),m),w}async function s(g,d,c,p,x){const{gx:y,gy:w}=Mr(p,d.nx,d.ny,e.patch,e.patch),m=Math.max(1,Math.floor(e.bufferLimit/(y*w*(e.channels+1)*4))),b=Math.min(ro,m);for(let $=0;$<c.length;$+=b){if(g.generation!==a||x!=null&&x.aborted)return!1;const v=await e.predictLayers(c.slice($,$+b),p,{overlap:ho});if(!v||g.generation!==a)return!1;g.volume??(g.volume=$t({width:v.gx,height:v.gy,originX:v.layout.gridX0,originY:v.layout.gridY0,theta:p},g.layers,!1));for(const k of v.layers)g.nonFinite+=u(g.volume,v,k)}return!0}async function f(g,d,c,{signal:p,onFirstWave:x,onMoreLayers:y}={},w=!0){await o({allowF16:w},p),g!==i&&(e.setCity(g.layers,g.ny,g.nx),i=g);const m=vt(d).slice(0,_t),b={layers:d,volume:null,nonFinite:0,generation:++a};if(!await s(b,g,d.filter(v=>m.includes(v)),c,p))return null;if(b.nonFinite&&r.useF16&&w)return f(g,d,c,{signal:p,onFirstWave:x,onMoreLayers:y},!1);if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");x==null||x({volume:b.volume,referenceSpeed:po});const $=d.filter(v=>!m.includes(v));if($.length){if(!await s(b,g,$,c,p))return null;if(b.nonFinite)throw new Error("Model v3 gave invalid values on this graphics card.");y==null||y()}return e.releaseLayers(),b.volume}async function h(g,d,c){await o({},c);const p=e.inputPlan.stored,x=Math.ceil(e.patch*Math.SQRT2),y=new $r(r,{layers:g.layers,ny:g.ny,nx:g.nx},x,e.network.store,e.inputPlan),w=y.gx*y.gy*p.length*4;let m=null;y.packGroup=async()=>{m=await r.readBack(w,(v,k)=>v.copyBufferToBuffer(y.sumsBuffer,0,k,0,w),v=>new Float32Array(v.slice(0)).map(k=>k/K))};try{const v=y.planGroups([d],e.bufferLimit);y.allocate(v),await y.scan(v[0])}finally{y.destroy()}if(!m)throw new Error("Model v3 MDDF could not be read.");const b=p.map(v=>"upper_distance_"+v.part+(v.part==="dc"?"":v.mode));return{values:m,ny:y.gy,nx:y.gx,margin:x,layerIndex:d,channels:b,representation:"model v3: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:f,readMddf:h,cancel(){a++,e==null||e.cancel()},destroy:l}}const tr={v2:xn,v3:yo},wo=32;function xo(){const r=wt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=null,n=null,i=null,a=null,o=!1,l=0;const u={},s=new AbortController;function f(){try{t==null||t.destroy();for(const w of Object.values(u))w.destroy()}finally{for(const w of Object.keys(u))delete u[w];e==null||e.device.destroy(),t=null,e=null,a=null}}async function h(){if(t)return;r.stage="Loading model";const w="/cityffdv2-demo/flume/",[m,b,$]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async v=>{const k=await fetch(w+v,{signal:s.signal});if(!k.ok)throw new Error("Could not load "+v+" (HTTP "+k.status+").");return v.endsWith(".bin")?k.arrayBuffer():k.json()}));pn(m,b.byteLength),s.signal.throwIfAborted(),e=await ui.create(),s.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",v=>{r.error="WebGPU: "+v.error.message.split(`
`)[0]}),e.device.lost.then(v=>{!o&&v.reason!=="destroyed"&&(r.error="GPU device lost. Run again to initialize a new session.",r.prediction=null,t=null,e=null,a=null)}),n=m,i=$,t=new hn(e,n,b,{batchSize:wo})}async function g(w,m){if(o||r.busy||r.downloading)return null;r.busy=!0,r.error="",r.progress=0;const b=++l,$=()=>o||b!==l;try{if(await h(),$())return null;if(tr[m.model])return await d(w,m,$,b);w!==a&&(t.setCity(w.layers,w.ny,w.nx),a=w);const v=performance.now(),k=(C,I)=>{const z={...C,grid:w,settings:{...m,layers:I},referenceSpeed:n.wind.reference_speed_m_s,modelLabel:n.label,colorbar:i,patchCount:R,milliseconds:performance.now()-v,inputRevision:b};return r.prediction=Ce(z),r.layersReady=C.layers.length,z},B=[...m.layers],P=vt(B);let M=null,A=null,R=0;const D=C=>({signal:s.signal,onProgress:I=>{$()||(r.progress=(C+I*.3)/P.length)}});let S=t.setHeight(P[0],D(0));for(let C=0;C<P.length;C++){if(r.stage="Predicting 3D wind · layer "+(C+1)+" / "+P.length,await S,$())return null;const I=await t.predict(m.thetaRad,{signal:s.signal,onProgress:z=>{$()||(r.progress=(C+.3+z*.7)/P.length)}});if(s.signal.throwIfAborted(),$())return null;if(r.error)throw new Error(r.error);M||(M=$t(I,B,!1)),S=C+1<P.length?t.setHeight(P[C+1],D(C+1)):null,S==null||S.catch(()=>{}),mn(I),R=I.patchCount??R,Mt(M,B.indexOf(P[C]),I),A?(A.milliseconds=performance.now()-v,r.layersReady=M.layers.length):C+1>=Math.min(_t,P.length)&&(A=k(M,B))}return r.progress=1,r.stage="Prediction ready",A}catch(v){return!o&&b===l&&(r.error=v.message,r.stage="Prediction failed",r.prediction=null),f(),null}finally{o?f():r.busy=!1}}async function d(w,m,b,$){var A;const v=kt[m.model],k=u[A=m.model]??(u[A]=tr[m.model]());r.stage=v+" · predicting the first layers";const B=performance.now();let P=null;if(!await k.run(w,m.layers,m.thetaRad,{signal:s.signal,onFirstWave({volume:R,referenceSpeed:D}){b()||(P={...R,grid:w,settings:{...m},referenceSpeed:D,modelLabel:v,colorbar:i,patchCount:0,milliseconds:performance.now()-B,inputRevision:$},r.prediction=Ce(P),r.layersReady=R.layers.length,r.progress=.3,r.stage=v+" · predicting the remaining layers")},onMoreLayers(){b()||!P||(P.milliseconds=performance.now()-B,r.layersReady=P.layers.length)}})||b())return null;if(r.error)throw new Error(r.error);return r.progress=1,r.stage="Prediction ready",P}async function c(w){if(!t||!r.prediction||r.busy||r.downloading)throw new Error("Run a valid prediction before downloading MDDF.");r.downloading=!0;try{const m=u[r.prediction.settings.model];if(m)return await m.readMddf(r.prediction.grid,w,s.signal);Number.isInteger(w)&&await t.setHeight(w,{signal:s.signal});const b=t.city.field,$=await e.readFloat32(b.fieldBuffer,b.gy*b.gx*28);if(o)throw new Error("The page was closed.");return{values:$,ny:b.gy,nx:b.gx,margin:b.margin,layerIndex:t.city.layerIndex}}finally{r.downloading=!1,o&&f()}}function p(){r.busy&&l++;for(const w of Object.values(u))w.cancel()}function x(){l++,r.prediction=null,r.layersReady=0,r.error="",r.progress=0,r.stage="Ready"}function y(){o=!0,l++,s.abort(),!r.busy&&!r.downloading&&f()}return yt(y),{state:r,run:g,readMddf:c,cancel:p,invalidate:x,dispose:y}}const xe="flume-retained-buildings",rr="flume-retained-selected";function bo(r,e){let t=null,n=null,i=null,a=null,o=null;function l(){if(t){r.getSource(xe)?i!==a&&r.getSource(xe).setData(i):r.addSource(xe,{type:"geojson",data:i,maxzoom:22,tolerance:0}),a=i;for(const[g,d]of[[xe,!1],[rr,!0]]){const c=t.filters[d?"selected":"surroundings"],p=d?1:t.surroundingsOpacity;r.getLayer(g)?r.setFilter(g,c):r.addLayer({id:g,type:"fill-extrusion",source:xe,maxzoom:Oe,filter:c,layout:{visibility:"visible"},paint:{"fill-extrusion-color":d?ue().selectedBuildings:ue().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),r.setPaintProperty(g,"fill-extrusion-opacity",p),r.setLayoutProperty(g,"visibility",d||t.showSurroundings?"visible":"none")}}}function u(){if(!(!t||r.getZoom()<Oe||!r.getSource(t.sourceId)||!r.isSourceLoaded(t.sourceId)))try{const g=r.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(d=>!d.tile||d.tile.z>=(t.dataZoom??Oe));i=qe([...i.features,...g]),l()}catch(g){e==null||e(g)}}function s(g){!t||g!=null&&g.sourceId&&g.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(u,120))}function f(g){var d;(n!==g.collection||(t==null?void 0:t.sourceId)!==g.sourceId||(t==null?void 0:t.sourceLayer)!==g.sourceLayer)&&(i=qe(((d=g.collection)==null?void 0:d.features)??[]),n=g.collection),t=g,l(),s()}function h(){clearTimeout(o),t=null,n=null,i=null,a=null;for(const g of[rr,xe])r.getLayer(g)&&r.removeLayer(g);r.getSource(xe)&&r.removeSource(xe)}return r.on("sourcedata",s),r.on("moveend",s),{update:f,clear:h,dispose(){r.off("sourcedata",s),r.off("moveend",s),h()}}}const vo=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,_o=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function $o(r,e,t){var R;let n,i,a,o,l,u,s,f,h,g,d,c="",p=0;const x=new Xt,y=new Xt,w=sr.MercatorCoordinate.fromLngLat(r.grid.origin,((R=r.grid.terrain)==null?void 0:R.lowM)??0),m=w.meterInMercatorCoordinateUnits(),[b,$]=Rt(r,r.width/2-.5,r.height/2-.5),v=[new Ye(new fe(1,0,0),0),new Ye(new fe(-1,0,0),r.grid.nx*ie),new Ye(new fe(0,1,0),0),new Ye(new fe(0,-1,0),r.grid.ny*ie)],k=()=>Number(e.speedMps)/r.referenceSpeed,B=new Map;function P(D){let S=1/0,C=-1/0;for(let I=0;I<r.layers.length;I++){const z=D+"@"+r.slots[I];B.has(z)||B.set(z,Tt(yi(r,I),D));const[H,q]=B.get(z);S=Math.min(S,H),C=Math.max(C,q)}return[S,C]}let M=[0,0];function A(){if(!i)return;const D=Ve.find(L=>L.id===e.variable)??Ve[0];g==null||g.dispose(),g=new Ut(di(D.ramp),256,1,Yt),g.colorSpace=Di,g.minFilter=g.magFilter=Nt,g.needsUpdate=!0;const S=e.plane==="3d"?"h":e.plane,C=fi(r,e.planeOffsetM),I=e.view==="slice"||e.view==="particles"&&e.particles==="white";l.visible=I&&S==="h",u.visible=I&&S==="v";const z=D.id+"@"+(S==="v"?"v"+C:e.sliceHeightM);if(z!==c){let L;if(S==="v"){L=gi(r,C);const[Q,se]=Rt(r,(r.width-1)/2,C);u.position.set(Q,se,L.height*Ie/2)}else L=ur(r,Number(e.sliceHeightM)),l.position.z=L.settings.heightM;h==null||h.dispose(),h=new Ut(hi(L,D.id),L.width,L.height,Yt,zi),h.minFilter=h.magFilter=Nt,h.needsUpdate=!0,M=Tt(L,D.id),c=z}const H=k();let q=H;D.id==="T"&&(q=1),D.id==="tke"&&(q=H*H);const oe=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?P(D.id):M,te=pi(oe,D.id)??mi(r.colorbar,D.id,r.settings.layers.at(-1),"99.9",1);d.uniforms.field.value=h??null,d.uniforms.palette.value=g,d.uniforms.range.value.set(...te),f.enabled=e.view!=="off",f.mesh.visible=f.enabled;const ae=e.view==="slice"||e.particles==="white",T=ae?S:e.plane;T==="h"?f.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:ae}):T==="v"?f.setPlane({kind:"v",row:C,flat:ae}):f.setPlane(null),f.setCount(Ft[e.density]??Ft.medium),f.setColouring(ae?"white":e.particles,D.id,g,te),t==null||t({low:te[0]*q,high:te[1]*q,...D}),n.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:A,refresh(){c="",A()},onAdd(D,S){n=D,a=new Ti,o=new Fi,i=new Ei({canvas:n.getCanvas(),context:S,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,d=new hr({vertexShader:vo,fragmentShader:_o,uniforms:{field:{value:null},palette:{value:null},range:{value:new mr(0,1)}},transparent:!0,depthWrite:!1,side:pr,clipping:!0,clippingPlanes:v}),l=new Ke(new ut(r.width*ie,r.height*ie),d),l.position.set(b,$,0),l.rotation.z=r.theta,l.frustumCulled=!1,a.add(l);const C=new ut(r.width*ie,(r.layers.at(-1)+1)*Ie);C.rotateX(Math.PI/2),u=new Ke(C,d),u.rotation.z=r.theta,u.frustumCulled=!1,a.add(u),f=new Li(ci(r)),a.add(f.mesh),s=Mo(r.grid,.5),s&&a.add(s),A()},render(D,S){const C=performance.now(),I=Math.min(p?(C-p)/1e3:0,.05);p=C,x.makeTranslation(w.x,w.y,w.z).scale(new fe(m,-m,m)),o.projectionMatrix.copy(y.fromArray(S)).multiply(x),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),f.setViewport(D.drawingBufferWidth,D.drawingBufferHeight);const z=f.enabled&&!e.paused;z&&f.step(I,k()),i.resetState(),i.setViewport(0,0,D.drawingBufferWidth,D.drawingBufferHeight),i.render(a,o),z&&n.triggerRepaint()},onRemove(){h==null||h.dispose(),g==null||g.dispose(),l==null||l.geometry.dispose(),u==null||u.geometry.dispose(),d==null||d.dispose(),f==null||f.dispose(),s==null||s.geometry.dispose(),s==null||s.material.dispose(),i==null||i.dispose(),n=null,i=null}}}function Mo(r,e){if(!r.mainDomain)return null;const t=Ii(r.origin),n=[...t(r.mainDomain.bounds.slice(0,2)),...t(r.mainDomain.bounds.slice(2,4))],i=new hr({uniforms:{extent:{value:new mr(r.nx*ie,r.ny*ie)},mainBounds:{value:new Oi(...n)},mainColour:{value:new Ht(ue().mainArea)},bufferColour:{value:new Ht(ue().bufferArea)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:pr}),a=new Ke(new ut(r.nx*ie,r.ny*ie),i);return a.name="flume-domain-overlay",a.position.set(r.nx*ie/2,r.ny*ie/2,e+.05),a.renderOrder=4,a.frustumCulled=!1,a}const st="flume-field",ze="flume-buildings";function Cr(r){return{"city-concordia-2d":!1,"city-concordia-3d":r==="concordia","city-osm-3d":r==="osm"}}function ko(r){return r.type==="fill-extrusion"?"fill-extrusion-opacity":r["source-layer"]==="building"&&(r.type==="fill"||r.type==="line")?r.type+"-opacity":null}function So(r,e,t){let n=null,i=null;const a=new Map,o=bo(r,t);function l(){r.getLayer(st)&&r.removeLayer(st),n=null}function u(){for(const[h,g]of a)r.getLayer(h)&&(r.setLayoutProperty(h,"visibility",g.visibility),r.setPaintProperty(h,g.property,g.opacity),r.setFilter(h,g.filter),r.setLayerZoomRange(h,g.minzoom,g.maxzoom),g.color!==void 0&&r.setPaintProperty(h,"fill-extrusion-color",g.color));a.clear()}function s(h){for(const g of r.getStyle().layers){if(g.id.startsWith("flume-"))continue;const d=ko(g);if(!d)continue;const c=g.type==="fill-extrusion";a.set(g.id,{visibility:r.getLayoutProperty(g.id,"visibility")??"visible",property:d,opacity:r.getPaintProperty(g.id,d)??1,filter:r.getFilter(g.id)??null,minzoom:g.minzoom??0,maxzoom:g.maxzoom??24,color:c?r.getPaintProperty(g.id,"fill-extrusion-color")??null:void 0}),r.setPaintProperty(g.id,d,Et),c&&r.setPaintProperty(g.id,"fill-extrusion-color",ue().previewBuildings),h||r.setLayoutProperty(g.id,"visibility","none")}}function f({source:h,input:g,prediction:d,preview:c,display:p}){if(d!==i&&(l(),i=d),!d&&r.getLayer(ze)&&r.removeLayer(ze),u(),Hr(r,Cr(h)),!d){o.clear(),ct(r,c);return}ct(r,null);const x=Wr.find(w=>w.id===(h==="osm"?"city-osm-3d":"city-concordia-3d")),y=cr(g.buildings.features,r.getFilter(x.id));s(p.showSurroundings),r.setFilter(x.id,y.surroundings),r.setLayerZoomRange(x.id,Oe,x.layer.maxzoom??24),r.getLayer(ze)?r.setFilter(ze,y.selected):r.addLayer({...x.layer,id:ze,minzoom:Oe,layout:{visibility:"visible"},filter:y.selected,paint:{...x.layer.paint,"fill-extrusion-color":ue().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:x.layer.source,sourceLayer:x.layer["source-layer"],collection:c,dataZoom:g.dataZoom,filters:y,surroundingsOpacity:Et,showSurroundings:p.showSurroundings}),r.getLayer(st)||(n=$o(d,p,e),r.addLayer(n)),r.triggerRepaint()}return{update:f,configure(){n==null||n.configure()},refresh(){n==null||n.refresh()},beforeStyleChange(){l(),i=null,a.clear()},dispose(){l(),o.dispose(),a.clear()}}}const Fe="flume-terrain-dem",He="flume-terrain-hillshade";function Co(r,e){var t,n,i;if(e){if(r.getSource(Fe)||r.addSource(Fe,{type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),!r.getLayer(He)){const a=(t=r.getStyle().layers.find(o=>o.type==="symbol"))==null?void 0:t.id;r.addLayer({id:He,type:"hillshade",source:Fe,paint:{"hillshade-exaggeration":.8,"hillshade-shadow-color":"#1b1f24","hillshade-highlight-color":"#f4f1e8","hillshade-accent-color":"#5b5544"}},a)}((n=r.getTerrain())==null?void 0:n.source)!==Fe&&r.setTerrain({source:Fe,exaggeration:1})}else((i=r.getTerrain())==null?void 0:i.source)===Fe&&r.setTerrain(null),r.getLayer(He)&&r.removeLayer(He)}function Pe(r,e,t,n,i){if(t.reduce((l,u)=>l*u,1)!==e.length)throw new Error("Invalid "+r+" shape.");const a=new Uint8Array(e.length*4),o=new DataView(a.buffer);for(let l=0;l<e.length;l++){if(!Number.isFinite(e[l]))throw new Error("Cannot export non-finite "+r);o.setFloat32(l*4,e[l],!0)}return{name:r,content:a,description:{dtype:"float32",shape:t,channels:n,unit:i}}}function Br(r,e,t,n,i=null){var o,l,u;const a={schemaVersion:1,endianness:"little",order:"row-major",origin:r.origin,source:r.source,bounds:r.bounds,selection:((o=r.selection)==null?void 0:o.geometry)??((l=r.polygon)==null?void 0:l.geometry),computationalDomain:(u=r.polygon)==null?void 0:u.geometry,mainDomain:r.mainDomain,buffer:r.buffer,dataZoom:r.dataZoom,tileCount:r.tileCount,warnings:r.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:n.nx,ny:n.ny,margin:n.margin,layerIndex:n.layerIndex,representation:n.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(a.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(s=>(s+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),a.files=Object.fromEntries(t.map(s=>[s.name,s.description])),[{name:"metadata.json",content:JSON.stringify(a,null,2)},...t.map(({name:s,content:f})=>({name:s,content:f}))]}function Pr(r,e){const n=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(l=>o+"_"+l)),i=Pe("height_layers.f32.bin",r.grid.layers,[r.grid.ny,r.grid.nx],["roof_layer_count"],"1.5 m per layer"),a=e.channels??n;return[Pe("mddf.f32.bin",e.values,[e.ny,e.nx,a.length],a,"m"),i]}function Bo(r){const e=dr(r),t=r.width*r.height,n=new Float32Array(t*3),i=new Float32Array(t),a=new Float32Array(t),o=new Float32Array(t);for(let s=0;s<t;s++){const f=s*5;n.set([e[f],e[f+2],e[f+1]],s*3),i[s]=e[f+3],a[s]=e[f+4],o[s]=Math.hypot(e[f],e[f+1],e[f+2])}const l=[r.height,r.width],u=[Pe("velocity.f32.bin",n,[...l,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(r.solid),description:{dtype:"uint8",shape:l,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Pe("speed.f32.bin",o,l,["speed"],"m/s")];return r.settings.model!=="v2"&&u.push(Pe("temperature.f32.bin",i,l,["T"],"degC"),Pe("tke.f32.bin",a,l,["TKE"],"m2/s2")),u}function Po(r){const e=r.width*r.height,t=r.settings.layers.length,n=dr(r),i=new Float32Array(t*e*3);for(let a=0;a<t*e;a++)i.set([n[a*5],n[a*5+2],n[a*5+1]],a*3);return[Pe("velocity3d.f32.bin",i,[t,r.height,r.width,3],["u","v","w"],"m/s")]}function Io(r,e,t){return Br(r,t,Pr(t,e),e)}function Ao(r,e,t,n=null){const i=[...Pr(t,e),...Bo(t)];return n&&i.push(...Po(n)),i.push({name:"buildings.geojson",content:JSON.stringify(r.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),Br(r,t,i,e,n)}class Ro{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let a=0;e.traverse(function(y){if(y.isMesh){const w=y.geometry,m=w.index,b=w.getAttribute("position");a+=m!==null?m.count/3:b.count/3,i.push({object3d:y,geometry:w})}});let o,l=80;if(n===!0){const y=a*2+a*3*4*4+80+4,w=new ArrayBuffer(y);o=new DataView(w),o.setUint32(l,a,!0),l+=4}else o="",o+=`solid exported
`;const u=new fe,s=new fe,f=new fe,h=new fe,g=new fe,d=new fe;for(let y=0,w=i.length;y<w;y++){const m=i[y].object3d,b=i[y].geometry,$=b.index,v=b.getAttribute("position");if($!==null)for(let k=0;k<$.count;k+=3){const B=$.getX(k+0),P=$.getX(k+1),M=$.getX(k+2);c(B,P,M,v,m)}else for(let k=0;k<v.count;k+=3){const B=k+0,P=k+1,M=k+2;c(B,P,M,v,m)}}return n===!1&&(o+=`endsolid exported
`),o;function c(y,w,m,b,$){u.fromBufferAttribute(b,y),s.fromBufferAttribute(b,w),f.fromBufferAttribute(b,m),$.isSkinnedMesh===!0&&($.applyBoneTransform(y,u),$.applyBoneTransform(w,s),$.applyBoneTransform(m,f)),u.applyMatrix4($.matrixWorld),s.applyMatrix4($.matrixWorld),f.applyMatrix4($.matrixWorld),p(u,s,f),x(u),x(s),x(f),n===!0?(o.setUint16(l,0,!0),l+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(y,w,m){h.subVectors(m,w),g.subVectors(y,w),h.cross(g).normalize(),d.copy(h).normalize(),n===!0?(o.setFloat32(l,d.x,!0),l+=4,o.setFloat32(l,d.y,!0),l+=4,o.setFloat32(l,d.z,!0),l+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function x(y){n===!0?(o.setFloat32(l,y.x,!0),l+=4,o.setFloat32(l,y.y,!0),l+=4,o.setFloat32(l,y.z,!0),l+=4):o+="			vertex "+y.x+" "+y.y+" "+y.z+`
`}}}async function To(r,e,t={}){var y,w;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((y=e.layers)==null?void 0:y.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:n,ny:i,layers:a,spacingM:o,layerSpacingM:l}=e,u=(m,b)=>m<0||b<0||m>=n||b>=i?0:a[b*n+m],s=async()=>{var m;if(await new Promise(b=>setTimeout(b,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let f=0;for(let m=0;m<i;m++){m%32===0&&await s();for(let b=0;b<n;b++){const $=u(b,m);if(!Number.isInteger($)||$<0||$>160)throw new Error("Invalid MDDF building height.");$&&(f+=2+ +($>u(b-1,m))+ +($>u(b+1,m))+ +($>u(b,m-1))+ +($>u(b,m+1)))}}if(!f)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(f*18);let g=0;const d=(m,b,$,v)=>{for(const k of[m,b,$,m,$,v])h.set(k,g),g+=3};for(let m=0;m<i;m++){m%32===0&&await s();for(let b=0;b<n;b++){const $=u(b,m)*l;if(!$)continue;const v=b*o,k=v+o,B=-m*o,P=B-o;d([v,$,B],[k,$,B],[k,$,P],[v,$,P]),d([v,0,B],[v,0,P],[k,0,P],[k,0,B]);let M=u(b-1,m)*l;$>M&&d([v,M,P],[v,M,B],[v,$,B],[v,$,P]),M=u(b+1,m)*l,$>M&&d([k,M,B],[k,M,P],[k,$,P],[k,$,B]),M=u(b,m-1)*l,$>M&&d([v,M,B],[k,M,B],[k,$,B],[v,$,B]),M=u(b,m+1)*l,$>M&&d([k,M,P],[v,M,P],[v,$,P],[k,$,P])}}const c=new Vi;c.setAttribute("position",new Xi(h,3));const p=new Ke(c);let x;try{x=new Ro().parse(p,{binary:!0}).buffer}finally{c.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:x},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:r.source,origin:e.origin,mainDomain:r.mainDomain,computationalDomain:(w=r.polygon)==null?void 0:w.geometry,buffer:r.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:n,ny:i,spacingM:o,layerSpacingM:l,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:r.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:f*2}}},null,2)}]}const Ir=Symbol("flume");function tt(){return Rr(Ir)}function Fo(){const r="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=Ge(null),t=Ge(!1);let n=null,i=null,a=null,o=!1,l=null,u=!1;const s=()=>n,{currentPresetName:f}=ir();Lt(f.value);const h=jr({getMap:s,accessToken:r}),g=Ni({getMap:s,ready:t,onChange:x,accessToken:r}),d=xo(),c=wt({mapCreated:!1,mapReady:t,error:"",area:g.state,grid:null,terrain:!1,terrainLoading:!1,wind:{...Dt},engine:d.state,display:{variable:"speed",speedMps:Dt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:xi,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=j(()=>c.downloading||c.engine.downloading||c.area.loading);function x(){clearTimeout(l),l=null,u=!1,w++,c.terrainLoading=!1,c.grid=null,c.legend=null,c.error="",c.downloadError="",d.invalidate(),k()}let y=null,w=0;async function m(){if(p.value)return;const M=await g.captureRegion();if(!(!M||o))try{cr(M.buildings.features),y=M,await b(M)}catch(A){c.error=A.message}}async function b(M){const A=++w;let R=bi(M);if(c.terrain){c.terrainLoading=!0;try{R=Ki(R,await qi(R,r))}finally{A===w&&(c.terrainLoading=!1)}}A!==w||o||(c.grid=Ce(R),c.error="",$())}de(()=>c.terrain,async()=>{if(!c.grid||!y)return;const M=y;x();try{await b(M)}catch(A){c.error=A.message}});function $(){!c.grid||o||(clearTimeout(l),l=setTimeout(()=>{l=null,v()},vi))}async function v(){if(clearTimeout(l),l=null,!(o||!c.grid||p.value)){if(c.engine.busy){u=!0,d.cancel();return}try{const M={...wi(c.wind),model:c.wind.model,layers:fr(c.grid)};c.display.speedMps=M.speedMps,c.error="",await d.run(c.grid,M)}catch(M){c.error=M.message}u&&!o&&(u=!1,await v())}}function k(){!n||!t.value||(Co(n,c.terrain),i==null||i.update({source:c.area.source,input:c.area.snapshot,prediction:c.engine.prediction,preview:g.getPreview(),display:c.display}))}async function B(M){if(!(p.value||!c.grid)&&!(M!=="model"&&(c.engine.busy||!c.engine.prediction))){c.downloading=!0,c.downloadError="";try{const A=c.area.snapshot;let R;if(M==="model")R=await To(A,c.grid,{shouldCancel:()=>o});else{const S=Number(c.display.speedMps);if(!it(S))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const C=c.engine.prediction,I={...C,settings:{...C.settings,speedMps:S}},z=ur(I,c.display.sliceHeightM),H=await d.readMddf(z.settings.layerIndex);M==="mddf"?R=Io(A,H,z):R=Ao(A,H,z,I)}const D=await qr(R);o||Kr(D,"flume-"+M+".zip","application/zip")}catch(A){o||(c.downloadError=A.message)}finally{o||(c.downloading=!1)}}}de([()=>c.terrain,()=>c.grid,()=>c.engine.prediction,()=>c.area.source,()=>c.display.showSurroundings],k),de(()=>c.engine.layersReady,()=>i==null?void 0:i.refresh()),de(()=>[c.wind.directionDeg,c.wind.model],()=>{c.grid&&$()}),de(()=>c.wind.speedMps,M=>{it(M)&&(c.display.speedMps=Number(M))}),de(()=>c.engine.prediction,M=>{const A=Ve.find(R=>R.id===c.display.variable);(M==null?void 0:M.settings.model)==="v2"&&(A!=null&&A.notInV2)&&(c.display.variable="speed")}),de(()=>[c.display.variable,c.display.particles,c.display.density,c.display.speedMps,c.display.view,c.display.plane,c.display.sliceHeightM,c.display.planeOffsetM],()=>{it(c.display.speedMps)?(c.downloadError="",i==null||i.configure()):c.downloadError="Use a wind speed between 0.5 and 20 m/s."}),de(()=>c.display.paused,()=>n==null?void 0:n.triggerRepaint()),de(f,M=>Lt(M)),de(h.mapStyle,M=>{n&&(g.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),n.setStyle(M,{diff:!1}))}),Ar(()=>{if(!(r!=null&&r.startsWith("pk."))){c.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{n=new sr.Map({container:e.value,accessToken:r,style:h.mapStyle.value,center:$i,zoom:_i,pitch:0,antialias:!0,attributionControl:!1}),i=So(n,M=>{o||(c.legend=M)},M=>{o||(c.error=M.message)}),c.mapCreated=!0,n.on("style.load",()=>{if(!o)try{Gr(n,Cr(c.area.source)),t.value=!0,g.restore(),k()}catch(M){c.error=M.message}}),n.on("error",M=>{if(o)return;const A=M.sourceId?" ("+M.sourceId+")":"";c.error="Map data unavailable"+A+". Check token, allowed domains and connection."}),h.attach(),a=new ResizeObserver(()=>n==null?void 0:n.resize()),a.observe(e.value)}catch(M){c.error=M.message}}),yt(()=>{o=!0,clearTimeout(l),d.dispose(),i==null||i.dispose(),a==null||a.disconnect(),n==null||n.remove(),n=null});const P={mapElement:e,store:c,controls:h,locked:p,area:g,acceptArea:m,runPrediction:v,download:B};return Tr(Ir,P),P}const Eo={class:"flume-compact"},Lo={key:0,class:"map-hud-muted",role:"status"},Do={key:1,class:"map-hud-muted"},zo={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},Oo={key:2,class:"map-hud-muted",role:"status"},Vo={key:3,class:"map-hud-muted",role:"status"},Xo={class:"map-hud-actions"},Uo={key:4,role:"status",class:"map-hud-muted"},Yo={key:5,class:"map-hud-muted"},No={key:6,class:"map-hud-muted"},Ho={__name:"AreaHud",setup(r){const{store:e,area:t,locked:n,acceptArea:i}=tt(),a=lr*100,o=e.area,l=j(()=>!e.mapReady||n.value),u=j(()=>!!(o.region||o.loadedArea)),s=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],f=gr.map(({label:c,value:p})=>({label:c,value:p}));function h(c){o.shape=c,t.startSelection()}const g={rectangle:"Click one corner, then the opposite corner.",circle:"Click the centre, then a point on the edge.",polygon:"Click the first point to finish."},d=Mi.map(c=>({label:kt[c],value:c}));return(c,p)=>{var B,P;const x=nr,y=Fr,w=Qe,m=xt,b=or,$=Er,v=Je,k=et;return O(),Y("div",Eo,[V(x,{modelValue:_(e).wind.model,"onUpdate:modelValue":p[0]||(p[0]=M=>_(e).wind.model=M),options:_(d),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:_(n)},null,8,["modelValue","options","disabled"]),V(y,{modelValue:_(o).source,"onUpdate:modelValue":p[1]||(p[1]=M=>_(o).source=M),label:"Buildings","aria-label":"Building source",size:"small",options:s,"text-by":"text","value-by":"value",disabled:_(n)},null,8,["modelValue","disabled"]),V(w,{block:"",size:"small",preset:u.value?"secondary":void 0,icon:"mso-location_city",disabled:l.value,loading:_(o).loading,onClick:_(t).loadBuildings},{default:G(()=>[...p[5]||(p[5]=[Z("Show detailed buildings",-1)])]),_:1},8,["preset","disabled","loading","onClick"]),_(o).loadedArea?(O(),Y("p",Lo," Loaded detailed buildings: "+F(_(o).loadedArea.count)+" parts · "+F((_(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+F((_(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+F(_(o).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(O(),Y("p",Do," Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly. ")),E("div",zo,[p[6]||(p[6]=E("span",{class:"map-hud-muted"},"Buffer",-1)),V(m,{modelValue:_(o).bufferPercent,"onUpdate:modelValue":p[2]||(p[2]=M=>_(o).bufferPercent=M),min:0,max:a,step:5,"aria-label":"Buffer per side (%)",disabled:_(n)},null,8,["modelValue","disabled"]),V(b,{modelValue:_(o).bufferPercent,"onUpdate:modelValue":p[3]||(p[3]=M=>_(o).bufferPercent=M),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:a,step:5,disabled:_(n)},null,8,["modelValue","disabled"]),p[7]||(p[7]=E("span",{class:"map-hud-muted"},"%",-1))]),V($,{modelValue:_(e).terrain,"onUpdate:modelValue":p[4]||(p[4]=M=>_(e).terrain=M),label:"Terrain as solid ground (test)",disabled:_(n)||_(e).terrainLoading},null,8,["modelValue","disabled"]),_(e).terrainLoading?(O(),Y("p",Oo,"Loading ground heights…")):(B=_(e).grid)!=null&&B.terrain?(O(),Y("p",Vo," Ground "+F(Math.round(_(e).grid.terrain.lowM))+"–"+F(Math.round(_(e).grid.terrain.highM))+" m, given to the model as solid blocks from the lowest point. The models learnt flat cities only: a test, not a checked prediction. ",1)):W("",!0),V(x,{"model-value":_(o).shape,options:_(f),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Area shape",class:"even-toggle",disabled:l.value,"onUpdate:modelValue":h},null,8,["model-value","options","disabled"]),E("div",Xo,[V(w,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:l.value,"aria-label":"Select region",onClick:_(t).startSelection},{default:G(()=>[...p[8]||(p[8]=[Z("Draw area",-1)])]),_:1},8,["disabled","onClick"]),V(w,{size:"small",preset:u.value?void 0:"secondary",disabled:!_(e).mapReady||!u.value||_(n),loading:_(o).loading,"aria-label":_(o).region?"Use selected region":"Use full loaded area",onClick:_(i)},{default:G(()=>[Z(F(_(o).region?"Use region":"Use full area"),1)]),_:1},8,["preset","disabled","loading","aria-label","onClick"]),_(o).region?(O(),$e(w,{key:0,size:"small",preset:"secondary",icon:"mso-close",disabled:_(n),onClick:_(t).clearSelection},{default:G(()=>[...p[9]||(p[9]=[Z("Clear",-1)])]),_:1},8,["disabled","onClick"])):W("",!0)]),_(o).drawing?(O(),Y("p",Uo," Draw around buildings; touching the edge selects the whole building. "+F(g[_(o).shape])+" Esc cancels. ",1)):_(o).region?(O(),Y("p",Yo,F(_(o).region.extentM[0])+" × "+F(_(o).region.extentM[1])+" m · 4 m cells · "+F(_(o).region.buffer?"main + buffer":"main domain"),1)):W("",!0),(P=_(o).region)!=null&&P.mainDomain?(O(),Y("p",No," Main: "+F(_(o).region.mainDomain.extentM[0])+" × "+F(_(o).region.mainDomain.extentM[1])+" m. Buffer: "+F((_(o).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):W("",!0),_(o).loading?(O(),$e(v,{key:7,"model-value":_(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):W("",!0),_(o).error?(O(),$e(k,{key:8,color:"danger"},{default:G(()=>[Z(F(_(o).error),1)]),_:1})):W("",!0)])}}},Wo={class:"flex flex-col gap-3"},jo={key:0,class:"map-hud-muted"},Go={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},qo={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Ko=["aria-valuenow","aria-disabled"],Zo=["x1","y1","x2","y2"],Qo=["cx","cy"],Jo={class:"flex flex-col gap-2 min-w-0"},ea={class:"cardinals grid grid-cols-4 gap-1"},ta={key:3,class:"flex flex-col gap-1"},ra={role:"status",class:"map-hud-muted"},ia={key:4,class:"map-hud-muted"},na={__name:"WindHud",setup(r){const{store:e,locked:t,runPrediction:n}=tt(),i=e.wind,a=e.engine,o=j(()=>!!e.grid&&!t.value),l=j(()=>{if(!e.grid)return null;const d=fr(e.grid);return{topM:Math.round((d.at(-1)+.5)*Ie),layers:d.length}}),u=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],s=Ge(null),f=j(()=>Number(i.directionDeg)*Math.PI/180);function h(d){if(!o.value||d.type==="pointermove"&&!d.buttons)return;d.type==="pointerdown"&&d.currentTarget.setPointerCapture(d.pointerId);const c=s.value.getBoundingClientRect(),p=d.clientX-c.left-c.width/2,x=-(d.clientY-c.top-c.height/2);i.directionDeg=(Math.round(Math.atan2(x,p)*180/Math.PI)+360)%360}function g(d){if(!o.value)return;const c={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[d.key]??0;c&&(d.preventDefault(),i.directionDeg=(Number(i.directionDeg)+c+360)%360)}return(d,c)=>{const p=xt,x=or,y=Qe,w=et,m=Je;return O(),Y("div",Wo,[_(e).grid?W("",!0):(O(),Y("p",jo,"Choose a simulation area in step 1 first.")),E("div",Go,[c[3]||(c[3]=E("span",{class:"map-hud-muted"},"Speed",-1)),V(p,{modelValue:_(i).speedMps,"onUpdate:modelValue":c[0]||(c[0]=b=>_(i).speedMps=b),min:_(Ot),max:_(zt),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),V(x,{modelValue:_(i).speedMps,"onUpdate:modelValue":c[1]||(c[1]=b=>_(i).speedMps=b),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:_(Ot),max:_(zt),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),c[4]||(c[4]=E("span",{class:"map-hud-muted"},"m/s",-1))]),E("div",qo,[(O(),Y("svg",{ref_key:"dial",ref:s,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":_(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:Lr(h,["prevent"]),onPointermove:h,onKeydown:g},[c[5]||(c[5]=Dr('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-8f54e644></circle><text x="80" y="16" text-anchor="middle" data-v-8f54e644>90°</text><text x="146" y="84" text-anchor="middle" data-v-8f54e644>0°</text><text x="80" y="152" text-anchor="middle" data-v-8f54e644>270°</text><text x="14" y="84" text-anchor="middle" data-v-8f54e644>180°</text>',5)),E("line",{x1:80-Math.cos(f.value)*30,y1:80+Math.sin(f.value)*30,x2:80+Math.cos(f.value)*42,y2:80-Math.sin(f.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Zo),E("circle",{cx:80+Math.cos(f.value)*42,cy:80-Math.sin(f.value)*42,r:"5",class:"needle-tip"},null,8,Qo)],40,Ko)),E("div",Jo,[V(x,{modelValue:_(i).directionDeg,"onUpdate:modelValue":c[2]||(c[2]=b=>_(i).directionDeg=b),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),E("div",ea,[(O(),Y(ve,null,ar(u,b=>V(y,{key:b.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+b.text,onClick:$=>_(i).directionDeg=b.value},{default:G(()=>[Z(F(b.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),_(e).error?(O(),$e(w,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:G(()=>[Z(F(_(e).error),1)]),_:1})):W("",!0),_(a).error?(O(),$e(w,{key:2,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:G(()=>[Z(F(_(a).error),1)]),_:1})):W("",!0),_(a).busy?(O(),Y("div",ta,[V(m,{"model-value":_(a).progress*100,indeterminate:_(a).progress===0},null,8,["model-value","indeterminate"]),E("p",ra,F(_(a).stage),1)])):W("",!0),l.value&&!_(a).busy?(O(),Y("p",ia," 3D wind: ground to "+F(l.value.topM)+" m · "+F(l.value.layers)+" layers ",1)):W("",!0),V(y,{block:"",disabled:!o.value,loading:_(a).busy,"aria-label":"Run prediction",onClick:_(n)},{default:G(()=>[...c[6]||(c[6]=[Z("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},oa=bt(na,[["__scopeId","data-v-8f54e644"]]),aa={class:"flex flex-col gap-3"},sa={key:0,class:"map-hud-muted"},la={key:0,class:"hud-row hud-row--value"},ua={class:"hud-value"},ca={key:1,class:"hud-row hud-row--value"},da={class:"hud-value"},fa={key:0,class:"hud-row"},ga={class:"hud-row"},ha={key:0,class:"flex flex-col gap-1 text-xs"},pa={class:"flex justify-between gap-2 map-hud-muted"},ma={class:"map-hud-muted"},ya={__name:"VisualizeHud",setup(r){const{store:e}=tt(),t=e.display,n=j(()=>e.engine.prediction),i=j(()=>{var y;return e.engine.layersReady||((y=n.value)==null?void 0:y.layers.length)||0}),a=j(()=>n.value?ki(n.value):Vt),o=j(()=>n.value?Si(n.value):[0,0]),l=j(()=>Ve.filter(y=>{var w;return!(y.notInV2&&((w=n.value)==null?void 0:w.settings.model)==="v2")}).map(y=>({label:y.label,value:y.id}))),u=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],s=j(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(y=>y.value!=="3d"||t.view==="particles")),f=j({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:y=>t.plane=y}),h=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],g=j(()=>f.value==="h"||f.value==="3d"&&t.view==="particles"&&t.particles==="white"),d=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],c=j(()=>{const y=Math.round(Number(t.planeOffsetM));return(y>0?"+":"")+y+" m"}),p=j(()=>{var y;return((y=Ve.find(w=>w.id===t.variable))==null?void 0:y.ramp)??"turbo"}),x=j(()=>"linear-gradient(to right,"+Array.from({length:17},(y,w)=>"rgb("+Ci(p.value,w/16).join(",")+") "+w*100/16+"%").join(",")+")");return(y,w)=>{const m=nr,b=xt,$=Or,v=Vr;return O(),Y("div",aa,[n.value?(O(),Y(ve,{key:1},[V(m,{modelValue:_(t).view,"onUpdate:modelValue":w[0]||(w[0]=k=>_(t).view=k),options:u,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),_(t).view!=="off"?(O(),Y(ve,{key:0},[V(m,{modelValue:f.value,"onUpdate:modelValue":w[1]||(w[1]=k=>f.value=k),options:s.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),g.value?(O(),Y("div",la,[w[9]||(w[9]=E("span",{class:"hud-label"},"Height",-1)),V(b,{modelValue:_(t).sliceHeightM,"onUpdate:modelValue":w[2]||(w[2]=k=>_(t).sliceHeightM=k),min:_(Vt),max:a.value,step:_(Ie),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),E("span",ua,F(Number(_(t).sliceHeightM).toFixed(1))+" m",1)])):W("",!0),f.value==="v"?(O(),Y("div",ca,[w[10]||(w[10]=E("span",{class:"hud-label"},"Position",-1)),V(b,{modelValue:_(t).planeOffsetM,"onUpdate:modelValue":w[3]||(w[3]=k=>_(t).planeOffsetM=k),min:o.value[0],max:o.value[1],step:_(ie),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),E("span",da,F(c.value),1)])):W("",!0)],64)):W("",!0),_(t).view!=="off"?(O(),Y(ve,{key:1},[_(t).view==="particles"?(O(),Y("div",fa,[w[11]||(w[11]=E("span",{class:"hud-label"},"View mode",-1)),V(m,{modelValue:_(t).particles,"onUpdate:modelValue":w[4]||(w[4]=k=>_(t).particles=k),options:h,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])])):W("",!0),E("div",ga,[w[12]||(w[12]=E("span",{class:"hud-label"},"Density",-1)),V(m,{modelValue:_(t).density,"onUpdate:modelValue":w[5]||(w[5]=k=>_(t).density=k),options:d,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),V($,{modelValue:_(t).paused,"onUpdate:modelValue":w[6]||(w[6]=k=>_(t).paused=k),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):W("",!0),_(t).view!=="off"?(O(),Y(ve,{key:2},[V(v,{class:"!my-0"}),V(m,{modelValue:_(t).variable,"onUpdate:modelValue":w[7]||(w[7]=k=>_(t).variable=k),options:l.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),_(e).legend?(O(),Y("div",ha,[E("div",{class:"colorbar",style:zr({background:x.value})},null,4),E("div",pa,[E("span",null,F(_(e).legend.low.toFixed(2)),1),E("strong",null,F(_(e).legend.legend)+" ("+F(_(e).legend.unit)+")",1),E("span",null,F(_(e).legend.high.toFixed(2)),1)])])):W("",!0)],64)):W("",!0),V(v,{class:"!my-0"}),V($,{modelValue:_(t).showSurroundings,"onUpdate:modelValue":w[8]||(w[8]=k=>_(t).showSurroundings=k),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),E("p",ma,[Z(F(_(kt)[n.value.settings.model])+" · 3D wind up to "+F(a.value.toFixed(0))+" m · "+F(i.value)+" / "+F(n.value.settings.layers.length)+" layers · "+F((n.value.milliseconds/1e3).toFixed(1))+" s ",1),n.value.grid.mainDomain?(O(),Y(ve,{key:0},[Z(" · solid outline: main area, dashed: "+F((n.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):W("",!0)])],64)):(O(),Y("p",sa,"Run a prediction to see the 3D wind."))])}}},wa=bt(ya,[["__scopeId","data-v-ce293a4f"]]),xa={class:"space-y-2"},ba={key:0,class:"map-hud-muted"},va={class:"grid grid-cols-2 gap-2"},_a={__name:"DownloadsHud",setup(r){const{store:e,download:t}=tt(),n=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(a){const o=e.engine;return e.downloading||o.downloading||a!=="model"&&(o.busy||!o.prediction)}return(a,o)=>{const l=Qe,u=Je,s=et;return O(),Y("div",xa,[_(e).grid?(O(),Y(ve,{key:1},[E("div",va,[(O(),Y(ve,null,ar(n,f=>V(l,{key:f.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":f.label,disabled:i(f.id),onClick:h=>_(t)(f.id)},{default:G(()=>[Z(F(f.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),_(e).downloading?(O(),$e(u,{key:0,indeterminate:"","aria-label":"Preparing download"})):W("",!0),_(e).downloadError?(O(),$e(s,{key:1,color:"danger"},{default:G(()=>[Z(F(_(e).downloadError),1)]),_:1})):W("",!0)],64)):(O(),Y("p",ba,"Choose a simulation area before downloading its model."))])}}},$a={class:"flume-hud-stack map-hud-column"},Ma={class:"flume-heading map-hud-heading city-glass"},ka={class:"flume-heading__row"},Sa={key:0,class:"flume-info"},Ca={class:"flume-info__title"},Ba={class:"flume-info__copyright"},Pa=["href"],Ia={class:"map-hud-muted normal-case"},Aa={class:"map-hud-muted normal-case"},Ra={key:0,class:"flume-status"},Ta={__name:"FlumeCityView",setup(r){const{mapElement:e,store:t,controls:n,locked:i,area:a}=Fo(),{controlsVisible:o}=n,{currentPresetName:l}=ir(),u=j(()=>l.value==="dark"),s=Ge(!1),f=j(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),h={particles:"Particles",slice:"Slice",off:"Off"},g=j(()=>t.engine.prediction?h[t.display.view]:""),d={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(c,p)=>{const x=Qe,y=et,w=Je;return O(),Y("section",{class:Nr(["flume-page map-glass",{"map-glass--dark":u.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=Yr((...m)=>_(a).stopSelection&&_(a).stopSelection(...m),["esc"]))},[Xr(E("div",$a,[E("header",Ma,[E("div",ka,[p[2]||(p[2]=E("h1",null,"Flume City",-1)),V(x,{preset:"secondary",color:"textPrimary",size:"small",icon:s.value?"mso-close":"mso-info","aria-label":s.value?"Hide Flume City information":"Show Flume City information","aria-expanded":s.value,onClick:p[0]||(p[0]=m=>s.value=!s.value)},null,8,["icon","aria-label","aria-expanded"])]),s.value?(O(),Y("div",Sa,[E("p",Ca,F(d.title),1),E("p",null,F(d.authors),1),E("p",null,F(d.summary),1),V(x,{preset:"secondary",size:"small",icon:"mso-description",href:d.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:G(()=>[...p[3]||(p[3]=[Z("arXiv",-1)])]),_:1},8,["href"]),E("div",Ba,[E("p",null,[p[4]||(p[4]=Z(" Developed and maintained by ",-1)),E("a",{href:_(Xe).lab.url,target:"_blank",rel:"noopener"},F(_(Xe).lab.name),9,Pa),p[5]||(p[5]=E("br",null,null,-1)),Z("("+F(_(Xe).lead)+") ",1)]),E("p",null,F(_(Xe).place),1)])])):W("",!0)]),V(Ue,{title:"1 · Simulation area",inert:_(i),collapsed:!!_(t).grid},{default:G(()=>[V(Ho)]),_:1},8,["inert","collapsed"]),V(Ue,{title:"2 · Wind configuration",collapsed:!_(t).grid},{"header-extra":G(()=>[E("span",Ia,F(f.value),1)]),default:G(()=>[V(oa)]),_:1},8,["collapsed"]),V(Ue,{title:"3 · Wind visualization",collapsed:!_(t).engine.prediction},{"header-extra":G(()=>[E("span",Aa,F(g.value),1)]),default:G(()=>[V(wa)]),_:1},8,["collapsed"]),V(Ue,{title:"4 · Downloads",collapsed:!_(t).grid},{default:G(()=>[V(_a)]),_:1},8,["collapsed"]),_(t).error&&!_(t).grid?(O(),$e(y,{key:0,color:"danger"},{default:G(()=>[Z(F(_(t).error),1)]),_:1})):W("",!0)],512),[[Ur,_(o)]]),E("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),V(Ui,{controls:_(n),shown:_(t).mapCreated,disabled:_(i)},null,8,["controls","shown","disabled"]),!_(t).mapReady&&!_(t).error?(O(),Y("div",Ra,[V(w,{indeterminate:"","aria-label":"Loading Flume map"})])):W("",!0)],34)}}},Ka=bt(Ta,[["__scopeId","data-v-195ac9c9"]]);export{Ka as default};
