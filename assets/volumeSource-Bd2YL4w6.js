import{i as wt}from"./mapbox-gl-geocoder-CUePGClQ.js";import{g as re,h as xt,d as vt}from"./mapbox-gl-Dse9jrZu.js";import{c as Se}from"./index-D6bWIqpK.js";import{m as Te,c as ge}from"./geojsonToStl-Bbo8coar.js";const Kr=[-73.5673,45.5017],Vr=14,B=4,U=1.5,Ke=240,Jr=3e3,Mt=.5,Zr=.5,Qr=16,en={directionDeg:0,speedMps:6,model:"v2"},tn={v1:"Model v1",v2:"Model v2",v3:"Model v3"},rn=["v2","v3"],$t=.5,kt=20,nn=320,sn=.35,an=10,on=.75,un={low:800,medium:1600,high:3200},Ve={dark:{mainArea:"#ffd952",bufferArea:"#3eaaf8",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.1},light:{mainArea:"#e8590c",bufferArea:"#3d4c58",previewBuildings:"#d8e0e5",selectedBuildings:"#fbfcfd",drawFillOpacity:.2}};let Je="dark";function cn(n){Je=n in Ve?n:"dark"}function fn(){return Ve[Je]}function Ze(n){const e=[1/0,1/0,-1/0,-1/0];return Se(n,t=>{e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.max(e[2],t[0]),e[3]=Math.max(e[3],t[1])}),e}function Ae(n,e){for(const p of[n,e])if(!(Array.isArray(p)&&p.length>=2&&p.every(Number.isFinite)&&Math.abs(p[0])<=180&&Math.abs(p[1])<=85.051129))throw new Error("Invalid WGS84 region coordinates.");const t=[Math.min(n[0],e[0]),Math.min(n[1],e[1])];if(Math.abs(n[0]-e[0])>=180)throw new Error("Region cannot cross the antimeridian (180 degrees).");const r=Te(t),i=ge(t),[a,s]=r([Math.max(n[0],e[0]),Math.max(n[1],e[1])]);if(a<=0||s<=0)throw new Error("The region is empty.");const o=Math.ceil((a-1e-6)/B),u=Math.ceil((s-1e-6)/B),c=i([o*B,u*B]),f=[...t,...c],[l,d,g,h]=f,b={type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[l,d],[g,d],[g,h],[l,h],[l,d]]]}};return{origin:t,bounds:f,extentM:[o*B,u*B],polygon:b}}function ln(n){var i;if(((i=n==null?void 0:n.geometry)==null?void 0:i.type)!=="Polygon")throw new Error("Draw a valid polygon first.");let e=0;if(Se(n,a=>{if(!Number.isFinite(a[0])||!Number.isFinite(a[1]))throw new Error("Invalid polygon coordinates.");e++}),e<4)throw new Error("A polygon needs at least three corners.");const t=Ze(n);return{...Ae(t.slice(0,2),t.slice(2,4)),selection:{type:"Feature",properties:{},geometry:structuredClone(n.geometry)}}}function dn(n,e=Mt){const t=structuredClone({origin:n.origin,bounds:n.bounds,extentM:n.extentM,polygon:n.polygon}),r=n.extentM.map(u=>Math.ceil(u*e/B)*B),i=ge(n.origin)([0,-r[1]]),a=ge(i)([-r[0],0]),s=Te(a)(n.bounds.slice(2,4)),o=Ae(a,ge(a)([s[0]+r[0],s[1]+r[1]]));return{...n,...o,mainDomain:t,buffer:{fraction:e,paddingM:r}}}function Qe(n){var r,i,a;const e=new Map,t=new Set;for(const s of n){if(!["Polygon","MultiPolygon"].includes((r=s.geometry)==null?void 0:r.type))continue;Se(s,d=>{if(!Number.isFinite(d[0])||!Number.isFinite(d[1])||Math.abs(d[0])>180||Math.abs(d[1])>85.051129)throw new Error("Invalid building coordinates.")});const o=Number((i=s.properties)==null?void 0:i.height),u=Number((a=s.properties)==null?void 0:a.min_height)||0,c=JSON.stringify([s.geometry,o,u]);if(t.has(c))continue;t.add(c);const f=re(s),l=f==null?c:JSON.stringify([f,o,u]);e.has(l)||e.set(l,[]),e.get(l).push({type:"Feature",...s.id==null?{}:{id:s.id},properties:structuredClone(s.properties??{}),geometry:structuredClone(s.geometry)})}return Array.from(e.values(),s=>{const o=s[0];if(s.length>1){const u=vt({type:"FeatureCollection",features:s});if(!u)throw new Error("Building parts produced empty geometry.");o.geometry=u.geometry,delete o.bbox}return o})}function hn(n,e){var g,h,b;const t=Qe(n),r=e.selection??e.polygon,i=new Set(t.filter(p=>wt(p,r))),a=new Set(Array.from(i,re).filter(p=>p!=null)),s=[],o=[],u=[];let c=0,f=0;for(const p of t){if(!(i.has(p)||re(p)!=null&&a.has(re(p)))){o.push(p);continue}const v=(g=p.properties)==null?void 0:g.height;if(v==null||v===""){c++;continue}const y=Number(v);if(!Number.isFinite(y)||y<0||y>Ke)throw new Error("Building height must be finite and between 0 and 240 m.");if(y===0){c++;continue}Number((h=p.properties)==null?void 0:h.min_height)>0&&f++,s.push({...p,properties:{...p.properties,source_height:y,source_min_height:Number((b=p.properties)==null?void 0:b.min_height)||0,height:Math.max(1,Math.round(y/U))*U,min_height:0}})}const l={type:"FeatureCollection",features:s};let d=e;if(s.length){const p=Ze(l);d=Ae(p.slice(0,2),p.slice(2,4))}return c&&u.push(c+" parts have missing/zero height and were omitted."),f&&u.push(f+" raised parts are treated as solid from the ground to their roof."),s.length||u.push("No buildings found in loaded map data. This run will use open ground."),s.some(p=>re(p)==null)&&u.push("Selected parts without provider IDs cannot be joined across tile boundaries."),u.push("Loaded map tiles only; this is not a complete OSM database extract."),{...structuredClone(e),...d,selection:structuredClone(e.selection??e.polygon),buildings:l,surroundings:{type:"FeatureCollection",features:o},warnings:u}}function gn(n){var t,r;const e=[];for(const i of Qe(n)){const a=Number((t=i.properties)==null?void 0:t.height);if(!Number.isFinite(a)||a<=0)continue;const s=Math.min(a,Math.max(0,Number((r=i.properties)==null?void 0:r.min_height)||0));e.push({...i,properties:{...i.properties,height:a,min_height:s}})}return{type:"FeatureCollection",features:e}}function pn(n,e=null){const t=n.map(re);if(t.some(i=>i==null))throw new Error("Selected buildings need a stable provider ID (nd, nodeid, osm_id or feature ID) for map styling.");const r=["in",xt,["literal",Array.from(new Set(t))]];return{selected:e?["all",e,r]:r,surroundings:e?["all",e,["!",r]]:["!",r]}}function bn(n){const[e,t]=n.extentM,r=Math.round(e/B),i=Math.round(t/B);if(r<1||i<1||!Number.isSafeInteger(r*i)||Math.abs(r*B-e)>1e-5||Math.abs(i*B-t)>1e-5)throw new Error("Invalid grid extent; use positive dimensions snapped to 4m cells.");const a=Te(n.origin),s=new Float32Array(r*i);for(const c of n.buildings.features){const f=Number(c.properties.height);if(!Number.isFinite(f)||f<0||f>Ke)throw new Error("Invalid building height (0..240 metres).");if(!f)continue;const l=Math.max(1,Math.round(f/U)),d=c.geometry.type==="Polygon"?[c.geometry.coordinates]:c.geometry.coordinates;for(const g of d){const h=g.map(y=>y.map(a));let b=1/0,p=-1/0;for(const y of h)for(const m of y)b=Math.min(b,m[1]),p=Math.max(p,m[1]);const w=Math.max(0,Math.ceil(b/B-.5)),v=Math.min(i,Math.ceil(p/B-.5));for(let y=w;y<v;y++){const m=(y+.5)*B,M=[];for(const x of h)for(let _=0,$=x.length-1;_<x.length;$=_++){const I=x[$],T=x[_];(I[1]<=m&&T[1]>m||T[1]<=m&&I[1]>m)&&M.push(I[0]+(m-I[1])*(T[0]-I[0])/(T[1]-I[1]))}M.sort((x,_)=>x-_);for(let x=0;x+1<M.length;x+=2){const _=Math.max(0,Math.ceil(M[x]/B-.5-1e-8)),$=Math.min(r,Math.ceil(M[x+1]/B-.5-1e-8));for(let I=_;I<$;I++)s[y*r+I]=Math.max(s[y*r+I],l)}}}}let o=0,u=0;for(const c of s)c>0&&o++,u=Math.max(u,c);return{layers:s,nx:r,ny:i,origin:[...n.origin],extentM:[...n.extentM],mainDomain:n.mainDomain,buffer:n.buffer,spacingM:B,layerSpacingM:U,statistics:{builtCells:o,maximumHeightM:u*U}}}function _t(n){const e=Number(n);return Number.isFinite(e)&&e>=$t&&e<=kt}function mn({directionDeg:n,speedMps:e}){const t=(s,o)=>{if(s===""||s===null||s===void 0||!Number.isFinite(Number(s)))throw new Error("Invalid "+o+".");return Number(s)},r=t(n,"direction"),i=t(e,"speed");if(!_t(i))throw new Error("Wind speed must be between 0.5 and 20 m/s.");const a=(r%360+360)%360;return{directionDeg:a,thetaRad:a*Math.PI/180,speedMps:i}}const Ne=4*1024**3;class et{constructor(e,t,r){this.adapter=e,this.device=t,this.useF16=r,this.liveBytes=0,this.peakBytes=0,this.pipelines=new Map,this.scratch=[]}static async create(){if(!navigator.gpu)throw new Error("WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const e=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!e)throw new Error("No WebGPU adapter available.");const t=e.features.has("shader-f16"),r=await e.requestDevice({requiredFeatures:t?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(e.limits.maxStorageBufferBindingSize,Ne),maxBufferSize:Math.min(e.limits.maxBufferSize,Ne)}});return new et(e,r,t)}async describe(){let e=this.adapter.info;return!e&&this.adapter.requestAdapterInfo&&(e=await this.adapter.requestAdapterInfo()),`${(e?[e.vendor,e.architecture,e.device,e.description]:[]).filter(Boolean).join(" ")||"unidentified GPU"}${this.useF16?" · f16":" · f32"}`}buffer(e,t,r){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:t,label:r});return a._tracked=i,this.liveBytes+=i,this.peakBytes=Math.max(this.peakBytes,this.liveBytes),a}storage(e,t,r=0){return this.buffer(e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|r,t)}free(e){e&&e._tracked&&(this.liveBytes-=e._tracked,e._tracked=0,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),a=new Int32Array(r),s=new Float32Array(r);e.forEach(([u,c],f)=>{u==="u"?i[f]=c:u==="i"?a[f]=c:s[f]=c});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,r),this.scratch.push(o),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e});this.pipelines.set(e,this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}}))}return this.pipelines.get(e)}dispatch(e,t,r,i,a=256){e.setPipeline(t),e.setBindGroup(0,this.device.createBindGroup({layout:t.getBindGroupLayout(0),entries:r.map((u,c)=>({binding:c,resource:{buffer:u}}))}));const s=Math.max(1,Math.ceil(i/a)),o=this.device.limits.maxComputeWorkgroupsPerDimension;e.dispatchWorkgroups(Math.min(s,o),Math.ceil(s/o))}async readFloat32(e,t){const r=t*4,i=this.buffer(r,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,"staging"),a=this.device.createCommandEncoder();a.copyBufferToBuffer(e,0,i,0,i.size),this.device.queue.submit([a.finish()]),await i.mapAsync(GPUMapMode.READ);const s=new Float32Array(i.getMappedRange().slice(0,r));return i.unmap(),this.free(i),s}}function It(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const a=r[0],s=a>>>16&32768,o=a>>>23&255;let u=a&8388607;if(o===255){e[i]=s|31744|(u?1:0);continue}const c=o-127+15;if(c>=31){e[i]=s|31744;continue}if(c<=0){if(c<-10){e[i]=s;continue}u|=8388608;const l=14-c;let d=u>>>l;u>>>l-1&1&&(d+=1),e[i]=s|d;continue}let f=c<<10|u>>>13;u&4096&&(f+=1),e[i]=s|f}return e}function yn(n){const e=new Float32Array(n.length);for(let t=0;t<n.length;t++){const r=n[t],i=r&32768?-1:1,a=r>>10&31,s=r&1023;a===0?e[t]=i*s*2**-24:a===31?e[t]=s?NaN:i*(1/0):e[t]=i*(1+s/1024)*2**(a-15)}return e}const F=5,Bt=2,St=4,Tt=.9,At=159,Ct=30,Pt=1.2;function Rt(n){var t;const e=Math.max(Ct,Pt*(((t=n.statistics)==null?void 0:t.maximumHeightM)??0));return Math.max(0,Math.min(At,Math.round(e/U-.5)))}function Et(n){const e=n.layers.filter(t=>t>0).sort();return e.length?e[Math.floor(Tt*(e.length-1))]:0}function Lt(n,e=n){const t=[];for(let r=0;r<n;r+=r<e?Bt:St)t.push(r);return t.push(n),t}const wn=n=>Lt(Rt(n),Et(n)),Ft=5;function xn(n,e=Ft){const t=n.length,r=Math.min(e,t),i=new Set;for(let s=0;s<r;s++)i.add(Math.round(s*(t-1)/Math.max(1,r-1)));const a=[...i].sort((s,o)=>s-o);for(;a.length<t;){const s=[...a].sort((u,c)=>u-c);let o=0;for(let u=1;u+1<s.length;u++)s[u+1]-s[u]>s[o+1]-s[o]&&(o=u);a.push(Math.floor((s[o]+s[o+1])/2))}return a.map(s=>n[s])}function vn(n,e,t=!0){const r=n.width*n.height;return{width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta,plan:[...e],layers:t?[...e]:[],slots:t?e.map((i,a)=>a):[],values:new Float32Array(e.length*r*F),solid:new Uint8Array(e.length*r)}}function Mn(n,e,t){if(t.width!==n.width||t.height!==n.height||t.originX!==n.originX)throw new Error("Wind layers do not share one wind-frame grid.");const r=n.width*n.height;if(n.values.set(t.values,e*r*F),n.solid.set(t.solid,e*r),n.slots.includes(e))return;const i=n.plan[e];let a=0;for(;a<n.layers.length&&n.layers[a]<i;)a++;n.layers.splice(a,0,i),n.slots.splice(a,0,e)}function $n(n,e){const t=n.width*n.height,r=n.slots[e];return{values:n.values.subarray(r*t*F,(r+1)*t*F),solid:n.solid.subarray(r*t,(r+1)*t)}}function Ce(n,e){const t=e/U-.5,{layers:r}=n;if(t<=r[0])return{k0:0,k1:0,f:0};const i=r.length-1;if(t>=r[i])return{k0:i,k1:i,f:0};let a=1;for(;r[a]<t;)a++;const s=a-1;return{k0:s,k1:a,f:(t-r[s])/(r[a]-r[s])}}const tt=n=>(n.layers.at(-1)+.5)*U;function Ut(n,e){const{k0:t,k1:r,f:i}=Ce(n,e),a=n.width*n.height,s=a*F,o=new Float32Array(s),u=n.slots[t]*s,c=n.slots[r]*s;for(let l=0;l<s;l++)o[l]=n.values[u+l]*(1-i)+n.values[c+l]*i;const f=n.slots[i<.5?t:r];return{values:o,solid:n.solid.slice(f*a,(f+1)*a),width:n.width,height:n.height,originX:n.originX,originY:n.originY,theta:n.theta}}function rt(n,e,t,r,i){const a=(e-1)/2,s=(t-1)/2,o=r/B-.5-a,u=i/B-.5-s,c=Math.cos(n.theta),f=Math.sin(n.theta);return[o*c+u*f+a-n.originX,-o*f+u*c+s-n.originY]}function Ot(n,e,t,r,i,a,s){const[o,u]=rt(n,e,t,r,i),{width:c,height:f}=n;if(!(o>=0&&u>=0&&o<=c-1&&u<=f-1))return null;const l=Math.min(c-2,Math.floor(o)),d=Math.min(f-2,Math.floor(u)),g=c>1?o-l:0,h=f>1?u-d:0,{k0:b,k1:p,f:w}=Ce(n,a),v=c*f;for(let y=0;y<F;y++)s[y]=0;for(const[y,m]of[[b,1-w],[p,w]])if(m!==0)for(const[M,x]of[[0,1-h],[1,h]])for(const[_,$]of[[0,1-g],[1,g]]){const I=m*x*$;if(I===0)continue;const T=(n.slots[y]*v+Math.min(f-1,d+M)*c+Math.min(c-1,l+_))*F;for(let R=0;R<F;R++)s[R]+=n.values[T+R]*I}return s}function Nt(n,e,t){const r=Math.cos(e),i=Math.sin(e);return t[0]=n[0]*r-n[2]*i,t[1]=n[0]*i+n[2]*r,t[2]=n[1],t}function Dt(n,e,t,r){const i=Math.floor(e/B),a=Math.floor(t/B);return i<0||a<0||i>=n.nx||a>=n.ny?!0:r<n.layers[a*n.nx+i]*U}function kn(n,e){const t=Math.max(U/2,Math.min(tt(n),Number(e)||0)),r=Math.max(0,Math.round(t/U-.5));return{...Ut(n,t),grid:n.grid,settings:{...n.settings,heightM:t,layerIndex:r},referenceSpeed:n.referenceSpeed,colorbar:n.colorbar,modelLabel:n.modelLabel,patchCount:n.patchCount,milliseconds:n.milliseconds}}function _n(n,e){const t=Math.round((n.height-1)/2+Number(e)/B);return Math.max(0,Math.min(n.height-1,t))}function In(n){const{nx:e,ny:t}=n.grid,i=[[0,0],[e,0],[0,t],[e,t]].map(([u,c])=>rt(n,e,t,u*B,c*B)[1]),a=(n.height-1)/2,s=Math.max(0,Math.min(...i))-a,o=Math.min(n.height-1,Math.max(...i))-a;return[Math.ceil(s)*B,Math.floor(o)*B]}function Bn(n,e){const{width:t}=n,r=n.width*n.height,i=n.layers.at(-1)+1,a=new Float32Array(t*i*F),s=new Uint8Array(t*i);for(let o=0;o<i;o++){const{k0:u,k1:c,f}=Ce(n,(o+.5)*U),l=n.slots[f<.5?u:c];for(let d=0;d<t;d++){const g=e*t+d,h=(n.slots[u]*r+g)*F,b=(n.slots[c]*r+g)*F,p=(o*t+d)*F;for(let w=0;w<F;w++)a[p+w]=n.values[h+w]*(1-f)+n.values[b+w]*f;s[o*t+d]=n.solid[l*r+g]}}return{values:a,solid:s,width:t,height:i}}const ue=Object.freeze({TIMEOUT:"timeout",CANCELLED:"cancelled",DOWNLOAD:"download",GPU:"gpu",PLANNER:"planner",MODEL:"model",MISSION:"mission",TOO_LARGE:"too-large"});class ce extends Error{constructor(e,t){super(t),this.name="DemoError",this.code=e}}const O=n=>new ce(ue.MODEL,n),nt=8,it=new MessageChannel,st=[];it.port1.onmessage=()=>{var n;return(n=st.shift())==null?void 0:n()};const at=()=>new Promise(n=>{st.push(n),it.port2.postMessage(0)});class ot{constructor(){this.buffers=[null,null],this.slot=1}next(e){var t;return this.slot^=1,((t=this.buffers[this.slot])==null?void 0:t.byteLength)>=e||(this.buffers[this.slot]=new SharedArrayBuffer(e)),this.buffers[this.slot]}}const k=256,xe=1<<20;class ut{constructor(e,t,r){this.adapterInfo=r,this.device=e,this.useF16=t,this.pipelines=new Map,this.scratch=[],this.halfRing=new ot}static async create({allowF16:e=!0}={}){if(!navigator.gpu)throw new ce(ue.GPU,"WebGPU unavailable. Use desktop Chrome or Edge over https:// or http://localhost (a secure context is required).");const t=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!t)throw new ce(ue.GPU,"No WebGPU adapter available.");const r=e&&t.features.has("shader-f16"),i=await t.requestDevice({requiredFeatures:r?["shader-f16"]:[],requiredLimits:{maxStorageBufferBindingSize:Math.min(t.limits.maxStorageBufferBindingSize,1<<30),maxBufferSize:Math.min(t.limits.maxBufferSize,1<<30)}});return new ut(i,r,t.info??null)}destroy(){try{this.device.destroy()}catch{}}buffer(e,t,r){const i=Math.max(4,Math.ceil(e/4)*4),a=this.device.createBuffer({size:i,usage:t,label:r});return a.tracked=!0,a}storage(e,t){const r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;return this.buffer(e,r,t)}free(e){e&&e.tracked&&(e.tracked=!1,e.destroy())}upload(e,t){const r=this.storage(e.byteLength,t);return this.write(r,e),r}write(e,t){if(t.byteLength%4){const r=new Uint8Array(Math.ceil(t.byteLength/4)*4);r.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),this.device.queue.writeBuffer(e,0,r)}else this.device.queue.writeBuffer(e,0,t)}uniform(e){const t=this.keptUniform(e);return this.scratch.push(t),t}keptUniform(e){const t=Math.ceil(e.length/4)*16,r=new ArrayBuffer(t),i=new Uint32Array(r),a=new Int32Array(r),s=new Float32Array(r);e.forEach(([u,c],f)=>{u==="u"?i[f]=c:u==="i"?a[f]=c:s[f]=c});const o=this.device.createBuffer({size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(o,0,r),o}releaseScratch(){for(const e of this.scratch)e.destroy();this.scratch=[]}pipeline(e){if(!this.pipelines.has(e)){const t=this.device.createShaderModule({code:e}),r=this.device.createComputePipeline({layout:"auto",compute:{module:t,entryPoint:"main"}});this.pipelines.set(e,r)}return this.pipelines.get(e)}dispatch(e,t,r,i,a=k){this.dispatchGroups(e,t,r,...this.workgroups(i,a))}workgroups(e,t=k){const r=Math.max(1,Math.ceil(e/t)),i=this.device.limits.maxComputeWorkgroupsPerDimension;return[Math.min(r,i),Math.ceil(r/i)]}dispatchGroups(e,t,r,...i){this.replay(e,this.prepared(t,r,i))}prepared(e,t,r){const i=this.device.createBindGroup({layout:e.getBindGroupLayout(0),entries:t.map((a,s)=>({binding:s,resource:{buffer:a}}))});return{pipeline:e,bindGroup:i,groups:r}}replay(e,{pipeline:t,bindGroup:r,groups:i}){e.setPipeline(t),e.setBindGroup(0,r),e.dispatchWorkgroups(...i)}async readBack(e,t,r,i){const a=this.buffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,r),s=this.device.createCommandEncoder();t(s,a),this.device.queue.submit([s.finish()]);try{await a.mapAsync(GPUMapMode.READ);const o=await i(a.getMappedRange());return a.unmap(),o}finally{this.free(a)}}async readHalf(e,t,r){const i=(a,s)=>a.copyBufferToBuffer(e,0,s,0,s.size);return this.readBack(t*2,i,"staging",a=>this.copyHalves(a,t,r))}async copyHalves(e,t,r){const i=r?new Uint16Array(this.halfRing.next(t*2),0,t):new Uint16Array(t),a=new Uint16Array(e,0,t);let s=performance.now();for(let o=0;o<t;o+=xe)i.set(a.subarray(o,Math.min(t,o+xe)),o),o+xe<t&&performance.now()-s>nt&&(await at(),s=performance.now());return i}}const J=4,Z=1.5,Sn=n=>(n+.5)*J,Tn=n=>n/J-.5,An=n=>Math.floor(n/J),ct=n=>(n+.5)*Z;let N=20,fe=80,oe=fe-N+1;function Cn(n,e){N=n,fe=e,oe=e-n+1}const Pn=ct(N),Rn=ct(fe),Wt=2,Gt=32,A=4,Yt=()=>!!globalThis.crossOriginIsolated&&typeof SharedArrayBuffer<"u",qt=()=>navigator.hardwareConcurrency||4;function En(n,e,t){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){const s=n[i][0],o=n[i][1],u=n[a][0],c=n[a][1];o>t!=c>t&&e<(u-s)*(t-o)/(c-o)+s&&(r=!r)}return r}function Xt(n){let e=0;for(let t=0;t<n.length;t++){const r=n[t],i=n[(t+1)%n.length];e+=r[0]*i[1]-i[0]*r[1]}return e}function zt(n,e){const t=e.reduce((a,s)=>a+s[0],0)/e.length,r=e.reduce((a,s)=>a+s[1],0)/e.length;let i=n;for(let a=0;a<e.length&&i.length;a++){const s=e[a],o=e[(a+1)%e.length],u=l=>(o[0]-s[0])*(l[1]-s[1])-(o[1]-s[1])*(l[0]-s[0]),c=u([t,r])>0?1:-1,f=i;i=[];for(let l=0;l<f.length;l++){const d=f[l],g=f[(l+1)%f.length],h=c*u(d),b=c*u(g);if(h>=0&&i.push(d),h>=0!=b>=0){const p=h/(h-b);i.push([d[0]+p*(g[0]-d[0]),d[1]+p*(g[1]-d[1])])}}}return i}function ft(n,e,t){const r=(e-1)/2,i=(t-1)/2,a=Math.cos(n),s=Math.sin(n);return{theta:n,cX:r,cY:i,cos:a,sin:s,toWind:([o,u])=>{const c=o-r,f=u-i;return[r+c*a+f*s,i-c*s+f*a]},toCity:([o,u])=>{const c=o-r,f=u-i;return[r+c*a-f*s,i+c*s+f*a]}}}const P=64,C=180,lt=1600,jt=640,G=8,S=32,q=n=>n.toFixed(6),Y=n=>{const e=Math.fround(n);return Number.isInteger(e)&&Math.abs(e)<1e7?e.toFixed(1):e.toExponential(9)},Ht=`
fn divr(a: f32, b: f32) -> f32 {
  let q = a / b;
  let r = fma(-q, b, a);
  return q + r / b;
}`,Kt=()=>`
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
@compute @workgroup_size(${P})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${P}u;
  let line = g % u.lineMax;
  let rest = g / u.lineMax;
  let pair = rest % u.pairCount;
  let ai = rest / u.pairCount;
  if (ai >= u.angleCount) { return; }
  let t = table[u.angleFirst + ai];
  if (line >= t.lineCount) { return; }
  let k0 = 2u * pair;
  let has1 = k0 + 1u < u.layerCount;
  let q0 = (f32(layers[u.layerFirst + k0]) + 0.5) * ${q(Z)};
  let q1 = select(1.0e9, (f32(layers[u.layerFirst + min(k0 + 1u, u.layerCount - 1u)]) + 0.5) * ${q(Z)}, has1);
  let cutoff = ${q(lt)};
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
}`;function Vt(n){const e=r=>r.part==="dc"?"dc":`${r.part}.${r.mode===1?"x":"y"}`,t=n.map((r,i)=>`  sums[e + ${i}u] += ${e(r)};`).join(`
`);return`
struct Q { pixels: u32, layerCount: u32, pairCount: u32, angleFirst: u32, angleCount: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> raw: array<u32>;
@group(0) @binding(1) var<storage, read> trig: array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> sums: array<f32>;
@group(0) @binding(3) var<uniform> u: Q;
@compute @workgroup_size(${P})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${P}u;
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
}`}const j=64,E=8,V=j/E,L=V*V,$e=E*E,De=Math.log2(j),We=Math.log2(E),de=E-1,Pe="15u",ke="4u",dt="0xfffu",_e="2048",Jt="4095",Re="16u",Ge=(n,e,t,r,i)=>`
struct E { gx: u32, gy: u32, pixels: u32, layerCount: u32, nTiles: u32, pad0: u32, pad1: u32, pad2: u32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> ${i?"field":"headers"}: array<u32>;
@group(0) @binding(2) var<uniform> u: E;
var<private> STEPS: array<f32, ${n.length}> = array<f32, ${n.length}>(${e.map(Y).join(", ")});
fn qAt(k: u32, x: u32, y: u32, c: u32) -> i32 {
  return i32(round(sums[(k * u.pixels + y * u.gx + x) * ${n.length}u + c] / ${q(C)} / STEPS[c]));
}
@compute @workgroup_size(${P})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${P}u;
  if (g >= u.nTiles * ${L}u) { return; }
  let t = g / ${L}u;
  let b = g % ${L}u;
  let tx = t % ${t}u;
  let ty = (t / ${t}u) % ${r}u;
  let c = (t / ${t*r}u) % ${n.length}u;
  let k = t / ${t*r*n.length}u;
${i?`  let h = field[u.nTiles + t * ${L}u + b];
  let w = h & ${Pe};
  if (w == 0u) { return; }
  let base = i32((h >> ${ke}) & ${dt}) - ${_e};
  var wi = field[t] + (h >> ${Re});
  let x0 = tx * ${j}u + (b % ${V}u) * ${E}u;
  let y0 = ty * ${j}u + (b / ${V}u) * ${E}u;
  var acc = 0u;
  var nbits = 0u;
  for (var j = 0u; j < ${$e}u; j++) {
    let x = x0 + j % ${E}u; let y = y0 + j / ${E}u;
    var r = 0u;
    if (x < u.gx && y < u.gy) { r = u32(qAt(k, x, y, c) - base); }
    acc |= r << nbits;
    nbits += w;
    if (nbits >= 32u) {
      field[wi] = acc; wi += 1u; nbits -= 32u;
      acc = select(0u, r >> (w - nbits), nbits > 0u);
    }
  }`:`  let x0 = tx * ${j}u + (b % ${V}u) * ${E}u;
  let y0 = ty * ${j}u + (b / ${V}u) * ${E}u;
  var mn = 2147483647; var mx = -2147483647;
  for (var j = 0u; j < ${$e}u; j++) {
    let x = x0 + j % ${E}u; let y = y0 + j / ${E}u;
    if (x < u.gx && y < u.gy) { let q = qAt(k, x, y, c); mn = min(mn, q); mx = max(mx, q); }
  }
  if (mx < mn) { mn = 0; mx = 0; }
  let range = u32(mx - mn);
  let w = select(32u - countLeadingZeros(range), 0u, range == 0u);
  headers[t * ${L}u + b] = w | (u32(clamp(mn + ${_e}, 0, ${Jt})) << ${ke});`}
}`,Zt=()=>`
@group(0) @binding(0) var<storage, read_write> headers: array<u32>;
@group(0) @binding(1) var<storage, read_write> tileWords: array<u32>;
@group(0) @binding(2) var<uniform> nTiles: vec4<u32>;
@compute @workgroup_size(${P})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let t = gid.x + gid.y * groups.x * ${P}u;
  if (t >= nTiles.x) { return; }
  var local = 0u;
  for (var b = 0u; b < ${L}u; b++) {
    let h = headers[t * ${L}u + b];
    headers[t * ${L}u + b] = h | (local << ${Re});
    local += ${$e/32}u * (h & ${Pe});
  }
  tileWords[t] = local;
}`,Qt=n=>{const e=`array<f32, ${G}>`,t={0:"hs[0][k]",1:"hs[1][k]",2:"hs[2][k]",3:"hs[3][k]"};return`${Ht}
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
@compute @workgroup_size(${P})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${P}u;
  let groupsPerPixel = (u.layerCount + ${G-1}u) / ${G}u;
  let cells = ${S*S}u;
  if (g >= u.tileCount * cells * groupsPerPixel) { return; }
  let layerGroup = g % groupsPerPixel;
  let cell = (g / groupsPerPixel) % cells;
  let tile = g / (groupsPerPixel * cells);
  let sx = f32(u.upX0 + tiles[3u * tile] * ${S} + i32(cell % ${S}u));
  let sy = f32(u.upY0 + tiles[3u * tile + 1u] * ${S} + i32(cell / ${S}u));
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
  let first = layerGroup * ${G}u;
  let count = min(${G}u, u.layerCount - first);
  var query: ${e};
  for (var k = 0u; k < ${G}u; k++) {
    query[k] = (f32(layers[min(first + k, u.layerCount - 1u)]) + 0.5) * ${q(Z)};
  }
  // grid traversal along the single upwind azimuth, for up to LAYER_GROUP query heights at once (the cells the ray
  // crosses do not depend on the height, only where it stops and what it records)
  var hs: array<${e}, 4>;
  {
    var x = x0; var y = y0;
    let nx = i32(u.gx);
    let ny = i32(u.gy);
    let gxr = u.cosU / ${q(J)};
    let gyr = u.sinU / ${q(J)};
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
    let cutoff = ${q(lt)};
    var bestNum: ${e};
    var bestDen: ${e};
    var done: array<bool, ${G}>;
    for (var k = 0u; k < ${G}u; k++) {
      hs[0][k] = cutoff; hs[1][k] = 0.0; hs[2][k] = cutoff; hs[3][k] = -query[k];
      bestNum[k] = -1.0e20; bestDen[k] = 1.0;
      done[k] = k >= count;
    }
    var remaining = count;
    var entered = 0.0;
    for (var step = 0u; step < ${jt}u; step++) {
      if (x < 0 || x >= nx || y < 0 || y >= ny || entered >= cutoff || remaining == 0u) { break; }
      let leaving = min(min(nextX, nextY), cutoff);
      let roof = height[u32(y) * u.gx + u32(x)];
      if (roof > 0.0) {
        for (var k = 0u; k < ${G}u; k++) {
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
    let e0 = ((slotTile * u.layerCount + first + k) * cells + cell) * ${n.length}u;
${n.map((r,i)=>`    put(e0 + ${i}u, ${t[r]});`).join(`
`)}
  }
}`},er=(n,e,t)=>{const r=e.stored.length,i=e.up.length,{usesHeight:a}=e,s=[["field","array<u32>"]];a&&s.push(["height","array<f32>"]),s.push(["origins","array<i32>"],["slots","array<i32>"]),i&&s.push(["up","array<u32>"],["upTable","array<i32>"]);const o=s.map(([f,l],d)=>`@group(0) @binding(${d}) var<storage, read> ${f}: ${l};`);o.push(`@group(0) @binding(${s.length}) var<storage, read_write> out: array<${n}>;`),o.push(`@group(0) @binding(${s.length+1}) var<uniform> u: P;`);const u=(f,l)=>`(${f} - ${Y(l.center)}) / ${Y(l.scale)}`,c=e.inputs.map((f,l)=>{let d;if(f.source==="r1")if(f.part==="dc")d=`value = ${u(`sampleField(ry, rx, slot, ${e.storedIndex(f.signal,"dc",0)}u)`,f)};`;else{const g=e.storedIndex(f.signal,"re",f.mode),h=e.storedIndex(f.signal,"im",f.mode);d=`let re = sampleField(ry, rx, slot, ${g}u);
      let im = sampleField(ry, rx, slot, ${h}u);
      let angle = ${Y(f.mode)} * u.theta;
      let c = cos(angle); let s = sin(angle);
      value = ${u(f.part==="im"?"(re * s + im * c)":"(re * c - im * s)",f)};`}else if(f.source==="geo"){const g=f.index===0?"h / 100.0":"asinh((h - z) / 10.0)";d=`let h = roofHeight(iy, ix);
      value = ${u(`f16round(${g})`,f)};`}else f.source==="up"?d=`value = ${u(`upAtWind(sy, sx, slot, ${e.up.indexOf(f.index)}u)`,f)};`:f.source==="solid"?d=`let roofLayer = round(roofHeight(iy, ix) / ${q(Z)});
      value = select(0.0, 1.0, roofLayer > f32(layer));`:f.axis==="y"?d=`value = (sy - u.centreY) / ${Y(f.scale)};`:f.axis==="z"?d=`value = (f32(layer) - ${Y(f.center)}) / ${Y(f.scale)};`:d=`value = (sx - ${Y(f.center)}) / ${Y(f.scale)};`;return`    case ${l}u: {  // ${f.name}
      ${d}
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
${o.join(`
`)}

// Round to the nearest float16 value (ties to even), as numpy astype(float16).  Done with bit
// operations: the shader compiler may fold unpack2x16float(pack2x16float(v)) away.
fn f16round(v: f32) -> f32 {
  if (abs(v) < 6.103515625e-5) { return round(v * 16777216.0) / 16777216.0; }   // float16 subnormals
  let b = bitcast<u32>(v);
  return bitcast<f32>((b + 0x0fffu + ((b >> 13u) & 1u)) & 0xffffe000u);
}
var<private> STEPS: array<f32, ${r}> = array<f32, ${r}>(${t.steps.map(Y).join(", ")});
// one value of the packed field (region = whole padded grid)
fn storedAt(pixel: u32, slot: u32, c: u32) -> f32 {
  let x = pixel % u.regionW;
  let y = pixel / u.regionW;
  let t = ((slot * ${r}u + c) * ${t.ty}u + (y >> ${De}u)) * ${t.tx}u + (x >> ${De}u);
  let h = field[u.packTiles + t * ${L}u + ((y >> ${We}u) & ${de}u) * ${V}u + ((x >> ${We}u) & ${de}u)];
  let w = h & ${Pe};
  var q = i32((h >> ${ke}) & ${dt}) - ${_e};
  if (w > 0u) {
    let bit = (((y & ${de}u) * ${E}u) + (x & ${de}u)) * w;
    let word = field[t] + (h >> ${Re}) + (bit >> 5u);
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
  if (tx < 0 || ty < 0 || u32(tx >> ${Math.log2(S)}u) >= u.upTW || u32(ty >> ${Math.log2(S)}u) >= u.upTH) { return 0.0; }
  let t = upTable[u32(ty >> ${Math.log2(S)}u) * u.upTW + u32(tx >> ${Math.log2(S)}u)];
  if (t < 0) { return 0.0; }
  let e = ((u32(t) * u.upLayers + slot) * ${S*S}u + u32(ty & ${S-1}) * ${S}u + u32(tx & ${S-1})) * ${i}u + c;
  let pair = unpack2x16float(up[e >> 1u]);
  return select(pair.x, pair.y, (e & 1u) == 1u);
}`:""}
${a?`fn roofHeight(iy: f32, ix: f32) -> f32 {
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

@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${k}u;
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
  let z = (f32(layer) + 0.5) * ${q(Z)};
  let slot = u32(slots[layer]);
  var value = 0.0;
  switch channel {
${c.join(`
`)}
    default: {}
  }
  out[g] = ${n==="f16"?"f16(value)":"value"};
}`},tr=4,rr=48<<20,nr=3,ir=.016,sr=256;class ar{constructor(e,{layers:t,ny:r,nx:i},a,s,o){this.context=e,this.inputPlan=o,this.ny=r,this.nx=i,this.margin=a,this.gy=r+2*a,this.gx=i+2*a;const u=new Float32Array(this.gy*this.gx);for(let h=0;h<r;h++)for(let b=0;b<i;b++)u[(h+a)*this.gx+b+a]=t[h*i+b]*Z;this.heightBuffer=e.upload(u,"mddf.height");const c=new Float32Array(C),f=new Float32Array(C);for(let h=0;h<C;h++)c[h]=Math.cos(2*Math.PI*h/C),f[h]=Math.sin(2*Math.PI*h/C);this.cosT=c,this.sinT=f,this.scanPipeline=e.pipeline(Kt()),this.accumulatePipeline=e.pipeline(Vt(o.stored)),this.upWind=o.up.length>0,this.upGrid=null,this.upTableBuffer=null,this.upWind&&(this.alongPipeline=e.pipeline(Qt(o.up)));const l=o.stored.map(h=>2*ir*h.scale),d=Math.ceil(this.gx/j),g=Math.ceil(this.gy/j);this.packed={steps:l,tx:d,ty:g},this.packHeaderPipeline=e.pipeline(Ge(o.stored,l,d,g,!1)),this.packPayloadPipeline=e.pipeline(Ge(o.stored,l,d,g,!0)),this.packTilePipeline=e.pipeline(Zt()),this.assemblePipeline=e.pipeline(er(s,o,this.packed)),this.groups=null,this.offsetBuffer=null,this.tableBuffer=null,this.trigBuffer=null,this.scanInfo=null,this.scanRaw=null,this.sumsBuffer=null,this.destroyed=!1}get storedBytesPerCellLayer(){return 2*this.inputPlan.stored.length}planGroups(e,t){const r=this.gx*this.gy,i=this.storedBytesPerCellLayer*r;let a=Math.max(1,Math.min(e.length,Math.floor(t/i)));if(a=Math.min(a,tr),i>t)throw new ce(ue.TOO_LARGE,`one layer needs ${i} bytes, above the ${t}-byte buffer limit`);const s=[];for(let o=0;o<e.length;o+=a){const u=e.slice(o,o+a),c=new Int32Array(sr).fill(-1);u.forEach((f,l)=>{c[f]=l}),s.push({layers:u,slots:c,field:null,slotBuffer:null,layerBuffer:null,packTiles:0,upTiles:null,upCapacity:0,upCount:0,upGrid:null})}return s}allocate(e){const{context:t}=this;for(const r of e)r.slotBuffer=t.upload(r.slots,"mddf.slots"),r.layerBuffer=t.upload(new Uint32Array(r.layers),"mddf.layers");this.groups=e}releaseGroups(){for(const e of this.groups??[])for(const t of[e.field,e.upTiles,e.slotBuffer,e.layerBuffer])this.context.free(t);this.groups=null}scanTables(){if(this.scanInfo)return this.scanInfo;const{gx:e,gy:t}=this,r=Math.max(e,t),i=new Int32Array(C*r),a=new ArrayBuffer(C*32),s=new Uint32Array(a),o=new Int32Array(a),u=new Float32Array(a),c=new Float32Array(C*4);let f=0;for(let l=0;l<C;l++){const d=this.cosT[l],g=this.sinT[l],h=Math.abs(d)>=Math.abs(g),b=h?d:g,p=h?g:d,w=Math.abs(p/b),v=h?e:t,y=h?t:e;for(let x=0;x<v;x++)i[l*r+x]=Math.round(w*x);const m=i[l*r+v-1],M=y+m;f=Math.max(f,M),s[8*l]=h?1:0,o[8*l+1]=b>=0?1:-1,o[8*l+2]=p>=0?1:-1,o[8*l+3]=m,s[8*l+4]=M,s[8*l+5]=l*r,u[8*l+6]=J*Math.sqrt(1+w*w),c.set([d,g,Math.cos(4*Math.PI*l/C),Math.sin(4*Math.PI*l/C)],4*l)}return this.offsetBuffer=this.context.upload(i,"mddf.offsets"),this.tableBuffer=this.context.upload(s,"mddf.scanTable"),this.trigBuffer=this.context.upload(c,"mddf.trig"),this.scanInfo={lineMax:f},this.scanInfo}async scan(e,t){if(this.destroyed)return;const{context:r,gx:i,gy:a}=this,{lineMax:s}=this.scanTables(),o=i*a,u=this.inputPlan.stored.length,c=e.layers.length,f=Math.ceil(c/2),l=Math.max(1,Math.min(C,Math.floor(rr/(f*o*4)))),d=l*f*o*4,g=c*o*u*4;(!this.scanRaw||this.scanRaw.size<d)&&(r.free(this.scanRaw),this.scanRaw=r.storage(d,"mddf.scanRaw")),(!this.sumsBuffer||this.sumsBuffer.size<g)&&(r.free(this.sumsBuffer),this.sumsBuffer=r.storage(g,"mddf.sums"));const h=r.device.createCommandEncoder();h.clearBuffer(this.sumsBuffer,0,c*o*u*4),r.device.queue.submit([h.finish()]);const b=[];for(let p=0;p<C;p+=l){if(this.destroyed)return;const w=Math.min(l,C-p),v=r.device.createCommandEncoder(),y=v.beginComputePass(),m=r.uniform([["u",i],["u",a],["u",o],["u",0],["u",c],["u",f],["u",p],["u",w],["u",s],["u",0],["u",0],["u",0]]);r.dispatch(y,this.scanPipeline,[this.heightBuffer,e.layerBuffer,this.offsetBuffer,this.tableBuffer,this.scanRaw,m],s*f*w,P);const M=r.uniform([["u",o],["u",c],["u",f],["u",p],["u",w],["u",0],["u",0],["u",0]]);r.dispatch(y,this.accumulatePipeline,[this.scanRaw,this.trigBuffer,this.sumsBuffer,M],o*c,P),y.end(),r.device.queue.submit([v.finish()]),b.push(r.device.queue.onSubmittedWorkDone()),b.length>=nr&&await b.shift(),t((p+w)/C)}this.destroyed||(await this.packGroup(e,c,o),!this.destroyed&&(await r.device.queue.onSubmittedWorkDone(),!this.destroyed&&(r.free(this.scanRaw),this.scanRaw=null,r.free(this.sumsBuffer),this.sumsBuffer=null,r.releaseScratch())))}async packGroup(e,t,r){const{context:i,gx:a,gy:s}=this,{tx:o,ty:u}=this.packed,c=t*this.inputPlan.stored.length*o*u,f=i.storage(c*L*4,"mddf.packHeaders"),l=i.storage(c*4,"mddf.packTileWords"),d=i.uniform([["u",a],["u",s],["u",r],["u",t],["u",c],["u",0],["u",0],["u",0]]),g=i.uniform([["u",c],["u",0],["u",0],["u",0]]),h=()=>{i.free(f),i.free(l)},b=(x,_)=>{const $=x.beginComputePass();i.dispatch($,this.packHeaderPipeline,[this.sumsBuffer,f,d],c*L,P),i.dispatch($,this.packTilePipeline,[f,l,g],c,P),$.end(),x.copyBufferToBuffer(l,0,_,0,c*4)};let p;try{p=await i.readBack(c*4,b,"mddf.packTileWords read",x=>this.destroyed?null:new Uint32Array(x.slice(0)))}catch(x){throw h(),x}if(!p){h();return}const w=new Uint32Array(c);let v=c+c*L;for(let x=0;x<c;x++)w[x]=v,v+=p[x];i.free(e.field),e.field=i.storage(Math.max(4,v*4),"mddf.field"),e.packTiles=c,i.write(e.field,w);const y=i.device.createCommandEncoder();y.copyBufferToBuffer(f,0,e.field,c*4,c*L*4);const m=y.beginComputePass(),M=i.uniform([["u",a],["u",s],["u",r],["u",t],["u",c],["u",0],["u",0],["u",0]]);i.dispatch(m,this.packPayloadPipeline,[this.sumsBuffer,e.field,M],c*L,P),m.end(),i.device.queue.submit([y.finish()]),await i.device.queue.onSubmittedWorkDone(),h()}upwindDirection(e){let t=(e+Math.PI)%(2*Math.PI);t<0&&(t+=2*Math.PI);const r=t/(2*Math.PI)*C,i=Math.round(r)%C;return Math.abs(r-Math.round(r))<1e-6?[this.cosT[i],this.sinT[i]]:[Math.fround(Math.cos(t)),Math.fround(Math.sin(t))]}upTileGrid(e,t){const r=ft(e,this.nx,this.ny);let i=1/0,a=-1/0,s=1/0,o=-1/0;for(const d of[-.5,this.nx-.5])for(const g of[-.5,this.ny-.5]){const[h,b]=r.toWind([d,g]);i=Math.min(i,h),a=Math.max(a,h),s=Math.min(s,b),o=Math.max(o,b)}const u=Math.floor((i-t)/S)*S,c=Math.floor((s-t)/S)*S,f=Math.ceil((a+t+1-u)/S),l=Math.ceil((o+t+1-c)/S);return{theta:e,x0:u,y0:c,tw:f,th:l,table:new Int32Array(f*l).fill(-1),count:0}}ensureUpTiles(e,t,r,i,a){const{context:s}=this;let o=this.upGrid;(!o||o.theta!==t||o.count>0&&e.some(m=>m.upGrid!==o))&&(o=this.upGrid=this.upTileGrid(t,i));const u=[];for(const[m,M]of r){const x=Math.floor((M-o.x0)/S),_=Math.floor((M+i-1-o.x0)/S),$=Math.floor((m-o.y0)/S),I=Math.floor((m+i-1-o.y0)/S);if(x<0||$<0||_>=o.tw||I>=o.th)throw new Error("a patch lies outside the wind-frame tile grid");for(let T=$;T<=I;T++)for(let R=x;R<=_;R++){const D=T*o.tw+R;o.table[D]<0&&(o.table[D]=o.count+u.length/3,u.push(R,T,o.table[D]))}}const c=u.length/3;if(!c)return 0;a();const f=o.count,l=f+c,d=this.inputPlan.up.length,g=S*S,h=s.device.createCommandEncoder(),b=[];for(const m of e){const M=m.layers.length*g*d*2;if(m.upGrid!==o&&(m.upCount=0),!m.upTiles||m.upCapacity<l){const x=Math.min(o.tw*o.th,Math.max(l,Math.ceil(m.upCapacity*1.5))),_=s.storage(x*M,"mddf.upTiles");m.upTiles&&m.upCount&&h.copyBufferToBuffer(m.upTiles,0,_,0,m.upCount*M),m.upTiles&&b.push(m.upTiles),m.upTiles=_,m.upCapacity=x}m.upGrid=o,h.clearBuffer(m.upTiles,f*M,c*M),m.upCount=l}const p=s.upload(new Int32Array(u),"mddf.upTileList"),[w,v]=this.upwindDirection(t),y=h.beginComputePass();for(const m of e){const M=[this.heightBuffer,m.layerBuffer,m.upTiles,p];s.dispatch(y,this.alongPipeline,[...M,s.uniform([["u",this.gx],["u",this.gy],["u",c],["u",m.layers.length],["u",this.margin],["u",this.nx],["u",this.ny],["u",0],["i",o.x0],["i",o.y0],["u",0],["u",0],["f",w],["f",v],["f",Math.cos(t)],["f",Math.sin(t)],["f",(this.nx-1)/2],["f",(this.ny-1)/2],["f",0],["f",0]])],c*g*Math.ceil(m.layers.length/G),P)}y.end(),(!this.upTableBuffer||this.upTableBuffer.size!==o.table.byteLength)&&(s.free(this.upTableBuffer),this.upTableBuffer=s.storage(o.table.byteLength,"mddf.upTable")),s.write(this.upTableBuffer,o.table),s.device.queue.submit([h.finish()]);for(const m of b)s.free(m);return s.free(p),o.count=l,c}assemble(e,t,r,i,a,s){var p,w,v,y;const{context:o,inputPlan:u,gx:c,gy:f}=this,l=t.length/3,d=o.upload(t,"assemble.origins"),g=o.uniform([["u",l],["u",u.inputs.length],["u",a],["u",a],["u",c],["u",f],["u",0],["u",0],["u",c],["u",f],["u",c*f],["u",this.margin],["f",Math.cos(i)],["f",Math.sin(i)],["f",i],["f",(this.ny-1)/2],["f",(this.nx-1)/2],["u",r.packTiles],["f",0],["f",0],["i",((p=this.upGrid)==null?void 0:p.x0)??0],["i",((w=this.upGrid)==null?void 0:w.y0)??0],["u",((v=this.upGrid)==null?void 0:v.tw)??0],["u",((y=this.upGrid)==null?void 0:y.th)??0],["u",r.layers.length],["u",0],["u",0],["u",0]]),h=[r.field];if(u.usesHeight&&h.push(this.heightBuffer),h.push(d,r.slotBuffer),u.up.length){if(r.upGrid!==this.upGrid)throw new Error("along-wind tiles of another direction (ensureUpTiles first)");h.push(r.upTiles,this.upTableBuffer)}h.push(s,g);const b=e.beginComputePass();return o.dispatch(b,this.assemblePipeline,h,l*u.inputs.length*a*a),b.end(),d}destroy(){this.destroyed=!0,this.releaseGroups();for(const e of[this.heightBuffer,this.sumsBuffer,this.offsetBuffer,this.tableBuffer,this.trigBuffer,this.scanRaw,this.upTableBuffer])this.context.free(e)}}function or(n){const e=n.inputs;if(!e)throw O("the model metadata has no input manifest (metadata.inputs)");if(e.length!==n.model.input_channels)throw O(`manifest has ${e.length} inputs, model expects ${n.model.input_channels}`);const t=[],r=(u,c,f)=>t.findIndex(l=>l.key===`${u}:${c}:${f}`),i=(u,c,f)=>{r(u.signal,c,f)>=0||t.push({key:`${u.signal}:${c}:${f}`,signal:u.signal,part:c,mode:f,scale:u.scale})},a=[];for(const u of e){if(u.source==="r1")u.part==="dc"?i(u,"dc",0):(i(u,"re",u.mode),i(u,"im",u.mode));else if(u.source==="up")a.includes(u.index)||a.push(u.index);else if(!["geo","solid","coord"].includes(u.source))throw O(`unsupported input source ${u.source}`);if(u.source==="geo"&&![0,1].includes(u.index))throw O(`unsupported geo channel ${u.index}`);if(u.source==="up"&&!(u.index>=0&&u.index<4))throw O(`unsupported up channel ${u.index}`)}for(const u of t)if(u.mode>2)throw O("Fourier modes above 2 are not computed");const s=[...new Set(t.map(u=>u.signal))].sort();if(s.length!==1||s[0]!==0)throw O("the stored channels must be those of the upper distance (signal 0) only");const o=e.some(u=>u.source==="solid"||u.source==="geo");return{inputs:e,stored:t,storedIndex:r,up:a,usesHeight:o}}function Ie(n){const e=Math.round(n);return Math.abs(n%1)===.5&&e%2!==0?e-1:e}let K=null;function ht(){if(K)return K;K=new Float32Array(65536);for(let n=0;n<65536;n++){const e=n&32768?-1:1,t=n>>10&31,r=n&1023;t===0?K[n]=e*r*2**-24:t===31?K[n]=r?NaN:e*(1/0):K[n]=e*(1+r/1024)*2**(t-15)}return K}function ur(n){const e=new Float32Array(n.length),t=ht();for(let r=0;r<n.length;r++)e[r]=t[n[r]];return e}function cr(n){const e=new Uint16Array(n.length),t=new Float32Array(1),r=new Uint32Array(t.buffer);for(let i=0;i<n.length;i++){t[0]=n[i];const a=r[0],s=a>>>16&32768,o=a>>>23&255;let u=a&8388607;if(o===255){e[i]=s|31744|(u?1:0);continue}const c=o-127+15;if(c>=31){e[i]=s|31744;continue}if(c<=0){if(c<-10){e[i]=s;continue}u|=8388608;const l=14-c;let d=u>>>l;u>>>l-1&1&&(d+=1),e[i]=s|d;continue}let f=c<<10|u>>>13;u&4096&&(f+=1),e[i]=s|f}return e}const Ee=`
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
`,fr=`
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
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
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
}`;function Ye(n,e,t){const{enable:r,load:i,save:a}=ne(n);return`${r}
@group(0) @binding(0) var<storage, read> X: array<${n}>;
@group(0) @binding(1) var<storage, read_write> Y: array<${n}>;
var<workgroup> partial: array<f32, ${k}>;
@compute @workgroup_size(${k})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
  let base = wid.x * ${e}u;
  var s = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${k}u) { s += ${i("X[base + i]")}; }
  partial[lid.x] = s;
  workgroupBarrier();
  var stride = ${k/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let mean = partial[0] / ${e}.0;
  workgroupBarrier();

  var q = 0.0;
  for (var i = lid.x; i < ${e}u; i += ${k}u) {
    let d = ${i("X[base + i]")} - mean;
    q += d * d;
  }
  partial[lid.x] = q;
  workgroupBarrier();
  stride = ${k/2}u;
  while (stride > 0u) {
    if (lid.x < stride) { partial[lid.x] += partial[lid.x + stride]; }
    workgroupBarrier();
    stride = stride >> 1u;
  }
  let inverse = inverseSqrt(max(partial[0] / ${e}.0, 0.0) + ${t.toExponential(12)});
  for (var i = lid.x; i < ${e}u; i += ${k}u) {
    Y[base + i] = ${a("("+i("X[base + i]")+" - mean) * inverse")};
  }
}`}const Be=32,qe=1e-5,pe=16;function ne(n){return{enable:n==="f16"?`enable f16;
`:"",load:e=>n==="f16"?`f32(${e})`:e,save:e=>n==="f16"?`f16(${e})`:e}}function lr(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:a,save:s}=ne(e);return`${i}${Ee}
struct P { batch: u32, cin: u32, cout: u32, act: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> W: array<${e}>;
@group(0) @binding(2) var<storage, read> B: array<${e}>;
@group(0) @binding(3) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(4) var<uniform> u: P;
const OB = ${pe}u;
var<workgroup> w: array<f32, ${pe*n.cinMax}>;
@compute @workgroup_size(${k})
fn main(@builtin(workgroup_id) wid: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear workgroup index over a 2-D grid (a single dimension is capped at 65535).
  let wg = wid.x + wid.y * groups.x;
  let blocks = (u.cout + OB - 1u) / OB;
  let perSample = blocks * ${r/k}u;
  if (wg >= u.batch * perSample) { return; }       // whole workgroups only: uniform
  let b = wg / perSample;
  let ob = (wg % perSample) / ${r/k}u;
  let p = (wg % ${r/k}u) * ${k}u + lid.x;
  let o0 = ob * OB;
  for (var k = lid.x; k < OB * u.cin; k += ${k}u) {
    let o = o0 + k / u.cin;
    w[k] = select(0.0, ${a("W[min(o, u.cout - 1u) * u.cin + k % u.cin]")}, o < u.cout);
  }
  workgroupBarrier();
  var acc: array<f32, ${pe}>;
  for (var j = 0u; j < OB; j++) { acc[j] = ${a("B[min(o0 + j, u.cout - 1u)]")}; }
  let xBase = b * u.cin * ${r}u + p;
  for (var i = 0u; i < u.cin; i++) {
    let x = ${a("X[xBase + i * "+r+"u]")};
    for (var j = 0u; j < OB; j++) { acc[j] += w[j * u.cin + i] * x; }
  }
  for (var j = 0u; j < OB; j++) {
    let o = o0 + j;
    if (o >= u.cout) { break; }
    var v = acc[j];
    if (u.act == 1u) { v = gelu(v); }
    Y[(b * u.cout + o) * ${r}u + p] = ${s("v")};
  }
}`}function dr(n){const{store:e,patch:t}=n,r=t*t,{enable:i,load:a,save:s}=ne(e);return`${i}${Ee}
struct P { batch: u32, mid: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> G: array<${e}>;
@group(0) @binding(1) var<storage, read_write> H: array<${e}>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
  if (g >= u.batch * u.mid * ${r}u) { return; }
  let p = g % ${r}u;
  let m = (g / ${r}u) % u.mid;
  let b = g / (${r}u * u.mid);
  let value = ${a("G[(b * 2u * u.mid + m) * "+r+"u + p]")};
  let gateValue = ${a("G[(b * 2u * u.mid + u.mid + m) * "+r+"u + p]")};
  H[g] = ${s("gelu(value * (1.0 / (1.0 + exp(-gateValue))))")};
}`}function hr(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:a,load:s}=ne(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> X: array<${e}>;
@group(0) @binding(1) var<storage, read> tableCos: array<f32>;
@group(0) @binding(2) var<storage, read> tableSin: array<f32>;
@group(0) @binding(3) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(4) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
  if (g >= u.batch * u.channels * ${t*r}u) { return; }
  let k = g % ${r}u;
  let y = (g / ${r}u) % ${t}u;
  let bc = g / ${t*r}u;
  var accRe = 0.0; var accIm = 0.0;
  let base = bc * ${i}u + y * ${t}u;
  for (var x = 0u; x < ${t}u; x++) {
    let v = ${s("X[base + x]")};
    accRe += v * tableCos[x * ${r}u + k];
    accIm += v * tableSin[x * ${r}u + k];
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function gr(n){const{modes2:e}=n;return`
struct P { batch: u32, channels: u32, rows: u32, inner: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableRe: array<f32>;
@group(0) @binding(3) var<storage, read> tableIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
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
}`}function pr(n){const{modes1:e,modes2:t}=n,r=2*e;return`
struct P { batch: u32, channels: u32, stackBase: u32, pad: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> wRe: array<f32>;
@group(0) @binding(3) var<storage, read> wIm: array<f32>;
@group(0) @binding(4) var<storage, read_write> outRe: array<f32>;
@group(0) @binding(5) var<storage, read_write> outIm: array<f32>;
@group(0) @binding(6) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
  let block = ${r*t}u;
  if (g >= u.batch * u.channels * block) { return; }
  let k = g % ${t}u;
  let s = (g / ${t}u) % ${r}u;
  let o = (g / block) % u.channels;
  let b = g / (block * u.channels);
  let half = select(0u, 1u, s >= ${e}u);
  let sp = s - half * ${e}u;
  var accRe = 0.0; var accIm = 0.0;
  let modeArea = ${e*t}u;
  let wBase = ((u.stackBase + half) * u.channels * u.channels + o) * modeArea
            + sp * ${t}u + k;
  let xBase = (b * u.channels * ${r}u + s) * ${t}u + k;
  for (var i = 0u; i < u.channels; i++) {
    let xr = inRe[xBase + i * block];
    let xi = inIm[xBase + i * block];
    let wr = wRe[wBase + i * u.channels * modeArea];
    let wi = wIm[wBase + i * u.channels * modeArea];
    accRe += xr * wr - xi * wi;
    accIm += xr * wi + xi * wr;
  }
  outRe[g] = accRe; outIm[g] = accIm;
}`}function br(n){const{store:e,patch:t,modes2:r}=n,i=t*t,{enable:a,save:s}=ne(e);return`${a}
struct P { batch: u32, channels: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> inRe: array<f32>;
@group(0) @binding(1) var<storage, read> inIm: array<f32>;
@group(0) @binding(2) var<storage, read> tableCos: array<f32>;
@group(0) @binding(3) var<storage, read> tableSin: array<f32>;
@group(0) @binding(4) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(5) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
  if (g >= u.batch * u.channels * ${i}u) { return; }
  let p = g % ${i}u;
  let x = p % ${t}u;
  let y = p / ${t}u;
  let bc = g / ${i}u;
  var acc = 0.0;
  let base = (bc * ${t}u + y) * ${r}u;
  for (var k = 0u; k < ${r}u; k++) {
    acc += inRe[base + k] * tableCos[k * ${t}u + x]
         + inIm[base + k] * tableSin[k * ${t}u + x];
  }
  Y[g] = ${s("acc * "+1/Be)};
}`}function mr(n){const{store:e}=n,{enable:t,load:r,save:i}=ne(e);return`${t}${Ee}
struct P { total: u32, act: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<storage, read> A: array<${e}>;
@group(0) @binding(1) var<storage, read> B: array<${e}>;
@group(0) @binding(2) var<storage, read_write> Y: array<${e}>;
@group(0) @binding(3) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  // Linear index over a 2-D grid: a single dimension is capped at
  // 65535 workgroups, which large batches exceed.
  let g = gid.x + gid.y * groups.x * ${k}u;
  if (g >= u.total) { return; }
  var acc = ${r("A[g]")} + ${r("B[g]")} + ${r("Y[g]")};
  if (u.act == 1u) { acc = gelu(acc); }
  Y[g] = ${i("acc")};
}`}function yr(n){const{store:e,patch:t}=n,r=t*t;return{conv1x1:lr(n),gate:dr(n),instanceNorm:Ye(e,r,qe),instanceNormScaled:Ye(e,r,qe/(Be*Be)),forwardColumns:hr(n),rowMix:gr(n),spectralMix:pr(n),inverseColumns:br(n),residual:mr(n)}}function wr(n,e,t){const r=2*e,i=[];for(let g=0;g<e;g++)i.push(g);for(let g=n-e;g<n;g++)i.push(g);const a=new Float32Array(n*t),s=new Float32Array(n*t);for(let g=0;g<n;g++)for(let h=0;h<t;h++){const b=2*Math.PI*g*h/n;a[g*t+h]=Math.cos(b),s[g*t+h]=-Math.sin(b)}const o=new Float32Array(r*n),u=new Float32Array(r*n);for(let g=0;g<r;g++)for(let h=0;h<n;h++){const b=2*Math.PI*i[g]*h/n;o[g*n+h]=Math.cos(b),u[g*n+h]=-Math.sin(b)}const c=new Float32Array(n*r),f=new Float32Array(n*r);for(let g=0;g<n;g++)for(let h=0;h<r;h++){const b=2*Math.PI*i[h]*g/n;c[g*r+h]=Math.cos(b)/n,f[g*r+h]=Math.sin(b)/n}const l=new Float32Array(t*n),d=new Float32Array(t*n);for(let g=0;g<t;g++){const h=(g===0?1:2)/n;for(let b=0;b<n;b++){const p=2*Math.PI*g*b/n;l[g*n+b]=h*Math.cos(p),d[g*n+b]=-h*Math.sin(p)}}return{forwardCos:a,forwardSin:s,rowRe:o,rowIm:u,inverseRowRe:c,inverseRowIm:f,inverseColCos:l,inverseColSin:d}}function xr(n,e,t){const r=n.tensors[t];if(!r)throw O(`missing tensor ${t}`);return ur(new Uint16Array(e,r.offset,r.count))}class vr{constructor(e,t,r,i){const a=t.model;if(this.context=e,this.metadata=t,this.width=a.width,this.depth=a.layers,this.inputChannels=a.input_channels,this.outputChannels=a.output_channels,this.patch=t.inference.patch[0],this.modes1=a.modes[0],this.modes2=a.modes[1],this.store=e.useF16?"f16":"f32",this.elementBytes=this.store==="f16"?2:4,t.inference.patch[0]!==t.inference.patch[1])throw O("only square patches are supported");if(this.patch*this.patch%k)throw O(`the patch area must be a multiple of ${k}`);const s={store:this.store,patch:this.patch,modes1:this.modes1,modes2:this.modes2,cinMax:Math.max(this.inputChannels,2*this.width)};this.pipelines={};for(const[c,f]of Object.entries(yr(s)))this.pipelines[c]=e.pipeline(f);this.contractPipeline=e.pipeline(fr);const o=c=>xr(t,r,c);this.tables={};for(const[c,f]of Object.entries(wr(this.patch,this.modes1,this.modes2)))this.tables[c]=e.upload(f,`fno.table.${c}`);this.weights={};const u=(c,f)=>{const l=o(f);this.weights[c]=this.store==="f16"?e.upload(cr(l),`fno.${c}`):e.upload(l,`fno.${c}`)};u("p1w","p.mlp1.weight"),u("p1b","p.mlp1.bias"),u("p2w","p.mlp2.weight"),u("p2b","p.mlp2.bias"),u("q1w","q.mlp1.weight"),u("q1b","q.mlp1.bias"),u("q2w","q.mlp2.weight"),u("q2b","q.mlp2.bias");for(let c=0;c<this.depth;c++)u(`m1w${c}`,`mlp_layers.${c}.mlp1.weight`),u(`m1b${c}`,`mlp_layers.${c}.mlp1.bias`),u(`m2w${c}`,`mlp_layers.${c}.mlp2.weight`),u(`m2b${c}`,`mlp_layers.${c}.mlp2.bias`),u(`lw${c}`,`w_layers.${c}.weight`),u(`lb${c}`,`w_layers.${c}.bias`);this.buildSpectralWeights(o),this.allocate(i),this.passes=new Map}buildSpectralWeights(e){const{context:t,metadata:r}=this,i=r.tucker;let a=i.core_shape.slice(),s=t.upload(e(`${i.core}.re`),"tucker.core.re"),o=t.upload(e(`${i.core}.im`),"tucker.core.im");for(const c of i.factors){const[f,l]=c.shape;if(a[c.mode]!==l)throw O(`factor ${c.name} does not match the core`);const d=a.slice();d[c.mode]=f;const g=d.reduce((x,_)=>x*_,1),h=d.slice(c.mode+1).reduce((x,_)=>x*_,1),b=t.storage(g*4,"tucker.re"),p=t.storage(g*4,"tucker.im"),w=t.upload(e(`${c.name}.re`),"tucker.f"),v=t.upload(e(`${c.name}.im`),"tucker.f"),y=t.uniform([["u",d[0]],["u",d[1]],["u",d[2]],["u",d[3]],["u",d[4]],["u",c.mode],["u",f],["u",l],["u",h],["u",0],["u",g],["u",0]]),m=t.device.createCommandEncoder(),M=m.beginComputePass();t.dispatch(M,this.contractPipeline,[s,o,w,v,b,p,y],g),M.end(),t.device.queue.submit([m.finish()]),t.free(s),t.free(o),t.free(w),t.free(v),s=b,o=p,a=d}t.releaseScratch();const u=[2*this.depth,this.width,this.width,this.modes1,this.modes2];if(a.join()!==u.join())throw O(`spectral stack is ${a} but ${u} was expected`);this.spectralRe=s,this.spectralIm=o}allocate(e){const{context:t}=this,r=this.patch*this.patch,i=this.width,a=2*this.modes1,s=(d,g)=>t.storage(e*d*r*this.elementBytes,g),o=(d,g)=>t.storage(e*i*d*4,g),u=s(Math.max(4*i,this.inputChannels,this.outputChannels),"fno.large"),c=s(2*i,"fno.medium"),f=o(this.patch*this.modes2,"fno.xwRe"),l=o(this.patch*this.modes2,"fno.xwIm");this.buffers={x:s(i,"fno.x"),input:u,t2:u,gates:u,spectral:u,output:u,wide:c,t1:c,hidden:c,local:c,xRe:f,xIm:l,yRe:o(a*this.modes2,"fno.yRe"),yIm:o(a*this.modes2,"fno.yIm"),zRe:o(a*this.modes2,"fno.zRe"),zIm:o(a*this.modes2,"fno.zIm"),wRe:f,wIm:l}}get inputBuffer(){return this.buffers.input}convThreads(e,t){return e*Math.ceil(t/pe)*this.patch*this.patch}encode(e,t){this.passes.has(t)||this.passes.set(t,this.dispatches(t));const r=e.beginComputePass();for(const i of this.passes.get(t))this.context.replay(r,i);return r.end(),this.buffers.output}dispatches(e){const{context:t,buffers:r,pipelines:i,tables:a}=this,s=this.width,o=this.patch*this.patch,u=2*this.modes1,c=[],f=(d,g,h,b)=>{c.push(t.prepared(d,[...g,t.keptUniform(h)],t.workgroups(b)))},l=(d,g,h=i.instanceNorm)=>{c.push(t.prepared(h,[d,g],[e*s]))};f(i.conv1x1,[r.input,this.weights.p1w,this.weights.p1b,r.wide],[["u",e],["u",this.inputChannels],["u",2*s],["u",1]],this.convThreads(e,2*s)),f(i.conv1x1,[r.wide,this.weights.p2w,this.weights.p2b,r.x],[["u",e],["u",2*s],["u",s],["u",0]],this.convThreads(e,s));for(let d=0;d<this.depth;d++)l(r.x,r.t1),f(i.forwardColumns,[r.t1,a.forwardCos,a.forwardSin,r.xRe,r.xIm],[["u",e],["u",s],["u",0],["u",0]],e*s*this.patch*this.modes2),f(i.rowMix,[r.xRe,r.xIm,a.rowRe,a.rowIm,r.yRe,r.yIm],[["u",e],["u",s],["u",u],["u",this.patch]],e*s*u*this.modes2),f(i.spectralMix,[r.yRe,r.yIm,this.spectralRe,this.spectralIm,r.zRe,r.zIm],[["u",e],["u",s],["u",2*d],["u",0]],e*s*u*this.modes2),f(i.rowMix,[r.zRe,r.zIm,a.inverseRowRe,a.inverseRowIm,r.wRe,r.wIm],[["u",e],["u",s],["u",this.patch],["u",u]],e*s*this.patch*this.modes2),f(i.inverseColumns,[r.wRe,r.wIm,a.inverseColCos,a.inverseColSin,r.t2],[["u",e],["u",s],["u",0],["u",0]],e*s*o),l(r.t2,r.t1,i.instanceNormScaled),f(i.conv1x1,[r.t1,this.weights[`m1w${d}`],this.weights[`m1b${d}`],r.gates],[["u",e],["u",s],["u",4*s],["u",0]],this.convThreads(e,4*s)),f(i.gate,[r.gates,r.hidden],[["u",e],["u",2*s],["u",0],["u",0]],e*2*s*o),f(i.conv1x1,[r.hidden,this.weights[`m2w${d}`],this.weights[`m2b${d}`],r.spectral],[["u",e],["u",2*s],["u",s],["u",0]],this.convThreads(e,s)),f(i.conv1x1,[r.x,this.weights[`lw${d}`],this.weights[`lb${d}`],r.local],[["u",e],["u",s],["u",s],["u",0]],this.convThreads(e,s)),f(i.residual,[r.spectral,r.local,r.x],[["u",e*s*o],["u",d<this.depth-1?1:0],["u",0],["u",0]],e*s*o);return f(i.conv1x1,[r.x,this.weights.q1w,this.weights.q1b,r.wide],[["u",e],["u",s],["u",2*s],["u",1]],this.convThreads(e,2*s)),f(i.conv1x1,[r.wide,this.weights.q2w,this.weights.q2b,r.output],[["u",e],["u",2*s],["u",this.outputChannels],["u",0]],this.convThreads(e,this.outputChannels)),c}}const gt="1.0e-6",Mr=Number(gt),$r="1.0e-5",be=n=>({rowX0:n+1,rowLen:2*n+1,slots:3*n+1});function kr(n,e,t){const{half:r,values:i,gy:a,gz:s,gx:o,gridX0:u,gridY0:c,theta:f,nx:l,ny:d,layerMap:g,predicted:h,firstLayer:b,compactTable:p}=n,w=be(a),v=ht(),y=s*o*A,m=new Int32Array(t-e),M=new Int32Array(t-e),x=h.length;for(let $=e;$<t;$++){i.fill(0,$*y,($+1)*y);const I=p[w.rowLen+$],T=p[w.rowX0+$],R=p[$];m[$-e]=T,M[$-e]=T+I;for(let D=0;D<x;D++){const W=(R+D*I)*A,me=(($*s+h[D])*o+T)*A;for(let Q=0;Q<A*I;Q++)i[me+Q]=v[r[W+Q]]}}if(n.interpolate){const $=(d-1)/2,I=(l-1)/2,T=Math.cos(f),R=Math.sin(f),D=new Float32Array(o);for(let W=e;W<t;W++){for(let X=0;X<o;X++){const z=u+X-I,ee=c+W-$,H=I+z*T-ee*R,ye=$+z*R+ee*T,ie=Ie(H),se=Ie(ye);D[X]=ie>=0&&ie<l&&se>=0&&se<d?g[se*l+ie]:0}const me=m[W-e],Q=M[W-e];for(let X=0;X<h.length-1;X++){const z=h[X],ee=h[X+1];for(let H=z+1;H<ee;H++){const ye=(H-z)/(ee-z),ie=b+z,se=b+H,Fe=(W*s+z)*o*A,Ue=(W*s+ee)*o*A,bt=(W*s+H)*o*A;for(let le=me;le<Q;le++){const Oe=D[le],mt=Oe>ie,yt=Oe>se;for(let we=0;we<A;we++){const ae=A*le+we;i[bt+ae]=mt&&!yt?i[Ue+ae]:i[Fe+ae]+ye*(i[Ue+ae]-i[Fe+ae])}}}}}}let _=0;for(let $=e*y;$<t*y;$+=A)if(i[$+3]>Mr){const I=i[$]*i[$]+i[$+1]*i[$+1]+i[$+2]*i[$+2];I>_&&(_=I)}return{maxSpeed2:_}}const _r=n=>`${n==="f16"?`enable f16;
`:""}
struct P {
  batch: u32, py: u32, channels: u32, px: u32,
  gy: u32, outFirst: u32, pad0: u32, pad1: u32,
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
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${k}u;
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
  let cell = (table[cy] + table[3u * u.gy + 1u + cz] * len + cx - table[u.gy + 1u + cy]) * ${A}u;
  sums[cell] += s0; sums[cell + 1u] += s1; sums[cell + 2u] += s2; sums[cell + 3u] += total;
}`,Ir=`
struct P { count: u32, c0: f32, c1: f32, c2: f32, s0: f32, s1: f32, s2: f32, pad0: f32 };
@group(0) @binding(0) var<storage, read> sums: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed: array<u32>;
@group(0) @binding(2) var<uniform> u: P;
@compute @workgroup_size(${k})
fn main(@builtin(global_invocation_id) gid: vec3<u32>,
        @builtin(num_workgroups) groups: vec3<u32>) {
  let g = gid.x + gid.y * groups.x * ${k}u;
  if (g >= u.count) { return; }
  let w = sums[g * ${A}u + 3u];
  var a = vec3<f32>(0.0);
  var stored = 0.0;
  if (w > ${gt}) {
    a = vec3<f32>(sums[g * ${A}u], sums[g * ${A}u + 1u], sums[g * ${A}u + 2u]) / w
        * vec3<f32>(u.s0, u.s1, u.s2) + vec3<f32>(u.c0, u.c1, u.c2);
    stored = max(w, ${$r});
  }
  packed[g * 2u] = pack2x16float(vec2<f32>(a.x, a.y));
  packed[g * 2u + 1u] = pack2x16float(vec2<f32>(a.z, stored));
}`,Br=Math.ceil(Gt/J+Wt+Math.SQRT2),he=8,Sr=.5;function Xe(n,e,t,r){if(e<=t)return[n];const i=Math.ceil((e-t)/r)+1,a=[];for(let s=0;s<i;s++)a.push(n+s*t-Ie(s*(i*t-e)/(i-1)));return a}function Tr(n,e,t){let r=1/0,i=-1/0;const a=s=>{r=Math.min(r,s),i=Math.max(i,s)};for(let s=0;s<n.length;s++){const o=n[s],u=n[(s+1)%n.length];o[0]>=e&&o[0]<=t&&a(o[1]);for(const c of[e,t])(o[0]-c)*(u[0]-c)<0&&a(o[1]+(c-o[0])/(u[0]-o[0])*(u[1]-o[1]))}return r<=i?[r,i]:null}function Ar(n,e){const t=Xt(n)>0?1:-1,r=n.map((i,a)=>{const s=n[(a+1)%n.length],o=Math.hypot(s[0]-i[0],s[1]-i[1])||1;return[t*(s[1]-i[1])/o,-t*(s[0]-i[0])/o]});return n.map(([i,a],s)=>{const o=r[(s+n.length-1)%n.length],u=r[s],c=e/(1+o[0]*u[0]+o[1]*u[1]);return[i+c*(o[0]+u[0]),a+c*(o[1]+u[1])]})}function Cr(n,e){const t=e[0]-n[0],r=e[1]-n[1],i=Math.hypot(t,r)||1,a=t/i,s=r/i,o=-s,u=a,c=.5*Sr*i,f=[n[0]-a*he,n[1]-s*he],l=[e[0]+a*he,e[1]+s*he];return[[f[0]+o*c,f[1]+u*c],[l[0]+o*c,l[1]+u*c],[l[0]-o*c,l[1]-u*c],[f[0]-o*c,f[1]-u*c]]}function Pr(n,e,t,r,i,a){const s=ft(e,t,r),{toWind:o,toCity:u}=s,c=n.map(o),f=[[-.5,-.5],[t-.5,-.5],[t-.5,r-.5],[-.5,r-.5]].map(o),l=zt(Ar(c,Br),f);if(l.length<3)throw new Error("the corridor does not touch the city");const d=Math.floor(Math.min(...l.map(w=>w[0]))),g=Math.floor(Math.min(...l.map(w=>w[1]))),h=Math.ceil(Math.max(...l.map(w=>w[0])))-d+1,b=Math.ceil(Math.max(...l.map(w=>w[1])))-g+1,p=[];for(const w of Xe(d,h,i,a)){const v=Tr(l,w,w+i-1);if(!v)continue;const y=Math.floor(v[0]),m=Math.max(i,Math.ceil(v[1])-y+1);for(const M of Xe(y,m,i,a))p.push([M,w])}return{theta:e,gx:h,gy:b,gridX0:d,gridY0:g,patches:p,toWind:o,toCity:u}}const Rr=n=>Math.ceil(n*Math.SQRT2),ze=4*1024**3,Er=128<<20,Lr=2,je=6e4,Fr=4,He=1;function Ur(n,e,t){let r=1/0,i=-1/0,a=1/0,s=-1/0,o=1/0,u=-1/0;for(const[c,f,l]of n)r=Math.min(r,c-e.gridY0),i=Math.max(i,c-e.gridY0+t),a=Math.min(a,l-e.gridX0),s=Math.max(s,l-e.gridX0+t),o=Math.min(o,f-N),u=Math.max(u,f-N+1);return{ry0:Math.max(0,r),ry1:Math.min(e.gy,i),rx0:Math.max(0,a),rx1:Math.min(e.gx,s),rz0:o,rz1:u}}function Or(n){const e=[];for(let t=N;t<=fe;t++)((t-N)%n===0||t===fe)&&e.push(t);return e}class Ln{constructor(e,t,r,{batchSize:i,layerStride:a}){if(this.context=e,this.metadata=t,this.patch=t.inference.patch[0],this.batchSize=i,(oe-1)%a!==0)throw new Error(`layer stride ${a} does not divide the ${oe-1} layer steps of the band`);this.layerStride=a,this.bufferLimit=Math.min(Er,e.device.limits.maxStorageBufferBindingSize),this.fno=new vr(e,t,r,i),this.blendPipeline=e.pipeline(_r(this.fno.store)),this.finalizePipeline=e.pipeline(Ir),this.inputPlan=or(t),this.city=null,this.generation=0,this.fieldWorkers=null,this.fieldJobs=new Map,this.fieldJobCount=0,this.valuesRing=new ot}cancel(){this.generation+=1}destroy(){var e;this.cancel(),(e=this.city)==null||e.mddf.destroy(),this.city=null,this.stopFieldWorkers(t=>t.cancel())}setCity(e,t=null){var c;const{layers:r,ny:i,nx:a}=e;this.cancel(),(c=this.city)==null||c.mddf.destroy();const s=new ar(this.context,e,Rr(this.patch),this.fno.store,this.inputPlan),o=t??Or(this.layerStride),u=s.gx*s.gy*o.length*s.storedBytesPerCellLayer;if(u>ze){s.destroy(),this.city=null;const f=(u/2**20).toFixed(0),l=ze/2**20;throw new ce(ue.TOO_LARGE,`the city's stored field needs ${f} MiB, above the ${l} MiB budget`)}return this.city={mddf:s,ny:i,nx:a,layerMap:r,predictedLayers:o,ready:null,progress:0,groups:null},this.city.ready=this.scanCity(this.city),this.city.ready.catch(()=>{}),this.city}async scanCity(e){const{mddf:t}=e,r=t.planGroups(e.predictedLayers,this.bufferLimit);t.allocate(r),e.progress=0;for(let i=0;i<r.length;i++){if(t.destroyed)return e;await t.scan(r[i],a=>{e.progress=(i+a)/r.length})}return e.progress=1,t.destroyed||(e.groups=r),e}async predict(e,t,r,i){const a=++this.generation,s=()=>a!==this.generation,{context:o}=this,u=this.city,c=i.polygon??Cr(e,t),{overlap:f}=i,l=Math.max(1,Math.round(this.patch*(1-f))),d=Pr(c,r,u.nx,u.ny,this.patch,l),g=performance.now(),{mddf:h}=u;if(await u.ready,s()||h.destroyed||(h.upWind&&h.ensureUpTiles(u.groups,r,d.patches,this.patch,()=>{var y;return(y=i.onStage)==null?void 0:y.call(i,"geometry")})&&(await o.device.queue.onSubmittedWorkDone(),o.releaseScratch()),s()))return null;const b=Nr(d,this.patch,u.predictedLayers.map(v=>v-N)),p=await this.runNetwork(u,d,b,r,i,s);if(!p)return null;const w=await this.finish(u,d,b,p,r,s);return w?{...w,milliseconds:performance.now()-g}:null}async runNetwork(e,t,r,i,a,s){var w;const{context:o,patch:u}=this,c=o.storage(r.count*A*4,"predictor.sums"),f=o.upload(r.table,"predictor.rows"),l=[],d=e.predictedLayers,g=new Map(d.map(v=>[v,t.patches.length])),h=Math.max(1,a.sweepEvery||1),b=new Set(d.filter((v,y)=>y%h===0||y===d.length-1)),p=()=>(o.free(c),o.free(f),null);for(const v of e.groups){if(s())return p();(w=a.onStage)==null||w.call(a,"network");const y=[];for(const m of v.layers)for(const[M,x]of t.patches)y.push([M,m,x]);for(let m=0;m<y.length;m+=this.batchSize){const M=y.slice(m,m+this.batchSize),x=new Int32Array(M.flat()),_=o.device.createCommandEncoder(),$=e.mddf.assemble(_,x,v,i,u,this.fno.inputBuffer),I=this.fno.encode(_,M.length);if(this.encodeBlend(_,I,$,c,f,M.length,Ur(M,t,u),t),o.device.queue.submit([_.finish()]),l.push(o.device.queue.onSubmittedWorkDone()),l.length>Lr&&await l.shift(),o.free($),o.releaseScratch(),a.onLayer)for(const[,T]of M)g.set(T,g.get(T)-1),g.get(T)===0&&b.has(T)&&this.readSweptLayer(c,T,r,t,a,s);if(s())return p()}}return await Promise.all(l),o.free(f),c}encodeBlend(e,t,r,i,a,s,o,u){const{context:c,patch:f}=this,{gy:l}=u,{ry0:d,ry1:g,rx0:h,rx1:b,rz0:p,rz1:w}=o;if(!(g>d&&b>h))return;const v=e.beginComputePass();c.dispatch(v,this.blendPipeline,[t,r,i,a,c.uniform([["u",s],["u",f],["u",this.metadata.model.output_channels],["u",f],["u",l],["u",N],["u",0],["u",0],["u",d],["u",p],["u",h],["u",g-d],["u",w-p],["u",b-h],["i",u.gridY0],["i",u.gridX0],["f",this.metadata.inference.blend_window_minimum],["f",0],["f",0],["f",0]])],(g-d)*(w-p)*(b-h)),v.end()}readSweptLayer(e,t,r,i,a,s){const o=be(i.gy);this.readLayer(e,r.table[o.slots+t-N],r.table,i).then(u=>{s()||a.onLayer(t,u,i,this.metadata.target)}).catch(()=>{})}async readLayer(e,t,r,{gx:i,gy:a}){const s=be(a),o=A*4,u=(c,f)=>{for(let l=0;l<a;l++){const d=r[s.rowLen+l];d&&c.copyBufferToBuffer(e,(r[l]+t*d)*o,f,(l*i+r[s.rowX0+l])*o,d*o)}};return this.context.readBack(a*i*o,u,"layer staging",c=>new Float32Array(c.slice(0)))}async finish(e,t,r,i,a,s){const{context:o}=this,{gx:u,gy:c}=t,f=oe,l=u*c*f,{predicted:d}=r,g=this.metadata.target,h=o.storage(Math.max(8,r.count*A*2),"predictor.packed"),b=o.device.createCommandEncoder(),p=b.beginComputePass();o.dispatch(p,this.finalizePipeline,[i,h,o.uniform([["u",r.count],["f",g.center[0]],["f",g.center[1]],["f",g.center[2]],["f",g.scale[0]],["f",g.scale[1]],["f",g.scale[2]],["f",0]])],r.count),p.end(),o.device.queue.submit([b.finish()]),await o.device.queue.onSubmittedWorkDone(),o.free(i);const w=Yt(),v=await o.readHalf(h,r.count*A,w);if(o.free(h),o.releaseScratch(),s())return null;let y;w?y=new Float32Array(this.valuesRing.next(l*A*4),0,l*A):y=new Float32Array(l*A);const m={half:v,values:y,gy:c,gz:f,gx:u,gridX0:t.gridX0,gridY0:t.gridY0,theta:a,nx:e.nx,ny:e.ny,layerMap:e.layerMap,predicted:d,firstLayer:N,interpolate:this.layerStride>1,compactTable:r.table},M=w?await this.postInWorkers(m,c):await Dr(m,c);if(s())return null;let x=0;for(const _ of M)_.maxSpeed2>x&&(x=_.maxSpeed2);return{maxSpeed2:x,layout:t,gx:u,gy:c,gz:f,firstLayer:N,layerStride:this.layerStride,values:y,valuesPerCell:A}}stopFieldWorkers(e){for(const t of this.fieldWorkers??[])t.terminate();this.fieldWorkers=null;for(const t of[...this.fieldJobs.values()])e(t)}failFieldWorkers(e){this.stopFieldWorkers(t=>t.answer({error:e}))}startFieldWorkers(){const e=Math.max(1,Math.min(Fr,Math.floor(qt()/3)));return Array.from({length:e},(t,r)=>{const i=new Worker(new URL("/cityffdv2-demo/assets/field_worker-CNcnW6Nn.js",import.meta.url),{type:"module"});return i.onmessage=({data:a})=>{var s;return(s=this.fieldJobs.get(`${a.id}:${r}`))==null?void 0:s.answer(a)},i.onerror=a=>{a.preventDefault(),this.failFieldWorkers(`field worker failed: ${a.message||"it did not load"}`)},i})}postInWorkers(e,t){this.fieldWorkers??(this.fieldWorkers=this.startFieldWorkers());const r=++this.fieldJobCount,i=this.fieldWorkers,a=i.length,s={...e,half:e.half.buffer,halfLength:e.half.length,values:e.values.buffer,valuesLength:e.values.length};return Promise.all(i.map((o,u)=>new Promise((c,f)=>{const l=`${r}:${u}`,d=()=>{clearTimeout(g),this.fieldJobs.delete(l)},g=setTimeout(()=>{this.failFieldWorkers(`field worker did not answer in ${je/1e3} s`)},je);this.fieldJobs.set(l,{answer:h=>{d(),h.error?f(new Error(h.error)):c(h)},cancel:()=>{d(),c(null)}}),o.postMessage({id:r,p:s,yLo:Math.floor(u*t/a),yHi:Math.floor((u+1)*t/a)})})))}}function Nr(n,e,t){const{gx:r,gy:i}=n,a=new Int32Array(i).fill(r),s=new Int32Array(i).fill(0);for(const[f,l]of n.patches){const d=Math.max(0,f-n.gridY0),g=Math.min(i,f-n.gridY0+e),h=Math.max(0,l-n.gridX0),b=Math.min(r,l-n.gridX0+e);for(let p=d;p<g;p++)h<a[p]&&(a[p]=h),b>s[p]&&(s[p]=b)}const o=be(i),u=new Uint32Array(o.slots+oe).fill(4294967295,o.slots);let c=0;for(let f=0;f<i;f++){const l=Math.max(0,s[f]-a[f]);u[f]=c,u[o.rowX0+f]=l?a[f]:0,u[o.rowLen+f]=l,c+=l*t.length}return u[i]=c,t.forEach((f,l)=>{u[o.slots+f]=l}),{table:u,count:c,predicted:t}}async function Dr(n,e){const t=[];let r=performance.now();for(let i=0;i<e;i+=He)t.push(kr(n,i,Math.min(e,i+He))),performance.now()-r>nt&&(await at(),r=performance.now());return t}const pt={icefire:"bde7dbbae5dab7e3d9b4e1d9b2dfd8afddd7acdbd7a9d9d6a7d7d5a4d5d5a1d3d49ed1d39bcfd398cdd295cbd293cad190c8d18dc6d08ac4d087c2cf84c1cf81bfcf7ebdce7bbbce78b9ce75b8ce72b6ce6eb4cd6bb2cd68b0cd65afcd63adcd60abcd5da9cd5aa7cd58a5cd55a3cd53a2cd50a0cd4e9ecd4c9ccd499ace4798ce4596ce4394ce4192ce3f90ce3e8ecf3c8ccf3a89cf3987cf3885d03783d03781d0377fd0377cd0377ad03878cf3975cf3a73ce3b71cd3d6ecc3e6ccb3f69c94167c74265c54363c34560c1465ebe475cbc475ab94858b64956b34954b04952ad4a50a94a4fa5494da1494c9e494a9a48499647479247468e46458a45438644428243417f42407b413e773f3d743e3c703d3b6d3c3a693b386639376338365f37355c363459343356333153323050312f4d302e4a2e2d482d2c452c2b422b2a402a293d29283b28273927263626253425253224243024232e23222d22222b222129212028212026202025201f241f1f231f1f211f1e211f1e201f1e1f1f1e1e1f1e1e201e1e211e1e221e1e231e1e251e1f261e1f271e1f291e202a1e202c1e212d1f212f1f22311f233320233520243720253921263b21273d22283f222841232943232a46242b48242c4a252e4d252f4f26305227315427325728335a28345c29355f2936622937642a38672a396a2b3a6d2b3b702b3c722c3d752c3e782c3f7b2d407e2d40812d41842d42872d428a2e438d2e43902e44932e44962e44992e449c2f459f2f44a22f44a52f44a83044ab3043ae3143b13242b33341b63441b93540bb363fbe373ec0393dc33a3cc53c3cc73d3bc93f3acc4139ce4338d04537d24737d34936d54b35d74e35d95034da5334dc5534de5733df5a33e15c33e25f33e36233e56433e66734e76a34e86d35e96f36ea7238eb753aec783bed7b3eed7e40ee8142ef8445ef8748f0894bf18c4ef18f51f29255f29558f3985bf39a5ff49d63f5a066f5a36af6a56df6a871f7ab75f7ae79f8b07cf8b380f9b684fab887fabb8bfbbe8ffbc192fcc396fcc69afdc99efdcca1fecea5fed1a9ffd4ac",inferno:"00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4",turbo:"30123b32154333184a341b51351e5836215f37246638276d392a733a2d793b2f803c32863d358b3e38913f3b973f3e9c4040a24143a74146ac4249b1424bb5434eba4451bf4454c34456c74559cb455ccf455ed34661d64664da4666dd4669e0466be3476ee64771e94773eb4776ee4778f0477bf2467df44680f64682f84685fa4687fb458afc458cfd448ffe4391fe4294ff4196ff4099ff3e9bfe3d9efe3ba0fd3aa3fc38a5fb37a8fa35abf833adf731aff52fb2f42eb4f22cb7f02ab9ee28bceb27bee925c0e723c3e422c5e220c7df1fc9dd1ecbda1ccdd81bd0d51ad2d21ad4d019d5cd18d7ca18d9c818dbc518ddc218dec018e0bd19e2bb19e3b91ae4b61ce6b41de7b21fe9af20eaac22ebaa25eca727eea42aefa12cf09e2ff19b32f29835f39438f4913cf58e3ff68a43f78746f8844af8804ef97d52fa7a55fa7659fb735dfc6f61fc6c65fd6969fd666dfe6271fe5f75fe5c79fe597dff5680ff5384ff5188ff4e8bff4b8fff4992ff4796fe4499fe429cfe409ffd3fa1fd3da4fc3ca7fc3aa9fb39acfb38affa37b1f936b4f836b7f735b9f635bcf534bef434c1f334c3f134c6f034c8ef34cbed34cdec34d0ea34d2e935d4e735d7e535d9e436dbe236dde037dfdf37e1dd37e3db38e5d938e7d739e9d539ebd339ecd13aeecf3aefcd3af1cb3af2c93af4c73af5c53af6c33af7c13af8be39f9bc39faba39fbb838fbb637fcb336fcb136fdae35fdac34fea933fea732fea431fea130fe9e2ffe9b2dfe992cfe962bfe932afe9029fd8d27fd8a26fc8725fc8423fb8122fb7e21fa7b1ff9781ef9751df8721cf76f1af66c19f56918f46617f36315f26014f15d13f05b12ef5811ed5510ec530feb500eea4e0de84b0ce7490ce5470be4450ae2430ae14109df3f08dd3d08dc3b07da3907d83706d63506d43305d23105d02f05ce2d04cc2b04ca2a04c82803c52603c32503c12302be2102bc2002b91e02b71d02b41b01b21a01af1801ac1701a91601a71401a41301a112019e10019b0f01980e01950d01920b018e0a018b09028808028507028106027e05027a0403",viridis:"44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"},ve=new Map;function Wr(n){if(!ve.has(n)){const e=pt[n],t=new Uint8Array(256*3);for(let r=0;r<256*3;r++)t[r]=parseInt(e.substr(r*2,2),16);ve.set(n,t)}return ve.get(n)}function Gr(n,e){const t=Wr(pt[n]?n:"viridis"),r=Math.min(1,Math.max(0,e))*255,i=Math.floor(r),a=Math.min(255,i+1),s=r-i;return[t[i*3]*(1-s)+t[a*3]*s,t[i*3+1]*(1-s)+t[a*3+1]*s,t[i*3+2]*(1-s)+t[a*3+2]*s]}const Yr=new Set(["u","v","w"]),Fn=[{id:"speed",label:"Speed",legend:"|V| — speed",unit:"m/s",ramp:"turbo"},{id:"tke",label:"TKE",legend:"TKE — turbulence",unit:"m²/s²",ramp:"viridis",notInV2:!0},{id:"T",label:"Temp",legend:"Temperature",unit:"°C",ramp:"inferno",notInV2:!0},{id:"u",label:"u",legend:"u — along wind",unit:"m/s",ramp:"icefire"},{id:"v",label:"v",legend:"v — across wind",unit:"m/s",ramp:"icefire"},{id:"w",label:"w",legend:"w — vertical",unit:"m/s",ramp:"icefire"}],te={u:0,w:1,v:2,T:3,tke:4};function Le(n,e,t,r){const i=n[e+te.u]*r,a=n[e+te.v]*r;switch(t){case"u":return i;case"v":return a;case"w":return n[e+te.w]*r;case"speed":{const s=n[e+te.w]*r;return Math.sqrt(i*i+a*a+s*s)}case"T":return n[e+te.T];case"tke":return n[e+te.tke]*r*r;default:return 0}}function Un(n,e,t,r,i){if(e==="T")return n.fixed.T.slice();const s=(n.quantiles[r]||n.quantiles[Object.keys(n.quantiles)[0]])[e],o=Math.min(s.length-1,Math.max(0,Math.round(t))),u=s[o]*(e==="tke"?i*i:i);return n.shape[e]==="symmetric"?[-u,u]:[0,u]}function On(n,e){const t=n.solid.length,r=new Float32Array(t*4);for(let i=0;i<t;i++){const a=i*4;r[a]=Le(n.values,i*5,e,1),r[a+1]=1}return It(r)}function Nn(n){const e=new Uint8Array(1024);for(let t=0;t<256;t++){const[r,i,a]=Gr(n,t/255);e[t*4]=r,e[t*4+1]=i,e[t*4+2]=a,e[t*4+3]=255}return e}function Dn(n,e){let t=1/0,r=-1/0;for(let i=0;i<n.solid.length;i++){if(n.solid[i]===1)continue;const a=Le(n.values,i*5,e,1);a<t&&(t=a),a>r&&(r=a)}return[t,r]}function Wn([n,e],t){if(t==="T")return e>n?[n,e]:null;if(Yr.has(t)){const r=Math.max(-n,e);return r>0?[-r,r]:null}return e>0?[0,e]:null}function qr(n,e,t){const r=(n.grid.nx-1)/2,i=(n.grid.ny-1)/2,a=n.originX+e-r,s=n.originY+t-i,o=Math.cos(n.theta),u=Math.sin(n.theta);return[(r+a*o-s*u+.5)*4,(i+a*u+s*o+.5)*4]}function Gn(n){const e=n.values.slice(),t=n.settings.speedMps/n.referenceSpeed;for(let r=0;r<e.length;r+=5)e[r]*=t,e[r+1]*=t,e[r+2]*=t,e[r+4]*=t*t;return e}const Me=U/2;function Yn(n){const{grid:e,theta:t}=n,r=tt(n),i=new Float32Array(5),a=(o,u,c)=>Ot(n,e.nx,e.ny,o,u,c,i)!==null,s={plane:null,variable:"speed",wind(o,u,c,f){if(!a(o,u,c))return!1;Nt(i,t,f);const l=s.plane;return l!=null&&l.flat&&l.kind==="h"&&(f[2]=0),l!=null&&l.flat&&l.kind==="v"&&(f[0]=i[0]*Math.cos(t),f[1]=i[0]*Math.sin(t)),!0},inside:(o,u,c)=>c>=Me&&c<=r&&!Dt(e,o,u,c)&&a(o,u,c),value:()=>Le(i,0,s.variable,1),valueAt:(o,u,c)=>a(o,u,c)?s.value():0,spawn(o,u){var c,f;for(let l=0;l<20;l++){if(u[0]=o()*e.nx*B,u[1]=o()*e.ny*B,u[2]=Me+o()**2*(r-Me),((c=s.plane)==null?void 0:c.kind)==="h"&&(u[2]=s.plane.z),((f=s.plane)==null?void 0:f.kind)==="v"){const[d,g]=qr(n,o()*(n.width-1),s.plane.row);u[0]=d,u[1]=g}if(s.inside(u[0],u[1],u[2]))return}}};return s}export{$t as $,C as A,Mt as B,et as C,un as D,$n as E,Ft as F,ut as G,pn as H,Gn as I,cn as J,_t as K,U as L,Zr as M,wn as N,mn as O,Ln as P,Jr as Q,bn as R,sn as S,an as T,en as U,Fn as V,nn as W,Vr as X,Kr as Y,rn as Z,kt as _,Ae as a,on as a0,tt as a1,In as a2,Gr as a3,J as a4,Tn as a5,Z as a6,An as a7,Pn as a8,Rn as a9,Sn as aa,En as ab,dn as b,ln as c,gn as d,ar as e,yn as f,Cn as g,vn as h,tn as i,Qr as j,B as k,qr as l,fn as m,Nn as n,_n as o,Mn as p,Bn as q,xn as r,hn as s,It as t,kn as u,Yn as v,On as w,Dn as x,Wn as y,Un as z};
