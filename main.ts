import f from"fs"
for(let n=0;++n<6;){let I="/input/i00"+n+"/level.txt",O="/output/i00"+n,T=f.readFileSync(I),w=T.indexOf(10),S=(T+"").replace(/\n/g,""),X=[],p=0,s=""
S.replace(/[$*@]/g,(m,o)=>m<"@"?X.push(o):p=o)
let H=p/w|0,D=[[-w,"u"],[-1,"l"],[1,"r"],[w,"d"]],Jp=[],mp
while(X.length){let b=X[0],J=[],G2=0n,rL=0n,y=2n,q=[b];J[b]=1n
while(q.length){let t=q.pop();if(S[t]>="*")G2|=J[t];if(S[t]=="$"|S[t]=="*")rL|=J[t];for(let[d]of D){let u=t+d;if((u/w|0)!=H&&S[u]!="#"&&!J[u]){J[u]=y;y+=y;q.push(u)}}}
X=X.filter(x=>!J[x])
let Y=[[rL,p,""]],Z=[],V=new Set([rL+","+p])
while(Y.length||Z.length){let[m,pl,mo]=Y.pop()||(Y=Z.reverse(),Z=[],Y.pop());if((m&G2)==m){s+=mo;p=pl;Jp=J;mp=m;break}
for(let[d,c]of D){let u=pl+d,lu=J[u]
if(lu&&m&lu){let lt=J[u+d];if(!lt||m&lt)continue;let v=m^lu^lt;V.has(v+","+u)||(V.add(v+","+u),Z.push([v,u,mo+c]))}
else if(lu||(u/w|0)==H||Jp[u]&&!(mp&Jp[u])){V.has(m+","+u)||(V.add(m+","+u),Y.push([m,u,mo+c]))}}}}
f.mkdirSync(O,{recursive:!0});f.writeFileSync(O+"/solution.txt",s)}
