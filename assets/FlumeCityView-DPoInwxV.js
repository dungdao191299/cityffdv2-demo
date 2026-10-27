import{w as J,o as Ye,m as ce,r as we,b as Rt,c as he,a as Se,d as V,q as N,g as z,K as xt,f as O,x as X,L as Be,t as W,l as B,s as G,e as se,J as Ae,v as $e,_ as Ge,U as re,a2 as me,H as Dt,a3 as Tt,F as ge,y as He,j as $,a4 as Vt,p as Lt,Q as zt,W as it,X as Nt,i as Ut,Y as Wt,M as jt,a1 as Ot}from"./index-Dbc8oxO-.js";import{j as Xt,h as qt,t as nt,k as Yt,O as Gt,q as xe,v as Ne,S as Ue,w as ke,o as Fe,B as vt,e as ye,D as De,x as We,y as be,R as Ht,V as q,M as je,z as Zt,H as Mt,E as Oe,N as rt,F as Kt,m as St,c as Jt,W as Qt,G as at,I as st,J as ei,u as ti,a as ii,s as ot,b as ni,r as Te}from"./mapbox-gl-geocoder-CLqwyEFv.js";import{c as Ze}from"./index-D6bWIqpK.js";import{m as kt,c as Xe}from"./geojsonToStl-Bbo8coar.js";import{z as ri}from"./archive-Dz16c6AW.js";import{d as ai}from"./download-B6B1Q6H-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./earcut-Drp1yMsm.js";import"./jszip.min-UX6Ol9Iw.js";function Ke(n,e){for(const b of[n,e])if(!Array.isArray(b)||b.length<2||!b.every(Number.isFinite)||Math.abs(b[0])>180||Math.abs(b[1])>85.051129)throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(n[0],e[0]),Math.min(n[1],e[1])];if(Math.abs(n[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=kt(t),i=Xe(t),[a,s]=r([Math.max(n[0],e[0]),Math.max(n[1],e[1])]);if(a<=0||s<=0)throw new Error("The region is empty.");const o=Math.ceil((a-1e-6)/4),l=Math.ceil((s-1e-6)/4),d=i([o*4,l*4]),c=[...t,...d],[u,h,f,v]=c,m={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[u,h],[f,h],[f,v],[u,v],[u,h]]]}};return{origin:t,bounds:c,extentM:[o*4,l*4],polygon:m}}function ue(n){const e=n.properties??{},t=e.nd??e.osm_id??n.id??e.id??e.auto_id;return typeof t=="string"&&t.trim()!==""||typeof t=="number"&&Number.isFinite(t)?String(t):null}function Ft(n){var r,i,a;const e=new Map,t=new Set;for(const s of n){if(!["Polygon","MultiPolygon"].includes((r=s.geometry)==null?void 0:r.type))continue;Ze(s,h=>{if(!Number.isFinite(h[0])||!Number.isFinite(h[1])||Math.abs(h[0])>180||Math.abs(h[1])>85.051129)throw new Error("Invalid building coordinates.")});const o=Number((i=s.properties)==null?void 0:i.height),l=Number((a=s.properties)==null?void 0:a.min_height)||0,d=JSON.stringify([s.geometry,o,l]);if(t.has(d))continue;t.add(d);const c=ue(s),u=c==null?d:JSON.stringify([c,o,l]);e.has(u)||e.set(u,[]),e.get(u).push({type:"Feature",...s.id==null?{}:{id:s.id},properties:structuredClone(s.properties??{}),geometry:structuredClone(s.geometry)})}return Array.from(e.values(),s=>{const o=s[0];if(s.length>1){const l=qt({type:"FeatureCollection",features:s});if(!l)throw new Error("Building parts produced empty geometry.");o.geometry=l.geometry,delete o.bbox}return o})}function si(n,e){var f,v,m;const t=Ft(n),r=e.selection??e.polygon,i=new Set(t.filter(b=>Xt(b,r))),a=new Set(Array.from(i,ue).filter(b=>b!=null)),s=[],o=[],l=[];let d=0,c=0;for(const b of t){if(!i.has(b)&&!(ue(b)!=null&&a.has(ue(b)))){o.push(b);continue}const g=(f=b.properties)==null?void 0:f.height;if(g==null||g===""){d++;continue}const w=Number(g);if(!Number.isFinite(w)||w<0||w>240)throw new Error("Building height must be finite and between 0 and 240 m.");if(w===0){d++;continue}Number((v=b.properties)==null?void 0:v.min_height)>0&&c++,s.push({...b,properties:{...b.properties,source_height:w,source_min_height:Number((m=b.properties)==null?void 0:m.min_height)||0,height:Math.max(1,Math.round(w/1.5))*1.5,min_height:0}})}const u={type:"FeatureCollection",features:s};let h=e;if(s.length){const b=[1/0,1/0,-1/0,-1/0];Ze(u,g=>{b[0]=Math.min(b[0],g[0]),b[1]=Math.min(b[1],g[1]),b[2]=Math.max(b[2],g[0]),b[3]=Math.max(b[3],g[1])}),h=Ke(b.slice(0,2),b.slice(2,4))}return d&&l.push(d+" parts have missing/zero height and were omitted."),c&&l.push(c+" raised parts are treated as solid from the ground to their roof."),s.length||l.push("No buildings found in loaded map data. This run will use open ground."),s.some(b=>ue(b)==null)&&l.push("Selected parts without provider IDs cannot be joined across tile boundaries."),l.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...h,selection:structuredClone(e.selection??e.polygon),buildings:u,surroundings:{type:"FeatureCollection",features:o},warnings:l}}function lt(n){var i;if(((i=n==null?void 0:n.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");const e=[1/0,1/0,-1/0,-1/0];let t=0;if(Ze(n,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e[0]=Math.min(e[0],a[0]),e[1]=Math.min(e[1],a[1]),e[2]=Math.max(e[2],a[0]),e[3]=Math.max(e[3],a[1]),t++}),t<4)throw new Error("A polygon needs at least three corners.");return{...Ke(e.slice(0,2),e.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(n.geometry)}}}const K="flume-detailed-buildings";function Pe(n){var t,r;const e=[];for(const i of Ft(n)){const a=Number((t=i.properties)==null?void 0:t.height);if(!Number.isFinite(a)||a<=0)continue;const s=Math.min(a,Math.max(0,Number((r=i.properties)==null?void 0:r.min_height)||0));e.push({...i,properties:{...i.properties,height:a,min_height:s},geometry:i.geometry})}return{type:"FeatureCollection",features:e}}function qe(n,e){var r;if(!((r=e==null?void 0:e.features)!=null&&r.length)){n.getLayer(K)&&n.removeLayer(K),n.getSource(K)&&n.removeSource(K);return}const t=e;n.getSource(K)?n.getSource(K).setData(t):n.addSource(K,{type:"geojson",data:t,maxzoom:22,tolerance:0}),n.getLayer(K)||n.addLayer({id:K,type:"fill-extrusion",source:K,minzoom:0,paint:{"fill-extrusion-color":"#8cb8d8","fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":1}})}function dt(n,e=null){const t=n.map(ue);if(t.some(a=>a==null))throw new Error("Selected buildings need a stable provider ID (nd, osm_id or feature ID) for map styling.");const i=["in",["to-string",["coalesce",["get","nd"],["get","osm_id"],["id"],["get","id"],["get","auto_id"],""]],["literal",Array.from(new Set(t))]];return{selected:e?["all",e,i]:i,surroundings:e?["all",e,["!",i]]:["!",i]}}const ve=16,te="flume-retained-buildings",ct="flume-retained-selected";function oi(n,e){let t=null,r=null,i=null,a=null,s=null;function o(){if(t){n.getSource(te)?i!==a&&n.getSource(te).setData(i):n.addSource(te,{type:"geojson",data:i,maxzoom:22,tolerance:0}),a=i;for(const[h,f]of[[te,!1],[ct,!0]]){const v=t.filters[f?"selected":"surroundings"];n.getLayer(h)?n.setFilter(h,v):n.addLayer({id:h,type:"fill-extrusion",source:te,maxzoom:ve,filter:v,layout:{visibility:"visible"},paint:{"fill-extrusion-color":f?"#9aa3ad":"#8cb8d8","fill-extrusion-height":["get","height"],"fill-extrusion-base":["get","min_height"],"fill-extrusion-opacity":f?1:t.surroundingsOpacity}}),n.setPaintProperty(h,"fill-extrusion-opacity",f?1:t.surroundingsOpacity),n.setLayoutProperty(h,"visibility",f||t.showSurroundings?"visible":"none")}}}function l(){if(!(!t||n.getZoom()<ve||!n.getSource(t.sourceId)||!n.isSourceLoaded(t.sourceId)))try{const h=n.querySourceFeatures(t.sourceId,{sourceLayer:t.sourceLayer}).filter(f=>!f.tile||f.tile.z>=(t.dataZoom??ve));i=Pe([...i.features,...h]),o()}catch(h){e==null||e(h)}}function d(h){!t||h!=null&&h.sourceId&&h.sourceId!==t.sourceId||(clearTimeout(s),s=setTimeout(l,120))}function c(h){var f;(r!==h.collection||(t==null?void 0:t.sourceId)!==h.sourceId||(t==null?void 0:t.sourceLayer)!==h.sourceLayer)&&(i=Pe(((f=h.collection)==null?void 0:f.features)??[]),r=h.collection),t=h,o(),d()}function u(){clearTimeout(s),t=null,r=null,i=null,a=null;for(const h of[ct,te])n.getLayer(h)&&n.removeLayer(h);n.getSource(te)&&n.removeSource(te)}return n.on("sourcedata",d),n.on("moveend",d),{update:c,clear:u,dispose(){n.off("sourcedata",d),n.off("moveend",d),u()}}}const ut=65536*65536,li=12,ft=typeof TextDecoder>"u"?null:new TextDecoder("utf-8"),di=0,ci=1,ht=2,ui=5;class fi{constructor(e){this.buf=ArrayBuffer.isView(e)?e:new Uint8Array(e),this.dataView=new DataView(this.buf.buffer,this.buf.byteOffset,this.buf.byteLength),this.pos=0,this.type=0,this._valueStart=-1,this.length=this.buf.length}readFields(e,t,r=this.length){let i;for(;i=this.nextField(r);)e(i,t,this);return t}readMessage(e,t){return this.readFields(e,t,this.readVarint()+this.pos)}readFixed32(){const e=this.dataView.getUint32(this.pos,!0);return this.pos+=4,e}readSFixed32(){const e=this.dataView.getInt32(this.pos,!0);return this.pos+=4,e}readFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getUint32(this.pos+4,!0)*ut;return this.pos+=8,e}readSFixed64(){const e=this.dataView.getUint32(this.pos,!0)+this.dataView.getInt32(this.pos+4,!0)*ut;return this.pos+=8,e}readFloat(){const e=this.dataView.getFloat32(this.pos,!0);return this.pos+=4,e}readDouble(){const e=this.dataView.getFloat64(this.pos,!0);return this.pos+=8,e}readVarint(e){const t=this.buf,r=t[this.pos++];if(r<128)return r;let i=r&127,a;return a=t[this.pos++],i|=(a&127)<<7,a<128||(a=t[this.pos++],i|=(a&127)<<14,a<128)||(a=t[this.pos++],i|=(a&127)<<21,a<128)?i:(a=t[this.pos],i|=(a&15)<<28,hi(i,e,this))}readSVarint(){const e=this.readVarint();return e%2===1?(e+1)/-2:e/2}readBoolean(){return!!this.readVarint()}readString(){const e=this.readVarint()+this.pos,t=this.pos;return this.pos=e,e-t>=li&&ft?ft.decode(this.buf.subarray(t,e)):gi(this.buf,t,e)}readBytes(){const e=this.readVarint()+this.pos,t=this.buf.subarray(this.pos,e);return this.pos=e,t}readPackedVarint(e=[],t){const r=this.readPackedEnd();for(;this.pos<r;)e.push(this.readVarint(t));return e}readPackedSVarint(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSVarint());return e}readPackedBoolean(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readBoolean());return e}readPackedFloat(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFloat());return e}readPackedDouble(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readDouble());return e}readPackedFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed32());return e}readPackedSFixed32(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed32());return e}readPackedFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readFixed64());return e}readPackedSFixed64(e=[]){const t=this.readPackedEnd();for(;this.pos<t;)e.push(this.readSFixed64());return e}readPackedEnd(){return this.type===ht?this.readVarint()+this.pos:this.pos+1}nextField(e=this.length){if(this.pos===this._valueStart&&this.skip(this.type),this.pos>=e)return 0;const t=this.readVarint();return this.type=t&7,this._valueStart=this.pos,t>>>3}skip(e){const t=e&7;if(t===di)for(;this.buf[this.pos++]>127;);else if(t===ht)this.pos=this.readVarint()+this.pos;else if(t===ui)this.pos+=4;else if(t===ci)this.pos+=8;else throw new Error(`Unimplemented type: ${t}`)}}function hi(n,e,t){const r=t.buf;let i,a;if(a=r[t.pos++],i=(a&112)>>4,a<128||(a=r[t.pos++],i|=(a&127)<<3,a<128)||(a=r[t.pos++],i|=(a&127)<<10,a<128)||(a=r[t.pos++],i|=(a&127)<<17,a<128)||(a=r[t.pos++],i|=(a&127)<<24,a<128)||(a=r[t.pos++],i|=(a&1)<<31,a<128))return le(n,i,e);throw new Error("Expected varint not more than 10 bytes")}function le(n,e,t){return t?e*4294967296+(n>>>0):(e>>>0)*4294967296+(n>>>0)}function gi(n,e,t){let r="",i=e;for(;i<t;){const a=n[i];let s=null,o=a>239?4:a>223?3:a>191?2:1;if(i+o>t)break;let l,d,c;o===1?a<128&&(s=a):o===2?(l=n[i+1],(l&192)===128&&(s=(a&31)<<6|l&63,s<=127&&(s=null))):o===3?(l=n[i+1],d=n[i+2],(l&192)===128&&(d&192)===128&&(s=(a&15)<<12|(l&63)<<6|d&63,(s<=2047||s>=55296&&s<=57343)&&(s=null))):o===4&&(l=n[i+1],d=n[i+2],c=n[i+3],(l&192)===128&&(d&192)===128&&(c&192)===128&&(s=(a&15)<<18|(l&63)<<12|(d&63)<<6|c&63,(s<=65535||s>=1114112)&&(s=null))),s===null?(s=65533,o=1):s>65535&&(s-=65536,r+=String.fromCharCode(s>>>10&1023|55296),s=56320|s&1023),r+=String.fromCharCode(s),i+=o}return r}class Ct{constructor(e,t,r,i,a){for(this.properties=Object.create(null),this.extent=r,this.type=0,this.id=void 0,this._pbf=e,this._geometry=-1,this._keys=i,this._values=a;e.pos<t;){const s=e.readVarint();if(s===8)this.id=e.readVarint();else if(s===18){const o=e.readVarint()+e.pos;for(;e.pos<o;){const l=i[e.readVarint()],d=a[e.readVarint()];this.properties[l]=d}}else s===24?this.type=e.readVarint():(s===34&&(this._geometry=e.pos),e.skip(s))}}loadGeometry(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos,r=[];let i,a=1,s=0,o=0,l=0;for(;e.pos<t;){if(s<=0){const d=e.readVarint();if(a=d&7,s=d>>3,s===0)continue}if(s--,a===1)o+=e.readSVarint(),l+=e.readSVarint(),i&&r.push(i),i=[new nt(o,l)];else if(a===2)o+=e.readSVarint(),l+=e.readSVarint(),i&&i.push(new nt(o,l));else if(a===7)i&&i.push(i[0].clone());else throw new Error(`unknown command ${a}`)}return i&&r.push(i),r}bbox(){if(this._geometry<0)throw new Error("feature has no geometry");const e=this._pbf;e.pos=this._geometry;const t=e.readVarint()+e.pos;let r=1,i=0,a=0,s=0,o=1/0,l=-1/0,d=1/0,c=-1/0;for(;e.pos<t;){if(i<=0){const u=e.readVarint();if(r=u&7,i=u>>3,i===0)continue}if(i--,r===1||r===2)a+=e.readSVarint(),s+=e.readSVarint(),a<o&&(o=a),a>l&&(l=a),s<d&&(d=s),s>c&&(c=s);else if(r!==7)throw new Error(`unknown command ${r}`)}return[o,d,l,c]}toGeoJSON(e,t,r){const i=this.extent*Math.pow(2,r),a=this.extent*e,s=this.extent*t,o=this.loadGeometry();function l(h){return[(h.x+a)*360/i-180,360/Math.PI*Math.atan(Math.exp((1-(h.y+s)*2/i)*Math.PI))-90]}function d(h){return h.map(l)}let c;if(this.type===1){const h=[];for(const v of o)h.push(v[0]);const f=d(h);c=h.length===1?{type:"Point",coordinates:f[0]}:{type:"MultiPoint",coordinates:f}}else if(this.type===2){const h=o.map(d);c=h.length===1?{type:"LineString",coordinates:h[0]}:{type:"MultiLineString",coordinates:h}}else if(this.type===3){const h=pi(o),f=[];for(const v of h)f.push(v.map(d));c=f.length===1?{type:"Polygon",coordinates:f[0]}:{type:"MultiPolygon",coordinates:f}}else throw new Error("unknown feature type");const u={type:"Feature",geometry:c,properties:this.properties};return this.id!=null&&(u.id=this.id),u}}Ct.types=["Unknown","Point","LineString","Polygon"];function pi(n){const e=n.length;if(e<=1)return[n];const t=[];let r,i;for(let a=0;a<e;a++){const s=mi(n[a]);s!==0&&(i===void 0&&(i=s<0),i===s<0?(r&&t.push(r),r=[n[a]]):r&&r.push(n[a]))}return r&&t.push(r),t}function mi(n){let e=0;for(let t=0,r=n.length,i=r-1,a,s;t<r;i=t++)a=n[t],s=n[i],e+=(s.x-a.x)*(a.y+s.y);return e}class yi{constructor(e,t){for(this.version=1,this.name="",this.extent=4096,this.length=0,this._pbf=e,this._keys=[],this._values=[],this._features=[],t===void 0&&(t=e.length);e.pos<t;){const r=e.readVarint();r===10?this.name=e.readString():r===18?(this._features.push(e.pos),e.skip(r)):r===26?this._keys.push(e.readString()):r===34?this._values.push(bi(e)):r===40?this.extent=e.readVarint():r===120?this.version=e.readVarint():e.skip(r)}this.length=this._features.length}feature(e){if(e<0||e>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[e];const t=this._pbf.readVarint()+this._pbf.pos;return new Ct(this._pbf,t,this.extent,this._keys,this._values)}}function bi(n){let e=null;const t=n.readVarint()+n.pos;for(;n.pos<t;){const r=n.readVarint();e=r===10?n.readString():r===21?n.readFloat():r===25?n.readDouble():r===32?n.readVarint(!0):r===40?n.readVarint():r===48?n.readSVarint():r===56?n.readBoolean():(n.skip(r),null)}if(e==null)throw new Error("unknown feature value");return e}class wi{constructor(e,t=e.length){const r=Object.create(null);for(;e.pos<t;){const i=e.readVarint();if(i===26){const a=new yi(e,e.readVarint()+e.pos);a.length&&(r[a.name]=a)}else e.skip(i)}this.layers=r}}function xi(n,e,t=0){const r=2**e,i=u=>(u+180)/360*r,a=u=>{const h=Math.max(-85.051129,Math.min(85.051129,u))*Math.PI/180;return(1-Math.asinh(Math.tan(h))/Math.PI)/2*r},s=Math.max(0,Math.floor(i(n[0]))-t),o=Math.min(r-1,Math.ceil(i(n[2])-1e-9)-1+t),l=Math.max(0,Math.floor(a(n[3]))-t),d=Math.min(r-1,Math.ceil(a(n[1])-1e-9)-1+t);if((o-s+1)*(d-l+1)>256)throw new Error("Region needs too many detailed tiles; choose a smaller area.");const c=[];for(let u=l;u<=d;u++)for(let h=s;h<=o;h++)c.push({z:e,x:h,y:u});return c}async function gt(n,e){e==null||e.throwIfAborted();const t=e?AbortSignal.any([e,AbortSignal.timeout(3e4)]):AbortSignal.timeout(3e4),r=await fetch(n,{signal:t});if(!r.ok)throw new Error("Building data request failed (HTTP "+r.status+"). Check source access and token.");return r}function pt(n,e){var r;const t=new URL(n,((r=globalThis.location)==null?void 0:r.href)??"http://localhost/");if(!["https:","http:"].includes(t.protocol))throw new Error("Unsupported building source URL.");return(t.hostname==="api.mapbox.com"||t.hostname.endsWith(".mapbox.com"))&&e&&t.searchParams.set("access_token",e),t.href}async function vi({sourceConfig:n,source:e,bounds:t,accessToken:r,signal:i,onProgress:a,paddingTiles:s=0}){var y;if(!n)throw new Error("The selected basemap does not provide this building source.");let o=n;if(n.url){let p=n.url;if(p.startsWith("mapbox://")){const x=p.slice(9);if(!/^[\w.-]+(?:,[\w.-]+)*$/.test(x))throw new Error("Invalid Mapbox tileset ID.");p="https://api.mapbox.com/v4/"+x+".json?secure"}o=await(await gt(pt(p,r),i)).json()}if(!((y=o.tiles)!=null&&y.length))throw new Error("The selected source has no vector tile URLs.");const l=Math.max(o.minzoom??0,Math.min(16,o.maxzoom??16));if(!Number.isInteger(l)||l<0||l>22)throw new Error("Unsupported tile detail level.");const d=xi(t,l,s),c=[];let u=0,h=0,f=0;const v=e==="osm"?"building":"Montreal_Qatar-6hvjju";await Promise.all(Array.from({length:Math.min(4,d.length)},async()=>{for(;u<d.length;){const{x:p,y:x,z:F}=d[u++];let k=o.tiles[0].replaceAll("{z}",String(F)).replaceAll("{x}",String(p)).replaceAll("{y}",String(o.scheme==="tms"?2**F-x-1:x)).replaceAll("{ratio}","");k=pt(k,r);const C=await(await gt(k,i)).arrayBuffer();if(f+=C.byteLength,C.byteLength>16*1024*1024||f>96*1024*1024)throw new Error("Building tile data is too large for this browser. Select a smaller region.");const _=new wi(new fi(new Uint8Array(C))).layers[v];if(_)for(let L=0;L<_.length;L++){const j=_.feature(L);e==="osm"&&String(j.properties.extrude)!=="true"||j.type===3&&c.push(j.toGeoJSON(p,x,F))}h++,a==null||a(h/d.length)}})),i==null||i.throwIfAborted();const m=2**l,b=p=>p/m*360-180,g=p=>Math.atan(Math.sinh(Math.PI*(1-2*p/m)))*180/Math.PI,w=[b(Math.min(...d.map(p=>p.x))),g(Math.max(...d.map(p=>p.y))+1),b(Math.max(...d.map(p=>p.x))+1),g(Math.min(...d.map(p=>p.y)))];return{features:c,zoom:l,tileCount:d.length,coverageBounds:w}}const Q="flume-region-domain";function Mi({getMap:n,ready:e,onChange:t,accessToken:r}){const i=we({source:"concordia",drawing:!1,loading:!1,progress:0,region:null,snapshot:null,loadedArea:null,error:""});let a=null,s=!1,o=null,l=0,d=null;function c(S=!1){l++,o==null||o.abort(),S||(d=null,i.loadedArea=null),i.snapshot=null,t==null||t()}function u(){const S=n();if(!S||!e.value)return;qe(S,d==null?void 0:d.preview);const P={type:"FeatureCollection",features:i.region?[i.region.polygon]:d?[d.area.polygon]:[]};if(!P.features.length){S.getLayer(Q)&&S.removeLayer(Q),S.getSource(Q)&&S.removeSource(Q);return}S.getSource(Q)?S.getSource(Q).setData(P):(S.addSource(Q,{type:"geojson",data:P}),S.addLayer({id:Q,type:"line",source:Q,paint:{"line-color":"#a8b8cc","line-width":1.5,"line-dasharray":[4,3]}}))}function h(S){c(!i.region&&!i.snapshot),i.error="";try{i.region=ce(lt(S))}catch(P){i.region=null,i.error=P.message}u()}function f(S){var I;if(s||!a)return;const P=(I=S.features)==null?void 0:I.at(-1);if(S.type==="draw.create"&&P)for(const D of a.getAll().features)D.id!==P.id&&a.delete(D.id);const M=a.getAll().features.find(D=>D.geometry.type==="Polygon");M?h(M):(c(),i.region=null,u()),i.drawing=!1}function v(S){i.drawing=S.mode==="draw_polygon"||S.mode==="direct_select"}function m(){var P;const S=n();if(!S||!e.value)throw new Error("Wait for the map to load.");if(!a){a=new Yt({displayControlsDefault:!1,controls:{},boxSelect:!1}),S.addControl(a,"bottom-left");for(const M of["draw.create","draw.update","draw.delete"])S.on(M,f);S.on("draw.modechange",v);for(const M of S.getStyle().layers)M.id.startsWith("gl-draw-")&&(M.type==="fill"&&(S.setPaintProperty(M.id,"fill-color","#ffd000"),S.setPaintProperty(M.id,"fill-opacity",.1)),M.type==="line"&&S.setPaintProperty(M.id,"line-color","#ffd000"));(P=i.region)!=null&&P.selection&&a.add(i.region.selection)}return a}function b(){a&&a.changeMode("simple_select"),i.drawing=!1}function g(){if(!i.loading)try{const S=m();n().stop(),c(!i.region&&!i.snapshot),i.region=null,S.deleteAll(),u(),S.changeMode("draw_polygon"),i.drawing=!0,i.error=""}catch(S){i.error=S.message}}function w(){var S;(S=n())==null||S.stop(),k(),c(),i.region=null,i.error="",u()}function y(S){var I;const P=n(),M=P.getCanvas().clientWidth;(I=P.resize)==null||I.call(P),P.fitBounds([S.bounds.slice(0,2),S.bounds.slice(2,4)],{padding:M>=640?{top:40,bottom:40,left:Math.min(320,M*.35),right:40}:32,pitch:0,bearing:0,duration:500,retainPadding:!1})}async function p(S,P,M,I){if(M.signal.throwIfAborted(),(d==null?void 0:d.source)===P&&S.bounds.every((E,Y)=>Y<2?E>=d.area.bounds[Y]:E<=d.area.bounds[Y]))return d.tiles;const D=n().getStyle().sources[P==="osm"?"composite":"city-concordia"],U=await vi({sourceConfig:D,source:P,bounds:S.bounds,accessToken:r,signal:M.signal,paddingTiles:1,onProgress:E=>{I===l&&(i.progress=E)}});if(s||M.signal.aborted||I!==l)throw new DOMException("Cancelled","AbortError");const A=Pe(U.features);return d={source:P,area:S,tiles:U,preview:A},i.loadedArea=ce({source:P,bounds:[...S.bounds],extentM:[...S.extentM],count:A.features.length}),u(),U}async function x(){if(i.loading||s)return null;const S=n();if(!S||!e.value)return i.error="Wait for the map to load.",null;const P=new AbortController,M=l,I=i.source;o=P,i.loading=!0,i.progress=0,i.error="";try{const D=S.getCenter().wrap().toArray(),U=Xe(D)([-1500,-1500]),A=Ke(U,Xe(U)([3e3,3e3]));return y(A),await p(A,I,P,M),s||P.signal.aborted||M!==l?null:(i.snapshot=null,t==null||t(),i.loadedArea)}catch(D){return P.abort(),!s&&M===l&&D.name!=="AbortError"&&(i.error=D.message),null}finally{o===P&&(o=null,s||(i.loading=!1))}}async function F(){if(i.loading||s)return null;!i.region&&(d==null?void 0:d.source)===i.source&&h(d.area.polygon);const S=n(),P=i.region,M=i.source,I=l;if(!S||!e.value||!P)return i.error="Draw and finish a valid polygon first.",null;const D=new AbortController;o=D,i.loading=!0,i.progress=0,i.error="";try{const U=lt(P.selection??P.polygon);let A=U,E,Y;for(let ee=0;ee<4;ee++){if(Y=await p(A,M,D,I),s||D.signal.aborted||I!==l)return null;E=si(Y.features,U);const pe=Y.coverageBounds;if(E.bounds.every((R,T)=>T<2?R>pe[T]+1e-8:R<pe[T]-1e-8)||!E.buildings.features.length)break;if(ee===3)throw new Error("Selected buildings still reach the loaded tile boundary. Choose a smaller group.");A=E}return E.source=M,E.dataZoom=Y.zoom,E.tileCount=Y.tileCount,E.surroundings=Pe(E.surroundings.features),E.warnings=E.warnings.filter(ee=>!ee.startsWith("Loaded map tiles only")),E.warnings.push("Detailed tiles downloaded at zoom "+Y.zoom+" independently of the camera; provider data may still omit buildings."),E.warnings.push("Whole buildings touching the drawn polygon are selected. Unselected buildings inside the fitted rectangle are open ground."),i.snapshot=ce(E),i.region=ce({origin:E.origin,bounds:E.bounds,extentM:E.extentM,polygon:E.polygon,selection:E.selection}),u(),y(E),t==null||t(),E}catch(U){return D.abort(),!s&&I===l&&U.name!=="AbortError"&&(i.error=U.message),null}finally{o===D&&(o=null,s||(i.loading=!1))}}function k(){const S=n();if(!(!a||!S)){for(const P of["draw.create","draw.update","draw.delete"])S.off(P,f);S.off("draw.modechange",v),S.removeControl(a),a=null,i.drawing=!1}}function C(){o==null||o.abort(),k()}function _(){var S;u(),(S=i.region)!=null&&S.selection&&m()}function L(){s=!0,l++,o==null||o.abort(),k()}J(()=>i.source,()=>{c(),u(),i.error=""}),Ye(L);function j(){return(d==null?void 0:d.preview)??null}return{state:i,startSelection:g,stopSelection:b,clearSelection:w,setSelection:h,captureRegion:F,loadBuildings:x,getPreview:j,restore:_,beforeStyleChange:C,dispose:L}}function Si(n){const[e,t]=n.extentM,r=Math.round(e/4),i=Math.round(t/4);if(r<1||i<1||!Number.isSafeInteger(r*i)||Math.abs(r*4-e)>1e-5||Math.abs(i*4-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const a=kt(n.origin),s=new Float32Array(r*i);for(const d of n.buildings.features){const c=Number(d.properties.height);if(!Number.isFinite(c)||c<0||c>240)throw new Error("Invalid building height (0..240 metres).");if(!c)continue;const u=Math.max(1,Math.round(c/1.5)),h=d.geometry.type==="Polygon"?[d.geometry.coordinates]:d.geometry.coordinates;for(const f of h){const v=f.map(g=>g.map(a));let m=1/0,b=-1/0;for(const g of v)for(const w of g)m=Math.min(m,w[1]),b=Math.max(b,w[1]);for(let g=Math.max(0,Math.ceil(m/4-.5));g<Math.min(i,Math.ceil(b/4-.5));g++){const w=(g+.5)*4,y=[];for(const p of v)for(let x=0,F=p.length-1;x<p.length;F=x++){const k=p[F],C=p[x];(k[1]<=w&&C[1]>w||C[1]<=w&&k[1]>w)&&y.push(k[0]+(w-k[1])*(C[0]-k[0])/(C[1]-k[1]))}y.sort((p,x)=>p-x);for(let p=0;p+1<y.length;p+=2){const x=Math.max(0,Math.ceil(y[p]/4-.5-1e-8)),F=Math.min(r,Math.ceil(y[p+1]/4-.5-1e-8));for(let k=x;k<F;k++)s[g*r+k]=Math.max(s[g*r+k],u)}}}}let o=0,l=0;for(const d of s)d>0&&o++,l=Math.max(l,d);return{layers:s,nx:r,ny:i,origin:[...n.origin],extentM:[...n.extentM],spacingM:4,layerSpacingM:1.5,statistics:{builtCells:o,maximumHeightM:l*1.5}}}function ki({heightM:n,directionDeg:e,speedMps:t}){const r=(d,c)=>{if(d===""||d===null||d===void 0||!Number.isFinite(Number(d)))throw new Error("Invalid "+c+".");return Number(d)},i=r(n,"height"),a=r(e,"direction"),s=r(t,"speed");if(i<.75||i>239.25)throw new Error("Height must be between 0.75 and 239.25 m.");if(s<.5||s>20)throw new Error("Wind speed must be between 0.5 and 20 m/s.");const o=Math.max(0,Math.min(159,Math.round(i/1.5-.5))),l=(a%360+360)%360;return{layerIndex:o,heightM:(o+.5)*1.5,directionDeg:l,thetaRad:l*Math.PI/180,speedMps:s}}class Je{constructor(e,t,r){this.adapter=e,this.device=t,this.useF16=r,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),r=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(e.limits.maxBufferSize,1<<30)}});return new Je(e,r,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,r){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:t,label:r});return a._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,t,r=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|r,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),a=new Int32Array(r),s=new Float32Array(r);e.forEach(([l,d],c)=>{l==="u"?i[c]=d:l==="i"?a[c]=d:s[c]=d});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,r),this.scratch.push(o),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,r,i,a=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:r.map((l,d)=>({binding:d,resource:{buffer:l}}))}));const s=Math.max(1,Math.ceil(i/a)),o=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(s,o),Math.ceil(s/o))}async readFloat32(e,t){const r=t*4,i=this.buffer(r,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const s=new Float32Array(i.getMappedRange().slice(0,r));return i.unmap(),this.free(i),s}}function Pt(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const a=r[0],s=a>>>16&32768,o=a>>>23&255;let l=a&8388607;if(o===255){e[i]=s|31744|(l?1:0);continue}const d=o-127+15;if(d>=31){e[i]=s|31744;continue}if(d<=0){if(d<-10){e[i]=s;continue}l|=8388608;const u=14-d;let h=l>>>u;l>>>u-1&1&&(h+=1),e[i]=s|h;continue}let c=d<<10|l>>>13;l&4096&&(c+=1),e[i]=s|c}return e}function Fi(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;t++){const r=n[t],i=r&32768?-1:1,a=r>>10&31,s=r&1023;a===0?e[t]=i*s*2**-24:a===31?e[t]=s?NaN:i*(1/0):e[t]=i*(1+s/1024)*2**(a-15)}return e}const ie=180,_t=4,It=7,Qe=_t*It,_e=1.5,mt=4,Ci=1600,Ce=n=>n.toFixed(6),Pi=640,_i=`
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
  let gxr = cosT[angle] / ${Ce(mt)};
  let gyr = sinT[angle] / ${Ce(mt)};

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

  let cutoff = ${Ce(Ci)};
  var upperDistance = cutoff;
  var upperHeight = 0.0;
  var lowerDistance = cutoff;
  var lowerHeight = -u.queryHeight;
  var bestSlope = -1.0e20;
  var entered = 0.0;

  for (var step = 0u; step < ${Pi}u; step++) {
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
}`,Ii=`
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
  let out = (u.pixelOffset + localPixel) * ${Qe}u
          + sig * ${It}u;
  field[out] = dc / n;
  field[out + 1u] = re.x / n; field[out + 2u] = re.y / n; field[out + 3u] = re.z / n;
  field[out + 4u] = im.x / n; field[out + 5u] = im.y / n; field[out + 6u] = im.z / n;
}`,Bi=n=>`${n==="f16"?`enable f16;
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
  let c = ${Qe}u;
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
    let roofLayer = round(height[u32(ry) * u.gx + u32(rx)] / ${Ce(_e)});
    value = select(0.0, 1.0, roofLayer > u.queryLayer);
  } else {
    let which = i32(channel) - u.coordChannel;
    if (which == 0) { value = (sy - u.centreY) / u.coordYScale; }
    else if (which == 1) { value = u.coordZ; }
    else { value = (sx - u.coordXCentre) / u.coordXScale; }
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`;class Ai{constructor(e,t,r,i,a,s="f32"){this.context=e,this.store=s,this.ny=r,this.nx=i,this.margin=a,this.gy=r+2*a,this.gx=i+2*a,this.chunk=Math.min(16384,this.gy*this.gx);const o=new Float32Array(this.gy*this.gx);for(let c=0;c<r;c++){const u=c*i,h=(c+a)*this.gx+a;for(let f=0;f<i;f++)o[h+f]=t[u+f]*_e}this.heightBuffer=e.upload(o,"mddf.height");const l=new Float32Array(ie),d=new Float32Array(ie);for(let c=0;c<ie;c++){const u=2*Math.PI*c/ie;l[c]=Math.cos(u),d[c]=Math.sin(u)}this.cosBuffer=e.upload(l,"mddf.cos"),this.sinBuffer=e.upload(d,"mddf.sin"),this.rawBuffer=e.storage(_t*this.chunk*ie*4,"mddf.raw"),this.fieldBuffer=e.storage(this.gy*this.gx*Qe*4,"mddf.field"),this.tracePipeline=e.pipeline(_i),this.fourierPipeline=e.pipeline(Ii),this.assemblePipeline=e.pipeline(Bi(s)),this.currentLayer=-1}async compute(e,t={}){var s,o;const{context:r}=this,i=(e+.5)*_e,a=this.gy*this.gx;for(let l=0;l<a;l+=this.chunk){(s=t.signal)==null||s.throwIfAborted();const d=Math.min(this.chunk,a-l),c=r.uniform([["u",this.gy],["u",this.gx],["u",this.chunk],["u",l],["u",d],["u",0],["u",0],["u",0],["f",i],["f",0],["f",0],["f",0]]),u=r.device.createCommandEncoder(),h=u.beginComputePass();r.dispatch(h,this.tracePipeline,[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,c],d*ie),r.dispatch(h,this.fourierPipeline,[this.rawBuffer,this.fieldBuffer,c],d*4,64),h.end(),r.device.queue.submit([u.finish()]),await r.device.queue.onSubmittedWorkDone(),(o=t.onProgress)==null||o.call(t,(l+d)/a)}await r.device.queue.onSubmittedWorkDone(),r.releaseScratch(),this.currentLayer=e}assemble(e,t,r,i,a,s,o){const{context:l}=this,d=t.length/2,c=l.upload(t,"assemble.origins"),u=l.uniform([["u",d],["u",r.channels],["u",r.mddfChannels],["u",s],["u",this.gy],["u",this.gx],["u",this.margin],["u",0],["i",r.solidChannel],["i",r.coordChannel],["i",0],["i",0],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",a],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["f",r.coordYScale],["f",(a-r.coordZCentre)/r.coordZScale],["f",r.coordXCentre],["f",r.coordXScale],["f",0],["f",0]]),h=e.beginComputePass();return l.dispatch(h,this.assemblePipeline,[this.fieldBuffer,this.heightBuffer,c,r.tableBuffer,r.normBuffer,o,u],d*r.channels*s*s),h.end(),c}destroy(){for(const e of[this.heightBuffer,this.cosBuffer,this.sinBuffer,this.rawBuffer,this.fieldBuffer])this.context.free(e)}}const Ve=`
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
`,$i=`
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
}`;function yt(n,e,t,r=1e-5){const i=n==="f16"||e==="f16"?`enable f16;
`:"",a=o=>n==="f16"?`f32(${o})`:o,s=o=>e==="f16"?`f16(${o})`:o;return`${i}
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
    Y[base + i] = ${s("("+a("X[base + i]")+" - mean) * inverse")};
  }
}`}const Le=32;function Ei(n){const{store:e,patch:t,modes1:r,modes2:i}=n,a=t*t,s=2*r,o=e==="f16"?`enable f16;
`:"",l=c=>e==="f16"?`f32(${c})`:c,d=c=>e==="f16"?`f16(${c})`:c;return{conv1x1:`${o}${Ve}
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
}`,gate:`${o}${Ve}
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
}`,instanceNorm:yt(e,e,a),instanceNormScaled:yt(e,e,a,1e-5/(Le*Le)),forwardColumns:`${o}
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
  let half = select(0u, 1u, s >= ${r}u);
  let sp = s - half * ${r}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${r*i}u;
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
  Y[g] = ${d("acc * "+1/Le)};
}`,residual:`${o}${Ve}
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
}`}}function Ri(n,e,t){const r=2*e,i=[];for(let f=0;f<e;f++)i.push(f);for(let f=n-e;f<n;f++)i.push(f);const a=new Float32Array(n*t),s=new Float32Array(n*t);for(let f=0;f<n;f++)for(let v=0;v<t;v++){const m=2*Math.PI*f*v/n;a[f*t+v]=Math.cos(m),s[f*t+v]=-Math.sin(m)}const o=new Float32Array(r*n),l=new Float32Array(r*n);for(let f=0;f<r;f++)for(let v=0;v<n;v++){const m=2*Math.PI*i[f]*v/n;o[f*n+v]=Math.cos(m),l[f*n+v]=-Math.sin(m)}const d=new Float32Array(n*r),c=new Float32Array(n*r);for(let f=0;f<n;f++)for(let v=0;v<r;v++){const m=2*Math.PI*i[v]*f/n;d[f*r+v]=Math.cos(m)/n,c[f*r+v]=Math.sin(m)/n}const u=new Float32Array(t*n),h=new Float32Array(t*n);for(let f=0;f<t;f++){const v=(f===0?1:2)/n;for(let m=0;m<n;m++){const b=2*Math.PI*f*m/n;u[f*n+m]=v*Math.cos(b),h[f*n+m]=-v*Math.sin(b)}}return{forwardCos:a,forwardSin:s,rowRe:o,rowIm:l,inverseRowRe:d,inverseRowIm:c,inverseColCos:u,inverseColSin:h}}class Di{constructor(e,t,r,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.layers=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.maxBatch=i,this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw new Error("only square patches are supported");const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2};this.pipelines={};for(const[d,c]of Object.entries(Ei(s)))this.pipelines[d]=e.pipeline(c);this.contractPipeline=e.pipeline($i);const o=d=>{const c=t.tensors[d];if(!c)throw new Error(`missing tensor ${d}`);return Fi(new Uint16Array(r,c.offset,c.count))};this.read=o,this.tables={};for(const[d,c]of Object.entries(Ri(this.patch,this.modes1,this.modes2)))this.tables[d]=e.upload(c,`fno.table.${d}`);this.weights={};const l=(d,c)=>{const u=o(c);this.weights[d]=this.store==="f16"?e.upload(Pt(u),`fno.${d}`):e.upload(u,`fno.${d}`)};l("p1w","p.mlp1.weight"),l("p1b","p.mlp1.bias"),l("p2w","p.mlp2.weight"),l("p2b","p.mlp2.bias"),l("q1w","q.mlp1.weight"),l("q1b","q.mlp1.bias"),l("q2w","q.mlp2.weight"),l("q2b","q.mlp2.bias");for(let d=0;d<this.layers;d++)l(`m1w${d}`,`mlp_layers.${d}.mlp1.weight`),l(`m1b${d}`,`mlp_layers.${d}.mlp1.bias`),l(`m2w${d}`,`mlp_layers.${d}.mlp2.weight`),l(`m2b${d}`,`mlp_layers.${d}.mlp2.bias`),l(`lw${d}`,`w_layers.${d}.weight`),l(`lb${d}`,`w_layers.${d}.bias`);this.buildSpectralWeights(),this.allocate(i)}buildSpectralWeights(){const{context:e,metadata:t}=this,r=t.tucker;let i=r.core_shape.slice(),a=e.upload(this.read(`${r.core}.re`),"tucker.core.re"),s=e.upload(this.read(`${r.core}.im`),"tucker.core.im");for(const l of r.factors){const[d,c]=l.shape;if(i[l.mode]!==c)throw new Error(`factor ${l.name} does not match the core`);const u=i.slice();u[l.mode]=d;const h=u.reduce((x,F)=>x*F,1),f=u.slice(l.mode+1).reduce((x,F)=>x*F,1),v=e.storage(h*4,"tucker.re"),m=e.storage(h*4,"tucker.im"),b=e.upload(this.read(`${l.name}.re`),"tucker.f"),g=e.upload(this.read(`${l.name}.im`),"tucker.f"),w=e.uniform([["u",u[0]],["u",u[1]],["u",u[2]],["u",u[3]],["u",u[4]],["u",l.mode],["u",d],["u",c],["u",f],["u",0],["u",h],["u",0]]),y=e.device.createCommandEncoder(),p=y.beginComputePass();e.dispatch(p,this.contractPipeline,[a,s,b,g,v,m,w],h),p.end(),e.device.queue.submit([y.finish()]),e.free(a),e.free(s),e.free(b),e.free(g),a=v,s=m,i=u}e.releaseScratch();const o=[2*this.layers,this.width,this.width,this.modes1,this.modes2];if(i.join()!==o.join())throw new Error(`spectral stack is ${i} but ${o} was expected`);this.spectralRe=a,this.spectralIm=s}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,a=2*this.modes1,s=(l,d)=>t.storage(e*l*r*this.elementBytes,d),o=(l,d)=>t.storage(e*i*l*4,d);this.buffers={input:s(this.inputChannels,"fno.input"),x:s(i,"fno.x"),t1:s(i,"fno.t1"),t2:s(i,"fno.t2"),gates:s(4*i,"fno.gates"),hidden:s(2*i,"fno.hidden"),spectral:s(i,"fno.spectral"),local:s(i,"fno.local"),wide:s(2*i,"fno.wide"),output:s(this.outputChannels,"fno.output"),xRe:o(this.patch*this.modes2,"fno.xRe"),xIm:o(this.patch*this.modes2,"fno.xIm"),yRe:o(a*this.modes2,"fno.yRe"),yIm:o(a*this.modes2,"fno.yIm"),zRe:o(a*this.modes2,"fno.zRe"),zIm:o(a*this.modes2,"fno.zIm"),wRe:o(this.patch*this.modes2,"fno.wRe"),wIm:o(this.patch*this.modes2,"fno.wIm")}}get inputBuffer(){return this.buffers.input}allocationBytes(e){const t=this.patch*this.patch,r=this.width,i=2*this.modes1,a=this.inputChannels+5*r+4*r+2*r+2*r+this.outputChannels,s=r*(2*this.patch*this.modes2*2+4*i*this.modes2)*4;return e*(a*t*this.elementBytes+s)}encode(e,t){const{context:r,buffers:i,pipelines:a,tables:s}=this,o=this.width,l=this.patch*this.patch,d=2*this.modes1,c=e.beginComputePass(),u=(f,v,m,b,g=256)=>{r.dispatch(c,f,[...v,r.uniform(m)],b,g)},h=(f,v,m=a.instanceNorm)=>{c.setPipeline(m),c.setBindGroup(0,r.device.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:f}},{binding:1,resource:{buffer:v}}]})),c.dispatchWorkgroups(t*o)};u(a.conv1x1,[i.input,this.weights.p1w,this.weights.p1b,i.wide],[["u",t],["u",this.inputChannels],["u",2*o],["u",1]],t*2*o*l),u(a.conv1x1,[i.wide,this.weights.p2w,this.weights.p2b,i.x],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l);for(let f=0;f<this.layers;f++)h(i.x,i.t1),u(a.forwardColumns,[i.t1,s.forwardCos,s.forwardSin,i.xRe,i.xIm],[["u",t],["u",o],["u",0],["u",0]],t*o*this.patch*this.modes2),u(a.rowMix,[i.xRe,i.xIm,s.rowRe,s.rowIm,i.yRe,i.yIm],[["u",t],["u",o],["u",d],["u",this.patch]],t*o*d*this.modes2),u(a.spectralMix,[i.yRe,i.yIm,this.spectralRe,this.spectralIm,i.zRe,i.zIm],[["u",t],["u",o],["u",2*f],["u",0]],t*o*d*this.modes2),u(a.rowMix,[i.zRe,i.zIm,s.inverseRowRe,s.inverseRowIm,i.wRe,i.wIm],[["u",t],["u",o],["u",this.patch],["u",d]],t*o*this.patch*this.modes2),u(a.inverseColumns,[i.wRe,i.wIm,s.inverseColCos,s.inverseColSin,i.t2],[["u",t],["u",o],["u",0],["u",0]],t*o*l),h(i.t2,i.t1,a.instanceNormScaled),u(a.conv1x1,[i.t1,this.weights[`m1w${f}`],this.weights[`m1b${f}`],i.gates],[["u",t],["u",o],["u",4*o],["u",0]],t*4*o*l),u(a.gate,[i.gates,i.hidden],[["u",t],["u",2*o],["u",0],["u",0]],t*2*o*l),u(a.conv1x1,[i.hidden,this.weights[`m2w${f}`],this.weights[`m2b${f}`],i.spectral],[["u",t],["u",2*o],["u",o],["u",0]],t*o*l),u(a.conv1x1,[i.x,this.weights[`lw${f}`],this.weights[`lb${f}`],i.local],[["u",t],["u",o],["u",o],["u",0]],t*o*l),u(a.residual,[i.spectral,i.local,i.x],[["u",t*o*l],["u",f<this.layers-1?1:0],["u",0],["u",0]],t*o*l);return u(a.conv1x1,[i.x,this.weights.q1w,this.weights.q1b,i.wide],[["u",t],["u",o],["u",2*o],["u",1]],t*2*o*l),u(a.conv1x1,[i.wide,this.weights.q2w,this.weights.q2b,i.output],[["u",t],["u",2*o],["u",this.outputChannels],["u",0]],t*this.outputChannels*l),c.end(),i.output}destroy(){const{context:e}=this;for(const t of Object.values(this.buffers))e.free(t);for(const t of Object.values(this.weights))e.free(t);for(const t of Object.values(this.tables))e.free(t);e.free(this.spectralRe),e.free(this.spectralIm)}}const Ti=n=>n.toFixed(6),Vi=n=>`${n==="f16"?`enable f16;
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
}`,Li=`
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
                      / ${Ti(_e)});
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
}`;function zi(n,e){if(!n)return e;if(!e)return n;const t=Math.min(n.y0,e.y0),r=Math.min(n.x0,e.x0);return{y0:t,x0:r,h:Math.max(n.y0+n.h,e.y0+e.h)-t,w:Math.max(n.x0+n.w,e.x0+e.w)-r}}function Ni(n,e,t){let r=1/0,i=-1/0;const a=s=>{r=Math.min(r,s),i=Math.max(i,s)};for(let s=0;s<4;s++){const o=n[s],l=n[(s+1)%4];o[1]>=e&&o[1]<=t&&a(o[0]);for(const d of[e,t])if((o[1]-d)*(l[1]-d)<0){const c=(d-o[1])/(l[1]-o[1]);a(o[0]+c*(l[0]-o[0]))}}return r<=i?[r,i]:null}class Ui{constructor(e,t,r,i={}){this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.stride=Math.max(1,Math.round(this.patch*(1-t.inference.overlap))),this.batchSize=i.batchSize||16,this.fno=new Di(e,t,r,this.batchSize),this.blendPipeline=e.pipeline(Vi(this.fno.store)),this.finalizePipeline=e.pipeline(Li),this.plan=this.buildPlan(),this.city=null}buildPlan(){const{context:e,metadata:t}=this,r=t.features,i=t.mddf.channels_per_signal,a=t.mddf.modes_per_signal,s=r.mddf_source_indices,o=new Uint32Array(s.length*4),l=new Float32Array(s.length*2);s.forEach((c,u)=>{const h=Math.floor(c/i),f=c%i,v=f>a?1:0,m=f===0?0:v?f-a:f;o.set([h*i+m,h*i+(m===0?0:a+m),m,v],u*4),l[u*2]=r.mddf_center[u],l[u*2+1]=r.mddf_scale[u]});const d=t.coordinates;return{channels:t.model.input_channels,mddfChannels:s.length,solidChannel:r.use_building_input?s.length:-1,coordChannel:s.length+(r.use_building_input?1:0),coordYScale:d.y_scale,coordZCentre:d.z_center,coordZScale:d.z_scale,coordXCentre:d.x_center,coordXScale:d.x_scale,tableBuffer:e.upload(o,"plan.table"),normBuffer:e.upload(l,"plan.norm")}}setCity(e,t,r){this.city&&this.city.field.destroy();const i=Math.ceil(this.patch*Math.SQRT2),a=(t+2*i)*(r+2*i)*28*4,s=this.context.device.limits.maxStorageBufferBindingSize;if(a>s)throw new Error(`city ${r} x ${t} needs a ${(a/2**20).toFixed(0)} MiB feature buffer, but this GPU allows ${(s/2**20).toFixed(0)} MiB`);const o=new Ai(this.context,e,t,r,i,this.fno.store);return this.city={field:o,ny:t,nx:r,layerMap:e,margin:i,layerIndex:-1},{margin:i,gy:o.gy,gx:o.gx}}async setHeight(e,t={}){if(!this.city)throw new Error("no city loaded");return this.city.layerIndex===e?!1:(await this.city.field.compute(e,t),this.city.layerIndex=e,!0)}tiling(e){const{ny:t,nx:r}=this.city,i=(t-1)/2,a=(r-1)/2,s=Math.cos(e),o=Math.sin(e),l=[[0,0],[r-1,0],[r-1,t-1],[0,t-1]].map(([y,p])=>{const x=y-a,F=p-i;return[a+x*s+F*o,i-x*o+F*s]}),d=Math.floor(Math.min(...l.map(y=>y[1]))),c=Math.ceil(Math.max(...l.map(y=>y[1]))),u=Math.floor(Math.min(...l.map(y=>y[0]))),h=Math.ceil(Math.max(...l.map(y=>y[0]))),f=h-u+1,v=Math.max(1,Math.ceil((f-this.patch)/this.stride)+1),m=v>1?(f-this.patch)/(v-1):0,b=l.map(([y,p])=>[p,y]),g=[],w=[];for(let y=0;y<v;y++){const p=Math.round(u+y*m),x=Ni(b,p,p+this.patch-1)||[d,d+this.patch-1],F=Math.floor(x[0]),k=Math.max(this.patch,Math.ceil(x[1])-F+1),C=Math.max(1,Math.ceil((k-this.patch)/this.stride)+1),_=C>1?(k-this.patch)/(C-1):0;w.push([g.length/2,C,p-u]);for(let L=0;L<C;L++)g.push(p,Math.round(F+L*_))}return{origins:new Float32Array(g),columns:w,columnCount:v,columnStride:m,syMin:d,sxMin:u,gridH:c-d+1,gridW:h-u+1,patchCount:g.length/2}}patchRect(e,t,r){let i=1/0,a=1/0,s=-1/0,o=-1/0;for(const[l,d,c]of e.columns)for(let u=0;u<d;u++){const h=l+u;if(h<t||h>=r)continue;const f=e.origins[h*2+1]-e.syMin;i=Math.min(i,f),a=Math.min(a,c),s=Math.max(s,f+this.patch),o=Math.max(o,c+this.patch)}return Number.isFinite(i)?(i=Math.max(0,i),a=Math.max(0,a),s=Math.min(e.gridH,s),o=Math.min(e.gridW,o),{y0:i,x0:a,h:Math.max(0,s-i),w:Math.max(0,o-a)}):null}async predict(e,t={}){var ee,pe,Ee;const{context:r,city:i}=this,a=this.tiling(e),s=this.metadata.model.output_channels,o=a.gridH*a.gridW,l=this.patch*this.patch,d=performance.now(),c=!!(t.shouldDraw&&t.onDraw),u=s+2,h=r.storage(a.patchCount*s*l*this.fno.elementBytes,"predict.patches"),f=new Int32Array(a.patchCount);for(let R=0;R<a.patchCount;R++)f[R]=a.origins[R*2+1]-a.syMin;const v=r.upload(f,"blend.origins"),m=r.upload(new Int32Array(a.columns.flat()),"blend.columns"),b=r.storage(o*s*4,"blend.field"),g=r.storage(o*4,"blend.weight"),w=r.storage(o*4,"blend.solid"),y=r.storage(c?o*4:4,"blend.finalWeight"),p=r.storage(c?o*u*4:4,"blend.packed"),x=this.metadata.target,F=r.upload(new Float32Array(x.center),"final.centre"),k=r.upload(new Float32Array(x.scale),"final.scale"),C={y0:0,x0:0,h:a.gridH,w:a.gridW},_=(R,T,H,oe)=>{const Me=R.beginComputePass();r.dispatch(Me,this.blendPipeline,[h,v,m,b,oe,r.uniform([["u",a.gridH],["u",a.gridW],["u",this.patch],["u",s],["u",a.columnCount],["u",a.patchCount],["u",H],["u",0],["u",T.y0],["u",T.x0],["u",T.h],["u",T.w],["f",a.columnStride],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0]])],T.h*T.w),Me.end()},L=(R,T,H)=>{const oe=R.beginComputePass();r.dispatch(oe,this.finalizePipeline,[b,g,F,k,i.field.heightBuffer,w,y,p,r.uniform([["u",a.gridH],["u",a.gridW],["u",s],["u",H?1:0],["u",T.y0],["u",T.x0],["u",T.h],["u",T.w],["i",a.syMin],["i",a.sxMin],["i",0],["i",0],["f",Math.cos(e)],["f",Math.sin(e)],["f",(i.ny-1)/2],["f",(i.nx-1)/2],["f",i.field.gy],["f",i.field.gx],["f",i.margin],["f",i.layerIndex],["f",i.ny],["f",i.nx],["f",0],["f",0]])],T.h*T.w),oe.end()};if(c){const R=r.device.createCommandEncoder();_(R,C,a.patchCount,y),r.device.queue.submit([R.finish()]),(ee=t.onStart)==null||ee.call(t,{gridH:a.gridH,gridW:a.gridW,originY:a.syMin,originX:a.sxMin,theta:e,patchCount:a.patchCount})}const j=2,S=[];let P=null;for(let R=0;R<a.patchCount;R+=this.batchSize){(pe=t.signal)==null||pe.throwIfAborted();const T=Math.min(this.batchSize,a.patchCount-R),H=r.device.createCommandEncoder(),oe=i.field.assemble(H,a.origins.subarray(R*2,(R+T)*2),this.plan,e,i.layerIndex,this.patch,this.fno.inputBuffer),Me=this.fno.encode(H,T);H.copyBufferToBuffer(Me,0,h,R*s*l*this.fno.elementBytes,T*s*l*this.fno.elementBytes);let Z=null;if(c){P=zi(P,this.patchRect(a,R,R+T));const Re=R+T>=a.patchCount;P&&P.h>0&&P.w>0&&(Re||t.shouldDraw())&&(Z=P,P=null,_(H,Z,R+T,g),L(H,Z,!0))}if(r.device.queue.submit([H.finish()]),r.free(oe),await r.device.queue.onSubmittedWorkDone(),(Ee=t.onProgress)==null||Ee.call(t,(R+T)/a.patchCount),c&&(S.push(r.device.queue.onSubmittedWorkDone()),S.length>j&&await S.shift()),Z){const Re=await r.readFloat32(p,Z.h*Z.w*u);t.onDraw({x0:Z.x0,y0:Z.y0,width:Z.w,height:Z.h,stride:u,channels:s,theta:e,values:Re,readyCount:R+T,patchCount:a.patchCount})}}const M=r.device.createCommandEncoder();_(M,C,a.patchCount,g),L(M,C,!1),r.device.queue.submit([M.finish()]);const I=await r.readFloat32(b,o*s),D=await r.readFloat32(w,o),U=await r.readFloat32(g,o),A=performance.now()-d;let E=0,Y=0;for(let R=0;R<o;R++)if(D[R]!==2){if(U[R]<=1e-6){E+=1;continue}for(let T=0;T<s;T++)if(!Number.isFinite(I[R*s+T])){Y+=1;break}}for(const R of[h,b,g,w,v,m,F,k,y,p])r.free(R);return r.releaseScratch(),{values:I,solid:D,theta:e,height:a.gridH,width:a.gridW,originY:a.syMin,originX:a.sxMin,patchCount:a.patchCount,channels:x.channel_names,milliseconds:A,uncovered:E,nonFinite:Y,insideCells:o}}destroy(){this.city&&this.city.field.destroy(),this.fno.destroy(),this.context.free(this.plan.tableBuffer),this.context.free(this.plan.normBuffer)}}function Wi(n,e){var t,r,i,a,s,o,l,d,c;if(n.dtype!=="float16"||n.total_bytes!==e||((t=n.grid)==null?void 0:t.horizontal_spacing_m)!==4||((r=n.grid)==null?void 0:r.vertical_spacing_m)!==1.5)throw new Error("Model bytes/grid spacing do not match FLUME.");if(((i=n.model)==null?void 0:i.input_channels)!==24||((a=n.model)==null?void 0:a.output_channels)!==5||((o=(s=n.inference)==null?void 0:s.patch)==null?void 0:o.join())!=="64,64"||((d=(l=n.target)==null?void 0:l.channel_names)==null?void 0:d.join())!=="u,w,v,T,TKE")throw new Error("Unsupported model shape/channel order.");for(const u of Object.values(n.tensors??{}))if(!Number.isInteger(u.offset)||u.offset<0||u.offset%2||!Number.isInteger(u.count)||u.count<=0||u.offset+u.count*2>e||!Array.isArray(u.shape)||u.shape.some(h=>!Number.isInteger(h)||h<1)||u.shape.reduce((h,f)=>h*f,1)!==u.count)throw new Error("Invalid model tensor bounds.");if(!Object.keys(n.tensors??{}).length||!Number.isFinite((c=n.wind)==null?void 0:c.reference_speed_m_s)||n.wind.reference_speed_m_s<=0)throw new Error("Invalid model metadata.")}function ji(n){if(!Number.isInteger(n.width)||!Number.isInteger(n.height)||n.width<1||n.height<1||n.values.length!==n.width*n.height*5||n.solid.length!==n.width*n.height)throw new Error("Invalid prediction shape.");for(let e=0;e<n.solid.length;e++)for(let t=0;t<5;t++)Number.isFinite(n.values[e*5+t])||(n.solid[e]=2,n.values[e*5+t]=0)}function Oi(){const n=we({busy:!1,progress:0,stage:"Ready",error:"",prediction:null,downloading:!1});let e=null,t=null,r=null,i=null,a=null,s=!1,o=0;const l=new AbortController;function d(){try{t==null||t.destroy()}finally{e==null||e.device.destroy(),t=null,e=null,a=null}}async function c(){if(t)return;n.stage="Loading model";const m="/cityffdv2-demo/flume/",[b,g,w]=await Promise.all(["model/metadata.json","model/weights.bin","colorbar.json"].map(async y=>{const p=await fetch(m+y,{signal:l.signal});if(!p.ok)throw new Error("Could not load "+y+" (HTTP "+p.status+").");return y.endsWith(".bin")?p.arrayBuffer():p.json()}));Wi(b,g.byteLength),l.signal.throwIfAborted(),e=await Je.create(),l.signal.throwIfAborted(),e.device.addEventListener("uncapturederror",y=>{n.error="WebGPU: "+y.error.message.split(`
`)[0]}),e.device.lost.then(y=>{!s&&y.reason!=="destroyed"&&(n.error="GPU device lost. Run again to initialize a new session.",n.prediction=null,t=null,e=null,a=null)}),r=b,i=w,t=new Ui(e,r,g,{batchSize:4})}async function u(m,b){if(s||n.busy||n.downloading)return null;n.busy=!0,n.error="",n.progress=0;const g=++o;try{if(await c(),s||g!==o||(m!==a&&(t.setCity(m.layers,m.ny,m.nx),a=m),n.stage="Preparing geometry · MDDF",await t.setHeight(b.layerIndex,{signal:l.signal,onProgress:p=>{!s&&g===o&&(n.progress=p*.25)}}),s||g!==o))return null;n.stage="Predicting wind · FNO";const w=await t.predict(b.thetaRad,{signal:l.signal,onProgress:p=>{!s&&g===o&&(n.progress=.25+p*.75)}});if(l.signal.throwIfAborted(),s||g!==o)return null;if(n.error)throw new Error(n.error);ji(w);const y={...w,grid:m,settings:{...b},referenceSpeed:r.wind.reference_speed_m_s,modelLabel:r.label,colorbar:i,inputRevision:g};return n.prediction=ce(y),n.progress=1,n.stage="Prediction ready",y}catch(w){return!s&&g===o&&(n.error=w.message,n.stage="Prediction failed",n.prediction=null),d(),null}finally{s?d():n.busy=!1}}async function h(){if(!t||!n.prediction||n.busy||n.downloading)throw new Error("Run a valid prediction before downloading MDDF.");n.downloading=!0;try{const m=t.city.field,b=await e.readFloat32(m.fieldBuffer,m.gy*m.gx*28);if(s)throw new Error("The page was closed.");return{values:b,ny:m.gy,nx:m.gx,margin:m.margin,layerIndex:t.city.layerIndex}}finally{n.downloading=!1,s&&d()}}function f(){o++,n.prediction=null,n.error="",n.progress=0,n.stage="Ready"}function v(){s=!0,o++,l.abort(),!n.busy&&!n.downloading&&d()}return Ye(v),{state:n,run:u,readMddf:h,invalidate:f,dispose:v}}const Xi=[1.5,3],de=8e3,ae={white:{pixelsPerParticle:680,maxParticles:1200,minParticles:150,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1},tinted:{pixelsPerParticle:340,maxParticles:2400,minParticles:300,lineWidth:2.5,trailSeconds:3.5,solidFraction:.45,trailCutoff:.03,timeScale:30,strength:1,lineOpacity:1}},qi=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Yi=`
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
}`,Gi=`
attribute vec2 segment;
attribute vec3 tint;
attribute vec4 ends;          // the segment's two endpoints, in buffer pixels
varying vec3 vTint;
varying vec4 vEnds;
void main() {
  vTint = tint;
  vEnds = ends;
  gl_Position = vec4(segment, 0.0, 1.0);
}`,Hi=`
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
}`,Zi=`
#include <clipping_planes_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}`,Ki=`
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
}`;class Ji{constructor(e){this.renderer=e,this.enabled=!1,this.field=null,this.particles=[],this.viewKey="",this.width=1,this.height=1,this.stats={target:0,drawn:0,placed:0,bounds:null},this.settings={white:{...ae.white},tinted:{...ae.tinted}},this.mode="white",this.palette=null,this.tintRange=null,this.lastValue=0,this.ready=1,this.readyX=1/0,this.extent={x0:0,y0:0,x1:0,y1:0},this.degenerate=!1,this.camera=new Gt(-1,1,1,-1,0,1),this.quad=new xe(new Ne(2,2),null),this.quad.frustumCulled=!1,this.quadScene=new Ue().add(this.quad),this.targets=null,this.fade=new ke({vertexShader:qi,fragmentShader:Yi,uniforms:{previous:{value:null},drop:{value:.02},cutoff:{value:ae.white.trailCutoff}},depthTest:!1,depthWrite:!1,side:Fe}),this.vertices=new Float32Array(de*12),this.tints=new Float32Array(de*18),this.ends=new Float32Array(de*24);const t=new vt;t.setAttribute("segment",new ye(this.vertices,2).setUsage(De)),t.setAttribute("tint",new ye(this.tints,3).setUsage(De)),t.setAttribute("ends",new ye(this.ends,4).setUsage(De)),t.setAttribute("position",new ye(new Float32Array(de*18),3)),this.lineGeometry=t,this.lines=new xe(t,new ke({vertexShader:Gi,fragmentShader:Hi,uniforms:{opacity:{value:ae.white.lineOpacity},halfWidth:{value:ae.white.lineWidth*.5}},depthTest:!1,depthWrite:!1,transparent:!0,side:Fe})),this.lines.frustumCulled=!1,this.lineScene=new Ue().add(this.lines),this.material=new ke({vertexShader:Zi,fragmentShader:Ki,uniforms:{trail:{value:null},resolution:{value:new We(1,1)},strength:{value:ae.white.strength},solid:{value:ae.white.solidFraction}},transparent:!0,depthWrite:!1,side:Fe,clipping:!0}),this.mesh=new xe(new Ne(1,1),this.material),this.mesh.visible=!1,this.planeSize=new We(1,1),this.plane=new be,this.ray=new Ht,this.scratch=new q,this.matrix=new je}setResolution(e,t){if(!(e===this.width&&t===this.height)){this.width=Math.max(1,Math.round(e)),this.height=Math.max(1,Math.round(t));for(const r of this.targets||[])r.dispose();this.targets=[0,1].map(()=>new Zt(this.width,this.height,{minFilter:rt,magFilter:rt,format:Oe,type:Mt,depthBuffer:!1,stencilBuffer:!1})),this.material.uniforms.resolution.value.set(this.width,this.height),this.reset()}}setPlane(e,t){this.planeSize.set(e,t)}setField(e,t){this.field=e,this.metresPerCell=t,this.ready=1,this.readyX=1/0,this.reset()}setProgress(e,t){this.ready=Math.max(0,Math.min(1,e)),this.readyX=Math.max(this.readyX===1/0?0:this.readyX,t)}replaceField(e){this.field=e,this.ready=1,this.readyX=1/0}get p(){return this.settings[this.mode]||this.settings.white}setMode(e){e!=="white"&&e!=="tinted"||e!==this.mode&&(this.mode=e,this.applyUniforms())}setParam(e,t,r){const i=this.settings[e];!i||!(t in i)||!Number.isFinite(r)||(i[t]=r,e===this.mode&&this.applyUniforms())}applyUniforms(){const e=this.p;this.fade.uniforms.cutoff.value=e.trailCutoff,this.lines.material.uniforms.halfWidth.value=e.lineWidth*.5,this.lines.material.uniforms.opacity.value=e.lineOpacity,this.material.uniforms.strength.value=e.strength,this.material.uniforms.solid.value=e.solidFraction}setTinting(e,t){this.palette=e||null,this.tintRange=t||null}tintFor(e,t){if(!this.palette||!this.tintRange)return t[0]=1,t[1]=1,t[2]=1,t;const[r,i]=this.tintRange,a=Math.min(1,Math.max(0,(e-r)/Math.max(1e-6,i-r))),s=Math.min(255,Math.round(a*255))*4;return t[0]=this.palette[s]/255,t[1]=this.palette[s+1]/255,t[2]=this.palette[s+2]/255,t}reset(){if(this.particles.length=0,this.viewKey="",!this.targets)return;const e=this.renderer,t=e.getRenderTarget(),r=new Kt,i=e.getClearAlpha();e.getClearColor(r),e.setClearColor(0,0);for(const a of this.targets)e.setRenderTarget(a),e.clear(!0,!1,!1);e.setClearColor(r,i),e.setRenderTarget(t)}sample(e,t,r){const i=this.field;if(!i||!Number.isFinite(e)||!Number.isFinite(t)||e<.5||t<.5||e>i.width-.5||t>i.height-.5)return null;const a=Math.min(i.width-1,Math.max(0,Math.round(e-.5))),s=Math.min(i.height-1,Math.max(0,Math.round(t-.5)));if(i.solid[s*i.width+a]!==0)return null;const o=Math.min(i.width-1,Math.max(0,e-.5)),l=Math.min(i.height-1,Math.max(0,t-.5)),d=Math.floor(o),c=Math.floor(l),u=Math.min(d+1,i.width-1),h=Math.min(c+1,i.height-1),f=o-d,v=l-c,m=b=>{const g=b[c*i.width+d],w=b[c*i.width+u],y=b[h*i.width+d],p=b[h*i.width+u];return(g*(1-f)+w*f)*(1-v)+(y*(1-f)+p*f)*v};return r[0]=m(i.u)/this.metresPerCell,r[1]=m(i.v)/this.metresPerCell,this.lastValue=i.value?m(i.value):0,Math.hypot(r[0],r[1])>.001?r:null}visibleBounds(e,t){const r=this.field,i={x0:.5,y0:.5,x1:r.width-.5,y1:r.height-.5},a=this.scratch.set(0,0,1).applyQuaternion(t.quaternion);this.plane.setFromNormalAndCoplanarPoint(a.clone(),t.position);let s=1/0,o=1/0,l=-1/0,d=-1/0;for(const[c,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const h=new q(c,u,-1).unproject(e),f=new q(c,u,1).unproject(e);this.ray.set(h,f.sub(h).normalize());const v=this.ray.intersectPlane(this.plane,new q);if(!v)return i;const m=t.worldToLocal(v),b=(m.x/this.planeSize.x+.5)*r.width,g=(m.y/this.planeSize.y+.5)*r.height;s=Math.min(s,b),l=Math.max(l,b),o=Math.min(o,g),d=Math.max(d,g)}return{x0:Math.max(i.x0,s),x1:Math.min(i.x1,l),y0:Math.max(i.y0,o),y1:Math.min(i.y1,d)}}respawn(e,t){e.age=0,e.life=0,e.x=NaN,e.y=NaN,(t.x1<=t.x0||t.y1<=t.y0)&&(t={x0:.5,y0:.5,x1:Math.min(this.readyX,this.field.width-.5),y1:this.field.height-.5},this.degenerate=!0);const r=[0,0];for(let i=0;i<40;i++){const a=t.x0+Math.random()*(t.x1-t.x0),s=t.y0+Math.random()*(t.y1-t.y0);if(this.sample(a,s,r)){e.x=a,e.y=s;const[o,l]=Xi;return e.life=this.p.trailSeconds*(o+Math.random()*(l-o)),!0}}return!1}toPixels(e,t,r,i){const a=this.field,s=this.scratch.set((e/a.width-.5)*this.planeSize.x,(t/a.height-.5)*this.planeSize.y,0);return s.applyMatrix4(this.matrix),i[0]=(s.x*.5+.5)*this.width,i[1]=(.5-s.y*.5)*this.height,i}track(e,t){const r=this.extent;e<r.x0&&(r.x0=e),e>r.x1&&(r.x1=e),t<r.y0&&(r.y0=t),t>r.y1&&(r.y1=t)}addSegment(e,t,r,i){const a=r[0]-t[0],s=r[1]-t[1],o=Math.hypot(a,s);if(o===0)return e;const l=this.p.lineWidth*.5,d=-s*l/o,c=a*l/o,u=a*l/o,h=s*l/o,f=t[0]-u,v=t[1]-h,m=r[0]+u,b=r[1]+h,g=2/this.width,w=2/this.height,y=(f+d)*g-1,p=1-(v+c)*w,x=(f-d)*g-1,F=1-(v-c)*w,k=(m+d)*g-1,C=1-(b+c)*w,_=(m-d)*g-1,L=1-(b-c)*w;this.vertices.set([y,p,x,F,k,C,k,C,x,F,_,L],e);const j=e*3/2,S=e*2,P=[t[0],this.height-t[1],r[0],this.height-r[1]];for(let M=0;M<6;M++)this.tints.set(i,j+M*3),this.ends.set(P,S+M*4);return this.track(y,p),this.track(k,C),e+12}step(e,t,r){if(!this.enabled||!this.field||!this.targets||!r)return!1;if(e>.1)return this.reset(),!1;r.updateWorldMatrix(!0,!1),this.matrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(r.matrixWorld);const i=t.projectionMatrix.elements.concat(t.matrixWorldInverse.elements).map(g=>g.toFixed(4)).join(",");i!==this.viewKey&&(this.reset(),this.viewKey=i);const a=this.visibleBounds(t,r),s={x0:a.x0,y0:a.y0,y1:a.y1,x1:Math.min(a.x1,this.readyX)},o=(a.x1-a.x0)*(a.y1-a.y0)/(this.field.width*this.field.height),l=this.p,d=Math.min(l.maxParticles,de,Math.round(this.width*this.height/Math.max(1,l.pixelsPerParticle))),c=Math.min(de,Math.round(Math.max(l.minParticles,d*Math.sqrt(Math.max(0,Math.min(1,o))))*this.ready));for(;this.particles.length<c;){const g={};this.respawn(g,s),this.particles.push(g)}this.particles.length>c&&(this.particles.length=c),this.extent={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0};const u=this.p.timeScale*e,h=[0,0],f=[0,0],v=[0,0],m=[1,1,1];let b=0;for(const g of this.particles){if(g.age>=g.life&&this.respawn(g,s),!this.sample(g.x,g.y,h)){this.respawn(g,s);continue}const w=g.x+.5*h[0]*u,y=g.y+.5*h[1]*u;if(!this.sample(w,y,h)){this.respawn(g,s);continue}const p=g.x+h[0]*u,x=g.y+h[1]*u;if(p<a.x0||p>a.x1||x<a.y0||x>a.y1||!this.sample(p,x,h)){this.respawn(g,s);continue}this.tintFor(this.lastValue,m),b=this.addSegment(b,this.toPixels(g.x,g.y,r,f),this.toPixels(p,x,r,v),m),g.x=p,g.y=x,g.age+=e}return this.stats={target:c,drawn:b/12,placed:this.particles.filter(g=>Number.isFinite(g.x)).length,bounds:[a.x0,a.y0,a.x1,a.y1].map(g=>g.toFixed(0)).join("..")},this.draw(e,b),!0}draw(e,t){const r=this.renderer,i=r.getRenderTarget(),a=r.autoClear;r.autoClear=!1,this.fade.uniforms.previous.value=this.targets[0].texture,this.fade.uniforms.drop.value=Math.max(1e-4,e/Math.max(.01,this.p.trailSeconds)),this.quad.material=this.fade,r.setRenderTarget(this.targets[1]),r.render(this.quadScene,this.camera),t>0&&(this.lineGeometry.setDrawRange(0,t/2),this.lineGeometry.attributes.segment.needsUpdate=!0,this.lineGeometry.attributes.tint.needsUpdate=!0,this.lineGeometry.attributes.ends.needsUpdate=!0,r.render(this.lineScene,this.camera)),this.targets.reverse(),this.material.uniforms.trail.value=this.targets[0].texture,r.autoClear=a,r.setRenderTarget(i)}dispose(){for(const e of this.targets||[])e.dispose();this.lineGeometry.dispose(),this.lines.material.dispose(),this.material.dispose(),this.fade.dispose(),this.quad.geometry.dispose(),this.mesh.geometry.dispose()}}const Bt={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},ze=new Map;function Qi(n){if(!ze.has(n)){const e=Bt[n],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);ze.set(n,t)}return ze.get(n)}function en(n,e){const t=Qi(Bt[n]?n:"viridis"),r=Math.min(1,Math.max(0,e))*255,i=Math.floor(r),a=Math.min(255,i+1),s=r-i;return[t[i*3]*(1-s)+t[a*3]*s,t[i*3+1]*(1-s)+t[a*3+1]*s,t[i*3+2]*(1-s)+t[a*3+2]*s]}const tn=1,nn=new Set(["u","v","w"]),rn=6e4,Ie=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis"},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno"},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],ne={u:0,w:1,v:2,T:3,tke:4};function et(n,e,t,r){return an(n.values,e*5,n.theta,t,r)}function an(n,e,t,r,i){const a=n[e+ne.u]*i,s=n[e+ne.v]*i;switch(r){case"u":return a;case"v":return s;case"w":return n[e+ne.w]*i;case"speed":{const o=n[e+ne.w]*i;return Math.sqrt(a*a+s*s+o*o)}case"T":return n[e+ne.T];case"tke":return n[e+ne.tke]*i*i;default:return 0}}function sn(n,e,t,r,i){if(e==="T")return n.fixed.T.slice();const s=(n.quantiles[r]||n.quantiles[Object.keys(n.quantiles)[0]])[e],o=Math.min(s.length-1,Math.max(0,Math.round(t))),l=s[o]*(e==="tke"?i*i:i);return n.shape[e]==="symmetric"?[-l,l]:[0,l]}function At(n,e){return en(n,e)}function on(n,e){const t=n.solid.length,r=new Float32Array(t*4);for(let i=0;i<t;i++){const a=i*4;r[a]=et(n,i,e,1),r[a+1]=tn}return Pt(r)}function bt(n){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,i,a]=At(n,t/255);e[t*4]=r,e[t*4+1]=i,e[t*4+2]=a,e[t*4+3]=255}return e}function ln(n,e,t){if(e==="T")return null;const r=e,i=n.solid.length,a=Math.max(1,Math.floor(i/rn)),s=nn.has(r),o=[];for(let c=0;c<i;c+=a){const u=et(n,c,r,1);o.push(s?Math.abs(u):u)}if(o.length<32)return null;o.sort((c,u)=>c-u);const l=Math.min(o.length-1,Math.floor(o.length*(Number(t)/100))),d=o[l];return d>0?s?[-d,d]:[0,d]:null}function dn(n,e){const t=n.solid.length,r=new Float32Array(t),i=new Float32Array(t),a=new Float32Array(t);for(let s=0;s<t;s++)a[s]=et(n,s,e,1),r[s]=n.values[s*5+ne.u],i[s]=n.values[s*5+ne.v];return{u:r,v:i,value:a,solid:new Uint8Array(t),width:n.width,height:n.height}}function cn(n,e,t){const r=(n.grid.nx-1)/2,i=(n.grid.ny-1)/2,a=n.originX+e-r,s=n.originY+t-i,o=Math.cos(n.theta),l=Math.sin(n.theta);return[(r+a*o-s*l+.5)*4,(i+a*l+s*o+.5)*4]}function un(n){const e=n.values.slice(),t=n.settings.speedMps/n.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const fn=`
#include <clipping_planes_pars_vertex>
varying vec2 vUv;
void main(){vUv=uv; vec4 mvPosition=modelViewMatrix*vec4(position,1.0);gl_Position=projectionMatrix*mvPosition;
#include <clipping_planes_vertex>
}`,hn=`
#include <clipping_planes_pars_fragment>
uniform sampler2D field;uniform sampler2D palette;uniform vec2 range;varying vec2 vUv;
void main(){
#include <clipping_planes_fragment>
vec4 texel=texture2D(field,vUv);if(texel.g<0.5)discard;
float t=clamp((texel.r-range.x)/max(range.y-range.x,1e-6),0.0,1.0);
gl_FragColor=vec4(texture2D(palette,vec2(t,0.5)).rgb,0.88);
#include <colorspace_fragment>
}`;function gn(n,e,t){let r,i,a,s,o,l,d,c,u,h=0;const f=new je,v=new je,m=St.MercatorCoordinate.fromLngLat(n.grid.origin),b=m.meterInMercatorCoordinateUnits(),[g,w]=cn(n,n.width/2-.5,n.height/2-.5),y=[new be(new q(1,0,0),0),new be(new q(-1,0,0),n.grid.nx*4),new be(new q(0,1,0),0),new be(new q(0,-1,0),n.grid.ny*4)];function p(){var L;if(!i)return;d==null||d.dispose(),c==null||c.dispose();const x=Ie.find(j=>j.id===e.variable)??Ie[0],F=on(n,x.id);d=new at(F,n.width,n.height,Oe,Mt),d.minFilter=d.magFilter=st,d.needsUpdate=!0,c=new at(bt(x.ramp),256,1,Oe),c.colorSpace=ei,c.minFilter=c.magFilter=st,c.needsUpdate=!0;const k=Number(e.speedMps)/n.referenceSpeed,C=x.id==="T"?1:x.id==="tke"?k*k:k,_=((L=ln(n,x.id,"99.9"))==null?void 0:L.map(j=>j*C))??sn(n.colorbar,x.id,n.settings.layerIndex,"99.9",Number(e.speedMps)/n.referenceSpeed);u.uniforms.field.value=d,u.uniforms.palette.value=c,u.uniforms.range.value.set(..._),o.visible=e.particles!=="tinted",l.setMode(e.particles==="tinted"?"tinted":"white"),l.enabled=e.particles!=="off",l.setField(dn(n,x.id),4),l.setTinting(e.particles==="tinted"?bt(x.ramp):null,e.particles==="tinted"?_:null),l.mesh.visible=l.enabled,t==null||t({low:_[0],high:_[1],...x}),r.triggerRepaint()}return{id:"flume-field",type:"custom",renderingMode:"3d",configure:p,onAdd(x,F){r=x,a=new Ue,s=new Jt,i=new Qt({canvas:r.getCanvas(),context:F,antialias:!0}),i.autoClear=!1,i.localClippingEnabled=!0,u=new ke({vertexShader:fn,fragmentShader:hn,uniforms:{field:{value:null},palette:{value:null},range:{value:new We(0,1)}},transparent:!0,depthWrite:!1,side:Fe,clipping:!0,clippingPlanes:y}),o=new xe(new Ne(n.width*4,n.height*4),u),o.position.set(g,w,n.settings.heightM),o.rotation.z=n.theta,o.frustumCulled=!1,a.add(o),l=new Ji(i),l.setPlane(n.width*4,n.height*4),l.mesh.geometry.dispose(),l.mesh.geometry=o.geometry.clone(),l.mesh.position.copy(o.position),l.mesh.rotation.copy(o.rotation),l.material.clippingPlanes=y,l.mesh.renderOrder=3,l.mesh.frustumCulled=!1,a.add(l.mesh),p()},render(x,F){const k=performance.now(),C=Math.min(h?(k-h)/1e3:0,.05);h=k,f.makeTranslation(m.x,m.y,m.z).scale(new q(b,-b,b)),s.projectionMatrix.copy(v.fromArray(F)).multiply(f),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),i.resetState(),i.setViewport(0,0,x.drawingBufferWidth,x.drawingBufferHeight),l.setResolution(x.drawingBufferWidth,x.drawingBufferHeight),l.enabled&&!e.paused&&l.step(C*(Number(e.speedMps)/n.referenceSpeed),s,o),i.resetState(),i.setViewport(0,0,x.drawingBufferWidth,x.drawingBufferHeight),i.render(a,s),l.enabled&&!e.paused&&r.triggerRepaint()},onRemove(){d==null||d.dispose(),c==null||c.dispose(),o==null||o.geometry.dispose(),u==null||u.dispose(),l==null||l.dispose(),i==null||i.dispose(),r=null,i=null}}}function fe(n,e,t,r,i){if(t.reduce((o,l)=>o*l,1)!==e.length)throw new Error("Invalid "+n+" shape.");const a=new Uint8Array(e.length*4),s=new DataView(a.buffer);for(let o=0;o<e.length;o++){if(!Number.isFinite(e[o]))throw new Error("Cannot export non-finite "+n);s.setFloat32(o*4,e[o],!0)}return{name:n,content:a,description:{dtype:"float32",shape:t,channels:r,unit:i}}}function tt(n,e,t,r){var a,s,o;const i={schemaVersion:1,endianness:"little",order:"row-major",origin:n.origin,source:n.source,bounds:n.bounds,selection:((a=n.selection)==null?void 0:a.geometry)??((s=n.polygon)==null?void 0:s.geometry),computationalDomain:(o=n.polygon)==null?void 0:o.geometry,dataZoom:n.dataZoom,tileCount:n.tileCount,warnings:n.warnings,projection:"local equirectangular metres at origin",axes:{x:"east",y:"north",z:"up"},grid:{nx:e.grid.nx,ny:e.grid.ny,spacingM:4,layerSpacingM:1.5,extentM:e.grid.extentM},windGrid:{width:e.width,height:e.height,originX:e.originX,originY:e.originY,thetaRad:e.theta,cellPosition:"Rotate (originX+x,originY+y) about ((nx-1)/2,(ny-1)/2), then add 0.5 and multiply by 4 metres."},settings:e.settings,referenceSpeedMps:e.referenceSpeed,model:e.modelLabel,velocityFrame:"u along wind, v across wind, w upwards; east=u*cos(theta)-v*sin(theta), north=u*sin(theta)+v*cos(theta)",...r?{mddf:{nx:r.nx,ny:r.ny,margin:r.margin,layerIndex:r.layerIndex,representation:"unnormalized angular Fourier coefficients; not raw rays or normalized 24-channel FNO input"}}:{},files:Object.fromEntries(t.map(l=>[l.name,l.description]))};return[{name:"metadata.json",content:JSON.stringify(i,null,2)},...t.map(({name:l,content:d})=>({name:l,content:d}))]}function $t(n,e){const r=["upper_distance","upper_relative_height","lower_distance","lower_relative_height"].flatMap(i=>["dc","re1","re2","re3","im1","im2","im3"].map(a=>i+"_"+a));return[fe("mddf.f32.bin",e.values,[e.ny,e.nx,28],r,"m"),fe("height_layers.f32.bin",n.grid.layers,[n.grid.ny,n.grid.nx],["roof_layer_count"],"1.5 m per layer")]}function Et(n,e=!1){const t=un(n),r=n.width*n.height,i=new Float32Array(r*3),a=new Float32Array(r),s=new Float32Array(r),o=new Float32Array(r);for(let l=0;l<r;l++){const d=l*5;i.set([t[d],t[d+2],t[d+1]],l*3),a[l]=t[d+3],s[l]=t[d+4],o[l]=Math.hypot(t[d],t[d+1],t[d+2])}return[fe("velocity.f32.bin",i,[n.height,n.width,3],["u","v","w"],"m/s"),{name:"mask.u8.bin",content:Uint8Array.from(n.solid),description:{dtype:"uint8",shape:[n.height,n.width],values:{0:"air",1:"building",2:"outside/uncovered/invalid"}}},...e?[fe("temperature.f32.bin",a,[n.height,n.width],["T"],"degC"),fe("tke.f32.bin",s,[n.height,n.width],["TKE"],"m2/s2"),fe("speed.f32.bin",o,[n.height,n.width],["speed"],"m/s")]:[]]}function pn(n,e,t){return tt(n,t,$t(t,e),e)}function mn(n,e){return tt(n,e,Et(e))}function yn(n,e,t){const r=[...$t(t,e),...Et(t,!0),{name:"buildings.geojson",content:JSON.stringify(n.buildings),description:{format:"GeoJSON",crs:"WGS84"}}];return tt(n,t,r,e)}class bn{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let a=0;e.traverse(function(g){if(g.isMesh){const w=g.geometry,y=w.index,p=w.getAttribute("position");a+=y!==null?y.count/3:p.count/3,i.push({object3d:g,geometry:w})}});let s,o=80;if(r===!0){const g=a*2+a*3*4*4+80+4,w=new ArrayBuffer(g);s=new DataView(w),s.setUint32(o,a,!0),o+=4}else s="",s+=`solid exported
`;const l=new q,d=new q,c=new q,u=new q,h=new q,f=new q;for(let g=0,w=i.length;g<w;g++){const y=i[g].object3d,p=i[g].geometry,x=p.index,F=p.getAttribute("position");if(x!==null)for(let k=0;k<x.count;k+=3){const C=x.getX(k+0),_=x.getX(k+1),L=x.getX(k+2);v(C,_,L,F,y)}else for(let k=0;k<F.count;k+=3){const C=k+0,_=k+1,L=k+2;v(C,_,L,F,y)}}return r===!1&&(s+=`endsolid exported
`),s;function v(g,w,y,p,x){l.fromBufferAttribute(p,g),d.fromBufferAttribute(p,w),c.fromBufferAttribute(p,y),x.isSkinnedMesh===!0&&(x.applyBoneTransform(g,l),x.applyBoneTransform(w,d),x.applyBoneTransform(y,c)),l.applyMatrix4(x.matrixWorld),d.applyMatrix4(x.matrixWorld),c.applyMatrix4(x.matrixWorld),m(l,d,c),b(l),b(d),b(c),r===!0?(s.setUint16(o,0,!0),o+=2):(s+=`		endloop
`,s+=`	endfacet
`)}function m(g,w,y){u.subVectors(y,w),h.subVectors(g,w),u.cross(h).normalize(),f.copy(u).normalize(),r===!0?(s.setFloat32(o,f.x,!0),o+=4,s.setFloat32(o,f.y,!0),o+=4,s.setFloat32(o,f.z,!0),o+=4):(s+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,s+=`		outer loop
`)}function b(g){r===!0?(s.setFloat32(o,g.x,!0),o+=4,s.setFloat32(o,g.y,!0),o+=4,s.setFloat32(o,g.z,!0),o+=4):s+="			vertex "+g.x+" "+g.y+" "+g.z+`
`}}}async function wn(n,e,t={}){var g;if(!e||!Number.isInteger(e.nx)||!Number.isInteger(e.ny)||e.nx<1||e.ny<1||e.spacingM!==4||e.layerSpacingM!==1.5||((g=e.layers)==null?void 0:g.length)!==e.nx*e.ny)throw new Error("Invalid MDDF height grid.");const{nx:r,ny:i,layers:a,spacingM:s,layerSpacingM:o}=e,l=(w,y)=>w<0||y<0||w>=r||y>=i?0:a[y*r+w],d=async()=>{var w;if(await new Promise(y=>setTimeout(y,0)),(w=t.shouldCancel)!=null&&w.call(t))throw new Error("Model export cancelled.")};let c=0;for(let w=0;w<i;w++){w%32===0&&await d();for(let y=0;y<r;y++){const p=l(y,w);if(!Number.isInteger(p)||p<0||p>160)throw new Error("Invalid MDDF building height.");p&&(c+=2+ +(p>l(y-1,w))+ +(p>l(y+1,w))+ +(p>l(y,w-1))+ +(p>l(y,w+1)))}}if(!c)throw new Error("The selected MDDF model has no buildings to export.");const u=new Float32Array(c*18);let h=0;const f=(w,y,p,x)=>{for(const F of[w,y,p,w,p,x])u.set(F,h),h+=3};for(let w=0;w<i;w++){w%32===0&&await d();for(let y=0;y<r;y++){const p=l(y,w)*o;if(!p)continue;const x=y*s,F=x+s,k=-w*s,C=k-s;f([x,p,k],[F,p,k],[F,p,C],[x,p,C]),f([x,0,k],[x,0,C],[F,0,C],[F,0,k]);let _=l(y-1,w)*o;p>_&&f([x,_,C],[x,_,k],[x,p,k],[x,p,C]),_=l(y+1,w)*o,p>_&&f([F,_,k],[F,_,C],[F,p,C],[F,p,k]),_=l(y,w-1)*o,p>_&&f([x,_,k],[F,_,k],[F,p,k],[x,p,k]),_=l(y,w+1)*o,p>_&&f([F,_,C],[x,_,C],[x,p,C],[F,p,C])}}const v=new vt;v.setAttribute("position",new ye(u,3));const m=new xe(v);let b;try{b=new bn().parse(m,{binary:!0}).buffer}finally{v.dispose(),m.material.dispose()}return[{name:"mddf-model.stl",content:b},{name:"positionSetting.txt",content:JSON.stringify({type:"Feature",properties:{projection:"local",note:"STL origin (0,0,0) in WGS84"},geometry:{type:"Point",coordinates:e.origin}},null,2)},{name:"metadata.json",content:JSON.stringify({schemaVersion:1,source:n.source,origin:e.origin,projection:"local equirectangular metres at origin",units:"metres",axes:{x:"east",y:"up",z:"south"},grid:{nx:r,ny:i,spacingM:s,layerSpacingM:o,extentM:e.extentM},geometry:"Exposed surfaces of the raster height grid supplied to MDDF, not the original vector footprints.",warnings:n.warnings,files:{"mddf-model.stl":{format:"binary-stl",triangles:c*2}}},null,2)}]}const wt=.35;function xn(){const n=Se(null),e=Se(!1),t=Se(!1),r=we({step:0,error:"",grid:null,settings:null,legend:null,downloading:!1,downloadError:""}),i=we({heightM:10,directionDeg:0,speedMps:6}),a=we({variable:"speed",speedMps:6,particles:"white",paused:!1,showSurroundings:!0});let s,o,l,d,c=!1,u=null,h=!1;const f=new Map,v=()=>s,m="pk.eyJ1IjoibGVvbndhbmdjdSIsImEiOiJja2g5ZHV2Y2MwaTg0MnRxZGgzbWV4Z29uIn0.t84EcoLKGp0eN3Zr0J09xA".trim(),b=ti({getMap:v,accessToken:m}),g=Oi();function w(){clearTimeout(u),u=null,h=!1,r.grid=null,r.settings=null,r.legend=null,r.error="",r.downloadError="",r.step=0,g.invalidate(),C()}const y=Mi({getMap:v,ready:e,onChange:w,accessToken:m}),p=he(()=>g.state.downloading||r.downloading||y.state.loading),x=he(()=>p.value||g.state.busy);function F(){return{"city-concordia-2d":!1,"city-concordia-3d":y.state.source==="concordia","city-osm-3d":y.state.source==="osm"}}function k(){for(const[M,I]of f)s!=null&&s.getLayer(M)&&(s.setLayoutProperty(M,"visibility",I.visibility),s.setPaintProperty(M,I.property,I.opacity),s.setFilter(M,I.filter),s.setLayerZoomRange(M,I.minzoom,I.maxzoom),I.color!==void 0&&s.setPaintProperty(M,"fill-extrusion-color",I.color));f.clear()}function C(){if(!s||!e.value)return;const M=g.state.prediction,I=r.step===3&&M;if(!I&&s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),!I&&s.getLayer("flume-buildings")&&s.removeLayer("flume-buildings"),k(),ot(s,F()),!I){d==null||d.clear();const A=y.getPreview();qe(s,A);return}qe(s,null);const D=ni.find(A=>A.id===(y.state.source==="osm"?"city-osm-3d":"city-concordia-3d")),U=dt(y.state.snapshot.buildings.features,s.getFilter(D.id));for(const A of s.getStyle().layers){if(A.id.startsWith("flume-"))continue;const E=A.type==="fill-extrusion"?"fill-extrusion-opacity":A["source-layer"]==="building"&&["fill","line"].includes(A.type)?A.type+"-opacity":null;E&&(f.set(A.id,{visibility:s.getLayoutProperty(A.id,"visibility")??"visible",property:E,opacity:s.getPaintProperty(A.id,E)??1,filter:s.getFilter(A.id)??null,minzoom:A.minzoom??0,maxzoom:A.maxzoom??24,color:A.type==="fill-extrusion"?s.getPaintProperty(A.id,"fill-extrusion-color")??null:void 0}),s.setPaintProperty(A.id,E,wt),A.type==="fill-extrusion"&&s.setPaintProperty(A.id,"fill-extrusion-color","#8cb8d8"),a.showSurroundings||s.setLayoutProperty(A.id,"visibility","none"))}s.setFilter(D.id,U.surroundings),s.setLayerZoomRange(D.id,ve,D.layer.maxzoom??24),s.getLayer("flume-buildings")?s.setFilter("flume-buildings",U.selected):s.addLayer({...D.layer,id:"flume-buildings",minzoom:ve,layout:{visibility:"visible"},filter:U.selected,paint:{...D.layer.paint,"fill-extrusion-color":"#9aa3ad","fill-extrusion-opacity":1}}),d==null||d.update({sourceId:D.layer.source,sourceLayer:D.layer["source-layer"],collection:y.getPreview(),dataZoom:y.state.snapshot.dataZoom,filters:U,surroundingsOpacity:wt,showSurroundings:a.showSurroundings}),s.getLayer("flume-field")||(l=gn(M,a,A=>{c||(r.legend=A)}),s.addLayer(l)),s.triggerRepaint()}async function _(){if(x.value)return;const M=await y.captureRegion();if(!(!M||c))try{dt(M.buildings.features),r.grid=ce(Si(M)),r.step=1,r.error="",j()}catch(I){r.error=I.message}}function L(){try{return r.settings=ki(i),a.speedMps=r.settings.speedMps,r.error="",r.step<2&&(r.step=2),!0}catch(M){return r.error=M.message,!1}}function j(){!r.grid||c||(clearTimeout(u),u=setTimeout(()=>{u=null,S()},320))}async function S(){if(clearTimeout(u),u=null,c||!r.grid||p.value)return;if(g.state.busy){h=!0;return}if(!L())return;await g.run(r.grid,r.settings)&&!c&&(r.step=3),h&&!c&&(h=!1,await S())}async function P(M){if(!(p.value||!r.grid)&&!(M!=="model"&&(g.state.busy||!g.state.prediction))){r.downloading=!0,r.downloadError="";try{const I=y.state.snapshot;let D;if(M==="model")D=await wn(I,r.grid,{shouldCancel:()=>c});else{const A={...g.state.prediction,settings:{...g.state.prediction.settings,speedMps:Number(a.speedMps)}};if(!Number.isFinite(A.settings.speedMps)||A.settings.speedMps<.5||A.settings.speedMps>20)throw new Error("Use a wind speed between 0.5 and 20 m/s.");const E=M==="wind"?null:await g.readMddf();D=M==="all"?yn(I,E,A):M==="mddf"?pn(I,E,A):mn(I,A)}const U=await ri(D);c||ai(U,"flume-"+M+".zip","application/zip")}catch(I){c||(r.downloadError=I.message)}finally{c||(r.downloading=!1)}}}return J(()=>r.step,C),J(()=>g.state.prediction,()=>{!s||!e.value||(s.getLayer("flume-field")&&(s.removeLayer("flume-field"),l=null),C())}),J(()=>[i.heightM,i.directionDeg],()=>{r.grid&&j()}),J(()=>i.speedMps,M=>{const I=Number(M);!Number.isFinite(I)||I<.5||I>20||(a.speedMps=I,r.settings&&(r.settings.speedMps=I))}),J(()=>y.state.source,()=>{s&&e.value&&ot(s,F())}),J(()=>a.showSurroundings,C),J(()=>a.paused,()=>s==null?void 0:s.triggerRepaint()),J(()=>[a.variable,a.particles,a.speedMps],()=>{const M=Number(a.speedMps);Number.isFinite(M)&&M>=.5&&M<=20?(r.downloadError="",l==null||l.configure()):r.downloadError="Use a wind speed between 0.5 and 20 m/s."}),J(b.mapStyle,M=>{s&&(y.beforeStyleChange(),e.value=!1,l=null,f.clear(),s.setStyle(M,{diff:!1}))}),Rt(()=>{if(!(m!=null&&m.startsWith("pk."))){r.error="Set VITE_MAPBOX_TOKEN to a public Mapbox token and restart dev.";return}try{s=new St.Map({container:n.value,accessToken:m,style:b.mapStyle.value,center:[-73.5673,45.5017],zoom:14,pitch:0,antialias:!0,attributionControl:!1}),d=oi(s,M=>{c||(r.error=M.message)}),t.value=!0,s.on("style.load",()=>{if(!c)try{ii(s,F()),e.value=!0,y.restore(),C()}catch(M){r.error=M.message}}),s.on("error",M=>{c||(r.error="Map data unavailable"+(M.sourceId?" ("+M.sourceId+")":"")+". Check token, allowed domains and connection.")}),b.attach(),o=new ResizeObserver(()=>s==null?void 0:s.resize()),o.observe(n.value)}catch(M){r.error=M.message}}),Ye(()=>{c=!0,clearTimeout(u),y.dispose(),g.dispose(),d==null||d.dispose(),o==null||o.disconnect(),s==null||s.remove(),s=null}),{mapElement:n,ready:e,initialized:t,state:r,draft:i,display:a,controls:b,region:y,runner:g,locked:p,regionLocked:x,acceptRegion:_,acceptWind:L,run:S,scheduleRun:j,download:P}}const vn={class:"flume-compact"},Mn={key:0,class:"flume-meta",role:"status"},Sn={key:1,class:"flume-muted"},kn={class:"flume-actions"},Fn={key:2,role:"status",class:"flume-muted"},Cn={key:3,class:"flume-meta"},Pn=["disabled"],_n={__name:"RegionHud",props:{region:{type:Object,required:!0},ready:Boolean,locked:Boolean},emits:["continue"],setup(n){return(e,t)=>{const r=xt,i=Be,a=Ae,s=$e;return V(),N("div",vn,[z(r,{modelValue:n.region.state.source,"onUpdate:modelValue":t[0]||(t[0]=o=>n.region.state.source=o),label:"Buildings","aria-label":"Building source",size:"small",options:[{text:"Concordia 3D",value:"concordia"},{text:"OSM 3D",value:"osm"}],"text-by":"text","value-by":"value",disabled:n.region.state.loading||n.locked},null,8,["modelValue","disabled"]),z(i,{block:"",size:"small",preset:"secondary",icon:"mso-location_city",disabled:!n.ready||n.region.state.loading||n.locked,loading:n.region.state.loading,onClick:n.region.loadBuildings},{default:O(()=>[...t[3]||(t[3]=[X("Show detailed buildings",-1)])]),_:1},8,["disabled","loading","onClick"]),n.region.state.loadedArea?(V(),N("p",Mn," Loaded detailed buildings: "+W(n.region.state.loadedArea.count)+" parts · "+W((n.region.state.loadedArea.extentM[0]/1e3).toFixed(1))+" × "+W((n.region.state.loadedArea.extentM[1]/1e3).toFixed(1))+" km. Detail stays when you zoom. ",1)):(V(),N("p",Sn,"Quick-load a 3 × 3 km area around the map centre, or draw a larger area directly.")),B("div",kn,[z(i,{size:"small",preset:"secondary",icon:"mso-crop_free",disabled:!n.ready||n.region.state.loading||n.locked,"aria-label":"Select region",onClick:n.region.startSelection},{default:O(()=>[...t[4]||(t[4]=[X("Draw area",-1)])]),_:1},8,["disabled","onClick"]),z(i,{size:"small",disabled:!n.ready||!n.region.state.region&&!n.region.state.loadedArea||n.locked,loading:n.region.state.loading,"aria-label":n.region.state.region?"Use selected region":"Use full loaded area",onClick:t[1]||(t[1]=o=>e.$emit("continue"))},{default:O(()=>[X(W(n.region.state.region?"Use region":"Use full area"),1)]),_:1},8,["disabled","loading","aria-label"])]),n.region.state.drawing?(V(),N("p",Fn," Draw around buildings; touching the edge selects the whole building. Click the first point to finish. Esc cancels. ")):n.region.state.region?(V(),N("p",Cn,[X(W(n.region.state.region.extentM[0])+" × "+W(n.region.state.region.extentM[1])+" m · 4 m cells · fitted domain ",1),B("button",{type:"button",class:"flume-link",disabled:n.region.state.loading||n.locked,onClick:t[2]||(t[2]=(...o)=>n.region.clearSelection&&n.region.clearSelection(...o))}," Clear ",8,Pn)])):G("",!0),n.region.state.loading?(V(),se(a,{key:4,"model-value":n.region.state.progress*100,"aria-label":"Loading building data"},null,8,["model-value"])):G("",!0),n.region.state.error?(V(),se(s,{key:5,color:"danger"},{default:O(()=>[X(W(n.region.state.error),1)]),_:1})):G("",!0)])}}},In={class:"wind"},Bn={class:"conditions"},An={class:"condition"},$n=["disabled"],En=["disabled"],Rn={class:"condition"},Dn=["disabled"],Tn=["disabled"],Vn={class:"direction"},Ln=["aria-valuenow","aria-disabled"],zn=["x1","y1","x2","y2"],Nn=["cx","cy"],Un={class:"bearing"},Wn={class:"condition"},jn=["disabled"],On={class:"cardinals"},Xn={key:2,class:"busy"},qn={role:"status"},Yn={__name:"WindSettingsHud",props:{settings:{type:Object,required:!0},grid:{type:Object,default:null},runner:{type:Object,default:null},error:{type:String,default:""},locked:Boolean},emits:["run"],setup(n){const e=n,t=Se(null),r=he(()=>Number(e.settings.directionDeg)*Math.PI/180),i=he(()=>!!e.grid&&!e.locked);function a(o){if(!i.value||o.type==="pointermove"&&!o.buttons)return;o.type==="pointerdown"&&o.currentTarget.setPointerCapture(o.pointerId);const l=t.value.getBoundingClientRect();e.settings.directionDeg=(Math.round(Math.atan2(-(o.clientY-l.top-l.height/2),o.clientX-l.left-l.width/2)*180/Math.PI)+360)%360}function s(o){if(!i.value)return;const l=o.key==="ArrowRight"||o.key==="ArrowUp"?1:o.key==="ArrowLeft"||o.key==="ArrowDown"?-1:0;l&&(o.preventDefault(),e.settings.directionDeg=(Number(e.settings.directionDeg)+l+360)%360)}return(o,l)=>{var h,f,v;const d=Be,c=$e,u=Ae;return V(),N("div",In,[B("div",Bn,[B("label",An,[l[6]||(l[6]=B("span",null,[X("Slice height "),B("small",null,"m")],-1)),re(B("input",{"onUpdate:modelValue":l[0]||(l[0]=m=>n.settings.heightM=m),class:"num",type:"number",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height (m)",disabled:!i.value},null,8,$n),[[me,n.settings.heightM,void 0,{number:!0}]]),re(B("input",{"onUpdate:modelValue":l[1]||(l[1]=m=>n.settings.heightM=m),class:"range",type:"range",min:"0.75",max:"239.25",step:"1.5","aria-label":"Slice height",disabled:!i.value},null,8,En),[[me,n.settings.heightM,void 0,{number:!0}]])]),B("label",Rn,[l[7]||(l[7]=B("span",null,[X("Wind speed "),B("small",null,"m/s")],-1)),re(B("input",{"onUpdate:modelValue":l[2]||(l[2]=m=>n.settings.speedMps=m),class:"num",type:"number",min:"0.5",max:"20",step:"0.1","aria-label":"Reference wind speed (m/s)",disabled:!i.value},null,8,Dn),[[me,n.settings.speedMps,void 0,{number:!0}]]),re(B("input",{"onUpdate:modelValue":l[3]||(l[3]=m=>n.settings.speedMps=m),class:"range",type:"range",min:"0.5",max:"20",step:"0.1","aria-label":"Wind speed",disabled:!i.value},null,8,Tn),[[me,n.settings.speedMps,void 0,{number:!0}]])])]),B("div",Vn,[(V(),N("svg",{ref_key:"dial",ref:t,class:"dial",viewBox:"0 0 160 160",role:"slider",tabindex:"0","aria-label":"Wind towards direction","aria-valuemin":"0","aria-valuemax":"359","aria-valuenow":n.settings.directionDeg,"aria-disabled":!i.value||void 0,onPointerdown:Dt(a,["prevent"]),onPointermove:a,onKeydown:s},[l[8]||(l[8]=Tt('<circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" opacity=".28" stroke-width="2" data-v-d8c7c4e0></circle><text x="80" y="16" text-anchor="middle" data-v-d8c7c4e0>90°</text><text x="146" y="84" text-anchor="middle" data-v-d8c7c4e0>0°</text><text x="80" y="152" text-anchor="middle" data-v-d8c7c4e0>270°</text><text x="14" y="84" text-anchor="middle" data-v-d8c7c4e0>180°</text>',5)),B("line",{x1:80-Math.cos(r.value)*30,y1:80+Math.sin(r.value)*30,x2:80+Math.cos(r.value)*42,y2:80-Math.sin(r.value)*42,stroke:"#64d2ff","stroke-width":"3.5","stroke-linecap":"round"},null,8,zn),B("circle",{cx:80+Math.cos(r.value)*42,cy:80-Math.sin(r.value)*42,r:"5",fill:"#64d2ff"},null,8,Nn)],40,Ln)),B("div",Un,[B("label",Wn,[l[9]||(l[9]=B("span",null,[X("Wind towards "),B("small",null,"°")],-1)),re(B("input",{"onUpdate:modelValue":l[4]||(l[4]=m=>n.settings.directionDeg=m),class:"num",type:"number",step:"1","aria-label":"Wind towards (°)",disabled:!i.value},null,8,jn),[[me,n.settings.directionDeg,void 0,{number:!0}]])]),B("div",On,[(V(),N(ge,null,He([{text:"E",value:0},{text:"N",value:90},{text:"W",value:180},{text:"S",value:270}],m=>z(d,{key:m.text,size:"small",preset:"secondary",disabled:!i.value,"aria-label":"Wind towards "+m.text,onClick:b=>n.settings.directionDeg=m.value},{default:O(()=>[X(W(m.text),1)]),_:2},1032,["disabled","aria-label","onClick"])),64))])])]),n.error?(V(),se(c,{key:0,color:"danger"},{default:O(()=>[X(W(n.error),1)]),_:1})):G("",!0),(h=n.runner)!=null&&h.state.error?(V(),se(c,{key:1,color:"danger"},{default:O(()=>[X(W(n.runner.state.error),1)]),_:1})):G("",!0),(f=n.runner)!=null&&f.state.busy?(V(),N("div",Xn,[z(u,{"model-value":n.runner.state.progress*100,indeterminate:n.runner.state.progress===0},null,8,["model-value","indeterminate"]),B("p",qn,W(n.runner.state.stage),1)])):G("",!0),z(d,{block:"",disabled:!i.value,loading:(v=n.runner)==null?void 0:v.state.busy,"aria-label":"Run prediction",onClick:l[5]||(l[5]=m=>o.$emit("run"))},{default:O(()=>[...l[10]||(l[10]=[X("Run prediction",-1)])]),_:1},8,["disabled","loading"])])}}},Gn=Ge(Yn,[["__scopeId","data-v-d8c7c4e0"]]),Hn={class:"display-settings"},Zn={key:0,class:"hint"},Kn={class:"variables",role:"group","aria-label":"Field"},Jn=["aria-pressed","onClick"],Qn={class:"row"},er={key:0,class:"legend"},tr={class:"legend-top"},ir={class:"legend-range"},nr={class:"hint"},rr={__name:"DisplaySettingsHud",props:{display:{type:Object,required:!0},legend:{type:Object,default:null},prediction:{type:Object,default:null}},setup(n){const e=n,t=he(()=>{var i;return((i=Ie.find(a=>a.id===e.display.variable))==null?void 0:i.ramp)??"turbo"}),r=he(()=>"linear-gradient(to right,"+Array.from({length:17},(i,a)=>"rgb("+At(t.value,a/16).join(",")+") "+a*100/16+"%").join(",")+")");return(i,a)=>{const s=Lt;return V(),N("div",Hn,[n.prediction?(V(),N(ge,{key:1},[B("div",Kn,[(V(!0),N(ge,null,He($(Ie),o=>(V(),N("button",{key:o.id,type:"button","aria-pressed":n.display.variable===o.id,onClick:l=>n.display.variable=o.id},W(o.label),9,Jn))),128))]),B("div",Qn,[a[4]||(a[4]=B("span",{class:"unit"},"particles",-1)),re(B("select",{"onUpdate:modelValue":a[0]||(a[0]=o=>n.display.particles=o),"aria-label":"Particles"},[...a[3]||(a[3]=[B("option",{value:"white"},"white, over the field",-1),B("option",{value:"tinted"},"coloured, no field",-1),B("option",{value:"off"},"off",-1)])],512),[[Vt,n.display.particles]])]),z(s,{modelValue:n.display.paused,"onUpdate:modelValue":a[1]||(a[1]=o=>n.display.paused=o),class:"display-toggle",label:"Pause particles","aria-label":"Pause particles",size:"small"},null,8,["modelValue"]),z(s,{modelValue:n.display.showSurroundings,"onUpdate:modelValue":a[2]||(a[2]=o=>n.display.showSurroundings=o),class:"display-toggle",label:"Show surrounding buildings","aria-label":"Show surrounding buildings",size:"small"},null,8,["modelValue"]),n.legend?(V(),N("div",er,[B("div",tr,[B("strong",null,W(n.legend.legend),1),B("span",null,W(n.legend.unit),1)]),B("div",{class:"colorbar",style:zt({background:r.value})},null,4),B("div",ir,[B("span",null,W(n.legend.low.toFixed(2)),1),B("span",null,W(n.legend.high.toFixed(2)),1)])])):G("",!0),B("p",nr,W(n.prediction.patchCount)+" patches · "+W((n.prediction.milliseconds/1e3).toFixed(1))+" s",1)],64)):(V(),N("p",Zn,"Run a prediction to inspect the field."))])}}},ar=Ge(rr,[["__scopeId","data-v-5184528d"]]),sr={class:"space-y-2"},or={key:0,class:"text-xs text-secondary"},lr={class:"grid grid-cols-2 gap-2"},dr={__name:"DownloadsHud",props:{grid:{type:Object,default:null},prediction:{type:Object,default:null},downloading:Boolean,locked:Boolean,predicting:Boolean,error:{type:String,default:""}},emits:["download"],setup(n){return(e,t)=>{const r=Be,i=Ae,a=$e;return V(),N("div",sr,[n.grid?(V(),N(ge,{key:1},[B("div",lr,[(V(),N(ge,null,He([{id:"model",text:"STL model",label:"Download STL model"},{id:"mddf",text:"MDDF",label:"Download MDDF"},{id:"all",text:"All",label:"Download all results"}],s=>z(r,{key:s.id,size:"small",preset:"secondary",icon:"mso-download","aria-label":s.label,disabled:n.downloading||n.locked||s.id!=="model"&&(n.predicting||!n.prediction),onClick:o=>e.$emit("download",s.id)},{default:O(()=>[X(W(s.text),1)]),_:2},1032,["aria-label","disabled","onClick"])),64))]),n.downloading?(V(),se(i,{key:0,indeterminate:"","aria-label":"Preparing download"})):G("",!0),n.error?(V(),se(a,{key:1,color:"danger"},{default:O(()=>[X(W(n.error),1)]),_:1})):G("",!0)],64)):(V(),N("p",or,"Choose a simulation area before downloading its model."))])}}},cr={class:"flume-hud-stack"},ur={key:0,class:"flume-status"},fr={__name:"FlumeCityView",setup(n){const e=xn(),{mapElement:t,ready:r,initialized:i,state:a,draft:s,display:o,region:l,runner:d,locked:c,regionLocked:u}=e,{controlsElement:h,controlsVisible:f,mapStyle:v,mapStyles:m}=e.controls;return(b,g)=>{const w=Be,y=xt,p=Nt,x=Wt,F=jt,k=$e,C=Ae;return V(),N("section",{class:"flume-page","aria-label":"Flume City wind prediction",onKeydown:g[2]||(g[2]=Ot((..._)=>$(l).stopSelection&&$(l).stopSelection(..._),["esc"]))},[B("div",{ref_key:"mapElement",ref:t,class:"flume-map","aria-label":"Flume City map"},null,512),re(B("aside",{ref_key:"controlsElement",ref:h,class:"mapboxgl-ctrl flume-map-actions"},[z(x,{placement:"left-start","close-on-content-click":!1},{anchor:O(()=>[z(w,{size:"small",icon:"mso-layers","aria-label":"Flume basemap"})]),default:O(()=>[z(p,null,{default:O(()=>[z(y,{modelValue:$(v),"onUpdate:modelValue":g[0]||(g[0]=_=>Ut(v)?v.value=_:null),label:"Basemap",options:$(m),"text-by":"title","value-by":"value",disabled:$(c)},null,8,["modelValue","options","disabled"])]),_:1})]),_:1}),z(w,{size:"small",icon:$(f)?"mso-visibility_off":"mso-visibility","aria-label":$(f)?"Hide Flume controls":"Show Flume controls",onClick:g[1]||(g[1]=_=>f.value=!$(f))},null,8,["icon","aria-label"])],512),[[it,$(i)]]),re(B("div",cr,[g[3]||(g[3]=B("header",{class:"flume-heading"},[B("h1",null,"Flume City"),B("p",null,"Urban wind simulation")],-1)),z(Te,{title:"1 · Simulation area",inert:$(u),collapsed:$(a).step>0},{default:O(()=>[z(_n,{region:$(l),ready:$(r),locked:$(u),onContinue:$(e).acceptRegion},null,8,["region","ready","locked","onContinue"])]),_:1},8,["inert","collapsed"]),z(Te,{title:"2 · Configuration",collapsed:$(a).step===0},{default:O(()=>[z(Gn,{settings:$(s),grid:$(a).grid,runner:$(d),error:$(a).error,locked:$(c),onRun:$(e).run},null,8,["settings","grid","runner","error","locked","onRun"]),$(d).state.prediction?(V(),N(ge,{key:0},[z(F),z(ar,{display:$(o),legend:$(a).legend,prediction:$(d).state.prediction},null,8,["display","legend","prediction"])],64)):G("",!0)]),_:1},8,["collapsed"]),z(Te,{title:"3 · Downloads",collapsed:!$(a).grid},{default:O(()=>[z(dr,{grid:$(a).grid,prediction:$(d).state.prediction,downloading:$(a).downloading,locked:$(d).state.downloading,predicting:$(d).state.busy,error:$(a).downloadError,onDownload:$(e).download},null,8,["grid","prediction","downloading","locked","predicting","error","onDownload"])]),_:1},8,["collapsed"]),$(a).error&&!$(a).grid?(V(),se(k,{key:0,color:"danger"},{default:O(()=>[X(W($(a).error),1)]),_:1})):G("",!0)],512),[[it,$(f)]]),!$(r)&&!$(a).error?(V(),N("div",ur,[z(C,{indeterminate:"","aria-label":"Loading Flume map"})])):G("",!0)],32)}}},Mr=Ge(fr,[["__scopeId","data-v-eb1c49aa"]]);export{Mr as default};
//# sourceMappingURL=FlumeCityView-DPoInwxV.js.map
