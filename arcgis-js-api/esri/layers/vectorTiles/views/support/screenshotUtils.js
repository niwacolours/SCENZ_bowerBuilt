//>>built
define(["require","exports","../../core/tsSupport/assignHelper"],function(F,g,v){Object.defineProperty(g,"__esModule",{value:!0});g.adjustScreenshotSettings=function(a,b){a=v({format:"png",quality:100},a);var c,d;a.includePadding?(c=b.width,d=b.height):(c=b.width-b.padding.left-b.padding.right,d=b.height-b.padding.top-b.padding.bottom);var l=c/d;return void 0!==a.width&&void 0===a.height?a.height=a.width/l:void 0!==a.height&&void 0===a.width&&(a.width=l*a.height),void 0!==a.height&&(a.height=Math.floor(a.height)),
void 0!==a.width&&(a.width=Math.floor(a.width)),a.area||a.includePadding||(a.area={x:b.padding.left,y:b.padding.top,width:c,height:d}),a};g.resampleHermite=function(a,b,c,d,l,g,w){void 0===w&&(w=!0);var n=b/l;c/=g;for(var v=Math.ceil(n/2),C=Math.ceil(c/2),h=0;h<g;h++)for(var m=0;m<l;m++){for(var p=4*(m+(w?g-h-1:h)*l),e=0,q=0,x=0,y=0,z=0,A=0,B=0,D=(h+.5)*c,r=Math.floor(h*c);r<(h+1)*c;r++)for(var t=Math.abs(D-(r+.5))/C,E=(m+.5)*n,t=t*t,u=Math.floor(m*n);u<(m+1)*n;u++){var f=Math.abs(E-(u+.5))/v,k=Math.sqrt(t+
f*f);-1<=k&&1>=k&&0<(e=2*k*k*k-3*k*k+1)&&(f=4*(u+r*b),B+=e*a[f+3],x+=e,255>a[f+3]&&(e=e*a[f+3]/250),y+=e*a[f],z+=e*a[f+1],A+=e*a[f+2],q+=e)}d[p]=y/q;d[p+1]=z/q;d[p+2]=A/q;d[p+3]=B/x}}});