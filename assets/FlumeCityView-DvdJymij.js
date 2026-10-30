import{w as we,o as At,m as Ce,r as Ft,u as kr,d as xn,a as ee,b as et,a2 as vn,a3 as Mn,e as U,v as Y,i as N,l as _,h as te,z as ne,t as E,q as R,x as Z,f as Ae,M as _n,N as at,U as Rt,P as Sr,L as lt,y as ut,_ as Et,J as $n,a4 as kn,F as ke,A as Br,S as Sn,a5 as Bn,s as Cn,O as Pn,X as In,Y as An,a6 as je,a0 as Fn,E as Rn}from"./index-Co8v2apk.js";import{y as Le,z as En,n as Tn,l as Ln,E as jt,o as ht,M as Ht,m as Cr,F as He,V as pe,S as Dn,c as zn,d as Vn,G as Pr,r as Ir,H as Ar,u as tt,I as vt,W as Nn,D as qt,R as Gt,f as Un,L as Zt,J as On,K as Kt,N as Wn,s as Xn,b as Yn,B as jn,g as Hn,v as qn,a as Gn,x as Zn,w as qe}from"./mapbox-gl-geocoder-C3r3dg9H.js";import{z as Kn}from"./archive-Dz16c6AW.js";import{d as Jn}from"./download-B6B1Q6H-.js";import{m as ct,c as De}from"./geojsonToStl-Bbo8coar.js";import{c as Tt}from"./index-D6bWIqpK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./earcut-Drp1yMsm.js";const Qn=[-73.5673,45.5017],ei=14,T=4,ie=1.5,Fr=240,gt=3e3,Rr=.5,Er=.5,Ue=16,Jt={directionDeg:0,speedMps:6,model:"v2"},Mt=.5,_t=20,ti=320,Qt=.35,ri=10,er=.75,tr={low:800,medium:1600,high:3200},Tr={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.1},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.2}};let Lr="dark";function rr(r){Lr=r in Tr?r:"dark"}function ge(){return Tr[Lr]}function Dr(r){const e=[1/0,1/0,-1/0,-1/0];return Tt(r,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function dt(r,e){for(const x of[r,e])if(!(Array.isArray(x)&&x.length>=2&&x.every(Number.isFinite)&&Math.abs(x[0])<=180&&Math.abs(x[1])<=85.051129))throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(r[0],e[0]),Math.min(r[1],e[1])];if(Math.abs(r[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const n=ct(t),i=De(t),[s,o]=n([Math.max(r[0],e[0]),Math.max(r[1],e[1])]);if(s<=0||o<=0)throw new Error("The region is empty.");const a=Math.ceil((s-1e-6)/T),u=Math.ceil((o-1e-6)/T),l=i([a*T,u*T]),c=[...t,...l],[d,f,g,h]=c,p={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[d,f],[g,f],[g,h],[d,h],[d,f]]]}};return{origin:t,bounds:c,extentM:[a*T,u*T],polygon:p}}function nr(r){var i;if(((i=r==null?void 0:r.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(Tt(r,s=>{if(!Number.isFinite(s[0])||!Number.isFinite(s[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=Dr(r);return{...dt(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(r.geometry)}}}function ni(r,e=Rr){const t=structuredClone({origin:r.origin,bounds:r.bounds,extentM:r.extentM,polygon:r.polygon}),n=r.extentM.map(u=>Math.ceil(u*e/T)*T),i=De(r.origin)([0,-n[1]]),s=De(i)([-n[0],0]),o=ct(s)(r.bounds.slice(2,4)),a=dt(s,De(s)([o[0]+n[0],o[1]+n[1]]));return{...r,...a,mainDomain:t,buffer:{fraction:e,paddingM:n}}}function zr(r){var n,i,s;const e=new Map,t=new Set;for(const o of r){if(!["Polygon","MultiPolygon"].includes((n=o.geometry)==null?void 0:n.type))continue;Tt(o,f=>{if(!Number.isFinite(f[0])||!Number.isFinite(f[1])||Math.abs(f[0])>180||Math.abs(f[1])>85.051129)throw new Error("Invalid building coordinates.")});const a=Number((i=o.properties)==null?void 0:i.height),u=Number((s=o.properties)==null?void 0:s.min_height)||0,l=JSON.stringify([o.geometry,a,u]);if(t.has(l))continue;t.add(l);const c=Le(o),d=c==null?l:JSON.stringify([c,a,u]);e.has(d)||e.set(d,[]),e.get(d).push({type:"Feature",...o.id==null?{}:{id:o.id},properties:structuredClone(o.properties??{}),geometry:structuredClone(o.geometry)})}return Array.from(e.values(),o=>{const a=o[0];if(o.length>1){const u=Ln({type:"FeatureCollection",features:o});if(!u)throw new Error("Building parts produced empty geometry.");a.geometry=u.geometry,delete a.bbox}return a})}function ii(r,e){var g,h,p;const t=zr(r),n=e.selection??e.polygon,i=new Set(t.filter(x=>Tn(x,n))),s=new Set(Array.from(i,Le).filter(x=>x!=null)),o=[],a=[],u=[];let l=0,c=0;for(const x of t){if(!(i.has(x)||Le(x)!=null&&s.has(Le(x)))){a.push(x);continue}const y=(g=x.properties)==null?void 0:g.height;if(y==null||y===""){l++;continue}const m=Number(y);if(!Number.isFinite(m)||m<0||m>Fr)throw new Error("Building height must be finite and between 0 and 240 m.");if(m===0){l++;continue}Number((h=x.properties)==null?void 0:h.min_height)>0&&c++,o.push({...x,properties:{...x.properties,source_height:m,source_min_height:Number((p=x.properties)==null?void 0:p.min_height)||0,height:Math.max(1,Math.round(m/ie))*ie,min_height:0}})}const d={type:"FeatureCollection",features:o};let f=e;if(o.length){const x=Dr(d);f=dt(x.slice(0,2),x.slice(2,4))}return l&&u.push(l+" parts have missing/zero height and were omitted."),c&&u.push(c+" raised parts are treated as solid from the ground to their roof."),o.length||u.push("No buildings found in loaded map data. This run will use open ground."),o.some(x=>Le(x)==null)&&u.push("Selected parts without provider IDs cannot be joined across tile boundaries."),u.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...f,selection:structuredClone(e.selection??e.polygon),buildings:d,surroundings:{type:"FeatureCollection",features:a},warnings:u}}function rt(r){var t,n;const e=[];for(const i of zr(r)){const s=Number((t=i.properties)==null?void 0:t.height);if(!Number.isFinite(s)||s<=0)continue;const o=Math.min(s,Math.max(0,Number((n=i.properties)==null?void 0:n.min_height)||0));e.push({...i,properties:{...i.properties,height:s,min_height:o}})}return{type:"FeatureCollection",features:e}}function Vr(r,e=null){const t=r.map(Le);if(t.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const n=["in",En,["literal",Array.from(new Set(t))]];return{selected:e?["all",e,n]:n,surroundings:e?["all",e,["!",n]]:["!",n]}}const ir=65536*65536,si=12,sr=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),oi=0,ai=1,or=2,li=5;class ui{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,n=this.length){let i;for(;i=this.nextField(n);)e(i,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*ir;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*ir;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,n=t[this.pos++];if(n<128)return n;let i=n&127,s;return s=t[this.pos++],i|=(s&127)<<7,s<128||(s=t[this.pos++],i|=(s&127)<<14,s<128)||(s=t[this.pos++],i|=(s&127)<<21,s<128)?i:(s=t[this.pos],i|=(s&15)<<28,ci(i,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=si&&sr?sr.decode(this.buf.subarray(t,e)):di(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const n=this.readPackedEnd();for(;this.pos<n;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===or?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===oi)for(;this.buf[this.pos++]>127;);else if(t===or)this.pos=this.readVarint()+this.pos;else if(t===li)this.pos+=4;else if(t===ai)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function ci(r,e,t){const n=t.buf;let i,s;if(s=n[t.pos++],i=(s&112)>>4,s<128||(s=n[t.pos++],i|=(s&127)<<3,s<128)||(s=n[t.pos++],i|=(s&127)<<10,s<128)||(s=n[t.pos++],i|=(s&127)<<17,s<128)||(s=n[t.pos++],i|=(s&127)<<24,s<128)||(s=n[t.pos++],i|=(s&1)<<31,s<128))return Re(r,i,e);throw new Error("Expected varint not more than 10 bytes")}function Re(r,e,t){return t?e*4294967296+(r>>>0):(e>>>0)*4294967296+(r>>>0)}function di(r,e,t){let n="",i=e;for(;i<t;){const s=r[i];let o=null,a=s>239?4:s>223?3:s>191?2:1;if(i+a>t)break;let u,l,c;a===1?s<128&&(o=s):a===2?(u=r[i+1],(u&192)===128&&(o=(s&31)<<6|u&63,o<=127&&(o=null))):a===3?(u=r[i+1],l=r[i+2],(u&192)===128&&(l&192)===128&&(o=(s&15)<<12|(u&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):a===4&&(u=r[i+1],l=r[i+2],c=r[i+3],(u&192)===128&&(l&192)===128&&(c&192)===128&&(o=(s&15)<<18|(u&63)<<12|(l&63)<<6|c&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,a=1):o>65535&&(o-=65536,n+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),n+=String.fromCharCode(o),i+=a}return n}class Nr{constructor(e,t,n,i,s){for(this.properties=Object.create(null),this.extent=n,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=s;e.pos<t;){const o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){const a=e.readVarint()+e.pos;for(;e.pos<a;){const u=i[e.readVarint()],l=s[e.readVarint()];this.properties[u]=l}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,n=[];let i,s=1,o=0,a=0,u=0;for(;e.pos<t;){if(o<=0){const l=e.readVarint();if(s=l&7,o=l>>3,o===0)continue}if(o--,s===1)a+=e.readSVarint(),u+=e.readSVarint(),i&&n.push(i),i=[new jt(a,u)];else if(s===2)a+=e.readSVarint(),u+=e.readSVarint(),i&&i.push(new jt(a,u));else if(s===7)i&&i.push(i[0].clone());else throw new Error(`unknown command ${s}`)}return i&&n.push(i),n}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let n=1,i=0,s=0,o=0,a=1/0,u=-1/0,l=1/0,c=-1/0;for(;e.pos<t;){if(i<=0){const d=e.readVarint();if(n=d&7,i=d>>3,i===0)continue}if(i--,n===1||n===2)s+=e.readSVarint(),o+=e.readSVarint(),s<a&&(a=s),s>u&&(u=s),o<l&&(l=o),o>c&&(c=o);else if(n!==7)throw new Error(`unknown command ${n}`)}return[a,l,u,c]}toGeoJSON(e,t,n){const i=this.extent*Math.pow(2,n),s=this.extent*e,o=this.extent*t,a=this.loadGeometry();function u(f){return[(f.x+s)*360/i-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+o)*2/i)*Math.PI))-90]}function l(f){return f.map(u)}let c;if(this.type===1){const f=[];for(const h of a)f.push(h[0]);const g=l(f);c=f.length===1?{type:"Point",coordinates:g[0]}:{type:"MultiPoint",coordinates:g}}else if(this.type===2){const f=a.map(l);c=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=fi(a),g=[];for(const h of f)g.push(h.map(l));c=g.length===1?{type:"Polygon",coordinates:g[0]}:{type:"MultiPolygon",coordinates:g}}else throw new Error("unknown feature type");const d={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(d.id=this.id),d}}Nr.types=["Unknown","Point","LineString","Polygon"];function fi(r){const e=r.length;if(e<=1)return[r];const t=[];let n,i;for(let s=0;s<e;s++){const o=hi(r[s]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(n&&t.push(n),n=[r[s]]):n&&n.push(r[s]))}return n&&t.push(n),t}function hi(r){let e=0;for(let t=0,n=r.length,i=n-1,s,o;t<n;i=t++)s=r[t],o=r[i],e+=(o.x-s.x)*(s.y+o.y);return e}class gi{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const n=e.readVarint();n===10?this.name=e.readString():n===18?(this._features.push(e.pos),e.skip(n)):n===26?this._keys.push(e.readString()):n===34?this._values.push(pi(e)):n===40?this.extent=e.readVarint():n===120?this.version=e.readVarint():e.skip(n)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new Nr(this._pbf,t,this.extent,this._keys,this._values)}}function pi(r){let e=null;const t=r.readVarint()+r.pos;for(;r.pos<t;){const n=r.readVarint();e=n===10?r.readString():n===21?r.readFloat():n===25?r.readDouble():n===32?r.readVarint(!0):n===40?r.readVarint():n===48?r.readSVarint():n===56?r.readBoolean():(r.skip(n),null)}if(e==null)throw new Error("unknown feature value");return e}class mi{constructor(e,t=e.length){const n=Object.create(null);for(;e.pos<t;){const i=e.readVarint();if(i===26){const s=new gi(e,e.readVarint()+e.pos);s.length&&(n[s.name]=s)}else e.skip(i)}this.layers=n}}function Ur(r){return r==="osm"?"building":"Montreal_Qatar-6hvjju"}function Or(r,e){return r!=="osm"||String(e.extrude)==="true"}function Wr(r,e){return Math.max(r??0,Math.min(16,e??16))}function Xr(r,e){const t=2**e,n=s=>s/t*360-180,i=s=>Math.atan(Math.sinh(Math.PI*(1-2*s/t)))*180/Math.PI;return[n(Math.min(...r.map(s=>s.x))),i(Math.max(...r.map(s=>s.y))+1),n(Math.max(...r.map(s=>s.x))+1),i(Math.min(...r.map(s=>s.y)))]}function Yr(r,e,t=0){const n=2**e,i=d=>(d+180)/360*n,s=d=>{const f=Math.max(-85.051129,Math.min(85.051129,d))*Math.PI/180;return(1-Math.asinh(Math.tan(f))/Math.PI)/2*n},o=Math.max(0,Math.floor(i(r[0]))-t),a=Math.min(n-1,Math.ceil(i(r[2])-1e-9)-1+t),u=Math.max(0,Math.floor(s(r[3]))-t),l=Math.min(n-1,Math.ceil(s(r[1])-1e-9)-1+t);if((a-o+1)*(l-u+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const c=[];for(let d=u;d<=l;d++)for(let f=o;f<=a;f++)c.push({z:e,x:f,y:d});return c}function yi({map:r,sourceId:e,source:t,bounds:n}){var i,s,o,a;try{const u=(i=r.getSource)==null?void 0:i.call(r,e),l=(o=(s=r.style)==null?void 0:s.getOwnSourceCaches)==null?void 0:o.call(s,e);if(!u||!(l!=null&&l.length)||typeof r.querySourceFeatures!="function")return null;const c=Wr(u.minzoom,u.maxzoom),d=Yr(n,c),f=new Set;for(const p of l)for(const x of p.getIds()){const b=p.getTileByID(x),y=(a=b==null?void 0:b.tileID)==null?void 0:a.canonical;(y==null?void 0:y.z)===c&&b.state==="loaded"&&f.add(y.x+"/"+y.y)}if(!d.every(p=>f.has(p.x+"/"+p.y)))return null;const g=new Set(d.map(p=>p.x+"/"+p.y));return{features:r.querySourceFeatures(e,{sourceLayer:Ur(t)}).filter(p=>{var x;return((x=p.tile)==null?void 0:x.z)===c&&g.has(p.tile.x+"/"+p.tile.y)&&Or(t,p.properties)}),zoom:c,tileCount:d.length,coverageBounds:Xr(d,c),fromMap:!0}}catch{return null}}async function ar(r,e,t=!1){e==null||e.throwIfAborted();const n=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),i=await fetch(r,{signal:n});if(t&&i.status===404)return null;if(!i.ok)throw new Error("Building data request failed (HTTP "+i.status+"). Check source access and token.");return i}function lr(r,e){var n;const t=new URL(r,((n=globalThis.location)==null?void 0:n.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function bi({sourceConfig:r,source:e,bounds:t,accessToken:n,signal:i,onProgress:s,paddingTiles:o=0}){var p;if(!r)throw new Error("The selected basemap does not provide this building source.");let a=r;if(r.url){let x=r.url;if(x.startsWith("mapbox://")){const b=x.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(b))throw new Error("Invalid Mapbox tileset ID.");x="https://api.mapbox.com/v4/"+b+".json?secure"}a=await(await ar(lr(x,n),i)).json()}if(!((p=a.tiles)!=null&&p.length))throw new Error("The selected source has no vector tile URLs.");const u=Wr(a.minzoom,a.maxzoom);if(!Number.isInteger(u)||u<0||u>22)throw new Error("Unsupported tile detail level.");const l=Yr(t,u,o),c=[];let d=0,f=0,g=0;const h=Ur(e);return await Promise.all(Array.from({length:Math.min(4,l.length)},async()=>{for(;d<l.length;){const{x,y:b,z:y}=l[d++];let m=a.tiles[0].replaceAll("{z}",String(y)).replaceAll("{x}",String(x)).replaceAll("{y}",String(a.scheme==="tms"?2**y-b-1:b)).replaceAll("{ratio}","");m=lr(m,n);const w=await ar(m,i,!0);if(w){const M=await w.arrayBuffer();if(g+=M.byteLength,M.byteLength>16*1024*1024||g>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const $=new mi(new ui(new Uint8Array(M))).layers[h];if($)for(let v=0;v<$.length;v++){const k=$.feature(v);k.type===3&&Or(e,k.properties)&&c.push(k.toGeoJSON(x,b,y))}}f++,s==null||s(f/l.length)}})),i==null||i.throwIfAborted(),{features:c,zoom:u,tileCount:l.length,coverageBounds:Xr(l,u)}}const ye="flume-detailed-buildings",be="flume-region-domain",Ee="flume-main-domain";function $t(r,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){r.getLayer(ye)&&r.removeLayer(ye),r.getSource(ye)&&r.removeSource(ye);return}r.getSource(ye)?r.getSource(ye).setData(e):r.addSource(ye,{type:"geojson",data:e,maxzoom:22,tolerance:0}),r.getLayer(ye)||r.addLayer({id:ye,type:"fill-extrusion",source:ye,minzoom:0,paint:{"fill-extrusion-color":ge().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function wi(r,e){if(!e){r.getLayer(Ee)&&r.removeLayer(Ee),r.getLayer(be)&&r.removeLayer(be),r.getSource(be)&&r.removeSource(be);return}const t=[{...e.polygon,properties:{role:"outer"}}];e.mainDomain&&t.push({...e.mainDomain.polygon,properties:{role:"main"}});const n={type:"FeatureCollection",features:t};r.getSource(be)?r.getSource(be).setData(n):(r.addSource(be,{type:"geojson",data:n}),r.addLayer({id:be,type:"line",source:be,filter:["==",["get","role"],"outer"],paint:{"line-color":ge().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!r.getLayer(Ee)&&r.addLayer({id:Ee,type:"line",source:be,filter:["==",["get","role"],"main"],paint:{"line-color":ge().mainArea,"line-width":3}}),!e.mainDomain&&r.getLayer(Ee)&&r.removeLayer(Ee)}const ur=["draw.create","draw.update","draw.delete"];function xi({getMap:r,ready:e,onChange:t,accessToken:n}){const i=Ft({source:"concordia",bufferPercent:Rr*100,drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let s=null,o=!1,a=null,u=0,l=null;function c(S=!1){u++,a==null||a.abort(),S||(l=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function d(){const S=r();!S||!e.value||($t(S,l==null?void 0:l.preview),wi(S,i.region??(l==null?void 0:l.area)??null))}function f(){return(l==null?void 0:l.preview)??null}function g(S){c(!i.region&&!i.snapshot),i.error="";try{i.region=Ce(nr(S))}catch(C){i.region=null,i.error=C.message}d()}function h(S){var z;if(o||!s)return;const C=(z=S.features)==null?void 0:z.at(-1);if(S.type==="draw.create"&&C)for(const X of s.getAll().features)X.id!==C.id&&s.delete(X.id);const I=s.getAll().features.find(X=>X.geometry.type==="Polygon");I?g(I):(c(),i.region=null,d()),i.drawing=!1}function p(S){i.drawing=S.mode==="draw_polygon"||S.mode==="direct_select"}function x(){var C;const S=r();if(!S||!e.value)throw new Error("Wait for the map to load.");if(!s){const I={...ht.modes.simple_select,clickOnFeature(){},clickOnVertex(){},startOnActiveFeature(){}};s=new ht({displayControlsDefault:!1,controls:{},boxSelect:!1,modes:{...ht.modes,simple_select:I}}),S.addControl(s,"bottom-left");for(const z of ur)S.on(z,h);S.on("draw.modechange",p),b(S),S.once("idle",()=>b(S)),(C=i.region)!=null&&C.selection&&s.add(i.region.selection)}return s}function b(S){var C;for(const I of((C=S.getStyle())==null?void 0:C.layers)??[])I.id.startsWith("gl-draw-")&&(I.type==="fill"&&(S.setPaintProperty(I.id,"fill-color",ge().mainArea),S.setPaintProperty(I.id,"fill-opacity",ge().drawFillOpacity)),I.type==="line"&&(S.setPaintProperty(I.id,"line-color",ge().mainArea),S.setPaintProperty(I.id,"line-width",3)))}function y(){const S=r();if(!(!s||!S)){for(const C of ur)S.off(C,h);S.off("draw.modechange",p),S.removeControl(s),s=null,i.drawing=!1}}function m(){if(!i.loading)try{const S=x();r().stop(),c(!i.region&&!i.snapshot),i.region=null,S.deleteAll(),d(),S.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(S){i.error=S.message}}function w(){s&&s.changeMode("simple_select"),i.drawing=!1}function M(){var S;(S=r())==null||S.stop(),y(),c(),i.region=null,i.error="",d()}async function $(S){const C=new AbortController,I=u;a=C,i.loading=!0,i.progress=0,i.error="";const z=()=>o||C.signal.aborted||I!==u;try{return await S({signal:C.signal,epoch:I,isStale:z})}catch(X){return C.abort(),!o&&I===u&&X.name!=="AbortError"&&(i.error=X.message),null}finally{a===C&&(a=null,o||(i.loading=!1))}}async function v(S,C,{signal:I,epoch:z,isStale:X}){if(I.throwIfAborted(),(l==null?void 0:l.source)===C){const[A,O,G,ue]=S.bounds,ce=l.area.bounds;if(A>=ce[0]&&O>=ce[1]&&G<=ce[2]&&ue<=ce[3])return l.tiles}const K=r(),D=C==="osm"?"composite":"city-concordia",J=yi({map:K,sourceId:D,source:C,bounds:S.bounds})??await bi({sourceConfig:K.getStyle().sources[D],source:C,bounds:S.bounds,accessToken:n,signal:I,paddingTiles:1,onProgress:A=>{z===u&&(i.progress=A)}});if(X())throw new DOMException("Cancelled","AbortError");const le=rt(J.features);return l={source:C,area:S,tiles:J,preview:le},i.loadedArea=Ce({source:C,bounds:[...S.bounds],extentM:[...S.extentM],count:le.features.length,fromMap:!!J.fromMap}),d(),J}function k(S){var z;const C=r(),I=C.getCanvas().clientWidth;(z=C.resize)==null||z.call(C),C.fitBounds([S.bounds.slice(0,2),S.bounds.slice(2,4)],{padding:I>=640?{top:40,bottom:40,left:Math.min(320,I*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function B(){if(i.loading||o)return null;const S=r();if(!S||!e.value)return i.error="Wait for the map to load.",null;const C=i.source;return $(async I=>{const z=gt/2,X=S.getCenter().wrap().toArray(),K=De(X)([-z,-z]),D=dt(K,De(K)([gt,gt]));return k(D),await v(D,C,I),I.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function P(){if(i.loading||o)return null;!i.region&&(l==null?void 0:l.source)===i.source&&g(l.area.polygon);const S=r(),C=i.region,I=i.source;return!S||!e.value||!C?(i.error="Draw and finish a valid polygon first.",null):$(async z=>{const X=nr(C.selection??C.polygon);let K=X,D,q;for(let A=0;A<4;A++){if(q=await v(K,I,z),z.isStale())return null;D=ii(q.features,X);const[O,G,ue,ce]=D.bounds,re=q.coverageBounds,fe=1e-8;if(O>re[0]+fe&&G>re[1]+fe&&ue<re[2]-fe&&ce<re[3]-fe||!D.buildings.features.length)break;if(A===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");K=D}const J=Math.min(Math.max(Number(i.bufferPercent)||0,0),Er*100)/100;D=ni(D,J),D.source=I,D.dataZoom=q.zoom,D.tileCount=q.tileCount,D.surroundings=rt(D.surroundings.features),D.warnings=D.warnings.filter(A=>!A.startsWith("Loaded map tiles only"));const le=q.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ";return D.warnings.push(le+q.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(D.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=Ce(D),i.region=Ce({origin:D.origin,bounds:D.bounds,extentM:D.extentM,polygon:D.polygon,selection:D.selection,mainDomain:D.mainDomain,buffer:D.buffer}),d(),k(D),t==null||t(),D})}function W(){a==null||a.abort(),y()}function F(){var S;d(),(S=i.region)!=null&&S.selection&&x()}function L(){o=!0,u++,a==null||a.abort(),y()}return we(()=>i.source,()=>{c(),d(),i.error=""}),At(L),{state:i,startSelection:m,stopSelection:w,clearSelection:M,setSelection:g,captureRegion:P,loadBuildings:B,getPreview:f,restore:F,beforeStyleChange:W}}function vi(r){const[e,t]=r.extentM,n=Math.round(e/T),i=Math.round(t/T);if(n<1||i<1||!Number.isSafeInteger(n*i)||Math.abs(n*T-e)>1e-5||Math.abs(i*T-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const s=ct(r.origin),o=new Float32Array(n*i);for(const l of r.buildings.features){const c=Number(l.properties.height);if(!Number.isFinite(c)||c<0||c>Fr)throw new Error("Invalid building height (0..240 metres).");if(!c)continue;const d=Math.max(1,Math.round(c/ie)),f=l.geometry.type==="Polygon"?[l.geometry.coordinates]:l.geometry.coordinates;for(const g of f){const h=g.map(m=>m.map(s));let p=1/0,x=-1/0;for(const m of h)for(const w of m)p=Math.min(p,w[1]),x=Math.max(x,w[1]);const b=Math.max(0,Math.ceil(p/T-.5)),y=Math.min(i,Math.ceil(x/T-.5));for(let m=b;m<y;m++){const w=(m+.5)*T,M=[];for(const $ of h)for(let v=0,k=$.length-1;v<$.length;k=v++){const B=$[k],P=$[v];(B[1]<=w&&P[1]>w||P[1]<=w&&B[1]>w)&&M.push(B[0]+(w-B[1])*(P[0]-B[0])/(P[1]-B[1]))}M.sort(($,v)=>$-v);for(let $=0;$+1<M.length;$+=2){const v=Math.max(0,Math.ceil(M[$]/T-.5-1e-8)),k=Math.min(n,Math.ceil(M[$+1]/T-.5-1e-8));for(let B=v;B<k;B++)o[m*n+B]=Math.max(o[m*n+B],d)}}}}let a=0,u=0;for(const l of o)l>0&&a++,u=Math.max(u,l);return{layers:o,nx:n,ny:i,origin:[...r.origin],extentM:[...r.extentM],mainDomain:r.mainDomain,buffer:r.buffer,spacingM:T,layerSpacingM:ie,statistics:{builtCells:a,maximumHeightM:u*ie}}}function Ke(r){const e=Number(r);return Number.isFinite(e)&&e>=Mt&&e<=_t}function Mi({directionDeg:r,speedMps:e}){const t=(o,a)=>{if(o===""||o===null||o===void 0||!Number.isFinite(Number(o)))throw new Error("Invalid "+a+".");return Number(o)},n=t(r,"direction"),i=t(e,"speed");if(!Ke(i))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const s=(n%360+360)%360;return{directionDeg:s,thetaRad:s*Math.PI/180,speedMps:i}}const cr=4*1024**3;class Lt{constructor(e,t,n){this.adapter=e,this.device=t,this.useF16=n,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),n=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,cr),maxBufferSize:Math.min(e.limits.maxBufferSize,cr)}});return new Lt(e,n,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,n){const i=Math.max(4,Math.ceil(e/4)*4),s=this.device.createBuffer({size:i,usage:t,label:n});return s._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),s}storage(e,t,n=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|n,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const n=this.storage(e.byteLength,t);return this.write(n,e),n}write(e,t){if(t.byteLength%4){const n=new Uint8Array(Math.ceil(t.byteLength/4)*4);n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,n)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,n=new ArrayBuffer(t),i=new Uint32Array(n),s=new Int32Array(n),o=new Float32Array(n);e.forEach(([u,l],c)=>{u==="u"?i[c]=l:u==="i"?s[c]=l:o[c]=l});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,n),this.scratch.push(a),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,n,i,s=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:n.map((u,l)=>({binding:l,resource:{buffer:u}}))}));const o=Math.max(1,Math.ceil(i/s)),a=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(o,a),Math.ceil(o/a))}async readFloat32(e,t){const n=t*4,i=this.buffer(n,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),s=this.device.createCommandEncoder();s.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([s.finish()]),await i.mapAsync(GPUMapMode.READ);const o=new Float32Array(i.getMappedRange().slice(0,n));return i.unmap(),this.free(i),o}}function jr(r){const e=new Uint16Array(r.length),t=new Float32Array(1),n=new Uint32Array(t.buffer);for(let i=0;i<r.length;i++){t[0]=r[i];const s=n[0],o=s>>>16&32768,a=s>>>23&255;let u=s&8388607;if(a===255){e[i]=o|31744|(u?1:0);continue}const l=a-127+15;if(l>=31){e[i]=o|31744;continue}if(l<=0){if(l<-10){e[i]=o;continue}u|=8388608;const d=14-l;let f=u>>>d;u>>>d-1&1&&(f+=1),e[i]=o|f;continue}let c=l<<10|u>>>13;u&4096&&(c+=1),e[i]=o|c}return e}function _i(r){const e=new Float32Array(r.length);for(let t=0;t<r.length;t++){const n=r[t],i=n&32768?-1:1,s=n>>10&31,o=n&1023;s===0?e[t]=i*o*2**-24:s===31?e[t]=o?NaN:i*(1/0):e[t]=i*(1+o/1024)*2**(s-15)}return e}const $e=180,Hr=4,qr=7,Dt=Hr*qr,nt=1.5,dr=4,$i=1600,ki=256*1024*1024,Je=r=>r.toFixed(6),Si=640,Bi=`
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
  let gxr = cosT[angle] / ${Je(dr)};
  let gyr = sinT[angle] / ${Je(dr)};

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

  let cutoff = ${Je($i)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Si}u; step++) {
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
}`,Ci=`
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
  let out = (u.pixelOffset + localPixel) * ${Dt}u
          + sig * ${qr}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Pi=r=>`${r==="f16"?`enable f16;
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
  let c = ${Dt}u;
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
}`;class Ii{constructor(e,t,n,i,s,o="f32"){this.context=e,this.store=o,this.ny=n,this.nx=i,this.margin=s,this.gy=n+2*s,this.gx=i+2*s,this.chunk=Math.min(16384,this.gy*this.gx);const a=new Float32Array(this.gy*this.gx);for(let c=0;c<n;c++){const d=c*i,f=(c+s)*this.gx+s;for(let g=0;g<i;g++)a[f+g]=t[d+g]*nt}this.heightBuffer=e.upload(a,"mddf.height");const u=new Float32Array($e),l=new Float32Array($e);for(let c=0;c<$e;c++){const d=2*Math.PI*c/$e;u[c]=Math.cos(d),l[c]=Math.sin(d)}this.cosBuffer=e.upload(u,"mddf.cos"),this.sinBuffer=e.upload(l,"mddf.sin"),this.rawBuffer=e.storage(Hr*this.chunk*$e*4,"mddf.raw"),this.fieldBytes=this.gy*this.gx*Dt*4,this.spare=e.storage(this.fieldBytes,"mddf.field"),this.fieldBuffer=this.spare,this.cache=new Map,this.tracePipeline=e.pipeline(Bi),this.fourierPipeline=e.pipeline(Ci),this.assemblePipeline=e.pipeline(Pi(o)),this.currentLayer=-1}async compute(e,t={}){var u,l,c;const{context:n}=this,i=this.cache.get(e);if(i){this.fieldBuffer=i,this.currentLayer=e,(u=t.onProgress)==null||u.call(t,1);return}const s=(this.cache.size+1)*this.fieldBytes<=ki;this.fieldBuffer=s?n.storage(this.fieldBytes,"mddf.field."+e):this.spare;const o=(e+.5)*nt,a=this.gy*this.gx;for(let d=0;d<a;d+=this.chunk){(l=t.signal)==null||l.throwIfAborted();const f=Math.min(this.chunk,a-d),g=n.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",d],["u",f],["u",0],["u",0],["u",0],["f",o],["f",0],["f",0],["f",0]]),h=n.device.createCommandEncoder(),p=h.beginComputePass();n.dispatch(p,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,g],f*$e),n.dispatch(p,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,g],f*4,64),p.end(),n.device.queue.submit([h.finish()])}await n.device.queue.onSubmittedWorkDone(),(c=t.onProgress)==null||c.call(t,1),n.releaseScratch(),s&&this.cache.set(e,this.fieldBuffer),this.currentLayer=e}assemble(e,t,n,i,s,o,a){const{context:u}=this,l=t.length/2,c=u.upload(t,"assemble.origins"),d=u.uniform([["u",l],["u",n.channels],["u",n.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",n.solidChannel],["i",n.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",s],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",n.coordYScale],["f",(s-n.coordZCentre)/n.coordZScale],["f",n.coordXCentre],["f",n.coordXScale],["f",0],["f",0]]),f=e.beginComputePass();return u.dispatch(f,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,c,n.tableBuffer,n.normBuffer,a,d],l*n.channels*o*o),f.end(),c}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.spare,...this.cache.values()])this.context.free(e)}}const pt=`
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
`,Ai=`
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
}`;function fr(r,e,t,n=1e-5){const i=r==="f16"||e==="f16"?`enable f16;
`:"",s=a=>r==="f16"?`f32(${a})`:a,o=a=>e==="f16"?`f16(${a})`:a;return`${i}
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
  let inverse = inverseSqrt(max(partial[0] / ${t}.0, 0.0) + ${n.toExponential(12)});
  for (var i = lid.x; i < ${t}u; i += 256u) {
    Y[base + i] = ${o("("+s("X[base + i]")+" - mean) * inverse")};
  }
}`}const mt=32;function Fi(r){const{store:e,patch:t,modes1:n,modes2:i}=r,s=t*t,o=2*n,a=e==="f16"?`enable f16;
`:"",u=c=>e==="f16"?`f32(${c})`:c,l=c=>e==="f16"?`f16(${c})`:c;return{conv1x1:`${a}${pt}
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
  var acc = ${u("B[o]")};
  let xBase = b * u.cin * ${s}u + p;
  let wBase = o * u.cin;
  for (var i = 0u; i < u.cin; i++) {
    acc += ${u("W[wBase + i]")} * ${u("X[xBase + i * "+s+"u]")};
  }
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${l("acc")};
}`,gate:`${a}${pt}
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
  let value = ${u("G[(b * 2u * u.mid + m) * "+s+"u + p]")};
  let gateValue = ${u("G[(b * 2u * u.mid + u.mid + m) * "+s+"u + p]")};
  H[g] = ${l("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:fr(e,e,s),instanceNormScaled:fr(e,e,s,1e-5/(mt*mt)),forwardColumns:`${a}
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
  let base = bc * ${s}u + y * ${t}u;
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
  let base = (bc * ${t}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${l("acc * "+1/mt)};
}`,residual:`${a}${pt}
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
  Y[g] = ${l("acc")};
}`}}function Ri(r,e,t){const n=2*e,i=[];for(let g=0;g<e;g++)i.push(g);for(let g=r-e;g<r;g++)i.push(g);const s=new Float32Array(r*t),o=new Float32Array(r*t);for(let g=0;g<r;g++)for(let h=0;h<t;h++){const p=2*Math.PI*g*h/r;s[g*t+h]=Math.cos(p),o[g*t+h]=-Math.sin(p)}const a=new Float32Array(n*r),u=new Float32Array(n*r);for(let g=0;g<n;g++)for(let h=0;h<r;h++){const p=2*Math.PI*i[g]*h/r;a[g*r+h]=Math.cos(p),u[g*r+h]=-Math.sin(p)}const l=new Float32Array(r*n),c=new Float32Array(r*n);for(let g=0;g<r;g++)for(let h=0;h<n;h++){const p=2*Math.PI*i[h]*g/r;l[g*n+h]=Math.cos(p)/r,c[g*n+h]=Math.sin(p)/r}const d=new Float32Array(t*r),f=new Float32Array(t*r);for(let g=0;g<t;g++){const h=(g===0?1:2)/r;for(let p=0;p<r;p++){const x=2*Math.PI*g*p/r;d[g*r+p]=h*Math.cos(x),f[g*r+p]=-h*Math.sin(x)}}return{forwardCos:s,forwardSin:o,rowRe:a,rowIm:u,inverseRowRe:l,inverseRowIm:c,inverseColCos:d,inverseColSin:f}}let Ei=class{constructor(e,t,n,i){const s=t.model;if(this.context=e,this.metadata=t,this.width=s.width,this.layers=s.layers,this.inputChannels=s.input_channels,this.outputChannels=s.output_channels,this.patch=t.inference.patch[0],this.modes1=s.modes[0],this.modes2=s.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[l,c]of Object.entries(Fi(o)))this.pipelines[l]=e.pipeline(c);this.contractPipeline=e.pipeline(Ai);const a=l=>{const c=t.tensors[l];if(!c)throw new Error(`missing tensor ${l}`);return _i(new Uint16Array(n,c.offset,c.count))};this.read=a,this.tables={};for(const[l,c]of Object.entries(Ri(this.patch,this.modes1,this.modes2)))this.tables[l]=e.upload(c,`fno.table.${l}`);this.weights={};const u=(l,c)=>{const d=a(c);this.weights[l]=this.store==="f16"?e.upload(jr(d),`fno.${l}`):e.upload(d,`fno.${l}`)};u("p1w","p.mlp1.weight"),u("p1b","p.mlp1.bias"),u("p2w","p.mlp2.weight"),u("p2b","p.mlp2.bias"),u("q1w","q.mlp1.weight"),u("q1b","q.mlp1.bias"),u("q2w","q.mlp2.weight"),u("q2b","q.mlp2.bias");for(let l=0;l<this.layers;l++)u(`m1w${l}`,`mlp_layers.${l}.mlp1.weight`),u(`m1b${l}`,`mlp_layers.${l}.mlp1.bias`),u(`m2w${l}`,`mlp_layers.${l}.mlp2.weight`),u(`m2b${l}`,`mlp_layers.${l}.mlp2.bias`),u(`lw${l}`,`w_layers.${l}.weight`),u(`lb${l}`,`w_layers.${l}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,n=t.tucker;let i=n.core_shape.slice(),s=e.upload(this.read(`${n.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${n.core}.im`),"tucker.core.im");for(const u of n.factors){const[l,c]=u.shape;if(i[u.mode]!==c)throw new Error(`factor ${u.name} does not match the core`);const d=i.slice();d[u.mode]=l;const f=d.reduce((M,$)=>M*$,1),g=d.slice(u.mode+1).reduce((M,$)=>M*$,1),h=e.storage(f*4,"tucker.re"),p=e.storage(f*4,"tucker.im"),x=e.upload(this.read(`${u.name}.re`),"tucker.f"),b=e.upload(this.read(`${u.name}.im`),"tucker.f"),y=e.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",u.mode],["u",l],["u",c],["u",g],["u",0],["u",f],["u",0]]),m=e.device.createCommandEncoder(),w=m.beginComputePass();e.dispatch(w,this.contractPipeline,[s,o,x,b,h,p,y],f),w.end(),e.device.queue.submit([m.finish()]),e.free(s),e.free(o),e.free(x),e.free(b),s=h,o=p,i=d}e.releaseScratch();const a=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==a.join())throw new Error(`spectral stack is ${i} but ${a} was expected`);this.spectralRe=s,this.spectralIm=o}allocate(e){const{context:t}=this,n=this.patch*this.patch,i=this.width,s=2*this.modes1,o=(u,l)=>t.storage(e*u*n*this.elementBytes,l),a=(u,l)=>t.storage(e*i*u*4,l);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(i,"fno.x"),t1:o(i,"fno.t1"),t2:o(i,"fno.t2"),gates:o(4*i,"fno.gates"),hidden:o(2*i,"fno.hidden"),spectral:o(i,"fno.spectral"),local:o(i,"fno.local"),wide:o(2*i,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:a(this.patch*this.modes2,"fno.xRe"),xIm:a(this.patch*this.modes2,"fno.xIm"),yRe:a(s*this.modes2,"fno.yRe"),yIm:a(s*this.modes2,"fno.yIm"),zRe:a(s*this.modes2,"fno.zRe"),zIm:a(s*this.modes2,"fno.zIm"),wRe:a(this.patch*this.modes2,"fno.wRe"),wIm:a(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,n=this.width,i=2*this.modes1,s=this.inputChannels+5*n+4*n+2*n+2*n+this.outputChannels,o=n*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(s*t*this.elementBytes+o)}encode(e,t){const{context:n,buffers:i,pipelines:s,tables:o}=this,a=this.width,u=this.patch*this.patch,l=2*this.modes1,c=e.beginComputePass(),d=(g,h,p,x,b=256)=>{n.dispatch(c,g,[...h,n.uniform(p)],x,b)},f=(g,h,p=s.instanceNorm)=>{c.setPipeline(p),c.setBindGroup(0,n.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}},{binding:1,resource:{buffer:h}}]})),c.dispatchWorkgroups(t*a)};d(s.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*a],["u",1]],t*2*a*u),d(s.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*a],["u",a],["u",0]],t*a*u);for(let g=0;g<this.layers;g++)f(i.x,i.t1),d(s.forwardColumns,[i.t1,o.forwardCos,o.forwardSin,i.xRe,i.xIm],[["u",t],["u",a],["u",0],["u",0]],t*a*this.patch*this.modes2),d(s.rowMix,[i.xRe,i.xIm,o.rowRe,o.rowIm,i.yRe,i.yIm],[["u",t],["u",a],["u",l],["u",this.patch]],t*a*l*this.modes2),d(s.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",a],["u",2*g],["u",0]],t*a*l*this.modes2),d(s.rowMix,[i.zRe,i.zIm,o.inverseRowRe,o.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",a],["u",this.patch],["u",l]],t*a*this.patch*this.modes2),d(s.inverseColumns,[i.wRe,i.wIm,o.inverseColCos,o.inverseColSin,i.t2],[["u",t],["u",a],["u",0],["u",0]],t*a*u),f(i.t2,i.t1,s.instanceNormScaled),d(s.conv1x1,[i.t1,this.weights[`m1w${g}`],this.weights[`m1b${g}`],i.gates],[["u",t],["u",a],["u",4*a],["u",0]],t*4*a*u),d(s.gate,[i.gates,i.hidden],[["u",t],["u",2*a],["u",0],["u",0]],t*2*a*u),d(s.conv1x1,[i.hidden,this.weights[`m2w${g}`],this.weights[`m2b${g}`],i.spectral],[["u",t],["u",2*a],["u",a],["u",0]],t*a*u),d(s.conv1x1,[i.x,this.weights[`lw${g}`],this.weights[`lb${g}`],i.local],[["u",t],["u",a],["u",a],["u",0]],t*a*u),d(s.residual,[i.spectral,i.local,i.x],[["u",t*a*u],["u",g<this.layers-1?1:0],["u",0],["u",0]],t*a*u);return d(s.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",a],["u",2*a],["u",1]],t*2*a*u),d(s.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*a],["u",this.outputChannels],["u",0]],t*this.outputChannels*u),c.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}};const Ti=r=>r.toFixed(6),Li=r=>`${r==="f16"?`enable f16;
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
}`,Di=`
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
                      / ${Ti(nt)});
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
}`;function zi(r,e){if(!r)return e;if(!e)return r;const t=Math.min(r.y0,e.y0),n=Math.min(r.x0,e.x0);return{y0:t,x0:n,h:Math.max(r.y0+r.h,e.y0+e.h)-t,w:Math.max(r.x0+r.w,e.x0+e.w)-n}}function Vi(r,e,t){let n=1/0,i=-1/0;const s=o=>{n=Math.min(n,o),i=Math.max(i,o)};for(let o=0;o<4;o++){const a=r[o],u=r[(o+1)%4];a[1]>=e&&a[1]<=t&&s(a[0]);for(const l of[e,t])if((a[1]-l)*(u[1]-l)<0){const c=(l-a[1])/(u[1]-a[1]);s(a[0]+c*(u[0]-a[0]))}}return n<=i?[n,i]:null}let Ni=class{constructor(e,t,n,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new Ei(e,t,n,this.batchSize),this.blendPipeline=e.pipeline(Li(this.fno.store)),this.finalizePipeline=e.pipeline(Di),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,n=t.features,i=t.mddf.channels_per_signal,s=t.mddf.modes_per_signal,o=n.mddf_source_indices,a=new Uint32Array(o.length*4),u=new Float32Array(o.length*2);o.forEach((c,d)=>{const f=Math.floor(c/i),g=c%i,h=g>s?1:0,p=g===0?0:h?g-s:g;a.set([f*i+p,f*i+(p===0?0:s+p),p,h],d*4),u[d*2]=n.mddf_center[d],u[d*2+1]=n.mddf_scale[d]});const l=t.coordinates;return{channels:t.model.input_channels,mddfChannels:o.length,solidChannel:n.use_building_input?o.length:-1,coordChannel:o.length+(n.use_building_input?1:0),coordYScale:l.y_scale,coordZCentre:l.z_center,coordZScale:l.z_scale,coordXCentre:l.x_center,coordXScale:l.x_scale,tableBuffer:e.upload(a,"plan.table"),normBuffer:e.upload(u,"plan.norm")}}setCity(e,t,n){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),s=(t+2*i)*(n+2*i)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(s>o)throw new Error(`city ${n} x ${t} needs a ${(s/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const a=new Ii(this.context,e,t,n,i,this.fno.store);return this.city={field:a,ny:t,nx:n,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:a.gy,gx:a.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:n}=this.city,i=(t-1)/2,s=(n-1)/2,o=Math.cos(e),a=Math.sin(e),u=[[0,0],[n-1,0],[n-1,t-1],[0,t-1]].map(([m,w])=>{const M=m-s,$=w-i;return[s+M*o+$*a,i-M*a+$*o]}),l=Math.floor(Math.min(...u.map(m=>m[1]))),c=Math.ceil(Math.max(...u.map(m=>m[1]))),d=Math.floor(Math.min(...u.map(m=>m[0]))),f=Math.ceil(Math.max(...u.map(m=>m[0]))),g=f-d+1,h=Math.max(1,Math.ceil((g-this.patch)/this.stride)+1),p=h>1?(g-this.patch)/(h-1):0,x=u.map(([m,w])=>[w,m]),b=[],y=[];for(let m=0;m<h;m++){const w=Math.round(d+m*p),M=Vi(x,w,w+this.patch-1)||[l,l+this.patch-1],$=Math.floor(M[0]),v=Math.max(this.patch,Math.ceil(M[1])-$+1),k=Math.max(1,Math.ceil((v-this.patch)/this.stride)+1),B=k>1?(v-this.patch)/(k-1):0;y.push([b.length/2,k,w-d]);for(let P=0;P<k;P++)b.push(w,Math.round($+P*B))}return{origins:new Float32Array(b),columns:y,columnCount:h,columnStride:p,syMin:l,sxMin:d,gridH:c-l+1,gridW:f-d+1,patchCount:b.length/2}}patchRect(e,t,n){let i=1/0,s=1/0,o=-1/0,a=-1/0;for(const[u,l,c]of e.columns)for(let d=0;d<l;d++){const f=u+d;if(f<t||f>=n)continue;const g=e.origins[f*2+1]-e.syMin;i=Math.min(i,g),s=Math.min(s,c),o=Math.max(o,g+this.patch),a=Math.max(a,c+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),s=Math.max(0,s),o=Math.min(e.gridH,o),a=Math.min(e.gridW,a),{y0:i,x0:s,h:Math.max(0,o-i),w:Math.max(0,a-s)}):null}async predict(e,t={}){var q,J,le;const{context:n,city:i}=this,s=this.tiling(e),o=this.metadata.model.output_channels,a=s.gridH*s.gridW,u=this.patch*this.patch,l=performance.now(),c=!!(t.shouldDraw&&t.onDraw),d=o+2,f=n.storage(s.patchCount*o*u*this.fno.elementBytes,"predict.patches"),g=new Int32Array(s.patchCount);for(let A=0;A<s.patchCount;A++)g[A]=s.origins[A*2+1]-s.syMin;const h=n.upload(g,"blend.origins"),p=n.upload(new Int32Array(s.columns.flat()),"blend.columns"),x=n.storage(a*o*4,"blend.field"),b=n.storage(a*4,"blend.weight"),y=n.storage(a*4,"blend.solid"),m=n.storage(c?a*4:4,"blend.finalWeight"),w=n.storage(c?a*d*4:4,"blend.packed"),M=this.metadata.target,$=n.upload(new Float32Array(M.center),"final.centre"),v=n.upload(new Float32Array(M.scale),"final.scale"),k={y0:0,x0:0,h:s.gridH,w:s.gridW},B=(A,O,G,ue)=>{const ce=A.beginComputePass();n.dispatch(ce,this.blendPipeline,[f,h,p,x,ue,n.uniform([["u",s.gridH],["u",s.gridW],["u",this.patch],["u",o],["u",s.columnCount],["u",s.patchCount],["u",G],["u",0],["u",O.y0],["u",O.x0],["u",O.h],["u",O.w],["f",s.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],O.h*O.w),ce.end()},P=(A,O,G)=>{const ue=A.beginComputePass();n.dispatch(ue,this.finalizePipeline,[x,b,$,v,i.field.heightBuffer,y,m,w,n.uniform([["u",s.gridH],["u",s.gridW],["u",o],["u",G?1:0],["u",O.y0],["u",O.x0],["u",O.h],["u",O.w],["i",s.syMin],["i",s.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],O.h*O.w),ue.end()};if(c){const A=n.device.createCommandEncoder();B(A,k,s.patchCount,m),n.device.queue.submit([A.finish()]),(q=t.onStart)==null||q.call(t,{gridH:s.gridH,gridW:s.gridW,originY:s.syMin,originX:s.sxMin,theta:e,patchCount:s.patchCount})}const W=2,F=[];let L=null;for(let A=0;A<s.patchCount;A+=this.batchSize){(J=t.signal)==null||J.throwIfAborted();const O=Math.min(this.batchSize,s.patchCount-A),G=n.device.createCommandEncoder(),ue=i.field.assemble(G,s.origins.subarray(A*2,(A+O)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),ce=this.fno.encode(G,O);G.copyBufferToBuffer(ce,0,f,A*o*u*this.fno.elementBytes,O*o*u*this.fno.elementBytes);let re=null;if(c){L=zi(L,this.patchRect(s,A,A+O));const fe=A+O>=s.patchCount;L&&L.h>0&&L.w>0&&(fe||t.shouldDraw())&&(re=L,L=null,B(G,re,A+O,b),P(G,re,!0))}if(n.device.queue.submit([G.finish()]),n.free(ue),F.push(n.device.queue.onSubmittedWorkDone()),F.length>W&&await F.shift(),(le=t.onProgress)==null||le.call(t,(A+O)/s.patchCount),re){const fe=await n.readFloat32(w,re.h*re.w*d);t.onDraw({x0:re.x0,y0:re.y0,width:re.w,height:re.h,stride:d,channels:o,theta:e,values:fe,readyCount:A+O,patchCount:s.patchCount})}}const S=n.device.createCommandEncoder();B(S,k,s.patchCount,b),P(S,k,!1),n.device.queue.submit([S.finish()]);const[C,I,z]=await Promise.all([n.readFloat32(x,a*o),n.readFloat32(y,a),n.readFloat32(b,a)]),X=performance.now()-l;let K=0,D=0;for(let A=0;A<a;A++)if(I[A]!==2){if(z[A]<=1e-6){K+=1;continue}for(let O=0;O<o;O++)if(!Number.isFinite(C[A*o+O])){D+=1;break}}for(const A of[f,x,b,y,h,p,$,v,m,w])n.free(A);return n.releaseScratch(),{values:C,solid:I,theta:e,height:s.gridH,width:s.gridW,originY:s.syMin,originX:s.sxMin,patchCount:s.patchCount,channels:M.channel_names,milliseconds:X,uncovered:K,nonFinite:D,insideCells:a}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}};function Ui(r,e){var t,n,i,s,o,a,u,l,c;if(r.dtype!=="float16"||r.total_bytes!==e||((t=r.grid)==null?void 0:t.horizontal_spacing_m)!==4||((n=r.grid)==null?void 0:n.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=r.model)==null?void 0:i.input_channels)!==24||((s=r.model)==null?void 0:s.output_channels)!==5||((a=(o=r.inference)==null?void 0:o.patch)==null?void 0:a.join())!=="64,64"||((l=(u=r.target)==null?void 0:u.channel_names)==null?void 0:l.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const d of Object.values(r.tensors??{}))if(!Number.isInteger(d.offset)||d.offset<0||d.offset%2||!Number.isInteger(d.count)||d.count<=0||d.offset+d.count*2>e||!Array.isArray(d.shape)||d.shape.some(f=>!Number.isInteger(f)||f<1)||d.shape.reduce((f,g)=>f*g,1)!==d.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(r.tensors??{}).length||!Number.isFinite((c=r.wind)==null?void 0:c.reference_speed_m_s)||r.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function Oi(r){if(!Number.isInteger(r.width)||!Number.isInteger(r.height)||r.width<1||r.height<1||r.values.length!==r.width*r.height*5||r.solid.length!==r.width*r.height)throw new Error("Invalid prediction shape.");for(let e=0;e<r.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(r.values[e*5+t])||(r.solid[e]=2,r.values[e*5+t]=0)}const de=5,Wi=2,Xi=4,Yi=.9,ji=159,Hi=30,qi=1.2;function Gi(r){var t;const e=Math.max(Hi,qi*(((t=r.statistics)==null?void 0:t.maximumHeightM)??0));return Math.max(0,Math.min(ji,Math.round(e/ie-.5)))}function Zi(r){const e=r.layers.filter(t=>t>0).sort();return e.length?e[Math.floor(Yi*(e.length-1))]:0}function Ki(r,e=r){const t=[];for(let n=0;n<r;n+=n<e?Wi:Xi)t.push(n);return t.push(r),t}const Gr=r=>Ki(Gi(r),Zi(r)),zt=5;function Zr(r,e=zt){const t=r.length,n=Math.min(e,t),i=new Set;for(let o=0;o<n;o++)i.add(Math.round(o*(t-1)/Math.max(1,n-1)));const s=[...i].sort((o,a)=>o-a);for(;s.length<t;){const o=[...s].sort((u,l)=>u-l);let a=0;for(let u=1;u+1<o.length;u++)o[u+1]-o[u]>o[a+1]-o[a]&&(a=u);s.push(Math.floor((o[a]+o[a+1])/2))}return s.map(o=>r[o])}function Kr(r,e,t=!0){const n=r.width*r.height;return{width:r.width,height:r.height,originX:r.originX,originY:r.originY,theta:r.theta,plan:[...e],layers:t?[...e]:[],slots:t?e.map((i,s)=>s):[],values:new Float32Array(e.length*n*de),solid:new Uint8Array(e.length*n)}}function Jr(r,e,t){if(t.width!==r.width||t.height!==r.height||t.originX!==r.originX)throw new Error("Wind layers do not share one wind-frame grid.");const n=r.width*r.height;if(r.values.set(t.values,e*n*de),r.solid.set(t.solid,e*n),r.slots.includes(e))return;const i=r.plan[e];let s=0;for(;s<r.layers.length&&r.layers[s]<i;)s++;r.layers.splice(s,0,i),r.slots.splice(s,0,e)}function Ji(r,e){const t=r.width*r.height,n=r.slots[e];return{values:r.values.subarray(n*t*de,(n+1)*t*de),solid:r.solid.subarray(n*t,(n+1)*t)}}function Vt(r,e){const t=e/ie-.5,{layers:n}=r;if(t<=n[0])return{k0:0,k1:0,f:0};const i=n.length-1;if(t>=n[i])return{k0:i,k1:i,f:0};let s=1;for(;n[s]<t;)s++;const o=s-1;return{k0:o,k1:s,f:(t-n[o])/(n[s]-n[o])}}const Nt=r=>(r.layers.at(-1)+.5)*ie;function Qi(r,e){const{k0:t,k1:n,f:i}=Vt(r,e),s=r.width*r.height,o=s*de,a=new Float32Array(o),u=r.slots[t]*o,l=r.slots[n]*o;for(let d=0;d<o;d++)a[d]=r.values[u+d]*(1-i)+r.values[l+d]*i;const c=r.slots[i<.5?t:n];return{values:a,solid:r.solid.slice(c*s,(c+1)*s),width:r.width,height:r.height,originX:r.originX,originY:r.originY,theta:r.theta}}function Qr(r,e,t,n,i){const s=(e-1)/2,o=(t-1)/2,a=n/T-.5-s,u=i/T-.5-o,l=Math.cos(r.theta),c=Math.sin(r.theta);return[a*l+u*c+s-r.originX,-a*c+u*l+o-r.originY]}function es(r,e,t,n,i,s,o){const[a,u]=Qr(r,e,t,n,i),{width:l,height:c}=r;if(!(a>=0&&u>=0&&a<=l-1&&u<=c-1))return null;const d=Math.min(l-2,Math.floor(a)),f=Math.min(c-2,Math.floor(u)),g=l>1?a-d:0,h=c>1?u-f:0,{k0:p,k1:x,f:b}=Vt(r,s),y=l*c;for(let m=0;m<de;m++)o[m]=0;for(const[m,w]of[[p,1-b],[x,b]])if(w!==0)for(const[M,$]of[[0,1-h],[1,h]])for(const[v,k]of[[0,1-g],[1,g]]){const B=w*$*k;if(B===0)continue;const P=(r.slots[m]*y+Math.min(c-1,f+M)*l+Math.min(l-1,d+v))*de;for(let W=0;W<de;W++)o[W]+=r.values[P+W]*B}return o}function ts(r,e,t){const n=Math.cos(e),i=Math.sin(e);return t[0]=r[0]*n-r[2]*i,t[1]=r[0]*i+r[2]*n,t[2]=r[1],t}function rs(r,e,t,n){const i=Math.floor(e/T),s=Math.floor(t/T);return i<0||s<0||i>=r.nx||s>=r.ny?!0:n<r.layers[s*r.nx+i]*ie}function en(r,e){const t=Math.max(ie/2,Math.min(Nt(r),Number(e)||0)),n=Math.max(0,Math.round(t/ie-.5));return{...Qi(r,t),grid:r.grid,settings:{...r.settings,heightM:t,layerIndex:n},referenceSpeed:r.referenceSpeed,colorbar:r.colorbar,modelLabel:r.modelLabel,patchCount:r.patchCount,milliseconds:r.milliseconds}}function ns(r,e){const t=Math.round((r.height-1)/2+Number(e)/T);return Math.max(0,Math.min(r.height-1,t))}function is(r){const{nx:e,ny:t}=r.grid,i=[[0,0],[e,0],[0,t],[e,t]].map(([u,l])=>Qr(r,e,t,u*T,l*T)[1]),s=(r.height-1)/2,o=Math.max(0,Math.min(...i))-s,a=Math.min(r.height-1,Math.max(...i))-s;return[Math.ceil(o)*T,Math.floor(a)*T]}function ss(r,e){const{width:t}=r,n=r.width*r.height,i=r.layers.at(-1)+1,s=new Float32Array(t*i*de),o=new Uint8Array(t*i);for(let a=0;a<i;a++){const{k0:u,k1:l,f:c}=Vt(r,(a+.5)*ie),d=r.slots[c<.5?u:l];for(let f=0;f<t;f++){const g=e*t+f,h=(r.slots[u]*n+g)*de,p=(r.slots[l]*n+g)*de,x=(a*t+f)*de;for(let b=0;b<de;b++)s[x+b]=r.values[h+b]*(1-c)+r.values[p+b]*c;o[a*t+f]=r.solid[d*n+g]}}return{values:s,solid:o,width:t,height:i}}const We=Object.freeze({TIMEOUT:"timeout",CANCELLED:"cancelled",DOWNLOAD:"download",GPU:"gpu",PLANNER:"planner",MODEL:"model",MISSION:"mission",TOO_LARGE:"too-large"});class Xe extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const he=r=>new Xe(We.MODEL,r),tn=8,rn=new MessageChannel,nn=[];rn.port1.onmessage=()=>{var r;return(r=nn.shift())==null?void 0:r()};const sn=()=>new Promise(r=>{nn.push(r),rn.port2.postMessage(0)});class on{constructor(){this.buffers=[null,null],this.slot=1}next(e){var t;return this.slot^=1,((t=this.buffers[this.slot])==null?void 0:t.byteLength)>=e||(this.buffers[this.slot]=new SharedArrayBuffer(e)),this.buffers[this.slot]}}const V=256,yt=1<<20;class Ut{constructor(e,t,n){this.adapterInfo=n,this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[],this.halfRing=new on}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new Xe(We.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new Xe(We.GPU,"No WebGPU adapter available.");const n=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:n?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new Ut(i,n,t.info??null)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t,n){const i=Math.max(4,Math.ceil(e/4)*4),s=this.device.createBuffer({size:i,usage:t,label:n});return s.tracked=!0,s}storage(e,t){const n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,n,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e,t){const n=this.storage(e.byteLength,t);return this.write(n,e),n}write(e,t){if(t.byteLength%4){const n=new Uint8Array(Math.ceil(t.byteLength/4)*4);n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,n)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,n=new ArrayBuffer(t),i=new Uint32Array(n),s=new Int32Array(n),o=new Float32Array(n);e.forEach(([u,l],c)=>{u==="u"?i[c]=l:u==="i"?s[c]=l:o[c]=l});const a=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(a,0,n),a}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),n=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,n)}return this.pipelines.get(e)}dispatch(e,t,n,i,s=V){this.dispatchGroups(e,t,n,...this.workgroups(i,s))}workgroups(e,t=V){const n=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(n,i),Math.ceil(n/i)]}dispatchGroups(e,t,n,...i){this.replay(e,this.prepared(t,n,i))}prepared(e,t,n){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((s,o)=>({binding:o,resource:{buffer:s}}))});return{pipeline:e,bindGroup:i,groups:n}}replay(e,{pipeline:t,bindGroup:n,groups:i}){e.setPipeline(t),e.setBindGroup(0,n),e.dispatchWorkgroups(...i)}async readBack(e,t,n,i){const s=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,n),o=this.device.createCommandEncoder();t(o,s),this.device.queue.submit([o.finish()]);try{await s.mapAsync(GPUMapMode.READ);const a=await i(s.getMappedRange());return s.unmap(),a}finally{this.free(s)}}async readHalf(e,t,n){const i=(s,o)=>s.copyBufferToBuffer(e,0,o,0,o.size);return this.readBack(t*2,i,"staging",s=>this.copyHalves(s,t,n))}async copyHalves(e,t,n){const i=n?new Uint16Array(this.halfRing.next(t*2),0,t):new Uint16Array(t),s=new Uint16Array(e,0,t);let o=performance.now();for(let a=0;a<t;a+=yt)i.set(s.subarray(a,Math.min(t,a+yt)),a),a+yt<t&&performance.now()-o>tn&&(await sn(),o=performance.now());return i}}const it=4,ze=1.5;let me=20,st=80,Oe=st-me+1;function os(r,e){me=r,st=e,Oe=e-r+1}const as=2,ls=32,H=4,us=()=>!!globalThis.crossOriginIsolated&&typeof SharedArrayBuffer<"u",cs=()=>navigator.hardwareConcurrency||4;function ds(r){let e=0;for(let t=0;t<r.length;t++){const n=r[t],i=r[(t+1)%r.length];e+=n[0]*i[1]-i[0]*n[1]}return e}function fs(r,e){const t=e.reduce((s,o)=>s+o[0],0)/e.length,n=e.reduce((s,o)=>s+o[1],0)/e.length;let i=r;for(let s=0;s<e.length&&i.length;s++){const o=e[s],a=e[(s+1)%e.length],u=d=>(a[0]-o[0])*(d[1]-o[1])-(a[1]-o[1])*(d[0]-o[0]),l=u([t,n])>0?1:-1,c=i;i=[];for(let d=0;d<c.length;d++){const f=c[d],g=c[(d+1)%c.length],h=l*u(f),p=l*u(g);if(h>=0&&i.push(f),h>=0!=p>=0){const x=h/(h-p);i.push([f[0]+x*(g[0]-f[0]),f[1]+x*(g[1]-f[1])])}}}return i}function an(r,e,t){const n=(e-1)/2,i=(t-1)/2,s=Math.cos(r),o=Math.sin(r);return{theta:r,cX:n,cY:i,cos:s,sin:o,toWind:([a,u])=>{const l=a-n,c=u-i;return[n+l*s+c*o,i-l*o+c*s]},toCity:([a,u])=>{const l=a-n,c=u-i;return[n+l*s-c*o,i+l*o+c*s]}}}const se=64,Q=180,ln=1600,hs=640,xe=8,j=32,Me=r=>r.toFixed(6),ve=r=>{const e=Math.fround(r);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},gs=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,ps=()=>`
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
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${Me(ze)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${Me(ze)}, has1);
  let cutoff = ${Me(ln)};
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
}`;function ms(r){const e=n=>n.part==="dc"?"dc":`${n.part}.${n.mode===1?"x":"y"}`,t=r.map((n,i)=>`  sums[e + ${i}u] += ${e(n)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
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
}`}const Se=64,oe=8,Pe=Se/oe,ae=Pe*Pe,kt=oe*oe,hr=Math.log2(Se),gr=Math.log2(oe),Ge=oe-1,Ot="15u",St="4u",un="0xfffu",Bt="2048",ys="4095",Wt="16u",pr=(r,e,t,n,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${r.length}> = array<f32, ${r.length}>(${e.map(ve).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${r.length}u + c] / ${Me(Q)} / STEPS[c]));
}
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  if (g >= u.nTiles * ${ae}u) { return; }
  let t = g / ${ae}u;
  let b = g % ${ae}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${n}u;
  let c = (t / ${t*n}u) % ${r.length}u;
  let k = t / ${t*n*r.length}u;
${i?`  let h = field[u.nTiles + t * ${ae}u + b];
  let w = h & ${Ot};
  if (w == 0u) { return; }
  let base = i32((h >> ${St}) & ${un}) - ${Bt};
  var wi = field[t] + (h >> ${Wt});
  let x0 = tx * ${Se}u + (b % ${Pe}u) * ${oe}u;
  let y0 = ty * ${Se}u + (b / ${Pe}u) * ${oe}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${kt}u; j++) {
    let x = x0 + j % ${oe}u; let y = y0 + j / ${oe}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${Se}u + (b % ${Pe}u) * ${oe}u;
  let y0 = ty * ${Se}u + (b / ${Pe}u) * ${oe}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${kt}u; j++) {
    let x = x0 + j % ${oe}u; let y = y0 + j / ${oe}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${ae}u + b] = w | (u32(clamp(mn + ${Bt}, 0, ${ys})) << ${St});`}
}`,bs=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${se}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${ae}u; b++) {
    let h = headers[t * ${ae}u + b];
    headers[t * ${ae}u + b] = h | (local << ${Wt});
    local += ${kt/32}u * (h & ${Ot});
  }
  tileWords[t] = local;
}`,ws=r=>{const e=`array<f32, ${xe}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${gs}
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
@compute @workgroup_size(${se})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${se}u;
  let groupsPerPixel = (u.layerCount + ${xe-1}u) / ${xe}u;
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
  let first = layerGroup * ${xe}u;
  let count = min(${xe}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${xe}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${Me(ze)};
  }
  // grid traversal along the single upwind azimuth, for up to LAYER_GROUP query heights at once (the cells the ray
  // crosses do not depend on the height, only where it stops and what it records)
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${Me(it)};
    let gyr = u.sinU / ${Me(it)};
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
    let cutoff = ${Me(ln)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${xe}>;
    for (var k = 0u; k < ${xe}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${hs}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${xe}u; k++) {
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
${r.map((n,i)=>`    put(e0 + ${i}u, ${t[n]});`).join(`
`)}
  }
}`},xs=(r,e,t)=>{const n=e.stored.length,i=e.up.length,{usesHeight:s}=e,o=[["field","array<u32>"]];s&&o.push(["height","array<f32>"]),o.push(["origins","array<i32>"],["slots","array<i32>"]),i&&o.push(["up","array<u32>"],["upTable","array<i32>"]);const a=o.map(([c,d],f)=>`@group(0) @binding(${f}) var<storage, read> ${c}: ${d};`);a.push(`@group(0) @binding(${o.length}) var<storage, read_write> out: array<${r}>;`),a.push(`@group(0) @binding(${o.length+1}) var<uniform> u: P;`);const u=(c,d)=>`(${c} - ${ve(d.center)}) / ${ve(d.scale)}`,l=e.inputs.map((c,d)=>{let f;if(c.source==="r1")if(c.part==="dc")f=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(c.signal,"dc",0)}u)`,c)};`;else{const g=e.storedIndex(c.signal,"re",c.mode),h=e.storedIndex(c.signal,"im",c.mode);f=`let re = sampleField(ry, rx, slot, ${g}u);
      let im = sampleField(ry, rx, slot, ${h}u);
      let angle = ${ve(c.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(c.part==="im"?"(re * s + im * c)":"(re * c - im * s)",c)};`}else if(c.source==="geo"){const g=c.index===0?"h / 100.0":"asinh((h - z) / 10.0)";f=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${g})`,c)};`}else c.source==="up"?f=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(c.index)}u)`,c)};`:c.source==="solid"?f=`let roofLayer = round(roofHeight(iy, ix) / ${Me(ze)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:c.axis==="y"?f=`value = (sy - u.centreY) / ${ve(c.scale)};`:c.axis==="z"?f=`value = (f32(layer) - ${ve(c.center)}) / ${ve(c.scale)};`:f=`value = (sx - ${ve(c.center)}) / ${ve(c.scale)};`;return`    case ${d}u: {  // ${c.name}
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
var<private> STEPS: array<f32, ${n}> = array<f32, ${n}>(${t.steps.map(ve).join(", ")});
// one value of the packed field (region = whole padded grid)
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${n}u + c) * ${t.ty}u + (y >> ${hr}u)) * ${t.tx}u + (x >> ${hr}u);
  let h = field[u.packTiles + t * ${ae}u + ((y >> ${gr}u) & ${Ge}u) * ${Pe}u + ((x >> ${gr}u) & ${Ge}u)];
  let w = h & ${Ot};
  var q = i32((h >> ${St}) & ${un}) - ${Bt};
  if (w > 0u) {
    let bit = (((y & ${Ge}u) * ${oe}u) + (x & ${Ge}u)) * w;
    let word = field[t] + (h >> ${Wt}) + (bit >> 5u);
    let sh = bit & 31u;
    var r = field[word] >> sh;
    if (sh + w > 32u) { r |= field[word + 1u] << (32u - sh); }
    q += i32(r & ((1u << w) - 1u));
  }
  return f32(q) * STEPS[c];
}
${i?`// along-wind channels computed at the wind-frame cells (no interpolation): tile table -> tile slot -> value
fn upAtWind(sy: f32, sx: f32, slot: u32, c: u32) -> f32 {
  let tx = i32(sx) - u.upX0;
  let ty = i32(sy) - u.upY0;
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(j)}u) >= u.upTW || u32(ty >> ${Math.log2(j)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(j)}u) * u.upTW + u32(tx >> ${Math.log2(j)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${j*j}u + u32(ty & ${j-1}) * ${j}u + u32(tx & ${j-1})) * ${i}u + c;
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
  let z = (f32(layer) + 0.5) * ${Me(ze)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${l.join(`
`)}
    default: {}
  }
  out[g] = ${r==="f16"?"f16(value)":"value"};
}`},vs=4,Ms=48<<20,_s=3,$s=.016,ks=256;class cn{constructor(e,{layers:t,ny:n,nx:i},s,o,a){this.context=e,this.inputPlan=a,this.ny=n,this.nx=i,this.margin=s,this.gy=n+2*s,this.gx=i+2*s;const u=new Float32Array(this.gy*this.gx);for(let h=0;h<n;h++)for(let p=0;p<i;p++)u[(h+s)*this.gx+p+s]=t[h*i+p]*ze;this.heightBuffer=e.upload(u,"mddf.height");const l=new Float32Array(Q),c=new Float32Array(Q);for(let h=0;h<Q;h++)l[h]=Math.cos(2*Math.PI*h/Q),c[h]=Math.sin(2*Math.PI*h/Q);this.cosT=l,this.sinT=c,this.scanPipeline=e.pipeline(ps()),this.accumulatePipeline=e.pipeline(ms(a.stored)),this.upWind=a.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(ws(a.up)));const d=a.stored.map(h=>2*$s*h.scale),f=Math.ceil(this.gx/Se),g=Math.ceil(this.gy/Se);this.packed={steps:d,tx:f,ty:g},this.packHeaderPipeline=e.pipeline(pr(a.stored,d,f,g,!1)),this.packPayloadPipeline=e.pipeline(pr(a.stored,d,f,g,!0)),this.packTilePipeline=e.pipeline(bs()),this.assemblePipeline=e.pipeline(xs(o,a,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const n=this.gx*this.gy,i=this.storedBytesPerCellLayer*n;let s=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(s=Math.min(s,vs),i>t)throw new Xe(We.TOO_LARGE,`one layer needs ${i} bytes, above the ${t}-byte buffer limit`);const o=[];for(let a=0;a<e.length;a+=s){const u=e.slice(a,a+s),l=new Int32Array(ks).fill(-1);u.forEach((c,d)=>{l[c]=d}),o.push({layers:u,slots:l,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return o}allocate(e){const{context:t}=this;for(const n of e)n.slotBuffer=t.upload(n.slots,"mddf.slots"),n.layerBuffer=t.upload(new Uint32Array(n.layers),"mddf.layers");this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,n=Math.max(e,t),i=new Int32Array(Q*n),s=new ArrayBuffer(Q*32),o=new Uint32Array(s),a=new Int32Array(s),u=new Float32Array(s),l=new Float32Array(Q*4);let c=0;for(let d=0;d<Q;d++){const f=this.cosT[d],g=this.sinT[d],h=Math.abs(f)>=Math.abs(g),p=h?f:g,x=h?g:f,b=Math.abs(x/p),y=h?e:t,m=h?t:e;for(let $=0;$<y;$++)i[d*n+$]=Math.round(b*$);const w=i[d*n+y-1],M=m+w;c=Math.max(c,M),o[8*d]=h?1:0,a[8*d+1]=p>=0?1:-1,a[8*d+2]=x>=0?1:-1,a[8*d+3]=w,o[8*d+4]=M,o[8*d+5]=d*n,u[8*d+6]=it*Math.sqrt(1+b*b),l.set([f,g,Math.cos(4*Math.PI*d/Q),Math.sin(4*Math.PI*d/Q)],4*d)}return this.offsetBuffer=this.context.upload(i,"mddf.offsets"),this.tableBuffer=this.context.upload(o,"mddf.scanTable"),this.trigBuffer=this.context.upload(l,"mddf.trig"),this.scanInfo={lineMax:c},this.scanInfo}async scan(e,t){if(this.destroyed)return;const{context:n,gx:i,gy:s}=this,{lineMax:o}=this.scanTables(),a=i*s,u=this.inputPlan.stored.length,l=e.layers.length,c=Math.ceil(l/2),d=Math.max(1,Math.min(Q,Math.floor(Ms/(c*a*4)))),f=d*c*a*4,g=l*a*u*4;(!this.scanRaw||this.scanRaw.size<f)&&(n.free(this.scanRaw),this.scanRaw=n.storage(f,"mddf.scanRaw")),(!this.sumsBuffer||this.sumsBuffer.size<g)&&(n.free(this.sumsBuffer),this.sumsBuffer=n.storage(g,"mddf.sums"));const h=n.device.createCommandEncoder();h.clearBuffer(this.sumsBuffer,0,l*a*u*4),n.device.queue.submit([h.finish()]);const p=[];for(let x=0;x<Q;x+=d){if(this.destroyed)return;const b=Math.min(d,Q-x),y=n.device.createCommandEncoder(),m=y.beginComputePass(),w=n.uniform([["u",i],["u",s],["u",a],["u",0],["u",l],["u",c],["u",x],["u",b],["u",o],["u",0],["u",0],["u",0]]);n.dispatch(m,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,w],o*c*b,se);const M=n.uniform([["u",a],["u",l],["u",c],["u",x],["u",b],["u",0],["u",0],["u",0]]);n.dispatch(m,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,M],a*l,se),m.end(),n.device.queue.submit([y.finish()]),p.push(n.device.queue.onSubmittedWorkDone()),p.length>=_s&&await p.shift(),t((x+b)/Q)}this.destroyed||(await this.packGroup(e,l,a),!this.destroyed&&(await n.device.queue.onSubmittedWorkDone(),!this.destroyed&&(n.free(this.scanRaw),this.scanRaw=null,n.free(this.sumsBuffer),this.sumsBuffer=null,n.releaseScratch())))}async packGroup(e,t,n){const{context:i,gx:s,gy:o}=this,{tx:a,ty:u}=this.packed,l=t*this.inputPlan.stored.length*a*u,c=i.storage(l*ae*4,"mddf.packHeaders"),d=i.storage(l*4,"mddf.packTileWords"),f=i.uniform([["u",s],["u",o],["u",n],["u",t],["u",l],["u",0],["u",0],["u",0]]),g=i.uniform([["u",l],["u",0],["u",0],["u",0]]),h=()=>{i.free(c),i.free(d)},p=($,v)=>{const k=$.beginComputePass();i.dispatch(k,this.packHeaderPipeline,[this.sumsBuffer,c,f],l*ae,se),i.dispatch(k,this.packTilePipeline,[c,d,g],l,se),k.end(),$.copyBufferToBuffer(d,0,v,0,l*4)};let x;try{x=await i.readBack(l*4,p,"mddf.packTileWords read",$=>this.destroyed?null:new Uint32Array($.slice(0)))}catch($){throw h(),$}if(!x){h();return}const b=new Uint32Array(l);let y=l+l*ae;for(let $=0;$<l;$++)b[$]=y,y+=x[$];i.free(e.field),e.field=i.storage(Math.max(4,y*4),"mddf.field"),e.packTiles=l,i.write(e.field,b);const m=i.device.createCommandEncoder();m.copyBufferToBuffer(c,0,e.field,l*4,l*ae*4);const w=m.beginComputePass(),M=i.uniform([["u",s],["u",o],["u",n],["u",t],["u",l],["u",0],["u",0],["u",0]]);i.dispatch(w,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],l*ae,se),w.end(),i.device.queue.submit([m.finish()]),await i.device.queue.onSubmittedWorkDone(),h()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const n=t/(2*Math.PI)*Q,i=Math.round(n)%Q;return Math.abs(n-Math.round(n))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const n=an(e,this.nx,this.ny);let i=1/0,s=-1/0,o=1/0,a=-1/0;for(const f of[-.5,this.nx-.5])for(const g of[-.5,this.ny-.5]){const[h,p]=n.toWind([f,g]);i=Math.min(i,h),s=Math.max(s,h),o=Math.min(o,p),a=Math.max(a,p)}const u=Math.floor((i-t)/j)*j,l=Math.floor((o-t)/j)*j,c=Math.ceil((s+t+1-u)/j),d=Math.ceil((a+t+1-l)/j);return{theta:e,x0:u,y0:l,tw:c,th:d,table:new Int32Array(c*d).fill(-1),count:0}}ensureUpTiles(e,t,n,i,s){const{context:o}=this;let a=this.upGrid;(!a||a.theta!==t||a.count>0&&e.some(w=>w.upGrid!==a))&&(a=this.upGrid=this.upTileGrid(t,i));const u=[];for(const[w,M]of n){const $=Math.floor((M-a.x0)/j),v=Math.floor((M+i-1-a.x0)/j),k=Math.floor((w-a.y0)/j),B=Math.floor((w+i-1-a.y0)/j);if($<0||k<0||v>=a.tw||B>=a.th)throw new Error("a patch lies outside the wind-frame tile grid");for(let P=k;P<=B;P++)for(let W=$;W<=v;W++){const F=P*a.tw+W;a.table[F]<0&&(a.table[F]=a.count+u.length/3,u.push(W,P,a.table[F]))}}const l=u.length/3;if(!l)return 0;s();const c=a.count,d=c+l,f=this.inputPlan.up.length,g=j*j,h=o.device.createCommandEncoder(),p=[];for(const w of e){const M=w.layers.length*g*f*2;if(w.upGrid!==a&&(w.upCount=0),!w.upTiles||w.upCapacity<d){const $=Math.min(a.tw*a.th,Math.max(d,Math.ceil(w.upCapacity*1.5))),v=o.storage($*M,"mddf.upTiles");w.upTiles&&w.upCount&&h.copyBufferToBuffer(w.upTiles,0,v,0,w.upCount*M),w.upTiles&&p.push(w.upTiles),w.upTiles=v,w.upCapacity=$}w.upGrid=a,h.clearBuffer(w.upTiles,c*M,l*M),w.upCount=d}const x=o.upload(new Int32Array(u),"mddf.upTileList"),[b,y]=this.upwindDirection(t),m=h.beginComputePass();for(const w of e){const M=[this.heightBuffer,w.layerBuffer,w.upTiles,x];o.dispatch(m,this.alongPipeline,[...M,o.uniform([["u",this.gx],["u",this.gy],["u",l],["u",w.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",a.x0],["i",a.y0],["u",0],["u",0],["f",b],["f",y],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],l*g*Math.ceil(w.layers.length/xe),se)}m.end(),(!this.upTableBuffer||this.upTableBuffer.size!==a.table.byteLength)&&(o.free(this.upTableBuffer),this.upTableBuffer=o.storage(a.table.byteLength,"mddf.upTable")),o.write(this.upTableBuffer,a.table),o.device.queue.submit([h.finish()]);for(const w of p)o.free(w);return o.free(x),a.count=d,l}assemble(e,t,n,i,s,o){var x,b,y,m;const{context:a,inputPlan:u,gx:l,gy:c}=this,d=t.length/3,f=a.upload(t,"assemble.origins"),g=a.uniform([["u",d],["u",u.inputs.length],["u",s],["u",s],["u",l],["u",c],["u",0],["u",0],["u",l],["u",c],["u",l*c],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",n.packTiles],["f",0],["f",0],["i",((x=this.upGrid)==null?void 0:x.x0)??0],["i",((b=this.upGrid)==null?void 0:b.y0)??0],["u",((y=this.upGrid)==null?void 0:y.tw)??0],["u",((m=this.upGrid)==null?void 0:m.th)??0],["u",n.layers.length],["u",0],["u",0],["u",0]]),h=[n.field];if(u.usesHeight&&h.push(this.heightBuffer),h.push(f,n.slotBuffer),u.up.length){if(n.upGrid!==this.upGrid)throw new Error("along-wind tiles of another direction (ensureUpTiles first)");h.push(n.upTiles,this.upTableBuffer)}h.push(o,g);const p=e.beginComputePass();return a.dispatch(p,this.assemblePipeline,h,d*u.inputs.length*s*s),p.end(),f}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function Ss(r){const e=r.inputs;if(!e)throw he("the model metadata has no input manifest (metadata.inputs)");if(e.length!==r.model.input_channels)throw he(`manifest has ${e.length} inputs, model expects ${r.model.input_channels}`);const t=[],n=(u,l,c)=>t.findIndex(d=>d.key===`${u}:${l}:${c}`),i=(u,l,c)=>{n(u.signal,l,c)>=0||t.push({key:`${u.signal}:${l}:${c}`,signal:u.signal,part:l,mode:c,scale:u.scale})},s=[];for(const u of e){if(u.source==="r1")u.part==="dc"?i(u,"dc",0):(i(u,"re",u.mode),i(u,"im",u.mode));else if(u.source==="up")s.includes(u.index)||s.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw he(`unsupported input source ${u.source}`);if(u.source==="geo"&&![0,1].includes(u.index))throw he(`unsupported geo channel ${u.index}`);if(u.source==="up"&&!(u.index>=0&&u.index<4))throw he(`unsupported up channel ${u.index}`)}for(const u of t)if(u.mode>2)throw he("Fourier modes above 2 are not computed");const o=[...new Set(t.map(u=>u.signal))].sort();if(o.length!==1||o[0]!==0)throw he("the stored channels must be those of the upper distance (signal 0) only");const a=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:n,up:s,usesHeight:a}}function Ct(r){const e=Math.round(r);return Math.abs(r%1)===.5&&e%2!==0?e-1:e}let Be=null;function dn(){if(Be)return Be;Be=new Float32Array(65536);for(let r=0;r<65536;r++){const e=r&32768?-1:1,t=r>>10&31,n=r&1023;t===0?Be[r]=e*n*2**-24:t===31?Be[r]=n?NaN:e*(1/0):Be[r]=e*(1+n/1024)*2**(t-15)}return Be}function Bs(r){const e=new Float32Array(r.length),t=dn();for(let n=0;n<r.length;n++)e[n]=t[r[n]];return e}function Cs(r){const e=new Uint16Array(r.length),t=new Float32Array(1),n=new Uint32Array(t.buffer);for(let i=0;i<r.length;i++){t[0]=r[i];const s=n[0],o=s>>>16&32768,a=s>>>23&255;let u=s&8388607;if(a===255){e[i]=o|31744|(u?1:0);continue}const l=a-127+15;if(l>=31){e[i]=o|31744;continue}if(l<=0){if(l<-10){e[i]=o;continue}u|=8388608;const d=14-l;let f=u>>>d;u>>>d-1&1&&(f+=1),e[i]=o|f;continue}let c=l<<10|u>>>13;u&4096&&(c+=1),e[i]=o|c}return e}const Xt=`
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
`,Ps=`
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
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${V}u;
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
}`;function mr(r,e,t){const{enable:n,load:i,save:s}=Ve(r);return`${n}
@group(0) @binding(0) var<storage, read> X: array<${r}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${r}>;
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
    Y[base + i] = ${s("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const Pt=32,yr=1e-5,Qe=16;function Ve(r){return{enable:r==="f16"?`enable f16;
`:"",load:e=>r==="f16"?`f32(${e})`:e,save:e=>r==="f16"?`f16(${e})`:e}}function Is(r){const{store:e,patch:t}=r,n=t*t,{enable:i,load:s,save:o}=Ve(e);return`${i}${Xt}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${Qe}u;
var<workgroup> w: array<f32, ${Qe*r.cinMax}>;
@compute @workgroup_size(${V})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear workgroup index over a 2-D grid (a single dimension is capped at 65535).
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${n/V}u;
  if (wg >= u.batch * perSample) { return; }       // whole workgroups only: uniform
  let b = wg / perSample;
  let ob = (wg % perSample) / ${n/V}u;
  let p = (wg % ${n/V}u) * ${V}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${V}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${s("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${Qe}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${s("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${n}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${s("X[xBase + i * "+n+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${n}u + p] = ${o("v")};
  }
}`}function As(r){const{store:e,patch:t}=r,n=t*t,{enable:i,load:s,save:o}=Ve(e);return`${i}${Xt}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.batch * u.mid * ${n}u) { return; }
  let p = g % ${n}u;
  let m = (g / ${n}u) % u.mid;
  let b = g / (${n}u * u.mid);
  let value = ${s("G[(b * 2u * u.mid + m) * "+n+"u + p]")};
  let gateValue = ${s("G[(b * 2u * u.mid + u.mid + m) * "+n+"u + p]")};
  H[g] = ${o("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function Fs(r){const{store:e,patch:t,modes2:n}=r,i=t*t,{enable:s,load:o}=Ve(e);return`${s}
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
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${V}u;
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
}`}function Rs(r){const{modes2:e}=r;return`
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
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
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
}`}function Es(r){const{modes1:e,modes2:t}=r,n=2*e;return`
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
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${V}u;
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
}`}function Ts(r){const{store:e,patch:t,modes2:n}=r,i=t*t,{enable:s,save:o}=Ve(e);return`${s}
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
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${V}u;
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
  Y[g] = ${o("acc * "+1/Pt)};
}`}function Ls(r){const{store:e}=r,{enable:t,load:n,save:i}=Ve(e);return`${t}${Xt}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.total) { return; }
  var acc = ${n("A[g]")} + ${n("B[g]")} + ${n("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function Ds(r){const{store:e,patch:t}=r,n=t*t;return{conv1x1:Is(r),gate:As(r),instanceNorm:mr(e,n,yr),instanceNormScaled:mr(e,n,yr/(Pt*Pt)),forwardColumns:Fs(r),rowMix:Rs(r),spectralMix:Es(r),inverseColumns:Ts(r),residual:Ls(r)}}function zs(r,e,t){const n=2*e,i=[];for(let g=0;g<e;g++)i.push(g);for(let g=r-e;g<r;g++)i.push(g);const s=new Float32Array(r*t),o=new Float32Array(r*t);for(let g=0;g<r;g++)for(let h=0;h<t;h++){const p=2*Math.PI*g*h/r;s[g*t+h]=Math.cos(p),o[g*t+h]=-Math.sin(p)}const a=new Float32Array(n*r),u=new Float32Array(n*r);for(let g=0;g<n;g++)for(let h=0;h<r;h++){const p=2*Math.PI*i[g]*h/r;a[g*r+h]=Math.cos(p),u[g*r+h]=-Math.sin(p)}const l=new Float32Array(r*n),c=new Float32Array(r*n);for(let g=0;g<r;g++)for(let h=0;h<n;h++){const p=2*Math.PI*i[h]*g/r;l[g*n+h]=Math.cos(p)/r,c[g*n+h]=Math.sin(p)/r}const d=new Float32Array(t*r),f=new Float32Array(t*r);for(let g=0;g<t;g++){const h=(g===0?1:2)/r;for(let p=0;p<r;p++){const x=2*Math.PI*g*p/r;d[g*r+p]=h*Math.cos(x),f[g*r+p]=-h*Math.sin(x)}}return{forwardCos:s,forwardSin:o,rowRe:a,rowIm:u,inverseRowRe:l,inverseRowIm:c,inverseColCos:d,inverseColSin:f}}function Vs(r,e,t){const n=r.tensors[t];if(!n)throw he(`missing tensor ${t}`);return Bs(new Uint16Array(e,n.offset,n.count))}class Ns{constructor(e,t,n,i){const s=t.model;if(this.context=e,this.metadata=t,this.width=s.width,this.depth=s.layers,this.inputChannels=s.input_channels,this.outputChannels=s.output_channels,this.patch=t.inference.patch[0],this.modes1=s.modes[0],this.modes2=s.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw he("only square patches are supported");if(this.patch*this.patch%V)throw he(`the patch area must be a multiple of ${V}`);const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[l,c]of Object.entries(Ds(o)))this.pipelines[l]=e.pipeline(c);this.contractPipeline=e.pipeline(Ps);const a=l=>Vs(t,n,l);this.tables={};for(const[l,c]of Object.entries(zs(this.patch,this.modes1,this.modes2)))this.tables[l]=e.upload(c,`fno.table.${l}`);this.weights={};const u=(l,c)=>{const d=a(c);this.weights[l]=this.store==="f16"?e.upload(Cs(d),`fno.${l}`):e.upload(d,`fno.${l}`)};u("p1w","p.mlp1.weight"),u("p1b","p.mlp1.bias"),u("p2w","p.mlp2.weight"),u("p2b","p.mlp2.bias"),u("q1w","q.mlp1.weight"),u("q1b","q.mlp1.bias"),u("q2w","q.mlp2.weight"),u("q2b","q.mlp2.bias");for(let l=0;l<this.depth;l++)u(`m1w${l}`,`mlp_layers.${l}.mlp1.weight`),u(`m1b${l}`,`mlp_layers.${l}.mlp1.bias`),u(`m2w${l}`,`mlp_layers.${l}.mlp2.weight`),u(`m2b${l}`,`mlp_layers.${l}.mlp2.bias`),u(`lw${l}`,`w_layers.${l}.weight`),u(`lb${l}`,`w_layers.${l}.bias`);this.buildSpectralWeights(a),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:n}=this,i=n.tucker;let s=i.core_shape.slice(),o=t.upload(e(`${i.core}.re`),"tucker.core.re"),a=t.upload(e(`${i.core}.im`),"tucker.core.im");for(const l of i.factors){const[c,d]=l.shape;if(s[l.mode]!==d)throw he(`factor ${l.name} does not match the core`);const f=s.slice();f[l.mode]=c;const g=f.reduce(($,v)=>$*v,1),h=f.slice(l.mode+1).reduce(($,v)=>$*v,1),p=t.storage(g*4,"tucker.re"),x=t.storage(g*4,"tucker.im"),b=t.upload(e(`${l.name}.re`),"tucker.f"),y=t.upload(e(`${l.name}.im`),"tucker.f"),m=t.uniform([["u",f[0]],["u",f[1]],["u",f[2]],["u",f[3]],["u",f[4]],["u",l.mode],["u",c],["u",d],["u",h],["u",0],["u",g],["u",0]]),w=t.device.createCommandEncoder(),M=w.beginComputePass();t.dispatch(M,this.contractPipeline,[o,a,b,y,p,x,m],g),M.end(),t.device.queue.submit([w.finish()]),t.free(o),t.free(a),t.free(b),t.free(y),o=p,a=x,s=f}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(s.join()!==u.join())throw he(`spectral stack is ${s} but ${u} was expected`);this.spectralRe=o,this.spectralIm=a}allocate(e){const{context:t}=this,n=this.patch*this.patch,i=this.width,s=2*this.modes1,o=(f,g)=>t.storage(e*f*n*this.elementBytes,g),a=(f,g)=>t.storage(e*i*f*4,g),u=o(Math.max(4*i,this.inputChannels,this.outputChannels),"fno.large"),l=o(2*i,"fno.medium"),c=a(this.patch*this.modes2,"fno.xwRe"),d=a(this.patch*this.modes2,"fno.xwIm");this.buffers={x:o(i,"fno.x"),input:u,t2:u,gates:u,spectral:u,output:u,wide:l,t1:l,hidden:l,local:l,xRe:c,xIm:d,yRe:a(s*this.modes2,"fno.yRe"),yIm:a(s*this.modes2,"fno.yIm"),zRe:a(s*this.modes2,"fno.zRe"),zIm:a(s*this.modes2,"fno.zIm"),wRe:c,wIm:d}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/Qe)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const n=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(n,i);return n.end(),this.buffers.output}dispatches(e){const{context:t,buffers:n,pipelines:i,tables:s}=this,o=this.width,a=this.patch*this.patch,u=2*this.modes1,l=[],c=(f,g,h,p)=>{l.push(t.prepared(f,[...g,t.keptUniform(h)],t.workgroups(p)))},d=(f,g,h=i.instanceNorm)=>{l.push(t.prepared(h,[f,g],[e*o]))};c(i.conv1x1,[n.input,this.weights.p1w,this.weights.p1b,n.wide],[["u",e],["u",this.inputChannels],["u",2*o],["u",1]],this.convThreads(e,2*o)),c(i.conv1x1,[n.wide,this.weights.p2w,this.weights.p2b,n.x],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o));for(let f=0;f<this.depth;f++)d(n.x,n.t1),c(i.forwardColumns,[n.t1,s.forwardCos,s.forwardSin,n.xRe,n.xIm],[["u",e],["u",o],["u",0],["u",0]],e*o*this.patch*this.modes2),c(i.rowMix,[n.xRe,n.xIm,s.rowRe,s.rowIm,n.yRe,n.yIm],[["u",e],["u",o],["u",u],["u",this.patch]],e*o*u*this.modes2),c(i.spectralMix,[n.yRe,n.yIm,this.spectralRe,this.spectralIm,n.zRe,n.zIm],[["u",e],["u",o],["u",2*f],["u",0]],e*o*u*this.modes2),c(i.rowMix,[n.zRe,n.zIm,s.inverseRowRe,s.inverseRowIm,n.wRe,n.wIm],[["u",e],["u",o],["u",this.patch],["u",u]],e*o*this.patch*this.modes2),c(i.inverseColumns,[n.wRe,n.wIm,s.inverseColCos,s.inverseColSin,n.t2],[["u",e],["u",o],["u",0],["u",0]],e*o*a),d(n.t2,n.t1,i.instanceNormScaled),c(i.conv1x1,[n.t1,this.weights[`m1w${f}`],this.weights[`m1b${f}`],n.gates],[["u",e],["u",o],["u",4*o],["u",0]],this.convThreads(e,4*o)),c(i.gate,[n.gates,n.hidden],[["u",e],["u",2*o],["u",0],["u",0]],e*2*o*a),c(i.conv1x1,[n.hidden,this.weights[`m2w${f}`],this.weights[`m2b${f}`],n.spectral],[["u",e],["u",2*o],["u",o],["u",0]],this.convThreads(e,o)),c(i.conv1x1,[n.x,this.weights[`lw${f}`],this.weights[`lb${f}`],n.local],[["u",e],["u",o],["u",o],["u",0]],this.convThreads(e,o)),c(i.residual,[n.spectral,n.local,n.x],[["u",e*o*a],["u",f<this.depth-1?1:0],["u",0],["u",0]],e*o*a);return c(i.conv1x1,[n.x,this.weights.q1w,this.weights.q1b,n.wide],[["u",e],["u",o],["u",2*o],["u",1]],this.convThreads(e,2*o)),c(i.conv1x1,[n.wide,this.weights.q2w,this.weights.q2b,n.output],[["u",e],["u",2*o],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),l}}const fn="1.0e-6",Us=Number(fn),Os="1.0e-5",ot=r=>({rowX0:r+1,rowLen:2*r+1,slots:3*r+1});function Ws(r,e,t){const{half:n,values:i,gy:s,gz:o,gx:a,gridX0:u,gridY0:l,theta:c,nx:d,ny:f,layerMap:g,predicted:h,firstLayer:p,compactTable:x}=r,b=ot(s),y=dn(),m=o*a*H,w=new Int32Array(t-e),M=new Int32Array(t-e),$=h.length;for(let k=e;k<t;k++){i.fill(0,k*m,(k+1)*m);const B=x[b.rowLen+k],P=x[b.rowX0+k],W=x[k];w[k-e]=P,M[k-e]=P+B;for(let F=0;F<$;F++){const L=(W+F*B)*H,S=((k*o+h[F])*a+P)*H;for(let C=0;C<H*B;C++)i[S+C]=y[n[L+C]]}}if(r.interpolate){const k=(f-1)/2,B=(d-1)/2,P=Math.cos(c),W=Math.sin(c),F=new Float32Array(a);for(let L=e;L<t;L++){for(let I=0;I<a;I++){const z=u+I-B,X=l+L-k,K=B+z*P-X*W,D=k+z*W+X*P,q=Ct(K),J=Ct(D);F[I]=q>=0&&q<d&&J>=0&&J<f?g[J*d+q]:0}const S=w[L-e],C=M[L-e];for(let I=0;I<h.length-1;I++){const z=h[I],X=h[I+1];for(let K=z+1;K<X;K++){const D=(K-z)/(X-z),q=p+z,J=p+K,le=(L*o+z)*a*H,A=(L*o+X)*a*H,O=(L*o+K)*a*H;for(let G=S;G<C;G++){const ue=F[G],ce=ue>q,re=ue>J;for(let fe=0;fe<H;fe++){const Fe=H*G+fe;i[O+Fe]=ce&&!re?i[A+Fe]:i[le+Fe]+D*(i[A+Fe]-i[le+Fe])}}}}}}let v=0;for(let k=e*m;k<t*m;k+=H)if(i[k+3]>Us){const B=i[k]*i[k]+i[k+1]*i[k+1]+i[k+2]*i[k+2];B>v&&(v=B)}return{maxSpeed2:v}}const Xs=r=>`${r==="f16"?`enable f16;
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
  let cell = (table[cy] + table[3u * u.gy + 1u + cz] * len + cx - table[u.gy + 1u + cy]) * ${H}u;
  sums[cell] += s0; sums[cell + 1u] += s1; sums[cell + 2u] += s2; sums[cell + 3u] += total;
}`,Ys=`
struct P { count: u32, c0: f32, c1: f32, c2: f32, s0: f32, s1: f32, s2: f32, pad0: f32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed: array<u32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${V})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${V}u;
  if (g >= u.count) { return; }
  let w = sums[g * ${H}u + 3u];
  var a = vec3<f32>(0.0);
  var stored = 0.0;
  if (w > ${fn}) {
    a = vec3<f32>(sums[g * ${H}u], sums[g * ${H}u + 1u], sums[g * ${H}u + 2u]) / w
        * vec3<f32>(u.s0, u.s1, u.s2) + vec3<f32>(u.c0, u.c1, u.c2);
    stored = max(w, ${Os});
  }
  packed[g * 2u] = pack2x16float(vec2<f32>(a.x, a.y));
  packed[g * 2u + 1u] = pack2x16float(vec2<f32>(a.z, stored));
}`,js=Math.ceil(ls/it+as+Math.SQRT2),Ze=8,Hs=.5;function br(r,e,t,n){if(e<=t)return[r];const i=Math.ceil((e-t)/n)+1,s=[];for(let o=0;o<i;o++)s.push(r+o*t-Ct(o*(i*t-e)/(i-1)));return s}function qs(r,e,t){let n=1/0,i=-1/0;const s=o=>{n=Math.min(n,o),i=Math.max(i,o)};for(let o=0;o<r.length;o++){const a=r[o],u=r[(o+1)%r.length];a[0]>=e&&a[0]<=t&&s(a[1]);for(const l of[e,t])(a[0]-l)*(u[0]-l)<0&&s(a[1]+(l-a[0])/(u[0]-a[0])*(u[1]-a[1]))}return n<=i?[n,i]:null}function Gs(r,e){const t=ds(r)>0?1:-1,n=r.map((i,s)=>{const o=r[(s+1)%r.length],a=Math.hypot(o[0]-i[0],o[1]-i[1])||1;return[t*(o[1]-i[1])/a,-t*(o[0]-i[0])/a]});return r.map(([i,s],o)=>{const a=n[(o+r.length-1)%r.length],u=n[o],l=e/(1+a[0]*u[0]+a[1]*u[1]);return[i+l*(a[0]+u[0]),s+l*(a[1]+u[1])]})}function Zs(r,e){const t=e[0]-r[0],n=e[1]-r[1],i=Math.hypot(t,n)||1,s=t/i,o=n/i,a=-o,u=s,l=.5*Hs*i,c=[r[0]-s*Ze,r[1]-o*Ze],d=[e[0]+s*Ze,e[1]+o*Ze];return[[c[0]+a*l,c[1]+u*l],[d[0]+a*l,d[1]+u*l],[d[0]-a*l,d[1]-u*l],[c[0]-a*l,c[1]-u*l]]}function Ks(r,e,t,n,i,s){const o=an(e,t,n),{toWind:a,toCity:u}=o,l=r.map(a),c=[[-.5,-.5],[t-.5,-.5],[t-.5,n-.5],[-.5,n-.5]].map(a),d=fs(Gs(l,js),c);if(d.length<3)throw new Error("the corridor does not touch the city");const f=Math.floor(Math.min(...d.map(b=>b[0]))),g=Math.floor(Math.min(...d.map(b=>b[1]))),h=Math.ceil(Math.max(...d.map(b=>b[0])))-f+1,p=Math.ceil(Math.max(...d.map(b=>b[1])))-g+1,x=[];for(const b of br(f,h,i,s)){const y=qs(d,b,b+i-1);if(!y)continue;const m=Math.floor(y[0]),w=Math.max(i,Math.ceil(y[1])-m+1);for(const M of br(m,w,i,s))x.push([M,b])}return{theta:e,gx:h,gy:p,gridX0:f,gridY0:g,patches:x,toWind:a,toCity:u}}const Js=r=>Math.ceil(r*Math.SQRT2),wr=4*1024**3,Qs=128<<20,eo=2,xr=6e4,to=4,vr=1;function ro(r,e,t){let n=1/0,i=-1/0,s=1/0,o=-1/0,a=1/0,u=-1/0;for(const[l,c,d]of r)n=Math.min(n,l-e.gridY0),i=Math.max(i,l-e.gridY0+t),s=Math.min(s,d-e.gridX0),o=Math.max(o,d-e.gridX0+t),a=Math.min(a,c-me),u=Math.max(u,c-me+1);return{ry0:Math.max(0,n),ry1:Math.min(e.gy,i),rx0:Math.max(0,s),rx1:Math.min(e.gx,o),rz0:a,rz1:u}}function no(r){const e=[];for(let t=me;t<=st;t++)((t-me)%r===0||t===st)&&e.push(t);return e}class io{constructor(e,t,n,{batchSize:i,layerStride:s}){if(this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,(Oe-1)%s!==0)throw new Error(`layer stride ${s} does not divide the ${Oe-1} layer steps of the band`);this.layerStride=s,this.bufferLimit=Math.min(Qs,e.device.limits.maxStorageBufferBindingSize),this.fno=new Ns(e,t,n,i),this.blendPipeline=e.pipeline(Xs(this.fno.store)),this.finalizePipeline=e.pipeline(Ys),this.inputPlan=Ss(t),this.city=null,this.generation=0,this.fieldWorkers=null,this.fieldJobs=new Map,this.fieldJobCount=0,this.valuesRing=new on}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.mddf.destroy(),this.city=null,this.stopFieldWorkers(t=>t.cancel())}setCity(e,t=null){var l;const{layers:n,ny:i,nx:s}=e;this.cancel(),(l=this.city)==null||l.mddf.destroy();const o=new cn(this.context,e,Js(this.patch),this.fno.store,this.inputPlan),a=t??no(this.layerStride),u=o.gx*o.gy*a.length*o.storedBytesPerCellLayer;if(u>wr){o.destroy(),this.city=null;const c=(u/2**20).toFixed(0),d=wr/2**20;throw new Xe(We.TOO_LARGE,`the city's stored field needs ${c} MiB, above the ${d} MiB budget`)}return this.city={mddf:o,ny:i,nx:s,layerMap:n,predictedLayers:a,ready:null,progress:0,groups:null},this.city.ready=this.scanCity(this.city),this.city.ready.catch(()=>{}),this.city}async scanCity(e){const{mddf:t}=e,n=t.planGroups(e.predictedLayers,this.bufferLimit);t.allocate(n),e.progress=0;for(let i=0;i<n.length;i++){if(t.destroyed)return e;await t.scan(n[i],s=>{e.progress=(i+s)/n.length})}return e.progress=1,t.destroyed||(e.groups=n),e}async predict(e,t,n,i){const s=++this.generation,o=()=>s!==this.generation,{context:a}=this,u=this.city,l=i.polygon??Zs(e,t),{overlap:c}=i,d=Math.max(1,Math.round(this.patch*(1-c))),f=Ks(l,n,u.nx,u.ny,this.patch,d),g=performance.now(),{mddf:h}=u;if(await u.ready,o()||h.destroyed||(h.upWind&&h.ensureUpTiles(u.groups,n,f.patches,this.patch,()=>{var m;return(m=i.onStage)==null?void 0:m.call(i,"geometry")})&&(await a.device.queue.onSubmittedWorkDone(),a.releaseScratch()),o()))return null;const p=so(f,this.patch,u.predictedLayers.map(y=>y-me)),x=await this.runNetwork(u,f,p,n,i,o);if(!x)return null;const b=await this.finish(u,f,p,x,n,o);return b?{...b,milliseconds:performance.now()-g}:null}async runNetwork(e,t,n,i,s,o){var b;const{context:a,patch:u}=this,l=a.storage(n.count*H*4,"predictor.sums"),c=a.upload(n.table,"predictor.rows"),d=[],f=e.predictedLayers,g=new Map(f.map(y=>[y,t.patches.length])),h=Math.max(1,s.sweepEvery||1),p=new Set(f.filter((y,m)=>m%h===0||m===f.length-1)),x=()=>(a.free(l),a.free(c),null);for(const y of e.groups){if(o())return x();(b=s.onStage)==null||b.call(s,"network");const m=[];for(const w of y.layers)for(const[M,$]of t.patches)m.push([M,w,$]);for(let w=0;w<m.length;w+=this.batchSize){const M=m.slice(w,w+this.batchSize),$=new Int32Array(M.flat()),v=a.device.createCommandEncoder(),k=e.mddf.assemble(v,$,y,i,u,this.fno.inputBuffer),B=this.fno.encode(v,M.length);if(this.encodeBlend(v,B,k,l,c,M.length,ro(M,t,u),t),a.device.queue.submit([v.finish()]),d.push(a.device.queue.onSubmittedWorkDone()),d.length>eo&&await d.shift(),a.free(k),a.releaseScratch(),s.onLayer)for(const[,P]of M)g.set(P,g.get(P)-1),g.get(P)===0&&p.has(P)&&this.readSweptLayer(l,P,n,t,s,o);if(o())return x()}}return await Promise.all(d),a.free(c),l}encodeBlend(e,t,n,i,s,o,a,u){const{context:l,patch:c}=this,{gy:d}=u,{ry0:f,ry1:g,rx0:h,rx1:p,rz0:x,rz1:b}=a;if(!(g>f&&p>h))return;const y=e.beginComputePass();l.dispatch(y,this.blendPipeline,[t,n,i,s,l.uniform([["u",o],["u",c],["u",this.metadata.model.output_channels],["u",c],["u",d],["u",me],["u",0],["u",0],["u",f],["u",x],["u",h],["u",g-f],["u",b-x],["u",p-h],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(g-f)*(b-x)*(p-h)),y.end()}readSweptLayer(e,t,n,i,s,o){const a=ot(i.gy);this.readLayer(e,n.table[a.slots+t-me],n.table,i).then(u=>{o()||s.onLayer(t,u,i,this.metadata.target)}).catch(()=>{})}async readLayer(e,t,n,{gx:i,gy:s}){const o=ot(s),a=H*4,u=(l,c)=>{for(let d=0;d<s;d++){const f=n[o.rowLen+d];f&&l.copyBufferToBuffer(e,(n[d]+t*f)*a,c,(d*i+n[o.rowX0+d])*a,f*a)}};return this.context.readBack(s*i*a,u,"layer staging",l=>new Float32Array(l.slice(0)))}async finish(e,t,n,i,s,o){const{context:a}=this,{gx:u,gy:l}=t,c=Oe,d=u*l*c,{predicted:f}=n,g=this.metadata.target,h=a.storage(Math.max(8,n.count*H*2),"predictor.packed"),p=a.device.createCommandEncoder(),x=p.beginComputePass();a.dispatch(x,this.finalizePipeline,[i,h,a.uniform([["u",n.count],["f",g.center[0]],["f",g.center[1]],["f",g.center[2]],["f",g.scale[0]],["f",g.scale[1]],["f",g.scale[2]],["f",0]])],n.count),x.end(),a.device.queue.submit([p.finish()]),await a.device.queue.onSubmittedWorkDone(),a.free(i);const b=us(),y=await a.readHalf(h,n.count*H,b);if(a.free(h),a.releaseScratch(),o())return null;let m;b?m=new Float32Array(this.valuesRing.next(d*H*4),0,d*H):m=new Float32Array(d*H);const w={half:y,values:m,gy:l,gz:c,gx:u,gridX0:t.gridX0,gridY0:t.gridY0,theta:s,nx:e.nx,ny:e.ny,layerMap:e.layerMap,predicted:f,firstLayer:me,interpolate:this.layerStride>1,compactTable:n.table},M=b?await this.postInWorkers(w,l):await oo(w,l);if(o())return null;let $=0;for(const v of M)v.maxSpeed2>$&&($=v.maxSpeed2);return{maxSpeed2:$,layout:t,gx:u,gy:l,gz:c,firstLayer:me,layerStride:this.layerStride,values:m,valuesPerCell:H}}stopFieldWorkers(e){for(const t of this.fieldWorkers??[])t.terminate();this.fieldWorkers=null;for(const t of[...this.fieldJobs.values()])e(t)}failFieldWorkers(e){this.stopFieldWorkers(t=>t.answer({error:e}))}startFieldWorkers(){const e=Math.max(1,Math.min(to,Math.floor(cs()/3)));return Array.from({length:e},(t,n)=>{const i=new Worker(new URL("/cityffdv2-demo/assets/field_worker-CNcnW6Nn.js",import.meta.url),{type:"module"});return i.onmessage=({data:s})=>{var o;return(o=this.fieldJobs.get(`${s.id}:${n}`))==null?void 0:o.answer(s)},i.onerror=s=>{s.preventDefault(),this.failFieldWorkers(`field worker failed: ${s.message||"it did not load"}`)},i})}postInWorkers(e,t){this.fieldWorkers??(this.fieldWorkers=this.startFieldWorkers());const n=++this.fieldJobCount,i=this.fieldWorkers,s=i.length,o={...e,half:e.half.buffer,halfLength:e.half.length,values:e.values.buffer,valuesLength:e.values.length};return Promise.all(i.map((a,u)=>new Promise((l,c)=>{const d=`${n}:${u}`,f=()=>{clearTimeout(g),this.fieldJobs.delete(d)},g=setTimeout(()=>{this.failFieldWorkers(`field worker did not answer in ${xr/1e3} s`)},xr);this.fieldJobs.set(d,{answer:h=>{f(),h.error?c(new Error(h.error)):l(h)},cancel:()=>{f(),l(null)}}),a.postMessage({id:n,p:o,yLo:Math.floor(u*t/s),yHi:Math.floor((u+1)*t/s)})})))}}function so(r,e,t){const{gx:n,gy:i}=r,s=new Int32Array(i).fill(n),o=new Int32Array(i).fill(0);for(const[c,d]of r.patches){const f=Math.max(0,c-r.gridY0),g=Math.min(i,c-r.gridY0+e),h=Math.max(0,d-r.gridX0),p=Math.min(n,d-r.gridX0+e);for(let x=f;x<g;x++)h<s[x]&&(s[x]=h),p>o[x]&&(o[x]=p)}const a=ot(i),u=new Uint32Array(a.slots+Oe).fill(4294967295,a.slots);let l=0;for(let c=0;c<i;c++){const d=Math.max(0,o[c]-s[c]);u[c]=l,u[a.rowX0+c]=d?s[c]:0,u[a.rowLen+c]=d,l+=d*t.length}return u[i]=l,t.forEach((c,d)=>{u[a.slots+c]=d}),{table:u,count:l,predicted:t}}async function oo(r,e){const t=[];let n=performance.now();for(let i=0;i<e;i+=vr)t.push(Ws(r,i,Math.min(e,i+vr))),performance.now()-n>tn&&(await sn(),n=performance.now());return t}const ao=16,lo=4;function uo(){let r=null,e=null,t=[];async function n(u){if(r)return;const l="/cityffdv2-demo/flume/model-v2/",[c,d]=await Promise.all(["metadata.json","weights.bin"].map(async f=>{const g=await fetch(l+f,{signal:u});if(!g.ok)throw new Error("Could not load model v2 "+f+" (HTTP "+g.status+").");return f.endsWith(".bin")?g.arrayBuffer():g.json()}));r=await Ut.create(),e=c,t=[0,1].map(()=>({predictor:new io(r,e,d,{batchSize:ao,layerStride:1}),grid:null,key:""}))}async function i(u,l,c,d){const f=c.join(",");(l!==u.grid||f!==u.key)&&(u.predictor.setCity({layers:l.layers,nx:l.nx,ny:l.ny},c),u.grid=l,u.key=f);const{nx:g,ny:h}=l,p=[[-.5,-.5],[g-.5,-.5],[g-.5,h-.5],[-.5,h-.5]];return u.predictor.predict(null,null,d,{polygon:p,overlap:e.inference.overlap})}function s(u,l,c){const d=l.gx*l.gy,f=new Float32Array(d*5),g=new Uint8Array(d),h=c-l.firstLayer;for(let x=0;x<l.gy;x++)for(let b=0;b<l.gx;b++){const y=((x*l.gz+h)*l.gx+b)*lo,m=x*l.gx+b;f[m*5]=l.values[y],f[m*5+1]=l.values[y+1],f[m*5+2]=l.values[y+2],g[m]=l.values[y+3]>0?0:2}const p={width:l.gx,height:l.gy,originX:l.layout.gridX0,values:f,solid:g};Jr(u,u.plan.indexOf(c),p)}async function o(u,l,c,{signal:d,onFirstWave:f,onMoreLayers:g}={}){await n(d),os(l[0],l.at(-1));const h=Zr(l).slice(0,zt),p=l.filter(w=>h.includes(w)),x=l.filter(w=>!h.includes(w)),b=await i(t[0],u,p,c);if(!b)return null;const y=Kr({width:b.gx,height:b.gy,originX:b.layout.gridX0,originY:b.layout.gridY0,theta:c},l,!1);for(const w of p)s(y,b,w);const m=e.wind.gradient_height_speed_m_s??e.wind.reference_speed_m_s;if(f==null||f({volume:y,referenceSpeed:m}),x.length){const w=await i(t[1],u,x,c);if(!w)return null;for(const M of x)s(y,w,M);g==null||g()}return y}async function a(u,l,c){await n(c);const{predictor:d}=t[0],f=d.inputPlan.stored,g=Math.ceil(d.patch*Math.SQRT2),h=new cn(r,u,g,d.fno.store,d.inputPlan),p=h.gx*h.gy*f.length*4;let x=null;h.packGroup=async()=>{x=await r.readBack(p,(m,w)=>m.copyBufferToBuffer(h.sumsBuffer,0,w,0,p),"mddf download",m=>new Float32Array(m.slice(0)).map(w=>w/Q))};try{const m=h.planGroups([l],d.bufferLimit);h.allocate(m),await h.scan(m[0],()=>{})}finally{h.destroy()}if(!x)throw new Error("Model v2 MDDF could not be read.");const b=f.map(m=>"upper_distance_"+m.part+(m.part==="dc"?"":m.mode));return{values:x,ny:h.gy,nx:h.gx,margin:g,layerIndex:l,channels:b,representation:"model v2: upper-distance Fourier coefficients over 180 azimuths divided by 180 (DC = mean distance, m); not centred or scaled"}}return{run:o,readMddf:a,cancel(){for(const u of t)u.predictor.cancel()},destroy(){for(const u of t)u.predictor.destroy();r==null||r.device.destroy(),t=[],r=null}}}const Mr="Model v2",co=32;function fo(){const r=Ft({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,layersReady:0,downloading:!1});let e=null,t=null,n=null,i=null,s=null,o=null,a=!1,u=0;const l=new AbortController;function c(){try{t==null||t.destroy(),o==null||o.destroy()}finally{o=null,e==null||e.device.destroy(),t=null,e=null,s=null}}async function d(){if(t)return;r.stage="Loading model";const y="/cityffdv2-demo/flume/",[m,w,M]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async $=>{const v=await fetch(y+$,{signal:l.signal});if(!v.ok)throw new Error("Could not load "+$+" (HTTP "+v.status+").");return $.endsWith(".bin")?v.arrayBuffer():v.json()}));Ui(m,w.byteLength),l.signal.throwIfAborted(),e=await Lt.create(),l.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",$=>{r.error="WebGPU: "+$.error.message.split(`
`)[0]}),e.device.lost.then($=>{!a&&$.reason!=="destroyed"&&(r.error="GPU device lost. Run again to initialize a new session.",r.prediction=null,t=null,e=null,s=null)}),n=m,i=M,t=new Ni(e,n,w,{batchSize:co})}async function f(y,m){if(a||r.busy||r.downloading)return null;r.busy=!0,r.error="",r.progress=0;const w=++u,M=()=>a||w!==u;try{if(await d(),M())return null;if(m.model==="v2")return await g(y,m,M,w);y!==s&&(t.setCity(y.layers,y.ny,y.nx),s=y);const $=performance.now(),v=(C,I)=>{const z={...C,grid:y,settings:{...m,layers:I},referenceSpeed:n.wind.reference_speed_m_s,modelLabel:n.label,colorbar:i,patchCount:F,milliseconds:performance.now()-$,inputRevision:w};return r.prediction=Ce(z),r.layersReady=C.layers.length,z},k=[...m.layers],B=Zr(k);let P=null,W=null,F=0;const L=C=>({signal:l.signal,onProgress:I=>{M()||(r.progress=(C+I*.3)/B.length)}});let S=t.setHeight(B[0],L(0));for(let C=0;C<B.length;C++){if(r.stage="Predicting 3D wind · layer "+(C+1)+" / "+B.length,await S,M())return null;const I=await t.predict(m.thetaRad,{signal:l.signal,onProgress:z=>{M()||(r.progress=(C+.3+z*.7)/B.length)}});if(l.signal.throwIfAborted(),M())return null;if(r.error)throw new Error(r.error);P||(P=Kr(I,k,!1)),S=C+1<B.length?t.setHeight(B[C+1],L(C+1)):null,S==null||S.catch(()=>{}),Oi(I),F=I.patchCount??F,Jr(P,k.indexOf(B[C]),I),W?(W.milliseconds=performance.now()-$,r.layersReady=P.layers.length):C+1>=Math.min(zt,B.length)&&(W=v(P,k))}return r.progress=1,r.stage="Prediction ready",W}catch($){return!a&&w===u&&(r.error=$.message,r.stage="Prediction failed",r.prediction=null),c(),null}finally{a?c():r.busy=!1}}async function g(y,m,w,M){o??(o=uo()),r.stage="Model v2 · predicting the first layers";const $=performance.now();let v=null;if(!await o.run(y,m.layers,m.thetaRad,{signal:l.signal,onFirstWave({volume:B,referenceSpeed:P}){w()||(v={...B,grid:y,settings:{...m},referenceSpeed:P,modelLabel:Mr,colorbar:i,patchCount:0,milliseconds:performance.now()-$,inputRevision:M},r.prediction=Ce(v),r.layersReady=B.layers.length,r.progress=.3,r.stage="Model v2 · predicting the remaining layers")},onMoreLayers(){w()||!v||(v.milliseconds=performance.now()-$,r.layersReady=v.layers.length)}})||w())return null;if(r.error)throw new Error(r.error);return r.progress=1,r.stage="Prediction ready",v}async function h(y){if(!t||!r.prediction||r.busy||r.downloading)throw new Error("Run a valid prediction before downloading MDDF.");r.downloading=!0;try{if(r.prediction.modelLabel===Mr)return await o.readMddf(r.prediction.grid,y,l.signal);Number.isInteger(y)&&await t.setHeight(y,{signal:l.signal});const m=t.city.field,w=await e.readFloat32(m.fieldBuffer,m.gy*m.gx*28);if(a)throw new Error("The page was closed.");return{values:w,ny:m.gy,nx:m.gx,margin:m.margin,layerIndex:t.city.layerIndex}}finally{r.downloading=!1,a&&c()}}function p(){r.busy&&u++,o==null||o.cancel()}function x(){u++,r.prediction=null,r.layersReady=0,r.error="",r.progress=0,r.stage="Ready"}function b(){a=!0,u++,l.abort(),!r.busy&&!r.downloading&&c()}return At(b),{state:r,run:f,readMddf:h,cancel:p,invalidate:x,dispose:b}}const _e="flume-retained-buildings",_r="flume-retained-selected";function ho(r,e){let t=null,n=null,i=null,s=null,o=null;function a(){if(t){r.getSource(_e)?i!==s&&r.getSource(_e).setData(i):r.addSource(_e,{type:"geojson",data:i,maxzoom:22,tolerance:0}),s=i;for(const[f,g]of[[_e,!1],[_r,!0]]){const h=t.filters[g?"selected":"surroundings"],p=g?1:t.surroundingsOpacity;r.getLayer(f)?r.setFilter(f,h):r.addLayer({id:f,type:"fill-extrusion",source:_e,maxzoom:Ue,filter:h,layout:{visibility:"visible"},paint:{"fill-extrusion-color":g?ge().selectedBuildings:ge().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":p}}),r.setPaintProperty(f,"fill-extrusion-opacity",p),r.setLayoutProperty(f,"visibility",g||t.showSurroundings?"visible":"none")}}}function u(){if(!(!t||r.getZoom()<Ue||!r.getSource(t.sourceId)||!r.isSourceLoaded(t.sourceId)))try{const f=r.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(g=>!g.tile||g.tile.z>=(t.dataZoom??Ue));i=rt([...i.features,...f]),a()}catch(f){e==null||e(f)}}function l(f){!t||f!=null&&f.sourceId&&f.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(u,120))}function c(f){var g;(n!==f.collection||(t==null?void 0:t.sourceId)!==f.sourceId||(t==null?void 0:t.sourceLayer)!==f.sourceLayer)&&(i=rt(((g=f.collection)==null?void 0:g.features)??[]),n=f.collection),t=f,a(),l()}function d(){clearTimeout(o),t=null,n=null,i=null,s=null;for(const f of[_r,_e])r.getLayer(f)&&r.removeLayer(f);r.getSource(_e)&&r.removeSource(_e)}return r.on("sourcedata",l),r.on("moveend",l),{update:c,clear:d,dispose(){r.off("sourcedata",l),r.off("moveend",l),d()}}}const hn={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},bt=new Map;function go(r){if(!bt.has(r)){const e=hn[r],t=new Uint8Array(256*3);for(let n=0;n<256*3;n++)t[n]=parseInt(e.substr(n*2,2),16);bt.set(r,t)}return bt.get(r)}function gn(r,e){const t=go(hn[r]?r:"viridis"),n=Math.min(1,Math.max(0,e))*255,i=Math.floor(n),s=Math.min(255,i+1),o=n-i;return[t[i*3]*(1-o)+t[s*3]*o,t[i*3+1]*(1-o)+t[s*3+1]*o,t[i*3+2]*(1-o)+t[s*3+2]*o]}const po=new Set(["u","v","w"]),Ye=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis",v1Only:!0},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno",v1Only:!0},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],Te={u:0,w:1,v:2,T:3,tke:4};function Yt(r,e,t,n){const i=r[e+Te.u]*n,s=r[e+Te.v]*n;switch(t){case"u":return i;case"v":return s;case"w":return r[e+Te.w]*n;case"speed":{const o=r[e+Te.w]*n;return Math.sqrt(i*i+s*s+o*o)}case"T":return r[e+Te.T];case"tke":return r[e+Te.tke]*n*n;default:return 0}}function mo(r,e,t,n,i){if(e==="T")return r.fixed.T.slice();const o=(r.quantiles[n]||r.quantiles[Object.keys(r.quantiles)[0]])[e],a=Math.min(o.length-1,Math.max(0,Math.round(t))),u=o[a]*(e==="tke"?i*i:i);return r.shape[e]==="symmetric"?[-u,u]:[0,u]}function yo(r,e){const t=r.solid.length,n=new Float32Array(t*4);for(let i=0;i<t;i++){const s=i*4;n[s]=Yt(r.values,i*5,e,1),n[s+1]=1}return jr(n)}function bo(r){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[n,i,s]=gn(r,t/255);e[t*4]=n,e[t*4+1]=i,e[t*4+2]=s,e[t*4+3]=255}return e}function $r(r,e){let t=1/0,n=-1/0;for(let i=0;i<r.solid.length;i++){const s=Yt(r.values,i*5,e,1);s<t&&(t=s),s>n&&(n=s)}return[t,n]}function wo([r,e],t){if(t==="T")return e>r?[r,e]:null;if(po.has(t)){const n=Math.max(-r,e);return n>0?[-n,n]:null}return e>0?[0,e]:null}function It(r,e,t){const n=(r.grid.nx-1)/2,i=(r.grid.ny-1)/2,s=r.originX+e-n,o=r.originY+t-i,a=Math.cos(r.theta),u=Math.sin(r.theta);return[(n+s*a-o*u+.5)*4,(i+s*u+o*a+.5)*4]}function pn(r){const e=r.values.slice(),t=r.settings.speedMps/r.referenceSpeed;for(let n=0;n<e.length;n+=5)e[n]*=t,e[n+1]*=t,e[n+2]*=t,e[n+4]*=t*t;return e}const wt=ie/2;function xo(r){const{grid:e,theta:t}=r,n=Nt(r),i=new Float32Array(5),s=(a,u,l)=>es(r,e.nx,e.ny,a,u,l,i)!==null,o={plane:null,variable:"speed",wind(a,u,l,c){if(!s(a,u,l))return!1;ts(i,t,c);const d=o.plane;return d!=null&&d.flat&&d.kind==="h"&&(c[2]=0),d!=null&&d.flat&&d.kind==="v"&&(c[0]=i[0]*Math.cos(t),c[1]=i[0]*Math.sin(t)),!0},inside:(a,u,l)=>l>=wt&&l<=n&&!rs(e,a,u,l)&&s(a,u,l),value:()=>Yt(i,0,o.variable,1),valueAt:(a,u,l)=>s(a,u,l)?o.value():0,spawn(a,u){var l,c;for(let d=0;d<20;d++){if(u[0]=a()*e.nx*T,u[1]=a()*e.ny*T,u[2]=wt+a()**2*(n-wt),((l=o.plane)==null?void 0:l.kind)==="h"&&(u[2]=o.plane.z),((c=o.plane)==null?void 0:c.kind)==="v"){const[f,g]=It(r,a()*(r.width-1),o.plane.row);u[0]=f,u[1]=g}if(o.inside(u[0],u[1],u[2]))return}}};return o}const vo=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,Mo=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function _o(r,e,t){let n,i,s,o,a,u,l,c,d,f,g,h="",p=0;const x=new Ht,b=new Ht,y=Cr.MercatorCoordinate.fromLngLat(r.grid.origin),m=y.meterInMercatorCoordinateUnits(),[w,M]=It(r,r.width/2-.5,r.height/2-.5),$=[new He(new pe(1,0,0),0),new He(new pe(-1,0,0),r.grid.nx*T),new He(new pe(0,1,0),0),new He(new pe(0,-1,0),r.grid.ny*T)],v=()=>Number(e.speedMps)/r.referenceSpeed,k=new Map;function B(F){let L=1/0,S=-1/0;for(let C=0;C<r.layers.length;C++){const I=F+"@"+r.slots[C];k.has(I)||k.set(I,$r(Ji(r,C),F));const[z,X]=k.get(I);L=Math.min(L,z),S=Math.max(S,X)}return[L,S]}let P=[0,0];function W(){if(!i)return;const F=Ye.find(A=>A.id===e.variable)??Ye[0];f==null||f.dispose(),f=new qt(bo(F.ramp),256,1,Gt),f.colorSpace=Un,f.minFilter=f.magFilter=Zt,f.needsUpdate=!0;const L=e.plane==="3d"?"h":e.plane,S=ns(r,e.planeOffsetM),C=e.view==="slice"||e.view==="particles"&&e.particles==="white";a.visible=C&&L==="h",u.visible=C&&L==="v";const I=F.id+"@"+(L==="v"?"v"+S:e.sliceHeightM);if(I!==h){let A;if(L==="v"){A=ss(r,S);const[O,G]=It(r,(r.width-1)/2,S);u.position.set(O,G,A.height*ie/2)}else A=en(r,Number(e.sliceHeightM)),a.position.z=A.settings.heightM;d==null||d.dispose(),d=new qt(yo(A,F.id),A.width,A.height,Gt,On),d.minFilter=d.magFilter=Zt,d.needsUpdate=!0,P=$r(A,F.id),h=I}const z=v();let X=z;F.id==="T"&&(X=1),F.id==="tke"&&(X=z*z);const D=e.plane==="3d"&&e.view==="particles"&&e.particles!=="white"?B(F.id):P,q=wo(D,F.id)??mo(r.colorbar,F.id,r.settings.layers.at(-1),"99.9",1);g.uniforms.field.value=d??null,g.uniforms.palette.value=f,g.uniforms.range.value.set(...q),c.enabled=e.view!=="off",c.mesh.visible=c.enabled;const J=e.view==="slice"||e.particles==="white",le=J?L:e.plane;le==="h"?c.setPlane({kind:"h",z:Number(e.sliceHeightM),flat:J}):le==="v"?c.setPlane({kind:"v",row:S,flat:J}):c.setPlane(null),c.setCount(tr[e.density]??tr.medium),c.setColouring(J?"white":e.particles,F.id,f,q),t==null||t({low:q[0]*X,high:q[1]*X,...F}),n.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:W,refresh(){h="",W()},onAdd(F,L){n=F,s=new Dn,o=new zn,i=new Vn({canvas:n.getCanvas(),context:L,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,g=new Pr({vertexShader:vo,fragmentShader:Mo,uniforms:{field:{value:null},palette:{value:null},range:{value:new Ar(0,1)}},transparent:!0,depthWrite:!1,side:Ir,clipping:!0,clippingPlanes:$}),a=new tt(new vt(r.width*T,r.height*T),g),a.position.set(w,M,0),a.rotation.z=r.theta,a.frustumCulled=!1,s.add(a);const S=new vt(r.width*T,(r.layers.at(-1)+1)*ie);S.rotateX(Math.PI/2),u=new tt(S,g),u.rotation.z=r.theta,u.frustumCulled=!1,s.add(u),c=new Nn(xo(r)),s.add(c.mesh),l=$o(r.grid,.5),l&&s.add(l),W()},render(F,L){const S=performance.now(),C=Math.min(p?(S-p)/1e3:0,.05);p=S,x.makeTranslation(y.x,y.y,y.z).scale(new pe(m,-m,m)),o.projectionMatrix.copy(b.fromArray(L)).multiply(x),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),c.setViewport(F.drawingBufferWidth,F.drawingBufferHeight);const I=c.enabled&&!e.paused;I&&c.step(C,v()),i.resetState(),i.setViewport(0,0,F.drawingBufferWidth,F.drawingBufferHeight),i.render(s,o),I&&n.triggerRepaint()},onRemove(){d==null||d.dispose(),f==null||f.dispose(),a==null||a.geometry.dispose(),u==null||u.geometry.dispose(),g==null||g.dispose(),c==null||c.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),i==null||i.dispose(),n=null,i=null}}}function $o(r,e){if(!r.mainDomain)return null;const t=ct(r.origin),n=[...t(r.mainDomain.bounds.slice(0,2)),...t(r.mainDomain.bounds.slice(2,4))],i=new Pr({uniforms:{extent:{value:new Ar(r.nx*T,r.ny*T)},mainBounds:{value:new Wn(...n)},mainColour:{value:new Kt(ge().mainArea)},bufferColour:{value:new Kt(ge().bufferArea)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:Ir}),s=new tt(new vt(r.nx*T,r.ny*T),i);return s.name="flume-domain-overlay",s.position.set(r.nx*T/2,r.ny*T/2,e+.05),s.renderOrder=4,s.frustumCulled=!1,s}const xt="flume-field",Ne="flume-buildings";function mn(r){return{"city-concordia-2d":!1,"city-concordia-3d":r==="concordia","city-osm-3d":r==="osm"}}function ko(r){return r.type==="fill-extrusion"?"fill-extrusion-opacity":r["source-layer"]==="building"&&(r.type==="fill"||r.type==="line")?r.type+"-opacity":null}function So(r,e,t){let n=null,i=null;const s=new Map,o=ho(r,t);function a(){r.getLayer(xt)&&r.removeLayer(xt),n=null}function u(){for(const[d,f]of s)r.getLayer(d)&&(r.setLayoutProperty(d,"visibility",f.visibility),r.setPaintProperty(d,f.property,f.opacity),r.setFilter(d,f.filter),r.setLayerZoomRange(d,f.minzoom,f.maxzoom),f.color!==void 0&&r.setPaintProperty(d,"fill-extrusion-color",f.color));s.clear()}function l(d){for(const f of r.getStyle().layers){if(f.id.startsWith("flume-"))continue;const g=ko(f);if(!g)continue;const h=f.type==="fill-extrusion";s.set(f.id,{visibility:r.getLayoutProperty(f.id,"visibility")??"visible",property:g,opacity:r.getPaintProperty(f.id,g)??1,filter:r.getFilter(f.id)??null,minzoom:f.minzoom??0,maxzoom:f.maxzoom??24,color:h?r.getPaintProperty(f.id,"fill-extrusion-color")??null:void 0}),r.setPaintProperty(f.id,g,Qt),h&&r.setPaintProperty(f.id,"fill-extrusion-color",ge().previewBuildings),d||r.setLayoutProperty(f.id,"visibility","none")}}function c({source:d,input:f,prediction:g,preview:h,display:p}){if(g!==i&&(a(),i=g),!g&&r.getLayer(Ne)&&r.removeLayer(Ne),u(),Xn(r,mn(d)),!g){o.clear(),$t(r,h);return}$t(r,null);const x=Yn.find(y=>y.id===(d==="osm"?"city-osm-3d":"city-concordia-3d")),b=Vr(f.buildings.features,r.getFilter(x.id));l(p.showSurroundings),r.setFilter(x.id,b.surroundings),r.setLayerZoomRange(x.id,Ue,x.layer.maxzoom??24),r.getLayer(Ne)?r.setFilter(Ne,b.selected):r.addLayer({...x.layer,id:Ne,minzoom:Ue,layout:{visibility:"visible"},filter:b.selected,paint:{...x.layer.paint,"fill-extrusion-color":ge().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:x.layer.source,sourceLayer:x.layer["source-layer"],collection:h,dataZoom:f.dataZoom,filters:b,surroundingsOpacity:Qt,showSurroundings:p.showSurroundings}),r.getLayer(xt)||(n=_o(g,p,e),r.addLayer(n)),r.triggerRepaint()}return{update:c,configure(){n==null||n.configure()},refresh(){n==null||n.refresh()},beforeStyleChange(){a(),i=null,s.clear()},dispose(){a(),o.dispose(),s.clear()}}}function Ie(r,e,t,n,i){if(t.reduce((a,u)=>a*u,1)!==e.length)throw new Error("Invalid "+r+" shape.");const s=new Uint8Array(e.length*4),o=new DataView(s.buffer);for(let a=0;a<e.length;a++){if(!Number.isFinite(e[a]))throw new Error("Cannot export non-finite "+r);o.setFloat32(a*4,e[a],!0)}return{name:r,content:s,description:{dtype:"float32",shape:t,channels:n,unit:i}}}function yn(r,e,t,n,i=null){var o,a,u;const s={schemaVersion:1,endianness:"little",order:"row-major",origin:r.origin,source:r.source,bounds:r.bounds,selection:((o=r.selection)==null?void 0:o.geometry)??((a=r.polygon)==null?void 0:a.geometry),computationalDomain:(u=r.polygon)==null?void 0:u.geometry,mainDomain:r.mainDomain,buffer:r.buffer,dataZoom:r.dataZoom,tileCount:r.tileCount,warnings:r.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",mddf:{nx:n.nx,ny:n.ny,margin:n.margin,layerIndex:n.layerIndex,representation:n.representation??"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}};return i&&(s.volume={layers:i.settings.layers,heightsM:i.settings.layers.map(l=>(l+.5)*1.5),note:"Predicted layers only; layers in between are interpolated linearly in height for display."}),s.files=Object.fromEntries(t.map(l=>[l.name,l.description])),[{name:"metadata.json",content:JSON.stringify(s,null,2)},...t.map(({name:l,content:c})=>({name:l,content:c}))]}function bn(r,e){const n=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(o=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>o+"_"+a)),i=Ie("height_layers.f32.bin",r.grid.layers,[r.grid.ny,r.grid.nx],["roof_layer_count"],"1.5 m per layer"),s=e.channels??n;return[Ie("mddf.f32.bin",e.values,[e.ny,e.nx,s.length],s,"m"),i]}function Bo(r){const e=pn(r),t=r.width*r.height,n=new Float32Array(t*3),i=new Float32Array(t),s=new Float32Array(t),o=new Float32Array(t);for(let l=0;l<t;l++){const c=l*5;n.set([e[c],e[c+2],e[c+1]],l*3),i[l]=e[c+3],s[l]=e[c+4],o[l]=Math.hypot(e[c],e[c+1],e[c+2])}const a=[r.height,r.width],u=[Ie("velocity.f32.bin",n,[...a,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(r.solid),description:{dtype:"uint8",shape:a,values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},Ie("speed.f32.bin",o,a,["speed"],"m/s")];return r.settings.model!=="v2"&&u.push(Ie("temperature.f32.bin",i,a,["T"],"degC"),Ie("tke.f32.bin",s,a,["TKE"],"m2/s2")),u}function Co(r){const e=r.width*r.height,t=r.settings.layers.length,n=pn(r),i=new Float32Array(t*e*3);for(let s=0;s<t*e;s++)i.set([n[s*5],n[s*5+2],n[s*5+1]],s*3);return[Ie("velocity3d.f32.bin",i,[t,r.height,r.width,3],["u","v","w"],"m/s")]}function Po(r,e,t){return yn(r,t,bn(t,e),e)}function Io(r,e,t,n=null){const i=[...bn(t,e),...Bo(t)];return n&&i.push(...Co(n)),i.push({name:"buildings.geojson",content:JSON.stringify(r.buildings),description:{format:"GeoJSON",crs:"WGS84"}}),yn(r,t,i,e,n)}class Ao{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let s=0;e.traverse(function(b){if(b.isMesh){const y=b.geometry,m=y.index,w=y.getAttribute("position");s+=m!==null?m.count/3:w.count/3,i.push({object3d:b,geometry:y})}});let o,a=80;if(n===!0){const b=s*2+s*3*4*4+80+4,y=new ArrayBuffer(b);o=new DataView(y),o.setUint32(a,s,!0),a+=4}else o="",o+=`solid exported
`;const u=new pe,l=new pe,c=new pe,d=new pe,f=new pe,g=new pe;for(let b=0,y=i.length;b<y;b++){const m=i[b].object3d,w=i[b].geometry,M=w.index,$=w.getAttribute("position");if(M!==null)for(let v=0;v<M.count;v+=3){const k=M.getX(v+0),B=M.getX(v+1),P=M.getX(v+2);h(k,B,P,$,m)}else for(let v=0;v<$.count;v+=3){const k=v+0,B=v+1,P=v+2;h(k,B,P,$,m)}}return n===!1&&(o+=`endsolid exported
`),o;function h(b,y,m,w,M){u.fromBufferAttribute(w,b),l.fromBufferAttribute(w,y),c.fromBufferAttribute(w,m),M.isSkinnedMesh===!0&&(M.applyBoneTransform(b,u),M.applyBoneTransform(y,l),M.applyBoneTransform(m,c)),u.applyMatrix4(M.matrixWorld),l.applyMatrix4(M.matrixWorld),c.applyMatrix4(M.matrixWorld),p(u,l,c),x(u),x(l),x(c),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function p(b,y,m){d.subVectors(m,y),f.subVectors(b,y),d.cross(f).normalize(),g.copy(d).normalize(),n===!0?(o.setFloat32(a,g.x,!0),a+=4,o.setFloat32(a,g.y,!0),a+=4,o.setFloat32(a,g.z,!0),a+=4):(o+="	facet normal "+g.x+" "+g.y+" "+g.z+`
`,o+=`		outer loop
`)}function x(b){n===!0?(o.setFloat32(a,b.x,!0),a+=4,o.setFloat32(a,b.y,!0),a+=4,o.setFloat32(a,b.z,!0),a+=4):o+="			vertex "+b.x+" "+b.y+" "+b.z+`
`}}}async function Fo(r,e,t={}){var b,y;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((b=e.layers)==null?void 0:b.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:n,ny:i,layers:s,spacingM:o,layerSpacingM:a}=e,u=(m,w)=>m<0||w<0||m>=n||w>=i?0:s[w*n+m],l=async()=>{var m;if(await new Promise(w=>setTimeout(w,0)),(m=t.shouldCancel)!=null&&m.call(t))throw new Error("Model export cancelled.")};let c=0;for(let m=0;m<i;m++){m%32===0&&await l();for(let w=0;w<n;w++){const M=u(w,m);if(!Number.isInteger(M)||M<0||M>160)throw new Error("Invalid MDDF building height.");M&&(c+=2+ +(M>u(w-1,m))+ +(M>u(w+1,m))+ +(M>u(w,m-1))+ +(M>u(w,m+1)))}}if(!c)throw new Error("The selected MDDF model has no buildings to export.");const d=new Float32Array(c*18);let f=0;const g=(m,w,M,$)=>{for(const v of[m,w,M,m,M,$])d.set(v,f),f+=3};for(let m=0;m<i;m++){m%32===0&&await l();for(let w=0;w<n;w++){const M=u(w,m)*a;if(!M)continue;const $=w*o,v=$+o,k=-m*o,B=k-o;g([$,M,k],[v,M,k],[v,M,B],[$,M,B]),g([$,0,k],[$,0,B],[v,0,B],[v,0,k]);let P=u(w-1,m)*a;M>P&&g([$,P,B],[$,P,k],[$,M,k],[$,M,B]),P=u(w+1,m)*a,M>P&&g([v,P,k],[v,P,B],[v,M,B],[v,M,k]),P=u(w,m-1)*a,M>P&&g([$,P,k],[v,P,k],[v,M,k],[$,M,k]),P=u(w,m+1)*a,M>P&&g([v,P,B],[$,P,B],[$,M,B],[v,M,B])}}const h=new jn;h.setAttribute("position",new Hn(d,3));const p=new tt(h);let x;try{x=new Ao().parse(p,{binary:!0}).buffer}finally{h.dispose(),p.material.dispose()}return[{name:"mddf-model.stl",content:x},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:r.source,origin:e.origin,mainDomain:r.mainDomain,computationalDomain:(y=r.polygon)==null?void 0:y.geometry,buffer:r.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:n,ny:i,spacingM:o,layerSpacingM:a,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:r.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:c*2}}},null,2)}]}const wn=Symbol("flume");function ft(){return vn(wn)}function Ro(){const r="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=et(null),t=et(!1);let n=null,i=null,s=null,o=!1,a=null,u=!1;const l=()=>n,{currentPresetName:c}=kr();rr(c.value);const d=qn({getMap:l,accessToken:r}),f=xi({getMap:l,ready:t,onChange:x,accessToken:r}),g=fo(),h=Ft({mapCreated:!1,mapReady:t,error:"",area:f.state,grid:null,wind:{...Jt},engine:g.state,display:{variable:"speed",speedMps:Jt.speedMps,view:"particles",plane:"3d",particles:"coloured",density:"low",paused:!1,sliceHeightM:ri,planeOffsetM:0,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),p=ee(()=>h.downloading||h.engine.downloading||h.area.loading);function x(){clearTimeout(a),a=null,u=!1,h.grid=null,h.legend=null,h.error="",h.downloadError="",g.invalidate(),w()}async function b(){if(p.value)return;const v=await f.captureRegion();if(!(!v||o))try{Vr(v.buildings.features),h.grid=Ce(vi(v)),h.error="",y()}catch(k){h.error=k.message}}function y(){!h.grid||o||(clearTimeout(a),a=setTimeout(()=>{a=null,m()},ti))}async function m(){if(clearTimeout(a),a=null,!(o||!h.grid||p.value)){if(h.engine.busy){u=!0,g.cancel();return}try{const v={...Mi(h.wind),model:h.wind.model,layers:Gr(h.grid)};h.display.speedMps=v.speedMps,h.error="",await g.run(h.grid,v)}catch(v){h.error=v.message}u&&!o&&(u=!1,await m())}}function w(){!n||!t.value||i==null||i.update({source:h.area.source,input:h.area.snapshot,prediction:h.engine.prediction,preview:f.getPreview(),display:h.display})}async function M(v){if(!(p.value||!h.grid)&&!(v!=="model"&&(h.engine.busy||!h.engine.prediction))){h.downloading=!0,h.downloadError="";try{const k=h.area.snapshot;let B;if(v==="model")B=await Fo(k,h.grid,{shouldCancel:()=>o});else{const W=Number(h.display.speedMps);if(!Ke(W))throw new Error("Use a wind speed between 0.5 and 20 m/s.");const F=h.engine.prediction,L={...F,settings:{...F.settings,speedMps:W}},S=en(L,h.display.sliceHeightM),C=await g.readMddf(S.settings.layerIndex);v==="mddf"?B=Po(k,C,S):B=Io(k,C,S,L)}const P=await Kn(B);o||Jn(P,"flume-"+v+".zip","application/zip")}catch(k){o||(h.downloadError=k.message)}finally{o||(h.downloading=!1)}}}we([()=>h.engine.prediction,()=>h.area.source,()=>h.display.showSurroundings],w),we(()=>h.engine.layersReady,()=>i==null?void 0:i.refresh()),we(()=>[h.wind.directionDeg,h.wind.model],()=>{h.grid&&y()}),we(()=>h.wind.speedMps,v=>{Ke(v)&&(h.display.speedMps=Number(v))}),we(()=>h.engine.prediction,v=>{const k=Ye.find(B=>B.id===h.display.variable);(v==null?void 0:v.settings.model)==="v2"&&(k!=null&&k.v1Only)&&(h.display.variable="speed")}),we(()=>[h.display.variable,h.display.particles,h.display.density,h.display.speedMps,h.display.view,h.display.plane,h.display.sliceHeightM,h.display.planeOffsetM],()=>{Ke(h.display.speedMps)?(h.downloadError="",i==null||i.configure()):h.downloadError="Use a wind speed between 0.5 and 20 m/s."}),we(()=>h.display.paused,()=>n==null?void 0:n.triggerRepaint()),we(c,v=>rr(v)),we(d.mapStyle,v=>{n&&(f.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),n.setStyle(v,{diff:!1}))}),xn(()=>{if(!(r!=null&&r.startsWith("pk."))){h.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{n=new Cr.Map({container:e.value,accessToken:r,style:d.mapStyle.value,center:Qn,zoom:ei,pitch:0,antialias:!0,attributionControl:!1}),i=So(n,v=>{o||(h.legend=v)},v=>{o||(h.error=v.message)}),h.mapCreated=!0,n.on("style.load",()=>{if(!o)try{Gn(n,mn(h.area.source)),t.value=!0,f.restore(),w()}catch(v){h.error=v.message}}),n.on("error",v=>{if(o)return;const k=v.sourceId?" ("+v.sourceId+")":"";h.error="Map data unavailable"+k+". Check token, allowed domains and connection."}),d.attach(),s=new ResizeObserver(()=>n==null?void 0:n.resize()),s.observe(e.value)}catch(v){h.error=v.message}}),At(()=>{o=!0,clearTimeout(a),g.dispose(),i==null||i.dispose(),s==null||s.disconnect(),n==null||n.remove(),n=null});const $={mapElement:e,store:h,controls:d,locked:p,area:f,acceptArea:b,runPrediction:m,download:M};return Mn(wn,$),$}const Eo={class:"flume-compact"},To={key:0,class:"flume-meta",role:"status"},Lo={key:1,class:"flume-muted"},Do={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},zo={class:"flume-actions"},Vo={key:2,role:"status",class:"flume-muted"},No={key:3,class:"flume-meta"},Uo=["disabled"],Oo={key:4,class:"flume-meta"},Wo={__name:"AreaHud",setup(r){const{store:e,area:t,locked:n,acceptArea:i}=ft(),s=Er*100,o=e.area,a=ee(()=>!e.mapReady||n.value),u=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}];return(l,c)=>{var b;const d=_n,f=at,g=Rt,h=Sr,p=lt,x=ut;return U(),Y("div",Eo,[N(d,{modelValue:_(o).source,"onUpdate:modelValue":c[0]||(c[0]=y=>_(o).source=y),label:"Buildings","aria-label":"Building source",size:"small",options:u,"text-by":"text","value-by":"value",disabled:_(n)},null,8,["modelValue","disabled"]),N(f,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:a.value,loading:_(o).loading,onClick:_(t).loadBuildings},{default:te(()=>[...c[4]||(c[4]=[ne("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),_(o).loadedArea?(U(),Y("p",To," Loaded detailed buildings: "+E(_(o).loadedArea.count)+" parts · "+E((_(o).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+E((_(o).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+E(_(o).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(U(),Y("p",Lo,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),R("div",Do,[c[5]||(c[5]=R("span",{class:"text-xs text-secondary"},"Buffer",-1)),N(g,{modelValue:_(o).bufferPercent,"onUpdate:modelValue":c[1]||(c[1]=y=>_(o).bufferPercent=y),min:0,max:s,step:5,"aria-label":"Buffer per side (%)",disabled:_(n)},null,8,["modelValue","disabled"]),N(h,{modelValue:_(o).bufferPercent,"onUpdate:modelValue":c[2]||(c[2]=y=>_(o).bufferPercent=y),modelModifiers:{number:!0},type:"number","input-aria-label":"Buffer per side (percent)",min:0,max:s,step:5,disabled:_(n)},null,8,["modelValue","disabled"]),c[6]||(c[6]=R("span",{class:"text-xs text-secondary"},"%",-1))]),R("div",zo,[N(f,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:a.value,"aria-label":"Select region",onClick:_(t).startSelection},{default:te(()=>[...c[7]||(c[7]=[ne("Draw area",-1)])]),_:1},8,["disabled","onClick"]),N(f,{size:"small",disabled:!_(e).mapReady||!_(o).region&&!_(o).loadedArea||_(n),loading:_(o).loading,"aria-label":_(o).region?"Use selected region":"Use full loaded area",onClick:_(i)},{default:te(()=>[ne(E(_(o).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"])]),_(o).drawing?(U(),Y("p",Vo," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):_(o).region?(U(),Y("p",No,[ne(E(_(o).region.extentM[0])+" × "+E(_(o).region.extentM[1])+" m · 4 m cells · "+E(_(o).region.buffer?"main + buffer":"main domain")+" ",1),R("button",{type:"button",class:"flume-link",disabled:_(n),onClick:c[3]||(c[3]=(...y)=>_(t).clearSelection&&_(t).clearSelection(...y))},"Clear",8,Uo)])):Z("",!0),(b=_(o).region)!=null&&b.mainDomain?(U(),Y("p",Oo," Main: "+E(_(o).region.mainDomain.extentM[0])+" × "+E(_(o).region.mainDomain.extentM[1])+" m. Buffer: "+E((_(o).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):Z("",!0),_(o).loading?(U(),Ae(p,{key:5,"model-value":_(o).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):Z("",!0),_(o).error?(U(),Ae(x,{key:6,color:"danger"},{default:te(()=>[ne(E(_(o).error),1)]),_:1})):Z("",!0)])}}},Xo={class:"flex flex-col gap-3"},Yo={class:"grid grid-cols-[40px_minmax(0,1fr)_80px_28px] items-center gap-3"},jo={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Ho=["aria-valuenow","aria-disabled"],qo=["x1","y1","x2","y2"],Go=["cx","cy"],Zo={class:"flex flex-col gap-2 min-w-0"},Ko={class:"cardinals grid grid-cols-4 gap-1"},Jo={key:2,class:"flex flex-col gap-1"},Qo={role:"status",class:"text-xs text-secondary"},ea={key:3,class:"text-xs text-secondary"},ta={__name:"WindHud",setup(r){const{store:e,locked:t,runPrediction:n}=ft(),i=e.wind,s=e.engine,o=ee(()=>!!e.grid&&!t.value),a=ee(()=>{if(!e.grid)return null;const g=Gr(e.grid);return{topM:Math.round((g.at(-1)+.5)*ie),layers:g.length}}),u=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],l=et(null),c=ee(()=>Number(i.directionDeg)*Math.PI/180);function d(g){if(!o.value||g.type==="pointermove"&&!g.buttons)return;g.type==="pointerdown"&&g.currentTarget.setPointerCapture(g.pointerId);const h=l.value.getBoundingClientRect(),p=g.clientX-h.left-h.width/2,x=-(g.clientY-h.top-h.height/2);i.directionDeg=(Math.round(Math.atan2(x,p)*180/Math.PI)+360)%360}function f(g){if(!o.value)return;const h={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[g.key]??0;h&&(g.preventDefault(),i.directionDeg=(Number(i.directionDeg)+h+360)%360)}return(g,h)=>{const p=Rt,x=Sr,b=at,y=ut,m=lt;return U(),Y("div",Xo,[R("div",Yo,[h[3]||(h[3]=R("span",{class:"text-xs text-secondary"},"Speed",-1)),N(p,{modelValue:_(i).speedMps,"onUpdate:modelValue":h[0]||(h[0]=w=>_(i).speedMps=w),min:_(Mt),max:_(_t),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"]),N(x,{modelValue:_(i).speedMps,"onUpdate:modelValue":h[1]||(h[1]=w=>_(i).speedMps=w),modelModifiers:{number:!0},type:"number","input-aria-label":"Reference wind speed (m/s)",min:_(Mt),max:_(_t),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),h[4]||(h[4]=R("span",{class:"text-xs text-secondary"},"m/s",-1))]),R("div",jo,[(U(),Y("svg",{ref_key:"dial",ref:l,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":_(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:$n(d,["prevent"]),onPointermove:d,onKeydown:f},[h[5]||(h[5]=kn('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-e91a5d62></circle><text x="80" y="16" text-anchor="middle" data-v-e91a5d62>90°</text><text x="146" y="84" text-anchor="middle" data-v-e91a5d62>0°</text><text x="80" y="152" text-anchor="middle" data-v-e91a5d62>270°</text><text x="14" y="84" text-anchor="middle" data-v-e91a5d62>180°</text>',5)),R("line",{x1:80-Math.cos(c.value)*30,y1:80+Math.sin(c.value)*30,x2:80+Math.cos(c.value)*42,y2:80-Math.sin(c.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,qo),R("circle",{cx:80+Math.cos(c.value)*42,cy:80-Math.sin(c.value)*42,r:"5",class:"needle-tip"},null,8,Go)],40,Ho)),R("div",Zo,[N(x,{modelValue:_(i).directionDeg,"onUpdate:modelValue":h[2]||(h[2]=w=>_(i).directionDeg=w),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),R("div",Ko,[(U(),Y(ke,null,Br(u,w=>N(b,{key:w.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+w.text,onClick:M=>_(i).directionDeg=w.value},{default:te(()=>[ne(E(w.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),_(e).error?(U(),Ae(y,{key:0,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:te(()=>[ne(E(_(e).error),1)]),_:1})):Z("",!0),_(s).error?(U(),Ae(y,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:te(()=>[ne(E(_(s).error),1)]),_:1})):Z("",!0),_(s).busy?(U(),Y("div",Jo,[N(m,{"model-value":_(s).progress*100,indeterminate:_(s).progress===0},null,8,["model-value","indeterminate"]),R("p",Qo,E(_(s).stage),1)])):Z("",!0),a.value&&!_(s).busy?(U(),Y("p",ea," 3D wind: ground to "+E(a.value.topM)+" m · "+E(a.value.layers)+" layers ",1)):Z("",!0),N(b,{block:"",disabled:!o.value,loading:_(s).busy,"aria-label":"Run prediction",onClick:_(n)},{default:te(()=>[...h[6]||(h[6]=[ne("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},ra=Et(ta,[["__scopeId","data-v-e91a5d62"]]),na={class:"flex flex-col gap-3"},ia={key:0,class:"text-xs text-secondary"},sa={key:0,class:"hud-row hud-row--value"},oa={class:"hud-value"},aa={key:1,class:"hud-row hud-row--value"},la={class:"hud-value"},ua={key:0,class:"hud-row"},ca={class:"hud-row"},da={key:0,class:"flex flex-col gap-1 text-xs"},fa={class:"flex justify-between gap-2 text-secondary"},ha={class:"text-xs text-secondary"},ga={__name:"VisualizeHud",setup(r){const{store:e}=ft(),t=e.display,n=ee(()=>e.engine.prediction),i=ee(()=>{var b;return e.engine.layersReady||((b=n.value)==null?void 0:b.layers.length)||0}),s=ee(()=>n.value?Nt(n.value):er),o=ee(()=>n.value?is(n.value):[0,0]),a=ee(()=>Ye.filter(b=>{var y;return!(b.v1Only&&((y=n.value)==null?void 0:y.settings.model)==="v2")}).map(b=>({label:b.label,value:b.id}))),u=[{label:"Particles",value:"particles"},{label:"Slice",value:"slice"}],l=ee(()=>[{label:"Full field",value:"3d"},{label:"Horizontal",value:"h"},{label:"Vertical",value:"v"}].filter(b=>b.value!=="3d"||t.view==="particles")),c=ee({get:()=>t.view==="slice"&&t.plane==="3d"?"h":t.plane,set:b=>t.plane=b}),d=[{label:"Particles",value:"coloured"},{label:"Slice",value:"white"}],f=ee(()=>c.value==="h"||c.value==="3d"&&t.view==="particles"&&t.particles==="white"),g=[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],h=ee(()=>{const b=Math.round(Number(t.planeOffsetM));return(b>0?"+":"")+b+" m"}),p=ee(()=>{var b;return((b=Ye.find(y=>y.id===t.variable))==null?void 0:b.ramp)??"turbo"}),x=ee(()=>"linear-gradient(to right,"+Array.from({length:17},(b,y)=>"rgb("+gn(p.value,y/16).join(",")+") "+y*100/16+"%").join(",")+")");return(b,y)=>{const m=Bn,w=Rt,M=Cn,$=Pn;return U(),Y("div",na,[n.value?(U(),Y(ke,{key:1},[N(m,{modelValue:_(t).view,"onUpdate:modelValue":y[0]||(y[0]=v=>_(t).view=v),options:u,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"View",class:"even-toggle"},null,8,["modelValue"]),_(t).view!=="off"?(U(),Y(ke,{key:0},[N(m,{modelValue:c.value,"onUpdate:modelValue":y[1]||(y[1]=v=>c.value=v),options:l.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Plane",class:"even-toggle"},null,8,["modelValue","options"]),f.value?(U(),Y("div",sa,[y[9]||(y[9]=R("span",{class:"hud-label"},"Height",-1)),N(w,{modelValue:_(t).sliceHeightM,"onUpdate:modelValue":y[2]||(y[2]=v=>_(t).sliceHeightM=v),min:_(er),max:s.value,step:_(ie),"aria-label":"Height"},null,8,["modelValue","min","max","step"]),R("span",oa,E(Number(_(t).sliceHeightM).toFixed(1))+" m",1)])):Z("",!0),c.value==="v"?(U(),Y("div",aa,[y[10]||(y[10]=R("span",{class:"hud-label"},"Position",-1)),N(w,{modelValue:_(t).planeOffsetM,"onUpdate:modelValue":y[3]||(y[3]=v=>_(t).planeOffsetM=v),min:o.value[0],max:o.value[1],step:_(T),"aria-label":"Position across wind"},null,8,["modelValue","min","max","step"]),R("span",la,E(h.value),1)])):Z("",!0)],64)):Z("",!0),_(t).view!=="off"?(U(),Y(ke,{key:1},[_(t).view==="particles"?(U(),Y("div",ua,[y[11]||(y[11]=R("span",{class:"hud-label"},"View mode",-1)),N(m,{modelValue:_(t).particles,"onUpdate:modelValue":y[4]||(y[4]=v=>_(t).particles=v),options:d,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Colour by",class:"even-toggle"},null,8,["modelValue"])])):Z("",!0),R("div",ca,[y[12]||(y[12]=R("span",{class:"hud-label"},"Density",-1)),N(m,{modelValue:_(t).density,"onUpdate:modelValue":y[5]||(y[5]=v=>_(t).density=v),options:g,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Particle density",class:"even-toggle"},null,8,["modelValue"])]),N(M,{modelValue:_(t).paused,"onUpdate:modelValue":y[6]||(y[6]=v=>_(t).paused=v),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"])],64)):Z("",!0),_(t).view!=="off"?(U(),Y(ke,{key:2},[N($,{class:"!my-0"}),N(m,{modelValue:_(t).variable,"onUpdate:modelValue":y[7]||(y[7]=v=>_(t).variable=v),options:a.value,color:"background-element","toggle-color":"primary",size:"small",role:"group","aria-label":"Field",class:"even-toggle"},null,8,["modelValue","options"]),_(e).legend?(U(),Y("div",da,[R("div",{class:"colorbar",style:Sn({background:x.value})},null,4),R("div",fa,[R("span",null,E(_(e).legend.low.toFixed(2)),1),R("strong",null,E(_(e).legend.legend)+" ("+E(_(e).legend.unit)+")",1),R("span",null,E(_(e).legend.high.toFixed(2)),1)])])):Z("",!0)],64)):Z("",!0),N($,{class:"!my-0"}),N(M,{modelValue:_(t).showSurroundings,"onUpdate:modelValue":y[8]||(y[8]=v=>_(t).showSurroundings=v),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),R("p",ha,[ne(E(n.value.settings.model==="v2"?"Model v2":"Model v1")+" · 3D wind up to "+E(s.value.toFixed(0))+" m · "+E(i.value)+" / "+E(n.value.settings.layers.length)+" layers · "+E((n.value.milliseconds/1e3).toFixed(1))+" s ",1),n.value.grid.mainDomain?(U(),Y(ke,{key:0},[ne(" · solid outline: main area, dashed: "+E((n.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)],64)):Z("",!0)])],64)):(U(),Y("p",ia,"Run a prediction to see the 3D wind."))])}}},pa=Et(ga,[["__scopeId","data-v-73358f6c"]]),ma={class:"space-y-2"},ya={key:0,class:"text-xs text-secondary"},ba={class:"grid grid-cols-2 gap-2"},wa={__name:"DownloadsHud",setup(r){const{store:e,download:t}=ft(),n=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(s){const o=e.engine;return e.downloading||o.downloading||s!=="model"&&(o.busy||!o.prediction)}return(s,o)=>{const a=at,u=lt,l=ut;return U(),Y("div",ma,[_(e).grid?(U(),Y(ke,{key:1},[R("div",ba,[(U(),Y(ke,null,Br(n,c=>N(a,{key:c.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":c.label,disabled:i(c.id),onClick:d=>_(t)(c.id)},{default:te(()=>[ne(E(c.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),_(e).downloading?(U(),Ae(u,{key:0,indeterminate:"","aria-label":"Preparing download"})):Z("",!0),_(e).downloadError?(U(),Ae(l,{key:1,color:"danger"},{default:te(()=>[ne(E(_(e).downloadError),1)]),_:1})):Z("",!0)],64)):(U(),Y("p",ya,"Choose a simulation area before downloading its model."))])}}},xa={class:"flume-hud-stack"},va={class:"flume-heading city-glass"},Ma={class:"flume-heading__row"},_a={key:0,class:"flume-info"},$a={class:"flume-info__title"},ka={class:"flume-info__copyright"},Sa=["href"],Ba={class:"text-xs normal-case text-secondary"},Ca={class:"text-xs normal-case text-secondary"},Pa={key:0,class:"flume-status"},Ia={__name:"FlumeCityView",setup(r){const{mapElement:e,store:t,controls:n,locked:i,area:s}=Ro(),{controlsVisible:o}=n,{currentPresetName:a}=kr(),u=ee(()=>a.value==="dark"),l=et(!1),c=ee(()=>t.grid?Number(t.wind.speedMps).toFixed(1)+" m/s · "+t.wind.directionDeg+"°":""),d={particles:"Particles",slice:"Slice",off:"Off"},f=ee(()=>t.engine.prediction?d[t.display.view]:""),g={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(h,p)=>{const x=at,b=ut,y=lt;return U(),Y("section",{class:Rn(["flume-page map-glass",{"map-glass--dark":u.value}]),"aria-label":"Flume City wind prediction",onKeydown:p[1]||(p[1]=Fn((...m)=>_(s).stopSelection&&_(s).stopSelection(...m),["esc"]))},[R("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),N(Zn,{controls:_(n),shown:_(t).mapCreated,disabled:_(i)},null,8,["controls","shown","disabled"]),In(R("div",xa,[R("header",va,[R("div",Ma,[p[2]||(p[2]=R("h1",null,"Flume City",-1)),N(x,{preset:"secondary",color:"textPrimary",size:"small",icon:l.value?"mso-close":"mso-info","aria-label":l.value?"Hide Flume City information":"Show Flume City information","aria-expanded":l.value,onClick:p[0]||(p[0]=m=>l.value=!l.value)},null,8,["icon","aria-label","aria-expanded"])]),l.value?(U(),Y("div",_a,[R("p",$a,E(g.title),1),R("p",null,E(g.authors),1),R("p",null,E(g.summary),1),N(x,{preset:"secondary",size:"small",icon:"mso-description",href:g.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:te(()=>[...p[3]||(p[3]=[ne("arXiv",-1)])]),_:1},8,["href"]),R("div",ka,[R("p",null,[p[4]||(p[4]=ne(" Developed and maintained by ",-1)),R("a",{href:_(je).lab.url,target:"_blank",rel:"noopener"},E(_(je).lab.name),9,Sa),p[5]||(p[5]=R("br",null,null,-1)),ne("("+E(_(je).lead)+") ",1)]),R("p",null,E(_(je).place),1)])])):Z("",!0)]),N(qe,{title:"1 · Simulation area",inert:_(i),collapsed:!!_(t).grid},{default:te(()=>[N(Wo)]),_:1},8,["inert","collapsed"]),N(qe,{title:"2 · Wind configuration",collapsed:!_(t).grid},{"header-extra":te(()=>[R("span",Ba,E(c.value),1)]),default:te(()=>[N(ra)]),_:1},8,["collapsed"]),N(qe,{title:"3 · Wind visualization",collapsed:!_(t).engine.prediction},{"header-extra":te(()=>[R("span",Ca,E(f.value),1)]),default:te(()=>[N(pa)]),_:1},8,["collapsed"]),N(qe,{title:"4 · Downloads",collapsed:!_(t).grid},{default:te(()=>[N(wa)]),_:1},8,["collapsed"]),_(t).error&&!_(t).grid?(U(),Ae(b,{key:0,color:"danger"},{default:te(()=>[ne(E(_(t).error),1)]),_:1})):Z("",!0)],512),[[An,_(o)]]),!_(t).mapReady&&!_(t).error?(U(),Y("div",Pa,[N(y,{indeterminate:"","aria-label":"Loading Flume map"})])):Z("",!0)],34)}}},Oa=Et(Ia,[["__scopeId","data-v-4af10bca"]]);export{Oa as default};
