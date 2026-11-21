f=require('fs')
for(n=6;--n;){
g=f.readFileSync('/input/i00'+n+'/level.txt','utf8')
w=g.indexOf('\n')
g=g.replace(/\n/g,'')
d='/output/i00'+n
P=g.indexOf('@')
H=P/w|0
D=[-w,-1,1,w]
L='ulrd'
o=''
V={}
for(i=0;g[i];i++)if('$*'.includes(g[i])&&!V[i]){
C=[]
F=x=>{if(!V[x]&&g[x]!='#'&&~~(x/w)!=H){V[x]=C.push(x);for(u of D)F(x+u)}}
F(i)
m=T=0
C.map((x,j)=>{if(g[x]>'#'){if(g[x]!='.')m|=1<<j;if(g[x]!='$')T|=1<<j}})
Q=[[m,P,'']]
S={[m*512+P]:1}
for([m,p,s] of Q){
R={[p]:''}
A=x=>{for(let l=4;l--;)if(!R[y=x+D[l]]&&g[y]!='#'&&!(m>>C.indexOf(y)&1)){R[y]=R[x]+L[l];A(y)}}
A(p)
if(!(~m&T)){y=H*w;while(!R[y]&&y<H*w+w)y++;if(R[y]){o+=s+R[y];P=y;break}}
C.map((x,j)=>{if(m>>j&1)for(k=4;k--;){
y=x+D[k]
if(g[y]=='#'||(b=C.indexOf(y))<0||m>>b&1)continue
z=x-D[k]
if(R[z]==null)continue
v=m^1<<j^1<<b
S[v*512+x]||(S[v*512+x]=Q.push([v,x,s+R[z]+L[k]]))
}})
}
f.mkdirSync(d,{recursive:!0})
f.writeFileSync(d+'/solution.txt',o)
}}
