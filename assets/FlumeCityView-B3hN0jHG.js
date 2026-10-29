import{w as be,o as At,m as Be,r as Ft,u as Mr,d as gn,a as Q,b as et,a2 as pn,a3 as mn,e as O,v as X,i as U,l as $,a4 as _r,M as yn,h as te,z as ne,N as at,t as T,q as R,x as K,f as Ae,L as lt,y as ut,_ as Et,U as $r,P as bn,J as wn,a5 as xn,F as ke,A as kr,s as vn,O as Mn,S as _n,X as $n,Y as kn,a6 as je,$ as Sn,E as Cn}from"./index-BOJgiBxG.js";import{y as Te,z as Bn,n as Pn,l as In,E as Yt,o as An,M as jt,m as Sr,F as He,V as ge,S as Fn,c as En,d as Rn,G as Cr,r as Br,H as Pr,u as tt,I as xt,W as Tn,D as Ht,R as qt,f as Ln,L as Gt,J as Dn,K as Zt,N as zn,s as Nn,b as Vn,B as Un,g as On,v as Wn,a as Xn,x as Yn,w as qe}from"./mapbox-gl-geocoder-DkqIUJag.js";import{z as jn}from"./archive-Dz16c6AW.js";import{d as Hn}from"./download-B6B1Q6H-.js";import{m as ct,c as Le}from"./geojsonToStl-Bbo8coar.js";import{c as Rt}from"./index-D6bWIqpK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./earcut-Drp1yMsm.js";const qn=[-73.5673,45.5017],Gn=14,L=4,ie=1.5,Ir=240,ht=3e3,Zn=.1,Ue=16,Kt={directionDeg:0,speedMps:6,model:"v1"},vt=.5,Mt=20,Kn=320,Jt=.35,Jn=10,Qt=.75,er={low:800,medium:1600,high:3200},Ar={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#8cb8d8",selectedBuildings:"#9aa3ad",drawFillOpacity:.1},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#b9bdc4",selectedBuildings:"#5f6670",drawFillOpacity:.2}};let Fr="dark";function tr(r){Fr=r in Ar?r:"dark"}function he(){return Ar[Fr]}function Er(r){const e=[1/0,1/0,-1/0,-1/0];return Rt(r,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function dt(r,e){for(const b of[r,e])if(!(Array.isArray(b)&&b.length>=2&&b.every(Number.isFinite)&&Math.abs(b[0])<=180&&Math.abs(b[1])<=85.051129))throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(r[0],e[0]),Math.min(r[1],e[1])];if(Math.abs(r[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const i=ct(t),n=Le(t),[s,o]=i([Math.max(r[0],e[0]),Math.max(r[1],e[1])]);if(s<=0||o<=0)throw new Error("The region is empty.");const a=Math.ceil((s-1e-6)/L),l=Math.ceil((o-1e-6)/L),u=n([a*L,l*L]),c=[...t,...u],[d,f,h,g]=c,p={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[d,f],[h,f],[h,g],[d,g],[d,f]]]}};return{origin:t,bounds:c,extentM:[a*L,l*L],polygon:p}}function rr(r){var n;if(((n=r==null?void 0:r.geometry)==null?void 0:n.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(Rt(r,s=>{if(!Number.isFinite(s[0])||!Number.isFinite(s[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=Er(r);return{...dt(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(r.geometry)}}}function Qn(r){const e=structuredClone({origin:r.origin,bounds:r.bounds,extentM:r.extentM,polygon:r.polygon}),t=Zn,i=r.extentM.map(l=>Math.ceil(l*t/L)*L),n=Le(r.origin)([0,-i[1]]),s=Le(n)([-i[0],0]),o=ct(s)(r.bounds.slice(2,4)),a=dt(s,Le(s)([o[0]+i[0],o[1]+i[1]]));return{...r,...a,mainDomain:e,buffer:{fraction:t,paddingM:i}}}function Rr(r){var i,n,s;const e=new Map,t=new Set;for(const o of r){if(!["Polygon","MultiPolygon"].includes((i=o.geometry)==null?void 0:i.type))continue;Rt(o,f=>{if(!Number.isFinite(f[0])||!Number.isFinite(f[1])||Math.abs(f[0])>180||Math.abs(f[1])>85.051129)throw new Error("Invalid building coordinates.")});const a=Number((n=o.properties)==null?void 0:n.height),l=Number((s=o.properties)==null?void 0:s.min_height)||0,u=JSON.stringify([o.geometry,a,l]);if(t.has(u))continue;t.add(u);const c=Te(o),d=c==null?u:JSON.stringify([c,a,l]);e.has(d)||e.set(d,[]),e.get(d).push({type:"Feature",...o.id==null?{}:{id:o.id},properties:structuredClone(o.properties??{}),geometry:structuredClone(o.geometry)})}return Array.from(e.values(),o=>{const a=o[0];if(o.length>1){const l=In({type:"FeatureCollection",features:o});if(!l)throw new Error("Building parts produced empty geometry.");a.geometry=l.geometry,delete a.bbox}return a})}function ei(r,e){var h,g,p;const t=Rr(r),i=e.selection??e.polygon,n=new Set(t.filter(b=>Pn(b,i))),s=new Set(Array.from(n,Te).filter(b=>b!=null)),o=[],a=[],l=[];let u=0,c=0;for(const b of t){if(!(n.has(b)||Te(b)!=null&&s.has(Te(b)))){a.push(b);continue}const w=(h=b.properties)==null?void 0:h.height;if(w==null||w===""){u++;continue}const m=Number(w);if(!Number.isFinite(m)||m<0||m>Ir)throw new Error("Building height must be finite and between 0 and 240 m.");if(m===0){u++;continue}Number((g=b.properties)==null?void 0:g.min_height)>0&&c++,o.push({...b,properties:{...b.properties,source_height:m,source_min_height:Number((p=b.properties)==null?void 0:p.min_height)||0,height:Math.max(1,Math.round(m/ie))*ie,min_height:0}})}const d={type:"FeatureCollection",features:o};let f=e;if(o.length){const b=Er(d);f=dt(b.slice(0,2),b.slice(2,4))}return u&&l.push(u+" parts have missing/zero height and were omitted."),c&&l.push(c+" raised parts are treated as solid from the ground to their roof."),o.length||l.push("No buildings found in loaded map data. This run will use open ground."),o.some(b=>Te(b)==null)&&l.push("Selected parts without provider IDs cannot be joined across tile boundaries."),l.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...f,selection:structuredClone(e.selection??e.polygon),buildings:d,surroundings:{type:"FeatureCollection",features:a},warnings:l}}function rt(r){var t,i;const e=[];for(const n of Rr(r)){const s=Number((t=n.properties)==null?void 0:t.height);if(!Number.isFinite(s)||s<=0)continue;const o=Math.min(s,Math.max(0,Number((i=n.properties)==null?void 0:i.min_height)||0));e.push({...n,properties:{...n.properties,height:s,min_height:o}})}return{type:"FeatureCollection",features:e}}function Tr(r,e=null){const t=r.map(Te);if(t.some(n=>n==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const i=["in",Bn,["literal",Array.from(new Set(t))]];return{selected:e?["all",e,i]:i,surroundings:e?["all",e,["!",i]]:["!",i]}}const nr=65536*65536,ti=12,ir=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),ri=0,ni=1,sr=2,ii=5;class si{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,i=this.length){let n;for(;n=this.nextField(i);)e(n,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*nr;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*nr;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,i=t[this.pos++];if(i<128)return i;let n=i&127,s;return s=t[this.pos++],n|=(s&127)<<7,s<128||(s=t[this.pos++],n|=(s&127)<<14,s<128)||(s=t[this.pos++],n|=(s&127)<<21,s<128)?n:(s=t[this.pos],n|=(s&15)<<28,oi(n,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=ti&&ir?ir.decode(this.buf.subarray(t,e)):ai(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const i=this.readPackedEnd();for(;this.pos<i;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===sr?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===ri)for(;this.buf[this.pos++]>127;);else if(t===sr)this.pos=this.readVarint()+this.pos;else if(t===ii)this.pos+=4;else if(t===ni)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function oi(r,e,t){const i=t.buf;let n,s;if(s=i[t.pos++],n=(s&112)>>4,s<128||(s=i[t.pos++],n|=(s&127)<<3,s<128)||(s=i[t.pos++],n|=(s&127)<<10,s<128)||(s=i[t.pos++],n|=(s&127)<<17,s<128)||(s=i[t.pos++],n|=(s&127)<<24,s<128)||(s=i[t.pos++],n|=(s&1)<<31,s<128))return Fe(r,n,e);throw new Error("Expected varint not more than 10 bytes")}function Fe(r,e,t){return t?e*4294967296+(r>>>0):(e>>>0)*4294967296+(r>>>0)}function ai(r,e,t){let i="",n=e;for(;n<t;){const s=r[n];let o=null,a=s>239?4:s>223?3:s>191?2:1;if(n+a>t)break;let l,u,c;a===1?s<128&&(o=s):a===2?(l=r[n+1],(l&192)===128&&(o=(s&31)<<6|l&63,o<=127&&(o=null))):a===3?(l=r[n+1],u=r[n+2],(l&192)===128&&(u&192)===128&&(o=(s&15)<<12|(l&63)<<6|u&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(l=r[n+1],u=r[n+2],c=r[n+3],(l&192)===128&&(u&192)===128&&(c&192)===128&&(o=(s&15)<<18|(l&63)<<12|(u&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,i+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),i+=String.fromCharCode(o),n+=a}return i}class Lr{constructor(e,t,i,n,s){for(this.properties=Object.create(null),this.extent=i,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=n,this._values=s;e.pos<t;){const o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){const a=e.readVarint()+e.pos;for(;e.pos<a;){const l=n[e.readVarint()],u=s[e.readVarint()];this.properties[l]=u}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,i=[];let n,s=1,o=0,a=0,l=0;for(;e.pos<t;){if(o<=0){const u=e.readVarint();if(s=u&7,o=u>>3,o===0)continue}if(o--,s===1)a+=e.readSVarint(),l+=e.readSVarint(),n&&i.push(n),n=[new Yt(a,l)];else if(s===2)a+=e.readSVarint(),l+=e.readSVarint(),n&&n.push(new Yt(a,l));else if(s===7)n&&n.push(n[0].clone());else throw new Error(`unknown command ${s}`)}return n&&i.push(n),i}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let i=1,n=0,s=0,o=0,a=1/0,l=-1/0,u=1/0,c=-1/0;for(;e.pos<t;){if(n<=0){const d=e.readVarint();if(i=d&7,n=d>>3,n===0)continue}if(n--,i===1||i===2)s+=e.readSVarint(),o+=e.readSVarint(),s<a&&(a=s),s>l&&(l=s),o<u&&(u=o),o>c&&(c=o);else if(i!==7)throw new Error(`unknown command ${i}`)}return[a,u,l,c]}toGeoJSON(e,t,i){const n=this.extent*Math.pow(2,i),s=this.extent*e,o=this.extent*t,a=this.loadGeometry();function l(f){return[(f.x+s)*360/n-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+o)*2/n)*Math.PI))-90]}function u(f){return f.map(l)}let c;if(this.type===1){const f=[];for(const g of a)f.push(g[0]);const h=u(f);c=f.length===1?{type:"Point",coordinates:h[0]}:{type:"MultiPoint",coordinates:h}}else if(this.type===2){const f=a.map(u);c=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=li(a),h=[];for(const g of f)h.push(g.map(u));c=h.length===1?{type:"Polygon",coordinates:h[0]}:{type:"MultiPolygon",coordinates:h}}else throw new Error("unknown feature type");const d={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(d.id=this.id),d}}Lr.types=["Unknown","Point","LineString","Polygon"];function li(r){const e=r.length;if(e<=1)return[r];const t=[];let i,n;for(let s=0;s<e;s++){const o=ui(r[s]);o!==0&&(n===void 0&&(n=o<0),n===o<0?(i&&t.push(i),i=[r[s]]):i&&i.push(r[s]))}return i&&t.push(i),t}function ui(r){let e=0;for(let t=0,i=r.length,n=i-1,s,o;t<i;n=t++)s=r[t],o=r[n],e+=(o.x-s.x)*(s.y+o.y);return e}class ci{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const i=e.readVarint();i===10?this.name=e.readString():i===18?(this._features.push(e.pos),e.skip(i)):i===26?this._keys.push(e.readString()):i===34?this._values.push(di(e)):i===40?this.extent=e.readVarint():i===120?this.version=e.readVarint():e.skip(i)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new Lr(this._pbf,t,this.extent,this._keys,this._values)}}function di(r){let e=null;const t=r.readVarint()+r.pos;for(;r.pos<t;){const i=r.readVarint();e=i===10?r.readString():i===21?r.readFloat():i===25?r.readDouble():i===32?r.readVarint(!0):i===40?r.readVarint():i===48?r.readSVarint():i===56?r.readBoolean():(r.skip(i),null)}if(e==null)throw new Error("unknown feature value");return e}class fi{constructor(e,t=e.length){const i=Object.create(null);for(;e.pos<t;){const n=e.readVarint();if(n===26){const s=new ci(e,e.readVarint()+e.pos);s.length&&(i[s.name]=s)}else e.skip(n)}this.layers=i}}function Dr(r){return r==="osm"?"building":"Montreal_Qatar-6hvjju"}function zr(r,e){return r!=="osm"||String(e.extrude)==="true"}function Nr(r,e){return Math.max(r??0,Math.min(16,e??16))}function Vr(r,e){const t=2**e,i=s=>s/t*360-180,n=s=>Math.atan(Math.sinh(Math.PI*(1-2*s/t)))*180/Math.PI;return[i(Math.min(...r.map(s=>s.x))),n(Math.max(...r.map(s=>s.y))+1),i(Math.max(...r.map(s=>s.x))+1),n(Math.min(...r.map(s=>s.y)))]}function Ur(r,e,t=0){const i=2**e,n=d=>(d+180)/360*i,s=d=>{const f=Math.max(-85.051129,Math.min(85.051129,d))*Math.PI/180;return(1-Math.asinh(Math.tan(f))/Math.PI)/2*i},o=Math.max(0,Math.floor(n(r[0]))-t),a=Math.min(i-1,Math.ceil(n(r[2])-1e-9)-1+t),l=Math.max(0,Math.floor(s(r[3]))-t),u=Math.min(i-1,Math.ceil(s(r[1])-1e-9)-1+t);if((a-o+1)*(u-l+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const c=[];for(let d=l;d<=u;d++)for(let f=o;f<=a;f++)c.push({z:e,x:f,y:d});return c}function hi({map:r,sourceId:e,source:t,bounds:i}){var n,s,o,a;try{const l=(n=r.getSource)==null?void 0:n.call(r,e),u=(o=(s=r.style)==null?void 0:s.getOwnSourceCaches)==null?void 0:o.call(s,e);if(!l||!(u!=null&&u.length)||typeof r.querySourceFeatures!="function")return null;const c=Nr(l.minzoom,l.maxzoom),d=Ur(i,c),f=new Set;for(const p of u)for(const b of p.getIds()){const y=p.getTileByID(b),w=(a=y==null?void 0:y.tileID)==null?void 0:a.canonical;(w==null?void 0:w.z)===c&&y.state==="loaded"&&f.add(w.x+"/"+w.y)}if(!d.every(p=>f.has(p.x+"/"+p.y)))return null;const h=new Set(d.map(p=>p.x+"/"+p.y));return{features:r.querySourceFeatures(e,{sourceLayer:Dr(t)}).filter(p=>{var b;return((b=p.tile)==null?void 0:b.z)===c&&h.has(p.tile.x+"/"+p.tile.y)&&zr(t,p.properties)}),zoom:c,tileCount:d.length,coverageBounds:Vr(d,c),fromMap:!0}}catch{return null}}async function or(r,e,t=!1){e==null||e.throwIfAborted();const i=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),n=await fetch(r,{signal:i});if(t&&n.status===404)return null;if(!n.ok)throw new Error("Building data request failed (HTTP "+n.status+"). Check source access and token.");return n}function ar(r,e){var i;const t=new URL(r,((i=globalThis.location)==null?void 0:i.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function gi({sourceConfig:r,source:e,bounds:t,accessToken:i,signal:n,onProgress:s,paddingTiles:o=0}){var p;if(!r)throw new Error("The selected basemap does not provide this building source.");let a=r;if(r.url){let b=r.url;if(b.startsWith("mapbox://")){const y=b.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(y))throw new Error("Invalid Mapbox tileset ID.");b="https://api.mapbox.com/v4/"+y+".json?secure"}a=await(await or(ar(b,i),n)).json()}if(!((p=a.tiles)!=null&&p.length))throw new Error("The selected source has no vector tile URLs.");const l=Nr(a.minzoom,a.maxzoom);if(!Number.isInteger(l)||l<0||l>22)throw new Error("Unsupported tile detail level.");const u=Ur(t,l,o),c=[];let d=0,f=0,h=0;const g=Dr(e);return await Promise.all(Array.from({length:Math.min(4,u.length)},async()=>{for(;d<u.length;){const{x:b,y,z:w}=u[d++];let m=a.tiles[0].replaceAll("{z}",String(w)).replaceAll("{x}",String(b)).replaceAll("{y}",String(a.scheme==="tms"?2**w-y-1:y)).replaceAll("{ratio}","");m=ar(m,i);const x=await or(m,n,!0);if(x){const M=await x.arrayBuffer();if(h+=M.byteLength,M.byteLength>16*1024*1024||h>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const _=new fi(new si(new Uint8Array(M))).layers[g];if(_)for(let v=0;v<_.length;v++){const k=_.feature(v);k.type===3&&zr(e,k.properties)&&c.push(k.toGeoJSON(b,y,w))}}f++,s==null||s(f/u.length)}})),n==null||n.throwIfAborted(),{features:c,zoom:l,tileCount:u.length,coverageBounds:Vr(u,l)}}const me="flume-detailed-buildings",ye="flume-region-domain",Ee="flume-main-domain";function _t(r,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){r.getLayer(me)&&r.removeLayer(me),r.getSource(me)&&r.removeSource(me);return}r.getSource(me)?r.getSource(me).setData(e):r.addSource(me,{type:"geojson",data:e,maxzoom:22,tolerance:0}),r.getLayer(me)||r.addLayer({id:me,type:"fill-extrusion",source:me,minzoom:0,paint:{"fill-extrusion-color":he().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function pi(r,e){if(!e){r.getLayer(Ee)&&r.removeLayer(Ee),r.getLayer(ye)&&r.removeLayer(ye),r.getSource(ye)&&r.removeSource(ye);return}const t=[{...e.polygon,properties:{role:"outer"}}];e.mainDomain&&t.push({...e.mainDomain.polygon,properties:{role:"main"}});const i={type:"FeatureCollection",features:t};r.getSource(ye)?r.getSource(ye).setData(i):(r.addSource(ye,{type:"geojson",data:i}),r.addLayer({id:ye,type:"line",source:ye,filter:["==",["get","role"],"outer"],paint:{"line-color":he().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!r.getLayer(Ee)&&r.addLayer({id:Ee,type:"line",source:ye,filter:["==",["get","role"],"main"],paint:{"line-color":he().mainArea,"line-width":3}}),!e.mainDomain&&r.getLayer(Ee)&&r.removeLayer(Ee)}const lr=["draw.create","draw.update","draw.delete"];function mi({getMap:r,ready:e,onChange:t,accessToken:i}){const n=Ft({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let s=null,o=!1,a=null,l=0,u=null;function c(S=!1){l++,a==null||a.abort(),S||(u=null,n.loadedArea=null),n.snapshot=null,t==null||t()}function d(){const S=r();!S||!e.value||(_t(S,u==null?void 0:u.preview),pi(S,n.region??(u==null?void 0:u.area)??null))}function f(){return(u==null?void 0:u.preview)??null}function h(S){c(!n.region&&!n.snapshot),n.error="";try{n.region=Be(rr(S))}catch(C){n.region=null,n.error=C.message}d()}function g(S){var D;if(o||!s)return;const C=(D=S.features)==null?void 0:D.at(-1);if(S.type==="draw.create"&&C)for(const H of s.getAll().features)H.id!==C.id&&s.delete(H.id);const I=s.getAll().features.find(H=>H.geometry.type==="Polygon");I?h(I):(c(),n.region=null,d()),n.drawing=!1}function p(S){n.drawing=S.mode==="draw_polygon"||S.mode==="direct_select"}function b(){var C;const S=r();if(!S||!e.value)throw new Error("Wait for the map to load.");if(!s){s=new An({displayControlsDefault:!1,controls:{},boxSelect:!1}),S.addControl(s,"bottom-left");for(const I of lr)S.on(I,g);S.on("draw.modechange",p),y(S),S.once("idle",()=>y(S)),(C=n.region)!=null&&C.selection&&s.add(n.region.selection)}return s}function y(S){var C;for(const I of((C=S.getStyle())==null?void 0:C.layers)??[])I.id.startsWith("gl-draw-")&&(I.type==="fill"&&(S.setPaintProperty(I.id,"fill-color",he().mainArea),S.setPaintProperty(I.id,"fill-opacity",he().drawFillOpacity)),I.type==="line"&&(S.setPaintProperty(I.id,"line-color",he().mainArea),S.setPaintProperty(I.id,"line-width",3)))}function w(){const S=r();if(!(!s||!S)){for(const C of lr)S.off(C,g);S.off("draw.modechange",p),S.removeControl(s),s=null,n.drawing=!1}}function m(){if(!n.loading)try{const S=b();r().stop(),c(!n.region&&!n.snapshot),n.region=null,S.deleteAll(),d(),S.changeMode("draw_polygon"),n.drawing=!0,n.error=""}catch(S){n.error=S.message}}function x(){s&&s.changeMode("simple_select"),n.drawing=!1}function M(){var S;(S=r())==null||S.stop(),w(),c(),n.region=null,n.error="",d()}async function _(S){const C=new AbortController,I=l;a=C,n.loading=!0,n.progress=0,n.error="";const D=()=>o||C.signal.aborted||I!==l;try{return await S({signal:C.signal,epoch:I,isStale:D})}catch(H){return C.abort(),!o&&I===l&&H.name!=="AbortError"&&(n.error=H.message),null}finally{a===C&&(a=null,o||(n.loading=!1))}}async function v(S,C,{signal:I,epoch:D,isStale:H}){if(I.throwIfAborted(),(u==null?void 0:u.source)===C){const[F,W,J,de]=S.bounds,oe=u.area.bounds;if(F>=oe[0]&&W>=oe[1]&&J<=oe[2]&&de<=oe[3])return u.tiles}const q=r(),E=C==="osm"?"composite":"city-concordia",Y=hi({map:q,sourceId:E,source:C,bounds:S.bounds})??await gi({sourceConfig:q.getStyle().sources[E],source:C,bounds:S.bounds,accessToken:i,signal:I,paddingTiles:1,onProgress:F=>{D===l&&(n.progress=F)}});if(H())throw new DOMException("Cancelled","AbortError");const se=rt(Y.features);return u={source:C,area:S,tiles:Y,preview:se},n.loadedArea=Be({source:C,bounds:[...S.bounds],extentM:[...S.extentM],count:se.features.length,fromMap:!!Y.fromMap}),d(),Y}function k(S){var D;const C=r(),I=C.getCanvas().clientWidth;(D=C.resize)==null||D.call(C),C.fitBounds([S.bounds.slice(0,2),S.bounds.slice(2,4)],{padding:I>=640?{top:40,bottom:40,left:Math.min(320,I*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function B(){if(n.loading||o)return null;const S=r();if(!S||!e.value)return n.error="Wait for the map to load.",null;const C=n.source;return _(async I=>{const D=ht/2,H=S.getCenter().wrap().toArray(),q=Le(H)([-D,-D]),E=dt(q,Le(q)([ht,ht]));return k(E),await v(E,C,I),I.isStale()?null:(n.snapshot=null,t==null||t(),n.loadedArea)})}async function P(){if(n.loading||o)return null;!n.region&&(u==null?void 0:u.source)===n.source&&h(u.area.polygon);const S=r(),C=n.region,I=n.source;return!S||!e.value||!C?(n.error="Draw and finish a valid polygon first.",null):_(async D=>{const H=rr(C.selection??C.polygon);let q=H,E,Z;for(let se=0;se<4;se++){if(Z=await v(q,I,D),D.isStale())return null;E=ei(Z.features,H);const[F,W,J,de]=E.bounds,oe=Z.coverageBounds,re=1e-8;if(F>oe[0]+re&&W>oe[1]+re&&J<oe[2]-re&&de<oe[3]-re||!E.buildings.features.length)break;if(se===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");q=E}E=Qn(E),E.source=I,E.dataZoom=Z.zoom,E.tileCount=Z.tileCount,E.surroundings=rt(E.surroundings.features),E.warnings=E.warnings.filter(se=>!se.startsWith("Loaded map tiles only"));const Y=Z.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return E.warnings.push(Y+Z.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(E.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),n.snapshot=Be(E),n.region=Be({origin:E.origin,bounds:E.bounds,extentM:E.extentM,polygon:E.polygon,selection:E.selection,mainDomain:E.mainDomain,buffer:E.buffer}),d(),k(E),t==null||t(),E})}function A(){a==null||a.abort(),w()}function V(){var S;d(),(S=n.region)!=null&&S.selection&&b()}function z(){o=!0,l++,a==null||a.abort(),w()}return be(()=>n.source,()=>{c(),d(),n.error=""}),At(z),{state:n,startSelection:m,stopSelection:x,clearSelection:M,setSelection:h,captureRegion:P,loadBuildings:B,getPreview:f,restore:V,beforeStyleChange:A}}function yi(r){const[e,t]=r.extentM,i=Math.round(e/L),n=Math.round(t/L);if(i<1||n<1||!Number.isSafeInteger(i*n)||Math.abs(i*L-e)>1e-5||Math.abs(n*L-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const s=ct(r.origin),o=new Float32Array(i*n);for(const u of r.buildings.features){const c=Number(u.properties.height);if(!Number.isFinite(c)||c<0||c>Ir)throw new Error("Invalid building height (0..240 metres).");if(!c)continue;const d=Math.max(1,Math.round(c/ie)),f=u.geometry.type==="Polygon"?[u.geometry.coordinates]:u.geometry.coordinates;for(const h of f){const g=h.map(m=>m.map(s));let p=1/0,b=-1/0;for(const m of g)for(const x of m)p=Math.min(p,x[1]),b=Math.max(b,x[1]);const y=Math.max(0,Math.ceil(p/L-.5)),w=Math.min(n,Math.ceil(b/L-.5));for(let m=y;m<w;m++){const x=(m+.5)*L,M=[];for(const _ of g)for(let v=0,k=_.length-1;v<_.length;k=v++){const B=_[k],P=_[v];(B[1]<=x&&P[1]>x||P[1]<=x&&B[1]>x)&&M.push(B[0]+(x-B[1])*(P[0]-B[0])/(P[1]-B[1]))}M.sort((_,v)=>_-v);for(let _=0;_+1<M.length;_+=2){const v=Math.max(0,Math.ceil(M[_]/L-.5-1e-8)),k=Math.min(i,Math.ceil(M[_+1]/L-.5-1e-8));for(let B=v;B<k;B++)o[m*i+B]=Math.max(o[m*i+B],d)}}}}let a=0,l=0;for(const u of o)u>0&&a++,l=Math.max(l,u);return{layers:o,nx:i,ny:n,origin:[...r.origin],extentM:[...r.extentM],mainDomain:r.mainDomain,buffer:r.buffer,spacingM:L,layerSpacingM:ie,statistics:{builtCells:a,maximumHeightM:l*ie}}}function Ke(r){const e=Number(r);return Number.isFinite(e)&&e>=vt&&e<=Mt}function bi({directionDeg:r,speedMps:e}){const t=(o,a)=>{if(o===""||o===null||o===void 0||!Number.isFinite(Number(o)))throw new Error("Invalid "+a+".");return Number(o)},i=t(r,"direction"),n=t(e,"speed");if(!Ke(n))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const s=(i%360+360)%360;return{directionDeg:s,thetaRad:s*Math.PI/180,speedMps:n}}class Tt{constructor(e,t,i){this.adapter=e,this.device=t,this.useF16=i,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),i=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new Tt(e,i,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,i){const n=Math.max(4,Math.ceil(e/4)*4),s=this.device.createBuffer({size:n,usage:t,label:i});return s._tracked=n,this.liveBytes+=n,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),s}storage(e,t,i=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|i,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const i=this.storage(e.byteLength,t);return this.write(i,e),i}write(e,t){if(t.byteLength%4){const i=new Uint8Array(Math.ceil(t.byteLength/4)*4);i.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,i)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,i=new ArrayBuffer(t),n=new Uint32Array(i),s=new Int32Array(i),o=new Float32Array(i);e.forEach(([l,u],c)=>{l==="u"?n[c]=u:l==="i"?s[c]=u:o[c]=u});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,i),this.scratch.push(a),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,i,n,s=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:i.map((l,u)=>({binding:u,resource:{buffer:l}}))}));const o=Math.max(1,Math.ceil(n/s)),a=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(o,a),Math.ceil(o/a))}async readFloat32(e,t){const i=t*4,n=this.buffer(i,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),s=this.device.createCommandEncoder();s.copyBufferToBuffer(e,0,n,0,n.size),this.device.queue.submit([s.finish()]),await n.mapAsync(GPUMapMode.READ);const o=new Float32Array(n.getMappedRange().slice(0,i));return n.unmap(),this.free(n),o}}function Or(r){const e=new Uint16Array(r.length),t=new Float32Array(1),i=new Uint32Array(t.buffer);for(let n=0;n<r.length;n++){t[0]=r[n];const s=i[0],o=s>>>16&32768,a=s>>>23&255;let l=s&8388607;if(a===255){e[n]=o|31744|(l?1:0);continue}const u=a-127+15;if(u>=31){e[n]=o|31744;continue}if(u<=0){if(u<-10){e[n]=o;continue}l|=8388608;const d=14-u;let f=l>>>d;l>>>d-1&1&&(f+=1),e[n]=o|f;continue}let c=u<<10|l>>>13;l&4096&&(c+=1),e[n]=o|c}return e}function wi(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++){const i=r[t],n=i&32768?-1:1,s=i>>10&31,o=i&1023;s===0?e[t]=n*o*2**-24:s===31?e[t]=o?NaN:n*(1/0):e[t]=n*(1+o/1024)*2**(s-15)}return e}const $e=180,Wr=4,Xr=7,Lt=Wr*Xr,nt=1.5,ur=4,xi=1600,vi=256*1024*1024,Je=r=>r.toFixed(6),Mi=640,_i=`
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
  let angles = ${$e}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${Je(ur)};
  let gyr = sinT[angle] / ${Je(ur)};

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

  let cutoff = ${Je(xi)};
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
}`,$i=`
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
  let angles = ${$e}u;
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
  let out = (u.pixelOffset + localPixel) * ${Lt}u
          + sig * ${Xr}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,ki=r=>`${r==="f16"?`enable f16;
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
  let c = ${Lt}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Je(nt)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`;class Si{constructor(e,t,i,n,s,o="f32"){this.context=e,this.store=o,this.ny=i,this.nx=n,this.margin=s,this.gy=i+2*s,this.gx=n+2*s,this.chunk=Math.min(16384,this.gy*this.gx);const a=new Float32Array(this.gy*this.gx);for(let c=0;c<i;c++){const d=c*n,f=(c+s)*this.gx+s;for(let h=0;h<n;h++)a[f+h]=t[d+h]*nt}this.heightBuffer=e.upload(a,"mddf.height");const l=new Float32Array($e),u=new Float32Array($e);for(let c=0;c<$e;c++){const d=2*Math.PI*c/$e;l[c]=Math.cos(d),u[c]=Math.sin(d)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(u,"mddf.sin"),this.rawBuffer=e.storage(Wr*this.chunk*$e*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*Lt*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(_i),this.fourierPipeline=e.pipeline($i),this.assemblePipeline=e.pipeline(ki(o)),this.currentLayer=-1}async compute(e,t={}){var l,u,c;const{context:i}=this,n=this.cache.get(e);if(n){this.fieldBuffer=n,this.currentLayer=e,(l=t.onProgress)==null||l.call(t,1);return}const s=(this.cache.size+1)*this.fieldBytes<=vi;this.fieldBuffer=s?i.storage(this.fieldBytes,"mddf.field."+e):this.spare;const o=(e+.5)*nt,a=this.gy*this.gx;for(let d=0;d<a;d+=this.chunk){(u=t.signal)==null||u.throwIfAborted();const f=Math.min(this.chunk,a-d),h=i.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",d],["u",f],["u",0],["u",0],["u",0],["f",o],["f",0],["f",0],["f",0]]),g=i.device.createCommandEncoder(),p=g.beginComputePass();i.dispatch(p,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,h],f*$e),i.dispatch(p,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,h],f*4,64),p.end(),i.device.queue.submit([g.finish()])}await i.device.queue.onSubmittedWorkDone(),(c=t.onProgress)==null||c.call(t,1),i.releaseScratch(),s&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,t,i,n,s,o,a){const{context:l}=this,u=t.length/2,c=l.upload(t,"assemble.origins"),d=l.uniform([["u",u],["u",i.channels],["u",i.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",i.solidChannel],["i",i.coordChannel],["i",0],["i",0],["f",Math.cos(n)],["f",Math.sin(n)],["f",n],["f",s],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",i.coordYScale],["f",(s-i.coordZCentre)/i.coordZScale],["f",i.coordXCentre],["f",i.coordXScale],["f",0],["f",0]]),f=e.beginComputePass();return l.dispatch(f,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,c,i.tableBuffer,i.normBuffer,a,d],u*i.channels*o*o),f.end(),c}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const gt=`
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
`,Ci=`
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
}`;function cr(r,e,t,i=1e-5){const n=r==="f16"||e==="f16"?`enable f16;
`:"",s=a=>r==="f16"?`f32(${a})`:a,o=a=>e==="f16"?`f16(${a})`:a;return`${n}
@group(0) @binding(0) var<storage, read> X: array<${r}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${e}>;
var<workgroup> partial: array<f32, 256>;
@compute @workgroup_size(256)
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${t}u;
  var s = 0.0;
  for (var i = lid.x; i < ${t}u; i += 256u) { s += ${s("X[base + i]")}; }
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
    let d = ${s("X[base + i]")} - mean;
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
    Y[base + i] = ${o("("+s("X[base + i]")+" - mean) * inverse")};
  }
}`}const pt=32;function Bi(r){const{store:e,patch:t,modes1:i,modes2:n}=r,s=t*t,o=2*i,a=e==="f16"?`enable f16;
`:"",l=c=>e==="f16"?`f32(${c})`:c,u=c=>e==="f16"?`f16(${c})`:c;return{conv1x1:`${a}${gt}
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
  if (g >= u.batch * u.cout * ${s}u) { return; }
  let p = g % ${s}u;
  let o = (g / ${s}u) % u.cout;
  let b = g / (${s}u * u.cout);
  var acc = ${l("B[o]")};
  let xBase = b * u.cin * ${s}u + p;
  let wBase = o * u.cin;
  for (var i = 0u; i < u.cin; i++) {
    acc += ${l("W[wBase + i]")} * ${l("X[xBase + i * "+s+"u]")};
  }
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${u("acc")};
}`,gate:`${a}${gt}
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
  if (g >= u.batch * u.mid * ${s}u) { return; }
  let p = g % ${s}u;
  let m = (g / ${s}u) % u.mid;
  let b = g / (${s}u * u.mid);
  let value = ${l("G[(b * 2u * u.mid + m) * "+s+"u + p]")};
  let gateValue = ${l("G[(b * 2u * u.mid + u.mid + m) * "+s+"u + p]")};
  H[g] = ${u("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:cr(e,e,s),instanceNormScaled:cr(e,e,s,1e-5/(pt*pt)),forwardColumns:`${a}
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
  if (g >= u.batch * u.channels * ${t*n}u) { return; }
  let k = g % ${n}u;
  let y = (g / ${n}u) % ${t}u;
  let bc = g / ${t*n}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${s}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${l("X[base + x]")};
    accRe += v * tableCos[x * ${n}u + k];
    accIm += v * tableSin[x * ${n}u + k];
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
  if (g >= u.batch * u.channels * u.rows * ${n}u) { return; }
  let k = g % ${n}u;
  let r = (g / ${n}u) % u.rows;
  let bc = g / (${n}u * u.rows);
  var accRe = 0.0; var accIm = 0.0;
  let inBase = bc * u.inner * ${n}u + k;
  let tableBase = r * u.inner;
  for (var j = 0u; j < u.inner; j++) {
    let ar = inRe[inBase + j * ${n}u];
    let ai = inIm[inBase + j * ${n}u];
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
  let block = ${o*n}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${n}u;
  let s = (g / ${n}u) % ${o}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${i}u);
  let sp = s - half * ${i}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${i*n}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${n}u + k;
  let xBase = (b * u.channels * ${o}u + s) * ${n}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`,inverseColumns:`${a}
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
  if (g >= u.batch * u.channels * ${s}u) { return; }
  let p = g % ${s}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${s}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${n}u;
  for (var k = 0u; k < ${n}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${u("acc * "+1/pt)};
}`,residual:`${a}${gt}
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
  Y[g] = ${u("acc")};
}`}}function Pi(r,e,t){const i=2*e,n=[];for(let h=0;h<e;h++)n.push(h);for(let h=r-e;h<r;h++)n.push(h);const s=new Float32Array(r*t),o=new Float32Array(r*t);for(let h=0;h<r;h++)for(let g=0;g<t;g++){const p=2*Math.PI*h*g/r;s[h*t+g]=Math.cos(p),o[h*t+g]=-Math.sin(p)}const a=new Float32Array(i*r),l=new Float32Array(i*r);for(let h=0;h<i;h++)for(let g=0;g<r;g++){const p=2*Math.PI*n[h]*g/r;a[h*r+g]=Math.cos(p),l[h*r+g]=-Math.sin(p)}const u=new Float32Array(r*i),c=new Float32Array(r*i);for(let h=0;h<r;h++)for(let g=0;g<i;g++){const p=2*Math.PI*n[g]*h/r;u[h*i+g]=Math.cos(p)/r,c[h*i+g]=Math.sin(p)/r}const d=new Float32Array(t*r),f=new Float32Array(t*r);for(let h=0;h<t;h++){const g=(h===0?1:2)/r;for(let p=0;p<r;p++){const b=2*Math.PI*h*p/r;d[h*r+p]=g*Math.cos(b),f[h*r+p]=-g*Math.sin(b)}}return{forwardCos:s,forwardSin:o,rowRe:a,rowIm:l,inverseRowRe:u,inverseRowIm:c,inverseColCos:d,inverseColSin:f}}let Ii=class{constructor(e,t,i,n){const s=t.model;if(this.context=e,this.metadata=t,this.width=s.width,this.layers=s.layers,this.inputChannels=s.input_channels,this.outputChannels=s.output_channels,this.patch=t.inference.patch[0],this.modes1=s.modes[0],this.modes2=s.modes[1],this.maxBatch=n,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[u,c]of Object.entries(Bi(o)))this.pipelines[u]=e.pipeline(c);this.contractPipeline=e.pipeline(Ci);const a=u=>{const c=t.tensors[u];if(!c)throw new Error(`missing tensor ${u}`);return wi(new Uint16Array(i,c.offset,c.count))};this.read=a,this.tables={};for(const[u,c]of Object.entries(Pi(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(c,`fno.table.${u}`);this.weights={};const l=(u,c)=>{const d=a(c);this.weights[u]=this.store==="f16"?e.upload(Or(d),`fno.${u}`):e.upload(d,`fno.${u}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let u=0;u<this.layers;u++)l(`m1w${u}`,`mlp_layers.${u}.mlp1.weight`),l(`m1b${u}`,`mlp_layers.${u}.mlp1.bias`),l(`m2w${u}`,`mlp_layers.${u}.mlp2.weight`),l(`m2b${u}`,`mlp_layers.${u}.mlp2.bias`),l(`lw${u}`,`w_layers.${u}.weight`),l(`lb${u}`,`w_layers.${u}.bias`);this.buildSpectralWeights(),this.allocate(n)}buildSpectralWeights(){const{context:e,metadata:t}=this,i=t.tucker;let n=i.core_shape.slice(),s=e.upload(this.read(`${i.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${i.core}.im`),"tucker.core.im");for(const l of i.factors){const[u,c]=l.shape;if(n[l.mode]!==c)throw new Error(`factor ${l.name} does not match the core`);const d=n.slice();d[l.mode]=u;const f=d.reduce((M,_)=>M*_,1),h=d.slice(l.mode+1).reduce((M,_)=>M*_,1),g=e.storage(f*4,"tucker.re"),p=e.storage(f*4,"tucker.im"),b=e.upload(this.read(`${l.name}.re`),"tucker.f"),y=e.upload(this.read(`${l.name}.im`),"tucker.f"),w=e.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",l.mode],["u",u],["u",c],["u",h],["u",0],["u",f],["u",0]]),m=e.device.createCommandEncoder(),x=m.beginComputePass();e.dispatch(x,this.contractPipeline,[s,o,b,y,g,p,w],f),x.end(),e.device.queue.submit([m.finish()]),e.free(s),e.free(o),e.free(b),e.free(y),s=g,o=p,n=d}e.releaseScratch();const a=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(n.join()!==a.join())throw new Error(`spectral stack is ${n} but ${a} was expected`);this.spectralRe=s,this.spectralIm=o}allocate(e){const{context:t}=this,i=this.patch*this.patch,n=this.width,s=2*this.modes1,o=(l,u)=>t.storage(e*l*i*this.elementBytes,u),a=(l,u)=>t.storage(e*n*l*4,u);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(n,"fno.x"),t1:o(n,"fno.t1"),t2:o(n,"fno.t2"),gates:o(4*n,"fno.gates"),hidden:o(2*n,"fno.hidden"),spectral:o(n,"fno.spectral"),local:o(n,"fno.local"),wide:o(2*n,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:a(this.patch*this.modes2,"fno.xRe"),xIm:a(this.patch*this.modes2,"fno.xIm"),yRe:a(s*this.modes2,"fno.yRe"),yIm:a(s*this.modes2,"fno.yIm"),zRe:a(s*this.modes2,"fno.zRe"),zIm:a(s*this.modes2,"fno.zIm"),wRe:a(this.patch*this.modes2,"fno.wRe"),wIm:a(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,i=this.width,n=2*this.modes1,s=this.inputChannels+5*i+4*i+2*i+2*i+this.outputChannels,o=i*(2*this.patch*this.modes2*2+4*n*this.modes2)*4;return e*(s*t*this.elementBytes+o)}encode(e,t){const{context:i,buffers:n,pipelines:s,tables:o}=this,a=this.width,l=this.patch*this.patch,u=2*this.modes1,c=e.beginComputePass(),d=(h,g,p,b,y=256)=>{i.dispatch(c,h,[...g,i.uniform(p)],b,y)},f=(h,g,p=s.instanceNorm)=>{c.setPipeline(p),c.setBindGroup(0,i.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:g}}]})),c.dispatchWorkgroups(t*a)};d(s.conv1x1,[n.input,this.weights.p1w,this.weights.p1b,n.wide],[["u",t],["u",this.inputChannels],["u",2*a],["u",1]],t*2*a*l),d(s.conv1x1,[n.wide,this.weights.p2w,this.weights.p2b,n.x],[["u",t],["u",2*a],["u",a],["u",0]],t*a*l);for(let h=0;h<this.layers;h++)f(n.x,n.t1),d(s.forwardColumns,[n.t1,o.forwardCos,o.forwardSin,n.xRe,n.xIm],[["u",t],["u",a],["u",0],["u",0]],t*a*this.patch*this.modes2),d(s.rowMix,[n.xRe,n.xIm,o.rowRe,o.rowIm,n.yRe,n.yIm],[["u",t],["u",a],["u",u],["u",this.patch]],t*a*u*this.modes2),d(s.spectralMix,[n.yRe,n.yIm,this.spectralRe,this.spectralIm,n.zRe,n.zIm],[["u",t],["u",a],["u",2*h],["u",0]],t*a*u*this.modes2),d(s.rowMix,[n.zRe,n.zIm,o.inverseRowRe,o.inverseRowIm,n.wRe,n.wIm],[["u",t],["u",a],["u",this.patch],["u",u]],t*a*this.patch*this.modes2),d(s.inverseColumns,[n.wRe,n.wIm,o.inverseColCos,o.inverseColSin,n.t2],[["u",t],["u",a],["u",0],["u",0]],t*a*l),f(n.t2,n.t1,s.instanceNormScaled),d(s.conv1x1,[n.t1,this.weights[`m1w${h}`],this.weights[`m1b${h}`],n.gates],[["u",t],["u",a],["u",4*a],["u",0]],t*4*a*l),d(s.gate,[n.gates,n.hidden],[["u",t],["u",2*a],["u",0],["u",0]],t*2*a*l),d(s.conv1x1,[n.hidden,this.weights[`m2w${h}`],this.weights[`m2b${h}`],n.spectral],[["u",t],["u",2*a],["u",a],["u",0]],t*a*l),d(s.conv1x1,[n.x,this.weights[`lw${h}`],this.weights[`lb${h}`],n.local],[["u",t],["u",a],["u",a],["u",0]],t*a*l),d(s.residual,[n.spectral,n.local,n.x],[["u",t*a*l],["u",h<this.layers-1?1:0],["u",0],["u",0]],t*a*l);return d(s.conv1x1,[n.x,this.weights.q1w,this.weights.q1b,n.wide],[["u",t],["u",a],["u",2*a],["u",1]],t*2*a*l),d(s.conv1x1,[n.wide,this.weights.q2w,this.weights.q2b,n.output],[["u",t],["u",2*a],["u",this.outputChannels],["u",0]],t*this.outputChannels*l),c.end(),n.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}};const Ai=r=>r.toFixed(6),Fi=r=>`${r==="f16"?`enable f16;
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
                      / ${Ai(nt)});
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
}`;function Ri(r,e){if(!r)return e;if(!e)return r;const t=Math.min(r.y0,e.y0),i=Math.min(r.x0,e.x0);return{y0:t,x0:i,h:Math.max(r.y0+r.h,e.y0+e.h)-t,w:Math.max(r.x0+r.w,e.x0+e.w)-i}}function Ti(r,e,t){let i=1/0,n=-1/0;const s=o=>{i=Math.min(i,o),n=Math.max(n,o)};for(let o=0;o<4;o++){const a=r[o],l=r[(o+1)%4];a[1]>=e&&a[1]<=t&&s(a[0]);for(const u of[e,t])if((a[1]-u)*(l[1]-u)<0){const c=(u-a[1])/(l[1]-a[1]);s(a[0]+c*(l[0]-a[0]))}}return i<=n?[i,n]:null}let Li=class{constructor(e,t,i,n={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=n.batchSize||16,this.fno=new Ii(e,t,i,this.batchSize),this.blendPipeline=e.pipeline(Fi(this.fno.store)),this.finalizePipeline=e.pipeline(Ei),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,i=t.features,n=t.mddf.channels_per_signal,s=t.mddf.modes_per_signal,o=i.mddf_source_indices,a=new Uint32Array(o.length*4),l=new Float32Array(o.length*2);o.forEach((c,d)=>{const f=Math.floor(c/n),h=c%n,g=h>s?1:0,p=h===0?0:g?h-s:h;a.set([f*n+p,f*n+(p===0?0:s+p),p,g],d*4),l[d*2]=i.mddf_center[d],l[d*2+1]=i.mddf_scale[d]});const u=t.coordinates;return{channels:t.model.input_channels,mddfChannels:o.length,solidChannel:i.use_building_input?o.length:-1,coordChannel:o.length+(i.use_building_input?1:0),coordYScale:u.y_scale,coordZCentre:u.z_center,coordZScale:u.z_scale,coordXCentre:u.x_center,coordXScale:u.x_scale,tableBuffer:e.upload(a,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,t,i){this.city&&this.city.field.destroy();const n=Math.ceil(this.patch*Math.SQRT2),s=(t+2*n)*(i+2*n)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(s>o)throw new Error(`city ${i} x ${t} needs a ${(s/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const a=new Si(this.context,e,t,i,n,this.fno.store);return this.city={field:a,ny:t,nx:i,layerMap:e,margin:n,layerIndex:-1},{margin:n,gy:a.gy,gx:a.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:i}=this.city,n=(t-1)/2,s=(i-1)/2,o=Math.cos(e),a=Math.sin(e),l=[[0,0],[i-1,0],[i-1,t-1],[0,t-1]].map(([m,x])=>{const M=m-s,_=x-n;return[s+M*o+_*a,n-M*a+_*o]}),u=Math.floor(Math.min(...l.map(m=>m[1]))),c=Math.ceil(Math.max(...l.map(m=>m[1]))),d=Math.floor(Math.min(...l.map(m=>m[0]))),f=Math.ceil(Math.max(...l.map(m=>m[0]))),h=f-d+1,g=Math.max(1,Math.ceil((h-this.patch)/this.stride)+1),p=g>1?(h-this.patch)/(g-1):0,b=l.map(([m,x])=>[x,m]),y=[],w=[];for(let m=0;m<g;m++){const x=Math.round(d+m*p),M=Ti(b,x,x+this.patch-1)||[u,u+this.patch-1],_=Math.floor(M[0]),v=Math.max(this.patch,Math.ceil(M[1])-_+1),k=Math.max(1,Math.ceil((v-this.patch)/this.stride)+1),B=k>1?(v-this.patch)/(k-1):0;w.push([y.length/2,k,x-d]);for(let P=0;P<k;P++)y.push(x,Math.round(_+P*B))}return{origins:new Float32Array(y),columns:w,columnCount:g,columnStride:p,syMin:u,sxMin:d,gridH:c-u+1,gridW:f-d+1,patchCount:y.length/2}}patchRect(e,t,i){let n=1/0,s=1/0,o=-1/0,a=-1/0;for(const[l,u,c]of e.columns)for(let d=0;d<u;d++){const f=l+d;if(f<t||f>=i)continue;const h=e.origins[f*2+1]-e.syMin;n=Math.min(n,h),s=Math.min(s,c),o=Math.max(o,h+this.patch),a=Math.max(a,c+this.patch)}return Number.isFinite(n)?(n=Math.max(0,n),s=Math.max(0,s),o=Math.min(e.gridH,o),a=Math.min(e.gridW,a),{y0:n,x0:s,h:Math.max(0,o-n),w:Math.max(0,a-s)}):null}async predict(e,t={}){var Z,Y,se;const{context:i,city:n}=this,s=this.tiling(e),o=this.metadata.model.output_channels,a=s.gridH*s.gridW,l=this.patch*this.patch,u=performance.now(),c=!!(t.shouldDraw&&t.onDraw),d=o+2,f=i.storage(s.patchCount*o*l*this.fno.elementBytes,"predict.patches"),h=new Int32Array(s.patchCount);for(let F=0;F<s.patchCount;F++)h[F]=s.origins[F*2+1]-s.syMin;const g=i.upload(h,"blend.origins"),p=i.upload(new Int32Array(s.columns.flat()),"blend.columns"),b=i.storage(a*o*4,"blend.field"),y=i.storage(a*4,"blend.weight"),w=i.storage(a*4,"blend.solid"),m=i.storage(c?a*4:4,"blend.finalWeight"),x=i.storage(c?a*d*4:4,"blend.packed"),M=this.metadata.target,_=i.upload(new Float32Array(M.center),"final.centre"),v=i.upload(new Float32Array(M.scale),"final.scale"),k={y0:0,x0:0,h:s.gridH,w:s.gridW},B=(F,W,J,de)=>{const oe=F.beginComputePass();i.dispatch(oe,this.blendPipeline,[f,g,p,b,de,i.uniform([["u",s.gridH],["u",s.gridW],["u",this.patch],["u",o],["u",s.columnCount],["u",s.patchCount],["u",J],["u",0],["u",W.y0],["u",W.x0],["u",W.h],["u",W.w],["f",s.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],W.h*W.w),oe.end()},P=(F,W,J)=>{const de=F.beginComputePass();i.dispatch(de,this.finalizePipeline,[b,y,_,v,n.field.heightBuffer,w,m,x,i.uniform([["u",s.gridH],["u",s.gridW],["u",o],["u",J?1:0],["u",W.y0],["u",W.x0],["u",W.h],["u",W.w],["i",s.syMin],["i",s.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(n.ny-1)/2],["f",(n.nx-1)/2],["f",n.field.gy],["f",n.field.gx],["f",n.margin],["f",n.layerIndex],["f",n.ny],["f",n.nx],["f",0],["f",0]])],W.h*W.w),de.end()};if(c){const F=i.device.createCommandEncoder();B(F,k,s.patchCount,m),i.device.queue.submit([F.finish()]),(Z=t.onStart)==null||Z.call(t,{gridH:s.gridH,gridW:s.gridW,originY:s.syMin,originX:s.sxMin,theta:e,patchCount:s.patchCount})}const A=2,V=[];let z=null;for(let F=0;F<s.patchCount;F+=this.batchSize){(Y=t.signal)==null||Y.throwIfAborted();const W=Math.min(this.batchSize,s.patchCount-F),J=i.device.createCommandEncoder(),de=n.field.assemble(J,s.origins.subarray(F*2,(F+W)*2),this.plan,e,n.layerIndex,this.patch,this.fno.inputBuffer),oe=this.fno.encode(J,W);J.copyBufferToBuffer(oe,0,f,F*o*l*this.fno.elementBytes,W*o*l*this.fno.elementBytes);let re=null;if(c){z=Ri(z,this.patchRect(s,F,F+W));const Me=F+W>=s.patchCount;z&&z.h>0&&z.w>0&&(Me||t.shouldDraw())&&(re=z,z=null,B(J,re,F+W,y),P(J,re,!0))}if(i.device.queue.submit([J.finish()]),i.free(de),V.push(i.device.queue.onSubmittedWorkDone()),V.length>A&&await V.shift(),(se=t.onProgress)==null||se.call(t,(F+W)/s.patchCount),re){const Me=await i.readFloat32(x,re.h*re.w*d);t.onDraw({x0:re.x0,y0:re.y0,width:re.w,height:re.h,stride:d,channels:o,theta:e,values:Me,readyCount:F+W,patchCount:s.patchCount})}}const S=i.device.createCommandEncoder();B(S,k,s.patchCount,y),P(S,k,!1),i.device.queue.submit([S.finish()]);const[C,I,D]=await Promise.all([i.readFloat32(b,a*o),i.readFloat32(w,a),i.readFloat32(y,a)]),H=performance.now()-u;let q=0,E=0;for(let F=0;F<a;F++)if(I[F]!==2){if(D[F]<=1e-6){q+=1;continue}for(let W=0;W<o;W++)if(!Number.isFinite(C[F*o+W])){E+=1;break}}for(const F of[f,b,y,w,g,p,_,v,m,x])i.free(F);return i.releaseScratch(),{values:C,solid:I,theta:e,height:s.gridH,width:s.gridW,originY:s.syMin,originX:s.sxMin,patchCount:s.patchCount,channels:M.channel_names,milliseconds:H,uncovered:q,nonFinite:E,insideCells:a}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}};function Di(r,e){var t,i,n,s,o,a,l,u,c;if(r.dtype!=="float16"||r.total_bytes!==e||((t=r.grid)==null?void 0:t.horizontal_spacing_m)!==4||((i=r.grid)==null?void 0:i.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((n=r.model)==null?void 0:n.input_channels)!==24||((s=r.model)==null?void 0:s.output_channels)!==5||((a=(o=r.inference)==null?void 0:o.patch)==null?void 0:a.join())!=="64,64"||((u=(l=r.target)==null?void 0:l.channel_names)==null?void 0:u.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const d of Object.values(r.tensors??{}))if(!Number.isInteger(d.offset)||d.offset<0||d.offset%2||!Number.isInteger(d.count)||d.count<=0||d.offset+d.count*2>e||!Array.isArray(d.shape)||d.shape.some(f=>!Number.isInteger(f)||f<1)||d.shape.reduce((f,h)=>f*h,1)!==d.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(r.tensors??{}).length||!Number.isFinite((c=r.wind)==null?void 0:c.reference_speed_m_s)||r.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function zi(r){if(!Number.isInteger(r.width)||!Number.isInteger(r.height)||r.width<1||r.height<1||r.values.length!==r.width*r.height*5||r.solid.length!==r.width*r.height)throw new Error("Invalid prediction shape.");for(let e=0;e<r.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(r.values[e*5+t])||(r.solid[e]=2,r.values[e*5+t]=0)}const ue=5,Ni=2,Vi=4,Ui=.9,Oi=159,Wi=30,Xi=1.2,Yi=512*1024*1024;function ji(r){var t;const e=Math.max(Wi,Xi*(((t=r.statistics)==null?void 0:t.maximumHeightM)??0));return Math.max(0,Math.min(Oi,Math.round(e/ie-.5)))}function Hi(r){const e=r.layers.filter(t=>t>0).sort();return e.length?e[Math.floor(Ui*(e.length-1))]:0}function qi(r,e=r){const t=[];for(let i=0;i<r;i+=i<e?Ni:Vi)t.push(i);return t.push(r),t}const Yr=r=>qi(ji(r),Hi(r)),Dt=5;function $t(r,e=Dt){const t=r.length,i=Math.min(e,t),n=new Set;for(let o=0;o<i;o++)n.add(Math.round(o*(t-1)/Math.max(1,i-1)));const s=[...n].sort((o,a)=>o-a);for(;s.length<t;){const o=[...s].sort((l,u)=>l-u);let a=0;for(let l=1;l+1<o.length;l++)o[l+1]-o[l]>o[a+1]-o[a]&&(a=l);s.push(Math.floor((o[a]+o[a+1])/2))}return s.map(o=>r[o])}function Gi(r,e,t=Yi){const i=e*(ue*4+1),n=Math.max(2,Math.floor(t/i));if(r.length<=n)return r;const s=(r.length-1)/(n-1);return Array.from({length:n},(o,a)=>r[Math.round(a*s)])}function jr(r,e,t=!0){const i=r.width*r.height;return{width:r.width,height:r.height,originX:r.originX,originY:r.originY,theta:r.theta,plan:[...e],layers:t?[...e]:[],slots:t?e.map((n,s)=>s):[],values:new Float32Array(e.length*i*ue),solid:new Uint8Array(e.length*i)}}function Hr(r,e,t){if(t.width!==r.width||t.height!==r.height||t.originX!==r.originX)throw new Error("Wind layers do not share one wind-frame grid.");const i=r.width*r.height;if(r.values.set(t.values,e*i*ue),r.solid.set(t.solid,e*i),r.slots.includes(e))return;const n=r.plan[e];let s=0;for(;s<r.layers.length&&r.layers[s]<n;)s++;r.layers.splice(s,0,n),r.slots.splice(s,0,e)}function Zi(r,e){const t=r.width*r.height,i=r.slots[e];return{values:r.values.subarray(i*t*ue,(i+1)*t*ue),solid:r.solid.subarray(i*t,(i+1)*t)}}function zt(r,e){const t=e/ie-.5,{layers:i}=r;if(t<=i[0])return{k0:0,k1:0,f:0};const n=i.length-1;if(t>=i[n])return{k0:n,k1:n,f:0};let s=1;for(;i[s]<t;)s++;const o=s-1;return{k0:o,k1:s,f:(t-i[o])/(i[s]-i[o])}}const Nt=r=>(r.layers.at(-1)+.5)*ie;function Ki(r,e){const{k0:t,k1:i,f:n}=zt(r,e),s=r.width*r.height,o=s*ue,a=new Float32Array(o),l=r.slots[t]*o,u=r.slots[i]*o;for(let d=0;d<o;d++)a[d]=r.values[l+d]*(1-n)+r.values[u+d]*n;const c=r.slots[n<.5?t:i];return{values:a,solid:r.solid.slice(c*s,(c+1)*s),width:r.width,height:r.height,originX:r.originX,originY:r.originY,theta:r.theta}}function qr(r,e,t,i,n){const s=(e-1)/2,o=(t-1)/2,a=i/L-.5-s,l=n/L-.5-o,u=Math.cos(r.theta),c=Math.sin(r.theta);return[a*u+l*c+s-r.originX,-a*c+l*u+o-r.originY]}function Ji(r,e,t,i,n,s,o){const[a,l]=qr(r,e,t,i,n),{width:u,height:c}=r;if(!(a>=0&&l>=0&&a<=u-1&&l<=c-1))return null;const d=Math.min(u-2,Math.floor(a)),f=Math.min(c-2,Math.floor(l)),h=u>1?a-d:0,g=c>1?l-f:0,{k0:p,k1:b,f:y}=zt(r,s),w=u*c;for(let m=0;m<ue;m++)o[m]=0;for(const[m,x]of[[p,1-y],[b,y]])if(x!==0)for(const[M,_]of[[0,1-g],[1,g]])for(const[v,k]of[[0,1-h],[1,h]]){const B=x*_*k;if(B===0)continue;const P=(r.slots[m]*w+Math.min(c-1,f+M)*u+Math.min(u-1,d+v))*ue;for(let A=0;A<ue;A++)o[A]+=r.values[P+A]*B}return o}function Qi(r,e,t){const i=Math.cos(e),n=Math.sin(e);return t[0]=r[0]*i-r[2]*n,t[1]=r[0]*n+r[2]*i,t[2]=r[1],t}function es(r,e,t,i){const n=Math.floor(e/L),s=Math.floor(t/L);return n<0||s<0||n>=r.nx||s>=r.ny?!0:i<r.layers[s*r.nx+n]*ie}function Gr(r,e){const t=Math.max(ie/2,Math.min(Nt(r),Number(e)||0)),i=Math.max(0,Math.round(t/ie-.5));return{...Ki(r,t),grid:r.grid,settings:{...r.settings,heightM:t,layerIndex:i},referenceSpeed:r.referenceSpeed,colorbar:r.colorbar,modelLabel:r.modelLabel,patchCount:r.patchCount,milliseconds:r.milliseconds}}function ts(r,e){const t=Math.round((r.height-1)/2+Number(e)/L);return Math.max(0,Math.min(r.height-1,t))}function rs(r){const{nx:e,ny:t}=r.grid,n=[[0,0],[e,0],[0,t],[e,t]].map(([l,u])=>qr(r,e,t,l*L,u*L)[1]),s=(r.height-1)/2,o=Math.max(0,Math.min(...n))-s,a=Math.min(r.height-1,Math.max(...n))-s;return[Math.ceil(o)*L,Math.floor(a)*L]}function ns(r,e){const{width:t}=r,i=r.width*r.height,n=r.layers.at(-1)+1,s=new Float32Array(t*n*ue),o=new Uint8Array(t*n);for(let a=0;a<n;a++){const{k0:l,k1:u,f:c}=zt(r,(a+.5)*ie),d=r.slots[c<.5?l:u];for(let f=0;f<t;f++){const h=e*t+f,g=(r.slots[l]*i+h)*ue,p=(r.slots[u]*i+h)*ue,b=(a*t+f)*ue;for(let y=0;y<ue;y++)s[b+y]=r.values[g+y]*(1-c)+r.values[p+y]*c;o[a*t+f]=r.solid[d*i+h]}}return{values:s,solid:o,width:t,height:n}}const We=Object.freeze({TIMEOUT:"timeout",CANCELLED:"cancelled",DOWNLOAD:"download",GPU:"gpu",PLANNER:"planner",MODEL:"model",MISSION:"mission",TOO_LARGE:"too-large"});class Xe extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const fe=r=>new Xe(We.MODEL,r),Zr=8,Kr=new MessageChannel,Jr=[];Kr.port1.onmessage=()=>{var r;return(r=Jr.shift())==null?void 0:r()};const Qr=()=>new Promise(r=>{Jr.push(r),Kr.port2.postMessage(0)});class en{constructor(){this.buffers=[null,null],this.slot=1}next(e){var t;return this.slot^=1,((t=this.buffers[this.slot])==null?void 0:t.byteLength)>=e||(this.buffers[this.slot]=new SharedArrayBuffer(e)),this.buffers[this.slot]}}const N=256,mt=1<<20;class Vt{constructor(e,t,i){this.adapterInfo=i,this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[],this.halfRing=new en}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Xe(We.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Xe(We.GPU,"No WebGPU adapter available.");const i=e&&t.features.has("shader-f16"),n=await t.requestDevice({requiredFeatures:i?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Vt(n,i,t.info??null)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t,i){const n=Math.max(4,Math.ceil(e/4)*4),s=this.device.createBuffer({size:n,usage:t,label:i});return s.tracked=!0,s}storage(e,t){const i=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,i,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e,t){const i=this.storage(e.byteLength,t);return this.write(i,e),i}write(e,t){if(t.byteLength%4){const i=new Uint8Array(Math.ceil(t.byteLength/4)*4);i.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,i)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,i=new ArrayBuffer(t),n=new Uint32Array(i),s=new Int32Array(i),o=new Float32Array(i);e.forEach(([l,u],c)=>{l==="u"?n[c]=u:l==="i"?s[c]=u:o[c]=u});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,i),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),i=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,i)}return this.pipelines.get(e)}dispatch(e,t,i,n,s=N){this.dispatchGroups(e,t,i,...this.workgroups(n,s))}workgroups(e,t=N){const i=Math.max(1,Math.ceil(e/t)),n=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(i,n),Math.ceil(i/n)]}dispatchGroups(e,t,i,...n){this.replay(e,this.prepared(t,i,n))}prepared(e,t,i){const n=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((s,o)=>({binding:o,resource:{buffer:s}}))});return{pipeline:e,bindGroup:n,groups:i}}replay(e,{pipeline:t,bindGroup:i,groups:n}){e.setPipeline(t),e.setBindGroup(0,i),e.dispatchWorkgroups(...n)}async readBack(e,t,i,n){const s=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,i),o=this.device.createCommandEncoder();t(o,s),this.device.queue.submit([o.finish()]);try{await s.mapAsync(GPUMapMode.READ);const a=await n(s.getMappedRange());return s.unmap(),a}finally{this.free(s)}}async readHalf(e,t,i){const n=(s,o)=>s.copyBufferToBuffer(e,0,o,0,o.size);return this.readBack(t*2,n,"staging",s=>this.copyHalves(s,t,i))}async copyHalves(e,t,i){const n=i?new Uint16Array(this.halfRing.next(t*2),0,t):new Uint16Array(t),s=new Uint16Array(e,0,t);let o=performance.now();for(let a=0;a<t;a+=mt)n.set(s.subarray(a,Math.min(t,a+mt)),a),a+mt<t&&performance.now()-o>Zr&&(await Qr(),o=performance.now());return n}}const it=4,De=1.5;let pe=20,st=80,Oe=st-pe+1;function is(r,e){pe=r,st=e,Oe=e-r+1}const ss=2,os=32,G=4,as=()=>!!globalThis.crossOriginIsolated&&typeof SharedArrayBuffer<"u",ls=()=>navigator.hardwareConcurrency||4;function us(r){let e=0;for(let t=0;t<r.length;t++){const i=r[t],n=r[(t+1)%r.length];e+=i[0]*n[1]-n[0]*i[1]}return e}function cs(r,e){const t=e.reduce((s,o)=>s+o[0],0)/e.length,i=e.reduce((s,o)=>s+o[1],0)/e.length;let n=r;for(let s=0;s<e.length&&n.length;s++){const o=e[s],a=e[(s+1)%e.length],l=d=>(a[0]-o[0])*(d[1]-o[1])-(a[1]-o[1])*(d[0]-o[0]),u=l([t,i])>0?1:-1,c=n;n=[];for(let d=0;d<c.length;d++){const f=c[d],h=c[(d+1)%c.length],g=u*l(f),p=u*l(h);if(g>=0&&n.push(f),g>=0!=p>=0){const b=g/(g-p);n.push([f[0]+b*(h[0]-f[0]),f[1]+b*(h[1]-f[1])])}}}return n}function tn(r,e,t){const i=(e-1)/2,n=(t-1)/2,s=Math.cos(r),o=Math.sin(r);return{theta:r,cX:i,cY:n,cos:s,sin:o,toWind:([a,l])=>{const u=a-i,c=l-n;return[i+u*s+c*o,n-u*o+c*s]},toCity:([a,l])=>{const u=a-i,c=l-n;return[i+u*s-c*o,n+u*o+c*s]}}}const ae=64,ee=180,rn=1600,ds=640,we=8,j=32,ve=r=>r.toFixed(6),xe=r=>{const e=Math.fround(r);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},fs=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,hs=()=>`
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
@compute @workgroup_size(${ae})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ae}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${ve(De)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${ve(De)}, has1);
  let cutoff = ${ve(rn)};
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
}`;function gs(r){const e=i=>i.part==="dc"?"dc":`${i.part}.${i.mode===1?"x":"y"}`,t=r.map((i,n)=>`  sums[e + ${n}u] += ${e(i)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${ae})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ae}u;
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
}`}const Se=64,le=8,Pe=Se/le,ce=Pe*Pe,kt=le*le,dr=Math.log2(Se),fr=Math.log2(le),Ge=le-1,Ut="15u",St="4u",nn="0xfffu",Ct="2048",ps="4095",Ot="16u",hr=(r,e,t,i,n)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${n?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${r.length}> = array<f32, ${r.length}>(${e.map(xe).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${r.length}u + c] / ${ve(ee)} / STEPS[c]));
}
@compute @workgroup_size(${ae})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ae}u;
  if (g >= u.nTiles * ${ce}u) { return; }
  let t = g / ${ce}u;
  let b = g % ${ce}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${i}u;
  let c = (t / ${t*i}u) % ${r.length}u;
  let k = t / ${t*i*r.length}u;
${n?`  let h = field[u.nTiles + t * ${ce}u + b];
  let w = h & ${Ut};
  if (w == 0u) { return; }
  let base = i32((h >> ${St}) & ${nn}) - ${Ct};
  var wi = field[t] + (h >> ${Ot});
  let x0 = tx * ${Se}u + (b % ${Pe}u) * ${le}u;
  let y0 = ty * ${Se}u + (b / ${Pe}u) * ${le}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${kt}u; j++) {
    let x = x0 + j % ${le}u; let y = y0 + j / ${le}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${Se}u + (b % ${Pe}u) * ${le}u;
  let y0 = ty * ${Se}u + (b / ${Pe}u) * ${le}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${kt}u; j++) {
    let x = x0 + j % ${le}u; let y = y0 + j / ${le}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ce}u + b] = w | (u32(clamp(mn + ${Ct}, 0, ${ps})) << ${St});`}
}`,ms=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${ae})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${ae}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${ce}u; b++) {
    let h = headers[t * ${ce}u + b];
    headers[t * ${ce}u + b] = h | (local << ${Ot});
    local += ${kt/32}u * (h & ${Ut});
  }
  tileWords[t] = local;
}`,ys=r=>{const e=`array<f32, ${we}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${fs}
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
@compute @workgroup_size(${ae})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${ae}u;
  let groupsPerPixel = (u.layerCount + ${we-1}u) / ${we}u;
  let cells = ${j*j}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${j} + i32(cell % ${j}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${j} + i32(cell / ${j}u));
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
  let first = layerGroup * ${we}u;
  let count = min(${we}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${we}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${ve(De)};
  }
  // grid traversal along the single upwind azimuth, for up to LAYER_GROUP query heights at once (the cells the ray
  // crosses do not depend on the height, only where it stops and what it records)
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${ve(it)};
    let gyr = u.sinU / ${ve(it)};
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
    let cutoff = ${ve(rn)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${we}>;
    for (var k = 0u; k < ${we}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${ds}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${we}u; k++) {
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
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${r.length}u;
${r.map((i,n)=>`    put(e0 + ${n}u, ${t[i]});`).join(`
`)}
  }
}`},bs=(r,e,t)=>{const i=e.stored.length,n=e.up.length,{usesHeight:s}=e,o=[["field","array<u32>"]];s&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),n&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const a=o.map(([c,d],f)=>`@group(0) @binding(${f}) var<storage, read> ${c}: ${d};`);a.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${r}>;`),a.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const l=(c,d)=>`(${c} - ${xe(d.center)}) / ${xe(d.scale)}`,u=e.inputs.map((c,d)=>{let f;if(c.source==="r1")if(c.part==="dc")f=`value = ${l(`sampleField(ry, rx, slot, ${e.storedIndex(c.signal,"dc",0)}u)`,c)};`;else{const h=e.storedIndex(c.signal,"re",c.mode),g=e.storedIndex(c.signal,"im",c.mode);f=`let re = sampleField(ry, rx, slot, ${h}u);
      let im = sampleField(ry, rx, slot, ${g}u);
      let angle = ${xe(c.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${l(c.part==="im"?"(re * s + im * c)":"(re * c - im * s)",c)};`}else if(c.source==="geo"){const h=c.index===0?"h / 100.0":"asinh((h - z) / 10.0)";f=`let h = roofHeight(iy, ix);
      value = ${l(`f16round(${h})`,c)};`}else c.source==="up"?f=`value = ${l(`upAtWind(sy, sx, slot, ${e.up.indexOf(c.index)}u)`,c)};`:c.source==="solid"?f=`let roofLayer = round(roofHeight(iy, ix) / ${ve(De)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:c.axis==="y"?f=`value = (sy - u.centreY) / ${xe(c.scale)};`:c.axis==="z"?f=`value = (f32(layer) - ${xe(c.center)}) / ${xe(c.scale)};`:f=`value = (sx - ${xe(c.center)}) / ${xe(c.scale)};`;return`    case ${d}u: {  // ${c.name}
      ${f}
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
${a.join(`
`)}

// Round to the nearest float16 value (ties to even), as numpy astype(float16).  Done with bit
// operations: the shader compiler may fold unpack2x16float(pack2x16float(v)) away.
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }   // float16 subnormals
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${i}> = array<f32, ${i}>(${t.steps.map(xe).join(", ")});
// one value of the packed field (region = whole padded grid)
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${i}u + c) * ${t.ty}u + (y >> ${dr}u)) * ${t.tx}u + (x >> ${dr}u);
  let h = field[u.packTiles + t * ${ce}u + ((y >> ${fr}u) & ${Ge}u) * ${Pe}u + ((x >> ${fr}u) & ${Ge}u)];
  let w = h & ${Ut};
  var q = i32((h >> ${St}) & ${nn}) - ${Ct};
  if (w > 0u) {
    let bit = (((y & ${Ge}u) * ${le}u) + (x & ${Ge}u)) * w;
    let word = field[t] + (h >> ${Ot}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${n?`// along-wind channels computed at the wind-frame cells (no interpolation): tile table -> tile slot -> value
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(j)}u) >= u.upTW || u32(ty >> ${Math.log2(j)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(j)}u) * u.upTW + u32(tx >> ${Math.log2(j)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${j*j}u + u32(ty & ${j-1}) * ${j}u + u32(tx & ${j-1})) * ${n}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${s?`fn roofHeight(iy: f32, ix: f32) -> f32 {
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

@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${N}u;
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
  let z = (f32(layer) + 0.5) * ${ve(De)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${u.join(`
`)}
    default: {}
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`},ws=4,xs=48<<20,vs=3,Ms=.016,_s=256;class $s{constructor(e,{layers:t,ny:i,nx:n},s,o,a){this.context=e,this.inputPlan=a,this.ny=i,this.nx=n,this.margin=s,this.gy=i+2*s,this.gx=n+2*s;const l=new Float32Array(this.gy*this.gx);for(let g=0;g<i;g++)for(let p=0;p<n;p++)l[(g+s)*this.gx+p+s]=t[g*n+p]*De;this.heightBuffer=e.upload(l,"mddf.height");const u=new Float32Array(ee),c=new Float32Array(ee);for(let g=0;g<ee;g++)u[g]=Math.cos(2*Math.PI*g/ee),c[g]=Math.sin(2*Math.PI*g/ee);this.cosT=u,this.sinT=c,this.scanPipeline=e.pipeline(hs()),this.accumulatePipeline=e.pipeline(gs(a.stored)),this.upWind=a.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(ys(a.up)));const d=a.stored.map(g=>2*Ms*g.scale),f=Math.ceil(this.gx/Se),h=Math.ceil(this.gy/Se);this.packed={steps:d,tx:f,ty:h},this.packHeaderPipeline=e.pipeline(hr(a.stored,d,f,h,!1)),this.packPayloadPipeline=e.pipeline(hr(a.stored,d,f,h,!0)),this.packTilePipeline=e.pipeline(ms()),this.assemblePipeline=e.pipeline(bs(o,a,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const i=this.gx*this.gy,n=this.storedBytesPerCellLayer*i;let s=Math.max(1,Math.min(e.length,Math.floor(t/n)));if(s=Math.min(s,ws),n>t)throw new Xe(We.TOO_LARGE,`one layer needs ${n} bytes, above the ${t}-byte buffer limit`);const o=[];for(let a=0;a<e.length;a+=s){const l=e.slice(a,a+s),u=new Int32Array(_s).fill(-1);l.forEach((c,d)=>{u[c]=d}),o.push({layers:l,slots:u,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const i of e)i.slotBuffer=t.upload(i.slots,"mddf.slots"),i.layerBuffer=t.upload(new Uint32Array(i.layers),"mddf.layers");this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,i=Math.max(e,t),n=new Int32Array(ee*i),s=new ArrayBuffer(ee*32),o=new Uint32Array(s),a=new Int32Array(s),l=new Float32Array(s),u=new Float32Array(ee*4);let c=0;for(let d=0;d<ee;d++){const f=this.cosT[d],h=this.sinT[d],g=Math.abs(f)>=Math.abs(h),p=g?f:h,b=g?h:f,y=Math.abs(b/p),w=g?e:t,m=g?t:e;for(let _=0;_<w;_++)n[d*i+_]=Math.round(y*_);const x=n[d*i+w-1],M=m+x;c=Math.max(c,M),o[8*d]=g?1:0,a[8*d+1]=p>=0?1:-1,a[8*d+2]=b>=0?1:-1,a[8*d+3]=x,o[8*d+4]=M,o[8*d+5]=d*i,l[8*d+6]=it*Math.sqrt(1+y*y),u.set([f,h,Math.cos(4*Math.PI*d/ee),Math.sin(4*Math.PI*d/ee)],4*d)}return this.offsetBuffer=this.context.upload(n,"mddf.offsets"),this.tableBuffer=this.context.upload(o,"mddf.scanTable"),this.trigBuffer=this.context.upload(u,"mddf.trig"),this.scanInfo={lineMax:c},this.scanInfo}async scan(e,t){if(this.destroyed)return;const{context:i,gx:n,gy:s}=this,{lineMax:o}=this.scanTables(),a=n*s,l=this.inputPlan.stored.length,u=e.layers.length,c=Math.ceil(u/2),d=Math.max(1,Math.min(ee,Math.floor(xs/(c*a*4)))),f=d*c*a*4,h=u*a*l*4;(!this.scanRaw||this.scanRaw.size<f)&&(i.free(this.scanRaw),this.scanRaw=i.storage(f,"mddf.scanRaw")),(!this.sumsBuffer||this.sumsBuffer.size<h)&&(i.free(this.sumsBuffer),this.sumsBuffer=i.storage(h,"mddf.sums"));const g=i.device.createCommandEncoder();g.clearBuffer(this.sumsBuffer,0,u*a*l*4),i.device.queue.submit([g.finish()]);const p=[];for(let b=0;b<ee;b+=d){if(this.destroyed)return;const y=Math.min(d,ee-b),w=i.device.createCommandEncoder(),m=w.beginComputePass(),x=i.uniform([["u",n],["u",s],["u",a],["u",0],["u",u],["u",c],["u",b],["u",y],["u",o],["u",0],["u",0],["u",0]]);i.dispatch(m,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,x],o*c*y,ae);const M=i.uniform([["u",a],["u",u],["u",c],["u",b],["u",y],["u",0],["u",0],["u",0]]);i.dispatch(m,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,M],a*u,ae),m.end(),i.device.queue.submit([w.finish()]),p.push(i.device.queue.onSubmittedWorkDone()),p.length>=vs&&await p.shift(),t((b+y)/ee)}this.destroyed||(await this.packGroup(e,u,a),!this.destroyed&&(await i.device.queue.onSubmittedWorkDone(),!this.destroyed&&(i.free(this.scanRaw),this.scanRaw=null,i.free(this.sumsBuffer),this.sumsBuffer=null,i.releaseScratch())))}async packGroup(e,t,i){const{context:n,gx:s,gy:o}=this,{tx:a,ty:l}=this.packed,u=t*this.inputPlan.stored.length*a*l,c=n.storage(u*ce*4,"mddf.packHeaders"),d=n.storage(u*4,"mddf.packTileWords"),f=n.uniform([["u",s],["u",o],["u",i],["u",t],["u",u],["u",0],["u",0],["u",0]]),h=n.uniform([["u",u],["u",0],["u",0],["u",0]]),g=()=>{n.free(c),n.free(d)},p=(_,v)=>{const k=_.beginComputePass();n.dispatch(k,this.packHeaderPipeline,[this.sumsBuffer,c,f],u*ce,ae),n.dispatch(k,this.packTilePipeline,[c,d,h],u,ae),k.end(),_.copyBufferToBuffer(d,0,v,0,u*4)};let b;try{b=await n.readBack(u*4,p,"mddf.packTileWords read",_=>this.destroyed?null:new Uint32Array(_.slice(0)))}catch(_){throw g(),_}if(!b){g();return}const y=new Uint32Array(u);let w=u+u*ce;for(let _=0;_<u;_++)y[_]=w,w+=b[_];n.free(e.field),e.field=n.storage(Math.max(4,w*4),"mddf.field"),e.packTiles=u,n.write(e.field,y);const m=n.device.createCommandEncoder();m.copyBufferToBuffer(c,0,e.field,u*4,u*ce*4);const x=m.beginComputePass(),M=n.uniform([["u",s],["u",o],["u",i],["u",t],["u",u],["u",0],["u",0],["u",0]]);n.dispatch(x,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],u*ce,ae),x.end(),n.device.queue.submit([m.finish()]),await n.device.queue.onSubmittedWorkDone(),g()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const i=t/(2*Math.PI)*ee,n=Math.round(i)%ee;return Math.abs(i-Math.round(i))<1e-6?[this.cosT[n],this.sinT[n]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const i=tn(e,this.nx,this.ny);let n=1/0,s=-1/0,o=1/0,a=-1/0;for(const f of[-.5,this.nx-.5])for(const h of[-.5,this.ny-.5]){const[g,p]=i.toWind([f,h]);n=Math.min(n,g),s=Math.max(s,g),o=Math.min(o,p),a=Math.max(a,p)}const l=Math.floor((n-t)/j)*j,u=Math.floor((o-t)/j)*j,c=Math.ceil((s+t+1-l)/j),d=Math.ceil((a+t+1-u)/j);return{theta:e,x0:l,y0:u,tw:c,th:d,table:new Int32Array(c*d).fill(-1),count:0}}ensureUpTiles(e,t,i,n,s){const{context:o}=this;let a=this.upGrid;(!a||a.theta!==t||a.count>0&&e.some(x=>x.upGrid!==a))&&(a=this.upGrid=this.upTileGrid(t,n));const l=[];for(const[x,M]of i){const _=Math.floor((M-a.x0)/j),v=Math.floor((M+n-1-a.x0)/j),k=Math.floor((x-a.y0)/j),B=Math.floor((x+n-1-a.y0)/j);if(_<0||k<0||v>=a.tw||B>=a.th)throw new Error("a patch lies outside the wind-frame tile grid");for(let P=k;P<=B;P++)for(let A=_;A<=v;A++){const V=P*a.tw+A;a.table[V]<0&&(a.table[V]=a.count+l.length/3,l.push(A,P,a.table[V]))}}const u=l.length/3;if(!u)return 0;s();const c=a.count,d=c+u,f=this.inputPlan.up.length,h=j*j,g=o.device.createCommandEncoder(),p=[];for(const x of e){const M=x.layers.length*h*f*2;if(x.upGrid!==a&&(x.upCount=0),!x.upTiles||x.upCapacity<d){const _=Math.min(a.tw*a.th,Math.max(d,Math.ceil(x.upCapacity*1.5))),v=o.storage(_*M,"mddf.upTiles");x.upTiles&&x.upCount&&g.copyBufferToBuffer(x.upTiles,0,v,0,x.upCount*M),x.upTiles&&p.push(x.upTiles),x.upTiles=v,x.upCapacity=_}x.upGrid=a,g.clearBuffer(x.upTiles,c*M,u*M),x.upCount=d}const b=o.upload(new Int32Array(l),"mddf.upTileList"),[y,w]=this.upwindDirection(t),m=g.beginComputePass();for(const x of e){const M=[this.heightBuffer,x.layerBuffer,x.upTiles,b];o.dispatch(m,this.alongPipeline,[...M,o.uniform([["u",this.gx],["u",this.gy],["u",u],["u",x.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",a.x0],["i",a.y0],["u",0],["u",0],["f",y],["f",w],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],u*h*Math.ceil(x.layers.length/we),ae)}m.end(),(!this.upTableBuffer||this.upTableBuffer.size!==a.table.byteLength)&&(o.free(this.upTableBuffer),this.upTableBuffer=o.storage(a.table.byteLength,"mddf.upTable")),o.write(this.upTableBuffer,a.table),o.device.queue.submit([g.finish()]);for(const x of p)o.free(x);return o.free(b),a.count=d,u}assemble(e,t,i,n,s,o){var b,y,w,m;const{context:a,inputPlan:l,gx:u,gy:c}=this,d=t.length/3,f=a.upload(t,"assemble.origins"),h=a.uniform([["u",d],["u",l.inputs.length],["u",s],["u",s],["u",u],["u",c],["u",0],["u",0],["u",u],["u",c],["u",u*c],["u",this.margin],["f",Math.cos(n)],["f",Math.sin(n)],["f",n],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",i.packTiles],["f",0],["f",0],["i",((b=this.upGrid)==null?void 0:b.x0)??0],["i",((y=this.upGrid)==null?void 0:y.y0)??0],["u",((w=this.upGrid)==null?void 0:w.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",i.layers.length],["u",0],["u",0],["u",0]]),g=[i.field];if(l.usesHeight&&g.push(this.heightBuffer),g.push(f,i.slotBuffer),l.up.length){if(i.upGrid!==this.upGrid)throw new Error("along-wind tiles of another direction (ensureUpTiles first)");g.push(i.upTiles,this.upTableBuffer)}g.push(o,h);const p=e.beginComputePass();return a.dispatch(p,this.assemblePipeline,g,d*l.inputs.length*s*s),p.end(),f}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function ks(r){const e=r.inputs;if(!e)throw fe("the model metadata has no input manifest (metadata.inputs)");if(e.length!==r.model.input_channels)throw fe(`manifest has ${e.length} inputs, model expects ${r.model.input_channels}`);const t=[],i=(l,u,c)=>t.findIndex(d=>d.key===`${l}:${u}:${c}`),n=(l,u,c)=>{i(l.signal,u,c)>=0||t.push({key:`${l.signal}:${u}:${c}`,signal:l.signal,part:u,mode:c,scale:l.scale})},s=[];for(const l of e){if(l.source==="r1")l.part==="dc"?n(l,"dc",0):(n(l,"re",l.mode),n(l,"im",l.mode));else if(l.source==="up")s.includes(l.index)||s.push(l.index);else if(!["geo","solid","coord"].includes(l.source))throw fe(`unsupported input source ${l.source}`);if(l.source==="geo"&&![0,1].includes(l.index))throw fe(`unsupported geo channel ${l.index}`);if(l.source==="up"&&!(l.index>=0&&l.index<4))throw fe(`unsupported up channel ${l.index}`)}for(const l of t)if(l.mode>2)throw fe("Fourier modes above 2 are not computed");const o=[...new Set(t.map(l=>l.signal))].sort();if(o.length!==1||o[0]!==0)throw fe("the stored channels must be those of the upper distance (signal 0) only");const a=e.some(l=>l.source==="solid"||l.source==="geo");return{inputs:e,stored:t,storedIndex:i,up:s,usesHeight:a}}function Bt(r){const e=Math.round(r);return Math.abs(r%1)===.5&&e%2!==0?e-1:e}let Ce=null;function sn(){if(Ce)return Ce;Ce=new Float32Array(65536);for(let r=0;r<65536;r++){const e=r&32768?-1:1,t=r>>10&31,i=r&1023;t===0?Ce[r]=e*i*2**-24:t===31?Ce[r]=i?NaN:e*(1/0):Ce[r]=e*(1+i/1024)*2**(t-15)}return Ce}function Ss(r){const e=new Float32Array(r.length),t=sn();for(let i=0;i<r.length;i++)e[i]=t[r[i]];return e}function Cs(r){const e=new Uint16Array(r.length),t=new Float32Array(1),i=new Uint32Array(t.buffer);for(let n=0;n<r.length;n++){t[0]=r[n];const s=i[0],o=s>>>16&32768,a=s>>>23&255;let l=s&8388607;if(a===255){e[n]=o|31744|(l?1:0);continue}const u=a-127+15;if(u>=31){e[n]=o|31744;continue}if(u<=0){if(u<-10){e[n]=o;continue}l|=8388608;const d=14-u;let f=l>>>d;l>>>d-1&1&&(f+=1),e[n]=o|f;continue}let c=u<<10|l>>>13;l&4096&&(c+=1),e[n]=o|c}return e}const Wt=`
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
`,Bs=`
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
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
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
}`;function gr(r,e,t){const{enable:i,load:n,save:s}=ze(r);return`${i}
@group(0) @binding(0) var<storage, read> X: array<${r}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${r}>;
var<workgroup> partial: array<f32, ${N}>;
@compute @workgroup_size(${N})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${N}u) { s += ${n("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${N/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${N}u) {
    let d = ${n("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${N/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${N}u) {
    Y[base + i] = ${s("("+n("X[base + i]")+" - mean) * inverse")};
  }
}`}const Pt=32,pr=1e-5,Qe=16;function ze(r){return{enable:r==="f16"?`enable f16;
`:"",load:e=>r==="f16"?`f32(${e})`:e,save:e=>r==="f16"?`f16(${e})`:e}}function Ps(r){const{store:e,patch:t}=r,i=t*t,{enable:n,load:s,save:o}=ze(e);return`${n}${Wt}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${Qe}u;
var<workgroup> w: array<f32, ${Qe*r.cinMax}>;
@compute @workgroup_size(${N})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear workgroup index over a 2-D grid (a single dimension is capped at 65535).
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${i/N}u;
  if (wg >= u.batch * perSample) { return; }       // whole workgroups only: uniform
  let b = wg / perSample;
  let ob = (wg % perSample) / ${i/N}u;
  let p = (wg % ${i/N}u) * ${N}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${N}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${s("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${Qe}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${s("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${i}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${s("X[xBase + i * "+i+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${i}u + p] = ${o("v")};
  }
}`}function Is(r){const{store:e,patch:t}=r,i=t*t,{enable:n,load:s,save:o}=ze(e);return`${n}${Wt}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
  if (g >= u.batch * u.mid * ${i}u) { return; }
  let p = g % ${i}u;
  let m = (g / ${i}u) % u.mid;
  let b = g / (${i}u * u.mid);
  let value = ${s("G[(b * 2u * u.mid + m) * "+i+"u + p]")};
  let gateValue = ${s("G[(b * 2u * u.mid + u.mid + m) * "+i+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function As(r){const{store:e,patch:t,modes2:i}=r,n=t*t,{enable:s,load:o}=ze(e);return`${s}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
  if (g >= u.batch * u.channels * ${t*i}u) { return; }
  let k = g % ${i}u;
  let y = (g / ${i}u) % ${t}u;
  let bc = g / ${t*i}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${n}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${o("X[base + x]")};
    accRe += v * tableCos[x * ${i}u + k];
    accIm += v * tableSin[x * ${i}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function Fs(r){const{modes2:e}=r;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
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
}`}function Es(r){const{modes1:e,modes2:t}=r,i=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
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
}`}function Rs(r){const{store:e,patch:t,modes2:i}=r,n=t*t,{enable:s,save:o}=ze(e);return`${s}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
  if (g >= u.batch * u.channels * ${n}u) { return; }
  let p = g % ${n}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${n}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${o("acc * "+1/Pt)};
}`}function Ts(r){const{store:e}=r,{enable:t,load:i,save:n}=ze(e);return`${t}${Wt}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${N}u;
  if (g >= u.total) { return; }
  var acc = ${i("A[g]")} + ${i("B[g]")} + ${i("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${n("acc")};
}`}function Ls(r){const{store:e,patch:t}=r,i=t*t;return{conv1x1:Ps(r),gate:Is(r),instanceNorm:gr(e,i,pr),instanceNormScaled:gr(e,i,pr/(Pt*Pt)),forwardColumns:As(r),rowMix:Fs(r),spectralMix:Es(r),inverseColumns:Rs(r),residual:Ts(r)}}function Ds(r,e,t){const i=2*e,n=[];for(let h=0;h<e;h++)n.push(h);for(let h=r-e;h<r;h++)n.push(h);const s=new Float32Array(r*t),o=new Float32Array(r*t);for(let h=0;h<r;h++)for(let g=0;g<t;g++){const p=2*Math.PI*h*g/r;s[h*t+g]=Math.cos(p),o[h*t+g]=-Math.sin(p)}const a=new Float32Array(i*r),l=new Float32Array(i*r);for(let h=0;h<i;h++)for(let g=0;g<r;g++){const p=2*Math.PI*n[h]*g/r;a[h*r+g]=Math.cos(p),l[h*r+g]=-Math.sin(p)}const u=new Float32Array(r*i),c=new Float32Array(r*i);for(let h=0;h<r;h++)for(let g=0;g<i;g++){const p=2*Math.PI*n[g]*h/r;u[h*i+g]=Math.cos(p)/r,c[h*i+g]=Math.sin(p)/r}const d=new Float32Array(t*r),f=new Float32Array(t*r);for(let h=0;h<t;h++){const g=(h===0?1:2)/r;for(let p=0;p<r;p++){const b=2*Math.PI*h*p/r;d[h*r+p]=g*Math.cos(b),f[h*r+p]=-g*Math.sin(b)}}return{forwardCos:s,forwardSin:o,rowRe:a,rowIm:l,inverseRowRe:u,inverseRowIm:c,inverseColCos:d,inverseColSin:f}}function zs(r,e,t){const i=r.tensors[t];if(!i)throw fe(`missing tensor ${t}`);return Ss(new Uint16Array(e,i.offset,i.count))}class Ns{constructor(e,t,i,n){const s=t.model;if(this.context=e,this.metadata=t,this.width=s.width,this.depth=s.layers,this.inputChannels=s.input_channels,this.outputChannels=s.output_channels,this.patch=t.inference.patch[0],this.modes1=s.modes[0],this.modes2=s.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw fe("only square patches are supported");if(this.patch*this.patch%N)throw fe(`the patch area must be a multiple of ${N}`);const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[u,c]of Object.entries(Ls(o)))this.pipelines[u]=e.pipeline(c);this.contractPipeline=e.pipeline(Bs);const a=u=>zs(t,i,u);this.tables={};for(const[u,c]of Object.entries(Ds(this.patch,this.modes1,this.modes2)))this.tables[u]=e.upload(c,`fno.table.${u}`);this.weights={};const l=(u,c)=>{const d=a(c);this.weights[u]=this.store==="f16"?e.upload(Cs(d),`fno.${u}`):e.upload(d,`fno.${u}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let u=0;u<this.depth;u++)l(`m1w${u}`,`mlp_layers.${u}.mlp1.weight`),l(`m1b${u}`,`mlp_layers.${u}.mlp1.bias`),l(`m2w${u}`,`mlp_layers.${u}.mlp2.weight`),l(`m2b${u}`,`mlp_layers.${u}.mlp2.bias`),l(`lw${u}`,`w_layers.${u}.weight`),l(`lb${u}`,`w_layers.${u}.bias`);this.buildSpectralWeights(a),this.allocate(n),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:i}=this,n=i.tucker;let s=n.core_shape.slice(),o=t.upload(e(`${n.core}.re`),"tucker.core.re"),a=t.upload(e(`${n.core}.im`),"tucker.core.im");for(const u of n.factors){const[c,d]=u.shape;if(s[u.mode]!==d)throw fe(`factor ${u.name} does not match the core`);const f=s.slice();f[u.mode]=c;const h=f.reduce((_,v)=>_*v,1),g=f.slice(u.mode+1).reduce((_,v)=>_*v,1),p=t.storage(h*4,"tucker.re"),b=t.storage(h*4,"tucker.im"),y=t.upload(e(`${u.name}.re`),"tucker.f"),w=t.upload(e(`${u.name}.im`),"tucker.f"),m=t.uniform([["u",f[0]],["u",f[1]],["u",f[2]],["u",f[3]],["u",f[4]],["u",u.mode],["u",c],["u",d],["u",g],["u",0],["u",h],["u",0]]),x=t.device.createCommandEncoder(),M=x.beginComputePass();t.dispatch(M,this.contractPipeline,[o,a,y,w,p,b,m],h),M.end(),t.device.queue.submit([x.finish()]),t.free(o),t.free(a),t.free(y),t.free(w),o=p,a=b,s=f}t.releaseScratch();const l=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(s.join()!==l.join())throw fe(`spectral stack is ${s} but ${l} was expected`);this.spectralRe=o,this.spectralIm=a}allocate(e){const{context:t}=this,i=this.patch*this.patch,n=this.width,s=2*this.modes1,o=(f,h)=>t.storage(e*f*i*this.elementBytes,h),a=(f,h)=>t.storage(e*n*f*4,h),l=o(Math.max(4*n,this.inputChannels,this.outputChannels),"fno.large"),u=o(2*n,"fno.medium"),c=a(this.patch*this.modes2,"fno.xwRe"),d=a(this.patch*this.modes2,"fno.xwIm");this.buffers={x:o(n,"fno.x"),input:l,t2:l,gates:l,spectral:l,output:l,wide:u,t1:u,hidden:u,local:u,xRe:c,xIm:d,yRe:a(s*this.modes2,"fno.yRe"),yIm:a(s*this.modes2,"fno.yIm"),zRe:a(s*this.modes2,"fno.zRe"),zIm:a(s*this.modes2,"fno.zIm"),wRe:c,wIm:d}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/Qe)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const i=e.beginComputePass();for(const n of this.passes.get(t))this.context.replay(i,n);return i.end(),this.buffers.output}dispatches(e){const{context:t,buffers:i,pipelines:n,tables:s}=this,o=this.width,a=this.patch*this.patch,l=2*this.modes1,u=[],c=(f,h,g,p)=>{u.push(t.prepared(f,[...h,t.keptUniform(g)],t.workgroups(p)))},d=(f,h,g=n.instanceNorm)=>{u.push(t.prepared(g,[f,h],[e*o]))};c(n.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),c(n.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let f=0;f<this.depth;f++)d(i.x,i.t1),c(n.forwardColumns,[i.t1,s.forwardCos,s.forwardSin,i.xRe,i.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),c(n.rowMix,[i.xRe,i.xIm,s.rowRe,s.rowIm,i.yRe,i.yIm],[["u",e],["u",o],["u",l],["u",this.patch]],e*o*l*this.modes2),c(n.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",e],["u",o],["u",2*f],["u",0]],e*o*l*this.modes2),c(n.rowMix,[i.zRe,i.zIm,s.inverseRowRe,s.inverseRowIm,i.wRe,i.wIm],[["u",e],["u",o],["u",this.patch],["u",l]],e*o*this.patch*this.modes2),c(n.inverseColumns,[i.wRe,i.wIm,s.inverseColCos,s.inverseColSin,i.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*a),d(i.t2,i.t1,n.instanceNormScaled),c(n.conv1x1,[i.t1,this.weights[`m1w${f}`],this.weights[`m1b${f}`],i.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),c(n.gate,[i.gates,i.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*a),c(n.conv1x1,[i.hidden,this.weights[`m2w${f}`],this.weights[`m2b${f}`],i.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),c(n.conv1x1,[i.x,this.weights[`lw${f}`],this.weights[`lb${f}`],i.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),c(n.residual,[i.spectral,i.local,i.x],[["u",e*o*a],["u",f<this.depth-1?1:0],["u",0],["u",0]],e*o*a);return c(n.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),c(n.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),u}}const on="1.0e-6",Vs=Number(on),Us="1.0e-5",ot=r=>({rowX0:r+1,rowLen:2*r+1,slots:3*r+1});function Os(r,e,t){const{half:i,values:n,gy:s,gz:o,gx:a,gridX0:l,gridY0:u,theta:c,nx:d,ny:f,layerMap:h,predicted:g,firstLayer:p,compactTable:b}=r,y=ot(s),w=sn(),m=o*a*G,x=new Int32Array(t-e),M=new Int32Array(t-e),_=g.length;for(let k=e;k<t;k++){n.fill(0,k*m,(k+1)*m);const B=b[y.rowLen+k],P=b[y.rowX0+k],A=b[k];x[k-e]=P,M[k-e]=P+B;for(let V=0;V<_;V++){const z=(A+V*B)*G,S=((k*o+g[V])*a+P)*G;for(let C=0;C<G*B;C++)n[S+C]=w[i[z+C]]}}if(r.interpolate){const k=(f-1)/2,B=(d-1)/2,P=Math.cos(c),A=Math.sin(c),V=new Float32Array(a);for(let z=e;z<t;z++){for(let I=0;I<a;I++){const D=l+I-B,H=u+z-k,q=B+D*P-H*A,E=k+D*A+H*P,Z=Bt(q),Y=Bt(E);V[I]=Z>=0&&Z<d&&Y>=0&&Y<f?h[Y*d+Z]:0}const S=x[z-e],C=M[z-e];for(let I=0;I<g.length-1;I++){const D=g[I],H=g[I+1];for(let q=D+1;q<H;q++){const E=(q-D)/(H-D),Z=p+D,Y=p+q,se=(z*o+D)*a*G,F=(z*o+H)*a*G,W=(z*o+q)*a*G;for(let J=S;J<C;J++){const de=V[J],oe=de>Z,re=de>Y;for(let Me=0;Me<G;Me++){const Ne=G*J+Me;n[W+Ne]=oe&&!re?n[F+Ne]:n[se+Ne]+E*(n[F+Ne]-n[se+Ne])}}}}}}let v=0;for(let k=e*m;k<t*m;k+=G)if(n[k+3]>Vs){const B=n[k]*n[k]+n[k+1]*n[k+1]+n[k+2]*n[k+2];B>v&&(v=B)}return{maxSpeed2:v}}const Ws=r=>`${r==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, outFirst: u32, pad0: u32, pad1: u32,
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
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${N}u;
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
  let cell = (table[cy] + table[3u * u.gy + 1u + cz] * len + cx - table[u.gy + 1u + cy]) * ${G}u;
  sums[cell] += s0; sums[cell + 1u] += s1; sums[cell + 2u] += s2; sums[cell + 3u] += total;
}`,Xs=`
struct P { count: u32, c0: f32, c1: f32, c2: f32, s0: f32, s1: f32, s2: f32, pad0: f32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed: array<u32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${N})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${N}u;
  if (g >= u.count) { return; }
  let w = sums[g * ${G}u + 3u];
  var a = vec3<f32>(0.0);
  var stored = 0.0;
  if (w > ${on}) {
    a = vec3<f32>(sums[g * ${G}u], sums[g * ${G}u + 1u], sums[g * ${G}u + 2u]) / w
        * vec3<f32>(u.s0, u.s1, u.s2) + vec3<f32>(u.c0, u.c1, u.c2);
    stored = max(w, ${Us});
  }
  packed[g * 2u] = pack2x16float(vec2<f32>(a.x, a.y));
  packed[g * 2u + 1u] = pack2x16float(vec2<f32>(a.z, stored));
}`,Ys=Math.ceil(os/it+ss+Math.SQRT2),Ze=8,js=.5;function mr(r,e,t,i){if(e<=t)return[r];const n=Math.ceil((e-t)/i)+1,s=[];for(let o=0;o<n;o++)s.push(r+o*t-Bt(o*(n*t-e)/(n-1)));return s}function Hs(r,e,t){let i=1/0,n=-1/0;const s=o=>{i=Math.min(i,o),n=Math.max(n,o)};for(let o=0;o<r.length;o++){const a=r[o],l=r[(o+1)%r.length];a[0]>=e&&a[0]<=t&&s(a[1]);for(const u of[e,t])(a[0]-u)*(l[0]-u)<0&&s(a[1]+(u-a[0])/(l[0]-a[0])*(l[1]-a[1]))}return i<=n?[i,n]:null}function qs(r,e){const t=us(r)>0?1:-1,i=r.map((n,s)=>{const o=r[(s+1)%r.length],a=Math.hypot(o[0]-n[0],o[1]-n[1])||1;return[t*(o[1]-n[1])/a,-t*(o[0]-n[0])/a]});return r.map(([n,s],o)=>{const a=i[(o+r.length-1)%r.length],l=i[o],u=e/(1+a[0]*l[0]+a[1]*l[1]);return[n+u*(a[0]+l[0]),s+u*(a[1]+l[1])]})}function Gs(r,e){const t=e[0]-r[0],i=e[1]-r[1],n=Math.hypot(t,i)||1,s=t/n,o=i/n,a=-o,l=s,u=.5*js*n,c=[r[0]-s*Ze,r[1]-o*Ze],d=[e[0]+s*Ze,e[1]+o*Ze];return[[c[0]+a*u,c[1]+l*u],[d[0]+a*u,d[1]+l*u],[d[0]-a*u,d[1]-l*u],[c[0]-a*u,c[1]-l*u]]}function Zs(r,e,t,i,n,s){const o=tn(e,t,i),{toWind:a,toCity:l}=o,u=r.map(a),c=[[-.5,-.5],[t-.5,-.5],[t-.5,i-.5],[-.5,i-.5]].map(a),d=cs(qs(u,Ys),c);if(d.length<3)throw new Error("the corridor does not touch the city");const f=Math.floor(Math.min(...d.map(y=>y[0]))),h=Math.floor(Math.min(...d.map(y=>y[1]))),g=Math.ceil(Math.max(...d.map(y=>y[0])))-f+1,p=Math.ceil(Math.max(...d.map(y=>y[1])))-h+1,b=[];for(const y of mr(f,g,n,s)){const w=Hs(d,y,y+n-1);if(!w)continue;const m=Math.floor(w[0]),x=Math.max(n,Math.ceil(w[1])-m+1);for(const M of mr(m,x,n,s))b.push([M,y])}return{theta:e,gx:g,gy:p,gridX0:f,gridY0:h,patches:b,toWind:a,toCity:l}}const Ks=r=>Math.ceil(r*Math.SQRT2),yr=1024<<20,Js=128<<20,Qs=2,br=6e4,eo=4,wr=1;function to(r,e,t){let i=1/0,n=-1/0,s=1/0,o=-1/0,a=1/0,l=-1/0;for(const[u,c,d]of r)i=Math.min(i,u-e.gridY0),n=Math.max(n,u-e.gridY0+t),s=Math.min(s,d-e.gridX0),o=Math.max(o,d-e.gridX0+t),a=Math.min(a,c-pe),l=Math.max(l,c-pe+1);return{ry0:Math.max(0,i),ry1:Math.min(e.gy,n),rx0:Math.max(0,s),rx1:Math.min(e.gx,o),rz0:a,rz1:l}}function ro(r){const e=[];for(let t=pe;t<=st;t++)((t-pe)%r===0||t===st)&&e.push(t);return e}class no{constructor(e,t,i,{batchSize:n,layerStride:s}){if(this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=n,(Oe-1)%s!==0)throw new Error(`layer stride ${s} does not divide the ${Oe-1} layer steps of the band`);this.layerStride=s,this.bufferLimit=Math.min(Js,e.device.limits.maxStorageBufferBindingSize),this.fno=new Ns(e,t,i,n),this.blendPipeline=e.pipeline(Ws(this.fno.store)),this.finalizePipeline=e.pipeline(Xs),this.inputPlan=ks(t),this.city=null,this.generation=0,this.fieldWorkers=null,this.fieldJobs=new Map,this.fieldJobCount=0,this.valuesRing=new en}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.mddf.destroy(),this.city=null,this.stopFieldWorkers(t=>t.cancel())}setCity(e,t=null){var u;const{layers:i,ny:n,nx:s}=e;this.cancel(),(u=this.city)==null||u.mddf.destroy();const o=new $s(this.context,e,Ks(this.patch),this.fno.store,this.inputPlan),a=t??ro(this.layerStride),l=o.gx*o.gy*a.length*o.storedBytesPerCellLayer;if(l>yr){o.destroy(),this.city=null;const c=(l/2**20).toFixed(0),d=yr/2**20;throw new Xe(We.TOO_LARGE,`the city's stored field needs ${c} MiB, above the ${d} MiB budget`)}return this.city={mddf:o,ny:n,nx:s,layerMap:i,predictedLayers:a,ready:null,progress:0,groups:null},this.city.ready=this.scanCity(this.city),this.city.ready.catch(()=>{}),this.city}async scanCity(e){const{mddf:t}=e,i=t.planGroups(e.predictedLayers,this.bufferLimit);t.allocate(i),e.progress=0;for(let n=0;n<i.length;n++){if(t.destroyed)return e;await t.scan(i[n],s=>{e.progress=(n+s)/i.length})}return e.progress=1,t.destroyed||(e.groups=i),e}async predict(e,t,i,n){const s=++this.generation,o=()=>s!==this.generation,{context:a}=this,l=this.city,u=n.polygon??Gs(e,t),{overlap:c}=n,d=Math.max(1,Math.round(this.patch*(1-c))),f=Zs(u,i,l.nx,l.ny,this.patch,d),h=performance.now(),{mddf:g}=l;if(await l.ready,o()||g.destroyed||(g.upWind&&g.ensureUpTiles(l.groups,i,f.patches,this.patch,()=>{var m;return(m=n.onStage)==null?void 0:m.call(n,"geometry")})&&(await a.device.queue.onSubmittedWorkDone(),a.releaseScratch()),o()))return null;const p=io(f,this.patch,l.predictedLayers.map(w=>w-pe)),b=await this.runNetwork(l,f,p,i,n,o);if(!b)return null;const y=await this.finish(l,f,p,b,i,o);return y?{...y,milliseconds:performance.now()-h}:null}async runNetwork(e,t,i,n,s,o){var y;const{context:a,patch:l}=this,u=a.storage(i.count*G*4,"predictor.sums"),c=a.upload(i.table,"predictor.rows"),d=[],f=e.predictedLayers,h=new Map(f.map(w=>[w,t.patches.length])),g=Math.max(1,s.sweepEvery||1),p=new Set(f.filter((w,m)=>m%g===0||m===f.length-1)),b=()=>(a.free(u),a.free(c),null);for(const w of e.groups){if(o())return b();(y=s.onStage)==null||y.call(s,"network");const m=[];for(const x of w.layers)for(const[M,_]of t.patches)m.push([M,x,_]);for(let x=0;x<m.length;x+=this.batchSize){const M=m.slice(x,x+this.batchSize),_=new Int32Array(M.flat()),v=a.device.createCommandEncoder(),k=e.mddf.assemble(v,_,w,n,l,this.fno.inputBuffer),B=this.fno.encode(v,M.length);if(this.encodeBlend(v,B,k,u,c,M.length,to(M,t,l),t),a.device.queue.submit([v.finish()]),d.push(a.device.queue.onSubmittedWorkDone()),d.length>Qs&&await d.shift(),a.free(k),a.releaseScratch(),s.onLayer)for(const[,P]of M)h.set(P,h.get(P)-1),h.get(P)===0&&p.has(P)&&this.readSweptLayer(u,P,i,t,s,o);if(o())return b()}}return await Promise.all(d),a.free(c),u}encodeBlend(e,t,i,n,s,o,a,l){const{context:u,patch:c}=this,{gy:d}=l,{ry0:f,ry1:h,rx0:g,rx1:p,rz0:b,rz1:y}=a;if(!(h>f&&p>g))return;const w=e.beginComputePass();u.dispatch(w,this.blendPipeline,[t,i,n,s,u.uniform([["u",o],["u",c],["u",this.metadata.model.output_channels],["u",c],["u",d],["u",pe],["u",0],["u",0],["u",f],["u",b],["u",g],["u",h-f],["u",y-b],["u",p-g],["i",l.gridY0],["i",l.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(h-f)*(y-b)*(p-g)),w.end()}readSweptLayer(e,t,i,n,s,o){const a=ot(n.gy);this.readLayer(e,i.table[a.slots+t-pe],i.table,n).then(l=>{o()||s.onLayer(t,l,n,this.metadata.target)}).catch(()=>{})}async readLayer(e,t,i,{gx:n,gy:s}){const o=ot(s),a=G*4,l=(u,c)=>{for(let d=0;d<s;d++){const f=i[o.rowLen+d];f&&u.copyBufferToBuffer(e,(i[d]+t*f)*a,c,(d*n+i[o.rowX0+d])*a,f*a)}};return this.context.readBack(s*n*a,l,"layer staging",u=>new Float32Array(u.slice(0)))}async finish(e,t,i,n,s,o){const{context:a}=this,{gx:l,gy:u}=t,c=Oe,d=l*u*c,{predicted:f}=i,h=this.metadata.target,g=a.storage(Math.max(8,i.count*G*2),"predictor.packed"),p=a.device.createCommandEncoder(),b=p.beginComputePass();a.dispatch(b,this.finalizePipeline,[n,g,a.uniform([["u",i.count],["f",h.center[0]],["f",h.center[1]],["f",h.center[2]],["f",h.scale[0]],["f",h.scale[1]],["f",h.scale[2]],["f",0]])],i.count),b.end(),a.device.queue.submit([p.finish()]),await a.device.queue.onSubmittedWorkDone(),a.free(n);const y=as(),w=await a.readHalf(g,i.count*G,y);if(a.free(g),a.releaseScratch(),o())return null;let m;y?m=new Float32Array(this.valuesRing.next(d*G*4),0,d*G):m=new Float32Array(d*G);const x={half:w,values:m,gy:u,gz:c,gx:l,gridX0:t.gridX0,gridY0:t.gridY0,theta:s,nx:e.nx,ny:e.ny,layerMap:e.layerMap,predicted:f,firstLayer:pe,interpolate:this.layerStride>1,compactTable:i.table},M=y?await this.postInWorkers(x,u):await so(x,u);if(o())return null;let _=0;for(const v of M)v.maxSpeed2>_&&(_=v.maxSpeed2);return{maxSpeed2:_,layout:t,gx:l,gy:u,gz:c,firstLayer:pe,layerStride:this.layerStride,values:m,valuesPerCell:G}}stopFieldWorkers(e){for(const t of this.fieldWorkers??[])t.terminate();this.fieldWorkers=null;for(const t of[...this.fieldJobs.values()])e(t)}failFieldWorkers(e){this.stopFieldWorkers(t=>t.answer({error:e}))}startFieldWorkers(){const e=Math.max(1,Math.min(eo,Math.floor(ls()/3)));return Array.from({length:e},(t,i)=>{const n=new Worker(new URL("/cityffdv2-demo/assets/field_worker-CNcnW6Nn.js",import.meta.url),{type:"module"});return n.onmessage=({data:s})=>{var o;return(o=this.fieldJobs.get(`${s.id}:${i}`))==null?void 0:o.answer(s)},n.onerror=s=>{s.preventDefault(),this.failFieldWorkers(`field worker failed: ${s.message||"it did not load"}`)},n})}postInWorkers(e,t){this.fieldWorkers??(this.fieldWorkers=this.startFieldWorkers());const i=++this.fieldJobCount,n=this.fieldWorkers,s=n.length,o={...e,half:e.half.buffer,halfLength:e.half.length,values:e.values.buffer,valuesLength:e.values.length};return Promise.all(n.map((a,l)=>new Promise((u,c)=>{const d=`${i}:${l}`,f=()=>{clearTimeout(h),this.fieldJobs.delete(d)},h=setTimeout(()=>{this.failFieldWorkers(`field worker did not answer in ${br/1e3} s`)},br);this.fieldJobs.set(d,{answer:g=>{f(),g.error?c(new Error(g.error)):u(g)},cancel:()=>{f(),u(null)}}),a.postMessage({id:i,p:o,yLo:Math.floor(l*t/s),yHi:Math.floor((l+1)*t/s)})})))}}function io(r,e,t){const{gx:i,gy:n}=r,s=new Int32Array(n).fill(i),o=new Int32Array(n).fill(0);for(const[c,d]of r.patches){const f=Math.max(0,c-r.gridY0),h=Math.min(n,c-r.gridY0+e),g=Math.max(0,d-r.gridX0),p=Math.min(i,d-r.gridX0+e);for(let b=f;b<h;b++)g<s[b]&&(s[b]=g),p>o[b]&&(o[b]=p)}const a=ot(n),l=new Uint32Array(a.slots+Oe).fill(4294967295,a.slots);let u=0;for(let c=0;c<n;c++){const d=Math.max(0,o[c]-s[c]);l[c]=u,l[a.rowX0+c]=d?s[c]:0,l[a.rowLen+c]=d,u+=d*t.length}return l[n]=u,t.forEach((c,d)=>{l[a.slots+c]=d}),{table:l,count:u,predicted:t}}async function so(r,e){const t=[];let i=performance.now();for(let n=0;n<e;n+=wr)t.push(Os(r,n,Math.min(e,n+wr))),performance.now()-i>Zr&&(await Qr(),i=performance.now());return t}const oo=16,ao=4;function lo(){let r=null,e=null,t=[];async function i(a){if(r)return;const l="/cityffdv2-demo/flume/model-v2/",[u,c]=await Promise.all(["metadata.json","weights.bin"].map(async d=>{const f=await fetch(l+d,{signal:a});if(!f.ok)throw new Error("Could not load model v2 "+d+" (HTTP "+f.status+").");return d.endsWith(".bin")?f.arrayBuffer():f.json()}));r=await Vt.create(),e=u,t=[0,1].map(()=>({predictor:new no(r,e,c,{batchSize:oo,layerStride:1}),grid:null,key:""}))}async function n(a,l,u,c){const d=u.join(",");(l!==a.grid||d!==a.key)&&(a.predictor.setCity({layers:l.layers,nx:l.nx,ny:l.ny},u),a.grid=l,a.key=d);const{nx:f,ny:h}=l,g=[[-.5,-.5],[f-.5,-.5],[f-.5,h-.5],[-.5,h-.5]];return a.predictor.predict(null,null,c,{polygon:g,overlap:e.inference.overlap})}function s(a,l,u){const c=l.gx*l.gy,d=new Float32Array(c*5),f=new Uint8Array(c),h=u-l.firstLayer;for(let p=0;p<l.gy;p++)for(let b=0;b<l.gx;b++){const y=((p*l.gz+h)*l.gx+b)*ao,w=p*l.gx+b;d[w*5]=l.values[y],d[w*5+1]=l.values[y+1],d[w*5+2]=l.values[y+2],f[w]=l.values[y+3]>0?0:2}const g={width:l.gx,height:l.gy,originX:l.layout.gridX0,values:d,solid:f};Hr(a,a.plan.indexOf(u),g)}async function o(a,l,u,{signal:c,onFirstWave:d,onMoreLayers:f}={}){await i(c),is(l[0],l.at(-1));const h=$t(l).slice(0,Dt),g=l.filter(m=>h.includes(m)),p=l.filter(m=>!h.includes(m)),b=await n(t[0],a,g,u);if(!b)return null;const y=jr({width:b.gx,height:b.gy,originX:b.layout.gridX0,originY:b.layout.gridY0,theta:u},l,!1);for(const m of g)s(y,b,m);const w=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(d==null||d({volume:y,referenceSpeed:w}),p.length){const m=await n(t[1],a,p,u);if(!m)return null;for(const x of p)s(y,m,x);f==null||f()}return y}return{run:o,cancel(){for(const a of t)a.predictor.cancel()},destroy(){for(const a of t)a.predictor.destroy();r==null||r.device.destroy(),t=[],r=null}}}const xr="Model v2",uo=32;function co(){const r=Ft({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=null,i=null,n=null,s=null,o=null,a=!1,l=0;const u=new AbortController;function c(){try{t==null||t.destroy(),o==null||o.destroy()}finally{o=null,e==null||e.device.destroy(),t=null,e=null,s=null}}async function d(){if(t)return;r.stage="Loading model";const w="/cityffdv2-demo/flume/",[m,x,M]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async _=>{const v=await fetch(w+_,{signal:u.signal});if(!v.ok)throw new Error("Could not load "+_+" (HTTP "+v.status+").");return _.endsWith(".bin")?v.arrayBuffer():v.json()}));Di(m,x.byteLength),u.signal.throwIfAborted(),e=await Tt.create(),u.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",_=>{r.error="WebGPU: "+_.error.message.split(`
`)[0]}),e.device.lost.then(_=>{!a&&_.reason!=="destroyed"&&(r.error="GPU device lost. Run again to initialize a new session.",r.prediction=null,t=null,e=null,s=null)}),i=m,n=M,t=new Li(e,i,x,{batchSize:uo})}async function f(w,m){if(a||r.busy||r.downloading)return null;r.busy=!0,r.error="",r.progress=0;const x=++l,M=()=>a||x!==l;try{if(await d(),M())return null;if(m.model==="v2")return await h(w,m,M,x);w!==s&&(t.setCity(w.layers,w.ny,w.nx),s=w);const _=performance.now(),v=(C,I)=>{const D={...C,grid:w,settings:{...m,layers:I},referenceSpeed:i.wind.reference_speed_m_s,modelLabel:i.label,colorbar:n,patchCount:V,milliseconds:performance.now()-_,inputRevision:x};return r.prediction=Be(D),r.layersReady=C.layers.length,D};let k=[...m.layers],B=$t(k),P=null,A=null,V=0;const z=C=>({signal:u.signal,onProgress:I=>{M()||(r.progress=(C+I*.3)/B.length)}});let S=t.setHeight(B[0],z(0));for(let C=0;C<B.length;C++){if(r.stage="Predicting 3D wind · layer "+(C+1)+" / "+B.length,await S,M())return null;const I=await t.predict(m.thetaRad,{signal:u.signal,onProgress:D=>{M()||(r.progress=(C+.3+D*.7)/B.length)}});if(u.signal.throwIfAborted(),M())return null;if(r.error)throw new Error(r.error);P||(k=Gi(k,I.width*I.height),B=$t(k),P=jr(I,k,!1)),S=C+1<B.length?t.setHeight(B[C+1],z(C+1)):null,S==null||S.catch(()=>{}),zi(I),V=I.patchCount??V,Hr(P,k.indexOf(B[C]),I),A?(A.milliseconds=performance.now()-_,r.layersReady=P.layers.length):C+1>=Math.min(Dt,B.length)&&(A=v(P,k))}return r.progress=1,r.stage="Prediction ready",A}catch(_){return!a&&x===l&&(r.error=_.message,r.stage="Prediction failed",r.prediction=null),c(),null}finally{a?c():r.busy=!1}}async function h(w,m,x,M){o??(o=lo()),r.stage="Model v2 · predicting the first layers";const _=performance.now();let v=null;if(!await o.run(w,m.layers,m.thetaRad,{signal:u.signal,onFirstWave({volume:B,referenceSpeed:P}){x()||(v={...B,grid:w,settings:{...m},referenceSpeed:P,modelLabel:xr,colorbar:n,patchCount:0,milliseconds:performance.now()-_,inputRevision:M},r.prediction=Be(v),r.layersReady=B.layers.length,r.progress=.3,r.stage="Model v2 · predicting the remaining layers")},onMoreLayers(){x()||!v||(v.milliseconds=performance.now()-_,r.layersReady=v.layers.length)}})||x())return null;if(r.error)throw new Error(r.error);return r.progress=1,r.stage="Prediction ready",v}async function g(w){if(!t||!r.prediction||r.busy||r.downloading)throw new Error("Run a valid prediction before downloading MDDF.");if(r.prediction.modelLabel===xr)throw new Error("MDDF downloads need model v1.");r.downloading=!0;try{Number.isInteger(w)&&await t.setHeight(w,{signal:u.signal});const m=t.city.field,x=await e.readFloat32(m.fieldBuffer,m.gy*m.gx*28);if(a)throw new Error("The page was closed.");return{values:x,ny:m.gy,nx:m.gx,margin:m.margin,layerIndex:t.city.layerIndex}}finally{r.downloading=!1,a&&c()}}function p(){r.busy&&l++,o==null||o.cancel()}function b(){l++,r.prediction=null,r.layersReady=0,r.error="",r.progress=0,r.stage="Ready"}function y(){a=!0,l++,u.abort(),!r.busy&&!r.downloading&&c()}return At(y),{state:r,run:f,readMddf:g,cancel:p,invalidate:b,dispose:y}}const _e="flume-retained-buildings",vr="flume-retained-selected";function fo(r,e){let t=null,i=null,n=null,s=null,o=null;function a(){if(t){r.getSource(_e)?n!==s&&r.getSource(_e).setData(n):r.addSource(_e,{type:"geojson",data:n,maxzoom:22,tolerance:0}),s=n;for(const[f,h]of[[_e,!1],[vr,!0]]){const g=t.filters[h?"selected":"surroundings"],p=h?1:t.surroundingsOpacity;r.getLayer(f)?r.setFilter(f,g):r.addLayer({id:f,type:"fill-extrusion",source:_e,maxzoom:Ue,filter:g,layout:{visibility:"visible"},paint:{"fill-extrusion-color":h?he().selectedBuildings:he().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),r.setPaintProperty(f,"fill-extrusion-opacity",p),r.setLayoutProperty(f,"visibility",h||t.showSurroundings?"visible":"none")}}}function l(){if(!(!t||r.getZoom()<Ue||!r.getSource(t.sourceId)||!r.isSourceLoaded(t.sourceId)))try{const f=r.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(h=>!h.tile||h.tile.z>=(t.dataZoom??Ue));n=rt([...n.features,...f]),a()}catch(f){e==null||e(f)}}function u(f){!t||f!=null&&f.sourceId&&f.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(l,120))}function c(f){var h;(i!==f.collection||(t==null?void 0:t.sourceId)!==f.sourceId||(t==null?void 0:t.sourceLayer)!==f.sourceLayer)&&(n=rt(((h=f.collection)==null?void 0:h.features)??[]),i=f.collection),t=f,a(),u()}function d(){clearTimeout(o),t=null,i=null,n=null,s=null;for(const f of[vr,_e])r.getLayer(f)&&r.removeLayer(f);r.getSource(_e)&&r.removeSource(_e)}return r.on("sourcedata",u),r.on("moveend",u),{update:c,clear:d,dispose(){r.off("sourcedata",u),r.off("moveend",u),d()}}}const an={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},yt=new Map;function ho(r){if(!yt.has(r)){const e=an[r],t=new Uint8Array(256*3);for(let i=0;i<256*3;i++)t[i]=parseInt(e.substr(i*2,2),16);yt.set(r,t)}return yt.get(r)}function ln(r,e){const t=ho(an[r]?r:"viridis"),i=Math.min(1,Math.max(0,e))*255,n=Math.floor(i),s=Math.min(255,n+1),o=i-n;return[t[n*3]*(1-o)+t[s*3]*o,t[n*3+1]*(1-o)+t[s*3+1]*o,t[n*3+2]*(1-o)+t[s*3+2]*o]}const go=new Set(["u","v","w"]),po=6e4,Ye=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis",v1Only:!0},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno",v1Only:!0},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],Re={u:0,w:1,v:2,T:3,tke:4};function Xt(r,e,t,i){const n=r[e+Re.u]*i,s=r[e+Re.v]*i;switch(t){case"u":return n;case"v":return s;case"w":return r[e+Re.w]*i;case"speed":{const o=r[e+Re.w]*i;return Math.sqrt(n*n+s*s+o*o)}case"T":return r[e+Re.T];case"tke":return r[e+Re.tke]*i*i;default:return 0}}function mo(r,e,t,i,n){if(e==="T")return r.fixed.T.slice();const o=(r.quantiles[i]||r.quantiles[Object.keys(r.quantiles)[0]])[e],a=Math.min(o.length-1,Math.max(0,Math.round(t))),l=o[a]*(e==="tke"?n*n:n);return r.shape[e]==="symmetric"?[-l,l]:[0,l]}function yo(r,e){const t=r.solid.length,i=new Float32Array(t*4);for(let n=0;n<t;n++){const s=n*4;i[s]=Xt(r.values,n*5,e,1),i[s+1]=1}return Or(i)}function bo(r){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[i,n,s]=ln(r,t/255);e[t*4]=i,e[t*4+1]=n,e[t*4+2]=s,e[t*4+3]=255}return e}function wo(r,e,t){if(e==="T")return null;const i=r.solid.length,n=Math.max(1,Math.floor(i/po)),s=go.has(e),o=[];for(let u=0;u<i;u+=n){const c=Xt(r.values,u*5,e,1);o.push(s?Math.abs(c):c)}if(o.length<32)return null;o.sort((u,c)=>u-c);const a=Math.min(o.length-1,Math.floor(o.length*(Number(t)/100))),l=o[a];return l>0?s?[-l,l]:[0,l]:null}function It(r,e,t){const i=(r.grid.nx-1)/2,n=(r.grid.ny-1)/2,s=r.originX+e-i,o=r.originY+t-n,a=Math.cos(r.theta),l=Math.sin(r.theta);return[(i+s*a-o*l+.5)*4,(n+s*l+o*a+.5)*4]}function un(r){const e=r.values.slice(),t=r.settings.speedMps/r.referenceSpeed;for(let i=0;i<e.length;i+=5)e[i]*=t,e[i+1]*=t,e[i+2]*=t,e[i+4]*=t*t;return e}const bt=ie/2;function xo(r){const{grid:e,theta:t}=r,i=Nt(r),n=new Float32Array(5),s=(a,l,u)=>Ji(r,e.nx,e.ny,a,l,u,n)!==null,o={plane:null,variable:"speed",wind(a,l,u,c){if(!s(a,l,u))return!1;Qi(n,t,c);const d=o.plane;return d!=null&&d.flat&&d.kind==="h"&&(c[2]=0),d!=null&&d.flat&&d.kind==="v"&&(c[0]=n[0]*Math.cos(t),c[1]=n[0]*Math.sin(t)),!0},inside:(a,l,u)=>u>=bt&&u<=i&&!es(e,a,l,u)&&s(a,l,u),value:()=>Xt(n,0,o.variable,1),valueAt:(a,l,u)=>s(a,l,u)?o.value():0,spawn(a,l){var u,c;for(let d=0;d<20;d++){if(l[0]=a()*e.nx*L,l[1]=a()*e.ny*L,l[2]=bt+a()**2*(i-bt),((u=o.plane)==null?void 0:u.kind)==="h"&&(l[2]=o.plane.z),((c=o.plane)==null?void 0:c.kind)==="v"){const[f,h]=It(r,a()*(r.width-1),o.plane.row);l[0]=f,l[1]=h}if(o.inside(l[0],l[1],l[2]))return}}};return o}const vo=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,Mo=8,_o=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function $o(r,e,t){let i,n,s,o,a,l,u,c,d,f,h,g="",p=0;const b=new jt,y=new jt,w=Sr.MercatorCoordinate.fromLngLat(r.grid.origin),m=w.meterInMercatorCoordinateUnits(),[x,M]=It(r,r.width/2-.5,r.height/2-.5),_=[new He(new ge(1,0,0),0),new He(new ge(-1,0,0),r.grid.nx*L),new He(new ge(0,1,0),0),new He(new ge(0,-1,0),r.grid.ny*L)],v=()=>Number(e.speedMps)/r.referenceSpeed,k=new Map;function B(A){if(!k.has(A)){const V=r.layers.length,z=Math.min(Mo,V);let S=null;for(let C=0;C<z;C++){const I=Math.round(C*(V-1)/Math.max(1,z-1)),D=wo(Zi(r,I),A,"99.9");D&&(S?S=[Math.min(S[0],D[0]),Math.max(S[1],D[1])]:S=D)}k.set(A,S)}return k.get(A)}function P(){var Z;if(!n)return;const A=Ye.find(Y=>Y.id===e.variable)??Ye[0],V=v();let z=V;A.id==="T"&&(z=1),A.id==="tke"&&(z=V*V);const S=((Z=B(A.id))==null?void 0:Z.map(Y=>Y*z))??mo(r.colorbar,A.id,r.settings.layers.at(-1),"99.9",V);f==null||f.dispose(),f=new Ht(bo(A.ramp),256,1,qt),f.colorSpace=Ln,f.minFilter=f.magFilter=Gt,f.needsUpdate=!0;const C=e.plane==="3d"?"h":e.plane,I=ts(r,e.planeOffsetM),D=e.view==="slice"||e.view==="particles"&&e.particles==="white";a.visible=D&&C==="h",l.visible=D&&C==="v";const H=A.id+"@"+(C==="v"?"v"+I:e.sliceHeightM);if(D&&H!==g){let Y;if(C==="v"){Y=ns(r,I);const[se,F]=It(r,(r.width-1)/2,I);l.position.set(se,F,Y.height*ie/2)}else Y=Gr(r,Number(e.sliceHeightM)),a.position.z=Y.settings.heightM;d==null||d.dispose(),d=new Ht(yo(Y,A.id),Y.width,Y.height,qt,Dn),d.minFilter=d.magFilter=Gt,d.needsUpdate=!0,g=H}h.uniforms.field.value=d??null,h.uniforms.palette.value=f,h.uniforms.range.value.set(...S),c.enabled=e.view==="particles",c.mesh.visible=c.enabled;const q=e.particles==="white",E=q?C:e.plane;E==="h"?c.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:q}):E==="v"?c.setPlane({kind:"v",row:I,flat:q}):c.setPlane(null),c.setCount(er[e.density]??er.medium),c.setColouring(e.particles,A.id,f,S),t==null||t({low:S[0],high:S[1],...A}),i.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:P,refresh(){g="",P()},onAdd(A,V){i=A,s=new Fn,o=new En,n=new Rn({canvas:i.getCanvas(),context:V,antialias:!0}),n.autoClear=!1,n.localClippingEnabled=!0,h=new Cr({vertexShader:vo,fragmentShader:_o,uniforms:{field:{value:null},palette:{value:null},range:{value:new Pr(0,1)}},transparent:!0,depthWrite:!1,side:Br,clipping:!0,clippingPlanes:_}),a=new tt(new xt(r.width*L,r.height*L),h),a.position.set(x,M,0),a.rotation.z=r.theta,a.frustumCulled=!1,s.add(a);const z=new xt(r.width*L,(r.layers.at(-1)+1)*ie);z.rotateX(Math.PI/2),l=new tt(z,h),l.rotation.z=r.theta,l.frustumCulled=!1,s.add(l),c=new Tn(xo(r)),s.add(c.mesh),u=ko(r.grid,.5),u&&s.add(u),P()},render(A,V){const z=performance.now(),S=Math.min(p?(z-p)/1e3:0,.05);p=z,b.makeTranslation(w.x,w.y,w.z).scale(new ge(m,-m,m)),o.projectionMatrix.copy(y.fromArray(V)).multiply(b),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),c.setViewport(A.drawingBufferWidth,A.drawingBufferHeight);const C=c.enabled&&!e.paused;C&&c.step(S,v()),n.resetState(),n.setViewport(0,0,A.drawingBufferWidth,A.drawingBufferHeight),n.render(s,o),C&&i.triggerRepaint()},onRemove(){d==null||d.dispose(),f==null||f.dispose(),a==null||a.geometry.dispose(),l==null||l.geometry.dispose(),h==null||h.dispose(),c==null||c.dispose(),u==null||u.geometry.dispose(),u==null||u.material.dispose(),n==null||n.dispose(),i=null,n=null}}}function ko(r,e){if(!r.mainDomain)return null;const t=ct(r.origin),i=[...t(r.mainDomain.bounds.slice(0,2)),...t(r.mainDomain.bounds.slice(2,4))],n=new Cr({uniforms:{extent:{value:new Pr(r.nx*L,r.ny*L)},mainBounds:{value:new zn(...i)},mainColour:{value:new Zt(he().mainArea)},bufferColour:{value:new Zt(he().bufferArea)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:Br}),s=new tt(new xt(r.nx*L,r.ny*L),n);return s.name="flume-domain-overlay",s.position.set(r.nx*L/2,r.ny*L/2,e+.05),s.renderOrder=4,s.frustumCulled=!1,s}const wt="flume-field",Ve="flume-buildings";function cn(r){return{"city-concordia-2d":!1,"city-concordia-3d":r==="concordia","city-osm-3d":r==="osm"}}function So(r){return r.type==="fill-extrusion"?"fill-extrusion-opacity":r["source-layer"]==="building"&&(r.type==="fill"||r.type==="line")?r.type+"-opacity":null}function Co(r,e,t){let i=null,n=null;const s=new Map,o=fo(r,t);function a(){r.getLayer(wt)&&r.removeLayer(wt),i=null}function l(){for(const[d,f]of s)r.getLayer(d)&&(r.setLayoutProperty(d,"visibility",f.visibility),r.setPaintProperty(d,f.property,f.opacity),r.setFilter(d,f.filter),r.setLayerZoomRange(d,f.minzoom,f.maxzoom),f.color!==void 0&&r.setPaintProperty(d,"fill-extrusion-color",f.color));s.clear()}function u(d){for(const f of r.getStyle().layers){if(f.id.startsWith("flume-"))continue;const h=So(f);if(!h)continue;const g=f.type==="fill-extrusion";s.set(f.id,{visibility:r.getLayoutProperty(f.id,"visibility")??"visible",property:h,opacity:r.getPaintProperty(f.id,h)??1,filter:r.getFilter(f.id)??null,minzoom:f.minzoom??0,maxzoom:f.maxzoom??24,color:g?r.getPaintProperty(f.id,"fill-extrusion-color")??null:void 0}),r.setPaintProperty(f.id,h,Jt),g&&r.setPaintProperty(f.id,"fill-extrusion-color",he().previewBuildings),d||r.setLayoutProperty(f.id,"visibility","none")}}function c({source:d,input:f,prediction:h,preview:g,display:p}){if(h!==n&&(a(),n=h),!h&&r.getLayer(Ve)&&r.removeLayer(Ve),l(),Nn(r,cn(d)),!h){o.clear(),_t(r,g);return}_t(r,null);const b=Vn.find(w=>w.id===(d==="osm"?"city-osm-3d":"city-concordia-3d")),y=Tr(f.buildings.features,r.getFilter(b.id));u(p.showSurroundings),r.setFilter(b.id,y.surroundings),r.setLayerZoomRange(b.id,Ue,b.layer.maxzoom??24),r.getLayer(Ve)?r.setFilter(Ve,y.selected):r.addLayer({...b.layer,id:Ve,minzoom:Ue,layout:{visibility:"visible"},filter:y.selected,paint:{...b.layer.paint,"fill-extrusion-color":he().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:b.layer.source,sourceLayer:b.layer["source-layer"],collection:g,dataZoom:f.dataZoom,filters:y,surroundingsOpacity:Jt,showSurroundings:p.showSurroundings}),r.getLayer(wt)||(i=$o(h,p,e),r.addLayer(i)),r.triggerRepaint()}return{update:c,configure(){i==null||i.configure()},refresh(){i==null||i.refresh()},beforeStyleChange(){a(),n=null,s.clear()},dispose(){a(),o.dispose(),s.clear()}}}function Ie(r,e,t,i,n){if(t.reduce((a,l)=>a*l,1)!==e.length)throw new Error("Invalid "+r+" shape.");const s=new Uint8Array(e.length*4),o=new DataView(s.buffer);for(let a=0;a<e.length;a++){if(!Number.isFinite(e[a]))throw new Error("Cannot export non-finite "+r);o.setFloat32(a*4,e[a],!0)}return{name:r,content:s,description:{dtype:"float32",shape:t,channels:i,unit:n}}}function dn(r,e,t,i,n=null){var o,a,l;const s={schemaVersion:1,endianness:"little",order:"row-major",origin:r.origin,source:r.source,bounds:r.bounds,selection:((o=r.selection)==null?void 0:o.geometry)??((a=r.polygon)==null?void 0:a.geometry),computationalDomain:(l=r.polygon)==null?void 0:l.geometry,mainDomain:r.mainDomain,buffer:r.buffer,dataZoom:r.dataZoom,tileCount:r.tileCount,warnings:r.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:i.nx,ny:i.ny,margin:i.margin,layerIndex:i.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return n&&(s.volume={layers:n.settings.layers,heightsM:n.settings.layers.map(u=>(u+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),s.files=Object.fromEntries(t.map(u=>[u.name,u.description])),[{name:"metadata.json",content:JSON.stringify(s,null,2)},...t.map(({name:u,content:c})=>({name:u,content:c}))]}function fn(r,e){const i=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(n=>["dc","re1","re2","re3","im1","im2","im3"].map(s=>n+"_"+s));return[Ie("mddf.f32.bin",e.values,[e.ny,e.nx,28],i,"m"),Ie("height_layers.f32.bin",r.grid.layers,[r.grid.ny,r.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function Bo(r){const e=un(r),t=r.width*r.height,i=new Float32Array(t*3),n=new Float32Array(t),s=new Float32Array(t),o=new Float32Array(t);for(let l=0;l<t;l++){const u=l*5;i.set([e[u],e[u+2],e[u+1]],l*3),n[l]=e[u+3],s[l]=e[u+4],o[l]=Math.hypot(e[u],e[u+1],e[u+2])}const a=[r.height,r.width];return[Ie("velocity.f32.bin",i,[...a,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(r.solid),description:{dtype:"uint8",shape:a,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Ie("temperature.f32.bin",n,a,["T"],"degC"),Ie("tke.f32.bin",s,a,["TKE"],"m2/s2"),Ie("speed.f32.bin",o,a,["speed"],"m/s")]}function Po(r){const e=r.width*r.height,t=r.settings.layers.length,i=un(r),n=new Float32Array(t*e*3);for(let s=0;s<t*e;s++)n.set([i[s*5],i[s*5+2],i[s*5+1]],s*3);return[Ie("velocity3d.f32.bin",n,[t,r.height,r.width,3],["u","v","w"],"m/s")]}function Io(r,e,t){return dn(r,t,fn(t,e),e)}function Ao(r,e,t,i=null){const n=[...fn(t,e),...Bo(t)];return i&&n.push(...Po(i)),n.push({name:"buildings.geojson",content:JSON.stringify(r.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),dn(r,t,n,e,i)}class Fo{parse(e,t={}){t=Object.assign({binary:!1},t);const i=t.binary,n=[];let s=0;e.traverse(function(y){if(y.isMesh){const w=y.geometry,m=w.index,x=w.getAttribute("position");s+=m!==null?m.count/3:x.count/3,n.push({object3d:y,geometry:w})}});let o,a=80;if(i===!0){const y=s*2+s*3*4*4+80+4,w=new ArrayBuffer(y);o=new DataView(w),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const l=new ge,u=new ge,c=new ge,d=new ge,f=new ge,h=new ge;for(let y=0,w=n.length;y<w;y++){const m=n[y].object3d,x=n[y].geometry,M=x.index,_=x.getAttribute("position");if(M!==null)for(let v=0;v<M.count;v+=3){const k=M.getX(v+0),B=M.getX(v+1),P=M.getX(v+2);g(k,B,P,_,m)}else for(let v=0;v<_.count;v+=3){const k=v+0,B=v+1,P=v+2;g(k,B,P,_,m)}}return i===!1&&(o+=`endsolid exported
`),o;function g(y,w,m,x,M){l.fromBufferAttribute(x,y),u.fromBufferAttribute(x,w),c.fromBufferAttribute(x,m),M.isSkinnedMesh===!0&&(M.applyBoneTransform(y,l),M.applyBoneTransform(w,u),M.applyBoneTransform(m,c)),l.applyMatrix4(M.matrixWorld),u.applyMatrix4(M.matrixWorld),c.applyMatrix4(M.matrixWorld),p(l,u,c),b(l),b(u),b(c),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(y,w,m){d.subVectors(m,w),f.subVectors(y,w),d.cross(f).normalize(),h.copy(d).normalize(),i===!0?(o.setFloat32(a,h.x,!0),a+=4,o.setFloat32(a,h.y,!0),a+=4,o.setFloat32(a,h.z,!0),a+=4):(o+="	facet normal "+h.x+" "+h.y+" "+h.z+`
`,o+=`		outer loop
`)}function b(y){i===!0?(o.setFloat32(a,y.x,!0),a+=4,o.setFloat32(a,y.y,!0),a+=4,o.setFloat32(a,y.z,!0),a+=4):o+="			vertex "+y.x+" "+y.y+" "+y.z+`
`}}}async function Eo(r,e,t={}){var y,w;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((y=e.layers)==null?void 0:y.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:i,ny:n,layers:s,spacingM:o,layerSpacingM:a}=e,l=(m,x)=>m<0||x<0||m>=i||x>=n?0:s[x*i+m],u=async()=>{var m;if(await new Promise(x=>setTimeout(x,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let c=0;for(let m=0;m<n;m++){m%32===0&&await u();for(let x=0;x<i;x++){const M=l(x,m);if(!Number.isInteger(M)||M<0||M>160)throw new Error("Invalid MDDF building height.");M&&(c+=2+ +(M>l(x-1,m))+ +(M>l(x+1,m))+ +(M>l(x,m-1))+ +(M>l(x,m+1)))}}if(!c)throw new Error("The selected MDDF model has no buildings to export.");const d=new Float32Array(c*18);let f=0;const h=(m,x,M,_)=>{for(const v of[m,x,M,m,M,_])d.set(v,f),f+=3};for(let m=0;m<n;m++){m%32===0&&await u();for(let x=0;x<i;x++){const M=l(x,m)*a;if(!M)continue;const _=x*o,v=_+o,k=-m*o,B=k-o;h([_,M,k],[v,M,k],[v,M,B],[_,M,B]),h([_,0,k],[_,0,B],[v,0,B],[v,0,k]);let P=l(x-1,m)*a;M>P&&h([_,P,B],[_,P,k],[_,M,k],[_,M,B]),P=l(x+1,m)*a,M>P&&h([v,P,k],[v,P,B],[v,M,B],[v,M,k]),P=l(x,m-1)*a,M>P&&h([_,P,k],[v,P,k],[v,M,k],[_,M,k]),P=l(x,m+1)*a,M>P&&h([v,P,B],[_,P,B],[_,M,B],[v,M,B])}}const g=new Un;g.setAttribute("position",new On(d,3));const p=new tt(g);let b;try{b=new Fo().parse(p,{binary:!0}).buffer}finally{g.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:b},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:r.source,origin:e.origin,mainDomain:r.mainDomain,computationalDomain:(w=r.polygon)==null?void 0:w.geometry,buffer:r.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:i,ny:n,spacingM:o,layerSpacingM:a,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:r.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:c*2}}},null,2)}]}const hn=Symbol("flume");function ft(){return pn(hn)}function Ro(){const r="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=et(null),t=et(!1);let i=null,n=null,s=null,o=!1,a=null,l=!1;const u=()=>i,{currentPresetName:c}=Mr();tr(c.value);const d=Wn({getMap:u,accessToken:r}),f=mi({getMap:u,ready:t,onChange:b,accessToken:r}),h=co(),g=Ft({mapCreated:!1,mapReady:t,error:"",area:f.state,grid:null,wind:{...Kt},engine:h.state,display:{variable:"speed",speedMps:Kt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:Jn,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=Q(()=>g.downloading||g.engine.downloading||g.area.loading);function b(){clearTimeout(a),a=null,l=!1,g.grid=null,g.legend=null,g.error="",g.downloadError="",h.invalidate(),x()}async function y(){if(p.value)return;const v=await f.captureRegion();if(!(!v||o))try{Tr(v.buildings.features),g.grid=Be(yi(v)),g.error="",w()}catch(k){g.error=k.message}}function w(){!g.grid||o||(clearTimeout(a),a=setTimeout(()=>{a=null,m()},Kn))}async function m(){if(clearTimeout(a),a=null,!(o||!g.grid||p.value)){if(g.engine.busy){l=!0,h.cancel();return}try{const v={...bi(g.wind),model:g.wind.model,layers:Yr(g.grid)};g.display.speedMps=v.speedMps,g.error="",await h.run(g.grid,v)}catch(v){g.error=v.message}l&&!o&&(l=!1,await m())}}function x(){!i||!t.value||n==null||n.update({source:g.area.source,input:g.area.snapshot,prediction:g.engine.prediction,preview:f.getPreview(),display:g.display})}async function M(v){if(!(p.value||!g.grid)&&!(v!=="model"&&(g.engine.busy||!g.engine.prediction))){g.downloading=!0,g.downloadError="";try{const k=g.area.snapshot;let B;if(v==="model")B=await Eo(k,g.grid,{shouldCancel:()=>o});else{const A=Number(g.display.speedMps);if(!Ke(A))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const V=g.engine.prediction,z={...V,settings:{...V.settings,speedMps:A}},S=Gr(z,g.display.sliceHeightM),C=await h.readMddf(S.settings.layerIndex);v==="mddf"?B=Io(k,C,S):B=Ao(k,C,S,z)}const P=await jn(B);o||Hn(P,"flume-"+v+".zip","application/zip")}catch(k){o||(g.downloadError=k.message)}finally{o||(g.downloading=!1)}}}be([()=>g.engine.prediction,()=>g.area.source,()=>g.display.showSurroundings],x),be(()=>g.engine.layersReady,()=>n==null?void 0:n.refresh()),be(()=>[g.wind.directionDeg,g.wind.model],()=>{g.grid&&w()}),be(()=>g.wind.speedMps,v=>{Ke(v)&&(g.display.speedMps=Number(v))}),be(()=>g.engine.prediction,v=>{const k=Ye.find(B=>B.id===g.display.variable);(v==null?void 0:v.settings.model)==="v2"&&(k!=null&&k.v1Only)&&(g.display.variable="speed")}),be(()=>[g.display.variable,g.display.particles,g.display.density,g.display.speedMps,g.display.view,g.display.plane,g.display.sliceHeightM,g.display.planeOffsetM],()=>{Ke(g.display.speedMps)?(g.downloadError="",n==null||n.configure()):g.downloadError="Use a wind speed between 0.5 and 20 m/s."}),be(()=>g.display.paused,()=>i==null?void 0:i.triggerRepaint()),be(c,v=>tr(v)),be(d.mapStyle,v=>{i&&(f.beforeStyleChange(),t.value=!1,n==null||n.beforeStyleChange(),i.setStyle(v,{diff:!1}))}),gn(()=>{if(!(r!=null&&r.startsWith("pk."))){g.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{i=new Sr.Map({container:e.value,accessToken:r,style:d.mapStyle.value,center:qn,zoom:Gn,pitch:0,antialias:!0,attributionControl:!1}),n=Co(i,v=>{o||(g.legend=v)},v=>{o||(g.error=v.message)}),g.mapCreated=!0,i.on("style.load",()=>{if(!o)try{Xn(i,cn(g.area.source)),t.value=!0,f.restore(),x()}catch(v){g.error=v.message}}),i.on("error",v=>{if(o)return;const k=v.sourceId?" ("+v.sourceId+")":"";g.error="Map data unavailable"+k+". Check token, allowed domains and connection."}),d.attach(),s=new ResizeObserver(()=>i==null?void 0:i.resize()),s.observe(e.value)}catch(v){g.error=v.message}}),At(()=>{o=!0,clearTimeout(a),h.dispose(),n==null||n.dispose(),s==null||s.disconnect(),i==null||i.remove(),i=null});const _={mapElement:e,store:g,controls:d,locked:p,area:f,acceptArea:y,runPrediction:m,download:M};return mn(hn,_),_}const To={class:"flume-compact"},Lo={key:0,class:"flume-meta",role:"status"},Do={key:1,class:"flume-muted"},zo={class:"flume-actions"},No={key:2,role:"status",class:"flume-muted"},Vo={key:3,class:"flume-meta"},Uo=["disabled"],Oo={key:4,class:"flume-meta"},Wo={__name:"AreaHud",setup(r){const{store:e,area:t,locked:i,acceptArea:n}=ft(),s=e.area,o=Q(()=>!e.mapReady||i.value),a=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],l=[{label:"Model v1",value:"v1"},{label:"Model v2",value:"v2"}];return(u,c)=>{var b;const d=_r,f=yn,h=at,g=lt,p=ut;return O(),X("div",To,[U(d,{modelValue:$(e).wind.model,"onUpdate:modelValue":c[0]||(c[0]=y=>$(e).wind.model=y),options:l,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Model",class:"even-toggle",disabled:$(i)},null,8,["modelValue","disabled"]),U(f,{modelValue:$(s).source,"onUpdate:modelValue":c[1]||(c[1]=y=>$(s).source=y),label:"Buildings","aria-label":"Building source",size:"small",options:a,"text-by":"text","value-by":"value",disabled:$(i)},null,8,["modelValue","disabled"]),U(h,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:o.value,loading:$(s).loading,onClick:$(t).loadBuildings},{default:te(()=>[...c[3]||(c[3]=[ne("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),$(s).loadedArea?(O(),X("p",Lo," Loaded detailed buildings: "+T($(s).loadedArea.count)+" parts · "+T(($(s).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+T(($(s).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+T($(s).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(O(),X("p",Do,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),R("div",zo,[U(h,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:o.value,"aria-label":"Select region",onClick:$(t).startSelection},{default:te(()=>[...c[4]||(c[4]=[ne("Draw area",-1)])]),_:1},8,["disabled","onClick"]),U(h,{size:"small",disabled:!$(e).mapReady||!$(s).region&&!$(s).loadedArea||$(i),loading:$(s).loading,"aria-label":$(s).region?"Use selected region":"Use full loaded area",onClick:$(n)},{default:te(()=>[ne(T($(s).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"])]),$(s).drawing?(O(),X("p",No," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):$(s).region?(O(),X("p",Vo,[ne(T($(s).region.extentM[0])+" × "+T($(s).region.extentM[1])+" m · 4 m cells · "+T($(s).region.buffer?"main + buffer":"main domain")+" ",1),R("button",{type:"button",class:"flume-link",disabled:$(i),onClick:c[2]||(c[2]=(...y)=>$(t).clearSelection&&$(t).clearSelection(...y))},"Clear",8,Uo)])):K("",!0),(b=$(s).region)!=null&&b.mainDomain?(O(),X("p",Oo," Main: "+T($(s).region.mainDomain.extentM[0])+" × "+T($(s).region.mainDomain.extentM[1])+" m. Buffer: "+T(($(s).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):K("",!0),$(s).loading?(O(),Ae(g,{key:5,"model-value":$(s).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):K("",!0),$(s).error?(O(),Ae(p,{key:6,color:"danger"},{default:te(()=>[ne(T($(s).error),1)]),_:1})):K("",!0)])}}},Xo={class:"flex flex-col gap-3"},Yo={class:"grid grid-cols-[40px_minmax(0,1fr)_56px_24px] items-center gap-2"},jo={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Ho=["aria-valuenow","aria-disabled"],qo=["x1","y1","x2","y2"],Go=["cx","cy"],Zo={class:"flex flex-col gap-2 min-w-0"},Ko={class:"cardinals grid grid-cols-4 gap-1"},Jo={key:2,class:"flex flex-col gap-1"},Qo={role:"status",class:"text-xs text-secondary"},ea={key:3,class:"text-xs text-secondary"},ta={__name:"WindHud",setup(r){const{store:e,locked:t,runPrediction:i}=ft(),n=e.wind,s=e.engine,o=Q(()=>!!e.grid&&!t.value),a=Q(()=>{if(!e.grid)return null;const h=Yr(e.grid);return{topM:Math.round((h.at(-1)+.5)*ie),layers:h.length}}),l=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],u=et(null),c=Q(()=>Number(n.directionDeg)*Math.PI/180);function d(h){if(!o.value||h.type==="pointermove"&&!h.buttons)return;h.type==="pointerdown"&&h.currentTarget.setPointerCapture(h.pointerId);const g=u.value.getBoundingClientRect(),p=h.clientX-g.left-g.width/2,b=-(h.clientY-g.top-g.height/2);n.directionDeg=(Math.round(Math.atan2(b,p)*180/Math.PI)+360)%360}function f(h){if(!o.value)return;const g={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[h.key]??0;g&&(h.preventDefault(),n.directionDeg=(Number(n.directionDeg)+g+360)%360)}return(h,g)=>{const p=$r,b=bn,y=at,w=ut,m=lt;return O(),X("div",Xo,[R("div",Yo,[g[3]||(g[3]=R("span",{class:"text-xs text-secondary"},"Speed",-1)),U(p,{modelValue:$(n).speedMps,"onUpdate:modelValue":g[0]||(g[0]=x=>$(n).speedMps=x),min:$(vt),max:$(Mt),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),U(b,{modelValue:$(n).speedMps,"onUpdate:modelValue":g[1]||(g[1]=x=>$(n).speedMps=x),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:$(vt),max:$(Mt),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),g[4]||(g[4]=R("span",{class:"text-xs text-secondary"},"m/s",-1))]),R("div",jo,[(O(),X("svg",{ref_key:"dial",ref:u,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":$(n).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:wn(d,["prevent"]),onPointermove:d,onKeydown:f},[g[5]||(g[5]=xn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-0a4905ea></circle><text x="80" y="16" text-anchor="middle" data-v-0a4905ea>90°</text><text x="146" y="84" text-anchor="middle" data-v-0a4905ea>0°</text><text x="80" y="152" text-anchor="middle" data-v-0a4905ea>270°</text><text x="14" y="84" text-anchor="middle" data-v-0a4905ea>180°</text>',5)),R("line",{x1:80-Math.cos(c.value)*30,y1:80+Math.sin(c.value)*30,x2:80+Math.cos(c.value)*42,y2:80-Math.sin(c.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,qo),R("circle",{cx:80+Math.cos(c.value)*42,cy:80-Math.sin(c.value)*42,r:"5",class:"needle-tip"},null,8,Go)],40,Ho)),R("div",Zo,[U(b,{modelValue:$(n).directionDeg,"onUpdate:modelValue":g[2]||(g[2]=x=>$(n).directionDeg=x),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),R("div",Ko,[(O(),X(ke,null,kr(l,x=>U(y,{key:x.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+x.text,onClick:M=>$(n).directionDeg=x.value},{default:te(()=>[ne(T(x.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),$(e).error?(O(),Ae(w,{key:0,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:te(()=>[ne(T($(e).error),1)]),_:1})):K("",!0),$(s).error?(O(),Ae(w,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:te(()=>[ne(T($(s).error),1)]),_:1})):K("",!0),$(s).busy?(O(),X("div",Jo,[U(m,{"model-value":$(s).progress*100,indeterminate:$(s).progress===0},null,8,["model-value","indeterminate"]),R("p",Qo,T($(s).stage),1)])):K("",!0),a.value&&!$(s).busy?(O(),X("p",ea," 3D wind: ground to "+T(a.value.topM)+" m · "+T(a.value.layers)+" layers ",1)):K("",!0),U(y,{block:"",disabled:!o.value,loading:$(s).busy,"aria-label":"Run prediction",onClick:$(i)},{default:te(()=>[...g[6]||(g[6]=[ne("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},ra=Et(ta,[["__scopeId","data-v-0a4905ea"]]),na={class:"flex flex-col gap-3"},ia={key:0,class:"text-xs text-secondary"},sa={key:0,class:"hud-row hud-row--value"},oa={class:"hud-value"},aa={key:1,class:"hud-row hud-row--value"},la={class:"hud-value"},ua={class:"hud-row"},ca={class:"hud-row"},da={key:0,class:"flex flex-col gap-1 text-xs"},fa={class:"flex justify-between gap-2 text-secondary"},ha={class:"text-xs text-secondary"},ga={__name:"VisualizeHud",setup(r){const{store:e}=ft(),t=e.display,i=Q(()=>e.engine.prediction),n=Q(()=>{var y;return e.engine.layersReady||((y=i.value)==null?void 0:y.layers.length)||0}),s=Q(()=>i.value?Nt(i.value):Qt),o=Q(()=>i.value?rs(i.value):[0,0]),a=Q(()=>Ye.filter(y=>{var w;return!(y.v1Only&&((w=i.value)==null?void 0:w.settings.model)==="v2")}).map(y=>({label:y.label,value:y.id}))),l=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],u=Q(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(y=>y.value!=="3d"||t.view==="particles")),c=Q({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:y=>t.plane=y}),d=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],f=Q(()=>c.value==="h"||c.value==="3d"&&t.view==="particles"&&t.particles==="white"),h=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],g=Q(()=>{const y=Math.round(Number(t.planeOffsetM));return(y>0?"+":"")+y+" m"}),p=Q(()=>{var y;return((y=Ye.find(w=>w.id===t.variable))==null?void 0:y.ramp)??"turbo"}),b=Q(()=>"linear-gradient(to right,"+Array.from({length:17},(y,w)=>"rgb("+ln(p.value,w/16).join(",")+") "+w*100/16+"%").join(",")+")");return(y,w)=>{const m=_r,x=$r,M=vn,_=Mn;return O(),X("div",na,[i.value?(O(),X(ke,{key:1},[U(m,{modelValue:$(t).view,"onUpdate:modelValue":w[0]||(w[0]=v=>$(t).view=v),options:l,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),$(t).view!=="off"?(O(),X(ke,{key:0},[U(m,{modelValue:c.value,"onUpdate:modelValue":w[1]||(w[1]=v=>c.value=v),options:u.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),f.value?(O(),X("div",sa,[w[9]||(w[9]=R("span",{class:"hud-label"},"Height",-1)),U(x,{modelValue:$(t).sliceHeightM,"onUpdate:modelValue":w[2]||(w[2]=v=>$(t).sliceHeightM=v),min:$(Qt),max:s.value,step:$(ie),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),R("span",oa,T(Number($(t).sliceHeightM).toFixed(1))+" m",1)])):K("",!0),c.value==="v"?(O(),X("div",aa,[w[10]||(w[10]=R("span",{class:"hud-label"},"Position",-1)),U(x,{modelValue:$(t).planeOffsetM,"onUpdate:modelValue":w[3]||(w[3]=v=>$(t).planeOffsetM=v),min:o.value[0],max:o.value[1],step:$(L),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),R("span",la,T(g.value),1)])):K("",!0)],64)):K("",!0),$(t).view==="particles"?(O(),X(ke,{key:1},[R("div",ua,[w[11]||(w[11]=R("span",{class:"hud-label"},"View mode",-1)),U(m,{modelValue:$(t).particles,"onUpdate:modelValue":w[4]||(w[4]=v=>$(t).particles=v),options:d,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])]),R("div",ca,[w[12]||(w[12]=R("span",{class:"hud-label"},"Density",-1)),U(m,{modelValue:$(t).density,"onUpdate:modelValue":w[5]||(w[5]=v=>$(t).density=v),options:h,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),U(M,{modelValue:$(t).paused,"onUpdate:modelValue":w[6]||(w[6]=v=>$(t).paused=v),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):K("",!0),$(t).view!=="off"?(O(),X(ke,{key:2},[U(_,{class:"!my-0"}),U(m,{modelValue:$(t).variable,"onUpdate:modelValue":w[7]||(w[7]=v=>$(t).variable=v),options:a.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),$(e).legend?(O(),X("div",da,[R("div",{class:"colorbar",style:_n({background:b.value})},null,4),R("div",fa,[R("span",null,T($(e).legend.low.toFixed(2)),1),R("strong",null,T($(e).legend.legend)+" ("+T($(e).legend.unit)+")",1),R("span",null,T($(e).legend.high.toFixed(2)),1)])])):K("",!0)],64)):K("",!0),U(_,{class:"!my-0"}),U(M,{modelValue:$(t).showSurroundings,"onUpdate:modelValue":w[8]||(w[8]=v=>$(t).showSurroundings=v),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),R("p",ha,[ne(T(i.value.settings.model==="v2"?"Model v2":"Model v1")+" · 3D wind up to "+T(s.value.toFixed(0))+" m · "+T(n.value)+" / "+T(i.value.settings.layers.length)+" layers · "+T((i.value.milliseconds/1e3).toFixed(1))+" s ",1),i.value.grid.mainDomain?(O(),X(ke,{key:0},[ne(" · solid outline: main area, dashed: "+T((i.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):K("",!0)])],64)):(O(),X("p",ia,"Run a prediction to see the 3D wind."))])}}},pa=Et(ga,[["__scopeId","data-v-d437e31f"]]),ma={class:"space-y-2"},ya={key:0,class:"text-xs text-secondary"},ba={class:"grid grid-cols-2 gap-2"},wa={__name:"DownloadsHud",setup(r){const{store:e,download:t}=ft(),i=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function n(s){const o=e.engine;return e.downloading||o.downloading||s!=="model"&&(o.busy||!o.prediction)}return(s,o)=>{const a=at,l=lt,u=ut;return O(),X("div",ma,[$(e).grid?(O(),X(ke,{key:1},[R("div",ba,[(O(),X(ke,null,kr(i,c=>U(a,{key:c.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":c.label,disabled:n(c.id),onClick:d=>$(t)(c.id)},{default:te(()=>[ne(T(c.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),$(e).downloading?(O(),Ae(l,{key:0,indeterminate:"","aria-label":"Preparing download"})):K("",!0),$(e).downloadError?(O(),Ae(u,{key:1,color:"danger"},{default:te(()=>[ne(T($(e).downloadError),1)]),_:1})):K("",!0)],64)):(O(),X("p",ya,"Choose a simulation area before downloading its model."))])}}},xa={class:"flume-hud-stack"},va={class:"flume-heading city-glass"},Ma={class:"flume-heading__row"},_a={key:0,class:"flume-info"},$a={class:"flume-info__title"},ka={class:"flume-info__copyright"},Sa=["href"],Ca={class:"text-xs normal-case text-secondary"},Ba={class:"text-xs normal-case text-secondary"},Pa={key:0,class:"flume-status"},Ia={__name:"FlumeCityView",setup(r){const{mapElement:e,store:t,controls:i,locked:n,area:s}=Ro(),{controlsVisible:o}=i,{currentPresetName:a}=Mr(),l=Q(()=>a.value==="dark"),u=et(!1),c=Q(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),d={particles:"Particles",slice:"Slice",off:"Off"},f=Q(()=>t.engine.prediction?d[t.display.view]:""),h={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(g,p)=>{const b=at,y=ut,w=lt;return O(),X("section",{class:Cn(["flume-page map-glass",{"map-glass--dark":l.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=Sn((...m)=>$(s).stopSelection&&$(s).stopSelection(...m),["esc"]))},[R("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),U(Yn,{controls:$(i),shown:$(t).mapCreated,disabled:$(n)},null,8,["controls","shown","disabled"]),$n(R("div",xa,[R("header",va,[R("div",Ma,[p[2]||(p[2]=R("h1",null,"Flume City",-1)),U(b,{preset:"secondary",color:"textPrimary",size:"small",icon:u.value?"mso-close":"mso-info","aria-label":u.value?"Hide Flume City information":"Show Flume City information","aria-expanded":u.value,onClick:p[0]||(p[0]=m=>u.value=!u.value)},null,8,["icon","aria-label","aria-expanded"])]),u.value?(O(),X("div",_a,[R("p",$a,T(h.title),1),R("p",null,T(h.authors),1),R("p",null,T(h.summary),1),U(b,{preset:"secondary",size:"small",icon:"mso-description",href:h.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:te(()=>[...p[3]||(p[3]=[ne("arXiv",-1)])]),_:1},8,["href"]),R("div",ka,[R("p",null,[p[4]||(p[4]=ne(" Developed and maintained by ",-1)),R("a",{href:$(je).lab.url,target:"_blank",rel:"noopener"},T($(je).lab.name),9,Sa),p[5]||(p[5]=R("br",null,null,-1)),ne("("+T($(je).lead)+") ",1)]),R("p",null,T($(je).place),1)])])):K("",!0)]),U(qe,{title:"1 · Simulation area",inert:$(n),collapsed:!!$(t).grid},{default:te(()=>[U(Wo)]),_:1},8,["inert","collapsed"]),U(qe,{title:"2 · Wind configuration",collapsed:!$(t).grid},{"header-extra":te(()=>[R("span",Ca,T(c.value),1)]),default:te(()=>[U(ra)]),_:1},8,["collapsed"]),U(qe,{title:"3 · Wind visualization",collapsed:!$(t).engine.prediction},{"header-extra":te(()=>[R("span",Ba,T(f.value),1)]),default:te(()=>[U(pa)]),_:1},8,["collapsed"]),U(qe,{title:"4 · Downloads",collapsed:!$(t).grid},{default:te(()=>[U(wa)]),_:1},8,["collapsed"]),$(t).error&&!$(t).grid?(O(),Ae(y,{key:0,color:"danger"},{default:te(()=>[ne(T($(t).error),1)]),_:1})):K("",!0)],512),[[kn,$(o)]]),!$(t).mapReady&&!$(t).error?(O(),X("div",Pa,[U(w,{indeterminate:"","aria-label":"Loading Flume map"})])):K("",!0)],34)}}},Oa=Et(Ia,[["__scopeId","data-v-4af10bca"]]);export{Oa as default};
