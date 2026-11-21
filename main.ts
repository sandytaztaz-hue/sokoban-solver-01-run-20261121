import f from"fs"
let w,D,C,s,N,B,P,P2
function S(t){w=t.indexOf("\n");s=t.replace(/\n/g,"");N=s.length;D=[1,-1,w,-w];C="rldu"
P=s.indexOf("@");P2=[];B=[...s.matchAll(/[$*]/g)].map(m=>m.index)
let H=(P/w)|0,V=[],rooms=[]
for(let i=0;i<N;i++)if(s[i]!="#"&&(i/w|0)-H&&!V[i]){let q=[i];V[i]=1;let b=[]
for(let h=0;h<q.length;h++){let x=q[h];if(B.includes(x))b.push(x);for(let o of D){let j=x+o;if(s[j]!="#"&&(j/w|0)-H&&!V[j]){V[j]=1;q.push(j)}}}if(b.length)rooms.push({S:new Set(q),b})}let A=B.slice(),pl=P,path=""
for(let i=0;i<rooms.length;i++){let r=rooms[i],seen=new Set(),Q=[[r.b.slice(),pl,""]],qi=0
seen.add(r.b+"/"+pl)
while(qi<Q.length){let[b,p,pt]=Q[qi++]
if(b.every(x=>".*+".includes(s[x]))){path+=pt;A=A.filter(x=>!r.b.includes(x)).concat(b);pl=p;rooms.splice(i,1);i=-1;break}let bs=new Set(A.filter(x=>!r.b.includes(x)).concat(b))
P2.fill(0);let FQ=[p];P2[p]=-1
for(let h=0;h<FQ.length;h++){let c=FQ[h];for(let k=0;k<4;k++){let j=c+D[k];if(s[j]!="#"&&!bs.has(j)&&!P2[j]){P2[j]=c;FQ.push(j)}}}for(let bi=0;bi<b.length;bi++)for(let k=0;k<4;k++){let from=b[bi]-D[k],to=b[bi]+D[k]
if(!P2[from])continue
if(s[to]=="#"||bs.has(to)||!r.S.has(to))continue
let nb=b.slice();nb[bi]=to;nb.sort()
let key=nb+"/"+b[bi]
if(seen.has(key))continue
seen.add(key)
let w2="",c=from;while(c!=p){w2=C[D.indexOf(c-P2[c])]+w2;c=P2[c]}Q.push([nb,b[bi],pt+w2+C[k]])}}}if(rooms.length)return""
return path}let e=process.env,I=e.MAKEFUN_INPUT_DIR||"/input",O=e.MAKEFUN_OUTPUT_DIR||"/output"
f.readdirSync(I).map(d=>{let t=f.readFileSync(I+"/"+d+"/level.txt","utf8"),o=O+"/"+d
f.mkdirSync(o,{recursive:!0})
f.writeFileSync(o+"/solution.txt",S(t)+"\n")})
