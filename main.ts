import fs from'fs';
for(let n=0;++n<6;){
let s=''+fs.readFileSync(`/input/i00${n}/level.txt`);
const w=s.search(/\n/);
s=[...s.replace(/\n/g,'')];
let p=s.indexOf('@');
const D=[-w,-1,1,w],L='ulrd';
let o=`/output/i00${n}`,out='';
s.forEach((c,i)=>{
if(c=='$'||c=='*'){
let I=[],m0=0,mg=0,k=0;
const F=c=>{if(s[c]=='#'||(c/w|0)==8)return;if(s[c]>'$')mg|=1<<k;if(s[c]>' '&&s[c]<'-')m0|=1<<k;I[c]=k++;s[c]='#';D.map(d=>F(c+d))};
F(i);
let B=[[[m0,p,'']]],V={};
X:for(let d=0;B[d];d++)for(let[m,pl,pa]of B[d]){
if(m==mg&&(pl/w|0)==8){out+=pa;p=pl;break X}
let K=m*512+pl;if(V[K])continue;V[K]=1;
D.forEach((e,j)=>{
let np=pl+e,b=I[np],nb=np+e,q=I[nb];
if(b>=0||(np/w|0)==8&&s[np]!='#'){
if(b>=0&&m>>b&1){if(q>=0&&!(m>>q&1))(B[d+1]=B[d+1]||[]).push([m^1<<b^1<<q,np,pa+L[j]])}
else B[d].push([m,np,pa+L[j]])
}
})
}
}
});
fs.mkdirSync(o,{recursive:!0});
fs.writeFileSync(o+'/solution.txt',out);
}
