(function(){var c,b,e,a,d,f,g,h,i,k,j,l,m,n,o,p,q,r,s,u,v,t,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa=Math.floor,ga=Math.ceil,ha=Math.cos,ia=Math.sin,ja=Math.sqrt,ka=Math.PI,la=Number.EPSILON,ma=Math.max,na=Math.min,oa=[].indexOf;R=function(c,a){return c+(a-c)*Math.random()},q=function(c,a,b){return ma(c,na(a,b))},ea=function(b){return Math.abs(b)<la},D=console.log,P=function(b){return 180*b/ka},r=function(b){return ka*b/180},i=class{constructor(a=0,b=0,c=0){this.x=a,this.y=b,this.z=c}cpy(){return aa(this.x,this.y,this.z)}add(b){return this.x+=b.x,this.y+=b.y,this.z+=b.z,this}mul(a){return this.x*=a,this.y*=a,this.z*=a,this}times(a){return this.cpy().mul(a)}minus(b){return aa(this.x-b.x,this.y-b.y,this.z-b.z)}to(b){return b.minus(this)}dist(b){return this.minus(b).length()}dot(b){return this.x*b.x+this.y*b.y+this.z*b.z}cross(b){return aa(this.y*b.z-this.z*b.y,this.z*b.x-this.x*b.z,this.x*b.y-this.y*b.x)}length(){return ja(this.x*this.x+this.y*this.y+this.z*this.z)}norm(){var a;return a=this.length(),0===a?(this.x=0,this.y=0,this.z=0):(a=1/a,this.x*=a,this.y*=a,this.z*=a),this}angle(b){return Math.acos(q(-1,1,this.dot(b)/ja(this.length()*b.length())))}},aa=function(a,b,c){return new i(a,b,c)},f=class b{constructor(a,b,c,d){this.x=a||0,this.y=b||0,this.z=c||0,this.w=null==d?1:d}copy(b){return this.x=b.x,this.y=b.y,this.z=b.z,this.w=b.w,this}static axis(c,d=0){var a,e;return a=d/2,e=ia(a),new b(c.x*e,c.y*e,c.z*e,ha(a))}rotate(a){var b,c,d,e,f,g,h;return f=a.x,g=a.y,h=a.z,c=this.w*f+this.y*h-this.z*g,d=this.w*g+this.z*f-this.x*h,e=this.w*h+this.x*g-this.y*f,b=-this.x*f-this.y*g-this.z*h,f=c*this.w+b*-this.x+d*-this.z-e*-this.y,g=d*this.w+b*-this.y+e*-this.x-c*-this.z,h=e*this.w+b*-this.z+c*-this.y-d*-this.x,aa(f,g,h)}length(){return ja(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}zero(){return ea(this.x)&&ea(this.y)&&ea(this.z)}norm(){var a;return a=this.length(),0===a?(this.x=0,this.y=0,this.z=0,this.w=1):(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a),this}mul(b){var a,c,d,e;return c=this.x,d=this.y,e=this.z,a=this.w,this.x=c*b.w+a*b.x+d*b.z-e*b.y,this.y=d*b.w+a*b.y+e*b.x-c*b.z,this.z=e*b.w+a*b.z+c*b.y-d*b.x,this.w=a*b.w-c*b.x-d*b.y-e*b.z,this}slerp(b,a){var c,d,e,f,g,h,i,j,k,l,m;return 0===a?this:1===a?this.copy(b):(k=this.x,l=this.y,m=this.z,j=this.w,c=j*b.w+k*b.x+l*b.y+m*b.z,0>c?(this.w=-b.w,this.x=-b.x,this.y=-b.y,this.z=-b.z,c=-c):this.copy(b),1<=c)?(this.w=j,this.x=k,this.y=l,this.z=m,this):(i=1-c*c,i<=la)?(g=1-a,this.w=g*j+a*this.w,this.x=g*k+a*this.x,this.y=g*l+a*this.y,this.z=g*m+a*this.z,this.norm()):(h=ja(i),d=Math.atan2(h,c),e=ia((1-a)*d)/h,f=ia(a*d)/h,this.w=j*e+this.w*f,this.x=k*e+this.x*f,this.y=l*e+this.y*f,this.z=m*e+this.z*f,this)}},d=class{constructor(){}load(){var a;this.cache={prefs:"prefs",volume:.03125};try{return this.req=window.indexedDB.open("online",2),this.req.onerror=()=>this.loadMenu("open error"),this.req.onsuccess=a=>(this.db=a.target.result,this.read()),this.req.onupgradeneeded=a=>{var b,c,d;return b=a.target.result,d=b.createObjectStore("prefs",{keyPath:"prefs"}),c=d.put(this.cache)}}catch(b){return a=b,this.loadMenu("prefs catch")}}loadMenu(){var a;if(void 0===("undefined"!=typeof da&&null!==da?da.level:void 0)||"menu"===(null==(a=da.level)?void 0:a.name))return B("menu")}read(){var a,b,c;return c=this.db.transaction(["prefs"],"readonly"),b=c.objectStore("prefs"),a=b.get("prefs"),a.onerror=()=>this.loadMenu("read error"),a.onsuccess=()=>a.result?(this.cache=a.result,Y.volume(this.cache.volume),this.loadMenu("read")):(this.write(),this.loadMenu("empty"))}write(){var a,b,c;return c=this.db.transaction(["prefs"],"readwrite"),b=c.objectStore("prefs"),a=b.put(this.cache)}clear(){var a;return this.cache={prefs:"prefs",volume:null==(a=this.cache.volume)?.03125:a},this.write()}set(a,b){if(this.cache[a]=b,this.db)return this.write()}get(a,b){var c;return null==(c=this.cache[a])?b:c}},g=class{constructor(){this.volDown=this.volDown.bind(this),this.volUp=this.volUp.bind(this),this.vol=0,this.tch={},this.osc=[],this.ctx=new(window.AudioContext||window.webkitAudioContext),this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.addOsc("sine"),this.addOsc("sine"),this.addOsc("sawtooth"),this.addOsc("triangle")}addOsc(a){var b;return b=this.ctx.createOscillator(),b.frequency.setValueAtTime(0,this.ctx.currentTime),b.type=a,b.connect(this.gain),b.start(),this.osc.push(b)}tick(){var a,b,c;for(b in c=this.tch,c){if(a=c[b],0>=a)return"send bot"===b?this.freq(0):"send usr"===b?this.freq(1):"won bot"===b||"lost bot"===b||"draw bot"===b?this.freq(2):"won usr"===b||"lost usr"===b||"draw usr"===b?this.freq(3):void 0,void delete this.tch[b];"send bot"===b?this.freq(0,R(120,160)):"send usr"===b?this.freq(1,R(1e3,2e3)):"won bot"===b?this.freq(2,R(120,1e3)):"draw bot"===b?this.freq(2,R(120,220)):"lost bot"===b?this.freq(2,R(140,180)):"won usr"===b?this.freq(3,R(1100,3e3)):"draw usr"===b?this.freq(3,R(1100,2200)):"lost usr"===b?this.freq(3,R(1e3,1100)):void 0,this.tch[b]=a-1}}freq(a,b=0){return this.osc[a].frequency.setValueAtTime(b,this.ctx.currentTime)}volDown(){return .0625>this.vol?this.volume(0):this.volume(this.vol/2)}volUp(){return this.volume(q(.03125,1,2*this.vol))}volume(a){return this.vol=a,H(this.vol),this.gain.gain.value=this.vol,O.set("volume",this.vol)}play(a){var b;return b=function(){return"send bot"===a||"send usr"===a?6:"won bot"===a||"won usr"===a?20:"lost bot"===a||"lost usr"===a?10:"draw bot"===a||"draw usr"===a?5:1}(),this.tch[a]=b}},e=class{constructor(){this.maxSmpl=300,this.smpls={bot:[],usr:[]},this.g=k("g"),this.p={bot:l(this.g,"path",{class:"grph bot"}),usr:l(this.g,"path",{class:"grph usr"})}}sample(){var a,b,c,e,f,g,h,i,k,l,m,n,p;for(g=function(a){return 60*(.5-a)},l=da.units.bot+da.units.usr,h=["usr","bot"],k=[],(b=0,c=h.length);b<c;b++){for(f=h[b],this.smpls[f].push(da.units[f]/l),this.smpls[f].length>this.maxSmpl&&this.smpls[f].shift(),a=`M 0 ${g(this.smpls[f][0])} `,p=0,i=this.smpls[f],(n=0,e=i.length);n<e;n++)m=i[n],p+=1,a+=`L ${p} ${g(m)} `;k.push(this.p[f].setAttribute("d",a))}return k}plot(){return this.g.setAttribute("transform",`translate(${U.size.x-60-this.smpls.bot.length}, 47)`)}},ca=window,E=document.getElementById("main"),O=new d,Z=E.children[0],L=function(a,b){var c,d,e,f;if(null!=b)for(f=Object.keys(b),c=0,e=f.length;c<e;c++)d=f[c],a.setAttribute(d,b[d]);return a},l=function(a,b,c){var d;return d=document.createElementNS("http://www.w3.org/2000/svg",b),a.appendChild(L(d,c)),d},k=function(a,b){return l(Z,a,b)},m=function(c,a){var b,e,g,h,k,l,m,o,p;for(l=c.angle(a),h=parseInt(l/.087),o=_(c),b=`M ${o.x} ${o.y}`,k=f.axis(c.cross(a).norm(),l/(h+1)),p=c.cpy(),(e=g=0,m=h);0<=m?g<m:g>m;e=0<=m?++g:--g)p=k.rotate(p),o=_(p),b+=` L ${o.x} ${o.y}`;return o=_(a),b+=` L ${o.x} ${o.y}`,b},o=function(a){return a.c.style.opacity=(a.depth()+.3)/1.3},U={size:aa(),center:aa(),radius:0},_=function(b){return aa(U.center.x+b.x*U.radius,U.center.y+b.y*U.radius)},T=function(b){return b=b.minus(U.center).times(1/U.radius),1<b.length()?b.norm():aa(b.x,b.y,ja(1-b.x*b.x-b.y*b.y))},S=function(b){return f.axis(aa(0,1,0),b.x/U.radius).mul(f.axis(aa(1,0,0),b.y/-U.radius))},F={left:E.children[1],right:E.children[2],buttons:{}},da={pause:0,update:0,time:0,delta:0,ticks:0,dots:[],sparks:[],lines:[],tmpline:{},units:{},userRot:new f,inertRot:new f,circle:null,rotSum:aa()},J={pos:aa(),drag:null,hover:null,touch:null},n=null,Y=new g,w=null,A={menu:{addUnit:0,msg:"KONNEKT",hint:["WELCOME TO","A JS13K 2018 GAME\nBY MONSTERKODI"],dots:[{v:[0,0,1],b:0,l:"TUTORIAL 1"},{v:[0,-.3,.8],l:"TUTORIAL 2"},{v:[-.3,-.58,.75],l:"TUTORIAL 3"},{v:[.3,-.58,.75],l:"TUTORIAL 4"},{v:[0,-.82,.58],l:"TUTORIAL 5"},{v:[0,-.97,.19],l:"EASY"},{v:[-1,0,0],l:"CIRCLES"},{v:[-1,0,-1],l:"RING"},{v:[-1,1,-1],l:"POLES"},{v:[1,1,-1],l:"CLOSE"},{v:[1,0,-1],l:"UNFAIR"},{v:[1,0,-.01],l:"FRENZY"},{v:[0,1,0],l:"RANDOM"}],lines:[[0,1],[1,2],[1,3],[3,4],[2,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12]]},"TUTORIAL 1":{addUnit:0,next:"TUTORIAL 2",hint:["You control the blue nodes. Your task is to fight the red nodes.\n\nNodes contain processes. The more processes, the stronger the node.","Attack the infected red node by dragging from your blue node.\n\nEach time you attack, half of the available processes will be sent."],dots:[{v:[-.5,0,1],u:360},{v:[.5,0,1],b:270}]},"TUTORIAL 2":{addUnit:0,next:"TUTORIAL 3",hint:["To win, you need to deactivate all red nodes.\n\nIt is OK to leave inactive red nodes!","This level contains 4 inactive and 2 active red nodes.\n\nDrag anywhere to rotate the sphere."],dots:[{v:[0,0,1],u:90},{v:[-.2,0,1],b:11},{v:[.2,0,1],b:11},{v:[0,.2,1],b:11},{v:[0,-.2,1],b:11},{v:[-.1,.1,-1],b:15},{v:[.1,.1,-1],b:15}]},"TUTORIAL 3":{addUnit:0,next:"TUTORIAL 4",hint:["Sending to nodes that you don't own isn't free.\n\nThe farther away the target node, the higher the cost.","The cost factor is multiplied by the number of processes sent. The more you send, the more you loose.\n\nNotice that you need more attacks -- and loose more processes -- when defeating the far node."],dots:[{v:[-.9,-.2,.1],u:360},{v:[-.9,.2,.1],u:360},{v:[-.9,0,.1],b:180},{v:[.9,0,.1],b:180}]},"TUTORIAL 4":{addUnit:0,next:"TUTORIAL 5",hint:["Sending processes to nodes you own cost nothing.\n\nIt is efficient to occupy far away neutral nodes with few processes first and send larger groups later.","Contrary to common believe,\nyou can't send processes between already connected nodes."],dots:[{v:[-.7,.1,.3],u:180},{v:[-.7,-.1,.3],u:12},{v:[.7,-.1,.3]},{v:[.7,.1,.3],b:135}],lines:[[0,1]]},"TUTORIAL 5":{addUnit:3,next:"EASY",hint:["New processes are spawned regularily in active nodes.\n\nAlways make sure you have more active nodes than the opponent.","You can see the number of active nodes in the top right corner.\n\nThe graph plots the relative amount of available processes."],dots:[{v:[0,0,1],u:60},{v:[-.5,-.5,1]},{v:[.5,-.5,1]},{v:[-.5,.5,1]},{v:[.5,.5,1]},{v:[-1,0,1]},{v:[1,0,1]},{v:[0,-1,1]},{v:[0,1,1]},{v:[-1,-1,0],b:12},{v:[1,-1,0],b:12},{v:[-1,1,0],b:12},{v:[1,1,0],b:12},{v:[0,0,-1],b:12}]},EASY:{addUnit:2,next:"menu",hint:["Be prepared, the red nodes are fighting back!","You learned the basics, remove the virus from the system!"],dots:[{v:[0,0,1],u:60},{v:[-.5,-.5,1]},{v:[.5,-.5,1]},{v:[-.5,.5,1]},{v:[.5,.5,1]},{v:[-1,0,1]},{v:[1,0,1]},{v:[0,-1,1]},{v:[0,1,1]},{v:[-1,-1,-1]},{v:[1,-1,-1]},{v:[-1,1,-1]},{v:[1,1,-1]},{v:[0,0,-1],b:60}],bot:{speed:8,i:-1}},CIRCLES:{addUnit:4,dots:[{v:[0,0,1],u:60},{c:[8,45,0,0]},{c:[8,45,0,180]},{c:[16,90,0,0]},{v:[0,0,-1],b:60}],bot:{speed:7,i:-1}},POLES:{addUnit:4,dots:[{v:[0,0,1],u:60},{c:[8,20,90,0]},{c:[8,20,-90,0]},{c:[8,20,0,90]},{c:[8,20,0,-90]},{v:[0,0,-1],b:60}],bot:{speed:6,i:-1}},RING:{addUnit:4,dots:[{v:[0,0,1],u:60},{c:[5,90,-30,90,30]},{c:[5,-90,-30,90,30]},{c:[5,70,-120,90,30]},{c:[5,70,-60,-90,30]},{v:[0,0,-1],b:60}],bot:{speed:5,i:-1}},CLOSE:{addUnit:4,dots:[{v:[-.4,0,1],u:60},{c:[11,90,-15,45,15]},{c:[11,-90,-15,45,15]},{v:[.4,0,1],b:60}],bot:{speed:4,i:-1}},UNFAIR:{addUnit:6,dots:[{v:[0,0,1],u:90},{c:[4,15,180,0]},{c:[8,30,180,0]},{c:[16,45,180,0]},{v:[0,0,-1],b:360}],bot:{speed:3,i:-1}},FRENZY:{addUnit:12,dots:[{v:[0,0,1],u:180},{c:[4,22.5,0,0]},{c:[4,22.5,180,0]},{c:[4,22.5,90,0]},{c:[4,22.5,-90,0]},{c:[6,40,0,0]},{c:[6,40,180,0]},{c:[6,40,90,0]},{c:[6,40,-90,0]},{v:[0,0,-1],b:12},{v:[1,0,0],b:12},{v:[-1,0,0],b:12},{v:[0,1,0],b:12},{v:[0,-1,0],b:12}],bot:{speed:2,i:-1}}},h=class{constructor(a,b){var c,d,e;for(this.dot=a,this.units=ga(b/3),this.sparks=[],this.ticks=0,this.g=k("g"),(c=d=0,e=this.units);0<=e?d<e:d>e;c=0<=e?++d:--d)this.sparks.push(l(this.g,"circle",{class:`spark ${this.dot.own}`,r:U.radius/60}));da.sparks.push(this)}upd(){var a,b,c,d,e,g,h,i,k,l,m,n,o,q;if(h=_(this.dot.v),this.g.setAttribute("transform",`translate(${h.x}, ${h.y})`),q=.5+.5*this.dot.depth(),da.pause||(this.ticks+=1),g=ma(5*this.units,120),this.ticks>g){for(i=this.sparks,c=0,d=i.length;c<d;c++)m=i[c],m.remove();return da.sparks.splice(da.sparks.indexOf(this),1)}for(a=0,b=this.ticks/g,k=this.sparks,l=[],(n=0,e=k.length);n<e;n++)m=k[n],a+=2*ka/this.sparks.length,o=aa(ha(a),ia(a)),o.mul(this.dot.radius()+g*b*q*U.radius/500),m.setAttribute("r",(.5+.5*b)*q*U.radius/60),m.setAttribute("opacity",ha(b*ka)),m.setAttribute("cx",o.x),l.push(m.setAttribute("cy",o.y));return l}},b=class{constructor(a){this.onTimer=this.onTimer.bind(this),this.v=a,this.minUnits=12,this.own="",this.units=0,this.targetUnits=0,this.n=[],this.i=da.dots.length,this.v.norm(),this.g=k("g"),this.c=l(this.g,"circle",{class:"dot",id:this.i,cx:0,cy:0,r:1.3}),this.c.dot=this,da.dots.push(this)}startTimer(a){return this.targetUnits+=a,clearInterval(this.timer),this.timer=setInterval(this.onTimer,100)}onTimer(){if(!da.pause)return Y.play(`send ${this.own}`),this.targetUnits>this.units?(this.units+=10,this.units>=this.targetUnits&&(this.units=this.targetUnits)):(this.units-=10,this.units<=this.targetUnits&&(this.units=this.targetUnits)),this.units===this.targetUnits&&(clearInterval(this.timer),delete this.timer),0===this.units&&this.unlink(),this.drawPie()}setUnits(a){return this.units=a,this.targetUnits=this.units,this.drawPie()}addUnit(a=1){if(0!==a)return this.targetUnits=q(0,360,this.targetUnits+a),this.units=q(0,360,this.units+a),this.drawPie()}drawPie(){var a,b,d;return this.pie||(this.pie=l(this.g,"path",{class:"pie"})),this.units<this.minUnits?(this.c.classList.remove("linked"),d=0,a=-1,this.pie.setAttribute("d","M0,-1 A1,1 0 1,0 0,1 A1,1 0 0,0 0,-1 z")):(this.c.classList.add("linked"),d=ia(r(this.units)),a=-ha(r(this.units)),b=180>=this.units&&"1,0"||"0,0",this.pie.setAttribute("d",`M0,0 L0,-1 A1,1 0 ${b} ${d},${a} z`))}depth(){return(this.v.z+1)/2}zdepth(){return this.depth()}radius(){return(this.depth()+.3)/1.5*U.radius/20}raise(){return this.g.parentNode.appendChild(this.g)}closest(){return da.dots.slice(0).sort((b,a)=>this.dist(b)-this.dist(a)).slice(1)}dist(a){return this.v.angle(a.v)}neutralize(){return this.own="",this.units=0,this.targetUnits=0,this.c.classList.remove("bot"),this.c.classList.remove("usr")}linked(a){return 0<=oa.call(this.n,a)||0<=oa.call(a.n,this)}unlink(){return da.lines=da.lines.filter(a=>a.s!==this&&a.e!==this||(a.e.n=a.e.n.filter(a=>a!==this),a.s.n=a.s.n.filter(a=>a!==this),a.c.remove(),!1)),this.n=[],this.neutralize()}link(b){var c,d,e,f,g,i;if(!(b===this||this.targetUnits<this.minUnits||this.linked(b)))return c=.5*P(this.dist(b))/180,b.own===this.own&&(c=0),i=ga(.5*this.targetUnits),g=ga(i*(1-c)),0===c&&360<b.targetUnits+g&&(f=b.targetUnits+g-360,g-=f,i-=f),e=g,""!==b.own&&b.own!==this.own?(e=-g,new h(this,i),g===b.targetUnits?(Y.play(`draw ${this.own}`),new h(b,g)):g<b.targetUnits?(Y.play(`lost ${this.own}`),new h(b,g)):(Y.play(`won ${this.own}`),d=1,e=g-b.targetUnits,new h(b,b.targetUnits),b.unlink(),b.setOwn(this.own))):(d=1,b.setOwn(this.own),new h(b,fa(i*c))),this.startTimer(-i),b.startTimer(e),d?(da.update=1,new a(this,b)):null}setOwn(a){return this.own=a,this.c.classList.toggle("bot","bot"===this.own),this.c.classList.toggle("usr","usr"===this.own)}send(b){var c,d,e,f;return s("usr"),J.touch&&J.touch!==this&&!this.linked(J.touch)?f=J.touch:(d=function(a){return b.angle(a.v)},c=da.dots.slice(0).sort((c,a)=>d(c)-d(a)),f=c[0]),e=f===this||this.linked(f)?{v:b,depth:function(){return(b.z+1)/2}}:f,da.tmpline.usr=new a(this,e,!0)}rot(a){return this.v=a.rotate(this.v)}upd(){var a;return a=_(this.v),this.g.setAttribute("transform",`translate(${a.x},${a.y}) scale(${this.radius()})`),o(this)}},c=class{constructor(){this.speed=4,this.tsum=0}tmpl(b,d){return s("bot"),da.tmpline.bot=new a(b,d,!0),da.update=1}anim(a){var b,e,f,g,h,i;if(this.tsum+=a,this.tsum>60*this.speed){if(g=da.dots.filter(function(a){return"bot"===a.own}),this.tsum=0,0===g.length)return;for(g.sort(function(c,a){return a.units-c.units}),f=g[0],e=f.closest(),(h=0,i=e.length);h<i;h++)if(b=e[h],!f.linked(b))return f.link(b),void this.tmpl(f,b)}}},a=class{constructor(a,b,c){var d,e;this.s=a,this.e=b,this.c=k("path",{class:"line"}),this.s.own&&this.c.classList.add(this.s.own),c?(this.c.classList.add("tmp"),this.s.c.classList.add("src")):(null!=(d=this.s.n)&&d.push(this.e),null!=(e=this.e.n)&&e.push(this.s),da.lines.push(this))}del(){return this.s.c.classList.remove("src"),this.c.remove()}depth(){return(this.s.depth()+this.e.depth())/2}zdepth(){return na(this.s.depth(),this.e.depth())-.001}raise(){var a;return null==(a=this.c.parentNode)?void 0:a.appendChild(this.c)}upd(){return this.c.setAttribute("d",m(this.s.v,this.e.v)),o(this),this.c.style.strokeWidth=(this.depth()+.3)/1.5*U.radius/50}},C=function(){var a;return"usr"===da.winner?B(null==(a=da.level.next)?"menu":a):t(da.level.name)},t=function(a){return da.level=null,B(a)},B=function(a){if(Z.innerHTML="",F.bot.innerHTML="",F.usr.innerHTML="",da.circle=k("circle",{class:"world",cx:U.center.x,cy:U.center.y,r:U.radius}),da.circle.v=aa(),da.ticks=0,da.dots=[],da.lines=[],da.update=1,da.winner=null,J.drag=null,n=null,s("usr"),s("bot"),x(),N(),"menu"===a?W("menu"):W("game"),("RANDOM"===a?Q():y(a),da.pause))return M()},y=function(g){var h,k,m,o,p,s,t,y,z,B,C,D,E,F,G,H,I,J,L;if((null==(D=da.level)?void 0:D.name)!==g){for(B=A[g],B.name=g,E=B.dots,(s=0,y=E.length);s<y;s++){if(k=E[s],k.c){for(o=J=0,F=k.c[0];0<=F?J<F:J>F;o=0<=F?++J:--J)C=f.axis(aa(0,1,0),r(k.c[2])).mul(f.axis(aa(1,0,0),r(k.c[3]))),L=aa(0,0,1),L=f.axis(aa(1,0,0),r(k.c[1])).rotate(L),h=null==(G=k.c[4])?360/k.c[0]:G,L=f.axis(aa(0,0,1),r(o*h)).rotate(L),L=C.rotate(L),m=new b(L);continue}m=new b(aa(k.v[0],k.v[1],k.v[2])),k.u&&(m.setOwn("usr"),m.setUnits(k.u)),k.b&&(m.setOwn("bot"),m.setUnits(k.b)),"menu"===g&&(m.level=k.l,O.get(k.l)&&m.setOwn("usr"))}for(I=null==(H=B.lines)?[]:H,p=0,z=I.length;p<z;p++)t=I[p],new a(da.dots[t[0]],da.dots[t[1]]);if(B.bot&&(t=da.dots.length,o=(t+B.bot.i)%t,n=new c(da.dots[o]),B.bot.speed&&(n.speed=B.bot.speed)),B.msg?K(B.msg):K(),B.hint?x(B.hint[0],B.hint[1]):x(),"menu"===g&&(delete B.msg,delete B.hint),da.level=B,da.addUnit=B.addUnit,da.addUnit)return w=new e}},Q=function(){var a,f,g,h,k,l,m,o,p,q,r,s,t,x,y;for(w=new e,da.addUnit=1,da.level={name:"RANDOM"},f=new b(aa(0,0,1)),f.setOwn("usr"),o=null==(q=da.nodes)?2*parseInt(R(8,20)):q,(h=l=1,r=o/2);1<=r?l<r:l>r;h=1<=r?++l:--l){for(y=aa(R(-1,1),R(-1,1),R(0,1)),y.norm();;){for(p=!0,s=da.dots,(x=0,m=s.length);x<m;x++)if(g=s[x],.2>y.angle(g.v)){y=aa(R(-1,1),R(-1,1),R(0,1)),y.norm(),p=!1;break}if(p)break}new b(y)}for(h=k=t=o/2-1;0>=t?0>=k:0<=k;h=0>=t?++k:--k)new b(da.dots[h].v.times(-1).add(aa(.01)));return a=da.dots[da.dots.length-1],a.setOwn("bot"),n=new c,a.startTimer(360),f.startTimer(360)},H=function(a){var b;return null==(b=F.buttons.VOL)?void 0:b.innerHTML=`${fa(100*a)/100}`},I={menu:[{OPTIONS:{click:function(){return W("options")}}}],game:[{PAUSE:{click:function(){return M()}}}],options:[{OPTIONS:{click:function(){return W("menu")}}},{FULLSCREEN:{click:function(){return $()}}},{VOLUME:{class:"choice",values:["-","VOL","+"],cb:function(a){if("+"===a)return Y.volUp();return"-"===a?Y.volDown():void 0}}},{ABOUT:{click:function(){return G()}}},{"RESET PROGRESS":{click:function(){return O.clear(),t("menu")}}}],pause:[{UNPAUSE:{click:function(){return M()}}},{MENU:{click:function(){return B("menu")}}},{RESET:{click:function(){return t(da.level.name)}}},{FULLSCREEN:{click:function(){return $()}}},{VOLUME:{class:"choice",values:["-","VOL","+"],cb:function(a){if("+"===a)return Y.volUp();return"-"===a?Y.volDown():void 0}}}],next:[{NEXT:{click:function(){return C()}}},{MENU:{click:function(){return B("menu")}}},{RESET:{click:function(){return t(da.level.name)}}}]},W=function(a){var b,c,d,e,f,g,h,i,l,m;for(e in i=F.buttons,i)m=i[e],m.remove(),delete F.buttons[e];for(g=I[a],l=[],(d=0,f=g.length);d<f;d++)c=g[d],h=Object.keys(c)[0],b=c[h],null==b.class&&(b.class="button"),null==b.text&&(b.text=h),"choice"===b.class?l.push(p(b)):l.push(F.buttons[h]=u("div",b,F.left));return l},z=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement},$=function(){var a,b,c;return z()?(a=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen,a.call(document)):(b=document.documentElement,c=b.requestFullscreen||b.webkitRequestFullScreen||b.mozRequestFullScreen||b.msRequestFullscreen,c.call(b))},u=function(a,b,c){var d;return d=document.createElement(a),null!=b.text&&(d.innerText=b.text),null!=b.html&&(d.innerHTML=b.html),null!=b.click&&d.addEventListener("click",b.click),c.appendChild(L(d,b)),d},K=function(a,b=""){var c;if(null!=(c=U.msg)&&c.remove(),a)return U.msg=u("div",{class:`msg ${b}`,text:a},E),v("msg",U.msg)},x=function(a,b){var c,d;if(null!=(c=U.hint1)&&c.remove(),null!=(d=U.hint2)&&d.remove(),a&&(U.hint1=u("div",{class:"hint1",text:a},E),v("hint",U.hint1)),b)return U.hint2=u("div",{class:"hint2",text:b},E),v("hint",U.hint2)},N=function(a,b){var c,d;if(null!=(c=U.popup)&&c.remove(),b)return d=_(a),U.popup=u("div",{class:"popup",text:b},E),U.popup.style.left=`${d.x}px`,U.popup.style.top=`${d.y-U.radius/7}px`,v("hint",U.popup)},p=function(a){var b,d,e,f,g,h;for(F.buttons[a.text]=u("div",a,F.left),g=a.values,h=[],(e=0,f=g.length);e<f;e++)b=g[e],d=function(a,b){return function(c){var d,e,f,g;for(e=a.values,f=0,d=e.length;f<d;f++)g=e[f],F.buttons[g].classList.remove("highlight");return"+"!==b&&"-"!==b&&"VOL"!==b&&c.target.classList.add("highlight"),"VOL"!==b&&a.cb(b),c.stopPropagation()}},F.buttons[b]=u("div",{class:"button",text:b,click:d(a,b)},F.left),"VOL"===b?h.push(H(Y.vol)):h.push(void 0);return h},G=function(){var a,b;return a=function(){return F.about.remove(),delete F.about},b="",b+="<div class='konnekt'>KONNEKT</div> is my entry for the <a href='https://js13kgames.com/' target='_blank'>js13kgames</a> 2018 competition.<br>",b+="Thanks to the organizers!<p>",b+="The sources are available at ",b+="<a href='https://github.com/monsterkodi/konnekt' target='_blank'>github</a>.<p>",b+="I hope you had some fun playing the game.<div class='version'>v1.0</div>",F.about=u("div",{class:"about",html:b,click:a},E)},F.usr=u("div",{class:"button usr"},F.right),F.bot=u("div",{class:"button bot"},F.right),v=function(a,b){var c;if(b)return c=function(){return"msg"===a?U.radius/6:"hint"===a?U.radius/20:"menu"===a?ma(12,U.radius/30):void 0}(),b.style.fontSize=`${parseInt(c)}px`},X=function(){var a;return a=Z.getBoundingClientRect(),U.size=aa(a.width,a.height),U.center=aa(a.width/2,a.height/2),U.radius=.4*na(U.size.x,U.size.y),da.update=1,da.circle&&(da.circle.setAttribute("cx",U.center.x),da.circle.setAttribute("cy",U.center.y),da.circle.setAttribute("r",U.radius)),v("hint",U.hint1),v("hint",U.hint2),v("msg",U.msg),v("menu",F.left),null==w?void 0:w.plot()},X(),ca.addEventListener("mousemove",function(a){var b,c,e,f;if(J.pos=aa(a.clientX,a.clientY),"rot"===J.drag){for(da.userRot=S(aa(a.movementX,a.movementY)),f=da.dots,(c=0,e=f.length);c<e;c++)b=f[c],b.rot(da.userRot),da.update=1;return da.rotSum.add(aa(a.movementX/10,a.movementY/10))}if(J.drag)switch(a.buttons){case 1:return J.drag.send(T(J.pos)),da.update=1;case 2:return J.drag.v=T(J.pos),da.update=1;}}),s=function(a){var b;return null!=(b=da.tmpline[a])&&b.del(),delete da.tmpline[a]},ca.addEventListener("mousedown",function(a){if(s("usr"),da.inertRot=new f,x(),N(),"menu"===da.level.name)K();else if(da.winner&&1===a.buttons&&!a.target.classList.contains("button"))return void C();if(J.drag=a.target.dot){if("menu"===da.level.name)return void(1===a.buttons&&B(J.drag.level));if(!da.pause&&J.drag.c.classList.contains("linked")&&"bot"!==J.drag.own)return}return J.drag="rot"}),ca.addEventListener("mouseup",function(){return"rot"===J.drag?da.inertRot=S(da.rotSum):J.drag&&(da.inertRot=new f,da.tmpline.usr&&da.tmpline.usr.e.c&&J.drag.link(da.tmpline.usr.e),J.drag.c.classList.remove("src")),s("usr"),J.drag=null,da.update=1}),Z.addEventListener("mouseover",function(a){var b;if((J.touch=a.target.dot,!J.drag)&&(b=a.target.dot))if(!da.pause&&b.c.classList.contains("linked")&&"usr"===b.own||"menu"===da.level.name){if(b!==J.hover&&(V(b),b.c.classList.add("src"),"menu"===da.level.name))return K(),x(),N(b.v,b.level);}else if(J.hover)return V()}),V=function(b,a=1){var c;return a&&null!=(c=J.hover)&&c.c.classList.remove("src"),J.hover=b},Z.addEventListener("mouseout",function(a){var b;if(J.touch=null,(b=a.target.dot)&&b===J.hover&&(V(null,b!==J.drag),"menu"===da.level.name))return N()}),ca.addEventListener("keydown",function(a){switch(a.keyCode){case 32:case 27:return M();}}),M=function(a="PAUSED",b="",c="pause"){var d,e,f,g,h;if("menu"!==(null==(f=da.level)?void 0:f.name)&&(da.pause=!da.pause,W(da.winner&&"next"||da.pause&&"pause"||"game"),K(da.pause&&a||"",b),da.pause)){for(Y.tch={},h=[],(d=e=0,g=Y.osc.length);0<=g?e<g:e>g;d=0<=g?++e:--e)h.push(Y.freq(d));return h}},ba=function(){if(document.hidden&&!da.pause)return M()},j=function(a){var b,c,e,g,h,i,k,m,o,p,q,r,s,t,v,y,z,A,B,C,D,E,G,H,I,J,K,L;if(y=function(){return ca.requestAnimationFrame(j),a},Y.tick(),da.delta=(a-da.time)/16,da.time=a,!da.level)return y();if(!da.pause&&"menu"!==da.level.name){if(da.ticks+=1,0==da.ticks%60){for(A=["usr","bot"],h=0,p=A.length;h<p;h++){if(z=A[h],c=da.dots.filter(function(a){return a.own===z}),da.units[z]=c.reduce(function(c,a){return c+a.targetUnits},0),c=c.filter(function(a){return a.units>=a.minUnits}),F[z].innerHTML=`&#9679; ${c.length}`,0===c.length)return"bot"===z?(da.winner="usr",M("ONLINE!","usr"),O.set(da.level.name,!0)):(da.winner="bot",M("OFFLINE!","bot")),null!=(B=U.hint)&&B.remove(),da.update=1,y();for(K=0,q=c.length;K<q;K++)b=c[K],b.addUnit(da.addUnit)}null!=w&&w.sample(),null!=w&&w.plot()}null!=n&&n.anim(da.delta)}if(da.rotSum.mul(.8),da.inertRot.slerp(new f,.01*da.delta),!da.inertRot.zero()||da.update){for(C=da.dots,e=0,r=C.length;e<r;e++)b=C[e],b.rot(da.inertRot),b.upd();for(D=da.lines,i=0,s=D.length;i<s;i++)m=D[i],m.upd();for(null!=(E=da.tmpline.usr)&&E.upd(),null!=(G=da.tmpline.bot)&&G.upd(),g=da.lines.concat(da.dots),null!=da.tmpline.usr&&g.push(da.tmpline.usr),null!=da.tmpline.bot&&g.push(da.tmpline.bot),H=g.sort(function(c,a){return c.zdepth()-a.zdepth()}),(k=0,t=H.length);k<t;k++)L=H[k],L.raise();da.update=0}for(I=da.sparks.slice(0),o=0,v=I.length;o<v;o++)J=I[o],J.upd();return y()},ca.addEventListener("resize",X),ca.addEventListener("contextmenu",function(a){return a.preventDefault()}),document.addEventListener("visibilitychange",ba,!1),O.load(),ca.requestAnimationFrame(j)}).call(this);