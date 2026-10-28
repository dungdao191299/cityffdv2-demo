import{w as oe,o as st,m as me,r as lt,u as Vt,d as li,a as ie,b as Ae,a4 as di,a5 as ci,e as L,v as z,i as R,l as w,M as dt,h as U,z as j,N as Le,t as $,q as D,x as Y,f as ce,L as ze,y as Ne,_ as ct,P as ui,U as fi,J as hi,a6 as gi,F as Ce,A as Tt,a7 as pi,s as mi,S as yi,X as mt,Y as yt,Z as bi,a8 as Ie,a0 as wi,E as xi,a1 as vi,k as _i,O as Mi}from"./index-Ow1kMB1c.js";import{w as ye,x as Si,l as ki,k as Pi,y as bt,n as Ci,O as Fi,t as we,z as De,S as Je,E as Se,q as ke,B as Lt,e as _e,D as je,F as Re,G as Me,R as Ii,V as X,M as Qe,H as Bi,I as zt,J as et,N as wt,K as tt,m as Nt,c as Ei,W as Ai,Q as xt,T as vt,U as Di,X as Ri,s as $i,b as Vi,u as Ti,a as Li,v as Ye}from"./mapbox-gl-geocoder-Ds1DrIET.js";import{z as zi}from"./archive-Dz16c6AW.js";import{d as Ni}from"./download-B6B1Q6H-.js";import{m as Ue,c as xe}from"./geojsonToStl-Bbo8coar.js";import{c as ut}from"./index-D6bWIqpK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./jszip.min-UX6Ol9Iw.js";import"./earcut-Drp1yMsm.js";const Ui=[-73.5673,45.5017],Wi=14,T=4,ne=1.5,Ut=240,qe=3e3,Oi=.1,Pe=16,_t={heightM:10,directionDeg:0,speedMps:6},it=.75,nt=239.25,rt=.5,at=20,Xi=320,Mt=.35,Wt={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#8cb8d8",selectedBuildings:"#9aa3ad",drawFillOpacity:.1},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#b9bdc4",selectedBuildings:"#5f6670",drawFillOpacity:.2}};let Ot="dark";function St(n){Ot=n in Wt?n:"dark"}function G(){return Wt[Ot]}function Xt(n){const e=[1/0,1/0,-1/0,-1/0];return ut(n,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function We(n,e){for(const m of[n,e])if(!Array.isArray(m)||m.length<2||!m.every(Number.isFinite)||Math.abs(m[0])>180||Math.abs(m[1])>85.051129)throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(n[0],e[0]),Math.min(n[1],e[1])];if(Math.abs(n[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=Ue(t),i=xe(t),[a,o]=r([Math.max(n[0],e[0]),Math.max(n[1],e[1])]);if(a<=0||o<=0)throw new Error("The region is empty.");const s=Math.ceil((a-1e-6)/T),d=Math.ceil((o-1e-6)/T),l=i([s*T,d*T]),f=[...t,...l],[h,c,u,g]=f,b={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[h,c],[u,c],[u,g],[h,g],[h,c]]]}};return{origin:t,bounds:f,extentM:[s*T,d*T],polygon:b}}function kt(n){var i;if(((i=n==null?void 0:n.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(ut(n,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=Xt(n);return{...We(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(n.geometry)}}}function ji(n){const e=structuredClone({origin:n.origin,bounds:n.bounds,extentM:n.extentM,polygon:n.polygon}),t=Oi,r=n.extentM.map(d=>Math.ceil(d*t/T)*T),i=xe(n.origin)([0,-r[1]]),a=xe(i)([-r[0],0]),o=Ue(a)(n.bounds.slice(2,4)),s=We(a,xe(a)([o[0]+r[0],o[1]+r[1]]));return{...n,...s,mainDomain:e,buffer:{fraction:t,paddingM:r}}}function jt(n){var r,i,a;const e=new Map,t=new Set;for(const o of n){if(!["Polygon","MultiPolygon"].includes((r=o.geometry)==null?void 0:r.type))continue;ut(o,c=>{if(!Number.isFinite(c[0])||!Number.isFinite(c[1])||Math.abs(c[0])>180||Math.abs(c[1])>85.051129)throw new Error("Invalid building coordinates.")});const s=Number((i=o.properties)==null?void 0:i.height),d=Number((a=o.properties)==null?void 0:a.min_height)||0,l=JSON.stringify([o.geometry,s,d]);if(t.has(l))continue;t.add(l);const f=ye(o),h=f==null?l:JSON.stringify([f,s,d]);e.has(h)||e.set(h,[]),e.get(h).push({type:"Feature",...o.id==null?{}:{id:o.id},properties:structuredClone(o.properties??{}),geometry:structuredClone(o.geometry)})}return Array.from(e.values(),o=>{const s=o[0];if(o.length>1){const d=Pi({type:"FeatureCollection",features:o});if(!d)throw new Error("Building parts produced empty geometry.");s.geometry=d.geometry,delete s.bbox}return s})}function Yi(n,e){var u,g,b;const t=jt(n),r=e.selection??e.polygon,i=new Set(t.filter(m=>ki(m,r))),a=new Set(Array.from(i,ye).filter(m=>m!=null)),o=[],s=[],d=[];let l=0,f=0;for(const m of t){if(!(i.has(m)||ye(m)!=null&&a.has(ye(m)))){s.push(m);continue}const M=(u=m.properties)==null?void 0:u.height;if(M==null||M===""){l++;continue}const y=Number(M);if(!Number.isFinite(y)||y<0||y>Ut)throw new Error("Building height must be finite and between 0 and 240 m.");if(y===0){l++;continue}Number((g=m.properties)==null?void 0:g.min_height)>0&&f++,o.push({...m,properties:{...m.properties,source_height:y,source_min_height:Number((b=m.properties)==null?void 0:b.min_height)||0,height:Math.max(1,Math.round(y/ne))*ne,min_height:0}})}const h={type:"FeatureCollection",features:o};let c=e;if(o.length){const m=Xt(h);c=We(m.slice(0,2),m.slice(2,4))}return l&&d.push(l+" parts have missing/zero height and were omitted."),f&&d.push(f+" raised parts are treated as solid from the ground to their roof."),o.length||d.push("No buildings found in loaded map data. This run will use open ground."),o.some(m=>ye(m)==null)&&d.push("Selected parts without provider IDs cannot be joined across tile boundaries."),d.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...c,selection:structuredClone(e.selection??e.polygon),buildings:h,surroundings:{type:"FeatureCollection",features:s},warnings:d}}function $e(n){var t,r;const e=[];for(const i of jt(n)){const a=Number((t=i.properties)==null?void 0:t.height);if(!Number.isFinite(a)||a<=0)continue;const o=Math.min(a,Math.max(0,Number((r=i.properties)==null?void 0:r.min_height)||0));e.push({...i,properties:{...i.properties,height:a,min_height:o},geometry:i.geometry})}return{type:"FeatureCollection",features:e}}function Yt(n,e=null){const t=n.map(ye);if(t.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const r=["in",Si,["literal",Array.from(new Set(t))]];return{selected:e?["all",e,r]:r,surroundings:e?["all",e,["!",r]]:["!",r]}}const Pt=65536*65536,qi=12,Ct=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),Gi=0,Hi=1,Ft=2,Zi=5;class Ki{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,r=this.length){let i;for(;i=this.nextField(r);)e(i,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*Pt;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*Pt;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,r=t[this.pos++];if(r<128)return r;let i=r&127,a;return a=t[this.pos++],i|=(a&127)<<7,a<128||(a=t[this.pos++],i|=(a&127)<<14,a<128)||(a=t[this.pos++],i|=(a&127)<<21,a<128)?i:(a=t[this.pos],i|=(a&15)<<28,Ji(i,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=qi&&Ct?Ct.decode(this.buf.subarray(t,e)):Qi(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const r=this.readPackedEnd();for(;this.pos<r;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===Ft?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===Gi)for(;this.buf[this.pos++]>127;);else if(t===Ft)this.pos=this.readVarint()+this.pos;else if(t===Zi)this.pos+=4;else if(t===Hi)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function Ji(n,e,t){const r=t.buf;let i,a;if(a=r[t.pos++],i=(a&112)>>4,a<128||(a=r[t.pos++],i|=(a&127)<<3,a<128)||(a=r[t.pos++],i|=(a&127)<<10,a<128)||(a=r[t.pos++],i|=(a&127)<<17,a<128)||(a=r[t.pos++],i|=(a&127)<<24,a<128)||(a=r[t.pos++],i|=(a&1)<<31,a<128))return he(n,i,e);throw new Error("Expected varint not more than 10 bytes")}function he(n,e,t){return t?e*4294967296+(n>>>0):(e>>>0)*4294967296+(n>>>0)}function Qi(n,e,t){let r="",i=e;for(;i<t;){const a=n[i];let o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s>t)break;let d,l,f;s===1?a<128&&(o=a):s===2?(d=n[i+1],(d&192)===128&&(o=(a&31)<<6|d&63,o<=127&&(o=null))):s===3?(d=n[i+1],l=n[i+2],(d&192)===128&&(l&192)===128&&(o=(a&15)<<12|(d&63)<<6|l&63,(o<=2047||o>=55296&&o<=57343)&&(o=null))):s===4&&(d=n[i+1],l=n[i+2],f=n[i+3],(d&192)===128&&(l&192)===128&&(f&192)===128&&(o=(a&15)<<18|(d&63)<<12|(l&63)<<6|f&63,(o<=65535||o>=1114112)&&(o=null))),o===null?(o=65533,s=1):o>65535&&(o-=65536,r+=String.fromCharCode(o>>>10&1023|55296),o=56320|o&1023),r+=String.fromCharCode(o),i+=s}return r}class qt{constructor(e,t,r,i,a){for(this.properties=Object.create(null),this.extent=r,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=a;e.pos<t;){const o=e.readVarint();if(o===8)this.id=e.readVarint();else if(o===18){const s=e.readVarint()+e.pos;for(;e.pos<s;){const d=i[e.readVarint()],l=a[e.readVarint()];this.properties[d]=l}}else o===24?this.type=e.readVarint():(o===34&&(this._geometry=e.pos),e.skip(o))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,r=[];let i,a=1,o=0,s=0,d=0;for(;e.pos<t;){if(o<=0){const l=e.readVarint();if(a=l&7,o=l>>3,o===0)continue}if(o--,a===1)s+=e.readSVarint(),d+=e.readSVarint(),i&&r.push(i),i=[new bt(s,d)];else if(a===2)s+=e.readSVarint(),d+=e.readSVarint(),i&&i.push(new bt(s,d));else if(a===7)i&&i.push(i[0].clone());else throw new Error(`unknown command ${a}`)}return i&&r.push(i),r}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let r=1,i=0,a=0,o=0,s=1/0,d=-1/0,l=1/0,f=-1/0;for(;e.pos<t;){if(i<=0){const h=e.readVarint();if(r=h&7,i=h>>3,i===0)continue}if(i--,r===1||r===2)a+=e.readSVarint(),o+=e.readSVarint(),a<s&&(s=a),a>d&&(d=a),o<l&&(l=o),o>f&&(f=o);else if(r!==7)throw new Error(`unknown command ${r}`)}return[s,l,d,f]}toGeoJSON(e,t,r){const i=this.extent*Math.pow(2,r),a=this.extent*e,o=this.extent*t,s=this.loadGeometry();function d(c){return[(c.x+a)*360/i-180,360/Math.PI*Math.atan(Math.exp((1-(c.y+o)*2/i)*Math.PI))-90]}function l(c){return c.map(d)}let f;if(this.type===1){const c=[];for(const g of s)c.push(g[0]);const u=l(c);f=c.length===1?{type:"Point",coordinates:u[0]}:{type:"MultiPoint",coordinates:u}}else if(this.type===2){const c=s.map(l);f=c.length===1?{type:"LineString",coordinates:c[0]}:{type:"MultiLineString",coordinates:c}}else if(this.type===3){const c=en(s),u=[];for(const g of c)u.push(g.map(l));f=u.length===1?{type:"Polygon",coordinates:u[0]}:{type:"MultiPolygon",coordinates:u}}else throw new Error("unknown feature type");const h={type:"Feature",geometry:f,properties:this.properties};return this.id!=null&&(h.id=this.id),h}}qt.types=["Unknown","Point","LineString","Polygon"];function en(n){const e=n.length;if(e<=1)return[n];const t=[];let r,i;for(let a=0;a<e;a++){const o=tn(n[a]);o!==0&&(i===void 0&&(i=o<0),i===o<0?(r&&t.push(r),r=[n[a]]):r&&r.push(n[a]))}return r&&t.push(r),t}function tn(n){let e=0;for(let t=0,r=n.length,i=r-1,a,o;t<r;i=t++)a=n[t],o=n[i],e+=(o.x-a.x)*(a.y+o.y);return e}class nn{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const r=e.readVarint();r===10?this.name=e.readString():r===18?(this._features.push(e.pos),e.skip(r)):r===26?this._keys.push(e.readString()):r===34?this._values.push(rn(e)):r===40?this.extent=e.readVarint():r===120?this.version=e.readVarint():e.skip(r)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new qt(this._pbf,t,this.extent,this._keys,this._values)}}function rn(n){let e=null;const t=n.readVarint()+n.pos;for(;n.pos<t;){const r=n.readVarint();e=r===10?n.readString():r===21?n.readFloat():r===25?n.readDouble():r===32?n.readVarint(!0):r===40?n.readVarint():r===48?n.readSVarint():r===56?n.readBoolean():(n.skip(r),null)}if(e==null)throw new Error("unknown feature value");return e}class an{constructor(e,t=e.length){const r=Object.create(null);for(;e.pos<t;){const i=e.readVarint();if(i===26){const a=new nn(e,e.readVarint()+e.pos);a.length&&(r[a.name]=a)}else e.skip(i)}this.layers=r}}function Gt(n){return n==="osm"?"building":"Montreal_Qatar-6hvjju"}function Ht(n,e){return n!=="osm"||String(e.extrude)==="true"}function Zt(n,e){return Math.max(n??0,Math.min(16,e??16))}function Kt(n,e){const t=2**e,r=a=>a/t*360-180,i=a=>Math.atan(Math.sinh(Math.PI*(1-2*a/t)))*180/Math.PI;return[r(Math.min(...n.map(a=>a.x))),i(Math.max(...n.map(a=>a.y))+1),r(Math.max(...n.map(a=>a.x))+1),i(Math.min(...n.map(a=>a.y)))]}function Jt(n,e,t=0){const r=2**e,i=h=>(h+180)/360*r,a=h=>{const c=Math.max(-85.051129,Math.min(85.051129,h))*Math.PI/180;return(1-Math.asinh(Math.tan(c))/Math.PI)/2*r},o=Math.max(0,Math.floor(i(n[0]))-t),s=Math.min(r-1,Math.ceil(i(n[2])-1e-9)-1+t),d=Math.max(0,Math.floor(a(n[3]))-t),l=Math.min(r-1,Math.ceil(a(n[1])-1e-9)-1+t);if((s-o+1)*(l-d+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const f=[];for(let h=d;h<=l;h++)for(let c=o;c<=s;c++)f.push({z:e,x:c,y:h});return f}function on({map:n,sourceId:e,source:t,bounds:r}){var i,a,o,s;try{const d=(i=n.getSource)==null?void 0:i.call(n,e),l=(o=(a=n.style)==null?void 0:a.getOwnSourceCaches)==null?void 0:o.call(a,e);if(!d||!(l!=null&&l.length)||typeof n.querySourceFeatures!="function")return null;const f=Zt(d.minzoom,d.maxzoom),h=Jt(r,f),c=new Set;for(const b of l)for(const m of b.getIds()){const p=b.getTileByID(m),M=(s=p==null?void 0:p.tileID)==null?void 0:s.canonical;(M==null?void 0:M.z)===f&&p.state==="loaded"&&c.add(M.x+"/"+M.y)}if(!h.every(b=>c.has(b.x+"/"+b.y)))return null;const u=new Set(h.map(b=>b.x+"/"+b.y));return{features:n.querySourceFeatures(e,{sourceLayer:Gt(t)}).filter(b=>{var m;return((m=b.tile)==null?void 0:m.z)===f&&u.has(b.tile.x+"/"+b.tile.y)&&Ht(t,b.properties)}),zoom:f,tileCount:h.length,coverageBounds:Kt(h,f),fromMap:!0}}catch{return null}}async function It(n,e,t=!1){e==null||e.throwIfAborted();const r=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),i=await fetch(n,{signal:r});if(t&&i.status===404)return null;if(!i.ok)throw new Error("Building data request failed (HTTP "+i.status+"). Check source access and token.");return i}function Bt(n,e){var r;const t=new URL(n,((r=globalThis.location)==null?void 0:r.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function sn({sourceConfig:n,source:e,bounds:t,accessToken:r,signal:i,onProgress:a,paddingTiles:o=0}){var b;if(!n)throw new Error("The selected basemap does not provide this building source.");let s=n;if(n.url){let m=n.url;if(m.startsWith("mapbox://")){const p=m.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(p))throw new Error("Invalid Mapbox tileset ID.");m="https://api.mapbox.com/v4/"+p+".json?secure"}s=await(await It(Bt(m,r),i)).json()}if(!((b=s.tiles)!=null&&b.length))throw new Error("The selected source has no vector tile URLs.");const d=Zt(s.minzoom,s.maxzoom);if(!Number.isInteger(d)||d<0||d>22)throw new Error("Unsupported tile detail level.");const l=Jt(t,d,o),f=[];let h=0,c=0,u=0;const g=Gt(e);return await Promise.all(Array.from({length:Math.min(4,l.length)},async()=>{for(;h<l.length;){const{x:m,y:p,z:M}=l[h++];let y=s.tiles[0].replaceAll("{z}",String(M)).replaceAll("{x}",String(m)).replaceAll("{y}",String(s.scheme==="tms"?2**M-p-1:p)).replaceAll("{ratio}","");y=Bt(y,r);const x=await It(y,i,!0);if(x){const v=await x.arrayBuffer();if(u+=v.byteLength,v.byteLength>16*1024*1024||u>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const k=new an(new Ki(new Uint8Array(v))).layers[g];if(k)for(let P=0;P<k.length;P++){const _=k.feature(P);Ht(e,_.properties)&&_.type===3&&f.push(_.toGeoJSON(m,p,M))}}c++,a==null||a(c/l.length)}})),i==null||i.throwIfAborted(),{features:f,zoom:d,tileCount:l.length,coverageBounds:Kt(l,d)}}const Q="flume-detailed-buildings",ee="flume-region-domain",ge="flume-main-domain";function ot(n,e){var t;if(!((t=e==null?void 0:e.features)!=null&&t.length)){n.getLayer(Q)&&n.removeLayer(Q),n.getSource(Q)&&n.removeSource(Q);return}n.getSource(Q)?n.getSource(Q).setData(e):n.addSource(Q,{type:"geojson",data:e,maxzoom:22,tolerance:0}),n.getLayer(Q)||n.addLayer({id:Q,type:"fill-extrusion",source:Q,minzoom:0,paint:{"fill-extrusion-color":G().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function ln(n,e){if(!e){n.getLayer(ge)&&n.removeLayer(ge),n.getLayer(ee)&&n.removeLayer(ee),n.getSource(ee)&&n.removeSource(ee);return}const t={type:"FeatureCollection",features:[{...e.polygon,properties:{role:"outer"}},...e.mainDomain?[{...e.mainDomain.polygon,properties:{role:"main"}}]:[]]};n.getSource(ee)?n.getSource(ee).setData(t):(n.addSource(ee,{type:"geojson",data:t}),n.addLayer({id:ee,type:"line",source:ee,filter:["==",["get","role"],"outer"],paint:{"line-color":G().bufferArea,"line-width":1.5,"line-dasharray":[4,3]}})),e.mainDomain&&!n.getLayer(ge)&&n.addLayer({id:ge,type:"line",source:ee,filter:["==",["get","role"],"main"],paint:{"line-color":G().mainArea,"line-width":3}}),!e.mainDomain&&n.getLayer(ge)&&n.removeLayer(ge)}const Et=["draw.create","draw.update","draw.delete"];function dn({getMap:n,ready:e,onChange:t,accessToken:r}){const i=lt({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,o=!1,s=null,d=0,l=null;function f(S=!1){d++,s==null||s.abort(),S||(l=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function h(){const S=n();!S||!e.value||(ot(S,l==null?void 0:l.preview),ln(S,i.region??(l==null?void 0:l.area)??null))}function c(){return(l==null?void 0:l.preview)??null}function u(S){f(!i.region&&!i.snapshot),i.error="";try{i.region=me(kt(S))}catch(C){i.region=null,i.error=C.message}h()}function g(S){var N;if(o||!a)return;const C=(N=S.features)==null?void 0:N.at(-1);if(S.type==="draw.create"&&C)for(const W of a.getAll().features)W.id!==C.id&&a.delete(W.id);const V=a.getAll().features.find(W=>W.geometry.type==="Polygon");V?u(V):(f(),i.region=null,h()),i.drawing=!1}function b(S){i.drawing=S.mode==="draw_polygon"||S.mode==="direct_select"}function m(){var C;const S=n();if(!S||!e.value)throw new Error("Wait for the map to load.");if(!a){a=new Ci({displayControlsDefault:!1,controls:{},boxSelect:!1}),S.addControl(a,"bottom-left");for(const V of Et)S.on(V,g);S.on("draw.modechange",b);for(const V of S.getStyle().layers)V.id.startsWith("gl-draw-")&&(V.type==="fill"&&(S.setPaintProperty(V.id,"fill-color",G().mainArea),S.setPaintProperty(V.id,"fill-opacity",G().drawFillOpacity)),V.type==="line"&&(S.setPaintProperty(V.id,"line-color",G().mainArea),S.setPaintProperty(V.id,"line-width",3)));(C=i.region)!=null&&C.selection&&a.add(i.region.selection)}return a}function p(){const S=n();if(!(!a||!S)){for(const C of Et)S.off(C,g);S.off("draw.modechange",b),S.removeControl(a),a=null,i.drawing=!1}}function M(){if(!i.loading)try{const S=m();n().stop(),f(!i.region&&!i.snapshot),i.region=null,S.deleteAll(),h(),S.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(S){i.error=S.message}}function y(){a&&a.changeMode("simple_select"),i.drawing=!1}function x(){var S;(S=n())==null||S.stop(),p(),f(),i.region=null,i.error="",h()}async function v(S){const C=new AbortController,V=d;s=C,i.loading=!0,i.progress=0,i.error="";const N=()=>o||C.signal.aborted||V!==d;try{return await S({signal:C.signal,epoch:V,isStale:N})}catch(W){return C.abort(),!o&&V===d&&W.name!=="AbortError"&&(i.error=W.message),null}finally{s===C&&(s=null,o||(i.loading=!1))}}async function k(S,C,{signal:V,epoch:N,isStale:W}){if(V.throwIfAborted(),(l==null?void 0:l.source)===C&&S.bounds.every((I,A)=>A<2?I>=l.area.bounds[A]:I<=l.area.bounds[A]))return l.tiles;const E=n(),q=C==="osm"?"composite":"city-concordia",Z=on({map:E,sourceId:q,source:C,bounds:S.bounds})??await sn({sourceConfig:E.getStyle().sources[q],source:C,bounds:S.bounds,accessToken:r,signal:V,paddingTiles:1,onProgress:I=>{N===d&&(i.progress=I)}});if(W())throw new DOMException("Cancelled","AbortError");const ue=$e(Z.features);return l={source:C,area:S,tiles:Z,preview:ue},i.loadedArea=me({source:C,bounds:[...S.bounds],extentM:[...S.extentM],count:ue.features.length,fromMap:!!Z.fromMap}),h(),Z}function P(S){var N;const C=n(),V=C.getCanvas().clientWidth;(N=C.resize)==null||N.call(C),C.fitBounds([S.bounds.slice(0,2),S.bounds.slice(2,4)],{padding:V>=640?{top:40,bottom:40,left:Math.min(320,V*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function _(){if(i.loading||o)return null;const S=n();if(!S||!e.value)return i.error="Wait for the map to load.",null;const C=i.source;return v(async V=>{const N=qe/2,W=S.getCenter().wrap().toArray(),re=xe(W)([-N,-N]),E=We(re,xe(re)([qe,qe]));return P(E),await k(E,C,V),V.isStale()?null:(i.snapshot=null,t==null||t(),i.loadedArea)})}async function B(){if(i.loading||o)return null;!i.region&&(l==null?void 0:l.source)===i.source&&u(l.area.polygon);const S=n(),C=i.region,V=i.source;return!S||!e.value||!C?(i.error="Draw and finish a valid polygon first.",null):v(async N=>{const W=kt(C.selection??C.polygon);let re=W,E,q;for(let te=0;te<4;te++){if(q=await k(re,V,N),N.isStale())return null;E=Yi(q.features,W);const Z=q.coverageBounds;if(E.bounds.every((I,A)=>A<2?I>Z[A]+1e-8:I<Z[A]-1e-8)||!E.buildings.features.length)break;if(te===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");re=E}return E=ji(E),E.source=V,E.dataZoom=q.zoom,E.tileCount=q.tileCount,E.surroundings=$e(E.surroundings.features),E.warnings=E.warnings.filter(te=>!te.startsWith("Loaded map tiles only")),E.warnings.push((q.fromMap?"Buildings read from map tiles already loaded at zoom ":"Detailed tiles downloaded at zoom ")+q.zoom+"; provider data may still omit buildings.","Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground.","The simulation includes "+(E.buffer.fraction*100).toFixed(0)+"% open-ground padding per side; no additional buildings are selected in the buffer."),i.snapshot=me(E),i.region=me({origin:E.origin,bounds:E.bounds,extentM:E.extentM,polygon:E.polygon,selection:E.selection,mainDomain:E.mainDomain,buffer:E.buffer}),h(),P(E),t==null||t(),E})}function F(){s==null||s.abort(),p()}function H(){var S;h(),(S=i.region)!=null&&S.selection&&m()}function O(){o=!0,d++,s==null||s.abort(),p()}return oe(()=>i.source,()=>{f(),h(),i.error=""}),st(O),{state:i,startSelection:M,stopSelection:y,clearSelection:x,setSelection:u,captureRegion:B,loadBuildings:_,getPreview:c,restore:H,beforeStyleChange:F,dispose:O}}function cn(n){const[e,t]=n.extentM,r=Math.round(e/T),i=Math.round(t/T);if(r<1||i<1||!Number.isSafeInteger(r*i)||Math.abs(r*T-e)>1e-5||Math.abs(i*T-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const a=Ue(n.origin),o=new Float32Array(r*i);for(const l of n.buildings.features){const f=Number(l.properties.height);if(!Number.isFinite(f)||f<0||f>Ut)throw new Error("Invalid building height (0..240 metres).");if(!f)continue;const h=Math.max(1,Math.round(f/ne)),c=l.geometry.type==="Polygon"?[l.geometry.coordinates]:l.geometry.coordinates;for(const u of c){const g=u.map(p=>p.map(a));let b=1/0,m=-1/0;for(const p of g)for(const M of p)b=Math.min(b,M[1]),m=Math.max(m,M[1]);for(let p=Math.max(0,Math.ceil(b/T-.5));p<Math.min(i,Math.ceil(m/T-.5));p++){const M=(p+.5)*T,y=[];for(const x of g)for(let v=0,k=x.length-1;v<x.length;k=v++){const P=x[k],_=x[v];(P[1]<=M&&_[1]>M||_[1]<=M&&P[1]>M)&&y.push(P[0]+(M-P[1])*(_[0]-P[0])/(_[1]-P[1]))}y.sort((x,v)=>x-v);for(let x=0;x+1<y.length;x+=2){const v=Math.max(0,Math.ceil(y[x]/T-.5-1e-8)),k=Math.min(r,Math.ceil(y[x+1]/T-.5-1e-8));for(let P=v;P<k;P++)o[p*r+P]=Math.max(o[p*r+P],h)}}}}let s=0,d=0;for(const l of o)l>0&&s++,d=Math.max(d,l);return{layers:o,nx:r,ny:i,origin:[...n.origin],extentM:[...n.extentM],mainDomain:n.mainDomain,buffer:n.buffer,spacingM:T,layerSpacingM:ne,statistics:{builtCells:s,maximumHeightM:d*ne}}}function Be(n){const e=Number(n);return Number.isFinite(e)&&e>=rt&&e<=at}function un({heightM:n,directionDeg:e,speedMps:t}){const r=(l,f)=>{if(l===""||l===null||l===void 0||!Number.isFinite(Number(l)))throw new Error("Invalid "+f+".");return Number(l)},i=r(n,"height"),a=r(e,"direction"),o=r(t,"speed");if(i<it||i>nt)throw new Error("Height must be between 0.75 and 239.25 m.");if(!Be(o))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const s=Math.max(0,Math.min(159,Math.round(i/ne-.5))),d=(a%360+360)%360;return{layerIndex:s,heightM:(s+.5)*ne,directionDeg:d,thetaRad:d*Math.PI/180,speedMps:o}}class ft{constructor(e,t,r){this.adapter=e,this.device=t,this.useF16=r,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),r=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new ft(e,r,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,r){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:t,label:r});return a._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,t,r=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|r,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),a=new Int32Array(r),o=new Float32Array(r);e.forEach(([d,l],f)=>{d==="u"?i[f]=l:d==="i"?a[f]=l:o[f]=l});const s=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(s,0,r),this.scratch.push(s),s}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,r,i,a=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:r.map((d,l)=>({binding:l,resource:{buffer:d}}))}));const o=Math.max(1,Math.ceil(i/a)),s=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(o,s),Math.ceil(o/s))}async readFloat32(e,t){const r=t*4,i=this.buffer(r,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const o=new Float32Array(i.getMappedRange().slice(0,r));return i.unmap(),this.free(i),o}}function Qt(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const a=r[0],o=a>>>16&32768,s=a>>>23&255;let d=a&8388607;if(s===255){e[i]=o|31744|(d?1:0);continue}const l=s-127+15;if(l>=31){e[i]=o|31744;continue}if(l<=0){if(l<-10){e[i]=o;continue}d|=8388608;const h=14-l;let c=d>>>h;d>>>h-1&1&&(c+=1),e[i]=o|c;continue}let f=l<<10|d>>>13;d&4096&&(f+=1),e[i]=o|f}return e}function fn(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;t++){const r=n[t],i=r&32768?-1:1,a=r>>10&31,o=r&1023;a===0?e[t]=i*o*2**-24:a===31?e[t]=o?NaN:i*(1/0):e[t]=i*(1+o/1024)*2**(a-15)}return e}const se=180,ei=4,ti=7,ht=ei*ti,Ve=1.5,At=4,hn=1600,Ee=n=>n.toFixed(6),gn=640,pn=`
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
  let angles = ${se}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${Ee(At)};
  let gyr = sinT[angle] / ${Ee(At)};

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

  let cutoff = ${Ee(hn)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${gn}u; step++) {
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
}`,mn=`
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
  let angles = ${se}u;
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
  let out = (u.pixelOffset + localPixel) * ${ht}u
          + sig * ${ti}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,yn=n=>`${n==="f16"?`enable f16;
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
  let c = ${ht}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Ee(Ve)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`;class bn{constructor(e,t,r,i,a,o="f32"){this.context=e,this.store=o,this.ny=r,this.nx=i,this.margin=a,this.gy=r+2*a,this.gx=i+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const s=new Float32Array(this.gy*this.gx);for(let f=0;f<r;f++){const h=f*i,c=(f+a)*this.gx+a;for(let u=0;u<i;u++)s[c+u]=t[h+u]*Ve}this.heightBuffer=e.upload(s,"mddf.height");const d=new Float32Array(se),l=new Float32Array(se);for(let f=0;f<se;f++){const h=2*Math.PI*f/se;d[f]=Math.cos(h),l[f]=Math.sin(h)}this.cosBuffer=e.upload(d,"mddf.cos"),this.sinBuffer=e.upload(l,"mddf.sin"),this.rawBuffer=e.storage(ei*this.chunk*se*4,"mddf.raw"),this.fieldBuffer=e.storage(this.gy*this.gx*ht*4,"mddf.field"),this.tracePipeline=e.pipeline(pn),this.fourierPipeline=e.pipeline(mn),this.assemblePipeline=e.pipeline(yn(o)),this.currentLayer=-1}async compute(e,t={}){var o,s;const{context:r}=this,i=(e+.5)*Ve,a=this.gy*this.gx;for(let d=0;d<a;d+=this.chunk){(o=t.signal)==null||o.throwIfAborted();const l=Math.min(this.chunk,a-d),f=r.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",d],["u",l],["u",0],["u",0],["u",0],["f",i],["f",0],["f",0],["f",0]]),h=r.device.createCommandEncoder(),c=h.beginComputePass();r.dispatch(c,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,f],l*se),r.dispatch(c,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,f],l*4,64),c.end(),r.device.queue.submit([h.finish()]),await r.device.queue.onSubmittedWorkDone(),(s=t.onProgress)==null||s.call(t,(d+l)/a)}await r.device.queue.onSubmittedWorkDone(),r.releaseScratch(),this.currentLayer=e}assemble(e,t,r,i,a,o,s){const{context:d}=this,l=t.length/2,f=d.upload(t,"assemble.origins"),h=d.uniform([["u",l],["u",r.channels],["u",r.mddfChannels],["u",o],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",r.solidChannel],["i",r.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",r.coordYScale],["f",(a-r.coordZCentre)/r.coordZScale],["f",r.coordXCentre],["f",r.coordXScale],["f",0],["f",0]]),c=e.beginComputePass();return d.dispatch(c,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,f,r.tableBuffer,r.normBuffer,s,h],l*r.channels*o*o),c.end(),f}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.fieldBuffer])this.context.free(e)}}const Ge=`
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
`,wn=`
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
}`;function Dt(n,e,t,r=1e-5){const i=n==="f16"||e==="f16"?`enable f16;
`:"",a=s=>n==="f16"?`f32(${s})`:s,o=s=>e==="f16"?`f16(${s})`:s;return`${i}
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
  let inverse = inverseSqrt(max(partial[0] / ${t}.0, 0.0) + ${r.toExponential(12)});
  for (var i = lid.x; i < ${t}u; i += 256u) {
    Y[base + i] = ${o("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const He=32;function xn(n){const{store:e,patch:t,modes1:r,modes2:i}=n,a=t*t,o=2*r,s=e==="f16"?`enable f16;
`:"",d=f=>e==="f16"?`f32(${f})`:f,l=f=>e==="f16"?`f16(${f})`:f;return{conv1x1:`${s}${Ge}
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
  var acc = ${d("B[o]")};
  let xBase = b * u.cin * ${a}u + p;
  let wBase = o * u.cin;
  for (var i = 0u; i < u.cin; i++) {
    acc += ${d("W[wBase + i]")} * ${d("X[xBase + i * "+a+"u]")};
  }
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${l("acc")};
}`,gate:`${s}${Ge}
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
  let value = ${d("G[(b * 2u * u.mid + m) * "+a+"u + p]")};
  let gateValue = ${d("G[(b * 2u * u.mid + u.mid + m) * "+a+"u + p]")};
  H[g] = ${l("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`,instanceNorm:Dt(e,e,a),instanceNormScaled:Dt(e,e,a,1e-5/(He*He)),forwardColumns:`${s}
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
    let v = ${d("X[base + x]")};
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
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${a}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${i}u;
  for (var k = 0u; k < ${i}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${l("acc * "+1/He)};
}`,residual:`${s}${Ge}
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
  var acc = ${d("A[g]")} + ${d("B[g]")} + ${d("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${l("acc")};
}`}}function vn(n,e,t){const r=2*e,i=[];for(let u=0;u<e;u++)i.push(u);for(let u=n-e;u<n;u++)i.push(u);const a=new Float32Array(n*t),o=new Float32Array(n*t);for(let u=0;u<n;u++)for(let g=0;g<t;g++){const b=2*Math.PI*u*g/n;a[u*t+g]=Math.cos(b),o[u*t+g]=-Math.sin(b)}const s=new Float32Array(r*n),d=new Float32Array(r*n);for(let u=0;u<r;u++)for(let g=0;g<n;g++){const b=2*Math.PI*i[u]*g/n;s[u*n+g]=Math.cos(b),d[u*n+g]=-Math.sin(b)}const l=new Float32Array(n*r),f=new Float32Array(n*r);for(let u=0;u<n;u++)for(let g=0;g<r;g++){const b=2*Math.PI*i[g]*u/n;l[u*r+g]=Math.cos(b)/n,f[u*r+g]=Math.sin(b)/n}const h=new Float32Array(t*n),c=new Float32Array(t*n);for(let u=0;u<t;u++){const g=(u===0?1:2)/n;for(let b=0;b<n;b++){const m=2*Math.PI*u*b/n;h[u*n+b]=g*Math.cos(m),c[u*n+b]=-g*Math.sin(m)}}return{forwardCos:a,forwardSin:o,rowRe:s,rowIm:d,inverseRowRe:l,inverseRowIm:f,inverseColCos:h,inverseColSin:c}}class _n{constructor(e,t,r,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const o={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[l,f]of Object.entries(xn(o)))this.pipelines[l]=e.pipeline(f);this.contractPipeline=e.pipeline(wn);const s=l=>{const f=t.tensors[l];if(!f)throw new Error(`missing tensor ${l}`);return fn(new Uint16Array(r,f.offset,f.count))};this.read=s,this.tables={};for(const[l,f]of Object.entries(vn(this.patch,this.modes1,this.modes2)))this.tables[l]=e.upload(f,`fno.table.${l}`);this.weights={};const d=(l,f)=>{const h=s(f);this.weights[l]=this.store==="f16"?e.upload(Qt(h),`fno.${l}`):e.upload(h,`fno.${l}`)};d("p1w","p.mlp1.weight"),d("p1b","p.mlp1.bias"),d("p2w","p.mlp2.weight"),d("p2b","p.mlp2.bias"),d("q1w","q.mlp1.weight"),d("q1b","q.mlp1.bias"),d("q2w","q.mlp2.weight"),d("q2b","q.mlp2.bias");for(let l=0;l<this.layers;l++)d(`m1w${l}`,`mlp_layers.${l}.mlp1.weight`),d(`m1b${l}`,`mlp_layers.${l}.mlp1.bias`),d(`m2w${l}`,`mlp_layers.${l}.mlp2.weight`),d(`m2b${l}`,`mlp_layers.${l}.mlp2.bias`),d(`lw${l}`,`w_layers.${l}.weight`),d(`lb${l}`,`w_layers.${l}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,r=t.tucker;let i=r.core_shape.slice(),a=e.upload(this.read(`${r.core}.re`),"tucker.core.re"),o=e.upload(this.read(`${r.core}.im`),"tucker.core.im");for(const d of r.factors){const[l,f]=d.shape;if(i[d.mode]!==f)throw new Error(`factor ${d.name} does not match the core`);const h=i.slice();h[d.mode]=l;const c=h.reduce((v,k)=>v*k,1),u=h.slice(d.mode+1).reduce((v,k)=>v*k,1),g=e.storage(c*4,"tucker.re"),b=e.storage(c*4,"tucker.im"),m=e.upload(this.read(`${d.name}.re`),"tucker.f"),p=e.upload(this.read(`${d.name}.im`),"tucker.f"),M=e.uniform([["u",h[0]],["u",h[1]],["u",h[2]],["u",h[3]],["u",h[4]],["u",d.mode],["u",l],["u",f],["u",u],["u",0],["u",c],["u",0]]),y=e.device.createCommandEncoder(),x=y.beginComputePass();e.dispatch(x,this.contractPipeline,[a,o,m,p,g,b,M],c),x.end(),e.device.queue.submit([y.finish()]),e.free(a),e.free(o),e.free(m),e.free(p),a=g,o=b,i=h}e.releaseScratch();const s=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==s.join())throw new Error(`spectral stack is ${i} but ${s} was expected`);this.spectralRe=a,this.spectralIm=o}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,a=2*this.modes1,o=(d,l)=>t.storage(e*d*r*this.elementBytes,l),s=(d,l)=>t.storage(e*i*d*4,l);this.buffers={input:o(this.inputChannels,"fno.input"),x:o(i,"fno.x"),t1:o(i,"fno.t1"),t2:o(i,"fno.t2"),gates:o(4*i,"fno.gates"),hidden:o(2*i,"fno.hidden"),spectral:o(i,"fno.spectral"),local:o(i,"fno.local"),wide:o(2*i,"fno.wide"),output:o(this.outputChannels,"fno.output"),xRe:s(this.patch*this.modes2,"fno.xRe"),xIm:s(this.patch*this.modes2,"fno.xIm"),yRe:s(a*this.modes2,"fno.yRe"),yIm:s(a*this.modes2,"fno.yIm"),zRe:s(a*this.modes2,"fno.zRe"),zIm:s(a*this.modes2,"fno.zIm"),wRe:s(this.patch*this.modes2,"fno.wRe"),wIm:s(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,r=this.width,i=2*this.modes1,a=this.inputChannels+5*r+4*r+2*r+2*r+this.outputChannels,o=r*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(a*t*this.elementBytes+o)}encode(e,t){const{context:r,buffers:i,pipelines:a,tables:o}=this,s=this.width,d=this.patch*this.patch,l=2*this.modes1,f=e.beginComputePass(),h=(u,g,b,m,p=256)=>{r.dispatch(f,u,[...g,r.uniform(b)],m,p)},c=(u,g,b=a.instanceNorm)=>{f.setPipeline(b),f.setBindGroup(0,r.device.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:u}},{binding:1,resource:{buffer:g}}]})),f.dispatchWorkgroups(t*s)};h(a.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*s],["u",1]],t*2*s*d),h(a.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*s],["u",s],["u",0]],t*s*d);for(let u=0;u<this.layers;u++)c(i.x,i.t1),h(a.forwardColumns,[i.t1,o.forwardCos,o.forwardSin,i.xRe,i.xIm],[["u",t],["u",s],["u",0],["u",0]],t*s*this.patch*this.modes2),h(a.rowMix,[i.xRe,i.xIm,o.rowRe,o.rowIm,i.yRe,i.yIm],[["u",t],["u",s],["u",l],["u",this.patch]],t*s*l*this.modes2),h(a.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",s],["u",2*u],["u",0]],t*s*l*this.modes2),h(a.rowMix,[i.zRe,i.zIm,o.inverseRowRe,o.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",s],["u",this.patch],["u",l]],t*s*this.patch*this.modes2),h(a.inverseColumns,[i.wRe,i.wIm,o.inverseColCos,o.inverseColSin,i.t2],[["u",t],["u",s],["u",0],["u",0]],t*s*d),c(i.t2,i.t1,a.instanceNormScaled),h(a.conv1x1,[i.t1,this.weights[`m1w${u}`],this.weights[`m1b${u}`],i.gates],[["u",t],["u",s],["u",4*s],["u",0]],t*4*s*d),h(a.gate,[i.gates,i.hidden],[["u",t],["u",2*s],["u",0],["u",0]],t*2*s*d),h(a.conv1x1,[i.hidden,this.weights[`m2w${u}`],this.weights[`m2b${u}`],i.spectral],[["u",t],["u",2*s],["u",s],["u",0]],t*s*d),h(a.conv1x1,[i.x,this.weights[`lw${u}`],this.weights[`lb${u}`],i.local],[["u",t],["u",s],["u",s],["u",0]],t*s*d),h(a.residual,[i.spectral,i.local,i.x],[["u",t*s*d],["u",u<this.layers-1?1:0],["u",0],["u",0]],t*s*d);return h(a.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",s],["u",2*s],["u",1]],t*2*s*d),h(a.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*s],["u",this.outputChannels],["u",0]],t*this.outputChannels*d),f.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const Mn=n=>n.toFixed(6),Sn=n=>`${n==="f16"?`enable f16;
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
}`,kn=`
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
                      / ${Mn(Ve)});
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
}`;function Pn(n,e){if(!n)return e;if(!e)return n;const t=Math.min(n.y0,e.y0),r=Math.min(n.x0,e.x0);return{y0:t,x0:r,h:Math.max(n.y0+n.h,e.y0+e.h)-t,w:Math.max(n.x0+n.w,e.x0+e.w)-r}}function Cn(n,e,t){let r=1/0,i=-1/0;const a=o=>{r=Math.min(r,o),i=Math.max(i,o)};for(let o=0;o<4;o++){const s=n[o],d=n[(o+1)%4];s[1]>=e&&s[1]<=t&&a(s[0]);for(const l of[e,t])if((s[1]-l)*(d[1]-l)<0){const f=(l-s[1])/(d[1]-s[1]);a(s[0]+f*(d[0]-s[0]))}}return r<=i?[r,i]:null}class Fn{constructor(e,t,r,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new _n(e,t,r,this.batchSize),this.blendPipeline=e.pipeline(Sn(this.fno.store)),this.finalizePipeline=e.pipeline(kn),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,r=t.features,i=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,o=r.mddf_source_indices,s=new Uint32Array(o.length*4),d=new Float32Array(o.length*2);o.forEach((f,h)=>{const c=Math.floor(f/i),u=f%i,g=u>a?1:0,b=u===0?0:g?u-a:u;s.set([c*i+b,c*i+(b===0?0:a+b),b,g],h*4),d[h*2]=r.mddf_center[h],d[h*2+1]=r.mddf_scale[h]});const l=t.coordinates;return{channels:t.model.input_channels,mddfChannels:o.length,solidChannel:r.use_building_input?o.length:-1,coordChannel:o.length+(r.use_building_input?1:0),coordYScale:l.y_scale,coordZCentre:l.z_center,coordZScale:l.z_scale,coordXCentre:l.x_center,coordXScale:l.x_scale,tableBuffer:e.upload(s,"plan.table"),normBuffer:e.upload(d,"plan.norm")}}setCity(e,t,r){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),a=(t+2*i)*(r+2*i)*28*4,o=this.context.device.limits.maxStorageBufferBindingSize;if(a>o)throw new Error(`city ${r} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(o/2**20).toFixed(0)} MiB`);const s=new bn(this.context,e,t,r,i,this.fno.store);return this.city={field:s,ny:t,nx:r,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:s.gy,gx:s.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:r}=this.city,i=(t-1)/2,a=(r-1)/2,o=Math.cos(e),s=Math.sin(e),d=[[0,0],[r-1,0],[r-1,t-1],[0,t-1]].map(([y,x])=>{const v=y-a,k=x-i;return[a+v*o+k*s,i-v*s+k*o]}),l=Math.floor(Math.min(...d.map(y=>y[1]))),f=Math.ceil(Math.max(...d.map(y=>y[1]))),h=Math.floor(Math.min(...d.map(y=>y[0]))),c=Math.ceil(Math.max(...d.map(y=>y[0]))),u=c-h+1,g=Math.max(1,Math.ceil((u-this.patch)/this.stride)+1),b=g>1?(u-this.patch)/(g-1):0,m=d.map(([y,x])=>[x,y]),p=[],M=[];for(let y=0;y<g;y++){const x=Math.round(h+y*b),v=Cn(m,x,x+this.patch-1)||[l,l+this.patch-1],k=Math.floor(v[0]),P=Math.max(this.patch,Math.ceil(v[1])-k+1),_=Math.max(1,Math.ceil((P-this.patch)/this.stride)+1),B=_>1?(P-this.patch)/(_-1):0;M.push([p.length/2,_,x-h]);for(let F=0;F<_;F++)p.push(x,Math.round(k+F*B))}return{origins:new Float32Array(p),columns:M,columnCount:g,columnStride:b,syMin:l,sxMin:h,gridH:f-l+1,gridW:c-h+1,patchCount:p.length/2}}patchRect(e,t,r){let i=1/0,a=1/0,o=-1/0,s=-1/0;for(const[d,l,f]of e.columns)for(let h=0;h<l;h++){const c=d+h;if(c<t||c>=r)continue;const u=e.origins[c*2+1]-e.syMin;i=Math.min(i,u),a=Math.min(a,f),o=Math.max(o,u+this.patch),s=Math.max(s,f+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),a=Math.max(0,a),o=Math.min(e.gridH,o),s=Math.min(e.gridW,s),{y0:i,x0:a,h:Math.max(0,o-i),w:Math.max(0,s-a)}):null}async predict(e,t={}){var te,Z,ue;const{context:r,city:i}=this,a=this.tiling(e),o=this.metadata.model.output_channels,s=a.gridH*a.gridW,d=this.patch*this.patch,l=performance.now(),f=!!(t.shouldDraw&&t.onDraw),h=o+2,c=r.storage(a.patchCount*o*d*this.fno.elementBytes,"predict.patches"),u=new Int32Array(a.patchCount);for(let I=0;I<a.patchCount;I++)u[I]=a.origins[I*2+1]-a.syMin;const g=r.upload(u,"blend.origins"),b=r.upload(new Int32Array(a.columns.flat()),"blend.columns"),m=r.storage(s*o*4,"blend.field"),p=r.storage(s*4,"blend.weight"),M=r.storage(s*4,"blend.solid"),y=r.storage(f?s*4:4,"blend.finalWeight"),x=r.storage(f?s*h*4:4,"blend.packed"),v=this.metadata.target,k=r.upload(new Float32Array(v.center),"final.centre"),P=r.upload(new Float32Array(v.scale),"final.scale"),_={y0:0,x0:0,h:a.gridH,w:a.gridW},B=(I,A,K,fe)=>{const Fe=I.beginComputePass();r.dispatch(Fe,this.blendPipeline,[c,g,b,m,fe,r.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",o],["u",a.columnCount],["u",a.patchCount],["u",K],["u",0],["u",A.y0],["u",A.x0],["u",A.h],["u",A.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],A.h*A.w),Fe.end()},F=(I,A,K)=>{const fe=I.beginComputePass();r.dispatch(fe,this.finalizePipeline,[m,p,k,P,i.field.heightBuffer,M,y,x,r.uniform([["u",a.gridH],["u",a.gridW],["u",o],["u",K?1:0],["u",A.y0],["u",A.x0],["u",A.h],["u",A.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],A.h*A.w),fe.end()};if(f){const I=r.device.createCommandEncoder();B(I,_,a.patchCount,y),r.device.queue.submit([I.finish()]),(te=t.onStart)==null||te.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const H=2,O=[];let S=null;for(let I=0;I<a.patchCount;I+=this.batchSize){(Z=t.signal)==null||Z.throwIfAborted();const A=Math.min(this.batchSize,a.patchCount-I),K=r.device.createCommandEncoder(),fe=i.field.assemble(K,a.origins.subarray(I*2,(I+A)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),Fe=this.fno.encode(K,A);K.copyBufferToBuffer(Fe,0,c,I*o*d*this.fno.elementBytes,A*o*d*this.fno.elementBytes);let J=null;if(f){S=Pn(S,this.patchRect(a,I,I+A));const Xe=I+A>=a.patchCount;S&&S.h>0&&S.w>0&&(Xe||t.shouldDraw())&&(J=S,S=null,B(K,J,I+A,p),F(K,J,!0))}if(r.device.queue.submit([K.finish()]),r.free(fe),await r.device.queue.onSubmittedWorkDone(),(ue=t.onProgress)==null||ue.call(t,(I+A)/a.patchCount),f&&(O.push(r.device.queue.onSubmittedWorkDone()),O.length>H&&await O.shift()),J){const Xe=await r.readFloat32(x,J.h*J.w*h);t.onDraw({x0:J.x0,y0:J.y0,width:J.w,height:J.h,stride:h,channels:o,theta:e,values:Xe,readyCount:I+A,patchCount:a.patchCount})}}const C=r.device.createCommandEncoder();B(C,_,a.patchCount,p),F(C,_,!1),r.device.queue.submit([C.finish()]);const V=await r.readFloat32(m,s*o),N=await r.readFloat32(M,s),W=await r.readFloat32(p,s),re=performance.now()-l;let E=0,q=0;for(let I=0;I<s;I++)if(N[I]!==2){if(W[I]<=1e-6){E+=1;continue}for(let A=0;A<o;A++)if(!Number.isFinite(V[I*o+A])){q+=1;break}}for(const I of[c,m,p,M,g,b,k,P,y,x])r.free(I);return r.releaseScratch(),{values:V,solid:N,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:v.channel_names,milliseconds:re,uncovered:E,nonFinite:q,insideCells:s}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}}function In(n,e){var t,r,i,a,o,s,d,l,f;if(n.dtype!=="float16"||n.total_bytes!==e||((t=n.grid)==null?void 0:t.horizontal_spacing_m)!==4||((r=n.grid)==null?void 0:r.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=n.model)==null?void 0:i.input_channels)!==24||((a=n.model)==null?void 0:a.output_channels)!==5||((s=(o=n.inference)==null?void 0:o.patch)==null?void 0:s.join())!=="64,64"||((l=(d=n.target)==null?void 0:d.channel_names)==null?void 0:l.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const h of Object.values(n.tensors??{}))if(!Number.isInteger(h.offset)||h.offset<0||h.offset%2||!Number.isInteger(h.count)||h.count<=0||h.offset+h.count*2>e||!Array.isArray(h.shape)||h.shape.some(c=>!Number.isInteger(c)||c<1)||h.shape.reduce((c,u)=>c*u,1)!==h.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(n.tensors??{}).length||!Number.isFinite((f=n.wind)==null?void 0:f.reference_speed_m_s)||n.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function Bn(n){if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<1||n.height<1||n.values.length!==n.width*n.height*5||n.solid.length!==n.width*n.height)throw new Error("Invalid prediction shape.");for(let e=0;e<n.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(n.values[e*5+t])||(n.solid[e]=2,n.values[e*5+t]=0)}function En(){const n=lt({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,downloading:!1});let e=null,t=null,r=null,i=null,a=null,o=!1,s=0;const d=new AbortController;function l(){try{t==null||t.destroy()}finally{e==null||e.device.destroy(),t=null,e=null,a=null}}async function f(){if(t)return;n.stage="Loading model";const b="/cityffdv2-demo/flume/",[m,p,M]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async y=>{const x=await fetch(b+y,{signal:d.signal});if(!x.ok)throw new Error("Could not load "+y+" (HTTP "+x.status+").");return y.endsWith(".bin")?x.arrayBuffer():x.json()}));In(m,p.byteLength),d.signal.throwIfAborted(),e=await ft.create(),d.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",y=>{n.error="WebGPU: "+y.error.message.split(`
`)[0]}),e.device.lost.then(y=>{!o&&y.reason!=="destroyed"&&(n.error="GPU device lost. Run again to initialize a new session.",n.prediction=null,t=null,e=null,a=null)}),r=m,i=M,t=new Fn(e,r,p,{batchSize:4})}async function h(b,m){if(o||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const p=++s;try{if(await f(),o||p!==s||(b!==a&&(t.setCity(b.layers,b.ny,b.nx),a=b),n.stage="Preparing geometry · MDDF",await t.setHeight(m.layerIndex,{signal:d.signal,onProgress:x=>{!o&&p===s&&(n.progress=x*.25)}}),o||p!==s))return null;n.stage="Predicting wind · FNO";const M=await t.predict(m.thetaRad,{signal:d.signal,onProgress:x=>{!o&&p===s&&(n.progress=.25+x*.75)}});if(d.signal.throwIfAborted(),o||p!==s)return null;if(n.error)throw new Error(n.error);Bn(M);const y={...M,grid:b,settings:{...m},referenceSpeed:r.wind.reference_speed_m_s,modelLabel:r.label,colorbar:i,inputRevision:p};return n.prediction=me(y),n.progress=1,n.stage="Prediction ready",y}catch(M){return!o&&p===s&&(n.error=M.message,n.stage="Prediction failed",n.prediction=null),l(),null}finally{o?l():n.busy=!1}}async function c(){if(!t||!n.prediction||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{const b=t.city.field,m=await e.readFloat32(b.fieldBuffer,b.gy*b.gx*28);if(o)throw new Error("The page was closed.");return{values:m,ny:b.gy,nx:b.gx,margin:b.margin,layerIndex:t.city.layerIndex}}finally{n.downloading=!1,o&&l()}}function u(){s++,n.prediction=null,n.error="",n.progress=0,n.stage="Ready"}function g(){o=!0,s++,d.abort(),!n.busy&&!n.downloading&&l()}return st(g),{state:n,run:h,readMddf:c,invalidate:u,dispose:g}}const ae="flume-retained-buildings",Rt="flume-retained-selected";function An(n,e){let t=null,r=null,i=null,a=null,o=null;function s(){if(t){n.getSource(ae)?i!==a&&n.getSource(ae).setData(i):n.addSource(ae,{type:"geojson",data:i,maxzoom:22,tolerance:0}),a=i;for(const[c,u]of[[ae,!1],[Rt,!0]]){const g=t.filters[u?"selected":"surroundings"],b=u?1:t.surroundingsOpacity;n.getLayer(c)?n.setFilter(c,g):n.addLayer({id:c,type:"fill-extrusion",source:ae,maxzoom:Pe,filter:g,layout:{visibility:"visible"},paint:{"fill-extrusion-color":u?G().selectedBuildings:G().previewBuildings,"fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":b}}),n.setPaintProperty(c,"fill-extrusion-opacity",b),n.setLayoutProperty(c,"visibility",u||t.showSurroundings?"visible":"none")}}}function d(){if(!(!t||n.getZoom()<Pe||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const c=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(u=>!u.tile||u.tile.z>=(t.dataZoom??Pe));i=$e([...i.features,...c]),s()}catch(c){e==null||e(c)}}function l(c){!t||c!=null&&c.sourceId&&c.sourceId!==t.sourceId||(clearTimeout(o),o=setTimeout(d,120))}function f(c){var u;(r!==c.collection||(t==null?void 0:t.sourceId)!==c.sourceId||(t==null?void 0:t.sourceLayer)!==c.sourceLayer)&&(i=$e(((u=c.collection)==null?void 0:u.features)??[]),r=c.collection),t=c,s(),l()}function h(){clearTimeout(o),t=null,r=null,i=null,a=null;for(const c of[Rt,ae])n.getLayer(c)&&n.removeLayer(c);n.getSource(ae)&&n.removeSource(ae)}return n.on("sourcedata",l),n.on("moveend",l),{update:f,clear:h,dispose(){n.off("sourcedata",l),n.off("moveend",l),h()}}}const Dn=[1.5,3],pe=8e3,de={white:{pixelsPerParticle:680,maxParticles:1200,minParticles:150,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1},tinted:{pixelsPerParticle:340,maxParticles:2400,minParticles:300,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1}},Rn=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,$n=`
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
}`,Vn=`
attribute vec2 segment;
attribute vec3 tint;
attribute vec4 ends;          // the segment's two endpoints, in buffer pixels
varying vec3 vTint;
varying vec4 vEnds;
void main() {
  vTint = tint;
  vEnds = ends;
  gl_Position = vec4(segment, 0.0, 1.0);
}`,Tn=`
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
}`,Ln=`
#include <clipping_planes_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}`,zn=`
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
}`;class Nn{constructor(e){this.renderer=e,this.enabled=!1,this.field=null,this.particles=[],this.viewKey="",this.width=1,this.height=1,this.stats={target:0,drawn:0,placed:0,bounds:null},this.settings={white:{...de.white},tinted:{...de.tinted}},this.mode="white",this.palette=null,this.tintRange=null,this.lastValue=0,this.ready=1,this.readyX=1/0,this.extent={x0:0,y0:0,x1:0,y1:0},this.degenerate=!1,this.camera=new Fi(-1,1,1,-1,0,1),this.quad=new we(new De(2,2),null),this.quad.frustumCulled=!1,this.quadScene=new Je().add(this.quad),this.targets=null,this.fade=new Se({vertexShader:Rn,fragmentShader:$n,uniforms:{previous:{value:null},drop:{value:.02},cutoff:{value:de.white.trailCutoff}},depthTest:!1,depthWrite:!1,side:ke}),this.vertices=new Float32Array(pe*12),this.tints=new Float32Array(pe*18),this.ends=new Float32Array(pe*24);const t=new Lt;t.setAttribute("segment",new _e(this.vertices,2).setUsage(je)),t.setAttribute("tint",new _e(this.tints,3).setUsage(je)),t.setAttribute("ends",new _e(this.ends,4).setUsage(je)),t.setAttribute("position",new _e(new Float32Array(pe*18),3)),this.lineGeometry=t,this.lines=new we(t,new Se({vertexShader:Vn,fragmentShader:Tn,uniforms:{opacity:{value:de.white.lineOpacity},halfWidth:{value:de.white.lineWidth*.5}},depthTest:!1,depthWrite:!1,transparent:!0,side:ke})),this.lines.frustumCulled=!1,this.lineScene=new Je().add(this.lines),this.material=new Se({vertexShader:Ln,fragmentShader:zn,uniforms:{trail:{value:null},resolution:{value:new Re(1,1)},strength:{value:de.white.strength},solid:{value:de.white.solidFraction}},transparent:!0,depthWrite:!1,side:ke,clipping:!0}),this.mesh=new we(new De(1,1),this.material),this.mesh.visible=!1,this.planeSize=new Re(1,1),this.plane=new Me,this.ray=new Ii,this.scratch=new X,this.matrix=new Qe}setResolution(e,t){if(!(e===this.width&&t===this.height)){this.width=Math.max(1,Math.round(e)),this.height=Math.max(1,Math.round(t));for(const r of this.targets||[])r.dispose();this.targets=[0,1].map(()=>new Bi(this.width,this.height,{minFilter:wt,magFilter:wt,format:et,type:zt,depthBuffer:!1,stencilBuffer:!1})),this.material.uniforms.resolution.value.set(this.width,this.height),this.reset()}}setPlane(e,t){this.planeSize.set(e,t)}setField(e,t){this.field=e,this.metresPerCell=t,this.ready=1,this.readyX=1/0,this.reset()}setProgress(e,t){this.ready=Math.max(0,Math.min(1,e)),this.readyX=Math.max(this.readyX===1/0?0:this.readyX,t)}replaceField(e){this.field=e,this.ready=1,this.readyX=1/0}get p(){return this.settings[this.mode]||this.settings.white}setMode(e){e!=="white"&&e!=="tinted"||e!==this.mode&&(this.mode=e,this.applyUniforms())}setParam(e,t,r){const i=this.settings[e];!i||!(t in i)||!Number.isFinite(r)||(i[t]=r,e===this.mode&&this.applyUniforms())}applyUniforms(){const e=this.p;this.fade.uniforms.cutoff.value=e.trailCutoff,this.lines.material.uniforms.halfWidth.value=e.lineWidth*.5,this.lines.material.uniforms.opacity.value=e.lineOpacity,this.material.uniforms.strength.value=e.strength,this.material.uniforms.solid.value=e.solidFraction}setTinting(e,t){this.palette=e||null,this.tintRange=t||null}tintFor(e,t){if(!this.palette||!this.tintRange)return t[0]=1,t[1]=1,t[2]=1,t;const[r,i]=this.tintRange,a=Math.min(1,Math.max(0,(e-r)/Math.max(1e-6,i-r))),o=Math.min(255,Math.round(a*255))*4;return t[0]=this.palette[o]/255,t[1]=this.palette[o+1]/255,t[2]=this.palette[o+2]/255,t}reset(){if(this.particles.length=0,this.viewKey="",!this.targets)return;const e=this.renderer,t=e.getRenderTarget(),r=new tt,i=e.getClearAlpha();e.getClearColor(r),e.setClearColor(0,0);for(const a of this.targets)e.setRenderTarget(a),e.clear(!0,!1,!1);e.setClearColor(r,i),e.setRenderTarget(t)}sample(e,t,r){const i=this.field;if(!i||!Number.isFinite(e)||!Number.isFinite(t)||e<.5||t<.5||e>i.width-.5||t>i.height-.5)return null;const a=Math.min(i.width-1,Math.max(0,Math.round(e-.5))),o=Math.min(i.height-1,Math.max(0,Math.round(t-.5)));if(i.solid[o*i.width+a]!==0)return null;const s=Math.min(i.width-1,Math.max(0,e-.5)),d=Math.min(i.height-1,Math.max(0,t-.5)),l=Math.floor(s),f=Math.floor(d),h=Math.min(l+1,i.width-1),c=Math.min(f+1,i.height-1),u=s-l,g=d-f,b=m=>{const p=m[f*i.width+l],M=m[f*i.width+h],y=m[c*i.width+l],x=m[c*i.width+h];return(p*(1-u)+M*u)*(1-g)+(y*(1-u)+x*u)*g};return r[0]=b(i.u)/this.metresPerCell,r[1]=b(i.v)/this.metresPerCell,this.lastValue=i.value?b(i.value):0,Math.hypot(r[0],r[1])>.001?r:null}visibleBounds(e,t){const r=this.field,i={x0:.5,y0:.5,x1:r.width-.5,y1:r.height-.5},a=this.scratch.set(0,0,1).applyQuaternion(t.quaternion);this.plane.setFromNormalAndCoplanarPoint(a.clone(),t.position);let o=1/0,s=1/0,d=-1/0,l=-1/0;for(const[f,h]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const c=new X(f,h,-1).unproject(e),u=new X(f,h,1).unproject(e);this.ray.set(c,u.sub(c).normalize());const g=this.ray.intersectPlane(this.plane,new X);if(!g)return i;const b=t.worldToLocal(g),m=(b.x/this.planeSize.x+.5)*r.width,p=(b.y/this.planeSize.y+.5)*r.height;o=Math.min(o,m),d=Math.max(d,m),s=Math.min(s,p),l=Math.max(l,p)}return{x0:Math.max(i.x0,o),x1:Math.min(i.x1,d),y0:Math.max(i.y0,s),y1:Math.min(i.y1,l)}}respawn(e,t){e.age=0,e.life=0,e.x=NaN,e.y=NaN,(t.x1<=t.x0||t.y1<=t.y0)&&(t={x0:.5,y0:.5,x1:Math.min(this.readyX,this.field.width-.5),y1:this.field.height-.5},this.degenerate=!0);const r=[0,0];for(let i=0;i<40;i++){const a=t.x0+Math.random()*(t.x1-t.x0),o=t.y0+Math.random()*(t.y1-t.y0);if(this.sample(a,o,r)){e.x=a,e.y=o;const[s,d]=Dn;return e.life=this.p.trailSeconds*(s+Math.random()*(d-s)),!0}}return!1}toPixels(e,t,r,i){const a=this.field,o=this.scratch.set((e/a.width-.5)*this.planeSize.x,(t/a.height-.5)*this.planeSize.y,0);return o.applyMatrix4(this.matrix),i[0]=(o.x*.5+.5)*this.width,i[1]=(.5-o.y*.5)*this.height,i}track(e,t){const r=this.extent;e<r.x0&&(r.x0=e),e>r.x1&&(r.x1=e),t<r.y0&&(r.y0=t),t>r.y1&&(r.y1=t)}addSegment(e,t,r,i){const a=r[0]-t[0],o=r[1]-t[1],s=Math.hypot(a,o);if(s===0)return e;const d=this.p.lineWidth*.5,l=-o*d/s,f=a*d/s,h=a*d/s,c=o*d/s,u=t[0]-h,g=t[1]-c,b=r[0]+h,m=r[1]+c,p=2/this.width,M=2/this.height,y=(u+l)*p-1,x=1-(g+f)*M,v=(u-l)*p-1,k=1-(g-f)*M,P=(b+l)*p-1,_=1-(m+f)*M,B=(b-l)*p-1,F=1-(m-f)*M;this.vertices.set([y,x,v,k,P,_,P,_,v,k,B,F],e);const H=e*3/2,O=e*2,S=[t[0],this.height-t[1],r[0],this.height-r[1]];for(let C=0;C<6;C++)this.tints.set(i,H+C*3),this.ends.set(S,O+C*4);return this.track(y,x),this.track(P,_),e+12}step(e,t,r){if(!this.enabled||!this.field||!this.targets||!r)return!1;if(e>.1)return this.reset(),!1;r.updateWorldMatrix(!0,!1),this.matrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(r.matrixWorld);const i=t.projectionMatrix.elements.concat(t.matrixWorldInverse.elements).map(p=>p.toFixed(4)).join(",");i!==this.viewKey&&(this.reset(),this.viewKey=i);const a=this.visibleBounds(t,r),o={x0:a.x0,y0:a.y0,y1:a.y1,x1:Math.min(a.x1,this.readyX)},s=(a.x1-a.x0)*(a.y1-a.y0)/(this.field.width*this.field.height),d=this.p,l=Math.min(d.maxParticles,pe,Math.round(this.width*this.height/Math.max(1,d.pixelsPerParticle))),f=Math.min(pe,Math.round(Math.max(d.minParticles,l*Math.sqrt(Math.max(0,Math.min(1,s))))*this.ready));for(;this.particles.length<f;){const p={};this.respawn(p,o),this.particles.push(p)}this.particles.length>f&&(this.particles.length=f),this.extent={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};const h=this.p.timeScale*e,c=[0,0],u=[0,0],g=[0,0],b=[1,1,1];let m=0;for(const p of this.particles){if(p.age>=p.life&&this.respawn(p,o),!this.sample(p.x,p.y,c)){this.respawn(p,o);continue}const M=p.x+.5*c[0]*h,y=p.y+.5*c[1]*h;if(!this.sample(M,y,c)){this.respawn(p,o);continue}const x=p.x+c[0]*h,v=p.y+c[1]*h;if(x<a.x0||x>a.x1||v<a.y0||v>a.y1||!this.sample(x,v,c)){this.respawn(p,o);continue}this.tintFor(this.lastValue,b),m=this.addSegment(m,this.toPixels(p.x,p.y,r,u),this.toPixels(x,v,r,g),b),p.x=x,p.y=v,p.age+=e}return this.stats={target:f,drawn:m/12,placed:this.particles.filter(p=>Number.isFinite(p.x)).length,bounds:[a.x0,a.y0,a.x1,a.y1].map(p=>p.toFixed(0)).join("..")},this.draw(e,m),!0}draw(e,t){const r=this.renderer,i=r.getRenderTarget(),a=r.autoClear;r.autoClear=!1,this.fade.uniforms.previous.value=this.targets[0].texture,this.fade.uniforms.drop.value=Math.max(1e-4,e/Math.max(.01,this.p.trailSeconds)),this.quad.material=this.fade,r.setRenderTarget(this.targets[1]),r.render(this.quadScene,this.camera),t>0&&(this.lineGeometry.setDrawRange(0,t/2),this.lineGeometry.attributes.segment.needsUpdate=!0,this.lineGeometry.attributes.tint.needsUpdate=!0,this.lineGeometry.attributes.ends.needsUpdate=!0,r.render(this.lineScene,this.camera)),this.targets.reverse(),this.material.uniforms.trail.value=this.targets[0].texture,r.autoClear=a,r.setRenderTarget(i)}dispose(){for(const e of this.targets||[])e.dispose();this.lineGeometry.dispose(),this.lines.material.dispose(),this.material.dispose(),this.fade.dispose(),this.quad.geometry.dispose(),this.mesh.geometry.dispose()}}const ii={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},Ze=new Map;function Un(n){if(!Ze.has(n)){const e=ii[n],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);Ze.set(n,t)}return Ze.get(n)}function Wn(n,e){const t=Un(ii[n]?n:"viridis"),r=Math.min(1,Math.max(0,e))*255,i=Math.floor(r),a=Math.min(255,i+1),o=r-i;return[t[i*3]*(1-o)+t[a*3]*o,t[i*3+1]*(1-o)+t[a*3+1]*o,t[i*3+2]*(1-o)+t[a*3+2]*o]}const On=1,Xn=new Set(["u","v","w"]),jn=6e4,Te=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis"},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno"},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],le={u:0,w:1,v:2,T:3,tke:4};function gt(n,e,t,r){const i=n.values,a=e*5,o=i[a+le.u]*r,s=i[a+le.v]*r;switch(t){case"u":return o;case"v":return s;case"w":return i[a+le.w]*r;case"speed":{const d=i[a+le.w]*r;return Math.sqrt(o*o+s*s+d*d)}case"T":return i[a+le.T];case"tke":return i[a+le.tke]*r*r;default:return 0}}function Yn(n,e,t,r,i){if(e==="T")return n.fixed.T.slice();const o=(n.quantiles[r]||n.quantiles[Object.keys(n.quantiles)[0]])[e],s=Math.min(o.length-1,Math.max(0,Math.round(t))),d=o[s]*(e==="tke"?i*i:i);return n.shape[e]==="symmetric"?[-d,d]:[0,d]}function ni(n,e){return Wn(n,e)}function qn(n,e){const t=n.solid.length,r=new Float32Array(t*4);for(let i=0;i<t;i++){const a=i*4;r[a]=gt(n,i,e,1),r[a+1]=On}return Qt(r)}function $t(n){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,i,a]=ni(n,t/255);e[t*4]=r,e[t*4+1]=i,e[t*4+2]=a,e[t*4+3]=255}return e}function Gn(n,e,t){if(e==="T")return null;const r=e,i=n.solid.length,a=Math.max(1,Math.floor(i/jn)),o=Xn.has(r),s=[];for(let f=0;f<i;f+=a){const h=gt(n,f,r,1);s.push(o?Math.abs(h):h)}if(s.length<32)return null;s.sort((f,h)=>f-h);const d=Math.min(s.length-1,Math.floor(s.length*(Number(t)/100))),l=s[d];return l>0?o?[-l,l]:[0,l]:null}function Hn(n,e){const t=n.solid.length,r=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t);for(let o=0;o<t;o++)a[o]=gt(n,o,e,1),r[o]=n.values[o*5+le.u],i[o]=n.values[o*5+le.v];return{u:r,v:i,value:a,solid:new Uint8Array(t),width:n.width,height:n.height}}function Zn(n,e,t){const r=(n.grid.nx-1)/2,i=(n.grid.ny-1)/2,a=n.originX+e-r,o=n.originY+t-i,s=Math.cos(n.theta),d=Math.sin(n.theta);return[(r+a*s-o*d+.5)*4,(i+a*d+o*s+.5)*4]}function Kn(n){const e=n.values.slice(),t=n.settings.speedMps/n.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const Jn=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,Qn=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function er(n,e,t){let r,i,a,o,s,d,l,f,h,c,u=0;const g=new Qe,b=new Qe,m=Nt.MercatorCoordinate.fromLngLat(n.grid.origin),p=m.meterInMercatorCoordinateUnits(),[M,y]=Zn(n,n.width/2-.5,n.height/2-.5),x=[new Me(new X(1,0,0),0),new Me(new X(-1,0,0),n.grid.nx*T),new Me(new X(0,1,0),0),new Me(new X(0,-1,0),n.grid.ny*T)];function v(){var H;if(!i)return;f==null||f.dispose(),h==null||h.dispose();const k=Te.find(O=>O.id===e.variable)??Te[0],P=qn(n,k.id);f=new xt(P,n.width,n.height,et,zt),f.minFilter=f.magFilter=vt,f.needsUpdate=!0,h=new xt($t(k.ramp),256,1,et),h.colorSpace=Di,h.minFilter=h.magFilter=vt,h.needsUpdate=!0;const _=Number(e.speedMps)/n.referenceSpeed,B=k.id==="T"?1:k.id==="tke"?_*_:_,F=((H=Gn(n,k.id,"99.9"))==null?void 0:H.map(O=>O*B))??Yn(n.colorbar,k.id,n.settings.layerIndex,"99.9",Number(e.speedMps)/n.referenceSpeed);c.uniforms.field.value=f,c.uniforms.palette.value=h,c.uniforms.range.value.set(...F),s.visible=e.particles!=="tinted",l.setMode(e.particles==="tinted"?"tinted":"white"),l.enabled=e.particles!=="off",l.setField(Hn(n,k.id),T),l.setTinting(e.particles==="tinted"?$t(k.ramp):null,e.particles==="tinted"?F:null),l.mesh.visible=l.enabled,t==null||t({low:F[0],high:F[1],...k}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:v,onAdd(k,P){r=k,a=new Je,o=new Ei,i=new Ai({canvas:r.getCanvas(),context:P,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,c=new Se({vertexShader:Jn,fragmentShader:Qn,uniforms:{field:{value:null},palette:{value:null},range:{value:new Re(0,1)}},transparent:!0,depthWrite:!1,side:ke,clipping:!0,clippingPlanes:x}),s=new we(new De(n.width*T,n.height*T),c),s.position.set(M,y,n.settings.heightM),s.rotation.z=n.theta,s.frustumCulled=!1,a.add(s),l=new Nn(i),l.setPlane(n.width*T,n.height*T),l.mesh.geometry.dispose(),l.mesh.geometry=s.geometry.clone(),l.mesh.position.copy(s.position),l.mesh.rotation.copy(s.rotation),l.material.clippingPlanes=x,l.mesh.renderOrder=3,l.mesh.frustumCulled=!1,a.add(l.mesh),d=tr(n.grid,n.settings.heightM),d&&a.add(d),v()},render(k,P){const _=performance.now(),B=Math.min(u?(_-u)/1e3:0,.05);u=_,g.makeTranslation(m.x,m.y,m.z).scale(new X(p,-p,p)),o.projectionMatrix.copy(b.fromArray(P)).multiply(g),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),i.resetState(),i.setViewport(0,0,k.drawingBufferWidth,k.drawingBufferHeight),l.setResolution(k.drawingBufferWidth,k.drawingBufferHeight),l.enabled&&!e.paused&&l.step(B*(Number(e.speedMps)/n.referenceSpeed),o,s),i.resetState(),i.setViewport(0,0,k.drawingBufferWidth,k.drawingBufferHeight),i.render(a,o),l.enabled&&!e.paused&&r.triggerRepaint()},onRemove(){f==null||f.dispose(),h==null||h.dispose(),s==null||s.geometry.dispose(),c==null||c.dispose(),l==null||l.dispose(),d==null||d.geometry.dispose(),d==null||d.material.dispose(),i==null||i.dispose(),r=null,i=null}}}function tr(n,e){if(!n.mainDomain)return null;const t=Ue(n.origin),r=[...t(n.mainDomain.bounds.slice(0,2)),...t(n.mainDomain.bounds.slice(2,4))],i=new Se({uniforms:{extent:{value:new Re(n.nx*T,n.ny*T)},mainBounds:{value:new Ri(...r)},mainColour:{value:new tt(G().mainArea)},bufferColour:{value:new tt(G().bufferArea)}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:ke}),a=new we(new De(n.nx*T,n.ny*T),i);return a.name="flume-domain-overlay",a.position.set(n.nx*T/2,n.ny*T/2,e+.05),a.renderOrder=4,a.frustumCulled=!1,a}const Ke="flume-field",ve="flume-buildings";function ri(n){return{"city-concordia-2d":!1,"city-concordia-3d":n==="concordia","city-osm-3d":n==="osm"}}function ir(n,e,t){let r=null,i=null;const a=new Map,o=An(n,t);function s(){n.getLayer(Ke)&&n.removeLayer(Ke),r=null}function d(){for(const[h,c]of a)n!=null&&n.getLayer(h)&&(n.setLayoutProperty(h,"visibility",c.visibility),n.setPaintProperty(h,c.property,c.opacity),n.setFilter(h,c.filter),n.setLayerZoomRange(h,c.minzoom,c.maxzoom),c.color!==void 0&&n.setPaintProperty(h,"fill-extrusion-color",c.color));a.clear()}function l(h){for(const c of n.getStyle().layers){if(c.id.startsWith("flume-"))continue;const u=c.type==="fill-extrusion"?"fill-extrusion-opacity":c["source-layer"]==="building"&&["fill","line"].includes(c.type)?c.type+"-opacity":null;u&&(a.set(c.id,{visibility:n.getLayoutProperty(c.id,"visibility")??"visible",property:u,opacity:n.getPaintProperty(c.id,u)??1,filter:n.getFilter(c.id)??null,minzoom:c.minzoom??0,maxzoom:c.maxzoom??24,color:c.type==="fill-extrusion"?n.getPaintProperty(c.id,"fill-extrusion-color")??null:void 0}),n.setPaintProperty(c.id,u,Mt),c.type==="fill-extrusion"&&n.setPaintProperty(c.id,"fill-extrusion-color",G().previewBuildings),h||n.setLayoutProperty(c.id,"visibility","none"))}}function f({source:h,input:c,prediction:u,preview:g,display:b}){if(u!==i&&(s(),i=u),!u&&n.getLayer(ve)&&n.removeLayer(ve),d(),$i(n,ri(h)),!u){o.clear(),ot(n,g);return}ot(n,null);const m=Vi.find(M=>M.id===(h==="osm"?"city-osm-3d":"city-concordia-3d")),p=Yt(c.buildings.features,n.getFilter(m.id));l(b.showSurroundings),n.setFilter(m.id,p.surroundings),n.setLayerZoomRange(m.id,Pe,m.layer.maxzoom??24),n.getLayer(ve)?n.setFilter(ve,p.selected):n.addLayer({...m.layer,id:ve,minzoom:Pe,layout:{visibility:"visible"},filter:p.selected,paint:{...m.layer.paint,"fill-extrusion-color":G().selectedBuildings,"fill-extrusion-opacity":1}}),o.update({sourceId:m.layer.source,sourceLayer:m.layer["source-layer"],collection:g,dataZoom:c.dataZoom,filters:p,surroundingsOpacity:Mt,showSurroundings:b.showSurroundings}),n.getLayer(Ke)||(r=er(u,b,e),n.addLayer(r)),n.triggerRepaint()}return{update:f,configure(){r==null||r.configure()},beforeStyleChange(){s(),i=null,a.clear()},dispose(){s(),o.dispose(),a.clear()}}}function be(n,e,t,r,i){if(t.reduce((s,d)=>s*d,1)!==e.length)throw new Error("Invalid "+n+" shape.");const a=new Uint8Array(e.length*4),o=new DataView(a.buffer);for(let s=0;s<e.length;s++){if(!Number.isFinite(e[s]))throw new Error("Cannot export non-finite "+n);o.setFloat32(s*4,e[s],!0)}return{name:n,content:a,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function pt(n,e,t,r){var a,o,s;const i={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((a=n.selection)==null?void 0:a.geometry)??((o=n.polygon)==null?void 0:o.geometry),computationalDomain:(s=n.polygon)==null?void 0:s.geometry,mainDomain:n.mainDomain,buffer:n.buffer,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",...r?{mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}}:{},files:Object.fromEntries(t.map(d=>[d.name,d.description]))};return[{name:"metadata.json",content:JSON.stringify(i,null,2)},...t.map(({name:d,content:l})=>({name:d,content:l}))]}function ai(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(i=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>i+"_"+a));return[be("mddf.f32.bin",e.values,[e.ny,e.nx,28],r,"m"),be("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function oi(n,e=!1){const t=Kn(n),r=n.width*n.height,i=new Float32Array(r*3),a=new Float32Array(r),o=new Float32Array(r),s=new Float32Array(r);for(let d=0;d<r;d++){const l=d*5;i.set([t[l],t[l+2],t[l+1]],d*3),a[d]=t[l+3],o[d]=t[l+4],s[d]=Math.hypot(t[l],t[l+1],t[l+2])}return[be("velocity.f32.bin",i,[n.height,n.width,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:[n.height,n.width],values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},...e?[be("temperature.f32.bin",a,[n.height,n.width],["T"],"degC"),be("tke.f32.bin",o,[n.height,n.width],["TKE"],"m2/s2"),be("speed.f32.bin",s,[n.height,n.width],["speed"],"m/s")]:[]]}function nr(n,e,t){return pt(n,t,ai(t,e),e)}function rr(n,e){return pt(n,e,oi(e))}function ar(n,e,t){const r=[...ai(t,e),...oi(t,!0),{name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}];return pt(n,t,r,e)}class or{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let a=0;e.traverse(function(p){if(p.isMesh){const M=p.geometry,y=M.index,x=M.getAttribute("position");a+=y!==null?y.count/3:x.count/3,i.push({object3d:p,geometry:M})}});let o,s=80;if(r===!0){const p=a*2+a*3*4*4+80+4,M=new ArrayBuffer(p);o=new DataView(M),o.setUint32(s,a,!0),s+=4}else o="",o+=`solid exported
`;const d=new X,l=new X,f=new X,h=new X,c=new X,u=new X;for(let p=0,M=i.length;p<M;p++){const y=i[p].object3d,x=i[p].geometry,v=x.index,k=x.getAttribute("position");if(v!==null)for(let P=0;P<v.count;P+=3){const _=v.getX(P+0),B=v.getX(P+1),F=v.getX(P+2);g(_,B,F,k,y)}else for(let P=0;P<k.count;P+=3){const _=P+0,B=P+1,F=P+2;g(_,B,F,k,y)}}return r===!1&&(o+=`endsolid exported
`),o;function g(p,M,y,x,v){d.fromBufferAttribute(x,p),l.fromBufferAttribute(x,M),f.fromBufferAttribute(x,y),v.isSkinnedMesh===!0&&(v.applyBoneTransform(p,d),v.applyBoneTransform(M,l),v.applyBoneTransform(y,f)),d.applyMatrix4(v.matrixWorld),l.applyMatrix4(v.matrixWorld),f.applyMatrix4(v.matrixWorld),b(d,l,f),m(d),m(l),m(f),r===!0?(o.setUint16(s,0,!0),s+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function b(p,M,y){h.subVectors(y,M),c.subVectors(p,M),h.cross(c).normalize(),u.copy(h).normalize(),r===!0?(o.setFloat32(s,u.x,!0),s+=4,o.setFloat32(s,u.y,!0),s+=4,o.setFloat32(s,u.z,!0),s+=4):(o+="	facet normal "+u.x+" "+u.y+" "+u.z+`
`,o+=`		outer loop
`)}function m(p){r===!0?(o.setFloat32(s,p.x,!0),s+=4,o.setFloat32(s,p.y,!0),s+=4,o.setFloat32(s,p.z,!0),s+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}async function sr(n,e,t={}){var p,M;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((p=e.layers)==null?void 0:p.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:a,spacingM:o,layerSpacingM:s}=e,d=(y,x)=>y<0||x<0||y>=r||x>=i?0:a[x*r+y],l=async()=>{var y;if(await new Promise(x=>setTimeout(x,0)),(y=t.shouldCancel)!=null&&y.call(t))throw new Error("Model export cancelled.")};let f=0;for(let y=0;y<i;y++){y%32===0&&await l();for(let x=0;x<r;x++){const v=d(x,y);if(!Number.isInteger(v)||v<0||v>160)throw new Error("Invalid MDDF building height.");v&&(f+=2+ +(v>d(x-1,y))+ +(v>d(x+1,y))+ +(v>d(x,y-1))+ +(v>d(x,y+1)))}}if(!f)throw new Error("The selected MDDF model has no buildings to export.");const h=new Float32Array(f*18);let c=0;const u=(y,x,v,k)=>{for(const P of[y,x,v,y,v,k])h.set(P,c),c+=3};for(let y=0;y<i;y++){y%32===0&&await l();for(let x=0;x<r;x++){const v=d(x,y)*s;if(!v)continue;const k=x*o,P=k+o,_=-y*o,B=_-o;u([k,v,_],[P,v,_],[P,v,B],[k,v,B]),u([k,0,_],[k,0,B],[P,0,B],[P,0,_]);let F=d(x-1,y)*s;v>F&&u([k,F,B],[k,F,_],[k,v,_],[k,v,B]),F=d(x+1,y)*s,v>F&&u([P,F,_],[P,F,B],[P,v,B],[P,v,_]),F=d(x,y-1)*s,v>F&&u([k,F,_],[P,F,_],[P,v,_],[k,v,_]),F=d(x,y+1)*s,v>F&&u([P,F,B],[k,F,B],[k,v,B],[P,v,B])}}const g=new Lt;g.setAttribute("position",new _e(h,3));const b=new we(g);let m;try{m=new or().parse(b,{binary:!0}).buffer}finally{g.dispose(),b.material.dispose()}return[{name:"mddf-model.stl",content:m},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,mainDomain:n.mainDomain,computationalDomain:(M=n.polygon)==null?void 0:M.geometry,buffer:n.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:o,layerSpacingM:s,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:f*2}}},null,2)}]}const si=Symbol("flume");function Oe(){return di(si)}function lr(){const n="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),e=Ae(null),t=Ae(!1);let r=null,i=null,a=null,o=!1,s=null,d=!1;const l=()=>r,{currentPresetName:f}=Vt();St(f.value);const h=Ti({getMap:l,accessToken:n}),c=dn({getMap:l,ready:t,onChange:p,accessToken:n}),u=En(),g=lt({mapCreated:!1,mapReady:t,error:"",area:c.state,grid:null,wind:{..._t},engine:u.state,display:{variable:"speed",speedMps:_t.speedMps,particles:"white",paused:!1,showSurroundings:!0},legend:null,downloading:!1,downloadError:""}),b=ie(()=>g.downloading||g.engine.downloading||g.area.loading),m=ie(()=>b.value||g.engine.busy);function p(){clearTimeout(s),s=null,d=!1,g.grid=null,g.legend=null,g.error="",g.downloadError="",u.invalidate(),v()}async function M(){if(m.value)return;const _=await c.captureRegion();if(!(!_||o))try{Yt(_.buildings.features),g.grid=me(cn(_)),g.error="",y()}catch(B){g.error=B.message}}function y(){!g.grid||o||(clearTimeout(s),s=setTimeout(()=>{s=null,x()},Xi))}async function x(){if(clearTimeout(s),s=null,!(o||!g.grid||b.value)){if(g.engine.busy){d=!0;return}try{const _=un(g.wind);g.display.speedMps=_.speedMps,g.error="",await u.run(g.grid,_)}catch(_){g.error=_.message}d&&!o&&(d=!1,await x())}}function v(){!r||!t.value||i==null||i.update({source:g.area.source,input:g.area.snapshot,prediction:g.engine.prediction,preview:c.getPreview(),display:g.display})}async function k(_){if(!(b.value||!g.grid)&&!(_!=="model"&&(g.engine.busy||!g.engine.prediction))){g.downloading=!0,g.downloadError="";try{const B=g.area.snapshot;let F;if(_==="model")F=await sr(B,g.grid,{shouldCancel:()=>o});else{const O=g.engine.prediction,S={...O,settings:{...O.settings,speedMps:Number(g.display.speedMps)}};if(!Be(S.settings.speedMps))throw new Error("Use a wind speed between 0.5 and 20 m/s.");if(_==="wind")F=rr(B,S);else{const C=await u.readMddf();F=_==="mddf"?nr(B,C,S):ar(B,C,S)}}const H=await zi(F);o||Ni(H,"flume-"+_+".zip","application/zip")}catch(B){o||(g.downloadError=B.message)}finally{o||(g.downloading=!1)}}}oe([()=>g.engine.prediction,()=>g.area.source,()=>g.display.showSurroundings],v),oe(()=>[g.wind.heightM,g.wind.directionDeg],()=>{g.grid&&y()}),oe(()=>g.wind.speedMps,_=>{Be(_)&&(g.display.speedMps=Number(_))}),oe(()=>[g.display.variable,g.display.particles,g.display.speedMps],()=>{Be(g.display.speedMps)?(g.downloadError="",i==null||i.configure()):g.downloadError="Use a wind speed between 0.5 and 20 m/s."}),oe(()=>g.display.paused,()=>r==null?void 0:r.triggerRepaint()),oe(f,_=>St(_)),oe(h.mapStyle,_=>{r&&(c.beforeStyleChange(),t.value=!1,i==null||i.beforeStyleChange(),r.setStyle(_,{diff:!1}))}),li(()=>{if(!(n!=null&&n.startsWith("pk."))){g.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{r=new Nt.Map({container:e.value,accessToken:n,style:h.mapStyle.value,center:Ui,zoom:Wi,pitch:0,antialias:!0,attributionControl:!1}),i=ir(r,_=>{o||(g.legend=_)},_=>{o||(g.error=_.message)}),g.mapCreated=!0,r.on("style.load",()=>{if(!o)try{Li(r,ri(g.area.source)),t.value=!0,c.restore(),v()}catch(_){g.error=_.message}}),r.on("error",_=>{o||(g.error="Map data unavailable"+(_.sourceId?" ("+_.sourceId+")":"")+". Check token, allowed domains and connection.")}),h.attach(),a=new ResizeObserver(()=>r==null?void 0:r.resize()),a.observe(e.value)}catch(_){g.error=_.message}}),st(()=>{o=!0,clearTimeout(s),c.dispose(),u.dispose(),i==null||i.dispose(),a==null||a.disconnect(),r==null||r.remove(),r=null});const P={mapElement:e,store:g,controls:h,locked:b,areaLocked:m,area:c,acceptArea:M,runPrediction:x,download:k};return ci(si,P),P}const dr={class:"flume-compact"},cr={key:0,class:"flume-meta",role:"status"},ur={key:1,class:"flume-muted"},fr={class:"flume-actions"},hr={key:2,role:"status",class:"flume-muted"},gr={key:3,class:"flume-meta"},pr=["disabled"],mr={key:4,class:"flume-meta"},yr={__name:"AreaHud",setup(n){const{store:e,area:t,areaLocked:r,acceptArea:i}=Oe(),a=e.area,o=ie(()=>!e.mapReady||a.loading||r.value),s=[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}];return(d,l)=>{var g;const f=dt,h=Le,c=ze,u=Ne;return L(),z("div",dr,[R(f,{modelValue:w(a).source,"onUpdate:modelValue":l[0]||(l[0]=b=>w(a).source=b),label:"Buildings","aria-label":"Building source",size:"small",options:s,"text-by":"text","value-by":"value",disabled:w(a).loading||w(r)},null,8,["modelValue","disabled"]),R(h,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:o.value,loading:w(a).loading,onClick:w(t).loadBuildings},{default:U(()=>[...l[2]||(l[2]=[j("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),w(a).loadedArea?(L(),z("p",cr," Loaded detailed buildings: "+$(w(a).loadedArea.count)+" parts · "+$((w(a).loadedArea.extentM[0]/1e3).toFixed(1))+" × "+$((w(a).loadedArea.extentM[1]/1e3).toFixed(1))+" km"+$(w(a).loadedArea.fromMap?", taken from the map (no download)":"")+". Detail stays when you zoom. ",1)):(L(),z("p",ur,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),D("div",fr,[R(h,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:o.value,"aria-label":"Select region",onClick:w(t).startSelection},{default:U(()=>[...l[3]||(l[3]=[j("Draw area",-1)])]),_:1},8,["disabled","onClick"]),R(h,{size:"small",disabled:!w(e).mapReady||!w(a).region&&!w(a).loadedArea||w(r),loading:w(a).loading,"aria-label":w(a).region?"Use selected region":"Use full loaded area",onClick:w(i)},{default:U(()=>[j($(w(a).region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label","onClick"])]),w(a).drawing?(L(),z("p",hr," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):w(a).region?(L(),z("p",gr,[j($(w(a).region.extentM[0])+" × "+$(w(a).region.extentM[1])+" m · 4 m cells · "+$(w(a).region.buffer?"main + buffer":"main domain")+" ",1),D("button",{type:"button",class:"flume-link",disabled:w(a).loading||w(r),onClick:l[1]||(l[1]=(...b)=>w(t).clearSelection&&w(t).clearSelection(...b))}," Clear ",8,pr)])):Y("",!0),(g=w(a).region)!=null&&g.mainDomain?(L(),z("p",mr," Main: "+$(w(a).region.mainDomain.extentM[0])+" × "+$(w(a).region.mainDomain.extentM[1])+" m. Buffer: "+$((w(a).region.buffer.fraction*100).toFixed(0))+"% per side, open ground. Solid line: main boundary; dashed line: full simulation. ",1)):Y("",!0),w(a).loading?(L(),ce(c,{key:5,"model-value":w(a).progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):Y("",!0),w(a).error?(L(),ce(u,{key:6,color:"danger"},{default:U(()=>[j($(w(a).error),1)]),_:1})):Y("",!0)])}}},br={class:"flex flex-col gap-3"},wr={class:"grid grid-cols-2 gap-3"},xr={class:"flex flex-col gap-1 min-w-0"},vr={class:"flex flex-col gap-1 min-w-0"},_r={class:"grid grid-cols-[112px_minmax(0,1fr)] items-center gap-3"},Mr=["aria-valuenow","aria-disabled"],Sr=["x1","y1","x2","y2"],kr=["cx","cy"],Pr={class:"flex flex-col gap-2 min-w-0"},Cr={class:"cardinals grid grid-cols-4 gap-1"},Fr={key:2,class:"flex flex-col gap-1"},Ir={role:"status",class:"text-xs text-secondary"},Br={__name:"WindHud",setup(n){const{store:e,locked:t,runPrediction:r}=Oe(),i=e.wind,a=e.engine,o=ie(()=>!!e.grid&&!t.value),s=[{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],d=Ae(null),l=ie(()=>Number(i.directionDeg)*Math.PI/180);function f(c){if(!o.value||c.type==="pointermove"&&!c.buttons)return;c.type==="pointerdown"&&c.currentTarget.setPointerCapture(c.pointerId);const u=d.value.getBoundingClientRect(),g=c.clientX-u.left-u.width/2,b=-(c.clientY-u.top-u.height/2);i.directionDeg=(Math.round(Math.atan2(b,g)*180/Math.PI)+360)%360}function h(c){if(!o.value)return;const u={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[c.key]??0;u&&(c.preventDefault(),i.directionDeg=(Number(i.directionDeg)+u+360)%360)}return(c,u)=>{const g=ui,b=fi,m=Le,p=Ne,M=ze;return L(),z("div",br,[D("div",wr,[D("div",xr,[R(g,{modelValue:w(i).heightM,"onUpdate:modelValue":u[0]||(u[0]=y=>w(i).heightM=y),modelModifiers:{number:!0},type:"number",label:"Slice height (m)","input-aria-label":"Slice height (m)",min:w(it),max:w(nt),step:w(ne),disabled:!o.value},null,8,["modelValue","min","max","step","disabled"]),R(b,{modelValue:w(i).heightM,"onUpdate:modelValue":u[1]||(u[1]=y=>w(i).heightM=y),min:w(it),max:w(nt),step:w(ne),"aria-label":"Slice height",disabled:!o.value},null,8,["modelValue","min","max","step","disabled"])]),D("div",vr,[R(g,{modelValue:w(i).speedMps,"onUpdate:modelValue":u[2]||(u[2]=y=>w(i).speedMps=y),modelModifiers:{number:!0},type:"number",label:"Wind speed (m/s)","input-aria-label":"Reference wind speed (m/s)",min:w(rt),max:w(at),step:.1,disabled:!o.value},null,8,["modelValue","min","max","disabled"]),R(b,{modelValue:w(i).speedMps,"onUpdate:modelValue":u[3]||(u[3]=y=>w(i).speedMps=y),min:w(rt),max:w(at),step:.1,"aria-label":"Wind speed",disabled:!o.value},null,8,["modelValue","min","max","disabled"])])]),D("div",_r,[(L(),z("svg",{ref_key:"dial",ref:d,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":w(i).directionDeg,"aria-disabled":!o.value||void 0,onPointerdown:hi(f,["prevent"]),onPointermove:f,onKeydown:h},[u[5]||(u[5]=gi('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".35" stroke-width="2" data-v-3be29598></circle><text x="80" y="16" text-anchor="middle" data-v-3be29598>90°</text><text x="146" y="84" text-anchor="middle" data-v-3be29598>0°</text><text x="80" y="152" text-anchor="middle" data-v-3be29598>270°</text><text x="14" y="84" text-anchor="middle" data-v-3be29598>180°</text>',5)),D("line",{x1:80-Math.cos(l.value)*30,y1:80+Math.sin(l.value)*30,x2:80+Math.cos(l.value)*42,y2:80-Math.sin(l.value)*42,class:"needle","stroke-width":"3.5","stroke-linecap":"round"},null,8,Sr),D("circle",{cx:80+Math.cos(l.value)*42,cy:80-Math.sin(l.value)*42,r:"5",class:"needle-tip"},null,8,kr)],40,Mr)),D("div",Pr,[R(g,{modelValue:w(i).directionDeg,"onUpdate:modelValue":u[4]||(u[4]=y=>w(i).directionDeg=y),modelModifiers:{number:!0},type:"number",label:"Wind towards (°)","input-aria-label":"Wind towards (°)",step:1,disabled:!o.value},null,8,["modelValue","disabled"]),D("div",Cr,[(L(),z(Ce,null,Tt(s,y=>R(m,{key:y.text,size:"small",preset:"secondary",disabled:!o.value,"aria-label":"Wind towards "+y.text,onClick:x=>w(i).directionDeg=y.value},{default:U(()=>[j($(y.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),w(e).error?(L(),ce(p,{key:0,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:U(()=>[j($(w(e).error),1)]),_:1})):Y("",!0),w(a).error?(L(),ce(p,{key:1,color:"danger",dense:"",outline:"",class:"mb-0 text-xs break-words"},{default:U(()=>[j($(w(a).error),1)]),_:1})):Y("",!0),w(a).busy?(L(),z("div",Fr,[R(M,{"model-value":w(a).progress*100,indeterminate:w(a).progress===0},null,8,["model-value","indeterminate"]),D("p",Ir,$(w(a).stage),1)])):Y("",!0),R(m,{block:"",disabled:!o.value,loading:w(a).busy,"aria-label":"Run prediction",onClick:w(r)},{default:U(()=>[...u[6]||(u[6]=[j("Run prediction",-1)])]),_:1},8,["disabled","loading","onClick"])])}}},Er=ct(Br,[["__scopeId","data-v-3be29598"]]),Ar={class:"flex flex-col gap-3"},Dr={key:0,class:"text-xs text-secondary"},Rr={key:0,class:"flex flex-col gap-1 text-xs"},$r={class:"flex justify-between gap-2 text-secondary"},Vr={class:"flex justify-between gap-2 text-secondary"},Tr={key:1,class:"text-xs text-secondary"},Lr={class:"text-xs text-secondary"},zr={__name:"DisplayHud",setup(n){const{store:e}=Oe(),t=e.display,r=ie(()=>e.engine.prediction),i=Te.map(d=>({label:d.label,value:d.id})),a=[{text:"White, over the field",value:"white"},{text:"Coloured, no field",value:"tinted"},{text:"Off",value:"off"}],o=ie(()=>{var d;return((d=Te.find(l=>l.id===t.variable))==null?void 0:d.ramp)??"turbo"}),s=ie(()=>"linear-gradient(to right,"+Array.from({length:17},(d,l)=>"rgb("+ni(o.value,l/16).join(",")+") "+l*100/16+"%").join(",")+")");return(d,l)=>{const f=pi,h=dt,c=mi;return L(),z("div",Ar,[r.value?(L(),z(Ce,{key:1},[R(f,{modelValue:w(t).variable,"onUpdate:modelValue":l[0]||(l[0]=u=>w(t).variable=u),options:w(i),color:"background-element",size:"small",role:"group","aria-label":"Field",class:"field-toggle"},null,8,["modelValue","options"]),R(h,{modelValue:w(t).particles,"onUpdate:modelValue":l[1]||(l[1]=u=>w(t).particles=u),options:a,"text-by":"text","value-by":"value",label:"Particles","aria-label":"Particles"},null,8,["modelValue"]),R(c,{modelValue:w(t).paused,"onUpdate:modelValue":l[2]||(l[2]=u=>w(t).paused=u),label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"]),R(c,{modelValue:w(t).showSurroundings,"onUpdate:modelValue":l[3]||(l[3]=u=>w(t).showSurroundings=u),label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),w(e).legend?(L(),z("div",Rr,[D("div",$r,[D("strong",null,$(w(e).legend.legend),1),D("span",null,$(w(e).legend.unit),1)]),D("div",{class:"colorbar",style:yi({background:s.value})},null,4),D("div",Vr,[D("span",null,$(w(e).legend.low.toFixed(2)),1),D("span",null,$(w(e).legend.high.toFixed(2)),1)])])):Y("",!0),r.value.grid.mainDomain?(L(),z("p",Tr," Solid outline: main area · Dashed outline and shading: "+$((r.value.grid.buffer.fraction*100).toFixed(0))+"% buffer ",1)):Y("",!0),D("p",Lr,$(r.value.patchCount)+" patches · "+$((r.value.milliseconds/1e3).toFixed(1))+" s ",1)],64)):(L(),z("p",Dr,"Run a prediction to inspect the field."))])}}},Nr=ct(zr,[["__scopeId","data-v-4948f4a0"]]),Ur={class:"space-y-2"},Wr={key:0,class:"text-xs text-secondary"},Or={class:"grid grid-cols-2 gap-2"},Xr={__name:"DownloadsHud",setup(n){const{store:e,download:t}=Oe(),r=[{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}];function i(a){const o=e.engine;return e.downloading||o.downloading||a!=="model"&&(o.busy||!o.prediction)}return(a,o)=>{const s=Le,d=ze,l=Ne;return L(),z("div",Ur,[w(e).grid?(L(),z(Ce,{key:1},[D("div",Or,[(L(),z(Ce,null,Tt(r,f=>R(s,{key:f.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":f.label,disabled:i(f.id),onClick:h=>w(t)(f.id)},{default:U(()=>[j($(f.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),w(e).downloading?(L(),ce(d,{key:0,indeterminate:"","aria-label":"Preparing download"})):Y("",!0),w(e).downloadError?(L(),ce(l,{key:1,color:"danger"},{default:U(()=>[j($(w(e).downloadError),1)]),_:1})):Y("",!0)],64)):(L(),z("p",Wr,"Choose a simulation area before downloading its model."))])}}},jr={class:"flume-hud-stack"},Yr={class:"flume-heading city-glass"},qr={class:"flume-heading__row"},Gr={key:0,class:"flume-info"},Hr={class:"flume-info__title"},Zr={class:"flume-info__copyright"},Kr=["href"],Jr={key:0,class:"flume-status"},Qr={__name:"FlumeCityView",setup(n){const{mapElement:e,store:t,controls:r,locked:i,areaLocked:a,area:o}=lr(),{controlsElement:s,controlsVisible:d,mapStyle:l,mapStyles:f}=r,{currentPresetName:h}=Vt(),c=ie(()=>h.value==="dark"),u=Ae(!1),g={title:"Fast localized urban microclimate emulator: wind and temperatures in unseen urban morphologies",authors:"Shaoxiang Qin, Theodore Potsis, Dongxue Zhan, Xue Liu, Ted Stahopoulos, Liangzhu Leon Wang",summary:"FLUME: a rapid, data-efficient, and geometry-aware framework based on a Fourier neural operator for predicting three-dimensional wind and temperature fields.",arxiv:"https://arxiv.org/abs/2503.19708"};return(b,m)=>{const p=Le,M=dt,y=vi,x=bi,v=Mi,k=Ne,P=ze;return L(),z("section",{class:xi(["flume-page map-glass",{"map-glass--dark":c.value}]),"aria-label":"Flume City wind prediction",onKeydown:m[3]||(m[3]=wi((..._)=>w(o).stopSelection&&w(o).stopSelection(..._),["esc"]))},[D("div",{ref_key:"mapElement",ref:e,class:"flume-map","aria-label":"Flume City map"},null,512),mt(D("aside",{ref_key:"controlsElement",ref:s,class:"mapboxgl-ctrl flume-map-actions"},[R(x,{placement:"left-start","close-on-content-click":!1},{anchor:U(()=>[R(p,{class:"city-glass",color:"backgroundElement","text-color":"textPrimary",size:"small",icon:"mso-layers","aria-label":"Flume basemap"})]),default:U(()=>[R(y,null,{default:U(()=>[R(M,{modelValue:w(l),"onUpdate:modelValue":m[0]||(m[0]=_=>_i(l)?l.value=_:null),label:"Basemap",options:w(f),"text-by":"title","value-by":"value",disabled:w(i)},null,8,["modelValue","options","disabled"])]),_:1})]),_:1}),R(p,{class:"city-glass",color:"backgroundElement","text-color":"textPrimary",size:"small",icon:w(d)?"mso-visibility_off":"mso-visibility","aria-label":w(d)?"Hide Flume controls":"Show Flume controls",onClick:m[1]||(m[1]=_=>d.value=!w(d))},null,8,["icon","aria-label"])],512),[[yt,w(t).mapCreated]]),mt(D("div",jr,[D("header",Yr,[D("div",qr,[m[4]||(m[4]=D("h1",null,"Flume City",-1)),R(p,{preset:"secondary",color:"textPrimary",size:"small",icon:u.value?"mso-close":"mso-info","aria-label":u.value?"Hide Flume City information":"Show Flume City information","aria-expanded":u.value,onClick:m[2]||(m[2]=_=>u.value=!u.value)},null,8,["icon","aria-label","aria-expanded"])]),u.value?(L(),z("div",Gr,[D("p",Hr,$(g.title),1),D("p",null,$(g.authors),1),D("p",null,$(g.summary),1),R(p,{preset:"secondary",size:"small",icon:"mso-description",href:g.arxiv,target:"_blank","aria-label":"Read the paper on arXiv"},{default:U(()=>[...m[5]||(m[5]=[j("arXiv",-1)])]),_:1},8,["href"]),D("div",Zr,[D("p",null,[m[6]||(m[6]=j(" Developed and maintained by ",-1)),D("a",{href:w(Ie).lab.url,target:"_blank",rel:"noopener"},$(w(Ie).lab.name),9,Kr),m[7]||(m[7]=D("br",null,null,-1)),j("("+$(w(Ie).lead)+") ",1)]),D("p",null,$(w(Ie).place),1)])])):Y("",!0)]),R(Ye,{title:"1 · Simulation area",inert:w(a),collapsed:!!w(t).grid},{default:U(()=>[R(yr)]),_:1},8,["inert","collapsed"]),R(Ye,{title:"2 · Configuration",collapsed:!w(t).grid},{default:U(()=>[R(Er),w(t).engine.prediction?(L(),z(Ce,{key:0},[R(v),R(Nr)],64)):Y("",!0)]),_:1},8,["collapsed"]),R(Ye,{title:"3 · Downloads",collapsed:!w(t).grid},{default:U(()=>[R(Xr)]),_:1},8,["collapsed"]),w(t).error&&!w(t).grid?(L(),ce(k,{key:0,color:"danger"},{default:U(()=>[j($(w(t).error),1)]),_:1})):Y("",!0)],512),[[yt,w(d)]]),!w(t).mapReady&&!w(t).error?(L(),z("div",Jr,[R(P,{indeterminate:"","aria-label":"Loading Flume map"})])):Y("",!0)],34)}}},da=ct(Qr,[["__scopeId","data-v-6097aed9"]]);export{da as default};
