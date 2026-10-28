import{w as se,o as Je,m as ye,r as Ke,u as Ct,d as cn,a as q,b as Fe,a2 as un,a3 as dn,e as z,v as U,i as N,l as b,M as fn,h as G,z as Z,N as $e,t as $,q as A,x as X,f as fe,L as De,y as Re,_ as Qe,U as Ft,P as hn,J as gn,a4 as pn,F as ue,A as Bt,a5 as mn,s as yn,O as bn,S as wn,X as xn,Y as vn,a6 as Me,$ as _n,E as Mn}from"./index-CSipV2m4.js";import{y as be,z as Sn,n as kn,l as Pn,E as at,o as Cn,M as ot,m as It,F as Se,V as ie,S as Fn,c as Bn,d as In,G as At,r as Et,H as $t,u as Be,I as Ye,W as An,D as st,R as lt,h as En,i as ct,J as $n,K as ut,N as Dn,s as Rn,b as Vn,B as Ln,e as zn,v as Tn,a as Nn,x as Un,w as ke}from"./mapbox-gl-geocoder-1MDH4Ee_.js";import{z as On}from"./archive-Dz16c6AW.js";import{d as Hn}from"./download-B6B1Q6H-.js";import{m as Ve,c as we}from"./geojsonToStl-Bbo8coar.js";import{c as et}from"./index-D6bWIqpK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./earcut-Drp1yMsm.js";const Wn=[-73.5673,45.5017],Xn=14,E=4,J=1.5,Dt=240,Ne=3e3,Yn=.1,ve=16,dt={directionDeg:0,speedMps:6},je=.5,qe=20,jn=320,ft=.35,qn=10,ht=.75,gt={low:800,medium:1600,high:3200},Rt={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#8cb8d8",selectedBuildings:"#9aa3ad",drawFillOpacity:.1},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#b9bdc4",selectedBuildings:"#5f6670",drawFillOpacity:.2}};let Vt="dark";function pt(t){Vt=t in Rt?t:"dark"}function ne(){return Rt[Vt]}function Lt(t){const e=[1/0,1/0,-1/0,-1/0];return et(t,n=>{e[0]=Math.min(e[0],n[0]),e[1]=Math.min(e[1],n[1]),e[2]=Math.max(e[2],n[0]),e[3]=Math.max(e[3],n[1])}),e}function Le(t,e){for(const x of[t,e])if(!Array.isArray(x)||x.length<2||!x.every(Number.isFinite)||Math.abs(x[0])>180||Math.abs(x[1])>85.051129)throw new Error("Invalid WGS84 region coordinates.");const n=[Math.min(t[0],e[0]),Math.min(t[1],e[1])];if(Math.abs(t[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=Ve(n),i=we(n),[a,o]=r([Math.max(t[0],e[0]),Math.max(t[1],e[1])]);if(a<=0||o<=0)throw new Error("The region is empty.");const s=Math.ceil((a-1e-6)/E),l=Math.ceil((o-1e-6)/E),c=i([s*E,l*E]),u=[...n,...c],[d,f,h,g]=u,m={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[d,f],[h,f],[h,g],[d,g],[d,f]]]}};return{origin:n,bounds:u,extentM:[s*E,l*E],polygon:m}}function mt(t){var i;if(((i=t==null?void 0:t.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(et(t,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const n=Lt(t);return{...Le(n.slice(0,2),n.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(t.geometry)}}}function Gn(t){const e=structuredClone({origin:t.origin,bounds:t.bounds,extentM:t.extentM,polygon:t.polygon}),n=Yn,r=t.extentM.map(l=>Math.ceil(l*n/E)*E),i=we(t.origin)([0,-r[1]]),a=we(i)([-r[0],0]),o=Ve(a)(t.bounds.slice(2,4)),s=Le(a,we(a)([o[0]+r[0],o[1]+r[1]]));return{...t,...s,mainDomain:e,buffer:{fraction:n,paddingM:r}}}function zt(t){var r,i,a;const e=new Map,n=new Set;for(const o of t){if(!["Polygon","MultiPolygon"].includes((r=o.geometry)==null?void 0:r.type))continue;et(o,f=>{if(!Number.isFinite(f[0])||!Number.isFinite(f[1])||Math.abs(f[0])>180||Math.abs(f[1])>85.051129)throw new Error("Invalid building coordinates.")});const s=Number((i=o.properties)==null?void 0:i.height),l=Number((a=o.properties)==null?void 0:a.min_height)||0,c=JSON.stringify([o.geometry,s,l]);if(n.has(c))continue;n.add(c);const u=be(o),d=u==null?c:JSON.stringify([u,s,l]);e.has(d)||e.set(d,[]),e.get(d).push({type:"Feature",...o.id==null?{}:{id:o.id},properties:structuredClone(o.properties??{}),geometry:structuredClone(o.geometry)})}return Array.from(e.values(),o=>{const s=o[0];if(o.length>1){const l=Pn({type:"FeatureCollection",features:o});if(!l)throw new Error("Building parts produced empty geometry.");s.geometry=l.geometry,delete s.bbox}return s})}function Zn(t,e){var h,g,m;const n=zt(t),r=e.selection??e.polygon,i=new Set(n.filter(x=>kn(x,r))),a=new Set(Array.from(i,be).filter(x=>x!=null)),o=[],s=[],l=[];let c=0,u=0;for(const x of n){if(!(i.has(x)||be(x)!=null&&a.has(be(x)))){s.push(x);continue}const w=(h=x.properties)==null?void 0:h.height;if(w==null||w===""){c++;continue}const y=Number(w);if(!Number.isFinite(y)||y<0||y>Dt)throw new Error("Building height must be finite and between 0 and 240 m.");if(y===0){c++;continue}Number((g=x.properties)==null?void 0:g.min_height)>0&&u++,o.push({...x,properties:{...x.properties,source_height:y,source_min_height:Number((m=x.properties)==null?void 0:m.min_height)||0,height:Math.max(1,Math.round(y/J))*J,min_height:0}})}const d={type:"FeatureCollection",features:o};let f=e;if(o.length){const x=Lt(d);f=Le(x.slice(0,2),x.slice(2,4))}return c&&l.push(c+" parts have missing/zero height and were omitted."),u&&l.push(u+" raised parts are treated as solid from the ground to their roof."),o.length||l.push("No buildings found in loaded map data. This run will use open ground."),o.some(x=>be(x)==null)&&l.push("Selected parts without provider IDs cannot be joined across tile boundaries."),l.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...f,selection:structuredClone(e.selection??e.polygon),buildings:d,surroundings:{type:"FeatureCollection",features:s},warnings:l}}function Ie(t){var n,r;const e=[];for(const i of zt(t)){const a=Number((n=i.properties)==null?void 0:n.height);if(!Number.isFinite(a)||a<=0)continue;const o=Math.min(a,Math.max(0,Number((r=i.properties)==null?void 0:r.min_height)||0));e.push({...i,properties:{...i.properties,height:a,min_height:o},geometry:i.geometry})}return{type:"FeatureCollection",features:e}}function Tt(t,e=null){const n=t.map(be);if(n.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const r=["in",Sn,["literal",Array.from(new Set(n))]];return{selected:e?["all",e,r]:r,surroundings:e?["all",e,["!",r]]:["!",r]}}const yt=65536*65536,Jn=12,bt=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),Kn=0,Qn=1,wt=2,ei=5;class ti{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,n,r=this.length){let i;for(;i=this.nextField(r);)e(i,n,this);return n}readMessage(e,n){return this.readFields(e,n,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*yt;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*yt;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const n=this.buf,r=n[this.pos++];if(r<128)return r;let i=r&127,a;return a=n[this.pos++],i|=(a&127)<<7,a<128||(a=n[this.pos++],i|=(a&127)<<14,a<128)||(a=n[this.pos++],i|=(a&127)<<21,a<128)?i:(a=n[this.pos],i|=(a&15)<<28,ni(i,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,n=this.pos;return this.pos=e,e-n>=Jn&&bt?bt.decode(this.buf.subarray(n,e)):ii(this.buf,n,e)}readBytes(){const e=this.readVarint()+this.pos,n=this.buf.subarray(this.pos,e);return this.pos=e,n}readPackedVarint(e=[],n){const r=this.readPackedEnd();for(;this.pos<r;)e.push(this.readVarint(n));return e}readPackedSVarint(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===wt?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const n=this.readVarint();return this.type=n&7,this._valueStart=this.pos,n>>>3}skip(e){const n=e&7;if(n===Kn)for(;this.buf[this.pos++]>127;);else if(n===wt)this.pos=this.readVarint()+this.pos;else if(n===ei)this.pos+=4;else if(n===Qn)this.pos+=8;else throw new Error(`Unimplemented type: ${n}`)}}function ni(t,e,n){const r=n.buf;let i,a;if(a=r[n.pos++],i=(a&112)>>4,a<128||(a=r[n.pos++],i|=(a&127)<<3,a<128)||(a=r[n.pos++],i|=(a&127)<<10,a<128)||(a=r[n.pos++],i|=(a&127)<<17,a<128)||(a=r[n.pos++],i|=(a&127)<<24,a<128)||(a=r[n.pos++],i|=(a&1)<<31,a<128))return ge(t,i,e);throw new Error("Expected varint not more than 10 bytes")}function ge(t,e,n){return n?e*4294967296+(t>>>0):(e>>>0)*4294967296+(t>>>0)}function ii(t,e,n){let r="",i=e;for(;i<n;){const a=t[i];let o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s>n)break;let l,c,u;s===1?a<128&&(o=a):s===2?(l=t[i+1],(l&192)===128&&(o=(a&31)<<6|l&63,o<=127&&(o=null))):s===3?(l=t[i+1],c=t[i+2],(l&192)===128&&(c&192)===128&&(o=(a&15)<<12|(l&63)<<6|c&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):s===4&&(l=t[i+1],c=t[i+2],u=t[i+3],(l&192)===128&&(c&192)===128&&(u&192)===128&&(o=(a&15)<<18|(l&63)<<12|(c&63)<<6|u&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,s=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),i+=s}return r}class Nt{constructor(e,n,r,i,a){for(this.properties=Object.create(null),this.extent=r,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=a;e.pos<n;){const o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){const s=e.readVarint()+e.pos;for(;e.pos<s;){const l=i[e.readVarint()],c=a[e.readVarint()];this.properties[l]=c}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos,r=[];let i,a=1,o=0,s=0,l=0;for(;e.pos<n;){if(o<=0){const c=e.readVarint();if(a=c&7,o=c>>3,o===0)continue}if(o--,a===1)s+=e.readSVarint(),l+=e.readSVarint(),i&&r.push(i),i=[new at(s,l)];else if(a===2)s+=e.readSVarint(),l+=e.readSVarint(),i&&i.push(new at(s,l));else if(a===7)i&&i.push(i[0].clone());else throw new Error(`unknown command ${a}`)}return i&&r.push(i),r}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const n=e.readVarint()+e.pos;let r=1,i=0,a=0,o=0,s=1/0,l=-1/0,c=1/0,u=-1/0;for(;e.pos<n;){if(i<=0){const d=e.readVarint();if(r=d&7,i=d>>3,i===0)continue}if(i--,r===1||r===2)a+=e.readSVarint(),o+=e.readSVarint(),a<s&&(s=a),a>l&&(l=a),o<c&&(c=o),o>u&&(u=o);else if(r!==7)throw new Error(`unknown command ${r}`)}return[s,c,l,u]}toGeoJSON(e,n,r){const i=this.extent*Math.pow(2,r),a=this.extent*e,o=this.extent*n,s=this.loadGeometry();function l(f){return[(f.x+a)*360/i-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+o)*2/i)*Math.PI))-90]}function c(f){return f.map(l)}let u;if(this.type===1){const f=[];for(const g of s)f.push(g[0]);const h=c(f);u=f.length===1?{type:"Point",coordinates:h[0]}:{type:"MultiPoint",coordinates:h}}else if(this.type===2){const f=s.map(c);u=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=ri(s),h=[];for(const g of f)h.push(g.map(c));u=h.length===1?{type:"Polygon",coordinates:h[0]}:{type:"MultiPolygon",coordinates:h}}else throw new Error("unknown feature type");const d={type:"Feature",geometry:u,properties:this.properties};return this.id!=null&&(d.id=this.id),d}}Nt.types=["Unknown","Point","LineString","Polygon"];function ri(t){const e=t.length;if(e<=1)return[t];const n=[];let r,i;for(let a=0;a<e;a++){const o=ai(t[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&n.push(r),r=[t[a]]):r&&r.push(t[a]))}return r&&n.push(r),n}function ai(t){let e=0;for(let n=0,r=t.length,i=r-1,a,o;n<r;i=n++)a=t[n],o=t[i],e+=(o.x-a.x)*(a.y+o.y);return e}class oi{constructor(e,n){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],n===void 0&&(n=e.length);e.pos<n;){const r=e.readVarint();r===10?this.name=e.readString():r===18?(this._features.push(e.pos),e.skip(r)):r===26?this._keys.push(e.readString()):r===34?this._values.push(si(e)):r===40?this.extent=e.readVarint():r===120?this.version=e.readVarint():e.skip(r)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const n=this._pbf.readVarint()+this._pbf.pos;return new Nt(this._pbf,n,this.extent,this._keys,this._values)}}function si(t){let e=null;const n=t.readVarint()+t.pos;for(;t.pos<n;){const r=t.readVarint();e=r===10?t.readString():r===21?t.readFloat():r===25?t.readDouble():r===32?t.readVarint(!0):r===40?t.readVarint():r===48?t.readSVarint():r===56?t.readBoolean():(t.skip(r),null)}if(e==null)throw new Error("unknown feature value");return e}class li{constructor(e,n=e.length){const r=Object.create(null);for(;e.pos<n;){const i=e.readVarint();if(i===26){const a=new oi(e,e.readVarint()+e.pos);a.length&&(r[a.name]=a)}else e.skip(i)}this.layers=r}}function Ut(t){return t==="osm"?"building":"Montreal_Qatar-6hvjju"}function Ot(t,e){return t!=="osm"||String(e.extrude)==="true"}function Ht(t,e){return Math.max(t??0,Math.min(16,e??16))}function Wt(t,e){const n=2**e,r=a=>a/n*360-180,i=a=>Math.atan(Math.sinh(Math.PI*(1-2*a/n)))*180/Math.PI;return[r(Math.min(...t.map(a=>a.x))),i(Math.max(...t.map(a=>a.y))+1),r(Math.max(...t.map(a=>a.x))+1),i(Math.min(...t.map(a=>a.y)))]}function Xt(t,e,n=0){const r=2**e,i=d=>(d+180)/360*r,a=d=>{const f=Math.max(-85.051129,Math.min(85.051129,d))*Math.PI/180;return(1-Math.asinh(Math.tan(f))/Math.PI)/2*r},o=Math.max(0,Math.floor(i(t[0]))-n),s=Math.min(r-1,Math.ceil(i(t[2])-1e-9)-1+n),l=Math.max(0,Math.floor(a(t[3]))-n),c=Math.min(r-1,Math.ceil(a(t[1])-1e-9)-1+n);if((s-o+1)*(c-l+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const u=[];for(let d=l;d<=c;d++)for(let f=o;f<=s;f++)u.push({z:e,x:f,y:d});return u}function ci({map:t,sourceId:e,source:n,bounds:r}){var i,a,o,s;try{const l=(i=t.getSource)==null?void 0:i.call(t,e),c=(o=(a=t.style)==null?void 0:a.getOwnSourceCaches)==null?void 0:o.call(a,e);if(!l||!(c!=null&&c.length)||typeof t.querySourceFeatures!="function")return null;const u=Ht(l.minzoom,l.maxzoom),d=Xt(r,u),f=new Set;for(const m of c)for(const x of m.getIds()){const p=m.getTileByID(x),w=(s=p==null?void 0:p.tileID)==null?void 0:s.canonical;(w==null?void 0:w.z)===u&&p.state==="loaded"&&f.add(w.x+"/"+w.y)}if(!d.every(m=>f.has(m.x+"/"+m.y)))return null;const h=new Set(d.map(m=>m.x+"/"+m.y));return{features:t.querySourceFeatures(e,{sourceLayer:Ut(n)}).filter(m=>{var x;return((x=m.tile)==null?void 0:x.z)===u&&h.has(m.tile.x+"/"+m.tile.y)&&Ot(n,m.properties)}),zoom:u,tileCount:d.length,coverageBounds:Wt(d,u),fromMap:!0}}catch{return null}}async function xt(t,e,n=!1){e==null||e.throwIfAborted();const r=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),i=await fetch(t,{signal:r});if(n&&i.status===404)return null;if(!i.ok)throw new Error("Building data request failed (HTTP "+i.status+"). Check source access and token.");return i}function vt(t,e){var r;const n=new URL(t,((r=globalThis.location)==null?void 0:r.href)??"http://localhost/");if(!["https:","http:"].includes(n.protocol))throw new Error("Unsupported building source URL.");return(n.hostname==="api.mapbox.com"||n.hostname.endsWith(".mapbox.com"))&&e&&n.searchParams.set("access_token",e),n.href}async function ui({sourceConfig:t,source:e,bounds:n,accessToken:r,signal:i,onProgress:a,paddingTiles:o=0}){var m;if(!t)throw new Error("The selected basemap does not provide this building source.");let s=t;if(t.url){let x=t.url;if(x.startsWith("mapbox://")){const p=x.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(p))throw new Error("Invalid Mapbox tileset ID.");x="https://api.mapbox.com/v4/"+p+".json?secure"}s=await(await xt(vt(x,r),i)).json()}if(!((m=s.tiles)!=null&&m.length))throw new Error("The selected source has no vector tile URLs.");const l=Ht(s.minzoom,s.maxzoom);if(!Number.isInteger(l)||l<0||l>22)throw new Error("Unsupported tile detail level.");const c=Xt(n,l,o),u=[];let d=0,f=0,h=0;const g=Ut(e);return await Promise.all(Array.from({length:Math.min(4,c.length)},async()=>{for(;d<c.length;){const{x,y:p,z:w}=c[d++];let y=s.tiles[0].replaceAll("{z}",String(w)).replaceAll("{x}",String(x)).replaceAll("{y}",String(s.scheme==="tms"?2**w-p-1:p)).replaceAll("{ratio}","");y=vt(y,r);const v=await xt(y,i,!0);if(v){const M=await v.arrayBuffer();if(h+=M.byteLength,M.byteLength>16*1024*1024||h>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const C=new li(new ti(new Uint8Array(M))).layers[g];if(C)for(let S=0;S<C.length;S++){const k=C.feature(S);Ot(e,k.properties)&&k.type===3&&u.push(k.toGeoJSON(x,p,w))}}f++,a==null||a(f/c.length)}})),i==null||i.throwIfAborted(),{features:u,zoom:l,tileCount:c.length,coverageBounds:Wt(c,l)}}const ae="flume-detailed-buildings",oe="flume-region-domain",pe="flume-main-domain";function Ge(t,e){var n;if(!((n=e==null?void 0:e.features)!=null&&n.length)){t.getLayer(ae)&&t.removeLayer(ae),t.getSource(ae)&&t.removeSource(ae);return}t.getSource(ae)?t.getSource(ae).setData(e):t.addSource(ae,{type:"geojson",data:e,maxzoom:22,tolerance:0}),t.getLayer(ae)||t.addLayer({id:ae,type:"fill-extrusion",source:ae,minzoom:0,paint:{"fill-extrusion-color":ne().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function di(t,e){if(!e){t.getLayer(pe)&&t.removeLayer(pe),t.getLayer(oe)&&t.removeLayer(oe),t.getSource(oe)&&t.removeSource(oe);return}const n={type:"FeatureCollection",features:[{...e.polygon,properties:{role:"outer"}},...e.mainDomain?[{...e.mainDomain.polygon,properties:{role:"main"}}]:[]]};t.getSource(oe)?t.getSource(oe).setData(n):(t.addSource(oe,{type:"geojson",data:n}),t.addLayer({id:oe,type:"line",source:oe,filter:["==",["get","role"],"outer"],paint:{"line-color":ne().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!t.getLayer(pe)&&t.addLayer({id:pe,type:"line",source:oe,filter:["==",["get","role"],"main"],paint:{"line-color":ne().mainArea,"line-width":3}}),!e.mainDomain&&t.getLayer(pe)&&t.removeLayer(pe)}const _t=["draw.create","draw.update","draw.delete"];function fi({getMap:t,ready:e,onChange:n,accessToken:r}){const i=Ke({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,o=!1,s=null,l=0,c=null;function u(_=!1){l++,s==null||s.abort(),_||(c=null,i.loadedArea=null),i.snapshot=null,n==null||n()}function d(){const _=t();!_||!e.value||(Ge(_,c==null?void 0:c.preview),di(_,i.region??(c==null?void 0:c.area)??null))}function f(){return(c==null?void 0:c.preview)??null}function h(_){u(!i.region&&!i.snapshot),i.error="";try{i.region=ye(mt(_))}catch(P){i.region=null,i.error=P.message}d()}function g(_){var H;if(o||!a)return;const P=(H=_.features)==null?void 0:H.at(-1);if(_.type==="draw.create"&&P)for(const Y of a.getAll().features)Y.id!==P.id&&a.delete(Y.id);const F=a.getAll().features.find(Y=>Y.geometry.type==="Polygon");F?h(F):(u(),i.region=null,d()),i.drawing=!1}function m(_){i.drawing=_.mode==="draw_polygon"||_.mode==="direct_select"}function x(){var P;const _=t();if(!_||!e.value)throw new Error("Wait for the map to load.");if(!a){a=new Cn({displayControlsDefault:!1,controls:{},boxSelect:!1}),_.addControl(a,"bottom-left");for(const F of _t)_.on(F,g);_.on("draw.modechange",m),p(_),_.once("idle",()=>p(_)),(P=i.region)!=null&&P.selection&&a.add(i.region.selection)}return a}function p(_){var P;for(const F of((P=_.getStyle())==null?void 0:P.layers)??[])F.id.startsWith("gl-draw-")&&(F.type==="fill"&&(_.setPaintProperty(F.id,"fill-color",ne().mainArea),_.setPaintProperty(F.id,"fill-opacity",ne().drawFillOpacity)),F.type==="line"&&(_.setPaintProperty(F.id,"line-color",ne().mainArea),_.setPaintProperty(F.id,"line-width",3)))}function w(){const _=t();if(!(!a||!_)){for(const P of _t)_.off(P,g);_.off("draw.modechange",m),_.removeControl(a),a=null,i.drawing=!1}}function y(){if(!i.loading)try{const _=x();t().stop(),u(!i.region&&!i.snapshot),i.region=null,_.deleteAll(),d(),_.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(_){i.error=_.message}}function v(){a&&a.changeMode("simple_select"),i.drawing=!1}function M(){var _;(_=t())==null||_.stop(),w(),u(),i.region=null,i.error="",d()}async function C(_){const P=new AbortController,F=l;s=P,i.loading=!0,i.progress=0,i.error="";const H=()=>o||P.signal.aborted||F!==l;try{return await _({signal:P.signal,epoch:F,isStale:H})}catch(Y){return P.abort(),!o&&F===l&&Y.name!=="AbortError"&&(i.error=Y.message),null}finally{s===P&&(s=null,o||(i.loading=!1))}}async function S(_,P,{signal:F,epoch:H,isStale:Y}){if(F.throwIfAborted(),(c==null?void 0:c.source)===P&&_.bounds.every((T,j)=>j<2?T>=c.area.bounds[j]:T<=c.area.bounds[j]))return c.tiles;const V=t(),K=P==="osm"?"composite":"city-concordia",te=ci({map:V,sourceId:K,source:P,bounds:_.bounds})??await ui({sourceConfig:V.getStyle().sources[K],source:P,bounds:_.bounds,accessToken:r,signal:F,paddingTiles:1,onProgress:T=>{H===l&&(i.progress=T)}});if(Y())throw new DOMException("Cancelled","AbortError");const R=Ie(te.features);return c={source:P,area:_,tiles:te,preview:R},i.loadedArea=ye({source:P,bounds:[..._.bounds],extentM:[..._.extentM],count:R.features.length,fromMap:!!te.fromMap}),d(),te}function k(_){var H;const P=t(),F=P.getCanvas().clientWidth;(H=P.resize)==null||H.call(P),P.fitBounds([_.bounds.slice(0,2),_.bounds.slice(2,4)],{padding:F>=640?{top:40,bottom:40,left:Math.min(320,F*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function B(){if(i.loading||o)return null;const _=t();if(!_||!e.value)return i.error="Wait for the map to load.",null;const P=i.source;return C(async F=>{const H=Ne/2,Y=_.getCenter().wrap().toArray(),ee=we(Y)([-H,-H]),V=Le(ee,we(ee)([Ne,Ne]));return k(V),await S(V,P,F),F.isStale()?null:(i.snapshot=null,n==null||n(),i.loadedArea)})}async function I(){if(i.loading||o)return null;!i.region&&(c==null?void 0:c.source)===i.source&&h(c.area.polygon);const _=t(),P=i.region,F=i.source;return!_||!e.value||!P?(i.error="Draw and finish a valid polygon first.",null):C(async H=>{const Y=mt(P.selection??P.polygon);let ee=Y,V,K;for(let W=0;W<4;W++){if(K=await S(ee,F,H),H.isStale())return null;V=Zn(K.features,Y);const te=K.coverageBounds;if(V.bounds.every((T,j)=>j<2?T>te[j]+1e-8:T<te[j]-1e-8)||!V.buildings.features.length)break;if(W===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");ee=V}return V=Gn(V),V.source=F,V.dataZoom=K.zoom,V.tileCount=K.tileCount,V.surroundings=Ie(V.surroundings.features),V.warnings=V.warnings.filter(W=>!W.startsWith("Loaded map tiles only")),V.warnings.push((K.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ")+K.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(V.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=ye(V),i.region=ye({origin:V.origin,bounds:V.bounds,extentM:V.extentM,polygon:V.polygon,selection:V.selection,mainDomain:V.mainDomain,buffer:V.buffer}),d(),k(V),n==null||n(),V})}function L(){s==null||s.abort(),w()}function O(){var _;d(),(_=i.region)!=null&&_.selection&&x()}function D(){o=!0,l++,s==null||s.abort(),w()}return se(()=>i.source,()=>{u(),d(),i.error=""}),Je(D),{state:i,startSelection:y,stopSelection:v,clearSelection:M,setSelection:h,captureRegion:I,loadBuildings:B,getPreview:f,restore:O,beforeStyleChange:L,dispose:D}}function hi(t){const[e,n]=t.extentM,r=Math.round(e/E),i=Math.round(n/E);if(r<1||i<1||!Number.isSafeInteger(r*i)||Math.abs(r*E-e)>1e-5||Math.abs(i*E-n)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const a=Ve(t.origin),o=new Float32Array(r*i);for(const c of t.buildings.features){const u=Number(c.properties.height);if(!Number.isFinite(u)||u<0||u>Dt)throw new Error("Invalid building height (0..240 metres).");if(!u)continue;const d=Math.max(1,Math.round(u/J)),f=c.geometry.type==="Polygon"?[c.geometry.coordinates]:c.geometry.coordinates;for(const h of f){const g=h.map(p=>p.map(a));let m=1/0,x=-1/0;for(const p of g)for(const w of p)m=Math.min(m,w[1]),x=Math.max(x,w[1]);for(let p=Math.max(0,Math.ceil(m/E-.5));p<Math.min(i,Math.ceil(x/E-.5));p++){const w=(p+.5)*E,y=[];for(const v of g)for(let M=0,C=v.length-1;M<v.length;C=M++){const S=v[C],k=v[M];(S[1]<=w&&k[1]>w||k[1]<=w&&S[1]>w)&&y.push(S[0]+(w-S[1])*(k[0]-S[0])/(k[1]-S[1]))}y.sort((v,M)=>v-M);for(let v=0;v+1<y.length;v+=2){const M=Math.max(0,Math.ceil(y[v]/E-.5-1e-8)),C=Math.min(r,Math.ceil(y[v+1]/E-.5-1e-8));for(let S=M;S<C;S++)o[p*r+S]=Math.max(o[p*r+S],d)}}}}let s=0,l=0;for(const c of o)c>0&&s++,l=Math.max(l,c);return{layers:o,nx:r,ny:i,origin:[...t.origin],extentM:[...t.extentM],mainDomain:t.mainDomain,buffer:t.buffer,spacingM:E,layerSpacingM:J,statistics:{builtCells:s,maximumHeightM:l*J}}}function Pe(t){const e=Number(t);return Number.isFinite(e)&&e>=je&&e<=qe}function gi({directionDeg:t,speedMps:e}){const n=(o,s)=>{if(o===""||o===null||o===void 0||!Number.isFinite(Number(o)))throw new Error("Invalid "+s+".");return Number(o)},r=n(t,"direction"),i=n(e,"speed");if(!Pe(i))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const a=(r%360+360)%360;return{directionDeg:a,thetaRad:a*Math.PI/180,speedMps:i}}class tt{constructor(e,n,r){this.adapter=e,this.device=n,this.useF16=r,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const n=e.features.has("shader-f16"),r=await e.requestDevice({requiredFeatures:n?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new tt(e,r,n)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,n,r){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:n,label:r});return a._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,n,r=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|r,n)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,n){const r=this.storage(e.byteLength,n);return this.write(r,e),r}write(e,n){if(n.byteLength%4){const r=new Uint8Array(Math.ceil(n.byteLength/4)*4);r.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,n)}uniform(e){const n=Math.ceil(e.length/4)*16,r=new ArrayBuffer(n),i=new Uint32Array(r),a=new Int32Array(r),o=new Float32Array(r);e.forEach(([l,c],u)=>{l==="u"?i[u]=c:l==="i"?a[u]=c:o[u]=c});const s=this.device.createBuffer({size:n,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(s,0,r),this.scratch.push(s),s}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const n=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:n,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,n,r,i,a=256){e.setPipeline(n),e.setBindGroup(0,this.device.createBindGroup({layout:n.getBindGroupLayout(0),entries:r.map((l,c)=>({binding:c,resource:{buffer:l}}))}));const o=Math.max(1,Math.ceil(i/a)),s=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(o,s),Math.ceil(o/s))}async readFloat32(e,n){const r=n*4,i=this.buffer(r,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const o=new Float32Array(i.getMappedRange().slice(0,r));return i.unmap(),this.free(i),o}}function Yt(t){const e=new Uint16Array(t.length),n=new Float32Array(1),r=new Uint32Array(n.buffer);for(let i=0;i<t.length;i++){n[0]=t[i];const a=r[0],o=a>>>16&32768,s=a>>>23&255;let l=a&8388607;if(s===255){e[i]=o|31744|(l?1:0);continue}const c=s-127+15;if(c>=31){e[i]=o|31744;continue}if(c<=0){if(c<-10){e[i]=o;continue}l|=8388608;const d=14-c;let f=l>>>d;l>>>d-1&1&&(f+=1),e[i]=o|f;continue}let u=c<<10|l>>>13;l&4096&&(u+=1),e[i]=o|u}return e}function pi(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;n++){const r=t[n],i=r&32768?-1:1,a=r>>10&31,o=r&1023;a===0?e[n]=i*o*2**-24:a===31?e[n]=o?NaN:i*(1/0):e[n]=i*(1+o/1024)*2**(a-15)}return e}const ce=180,jt=4,qt=7,nt=jt*qt,Ae=1.5,Mt=4,mi=1600,yi=256*1024*1024,Ce=t=>t.toFixed(6),bi=640,wi=`
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
  let angles = ${ce}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${Ce(Mt)};
  let gyr = sinT[angle] / ${Ce(Mt)};

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

  let cutoff = ${Ce(mi)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${bi}u; step++) {
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
}`,xi=`
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
  let angles = ${ce}u;
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
  let out = (u.pixelOffset + localPixel) * ${nt}u
          + sig * ${qt}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,vi=t=>`${t==="f16"?`enable f16;
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
@group(0) @binding(5) var<storage, read_write> out: array<${t}>;
@group(0) @binding(6) var<uniform> u: P;

fn sampleField(ey: f32, ex: f32, channel: u32) -> f32 {
  let y0 = floor(ey); let x0 = floor(ex);
  let fy = ey - y0; let fx = ex - x0;
  let iy0 = clamp(i32(y0), 0, i32(u.gy) - 1);
  let ix0 = clamp(i32(x0), 0, i32(u.gx) - 1);
  let iy1 = clamp(iy0 + 1, 0, i32(u.gy) - 1);
  let ix1 = clamp(ix0 + 1, 0, i32(u.gx) - 1);
  let c = ${nt}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Ce(Ae)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${t==="f16"?"f16(value)":"value"};
}`;class _i{constructor(e,n,r,i,a,o="f32"){this.context=e,this.store=o,this.ny=r,this.nx=i,this.margin=a,this.gy=r+2*a,this.gx=i+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const s=new Float32Array(this.gy*this.gx);for(let u=0;u<r;u++){const d=u*i,f=(u+a)*this.gx+a;for(let h=0;h<i;h++)s[f+h]=n[d+h]*Ae}this.heightBuffer=e.upload(s,"mddf.height");const l=new Float32Array(ce),c=new Float32Array(ce);for(let u=0;u<ce;u++){const d=2*Math.PI*u/ce;l[u]=Math.cos(d),c[u]=Math.sin(d)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(c,"mddf.sin"),this.rawBuffer=e.storage(jt*this.chunk*ce*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*nt*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(wi),this.fourierPipeline=e.pipeline(xi),this.assemblePipeline=e.pipeline(vi(o)),this.currentLayer=-1}async compute(e,n={}){var l,c,u;const{context:r}=this,i=this.cache.get(e);if(i){this.fieldBuffer=i,this.currentLayer=e,(l=n.onProgress)==null||l.call(n,1);return}const a=(this.cache.size+1)*this.fieldBytes<=yi;this.fieldBuffer=a?r.storage(this.fieldBytes,"mddf.field."+e):this.spare;const o=(e+.5)*Ae,s=this.gy*this.gx;for(let d=0;d<s;d+=this.chunk){(c=n.signal)==null||c.throwIfAborted();const f=Math.min(this.chunk,s-d),h=r.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",d],["u",f],["u",0],["u",0],["u",0],["f",o],["f",0],["f",0],["f",0]]),g=r.device.createCommandEncoder(),m=g.beginComputePass();r.dispatch(m,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,h],f*ce),r.dispatch(m,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,h],f*4,64),m.end(),r.device.queue.submit([g.finish()])}await r.device.queue.onSubmittedWorkDone(),(u=n.onProgress)==null||u.call(n,1),r.releaseScratch(),a&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,n,r,i,a,o,s){const{context:l}=this,c=n.length/2,u=l.upload(n,"assemble.origins"),d=l.uniform([["u",c],["u",r.channels],["u",r.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",r.solidChannel],["i",r.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",r.coordYScale],["f",(a-r.coordZCentre)/r.coordZScale],["f",r.coordXCentre],["f",r.coordXScale],["f",0],["f",0]]),f=e.beginComputePass();return l.dispatch(f,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,u,r.tableBuffer,r.normBuffer,s,d],c*r.channels*o*o),f.end(),u}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const Ue=`
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
`,Mi=`
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
}`;function St(t,e,n,r=1e-5){const i=t==="f16"||e==="f16"?`enable f16;
`:"",a=s=>t==="f16"?`f32(${s})`:s,o=s=>e==="f16"?`f16(${s})`:s;return`${i}
@group(0) @binding(0) var<storage, read> X: array<${t}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${e}>;
var<workgroup> partial: array<f32, 256>;
@compute @workgroup_size(256)
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${n}u;
  var s = 0.0;
  for (var i = lid.x; i < ${n}u; i += 256u) { s += ${a("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = 128u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${n}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${n}u; i += 256u) {
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
  let inverse = inverseSqrt(max(partial[0] / ${n}.0, 0.0) + ${r.toExponential(12)});
  for (var i = lid.x; i < ${n}u; i += 256u) {
    Y[base + i] = ${o("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const Oe=32;function Si(t){const{store:e,patch:n,modes1:r,modes2:i}=t,a=n*n,o=2*r,s=e==="f16"?`enable f16;
`:"",l=u=>e==="f16"?`f32(${u})`:u,c=u=>e==="f16"?`f16(${u})`:u;return{conv1x1:`${s}${Ue}
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
  Y[g] = ${c("acc")};
}`,gate:`${s}${Ue}
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
  H[g] = ${c("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:St(e,e,a),instanceNormScaled:St(e,e,a,1e-5/(Oe*Oe)),forwardColumns:`${s}
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
  if (g >= u.batch * u.channels * ${n*i}u) { return; }
  let k = g % ${i}u;
  let y = (g / ${i}u) % ${n}u;
  let bc = g / ${n*i}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${a}u + y * ${n}u;
  for (var x = 0u; x < ${n}u; x++) {
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
  let block = ${o*i}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${i}u;
  let s = (g / ${i}u) % ${o}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${r}u);
  let sp = s - half * ${r}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${r*i}u;
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
}`,inverseColumns:`${s}
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
  let x = p % ${n}u;
  let y = p / ${n}u;
  let bc = g / ${a}u;
  var acc = 0.0;
  let base = (bc * ${n}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${n}u + x]
         + inIm[base + k] * tableSin[k * ${n}u + x];
  }
  Y[g] = ${c("acc * "+1/Oe)};
}`,residual:`${s}${Ue}
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
  Y[g] = ${c("acc")};
}`}}function ki(t,e,n){const r=2*e,i=[];for(let h=0;h<e;h++)i.push(h);for(let h=t-e;h<t;h++)i.push(h);const a=new Float32Array(t*n),o=new Float32Array(t*n);for(let h=0;h<t;h++)for(let g=0;g<n;g++){const m=2*Math.PI*h*g/t;a[h*n+g]=Math.cos(m),o[h*n+g]=-Math.sin(m)}const s=new Float32Array(r*t),l=new Float32Array(r*t);for(let h=0;h<r;h++)for(let g=0;g<t;g++){const m=2*Math.PI*i[h]*g/t;s[h*t+g]=Math.cos(m),l[h*t+g]=-Math.sin(m)}const c=new Float32Array(t*r),u=new Float32Array(t*r);for(let h=0;h<t;h++)for(let g=0;g<r;g++){const m=2*Math.PI*i[g]*h/t;c[h*r+g]=Math.cos(m)/t,u[h*r+g]=Math.sin(m)/t}const d=new Float32Array(n*t),f=new Float32Array(n*t);for(let h=0;h<n;h++){const g=(h===0?1:2)/t;for(let m=0;m<t;m++){const x=2*Math.PI*h*m/t;d[h*t+m]=g*Math.cos(x),f[h*t+m]=-g*Math.sin(x)}}return{forwardCos:a,forwardSin:o,rowRe:s,rowIm:l,inverseRowRe:c,inverseRowIm:u,inverseColCos:d,inverseColSin:f}}class Pi{constructor(e,n,r,i){const a=n.model;if(this.context=e,this.metadata=n,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=n.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,n.inference.patch[0]!==n.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[c,u]of Object.entries(Si(o)))this.pipelines[c]=e.pipeline(u);this.contractPipeline=e.pipeline(Mi);const s=c=>{const u=n.tensors[c];if(!u)throw new Error(`missing tensor ${c}`);return pi(new Uint16Array(r,u.offset,u.count))};this.read=s,this.tables={};for(const[c,u]of Object.entries(ki(this.patch,this.modes1,this.modes2)))this.tables[c]=e.upload(u,`fno.table.${c}`);this.weights={};const l=(c,u)=>{const d=s(u);this.weights[c]=this.store==="f16"?e.upload(Yt(d),`fno.${c}`):e.upload(d,`fno.${c}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let c=0;c<this.layers;c++)l(`m1w${c}`,`mlp_layers.${c}.mlp1.weight`),l(`m1b${c}`,`mlp_layers.${c}.mlp1.bias`),l(`m2w${c}`,`mlp_layers.${c}.mlp2.weight`),l(`m2b${c}`,`mlp_layers.${c}.mlp2.bias`),l(`lw${c}`,`w_layers.${c}.weight`),l(`lb${c}`,`w_layers.${c}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:n}=this,r=n.tucker;let i=r.core_shape.slice(),a=e.upload(this.read(`${r.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${r.core}.im`),"tucker.core.im");for(const l of r.factors){const[c,u]=l.shape;if(i[l.mode]!==u)throw new Error(`factor ${l.name} does not match the core`);const d=i.slice();d[l.mode]=c;const f=d.reduce((M,C)=>M*C,1),h=d.slice(l.mode+1).reduce((M,C)=>M*C,1),g=e.storage(f*4,"tucker.re"),m=e.storage(f*4,"tucker.im"),x=e.upload(this.read(`${l.name}.re`),"tucker.f"),p=e.upload(this.read(`${l.name}.im`),"tucker.f"),w=e.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",l.mode],["u",c],["u",u],["u",h],["u",0],["u",f],["u",0]]),y=e.device.createCommandEncoder(),v=y.beginComputePass();e.dispatch(v,this.contractPipeline,[a,o,x,p,g,m,w],f),v.end(),e.device.queue.submit([y.finish()]),e.free(a),e.free(o),e.free(x),e.free(p),a=g,o=m,i=d}e.releaseScratch();const s=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==s.join())throw new Error(`spectral stack is ${i} but ${s} was expected`);this.spectralRe=a,this.spectralIm=o}allocate(e){const{context:n}=this,r=this.patch*this.patch,i=this.width,a=2*this.modes1,o=(l,c)=>n.storage(e*l*r*this.elementBytes,c),s=(l,c)=>n.storage(e*i*l*4,c);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(i,"fno.x"),t1:o(i,"fno.t1"),t2:o(i,"fno.t2"),gates:o(4*i,"fno.gates"),hidden:o(2*i,"fno.hidden"),spectral:o(i,"fno.spectral"),local:o(i,"fno.local"),wide:o(2*i,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:s(this.patch*this.modes2,"fno.xRe"),xIm:s(this.patch*this.modes2,"fno.xIm"),yRe:s(a*this.modes2,"fno.yRe"),yIm:s(a*this.modes2,"fno.yIm"),zRe:s(a*this.modes2,"fno.zRe"),zIm:s(a*this.modes2,"fno.zIm"),wRe:s(this.patch*this.modes2,"fno.wRe"),wIm:s(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const n=this.patch*this.patch,r=this.width,i=2*this.modes1,a=this.inputChannels+5*r+4*r+2*r+2*r+this.outputChannels,o=r*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(a*n*this.elementBytes+o)}encode(e,n){const{context:r,buffers:i,pipelines:a,tables:o}=this,s=this.width,l=this.patch*this.patch,c=2*this.modes1,u=e.beginComputePass(),d=(h,g,m,x,p=256)=>{r.dispatch(u,h,[...g,r.uniform(m)],x,p)},f=(h,g,m=a.instanceNorm)=>{u.setPipeline(m),u.setBindGroup(0,r.device.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:g}}]})),u.dispatchWorkgroups(n*s)};d(a.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",n],["u",this.inputChannels],["u",2*s],["u",1]],n*2*s*l),d(a.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",n],["u",2*s],["u",s],["u",0]],n*s*l);for(let h=0;h<this.layers;h++)f(i.x,i.t1),d(a.forwardColumns,[i.t1,o.forwardCos,o.forwardSin,i.xRe,i.xIm],[["u",n],["u",s],["u",0],["u",0]],n*s*this.patch*this.modes2),d(a.rowMix,[i.xRe,i.xIm,o.rowRe,o.rowIm,i.yRe,i.yIm],[["u",n],["u",s],["u",c],["u",this.patch]],n*s*c*this.modes2),d(a.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",n],["u",s],["u",2*h],["u",0]],n*s*c*this.modes2),d(a.rowMix,[i.zRe,i.zIm,o.inverseRowRe,o.inverseRowIm,i.wRe,i.wIm],[["u",n],["u",s],["u",this.patch],["u",c]],n*s*this.patch*this.modes2),d(a.inverseColumns,[i.wRe,i.wIm,o.inverseColCos,o.inverseColSin,i.t2],[["u",n],["u",s],["u",0],["u",0]],n*s*l),f(i.t2,i.t1,a.instanceNormScaled),d(a.conv1x1,[i.t1,this.weights[`m1w${h}`],this.weights[`m1b${h}`],i.gates],[["u",n],["u",s],["u",4*s],["u",0]],n*4*s*l),d(a.gate,[i.gates,i.hidden],[["u",n],["u",2*s],["u",0],["u",0]],n*2*s*l),d(a.conv1x1,[i.hidden,this.weights[`m2w${h}`],this.weights[`m2b${h}`],i.spectral],[["u",n],["u",2*s],["u",s],["u",0]],n*s*l),d(a.conv1x1,[i.x,this.weights[`lw${h}`],this.weights[`lb${h}`],i.local],[["u",n],["u",s],["u",s],["u",0]],n*s*l),d(a.residual,[i.spectral,i.local,i.x],[["u",n*s*l],["u",h<this.layers-1?1:0],["u",0],["u",0]],n*s*l);return d(a.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",n],["u",s],["u",2*s],["u",1]],n*2*s*l),d(a.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",n],["u",2*s],["u",this.outputChannels],["u",0]],n*this.outputChannels*l),u.end(),i.output}destroy(){const{context:e}=this;for(const n of Object.values(this.buffers))e.free(n);for(const n of Object.values(this.weights))e.free(n);for(const n of Object.values(this.tables))e.free(n);e.free(this.spectralRe),e.free(this.spectralIm)}}const Ci=t=>t.toFixed(6),Fi=t=>`${t==="f16"?`enable f16;
`:""}
struct P {
  gridH: u32, gridW: u32, patchSize: u32, channels: u32,
  columnCount: u32, patchCount: u32, readyCount: u32, pad0: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  columnStride: f32, minimumWeight: f32, pad1: f32, pad2: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${t}>;
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
}`,Bi=`
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
                      / ${Ci(Ae)});
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
}`;function Ii(t,e){if(!t)return e;if(!e)return t;const n=Math.min(t.y0,e.y0),r=Math.min(t.x0,e.x0);return{y0:n,x0:r,h:Math.max(t.y0+t.h,e.y0+e.h)-n,w:Math.max(t.x0+t.w,e.x0+e.w)-r}}function Ai(t,e,n){let r=1/0,i=-1/0;const a=o=>{r=Math.min(r,o),i=Math.max(i,o)};for(let o=0;o<4;o++){const s=t[o],l=t[(o+1)%4];s[1]>=e&&s[1]<=n&&a(s[0]);for(const c of[e,n])if((s[1]-c)*(l[1]-c)<0){const u=(c-s[1])/(l[1]-s[1]);a(s[0]+u*(l[0]-s[0]))}}return r<=i?[r,i]:null}class Ei{constructor(e,n,r,i={}){this.context=e,this.metadata=n,this.patch=n.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-n.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new Pi(e,n,r,this.batchSize),this.blendPipeline=e.pipeline(Fi(this.fno.store)),this.finalizePipeline=e.pipeline(Bi),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:n}=this,r=n.features,i=n.mddf.channels_per_signal,a=n.mddf.modes_per_signal,o=r.mddf_source_indices,s=new Uint32Array(o.length*4),l=new Float32Array(o.length*2);o.forEach((u,d)=>{const f=Math.floor(u/i),h=u%i,g=h>a?1:0,m=h===0?0:g?h-a:h;s.set([f*i+m,f*i+(m===0?0:a+m),m,g],d*4),l[d*2]=r.mddf_center[d],l[d*2+1]=r.mddf_scale[d]});const c=n.coordinates;return{channels:n.model.input_channels,mddfChannels:o.length,solidChannel:r.use_building_input?o.length:-1,coordChannel:o.length+(r.use_building_input?1:0),coordYScale:c.y_scale,coordZCentre:c.z_center,coordZScale:c.z_scale,coordXCentre:c.x_center,coordXScale:c.x_scale,tableBuffer:e.upload(s,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,n,r){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),a=(n+2*i)*(r+2*i)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(a>o)throw new Error(`city ${r} x ${n} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const s=new _i(this.context,e,n,r,i,this.fno.store);return this.city={field:s,ny:n,nx:r,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:s.gy,gx:s.gx}}async setHeight(e,n={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,n),this.city.layerIndex=e,!0)}tiling(e){const{ny:n,nx:r}=this.city,i=(n-1)/2,a=(r-1)/2,o=Math.cos(e),s=Math.sin(e),l=[[0,0],[r-1,0],[r-1,n-1],[0,n-1]].map(([y,v])=>{const M=y-a,C=v-i;return[a+M*o+C*s,i-M*s+C*o]}),c=Math.floor(Math.min(...l.map(y=>y[1]))),u=Math.ceil(Math.max(...l.map(y=>y[1]))),d=Math.floor(Math.min(...l.map(y=>y[0]))),f=Math.ceil(Math.max(...l.map(y=>y[0]))),h=f-d+1,g=Math.max(1,Math.ceil((h-this.patch)/this.stride)+1),m=g>1?(h-this.patch)/(g-1):0,x=l.map(([y,v])=>[v,y]),p=[],w=[];for(let y=0;y<g;y++){const v=Math.round(d+y*m),M=Ai(x,v,v+this.patch-1)||[c,c+this.patch-1],C=Math.floor(M[0]),S=Math.max(this.patch,Math.ceil(M[1])-C+1),k=Math.max(1,Math.ceil((S-this.patch)/this.stride)+1),B=k>1?(S-this.patch)/(k-1):0;w.push([p.length/2,k,v-d]);for(let I=0;I<k;I++)p.push(v,Math.round(C+I*B))}return{origins:new Float32Array(p),columns:w,columnCount:g,columnStride:m,syMin:c,sxMin:d,gridH:u-c+1,gridW:f-d+1,patchCount:p.length/2}}patchRect(e,n,r){let i=1/0,a=1/0,o=-1/0,s=-1/0;for(const[l,c,u]of e.columns)for(let d=0;d<c;d++){const f=l+d;if(f<n||f>=r)continue;const h=e.origins[f*2+1]-e.syMin;i=Math.min(i,h),a=Math.min(a,u),o=Math.max(o,h+this.patch),s=Math.max(s,u+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),a=Math.max(0,a),o=Math.min(e.gridH,o),s=Math.min(e.gridW,s),{y0:i,x0:a,h:Math.max(0,o-i),w:Math.max(0,s-a)}):null}async predict(e,n={}){var K,W,te;const{context:r,city:i}=this,a=this.tiling(e),o=this.metadata.model.output_channels,s=a.gridH*a.gridW,l=this.patch*this.patch,c=performance.now(),u=!!(n.shouldDraw&&n.onDraw),d=o+2,f=r.storage(a.patchCount*o*l*this.fno.elementBytes,"predict.patches"),h=new Int32Array(a.patchCount);for(let R=0;R<a.patchCount;R++)h[R]=a.origins[R*2+1]-a.syMin;const g=r.upload(h,"blend.origins"),m=r.upload(new Int32Array(a.columns.flat()),"blend.columns"),x=r.storage(s*o*4,"blend.field"),p=r.storage(s*4,"blend.weight"),w=r.storage(s*4,"blend.solid"),y=r.storage(u?s*4:4,"blend.finalWeight"),v=r.storage(u?s*d*4:4,"blend.packed"),M=this.metadata.target,C=r.upload(new Float32Array(M.center),"final.centre"),S=r.upload(new Float32Array(M.scale),"final.scale"),k={y0:0,x0:0,h:a.gridH,w:a.gridW},B=(R,T,j,he)=>{const _e=R.beginComputePass();r.dispatch(_e,this.blendPipeline,[f,g,m,x,he,r.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",o],["u",a.columnCount],["u",a.patchCount],["u",j],["u",0],["u",T.y0],["u",T.x0],["u",T.h],["u",T.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],T.h*T.w),_e.end()},I=(R,T,j)=>{const he=R.beginComputePass();r.dispatch(he,this.finalizePipeline,[x,p,C,S,i.field.heightBuffer,w,y,v,r.uniform([["u",a.gridH],["u",a.gridW],["u",o],["u",j?1:0],["u",T.y0],["u",T.x0],["u",T.h],["u",T.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],T.h*T.w),he.end()};if(u){const R=r.device.createCommandEncoder();B(R,k,a.patchCount,y),r.device.queue.submit([R.finish()]),(K=n.onStart)==null||K.call(n,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const L=2,O=[];let D=null;for(let R=0;R<a.patchCount;R+=this.batchSize){(W=n.signal)==null||W.throwIfAborted();const T=Math.min(this.batchSize,a.patchCount-R),j=r.device.createCommandEncoder(),he=i.field.assemble(j,a.origins.subarray(R*2,(R+T)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),_e=this.fno.encode(j,T);j.copyBufferToBuffer(_e,0,f,R*o*l*this.fno.elementBytes,T*o*l*this.fno.elementBytes);let re=null;if(u){D=Ii(D,this.patchRect(a,R,R+T));const Te=R+T>=a.patchCount;D&&D.h>0&&D.w>0&&(Te||n.shouldDraw())&&(re=D,D=null,B(j,re,R+T,p),I(j,re,!0))}if(r.device.queue.submit([j.finish()]),r.free(he),O.push(r.device.queue.onSubmittedWorkDone()),O.length>L&&await O.shift(),(te=n.onProgress)==null||te.call(n,(R+T)/a.patchCount),re){const Te=await r.readFloat32(v,re.h*re.w*d);n.onDraw({x0:re.x0,y0:re.y0,width:re.w,height:re.h,stride:d,channels:o,theta:e,values:Te,readyCount:R+T,patchCount:a.patchCount})}}const _=r.device.createCommandEncoder();B(_,k,a.patchCount,p),I(_,k,!1),r.device.queue.submit([_.finish()]);const[P,F,H]=await Promise.all([r.readFloat32(x,s*o),r.readFloat32(w,s),r.readFloat32(p,s)]),Y=performance.now()-c;let ee=0,V=0;for(let R=0;R<s;R++)if(F[R]!==2){if(H[R]<=1e-6){ee+=1;continue}for(let T=0;T<o;T++)if(!Number.isFinite(P[R*o+T])){V+=1;break}}for(const R of[f,x,p,w,g,m,C,S,y,v])r.free(R);return r.releaseScratch(),{values:P,solid:F,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:M.channel_names,milliseconds:Y,uncovered:ee,nonFinite:V,insideCells:s}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}}function $i(t,e){var n,r,i,a,o,s,l,c,u;if(t.dtype!=="float16"||t.total_bytes!==e||((n=t.grid)==null?void 0:n.horizontal_spacing_m)!==4||((r=t.grid)==null?void 0:r.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=t.model)==null?void 0:i.input_channels)!==24||((a=t.model)==null?void 0:a.output_channels)!==5||((s=(o=t.inference)==null?void 0:o.patch)==null?void 0:s.join())!=="64,64"||((c=(l=t.target)==null?void 0:l.channel_names)==null?void 0:c.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const d of Object.values(t.tensors??{}))if(!Number.isInteger(d.offset)||d.offset<0||d.offset%2||!Number.isInteger(d.count)||d.count<=0||d.offset+d.count*2>e||!Array.isArray(d.shape)||d.shape.some(f=>!Number.isInteger(f)||f<1)||d.shape.reduce((f,h)=>f*h,1)!==d.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(t.tensors??{}).length||!Number.isFinite((u=t.wind)==null?void 0:u.reference_speed_m_s)||t.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function Di(t){if(!Number.isInteger(t.width)||!Number.isInteger(t.height)||t.width<1||t.height<1||t.values.length!==t.width*t.height*5||t.solid.length!==t.width*t.height)throw new Error("Invalid prediction shape.");for(let e=0;e<t.solid.length;e++)for(let n=0;n<5;n++)Number.isFinite(t.values[e*5+n])||(t.solid[e]=2,t.values[e*5+n]=0)}const Q=5,Ri=2,Vi=4,Li=.9,zi=159,Ti=30,Ni=1.2,Ui=512*1024*1024;function Oi(t){var n;const e=Math.max(Ti,Ni*(((n=t.statistics)==null?void 0:n.maximumHeightM)??0));return Math.max(0,Math.min(zi,Math.round(e/J-.5)))}function Hi(t){const e=t.layers.filter(n=>n>0).sort();return e.length?e[Math.floor(Li*(e.length-1))]:0}function Wi(t,e=t){const n=[];for(let r=0;r<t;r+=r<e?Ri:Vi)n.push(r);return n.push(t),n}const Gt=t=>Wi(Oi(t),Hi(t)),Zt=5;function kt(t,e=Zt){const n=t.length,r=Math.min(e,n),i=new Set;for(let o=0;o<r;o++)i.add(Math.round(o*(n-1)/Math.max(1,r-1)));const a=[...i].sort((o,s)=>o-s);for(;a.length<n;){const o=[...a].sort((l,c)=>l-c);let s=0;for(let l=1;l+1<o.length;l++)o[l+1]-o[l]>o[s+1]-o[s]&&(s=l);a.push(Math.floor((o[s]+o[s+1])/2))}return a.map(o=>t[o])}function Xi(t,e,n=Ui){const r=e*(Q*4+1),i=Math.max(2,Math.floor(n/r));if(t.length<=i)return t;const a=(t.length-1)/(i-1);return Array.from({length:i},(o,s)=>t[Math.round(s*a)])}function Yi(t,e,n=!0){const r=t.width*t.height;return{width:t.width,height:t.height,originX:t.originX,originY:t.originY,theta:t.theta,plan:[...e],layers:n?[...e]:[],slots:n?e.map((i,a)=>a):[],values:new Float32Array(e.length*r*Q),solid:new Uint8Array(e.length*r)}}function ji(t,e,n){if(n.width!==t.width||n.height!==t.height||n.originX!==t.originX)throw new Error("Wind layers do not share one wind-frame grid.");const r=t.width*t.height;if(t.values.set(n.values,e*r*Q),t.solid.set(n.solid,e*r),t.slots.includes(e))return;const i=t.plan[e];let a=0;for(;a<t.layers.length&&t.layers[a]<i;)a++;t.layers.splice(a,0,i),t.slots.splice(a,0,e)}function qi(t,e){const n=t.width*t.height,r=t.slots[e];return{values:t.values.subarray(r*n*Q,(r+1)*n*Q),solid:t.solid.subarray(r*n,(r+1)*n)}}function it(t,e){const n=e/J-.5,{layers:r}=t;if(n<=r[0])return{k0:0,k1:0,f:0};const i=r.length-1;if(n>=r[i])return{k0:i,k1:i,f:0};let a=1;for(;r[a]<n;)a++;const o=a-1;return{k0:o,k1:a,f:(n-r[o])/(r[a]-r[o])}}const rt=t=>(t.layers.at(-1)+.5)*J;function Gi(t,e){const{k0:n,k1:r,f:i}=it(t,e),a=t.width*t.height,o=a*Q,s=new Float32Array(o),l=t.slots[n]*o,c=t.slots[r]*o;for(let d=0;d<o;d++)s[d]=t.values[l+d]*(1-i)+t.values[c+d]*i;const u=t.slots[i<.5?n:r];return{values:s,solid:t.solid.slice(u*a,(u+1)*a),width:t.width,height:t.height,originX:t.originX,originY:t.originY,theta:t.theta}}function Jt(t,e,n,r,i){const a=(e-1)/2,o=(n-1)/2,s=r/E-.5-a,l=i/E-.5-o,c=Math.cos(t.theta),u=Math.sin(t.theta);return[s*c+l*u+a-t.originX,-s*u+l*c+o-t.originY]}function Zi(t,e,n,r,i,a,o){const[s,l]=Jt(t,e,n,r,i),{width:c,height:u}=t;if(!(s>=0&&l>=0&&s<=c-1&&l<=u-1))return null;const d=Math.min(c-2,Math.floor(s)),f=Math.min(u-2,Math.floor(l)),h=c>1?s-d:0,g=u>1?l-f:0,{k0:m,k1:x,f:p}=it(t,a),w=c*u;for(let y=0;y<Q;y++)o[y]=0;for(const[y,v]of[[m,1-p],[x,p]])if(v!==0)for(const[M,C]of[[0,1-g],[1,g]])for(const[S,k]of[[0,1-h],[1,h]]){const B=v*C*k;if(B===0)continue;const I=(t.slots[y]*w+Math.min(u-1,f+M)*c+Math.min(c-1,d+S))*Q;for(let L=0;L<Q;L++)o[L]+=t.values[I+L]*B}return o}function Ji(t,e,n){const r=Math.cos(e),i=Math.sin(e);return n[0]=t[0]*r-t[2]*i,n[1]=t[0]*i+t[2]*r,n[2]=t[1],n}function Ki(t,e,n,r){const i=Math.floor(e/E),a=Math.floor(n/E);return i<0||a<0||i>=t.nx||a>=t.ny?!0:r<t.layers[a*t.nx+i]*J}function Kt(t,e){const n=Math.max(J/2,Math.min(rt(t),Number(e)||0)),r=Math.max(0,Math.round(n/J-.5));return{...Gi(t,n),grid:t.grid,settings:{...t.settings,heightM:n,layerIndex:r},referenceSpeed:t.referenceSpeed,colorbar:t.colorbar,modelLabel:t.modelLabel,patchCount:t.patchCount,milliseconds:t.milliseconds}}function Qi(t,e){const n=Math.round((t.height-1)/2+Number(e)/E);return Math.max(0,Math.min(t.height-1,n))}function er(t){const{nx:e,ny:n}=t.grid,i=[[0,0],[e,0],[0,n],[e,n]].map(([l,c])=>Jt(t,e,n,l*E,c*E)[1]),a=(t.height-1)/2,o=Math.max(0,Math.min(...i))-a,s=Math.min(t.height-1,Math.max(...i))-a;return[Math.ceil(o)*E,Math.floor(s)*E]}function tr(t,e){const{width:n}=t,r=t.width*t.height,i=t.layers.at(-1)+1,a=new Float32Array(n*i*Q),o=new Uint8Array(n*i);for(let s=0;s<i;s++){const{k0:l,k1:c,f:u}=it(t,(s+.5)*J),d=t.slots[u<.5?l:c];for(let f=0;f<n;f++){const h=e*n+f,g=(t.slots[l]*r+h)*Q,m=(t.slots[c]*r+h)*Q,x=(s*n+f)*Q;for(let p=0;p<Q;p++)a[x+p]=t.values[g+p]*(1-u)+t.values[m+p]*u;o[s*n+f]=t.solid[d*r+h]}}return{values:a,solid:o,width:n,height:i}}const nr=32;function ir(){const t=Ke({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,n=null,r=null,i=null,a=null,o=!1,s=0;const l=new AbortController;function c(){try{n==null||n.destroy()}finally{e==null||e.device.destroy(),n=null,e=null,a=null}}async function u(){if(n)return;t.stage="Loading model";const x="/cityffdv2-demo/flume/",[p,w,y]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async v=>{const M=await fetch(x+v,{signal:l.signal});if(!M.ok)throw new Error("Could not load "+v+" (HTTP "+M.status+").");return v.endsWith(".bin")?M.arrayBuffer():M.json()}));$i(p,w.byteLength),l.signal.throwIfAborted(),e=await tt.create(),l.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",v=>{t.error="WebGPU: "+v.error.message.split(`
`)[0]}),e.device.lost.then(v=>{!o&&v.reason!=="destroyed"&&(t.error="GPU device lost. Run again to initialize a new session.",t.prediction=null,n=null,e=null,a=null)}),r=p,i=y,n=new Ei(e,r,w,{batchSize:nr})}async function d(x,p){if(o||t.busy||t.downloading)return null;t.busy=!0,t.error="",t.progress=0;const w=++s,y=()=>o||w!==s;try{if(await u(),y())return null;x!==a&&(n.setCity(x.layers,x.ny,x.nx),a=x);const v=performance.now(),M=(D,_)=>{const P={...D,grid:x,settings:{...p,layers:_},referenceSpeed:r.wind.reference_speed_m_s,modelLabel:r.label,colorbar:i,patchCount:I,milliseconds:performance.now()-v,inputRevision:w};return t.prediction=ye(P),t.layersReady=D.layers.length,P};let C=[...p.layers],S=kt(C),k=null,B=null,I=0;const L=D=>({signal:l.signal,onProgress:_=>{y()||(t.progress=(D+_*.3)/S.length)}});let O=n.setHeight(S[0],L(0));for(let D=0;D<S.length;D++){if(t.stage="Predicting 3D wind · layer "+(D+1)+" / "+S.length,await O,y())return null;const _=await n.predict(p.thetaRad,{signal:l.signal,onProgress:P=>{y()||(t.progress=(D+.3+P*.7)/S.length)}});if(l.signal.throwIfAborted(),y())return null;if(t.error)throw new Error(t.error);k||(C=Xi(C,_.width*_.height),S=kt(C),k=Yi(_,C,!1)),O=D+1<S.length?n.setHeight(S[D+1],L(D+1)):null,O==null||O.catch(()=>{}),Di(_),I=_.patchCount??I,ji(k,C.indexOf(S[D]),_),B?(B.milliseconds=performance.now()-v,t.layersReady=k.layers.length):D+1>=Math.min(Zt,S.length)&&(B=M(k,C))}return t.progress=1,t.stage="Prediction ready",B}catch(v){return!o&&w===s&&(t.error=v.message,t.stage="Prediction failed",t.prediction=null),c(),null}finally{o?c():t.busy=!1}}async function f(x){if(!n||!t.prediction||t.busy||t.downloading)throw new Error("Run a valid prediction before downloading MDDF.");t.downloading=!0;try{Number.isInteger(x)&&await n.setHeight(x,{signal:l.signal});const p=n.city.field,w=await e.readFloat32(p.fieldBuffer,p.gy*p.gx*28);if(o)throw new Error("The page was closed.");return{values:w,ny:p.gy,nx:p.gx,margin:p.margin,layerIndex:n.city.layerIndex}}finally{t.downloading=!1,o&&c()}}function h(){t.busy&&s++}function g(){s++,t.prediction=null,t.layersReady=0,t.error="",t.progress=0,t.stage="Ready"}function m(){o=!0,s++,l.abort(),!t.busy&&!t.downloading&&c()}return Je(m),{state:t,run:d,readMddf:f,cancel:h,invalidate:g,dispose:m}}const le="flume-retained-buildings",Pt="flume-retained-selected";function rr(t,e){let n=null,r=null,i=null,a=null,o=null;function s(){if(n){t.getSource(le)?i!==a&&t.getSource(le).setData(i):t.addSource(le,{type:"geojson",data:i,maxzoom:22,tolerance:0}),a=i;for(const[f,h]of[[le,!1],[Pt,!0]]){const g=n.filters[h?"selected":"surroundings"],m=h?1:n.surroundingsOpacity;t.getLayer(f)?t.setFilter(f,g):t.addLayer({id:f,type:"fill-extrusion",source:le,maxzoom:ve,filter:g,layout:{visibility:"visible"},paint:{"fill-extrusion-color":h?ne().selectedBuildings:ne().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":m}}),t.setPaintProperty(f,"fill-extrusion-opacity",m),t.setLayoutProperty(f,"visibility",h||n.showSurroundings?"visible":"none")}}}function l(){if(!(!n||t.getZoom()<ve||!t.getSource(n.sourceId)||!t.isSourceLoaded(n.sourceId)))try{const f=t.querySourceFeatures(n.sourceId,{sourceLayer:n.sourceLayer}).filter(h=>!h.tile||h.tile.z>=(n.dataZoom??ve));i=Ie([...i.features,...f]),s()}catch(f){e==null||e(f)}}function c(f){!n||f!=null&&f.sourceId&&f.sourceId!==n.sourceId||(clearTimeout(o),o=setTimeout(l,120))}function u(f){var h;(r!==f.collection||(n==null?void 0:n.sourceId)!==f.sourceId||(n==null?void 0:n.sourceLayer)!==f.sourceLayer)&&(i=Ie(((h=f.collection)==null?void 0:h.features)??[]),r=f.collection),n=f,s(),c()}function d(){clearTimeout(o),n=null,r=null,i=null,a=null;for(const f of[Pt,le])t.getLayer(f)&&t.removeLayer(f);t.getSource(le)&&t.removeSource(le)}return t.on("sourcedata",c),t.on("moveend",c),{update:u,clear:d,dispose(){t.off("sourcedata",c),t.off("moveend",c),d()}}}const Qt={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},He=new Map;function ar(t){if(!He.has(t)){const e=Qt[t],n=new Uint8Array(256*3);for(let r=0;r<256*3;r++)n[r]=parseInt(e.substr(r*2,2),16);He.set(t,n)}return He.get(t)}function or(t,e){const n=ar(Qt[t]?t:"viridis"),r=Math.min(1,Math.max(0,e))*255,i=Math.floor(r),a=Math.min(255,i+1),o=r-i;return[n[i*3]*(1-o)+n[a*3]*o,n[i*3+1]*(1-o)+n[a*3+1]*o,n[i*3+2]*(1-o)+n[a*3+2]*o]}const sr=1,lr=new Set(["u","v","w"]),cr=6e4,Ee=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis"},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno"},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],me={u:0,w:1,v:2,T:3,tke:4};function en(t,e,n,r){return tn(t.values,e*5,n,r)}function tn(t,e,n,r){const i=t[e+me.u]*r,a=t[e+me.v]*r;switch(n){case"u":return i;case"v":return a;case"w":return t[e+me.w]*r;case"speed":{const o=t[e+me.w]*r;return Math.sqrt(i*i+a*a+o*o)}case"T":return t[e+me.T];case"tke":return t[e+me.tke]*r*r;default:return 0}}function ur(t,e,n,r,i){if(e==="T")return t.fixed.T.slice();const o=(t.quantiles[r]||t.quantiles[Object.keys(t.quantiles)[0]])[e],s=Math.min(o.length-1,Math.max(0,Math.round(n))),l=o[s]*(e==="tke"?i*i:i);return t.shape[e]==="symmetric"?[-l,l]:[0,l]}function nn(t,e){return or(t,e)}function dr(t,e){const n=t.solid.length,r=new Float32Array(n*4);for(let i=0;i<n;i++){const a=i*4;r[a]=en(t,i,e,1),r[a+1]=sr}return Yt(r)}function fr(t){const e=new Uint8Array(1024);for(let n=0;n<256;n++){const[r,i,a]=nn(t,n/255);e[n*4]=r,e[n*4+1]=i,e[n*4+2]=a,e[n*4+3]=255}return e}function hr(t,e,n){if(e==="T")return null;const r=e,i=t.solid.length,a=Math.max(1,Math.floor(i/cr)),o=lr.has(r),s=[];for(let u=0;u<i;u+=a){const d=en(t,u,r,1);s.push(o?Math.abs(d):d)}if(s.length<32)return null;s.sort((u,d)=>u-d);const l=Math.min(s.length-1,Math.floor(s.length*(Number(n)/100))),c=s[l];return c>0?o?[-c,c]:[0,c]:null}function Ze(t,e,n){const r=(t.grid.nx-1)/2,i=(t.grid.ny-1)/2,a=t.originX+e-r,o=t.originY+n-i,s=Math.cos(t.theta),l=Math.sin(t.theta);return[(r+a*s-o*l+.5)*4,(i+a*l+o*s+.5)*4]}function rn(t){const e=t.values.slice(),n=t.settings.speedMps/t.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=n,e[r+1]*=n,e[r+2]*=n,e[r+4]*=n*n;return e}const We=J/2;function gr(t){const{grid:e,theta:n}=t,r=rt(t),i=new Float32Array(5),a=(s,l,c)=>Zi(t,e.nx,e.ny,s,l,c,i)!==null,o={plane:null,variable:"speed",wind(s,l,c,u){var d,f;return a(s,l,c)?(Ji(i,n,u),(d=o.plane)!=null&&d.flat&&o.plane.kind==="h"&&(u[2]=0),(f=o.plane)!=null&&f.flat&&o.plane.kind==="v"&&(u[0]=i[0]*Math.cos(n),u[1]=i[0]*Math.sin(n)),!0):!1},inside:(s,l,c)=>c>=We&&c<=r&&!Ki(e,s,l,c)&&a(s,l,c),value:()=>tn(i,0,o.variable,1),valueAt:(s,l,c)=>a(s,l,c)?o.value():0,spawn(s,l){var c,u;for(let d=0;d<20;d++){if(l[0]=s()*e.nx*E,l[1]=s()*e.ny*E,l[2]=We+s()**2*(r-We),((c=o.plane)==null?void 0:c.kind)==="h"&&(l[2]=o.plane.z),((u=o.plane)==null?void 0:u.kind)==="v"){const[f,h]=Ze(t,s()*(t.width-1),o.plane.row);l[0]=f,l[1]=h}if(o.inside(l[0],l[1],l[2]))return}}};return o}const pr=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,mr=8,yr=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function br(t,e,n){let r,i,a,o,s,l,c,u,d,f,h,g="",m=0;const x=new ot,p=new ot,w=It.MercatorCoordinate.fromLngLat(t.grid.origin),y=w.meterInMercatorCoordinateUnits(),[v,M]=Ze(t,t.width/2-.5,t.height/2-.5),C=[new Se(new ie(1,0,0),0),new Se(new ie(-1,0,0),t.grid.nx*E),new Se(new ie(0,1,0),0),new Se(new ie(0,-1,0),t.grid.ny*E)],S=()=>Number(e.speedMps)/t.referenceSpeed,k=new Map;function B(L){if(!k.has(L)){const O=t.layers.length,D=Math.min(mr,O);let _=null;for(let P=0;P<D;P++){const F=hr(qi(t,Math.round(P*(O-1)/Math.max(1,D-1))),L,"99.9");F&&(_=_?[Math.min(_[0],F[0]),Math.max(_[1],F[1])]:F)}k.set(L,_)}return k.get(L)}function I(){var K;if(!i)return;const L=Ee.find(W=>W.id===e.variable)??Ee[0],O=S(),D=L.id==="T"?1:L.id==="tke"?O*O:O,_=((K=B(L.id))==null?void 0:K.map(W=>W*D))??ur(t.colorbar,L.id,t.settings.layers.at(-1),"99.9",O);f==null||f.dispose(),f=new st(fr(L.ramp),256,1,lt),f.colorSpace=En,f.minFilter=f.magFilter=ct,f.needsUpdate=!0;const P=e.plane==="3d"?"h":e.plane,F=Qi(t,e.planeOffsetM),H=e.view==="slice"||e.view==="particles"&&e.particles==="white";s.visible=H&&P==="h",l.visible=H&&P==="v";const Y=L.id+"@"+(P==="v"?"v"+F:e.sliceHeightM);if(H&&Y!==g){let W;if(P==="v"){W=tr(t,F);const[te,R]=Ze(t,(t.width-1)/2,F);l.position.set(te,R,W.height*J/2)}else W=Kt(t,Number(e.sliceHeightM)),s.position.z=W.settings.heightM;d==null||d.dispose(),d=new st(dr(W,L.id),W.width,W.height,lt,$n),d.minFilter=d.magFilter=ct,d.needsUpdate=!0,g=Y}h.uniforms.field.value=d??null,h.uniforms.palette.value=f,h.uniforms.range.value.set(..._),u.enabled=e.view==="particles",u.mesh.visible=u.enabled;const ee=e.particles==="white",V=ee?P:e.plane;V==="h"?u.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:ee}):V==="v"?u.setPlane({kind:"v",row:F,flat:ee}):u.setPlane(null),u.setCount(gt[e.density]??gt.medium),u.setColouring(e.particles,L.id,f,_),n==null||n({low:_[0],high:_[1],...L}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:I,refresh(){g="",I()},onAdd(L,O){r=L,a=new Fn,o=new Bn,i=new In({canvas:r.getCanvas(),context:O,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,h=new At({vertexShader:pr,fragmentShader:yr,uniforms:{field:{value:null},palette:{value:null},range:{value:new $t(0,1)}},transparent:!0,depthWrite:!1,side:Et,clipping:!0,clippingPlanes:C}),s=new Be(new Ye(t.width*E,t.height*E),h),s.position.set(v,M,0),s.rotation.z=t.theta,s.frustumCulled=!1,a.add(s);const D=new Ye(t.width*E,(t.layers.at(-1)+1)*J);D.rotateX(Math.PI/2),l=new Be(D,h),l.rotation.z=t.theta,l.frustumCulled=!1,a.add(l),u=new An(gr(t)),a.add(u.mesh),c=wr(t.grid,.5),c&&a.add(c),I()},render(L,O){const D=performance.now(),_=Math.min(m?(D-m)/1e3:0,.05);m=D,x.makeTranslation(w.x,w.y,w.z).scale(new ie(y,-y,y)),o.projectionMatrix.copy(p.fromArray(O)).multiply(x),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),u.setViewport(L.drawingBufferWidth,L.drawingBufferHeight);const P=u.enabled&&!e.paused;P&&u.step(_,S()),i.resetState(),i.setViewport(0,0,L.drawingBufferWidth,L.drawingBufferHeight),i.render(a,o),P&&r.triggerRepaint()},onRemove(){d==null||d.dispose(),f==null||f.dispose(),s==null||s.geometry.dispose(),l==null||l.geometry.dispose(),h==null||h.dispose(),u==null||u.dispose(),c==null||c.geometry.dispose(),c==null||c.material.dispose(),i==null||i.dispose(),r=null,i=null}}}function wr(t,e){if(!t.mainDomain)return null;const n=Ve(t.origin),r=[...n(t.mainDomain.bounds.slice(0,2)),...n(t.mainDomain.bounds.slice(2,4))],i=new At({uniforms:{extent:{value:new $t(t.nx*E,t.ny*E)},mainBounds:{value:new Dn(...r)},mainColour:{value:new ut(ne().mainArea)},bufferColour:{value:new ut(ne().bufferArea)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:Et}),a=new Be(new Ye(t.nx*E,t.ny*E),i);return a.name="flume-domain-overlay",a.position.set(t.nx*E/2,t.ny*E/2,e+.05),a.renderOrder=4,a.frustumCulled=!1,a}const Xe="flume-field",xe="flume-buildings";function an(t){return{"city-concordia-2d":!1,"city-concordia-3d":t==="concordia","city-osm-3d":t==="osm"}}function xr(t,e,n){let r=null,i=null;const a=new Map,o=rr(t,n);function s(){t.getLayer(Xe)&&t.removeLayer(Xe),r=null}function l(){for(const[d,f]of a)t!=null&&t.getLayer(d)&&(t.setLayoutProperty(d,"visibility",f.visibility),t.setPaintProperty(d,f.property,f.opacity),t.setFilter(d,f.filter),t.setLayerZoomRange(d,f.minzoom,f.maxzoom),f.color!==void 0&&t.setPaintProperty(d,"fill-extrusion-color",f.color));a.clear()}function c(d){for(const f of t.getStyle().layers){if(f.id.startsWith("flume-"))continue;const h=f.type==="fill-extrusion"?"fill-extrusion-opacity":f["source-layer"]==="building"&&["fill","line"].includes(f.type)?f.type+"-opacity":null;h&&(a.set(f.id,{visibility:t.getLayoutProperty(f.id,"visibility")??"visible",property:h,opacity:t.getPaintProperty(f.id,h)??1,filter:t.getFilter(f.id)??null,minzoom:f.minzoom??0,maxzoom:f.maxzoom??24,color:f.type==="fill-extrusion"?t.getPaintProperty(f.id,"fill-extrusion-color")??null:void 0}),t.setPaintProperty(f.id,h,ft),f.type==="fill-extrusion"&&t.setPaintProperty(f.id,"fill-extrusion-color",ne().previewBuildings),d||t.setLayoutProperty(f.id,"visibility","none"))}}function u({source:d,input:f,prediction:h,preview:g,display:m}){if(h!==i&&(s(),i=h),!h&&t.getLayer(xe)&&t.removeLayer(xe),l(),Rn(t,an(d)),!h){o.clear(),Ge(t,g);return}Ge(t,null);const x=Vn.find(w=>w.id===(d==="osm"?"city-osm-3d":"city-concordia-3d")),p=Tt(f.buildings.features,t.getFilter(x.id));c(m.showSurroundings),t.setFilter(x.id,p.surroundings),t.setLayerZoomRange(x.id,ve,x.layer.maxzoom??24),t.getLayer(xe)?t.setFilter(xe,p.selected):t.addLayer({...x.layer,id:xe,minzoom:ve,layout:{visibility:"visible"},filter:p.selected,paint:{...x.layer.paint,"fill-extrusion-color":ne().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:x.layer.source,sourceLayer:x.layer["source-layer"],collection:g,dataZoom:f.dataZoom,filters:p,surroundingsOpacity:ft,showSurroundings:m.showSurroundings}),t.getLayer(Xe)||(r=br(h,m,e),t.addLayer(r)),t.triggerRepaint()}return{update:u,configure(){r==null||r.configure()},refresh(){r==null||r.refresh()},beforeStyleChange(){s(),i=null,a.clear()},dispose(){s(),o.dispose(),a.clear()}}}function de(t,e,n,r,i){if(n.reduce((s,l)=>s*l,1)!==e.length)throw new Error("Invalid "+t+" shape.");const a=new Uint8Array(e.length*4),o=new DataView(a.buffer);for(let s=0;s<e.length;s++){if(!Number.isFinite(e[s]))throw new Error("Cannot export non-finite "+t);o.setFloat32(s*4,e[s],!0)}return{name:t,content:a,description:{dtype:"float32",shape:n,channels:r,unit:i}}}function on(t,e,n,r,i=null){var o,s,l;const a={schemaVersion:1,endianness:"little",order:"row-major",origin:t.origin,source:t.source,bounds:t.bounds,selection:((o=t.selection)==null?void 0:o.geometry)??((s=t.polygon)==null?void 0:s.geometry),computationalDomain:(l=t.polygon)==null?void 0:l.geometry,mainDomain:t.mainDomain,buffer:t.buffer,dataZoom:t.dataZoom,tileCount:t.tileCount,warnings:t.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",...r?{mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}}:{},...i?{volume:{layers:i.settings.layers,heightsM:i.settings.layers.map(c=>(c+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}}:{},files:Object.fromEntries(n.map(c=>[c.name,c.description]))};return[{name:"metadata.json",content:JSON.stringify(a,null,2)},...n.map(({name:c,content:u})=>({name:c,content:u}))]}function sn(t,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(i=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>i+"_"+a));return[de("mddf.f32.bin",e.values,[e.ny,e.nx,28],r,"m"),de("height_layers.f32.bin",t.grid.layers,[t.grid.ny,t.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function vr(t,e=!1){const n=rn(t),r=t.width*t.height,i=new Float32Array(r*3),a=new Float32Array(r),o=new Float32Array(r),s=new Float32Array(r);for(let l=0;l<r;l++){const c=l*5;i.set([n[c],n[c+2],n[c+1]],l*3),a[l]=n[c+3],o[l]=n[c+4],s[l]=Math.hypot(n[c],n[c+1],n[c+2])}return[de("velocity.f32.bin",i,[t.height,t.width,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(t.solid),description:{dtype:"uint8",shape:[t.height,t.width],values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},...e?[de("temperature.f32.bin",a,[t.height,t.width],["T"],"degC"),de("tke.f32.bin",o,[t.height,t.width],["TKE"],"m2/s2"),de("speed.f32.bin",s,[t.height,t.width],["speed"],"m/s")]:[]]}function _r(t){const e=t.width*t.height,n=t.settings.layers.length,r=rn(t),i=new Float32Array(n*e*3);for(let a=0;a<n*e;a++)i.set([r[a*5],r[a*5+2],r[a*5+1]],a*3);return[de("velocity3d.f32.bin",i,[n,t.height,t.width,3],["u","v","w"],"m/s")]}function Mr(t,e,n){return on(t,n,sn(n,e),e)}function Sr(t,e,n,r=null){const i=[...sn(n,e),...vr(n,!0),...r?_r(r):[],{name:"buildings.geojson",content:JSON.stringify(t.buildings),description:{format:"GeoJSON",crs:"WGS84"}}];return on(t,n,i,e,r)}class kr{parse(e,n={}){n=Object.assign({binary:!1},n);const r=n.binary,i=[];let a=0;e.traverse(function(p){if(p.isMesh){const w=p.geometry,y=w.index,v=w.getAttribute("position");a+=y!==null?y.count/3:v.count/3,i.push({object3d:p,geometry:w})}});let o,s=80;if(r===!0){const p=a*2+a*3*4*4+80+4,w=new ArrayBuffer(p);o=new DataView(w),o.setUint32(s,a,!0),s+=4}else o="",o+=`solid exported
`;const l=new ie,c=new ie,u=new ie,d=new ie,f=new ie,h=new ie;for(let p=0,w=i.length;p<w;p++){const y=i[p].object3d,v=i[p].geometry,M=v.index,C=v.getAttribute("position");if(M!==null)for(let S=0;S<M.count;S+=3){const k=M.getX(S+0),B=M.getX(S+1),I=M.getX(S+2);g(k,B,I,C,y)}else for(let S=0;S<C.count;S+=3){const k=S+0,B=S+1,I=S+2;g(k,B,I,C,y)}}return r===!1&&(o+=`endsolid exported
`),o;function g(p,w,y,v,M){l.fromBufferAttribute(v,p),c.fromBufferAttribute(v,w),u.fromBufferAttribute(v,y),M.isSkinnedMesh===!0&&(M.applyBoneTransform(p,l),M.applyBoneTransform(w,c),M.applyBoneTransform(y,u)),l.applyMatrix4(M.matrixWorld),c.applyMatrix4(M.matrixWorld),u.applyMatrix4(M.matrixWorld),m(l,c,u),x(l),x(c),x(u),r===!0?(o.setUint16(s,0,!0),s+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function m(p,w,y){d.subVectors(y,w),f.subVectors(p,w),d.cross(f).normalize(),h.copy(d).normalize(),r===!0?(o.setFloat32(s,h.x,!0),s+=4,o.setFloat32(s,h.y,!0),s+=4,o.setFloat32(s,h.z,!0),s+=4):(o+="	facet normal "+h.x+" "+h.y+" "+h.z+`
`,o+=`		outer loop
`)}function x(p){r===!0?(o.setFloat32(s,p.x,!0),s+=4,o.setFloat32(s,p.y,!0),s+=4,o.setFloat32(s,p.z,!0),s+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}async function Pr(t,e,n={}){var p,w;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((p=e.layers)==null?void 0:p.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:a,spacingM:o,layerSpacingM:s}=e,l=(y,v)=>y<0||v<0||y>=r||v>=i?0:a[v*r+y],c=async()=>{var y;if(await new Promise(v=>setTimeout(v,0)),(y=n.shouldCancel)!=null&&y.call(n))throw new Error("Model export cancelled.")};let u=0;for(let y=0;y<i;y++){y%32===0&&await c();for(let v=0;v<r;v++){const M=l(v,y);if(!Number.isInteger(M)||M<0||M>160)throw new Error("Invalid MDDF building height.");M&&(u+=2+ +(M>l(v-1,y))+ +(M>l(v+1,y))+ +(M>l(v,y-1))+ +(M>l(v,y+1)))}}if(!u)throw new Error("The selected MDDF model has no buildings to export.");const d=new Float32Array(u*18);let f=0;const h=(y,v,M,C)=>{for(const S of[y,v,M,y,M,C])d.set(S,f),f+=3};for(let y=0;y<i;y++){y%32===0&&await c();for(let v=0;v<r;v++){const M=l(v,y)*s;if(!M)continue;const C=v*o,S=C+o,k=-y*o,B=k-o;h([C,M,k],[S,M,k],[S,M,B],[C,M,B]),h([C,0,k],[C,0,B],[S,0,B],[S,0,k]);let I=l(v-1,y)*s;M>I&&h([C,I,B],[C,I,k],[C,M,k],[C,M,B]),I=l(v+1,y)*s,M>I&&h([S,I,k],[S,I,B],[S,M,B],[S,M,k]),I=l(v,y-1)*s,M>I&&h([C,I,k],[S,I,k],[S,M,k],[C,M,k]),I=l(v,y+1)*s,M>I&&h([S,I,B],[C,I,B],[C,M,B],[S,M,B])}}const g=new Ln;g.setAttribute("position",new zn(d,3));const m=new Be(g);let x;try{x=new kr().parse(m,{binary:!0}).buffer}finally{g.dispose(),m.material.dispose()}return[{name:"mddf-model.stl",content:x},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:t.source,origin:e.origin,mainDomain:t.mainDomain,computationalDomain:(w=t.polygon)==null?void 0:w.geometry,buffer:t.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:o,layerSpacingM:s,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:t.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:u*2}}},null,2)}]}const ln=Symbol("flume");function ze(){return un(ln)}function Cr(){const t="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=Fe(null),n=Fe(!1);let r=null,i=null,a=null,o=!1,s=null,l=!1;const c=()=>r,{currentPresetName:u}=Ct();pt(u.value);const d=Tn({getMap:c,accessToken:t}),f=fi({getMap:c,ready:n,onChange:p,accessToken:t}),h=ir(),g=Ke({mapCreated:!1,mapReady:n,error:"",area:f.state,grid:null,wind:{...dt},engine:h.state,display:{variable:"speed",speedMps:dt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:qn,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),m=q(()=>g.downloading||g.engine.downloading||g.area.loading),x=m;function p(){clearTimeout(s),s=null,l=!1,g.grid=null,g.legend=null,g.error="",g.downloadError="",h.invalidate(),M()}async function w(){if(x.value)return;const k=await f.captureRegion();if(!(!k||o))try{Tt(k.buildings.features),g.grid=ye(hi(k)),g.error="",y()}catch(B){g.error=B.message}}function y(){!g.grid||o||(clearTimeout(s),s=setTimeout(()=>{s=null,v()},jn))}async function v(){if(clearTimeout(s),s=null,!(o||!g.grid||m.value)){if(g.engine.busy){l=!0,h.cancel();return}try{const k={...gi(g.wind),layers:Gt(g.grid)};g.display.speedMps=k.speedMps,g.error="",await h.run(g.grid,k)}catch(k){g.error=k.message}l&&!o&&(l=!1,await v())}}function M(){!r||!n.value||i==null||i.update({source:g.area.source,input:g.area.snapshot,prediction:g.engine.prediction,preview:f.getPreview(),display:g.display})}async function C(k){if(!(m.value||!g.grid)&&!(k!=="model"&&(g.engine.busy||!g.engine.prediction))){g.downloading=!0,g.downloadError="";try{const B=g.area.snapshot;let I;if(k==="model")I=await Pr(B,g.grid,{shouldCancel:()=>o});else{const O=Number(g.display.speedMps);if(!Pe(O))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const D=g.engine.prediction,_={...D,settings:{...D.settings,speedMps:O}},P=Kt(_,g.display.sliceHeightM),F=await h.readMddf(P.settings.layerIndex);I=k==="mddf"?Mr(B,F,P):Sr(B,F,P,_)}const L=await On(I);o||Hn(L,"flume-"+k+".zip","application/zip")}catch(B){o||(g.downloadError=B.message)}finally{o||(g.downloading=!1)}}}se([()=>g.engine.prediction,()=>g.area.source,()=>g.display.showSurroundings],M),se(()=>g.engine.layersReady,()=>i==null?void 0:i.refresh()),se(()=>g.wind.directionDeg,()=>{g.grid&&y()}),se(()=>g.wind.speedMps,k=>{Pe(k)&&(g.display.speedMps=Number(k))}),se(()=>[g.display.variable,g.display.particles,g.display.density,g.display.speedMps,g.display.view,g.display.plane,g.display.sliceHeightM,g.display.planeOffsetM],()=>{Pe(g.display.speedMps)?(g.downloadError="",i==null||i.configure()):g.downloadError="Use a wind speed between 0.5 and 20 m/s."}),se(()=>g.display.paused,()=>r==null?void 0:r.triggerRepaint()),se(u,k=>pt(k)),se(d.mapStyle,k=>{r&&(f.beforeStyleChange(),n.value=!1,i==null||i.beforeStyleChange(),r.setStyle(k,{diff:!1}))}),cn(()=>{if(!(t!=null&&t.startsWith("pk."))){g.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new It.Map({container:e.value,accessToken:t,style:d.mapStyle.value,center:Wn,zoom:Xn,pitch:0,antialias:!0,attributionControl:!1}),i=xr(r,k=>{o||(g.legend=k)},k=>{o||(g.error=k.message)}),g.mapCreated=!0,r.on("style.load",()=>{if(!o)try{Nn(r,an(g.area.source)),n.value=!0,f.restore(),M()}catch(k){g.error=k.message}}),r.on("error",k=>{o||(g.error="Map data unavailable"+(k.sourceId?" ("+k.sourceId+")":"")+". Check token, allowed domains and connection.")}),d.attach(),a=new ResizeObserver(()=>r==null?void 0:r.resize()),a.observe(e.value)}catch(k){g.error=k.message}}),Je(()=>{o=!0,clearTimeout(s),f.dispose(),h.dispose(),i==null||i.dispose(),a==null||a.disconnect(),r==null||r.remove(),r=null});const S={mapElement:e,store:g,controls:d,locked:m,areaLocked:x,area:f,acceptArea:w,runPrediction:v,download:C};return dn(ln,S),S}const Fr={class:"flume-compact"},Br={key:0,class:"flume-meta",role:"status"},Ir={key:1,class:"flume-muted"},Ar={class:"flume-actions"},Er={key:2,role:"status",class:"flume-muted"},$r={key:3,class:"flume-meta"},Dr=["disabled"],Rr={key:4,class:"flume-meta"},Vr={__name:"AreaHud",setup(t){const{store:e,area:n,areaLocked:r,acceptArea:i}=ze(),a=e.area,o=q(()=>!e.mapReady||a.loading||r.value),s=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}];return(l,c)=>{var g;const u=fn,d=$e,f=De,h=Re;return z(),U("div",Fr,[N(u,{modelValue:b(a).source,"onUpdate:modelValue":c[0]||(c[0]=m=>b(a).source=m),label:"Buildings","aria-label":"Building source",size:"small",options:s,"text-by":"text","value-by":"value",disabled:b(a).loading||b(r)},null,8,["modelValue","disabled"]),N(d,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:o.value,loading:b(a).loading,onClick:b(n).loadBuildings},{default:G(()=>[...c[2]||(c[2]=[Z("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),b(a).loadedArea?(z(),U("p",Br," Loaded detailed buildings: "+$(b(a).loadedArea.count)+" parts · "+$((b(a).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+$((b(a).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+$(b(a).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(z(),U("p",Ir,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),A("div",Ar,[N(d,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:o.value,"aria-label":"Select region",onClick:b(n).startSelection},{default:G(()=>[...c[3]||(c[3]=[Z("Draw area",-1)])]),_:1},8,["disabled","onClick"]),N(d,{size:"small",disabled:!b(e).mapReady||!b(a).region&&!b(a).loadedArea||b(r),loading:b(a).loading,"aria-label":b(a).region?"Use selected region":"Use full loaded area",onClick:b(i)},{default:G(()=>[Z($(b(a).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"])]),b(a).drawing?(z(),U("p",Er," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):b(a).region?(z(),U("p",$r,[Z($(b(a).region.extentM[0])+" × "+$(b(a).region.extentM[1])+" m · 4 m cells · "+$(b(a).region.buffer?"main + buffer":"main domain")+" ",1),A("button",{type:"button",class:"flume-link",disabled:b(a).loading||b(r),onClick:c[1]||(c[1]=(...m)=>b(n).clearSelection&&b(n).clearSelection(...m))}," Clear ",8,Dr)])):X("",!0),(g=b(a).region)!=null&&g.mainDomain?(z(),U("p",Rr," Main: "+$(b(a).region.mainDomain.extentM[0])+" × "+$(b(a).region.mainDomain.extentM[1])+" m. Buffer: "+$((b(a).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):X("",!0),b(a).loading?(z(),fe(f,{key:5,"model-value":b(a).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):X("",!0),b(a).error?(z(),fe(h,{key:6,color:"danger"},{default:G(()=>[Z($(b(a).error),1)]),_:1})):X("",!0)])}}},Lr={class:"flex flex-col gap-3"},zr={class:"grid grid-cols-[40px_minmax(0,1fr)_56px_24px] items-center gap-2"},Tr={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Nr=["aria-valuenow","aria-disabled"],Ur=["x1","y1","x2","y2"],Or=["cx","cy"],Hr={class:"flex flex-col gap-2 min-w-0"},Wr={class:"cardinals grid grid-cols-4 gap-1"},Xr={key:2,class:"flex flex-col gap-1"},Yr={role:"status",class:"text-xs text-secondary"},jr={key:3,class:"text-xs text-secondary"},qr={__name:"WindHud",setup(t){const{store:e,locked:n,runPrediction:r}=ze(),i=e.wind,a=e.engine,o=q(()=>!!e.grid&&!n.value),s=q(()=>{if(!e.grid)return null;const h=Gt(e.grid);return{topM:Math.round((h.at(-1)+.5)*J),layers:h.length}}),l=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],c=Fe(null),u=q(()=>Number(i.directionDeg)*Math.PI/180);function d(h){if(!o.value||h.type==="pointermove"&&!h.buttons)return;h.type==="pointerdown"&&h.currentTarget.setPointerCapture(h.pointerId);const g=c.value.getBoundingClientRect(),m=h.clientX-g.left-g.width/2,x=-(h.clientY-g.top-g.height/2);i.directionDeg=(Math.round(Math.atan2(x,m)*180/Math.PI)+360)%360}function f(h){if(!o.value)return;const g={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[h.key]??0;g&&(h.preventDefault(),i.directionDeg=(Number(i.directionDeg)+g+360)%360)}return(h,g)=>{const m=Ft,x=hn,p=$e,w=Re,y=De;return z(),U("div",Lr,[A("div",zr,[g[3]||(g[3]=A("span",{class:"text-xs text-secondary"},"Speed",-1)),N(m,{modelValue:b(i).speedMps,"onUpdate:modelValue":g[0]||(g[0]=v=>b(i).speedMps=v),min:b(je),max:b(qe),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),N(x,{modelValue:b(i).speedMps,"onUpdate:modelValue":g[1]||(g[1]=v=>b(i).speedMps=v),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:b(je),max:b(qe),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),g[4]||(g[4]=A("span",{class:"text-xs text-secondary"},"m/s",-1))]),A("div",Tr,[(z(),U("svg",{ref_key:"dial",ref:c,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":b(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:gn(d,["prevent"]),onPointermove:d,onKeydown:f},[g[5]||(g[5]=pn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-3dff5fcb></circle><text x="80" y="16" text-anchor="middle" data-v-3dff5fcb>90°</text><text x="146" y="84" text-anchor="middle" data-v-3dff5fcb>0°</text><text x="80" y="152" text-anchor="middle" data-v-3dff5fcb>270°</text><text x="14" y="84" text-anchor="middle" data-v-3dff5fcb>180°</text>',5)),A("line",{x1:80-Math.cos(u.value)*30,y1:80+Math.sin(u.value)*30,x2:80+Math.cos(u.value)*42,y2:80-Math.sin(u.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Ur),A("circle",{cx:80+Math.cos(u.value)*42,cy:80-Math.sin(u.value)*42,r:"5",class:"needle-tip"},null,8,Or)],40,Nr)),A("div",Hr,[N(x,{modelValue:b(i).directionDeg,"onUpdate:modelValue":g[2]||(g[2]=v=>b(i).directionDeg=v),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),A("div",Wr,[(z(),U(ue,null,Bt(l,v=>N(p,{key:v.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+v.text,onClick:M=>b(i).directionDeg=v.value},{default:G(()=>[Z($(v.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),b(e).error?(z(),fe(w,{key:0,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:G(()=>[Z($(b(e).error),1)]),_:1})):X("",!0),b(a).error?(z(),fe(w,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:G(()=>[Z($(b(a).error),1)]),_:1})):X("",!0),b(a).busy?(z(),U("div",Xr,[N(y,{"model-value":b(a).progress*100,indeterminate:b(a).progress===0},null,8,["model-value","indeterminate"]),A("p",Yr,$(b(a).stage),1)])):X("",!0),s.value&&!b(a).busy?(z(),U("p",jr," 3D wind: ground to "+$(s.value.topM)+" m · "+$(s.value.layers)+" layers ",1)):X("",!0),N(p,{block:"",disabled:!o.value,loading:b(a).busy,"aria-label":"Run prediction",onClick:b(r)},{default:G(()=>[...g[6]||(g[6]=[Z("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},Gr=Qe(qr,[["__scopeId","data-v-3dff5fcb"]]),Zr={class:"flex flex-col gap-3"},Jr={key:0,class:"text-xs text-secondary"},Kr={key:0,class:"hud-row hud-row--value"},Qr={class:"hud-value"},ea={key:1,class:"hud-row hud-row--value"},ta={class:"hud-value"},na={class:"hud-row"},ia={class:"hud-row"},ra={key:0,class:"flex flex-col gap-1 text-xs"},aa={class:"flex justify-between gap-2 text-secondary"},oa={class:"text-xs text-secondary"},sa={__name:"VisualizeHud",setup(t){const{store:e}=ze(),n=e.display,r=q(()=>e.engine.prediction),i=q(()=>{var p;return e.engine.layersReady||((p=r.value)==null?void 0:p.layers.length)||0}),a=q(()=>r.value?rt(r.value):ht),o=q(()=>r.value?er(r.value):[0,0]),s=Ee.map(p=>({label:p.label,value:p.id})),l=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],c=q(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(p=>p.value!=="3d"||n.view==="particles")),u=q({get:()=>n.view==="slice"&&n.plane==="3d"?"h":n.plane,set:p=>n.plane=p}),d=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],f=q(()=>u.value==="h"||u.value==="3d"&&n.view==="particles"&&n.particles==="white"),h=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],g=q(()=>{const p=Math.round(Number(n.planeOffsetM));return(p>0?"+":"")+p+" m"}),m=q(()=>{var p;return((p=Ee.find(w=>w.id===n.variable))==null?void 0:p.ramp)??"turbo"}),x=q(()=>"linear-gradient(to right,"+Array.from({length:17},(p,w)=>"rgb("+nn(m.value,w/16).join(",")+") "+w*100/16+"%").join(",")+")");return(p,w)=>{const y=mn,v=Ft,M=yn,C=bn;return z(),U("div",Zr,[r.value?(z(),U(ue,{key:1},[N(y,{modelValue:b(n).view,"onUpdate:modelValue":w[0]||(w[0]=S=>b(n).view=S),options:l,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),b(n).view!=="off"?(z(),U(ue,{key:0},[N(y,{modelValue:u.value,"onUpdate:modelValue":w[1]||(w[1]=S=>u.value=S),options:c.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),f.value?(z(),U("div",Kr,[w[9]||(w[9]=A("span",{class:"hud-label"},"Height",-1)),N(v,{modelValue:b(n).sliceHeightM,"onUpdate:modelValue":w[2]||(w[2]=S=>b(n).sliceHeightM=S),min:b(ht),max:a.value,step:b(J),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),A("span",Qr,$(Number(b(n).sliceHeightM).toFixed(1))+" m",1)])):X("",!0),u.value==="v"?(z(),U("div",ea,[w[10]||(w[10]=A("span",{class:"hud-label"},"Position",-1)),N(v,{modelValue:b(n).planeOffsetM,"onUpdate:modelValue":w[3]||(w[3]=S=>b(n).planeOffsetM=S),min:o.value[0],max:o.value[1],step:b(E),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),A("span",ta,$(g.value),1)])):X("",!0)],64)):X("",!0),b(n).view==="particles"?(z(),U(ue,{key:1},[A("div",na,[w[11]||(w[11]=A("span",{class:"hud-label"},"View mode",-1)),N(y,{modelValue:b(n).particles,"onUpdate:modelValue":w[4]||(w[4]=S=>b(n).particles=S),options:d,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])]),A("div",ia,[w[12]||(w[12]=A("span",{class:"hud-label"},"Density",-1)),N(y,{modelValue:b(n).density,"onUpdate:modelValue":w[5]||(w[5]=S=>b(n).density=S),options:h,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),N(M,{modelValue:b(n).paused,"onUpdate:modelValue":w[6]||(w[6]=S=>b(n).paused=S),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):X("",!0),b(n).view!=="off"?(z(),U(ue,{key:2},[N(C,{class:"!my-0"}),N(y,{modelValue:b(n).variable,"onUpdate:modelValue":w[7]||(w[7]=S=>b(n).variable=S),options:b(s),color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),b(e).legend?(z(),U("div",ra,[A("div",{class:"colorbar",style:wn({background:x.value})},null,4),A("div",aa,[A("span",null,$(b(e).legend.low.toFixed(2)),1),A("strong",null,$(b(e).legend.legend)+" ("+$(b(e).legend.unit)+")",1),A("span",null,$(b(e).legend.high.toFixed(2)),1)])])):X("",!0)],64)):X("",!0),N(C,{class:"!my-0"}),N(M,{modelValue:b(n).showSurroundings,"onUpdate:modelValue":w[8]||(w[8]=S=>b(n).showSurroundings=S),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),A("p",oa,[Z(" 3D wind up to "+$(a.value.toFixed(0))+" m · "+$(i.value)+" / "+$(r.value.settings.layers.length)+" layers · "+$((r.value.milliseconds/1e3).toFixed(1))+" s ",1),r.value.grid.mainDomain?(z(),U(ue,{key:0},[Z(" · solid outline: main area, dashed: "+$((r.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):X("",!0)])],64)):(z(),U("p",Jr,"Run a prediction to see the 3D wind."))])}}},la=Qe(sa,[["__scopeId","data-v-ed97d505"]]),ca={class:"space-y-2"},ua={key:0,class:"text-xs text-secondary"},da={class:"grid grid-cols-2 gap-2"},fa={__name:"DownloadsHud",setup(t){const{store:e,download:n}=ze(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(a){const o=e.engine;return e.downloading||o.downloading||a!=="model"&&(o.busy||!o.prediction)}return(a,o)=>{const s=$e,l=De,c=Re;return z(),U("div",ca,[b(e).grid?(z(),U(ue,{key:1},[A("div",da,[(z(),U(ue,null,Bt(r,u=>N(s,{key:u.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":u.label,disabled:i(u.id),onClick:d=>b(n)(u.id)},{default:G(()=>[Z($(u.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),b(e).downloading?(z(),fe(l,{key:0,indeterminate:"","aria-label":"Preparing download"})):X("",!0),b(e).downloadError?(z(),fe(c,{key:1,color:"danger"},{default:G(()=>[Z($(b(e).downloadError),1)]),_:1})):X("",!0)],64)):(z(),U("p",ua,"Choose a simulation area before downloading its model."))])}}},ha={class:"flume-hud-stack"},ga={class:"flume-heading city-glass"},pa={class:"flume-heading__row"},ma={key:0,class:"flume-info"},ya={class:"flume-info__title"},ba={class:"flume-info__copyright"},wa=["href"],xa={class:"text-xs normal-case text-secondary"},va={class:"text-xs normal-case text-secondary"},_a={key:0,class:"flume-status"},Ma={__name:"FlumeCityView",setup(t){const{mapElement:e,store:n,controls:r,locked:i,areaLocked:a,area:o}=Cr(),{controlsVisible:s}=r,{currentPresetName:l}=Ct(),c=q(()=>l.value==="dark"),u=Fe(!1),d=q(()=>n.grid?Number(n.wind.speedMps).toFixed(1)+" m/s · "+n.wind.directionDeg+"°":""),f=q(()=>{const g=n.display;return n.engine.prediction?{particles:"Particles",slice:"Slice",off:"Off"}[g.view]:""}),h={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(g,m)=>{const x=$e,p=Re,w=De;return z(),U("section",{class:Mn(["flume-page map-glass",{"map-glass--dark":c.value}]),"aria-label":"Flume City wind prediction",onKeydown:m[1]||(m[1]=_n((...y)=>b(o).stopSelection&&b(o).stopSelection(...y),["esc"]))},[A("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),N(Un,{controls:b(r),shown:b(n).mapCreated,disabled:b(i)},null,8,["controls","shown","disabled"]),xn(A("div",ha,[A("header",ga,[A("div",pa,[m[2]||(m[2]=A("h1",null,"Flume City",-1)),N(x,{preset:"secondary",color:"textPrimary",size:"small",icon:u.value?"mso-close":"mso-info","aria-label":u.value?"Hide Flume City information":"Show Flume City information","aria-expanded":u.value,onClick:m[0]||(m[0]=y=>u.value=!u.value)},null,8,["icon","aria-label","aria-expanded"])]),u.value?(z(),U("div",ma,[A("p",ya,$(h.title),1),A("p",null,$(h.authors),1),A("p",null,$(h.summary),1),N(x,{preset:"secondary",size:"small",icon:"mso-description",href:h.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:G(()=>[...m[3]||(m[3]=[Z("arXiv",-1)])]),_:1},8,["href"]),A("div",ba,[A("p",null,[m[4]||(m[4]=Z(" Developed and maintained by ",-1)),A("a",{href:b(Me).lab.url,target:"_blank",rel:"noopener"},$(b(Me).lab.name),9,wa),m[5]||(m[5]=A("br",null,null,-1)),Z("("+$(b(Me).lead)+") ",1)]),A("p",null,$(b(Me).place),1)])])):X("",!0)]),N(ke,{title:"1 · Simulation area",inert:b(a),collapsed:!!b(n).grid},{default:G(()=>[N(Vr)]),_:1},8,["inert","collapsed"]),N(ke,{title:"2 · Wind configuration",collapsed:!b(n).grid},{"header-extra":G(()=>[A("span",xa,$(d.value),1)]),default:G(()=>[N(Gr)]),_:1},8,["collapsed"]),N(ke,{title:"3 · Wind visualization",collapsed:!b(n).engine.prediction},{"header-extra":G(()=>[A("span",va,$(f.value),1)]),default:G(()=>[N(la)]),_:1},8,["collapsed"]),N(ke,{title:"4 · Downloads",collapsed:!b(n).grid},{default:G(()=>[N(fa)]),_:1},8,["collapsed"]),b(n).error&&!b(n).grid?(z(),fe(p,{key:0,color:"danger"},{default:G(()=>[Z($(b(n).error),1)]),_:1})):X("",!0)],512),[[vn,b(s)]]),!b(n).mapReady&&!b(n).error?(z(),U("div",_a,[N(w,{indeterminate:"","aria-label":"Loading Flume map"})])):X("",!0)],34)}}},$a=Qe(Ma,[["__scopeId","data-v-b8568196"]]);export{$a as default};
