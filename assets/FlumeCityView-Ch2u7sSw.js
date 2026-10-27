import{w as J,o as Xe,m as de,r as be,b as Bt,c as ue,a as ve,d as D,q as L,g as T,K as pt,f as W,x as j,L as Pe,t as U,l as _,s as G,e as ae,J as _e,v as Ie,_ as Oe,U as ne,a2 as ge,H as At,a3 as $t,F as fe,y as qe,j as A,a4 as Et,p as Rt,Q as Dt,W as Qe,X as Vt,i as Tt,Y as Nt,M as zt,a1 as Lt}from"./index-FUbTEX0Z.js";import{j as Ut,h as Wt,t as et,k as jt,O as Xt,q as we,v as Te,S as Ne,w as Me,o as Se,B as mt,e as pe,D as $e,x as ze,y as me,R as Ot,V as X,M as Le,z as qt,H as yt,E as Ue,N as tt,F as Yt,m as bt,c as Gt,W as Ht,G as it,I as nt,J as Kt,u as Zt,a as Jt,s as rt,b as Qt,r as Ee}from"./mapbox-gl-geocoder-BGpZ8SQd.js";import{c as Ye}from"./index-D6bWIqpK.js";import{m as wt,c as We}from"./geojsonToStl-Bbo8coar.js";import{z as ei}from"./archive-Dz16c6AW.js";import{d as ti}from"./download-B6B1Q6H-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./earcut-Drp1yMsm.js";import"./jszip.min-UX6Ol9Iw.js";function Ge(r,e){for(const y of[r,e])if(!Array.isArray(y)||y.length<2||!y.every(Number.isFinite)||Math.abs(y[0])>180||Math.abs(y[1])>85.051129)throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(r[0],e[0]),Math.min(r[1],e[1])];if(Math.abs(r[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const n=wt(t),i=We(t),[a,s]=n([Math.max(r[0],e[0]),Math.max(r[1],e[1])]);if(a<=0||s<=0)throw new Error("The region is empty.");const o=Math.ceil((a-1e-6)/4),l=Math.ceil((s-1e-6)/4);if(o>750||l>750)throw new Error("Region too large: maximum 750 cells (3 km) per side.");const d=i([o*4,l*4]),c=[...t,...d],[u,g,f,x]=c,m={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[u,g],[f,g],[f,x],[u,x],[u,g]]]}};return{origin:t,bounds:c,extentM:[o*4,l*4],polygon:m}}const ye=r=>{var e;return r.id??((e=r.properties)==null?void 0:e.id)};function xt(r){var n,i,a;const e=new Map,t=new Set;for(const s of r){if(!["Polygon","MultiPolygon"].includes((n=s.geometry)==null?void 0:n.type))continue;Ye(s,g=>{if(!Number.isFinite(g[0])||!Number.isFinite(g[1])||Math.abs(g[0])>180||Math.abs(g[1])>85.051129)throw new Error("Invalid building coordinates.")});const o=Number((i=s.properties)==null?void 0:i.height),l=Number((a=s.properties)==null?void 0:a.min_height)||0,d=JSON.stringify([s.geometry,o,l]);if(t.has(d))continue;t.add(d);const c=ye(s),u=c==null?d:JSON.stringify([c,o,l]);e.has(u)||e.set(u,[]),e.get(u).push(structuredClone(s))}return Array.from(e.values(),s=>{const o=s[0];if(s.length>1){const l=Wt({type:"FeatureCollection",features:s});if(!l)throw new Error("Building parts produced empty geometry.");o.geometry=l.geometry,delete o.bbox}return o})}function ii(r,e){var f,x,m;const t=xt(r),n=e.selection??e.polygon,i=new Set(t.filter(y=>Ut(y,n))),a=new Set(Array.from(i,ye).filter(y=>y!=null)),s=[],o=[],l=[];let d=0,c=0;for(const y of t){if(!i.has(y)&&!(ye(y)!=null&&a.has(ye(y)))){o.push(y);continue}const h=(f=y.properties)==null?void 0:f.height;if(h==null||h===""){d++;continue}const b=Number(h);if(!Number.isFinite(b)||b<0||b>240)throw new Error("Building height must be finite and between 0 and 240 m.");if(b===0){d++;continue}Number((x=y.properties)==null?void 0:x.min_height)>0&&c++,s.push({...y,properties:{...y.properties,source_height:b,source_min_height:Number((m=y.properties)==null?void 0:m.min_height)||0,height:Math.max(1,Math.round(b/1.5))*1.5,min_height:0}})}const u={type:"FeatureCollection",features:s};let g=e;if(s.length){const y=[1/0,1/0,-1/0,-1/0];Ye(u,h=>{y[0]=Math.min(y[0],h[0]),y[1]=Math.min(y[1],h[1]),y[2]=Math.max(y[2],h[0]),y[3]=Math.max(y[3],h[1])}),g=Ge(y.slice(0,2),y.slice(2,4))}return d&&l.push(d+" parts have missing/zero height and were omitted."),c&&l.push(c+" raised parts are treated as solid from the ground to their roof."),s.length||l.push("No buildings found in loaded map data. This run will use open ground."),s.some(y=>ye(y)==null)&&l.push("Selected parts without provider IDs cannot be joined across tile boundaries."),l.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...g,selection:structuredClone(e.selection??e.polygon),buildings:u,surroundings:{type:"FeatureCollection",features:o},warnings:l}}function at(r){var i;if(((i=r==null?void 0:r.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");const e=[1/0,1/0,-1/0,-1/0];let t=0;if(Ye(r,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e[0]=Math.min(e[0],a[0]),e[1]=Math.min(e[1],a[1]),e[2]=Math.max(e[2],a[0]),e[3]=Math.max(e[3],a[1]),t++}),t<4)throw new Error("A polygon needs at least three corners.");return{...Ge(e.slice(0,2),e.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(r.geometry)}}}const Z="flume-detailed-buildings";function st(r){var t,n;const e=[];for(const i of xt(r)){const a=Number((t=i.properties)==null?void 0:t.height);if(!Number.isFinite(a)||a<=0)continue;const s=Math.min(a,Math.max(0,Number((n=i.properties)==null?void 0:n.min_height)||0));e.push({...i,properties:{...i.properties,height:a,min_height:s},geometry:i.geometry})}return{type:"FeatureCollection",features:e}}function je(r,e){var n;if(!((n=e==null?void 0:e.features)!=null&&n.length)){r.getLayer(Z)&&r.removeLayer(Z),r.getSource(Z)&&r.removeSource(Z);return}const t=e;r.getSource(Z)?r.getSource(Z).setData(t):r.addSource(Z,{type:"geojson",data:t,maxzoom:22,tolerance:0}),r.getLayer(Z)||r.addLayer({id:Z,type:"fill-extrusion",source:Z,minzoom:0,paint:{"fill-extrusion-color":"#8cb8d8","fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}const ot=65536*65536,ni=12,lt=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),ri=0,ai=1,dt=2,si=5;class oi{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,n=this.length){let i;for(;i=this.nextField(n);)e(i,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*ot;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*ot;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,n=t[this.pos++];if(n<128)return n;let i=n&127,a;return a=t[this.pos++],i|=(a&127)<<7,a<128||(a=t[this.pos++],i|=(a&127)<<14,a<128)||(a=t[this.pos++],i|=(a&127)<<21,a<128)?i:(a=t[this.pos],i|=(a&15)<<28,li(i,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=ni&&lt?lt.decode(this.buf.subarray(t,e)):di(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===dt?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===ri)for(;this.buf[this.pos++]>127;);else if(t===dt)this.pos=this.readVarint()+this.pos;else if(t===si)this.pos+=4;else if(t===ai)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function li(r,e,t){const n=t.buf;let i,a;if(a=n[t.pos++],i=(a&112)>>4,a<128||(a=n[t.pos++],i|=(a&127)<<3,a<128)||(a=n[t.pos++],i|=(a&127)<<10,a<128)||(a=n[t.pos++],i|=(a&127)<<17,a<128)||(a=n[t.pos++],i|=(a&127)<<24,a<128)||(a=n[t.pos++],i|=(a&1)<<31,a<128))return oe(r,i,e);throw new Error("Expected varint not more than 10 bytes")}function oe(r,e,t){return t?e*4294967296+(r>>>0):(e>>>0)*4294967296+(r>>>0)}function di(r,e,t){let n="",i=e;for(;i<t;){const a=r[i];let s=null,o=a>239?4:a>223?3:a>191?2:1;if(i+o>t)break;let l,d,c;o===1?a<128&&(s=a):o===2?(l=r[i+1],(l&192)===128&&(s=(a&31)<<6|l&63,s<=127&&(s=null))):o===3?(l=r[i+1],d=r[i+2],(l&192)===128&&(d&192)===128&&(s=(a&15)<<12|(l&63)<<6|d&63,(s<=2047||s>=55296&&s<=57343)&&(s=null))):o===4&&(l=r[i+1],d=r[i+2],c=r[i+3],(l&192)===128&&(d&192)===128&&(c&192)===128&&(s=(a&15)<<18|(l&63)<<12|(d&63)<<6|c&63,(s<=65535||s>=1114112)&&(s=null))),s===null?(s=65533,o=1):s>65535&&(s-=65536,n+=String.fromCharCode(s>>>10&1023|55296),s=56320|s&1023),n+=String.fromCharCode(s),i+=o}return n}class vt{constructor(e,t,n,i,a){for(this.properties=Object.create(null),this.extent=n,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=a;e.pos<t;){const s=e.readVarint();if(s===8)this.id=e.readVarint();else if(s===18){const o=e.readVarint()+e.pos;for(;e.pos<o;){const l=i[e.readVarint()],d=a[e.readVarint()];this.properties[l]=d}}else s===24?this.type=e.readVarint():(s===34&&(this._geometry=e.pos),e.skip(s))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,n=[];let i,a=1,s=0,o=0,l=0;for(;e.pos<t;){if(s<=0){const d=e.readVarint();if(a=d&7,s=d>>3,s===0)continue}if(s--,a===1)o+=e.readSVarint(),l+=e.readSVarint(),i&&n.push(i),i=[new et(o,l)];else if(a===2)o+=e.readSVarint(),l+=e.readSVarint(),i&&i.push(new et(o,l));else if(a===7)i&&i.push(i[0].clone());else throw new Error(`unknown command ${a}`)}return i&&n.push(i),n}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let n=1,i=0,a=0,s=0,o=1/0,l=-1/0,d=1/0,c=-1/0;for(;e.pos<t;){if(i<=0){const u=e.readVarint();if(n=u&7,i=u>>3,i===0)continue}if(i--,n===1||n===2)a+=e.readSVarint(),s+=e.readSVarint(),a<o&&(o=a),a>l&&(l=a),s<d&&(d=s),s>c&&(c=s);else if(n!==7)throw new Error(`unknown command ${n}`)}return[o,d,l,c]}toGeoJSON(e,t,n){const i=this.extent*Math.pow(2,n),a=this.extent*e,s=this.extent*t,o=this.loadGeometry();function l(g){return[(g.x+a)*360/i-180,360/Math.PI*Math.atan(Math.exp((1-(g.y+s)*2/i)*Math.PI))-90]}function d(g){return g.map(l)}let c;if(this.type===1){const g=[];for(const x of o)g.push(x[0]);const f=d(g);c=g.length===1?{type:"Point",coordinates:f[0]}:{type:"MultiPoint",coordinates:f}}else if(this.type===2){const g=o.map(d);c=g.length===1?{type:"LineString",coordinates:g[0]}:{type:"MultiLineString",coordinates:g}}else if(this.type===3){const g=ci(o),f=[];for(const x of g)f.push(x.map(d));c=f.length===1?{type:"Polygon",coordinates:f[0]}:{type:"MultiPolygon",coordinates:f}}else throw new Error("unknown feature type");const u={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(u.id=this.id),u}}vt.types=["Unknown","Point","LineString","Polygon"];function ci(r){const e=r.length;if(e<=1)return[r];const t=[];let n,i;for(let a=0;a<e;a++){const s=ui(r[a]);s!==0&&(i===void 0&&(i=s<0),i===s<0?(n&&t.push(n),n=[r[a]]):n&&n.push(r[a]))}return n&&t.push(n),t}function ui(r){let e=0;for(let t=0,n=r.length,i=n-1,a,s;t<n;i=t++)a=r[t],s=r[i],e+=(s.x-a.x)*(a.y+s.y);return e}class fi{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const n=e.readVarint();n===10?this.name=e.readString():n===18?(this._features.push(e.pos),e.skip(n)):n===26?this._keys.push(e.readString()):n===34?this._values.push(hi(e)):n===40?this.extent=e.readVarint():n===120?this.version=e.readVarint():e.skip(n)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new vt(this._pbf,t,this.extent,this._keys,this._values)}}function hi(r){let e=null;const t=r.readVarint()+r.pos;for(;r.pos<t;){const n=r.readVarint();e=n===10?r.readString():n===21?r.readFloat():n===25?r.readDouble():n===32?r.readVarint(!0):n===40?r.readVarint():n===48?r.readSVarint():n===56?r.readBoolean():(r.skip(n),null)}if(e==null)throw new Error("unknown feature value");return e}class gi{constructor(e,t=e.length){const n=Object.create(null);for(;e.pos<t;){const i=e.readVarint();if(i===26){const a=new fi(e,e.readVarint()+e.pos);a.length&&(n[a.name]=a)}else e.skip(i)}this.layers=n}}function pi(r,e,t=0){const n=2**e,i=u=>(u+180)/360*n,a=u=>{const g=Math.max(-85.051129,Math.min(85.051129,u))*Math.PI/180;return(1-Math.asinh(Math.tan(g))/Math.PI)/2*n},s=Math.max(0,Math.floor(i(r[0]))-t),o=Math.min(n-1,Math.ceil(i(r[2])-1e-9)-1+t),l=Math.max(0,Math.floor(a(r[3]))-t),d=Math.min(n-1,Math.ceil(a(r[1])-1e-9)-1+t);if((o-s+1)*(d-l+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const c=[];for(let u=l;u<=d;u++)for(let g=s;g<=o;g++)c.push({z:e,x:g,y:u});return c}async function ct(r,e){e==null||e.throwIfAborted();const t=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),n=await fetch(r,{signal:t});if(!n.ok)throw new Error("Building data request failed (HTTP "+n.status+"). Check source access and token.");return n}function ut(r,e){var n;const t=new URL(r,((n=globalThis.location)==null?void 0:n.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function mi({sourceConfig:r,source:e,bounds:t,accessToken:n,signal:i,onProgress:a,paddingTiles:s=0}){var w;if(!r)throw new Error("The selected basemap does not provide this building source.");let o=r;if(r.url){let p=r.url;if(p.startsWith("mapbox://")){const v=p.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(v))throw new Error("Invalid Mapbox tileset ID.");p="https://api.mapbox.com/v4/"+v+".json?secure"}o=await(await ct(ut(p,n),i)).json()}if(!((w=o.tiles)!=null&&w.length))throw new Error("The selected source has no vector tile URLs.");const l=Math.max(o.minzoom??0,Math.min(16,o.maxzoom??16));if(!Number.isInteger(l)||l<0||l>22)throw new Error("Unsupported tile detail level.");const d=pi(t,l,s),c=[];let u=0,g=0,f=0;const x=e==="osm"?"building":"Montreal_Qatar-6hvjju";await Promise.all(Array.from({length:Math.min(4,d.length)},async()=>{for(;u<d.length;){const{x:p,y:v,z:C}=d[u++];let S=o.tiles[0].replaceAll("{z}",String(C)).replaceAll("{x}",String(p)).replaceAll("{y}",String(o.scheme==="tms"?2**C-v-1:v)).replaceAll("{ratio}","");S=ut(S,n);const P=await(await ct(S,i)).arrayBuffer();if(f+=P.byteLength,P.byteLength>16*1024*1024||f>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const I=new gi(new oi(new Uint8Array(P))).layers[x];if(I)for(let N=0;N<I.length;N++){const O=I.feature(N);e==="osm"&&String(O.properties.extrude)!=="true"||O.type===3&&c.push(O.toGeoJSON(p,v,C))}g++,a==null||a(g/d.length)}})),i==null||i.throwIfAborted();const m=2**l,y=p=>p/m*360-180,h=p=>Math.atan(Math.sinh(Math.PI*(1-2*p/m)))*180/Math.PI,b=[y(Math.min(...d.map(p=>p.x))),h(Math.max(...d.map(p=>p.y))+1),y(Math.max(...d.map(p=>p.x))+1),h(Math.min(...d.map(p=>p.y)))];return{features:c,zoom:l,tileCount:d.length,coverageBounds:b}}const Q="flume-region-domain";function yi({getMap:r,ready:e,onChange:t,accessToken:n}){const i=be({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,s=!1,o=null,l=0,d=null;function c(k=!1){l++,o==null||o.abort(),k||(d=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function u(){const k=r();if(!k||!e.value)return;je(k,d==null?void 0:d.preview);const M={type:"FeatureCollection",features:i.region?[i.region.polygon]:d?[d.area.polygon]:[]};if(!M.features.length){k.getLayer(Q)&&k.removeLayer(Q),k.getSource(Q)&&k.removeSource(Q);return}k.getSource(Q)?k.getSource(Q).setData(M):(k.addSource(Q,{type:"geojson",data:M}),k.addLayer({id:Q,type:"line",source:Q,paint:{"line-color":"#a8b8cc","line-width":1.5,"line-dasharray":[4,3]}}))}function g(k){c(!i.region&&!i.snapshot),i.error="";try{i.region=de(at(k))}catch(M){i.region=null,i.error=M.message}u()}function f(k){var z;if(s||!a)return;const M=(z=k.features)==null?void 0:z.at(-1);if(k.type==="draw.create"&&M)for(const B of a.getAll().features)B.id!==M.id&&a.delete(B.id);const F=a.getAll().features.find(B=>B.geometry.type==="Polygon");F?g(F):(c(),i.region=null,u()),i.drawing=!1}function x(k){i.drawing=k.mode==="draw_polygon"||k.mode==="direct_select"}function m(){var M;const k=r();if(!k||!e.value)throw new Error("Wait for the map to load.");if(!a){a=new jt({displayControlsDefault:!1,controls:{},boxSelect:!1}),k.addControl(a,"bottom-left");for(const F of["draw.create","draw.update","draw.delete"])k.on(F,f);k.on("draw.modechange",x);for(const F of k.getStyle().layers)F.id.startsWith("gl-draw-")&&(F.type==="fill"&&(k.setPaintProperty(F.id,"fill-color","#ffd000"),k.setPaintProperty(F.id,"fill-opacity",.1)),F.type==="line"&&k.setPaintProperty(F.id,"line-color","#ffd000"));(M=i.region)!=null&&M.selection&&a.add(i.region.selection)}return a}function y(){a&&a.changeMode("simple_select"),i.drawing=!1}function h(){if(!i.loading)try{const k=m();c(!i.region&&!i.snapshot),i.region=null,k.deleteAll(),u(),k.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(k){i.error=k.message}}function b(){S(),c(),i.region=null,i.error="",u()}function w(k){var z;const M=r(),F=M.getCanvas().clientWidth;(z=M.resize)==null||z.call(M),M.fitBounds([k.bounds.slice(0,2),k.bounds.slice(2,4)],{padding:F>=640?{top:40,bottom:40,left:Math.min(320,F*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function p(k,M,F,z){if(F.signal.throwIfAborted(),(d==null?void 0:d.source)===M&&k.bounds.every((R,Y)=>Y<2?R>=d.area.bounds[Y]:R<=d.area.bounds[Y]))return d.tiles;const B=r().getStyle().sources[M==="osm"?"composite":"city-concordia"],V=await mi({sourceConfig:B,source:M,bounds:k.bounds,accessToken:n,signal:F.signal,paddingTiles:1,onProgress:R=>{z===l&&(i.progress=R)}});if(s||F.signal.aborted||z!==l)throw new DOMException("Cancelled","AbortError");const q=st(V.features);return d={source:M,area:k,tiles:V,preview:q},i.loadedArea=de({source:M,bounds:[...k.bounds],extentM:[...k.extentM],count:q.features.length}),u(),V}async function v(){if(i.loading||s)return null;const k=r();if(!k||!e.value)return i.error="Wait for the map to load.",null;const M=new AbortController,F=l,z=i.source;o=M,i.loading=!0,i.progress=0,i.error="";try{const B=k.getCenter().wrap().toArray(),V=We(B)([-1500,-1500]),q=Ge(V,We(V)([3e3,3e3]));return w(q),await p(q,z,M,F),s||M.signal.aborted||F!==l?null:(i.snapshot=null,t==null||t(),i.loadedArea)}catch(B){return M.abort(),!s&&F===l&&B.name!=="AbortError"&&(i.error=B.message),null}finally{o===M&&(o=null,s||(i.loading=!1))}}async function C(){if(i.loading||s)return null;!i.region&&(d==null?void 0:d.source)===i.source&&g(d.area.polygon);const k=r(),M=i.region,F=i.source,z=l;if(!k||!e.value||!M)return i.error="Draw and finish a valid polygon first.",null;const B=new AbortController;o=B,i.loading=!0,i.progress=0,i.error="";try{const V=at(M.selection??M.polygon);let q=V,R,Y;for(let ee=0;ee<4;ee++){if(Y=await p(q,F,B,z),s||B.signal.aborted||z!==l)return null;R=ii(Y.features,V);const he=Y.coverageBounds;if(R.bounds.every(($,E)=>E<2?$>he[E]+1e-8:$<he[E]-1e-8)||!R.buildings.features.length)break;if(ee===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");q=R}return R.source=F,R.dataZoom=Y.zoom,R.tileCount=Y.tileCount,R.surroundings=st(R.surroundings.features),R.warnings=R.warnings.filter(ee=>!ee.startsWith("Loaded map tiles only")),R.warnings.push("Detailed tiles downloaded at zoom "+Y.zoom+" independently of the camera; provider data may still omit buildings."),R.warnings.push("Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground."),i.snapshot=de(R),i.region=de({origin:R.origin,bounds:R.bounds,extentM:R.extentM,polygon:R.polygon,selection:R.selection}),u(),w(R),t==null||t(),R}catch(V){return B.abort(),!s&&z===l&&V.name!=="AbortError"&&(i.error=V.message),null}finally{o===B&&(o=null,s||(i.loading=!1))}}function S(){const k=r();if(!(!a||!k)){for(const M of["draw.create","draw.update","draw.delete"])k.off(M,f);k.off("draw.modechange",x),k.removeControl(a),a=null,i.drawing=!1}}function P(){o==null||o.abort(),S()}function I(){var k;u(),(k=i.region)!=null&&k.selection&&m()}function N(){s=!0,l++,o==null||o.abort(),S()}J(()=>i.source,()=>{c(),u(),i.error=""}),Xe(N);function O(){return(d==null?void 0:d.preview)??null}return{state:i,startSelection:h,stopSelection:y,clearSelection:b,setSelection:g,captureRegion:C,loadBuildings:v,getPreview:O,restore:I,beforeStyleChange:P,dispose:N}}function bi(r){const[e,t]=r.extentM,n=Math.round(e/4),i=Math.round(t/4);if(!n||!i||n>750||i>750||Math.abs(n*4-e)>1e-5||Math.abs(i*4-t)>1e-5)throw new Error("Invalid grid extent; use a snapped region of at most 750 cells.");const a=wt(r.origin),s=new Float32Array(n*i);for(const d of r.buildings.features){const c=Number(d.properties.height);if(!Number.isFinite(c)||c<0||c>240)throw new Error("Invalid building height (0..240 metres).");if(!c)continue;const u=Math.max(1,Math.round(c/1.5)),g=d.geometry.type==="Polygon"?[d.geometry.coordinates]:d.geometry.coordinates;for(const f of g){const x=f.map(h=>h.map(a));let m=1/0,y=-1/0;for(const h of x)for(const b of h)m=Math.min(m,b[1]),y=Math.max(y,b[1]);for(let h=Math.max(0,Math.ceil(m/4-.5));h<Math.min(i,Math.ceil(y/4-.5));h++){const b=(h+.5)*4,w=[];for(const p of x)for(let v=0,C=p.length-1;v<p.length;C=v++){const S=p[C],P=p[v];(S[1]<=b&&P[1]>b||P[1]<=b&&S[1]>b)&&w.push(S[0]+(b-S[1])*(P[0]-S[0])/(P[1]-S[1]))}w.sort((p,v)=>p-v);for(let p=0;p+1<w.length;p+=2){const v=Math.max(0,Math.ceil(w[p]/4-.5-1e-8)),C=Math.min(n,Math.ceil(w[p+1]/4-.5-1e-8));for(let S=v;S<C;S++)s[h*n+S]=Math.max(s[h*n+S],u)}}}}let o=0,l=0;for(const d of s)d>0&&o++,l=Math.max(l,d);return{layers:s,nx:n,ny:i,origin:[...r.origin],extentM:[...r.extentM],spacingM:4,layerSpacingM:1.5,statistics:{builtCells:o,maximumHeightM:l*1.5}}}function wi({heightM:r,directionDeg:e,speedMps:t}){const n=(d,c)=>{if(d===""||d===null||d===void 0||!Number.isFinite(Number(d)))throw new Error("Invalid "+c+".");return Number(d)},i=n(r,"height"),a=n(e,"direction"),s=n(t,"speed");if(i<.75||i>239.25)throw new Error("Height must be between 0.75 and 239.25 m.");if(s<.5||s>20)throw new Error("Wind speed must be between 0.5 and 20 m/s.");const o=Math.max(0,Math.min(159,Math.round(i/1.5-.5))),l=(a%360+360)%360;return{layerIndex:o,heightM:(o+.5)*1.5,directionDeg:l,thetaRad:l*Math.PI/180,speedMps:s}}class He{constructor(e,t,n){this.adapter=e,this.device=t,this.useF16=n,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),n=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new He(e,n,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,n){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:t,label:n});return a._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,t,n=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|n,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const n=this.storage(e.byteLength,t);return this.write(n,e),n}write(e,t){if(t.byteLength%4){const n=new Uint8Array(Math.ceil(t.byteLength/4)*4);n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,n)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,n=new ArrayBuffer(t),i=new Uint32Array(n),a=new Int32Array(n),s=new Float32Array(n);e.forEach(([l,d],c)=>{l==="u"?i[c]=d:l==="i"?a[c]=d:s[c]=d});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,n),this.scratch.push(o),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,n,i,a=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:n.map((l,d)=>({binding:d,resource:{buffer:l}}))}));const s=Math.max(1,Math.ceil(i/a)),o=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(s,o),Math.ceil(s/o))}async readFloat32(e,t){const n=t*4,i=this.buffer(n,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const s=new Float32Array(i.getMappedRange().slice(0,n));return i.unmap(),this.free(i),s}}function Mt(r){const e=new Uint16Array(r.length),t=new Float32Array(1),n=new Uint32Array(t.buffer);for(let i=0;i<r.length;i++){t[0]=r[i];const a=n[0],s=a>>>16&32768,o=a>>>23&255;let l=a&8388607;if(o===255){e[i]=s|31744|(l?1:0);continue}const d=o-127+15;if(d>=31){e[i]=s|31744;continue}if(d<=0){if(d<-10){e[i]=s;continue}l|=8388608;const u=14-d;let g=l>>>u;l>>>u-1&1&&(g+=1),e[i]=s|g;continue}let c=d<<10|l>>>13;l&4096&&(c+=1),e[i]=s|c}return e}function xi(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++){const n=r[t],i=n&32768?-1:1,a=n>>10&31,s=n&1023;a===0?e[t]=i*s*2**-24:a===31?e[t]=s?NaN:i*(1/0):e[t]=i*(1+s/1024)*2**(a-15)}return e}const te=180,St=4,kt=7,Ke=St*kt,Ce=1.5,ft=4,vi=1600,ke=r=>r.toFixed(6),Mi=640,Si=`
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
  let angles = ${te}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${ke(ft)};
  let gyr = sinT[angle] / ${ke(ft)};

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

  let cutoff = ${ke(vi)};
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
}`,ki=`
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
  let angles = ${te}u;
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
  let out = (u.pixelOffset + localPixel) * ${Ke}u
          + sig * ${kt}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Ci=r=>`${r==="f16"?`enable f16;
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
  let c = ${Ke}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${ke(Ce)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`;class Fi{constructor(e,t,n,i,a,s="f32"){this.context=e,this.store=s,this.ny=n,this.nx=i,this.margin=a,this.gy=n+2*a,this.gx=i+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const o=new Float32Array(this.gy*this.gx);for(let c=0;c<n;c++){const u=c*i,g=(c+a)*this.gx+a;for(let f=0;f<i;f++)o[g+f]=t[u+f]*Ce}this.heightBuffer=e.upload(o,"mddf.height");const l=new Float32Array(te),d=new Float32Array(te);for(let c=0;c<te;c++){const u=2*Math.PI*c/te;l[c]=Math.cos(u),d[c]=Math.sin(u)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(d,"mddf.sin"),this.rawBuffer=e.storage(St*this.chunk*te*4,"mddf.raw"),this.fieldBuffer=e.storage(this.gy*this.gx*Ke*4,"mddf.field"),this.tracePipeline=e.pipeline(Si),this.fourierPipeline=e.pipeline(ki),this.assemblePipeline=e.pipeline(Ci(s)),this.currentLayer=-1}async compute(e,t={}){var s,o;const{context:n}=this,i=(e+.5)*Ce,a=this.gy*this.gx;for(let l=0;l<a;l+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const d=Math.min(this.chunk,a-l),c=n.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",l],["u",d],["u",0],["u",0],["u",0],["f",i],["f",0],["f",0],["f",0]]),u=n.device.createCommandEncoder(),g=u.beginComputePass();n.dispatch(g,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,c],d*te),n.dispatch(g,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,c],d*4,64),g.end(),n.device.queue.submit([u.finish()]),await n.device.queue.onSubmittedWorkDone(),(o=t.onProgress)==null||o.call(t,(l+d)/a)}await n.device.queue.onSubmittedWorkDone(),n.releaseScratch(),this.currentLayer=e}assemble(e,t,n,i,a,s,o){const{context:l}=this,d=t.length/2,c=l.upload(t,"assemble.origins"),u=l.uniform([["u",d],["u",n.channels],["u",n.mddfChannels],["u",s],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",n.solidChannel],["i",n.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",n.coordYScale],["f",(a-n.coordZCentre)/n.coordZScale],["f",n.coordXCentre],["f",n.coordXScale],["f",0],["f",0]]),g=e.beginComputePass();return l.dispatch(g,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,c,n.tableBuffer,n.normBuffer,o,u],d*n.channels*s*s),g.end(),c}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.fieldBuffer])this.context.free(e)}}const Re=`
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
}`;function ht(r,e,t,n=1e-5){const i=r==="f16"||e==="f16"?`enable f16;
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
}`}const De=32;function _i(r){const{store:e,patch:t,modes1:n,modes2:i}=r,a=t*t,s=2*n,o=e==="f16"?`enable f16;
`:"",l=c=>e==="f16"?`f32(${c})`:c,d=c=>e==="f16"?`f16(${c})`:c;return{conv1x1:`${o}${Re}
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
}`,gate:`${o}${Re}
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
}`,instanceNorm:ht(e,e,a),instanceNormScaled:ht(e,e,a,1e-5/(De*De)),forwardColumns:`${o}
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
  Y[g] = ${d("acc * "+1/De)};
}`,residual:`${o}${Re}
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
}`}}function Ii(r,e,t){const n=2*e,i=[];for(let f=0;f<e;f++)i.push(f);for(let f=r-e;f<r;f++)i.push(f);const a=new Float32Array(r*t),s=new Float32Array(r*t);for(let f=0;f<r;f++)for(let x=0;x<t;x++){const m=2*Math.PI*f*x/r;a[f*t+x]=Math.cos(m),s[f*t+x]=-Math.sin(m)}const o=new Float32Array(n*r),l=new Float32Array(n*r);for(let f=0;f<n;f++)for(let x=0;x<r;x++){const m=2*Math.PI*i[f]*x/r;o[f*r+x]=Math.cos(m),l[f*r+x]=-Math.sin(m)}const d=new Float32Array(r*n),c=new Float32Array(r*n);for(let f=0;f<r;f++)for(let x=0;x<n;x++){const m=2*Math.PI*i[x]*f/r;d[f*n+x]=Math.cos(m)/r,c[f*n+x]=Math.sin(m)/r}const u=new Float32Array(t*r),g=new Float32Array(t*r);for(let f=0;f<t;f++){const x=(f===0?1:2)/r;for(let m=0;m<r;m++){const y=2*Math.PI*f*m/r;u[f*r+m]=x*Math.cos(y),g[f*r+m]=-x*Math.sin(y)}}return{forwardCos:a,forwardSin:s,rowRe:o,rowIm:l,inverseRowRe:d,inverseRowIm:c,inverseColCos:u,inverseColSin:g}}class Bi{constructor(e,t,n,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[d,c]of Object.entries(_i(s)))this.pipelines[d]=e.pipeline(c);this.contractPipeline=e.pipeline(Pi);const o=d=>{const c=t.tensors[d];if(!c)throw new Error(`missing tensor ${d}`);return xi(new Uint16Array(n,c.offset,c.count))};this.read=o,this.tables={};for(const[d,c]of Object.entries(Ii(this.patch,this.modes1,this.modes2)))this.tables[d]=e.upload(c,`fno.table.${d}`);this.weights={};const l=(d,c)=>{const u=o(c);this.weights[d]=this.store==="f16"?e.upload(Mt(u),`fno.${d}`):e.upload(u,`fno.${d}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let d=0;d<this.layers;d++)l(`m1w${d}`,`mlp_layers.${d}.mlp1.weight`),l(`m1b${d}`,`mlp_layers.${d}.mlp1.bias`),l(`m2w${d}`,`mlp_layers.${d}.mlp2.weight`),l(`m2b${d}`,`mlp_layers.${d}.mlp2.bias`),l(`lw${d}`,`w_layers.${d}.weight`),l(`lb${d}`,`w_layers.${d}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,n=t.tucker;let i=n.core_shape.slice(),a=e.upload(this.read(`${n.core}.re`),"tucker.core.re"),s=e.upload(this.read(`${n.core}.im`),"tucker.core.im");for(const l of n.factors){const[d,c]=l.shape;if(i[l.mode]!==c)throw new Error(`factor ${l.name} does not match the core`);const u=i.slice();u[l.mode]=d;const g=u.reduce((v,C)=>v*C,1),f=u.slice(l.mode+1).reduce((v,C)=>v*C,1),x=e.storage(g*4,"tucker.re"),m=e.storage(g*4,"tucker.im"),y=e.upload(this.read(`${l.name}.re`),"tucker.f"),h=e.upload(this.read(`${l.name}.im`),"tucker.f"),b=e.uniform([["u",u[0]],["u",u[1]],["u",u[2]],["u",u[3]],["u",u[4]],["u",l.mode],["u",d],["u",c],["u",f],["u",0],["u",g],["u",0]]),w=e.device.createCommandEncoder(),p=w.beginComputePass();e.dispatch(p,this.contractPipeline,[a,s,y,h,x,m,b],g),p.end(),e.device.queue.submit([w.finish()]),e.free(a),e.free(s),e.free(y),e.free(h),a=x,s=m,i=u}e.releaseScratch();const o=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==o.join())throw new Error(`spectral stack is ${i} but ${o} was expected`);this.spectralRe=a,this.spectralIm=s}allocate(e){const{context:t}=this,n=this.patch*this.patch,i=this.width,a=2*this.modes1,s=(l,d)=>t.storage(e*l*n*this.elementBytes,d),o=(l,d)=>t.storage(e*i*l*4,d);this.buffers={input:s(this.inputChannels,"fno.input"),x:s(i,"fno.x"),t1:s(i,"fno.t1"),t2:s(i,"fno.t2"),gates:s(4*i,"fno.gates"),hidden:s(2*i,"fno.hidden"),spectral:s(i,"fno.spectral"),local:s(i,"fno.local"),wide:s(2*i,"fno.wide"),output:s(this.outputChannels,"fno.output"),xRe:o(this.patch*this.modes2,"fno.xRe"),xIm:o(this.patch*this.modes2,"fno.xIm"),yRe:o(a*this.modes2,"fno.yRe"),yIm:o(a*this.modes2,"fno.yIm"),zRe:o(a*this.modes2,"fno.zRe"),zIm:o(a*this.modes2,"fno.zIm"),wRe:o(this.patch*this.modes2,"fno.wRe"),wIm:o(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,n=this.width,i=2*this.modes1,a=this.inputChannels+5*n+4*n+2*n+2*n+this.outputChannels,s=n*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(a*t*this.elementBytes+s)}encode(e,t){const{context:n,buffers:i,pipelines:a,tables:s}=this,o=this.width,l=this.patch*this.patch,d=2*this.modes1,c=e.beginComputePass(),u=(f,x,m,y,h=256)=>{n.dispatch(c,f,[...x,n.uniform(m)],y,h)},g=(f,x,m=a.instanceNorm)=>{c.setPipeline(m),c.setBindGroup(0,n.device.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:{buffer:x}}]})),c.dispatchWorkgroups(t*o)};u(a.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*o],["u",1]],t*2*o*l),u(a.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l);for(let f=0;f<this.layers;f++)g(i.x,i.t1),u(a.forwardColumns,[i.t1,s.forwardCos,s.forwardSin,i.xRe,i.xIm],[["u",t],["u",o],["u",0],["u",0]],t*o*this.patch*this.modes2),u(a.rowMix,[i.xRe,i.xIm,s.rowRe,s.rowIm,i.yRe,i.yIm],[["u",t],["u",o],["u",d],["u",this.patch]],t*o*d*this.modes2),u(a.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",o],["u",2*f],["u",0]],t*o*d*this.modes2),u(a.rowMix,[i.zRe,i.zIm,s.inverseRowRe,s.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",o],["u",this.patch],["u",d]],t*o*this.patch*this.modes2),u(a.inverseColumns,[i.wRe,i.wIm,s.inverseColCos,s.inverseColSin,i.t2],[["u",t],["u",o],["u",0],["u",0]],t*o*l),g(i.t2,i.t1,a.instanceNormScaled),u(a.conv1x1,[i.t1,this.weights[`m1w${f}`],this.weights[`m1b${f}`],i.gates],[["u",t],["u",o],["u",4*o],["u",0]],t*4*o*l),u(a.gate,[i.gates,i.hidden],[["u",t],["u",2*o],["u",0],["u",0]],t*2*o*l),u(a.conv1x1,[i.hidden,this.weights[`m2w${f}`],this.weights[`m2b${f}`],i.spectral],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l),u(a.conv1x1,[i.x,this.weights[`lw${f}`],this.weights[`lb${f}`],i.local],[["u",t],["u",o],["u",o],["u",0]],t*o*l),u(a.residual,[i.spectral,i.local,i.x],[["u",t*o*l],["u",f<this.layers-1?1:0],["u",0],["u",0]],t*o*l);return u(a.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",o],["u",2*o],["u",1]],t*2*o*l),u(a.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*o],["u",this.outputChannels],["u",0]],t*this.outputChannels*l),c.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const Ai=r=>r.toFixed(6),$i=r=>`${r==="f16"?`enable f16;
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
                      / ${Ai(Ce)});
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
}`;function Ri(r,e){if(!r)return e;if(!e)return r;const t=Math.min(r.y0,e.y0),n=Math.min(r.x0,e.x0);return{y0:t,x0:n,h:Math.max(r.y0+r.h,e.y0+e.h)-t,w:Math.max(r.x0+r.w,e.x0+e.w)-n}}function Di(r,e,t){let n=1/0,i=-1/0;const a=s=>{n=Math.min(n,s),i=Math.max(i,s)};for(let s=0;s<4;s++){const o=r[s],l=r[(s+1)%4];o[1]>=e&&o[1]<=t&&a(o[0]);for(const d of[e,t])if((o[1]-d)*(l[1]-d)<0){const c=(d-o[1])/(l[1]-o[1]);a(o[0]+c*(l[0]-o[0]))}}return n<=i?[n,i]:null}class Vi{constructor(e,t,n,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new Bi(e,t,n,this.batchSize),this.blendPipeline=e.pipeline($i(this.fno.store)),this.finalizePipeline=e.pipeline(Ei),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,n=t.features,i=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,s=n.mddf_source_indices,o=new Uint32Array(s.length*4),l=new Float32Array(s.length*2);s.forEach((c,u)=>{const g=Math.floor(c/i),f=c%i,x=f>a?1:0,m=f===0?0:x?f-a:f;o.set([g*i+m,g*i+(m===0?0:a+m),m,x],u*4),l[u*2]=n.mddf_center[u],l[u*2+1]=n.mddf_scale[u]});const d=t.coordinates;return{channels:t.model.input_channels,mddfChannels:s.length,solidChannel:n.use_building_input?s.length:-1,coordChannel:s.length+(n.use_building_input?1:0),coordYScale:d.y_scale,coordZCentre:d.z_center,coordZScale:d.z_scale,coordXCentre:d.x_center,coordXScale:d.x_scale,tableBuffer:e.upload(o,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,t,n){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),a=(t+2*i)*(n+2*i)*28*4,s=this.context.device.limits.maxStorageBufferBindingSize;if(a>s)throw new Error(`city ${n} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(s/2**20).toFixed(0)} MiB`);const o=new Fi(this.context,e,t,n,i,this.fno.store);return this.city={field:o,ny:t,nx:n,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:o.gy,gx:o.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:n}=this.city,i=(t-1)/2,a=(n-1)/2,s=Math.cos(e),o=Math.sin(e),l=[[0,0],[n-1,0],[n-1,t-1],[0,t-1]].map(([w,p])=>{const v=w-a,C=p-i;return[a+v*s+C*o,i-v*o+C*s]}),d=Math.floor(Math.min(...l.map(w=>w[1]))),c=Math.ceil(Math.max(...l.map(w=>w[1]))),u=Math.floor(Math.min(...l.map(w=>w[0]))),g=Math.ceil(Math.max(...l.map(w=>w[0]))),f=g-u+1,x=Math.max(1,Math.ceil((f-this.patch)/this.stride)+1),m=x>1?(f-this.patch)/(x-1):0,y=l.map(([w,p])=>[p,w]),h=[],b=[];for(let w=0;w<x;w++){const p=Math.round(u+w*m),v=Di(y,p,p+this.patch-1)||[d,d+this.patch-1],C=Math.floor(v[0]),S=Math.max(this.patch,Math.ceil(v[1])-C+1),P=Math.max(1,Math.ceil((S-this.patch)/this.stride)+1),I=P>1?(S-this.patch)/(P-1):0;b.push([h.length/2,P,p-u]);for(let N=0;N<P;N++)h.push(p,Math.round(C+N*I))}return{origins:new Float32Array(h),columns:b,columnCount:x,columnStride:m,syMin:d,sxMin:u,gridH:c-d+1,gridW:g-u+1,patchCount:h.length/2}}patchRect(e,t,n){let i=1/0,a=1/0,s=-1/0,o=-1/0;for(const[l,d,c]of e.columns)for(let u=0;u<d;u++){const g=l+u;if(g<t||g>=n)continue;const f=e.origins[g*2+1]-e.syMin;i=Math.min(i,f),a=Math.min(a,c),s=Math.max(s,f+this.patch),o=Math.max(o,c+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),a=Math.max(0,a),s=Math.min(e.gridH,s),o=Math.min(e.gridW,o),{y0:i,x0:a,h:Math.max(0,s-i),w:Math.max(0,o-a)}):null}async predict(e,t={}){var ee,he,Be;const{context:n,city:i}=this,a=this.tiling(e),s=this.metadata.model.output_channels,o=a.gridH*a.gridW,l=this.patch*this.patch,d=performance.now(),c=!!(t.shouldDraw&&t.onDraw),u=s+2,g=n.storage(a.patchCount*s*l*this.fno.elementBytes,"predict.patches"),f=new Int32Array(a.patchCount);for(let $=0;$<a.patchCount;$++)f[$]=a.origins[$*2+1]-a.syMin;const x=n.upload(f,"blend.origins"),m=n.upload(new Int32Array(a.columns.flat()),"blend.columns"),y=n.storage(o*s*4,"blend.field"),h=n.storage(o*4,"blend.weight"),b=n.storage(o*4,"blend.solid"),w=n.storage(c?o*4:4,"blend.finalWeight"),p=n.storage(c?o*u*4:4,"blend.packed"),v=this.metadata.target,C=n.upload(new Float32Array(v.center),"final.centre"),S=n.upload(new Float32Array(v.scale),"final.scale"),P={y0:0,x0:0,h:a.gridH,w:a.gridW},I=($,E,H,se)=>{const xe=$.beginComputePass();n.dispatch(xe,this.blendPipeline,[g,x,m,y,se,n.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",s],["u",a.columnCount],["u",a.patchCount],["u",H],["u",0],["u",E.y0],["u",E.x0],["u",E.h],["u",E.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],E.h*E.w),xe.end()},N=($,E,H)=>{const se=$.beginComputePass();n.dispatch(se,this.finalizePipeline,[y,h,C,S,i.field.heightBuffer,b,w,p,n.uniform([["u",a.gridH],["u",a.gridW],["u",s],["u",H?1:0],["u",E.y0],["u",E.x0],["u",E.h],["u",E.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],E.h*E.w),se.end()};if(c){const $=n.device.createCommandEncoder();I($,P,a.patchCount,w),n.device.queue.submit([$.finish()]),(ee=t.onStart)==null||ee.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const O=2,k=[];let M=null;for(let $=0;$<a.patchCount;$+=this.batchSize){(he=t.signal)==null||he.throwIfAborted();const E=Math.min(this.batchSize,a.patchCount-$),H=n.device.createCommandEncoder(),se=i.field.assemble(H,a.origins.subarray($*2,($+E)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),xe=this.fno.encode(H,E);H.copyBufferToBuffer(xe,0,g,$*s*l*this.fno.elementBytes,E*s*l*this.fno.elementBytes);let K=null;if(c){M=Ri(M,this.patchRect(a,$,$+E));const Ae=$+E>=a.patchCount;M&&M.h>0&&M.w>0&&(Ae||t.shouldDraw())&&(K=M,M=null,I(H,K,$+E,h),N(H,K,!0))}if(n.device.queue.submit([H.finish()]),n.free(se),await n.device.queue.onSubmittedWorkDone(),(Be=t.onProgress)==null||Be.call(t,($+E)/a.patchCount),c&&(k.push(n.device.queue.onSubmittedWorkDone()),k.length>O&&await k.shift()),K){const Ae=await n.readFloat32(p,K.h*K.w*u);t.onDraw({x0:K.x0,y0:K.y0,width:K.w,height:K.h,stride:u,channels:s,theta:e,values:Ae,readyCount:$+E,patchCount:a.patchCount})}}const F=n.device.createCommandEncoder();I(F,P,a.patchCount,h),N(F,P,!1),n.device.queue.submit([F.finish()]);const z=await n.readFloat32(y,o*s),B=await n.readFloat32(b,o),V=await n.readFloat32(h,o),q=performance.now()-d;let R=0,Y=0;for(let $=0;$<o;$++)if(B[$]!==2){if(V[$]<=1e-6){R+=1;continue}for(let E=0;E<s;E++)if(!Number.isFinite(z[$*s+E])){Y+=1;break}}for(const $ of[g,y,h,b,x,m,C,S,w,p])n.free($);return n.releaseScratch(),{values:z,solid:B,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:v.channel_names,milliseconds:q,uncovered:R,nonFinite:Y,insideCells:o}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}}function Ti(r,e){var t,n,i,a,s,o,l,d,c;if(r.dtype!=="float16"||r.total_bytes!==e||((t=r.grid)==null?void 0:t.horizontal_spacing_m)!==4||((n=r.grid)==null?void 0:n.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=r.model)==null?void 0:i.input_channels)!==24||((a=r.model)==null?void 0:a.output_channels)!==5||((o=(s=r.inference)==null?void 0:s.patch)==null?void 0:o.join())!=="64,64"||((d=(l=r.target)==null?void 0:l.channel_names)==null?void 0:d.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const u of Object.values(r.tensors??{}))if(!Number.isInteger(u.offset)||u.offset<0||u.offset%2||!Number.isInteger(u.count)||u.count<=0||u.offset+u.count*2>e||!Array.isArray(u.shape)||u.shape.some(g=>!Number.isInteger(g)||g<1)||u.shape.reduce((g,f)=>g*f,1)!==u.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(r.tensors??{}).length||!Number.isFinite((c=r.wind)==null?void 0:c.reference_speed_m_s)||r.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function Ni(r){if(!Number.isInteger(r.width)||!Number.isInteger(r.height)||r.width<1||r.height<1||r.values.length!==r.width*r.height*5||r.solid.length!==r.width*r.height)throw new Error("Invalid prediction shape.");for(let e=0;e<r.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(r.values[e*5+t])||(r.solid[e]=2,r.values[e*5+t]=0)}function zi(){const r=be({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,downloading:!1});let e=null,t=null,n=null,i=null,a=null,s=!1,o=0;const l=new AbortController;function d(){try{t==null||t.destroy()}finally{e==null||e.device.destroy(),t=null,e=null,a=null}}async function c(){if(t)return;r.stage="Loading model";const m="/cityffdv2-demo/flume/",[y,h,b]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async w=>{const p=await fetch(m+w,{signal:l.signal});if(!p.ok)throw new Error("Could not load "+w+" (HTTP "+p.status+").");return w.endsWith(".bin")?p.arrayBuffer():p.json()}));Ti(y,h.byteLength),l.signal.throwIfAborted(),e=await He.create(),l.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",w=>{r.error="WebGPU: "+w.error.message.split(`
`)[0]}),e.device.lost.then(w=>{!s&&w.reason!=="destroyed"&&(r.error="GPU device lost. Run again to initialize a new session.",r.prediction=null,t=null,e=null,a=null)}),n=y,i=b,t=new Vi(e,n,h,{batchSize:4})}async function u(m,y){if(s||r.busy||r.downloading)return null;r.busy=!0,r.error="",r.progress=0;const h=++o;try{if(await c(),s||h!==o||(m!==a&&(t.setCity(m.layers,m.ny,m.nx),a=m),r.stage="Preparing geometry · MDDF",await t.setHeight(y.layerIndex,{signal:l.signal,onProgress:p=>{!s&&h===o&&(r.progress=p*.25)}}),s||h!==o))return null;r.stage="Predicting wind · FNO";const b=await t.predict(y.thetaRad,{signal:l.signal,onProgress:p=>{!s&&h===o&&(r.progress=.25+p*.75)}});if(l.signal.throwIfAborted(),s||h!==o)return null;if(r.error)throw new Error(r.error);Ni(b);const w={...b,grid:m,settings:{...y},referenceSpeed:n.wind.reference_speed_m_s,modelLabel:n.label,colorbar:i,inputRevision:h};return r.prediction=de(w),r.progress=1,r.stage="Prediction ready",w}catch(b){return!s&&h===o&&(r.error=b.message,r.stage="Prediction failed",r.prediction=null),d(),null}finally{s?d():r.busy=!1}}async function g(){if(!t||!r.prediction||r.busy||r.downloading)throw new Error("Run a valid prediction before downloading MDDF.");r.downloading=!0;try{const m=t.city.field,y=await e.readFloat32(m.fieldBuffer,m.gy*m.gx*28);if(s)throw new Error("The page was closed.");return{values:y,ny:m.gy,nx:m.gx,margin:m.margin,layerIndex:t.city.layerIndex}}finally{r.downloading=!1,s&&d()}}function f(){o++,r.prediction=null,r.error="",r.progress=0,r.stage="Ready"}function x(){s=!0,o++,l.abort(),!r.busy&&!r.downloading&&d()}return Xe(x),{state:r,run:u,readMddf:g,invalidate:f,dispose:x}}const Li=[1.5,3],le=8e3,re={white:{pixelsPerParticle:680,maxParticles:1200,minParticles:150,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1},tinted:{pixelsPerParticle:340,maxParticles:2400,minParticles:300,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1}},Ui=`
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
}`;class Yi{constructor(e){this.renderer=e,this.enabled=!1,this.field=null,this.particles=[],this.viewKey="",this.width=1,this.height=1,this.stats={target:0,drawn:0,placed:0,bounds:null},this.settings={white:{...re.white},tinted:{...re.tinted}},this.mode="white",this.palette=null,this.tintRange=null,this.lastValue=0,this.ready=1,this.readyX=1/0,this.extent={x0:0,y0:0,x1:0,y1:0},this.degenerate=!1,this.camera=new Xt(-1,1,1,-1,0,1),this.quad=new we(new Te(2,2),null),this.quad.frustumCulled=!1,this.quadScene=new Ne().add(this.quad),this.targets=null,this.fade=new Me({vertexShader:Ui,fragmentShader:Wi,uniforms:{previous:{value:null},drop:{value:.02},cutoff:{value:re.white.trailCutoff}},depthTest:!1,depthWrite:!1,side:Se}),this.vertices=new Float32Array(le*12),this.tints=new Float32Array(le*18),this.ends=new Float32Array(le*24);const t=new mt;t.setAttribute("segment",new pe(this.vertices,2).setUsage($e)),t.setAttribute("tint",new pe(this.tints,3).setUsage($e)),t.setAttribute("ends",new pe(this.ends,4).setUsage($e)),t.setAttribute("position",new pe(new Float32Array(le*18),3)),this.lineGeometry=t,this.lines=new we(t,new Me({vertexShader:ji,fragmentShader:Xi,uniforms:{opacity:{value:re.white.lineOpacity},halfWidth:{value:re.white.lineWidth*.5}},depthTest:!1,depthWrite:!1,transparent:!0,side:Se})),this.lines.frustumCulled=!1,this.lineScene=new Ne().add(this.lines),this.material=new Me({vertexShader:Oi,fragmentShader:qi,uniforms:{trail:{value:null},resolution:{value:new ze(1,1)},strength:{value:re.white.strength},solid:{value:re.white.solidFraction}},transparent:!0,depthWrite:!1,side:Se,clipping:!0}),this.mesh=new we(new Te(1,1),this.material),this.mesh.visible=!1,this.planeSize=new ze(1,1),this.plane=new me,this.ray=new Ot,this.scratch=new X,this.matrix=new Le}setResolution(e,t){if(!(e===this.width&&t===this.height)){this.width=Math.max(1,Math.round(e)),this.height=Math.max(1,Math.round(t));for(const n of this.targets||[])n.dispose();this.targets=[0,1].map(()=>new qt(this.width,this.height,{minFilter:tt,magFilter:tt,format:Ue,type:yt,depthBuffer:!1,stencilBuffer:!1})),this.material.uniforms.resolution.value.set(this.width,this.height),this.reset()}}setPlane(e,t){this.planeSize.set(e,t)}setField(e,t){this.field=e,this.metresPerCell=t,this.ready=1,this.readyX=1/0,this.reset()}setProgress(e,t){this.ready=Math.max(0,Math.min(1,e)),this.readyX=Math.max(this.readyX===1/0?0:this.readyX,t)}replaceField(e){this.field=e,this.ready=1,this.readyX=1/0}get p(){return this.settings[this.mode]||this.settings.white}setMode(e){e!=="white"&&e!=="tinted"||e!==this.mode&&(this.mode=e,this.applyUniforms())}setParam(e,t,n){const i=this.settings[e];!i||!(t in i)||!Number.isFinite(n)||(i[t]=n,e===this.mode&&this.applyUniforms())}applyUniforms(){const e=this.p;this.fade.uniforms.cutoff.value=e.trailCutoff,this.lines.material.uniforms.halfWidth.value=e.lineWidth*.5,this.lines.material.uniforms.opacity.value=e.lineOpacity,this.material.uniforms.strength.value=e.strength,this.material.uniforms.solid.value=e.solidFraction}setTinting(e,t){this.palette=e||null,this.tintRange=t||null}tintFor(e,t){if(!this.palette||!this.tintRange)return t[0]=1,t[1]=1,t[2]=1,t;const[n,i]=this.tintRange,a=Math.min(1,Math.max(0,(e-n)/Math.max(1e-6,i-n))),s=Math.min(255,Math.round(a*255))*4;return t[0]=this.palette[s]/255,t[1]=this.palette[s+1]/255,t[2]=this.palette[s+2]/255,t}reset(){if(this.particles.length=0,this.viewKey="",!this.targets)return;const e=this.renderer,t=e.getRenderTarget(),n=new Yt,i=e.getClearAlpha();e.getClearColor(n),e.setClearColor(0,0);for(const a of this.targets)e.setRenderTarget(a),e.clear(!0,!1,!1);e.setClearColor(n,i),e.setRenderTarget(t)}sample(e,t,n){const i=this.field;if(!i||!Number.isFinite(e)||!Number.isFinite(t)||e<.5||t<.5||e>i.width-.5||t>i.height-.5)return null;const a=Math.min(i.width-1,Math.max(0,Math.round(e-.5))),s=Math.min(i.height-1,Math.max(0,Math.round(t-.5)));if(i.solid[s*i.width+a]!==0)return null;const o=Math.min(i.width-1,Math.max(0,e-.5)),l=Math.min(i.height-1,Math.max(0,t-.5)),d=Math.floor(o),c=Math.floor(l),u=Math.min(d+1,i.width-1),g=Math.min(c+1,i.height-1),f=o-d,x=l-c,m=y=>{const h=y[c*i.width+d],b=y[c*i.width+u],w=y[g*i.width+d],p=y[g*i.width+u];return(h*(1-f)+b*f)*(1-x)+(w*(1-f)+p*f)*x};return n[0]=m(i.u)/this.metresPerCell,n[1]=m(i.v)/this.metresPerCell,this.lastValue=i.value?m(i.value):0,Math.hypot(n[0],n[1])>.001?n:null}visibleBounds(e,t){const n=this.field,i={x0:.5,y0:.5,x1:n.width-.5,y1:n.height-.5},a=this.scratch.set(0,0,1).applyQuaternion(t.quaternion);this.plane.setFromNormalAndCoplanarPoint(a.clone(),t.position);let s=1/0,o=1/0,l=-1/0,d=-1/0;for(const[c,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const g=new X(c,u,-1).unproject(e),f=new X(c,u,1).unproject(e);this.ray.set(g,f.sub(g).normalize());const x=this.ray.intersectPlane(this.plane,new X);if(!x)return i;const m=t.worldToLocal(x),y=(m.x/this.planeSize.x+.5)*n.width,h=(m.y/this.planeSize.y+.5)*n.height;s=Math.min(s,y),l=Math.max(l,y),o=Math.min(o,h),d=Math.max(d,h)}return{x0:Math.max(i.x0,s),x1:Math.min(i.x1,l),y0:Math.max(i.y0,o),y1:Math.min(i.y1,d)}}respawn(e,t){e.age=0,e.life=0,e.x=NaN,e.y=NaN,(t.x1<=t.x0||t.y1<=t.y0)&&(t={x0:.5,y0:.5,x1:Math.min(this.readyX,this.field.width-.5),y1:this.field.height-.5},this.degenerate=!0);const n=[0,0];for(let i=0;i<40;i++){const a=t.x0+Math.random()*(t.x1-t.x0),s=t.y0+Math.random()*(t.y1-t.y0);if(this.sample(a,s,n)){e.x=a,e.y=s;const[o,l]=Li;return e.life=this.p.trailSeconds*(o+Math.random()*(l-o)),!0}}return!1}toPixels(e,t,n,i){const a=this.field,s=this.scratch.set((e/a.width-.5)*this.planeSize.x,(t/a.height-.5)*this.planeSize.y,0);return s.applyMatrix4(this.matrix),i[0]=(s.x*.5+.5)*this.width,i[1]=(.5-s.y*.5)*this.height,i}track(e,t){const n=this.extent;e<n.x0&&(n.x0=e),e>n.x1&&(n.x1=e),t<n.y0&&(n.y0=t),t>n.y1&&(n.y1=t)}addSegment(e,t,n,i){const a=n[0]-t[0],s=n[1]-t[1],o=Math.hypot(a,s);if(o===0)return e;const l=this.p.lineWidth*.5,d=-s*l/o,c=a*l/o,u=a*l/o,g=s*l/o,f=t[0]-u,x=t[1]-g,m=n[0]+u,y=n[1]+g,h=2/this.width,b=2/this.height,w=(f+d)*h-1,p=1-(x+c)*b,v=(f-d)*h-1,C=1-(x-c)*b,S=(m+d)*h-1,P=1-(y+c)*b,I=(m-d)*h-1,N=1-(y-c)*b;this.vertices.set([w,p,v,C,S,P,S,P,v,C,I,N],e);const O=e*3/2,k=e*2,M=[t[0],this.height-t[1],n[0],this.height-n[1]];for(let F=0;F<6;F++)this.tints.set(i,O+F*3),this.ends.set(M,k+F*4);return this.track(w,p),this.track(S,P),e+12}step(e,t,n){if(!this.enabled||!this.field||!this.targets||!n)return!1;if(e>.1)return this.reset(),!1;n.updateWorldMatrix(!0,!1),this.matrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(n.matrixWorld);const i=t.projectionMatrix.elements.concat(t.matrixWorldInverse.elements).map(h=>h.toFixed(4)).join(",");i!==this.viewKey&&(this.reset(),this.viewKey=i);const a=this.visibleBounds(t,n),s={x0:a.x0,y0:a.y0,y1:a.y1,x1:Math.min(a.x1,this.readyX)},o=(a.x1-a.x0)*(a.y1-a.y0)/(this.field.width*this.field.height),l=this.p,d=Math.min(l.maxParticles,le,Math.round(this.width*this.height/Math.max(1,l.pixelsPerParticle))),c=Math.min(le,Math.round(Math.max(l.minParticles,d*Math.sqrt(Math.max(0,Math.min(1,o))))*this.ready));for(;this.particles.length<c;){const h={};this.respawn(h,s),this.particles.push(h)}this.particles.length>c&&(this.particles.length=c),this.extent={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};const u=this.p.timeScale*e,g=[0,0],f=[0,0],x=[0,0],m=[1,1,1];let y=0;for(const h of this.particles){if(h.age>=h.life&&this.respawn(h,s),!this.sample(h.x,h.y,g)){this.respawn(h,s);continue}const b=h.x+.5*g[0]*u,w=h.y+.5*g[1]*u;if(!this.sample(b,w,g)){this.respawn(h,s);continue}const p=h.x+g[0]*u,v=h.y+g[1]*u;if(p<a.x0||p>a.x1||v<a.y0||v>a.y1||!this.sample(p,v,g)){this.respawn(h,s);continue}this.tintFor(this.lastValue,m),y=this.addSegment(y,this.toPixels(h.x,h.y,n,f),this.toPixels(p,v,n,x),m),h.x=p,h.y=v,h.age+=e}return this.stats={target:c,drawn:y/12,placed:this.particles.filter(h=>Number.isFinite(h.x)).length,bounds:[a.x0,a.y0,a.x1,a.y1].map(h=>h.toFixed(0)).join("..")},this.draw(e,y),!0}draw(e,t){const n=this.renderer,i=n.getRenderTarget(),a=n.autoClear;n.autoClear=!1,this.fade.uniforms.previous.value=this.targets[0].texture,this.fade.uniforms.drop.value=Math.max(1e-4,e/Math.max(.01,this.p.trailSeconds)),this.quad.material=this.fade,n.setRenderTarget(this.targets[1]),n.render(this.quadScene,this.camera),t>0&&(this.lineGeometry.setDrawRange(0,t/2),this.lineGeometry.attributes.segment.needsUpdate=!0,this.lineGeometry.attributes.tint.needsUpdate=!0,this.lineGeometry.attributes.ends.needsUpdate=!0,n.render(this.lineScene,this.camera)),this.targets.reverse(),this.material.uniforms.trail.value=this.targets[0].texture,n.autoClear=a,n.setRenderTarget(i)}dispose(){for(const e of this.targets||[])e.dispose();this.lineGeometry.dispose(),this.lines.material.dispose(),this.material.dispose(),this.fade.dispose(),this.quad.geometry.dispose(),this.mesh.geometry.dispose()}}const Ct={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},Ve=new Map;function Gi(r){if(!Ve.has(r)){const e=Ct[r],t=new Uint8Array(256*3);for(let n=0;n<256*3;n++)t[n]=parseInt(e.substr(n*2,2),16);Ve.set(r,t)}return Ve.get(r)}function Hi(r,e){const t=Gi(Ct[r]?r:"viridis"),n=Math.min(1,Math.max(0,e))*255,i=Math.floor(n),a=Math.min(255,i+1),s=n-i;return[t[i*3]*(1-s)+t[a*3]*s,t[i*3+1]*(1-s)+t[a*3+1]*s,t[i*3+2]*(1-s)+t[a*3+2]*s]}const Ki=1,Zi=new Set(["u","v","w"]),Ji=6e4,Fe=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis"},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno"},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],ie={u:0,w:1,v:2,T:3,tke:4};function Ze(r,e,t,n){return Qi(r.values,e*5,r.theta,t,n)}function Qi(r,e,t,n,i){const a=r[e+ie.u]*i,s=r[e+ie.v]*i;switch(n){case"u":return a;case"v":return s;case"w":return r[e+ie.w]*i;case"speed":{const o=r[e+ie.w]*i;return Math.sqrt(a*a+s*s+o*o)}case"T":return r[e+ie.T];case"tke":return r[e+ie.tke]*i*i;default:return 0}}function en(r,e,t,n,i){if(e==="T")return r.fixed.T.slice();const s=(r.quantiles[n]||r.quantiles[Object.keys(r.quantiles)[0]])[e],o=Math.min(s.length-1,Math.max(0,Math.round(t))),l=s[o]*(e==="tke"?i*i:i);return r.shape[e]==="symmetric"?[-l,l]:[0,l]}function Ft(r,e){return Hi(r,e)}function tn(r,e){const t=r.solid.length,n=new Float32Array(t*4);for(let i=0;i<t;i++){const a=i*4;n[a]=Ze(r,i,e,1),n[a+1]=Ki}return Mt(n)}function gt(r){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[n,i,a]=Ft(r,t/255);e[t*4]=n,e[t*4+1]=i,e[t*4+2]=a,e[t*4+3]=255}return e}function nn(r,e,t){if(e==="T")return null;const n=e,i=r.solid.length,a=Math.max(1,Math.floor(i/Ji)),s=Zi.has(n),o=[];for(let c=0;c<i;c+=a){const u=Ze(r,c,n,1);o.push(s?Math.abs(u):u)}if(o.length<32)return null;o.sort((c,u)=>c-u);const l=Math.min(o.length-1,Math.floor(o.length*(Number(t)/100))),d=o[l];return d>0?s?[-d,d]:[0,d]:null}function rn(r,e){const t=r.solid.length,n=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t);for(let s=0;s<t;s++)a[s]=Ze(r,s,e,1),n[s]=r.values[s*5+ie.u],i[s]=r.values[s*5+ie.v];return{u:n,v:i,value:a,solid:new Uint8Array(t),width:r.width,height:r.height}}function an(r,e,t){const n=(r.grid.nx-1)/2,i=(r.grid.ny-1)/2,a=r.originX+e-n,s=r.originY+t-i,o=Math.cos(r.theta),l=Math.sin(r.theta);return[(n+a*o-s*l+.5)*4,(i+a*l+s*o+.5)*4]}function Pt(r){const e=r.values.slice(),t=r.settings.speedMps/r.referenceSpeed;for(let n=0;n<e.length;n+=5)e[n]*=t,e[n+1]*=t,e[n+2]*=t,e[n+4]*=t*t;return e}const sn=`
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
}`;function ln(r,e,t){let n,i,a,s,o,l,d,c,u,g=0;const f=new Le,x=new Le,m=bt.MercatorCoordinate.fromLngLat(r.grid.origin),y=m.meterInMercatorCoordinateUnits(),[h,b]=an(r,r.width/2-.5,r.height/2-.5),w=[new me(new X(1,0,0),0),new me(new X(-1,0,0),r.grid.nx*4),new me(new X(0,1,0),0),new me(new X(0,-1,0),r.grid.ny*4)];function p(){if(!i)return;d==null||d.dispose(),c==null||c.dispose();const v={...r,settings:{...r.settings,speedMps:Number(e.speedMps)}};v.values=Pt(v);const C=Fe.find(I=>I.id===e.variable)??Fe[0],S=tn(v,C.id);d=new it(S,r.width,r.height,Ue,yt),d.minFilter=d.magFilter=nt,d.needsUpdate=!0,c=new it(gt(C.ramp),256,1,Ue),c.colorSpace=Kt,c.minFilter=c.magFilter=nt,c.needsUpdate=!0;const P=nn(v,C.id,"99.9")??en(r.colorbar,C.id,r.settings.layerIndex,"99.9",Number(e.speedMps)/r.referenceSpeed);u.uniforms.field.value=d,u.uniforms.palette.value=c,u.uniforms.range.value.set(...P),o.visible=e.particles!=="tinted",l.setMode(e.particles==="tinted"?"tinted":"white"),l.enabled=e.particles!=="off",l.setField(rn(v,C.id),4),l.setTinting(e.particles==="tinted"?gt(C.ramp):null,e.particles==="tinted"?P:null),l.mesh.visible=l.enabled,t==null||t({low:P[0],high:P[1],...C}),n.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:p,onAdd(v,C){n=v,a=new Ne,s=new Gt,i=new Ht({canvas:n.getCanvas(),context:C,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,u=new Me({vertexShader:sn,fragmentShader:on,uniforms:{field:{value:null},palette:{value:null},range:{value:new ze(0,1)}},transparent:!0,depthWrite:!1,side:Se,clipping:!0,clippingPlanes:w}),o=new we(new Te(r.width*4,r.height*4),u),o.position.set(h,b,r.settings.heightM),o.rotation.z=r.theta,o.frustumCulled=!1,a.add(o),l=new Yi(i),l.setPlane(r.width*4,r.height*4),l.mesh.geometry.dispose(),l.mesh.geometry=o.geometry.clone(),l.mesh.position.copy(o.position),l.mesh.rotation.copy(o.rotation),l.material.clippingPlanes=w,l.mesh.renderOrder=3,l.mesh.frustumCulled=!1,a.add(l.mesh),p()},render(v,C){const S=performance.now(),P=Math.min(g?(S-g)/1e3:0,.05);g=S,f.makeTranslation(m.x,m.y,m.z).scale(new X(y,-y,y)),s.projectionMatrix.copy(x.fromArray(C)).multiply(f),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),i.resetState(),i.setViewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),l.setResolution(v.drawingBufferWidth,v.drawingBufferHeight),l.enabled&&!e.paused&&l.step(P,s,o),i.resetState(),i.setViewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),i.render(a,s),l.enabled&&!e.paused&&n.triggerRepaint()},onRemove(){d==null||d.dispose(),c==null||c.dispose(),o==null||o.geometry.dispose(),u==null||u.dispose(),l==null||l.dispose(),i==null||i.dispose(),n=null,i=null}}}function ce(r,e,t,n,i){if(t.reduce((o,l)=>o*l,1)!==e.length)throw new Error("Invalid "+r+" shape.");const a=new Uint8Array(e.length*4),s=new DataView(a.buffer);for(let o=0;o<e.length;o++){if(!Number.isFinite(e[o]))throw new Error("Cannot export non-finite "+r);s.setFloat32(o*4,e[o],!0)}return{name:r,content:a,description:{dtype:"float32",shape:t,channels:n,unit:i}}}function Je(r,e,t,n){var a,s,o;const i={schemaVersion:1,endianness:"little",order:"row-major",origin:r.origin,source:r.source,bounds:r.bounds,selection:((a=r.selection)==null?void 0:a.geometry)??((s=r.polygon)==null?void 0:s.geometry),computationalDomain:(o=r.polygon)==null?void 0:o.geometry,dataZoom:r.dataZoom,tileCount:r.tileCount,warnings:r.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",...n?{mddf:{nx:n.nx,ny:n.ny,margin:n.margin,layerIndex:n.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}}:{},files:Object.fromEntries(t.map(l=>[l.name,l.description]))};return[{name:"metadata.json",content:JSON.stringify(i,null,2)},...t.map(({name:l,content:d})=>({name:l,content:d}))]}function _t(r,e){const n=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(i=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>i+"_"+a));return[ce("mddf.f32.bin",e.values,[e.ny,e.nx,28],n,"m"),ce("height_layers.f32.bin",r.grid.layers,[r.grid.ny,r.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function It(r,e=!1){const t=Pt(r),n=r.width*r.height,i=new Float32Array(n*3),a=new Float32Array(n),s=new Float32Array(n),o=new Float32Array(n);for(let l=0;l<n;l++){const d=l*5;i.set([t[d],t[d+2],t[d+1]],l*3),a[l]=t[d+3],s[l]=t[d+4],o[l]=Math.hypot(t[d],t[d+1],t[d+2])}return[ce("velocity.f32.bin",i,[r.height,r.width,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(r.solid),description:{dtype:"uint8",shape:[r.height,r.width],values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},...e?[ce("temperature.f32.bin",a,[r.height,r.width],["T"],"degC"),ce("tke.f32.bin",s,[r.height,r.width],["TKE"],"m2/s2"),ce("speed.f32.bin",o,[r.height,r.width],["speed"],"m/s")]:[]]}function dn(r,e,t){return Je(r,t,_t(t,e),e)}function cn(r,e){return Je(r,e,It(e))}function un(r,e,t){const n=[..._t(t,e),...It(t,!0),{name:"buildings.geojson",content:JSON.stringify(r.buildings),description:{format:"GeoJSON",crs:"WGS84"}}];return Je(r,t,n,e)}class fn{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let a=0;e.traverse(function(h){if(h.isMesh){const b=h.geometry,w=b.index,p=b.getAttribute("position");a+=w!==null?w.count/3:p.count/3,i.push({object3d:h,geometry:b})}});let s,o=80;if(n===!0){const h=a*2+a*3*4*4+80+4,b=new ArrayBuffer(h);s=new DataView(b),s.setUint32(o,a,!0),o+=4}else s="",s+=`solid exported
`;const l=new X,d=new X,c=new X,u=new X,g=new X,f=new X;for(let h=0,b=i.length;h<b;h++){const w=i[h].object3d,p=i[h].geometry,v=p.index,C=p.getAttribute("position");if(v!==null)for(let S=0;S<v.count;S+=3){const P=v.getX(S+0),I=v.getX(S+1),N=v.getX(S+2);x(P,I,N,C,w)}else for(let S=0;S<C.count;S+=3){const P=S+0,I=S+1,N=S+2;x(P,I,N,C,w)}}return n===!1&&(s+=`endsolid exported
`),s;function x(h,b,w,p,v){l.fromBufferAttribute(p,h),d.fromBufferAttribute(p,b),c.fromBufferAttribute(p,w),v.isSkinnedMesh===!0&&(v.applyBoneTransform(h,l),v.applyBoneTransform(b,d),v.applyBoneTransform(w,c)),l.applyMatrix4(v.matrixWorld),d.applyMatrix4(v.matrixWorld),c.applyMatrix4(v.matrixWorld),m(l,d,c),y(l),y(d),y(c),n===!0?(s.setUint16(o,0,!0),o+=2):(s+=`		endloop
`,s+=`	endfacet
`)}function m(h,b,w){u.subVectors(w,b),g.subVectors(h,b),u.cross(g).normalize(),f.copy(u).normalize(),n===!0?(s.setFloat32(o,f.x,!0),o+=4,s.setFloat32(o,f.y,!0),o+=4,s.setFloat32(o,f.z,!0),o+=4):(s+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,s+=`		outer loop
`)}function y(h){n===!0?(s.setFloat32(o,h.x,!0),o+=4,s.setFloat32(o,h.y,!0),o+=4,s.setFloat32(o,h.z,!0),o+=4):s+="			vertex "+h.x+" "+h.y+" "+h.z+`
`}}}async function hn(r,e,t={}){var h;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.nx>750||e.ny>750||e.spacingM!==4||e.layerSpacingM!==1.5||((h=e.layers)==null?void 0:h.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:n,ny:i,layers:a,spacingM:s,layerSpacingM:o}=e,l=(b,w)=>b<0||w<0||b>=n||w>=i?0:a[w*n+b],d=async()=>{var b;if(await new Promise(w=>setTimeout(w,0)),(b=t.shouldCancel)!=null&&b.call(t))throw new Error("Model export cancelled.")};let c=0;for(let b=0;b<i;b++){b%32===0&&await d();for(let w=0;w<n;w++){const p=l(w,b);if(!Number.isInteger(p)||p<0||p>160)throw new Error("Invalid MDDF building height.");p&&(c+=2+ +(p>l(w-1,b))+ +(p>l(w+1,b))+ +(p>l(w,b-1))+ +(p>l(w,b+1)))}}if(!c)throw new Error("The selected MDDF model has no buildings to export.");const u=new Float32Array(c*18);let g=0;const f=(b,w,p,v)=>{for(const C of[b,w,p,b,p,v])u.set(C,g),g+=3};for(let b=0;b<i;b++){b%32===0&&await d();for(let w=0;w<n;w++){const p=l(w,b)*o;if(!p)continue;const v=w*s,C=v+s,S=-b*s,P=S-s;f([v,p,S],[C,p,S],[C,p,P],[v,p,P]),f([v,0,S],[v,0,P],[C,0,P],[C,0,S]);let I=l(w-1,b)*o;p>I&&f([v,I,P],[v,I,S],[v,p,S],[v,p,P]),I=l(w+1,b)*o,p>I&&f([C,I,S],[C,I,P],[C,p,P],[C,p,S]),I=l(w,b-1)*o,p>I&&f([v,I,S],[C,I,S],[C,p,S],[v,p,S]),I=l(w,b+1)*o,p>I&&f([C,I,P],[v,I,P],[v,p,P],[C,p,P])}}const x=new mt;x.setAttribute("position",new pe(u,3));const m=new we(x);let y;try{y=new fn().parse(m,{binary:!0}).buffer}finally{x.dispose(),m.material.dispose()}return[{name:"mddf-model.stl",content:y},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:r.source,origin:e.origin,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:n,ny:i,spacingM:s,layerSpacingM:o,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:r.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:c*2}}},null,2)}]}const gn=.35;function pn(){const r=ve(null),e=ve(!1),t=ve(!1),n=be({step:0,error:"",grid:null,settings:null,legend:null,downloading:!1,downloadError:""}),i=be({heightM:10,directionDeg:0,speedMps:6}),a=be({variable:"speed",speedMps:6,particles:"white",paused:!1,showSurroundings:!0});let s,o,l,d=!1,c=null,u=!1;const g=new Map,f=()=>s,x="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),m=Zt({getMap:f,accessToken:x}),y=zi();function h(){clearTimeout(c),c=null,u=!1,n.grid=null,n.settings=null,n.legend=null,n.error="",n.downloadError="",n.step=0,y.invalidate(),S()}const b=yi({getMap:f,ready:e,onChange:h,accessToken:x}),w=ue(()=>y.state.downloading||n.downloading||b.state.loading),p=ue(()=>w.value||y.state.busy);function v(){return{"city-concordia-2d":!1,"city-concordia-3d":b.state.source==="concordia","city-osm-3d":b.state.source==="osm"}}function C(){for(const[M,F]of g)s!=null&&s.getLayer(M)&&(s.setLayoutProperty(M,"visibility",F.visibility),s.setPaintProperty(M,F.property,F.opacity));g.clear()}function S(){if(!s||!e.value)return;const M=y.state.prediction,F=n.step===3&&M;if(!F&&s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),!F&&s.getLayer("flume-buildings")&&s.removeLayer("flume-buildings"),!F&&s.getSource("flume-buildings")&&s.removeSource("flume-buildings"),C(),rt(s,v()),!F){const B=b.getPreview();je(s,B);return}je(s,b.state.snapshot.surroundings);const z=new Set(Qt.map(B=>B.id));for(const B of s.getStyle().layers){if(B.id==="flume-buildings")continue;const V=B.type==="fill-extrusion"?"fill-extrusion-opacity":B["source-layer"]==="building"&&["fill","line"].includes(B.type)?B.type+"-opacity":null;V&&(g.set(B.id,{visibility:s.getLayoutProperty(B.id,"visibility")??"visible",property:V,opacity:s.getPaintProperty(B.id,V)??1}),z.has(B.id)?s.setLayoutProperty(B.id,"visibility","none"):(s.setPaintProperty(B.id,V,gn),a.showSurroundings||s.setLayoutProperty(B.id,"visibility","none")))}s.getSource("flume-buildings")||s.addSource("flume-buildings",{type:"geojson",data:b.state.snapshot.buildings}),s.getLayer("flume-buildings")||s.addLayer({id:"flume-buildings",type:"fill-extrusion",source:"flume-buildings",paint:{"fill-extrusion-color":"#9aa3ad","fill-extrusion-height":["get","height"],"fill-extrusion-base":0,"fill-extrusion-opacity":1}}),s.getLayer("flume-field")||(l=ln(M,a,B=>{d||(n.legend=B)}),s.addLayer(l)),s.triggerRepaint()}async function P(){if(p.value)return;const M=await b.captureRegion();if(!(!M||d))try{n.grid=de(bi(M)),n.step=1,n.error="",N()}catch(F){n.error=F.message}}function I(){try{return n.settings=wi(i),a.speedMps=n.settings.speedMps,n.error="",n.step<2&&(n.step=2),!0}catch(M){return n.error=M.message,!1}}function N(){!n.grid||d||(clearTimeout(c),c=setTimeout(()=>{c=null,O()},320))}async function O(){if(clearTimeout(c),c=null,d||!n.grid||w.value)return;if(y.state.busy){u=!0;return}if(!I())return;await y.run(n.grid,n.settings)&&!d&&(n.step=3),u&&!d&&(u=!1,await O())}async function k(M){if(!(w.value||!n.grid)&&!(M!=="model"&&(y.state.busy||!y.state.prediction))){n.downloading=!0,n.downloadError="";try{const F=b.state.snapshot;let z;if(M==="model")z=await hn(F,n.grid,{shouldCancel:()=>d});else{const V={...y.state.prediction,settings:{...y.state.prediction.settings,speedMps:Number(a.speedMps)}};if(!Number.isFinite(V.settings.speedMps)||V.settings.speedMps<.5||V.settings.speedMps>20)throw new Error("Use a wind speed between 0.5 and 20 m/s.");const q=M==="wind"?null:await y.readMddf();z=M==="all"?un(F,q,V):M==="mddf"?dn(F,q,V):cn(F,V)}const B=await ei(z);d||ti(B,"flume-"+M+".zip","application/zip")}catch(F){d||(n.downloadError=F.message)}finally{d||(n.downloading=!1)}}}return J(()=>n.step,S),J(()=>y.state.prediction,()=>{!s||!e.value||(s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),S())}),J(()=>[i.heightM,i.directionDeg],()=>{n.grid&&N()}),J(()=>i.speedMps,M=>{const F=Number(M);!Number.isFinite(F)||F<.5||F>20||(a.speedMps=F,n.settings&&(n.settings.speedMps=F))}),J(()=>b.state.source,()=>{s&&e.value&&rt(s,v())}),J(()=>a.showSurroundings,S),J(()=>a.paused,()=>s==null?void 0:s.triggerRepaint()),J(()=>[a.variable,a.particles,a.speedMps],()=>{const M=Number(a.speedMps);Number.isFinite(M)&&M>=.5&&M<=20?(n.downloadError="",l==null||l.configure()):n.downloadError="Use a wind speed between 0.5 and 20 m/s."}),J(m.mapStyle,M=>{s&&(b.beforeStyleChange(),e.value=!1,l=null,g.clear(),s.setStyle(M,{diff:!1}))}),Bt(()=>{if(!(x!=null&&x.startsWith("pk."))){n.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{s=new bt.Map({container:r.value,accessToken:x,style:m.mapStyle.value,center:[-73.5673,45.5017],zoom:14,pitch:0,antialias:!0,attributionControl:!1}),t.value=!0,s.on("style.load",()=>{if(!d)try{Jt(s,v()),e.value=!0,b.restore(),S()}catch(M){n.error=M.message}}),s.on("error",M=>{d||(n.error="Map data unavailable"+(M.sourceId?" ("+M.sourceId+")":"")+". Check token, allowed domains and connection.")}),m.attach(),o=new ResizeObserver(()=>s==null?void 0:s.resize()),o.observe(r.value)}catch(M){n.error=M.message}}),Xe(()=>{d=!0,clearTimeout(c),b.dispose(),y.dispose(),o==null||o.disconnect(),s==null||s.remove(),s=null}),{mapElement:r,ready:e,initialized:t,state:n,draft:i,display:a,controls:m,region:b,runner:y,locked:w,regionLocked:p,acceptRegion:P,acceptWind:I,run:O,scheduleRun:N,download:k}}const mn={class:"flume-compact"},yn={key:0,class:"flume-meta",role:"status"},bn={key:1,class:"flume-muted"},wn={class:"flume-actions"},xn={key:2,role:"status",class:"flume-muted"},vn={key:3,class:"flume-meta"},Mn=["disabled"],Sn={__name:"RegionHud",props:{region:{type:Object,required:!0},ready:Boolean,locked:Boolean},emits:["continue"],setup(r){return(e,t)=>{const n=pt,i=Pe,a=_e,s=Ie;return D(),L("div",mn,[T(n,{modelValue:r.region.state.source,"onUpdate:modelValue":t[0]||(t[0]=o=>r.region.state.source=o),label:"Buildings","aria-label":"Building source",size:"small",options:[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],"text-by":"text","value-by":"value",disabled:r.region.state.loading||r.locked},null,8,["modelValue","disabled"]),T(i,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:!r.ready||r.region.state.loading||r.locked,loading:r.region.state.loading,onClick:r.region.loadBuildings},{default:W(()=>[...t[3]||(t[3]=[j("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),r.region.state.loadedArea?(D(),L("p",yn," Loaded detailed buildings: "+U(r.region.state.loadedArea.count)+" parts · "+U((r.region.state.loadedArea.extentM[0]/1e3).toFixed(1))+" × "+U((r.region.state.loadedArea.extentM[1]/1e3).toFixed(1))+" km. Detail stays when you zoom. ",1)):(D(),L("p",bn," Load a 3 × 3 km area around the map centre. The map fits the whole area automatically. ")),_("div",wn,[T(i,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:!r.ready||r.region.state.loading||r.locked,"aria-label":"Select region",onClick:r.region.startSelection},{default:W(()=>[...t[4]||(t[4]=[j("Draw area",-1)])]),_:1},8,["disabled","onClick"]),T(i,{size:"small",disabled:!r.ready||!r.region.state.region&&!r.region.state.loadedArea||r.locked,loading:r.region.state.loading,"aria-label":r.region.state.region?"Use selected region":"Use full loaded area",onClick:t[1]||(t[1]=o=>e.$emit("continue"))},{default:W(()=>[j(U(r.region.state.region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label"])]),r.region.state.drawing?(D(),L("p",xn," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):r.region.state.region?(D(),L("p",vn,[j(U(r.region.state.region.extentM[0])+" × "+U(r.region.state.region.extentM[1])+" m · 4 m cells · fitted domain ",1),_("button",{type:"button",class:"flume-link",disabled:r.region.state.loading||r.locked,onClick:t[2]||(t[2]=(...o)=>r.region.clearSelection&&r.region.clearSelection(...o))}," Clear ",8,Mn)])):G("",!0),r.region.state.loading?(D(),ae(a,{key:4,"model-value":r.region.state.progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):G("",!0),r.region.state.error?(D(),ae(s,{key:5,color:"danger"},{default:W(()=>[j(U(r.region.state.error),1)]),_:1})):G("",!0)])}}},kn={class:"wind"},Cn={class:"conditions"},Fn={class:"condition"},Pn=["disabled"],_n=["disabled"],In={class:"condition"},Bn=["disabled"],An=["disabled"],$n={class:"direction"},En=["aria-valuenow","aria-disabled"],Rn=["x1","y1","x2","y2"],Dn=["cx","cy"],Vn={class:"bearing"},Tn={class:"condition"},Nn=["disabled"],zn={class:"cardinals"},Ln={key:2,class:"busy"},Un={role:"status"},Wn={__name:"WindSettingsHud",props:{settings:{type:Object,required:!0},grid:{type:Object,default:null},runner:{type:Object,default:null},error:{type:String,default:""},locked:Boolean},emits:["run"],setup(r){const e=r,t=ve(null),n=ue(()=>Number(e.settings.directionDeg)*Math.PI/180),i=ue(()=>!!e.grid&&!e.locked);function a(o){if(!i.value||o.type==="pointermove"&&!o.buttons)return;o.type==="pointerdown"&&o.currentTarget.setPointerCapture(o.pointerId);const l=t.value.getBoundingClientRect();e.settings.directionDeg=(Math.round(Math.atan2(-(o.clientY-l.top-l.height/2),o.clientX-l.left-l.width/2)*180/Math.PI)+360)%360}function s(o){if(!i.value)return;const l=o.key==="ArrowRight"||o.key==="ArrowUp"?1:o.key==="ArrowLeft"||o.key==="ArrowDown"?-1:0;l&&(o.preventDefault(),e.settings.directionDeg=(Number(e.settings.directionDeg)+l+360)%360)}return(o,l)=>{var g,f,x;const d=Pe,c=Ie,u=_e;return D(),L("div",kn,[_("div",Cn,[_("label",Fn,[l[6]||(l[6]=_("span",null,[j("Slice height "),_("small",null,"m")],-1)),ne(_("input",{"onUpdate:modelValue":l[0]||(l[0]=m=>r.settings.heightM=m),class:"num",type:"number",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height (m)",disabled:!i.value},null,8,Pn),[[ge,r.settings.heightM,void 0,{number:!0}]]),ne(_("input",{"onUpdate:modelValue":l[1]||(l[1]=m=>r.settings.heightM=m),class:"range",type:"range",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height",disabled:!i.value},null,8,_n),[[ge,r.settings.heightM,void 0,{number:!0}]])]),_("label",In,[l[7]||(l[7]=_("span",null,[j("Wind speed "),_("small",null,"m/s")],-1)),ne(_("input",{"onUpdate:modelValue":l[2]||(l[2]=m=>r.settings.speedMps=m),class:"num",type:"number",min:"0.5",max:"20",step:"0.1","aria-label":"Reference wind speed (m/s)",disabled:!i.value},null,8,Bn),[[ge,r.settings.speedMps,void 0,{number:!0}]]),ne(_("input",{"onUpdate:modelValue":l[3]||(l[3]=m=>r.settings.speedMps=m),class:"range",type:"range",min:"0.5",max:"20",step:"0.1","aria-label":"Wind speed",disabled:!i.value},null,8,An),[[ge,r.settings.speedMps,void 0,{number:!0}]])])]),_("div",$n,[(D(),L("svg",{ref_key:"dial",ref:t,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":r.settings.directionDeg,"aria-disabled":!i.value||void 0,onPointerdown:At(a,["prevent"]),onPointermove:a,onKeydown:s},[l[8]||(l[8]=$t('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".28" stroke-width="2" data-v-d8c7c4e0></circle><text x="80" y="16" text-anchor="middle" data-v-d8c7c4e0>90°</text><text x="146" y="84" text-anchor="middle" data-v-d8c7c4e0>0°</text><text x="80" y="152" text-anchor="middle" data-v-d8c7c4e0>270°</text><text x="14" y="84" text-anchor="middle" data-v-d8c7c4e0>180°</text>',5)),_("line",{x1:80-Math.cos(n.value)*30,y1:80+Math.sin(n.value)*30,x2:80+Math.cos(n.value)*42,y2:80-Math.sin(n.value)*42,stroke:"#64d2ff","stroke-width":"3.5","stroke-linecap":"round"},null,8,Rn),_("circle",{cx:80+Math.cos(n.value)*42,cy:80-Math.sin(n.value)*42,r:"5",fill:"#64d2ff"},null,8,Dn)],40,En)),_("div",Vn,[_("label",Tn,[l[9]||(l[9]=_("span",null,[j("Wind towards "),_("small",null,"°")],-1)),ne(_("input",{"onUpdate:modelValue":l[4]||(l[4]=m=>r.settings.directionDeg=m),class:"num",type:"number",step:"1","aria-label":"Wind towards (°)",disabled:!i.value},null,8,Nn),[[ge,r.settings.directionDeg,void 0,{number:!0}]])]),_("div",zn,[(D(),L(fe,null,qe([{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],m=>T(d,{key:m.text,size:"small",preset:"secondary",disabled:!i.value,"aria-label":"Wind towards "+m.text,onClick:y=>r.settings.directionDeg=m.value},{default:W(()=>[j(U(m.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),r.error?(D(),ae(c,{key:0,color:"danger"},{default:W(()=>[j(U(r.error),1)]),_:1})):G("",!0),(g=r.runner)!=null&&g.state.error?(D(),ae(c,{key:1,color:"danger"},{default:W(()=>[j(U(r.runner.state.error),1)]),_:1})):G("",!0),(f=r.runner)!=null&&f.state.busy?(D(),L("div",Ln,[T(u,{"model-value":r.runner.state.progress*100,indeterminate:r.runner.state.progress===0},null,8,["model-value","indeterminate"]),_("p",Un,U(r.runner.state.stage),1)])):G("",!0),T(d,{block:"",disabled:!i.value,loading:(x=r.runner)==null?void 0:x.state.busy,"aria-label":"Run prediction",onClick:l[5]||(l[5]=m=>o.$emit("run"))},{default:W(()=>[...l[10]||(l[10]=[j("Run prediction",-1)])]),_:1},8,["disabled","loading"])])}}},jn=Oe(Wn,[["__scopeId","data-v-d8c7c4e0"]]),Xn={class:"display-settings"},On={key:0,class:"hint"},qn={class:"variables",role:"group","aria-label":"Field"},Yn=["aria-pressed","onClick"],Gn={class:"row"},Hn={key:0,class:"legend"},Kn={class:"legend-top"},Zn={class:"legend-range"},Jn={class:"hint"},Qn={__name:"DisplaySettingsHud",props:{display:{type:Object,required:!0},legend:{type:Object,default:null},prediction:{type:Object,default:null}},setup(r){const e=r,t=ue(()=>{var i;return((i=Fe.find(a=>a.id===e.display.variable))==null?void 0:i.ramp)??"turbo"}),n=ue(()=>"linear-gradient(to right,"+Array.from({length:17},(i,a)=>"rgb("+Ft(t.value,a/16).join(",")+") "+a*100/16+"%").join(",")+")");return(i,a)=>{const s=Rt;return D(),L("div",Xn,[r.prediction?(D(),L(fe,{key:1},[_("div",qn,[(D(!0),L(fe,null,qe(A(Fe),o=>(D(),L("button",{key:o.id,type:"button","aria-pressed":r.display.variable===o.id,onClick:l=>r.display.variable=o.id},U(o.label),9,Yn))),128))]),_("div",Gn,[a[4]||(a[4]=_("span",{class:"unit"},"particles",-1)),ne(_("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>r.display.particles=o),"aria-label":"Particles"},[...a[3]||(a[3]=[_("option",{value:"white"},"white, over the field",-1),_("option",{value:"tinted"},"coloured, no field",-1),_("option",{value:"off"},"off",-1)])],512),[[Et,r.display.particles]])]),T(s,{modelValue:r.display.paused,"onUpdate:modelValue":a[1]||(a[1]=o=>r.display.paused=o),class:"display-toggle",label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"]),T(s,{modelValue:r.display.showSurroundings,"onUpdate:modelValue":a[2]||(a[2]=o=>r.display.showSurroundings=o),class:"display-toggle",label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),r.legend?(D(),L("div",Hn,[_("div",Kn,[_("strong",null,U(r.legend.legend),1),_("span",null,U(r.legend.unit),1)]),_("div",{class:"colorbar",style:Dt({background:n.value})},null,4),_("div",Zn,[_("span",null,U(r.legend.low.toFixed(2)),1),_("span",null,U(r.legend.high.toFixed(2)),1)])])):G("",!0),_("p",Jn,U(r.prediction.patchCount)+" patches · "+U((r.prediction.milliseconds/1e3).toFixed(1))+" s",1)],64)):(D(),L("p",On,"Run a prediction to inspect the field."))])}}},er=Oe(Qn,[["__scopeId","data-v-5184528d"]]),tr={class:"space-y-2"},ir={key:0,class:"text-xs text-secondary"},nr={class:"grid grid-cols-2 gap-2"},rr={__name:"DownloadsHud",props:{grid:{type:Object,default:null},prediction:{type:Object,default:null},downloading:Boolean,locked:Boolean,predicting:Boolean,error:{type:String,default:""}},emits:["download"],setup(r){return(e,t)=>{const n=Pe,i=_e,a=Ie;return D(),L("div",tr,[r.grid?(D(),L(fe,{key:1},[_("div",nr,[(D(),L(fe,null,qe([{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}],s=>T(n,{key:s.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":s.label,disabled:r.downloading||r.locked||s.id!=="model"&&(r.predicting||!r.prediction),onClick:o=>e.$emit("download",s.id)},{default:W(()=>[j(U(s.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),r.downloading?(D(),ae(i,{key:0,indeterminate:"","aria-label":"Preparing download"})):G("",!0),r.error?(D(),ae(a,{key:1,color:"danger"},{default:W(()=>[j(U(r.error),1)]),_:1})):G("",!0)],64)):(D(),L("p",ir,"Choose a simulation area before downloading its model."))])}}},ar={class:"flume-hud-stack"},sr={key:0,class:"flume-status"},or={__name:"FlumeCityView",setup(r){const e=pn(),{mapElement:t,ready:n,initialized:i,state:a,draft:s,display:o,region:l,runner:d,locked:c,regionLocked:u}=e,{controlsElement:g,controlsVisible:f,mapStyle:x,mapStyles:m}=e.controls;return(y,h)=>{const b=Pe,w=pt,p=Vt,v=Nt,C=zt,S=Ie,P=_e;return D(),L("section",{class:"flume-page","aria-label":"Flume City wind prediction",onKeydown:h[2]||(h[2]=Lt((...I)=>A(l).stopSelection&&A(l).stopSelection(...I),["esc"]))},[_("div",{ref_key:"mapElement",ref:t,class:"flume-map","aria-label":"Flume City map"},null,512),ne(_("aside",{ref_key:"controlsElement",ref:g,class:"mapboxgl-ctrl flume-map-actions"},[T(v,{placement:"left-start","close-on-content-click":!1},{anchor:W(()=>[T(b,{size:"small",icon:"mso-layers","aria-label":"Flume basemap"})]),default:W(()=>[T(p,null,{default:W(()=>[T(w,{modelValue:A(x),"onUpdate:modelValue":h[0]||(h[0]=I=>Tt(x)?x.value=I:null),label:"Basemap",options:A(m),"text-by":"title","value-by":"value",disabled:A(c)},null,8,["modelValue","options","disabled"])]),_:1})]),_:1}),T(b,{size:"small",icon:A(f)?"mso-visibility_off":"mso-visibility","aria-label":A(f)?"Hide Flume controls":"Show Flume controls",onClick:h[1]||(h[1]=I=>f.value=!A(f))},null,8,["icon","aria-label"])],512),[[Qe,A(i)]]),ne(_("div",ar,[h[3]||(h[3]=_("header",{class:"flume-heading"},[_("h1",null,"Flume City"),_("p",null,"Urban wind simulation")],-1)),T(Ee,{title:"1 · Simulation area",inert:A(u),collapsed:A(a).step>0},{default:W(()=>[T(Sn,{region:A(l),ready:A(n),locked:A(u),onContinue:A(e).acceptRegion},null,8,["region","ready","locked","onContinue"])]),_:1},8,["inert","collapsed"]),T(Ee,{title:"2 · Configuration",collapsed:A(a).step===0},{default:W(()=>[T(jn,{settings:A(s),grid:A(a).grid,runner:A(d),error:A(a).error,locked:A(c),onRun:A(e).run},null,8,["settings","grid","runner","error","locked","onRun"]),A(d).state.prediction?(D(),L(fe,{key:0},[T(C),T(er,{display:A(o),legend:A(a).legend,prediction:A(d).state.prediction},null,8,["display","legend","prediction"])],64)):G("",!0)]),_:1},8,["collapsed"]),T(Ee,{title:"3 · Downloads",collapsed:!A(a).grid},{default:W(()=>[T(rr,{grid:A(a).grid,prediction:A(d).state.prediction,downloading:A(a).downloading,locked:A(d).state.downloading,predicting:A(d).state.busy,error:A(a).downloadError,onDownload:A(e).download},null,8,["grid","prediction","downloading","locked","predicting","error","onDownload"])]),_:1},8,["collapsed"]),A(a).error&&!A(a).grid?(D(),ae(S,{key:0,color:"danger"},{default:W(()=>[j(U(A(a).error),1)]),_:1})):G("",!0)],512),[[Qe,A(f)]]),!A(n)&&!A(a).error?(D(),L("div",sr,[T(P,{indeterminate:"","aria-label":"Loading Flume map"})])):G("",!0)],32)}}},yr=Oe(or,[["__scopeId","data-v-eb1c49aa"]]);export{yr as default};
//# sourceMappingURL=FlumeCityView-Ch2u7sSw.js.map
