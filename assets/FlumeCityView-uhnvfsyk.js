import{w as Q,o as Ke,m as ce,r as Me,b as Tt,c as pe,a as Fe,d as V,q as U,g as z,K as St,f as j,x as X,L as Re,t as N,l as I,s as Y,e as se,J as De,v as Te,_ as Je,U as re,a2 as we,H as Vt,a3 as Lt,F as ye,y as Qe,j as R,a4 as zt,p as Nt,Q as Ut,W as at,X as Wt,i as jt,Y as Ot,M as Xt,a1 as qt}from"./index-BT38Jjnh.js";import{j as Yt,h as Gt,t as st,k as Ht,v as Se,o as ke,w as qe,x as Zt,y as Ie,q as ge,z as Be,O as Kt,S as Ye,B as kt,e as xe,D as Ue,E as ve,R as Jt,V as q,M as Ge,F as Qt,H as Pt,G as He,N as ot,m as Ct,c as ei,W as ti,I as lt,J as dt,K as ii,u as ni,a as ri,s as ut,b as ai,r as We}from"./mapbox-gl-geocoder-B0KyZEhE.js";import{c as et}from"./index-D6bWIqpK.js";import{m as Ve,c as me}from"./geojsonToStl-Bbo8coar.js";import{z as si}from"./archive-Dz16c6AW.js";import{d as oi}from"./download-B6B1Q6H-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./earcut-Drp1yMsm.js";import"./jszip.min-UX6Ol9Iw.js";function Le(i,e){for(const b of[i,e])if(!Array.isArray(b)||b.length<2||!b.every(Number.isFinite)||Math.abs(b[0])>180||Math.abs(b[1])>85.051129)throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(i[0],e[0]),Math.min(i[1],e[1])];if(Math.abs(i[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=Ve(t),n=me(t),[a,s]=r([Math.max(i[0],e[0]),Math.max(i[1],e[1])]);if(a<=0||s<=0)throw new Error("The region is empty.");const o=Math.ceil((a-1e-6)/4),l=Math.ceil((s-1e-6)/4),d=n([o*4,l*4]),u=[...t,...d],[c,f,h,w]=u,y={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[c,f],[h,f],[h,w],[c,w],[c,f]]]}};return{origin:t,bounds:u,extentM:[o*4,l*4],polygon:y}}function fe(i){const e=i.properties??{},t=e.nd??e.osm_id??i.id??e.id??e.auto_id;return typeof t=="string"&&t.trim()!==""||typeof t=="number"&&Number.isFinite(t)?String(t):null}function Ft(i){var r,n,a;const e=new Map,t=new Set;for(const s of i){if(!["Polygon","MultiPolygon"].includes((r=s.geometry)==null?void 0:r.type))continue;et(s,f=>{if(!Number.isFinite(f[0])||!Number.isFinite(f[1])||Math.abs(f[0])>180||Math.abs(f[1])>85.051129)throw new Error("Invalid building coordinates.")});const o=Number((n=s.properties)==null?void 0:n.height),l=Number((a=s.properties)==null?void 0:a.min_height)||0,d=JSON.stringify([s.geometry,o,l]);if(t.has(d))continue;t.add(d);const u=fe(s),c=u==null?d:JSON.stringify([u,o,l]);e.has(c)||e.set(c,[]),e.get(c).push({type:"Feature",...s.id==null?{}:{id:s.id},properties:structuredClone(s.properties??{}),geometry:structuredClone(s.geometry)})}return Array.from(e.values(),s=>{const o=s[0];if(s.length>1){const l=Gt({type:"FeatureCollection",features:s});if(!l)throw new Error("Building parts produced empty geometry.");o.geometry=l.geometry,delete o.bbox}return o})}function li(i,e){var h,w,y;const t=Ft(i),r=e.selection??e.polygon,n=new Set(t.filter(b=>Yt(b,r))),a=new Set(Array.from(n,fe).filter(b=>b!=null)),s=[],o=[],l=[];let d=0,u=0;for(const b of t){if(!n.has(b)&&!(fe(b)!=null&&a.has(fe(b)))){o.push(b);continue}const g=(h=b.properties)==null?void 0:h.height;if(g==null||g===""){d++;continue}const k=Number(g);if(!Number.isFinite(k)||k<0||k>240)throw new Error("Building height must be finite and between 0 and 240 m.");if(k===0){d++;continue}Number((w=b.properties)==null?void 0:w.min_height)>0&&u++,s.push({...b,properties:{...b.properties,source_height:k,source_min_height:Number((y=b.properties)==null?void 0:y.min_height)||0,height:Math.max(1,Math.round(k/1.5))*1.5,min_height:0}})}const c={type:"FeatureCollection",features:s};let f=e;if(s.length){const b=[1/0,1/0,-1/0,-1/0];et(c,g=>{b[0]=Math.min(b[0],g[0]),b[1]=Math.min(b[1],g[1]),b[2]=Math.max(b[2],g[0]),b[3]=Math.max(b[3],g[1])}),f=Le(b.slice(0,2),b.slice(2,4))}return d&&l.push(d+" parts have missing/zero height and were omitted."),u&&l.push(u+" raised parts are treated as solid from the ground to their roof."),s.length||l.push("No buildings found in loaded map data. This run will use open ground."),s.some(b=>fe(b)==null)&&l.push("Selected parts without provider IDs cannot be joined across tile boundaries."),l.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...f,selection:structuredClone(e.selection??e.polygon),buildings:c,surroundings:{type:"FeatureCollection",features:o},warnings:l}}function ct(i){var n;if(((n=i==null?void 0:i.geometry)==null?void 0:n.type)!=="Polygon")throw new Error("Draw a valid polygon first.");const e=[1/0,1/0,-1/0,-1/0];let t=0;if(et(i,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e[0]=Math.min(e[0],a[0]),e[1]=Math.min(e[1],a[1]),e[2]=Math.max(e[2],a[0]),e[3]=Math.max(e[3],a[1]),t++}),t<4)throw new Error("A polygon needs at least three corners.");return{...Le(e.slice(0,2),e.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(i.geometry)}}}function di(i){const e=structuredClone({origin:i.origin,bounds:i.bounds,extentM:i.extentM,polygon:i.polygon}),t=i.extentM.map(o=>Math.ceil(o*.1/4)*4),r=me(i.origin)([0,-t[1]]),n=me(r)([-t[0],0]),a=Ve(n)(i.bounds.slice(2,4)),s=Le(n,me(n)([a[0]+t[0],a[1]+t[1]]));return{...i,...s,mainDomain:e,buffer:{fraction:.1,paddingM:t}}}const K="flume-detailed-buildings";function Ae(i){var t,r;const e=[];for(const n of Ft(i)){const a=Number((t=n.properties)==null?void 0:t.height);if(!Number.isFinite(a)||a<=0)continue;const s=Math.min(a,Math.max(0,Number((r=n.properties)==null?void 0:r.min_height)||0));e.push({...n,properties:{...n.properties,height:a,min_height:s},geometry:n.geometry})}return{type:"FeatureCollection",features:e}}function Ze(i,e){var r;if(!((r=e==null?void 0:e.features)!=null&&r.length)){i.getLayer(K)&&i.removeLayer(K),i.getSource(K)&&i.removeSource(K);return}const t=e;i.getSource(K)?i.getSource(K).setData(t):i.addSource(K,{type:"geojson",data:t,maxzoom:22,tolerance:0}),i.getLayer(K)||i.addLayer({id:K,type:"fill-extrusion",source:K,minzoom:0,paint:{"fill-extrusion-color":"#8cb8d8","fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function ft(i,e=null){const t=i.map(fe);if(t.some(a=>a==null))throw new Error("Selected buildings need a stable provider ID (nd, osm_id or feature ID) for map styling.");const n=["in",["to-string",["coalesce",["get","nd"],["get","osm_id"],["id"],["get","id"],["get","auto_id"],""]],["literal",Array.from(new Set(t))]];return{selected:e?["all",e,n]:n,surroundings:e?["all",e,["!",n]]:["!",n]}}const Pe=16,te="flume-retained-buildings",ht="flume-retained-selected";function ui(i,e){let t=null,r=null,n=null,a=null,s=null;function o(){if(t){i.getSource(te)?n!==a&&i.getSource(te).setData(n):i.addSource(te,{type:"geojson",data:n,maxzoom:22,tolerance:0}),a=n;for(const[f,h]of[[te,!1],[ht,!0]]){const w=t.filters[h?"selected":"surroundings"];i.getLayer(f)?i.setFilter(f,w):i.addLayer({id:f,type:"fill-extrusion",source:te,maxzoom:Pe,filter:w,layout:{visibility:"visible"},paint:{"fill-extrusion-color":h?"#9aa3ad":"#8cb8d8","fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":h?1:t.surroundingsOpacity}}),i.setPaintProperty(f,"fill-extrusion-opacity",h?1:t.surroundingsOpacity),i.setLayoutProperty(f,"visibility",h||t.showSurroundings?"visible":"none")}}}function l(){if(!(!t||i.getZoom()<Pe||!i.getSource(t.sourceId)||!i.isSourceLoaded(t.sourceId)))try{const f=i.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(h=>!h.tile||h.tile.z>=(t.dataZoom??Pe));n=Ae([...n.features,...f]),o()}catch(f){e==null||e(f)}}function d(f){!t||f!=null&&f.sourceId&&f.sourceId!==t.sourceId||(clearTimeout(s),s=setTimeout(l,120))}function u(f){var h;(r!==f.collection||(t==null?void 0:t.sourceId)!==f.sourceId||(t==null?void 0:t.sourceLayer)!==f.sourceLayer)&&(n=Ae(((h=f.collection)==null?void 0:h.features)??[]),r=f.collection),t=f,o(),d()}function c(){clearTimeout(s),t=null,r=null,n=null,a=null;for(const f of[ht,te])i.getLayer(f)&&i.removeLayer(f);i.getSource(te)&&i.removeSource(te)}return i.on("sourcedata",d),i.on("moveend",d),{update:u,clear:c,dispose(){i.off("sourcedata",d),i.off("moveend",d),c()}}}const gt=65536*65536,ci=12,mt=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),fi=0,hi=1,pt=2,gi=5;class mi{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,r=this.length){let n;for(;n=this.nextField(r);)e(n,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*gt;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*gt;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,r=t[this.pos++];if(r<128)return r;let n=r&127,a;return a=t[this.pos++],n|=(a&127)<<7,a<128||(a=t[this.pos++],n|=(a&127)<<14,a<128)||(a=t[this.pos++],n|=(a&127)<<21,a<128)?n:(a=t[this.pos],n|=(a&15)<<28,pi(n,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=ci&&mt?mt.decode(this.buf.subarray(t,e)):yi(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const r=this.readPackedEnd();for(;this.pos<r;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===pt?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===fi)for(;this.buf[this.pos++]>127;);else if(t===pt)this.pos=this.readVarint()+this.pos;else if(t===gi)this.pos+=4;else if(t===hi)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function pi(i,e,t){const r=t.buf;let n,a;if(a=r[t.pos++],n=(a&112)>>4,a<128||(a=r[t.pos++],n|=(a&127)<<3,a<128)||(a=r[t.pos++],n|=(a&127)<<10,a<128)||(a=r[t.pos++],n|=(a&127)<<17,a<128)||(a=r[t.pos++],n|=(a&127)<<24,a<128)||(a=r[t.pos++],n|=(a&1)<<31,a<128))return le(i,n,e);throw new Error("Expected varint not more than 10 bytes")}function le(i,e,t){return t?e*4294967296+(i>>>0):(e>>>0)*4294967296+(i>>>0)}function yi(i,e,t){let r="",n=e;for(;n<t;){const a=i[n];let s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o>t)break;let l,d,u;o===1?a<128&&(s=a):o===2?(l=i[n+1],(l&192)===128&&(s=(a&31)<<6|l&63,s<=127&&(s=null))):o===3?(l=i[n+1],d=i[n+2],(l&192)===128&&(d&192)===128&&(s=(a&15)<<12|(l&63)<<6|d&63,(s<=2047||s>=55296&&s<=57343)&&(s=null))):o===4&&(l=i[n+1],d=i[n+2],u=i[n+3],(l&192)===128&&(d&192)===128&&(u&192)===128&&(s=(a&15)<<18|(l&63)<<12|(d&63)<<6|u&63,(s<=65535||s>=1114112)&&(s=null))),s===null?(s=65533,o=1):s>65535&&(s-=65536,r+=String.fromCharCode(s>>>10&1023|55296),s=56320|s&1023),r+=String.fromCharCode(s),n+=o}return r}class _t{constructor(e,t,r,n,a){for(this.properties=Object.create(null),this.extent=r,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=n,this._values=a;e.pos<t;){const s=e.readVarint();if(s===8)this.id=e.readVarint();else if(s===18){const o=e.readVarint()+e.pos;for(;e.pos<o;){const l=n[e.readVarint()],d=a[e.readVarint()];this.properties[l]=d}}else s===24?this.type=e.readVarint():(s===34&&(this._geometry=e.pos),e.skip(s))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,r=[];let n,a=1,s=0,o=0,l=0;for(;e.pos<t;){if(s<=0){const d=e.readVarint();if(a=d&7,s=d>>3,s===0)continue}if(s--,a===1)o+=e.readSVarint(),l+=e.readSVarint(),n&&r.push(n),n=[new st(o,l)];else if(a===2)o+=e.readSVarint(),l+=e.readSVarint(),n&&n.push(new st(o,l));else if(a===7)n&&n.push(n[0].clone());else throw new Error(`unknown command ${a}`)}return n&&r.push(n),r}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let r=1,n=0,a=0,s=0,o=1/0,l=-1/0,d=1/0,u=-1/0;for(;e.pos<t;){if(n<=0){const c=e.readVarint();if(r=c&7,n=c>>3,n===0)continue}if(n--,r===1||r===2)a+=e.readSVarint(),s+=e.readSVarint(),a<o&&(o=a),a>l&&(l=a),s<d&&(d=s),s>u&&(u=s);else if(r!==7)throw new Error(`unknown command ${r}`)}return[o,d,l,u]}toGeoJSON(e,t,r){const n=this.extent*Math.pow(2,r),a=this.extent*e,s=this.extent*t,o=this.loadGeometry();function l(f){return[(f.x+a)*360/n-180,360/Math.PI*Math.atan(Math.exp((1-(f.y+s)*2/n)*Math.PI))-90]}function d(f){return f.map(l)}let u;if(this.type===1){const f=[];for(const w of o)f.push(w[0]);const h=d(f);u=f.length===1?{type:"Point",coordinates:h[0]}:{type:"MultiPoint",coordinates:h}}else if(this.type===2){const f=o.map(d);u=f.length===1?{type:"LineString",coordinates:f[0]}:{type:"MultiLineString",coordinates:f}}else if(this.type===3){const f=bi(o),h=[];for(const w of f)h.push(w.map(d));u=h.length===1?{type:"Polygon",coordinates:h[0]}:{type:"MultiPolygon",coordinates:h}}else throw new Error("unknown feature type");const c={type:"Feature",geometry:u,properties:this.properties};return this.id!=null&&(c.id=this.id),c}}_t.types=["Unknown","Point","LineString","Polygon"];function bi(i){const e=i.length;if(e<=1)return[i];const t=[];let r,n;for(let a=0;a<e;a++){const s=wi(i[a]);s!==0&&(n===void 0&&(n=s<0),n===s<0?(r&&t.push(r),r=[i[a]]):r&&r.push(i[a]))}return r&&t.push(r),t}function wi(i){let e=0;for(let t=0,r=i.length,n=r-1,a,s;t<r;n=t++)a=i[t],s=i[n],e+=(s.x-a.x)*(a.y+s.y);return e}class xi{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const r=e.readVarint();r===10?this.name=e.readString():r===18?(this._features.push(e.pos),e.skip(r)):r===26?this._keys.push(e.readString()):r===34?this._values.push(vi(e)):r===40?this.extent=e.readVarint():r===120?this.version=e.readVarint():e.skip(r)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new _t(this._pbf,t,this.extent,this._keys,this._values)}}function vi(i){let e=null;const t=i.readVarint()+i.pos;for(;i.pos<t;){const r=i.readVarint();e=r===10?i.readString():r===21?i.readFloat():r===25?i.readDouble():r===32?i.readVarint(!0):r===40?i.readVarint():r===48?i.readSVarint():r===56?i.readBoolean():(i.skip(r),null)}if(e==null)throw new Error("unknown feature value");return e}class Mi{constructor(e,t=e.length){const r=Object.create(null);for(;e.pos<t;){const n=e.readVarint();if(n===26){const a=new xi(e,e.readVarint()+e.pos);a.length&&(r[a.name]=a)}else e.skip(n)}this.layers=r}}function Si(i,e,t=0){const r=2**e,n=c=>(c+180)/360*r,a=c=>{const f=Math.max(-85.051129,Math.min(85.051129,c))*Math.PI/180;return(1-Math.asinh(Math.tan(f))/Math.PI)/2*r},s=Math.max(0,Math.floor(n(i[0]))-t),o=Math.min(r-1,Math.ceil(n(i[2])-1e-9)-1+t),l=Math.max(0,Math.floor(a(i[3]))-t),d=Math.min(r-1,Math.ceil(a(i[1])-1e-9)-1+t);if((o-s+1)*(d-l+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const u=[];for(let c=l;c<=d;c++)for(let f=s;f<=o;f++)u.push({z:e,x:f,y:c});return u}async function yt(i,e){e==null||e.throwIfAborted();const t=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),r=await fetch(i,{signal:t});if(!r.ok)throw new Error("Building data request failed (HTTP "+r.status+"). Check source access and token.");return r}function bt(i,e){var r;const t=new URL(i,((r=globalThis.location)==null?void 0:r.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function ki({sourceConfig:i,source:e,bounds:t,accessToken:r,signal:n,onProgress:a,paddingTiles:s=0}){var p;if(!i)throw new Error("The selected basemap does not provide this building source.");let o=i;if(i.url){let m=i.url;if(m.startsWith("mapbox://")){const x=m.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(x))throw new Error("Invalid Mapbox tileset ID.");m="https://api.mapbox.com/v4/"+x+".json?secure"}o=await(await yt(bt(m,r),n)).json()}if(!((p=o.tiles)!=null&&p.length))throw new Error("The selected source has no vector tile URLs.");const l=Math.max(o.minzoom??0,Math.min(16,o.maxzoom??16));if(!Number.isInteger(l)||l<0||l>22)throw new Error("Unsupported tile detail level.");const d=Si(t,l,s),u=[];let c=0,f=0,h=0;const w=e==="osm"?"building":"Montreal_Qatar-6hvjju";await Promise.all(Array.from({length:Math.min(4,d.length)},async()=>{for(;c<d.length;){const{x:m,y:x,z:S}=d[c++];let P=o.tiles[0].replaceAll("{z}",String(S)).replaceAll("{x}",String(m)).replaceAll("{y}",String(o.scheme==="tms"?2**S-x-1:x)).replaceAll("{ratio}","");P=bt(P,r);const C=await(await yt(P,n)).arrayBuffer();if(h+=C.byteLength,C.byteLength>16*1024*1024||h>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const E=new Mi(new mi(new Uint8Array(C))).layers[w];if(E)for(let B=0;B<E.length;B++){const O=E.feature(B);e==="osm"&&String(O.properties.extrude)!=="true"||O.type===3&&u.push(O.toGeoJSON(m,x,S))}f++,a==null||a(f/d.length)}})),n==null||n.throwIfAborted();const y=2**l,b=m=>m/y*360-180,g=m=>Math.atan(Math.sinh(Math.PI*(1-2*m/y)))*180/Math.PI,k=[b(Math.min(...d.map(m=>m.x))),g(Math.max(...d.map(m=>m.y))+1),b(Math.max(...d.map(m=>m.x))+1),g(Math.min(...d.map(m=>m.y)))];return{features:u,zoom:l,tileCount:d.length,coverageBounds:k}}const J="flume-region-domain",de="flume-main-domain";function Pi({getMap:i,ready:e,onChange:t,accessToken:r}){const n=Me({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,s=!1,o=null,l=0,d=null;function u(v=!1){l++,o==null||o.abort(),v||(d=null,n.loadedArea=null),n.snapshot=null,t==null||t()}function c(){const v=i();if(!v||!e.value)return;Ze(v,d==null?void 0:d.preview);const F=n.region??(d==null?void 0:d.area),M={type:"FeatureCollection",features:F?[{...F.polygon,properties:{role:"outer"}},...F.mainDomain?[{...F.mainDomain.polygon,properties:{role:"main"}}]:[]]:[]};if(!M.features.length){v.getLayer(de)&&v.removeLayer(de),v.getLayer(J)&&v.removeLayer(J),v.getSource(J)&&v.removeSource(J);return}v.getSource(J)?v.getSource(J).setData(M):(v.addSource(J,{type:"geojson",data:M}),v.addLayer({id:J,type:"line",source:J,filter:["==",["get","role"],"outer"],paint:{"line-color":"#38bdf8","line-width":1.5,"line-dasharray":[4,3]}})),F.mainDomain&&!v.getLayer(de)&&v.addLayer({id:de,type:"line",source:J,filter:["==",["get","role"],"main"],paint:{"line-color":"#ffd000","line-width":2}}),!F.mainDomain&&v.getLayer(de)&&v.removeLayer(de)}function f(v){u(!n.region&&!n.snapshot),n.error="";try{n.region=ce(ct(v))}catch(F){n.region=null,n.error=F.message}c()}function h(v){var _;if(s||!a)return;const F=(_=v.features)==null?void 0:_.at(-1);if(v.type==="draw.create"&&F)for(const T of a.getAll().features)T.id!==F.id&&a.delete(T.id);const M=a.getAll().features.find(T=>T.geometry.type==="Polygon");M?f(M):(u(),n.region=null,c()),n.drawing=!1}function w(v){n.drawing=v.mode==="draw_polygon"||v.mode==="direct_select"}function y(){var F;const v=i();if(!v||!e.value)throw new Error("Wait for the map to load.");if(!a){a=new Ht({displayControlsDefault:!1,controls:{},boxSelect:!1}),v.addControl(a,"bottom-left");for(const M of["draw.create","draw.update","draw.delete"])v.on(M,h);v.on("draw.modechange",w);for(const M of v.getStyle().layers)M.id.startsWith("gl-draw-")&&(M.type==="fill"&&(v.setPaintProperty(M.id,"fill-color","#ffd000"),v.setPaintProperty(M.id,"fill-opacity",.1)),M.type==="line"&&v.setPaintProperty(M.id,"line-color","#ffd000"));(F=n.region)!=null&&F.selection&&a.add(n.region.selection)}return a}function b(){a&&a.changeMode("simple_select"),n.drawing=!1}function g(){if(!n.loading)try{const v=y();i().stop(),u(!n.region&&!n.snapshot),n.region=null,v.deleteAll(),c(),v.changeMode("draw_polygon"),n.drawing=!0,n.error=""}catch(v){n.error=v.message}}function k(){var v;(v=i())==null||v.stop(),P(),u(),n.region=null,n.error="",c()}function p(v){var _;const F=i(),M=F.getCanvas().clientWidth;(_=F.resize)==null||_.call(F),F.fitBounds([v.bounds.slice(0,2),v.bounds.slice(2,4)],{padding:M>=640?{top:40,bottom:40,left:Math.min(320,M*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function m(v,F,M,_){if(M.signal.throwIfAborted(),(d==null?void 0:d.source)===F&&v.bounds.every((A,G)=>G<2?A>=d.area.bounds[G]:A<=d.area.bounds[G]))return d.tiles;const T=i().getStyle().sources[F==="osm"?"composite":"city-concordia"],W=await ki({sourceConfig:T,source:F,bounds:v.bounds,accessToken:r,signal:M.signal,paddingTiles:1,onProgress:A=>{_===l&&(n.progress=A)}});if(s||M.signal.aborted||_!==l)throw new DOMException("Cancelled","AbortError");const $=Ae(W.features);return d={source:F,area:v,tiles:W,preview:$},n.loadedArea=ce({source:F,bounds:[...v.bounds],extentM:[...v.extentM],count:$.features.length}),c(),W}async function x(){if(n.loading||s)return null;const v=i();if(!v||!e.value)return n.error="Wait for the map to load.",null;const F=new AbortController,M=l,_=n.source;o=F,n.loading=!0,n.progress=0,n.error="";try{const T=v.getCenter().wrap().toArray(),W=me(T)([-1500,-1500]),$=Le(W,me(W)([3e3,3e3]));return p($),await m($,_,F,M),s||F.signal.aborted||M!==l?null:(n.snapshot=null,t==null||t(),n.loadedArea)}catch(T){return F.abort(),!s&&M===l&&T.name!=="AbortError"&&(n.error=T.message),null}finally{o===F&&(o=null,s||(n.loading=!1))}}async function S(){if(n.loading||s)return null;!n.region&&(d==null?void 0:d.source)===n.source&&f(d.area.polygon);const v=i(),F=n.region,M=n.source,_=l;if(!v||!e.value||!F)return n.error="Draw and finish a valid polygon first.",null;const T=new AbortController;o=T,n.loading=!0,n.progress=0,n.error="";try{const W=ct(F.selection??F.polygon);let $=W,A,G;for(let ee=0;ee<4;ee++){if(G=await m($,M,T,_),s||T.signal.aborted||_!==l)return null;A=li(G.features,W);const be=G.coverageBounds;if(A.bounds.every((D,L)=>L<2?D>be[L]+1e-8:D<be[L]-1e-8)||!A.buildings.features.length)break;if(ee===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");$=A}return A=di(A),A.source=M,A.dataZoom=G.zoom,A.tileCount=G.tileCount,A.surroundings=Ae(A.surroundings.features),A.warnings=A.warnings.filter(ee=>!ee.startsWith("Loaded map tiles only")),A.warnings.push("Detailed tiles downloaded at zoom "+G.zoom+" independently of the camera; provider data may still omit buildings."),A.warnings.push("Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground."),A.warnings.push("The simulation includes 10% open-ground padding per side; no additional buildings are selected in the buffer."),n.snapshot=ce(A),n.region=ce({origin:A.origin,bounds:A.bounds,extentM:A.extentM,polygon:A.polygon,selection:A.selection,mainDomain:A.mainDomain,buffer:A.buffer}),c(),p(A),t==null||t(),A}catch(W){return T.abort(),!s&&_===l&&W.name!=="AbortError"&&(n.error=W.message),null}finally{o===T&&(o=null,s||(n.loading=!1))}}function P(){const v=i();if(!(!a||!v)){for(const F of["draw.create","draw.update","draw.delete"])v.off(F,h);v.off("draw.modechange",w),v.removeControl(a),a=null,n.drawing=!1}}function C(){o==null||o.abort(),P()}function E(){var v;c(),(v=n.region)!=null&&v.selection&&y()}function B(){s=!0,l++,o==null||o.abort(),P()}Q(()=>n.source,()=>{u(),c(),n.error=""}),Ke(B);function O(){return(d==null?void 0:d.preview)??null}return{state:n,startSelection:g,stopSelection:b,clearSelection:k,setSelection:f,captureRegion:S,loadBuildings:x,getPreview:O,restore:E,beforeStyleChange:C,dispose:B}}function Ci(i){const[e,t]=i.extentM,r=Math.round(e/4),n=Math.round(t/4);if(r<1||n<1||!Number.isSafeInteger(r*n)||Math.abs(r*4-e)>1e-5||Math.abs(n*4-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const a=Ve(i.origin),s=new Float32Array(r*n);for(const d of i.buildings.features){const u=Number(d.properties.height);if(!Number.isFinite(u)||u<0||u>240)throw new Error("Invalid building height (0..240 metres).");if(!u)continue;const c=Math.max(1,Math.round(u/1.5)),f=d.geometry.type==="Polygon"?[d.geometry.coordinates]:d.geometry.coordinates;for(const h of f){const w=h.map(g=>g.map(a));let y=1/0,b=-1/0;for(const g of w)for(const k of g)y=Math.min(y,k[1]),b=Math.max(b,k[1]);for(let g=Math.max(0,Math.ceil(y/4-.5));g<Math.min(n,Math.ceil(b/4-.5));g++){const k=(g+.5)*4,p=[];for(const m of w)for(let x=0,S=m.length-1;x<m.length;S=x++){const P=m[S],C=m[x];(P[1]<=k&&C[1]>k||C[1]<=k&&P[1]>k)&&p.push(P[0]+(k-P[1])*(C[0]-P[0])/(C[1]-P[1]))}p.sort((m,x)=>m-x);for(let m=0;m+1<p.length;m+=2){const x=Math.max(0,Math.ceil(p[m]/4-.5-1e-8)),S=Math.min(r,Math.ceil(p[m+1]/4-.5-1e-8));for(let P=x;P<S;P++)s[g*r+P]=Math.max(s[g*r+P],c)}}}}let o=0,l=0;for(const d of s)d>0&&o++,l=Math.max(l,d);return{layers:s,nx:r,ny:n,origin:[...i.origin],extentM:[...i.extentM],mainDomain:i.mainDomain,buffer:i.buffer,spacingM:4,layerSpacingM:1.5,statistics:{builtCells:o,maximumHeightM:l*1.5}}}function Fi({heightM:i,directionDeg:e,speedMps:t}){const r=(d,u)=>{if(d===""||d===null||d===void 0||!Number.isFinite(Number(d)))throw new Error("Invalid "+u+".");return Number(d)},n=r(i,"height"),a=r(e,"direction"),s=r(t,"speed");if(n<.75||n>239.25)throw new Error("Height must be between 0.75 and 239.25 m.");if(s<.5||s>20)throw new Error("Wind speed must be between 0.5 and 20 m/s.");const o=Math.max(0,Math.min(159,Math.round(n/1.5-.5))),l=(a%360+360)%360;return{layerIndex:o,heightM:(o+.5)*1.5,directionDeg:l,thetaRad:l*Math.PI/180,speedMps:s}}class tt{constructor(e,t,r){this.adapter=e,this.device=t,this.useF16=r,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),r=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new tt(e,r,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,r){const n=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:n,usage:t,label:r});return a._tracked=n,this.liveBytes+=n,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,t,r=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|r,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),n=new Uint32Array(r),a=new Int32Array(r),s=new Float32Array(r);e.forEach(([l,d],u)=>{l==="u"?n[u]=d:l==="i"?a[u]=d:s[u]=d});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,r),this.scratch.push(o),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,r,n,a=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:r.map((l,d)=>({binding:d,resource:{buffer:l}}))}));const s=Math.max(1,Math.ceil(n/a)),o=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(s,o),Math.ceil(s/o))}async readFloat32(e,t){const r=t*4,n=this.buffer(r,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,n,0,n.size),this.device.queue.submit([a.finish()]),await n.mapAsync(GPUMapMode.READ);const s=new Float32Array(n.getMappedRange().slice(0,r));return n.unmap(),this.free(n),s}}function It(i){const e=new Uint16Array(i.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let n=0;n<i.length;n++){t[0]=i[n];const a=r[0],s=a>>>16&32768,o=a>>>23&255;let l=a&8388607;if(o===255){e[n]=s|31744|(l?1:0);continue}const d=o-127+15;if(d>=31){e[n]=s|31744;continue}if(d<=0){if(d<-10){e[n]=s;continue}l|=8388608;const c=14-d;let f=l>>>c;l>>>c-1&1&&(f+=1),e[n]=s|f;continue}let u=d<<10|l>>>13;l&4096&&(u+=1),e[n]=s|u}return e}function _i(i){const e=new Float32Array(i.length);for(let t=0;t<i.length;t++){const r=i[t],n=r&32768?-1:1,a=r>>10&31,s=r&1023;a===0?e[t]=n*s*2**-24:a===31?e[t]=s?NaN:n*(1/0):e[t]=n*(1+s/1024)*2**(a-15)}return e}const ie=180,Bt=4,At=7,it=Bt*At,Ee=1.5,wt=4,Ii=1600,_e=i=>i.toFixed(6),Bi=640,Ai=`
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
  let angles = ${ie}u;
  if (g >= u.pixelCount * angles) { return; }
  let localPixel = g / angles;
  let angle = g - localPixel * angles;
  let pixel = u.pixelOffset + localPixel;
  let nx = i32(u.gx);
  let ny = i32(u.gy);
  var x = i32(pixel % u.gx);
  var y = i32(pixel / u.gx);
  let gxr = cosT[angle] / ${_e(wt)};
  let gyr = sinT[angle] / ${_e(wt)};

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

  let cutoff = ${_e(Ii)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Bi}u; step++) {
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
}`,Ei=`
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
  let angles = ${ie}u;
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
  let out = (u.pixelOffset + localPixel) * ${it}u
          + sig * ${At}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,$i=i=>`${i==="f16"?`enable f16;
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
@group(0) @binding(5) var<storage, read_write> out: array<${i}>;
@group(0) @binding(6) var<uniform> u: P;

fn sampleField(ey: f32, ex: f32, channel: u32) -> f32 {
  let y0 = floor(ey); let x0 = floor(ex);
  let fy = ey - y0; let fx = ex - x0;
  let iy0 = clamp(i32(y0), 0, i32(u.gy) - 1);
  let ix0 = clamp(i32(x0), 0, i32(u.gx) - 1);
  let iy1 = clamp(iy0 + 1, 0, i32(u.gy) - 1);
  let ix1 = clamp(ix0 + 1, 0, i32(u.gx) - 1);
  let c = ${it}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${_e(Ee)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${i==="f16"?"f16(value)":"value"};
}`;class Ri{constructor(e,t,r,n,a,s="f32"){this.context=e,this.store=s,this.ny=r,this.nx=n,this.margin=a,this.gy=r+2*a,this.gx=n+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const o=new Float32Array(this.gy*this.gx);for(let u=0;u<r;u++){const c=u*n,f=(u+a)*this.gx+a;for(let h=0;h<n;h++)o[f+h]=t[c+h]*Ee}this.heightBuffer=e.upload(o,"mddf.height");const l=new Float32Array(ie),d=new Float32Array(ie);for(let u=0;u<ie;u++){const c=2*Math.PI*u/ie;l[u]=Math.cos(c),d[u]=Math.sin(c)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(d,"mddf.sin"),this.rawBuffer=e.storage(Bt*this.chunk*ie*4,"mddf.raw"),this.fieldBuffer=e.storage(this.gy*this.gx*it*4,"mddf.field"),this.tracePipeline=e.pipeline(Ai),this.fourierPipeline=e.pipeline(Ei),this.assemblePipeline=e.pipeline($i(s)),this.currentLayer=-1}async compute(e,t={}){var s,o;const{context:r}=this,n=(e+.5)*Ee,a=this.gy*this.gx;for(let l=0;l<a;l+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const d=Math.min(this.chunk,a-l),u=r.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",l],["u",d],["u",0],["u",0],["u",0],["f",n],["f",0],["f",0],["f",0]]),c=r.device.createCommandEncoder(),f=c.beginComputePass();r.dispatch(f,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,u],d*ie),r.dispatch(f,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,u],d*4,64),f.end(),r.device.queue.submit([c.finish()]),await r.device.queue.onSubmittedWorkDone(),(o=t.onProgress)==null||o.call(t,(l+d)/a)}await r.device.queue.onSubmittedWorkDone(),r.releaseScratch(),this.currentLayer=e}assemble(e,t,r,n,a,s,o){const{context:l}=this,d=t.length/2,u=l.upload(t,"assemble.origins"),c=l.uniform([["u",d],["u",r.channels],["u",r.mddfChannels],["u",s],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",r.solidChannel],["i",r.coordChannel],["i",0],["i",0],["f",Math.cos(n)],["f",Math.sin(n)],["f",n],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",r.coordYScale],["f",(a-r.coordZCentre)/r.coordZScale],["f",r.coordXCentre],["f",r.coordXScale],["f",0],["f",0]]),f=e.beginComputePass();return l.dispatch(f,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,u,r.tableBuffer,r.normBuffer,o,c],d*r.channels*s*s),f.end(),u}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.fieldBuffer])this.context.free(e)}}const je=`
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
`,Di=`
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
}`;function xt(i,e,t,r=1e-5){const n=i==="f16"||e==="f16"?`enable f16;
`:"",a=o=>i==="f16"?`f32(${o})`:o,s=o=>e==="f16"?`f16(${o})`:o;return`${n}
@group(0) @binding(0) var<storage, read> X: array<${i}>;
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
    Y[base + i] = ${s("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const Oe=32;function Ti(i){const{store:e,patch:t,modes1:r,modes2:n}=i,a=t*t,s=2*r,o=e==="f16"?`enable f16;
`:"",l=u=>e==="f16"?`f32(${u})`:u,d=u=>e==="f16"?`f16(${u})`:u;return{conv1x1:`${o}${je}
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
}`,gate:`${o}${je}
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
}`,instanceNorm:xt(e,e,a),instanceNormScaled:xt(e,e,a,1e-5/(Oe*Oe)),forwardColumns:`${o}
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
  let base = bc * ${a}u + y * ${t}u;
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
  let block = ${s*n}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${n}u;
  let s = (g / ${n}u) % ${s}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${r}u);
  let sp = s - half * ${r}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${r*n}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${n}u + k;
  let xBase = (b * u.channels * ${s}u + s) * ${n}u + k;
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
  let base = (bc * ${t}u + y) * ${n}u;
  for (var k = 0u; k < ${n}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${d("acc * "+1/Oe)};
}`,residual:`${o}${je}
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
}`}}function Vi(i,e,t){const r=2*e,n=[];for(let h=0;h<e;h++)n.push(h);for(let h=i-e;h<i;h++)n.push(h);const a=new Float32Array(i*t),s=new Float32Array(i*t);for(let h=0;h<i;h++)for(let w=0;w<t;w++){const y=2*Math.PI*h*w/i;a[h*t+w]=Math.cos(y),s[h*t+w]=-Math.sin(y)}const o=new Float32Array(r*i),l=new Float32Array(r*i);for(let h=0;h<r;h++)for(let w=0;w<i;w++){const y=2*Math.PI*n[h]*w/i;o[h*i+w]=Math.cos(y),l[h*i+w]=-Math.sin(y)}const d=new Float32Array(i*r),u=new Float32Array(i*r);for(let h=0;h<i;h++)for(let w=0;w<r;w++){const y=2*Math.PI*n[w]*h/i;d[h*r+w]=Math.cos(y)/i,u[h*r+w]=Math.sin(y)/i}const c=new Float32Array(t*i),f=new Float32Array(t*i);for(let h=0;h<t;h++){const w=(h===0?1:2)/i;for(let y=0;y<i;y++){const b=2*Math.PI*h*y/i;c[h*i+y]=w*Math.cos(b),f[h*i+y]=-w*Math.sin(b)}}return{forwardCos:a,forwardSin:s,rowRe:o,rowIm:l,inverseRowRe:d,inverseRowIm:u,inverseColCos:c,inverseColSin:f}}class Li{constructor(e,t,r,n){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=n,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[d,u]of Object.entries(Ti(s)))this.pipelines[d]=e.pipeline(u);this.contractPipeline=e.pipeline(Di);const o=d=>{const u=t.tensors[d];if(!u)throw new Error(`missing tensor ${d}`);return _i(new Uint16Array(r,u.offset,u.count))};this.read=o,this.tables={};for(const[d,u]of Object.entries(Vi(this.patch,this.modes1,this.modes2)))this.tables[d]=e.upload(u,`fno.table.${d}`);this.weights={};const l=(d,u)=>{const c=o(u);this.weights[d]=this.store==="f16"?e.upload(It(c),`fno.${d}`):e.upload(c,`fno.${d}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let d=0;d<this.layers;d++)l(`m1w${d}`,`mlp_layers.${d}.mlp1.weight`),l(`m1b${d}`,`mlp_layers.${d}.mlp1.bias`),l(`m2w${d}`,`mlp_layers.${d}.mlp2.weight`),l(`m2b${d}`,`mlp_layers.${d}.mlp2.bias`),l(`lw${d}`,`w_layers.${d}.weight`),l(`lb${d}`,`w_layers.${d}.bias`);this.buildSpectralWeights(),this.allocate(n)}buildSpectralWeights(){const{context:e,metadata:t}=this,r=t.tucker;let n=r.core_shape.slice(),a=e.upload(this.read(`${r.core}.re`),"tucker.core.re"),s=e.upload(this.read(`${r.core}.im`),"tucker.core.im");for(const l of r.factors){const[d,u]=l.shape;if(n[l.mode]!==u)throw new Error(`factor ${l.name} does not match the core`);const c=n.slice();c[l.mode]=d;const f=c.reduce((x,S)=>x*S,1),h=c.slice(l.mode+1).reduce((x,S)=>x*S,1),w=e.storage(f*4,"tucker.re"),y=e.storage(f*4,"tucker.im"),b=e.upload(this.read(`${l.name}.re`),"tucker.f"),g=e.upload(this.read(`${l.name}.im`),"tucker.f"),k=e.uniform([["u",c[0]],["u",c[1]],["u",c[2]],["u",c[3]],["u",c[4]],["u",l.mode],["u",d],["u",u],["u",h],["u",0],["u",f],["u",0]]),p=e.device.createCommandEncoder(),m=p.beginComputePass();e.dispatch(m,this.contractPipeline,[a,s,b,g,w,y,k],f),m.end(),e.device.queue.submit([p.finish()]),e.free(a),e.free(s),e.free(b),e.free(g),a=w,s=y,n=c}e.releaseScratch();const o=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(n.join()!==o.join())throw new Error(`spectral stack is ${n} but ${o} was expected`);this.spectralRe=a,this.spectralIm=s}allocate(e){const{context:t}=this,r=this.patch*this.patch,n=this.width,a=2*this.modes1,s=(l,d)=>t.storage(e*l*r*this.elementBytes,d),o=(l,d)=>t.storage(e*n*l*4,d);this.buffers={input:s(this.inputChannels,"fno.input"),x:s(n,"fno.x"),t1:s(n,"fno.t1"),t2:s(n,"fno.t2"),gates:s(4*n,"fno.gates"),hidden:s(2*n,"fno.hidden"),spectral:s(n,"fno.spectral"),local:s(n,"fno.local"),wide:s(2*n,"fno.wide"),output:s(this.outputChannels,"fno.output"),xRe:o(this.patch*this.modes2,"fno.xRe"),xIm:o(this.patch*this.modes2,"fno.xIm"),yRe:o(a*this.modes2,"fno.yRe"),yIm:o(a*this.modes2,"fno.yIm"),zRe:o(a*this.modes2,"fno.zRe"),zIm:o(a*this.modes2,"fno.zIm"),wRe:o(this.patch*this.modes2,"fno.wRe"),wIm:o(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,r=this.width,n=2*this.modes1,a=this.inputChannels+5*r+4*r+2*r+2*r+this.outputChannels,s=r*(2*this.patch*this.modes2*2+4*n*this.modes2)*4;return e*(a*t*this.elementBytes+s)}encode(e,t){const{context:r,buffers:n,pipelines:a,tables:s}=this,o=this.width,l=this.patch*this.patch,d=2*this.modes1,u=e.beginComputePass(),c=(h,w,y,b,g=256)=>{r.dispatch(u,h,[...w,r.uniform(y)],b,g)},f=(h,w,y=a.instanceNorm)=>{u.setPipeline(y),u.setBindGroup(0,r.device.createBindGroup({layout:y.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:{buffer:w}}]})),u.dispatchWorkgroups(t*o)};c(a.conv1x1,[n.input,this.weights.p1w,this.weights.p1b,n.wide],[["u",t],["u",this.inputChannels],["u",2*o],["u",1]],t*2*o*l),c(a.conv1x1,[n.wide,this.weights.p2w,this.weights.p2b,n.x],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l);for(let h=0;h<this.layers;h++)f(n.x,n.t1),c(a.forwardColumns,[n.t1,s.forwardCos,s.forwardSin,n.xRe,n.xIm],[["u",t],["u",o],["u",0],["u",0]],t*o*this.patch*this.modes2),c(a.rowMix,[n.xRe,n.xIm,s.rowRe,s.rowIm,n.yRe,n.yIm],[["u",t],["u",o],["u",d],["u",this.patch]],t*o*d*this.modes2),c(a.spectralMix,[n.yRe,n.yIm,this.spectralRe,this.spectralIm,n.zRe,n.zIm],[["u",t],["u",o],["u",2*h],["u",0]],t*o*d*this.modes2),c(a.rowMix,[n.zRe,n.zIm,s.inverseRowRe,s.inverseRowIm,n.wRe,n.wIm],[["u",t],["u",o],["u",this.patch],["u",d]],t*o*this.patch*this.modes2),c(a.inverseColumns,[n.wRe,n.wIm,s.inverseColCos,s.inverseColSin,n.t2],[["u",t],["u",o],["u",0],["u",0]],t*o*l),f(n.t2,n.t1,a.instanceNormScaled),c(a.conv1x1,[n.t1,this.weights[`m1w${h}`],this.weights[`m1b${h}`],n.gates],[["u",t],["u",o],["u",4*o],["u",0]],t*4*o*l),c(a.gate,[n.gates,n.hidden],[["u",t],["u",2*o],["u",0],["u",0]],t*2*o*l),c(a.conv1x1,[n.hidden,this.weights[`m2w${h}`],this.weights[`m2b${h}`],n.spectral],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l),c(a.conv1x1,[n.x,this.weights[`lw${h}`],this.weights[`lb${h}`],n.local],[["u",t],["u",o],["u",o],["u",0]],t*o*l),c(a.residual,[n.spectral,n.local,n.x],[["u",t*o*l],["u",h<this.layers-1?1:0],["u",0],["u",0]],t*o*l);return c(a.conv1x1,[n.x,this.weights.q1w,this.weights.q1b,n.wide],[["u",t],["u",o],["u",2*o],["u",1]],t*2*o*l),c(a.conv1x1,[n.wide,this.weights.q2w,this.weights.q2b,n.output],[["u",t],["u",2*o],["u",this.outputChannels],["u",0]],t*this.outputChannels*l),u.end(),n.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const zi=i=>i.toFixed(6),Ni=i=>`${i==="f16"?`enable f16;
`:""}
struct P {
  gridH: u32, gridW: u32, patchSize: u32, channels: u32,
  columnCount: u32, patchCount: u32, readyCount: u32, pad0: u32,
  rectY0: u32, rectX0: u32, rectH: u32, rectW: u32,
  columnStride: f32, minimumWeight: f32, pad1: f32, pad2: f32,
};
@group(0) @binding(0) var<storage, read> patches: array<${i}>;
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
}`,Ui=`
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
                      / ${zi(Ee)});
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
}`;function Wi(i,e){if(!i)return e;if(!e)return i;const t=Math.min(i.y0,e.y0),r=Math.min(i.x0,e.x0);return{y0:t,x0:r,h:Math.max(i.y0+i.h,e.y0+e.h)-t,w:Math.max(i.x0+i.w,e.x0+e.w)-r}}function ji(i,e,t){let r=1/0,n=-1/0;const a=s=>{r=Math.min(r,s),n=Math.max(n,s)};for(let s=0;s<4;s++){const o=i[s],l=i[(s+1)%4];o[1]>=e&&o[1]<=t&&a(o[0]);for(const d of[e,t])if((o[1]-d)*(l[1]-d)<0){const u=(d-o[1])/(l[1]-o[1]);a(o[0]+u*(l[0]-o[0]))}}return r<=n?[r,n]:null}class Oi{constructor(e,t,r,n={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=n.batchSize||16,this.fno=new Li(e,t,r,this.batchSize),this.blendPipeline=e.pipeline(Ni(this.fno.store)),this.finalizePipeline=e.pipeline(Ui),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,r=t.features,n=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,s=r.mddf_source_indices,o=new Uint32Array(s.length*4),l=new Float32Array(s.length*2);s.forEach((u,c)=>{const f=Math.floor(u/n),h=u%n,w=h>a?1:0,y=h===0?0:w?h-a:h;o.set([f*n+y,f*n+(y===0?0:a+y),y,w],c*4),l[c*2]=r.mddf_center[c],l[c*2+1]=r.mddf_scale[c]});const d=t.coordinates;return{channels:t.model.input_channels,mddfChannels:s.length,solidChannel:r.use_building_input?s.length:-1,coordChannel:s.length+(r.use_building_input?1:0),coordYScale:d.y_scale,coordZCentre:d.z_center,coordZScale:d.z_scale,coordXCentre:d.x_center,coordXScale:d.x_scale,tableBuffer:e.upload(o,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,t,r){this.city&&this.city.field.destroy();const n=Math.ceil(this.patch*Math.SQRT2),a=(t+2*n)*(r+2*n)*28*4,s=this.context.device.limits.maxStorageBufferBindingSize;if(a>s)throw new Error(`city ${r} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(s/2**20).toFixed(0)} MiB`);const o=new Ri(this.context,e,t,r,n,this.fno.store);return this.city={field:o,ny:t,nx:r,layerMap:e,margin:n,layerIndex:-1},{margin:n,gy:o.gy,gx:o.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:r}=this.city,n=(t-1)/2,a=(r-1)/2,s=Math.cos(e),o=Math.sin(e),l=[[0,0],[r-1,0],[r-1,t-1],[0,t-1]].map(([p,m])=>{const x=p-a,S=m-n;return[a+x*s+S*o,n-x*o+S*s]}),d=Math.floor(Math.min(...l.map(p=>p[1]))),u=Math.ceil(Math.max(...l.map(p=>p[1]))),c=Math.floor(Math.min(...l.map(p=>p[0]))),f=Math.ceil(Math.max(...l.map(p=>p[0]))),h=f-c+1,w=Math.max(1,Math.ceil((h-this.patch)/this.stride)+1),y=w>1?(h-this.patch)/(w-1):0,b=l.map(([p,m])=>[m,p]),g=[],k=[];for(let p=0;p<w;p++){const m=Math.round(c+p*y),x=ji(b,m,m+this.patch-1)||[d,d+this.patch-1],S=Math.floor(x[0]),P=Math.max(this.patch,Math.ceil(x[1])-S+1),C=Math.max(1,Math.ceil((P-this.patch)/this.stride)+1),E=C>1?(P-this.patch)/(C-1):0;k.push([g.length/2,C,m-c]);for(let B=0;B<C;B++)g.push(m,Math.round(S+B*E))}return{origins:new Float32Array(g),columns:k,columnCount:w,columnStride:y,syMin:d,sxMin:c,gridH:u-d+1,gridW:f-c+1,patchCount:g.length/2}}patchRect(e,t,r){let n=1/0,a=1/0,s=-1/0,o=-1/0;for(const[l,d,u]of e.columns)for(let c=0;c<d;c++){const f=l+c;if(f<t||f>=r)continue;const h=e.origins[f*2+1]-e.syMin;n=Math.min(n,h),a=Math.min(a,u),s=Math.max(s,h+this.patch),o=Math.max(o,u+this.patch)}return Number.isFinite(n)?(n=Math.max(0,n),a=Math.max(0,a),s=Math.min(e.gridH,s),o=Math.min(e.gridW,o),{y0:n,x0:a,h:Math.max(0,s-n),w:Math.max(0,o-a)}):null}async predict(e,t={}){var ee,be,ze;const{context:r,city:n}=this,a=this.tiling(e),s=this.metadata.model.output_channels,o=a.gridH*a.gridW,l=this.patch*this.patch,d=performance.now(),u=!!(t.shouldDraw&&t.onDraw),c=s+2,f=r.storage(a.patchCount*s*l*this.fno.elementBytes,"predict.patches"),h=new Int32Array(a.patchCount);for(let D=0;D<a.patchCount;D++)h[D]=a.origins[D*2+1]-a.syMin;const w=r.upload(h,"blend.origins"),y=r.upload(new Int32Array(a.columns.flat()),"blend.columns"),b=r.storage(o*s*4,"blend.field"),g=r.storage(o*4,"blend.weight"),k=r.storage(o*4,"blend.solid"),p=r.storage(u?o*4:4,"blend.finalWeight"),m=r.storage(u?o*c*4:4,"blend.packed"),x=this.metadata.target,S=r.upload(new Float32Array(x.center),"final.centre"),P=r.upload(new Float32Array(x.scale),"final.scale"),C={y0:0,x0:0,h:a.gridH,w:a.gridW},E=(D,L,H,oe)=>{const Ce=D.beginComputePass();r.dispatch(Ce,this.blendPipeline,[f,w,y,b,oe,r.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",s],["u",a.columnCount],["u",a.patchCount],["u",H],["u",0],["u",L.y0],["u",L.x0],["u",L.h],["u",L.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],L.h*L.w),Ce.end()},B=(D,L,H)=>{const oe=D.beginComputePass();r.dispatch(oe,this.finalizePipeline,[b,g,S,P,n.field.heightBuffer,k,p,m,r.uniform([["u",a.gridH],["u",a.gridW],["u",s],["u",H?1:0],["u",L.y0],["u",L.x0],["u",L.h],["u",L.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(n.ny-1)/2],["f",(n.nx-1)/2],["f",n.field.gy],["f",n.field.gx],["f",n.margin],["f",n.layerIndex],["f",n.ny],["f",n.nx],["f",0],["f",0]])],L.h*L.w),oe.end()};if(u){const D=r.device.createCommandEncoder();E(D,C,a.patchCount,p),r.device.queue.submit([D.finish()]),(ee=t.onStart)==null||ee.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const O=2,v=[];let F=null;for(let D=0;D<a.patchCount;D+=this.batchSize){(be=t.signal)==null||be.throwIfAborted();const L=Math.min(this.batchSize,a.patchCount-D),H=r.device.createCommandEncoder(),oe=n.field.assemble(H,a.origins.subarray(D*2,(D+L)*2),this.plan,e,n.layerIndex,this.patch,this.fno.inputBuffer),Ce=this.fno.encode(H,L);H.copyBufferToBuffer(Ce,0,f,D*s*l*this.fno.elementBytes,L*s*l*this.fno.elementBytes);let Z=null;if(u){F=Wi(F,this.patchRect(a,D,D+L));const Ne=D+L>=a.patchCount;F&&F.h>0&&F.w>0&&(Ne||t.shouldDraw())&&(Z=F,F=null,E(H,Z,D+L,g),B(H,Z,!0))}if(r.device.queue.submit([H.finish()]),r.free(oe),await r.device.queue.onSubmittedWorkDone(),(ze=t.onProgress)==null||ze.call(t,(D+L)/a.patchCount),u&&(v.push(r.device.queue.onSubmittedWorkDone()),v.length>O&&await v.shift()),Z){const Ne=await r.readFloat32(m,Z.h*Z.w*c);t.onDraw({x0:Z.x0,y0:Z.y0,width:Z.w,height:Z.h,stride:c,channels:s,theta:e,values:Ne,readyCount:D+L,patchCount:a.patchCount})}}const M=r.device.createCommandEncoder();E(M,C,a.patchCount,g),B(M,C,!1),r.device.queue.submit([M.finish()]);const _=await r.readFloat32(b,o*s),T=await r.readFloat32(k,o),W=await r.readFloat32(g,o),$=performance.now()-d;let A=0,G=0;for(let D=0;D<o;D++)if(T[D]!==2){if(W[D]<=1e-6){A+=1;continue}for(let L=0;L<s;L++)if(!Number.isFinite(_[D*s+L])){G+=1;break}}for(const D of[f,b,g,k,w,y,S,P,p,m])r.free(D);return r.releaseScratch(),{values:_,solid:T,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:x.channel_names,milliseconds:$,uncovered:A,nonFinite:G,insideCells:o}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}}function Xi(i,e){var t,r,n,a,s,o,l,d,u;if(i.dtype!=="float16"||i.total_bytes!==e||((t=i.grid)==null?void 0:t.horizontal_spacing_m)!==4||((r=i.grid)==null?void 0:r.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((n=i.model)==null?void 0:n.input_channels)!==24||((a=i.model)==null?void 0:a.output_channels)!==5||((o=(s=i.inference)==null?void 0:s.patch)==null?void 0:o.join())!=="64,64"||((d=(l=i.target)==null?void 0:l.channel_names)==null?void 0:d.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const c of Object.values(i.tensors??{}))if(!Number.isInteger(c.offset)||c.offset<0||c.offset%2||!Number.isInteger(c.count)||c.count<=0||c.offset+c.count*2>e||!Array.isArray(c.shape)||c.shape.some(f=>!Number.isInteger(f)||f<1)||c.shape.reduce((f,h)=>f*h,1)!==c.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(i.tensors??{}).length||!Number.isFinite((u=i.wind)==null?void 0:u.reference_speed_m_s)||i.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function qi(i){if(!Number.isInteger(i.width)||!Number.isInteger(i.height)||i.width<1||i.height<1||i.values.length!==i.width*i.height*5||i.solid.length!==i.width*i.height)throw new Error("Invalid prediction shape.");for(let e=0;e<i.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(i.values[e*5+t])||(i.solid[e]=2,i.values[e*5+t]=0)}function Yi(){const i=Me({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,downloading:!1});let e=null,t=null,r=null,n=null,a=null,s=!1,o=0;const l=new AbortController;function d(){try{t==null||t.destroy()}finally{e==null||e.device.destroy(),t=null,e=null,a=null}}async function u(){if(t)return;i.stage="Loading model";const y="/cityffdv2-demo/flume/",[b,g,k]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async p=>{const m=await fetch(y+p,{signal:l.signal});if(!m.ok)throw new Error("Could not load "+p+" (HTTP "+m.status+").");return p.endsWith(".bin")?m.arrayBuffer():m.json()}));Xi(b,g.byteLength),l.signal.throwIfAborted(),e=await tt.create(),l.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",p=>{i.error="WebGPU: "+p.error.message.split(`
`)[0]}),e.device.lost.then(p=>{!s&&p.reason!=="destroyed"&&(i.error="GPU device lost. Run again to initialize a new session.",i.prediction=null,t=null,e=null,a=null)}),r=b,n=k,t=new Oi(e,r,g,{batchSize:4})}async function c(y,b){if(s||i.busy||i.downloading)return null;i.busy=!0,i.error="",i.progress=0;const g=++o;try{if(await u(),s||g!==o||(y!==a&&(t.setCity(y.layers,y.ny,y.nx),a=y),i.stage="Preparing geometry · MDDF",await t.setHeight(b.layerIndex,{signal:l.signal,onProgress:m=>{!s&&g===o&&(i.progress=m*.25)}}),s||g!==o))return null;i.stage="Predicting wind · FNO";const k=await t.predict(b.thetaRad,{signal:l.signal,onProgress:m=>{!s&&g===o&&(i.progress=.25+m*.75)}});if(l.signal.throwIfAborted(),s||g!==o)return null;if(i.error)throw new Error(i.error);qi(k);const p={...k,grid:y,settings:{...b},referenceSpeed:r.wind.reference_speed_m_s,modelLabel:r.label,colorbar:n,inputRevision:g};return i.prediction=ce(p),i.progress=1,i.stage="Prediction ready",p}catch(k){return!s&&g===o&&(i.error=k.message,i.stage="Prediction failed",i.prediction=null),d(),null}finally{s?d():i.busy=!1}}async function f(){if(!t||!i.prediction||i.busy||i.downloading)throw new Error("Run a valid prediction before downloading MDDF.");i.downloading=!0;try{const y=t.city.field,b=await e.readFloat32(y.fieldBuffer,y.gy*y.gx*28);if(s)throw new Error("The page was closed.");return{values:b,ny:y.gy,nx:y.gx,margin:y.margin,layerIndex:t.city.layerIndex}}finally{i.downloading=!1,s&&d()}}function h(){o++,i.prediction=null,i.error="",i.progress=0,i.stage="Ready"}function w(){s=!0,o++,l.abort(),!i.busy&&!i.downloading&&d()}return Ke(w),{state:i,run:c,readMddf:f,invalidate:h,dispose:w}}function Gi(i,e){if(!i.mainDomain)return null;const t=Ve(i.origin),r=[...t(i.mainDomain.bounds.slice(0,2)),...t(i.mainDomain.bounds.slice(2,4))],n=new Se({uniforms:{extent:{value:new Ie(i.nx*4,i.ny*4)},mainBounds:{value:new Zt(...r)},mainColour:{value:new qe("#ffd000")},bufferColour:{value:new qe("#38bdf8")}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,depthTest:!1,side:ke}),a=new ge(new Be(i.nx*4,i.ny*4),n);return a.name="flume-domain-overlay",a.position.set(i.nx*2,i.ny*2,e+.05),a.renderOrder=4,a.frustumCulled=!1,a}const Hi=[1.5,3],ue=8e3,ae={white:{pixelsPerParticle:680,maxParticles:1200,minParticles:150,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1},tinted:{pixelsPerParticle:340,maxParticles:2400,minParticles:300,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1}},Zi=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Ki=`
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
}`,Ji=`
attribute vec2 segment;
attribute vec3 tint;
attribute vec4 ends;          // the segment's two endpoints, in buffer pixels
varying vec3 vTint;
varying vec4 vEnds;
void main() {
  vTint = tint;
  vEnds = ends;
  gl_Position = vec4(segment, 0.0, 1.0);
}`,Qi=`
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
}`,en=`
#include <clipping_planes_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}`,tn=`
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
}`;class nn{constructor(e){this.renderer=e,this.enabled=!1,this.field=null,this.particles=[],this.viewKey="",this.width=1,this.height=1,this.stats={target:0,drawn:0,placed:0,bounds:null},this.settings={white:{...ae.white},tinted:{...ae.tinted}},this.mode="white",this.palette=null,this.tintRange=null,this.lastValue=0,this.ready=1,this.readyX=1/0,this.extent={x0:0,y0:0,x1:0,y1:0},this.degenerate=!1,this.camera=new Kt(-1,1,1,-1,0,1),this.quad=new ge(new Be(2,2),null),this.quad.frustumCulled=!1,this.quadScene=new Ye().add(this.quad),this.targets=null,this.fade=new Se({vertexShader:Zi,fragmentShader:Ki,uniforms:{previous:{value:null},drop:{value:.02},cutoff:{value:ae.white.trailCutoff}},depthTest:!1,depthWrite:!1,side:ke}),this.vertices=new Float32Array(ue*12),this.tints=new Float32Array(ue*18),this.ends=new Float32Array(ue*24);const t=new kt;t.setAttribute("segment",new xe(this.vertices,2).setUsage(Ue)),t.setAttribute("tint",new xe(this.tints,3).setUsage(Ue)),t.setAttribute("ends",new xe(this.ends,4).setUsage(Ue)),t.setAttribute("position",new xe(new Float32Array(ue*18),3)),this.lineGeometry=t,this.lines=new ge(t,new Se({vertexShader:Ji,fragmentShader:Qi,uniforms:{opacity:{value:ae.white.lineOpacity},halfWidth:{value:ae.white.lineWidth*.5}},depthTest:!1,depthWrite:!1,transparent:!0,side:ke})),this.lines.frustumCulled=!1,this.lineScene=new Ye().add(this.lines),this.material=new Se({vertexShader:en,fragmentShader:tn,uniforms:{trail:{value:null},resolution:{value:new Ie(1,1)},strength:{value:ae.white.strength},solid:{value:ae.white.solidFraction}},transparent:!0,depthWrite:!1,side:ke,clipping:!0}),this.mesh=new ge(new Be(1,1),this.material),this.mesh.visible=!1,this.planeSize=new Ie(1,1),this.plane=new ve,this.ray=new Jt,this.scratch=new q,this.matrix=new Ge}setResolution(e,t){if(!(e===this.width&&t===this.height)){this.width=Math.max(1,Math.round(e)),this.height=Math.max(1,Math.round(t));for(const r of this.targets||[])r.dispose();this.targets=[0,1].map(()=>new Qt(this.width,this.height,{minFilter:ot,magFilter:ot,format:He,type:Pt,depthBuffer:!1,stencilBuffer:!1})),this.material.uniforms.resolution.value.set(this.width,this.height),this.reset()}}setPlane(e,t){this.planeSize.set(e,t)}setField(e,t){this.field=e,this.metresPerCell=t,this.ready=1,this.readyX=1/0,this.reset()}setProgress(e,t){this.ready=Math.max(0,Math.min(1,e)),this.readyX=Math.max(this.readyX===1/0?0:this.readyX,t)}replaceField(e){this.field=e,this.ready=1,this.readyX=1/0}get p(){return this.settings[this.mode]||this.settings.white}setMode(e){e!=="white"&&e!=="tinted"||e!==this.mode&&(this.mode=e,this.applyUniforms())}setParam(e,t,r){const n=this.settings[e];!n||!(t in n)||!Number.isFinite(r)||(n[t]=r,e===this.mode&&this.applyUniforms())}applyUniforms(){const e=this.p;this.fade.uniforms.cutoff.value=e.trailCutoff,this.lines.material.uniforms.halfWidth.value=e.lineWidth*.5,this.lines.material.uniforms.opacity.value=e.lineOpacity,this.material.uniforms.strength.value=e.strength,this.material.uniforms.solid.value=e.solidFraction}setTinting(e,t){this.palette=e||null,this.tintRange=t||null}tintFor(e,t){if(!this.palette||!this.tintRange)return t[0]=1,t[1]=1,t[2]=1,t;const[r,n]=this.tintRange,a=Math.min(1,Math.max(0,(e-r)/Math.max(1e-6,n-r))),s=Math.min(255,Math.round(a*255))*4;return t[0]=this.palette[s]/255,t[1]=this.palette[s+1]/255,t[2]=this.palette[s+2]/255,t}reset(){if(this.particles.length=0,this.viewKey="",!this.targets)return;const e=this.renderer,t=e.getRenderTarget(),r=new qe,n=e.getClearAlpha();e.getClearColor(r),e.setClearColor(0,0);for(const a of this.targets)e.setRenderTarget(a),e.clear(!0,!1,!1);e.setClearColor(r,n),e.setRenderTarget(t)}sample(e,t,r){const n=this.field;if(!n||!Number.isFinite(e)||!Number.isFinite(t)||e<.5||t<.5||e>n.width-.5||t>n.height-.5)return null;const a=Math.min(n.width-1,Math.max(0,Math.round(e-.5))),s=Math.min(n.height-1,Math.max(0,Math.round(t-.5)));if(n.solid[s*n.width+a]!==0)return null;const o=Math.min(n.width-1,Math.max(0,e-.5)),l=Math.min(n.height-1,Math.max(0,t-.5)),d=Math.floor(o),u=Math.floor(l),c=Math.min(d+1,n.width-1),f=Math.min(u+1,n.height-1),h=o-d,w=l-u,y=b=>{const g=b[u*n.width+d],k=b[u*n.width+c],p=b[f*n.width+d],m=b[f*n.width+c];return(g*(1-h)+k*h)*(1-w)+(p*(1-h)+m*h)*w};return r[0]=y(n.u)/this.metresPerCell,r[1]=y(n.v)/this.metresPerCell,this.lastValue=n.value?y(n.value):0,Math.hypot(r[0],r[1])>.001?r:null}visibleBounds(e,t){const r=this.field,n={x0:.5,y0:.5,x1:r.width-.5,y1:r.height-.5},a=this.scratch.set(0,0,1).applyQuaternion(t.quaternion);this.plane.setFromNormalAndCoplanarPoint(a.clone(),t.position);let s=1/0,o=1/0,l=-1/0,d=-1/0;for(const[u,c]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const f=new q(u,c,-1).unproject(e),h=new q(u,c,1).unproject(e);this.ray.set(f,h.sub(f).normalize());const w=this.ray.intersectPlane(this.plane,new q);if(!w)return n;const y=t.worldToLocal(w),b=(y.x/this.planeSize.x+.5)*r.width,g=(y.y/this.planeSize.y+.5)*r.height;s=Math.min(s,b),l=Math.max(l,b),o=Math.min(o,g),d=Math.max(d,g)}return{x0:Math.max(n.x0,s),x1:Math.min(n.x1,l),y0:Math.max(n.y0,o),y1:Math.min(n.y1,d)}}respawn(e,t){e.age=0,e.life=0,e.x=NaN,e.y=NaN,(t.x1<=t.x0||t.y1<=t.y0)&&(t={x0:.5,y0:.5,x1:Math.min(this.readyX,this.field.width-.5),y1:this.field.height-.5},this.degenerate=!0);const r=[0,0];for(let n=0;n<40;n++){const a=t.x0+Math.random()*(t.x1-t.x0),s=t.y0+Math.random()*(t.y1-t.y0);if(this.sample(a,s,r)){e.x=a,e.y=s;const[o,l]=Hi;return e.life=this.p.trailSeconds*(o+Math.random()*(l-o)),!0}}return!1}toPixels(e,t,r,n){const a=this.field,s=this.scratch.set((e/a.width-.5)*this.planeSize.x,(t/a.height-.5)*this.planeSize.y,0);return s.applyMatrix4(this.matrix),n[0]=(s.x*.5+.5)*this.width,n[1]=(.5-s.y*.5)*this.height,n}track(e,t){const r=this.extent;e<r.x0&&(r.x0=e),e>r.x1&&(r.x1=e),t<r.y0&&(r.y0=t),t>r.y1&&(r.y1=t)}addSegment(e,t,r,n){const a=r[0]-t[0],s=r[1]-t[1],o=Math.hypot(a,s);if(o===0)return e;const l=this.p.lineWidth*.5,d=-s*l/o,u=a*l/o,c=a*l/o,f=s*l/o,h=t[0]-c,w=t[1]-f,y=r[0]+c,b=r[1]+f,g=2/this.width,k=2/this.height,p=(h+d)*g-1,m=1-(w+u)*k,x=(h-d)*g-1,S=1-(w-u)*k,P=(y+d)*g-1,C=1-(b+u)*k,E=(y-d)*g-1,B=1-(b-u)*k;this.vertices.set([p,m,x,S,P,C,P,C,x,S,E,B],e);const O=e*3/2,v=e*2,F=[t[0],this.height-t[1],r[0],this.height-r[1]];for(let M=0;M<6;M++)this.tints.set(n,O+M*3),this.ends.set(F,v+M*4);return this.track(p,m),this.track(P,C),e+12}step(e,t,r){if(!this.enabled||!this.field||!this.targets||!r)return!1;if(e>.1)return this.reset(),!1;r.updateWorldMatrix(!0,!1),this.matrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(r.matrixWorld);const n=t.projectionMatrix.elements.concat(t.matrixWorldInverse.elements).map(g=>g.toFixed(4)).join(",");n!==this.viewKey&&(this.reset(),this.viewKey=n);const a=this.visibleBounds(t,r),s={x0:a.x0,y0:a.y0,y1:a.y1,x1:Math.min(a.x1,this.readyX)},o=(a.x1-a.x0)*(a.y1-a.y0)/(this.field.width*this.field.height),l=this.p,d=Math.min(l.maxParticles,ue,Math.round(this.width*this.height/Math.max(1,l.pixelsPerParticle))),u=Math.min(ue,Math.round(Math.max(l.minParticles,d*Math.sqrt(Math.max(0,Math.min(1,o))))*this.ready));for(;this.particles.length<u;){const g={};this.respawn(g,s),this.particles.push(g)}this.particles.length>u&&(this.particles.length=u),this.extent={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};const c=this.p.timeScale*e,f=[0,0],h=[0,0],w=[0,0],y=[1,1,1];let b=0;for(const g of this.particles){if(g.age>=g.life&&this.respawn(g,s),!this.sample(g.x,g.y,f)){this.respawn(g,s);continue}const k=g.x+.5*f[0]*c,p=g.y+.5*f[1]*c;if(!this.sample(k,p,f)){this.respawn(g,s);continue}const m=g.x+f[0]*c,x=g.y+f[1]*c;if(m<a.x0||m>a.x1||x<a.y0||x>a.y1||!this.sample(m,x,f)){this.respawn(g,s);continue}this.tintFor(this.lastValue,y),b=this.addSegment(b,this.toPixels(g.x,g.y,r,h),this.toPixels(m,x,r,w),y),g.x=m,g.y=x,g.age+=e}return this.stats={target:u,drawn:b/12,placed:this.particles.filter(g=>Number.isFinite(g.x)).length,bounds:[a.x0,a.y0,a.x1,a.y1].map(g=>g.toFixed(0)).join("..")},this.draw(e,b),!0}draw(e,t){const r=this.renderer,n=r.getRenderTarget(),a=r.autoClear;r.autoClear=!1,this.fade.uniforms.previous.value=this.targets[0].texture,this.fade.uniforms.drop.value=Math.max(1e-4,e/Math.max(.01,this.p.trailSeconds)),this.quad.material=this.fade,r.setRenderTarget(this.targets[1]),r.render(this.quadScene,this.camera),t>0&&(this.lineGeometry.setDrawRange(0,t/2),this.lineGeometry.attributes.segment.needsUpdate=!0,this.lineGeometry.attributes.tint.needsUpdate=!0,this.lineGeometry.attributes.ends.needsUpdate=!0,r.render(this.lineScene,this.camera)),this.targets.reverse(),this.material.uniforms.trail.value=this.targets[0].texture,r.autoClear=a,r.setRenderTarget(n)}dispose(){for(const e of this.targets||[])e.dispose();this.lineGeometry.dispose(),this.lines.material.dispose(),this.material.dispose(),this.fade.dispose(),this.quad.geometry.dispose(),this.mesh.geometry.dispose()}}const Et={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},Xe=new Map;function rn(i){if(!Xe.has(i)){const e=Et[i],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);Xe.set(i,t)}return Xe.get(i)}function an(i,e){const t=rn(Et[i]?i:"viridis"),r=Math.min(1,Math.max(0,e))*255,n=Math.floor(r),a=Math.min(255,n+1),s=r-n;return[t[n*3]*(1-s)+t[a*3]*s,t[n*3+1]*(1-s)+t[a*3+1]*s,t[n*3+2]*(1-s)+t[a*3+2]*s]}const sn=1,on=new Set(["u","v","w"]),ln=6e4,$e=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis"},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno"},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],ne={u:0,w:1,v:2,T:3,tke:4};function nt(i,e,t,r){return dn(i.values,e*5,i.theta,t,r)}function dn(i,e,t,r,n){const a=i[e+ne.u]*n,s=i[e+ne.v]*n;switch(r){case"u":return a;case"v":return s;case"w":return i[e+ne.w]*n;case"speed":{const o=i[e+ne.w]*n;return Math.sqrt(a*a+s*s+o*o)}case"T":return i[e+ne.T];case"tke":return i[e+ne.tke]*n*n;default:return 0}}function un(i,e,t,r,n){if(e==="T")return i.fixed.T.slice();const s=(i.quantiles[r]||i.quantiles[Object.keys(i.quantiles)[0]])[e],o=Math.min(s.length-1,Math.max(0,Math.round(t))),l=s[o]*(e==="tke"?n*n:n);return i.shape[e]==="symmetric"?[-l,l]:[0,l]}function $t(i,e){return an(i,e)}function cn(i,e){const t=i.solid.length,r=new Float32Array(t*4);for(let n=0;n<t;n++){const a=n*4;r[a]=nt(i,n,e,1),r[a+1]=sn}return It(r)}function vt(i){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,n,a]=$t(i,t/255);e[t*4]=r,e[t*4+1]=n,e[t*4+2]=a,e[t*4+3]=255}return e}function fn(i,e,t){if(e==="T")return null;const r=e,n=i.solid.length,a=Math.max(1,Math.floor(n/ln)),s=on.has(r),o=[];for(let u=0;u<n;u+=a){const c=nt(i,u,r,1);o.push(s?Math.abs(c):c)}if(o.length<32)return null;o.sort((u,c)=>u-c);const l=Math.min(o.length-1,Math.floor(o.length*(Number(t)/100))),d=o[l];return d>0?s?[-d,d]:[0,d]:null}function hn(i,e){const t=i.solid.length,r=new Float32Array(t),n=new Float32Array(t),a=new Float32Array(t);for(let s=0;s<t;s++)a[s]=nt(i,s,e,1),r[s]=i.values[s*5+ne.u],n[s]=i.values[s*5+ne.v];return{u:r,v:n,value:a,solid:new Uint8Array(t),width:i.width,height:i.height}}function gn(i,e,t){const r=(i.grid.nx-1)/2,n=(i.grid.ny-1)/2,a=i.originX+e-r,s=i.originY+t-n,o=Math.cos(i.theta),l=Math.sin(i.theta);return[(r+a*o-s*l+.5)*4,(n+a*l+s*o+.5)*4]}function mn(i){const e=i.values.slice(),t=i.settings.speedMps/i.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const pn=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,yn=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function bn(i,e,t){let r,n,a,s,o,l,d,u,c,f,h=0;const w=new Ge,y=new Ge,b=Ct.MercatorCoordinate.fromLngLat(i.grid.origin),g=b.meterInMercatorCoordinateUnits(),[k,p]=gn(i,i.width/2-.5,i.height/2-.5),m=[new ve(new q(1,0,0),0),new ve(new q(-1,0,0),i.grid.nx*4),new ve(new q(0,1,0),0),new ve(new q(0,-1,0),i.grid.ny*4)];function x(){var O;if(!n)return;u==null||u.dispose(),c==null||c.dispose();const S=$e.find(v=>v.id===e.variable)??$e[0],P=cn(i,S.id);u=new lt(P,i.width,i.height,He,Pt),u.minFilter=u.magFilter=dt,u.needsUpdate=!0,c=new lt(vt(S.ramp),256,1,He),c.colorSpace=ii,c.minFilter=c.magFilter=dt,c.needsUpdate=!0;const C=Number(e.speedMps)/i.referenceSpeed,E=S.id==="T"?1:S.id==="tke"?C*C:C,B=((O=fn(i,S.id,"99.9"))==null?void 0:O.map(v=>v*E))??un(i.colorbar,S.id,i.settings.layerIndex,"99.9",Number(e.speedMps)/i.referenceSpeed);f.uniforms.field.value=u,f.uniforms.palette.value=c,f.uniforms.range.value.set(...B),o.visible=e.particles!=="tinted",d.setMode(e.particles==="tinted"?"tinted":"white"),d.enabled=e.particles!=="off",d.setField(hn(i,S.id),4),d.setTinting(e.particles==="tinted"?vt(S.ramp):null,e.particles==="tinted"?B:null),d.mesh.visible=d.enabled,t==null||t({low:B[0],high:B[1],...S}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:x,onAdd(S,P){r=S,a=new Ye,s=new ei,n=new ti({canvas:r.getCanvas(),context:P,antialias:!0}),n.autoClear=!1,n.localClippingEnabled=!0,f=new Se({vertexShader:pn,fragmentShader:yn,uniforms:{field:{value:null},palette:{value:null},range:{value:new Ie(0,1)}},transparent:!0,depthWrite:!1,side:ke,clipping:!0,clippingPlanes:m}),o=new ge(new Be(i.width*4,i.height*4),f),o.position.set(k,p,i.settings.heightM),o.rotation.z=i.theta,o.frustumCulled=!1,a.add(o),d=new nn(n),d.setPlane(i.width*4,i.height*4),d.mesh.geometry.dispose(),d.mesh.geometry=o.geometry.clone(),d.mesh.position.copy(o.position),d.mesh.rotation.copy(o.rotation),d.material.clippingPlanes=m,d.mesh.renderOrder=3,d.mesh.frustumCulled=!1,a.add(d.mesh),l=Gi(i.grid,i.settings.heightM),l&&a.add(l),x()},render(S,P){const C=performance.now(),E=Math.min(h?(C-h)/1e3:0,.05);h=C,w.makeTranslation(b.x,b.y,b.z).scale(new q(g,-g,g)),s.projectionMatrix.copy(y.fromArray(P)).multiply(w),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),n.resetState(),n.setViewport(0,0,S.drawingBufferWidth,S.drawingBufferHeight),d.setResolution(S.drawingBufferWidth,S.drawingBufferHeight),d.enabled&&!e.paused&&d.step(E*(Number(e.speedMps)/i.referenceSpeed),s,o),n.resetState(),n.setViewport(0,0,S.drawingBufferWidth,S.drawingBufferHeight),n.render(a,s),d.enabled&&!e.paused&&r.triggerRepaint()},onRemove(){u==null||u.dispose(),c==null||c.dispose(),o==null||o.geometry.dispose(),f==null||f.dispose(),d==null||d.dispose(),l==null||l.geometry.dispose(),l==null||l.material.dispose(),n==null||n.dispose(),r=null,n=null}}}function he(i,e,t,r,n){if(t.reduce((o,l)=>o*l,1)!==e.length)throw new Error("Invalid "+i+" shape.");const a=new Uint8Array(e.length*4),s=new DataView(a.buffer);for(let o=0;o<e.length;o++){if(!Number.isFinite(e[o]))throw new Error("Cannot export non-finite "+i);s.setFloat32(o*4,e[o],!0)}return{name:i,content:a,description:{dtype:"float32",shape:t,channels:r,unit:n}}}function rt(i,e,t,r){var a,s,o;const n={schemaVersion:1,endianness:"little",order:"row-major",origin:i.origin,source:i.source,bounds:i.bounds,selection:((a=i.selection)==null?void 0:a.geometry)??((s=i.polygon)==null?void 0:s.geometry),computationalDomain:(o=i.polygon)==null?void 0:o.geometry,mainDomain:i.mainDomain,buffer:i.buffer,dataZoom:i.dataZoom,tileCount:i.tileCount,warnings:i.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",...r?{mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}}:{},files:Object.fromEntries(t.map(l=>[l.name,l.description]))};return[{name:"metadata.json",content:JSON.stringify(n,null,2)},...t.map(({name:l,content:d})=>({name:l,content:d}))]}function Rt(i,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(n=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>n+"_"+a));return[he("mddf.f32.bin",e.values,[e.ny,e.nx,28],r,"m"),he("height_layers.f32.bin",i.grid.layers,[i.grid.ny,i.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function Dt(i,e=!1){const t=mn(i),r=i.width*i.height,n=new Float32Array(r*3),a=new Float32Array(r),s=new Float32Array(r),o=new Float32Array(r);for(let l=0;l<r;l++){const d=l*5;n.set([t[d],t[d+2],t[d+1]],l*3),a[l]=t[d+3],s[l]=t[d+4],o[l]=Math.hypot(t[d],t[d+1],t[d+2])}return[he("velocity.f32.bin",n,[i.height,i.width,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(i.solid),description:{dtype:"uint8",shape:[i.height,i.width],values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},...e?[he("temperature.f32.bin",a,[i.height,i.width],["T"],"degC"),he("tke.f32.bin",s,[i.height,i.width],["TKE"],"m2/s2"),he("speed.f32.bin",o,[i.height,i.width],["speed"],"m/s")]:[]]}function wn(i,e,t){return rt(i,t,Rt(t,e),e)}function xn(i,e){return rt(i,e,Dt(e))}function vn(i,e,t){const r=[...Rt(t,e),...Dt(t,!0),{name:"buildings.geojson",content:JSON.stringify(i.buildings),description:{format:"GeoJSON",crs:"WGS84"}}];return rt(i,t,r,e)}class Mn{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,n=[];let a=0;e.traverse(function(g){if(g.isMesh){const k=g.geometry,p=k.index,m=k.getAttribute("position");a+=p!==null?p.count/3:m.count/3,n.push({object3d:g,geometry:k})}});let s,o=80;if(r===!0){const g=a*2+a*3*4*4+80+4,k=new ArrayBuffer(g);s=new DataView(k),s.setUint32(o,a,!0),o+=4}else s="",s+=`solid exported
`;const l=new q,d=new q,u=new q,c=new q,f=new q,h=new q;for(let g=0,k=n.length;g<k;g++){const p=n[g].object3d,m=n[g].geometry,x=m.index,S=m.getAttribute("position");if(x!==null)for(let P=0;P<x.count;P+=3){const C=x.getX(P+0),E=x.getX(P+1),B=x.getX(P+2);w(C,E,B,S,p)}else for(let P=0;P<S.count;P+=3){const C=P+0,E=P+1,B=P+2;w(C,E,B,S,p)}}return r===!1&&(s+=`endsolid exported
`),s;function w(g,k,p,m,x){l.fromBufferAttribute(m,g),d.fromBufferAttribute(m,k),u.fromBufferAttribute(m,p),x.isSkinnedMesh===!0&&(x.applyBoneTransform(g,l),x.applyBoneTransform(k,d),x.applyBoneTransform(p,u)),l.applyMatrix4(x.matrixWorld),d.applyMatrix4(x.matrixWorld),u.applyMatrix4(x.matrixWorld),y(l,d,u),b(l),b(d),b(u),r===!0?(s.setUint16(o,0,!0),o+=2):(s+=`		endloop
`,s+=`	endfacet
`)}function y(g,k,p){c.subVectors(p,k),f.subVectors(g,k),c.cross(f).normalize(),h.copy(c).normalize(),r===!0?(s.setFloat32(o,h.x,!0),o+=4,s.setFloat32(o,h.y,!0),o+=4,s.setFloat32(o,h.z,!0),o+=4):(s+="	facet normal "+h.x+" "+h.y+" "+h.z+`
`,s+=`		outer loop
`)}function b(g){r===!0?(s.setFloat32(o,g.x,!0),o+=4,s.setFloat32(o,g.y,!0),o+=4,s.setFloat32(o,g.z,!0),o+=4):s+="			vertex "+g.x+" "+g.y+" "+g.z+`
`}}}async function Sn(i,e,t={}){var g,k;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((g=e.layers)==null?void 0:g.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:n,layers:a,spacingM:s,layerSpacingM:o}=e,l=(p,m)=>p<0||m<0||p>=r||m>=n?0:a[m*r+p],d=async()=>{var p;if(await new Promise(m=>setTimeout(m,0)),(p=t.shouldCancel)!=null&&p.call(t))throw new Error("Model export cancelled.")};let u=0;for(let p=0;p<n;p++){p%32===0&&await d();for(let m=0;m<r;m++){const x=l(m,p);if(!Number.isInteger(x)||x<0||x>160)throw new Error("Invalid MDDF building height.");x&&(u+=2+ +(x>l(m-1,p))+ +(x>l(m+1,p))+ +(x>l(m,p-1))+ +(x>l(m,p+1)))}}if(!u)throw new Error("The selected MDDF model has no buildings to export.");const c=new Float32Array(u*18);let f=0;const h=(p,m,x,S)=>{for(const P of[p,m,x,p,x,S])c.set(P,f),f+=3};for(let p=0;p<n;p++){p%32===0&&await d();for(let m=0;m<r;m++){const x=l(m,p)*o;if(!x)continue;const S=m*s,P=S+s,C=-p*s,E=C-s;h([S,x,C],[P,x,C],[P,x,E],[S,x,E]),h([S,0,C],[S,0,E],[P,0,E],[P,0,C]);let B=l(m-1,p)*o;x>B&&h([S,B,E],[S,B,C],[S,x,C],[S,x,E]),B=l(m+1,p)*o,x>B&&h([P,B,C],[P,B,E],[P,x,E],[P,x,C]),B=l(m,p-1)*o,x>B&&h([S,B,C],[P,B,C],[P,x,C],[S,x,C]),B=l(m,p+1)*o,x>B&&h([P,B,E],[S,B,E],[S,x,E],[P,x,E])}}const w=new kt;w.setAttribute("position",new xe(c,3));const y=new ge(w);let b;try{b=new Mn().parse(y,{binary:!0}).buffer}finally{w.dispose(),y.material.dispose()}return[{name:"mddf-model.stl",content:b},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:i.source,origin:e.origin,mainDomain:i.mainDomain,computationalDomain:(k=i.polygon)==null?void 0:k.geometry,buffer:i.buffer,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:n,spacingM:s,layerSpacingM:o,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:i.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:u*2}}},null,2)}]}const Mt=.35;function kn(){const i=Fe(null),e=Fe(!1),t=Fe(!1),r=Me({step:0,error:"",grid:null,settings:null,legend:null,downloading:!1,downloadError:""}),n=Me({heightM:10,directionDeg:0,speedMps:6}),a=Me({variable:"speed",speedMps:6,particles:"white",paused:!1,showSurroundings:!0});let s,o,l,d,u=!1,c=null,f=!1;const h=new Map,w=()=>s,y="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),b=ni({getMap:w,accessToken:y}),g=Yi();function k(){clearTimeout(c),c=null,f=!1,r.grid=null,r.settings=null,r.legend=null,r.error="",r.downloadError="",r.step=0,g.invalidate(),C()}const p=Pi({getMap:w,ready:e,onChange:k,accessToken:y}),m=pe(()=>g.state.downloading||r.downloading||p.state.loading),x=pe(()=>m.value||g.state.busy);function S(){return{"city-concordia-2d":!1,"city-concordia-3d":p.state.source==="concordia","city-osm-3d":p.state.source==="osm"}}function P(){for(const[M,_]of h)s!=null&&s.getLayer(M)&&(s.setLayoutProperty(M,"visibility",_.visibility),s.setPaintProperty(M,_.property,_.opacity),s.setFilter(M,_.filter),s.setLayerZoomRange(M,_.minzoom,_.maxzoom),_.color!==void 0&&s.setPaintProperty(M,"fill-extrusion-color",_.color));h.clear()}function C(){if(!s||!e.value)return;const M=g.state.prediction,_=r.step===3&&M;if(!_&&s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),!_&&s.getLayer("flume-buildings")&&s.removeLayer("flume-buildings"),P(),ut(s,S()),!_){d==null||d.clear();const $=p.getPreview();Ze(s,$);return}Ze(s,null);const T=ai.find($=>$.id===(p.state.source==="osm"?"city-osm-3d":"city-concordia-3d")),W=ft(p.state.snapshot.buildings.features,s.getFilter(T.id));for(const $ of s.getStyle().layers){if($.id.startsWith("flume-"))continue;const A=$.type==="fill-extrusion"?"fill-extrusion-opacity":$["source-layer"]==="building"&&["fill","line"].includes($.type)?$.type+"-opacity":null;A&&(h.set($.id,{visibility:s.getLayoutProperty($.id,"visibility")??"visible",property:A,opacity:s.getPaintProperty($.id,A)??1,filter:s.getFilter($.id)??null,minzoom:$.minzoom??0,maxzoom:$.maxzoom??24,color:$.type==="fill-extrusion"?s.getPaintProperty($.id,"fill-extrusion-color")??null:void 0}),s.setPaintProperty($.id,A,Mt),$.type==="fill-extrusion"&&s.setPaintProperty($.id,"fill-extrusion-color","#8cb8d8"),a.showSurroundings||s.setLayoutProperty($.id,"visibility","none"))}s.setFilter(T.id,W.surroundings),s.setLayerZoomRange(T.id,Pe,T.layer.maxzoom??24),s.getLayer("flume-buildings")?s.setFilter("flume-buildings",W.selected):s.addLayer({...T.layer,id:"flume-buildings",minzoom:Pe,layout:{visibility:"visible"},filter:W.selected,paint:{...T.layer.paint,"fill-extrusion-color":"#9aa3ad","fill-extrusion-opacity":1}}),d==null||d.update({sourceId:T.layer.source,sourceLayer:T.layer["source-layer"],collection:p.getPreview(),dataZoom:p.state.snapshot.dataZoom,filters:W,surroundingsOpacity:Mt,showSurroundings:a.showSurroundings}),s.getLayer("flume-field")||(l=bn(M,a,$=>{u||(r.legend=$)}),s.addLayer(l)),s.triggerRepaint()}async function E(){if(x.value)return;const M=await p.captureRegion();if(!(!M||u))try{ft(M.buildings.features),r.grid=ce(Ci(M)),r.step=1,r.error="",O()}catch(_){r.error=_.message}}function B(){try{return r.settings=Fi(n),a.speedMps=r.settings.speedMps,r.error="",r.step<2&&(r.step=2),!0}catch(M){return r.error=M.message,!1}}function O(){!r.grid||u||(clearTimeout(c),c=setTimeout(()=>{c=null,v()},320))}async function v(){if(clearTimeout(c),c=null,u||!r.grid||m.value)return;if(g.state.busy){f=!0;return}if(!B())return;await g.run(r.grid,r.settings)&&!u&&(r.step=3),f&&!u&&(f=!1,await v())}async function F(M){if(!(m.value||!r.grid)&&!(M!=="model"&&(g.state.busy||!g.state.prediction))){r.downloading=!0,r.downloadError="";try{const _=p.state.snapshot;let T;if(M==="model")T=await Sn(_,r.grid,{shouldCancel:()=>u});else{const $={...g.state.prediction,settings:{...g.state.prediction.settings,speedMps:Number(a.speedMps)}};if(!Number.isFinite($.settings.speedMps)||$.settings.speedMps<.5||$.settings.speedMps>20)throw new Error("Use a wind speed between 0.5 and 20 m/s.");const A=M==="wind"?null:await g.readMddf();T=M==="all"?vn(_,A,$):M==="mddf"?wn(_,A,$):xn(_,$)}const W=await si(T);u||oi(W,"flume-"+M+".zip","application/zip")}catch(_){u||(r.downloadError=_.message)}finally{u||(r.downloading=!1)}}}return Q(()=>r.step,C),Q(()=>g.state.prediction,()=>{!s||!e.value||(s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),C())}),Q(()=>[n.heightM,n.directionDeg],()=>{r.grid&&O()}),Q(()=>n.speedMps,M=>{const _=Number(M);!Number.isFinite(_)||_<.5||_>20||(a.speedMps=_,r.settings&&(r.settings.speedMps=_))}),Q(()=>p.state.source,()=>{s&&e.value&&ut(s,S())}),Q(()=>a.showSurroundings,C),Q(()=>a.paused,()=>s==null?void 0:s.triggerRepaint()),Q(()=>[a.variable,a.particles,a.speedMps],()=>{const M=Number(a.speedMps);Number.isFinite(M)&&M>=.5&&M<=20?(r.downloadError="",l==null||l.configure()):r.downloadError="Use a wind speed between 0.5 and 20 m/s."}),Q(b.mapStyle,M=>{s&&(p.beforeStyleChange(),e.value=!1,l=null,h.clear(),s.setStyle(M,{diff:!1}))}),Tt(()=>{if(!(y!=null&&y.startsWith("pk."))){r.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{s=new Ct.Map({container:i.value,accessToken:y,style:b.mapStyle.value,center:[-73.5673,45.5017],zoom:14,pitch:0,antialias:!0,attributionControl:!1}),d=ui(s,M=>{u||(r.error=M.message)}),t.value=!0,s.on("style.load",()=>{if(!u)try{ri(s,S()),e.value=!0,p.restore(),C()}catch(M){r.error=M.message}}),s.on("error",M=>{u||(r.error="Map data unavailable"+(M.sourceId?" ("+M.sourceId+")":"")+". Check token, allowed domains and connection.")}),b.attach(),o=new ResizeObserver(()=>s==null?void 0:s.resize()),o.observe(i.value)}catch(M){r.error=M.message}}),Ke(()=>{u=!0,clearTimeout(c),p.dispose(),g.dispose(),d==null||d.dispose(),o==null||o.disconnect(),s==null||s.remove(),s=null}),{mapElement:i,ready:e,initialized:t,state:r,draft:n,display:a,controls:b,region:p,runner:g,locked:m,regionLocked:x,acceptRegion:E,acceptWind:B,run:v,scheduleRun:O,download:F}}const Pn={class:"flume-compact"},Cn={key:0,class:"flume-meta",role:"status"},Fn={key:1,class:"flume-muted"},_n={class:"flume-actions"},In={key:2,role:"status",class:"flume-muted"},Bn={key:3,class:"flume-meta"},An=["disabled"],En={key:4,class:"flume-meta"},$n={__name:"RegionHud",props:{region:{type:Object,required:!0},ready:Boolean,locked:Boolean},emits:["continue"],setup(i){return(e,t)=>{var o;const r=St,n=Re,a=De,s=Te;return V(),U("div",Pn,[z(r,{modelValue:i.region.state.source,"onUpdate:modelValue":t[0]||(t[0]=l=>i.region.state.source=l),label:"Buildings","aria-label":"Building source",size:"small",options:[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],"text-by":"text","value-by":"value",disabled:i.region.state.loading||i.locked},null,8,["modelValue","disabled"]),z(n,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:!i.ready||i.region.state.loading||i.locked,loading:i.region.state.loading,onClick:i.region.loadBuildings},{default:j(()=>[...t[3]||(t[3]=[X("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),i.region.state.loadedArea?(V(),U("p",Cn," Loaded detailed buildings: "+N(i.region.state.loadedArea.count)+" parts · "+N((i.region.state.loadedArea.extentM[0]/1e3).toFixed(1))+" × "+N((i.region.state.loadedArea.extentM[1]/1e3).toFixed(1))+" km. Detail stays when you zoom. ",1)):(V(),U("p",Fn,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),I("div",_n,[z(n,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:!i.ready||i.region.state.loading||i.locked,"aria-label":"Select region",onClick:i.region.startSelection},{default:j(()=>[...t[4]||(t[4]=[X("Draw area",-1)])]),_:1},8,["disabled","onClick"]),z(n,{size:"small",disabled:!i.ready||!i.region.state.region&&!i.region.state.loadedArea||i.locked,loading:i.region.state.loading,"aria-label":i.region.state.region?"Use selected region":"Use full loaded area",onClick:t[1]||(t[1]=l=>e.$emit("continue"))},{default:j(()=>[X(N(i.region.state.region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label"])]),i.region.state.drawing?(V(),U("p",In," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):i.region.state.region?(V(),U("p",Bn,[X(N(i.region.state.region.extentM[0])+" × "+N(i.region.state.region.extentM[1])+" m · 4 m cells · "+N(i.region.state.region.buffer?"main + buffer":"main domain")+" ",1),I("button",{type:"button",class:"flume-link",disabled:i.region.state.loading||i.locked,onClick:t[2]||(t[2]=(...l)=>i.region.clearSelection&&i.region.clearSelection(...l))}," Clear ",8,An)])):Y("",!0),(o=i.region.state.region)!=null&&o.mainDomain?(V(),U("p",En," Main: "+N(i.region.state.region.mainDomain.extentM[0])+" × "+N(i.region.state.region.mainDomain.extentM[1])+" m. Buffer: 10% per side, open ground. Yellow: main boundary; blue dashed: full simulation. ",1)):Y("",!0),i.region.state.loading?(V(),se(a,{key:5,"model-value":i.region.state.progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):Y("",!0),i.region.state.error?(V(),se(s,{key:6,color:"danger"},{default:j(()=>[X(N(i.region.state.error),1)]),_:1})):Y("",!0)])}}},Rn={class:"wind"},Dn={class:"conditions"},Tn={class:"condition"},Vn=["disabled"],Ln=["disabled"],zn={class:"condition"},Nn=["disabled"],Un=["disabled"],Wn={class:"direction"},jn=["aria-valuenow","aria-disabled"],On=["x1","y1","x2","y2"],Xn=["cx","cy"],qn={class:"bearing"},Yn={class:"condition"},Gn=["disabled"],Hn={class:"cardinals"},Zn={key:2,class:"busy"},Kn={role:"status"},Jn={__name:"WindSettingsHud",props:{settings:{type:Object,required:!0},grid:{type:Object,default:null},runner:{type:Object,default:null},error:{type:String,default:""},locked:Boolean},emits:["run"],setup(i){const e=i,t=Fe(null),r=pe(()=>Number(e.settings.directionDeg)*Math.PI/180),n=pe(()=>!!e.grid&&!e.locked);function a(o){if(!n.value||o.type==="pointermove"&&!o.buttons)return;o.type==="pointerdown"&&o.currentTarget.setPointerCapture(o.pointerId);const l=t.value.getBoundingClientRect();e.settings.directionDeg=(Math.round(Math.atan2(-(o.clientY-l.top-l.height/2),o.clientX-l.left-l.width/2)*180/Math.PI)+360)%360}function s(o){if(!n.value)return;const l=o.key==="ArrowRight"||o.key==="ArrowUp"?1:o.key==="ArrowLeft"||o.key==="ArrowDown"?-1:0;l&&(o.preventDefault(),e.settings.directionDeg=(Number(e.settings.directionDeg)+l+360)%360)}return(o,l)=>{var f,h,w;const d=Re,u=Te,c=De;return V(),U("div",Rn,[I("div",Dn,[I("label",Tn,[l[6]||(l[6]=I("span",null,[X("Slice height "),I("small",null,"m")],-1)),re(I("input",{"onUpdate:modelValue":l[0]||(l[0]=y=>i.settings.heightM=y),class:"num",type:"number",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height (m)",disabled:!n.value},null,8,Vn),[[we,i.settings.heightM,void 0,{number:!0}]]),re(I("input",{"onUpdate:modelValue":l[1]||(l[1]=y=>i.settings.heightM=y),class:"range",type:"range",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height",disabled:!n.value},null,8,Ln),[[we,i.settings.heightM,void 0,{number:!0}]])]),I("label",zn,[l[7]||(l[7]=I("span",null,[X("Wind speed "),I("small",null,"m/s")],-1)),re(I("input",{"onUpdate:modelValue":l[2]||(l[2]=y=>i.settings.speedMps=y),class:"num",type:"number",min:"0.5",max:"20",step:"0.1","aria-label":"Reference wind speed (m/s)",disabled:!n.value},null,8,Nn),[[we,i.settings.speedMps,void 0,{number:!0}]]),re(I("input",{"onUpdate:modelValue":l[3]||(l[3]=y=>i.settings.speedMps=y),class:"range",type:"range",min:"0.5",max:"20",step:"0.1","aria-label":"Wind speed",disabled:!n.value},null,8,Un),[[we,i.settings.speedMps,void 0,{number:!0}]])])]),I("div",Wn,[(V(),U("svg",{ref_key:"dial",ref:t,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":i.settings.directionDeg,"aria-disabled":!n.value||void 0,onPointerdown:Vt(a,["prevent"]),onPointermove:a,onKeydown:s},[l[8]||(l[8]=Lt('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".28" stroke-width="2" data-v-d8c7c4e0></circle><text x="80" y="16" text-anchor="middle" data-v-d8c7c4e0>90°</text><text x="146" y="84" text-anchor="middle" data-v-d8c7c4e0>0°</text><text x="80" y="152" text-anchor="middle" data-v-d8c7c4e0>270°</text><text x="14" y="84" text-anchor="middle" data-v-d8c7c4e0>180°</text>',5)),I("line",{x1:80-Math.cos(r.value)*30,y1:80+Math.sin(r.value)*30,x2:80+Math.cos(r.value)*42,y2:80-Math.sin(r.value)*42,stroke:"#64d2ff","stroke-width":"3.5","stroke-linecap":"round"},null,8,On),I("circle",{cx:80+Math.cos(r.value)*42,cy:80-Math.sin(r.value)*42,r:"5",fill:"#64d2ff"},null,8,Xn)],40,jn)),I("div",qn,[I("label",Yn,[l[9]||(l[9]=I("span",null,[X("Wind towards "),I("small",null,"°")],-1)),re(I("input",{"onUpdate:modelValue":l[4]||(l[4]=y=>i.settings.directionDeg=y),class:"num",type:"number",step:"1","aria-label":"Wind towards (°)",disabled:!n.value},null,8,Gn),[[we,i.settings.directionDeg,void 0,{number:!0}]])]),I("div",Hn,[(V(),U(ye,null,Qe([{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],y=>z(d,{key:y.text,size:"small",preset:"secondary",disabled:!n.value,"aria-label":"Wind towards "+y.text,onClick:b=>i.settings.directionDeg=y.value},{default:j(()=>[X(N(y.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),i.error?(V(),se(u,{key:0,color:"danger"},{default:j(()=>[X(N(i.error),1)]),_:1})):Y("",!0),(f=i.runner)!=null&&f.state.error?(V(),se(u,{key:1,color:"danger"},{default:j(()=>[X(N(i.runner.state.error),1)]),_:1})):Y("",!0),(h=i.runner)!=null&&h.state.busy?(V(),U("div",Zn,[z(c,{"model-value":i.runner.state.progress*100,indeterminate:i.runner.state.progress===0},null,8,["model-value","indeterminate"]),I("p",Kn,N(i.runner.state.stage),1)])):Y("",!0),z(d,{block:"",disabled:!n.value,loading:(w=i.runner)==null?void 0:w.state.busy,"aria-label":"Run prediction",onClick:l[5]||(l[5]=y=>o.$emit("run"))},{default:j(()=>[...l[10]||(l[10]=[X("Run prediction",-1)])]),_:1},8,["disabled","loading"])])}}},Qn=Je(Jn,[["__scopeId","data-v-d8c7c4e0"]]),er={class:"display-settings"},tr={key:0,class:"hint"},ir={class:"variables",role:"group","aria-label":"Field"},nr=["aria-pressed","onClick"],rr={class:"row"},ar={key:0,class:"legend"},sr={class:"legend-top"},or={class:"legend-range"},lr={key:1,class:"hint"},dr={class:"hint"},ur={__name:"DisplaySettingsHud",props:{display:{type:Object,required:!0},legend:{type:Object,default:null},prediction:{type:Object,default:null}},setup(i){const e=i,t=pe(()=>{var n;return((n=$e.find(a=>a.id===e.display.variable))==null?void 0:n.ramp)??"turbo"}),r=pe(()=>"linear-gradient(to right,"+Array.from({length:17},(n,a)=>"rgb("+$t(t.value,a/16).join(",")+") "+a*100/16+"%").join(",")+")");return(n,a)=>{const s=Nt;return V(),U("div",er,[i.prediction?(V(),U(ye,{key:1},[I("div",ir,[(V(!0),U(ye,null,Qe(R($e),o=>(V(),U("button",{key:o.id,type:"button","aria-pressed":i.display.variable===o.id,onClick:l=>i.display.variable=o.id},N(o.label),9,nr))),128))]),I("div",rr,[a[4]||(a[4]=I("span",{class:"unit"},"particles",-1)),re(I("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>i.display.particles=o),"aria-label":"Particles"},[...a[3]||(a[3]=[I("option",{value:"white"},"white, over the field",-1),I("option",{value:"tinted"},"coloured, no field",-1),I("option",{value:"off"},"off",-1)])],512),[[zt,i.display.particles]])]),z(s,{modelValue:i.display.paused,"onUpdate:modelValue":a[1]||(a[1]=o=>i.display.paused=o),class:"display-toggle",label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"]),z(s,{modelValue:i.display.showSurroundings,"onUpdate:modelValue":a[2]||(a[2]=o=>i.display.showSurroundings=o),class:"display-toggle",label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),i.legend?(V(),U("div",ar,[I("div",sr,[I("strong",null,N(i.legend.legend),1),I("span",null,N(i.legend.unit),1)]),I("div",{class:"colorbar",style:Ut({background:r.value})},null,4),I("div",or,[I("span",null,N(i.legend.low.toFixed(2)),1),I("span",null,N(i.legend.high.toFixed(2)),1)])])):Y("",!0),i.prediction.grid.mainDomain?(V(),U("p",lr," Yellow outline: main area · Blue dashed outline and shading: 10% buffer ")):Y("",!0),I("p",dr,N(i.prediction.patchCount)+" patches · "+N((i.prediction.milliseconds/1e3).toFixed(1))+" s",1)],64)):(V(),U("p",tr,"Run a prediction to inspect the field."))])}}},cr=Je(ur,[["__scopeId","data-v-bf870183"]]),fr={class:"space-y-2"},hr={key:0,class:"text-xs text-secondary"},gr={class:"grid grid-cols-2 gap-2"},mr={__name:"DownloadsHud",props:{grid:{type:Object,default:null},prediction:{type:Object,default:null},downloading:Boolean,locked:Boolean,predicting:Boolean,error:{type:String,default:""}},emits:["download"],setup(i){return(e,t)=>{const r=Re,n=De,a=Te;return V(),U("div",fr,[i.grid?(V(),U(ye,{key:1},[I("div",gr,[(V(),U(ye,null,Qe([{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}],s=>z(r,{key:s.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":s.label,disabled:i.downloading||i.locked||s.id!=="model"&&(i.predicting||!i.prediction),onClick:o=>e.$emit("download",s.id)},{default:j(()=>[X(N(s.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),i.downloading?(V(),se(n,{key:0,indeterminate:"","aria-label":"Preparing download"})):Y("",!0),i.error?(V(),se(a,{key:1,color:"danger"},{default:j(()=>[X(N(i.error),1)]),_:1})):Y("",!0)],64)):(V(),U("p",hr,"Choose a simulation area before downloading its model."))])}}},pr={class:"flume-hud-stack"},yr={key:0,class:"flume-status"},br={__name:"FlumeCityView",setup(i){const e=kn(),{mapElement:t,ready:r,initialized:n,state:a,draft:s,display:o,region:l,runner:d,locked:u,regionLocked:c}=e,{controlsElement:f,controlsVisible:h,mapStyle:w,mapStyles:y}=e.controls;return(b,g)=>{const k=Re,p=St,m=Wt,x=Ot,S=Xt,P=Te,C=De;return V(),U("section",{class:"flume-page","aria-label":"Flume City wind prediction",onKeydown:g[2]||(g[2]=qt((...E)=>R(l).stopSelection&&R(l).stopSelection(...E),["esc"]))},[I("div",{ref_key:"mapElement",ref:t,class:"flume-map","aria-label":"Flume City map"},null,512),re(I("aside",{ref_key:"controlsElement",ref:f,class:"mapboxgl-ctrl flume-map-actions"},[z(x,{placement:"left-start","close-on-content-click":!1},{anchor:j(()=>[z(k,{size:"small",icon:"mso-layers","aria-label":"Flume basemap"})]),default:j(()=>[z(m,null,{default:j(()=>[z(p,{modelValue:R(w),"onUpdate:modelValue":g[0]||(g[0]=E=>jt(w)?w.value=E:null),label:"Basemap",options:R(y),"text-by":"title","value-by":"value",disabled:R(u)},null,8,["modelValue","options","disabled"])]),_:1})]),_:1}),z(k,{size:"small",icon:R(h)?"mso-visibility_off":"mso-visibility","aria-label":R(h)?"Hide Flume controls":"Show Flume controls",onClick:g[1]||(g[1]=E=>h.value=!R(h))},null,8,["icon","aria-label"])],512),[[at,R(n)]]),re(I("div",pr,[g[3]||(g[3]=I("header",{class:"flume-heading"},[I("h1",null,"Flume City"),I("p",null,"Urban wind simulation")],-1)),z(We,{title:"1 · Simulation area",inert:R(c),collapsed:R(a).step>0},{default:j(()=>[z($n,{region:R(l),ready:R(r),locked:R(c),onContinue:R(e).acceptRegion},null,8,["region","ready","locked","onContinue"])]),_:1},8,["inert","collapsed"]),z(We,{title:"2 · Configuration",collapsed:R(a).step===0},{default:j(()=>[z(Qn,{settings:R(s),grid:R(a).grid,runner:R(d),error:R(a).error,locked:R(u),onRun:R(e).run},null,8,["settings","grid","runner","error","locked","onRun"]),R(d).state.prediction?(V(),U(ye,{key:0},[z(S),z(cr,{display:R(o),legend:R(a).legend,prediction:R(d).state.prediction},null,8,["display","legend","prediction"])],64)):Y("",!0)]),_:1},8,["collapsed"]),z(We,{title:"3 · Downloads",collapsed:!R(a).grid},{default:j(()=>[z(mr,{grid:R(a).grid,prediction:R(d).state.prediction,downloading:R(a).downloading,locked:R(d).state.downloading,predicting:R(d).state.busy,error:R(a).downloadError,onDownload:R(e).download},null,8,["grid","prediction","downloading","locked","predicting","error","onDownload"])]),_:1},8,["collapsed"]),R(a).error&&!R(a).grid?(V(),se(P,{key:0,color:"danger"},{default:j(()=>[X(N(R(a).error),1)]),_:1})):Y("",!0)],512),[[at,R(h)]]),!R(r)&&!R(a).error?(V(),U("div",yr,[z(C,{indeterminate:"","aria-label":"Loading Flume map"})])):Y("",!0)],32)}}},_r=Je(br,[["__scopeId","data-v-eb1c49aa"]]);export{_r as default};
//# sourceMappingURL=FlumeCityView-uhnvfsyk.js.map
