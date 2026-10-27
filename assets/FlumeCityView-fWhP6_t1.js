import{w as Z,o as Ue,m as ge,r as pe,b as Pt,c as le,a as we,d as E,q as N,g as z,K as ct,f as j,x as X,L as Fe,t as L,l as _,s as Y,e as ie,J as Ce,v as Pe,_ as We,U as ee,a2 as ce,H as _t,a3 as Bt,F as de,y as je,j as B,a4 as It,p as At,Q as $t,W as Ze,X as Et,i as Rt,Y as Vt,M as Dt,a1 as Tt}from"./index-BpW2MoLR.js";import{i as zt,h as Nt,t as Je,j as Lt,O as Ut,p as me,v as Re,S as Ve,w as xe,n as ve,B as ut,e as fe,D as Be,x as De,y as he,R as Wt,V as O,M as Te,z as jt,H as ft,E as ze,N as Ke,F as Xt,m as ht,c as Ot,W as qt,G as Qe,I as et,J as Yt,q as Gt,a as Ht,s as tt,b as Zt,r as Ie}from"./mapbox-gl-geocoder-BGUqpp1Y.js";import{c as gt}from"./index-D6bWIqpK.js";import{m as pt,c as Ne}from"./geojsonToStl-Bbo8coar.js";import{z as Jt}from"./archive-Dz16c6AW.js";import{d as Kt}from"./download-B6B1Q6H-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./earcut-Drp1yMsm.js";import"./jszip.min-UX6Ol9Iw.js";const re="flume-detailed-buildings";function mt(r){var n,i,a;const e=[],t=new Set;for(const s of r){if(!["Polygon","MultiPolygon"].includes((n=s.geometry)==null?void 0:n.type))continue;const o=Number((i=s.properties)==null?void 0:i.height);if(!Number.isFinite(o)||o<=0)continue;const l=Math.min(o,Math.max(0,Number((a=s.properties)==null?void 0:a.min_height)||0)),d=JSON.stringify([s.geometry,o,l]);t.has(d)||(t.add(d),e.push({type:"Feature",properties:{...s.properties,height:o,min_height:l},geometry:structuredClone(s.geometry)}))}return{type:"FeatureCollection",features:e}}function Qt(r,e){var n;return!((n=r==null?void 0:r.features)!=null&&n.length)||!e?r:{type:"FeatureCollection",features:r.features.filter(i=>!zt(i,e))}}function ei(r,e,t){var i,a;const n=[];if((i=t==null?void 0:t.features)!=null&&i.length&&n.push(...t.features),r!=null&&r.getSource){const s=e==="osm"?"composite":"city-concordia",o=e==="osm"?"building":"Montreal_Qatar-6hvjju",l=e==="osm"?"city-osm-3d":"city-concordia-3d";try{if((a=r.getLayer)!=null&&a.call(r,l)){const d=r.queryRenderedFeatures(void 0,{layers:[l]});d!=null&&d.length&&n.push(...d)}}catch{}try{if(r.getSource(s)){const d=r.querySourceFeatures(s,{sourceLayer:o});d!=null&&d.length&&n.push(...d)}}catch{}}return mt(n)}function Le(r,e){const t=e??{type:"FeatureCollection",features:[]};r.getSource(re)?r.getSource(re).setData(t):r.addSource(re,{type:"geojson",data:t,maxzoom:22,tolerance:0}),r.getLayer(re)||r.addLayer({id:re,type:"fill-extrusion",source:re,minzoom:0,paint:{"fill-extrusion-color":"#8cb8d8","fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function yt(r,e){for(const w of[r,e])if(!Array.isArray(w)||w.length<2||!w.every(Number.isFinite)||Math.abs(w[0])>180||Math.abs(w[1])>85.051129)throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(r[0],e[0]),Math.min(r[1],e[1])];if(Math.abs(r[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const n=pt(t),i=Ne(t),[a,s]=n([Math.max(r[0],e[0]),Math.max(r[1],e[1])]);if(a<=0||s<=0)throw new Error("The region is empty.");const o=Math.ceil((a-1e-6)/4),l=Math.ceil((s-1e-6)/4);if(o>750||l>750)throw new Error("Region too large: maximum 750 cells (3 km) per side.");const d=i([o*4,l*4]),c=[...t,...d],[u,h,f,x]=c,g={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[u,h],[f,h],[f,x],[u,x],[u,h]]]}};return{origin:t,bounds:c,extentM:[o*4,l*4],polygon:g}}function ti(r,e){var o,l,d,c,u;const t=[],n=new Set,i=[];let a=0,s=0;for(const h of r){if(!["Polygon","MultiPolygon"].includes((o=h.geometry)==null?void 0:o.type))continue;gt(h,m=>{if(!Number.isFinite(m[0])||!Number.isFinite(m[1])||Math.abs(m[0])>180||Math.abs(m[1])>85.051129)throw new Error("Invalid building coordinates.")});const f={type:"Feature",properties:{...h.properties},geometry:structuredClone(h.geometry)},x=Nt({type:"FeatureCollection",features:[f,e.selection??e.polygon]});if(!x)continue;const g=(l=h.properties)==null?void 0:l.height;if(g==null||g===""){a++;continue}const w=Number(g);if(!Number.isFinite(w)||w<0||w>240)throw new Error("Building height must be finite and between 0 and 240 m.");if(w===0){a++;continue}const p=JSON.stringify([h.geometry,w,(d=h.properties)==null?void 0:d.min_height]);n.has(p)||(n.add(p),Number((c=h.properties)==null?void 0:c.min_height)>0&&s++,t.push({...x,properties:{...f.properties,source_height:w,source_min_height:Number((u=h.properties)==null?void 0:u.min_height)||0,height:Math.max(1,Math.round(w/1.5))*1.5,min_height:0}}))}return a&&i.push(a+" parts have missing/zero height and were omitted."),s&&i.push(s+" raised parts are treated as solid from the ground to their roof."),t.length||i.push("No buildings found in loaded map data. This run will use open ground."),i.push("Loaded map tiles only; this is not a complete OSM database extract."),{buildings:{type:"FeatureCollection",features:t},warnings:i}}function ii(r){var i;if(((i=r==null?void 0:r.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");const e=[1/0,1/0,-1/0,-1/0];let t=0;if(gt(r,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e[0]=Math.min(e[0],a[0]),e[1]=Math.min(e[1],a[1]),e[2]=Math.max(e[2],a[0]),e[3]=Math.max(e[3],a[1]),t++}),t<4)throw new Error("A polygon needs at least three corners.");return{...yt(e.slice(0,2),e.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(r.geometry)}}}const it=65536*65536,ni=12,nt=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),ri=0,ai=1,rt=2,si=5;class oi{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,n=this.length){let i;for(;i=this.nextField(n);)e(i,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*it;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*it;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,n=t[this.pos++];if(n<128)return n;let i=n&127,a;return a=t[this.pos++],i|=(a&127)<<7,a<128||(a=t[this.pos++],i|=(a&127)<<14,a<128)||(a=t[this.pos++],i|=(a&127)<<21,a<128)?i:(a=t[this.pos],i|=(a&15)<<28,li(i,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=ni&&nt?nt.decode(this.buf.subarray(t,e)):di(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===rt?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===ri)for(;this.buf[this.pos++]>127;);else if(t===rt)this.pos=this.readVarint()+this.pos;else if(t===si)this.pos+=4;else if(t===ai)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function li(r,e,t){const n=t.buf;let i,a;if(a=n[t.pos++],i=(a&112)>>4,a<128||(a=n[t.pos++],i|=(a&127)<<3,a<128)||(a=n[t.pos++],i|=(a&127)<<10,a<128)||(a=n[t.pos++],i|=(a&127)<<17,a<128)||(a=n[t.pos++],i|=(a&127)<<24,a<128)||(a=n[t.pos++],i|=(a&1)<<31,a<128))return ae(r,i,e);throw new Error("Expected varint not more than 10 bytes")}function ae(r,e,t){return t?e*4294967296+(r>>>0):(e>>>0)*4294967296+(r>>>0)}function di(r,e,t){let n="",i=e;for(;i<t;){const a=r[i];let s=null,o=a>239?4:a>223?3:a>191?2:1;if(i+o>t)break;let l,d,c;o===1?a<128&&(s=a):o===2?(l=r[i+1],(l&192)===128&&(s=(a&31)<<6|l&63,s<=127&&(s=null))):o===3?(l=r[i+1],d=r[i+2],(l&192)===128&&(d&192)===128&&(s=(a&15)<<12|(l&63)<<6|d&63,(s<=2047||s>=55296&&s<=57343)&&(s=null))):o===4&&(l=r[i+1],d=r[i+2],c=r[i+3],(l&192)===128&&(d&192)===128&&(c&192)===128&&(s=(a&15)<<18|(l&63)<<12|(d&63)<<6|c&63,(s<=65535||s>=1114112)&&(s=null))),s===null?(s=65533,o=1):s>65535&&(s-=65536,n+=String.fromCharCode(s>>>10&1023|55296),s=56320|s&1023),n+=String.fromCharCode(s),i+=o}return n}class bt{constructor(e,t,n,i,a){for(this.properties=Object.create(null),this.extent=n,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=a;e.pos<t;){const s=e.readVarint();if(s===8)this.id=e.readVarint();else if(s===18){const o=e.readVarint()+e.pos;for(;e.pos<o;){const l=i[e.readVarint()],d=a[e.readVarint()];this.properties[l]=d}}else s===24?this.type=e.readVarint():(s===34&&(this._geometry=e.pos),e.skip(s))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,n=[];let i,a=1,s=0,o=0,l=0;for(;e.pos<t;){if(s<=0){const d=e.readVarint();if(a=d&7,s=d>>3,s===0)continue}if(s--,a===1)o+=e.readSVarint(),l+=e.readSVarint(),i&&n.push(i),i=[new Je(o,l)];else if(a===2)o+=e.readSVarint(),l+=e.readSVarint(),i&&i.push(new Je(o,l));else if(a===7)i&&i.push(i[0].clone());else throw new Error(`unknown command ${a}`)}return i&&n.push(i),n}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let n=1,i=0,a=0,s=0,o=1/0,l=-1/0,d=1/0,c=-1/0;for(;e.pos<t;){if(i<=0){const u=e.readVarint();if(n=u&7,i=u>>3,i===0)continue}if(i--,n===1||n===2)a+=e.readSVarint(),s+=e.readSVarint(),a<o&&(o=a),a>l&&(l=a),s<d&&(d=s),s>c&&(c=s);else if(n!==7)throw new Error(`unknown command ${n}`)}return[o,d,l,c]}toGeoJSON(e,t,n){const i=this.extent*Math.pow(2,n),a=this.extent*e,s=this.extent*t,o=this.loadGeometry();function l(h){return[(h.x+a)*360/i-180,360/Math.PI*Math.atan(Math.exp((1-(h.y+s)*2/i)*Math.PI))-90]}function d(h){return h.map(l)}let c;if(this.type===1){const h=[];for(const x of o)h.push(x[0]);const f=d(h);c=h.length===1?{type:"Point",coordinates:f[0]}:{type:"MultiPoint",coordinates:f}}else if(this.type===2){const h=o.map(d);c=h.length===1?{type:"LineString",coordinates:h[0]}:{type:"MultiLineString",coordinates:h}}else if(this.type===3){const h=ci(o),f=[];for(const x of h)f.push(x.map(d));c=f.length===1?{type:"Polygon",coordinates:f[0]}:{type:"MultiPolygon",coordinates:f}}else throw new Error("unknown feature type");const u={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(u.id=this.id),u}}bt.types=["Unknown","Point","LineString","Polygon"];function ci(r){const e=r.length;if(e<=1)return[r];const t=[];let n,i;for(let a=0;a<e;a++){const s=ui(r[a]);s!==0&&(i===void 0&&(i=s<0),i===s<0?(n&&t.push(n),n=[r[a]]):n&&n.push(r[a]))}return n&&t.push(n),t}function ui(r){let e=0;for(let t=0,n=r.length,i=n-1,a,s;t<n;i=t++)a=r[t],s=r[i],e+=(s.x-a.x)*(a.y+s.y);return e}class fi{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const n=e.readVarint();n===10?this.name=e.readString():n===18?(this._features.push(e.pos),e.skip(n)):n===26?this._keys.push(e.readString()):n===34?this._values.push(hi(e)):n===40?this.extent=e.readVarint():n===120?this.version=e.readVarint():e.skip(n)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new bt(this._pbf,t,this.extent,this._keys,this._values)}}function hi(r){let e=null;const t=r.readVarint()+r.pos;for(;r.pos<t;){const n=r.readVarint();e=n===10?r.readString():n===21?r.readFloat():n===25?r.readDouble():n===32?r.readVarint(!0):n===40?r.readVarint():n===48?r.readSVarint():n===56?r.readBoolean():(r.skip(n),null)}if(e==null)throw new Error("unknown feature value");return e}class gi{constructor(e,t=e.length){const n=Object.create(null);for(;e.pos<t;){const i=e.readVarint();if(i===26){const a=new fi(e,e.readVarint()+e.pos);a.length&&(n[a.name]=a)}else e.skip(i)}this.layers=n}}function pi(r,e){const t=2**e,n=c=>(c+180)/360*t,i=c=>{const u=Math.max(-85.051129,Math.min(85.051129,c))*Math.PI/180;return(1-Math.asinh(Math.tan(u))/Math.PI)/2*t},a=Math.max(0,Math.floor(n(r[0]))),s=Math.min(t-1,Math.ceil(n(r[2])-1e-9)-1),o=Math.max(0,Math.floor(i(r[3]))),l=Math.min(t-1,Math.ceil(i(r[1])-1e-9)-1);if((s-a+1)*(l-o+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const d=[];for(let c=o;c<=l;c++)for(let u=a;u<=s;u++)d.push({z:e,x:u,y:c});return d}async function at(r,e){e==null||e.throwIfAborted();const t=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),n=await fetch(r,{signal:t});if(!n.ok)throw new Error("Building data request failed (HTTP "+n.status+"). Check source access and token.");return n}function st(r,e){var n;const t=new URL(r,((n=globalThis.location)==null?void 0:n.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function mi({sourceConfig:r,source:e,bounds:t,accessToken:n,signal:i,onProgress:a}){var x;if(!r)throw new Error("The selected basemap does not provide this building source.");let s=r;if(r.url){let g=r.url;if(g.startsWith("mapbox://")){const w=g.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(w))throw new Error("Invalid Mapbox tileset ID.");g="https://api.mapbox.com/v4/"+w+".json?secure"}s=await(await at(st(g,n),i)).json()}if(!((x=s.tiles)!=null&&x.length))throw new Error("The selected source has no vector tile URLs.");const o=Math.max(s.minzoom??0,Math.min(16,s.maxzoom??16));if(!Number.isInteger(o)||o<0||o>22)throw new Error("Unsupported tile detail level.");const l=pi(t,o),d=[];let c=0,u=0,h=0;const f=e==="osm"?"building":"Montreal_Qatar-6hvjju";return await Promise.all(Array.from({length:Math.min(4,l.length)},async()=>{for(;c<l.length;){const{x:g,y:w,z:p}=l[c++];let m=s.tiles[0].replaceAll("{z}",String(p)).replaceAll("{x}",String(g)).replaceAll("{y}",String(s.scheme==="tms"?2**p-w-1:w)).replaceAll("{ratio}","");m=st(m,n);const b=await(await at(m,i)).arrayBuffer();if(h+=b.byteLength,b.byteLength>16*1024*1024||h>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const y=new gi(new oi(new Uint8Array(b))).layers[f];if(y)for(let v=0;v<y.length;v++){const S=y.feature(v);e==="osm"&&String(S.properties.extrude)!=="true"||S.type===3&&d.push(S.toGeoJSON(g,w,p))}u++,a==null||a(u/l.length)}})),i==null||i.throwIfAborted(),{features:d,zoom:o,tileCount:l.length}}const ue="flume-region-domain";function yi({getMap:r,ready:e,onChange:t,accessToken:n}){const i=pe({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,s=!1,o=null,l=0,d=null;function c(){l++,o==null||o.abort(),i.snapshot=null,t==null||t()}function u(){const F=r();if(!F||!e.value)return;Le(F,d==null?void 0:d.preview);const M={type:"FeatureCollection",features:i.region?[i.region.polygon]:d?[d.area.polygon]:[]};F.getSource(ue)?F.getSource(ue).setData(M):(F.addSource(ue,{type:"geojson",data:M}),F.addLayer({id:ue,type:"line",source:ue,paint:{"line-color":"#a8b8cc","line-width":1.5,"line-dasharray":[4,3]}}))}function h(F){c(),i.error="";try{i.region=ge(ii(F))}catch(M){i.region=null,i.error=M.message}u()}function f(F){var D;if(s||!a)return;const M=(D=F.features)==null?void 0:D.at(-1);if(F.type==="draw.create"&&M)for(const T of a.getAll().features)T.id!==M.id&&a.delete(T.id);const C=a.getAll().features.find(T=>T.geometry.type==="Polygon");C?h(C):(c(),i.region=null,u()),i.drawing=!1}function x(F){i.drawing=F.mode==="draw_polygon"||F.mode==="direct_select"}function g(){var M;const F=r();if(!F||!e.value)throw new Error("Wait for the map to load.");if(!a){a=new Lt({displayControlsDefault:!1,controls:{},boxSelect:!1}),F.addControl(a,"bottom-left");for(const C of["draw.create","draw.update","draw.delete"])F.on(C,f);F.on("draw.modechange",x);for(const C of F.getStyle().layers)C.id.startsWith("gl-draw-")&&(C.type==="fill"&&(F.setPaintProperty(C.id,"fill-color","#ffd000"),F.setPaintProperty(C.id,"fill-opacity",.1)),C.type==="line"&&F.setPaintProperty(C.id,"line-color","#ffd000"));(M=i.region)!=null&&M.selection&&a.add(i.region.selection)}return a}function w(){a&&a.changeMode("simple_select"),i.drawing=!1}function p(){if(!i.loading)try{const F=g();c(),i.region=null,F.deleteAll(),u(),F.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(F){i.error=F.message}}function m(){w(),a==null||a.deleteAll(),c(),i.region=null,i.error="",u()}function b(F){var D;const M=r(),C=M.getCanvas().clientWidth;(D=M.resize)==null||D.call(M),M.fitBounds([F.bounds.slice(0,2),F.bounds.slice(2,4)],{padding:C>=640?{top:40,bottom:40,left:Math.min(320,C*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function y(F,M,C,D){if(C.signal.throwIfAborted(),(d==null?void 0:d.source)===M&&F.bounds.every(($,q)=>q<2?$>=d.area.bounds[q]:$<=d.area.bounds[q]))return d.tiles;const T=r().getStyle().sources[M==="osm"?"composite":"city-concordia"],R=await mi({sourceConfig:T,source:M,bounds:F.bounds,accessToken:n,signal:C.signal,onProgress:$=>{D===l&&(i.progress=$)}});if(s||C.signal.aborted||D!==l)throw new DOMException("Cancelled","AbortError");const U=mt(R.features);return d={source:M,area:F,tiles:R,preview:U},i.loadedArea=ge({source:M,bounds:[...F.bounds],extentM:[...F.extentM],count:U.features.length}),u(),R}async function v(){if(i.loading||s)return null;const F=r();if(!F||!e.value)return i.error="Wait for the map to load.",null;const M=new AbortController,C=l,D=i.source;o=M,i.loading=!0,i.progress=0,i.error="";try{const T=F.getCenter().wrap().toArray(),R=Ne(T)([-1500,-1500]),U=yt(R,Ne(R)([3e3,3e3]));return b(U),await y(U,D,M,C),s||M.signal.aborted||C!==l?null:(i.snapshot=null,t==null||t(),i.loadedArea)}catch(T){return M.abort(),!s&&C===l&&T.name!=="AbortError"&&(i.error=T.message),null}finally{o===M&&(o=null,s||(i.loading=!1))}}async function S(){if(i.loading||s)return null;!i.region&&(d==null?void 0:d.source)===i.source&&h(d.area.polygon);const F=r(),M=i.region,C=i.source,D=l;if(!F||!e.value||!M)return i.error="Draw and finish a valid polygon first.",null;const T=new AbortController;o=T,i.loading=!0,i.progress=0,i.error="";try{b(M);const R=await y(M,C,T,D);if(s||T.signal.aborted||D!==l)return null;const U={...structuredClone(M),source:C,...ti(R.features,M),dataZoom:R.zoom,tileCount:R.tileCount};return U.warnings=U.warnings.filter($=>!$.startsWith("Loaded map tiles only")),U.warnings.push("Detailed tiles downloaded at zoom "+R.zoom+" independently of the camera; provider data may still omit buildings."),U.warnings.push("Outside the selected polygon, the rectangular computational padding is treated as open ground."),i.snapshot=ge(U),t==null||t(),U}catch(R){return T.abort(),!s&&D===l&&R.name!=="AbortError"&&(i.error=R.message),null}finally{o===T&&(o=null,s||(i.loading=!1))}}function k(){const F=r();if(!(!a||!F)){for(const M of["draw.create","draw.update","draw.delete"])F.off(M,f);F.off("draw.modechange",x),F.removeControl(a),a=null,i.drawing=!1}}function P(){o==null||o.abort(),k()}function I(){var F;u(),(F=i.region)!=null&&F.selection&&g()}function W(){s=!0,l++,o==null||o.abort(),k()}Z(()=>i.source,()=>{c(),d=null,i.loadedArea=null,u(),i.error=""}),Ue(W);function J(){return(d==null?void 0:d.preview)??null}return{state:i,startSelection:p,stopSelection:w,clearSelection:m,setSelection:h,captureRegion:S,loadBuildings:v,getPreview:J,restore:I,beforeStyleChange:P,dispose:W}}function bi(r){const[e,t]=r.extentM,n=Math.round(e/4),i=Math.round(t/4);if(!n||!i||n>750||i>750||Math.abs(n*4-e)>1e-5||Math.abs(i*4-t)>1e-5)throw new Error("Invalid grid extent; use a snapped region of at most 750 cells.");const a=pt(r.origin),s=new Float32Array(n*i);for(const d of r.buildings.features){const c=Number(d.properties.height);if(!Number.isFinite(c)||c<0||c>240)throw new Error("Invalid building height (0..240 metres).");if(!c)continue;const u=Math.max(1,Math.round(c/1.5)),h=d.geometry.type==="Polygon"?[d.geometry.coordinates]:d.geometry.coordinates;for(const f of h){const x=f.map(p=>p.map(a));let g=1/0,w=-1/0;for(const p of x)for(const m of p)g=Math.min(g,m[1]),w=Math.max(w,m[1]);for(let p=Math.max(0,Math.ceil(g/4-.5));p<Math.min(i,Math.ceil(w/4-.5));p++){const m=(p+.5)*4,b=[];for(const y of x)for(let v=0,S=y.length-1;v<y.length;S=v++){const k=y[S],P=y[v];(k[1]<=m&&P[1]>m||P[1]<=m&&k[1]>m)&&b.push(k[0]+(m-k[1])*(P[0]-k[0])/(P[1]-k[1]))}b.sort((y,v)=>y-v);for(let y=0;y+1<b.length;y+=2){const v=Math.max(0,Math.ceil(b[y]/4-.5-1e-8)),S=Math.min(n,Math.ceil(b[y+1]/4-.5-1e-8));for(let k=v;k<S;k++)s[p*n+k]=Math.max(s[p*n+k],u)}}}}let o=0,l=0;for(const d of s)d>0&&o++,l=Math.max(l,d);return{layers:s,nx:n,ny:i,origin:[...r.origin],extentM:[...r.extentM],spacingM:4,layerSpacingM:1.5,statistics:{builtCells:o,maximumHeightM:l*1.5}}}function wi({heightM:r,directionDeg:e,speedMps:t}){const n=(d,c)=>{if(d===""||d===null||d===void 0||!Number.isFinite(Number(d)))throw new Error("Invalid "+c+".");return Number(d)},i=n(r,"height"),a=n(e,"direction"),s=n(t,"speed");if(i<.75||i>239.25)throw new Error("Height must be between 0.75 and 239.25 m.");if(s<.5||s>20)throw new Error("Wind speed must be between 0.5 and 20 m/s.");const o=Math.max(0,Math.min(159,Math.round(i/1.5-.5))),l=(a%360+360)%360;return{layerIndex:o,heightM:(o+.5)*1.5,directionDeg:l,thetaRad:l*Math.PI/180,speedMps:s}}class Xe{constructor(e,t,n){this.adapter=e,this.device=t,this.useF16=n,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),n=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new Xe(e,n,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,n){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:t,label:n});return a._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,t,n=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|n,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const n=this.storage(e.byteLength,t);return this.write(n,e),n}write(e,t){if(t.byteLength%4){const n=new Uint8Array(Math.ceil(t.byteLength/4)*4);n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,n)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,n=new ArrayBuffer(t),i=new Uint32Array(n),a=new Int32Array(n),s=new Float32Array(n);e.forEach(([l,d],c)=>{l==="u"?i[c]=d:l==="i"?a[c]=d:s[c]=d});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,n),this.scratch.push(o),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,n,i,a=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:n.map((l,d)=>({binding:d,resource:{buffer:l}}))}));const s=Math.max(1,Math.ceil(i/a)),o=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(s,o),Math.ceil(s/o))}async readFloat32(e,t){const n=t*4,i=this.buffer(n,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const s=new Float32Array(i.getMappedRange().slice(0,n));return i.unmap(),this.free(i),s}}function wt(r){const e=new Uint16Array(r.length),t=new Float32Array(1),n=new Uint32Array(t.buffer);for(let i=0;i<r.length;i++){t[0]=r[i];const a=n[0],s=a>>>16&32768,o=a>>>23&255;let l=a&8388607;if(o===255){e[i]=s|31744|(l?1:0);continue}const d=o-127+15;if(d>=31){e[i]=s|31744;continue}if(d<=0){if(d<-10){e[i]=s;continue}l|=8388608;const u=14-d;let h=l>>>u;l>>>u-1&1&&(h+=1),e[i]=s|h;continue}let c=d<<10|l>>>13;l&4096&&(c+=1),e[i]=s|c}return e}function xi(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++){const n=r[t],i=n&32768?-1:1,a=n>>10&31,s=n&1023;a===0?e[t]=i*s*2**-24:a===31?e[t]=s?NaN:i*(1/0):e[t]=i*(1+s/1024)*2**(a-15)}return e}const K=180,xt=4,vt=7,Oe=xt*vt,ke=1.5,ot=4,vi=1600,Me=r=>r.toFixed(6),Mi=640,ki=`
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
  let angles = ${K}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${Me(ot)};
  let gyr = sinT[angle] / ${Me(ot)};

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

  let cutoff = ${Me(vi)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Mi}u; step++) {
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
}`,Si=`
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
  let angles = ${K}u;
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
  let out = (u.pixelOffset + localPixel) * ${Oe}u
          + sig * ${vt}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Fi=r=>`${r==="f16"?`enable f16;
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
  let c = ${Oe}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Me(ke)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`;class Ci{constructor(e,t,n,i,a,s="f32"){this.context=e,this.store=s,this.ny=n,this.nx=i,this.margin=a,this.gy=n+2*a,this.gx=i+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const o=new Float32Array(this.gy*this.gx);for(let c=0;c<n;c++){const u=c*i,h=(c+a)*this.gx+a;for(let f=0;f<i;f++)o[h+f]=t[u+f]*ke}this.heightBuffer=e.upload(o,"mddf.height");const l=new Float32Array(K),d=new Float32Array(K);for(let c=0;c<K;c++){const u=2*Math.PI*c/K;l[c]=Math.cos(u),d[c]=Math.sin(u)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(d,"mddf.sin"),this.rawBuffer=e.storage(xt*this.chunk*K*4,"mddf.raw"),this.fieldBuffer=e.storage(this.gy*this.gx*Oe*4,"mddf.field"),this.tracePipeline=e.pipeline(ki),this.fourierPipeline=e.pipeline(Si),this.assemblePipeline=e.pipeline(Fi(s)),this.currentLayer=-1}async compute(e,t={}){var s,o;const{context:n}=this,i=(e+.5)*ke,a=this.gy*this.gx;for(let l=0;l<a;l+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const d=Math.min(this.chunk,a-l),c=n.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",l],["u",d],["u",0],["u",0],["u",0],["f",i],["f",0],["f",0],["f",0]]),u=n.device.createCommandEncoder(),h=u.beginComputePass();n.dispatch(h,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,c],d*K),n.dispatch(h,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,c],d*4,64),h.end(),n.device.queue.submit([u.finish()]),await n.device.queue.onSubmittedWorkDone(),(o=t.onProgress)==null||o.call(t,(l+d)/a)}await n.device.queue.onSubmittedWorkDone(),n.releaseScratch(),this.currentLayer=e}assemble(e,t,n,i,a,s,o){const{context:l}=this,d=t.length/2,c=l.upload(t,"assemble.origins"),u=l.uniform([["u",d],["u",n.channels],["u",n.mddfChannels],["u",s],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",n.solidChannel],["i",n.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",n.coordYScale],["f",(a-n.coordZCentre)/n.coordZScale],["f",n.coordXCentre],["f",n.coordXScale],["f",0],["f",0]]),h=e.beginComputePass();return l.dispatch(h,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,c,n.tableBuffer,n.normBuffer,o,u],d*n.channels*s*s),h.end(),c}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.fieldBuffer])this.context.free(e)}}const Ae=`
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
`,Pi=`
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
}`;function lt(r,e,t,n=1e-5){const i=r==="f16"||e==="f16"?`enable f16;
`:"",a=o=>r==="f16"?`f32(${o})`:o,s=o=>e==="f16"?`f16(${o})`:o;return`${i}
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
    Y[base + i] = ${s("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const $e=32;function _i(r){const{store:e,patch:t,modes1:n,modes2:i}=r,a=t*t,s=2*n,o=e==="f16"?`enable f16;
`:"",l=c=>e==="f16"?`f32(${c})`:c,d=c=>e==="f16"?`f16(${c})`:c;return{conv1x1:`${o}${Ae}
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
  var acc = ${l("B[o]")};
  let xBase = b * u.cin * ${a}u + p;
  let wBase = o * u.cin;
  for (var i = 0u; i < u.cin; i++) {
    acc += ${l("W[wBase + i]")} * ${l("X[xBase + i * "+a+"u]")};
  }
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${d("acc")};
}`,gate:`${o}${Ae}
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
  let value = ${l("G[(b * 2u * u.mid + m) * "+a+"u + p]")};
  let gateValue = ${l("G[(b * 2u * u.mid + u.mid + m) * "+a+"u + p]")};
  H[g] = ${d("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:lt(e,e,a),instanceNormScaled:lt(e,e,a,1e-5/($e*$e)),forwardColumns:`${o}
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
    let v = ${l("X[base + x]")};
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
  let block = ${s*i}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${i}u;
  let s = (g / ${i}u) % ${s}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${n}u);
  let sp = s - half * ${n}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${n*i}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${i}u + k;
  let xBase = (b * u.channels * ${s}u + s) * ${i}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,inverseColumns:`${o}
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
  Y[g] = ${d("acc * "+1/$e)};
}`,residual:`${o}${Ae}
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
  var acc = ${l("A[g]")} + ${l("B[g]")} + ${l("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${d("acc")};
}`}}function Bi(r,e,t){const n=2*e,i=[];for(let f=0;f<e;f++)i.push(f);for(let f=r-e;f<r;f++)i.push(f);const a=new Float32Array(r*t),s=new Float32Array(r*t);for(let f=0;f<r;f++)for(let x=0;x<t;x++){const g=2*Math.PI*f*x/r;a[f*t+x]=Math.cos(g),s[f*t+x]=-Math.sin(g)}const o=new Float32Array(n*r),l=new Float32Array(n*r);for(let f=0;f<n;f++)for(let x=0;x<r;x++){const g=2*Math.PI*i[f]*x/r;o[f*r+x]=Math.cos(g),l[f*r+x]=-Math.sin(g)}const d=new Float32Array(r*n),c=new Float32Array(r*n);for(let f=0;f<r;f++)for(let x=0;x<n;x++){const g=2*Math.PI*i[x]*f/r;d[f*n+x]=Math.cos(g)/r,c[f*n+x]=Math.sin(g)/r}const u=new Float32Array(t*r),h=new Float32Array(t*r);for(let f=0;f<t;f++){const x=(f===0?1:2)/r;for(let g=0;g<r;g++){const w=2*Math.PI*f*g/r;u[f*r+g]=x*Math.cos(w),h[f*r+g]=-x*Math.sin(w)}}return{forwardCos:a,forwardSin:s,rowRe:o,rowIm:l,inverseRowRe:d,inverseRowIm:c,inverseColCos:u,inverseColSin:h}}class Ii{constructor(e,t,n,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[d,c]of Object.entries(_i(s)))this.pipelines[d]=e.pipeline(c);this.contractPipeline=e.pipeline(Pi);const o=d=>{const c=t.tensors[d];if(!c)throw new Error(`missing tensor ${d}`);return xi(new Uint16Array(n,c.offset,c.count))};this.read=o,this.tables={};for(const[d,c]of Object.entries(Bi(this.patch,this.modes1,this.modes2)))this.tables[d]=e.upload(c,`fno.table.${d}`);this.weights={};const l=(d,c)=>{const u=o(c);this.weights[d]=this.store==="f16"?e.upload(wt(u),`fno.${d}`):e.upload(u,`fno.${d}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let d=0;d<this.layers;d++)l(`m1w${d}`,`mlp_layers.${d}.mlp1.weight`),l(`m1b${d}`,`mlp_layers.${d}.mlp1.bias`),l(`m2w${d}`,`mlp_layers.${d}.mlp2.weight`),l(`m2b${d}`,`mlp_layers.${d}.mlp2.bias`),l(`lw${d}`,`w_layers.${d}.weight`),l(`lb${d}`,`w_layers.${d}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,n=t.tucker;let i=n.core_shape.slice(),a=e.upload(this.read(`${n.core}.re`),"tucker.core.re"),s=e.upload(this.read(`${n.core}.im`),"tucker.core.im");for(const l of n.factors){const[d,c]=l.shape;if(i[l.mode]!==c)throw new Error(`factor ${l.name} does not match the core`);const u=i.slice();u[l.mode]=d;const h=u.reduce((v,S)=>v*S,1),f=u.slice(l.mode+1).reduce((v,S)=>v*S,1),x=e.storage(h*4,"tucker.re"),g=e.storage(h*4,"tucker.im"),w=e.upload(this.read(`${l.name}.re`),"tucker.f"),p=e.upload(this.read(`${l.name}.im`),"tucker.f"),m=e.uniform([["u",u[0]],["u",u[1]],["u",u[2]],["u",u[3]],["u",u[4]],["u",l.mode],["u",d],["u",c],["u",f],["u",0],["u",h],["u",0]]),b=e.device.createCommandEncoder(),y=b.beginComputePass();e.dispatch(y,this.contractPipeline,[a,s,w,p,x,g,m],h),y.end(),e.device.queue.submit([b.finish()]),e.free(a),e.free(s),e.free(w),e.free(p),a=x,s=g,i=u}e.releaseScratch();const o=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==o.join())throw new Error(`spectral stack is ${i} but ${o} was expected`);this.spectralRe=a,this.spectralIm=s}allocate(e){const{context:t}=this,n=this.patch*this.patch,i=this.width,a=2*this.modes1,s=(l,d)=>t.storage(e*l*n*this.elementBytes,d),o=(l,d)=>t.storage(e*i*l*4,d);this.buffers={input:s(this.inputChannels,"fno.input"),x:s(i,"fno.x"),t1:s(i,"fno.t1"),t2:s(i,"fno.t2"),gates:s(4*i,"fno.gates"),hidden:s(2*i,"fno.hidden"),spectral:s(i,"fno.spectral"),local:s(i,"fno.local"),wide:s(2*i,"fno.wide"),output:s(this.outputChannels,"fno.output"),xRe:o(this.patch*this.modes2,"fno.xRe"),xIm:o(this.patch*this.modes2,"fno.xIm"),yRe:o(a*this.modes2,"fno.yRe"),yIm:o(a*this.modes2,"fno.yIm"),zRe:o(a*this.modes2,"fno.zRe"),zIm:o(a*this.modes2,"fno.zIm"),wRe:o(this.patch*this.modes2,"fno.wRe"),wIm:o(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,n=this.width,i=2*this.modes1,a=this.inputChannels+5*n+4*n+2*n+2*n+this.outputChannels,s=n*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(a*t*this.elementBytes+s)}encode(e,t){const{context:n,buffers:i,pipelines:a,tables:s}=this,o=this.width,l=this.patch*this.patch,d=2*this.modes1,c=e.beginComputePass(),u=(f,x,g,w,p=256)=>{n.dispatch(c,f,[...x,n.uniform(g)],w,p)},h=(f,x,g=a.instanceNorm)=>{c.setPipeline(g),c.setBindGroup(0,n.device.createBindGroup({layout:g.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:{buffer:x}}]})),c.dispatchWorkgroups(t*o)};u(a.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*o],["u",1]],t*2*o*l),u(a.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l);for(let f=0;f<this.layers;f++)h(i.x,i.t1),u(a.forwardColumns,[i.t1,s.forwardCos,s.forwardSin,i.xRe,i.xIm],[["u",t],["u",o],["u",0],["u",0]],t*o*this.patch*this.modes2),u(a.rowMix,[i.xRe,i.xIm,s.rowRe,s.rowIm,i.yRe,i.yIm],[["u",t],["u",o],["u",d],["u",this.patch]],t*o*d*this.modes2),u(a.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",o],["u",2*f],["u",0]],t*o*d*this.modes2),u(a.rowMix,[i.zRe,i.zIm,s.inverseRowRe,s.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",o],["u",this.patch],["u",d]],t*o*this.patch*this.modes2),u(a.inverseColumns,[i.wRe,i.wIm,s.inverseColCos,s.inverseColSin,i.t2],[["u",t],["u",o],["u",0],["u",0]],t*o*l),h(i.t2,i.t1,a.instanceNormScaled),u(a.conv1x1,[i.t1,this.weights[`m1w${f}`],this.weights[`m1b${f}`],i.gates],[["u",t],["u",o],["u",4*o],["u",0]],t*4*o*l),u(a.gate,[i.gates,i.hidden],[["u",t],["u",2*o],["u",0],["u",0]],t*2*o*l),u(a.conv1x1,[i.hidden,this.weights[`m2w${f}`],this.weights[`m2b${f}`],i.spectral],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l),u(a.conv1x1,[i.x,this.weights[`lw${f}`],this.weights[`lb${f}`],i.local],[["u",t],["u",o],["u",o],["u",0]],t*o*l),u(a.residual,[i.spectral,i.local,i.x],[["u",t*o*l],["u",f<this.layers-1?1:0],["u",0],["u",0]],t*o*l);return u(a.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",o],["u",2*o],["u",1]],t*2*o*l),u(a.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*o],["u",this.outputChannels],["u",0]],t*this.outputChannels*l),c.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const Ai=r=>r.toFixed(6),$i=r=>`${r==="f16"?`enable f16;
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
}`,Ei=`
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
                      / ${Ai(ke)});
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
}`;function Ri(r,e){if(!r)return e;if(!e)return r;const t=Math.min(r.y0,e.y0),n=Math.min(r.x0,e.x0);return{y0:t,x0:n,h:Math.max(r.y0+r.h,e.y0+e.h)-t,w:Math.max(r.x0+r.w,e.x0+e.w)-n}}function Vi(r,e,t){let n=1/0,i=-1/0;const a=s=>{n=Math.min(n,s),i=Math.max(i,s)};for(let s=0;s<4;s++){const o=r[s],l=r[(s+1)%4];o[1]>=e&&o[1]<=t&&a(o[0]);for(const d of[e,t])if((o[1]-d)*(l[1]-d)<0){const c=(d-o[1])/(l[1]-o[1]);a(o[0]+c*(l[0]-o[0]))}}return n<=i?[n,i]:null}class Di{constructor(e,t,n,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new Ii(e,t,n,this.batchSize),this.blendPipeline=e.pipeline($i(this.fno.store)),this.finalizePipeline=e.pipeline(Ei),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,n=t.features,i=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,s=n.mddf_source_indices,o=new Uint32Array(s.length*4),l=new Float32Array(s.length*2);s.forEach((c,u)=>{const h=Math.floor(c/i),f=c%i,x=f>a?1:0,g=f===0?0:x?f-a:f;o.set([h*i+g,h*i+(g===0?0:a+g),g,x],u*4),l[u*2]=n.mddf_center[u],l[u*2+1]=n.mddf_scale[u]});const d=t.coordinates;return{channels:t.model.input_channels,mddfChannels:s.length,solidChannel:n.use_building_input?s.length:-1,coordChannel:s.length+(n.use_building_input?1:0),coordYScale:d.y_scale,coordZCentre:d.z_center,coordZScale:d.z_scale,coordXCentre:d.x_center,coordXScale:d.x_scale,tableBuffer:e.upload(o,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,t,n){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),a=(t+2*i)*(n+2*i)*28*4,s=this.context.device.limits.maxStorageBufferBindingSize;if(a>s)throw new Error(`city ${n} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(s/2**20).toFixed(0)} MiB`);const o=new Ci(this.context,e,t,n,i,this.fno.store);return this.city={field:o,ny:t,nx:n,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:o.gy,gx:o.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:n}=this.city,i=(t-1)/2,a=(n-1)/2,s=Math.cos(e),o=Math.sin(e),l=[[0,0],[n-1,0],[n-1,t-1],[0,t-1]].map(([b,y])=>{const v=b-a,S=y-i;return[a+v*s+S*o,i-v*o+S*s]}),d=Math.floor(Math.min(...l.map(b=>b[1]))),c=Math.ceil(Math.max(...l.map(b=>b[1]))),u=Math.floor(Math.min(...l.map(b=>b[0]))),h=Math.ceil(Math.max(...l.map(b=>b[0]))),f=h-u+1,x=Math.max(1,Math.ceil((f-this.patch)/this.stride)+1),g=x>1?(f-this.patch)/(x-1):0,w=l.map(([b,y])=>[y,b]),p=[],m=[];for(let b=0;b<x;b++){const y=Math.round(u+b*g),v=Vi(w,y,y+this.patch-1)||[d,d+this.patch-1],S=Math.floor(v[0]),k=Math.max(this.patch,Math.ceil(v[1])-S+1),P=Math.max(1,Math.ceil((k-this.patch)/this.stride)+1),I=P>1?(k-this.patch)/(P-1):0;m.push([p.length/2,P,y-u]);for(let W=0;W<P;W++)p.push(y,Math.round(S+W*I))}return{origins:new Float32Array(p),columns:m,columnCount:x,columnStride:g,syMin:d,sxMin:u,gridH:c-d+1,gridW:h-u+1,patchCount:p.length/2}}patchRect(e,t,n){let i=1/0,a=1/0,s=-1/0,o=-1/0;for(const[l,d,c]of e.columns)for(let u=0;u<d;u++){const h=l+u;if(h<t||h>=n)continue;const f=e.origins[h*2+1]-e.syMin;i=Math.min(i,f),a=Math.min(a,c),s=Math.max(s,f+this.patch),o=Math.max(o,c+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),a=Math.max(0,a),s=Math.min(e.gridH,s),o=Math.min(e.gridW,o),{y0:i,x0:a,h:Math.max(0,s-i),w:Math.max(0,o-a)}):null}async predict(e,t={}){var ye,Ge,He;const{context:n,city:i}=this,a=this.tiling(e),s=this.metadata.model.output_channels,o=a.gridH*a.gridW,l=this.patch*this.patch,d=performance.now(),c=!!(t.shouldDraw&&t.onDraw),u=s+2,h=n.storage(a.patchCount*s*l*this.fno.elementBytes,"predict.patches"),f=new Int32Array(a.patchCount);for(let A=0;A<a.patchCount;A++)f[A]=a.origins[A*2+1]-a.syMin;const x=n.upload(f,"blend.origins"),g=n.upload(new Int32Array(a.columns.flat()),"blend.columns"),w=n.storage(o*s*4,"blend.field"),p=n.storage(o*4,"blend.weight"),m=n.storage(o*4,"blend.solid"),b=n.storage(c?o*4:4,"blend.finalWeight"),y=n.storage(c?o*u*4:4,"blend.packed"),v=this.metadata.target,S=n.upload(new Float32Array(v.center),"final.centre"),k=n.upload(new Float32Array(v.scale),"final.scale"),P={y0:0,x0:0,h:a.gridH,w:a.gridW},I=(A,V,G,ne)=>{const be=A.beginComputePass();n.dispatch(be,this.blendPipeline,[h,x,g,w,ne,n.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",s],["u",a.columnCount],["u",a.patchCount],["u",G],["u",0],["u",V.y0],["u",V.x0],["u",V.h],["u",V.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],V.h*V.w),be.end()},W=(A,V,G)=>{const ne=A.beginComputePass();n.dispatch(ne,this.finalizePipeline,[w,p,S,k,i.field.heightBuffer,m,b,y,n.uniform([["u",a.gridH],["u",a.gridW],["u",s],["u",G?1:0],["u",V.y0],["u",V.x0],["u",V.h],["u",V.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],V.h*V.w),ne.end()};if(c){const A=n.device.createCommandEncoder();I(A,P,a.patchCount,b),n.device.queue.submit([A.finish()]),(ye=t.onStart)==null||ye.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const J=2,F=[];let M=null;for(let A=0;A<a.patchCount;A+=this.batchSize){(Ge=t.signal)==null||Ge.throwIfAborted();const V=Math.min(this.batchSize,a.patchCount-A),G=n.device.createCommandEncoder(),ne=i.field.assemble(G,a.origins.subarray(A*2,(A+V)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),be=this.fno.encode(G,V);G.copyBufferToBuffer(be,0,h,A*s*l*this.fno.elementBytes,V*s*l*this.fno.elementBytes);let H=null;if(c){M=Ri(M,this.patchRect(a,A,A+V));const _e=A+V>=a.patchCount;M&&M.h>0&&M.w>0&&(_e||t.shouldDraw())&&(H=M,M=null,I(G,H,A+V,p),W(G,H,!0))}if(n.device.queue.submit([G.finish()]),n.free(ne),await n.device.queue.onSubmittedWorkDone(),(He=t.onProgress)==null||He.call(t,(A+V)/a.patchCount),c&&(F.push(n.device.queue.onSubmittedWorkDone()),F.length>J&&await F.shift()),H){const _e=await n.readFloat32(y,H.h*H.w*u);t.onDraw({x0:H.x0,y0:H.y0,width:H.w,height:H.h,stride:u,channels:s,theta:e,values:_e,readyCount:A+V,patchCount:a.patchCount})}}const C=n.device.createCommandEncoder();I(C,P,a.patchCount,p),W(C,P,!1),n.device.queue.submit([C.finish()]);const D=await n.readFloat32(w,o*s),T=await n.readFloat32(m,o),R=await n.readFloat32(p,o),U=performance.now()-d;let $=0,q=0;for(let A=0;A<o;A++)if(T[A]!==2){if(R[A]<=1e-6){$+=1;continue}for(let V=0;V<s;V++)if(!Number.isFinite(D[A*s+V])){q+=1;break}}for(const A of[h,w,p,m,x,g,S,k,b,y])n.free(A);return n.releaseScratch(),{values:D,solid:T,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:v.channel_names,milliseconds:U,uncovered:$,nonFinite:q,insideCells:o}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}}function Ti(r,e){var t,n,i,a,s,o,l,d,c;if(r.dtype!=="float16"||r.total_bytes!==e||((t=r.grid)==null?void 0:t.horizontal_spacing_m)!==4||((n=r.grid)==null?void 0:n.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=r.model)==null?void 0:i.input_channels)!==24||((a=r.model)==null?void 0:a.output_channels)!==5||((o=(s=r.inference)==null?void 0:s.patch)==null?void 0:o.join())!=="64,64"||((d=(l=r.target)==null?void 0:l.channel_names)==null?void 0:d.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const u of Object.values(r.tensors??{}))if(!Number.isInteger(u.offset)||u.offset<0||u.offset%2||!Number.isInteger(u.count)||u.count<=0||u.offset+u.count*2>e||!Array.isArray(u.shape)||u.shape.some(h=>!Number.isInteger(h)||h<1)||u.shape.reduce((h,f)=>h*f,1)!==u.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(r.tensors??{}).length||!Number.isFinite((c=r.wind)==null?void 0:c.reference_speed_m_s)||r.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function zi(r){if(!Number.isInteger(r.width)||!Number.isInteger(r.height)||r.width<1||r.height<1||r.values.length!==r.width*r.height*5||r.solid.length!==r.width*r.height)throw new Error("Invalid prediction shape.");for(let e=0;e<r.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(r.values[e*5+t])||(r.solid[e]=2,r.values[e*5+t]=0)}function Ni(){const r=pe({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,downloading:!1});let e=null,t=null,n=null,i=null,a=null,s=!1,o=0;const l=new AbortController;function d(){try{t==null||t.destroy()}finally{e==null||e.device.destroy(),t=null,e=null,a=null}}async function c(){if(t)return;r.stage="Loading model";const g="/cityffdv2-demo/flume/",[w,p,m]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async b=>{const y=await fetch(g+b,{signal:l.signal});if(!y.ok)throw new Error("Could not load "+b+" (HTTP "+y.status+").");return b.endsWith(".bin")?y.arrayBuffer():y.json()}));Ti(w,p.byteLength),l.signal.throwIfAborted(),e=await Xe.create(),l.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",b=>{r.error="WebGPU: "+b.error.message.split(`
`)[0]}),e.device.lost.then(b=>{!s&&b.reason!=="destroyed"&&(r.error="GPU device lost. Run again to initialize a new session.",r.prediction=null,t=null,e=null,a=null)}),n=w,i=m,t=new Di(e,n,p,{batchSize:4})}async function u(g,w){if(s||r.busy||r.downloading)return null;r.busy=!0,r.error="",r.progress=0;const p=++o;try{await c(),g!==a&&(t.setCity(g.layers,g.ny,g.nx),a=g),r.stage="Preparing geometry · MDDF",await t.setHeight(w.layerIndex,{signal:l.signal,onProgress:y=>{s||(r.progress=y*.25)}}),r.stage="Predicting wind · FNO";const m=await t.predict(w.thetaRad,{signal:l.signal,onProgress:y=>{s||(r.progress=.25+y*.75)}});if(l.signal.throwIfAborted(),s||p!==o)return null;if(r.error)throw new Error(r.error);zi(m);const b={...m,grid:g,settings:{...w},referenceSpeed:n.wind.reference_speed_m_s,modelLabel:n.label,colorbar:i,inputRevision:p};return r.prediction=ge(b),r.progress=1,r.stage="Prediction ready",b}catch(m){return s||(r.error=m.message,r.stage="Prediction failed",r.prediction=null),d(),null}finally{s?d():r.busy=!1}}async function h(){if(!t||!r.prediction||r.busy||r.downloading)throw new Error("Run a valid prediction before downloading MDDF.");r.downloading=!0;try{const g=t.city.field,w=await e.readFloat32(g.fieldBuffer,g.gy*g.gx*28);if(s)throw new Error("The page was closed.");return{values:w,ny:g.gy,nx:g.gx,margin:g.margin,layerIndex:t.city.layerIndex}}finally{r.downloading=!1,s&&d()}}function f(){o++,r.prediction=null}function x(){s=!0,o++,l.abort(),!r.busy&&!r.downloading&&d()}return Ue(x),{state:r,run:u,readMddf:h,invalidate:f,dispose:x}}const Li=[1.5,3],se=8e3,te={white:{pixelsPerParticle:680,maxParticles:1200,minParticles:150,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1},tinted:{pixelsPerParticle:340,maxParticles:2400,minParticles:300,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1}},Ui=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Wi=`
precision mediump float;
uniform sampler2D previous;
uniform float drop;
uniform float cutoff;
varying vec2 vUv;
void main() {
  vec4 before = texture2D(previous, vUv);
  float alpha = before.a - drop;
  if (alpha < cutoff || before.a == 0.0) {
    gl_FragColor = vec4(0.0);
  } else {
    // The buffer holds premultiplied colour (see LINE_FRAGMENT), so colour
    // and opacity fall together.  Lowering only the opacity would leave the
    // colour too bright for it, and un-premultiplying later would overshoot.
    gl_FragColor = before * (alpha / before.a);
  }
}`,ji=`
attribute vec2 segment;
attribute vec3 tint;
attribute vec4 ends;          // the segment's two endpoints, in buffer pixels
varying vec3 vTint;
varying vec4 vEnds;
void main() {
  vTint = tint;
  vEnds = ends;
  gl_Position = vec4(segment, 0.0, 1.0);
}`,Xi=`
precision mediump float;
uniform float opacity;
uniform float halfWidth;
varying vec3 vTint;
varying vec4 vEnds;
void main() {
  vec2 point = gl_FragCoord.xy;
  vec2 along = vEnds.zw - vEnds.xy;
  float t = clamp(dot(point - vEnds.xy, along) / max(dot(along, along), 1e-6),
                  0.0, 1.0);
  float distance = length(point - (vEnds.xy + along * t));
  float edge = 1.0 - smoothstep(halfWidth - 1.0, halfWidth, distance);
  if (edge <= 0.0) discard;
  // The output is straight colour, but what lands in the buffer is not: the
  // SRC_ALPHA blend multiplies it by alpha on the way in, so the buffer holds
  // premultiplied colour.  That is exactly premultiplied "over" onto what is
  // already there, so this pass needs nothing else -- but the passes reading
  // the buffer must treat it as premultiplied.  Treating it as plain colour
  // is what painted a dark grey ring around every line: an edge pixel half
  // covered by white was stored as 0.5 grey and drawn back as 0.5 grey.
  gl_FragColor = vec4(vTint, opacity * edge);
}`,Oi=`
#include <clipping_planes_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}`,qi=`
#include <clipping_planes_pars_fragment>
precision mediump float;
uniform sampler2D trail;
uniform vec2 resolution;
uniform float strength;
uniform float solid;
void main() {
  #include <clipping_planes_fragment>
  vec4 texel = texture2D(trail, gl_FragCoord.xy / resolution);
  if (texel.a <= 0.004) discard;
  // Opaque for most of a streak's life, fading only over the last stretch of
  // it.  Without this the stored alpha is the whole profile and the streak is
  // translucent everywhere except at its very head.
  float alpha = min(1.0, texel.a / solid) * strength;
  // No colour-space encode here.  The tint was looked up in the same sRGB
  // ramp the legend is drawn from and carried through unchanged, so it is
  // already a display colour; encoding it again lifts every value and drains
  // the saturation -- turbo's darkest step leaves as 48,18,59 and arrives as
  // 119,76,130.  The slice can afford the encode because its palette texture
  // is tagged sRGB and the GPU decodes it on the way in.
  // The buffer is premultiplied; divide once to get the line's own colour
  // back.  texel.a is above 0.004 here, so the division is safe.
  gl_FragColor = vec4(texel.rgb / texel.a, alpha);
}`;class Yi{constructor(e){this.renderer=e,this.enabled=!1,this.field=null,this.particles=[],this.viewKey="",this.width=1,this.height=1,this.stats={target:0,drawn:0,placed:0,bounds:null},this.settings={white:{...te.white},tinted:{...te.tinted}},this.mode="white",this.palette=null,this.tintRange=null,this.lastValue=0,this.ready=1,this.readyX=1/0,this.extent={x0:0,y0:0,x1:0,y1:0},this.degenerate=!1,this.camera=new Ut(-1,1,1,-1,0,1),this.quad=new me(new Re(2,2),null),this.quad.frustumCulled=!1,this.quadScene=new Ve().add(this.quad),this.targets=null,this.fade=new xe({vertexShader:Ui,fragmentShader:Wi,uniforms:{previous:{value:null},drop:{value:.02},cutoff:{value:te.white.trailCutoff}},depthTest:!1,depthWrite:!1,side:ve}),this.vertices=new Float32Array(se*12),this.tints=new Float32Array(se*18),this.ends=new Float32Array(se*24);const t=new ut;t.setAttribute("segment",new fe(this.vertices,2).setUsage(Be)),t.setAttribute("tint",new fe(this.tints,3).setUsage(Be)),t.setAttribute("ends",new fe(this.ends,4).setUsage(Be)),t.setAttribute("position",new fe(new Float32Array(se*18),3)),this.lineGeometry=t,this.lines=new me(t,new xe({vertexShader:ji,fragmentShader:Xi,uniforms:{opacity:{value:te.white.lineOpacity},halfWidth:{value:te.white.lineWidth*.5}},depthTest:!1,depthWrite:!1,transparent:!0,side:ve})),this.lines.frustumCulled=!1,this.lineScene=new Ve().add(this.lines),this.material=new xe({vertexShader:Oi,fragmentShader:qi,uniforms:{trail:{value:null},resolution:{value:new De(1,1)},strength:{value:te.white.strength},solid:{value:te.white.solidFraction}},transparent:!0,depthWrite:!1,side:ve,clipping:!0}),this.mesh=new me(new Re(1,1),this.material),this.mesh.visible=!1,this.planeSize=new De(1,1),this.plane=new he,this.ray=new Wt,this.scratch=new O,this.matrix=new Te}setResolution(e,t){if(!(e===this.width&&t===this.height)){this.width=Math.max(1,Math.round(e)),this.height=Math.max(1,Math.round(t));for(const n of this.targets||[])n.dispose();this.targets=[0,1].map(()=>new jt(this.width,this.height,{minFilter:Ke,magFilter:Ke,format:ze,type:ft,depthBuffer:!1,stencilBuffer:!1})),this.material.uniforms.resolution.value.set(this.width,this.height),this.reset()}}setPlane(e,t){this.planeSize.set(e,t)}setField(e,t){this.field=e,this.metresPerCell=t,this.ready=1,this.readyX=1/0,this.reset()}setProgress(e,t){this.ready=Math.max(0,Math.min(1,e)),this.readyX=Math.max(this.readyX===1/0?0:this.readyX,t)}replaceField(e){this.field=e,this.ready=1,this.readyX=1/0}get p(){return this.settings[this.mode]||this.settings.white}setMode(e){e!=="white"&&e!=="tinted"||e!==this.mode&&(this.mode=e,this.applyUniforms())}setParam(e,t,n){const i=this.settings[e];!i||!(t in i)||!Number.isFinite(n)||(i[t]=n,e===this.mode&&this.applyUniforms())}applyUniforms(){const e=this.p;this.fade.uniforms.cutoff.value=e.trailCutoff,this.lines.material.uniforms.halfWidth.value=e.lineWidth*.5,this.lines.material.uniforms.opacity.value=e.lineOpacity,this.material.uniforms.strength.value=e.strength,this.material.uniforms.solid.value=e.solidFraction}setTinting(e,t){this.palette=e||null,this.tintRange=t||null}tintFor(e,t){if(!this.palette||!this.tintRange)return t[0]=1,t[1]=1,t[2]=1,t;const[n,i]=this.tintRange,a=Math.min(1,Math.max(0,(e-n)/Math.max(1e-6,i-n))),s=Math.min(255,Math.round(a*255))*4;return t[0]=this.palette[s]/255,t[1]=this.palette[s+1]/255,t[2]=this.palette[s+2]/255,t}reset(){if(this.particles.length=0,this.viewKey="",!this.targets)return;const e=this.renderer,t=e.getRenderTarget(),n=new Xt,i=e.getClearAlpha();e.getClearColor(n),e.setClearColor(0,0);for(const a of this.targets)e.setRenderTarget(a),e.clear(!0,!1,!1);e.setClearColor(n,i),e.setRenderTarget(t)}sample(e,t,n){const i=this.field;if(!i||!Number.isFinite(e)||!Number.isFinite(t)||e<.5||t<.5||e>i.width-.5||t>i.height-.5)return null;const a=Math.min(i.width-1,Math.max(0,Math.round(e-.5))),s=Math.min(i.height-1,Math.max(0,Math.round(t-.5)));if(i.solid[s*i.width+a]!==0)return null;const o=Math.min(i.width-1,Math.max(0,e-.5)),l=Math.min(i.height-1,Math.max(0,t-.5)),d=Math.floor(o),c=Math.floor(l),u=Math.min(d+1,i.width-1),h=Math.min(c+1,i.height-1),f=o-d,x=l-c,g=w=>{const p=w[c*i.width+d],m=w[c*i.width+u],b=w[h*i.width+d],y=w[h*i.width+u];return(p*(1-f)+m*f)*(1-x)+(b*(1-f)+y*f)*x};return n[0]=g(i.u)/this.metresPerCell,n[1]=g(i.v)/this.metresPerCell,this.lastValue=i.value?g(i.value):0,Math.hypot(n[0],n[1])>.001?n:null}visibleBounds(e,t){const n=this.field,i={x0:.5,y0:.5,x1:n.width-.5,y1:n.height-.5},a=this.scratch.set(0,0,1).applyQuaternion(t.quaternion);this.plane.setFromNormalAndCoplanarPoint(a.clone(),t.position);let s=1/0,o=1/0,l=-1/0,d=-1/0;for(const[c,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const h=new O(c,u,-1).unproject(e),f=new O(c,u,1).unproject(e);this.ray.set(h,f.sub(h).normalize());const x=this.ray.intersectPlane(this.plane,new O);if(!x)return i;const g=t.worldToLocal(x),w=(g.x/this.planeSize.x+.5)*n.width,p=(g.y/this.planeSize.y+.5)*n.height;s=Math.min(s,w),l=Math.max(l,w),o=Math.min(o,p),d=Math.max(d,p)}return{x0:Math.max(i.x0,s),x1:Math.min(i.x1,l),y0:Math.max(i.y0,o),y1:Math.min(i.y1,d)}}respawn(e,t){e.age=0,e.life=0,e.x=NaN,e.y=NaN,(t.x1<=t.x0||t.y1<=t.y0)&&(t={x0:.5,y0:.5,x1:Math.min(this.readyX,this.field.width-.5),y1:this.field.height-.5},this.degenerate=!0);const n=[0,0];for(let i=0;i<40;i++){const a=t.x0+Math.random()*(t.x1-t.x0),s=t.y0+Math.random()*(t.y1-t.y0);if(this.sample(a,s,n)){e.x=a,e.y=s;const[o,l]=Li;return e.life=this.p.trailSeconds*(o+Math.random()*(l-o)),!0}}return!1}toPixels(e,t,n,i){const a=this.field,s=this.scratch.set((e/a.width-.5)*this.planeSize.x,(t/a.height-.5)*this.planeSize.y,0);return s.applyMatrix4(this.matrix),i[0]=(s.x*.5+.5)*this.width,i[1]=(.5-s.y*.5)*this.height,i}track(e,t){const n=this.extent;e<n.x0&&(n.x0=e),e>n.x1&&(n.x1=e),t<n.y0&&(n.y0=t),t>n.y1&&(n.y1=t)}addSegment(e,t,n,i){const a=n[0]-t[0],s=n[1]-t[1],o=Math.hypot(a,s);if(o===0)return e;const l=this.p.lineWidth*.5,d=-s*l/o,c=a*l/o,u=a*l/o,h=s*l/o,f=t[0]-u,x=t[1]-h,g=n[0]+u,w=n[1]+h,p=2/this.width,m=2/this.height,b=(f+d)*p-1,y=1-(x+c)*m,v=(f-d)*p-1,S=1-(x-c)*m,k=(g+d)*p-1,P=1-(w+c)*m,I=(g-d)*p-1,W=1-(w-c)*m;this.vertices.set([b,y,v,S,k,P,k,P,v,S,I,W],e);const J=e*3/2,F=e*2,M=[t[0],this.height-t[1],n[0],this.height-n[1]];for(let C=0;C<6;C++)this.tints.set(i,J+C*3),this.ends.set(M,F+C*4);return this.track(b,y),this.track(k,P),e+12}step(e,t,n){if(!this.enabled||!this.field||!this.targets||!n)return!1;if(e>.1)return this.reset(),!1;n.updateWorldMatrix(!0,!1),this.matrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(n.matrixWorld);const i=t.projectionMatrix.elements.concat(t.matrixWorldInverse.elements).map(p=>p.toFixed(4)).join(",");i!==this.viewKey&&(this.reset(),this.viewKey=i);const a=this.visibleBounds(t,n),s={x0:a.x0,y0:a.y0,y1:a.y1,x1:Math.min(a.x1,this.readyX)},o=(a.x1-a.x0)*(a.y1-a.y0)/(this.field.width*this.field.height),l=this.p,d=Math.min(l.maxParticles,se,Math.round(this.width*this.height/Math.max(1,l.pixelsPerParticle))),c=Math.min(se,Math.round(Math.max(l.minParticles,d*Math.sqrt(Math.max(0,Math.min(1,o))))*this.ready));for(;this.particles.length<c;){const p={};this.respawn(p,s),this.particles.push(p)}this.particles.length>c&&(this.particles.length=c),this.extent={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};const u=this.p.timeScale*e,h=[0,0],f=[0,0],x=[0,0],g=[1,1,1];let w=0;for(const p of this.particles){if(p.age>=p.life&&this.respawn(p,s),!this.sample(p.x,p.y,h)){this.respawn(p,s);continue}const m=p.x+.5*h[0]*u,b=p.y+.5*h[1]*u;if(!this.sample(m,b,h)){this.respawn(p,s);continue}const y=p.x+h[0]*u,v=p.y+h[1]*u;if(y<a.x0||y>a.x1||v<a.y0||v>a.y1||!this.sample(y,v,h)){this.respawn(p,s);continue}this.tintFor(this.lastValue,g),w=this.addSegment(w,this.toPixels(p.x,p.y,n,f),this.toPixels(y,v,n,x),g),p.x=y,p.y=v,p.age+=e}return this.stats={target:c,drawn:w/12,placed:this.particles.filter(p=>Number.isFinite(p.x)).length,bounds:[a.x0,a.y0,a.x1,a.y1].map(p=>p.toFixed(0)).join("..")},this.draw(e,w),!0}draw(e,t){const n=this.renderer,i=n.getRenderTarget(),a=n.autoClear;n.autoClear=!1,this.fade.uniforms.previous.value=this.targets[0].texture,this.fade.uniforms.drop.value=Math.max(1e-4,e/Math.max(.01,this.p.trailSeconds)),this.quad.material=this.fade,n.setRenderTarget(this.targets[1]),n.render(this.quadScene,this.camera),t>0&&(this.lineGeometry.setDrawRange(0,t/2),this.lineGeometry.attributes.segment.needsUpdate=!0,this.lineGeometry.attributes.tint.needsUpdate=!0,this.lineGeometry.attributes.ends.needsUpdate=!0,n.render(this.lineScene,this.camera)),this.targets.reverse(),this.material.uniforms.trail.value=this.targets[0].texture,n.autoClear=a,n.setRenderTarget(i)}dispose(){for(const e of this.targets||[])e.dispose();this.lineGeometry.dispose(),this.lines.material.dispose(),this.material.dispose(),this.fade.dispose(),this.quad.geometry.dispose(),this.mesh.geometry.dispose()}}const Mt={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},Ee=new Map;function Gi(r){if(!Ee.has(r)){const e=Mt[r],t=new Uint8Array(256*3);for(let n=0;n<256*3;n++)t[n]=parseInt(e.substr(n*2,2),16);Ee.set(r,t)}return Ee.get(r)}function Hi(r,e){const t=Gi(Mt[r]?r:"viridis"),n=Math.min(1,Math.max(0,e))*255,i=Math.floor(n),a=Math.min(255,i+1),s=n-i;return[t[i*3]*(1-s)+t[a*3]*s,t[i*3+1]*(1-s)+t[a*3+1]*s,t[i*3+2]*(1-s)+t[a*3+2]*s]}const Zi=1,Ji=new Set(["u","v","w"]),Ki=6e4,Se=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis"},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno"},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],Q={u:0,w:1,v:2,T:3,tke:4};function qe(r,e,t,n){return Qi(r.values,e*5,r.theta,t,n)}function Qi(r,e,t,n,i){const a=r[e+Q.u]*i,s=r[e+Q.v]*i;switch(n){case"u":return a;case"v":return s;case"w":return r[e+Q.w]*i;case"speed":{const o=r[e+Q.w]*i;return Math.sqrt(a*a+s*s+o*o)}case"T":return r[e+Q.T];case"tke":return r[e+Q.tke]*i*i;default:return 0}}function en(r,e,t,n,i){if(e==="T")return r.fixed.T.slice();const s=(r.quantiles[n]||r.quantiles[Object.keys(r.quantiles)[0]])[e],o=Math.min(s.length-1,Math.max(0,Math.round(t))),l=s[o]*(e==="tke"?i*i:i);return r.shape[e]==="symmetric"?[-l,l]:[0,l]}function kt(r,e){return Hi(r,e)}function tn(r,e){const t=r.solid.length,n=new Float32Array(t*4);for(let i=0;i<t;i++){const a=i*4;n[a]=qe(r,i,e,1),n[a+1]=Zi}return wt(n)}function dt(r){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[n,i,a]=kt(r,t/255);e[t*4]=n,e[t*4+1]=i,e[t*4+2]=a,e[t*4+3]=255}return e}function nn(r,e,t){if(e==="T")return null;const n=e,i=r.solid.length,a=Math.max(1,Math.floor(i/Ki)),s=Ji.has(n),o=[];for(let c=0;c<i;c+=a){const u=qe(r,c,n,1);o.push(s?Math.abs(u):u)}if(o.length<32)return null;o.sort((c,u)=>c-u);const l=Math.min(o.length-1,Math.floor(o.length*(Number(t)/100))),d=o[l];return d>0?s?[-d,d]:[0,d]:null}function rn(r,e){const t=r.solid.length,n=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t);for(let s=0;s<t;s++)a[s]=qe(r,s,e,1),n[s]=r.values[s*5+Q.u],i[s]=r.values[s*5+Q.v];return{u:n,v:i,value:a,solid:new Uint8Array(t),width:r.width,height:r.height}}function an(r,e,t){const n=(r.grid.nx-1)/2,i=(r.grid.ny-1)/2,a=r.originX+e-n,s=r.originY+t-i,o=Math.cos(r.theta),l=Math.sin(r.theta);return[(n+a*o-s*l+.5)*4,(i+a*l+s*o+.5)*4]}function St(r){const e=r.values.slice(),t=r.settings.speedMps/r.referenceSpeed;for(let n=0;n<e.length;n+=5)e[n]*=t,e[n+1]*=t,e[n+2]*=t,e[n+4]*=t*t;return e}const sn=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,on=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function ln(r,e,t){let n,i,a,s,o,l,d,c,u,h=0;const f=new Te,x=new Te,g=ht.MercatorCoordinate.fromLngLat(r.grid.origin),w=g.meterInMercatorCoordinateUnits(),[p,m]=an(r,r.width/2-.5,r.height/2-.5),b=[new he(new O(1,0,0),0),new he(new O(-1,0,0),r.grid.nx*4),new he(new O(0,1,0),0),new he(new O(0,-1,0),r.grid.ny*4)];function y(){if(!i)return;d==null||d.dispose(),c==null||c.dispose();const v={...r,settings:{...r.settings,speedMps:Number(e.speedMps)}};v.values=St(v);const S=Se.find(I=>I.id===e.variable)??Se[0],k=tn(v,S.id);d=new Qe(k,r.width,r.height,ze,ft),d.minFilter=d.magFilter=et,d.needsUpdate=!0,c=new Qe(dt(S.ramp),256,1,ze),c.colorSpace=Yt,c.minFilter=c.magFilter=et,c.needsUpdate=!0;const P=nn(v,S.id,"99.9")??en(r.colorbar,S.id,r.settings.layerIndex,"99.9",Number(e.speedMps)/r.referenceSpeed);u.uniforms.field.value=d,u.uniforms.palette.value=c,u.uniforms.range.value.set(...P),o.visible=e.particles!=="tinted",l.setMode(e.particles==="tinted"?"tinted":"white"),l.enabled=e.particles!=="off",l.setField(rn(v,S.id),4),l.setTinting(e.particles==="tinted"?dt(S.ramp):null,e.particles==="tinted"?P:null),l.mesh.visible=l.enabled,t==null||t({low:P[0],high:P[1],...S}),n.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:y,onAdd(v,S){n=v,a=new Ve,s=new Ot,i=new qt({canvas:n.getCanvas(),context:S,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,u=new xe({vertexShader:sn,fragmentShader:on,uniforms:{field:{value:null},palette:{value:null},range:{value:new De(0,1)}},transparent:!0,depthWrite:!1,side:ve,clipping:!0,clippingPlanes:b}),o=new me(new Re(r.width*4,r.height*4),u),o.position.set(p,m,r.settings.heightM),o.rotation.z=r.theta,o.frustumCulled=!1,a.add(o),l=new Yi(i),l.setPlane(r.width*4,r.height*4),l.mesh.geometry.dispose(),l.mesh.geometry=o.geometry.clone(),l.mesh.position.copy(o.position),l.mesh.rotation.copy(o.rotation),l.material.clippingPlanes=b,l.mesh.renderOrder=3,l.mesh.frustumCulled=!1,a.add(l.mesh),y()},render(v,S){const k=performance.now(),P=Math.min(h?(k-h)/1e3:0,.05);h=k,f.makeTranslation(g.x,g.y,g.z).scale(new O(w,-w,w)),s.projectionMatrix.copy(x.fromArray(S)).multiply(f),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),i.resetState(),i.setViewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),l.setResolution(v.drawingBufferWidth,v.drawingBufferHeight),l.enabled&&!e.paused&&l.step(P,s,o),i.resetState(),i.setViewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),i.render(a,s),l.enabled&&!e.paused&&n.triggerRepaint()},onRemove(){d==null||d.dispose(),c==null||c.dispose(),o==null||o.geometry.dispose(),u==null||u.dispose(),l==null||l.dispose(),i==null||i.dispose(),n=null,i=null}}}function oe(r,e,t,n,i){if(t.reduce((o,l)=>o*l,1)!==e.length)throw new Error("Invalid "+r+" shape.");const a=new Uint8Array(e.length*4),s=new DataView(a.buffer);for(let o=0;o<e.length;o++){if(!Number.isFinite(e[o]))throw new Error("Cannot export non-finite "+r);s.setFloat32(o*4,e[o],!0)}return{name:r,content:a,description:{dtype:"float32",shape:t,channels:n,unit:i}}}function Ye(r,e,t,n){var a,s,o;const i={schemaVersion:1,endianness:"little",order:"row-major",origin:r.origin,source:r.source,bounds:r.bounds,selection:((a=r.selection)==null?void 0:a.geometry)??((s=r.polygon)==null?void 0:s.geometry),computationalDomain:(o=r.polygon)==null?void 0:o.geometry,dataZoom:r.dataZoom,tileCount:r.tileCount,warnings:r.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",...n?{mddf:{nx:n.nx,ny:n.ny,margin:n.margin,layerIndex:n.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}}:{},files:Object.fromEntries(t.map(l=>[l.name,l.description]))};return[{name:"metadata.json",content:JSON.stringify(i,null,2)},...t.map(({name:l,content:d})=>({name:l,content:d}))]}function Ft(r,e){const n=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(i=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>i+"_"+a));return[oe("mddf.f32.bin",e.values,[e.ny,e.nx,28],n,"m"),oe("height_layers.f32.bin",r.grid.layers,[r.grid.ny,r.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function Ct(r,e=!1){const t=St(r),n=r.width*r.height,i=new Float32Array(n*3),a=new Float32Array(n),s=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++){const d=l*5;i.set([t[d],t[d+2],t[d+1]],l*3),a[l]=t[d+3],s[l]=t[d+4],o[l]=Math.hypot(t[d],t[d+1],t[d+2])}return[oe("velocity.f32.bin",i,[r.height,r.width,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(r.solid),description:{dtype:"uint8",shape:[r.height,r.width],values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},...e?[oe("temperature.f32.bin",a,[r.height,r.width],["T"],"degC"),oe("tke.f32.bin",s,[r.height,r.width],["TKE"],"m2/s2"),oe("speed.f32.bin",o,[r.height,r.width],["speed"],"m/s")]:[]]}function dn(r,e,t){return Ye(r,t,Ft(t,e),e)}function cn(r,e){return Ye(r,e,Ct(e))}function un(r,e,t){const n=[...Ft(t,e),...Ct(t,!0),{name:"buildings.geojson",content:JSON.stringify(r.buildings),description:{format:"GeoJSON",crs:"WGS84"}}];return Ye(r,t,n,e)}class fn{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let a=0;e.traverse(function(p){if(p.isMesh){const m=p.geometry,b=m.index,y=m.getAttribute("position");a+=b!==null?b.count/3:y.count/3,i.push({object3d:p,geometry:m})}});let s,o=80;if(n===!0){const p=a*2+a*3*4*4+80+4,m=new ArrayBuffer(p);s=new DataView(m),s.setUint32(o,a,!0),o+=4}else s="",s+=`solid exported
`;const l=new O,d=new O,c=new O,u=new O,h=new O,f=new O;for(let p=0,m=i.length;p<m;p++){const b=i[p].object3d,y=i[p].geometry,v=y.index,S=y.getAttribute("position");if(v!==null)for(let k=0;k<v.count;k+=3){const P=v.getX(k+0),I=v.getX(k+1),W=v.getX(k+2);x(P,I,W,S,b)}else for(let k=0;k<S.count;k+=3){const P=k+0,I=k+1,W=k+2;x(P,I,W,S,b)}}return n===!1&&(s+=`endsolid exported
`),s;function x(p,m,b,y,v){l.fromBufferAttribute(y,p),d.fromBufferAttribute(y,m),c.fromBufferAttribute(y,b),v.isSkinnedMesh===!0&&(v.applyBoneTransform(p,l),v.applyBoneTransform(m,d),v.applyBoneTransform(b,c)),l.applyMatrix4(v.matrixWorld),d.applyMatrix4(v.matrixWorld),c.applyMatrix4(v.matrixWorld),g(l,d,c),w(l),w(d),w(c),n===!0?(s.setUint16(o,0,!0),o+=2):(s+=`		endloop
`,s+=`	endfacet
`)}function g(p,m,b){u.subVectors(b,m),h.subVectors(p,m),u.cross(h).normalize(),f.copy(u).normalize(),n===!0?(s.setFloat32(o,f.x,!0),o+=4,s.setFloat32(o,f.y,!0),o+=4,s.setFloat32(o,f.z,!0),o+=4):(s+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,s+=`		outer loop
`)}function w(p){n===!0?(s.setFloat32(o,p.x,!0),o+=4,s.setFloat32(o,p.y,!0),o+=4,s.setFloat32(o,p.z,!0),o+=4):s+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}async function hn(r,e,t={}){var p;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.nx>750||e.ny>750||e.spacingM!==4||e.layerSpacingM!==1.5||((p=e.layers)==null?void 0:p.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:n,ny:i,layers:a,spacingM:s,layerSpacingM:o}=e,l=(m,b)=>m<0||b<0||m>=n||b>=i?0:a[b*n+m],d=async()=>{var m;if(await new Promise(b=>setTimeout(b,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let c=0;for(let m=0;m<i;m++){m%32===0&&await d();for(let b=0;b<n;b++){const y=l(b,m);if(!Number.isInteger(y)||y<0||y>160)throw new Error("Invalid MDDF building height.");y&&(c+=2+ +(y>l(b-1,m))+ +(y>l(b+1,m))+ +(y>l(b,m-1))+ +(y>l(b,m+1)))}}if(!c)throw new Error("The selected MDDF model has no buildings to export.");const u=new Float32Array(c*18);let h=0;const f=(m,b,y,v)=>{for(const S of[m,b,y,m,y,v])u.set(S,h),h+=3};for(let m=0;m<i;m++){m%32===0&&await d();for(let b=0;b<n;b++){const y=l(b,m)*o;if(!y)continue;const v=b*s,S=v+s,k=-m*s,P=k-s;f([v,y,k],[S,y,k],[S,y,P],[v,y,P]),f([v,0,k],[v,0,P],[S,0,P],[S,0,k]);let I=l(b-1,m)*o;y>I&&f([v,I,P],[v,I,k],[v,y,k],[v,y,P]),I=l(b+1,m)*o,y>I&&f([S,I,k],[S,I,P],[S,y,P],[S,y,k]),I=l(b,m-1)*o,y>I&&f([v,I,k],[S,I,k],[S,y,k],[v,y,k]),I=l(b,m+1)*o,y>I&&f([S,I,P],[v,I,P],[v,y,P],[S,y,P])}}const x=new ut;x.setAttribute("position",new fe(u,3));const g=new me(x);let w;try{w=new fn().parse(g,{binary:!0}).buffer}finally{x.dispose(),g.material.dispose()}return[{name:"mddf-model.stl",content:w},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:r.source,origin:e.origin,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:n,ny:i,spacingM:s,layerSpacingM:o,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:r.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:c*2}}},null,2)}]}const gn=.35;function pn(){const r=we(null),e=we(!1),t=we(!1),n=pe({step:0,error:"",grid:null,settings:null,legend:null,downloading:!1,downloadError:""}),i=pe({heightM:10,directionDeg:0,speedMps:6}),a=pe({variable:"speed",speedMps:6,particles:"white",paused:!1,showSurroundings:!0});let s,o,l,d=!1,c=null,u=!1;const h=new Map,f=()=>s,x="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),g=Gt({getMap:f,accessToken:x}),w=Ni();function p(){clearTimeout(c),c=null,u=!1,n.grid=null,n.settings=null,n.step=0,w.invalidate(),k()}const m=yi({getMap:f,ready:e,onChange:p,accessToken:x}),b=le(()=>w.state.downloading||n.downloading||m.state.loading),y=le(()=>b.value||w.state.busy);function v(){return{"city-concordia-2d":!1,"city-concordia-3d":m.state.source==="concordia","city-osm-3d":m.state.source==="osm"}}function S(){for(const[M,C]of h)s!=null&&s.getLayer(M)&&(s.setLayoutProperty(M,"visibility",C.visibility),s.setPaintProperty(M,C.property,C.opacity));h.clear()}function k(){var R,U;if(!s||!e.value)return;const M=w.state.prediction,C=n.step===3&&M;if(!C&&s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),!C&&s.getLayer("flume-buildings")&&s.removeLayer("flume-buildings"),!C&&s.getSource("flume-buildings")&&s.removeSource("flume-buildings"),S(),tt(s,v()),!C){const $=m.getPreview();Le(s,$);return}const D=((R=m.state.snapshot)==null?void 0:R.selection)??((U=m.state.snapshot)==null?void 0:U.polygon);if(D){const $=m.getPreview(),q=ei(s,m.state.source,$),ye=Qt(q,D);Le(s,ye)}const T=new Set(Zt.map($=>$.id));for(const $ of s.getStyle().layers){if($.id==="flume-buildings")continue;const q=$.type==="fill-extrusion"?"fill-extrusion-opacity":$["source-layer"]==="building"&&["fill","line"].includes($.type)?$.type+"-opacity":null;q&&(h.set($.id,{visibility:s.getLayoutProperty($.id,"visibility")??"visible",property:q,opacity:s.getPaintProperty($.id,q)??1}),T.has($.id)?s.setLayoutProperty($.id,"visibility","none"):(s.setPaintProperty($.id,q,gn),a.showSurroundings||s.setLayoutProperty($.id,"visibility","none")))}s.getSource("flume-buildings")||s.addSource("flume-buildings",{type:"geojson",data:m.state.snapshot.buildings}),s.getLayer("flume-buildings")||s.addLayer({id:"flume-buildings",type:"fill-extrusion",source:"flume-buildings",paint:{"fill-extrusion-color":"#9aa3ad","fill-extrusion-height":["get","height"],"fill-extrusion-base":0,"fill-extrusion-opacity":1}}),s.getLayer("flume-field")||(l=ln(M,a,$=>{d||(n.legend=$)}),s.addLayer(l)),s.triggerRepaint()}async function P(){if(y.value)return;const M=await m.captureRegion();if(!(!M||d))try{n.grid=ge(bi(M)),n.step=1,n.error="",W()}catch(C){n.error=C.message}}function I(){try{return n.settings=wi(i),a.speedMps=n.settings.speedMps,n.error="",n.step<2&&(n.step=2),!0}catch(M){return n.error=M.message,!1}}function W(){!n.grid||d||(clearTimeout(c),c=setTimeout(()=>{c=null,J()},320))}async function J(){if(clearTimeout(c),c=null,d||!n.grid||b.value)return;if(w.state.busy){u=!0;return}if(!I())return;await w.run(n.grid,n.settings)&&!d&&(n.step=3),u&&!d&&(u=!1,await J())}async function F(M){if(!(b.value||!n.grid)&&!(M!=="model"&&(w.state.busy||!w.state.prediction))){n.downloading=!0,n.downloadError="";try{const C=m.state.snapshot;let D;if(M==="model")D=await hn(C,n.grid,{shouldCancel:()=>d});else{const R={...w.state.prediction,settings:{...w.state.prediction.settings,speedMps:Number(a.speedMps)}};if(!Number.isFinite(R.settings.speedMps)||R.settings.speedMps<.5||R.settings.speedMps>20)throw new Error("Use a wind speed between 0.5 and 20 m/s.");const U=M==="wind"?null:await w.readMddf();D=M==="all"?un(C,U,R):M==="mddf"?dn(C,U,R):cn(C,R)}const T=await Jt(D);d||Kt(T,"flume-"+M+".zip","application/zip")}catch(C){d||(n.downloadError=C.message)}finally{d||(n.downloading=!1)}}}return Z(()=>n.step,k),Z(()=>w.state.prediction,()=>{!s||!e.value||(s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),k())}),Z(()=>[i.heightM,i.directionDeg],()=>{n.grid&&W()}),Z(()=>i.speedMps,M=>{const C=Number(M);!Number.isFinite(C)||C<.5||C>20||(a.speedMps=C,n.settings&&(n.settings.speedMps=C))}),Z(()=>m.state.source,()=>{s&&e.value&&tt(s,v())}),Z(()=>a.showSurroundings,k),Z(()=>a.paused,()=>s==null?void 0:s.triggerRepaint()),Z(()=>[a.variable,a.particles,a.speedMps],()=>{const M=Number(a.speedMps);Number.isFinite(M)&&M>=.5&&M<=20?(n.downloadError="",l==null||l.configure()):n.downloadError="Use a wind speed between 0.5 and 20 m/s."}),Z(g.mapStyle,M=>{s&&(m.beforeStyleChange(),e.value=!1,l=null,h.clear(),s.setStyle(M,{diff:!1}))}),Pt(()=>{if(!(x!=null&&x.startsWith("pk."))){n.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{s=new ht.Map({container:r.value,accessToken:x,style:g.mapStyle.value,center:[-73.5673,45.5017],zoom:14,pitch:0,antialias:!0,attributionControl:!1}),t.value=!0,s.on("style.load",()=>{if(!d)try{Ht(s,v()),e.value=!0,m.restore(),k()}catch(M){n.error=M.message}}),s.on("error",M=>{d||(n.error="Map data unavailable"+(M.sourceId?" ("+M.sourceId+")":"")+". Check token, allowed domains and connection.")}),g.attach(),o=new ResizeObserver(()=>s==null?void 0:s.resize()),o.observe(r.value)}catch(M){n.error=M.message}}),Ue(()=>{d=!0,clearTimeout(c),m.dispose(),w.dispose(),o==null||o.disconnect(),s==null||s.remove(),s=null}),{mapElement:r,ready:e,initialized:t,state:n,draft:i,display:a,controls:g,region:m,runner:w,locked:b,regionLocked:y,acceptRegion:P,acceptWind:I,run:J,scheduleRun:W,download:F}}const mn={class:"flume-compact"},yn={key:0,class:"flume-meta",role:"status"},bn={key:1,class:"flume-muted"},wn={class:"flume-actions"},xn={key:2,role:"status",class:"flume-muted"},vn={key:3,class:"flume-meta"},Mn=["disabled"],kn={__name:"RegionHud",props:{region:{type:Object,required:!0},ready:Boolean,locked:Boolean},emits:["continue"],setup(r){return(e,t)=>{const n=ct,i=Fe,a=Ce,s=Pe;return E(),N("div",mn,[z(n,{modelValue:r.region.state.source,"onUpdate:modelValue":t[0]||(t[0]=o=>r.region.state.source=o),label:"Buildings","aria-label":"Building source",size:"small",options:[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],"text-by":"text","value-by":"value",disabled:r.region.state.loading||r.locked},null,8,["modelValue","disabled"]),z(i,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:!r.ready||r.region.state.loading||r.locked,loading:r.region.state.loading,onClick:r.region.loadBuildings},{default:j(()=>[...t[3]||(t[3]=[X("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),r.region.state.loadedArea?(E(),N("p",yn," Loaded detailed buildings: "+L(r.region.state.loadedArea.count)+" parts · "+L((r.region.state.loadedArea.extentM[0]/1e3).toFixed(1))+" × "+L((r.region.state.loadedArea.extentM[1]/1e3).toFixed(1))+" km. Detail stays when you zoom. ",1)):(E(),N("p",bn," Load a 3 × 3 km area around the map centre. The map fits the whole area automatically. ")),_("div",wn,[z(i,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:!r.ready||r.region.state.loading||r.locked,"aria-label":"Select region",onClick:r.region.startSelection},{default:j(()=>[...t[4]||(t[4]=[X("Draw area",-1)])]),_:1},8,["disabled","onClick"]),z(i,{size:"small",disabled:!r.ready||!r.region.state.region&&!r.region.state.loadedArea||r.locked,loading:r.region.state.loading,"aria-label":r.region.state.region?"Use selected region":"Use full loaded area",onClick:t[1]||(t[1]=o=>e.$emit("continue"))},{default:j(()=>[X(L(r.region.state.region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label"])]),r.region.state.drawing?(E(),N("p",xn," Click polygon corners; move the pointer to preview the fill. Click the first point to finish. Esc cancels. ")):r.region.state.region?(E(),N("p",vn,[X(L(r.region.state.region.extentM[0])+" × "+L(r.region.state.region.extentM[1])+" m · 4 m cells · padded grid ",1),_("button",{type:"button",class:"flume-link",disabled:r.region.state.loading||r.locked,onClick:t[2]||(t[2]=(...o)=>r.region.clearSelection&&r.region.clearSelection(...o))}," Clear ",8,Mn)])):Y("",!0),r.region.state.loading?(E(),ie(a,{key:4,"model-value":r.region.state.progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):Y("",!0),r.region.state.error?(E(),ie(s,{key:5,color:"danger"},{default:j(()=>[X(L(r.region.state.error),1)]),_:1})):Y("",!0)])}}},Sn={class:"wind"},Fn={class:"conditions"},Cn={class:"condition"},Pn=["disabled"],_n=["disabled"],Bn={class:"condition"},In=["disabled"],An=["disabled"],$n={class:"direction"},En=["aria-valuenow","aria-disabled"],Rn=["x1","y1","x2","y2"],Vn=["cx","cy"],Dn={class:"bearing"},Tn={class:"condition"},zn=["disabled"],Nn={class:"cardinals"},Ln={key:2,class:"busy"},Un={role:"status"},Wn={__name:"WindSettingsHud",props:{settings:{type:Object,required:!0},grid:{type:Object,default:null},runner:{type:Object,default:null},error:{type:String,default:""},locked:Boolean},emits:["run"],setup(r){const e=r,t=we(null),n=le(()=>Number(e.settings.directionDeg)*Math.PI/180),i=le(()=>!!e.grid&&!e.locked);function a(o){if(!i.value||o.type==="pointermove"&&!o.buttons)return;o.type==="pointerdown"&&o.currentTarget.setPointerCapture(o.pointerId);const l=t.value.getBoundingClientRect();e.settings.directionDeg=(Math.round(Math.atan2(-(o.clientY-l.top-l.height/2),o.clientX-l.left-l.width/2)*180/Math.PI)+360)%360}function s(o){if(!i.value)return;const l=o.key==="ArrowRight"||o.key==="ArrowUp"?1:o.key==="ArrowLeft"||o.key==="ArrowDown"?-1:0;l&&(o.preventDefault(),e.settings.directionDeg=(Number(e.settings.directionDeg)+l+360)%360)}return(o,l)=>{var h,f,x;const d=Fe,c=Pe,u=Ce;return E(),N("div",Sn,[_("div",Fn,[_("label",Cn,[l[6]||(l[6]=_("span",null,[X("Slice height "),_("small",null,"m")],-1)),ee(_("input",{"onUpdate:modelValue":l[0]||(l[0]=g=>r.settings.heightM=g),class:"num",type:"number",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height (m)",disabled:!i.value},null,8,Pn),[[ce,r.settings.heightM,void 0,{number:!0}]]),ee(_("input",{"onUpdate:modelValue":l[1]||(l[1]=g=>r.settings.heightM=g),class:"range",type:"range",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height",disabled:!i.value},null,8,_n),[[ce,r.settings.heightM,void 0,{number:!0}]])]),_("label",Bn,[l[7]||(l[7]=_("span",null,[X("Wind speed "),_("small",null,"m/s")],-1)),ee(_("input",{"onUpdate:modelValue":l[2]||(l[2]=g=>r.settings.speedMps=g),class:"num",type:"number",min:"0.5",max:"20",step:"0.1","aria-label":"Reference wind speed (m/s)",disabled:!i.value},null,8,In),[[ce,r.settings.speedMps,void 0,{number:!0}]]),ee(_("input",{"onUpdate:modelValue":l[3]||(l[3]=g=>r.settings.speedMps=g),class:"range",type:"range",min:"0.5",max:"20",step:"0.1","aria-label":"Wind speed",disabled:!i.value},null,8,An),[[ce,r.settings.speedMps,void 0,{number:!0}]])])]),_("div",$n,[(E(),N("svg",{ref_key:"dial",ref:t,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":r.settings.directionDeg,"aria-disabled":!i.value||void 0,onPointerdown:_t(a,["prevent"]),onPointermove:a,onKeydown:s},[l[8]||(l[8]=Bt('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".28" stroke-width="2" data-v-d8c7c4e0></circle><text x="80" y="16" text-anchor="middle" data-v-d8c7c4e0>90°</text><text x="146" y="84" text-anchor="middle" data-v-d8c7c4e0>0°</text><text x="80" y="152" text-anchor="middle" data-v-d8c7c4e0>270°</text><text x="14" y="84" text-anchor="middle" data-v-d8c7c4e0>180°</text>',5)),_("line",{x1:80-Math.cos(n.value)*30,y1:80+Math.sin(n.value)*30,x2:80+Math.cos(n.value)*42,y2:80-Math.sin(n.value)*42,stroke:"#64d2ff","stroke-width":"3.5","stroke-linecap":"round"},null,8,Rn),_("circle",{cx:80+Math.cos(n.value)*42,cy:80-Math.sin(n.value)*42,r:"5",fill:"#64d2ff"},null,8,Vn)],40,En)),_("div",Dn,[_("label",Tn,[l[9]||(l[9]=_("span",null,[X("Wind towards "),_("small",null,"°")],-1)),ee(_("input",{"onUpdate:modelValue":l[4]||(l[4]=g=>r.settings.directionDeg=g),class:"num",type:"number",step:"1","aria-label":"Wind towards (°)",disabled:!i.value},null,8,zn),[[ce,r.settings.directionDeg,void 0,{number:!0}]])]),_("div",Nn,[(E(),N(de,null,je([{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],g=>z(d,{key:g.text,size:"small",preset:"secondary",disabled:!i.value,"aria-label":"Wind towards "+g.text,onClick:w=>r.settings.directionDeg=g.value},{default:j(()=>[X(L(g.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),r.error?(E(),ie(c,{key:0,color:"danger"},{default:j(()=>[X(L(r.error),1)]),_:1})):Y("",!0),(h=r.runner)!=null&&h.state.error?(E(),ie(c,{key:1,color:"danger"},{default:j(()=>[X(L(r.runner.state.error),1)]),_:1})):Y("",!0),(f=r.runner)!=null&&f.state.busy?(E(),N("div",Ln,[z(u,{"model-value":r.runner.state.progress*100,indeterminate:r.runner.state.progress===0},null,8,["model-value","indeterminate"]),_("p",Un,L(r.runner.state.stage),1)])):Y("",!0),z(d,{block:"",disabled:!i.value,loading:(x=r.runner)==null?void 0:x.state.busy,"aria-label":"Run prediction",onClick:l[5]||(l[5]=g=>o.$emit("run"))},{default:j(()=>[...l[10]||(l[10]=[X("Run prediction",-1)])]),_:1},8,["disabled","loading"])])}}},jn=We(Wn,[["__scopeId","data-v-d8c7c4e0"]]),Xn={class:"display-settings"},On={key:0,class:"hint"},qn={class:"variables",role:"group","aria-label":"Field"},Yn=["aria-pressed","onClick"],Gn={class:"row"},Hn={key:0,class:"legend"},Zn={class:"legend-top"},Jn={class:"legend-range"},Kn={class:"hint"},Qn={__name:"DisplaySettingsHud",props:{display:{type:Object,required:!0},legend:{type:Object,default:null},prediction:{type:Object,default:null}},setup(r){const e=r,t=le(()=>{var i;return((i=Se.find(a=>a.id===e.display.variable))==null?void 0:i.ramp)??"turbo"}),n=le(()=>"linear-gradient(to right,"+Array.from({length:17},(i,a)=>"rgb("+kt(t.value,a/16).join(",")+") "+a*100/16+"%").join(",")+")");return(i,a)=>{const s=At;return E(),N("div",Xn,[r.prediction?(E(),N(de,{key:1},[_("div",qn,[(E(!0),N(de,null,je(B(Se),o=>(E(),N("button",{key:o.id,type:"button","aria-pressed":r.display.variable===o.id,onClick:l=>r.display.variable=o.id},L(o.label),9,Yn))),128))]),_("div",Gn,[a[4]||(a[4]=_("span",{class:"unit"},"particles",-1)),ee(_("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>r.display.particles=o),"aria-label":"Particles"},[...a[3]||(a[3]=[_("option",{value:"white"},"white, over the field",-1),_("option",{value:"tinted"},"coloured, no field",-1),_("option",{value:"off"},"off",-1)])],512),[[It,r.display.particles]])]),z(s,{modelValue:r.display.paused,"onUpdate:modelValue":a[1]||(a[1]=o=>r.display.paused=o),class:"display-toggle",label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"]),z(s,{modelValue:r.display.showSurroundings,"onUpdate:modelValue":a[2]||(a[2]=o=>r.display.showSurroundings=o),class:"display-toggle",label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),r.legend?(E(),N("div",Hn,[_("div",Zn,[_("strong",null,L(r.legend.legend),1),_("span",null,L(r.legend.unit),1)]),_("div",{class:"colorbar",style:$t({background:n.value})},null,4),_("div",Jn,[_("span",null,L(r.legend.low.toFixed(2)),1),_("span",null,L(r.legend.high.toFixed(2)),1)])])):Y("",!0),_("p",Kn,L(r.prediction.patchCount)+" patches · "+L((r.prediction.milliseconds/1e3).toFixed(1))+" s",1)],64)):(E(),N("p",On,"Run a prediction to inspect the field."))])}}},er=We(Qn,[["__scopeId","data-v-5184528d"]]),tr={class:"space-y-2"},ir={key:0,class:"text-xs text-secondary"},nr={class:"grid grid-cols-2 gap-2"},rr={__name:"DownloadsHud",props:{grid:{type:Object,default:null},prediction:{type:Object,default:null},downloading:Boolean,locked:Boolean,predicting:Boolean,error:{type:String,default:""}},emits:["download"],setup(r){return(e,t)=>{const n=Fe,i=Ce,a=Pe;return E(),N("div",tr,[r.grid?(E(),N(de,{key:1},[_("div",nr,[(E(),N(de,null,je([{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}],s=>z(n,{key:s.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":s.label,disabled:r.downloading||r.locked||s.id!=="model"&&(r.predicting||!r.prediction),onClick:o=>e.$emit("download",s.id)},{default:j(()=>[X(L(s.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),r.downloading?(E(),ie(i,{key:0,indeterminate:"","aria-label":"Preparing download"})):Y("",!0),r.error?(E(),ie(a,{key:1,color:"danger"},{default:j(()=>[X(L(r.error),1)]),_:1})):Y("",!0)],64)):(E(),N("p",ir,"Choose a simulation area before downloading its model."))])}}},ar={class:"flume-hud-stack"},sr={key:0,class:"flume-status"},or={__name:"FlumeCityView",setup(r){const e=pn(),{mapElement:t,ready:n,initialized:i,state:a,draft:s,display:o,region:l,runner:d,locked:c,regionLocked:u}=e,{controlsElement:h,controlsVisible:f,mapStyle:x,mapStyles:g}=e.controls;return(w,p)=>{const m=Fe,b=ct,y=Et,v=Vt,S=Dt,k=Pe,P=Ce;return E(),N("section",{class:"flume-page","aria-label":"Flume City wind prediction",onKeydown:p[2]||(p[2]=Tt((...I)=>B(l).stopSelection&&B(l).stopSelection(...I),["esc"]))},[_("div",{ref_key:"mapElement",ref:t,class:"flume-map","aria-label":"Flume City map"},null,512),ee(_("aside",{ref_key:"controlsElement",ref:h,class:"mapboxgl-ctrl flume-map-actions"},[z(v,{placement:"left-start","close-on-content-click":!1},{anchor:j(()=>[z(m,{size:"small",icon:"mso-layers","aria-label":"Flume basemap"})]),default:j(()=>[z(y,null,{default:j(()=>[z(b,{modelValue:B(x),"onUpdate:modelValue":p[0]||(p[0]=I=>Rt(x)?x.value=I:null),label:"Basemap",options:B(g),"text-by":"title","value-by":"value",disabled:B(c)},null,8,["modelValue","options","disabled"])]),_:1})]),_:1}),z(m,{size:"small",icon:B(f)?"mso-visibility_off":"mso-visibility","aria-label":B(f)?"Hide Flume controls":"Show Flume controls",onClick:p[1]||(p[1]=I=>f.value=!B(f))},null,8,["icon","aria-label"])],512),[[Ze,B(i)]]),ee(_("div",ar,[p[3]||(p[3]=_("header",{class:"flume-heading"},[_("h1",null,"Flume City"),_("p",null,"Urban wind simulation")],-1)),z(Ie,{title:"1 · Simulation area",inert:B(u),collapsed:B(a).step>0},{default:j(()=>[z(kn,{region:B(l),ready:B(n),locked:B(u),onContinue:B(e).acceptRegion},null,8,["region","ready","locked","onContinue"])]),_:1},8,["inert","collapsed"]),z(Ie,{title:"2 · Configuration",collapsed:B(a).step===0},{default:j(()=>[z(jn,{settings:B(s),grid:B(a).grid,runner:B(d),error:B(a).error,locked:B(c),onRun:B(e).run},null,8,["settings","grid","runner","error","locked","onRun"]),B(d).state.prediction?(E(),N(de,{key:0},[z(S),z(er,{display:B(o),legend:B(a).legend,prediction:B(d).state.prediction},null,8,["display","legend","prediction"])],64)):Y("",!0)]),_:1},8,["collapsed"]),z(Ie,{title:"3 · Downloads",collapsed:!B(a).grid},{default:j(()=>[z(rr,{grid:B(a).grid,prediction:B(d).state.prediction,downloading:B(a).downloading,locked:B(d).state.downloading,predicting:B(d).state.busy,error:B(a).downloadError,onDownload:B(e).download},null,8,["grid","prediction","downloading","locked","predicting","error","onDownload"])]),_:1},8,["collapsed"]),B(a).error&&!B(a).grid?(E(),ie(k,{key:0,color:"danger"},{default:j(()=>[X(L(B(a).error),1)]),_:1})):Y("",!0)],512),[[Ze,B(f)]]),!B(n)&&!B(a).error?(E(),N("div",sr,[z(P,{indeterminate:"","aria-label":"Loading Flume map"})])):Y("",!0)],32)}}},yr=We(or,[["__scopeId","data-v-eb1c49aa"]]);export{yr as default};
//# sourceMappingURL=FlumeCityView-fWhP6_t1.js.map
