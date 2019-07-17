function jsqrscanner(){var Jb='',Kb=0,Lb='gwt.codesvr=',Mb='gwt.hosted=',Nb='gwt.hybrid',Ob='jsqrscanner',Pb='__gwt_marker_jsqrscanner',Qb='<script id="',Rb='"><\/script>',Sb='SCRIPT',Tb='#',Ub='?',Vb='/',Wb=1,Xb='base',Yb='img',Zb='clear.cache.gif',$b='meta',_b='name',ac='gwt:property',bc='content',cc='=',dc='gwt:onPropertyErrorFn',ec='Bad handler "',fc='" for "gwt:onPropertyErrorFn"',gc='gwt:onLoadErrorFn',hc='" for "gwt:onLoadErrorFn"',ic='user.agent',jc='webkit',kc='safari',lc='msie',mc=10,nc=11,oc='ie10',pc=9,qc='ie9',rc=8,sc='ie8',tc='gecko',uc='gecko1_8',vc=2,wc=3,xc=4,yc='Single-script hosted mode not yet implemented. See issue ',zc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',Ac='8F2F090DCDE9903BB731CEBC608BC1FB',Bc=':1',Cc=':2',Dc=':3',Ec=':4',Fc=':',Gc='DOMContentLoaded',Hc=50;var k=Jb,l=Kb,m=Lb,n=Mb,o=Nb,p=Ob,q=Pb,r=Qb,s=Rb,t=Sb,u=Tb,v=Ub,w=Vb,A=Wb,B=Xb,C=Yb,D=Zb,F=$b,G=_b,H=ac,I=bc,J=cc,K=dc,L=ec,M=fc,N=gc,O=hc,P=ic,Q=jc,R=kc,S=lc,T=mc,U=nc,V=oc,W=pc,X=qc,Y=rc,Z=sc,$=tc,_=uc,ab=vc,bb=wc,cb=xc,db=yc,eb=zc,fb=Ac,gb=Bc,hb=Cc,ib=Dc,jb=Ec,kb=Fc,lb=Gc,mb=Hc;var nb=window,ob=document,pb,qb,rb=k,sb={},tb=[],ub=[],vb=[],wb=l,xb,yb;if(!nb.__gwt_stylesLoaded){nb.__gwt_stylesLoaded={}}if(!nb.__gwt_scriptsLoaded){nb.__gwt_scriptsLoaded={}}function zb(){var b=false;try{var c=nb.location.search;return (c.indexOf(m)!=-1||(c.indexOf(n)!=-1||nb.external&&nb.external.gwtOnLoad))&&c.indexOf(o)==-1}catch(a){}zb=function(){return b};return b}
function Ab(){if(pb&&qb){pb(xb,p,rb,wb)}}
function Bb(){var e,f=q,g;g=ob.head.lastChild;e=g;while(e&&e.tagName!=t){e=e.previousSibling}function h(a){var b=a.lastIndexOf(u);if(b==-1){b=a.length}var c=a.indexOf(v);if(c==-1){c=a.length}var d=a.lastIndexOf(w,Math.min(c,b));return d>=l?a.substring(l,d+A):k}
;if(e&&e.src){rb=h(e.src)}if(rb==k){var i=ob.getElementsByTagName(B);if(i.length>l){rb=i[i.length-A].href}else{rb=h(ob.location.href)}}else if(rb.match(/^\w+:\/\//)){}else{var j=ob.createElement(C);j.src=rb+D;rb=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function Cb(){var b=document.getElementsByTagName(F);for(var c=l,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(G),g;if(f){if(f==H){g=e.getAttribute(I);if(g){var h,i=g.indexOf(J);if(i>=l){f=g.substring(l,i);h=g.substring(i+A)}else{f=g;h=k}sb[f]=h}}else if(f==K){g=e.getAttribute(I);if(g){try{yb=eval(g)}catch(a){alert(L+g+M)}}}else if(f==N){g=e.getAttribute(I);if(g){try{xb=eval(g)}catch(a){alert(L+g+O)}}}}}}
__gwt_isKnownPropertyValue=function(a,b){return b in tb[a]};__gwt_getMetaProperty=function(a){var b=sb[a];return b==null?null:b};function Db(a,b){var c=vb;for(var d=l,e=a.length-A;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Eb(a){var b=ub[a](),c=tb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(yb){yb(a,d,b)}throw null}
ub[P]=function(){var a=navigator.userAgent.toLowerCase();var b=ob.documentMode;if(function(){return a.indexOf(Q)!=-1}())return R;if(function(){return a.indexOf(S)!=-1&&(b>=T&&b<U)}())return V;if(function(){return a.indexOf(S)!=-1&&(b>=W&&b<U)}())return X;if(function(){return a.indexOf(S)!=-1&&(b>=Y&&b<U)}())return Z;if(function(){return a.indexOf($)!=-1||b>=U}())return _;return k};tb[P]={'gecko1_8':l,'ie10':A,'ie8':ab,'ie9':bb,'safari':cb};jsqrscanner.onScriptLoad=function(a){jsqrscanner=null;pb=a;Ab()};if(zb()){alert(db+eb);return}Bb();Cb();try{var Fb;Db([_],fb);Db([V],fb+gb);Db([Z],fb+hb);Db([X],fb+ib);Db([R],fb+jb);Fb=vb[Eb(P)];var Gb=Fb.indexOf(kb);if(Gb!=-1){wb=Number(Fb.substring(Gb+A))}}catch(a){return}var Hb;function Ib(){if(!qb){qb=true;Ab();if(ob.removeEventListener){ob.removeEventListener(lb,Ib,false)}if(Hb){clearInterval(Hb)}}}
if(ob.addEventListener){ob.addEventListener(lb,function(){Ib()},false)}var Hb=setInterval(function(){if(/loaded|complete/.test(ob.readyState)){Ib()}},mb)}
jsqrscanner();(function () {var $gwt_version = "2.8.1";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '8F2F090DCDE9903BB731CEBC608BC1FB';function H(){}
function fi(){}
function ci(){}
function ni(){}
function nb(){}
function pb(){}
function pi(){}
function Ui(){}
function jc(){}
function rc(){}
function uc(){}
function Bj(){}
function Dj(){}
function ck(){}
function fk(){}
function ik(){}
function lk(){}
function ok(){}
function st(){}
function Pc(){Cc()}
function Vc(){Cc()}
function Yc(){Cc()}
function ad(){Cc()}
function jj(){$i()}
function pj(){$i()}
function mj(){kj()}
function Xj(){Vj()}
function Yj(){Vj()}
function Zj(){Vj()}
function $j(){Vj()}
function bj(a){ui()}
function aq(){aq=ci}
function R(a,b){a.s=b}
function bm(a,b){a.c=b}
function Ip(a,b){a.f=b}
function Jp(a,b){a.j=b}
function qp(a){this.a=a}
function up(a){this.a=a}
function Rp(a){this.a=a}
function Up(a){this.a=a}
function Um(a){this.a=a}
function rk(a){this.a=a}
function Zo(a){this.a=a}
function Nq(a){this.a=a}
function cs(a){this.a=a}
function zs(a){this.a=a}
function Ds(a){this.a=a}
function rs(a){this.c=a}
function Rj(a){this.c=a}
function tl(a){this.c=a}
function dt(a){this.c=a}
function Gt(a){this.a=a}
function _u(a){this.a=a}
function iw(a){this.a=a}
function Ao(){this.a=true}
function Xs(){Qs(this)}
function Iv(){Fv(this)}
function ew(){cw(this)}
function Jb(){Hb.call(this)}
function zk(){vk.call(this)}
function Ck(){vk.call(this)}
function Gk(){vk.call(this)}
function Wp(){Jb.call(this)}
function Xp(){Jb.call(this)}
function $p(){Jb.call(this)}
function Aq(){Jb.call(this)}
function Iq(){Jb.call(this)}
function Kq(){Jb.call(this)}
function Yq(){Jb.call(this)}
function xt(){Jb.call(this)}
function db(){db=ci;Vj()}
function vu(){vu=ci;uu=xu()}
function Nb(){Nb=ci;Mb=new H}
function Xm(){this.a=new Un}
function gu(){this.a=new du}
function ls(a){ms(a,a.b)}
function Ev(a,b){Hv(a.a,b)}
function hw(a,b){Ev(a.a,b.b)}
function Jj(a,b){Lj(a,b,a.b)}
function Q(a,b){R(a,(ui(),b))}
function P(a){return ui(),a.s}
function Lh(a){return a.e}
function Ac(b,a){b.width=a}
function zc(b,a){b.height=a}
function oc(a){nc();mc.M(a)}
function gc(){gc=ci;fc=new jc}
function qt(){qt=ci;pt=new st}
function ow(){ow=ci;nw=new lw}
function Mu(){Jb.call(this)}
function Kb(a){Ib.call(this,a)}
function Lb(a){Ab.call(this,a)}
function ak(a){Ab.call(this,a)}
function Vm(a){Ib.call(this,a)}
function Sp(a){Ib.call(this,a)}
function Yp(a){Kb.call(this,a)}
function _p(a){Kb.call(this,a)}
function Jq(a){Kb.call(this,a)}
function Lq(a){Kb.call(this,a)}
function Zq(a){Kb.call(this,a)}
function Zp(a){Yp.call(this,a)}
function sr(a){Yp.call(this,a)}
function zj(a){ed.call(this,a)}
function av(a){_u.call(this,a)}
function cv(){_u.call(this,Jx)}
function qr(){Up.call(this,'')}
function Hb(){this.I();this.K()}
function kb(a){R(this,(ui(),a))}
function ki(a){R(this,(ui(),a))}
function Yb(){Yb=ci;!!(nc(),mc)}
function jw(a,b,c){Tr(a.a,b,c)}
function Cm(a,b){return a.a[b]}
function Lk(a,b){return a.d-b.d}
function Xq(a,b){return a<b?a:b}
function hd(a,b){return qq(a,b)}
function yi(a,b){ui();si.X(a,b)}
function wi(a){ui();return true}
function hq(a){gq(a);return a.n}
function cj(a){$i();ui();return}
function ii(a){(ui(),a.s).src=''}
function Sv(a){this.a=new Pv(a)}
function fw(a){return new Sv(a)}
function Dp(a){return a.a&&a.p}
function zu(){vu();return new uu}
function vk(){uk();Hb.call(this)}
function nl(a){ol.call(this,a,a)}
function _t(a){this.c=a;Yt(this)}
function Jv(a){Fv(this);this.a=a}
function Li(a,b){a.__listener=b}
function nr(a,b){a.a+=b;return a}
function Qv(a,b){a.appendChild(b)}
function Rv(a,b){a.removeChild(b)}
function Vu(a,b,c){a.splice(b,c)}
function Vr(a,b){return ou(a.a,b)}
function eu(a,b){return Rr(a.a,b)}
function Wr(a){return a.a.c+a.b.c}
function ib(a,b){zc((ui(),a.s),b)}
function jb(a,b){Ac((ui(),a.s),b)}
function bl(a,b){Mk.call(this,a,b)}
function dl(a,b){this.c=a;this.d=b}
function Mk(a,b){this.c=a;this.d=b}
function fm(a,b){this.a=a;this.b=b}
function Ko(a,b){this.a=a;this.b=b}
function Lo(a,b){this.b=a;this.a=b}
function cn(a,b){this.b=a;this.a=b}
function Ms(a,b){this.a=a;this.b=b}
function Nt(a,b){this.b=a;this.a=b}
function pn(a,b){Mk.call(this,a,b)}
function _n(a,b){Mk.call(this,a,b)}
function Hv(a,b){a.apply(null,[b])}
function Fp(a,b){hw(a.b,new Ik(b))}
function Bu(a,b){return a.a.get(b)}
function dc(a){$wnd.clearTimeout(a)}
function Di(a){$wnd.clearTimeout(a)}
function dj(a){(Cc(),Bc).Q(a);ej(a)}
function Cc(){Cc=ci;Bc=Kd(Fh(),29)}
function ui(){ui=ci;si=Kd(Hh(),28)}
function zv(){zv=ci;wv={};yv={}}
function ec(){Vb!=0&&(Vb=0);Xb=-1}
function Yh(){Wh==null&&(Wh=[])}
function kj(){kj=ci;$i();Xi[ax]=cj}
function pu(a){this.a=zu();this.b=a}
function Du(a){this.a=zu();this.b=a}
function Jk(a){this.b=a;this.a=null}
function Ud(a){return a==null?null:a}
function gr(a,b){return a.substr(b)}
function vr(a,b){return br(a.a,b.a)}
function Mq(a,b){return Pq(a.a,b.a)}
function dr(a,b){return lv(a),a===b}
function kr(a){return lr(a,a.length)}
function yc(a){return (Cc(),Bc).T(a)}
function Wj(a){return (Cc(),Bc).R(a)}
function Nr(a){return !a?null:a.vb()}
function Ou(a){return a!=null?N(a):0}
function ap(a,b,c){return em(a,c,c,b)}
function Pq(a,b){return a<b?-1:a>b?1:0}
function Fj(a,b){tj(a,b,(ui(),a.s))}
function Ws(a,b){mt(a.a,a.a.length,b)}
function Zt(a){return a.a<a.c.a.length}
function sd(a,b,c){return {l:a,m:b,h:c}}
function td(a){return a.l+a.m*Uw+a.h*Vw}
function Ci(a){$wnd.clearInterval(a)}
function rr(a){Up.call(this,(lv(a),a))}
function Pv(a){Mp.call(this,new iw(a))}
function Qs(a){a.a=md(yg,zw,1,0,5,1)}
function Oj(){this.a=md(Te,zw,22,4,0,1)}
function Un(){this.a=new Um((Am(),zm))}
function Hj(){Hj=ci;new du;Gj=new gu}
function yj(){yj=ci;wj=new Bj;xj=new Dj}
function ev(a){if(!a){throw Lh(new Iq)}}
function pv(a){if(!a){throw Lh(new Kq)}}
function rv(a){if(!a){throw Lh(new Aq)}}
function hv(a){if(!a){throw Lh(new $p)}}
function jv(a){if(!a){throw Lh(new Mu)}}
function Ji(a){if(!Hi){a.W();Hi=true}}
function vv(a){return a.$H||(a.$H=++uv)}
function _q(a,b){return a.charCodeAt(b)}
function Od(a,b){return a!=null&&Jd(a,b)}
function wc(a,b){return (Cc(),Bc).S(a,b)}
function fu(a,b){return Vr(a.a,b)!=null}
function Tt(a,b){return !!b&&a.b[b.d]==b}
function sv(a,b){return a==b?0:a<b?-1:1}
function vc(b,a){return b.appendChild(a)}
function xc(b,a){return b.removeChild(a)}
function Qd(a){return typeof a==='number'}
function Sd(a){return typeof a==='string'}
function us(a){this.c=a;nv(a.b);this.a=0}
function Ab(a){this.f=a;this.I();this.K()}
function Ib(a){this.f=a;this.I();this.K()}
function gq(a){if(a.n!=null){return}uq(a)}
function or(a,b){a.a+=''+b;return a}
function pr(a,b){a.a+=''+b;return a}
function Nv(a,b){Qv(b,(ui(),a.s));Ep(a)}
function cp(a,b,c){dp.call(this,a,b,c,1)}
function Ik(a){Jk.call(this,(Oh(Wu()),a))}
function yk(){yk=ci;uk();xk=new zk;yb(tk)}
function Bk(){Bk=ci;uk();Ak=new Ck;yb(tk)}
function Fk(){Fk=ci;uk();Ek=new Gk;yb(tk)}
function hm(){hm=ci;gm=md(Wd,zw,6,0,15,1)}
function wt(a){var b;b=a[Xx]|0;a[Xx]=b+1}
function mw(a,b){return a!=null?a[b]:null}
function Rb(a){return a==null?null:a.name}
function Ph(a){return typeof a==='number'}
function Pd(a){return typeof a==='boolean'}
function cd(a){return (Cc(),Bc).N(a,'div')}
function cr(a,b,c){return kr(c.xb(a,0,b))}
function hr(a,b,c){return a.substr(b,c-b)}
function el(a,b){return wm(a.c,a.d,b.c,b.d)}
function ym(a){return Vd(a+(a<0?-0.5:0.5))}
function Km(a,b){return a.a[a.a.length-1-b]}
function Zb(a,b,c){return a.apply(b,c);var d}
function cq(a,b){aq();return a==b?0:a?1:-1}
function pw(a,b){ow();a['__gwtex_wrap']=b}
function xb(a,b){a.e=b;b!=null&&tv(b,Aw,a)}
function Ut(a,b){this.a=a;this.b=b;this.c=0}
function lw(){this.a=new du;new du;new du}
function Qb(a){return a==null?null:a.message}
function dd(a){return (Cc(),Bc).N(a,'video')}
function bd(a){return (Cc(),Bc).N(a,'canvas')}
function Gi(a,b){return $wnd.setTimeout(a,b)}
function Ov(a,b){Rv(b,(ui(),a.s));W(a);Lp(a)}
function iv(a,b){if(!a){throw Lh(new _p(b))}}
function fv(a,b){if(!a){throw Lh(new Jq(b))}}
function tv(b,c,d){try{b[c]=d}catch(a){}}
function uk(){uk=ci;tk=md(Ag,zw,215,0,0,1)}
function Wq(){Wq=ci;Vq=md(ug,zw,38,256,0,1)}
function tn(){pn.call(this,'DATA_MASK_001',1)}
function rn(){pn.call(this,'DATA_MASK_000',0)}
function vn(){pn.call(this,'DATA_MASK_010',2)}
function xn(){pn.call(this,'DATA_MASK_011',3)}
function Fn(){pn.call(this,'DATA_MASK_111',7)}
function Bn(){pn.call(this,'DATA_MASK_101',5)}
function zn(){pn.call(this,'DATA_MASK_100',4)}
function Dn(){pn.call(this,'DATA_MASK_110',6)}
function wo(a,b,c){Mk.call(this,a,b);this.a=c}
function No(a,b,c){dl.call(this,a,b);this.a=c}
function Iu(a,b,c){this.a=a;this.b=b;this.c=c}
function mt(a,b,c){gv(b,a.length);kt(a,0,b,c)}
function Rs(a,b){a.a[a.a.length]=b;return true}
function Kd(a,b){rv(a==null||Jd(a,b));return a}
function nq(a,b){var c;c=kq(a,b);c.f=2;return c}
function bq(a,b){return cq((lv(a),a),(lv(b),b))}
function Bq(a,b){return Cq((lv(a),a),(lv(b),b))}
function ar(a,b){return sv((lv(a),a),(lv(b),b))}
function rt(a,b){return lv(a),dq(a,(lv(b),b))}
function Rh(a,b){return Nh(zd(Ph(a)?Th(a):a,b))}
function St(a,b){return Od(b,13)&&Tt(a,Kd(b,13))}
function Ei(a,b){return qw(function(){a.V(b)})}
function ub(d,a,b,c){return d.putImageData(a,b,c)}
function sb(f,a,b,c,d,e){f.drawImage(a,b,c,d,e)}
function kd(a,b,c,d,e,f){return ld(a,b,c,d,e,0,f)}
function yt(a,b,c){Rt(a.a,b);return zt(a,b.d,c)}
function Ss(a,b){kv(b,a.a.length);return a.a[b]}
function Au(a,b){return !(a.a.get(b)===undefined)}
function hb(a){return (ui(),a.s).getContext('2d')}
function od(a){return Array.isArray(a)&&a.Mb===fi}
function Nd(a){return !Array.isArray(a)&&a.Mb===fi}
function Rd(a){return a!=null&&Td(a)&&!(a.Mb===fi)}
function Td(a){return typeof a===rw||typeof a===sw}
function Gp(a){a.a=true;a.a&&a.p&&Bi(a.i,a.f)}
function Ij(a){Hj();try{W(a)}finally{fu(Gj,a)}}
function Br(a){Jq.call(this,a==null?Fw:(lv(a),a))}
function Cr(a){Jq.call(this,a==null?Fw:(lv(a),a))}
function Kt(a){this.c=a;this.a=new _t(this.c.a)}
function xp(a){this.a=a[0];this.b=a[1];this.c=a[2]}
function kc(a,b){!a&&(a=[]);a[a.length]=b;return a}
function lq(a,b,c){var d;d=kq(a,b);yq(c,d);return d}
function zt(a,b,c){var d;d=a.b[b];a.b[b]=c;return d}
function kq(a,b){var c;c=new iq;c.i=a;c.d=b;return c}
function lv(a){if(a==null){throw Lh(new Yq)}return a}
function mv(a,b){if(a==null){throw Lh(new Zq(b))}}
function vt(a,b){if(b[Xx]!=a[Xx]){throw Lh(new xt)}}
function er(a,b,c,d){while(a<b){c[d++]=_q(Ox,a++)}}
function tb(e,a,b,c,d){return e.getImageData(a,b,c,d)}
function ud(a,b){return sd(a.l&b.l,a.m&b.m,a.h&b.h)}
function xd(a,b){return sd(a.l|b.l,a.m|b.m,a.h|b.h)}
function Hk(a,b,c){!a.a&&(a.a=new At(lf));yt(a.a,b,c)}
function Tp(a,b,c,d){a.a=hr(a.a,0,b)+(''+d)+gr(a.a,c)}
function Tr(a,b,c){return Sd(b)?Ur(a,b,c):nu(a.a,b,c)}
function pd(a,b,c){hv(c==null||gd(a,c));return a[b]=c}
function mr(a,b){a.a+=String.fromCharCode(b);return a}
function oq(a,b){var c;c=kq('',a);c.k=b;c.f=1;return c}
function cu(a,b){return Ud(a)===Ud(b)||a!=null&&J(a,b)}
function Nu(a,b){return Ud(a)===Ud(b)||a!=null&&J(a,b)}
function Eh(){if(Dh==2){return new pb}return new nb}
function Gh(){if(Dh==2){return new pi}return new ni}
function Vh(a){if(Ph(a)){return a|0}return a.l|a.m<<22}
function hi(a){(ui(),a.s).setAttribute('autoplay','')}
function T(a){(ui(),a.s).className='qrPreviewVideo'}
function Cv(){if(xv==256){wv=yv;yv={};xv=0}++xv}
function Fv(a){if(!Dv){Dv=true;ow();jw(nw,wh,a);Gv(a)}}
function cw(a){if(!bw){bw=true;ow();jw(nw,zh,a);dw(a)}}
function cc(a){Yb();$wnd.setTimeout(function(){throw a},0)}
function ir(a){return String.fromCharCode.apply(null,a)}
function vb(d,a,b,c){return d.data[4*(a+b*d.width)+c]||0}
function $l(a,b,c,d){Mk.call(this,a,b);this.b=c;this.a=d}
function dp(a,b,c,d){dl.call(this,a,b);this.b=c;this.a=d}
function Ap(a){Bp.call(this,a,(ui(),a.s).width,a.s.height)}
function Vj(){Vj=ci;Uj=Kd(Ih(),41);Od(Uj,60)?new Xj:Uj}
function nc(){nc=ci;var a,b;b=!qc();a=new uc;mc=b?new rc:a}
function lu(a,b){var c;c=a.a.get(b);return c==null?[]:c}
function zb(a,b){var c;c=hq(a.Kb);return b==null?c:c+': '+b}
function jl(a,b,c){var d;d=c*a.c+(b/32|0);a.a[d]^=1<<(b&31)}
function tj(a,b,c){X(b);Jj(a.o,b);ui();vc(c,xi(b.s));Y(b,a)}
function fo(a){this.b=ao(a>>3&3);this.a=(a&7)<<24>>24}
function ru(a){this.e=a;this.b=this.e.a.entries();this.a=[]}
function Em(a,b){if(b==0){throw Lh(new Iq)}return a.c[b]}
function qv(a,b){if(a>b||a<0){throw Lh(new sr(ay+a+by+b))}}
function Mh(a,b){return Nh(ud(Ph(a)?Th(a):a,Ph(b)?Th(b):b))}
function Qh(a,b){return Nh(xd(Ph(a)?Th(a):a,Ph(b)?Th(b):b))}
function Jr(a,b){return b===a?'(this Map)':b==null?Fw:ei(b)}
function br(a,b){return ar(a.toLowerCase(),b.toLowerCase())}
function Ur(a,b,c){return b==null?nu(a.a,null,c):Cu(a.b,b,c)}
function Uo(a){var b,c;b=new np(a.a);c=hp(b);return Wo(a,c)}
function Md(a){rv(a==null||Td(a)&&!(a.Mb===fi));return a}
function sq(a){if(a.mb()){return null}var b=a.k;return _h[b]}
function ct(a){jv(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function vs(a,b){ov(b,a.a.length);this.c=a;this.a=3;this.b=b-3}
function qq(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.hb(b))}
function Ki(a){var b=a.__listener;return !Rd(b)&&Od(b,31)?b:null}
function np(a){this.c=a;this.d=new Xs;this.a=md($d,Fx,6,5,15,1)}
function nv(a){if(0>a){throw Lh(new Yp('Index: 0, Size: '+a))}}
function xi(a){ui();return a.__gwt_resolve?a.__gwt_resolve():a}
function bo(){$n();return qd(hd(Nf,1),Ex,42,0,[Xn,Yn,Zn,Wn])}
function mu(a,b){var c;return ku(b,lu(a,b==null?0:(c=N(b),c|0)))}
function qj(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function Db(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function di(a){function b(){}
;b.prototype=a||{};return new b}
function Uh(a){var b;if(Ph(a)){b=a;return b==-0.?0:b}return Bd(a)}
function Io(a){Do();if(a<1||a>40){throw Lh(new Iq)}return Bo[a-1]}
function Dm(a,b){if(b==0){throw Lh(new Wp)}return a.a[a.f-a.c[b]-1]}
function bs(a,b){if(Od(b,19)){return Hr(a.a,Kd(b,19))}return false}
function Ft(a,b){if(Od(b,19)){return Hr(a.a,Kd(b,19))}return false}
function ac(a,b,c){var d;d=$b();try{return Zb(a,b,c)}finally{bc(d)}}
function Nj(a,b){var c;c=Kj(a,b);if(c==-1){throw Lh(new Mu)}Mj(a,c)}
function mq(a,b,c,d){var e;e=kq(a,b);yq(c,e);e.f=d?8:0;e.e=d;return e}
function cm(a,b,c,d,e){this.f=a;this.a=b;this.b=c;this.d=e;this.e=d}
function mm(a){hm();this.d=a;this.c=gm;this.b=md($d,Fx,6,32,15,1)}
function Vd(a){return Math.max(Math.min(a,tw),-2147483648)|0}
function rb(a,b){return !!a&&!!a.equals?a.equals(b):Ud(a)===Ud(b)}
function Ai(a){if(!a.d){return}++a.b;a.c?Ci(a.d.a):Di(a.d.a);a.d=null}
function $t(a){jv(a.a<a.c.a.length);a.b=a.a;Yt(a);return a.c.b[a.b]}
function Qn(a){if(a>=Hn.length){throw Lh((Bk(),Bk(),Ak))}return Hn[a]}
function Pu(a,b){!a.a?(a.a=new rr(a.d)):pr(a.a,a.b);or(a.a,b);return a}
function Vs(a,b,c){var d;d=(kv(b,a.a.length),a.a[b]);a.a[b]=c;return d}
function jp(a){a.a[0]=0;a.a[1]=0;a.a[2]=0;a.a[3]=0;a.a[4]=0;return a.a}
function rd(a){var b,c,d;b=a&Sw;c=a>>22&Sw;d=a<0?Tw:0;return sd(b,c,d)}
function Us(a,b){var c;c=(kv(b,a.a.length),a.a[b]);Vu(a.a,b,1);return c}
function ao(a){$n();if(a<0||a>=Vn.length){throw Lh(new Iq)}return Vn[a]}
function Ub(){if(Date.now){return Date.now()}return (new Date).getTime()}
function _b(b){Yb();return function(){return ac(b,this,arguments);var a}}
function qn(){nn();return qd(hd(Lf,1),Ex,15,0,[en,fn,gn,hn,jn,kn,ln,mn])}
function ur(){Kb.call(this,'Remove not supported on this list')}
function Fu(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function Qu(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function wm(a,b,c,d){var e,f;e=a-c;f=b-d;return $wnd.Math.sqrt(e*e+f*f)}
function xm(a,b,c,d){var e,f;e=a-c;f=b-d;return $wnd.Math.sqrt(e*e+f*f)}
function kl(a,b,c){var d;d=c*a.c+(b/32|0);return (a.a[d]>>>(b&31)&1)!=0}
function vo(a,b){var c,d;c=b.d;c<=9?(d=0):c<=26?(d=1):(d=2);return a.a[d]}
function hs(a){var b;vt(a.d,a);jv(a.b);b=Kd(a.a._(),19);a.b=gs(a);return b}
function Kj(a,b){var c;for(c=0;c<a.b;++c){if(a.a[c]==b){return c}}return -1}
function bc(a){a&&ic((gc(),fc));--Vb;if(a){if(Xb!=-1){dc(Xb);Xb=-1}}}
function $u(){$u=ci;Zu=new cv;Yu=new av('ISO-LATIN-1');Xu=new av(Hx)}
function Fd(){Fd=ci;Cd=sd(Sw,Sw,524287);Dd=sd(0,0,Ww);rd(1);rd(2);Ed=rd(0)}
function ej(a){var b;b=gj(a);if(!b){return}vi(a,b.nodeType!=1?null:b,Ki(b))}
function eb(a){var b;V(a);b=Wj((ui(),a.s));-1==b&&(a.s.tabIndex=0,undefined)}
function Ys(a){Qs(this);fv(a>=0,'Initial capacity must not be negative')}
function Wu(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Fm(a,b,c){if(b==0||c==0){return 0}return a.a[(a.c[b]+a.c[c])%(a.f-1)]}
function kv(a,b){if(a<0||a>=b){throw Lh(new Yp('Index: '+a+', Size: '+b))}}
function Qj(a){if(a.b>=a.c.b){throw Lh(new Mu)}a.a=a.c.a[a.b];++a.b;return a.a}
function Ts(a,b,c){for(;c<a.a.length;++c){if(Nu(b,a.a[c])){return c}}return -1}
function Su(a,b,c,d){Array.prototype.splice.apply(a,[b,c].concat(d))}
function kt(a,b,c,d){var e;d=(qt(),!d?pt:d);e=a.slice(b,c);lt(e,a,b,c,-b,d)}
function md(a,b,c,d,e,f){var g;g=nd(e,d);e!=10&&qd(hd(a,f),b,c,e,g);return g}
function Zl(a,b,c,d){Mk.call(this,a,b);this.b=qd(hd($d,1),Fx,6,15,[c]);this.a=d}
function bn(a){var b;b=a.b;if(b<21||(b&3)!=1){throw Lh((Bk(),Bk(),Ak))}this.a=a}
function fj(a){var b;b=(Cc(),Bc).O(a);b['__gwtLastUnhandledEvent']=a.type;ej(a)}
function gj(a){var b;b=(Cc(),Bc).O(a);while(!!b&&!Ki(b)){b=b.parentNode}return b}
function Dc(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function Yt(a){var b;++a.a;for(b=a.c.a.length;a.a<b;++a.a){if(a.c.b[a.a]){return}}}
function hc(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=lc(b,c)}while(a.a);a.a=c}}
function ic(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=lc(b,c)}while(a.b);a.b=c}}
function Rr(a,b){return Sd(b)?b==null?!!mu(a.a,null):Au(a.b,b):!!mu(a.a,b)}
function Sr(a,b){return Sd(b)?b==null?Nr(mu(a.a,null)):Bu(a.b,b):Nr(mu(a.a,b))}
function jd(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function yo(){uo();return qd(hd(Pf,1),Ex,23,0,[to,ro,ko,so,lo,mo,qo,no,oo,po])}
function cl(){al();return qd(hd(lf,1),Ex,20,0,[Vk,Uk,Rk,Sk,Tk,$k,Xk,_k,Wk,Zk,Yk])}
function Yl(){$l.call(this,'Big5',24,qd(hd($d,1),Fx,6,15,[28]),qd(hd(Dg,1),zw,2,6,[]))}
function In(){var a,b;In=ci;Hn=(a=Ox.length,b=md(Xd,zw,6,a,15,1),er(0,a,b,0),b)}
function jm(a,b){var c;a.c.length<b&&(a.c=md(Wd,zw,6,b,15,1));for(c=0;c<32;c++){a.b[c]=0}}
function zo(a,b){var c;if(!a.a||b==null||b.length<3){return}c=b[0];b[0]=b[2];b[2]=c}
function go(a,b){eo();var c;c=ho(a,b);if(c){return c}return ho(a^21522,b^21522)}
function _l(a){Xl();if(a<0||a>=900){throw Lh((Bk(),Bk(),Ak))}return Kd(Sr(Wl,Uq(a)),12)}
function Nh(a){var b;b=a.h;if(b==0){return a.l+a.m*Uw}if(b==Tw){return a.l+a.m*Uw-Vw}return a}
function Kh(a){var b;if(Od(a,8)){return a}b=a&&a[Aw];if(!b){b=new Pb(a);oc(b)}return b}
function yq(a,b){var c;if(!a){return}b.k=a;var d=sq(b);if(!d){_h[a]=[b];return}d.Kb=b}
function Rt(a,b){var c;lv(b);c=b.d;if(!a.b[c]){pd(a.b,c,b);++a.c;return true}return false}
function Ld(a){var b;rv(a==null||Array.isArray(a)&&(b=jd(a),!(b>=14&&b<=16)));return a}
function nt(a){var b,c,d;d=0;for(c=a.Y();c.$();){b=c._();d=d+(b!=null?N(b):0);d=d|0}return d}
function ot(a){var b,c,d;d=1;for(c=a.Y();c.$();){b=c._();d=31*d+(b!=null?N(b):0);d=d|0}return d}
function Er(a,b){var c,d;lv(b);for(d=b.Y();d.$();){c=d._();if(!a.nb(c)){return false}}return true}
function _j(){var a,b,c;b=Kd(Jh(),55);a=b.ab();c=b.bb();if(!dr(a,c)){throw Lh(new bk(a,c))}}
function Th(a){var b,c,d,e;e=a;d=0;if(e<0){e+=Vw;d=Tw}c=Vd(e/Uw);b=Vd(e-c*Uw);return sd(b,c,d)}
function Ad(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return sd(c&Sw,d&Sw,e&Tw)}
function yb(a){var b,c,d;d=a.length;b=md(Ag,zw,215,d,0,1);for(c=0;c<d;++c){b[c]=(lv(a[c]),a[c])}}
function Xh(){Yh();var a=Wh;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function du(){var a;this.a=new pu(this);this.b=new Du(this);a=this[Xx]|0;this[Xx]=a+1}
function $h(a,b){typeof window===rw&&typeof window['$gwt']===rw&&(window['$gwt'][a]=b)}
function vi(a,b,c){ui();var d;d=ri;ri=a;b==ti&&Ii((Cc(),a).type)==8192&&(ti=null);c.D(a);ri=d}
function Uu(a,b){var c;c=new Array(b);return jd(a)!=10&&qd(L(a),a.Lb,a.__elementTypeId$,jd(a),c),c}
function tp(a,b,c){var d,e;d=$wnd.Math.abs(c.b-a.a);e=$wnd.Math.abs(b.b-a.a);return d<e?-1:d==e?0:1}
function Oh(a){if(Xw<a&&a<Vw){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return Nh(wd(a))}
function gs(a){if(a.a.$()){return true}if(a.a!=a.c){return false}a.a=new ru(a.d.a);return a.a.$()}
function Cq(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return 0}return isNaN(a)?isNaN(b)?0:1:-1}
function Fh(){switch(Dh){case 2:return new Pc;case 4:return new ad;case 0:return new Yc;}return new Vc}
function Hh(){switch(Dh){case 2:return new Ui;case 0:return new mj;case 4:return new pj;}return new jj}
function Ih(){switch(Dh){case 0:return new Zj;case 1:return new Xj;case 4:return new $j;}return new Yj}
function nn(){nn=ci;en=new rn;fn=new tn;gn=new vn;hn=new xn;jn=new zn;kn=new Bn;ln=new Dn;mn=new Fn}
function pc(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||'anonymous'}
function ku(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(cu(a,c.ub())){return c}}return null}
function qd(a,b,c,d,e){e.Kb=a;e.Lb=b;e.Mb=fi;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Qo(a,b){var c,d,e;e=a.d;d=e/2;for(c=0;c<3;c++){if($wnd.Math.abs(e-b[c])>=d){return false}}return true}
function ht(a){var b,c,d,e;if(a==null){return 0}e=1;for(c=0,d=a.length;c<d;++c){b=a[c];e=31*e+b;e=e|0}return e}
function Mj(a,b){var c;if(b<0||b>=a.b){throw Lh(new Xp)}--a.b;for(c=b;c<a.b;++c){a.a[c]=a.a[c+1]}a.a[a.b]=null}
function Bi(a,b){if(b<0){throw Lh(new Jq('must be non-negative'))}!!a.d&&Ai(a);a.c=false;a.d=Uq(Gi(Ei(a,a.b),b))}
function gv(a,b){if(0>a){throw Lh(new Jq('fromIndex: 0 > toIndex: '+a))}if(a>b){throw Lh(new Zp(ay+a+by+b))}}
function jr(b){try{return yr(b)}catch(a){a=Kh(a);if(Od(a,67)){throw Lh(new Sp(b))}else throw Lh(a)}}
function J(a,b){return Sd(a)?dr(a,b):Qd(a)?(lv(a),a===b):Pd(a)?(lv(a),a===b):Nd(a)?a.t(b):od(a)?a===b:rb(a,b)}
function L(a){return Sd(a)?Dg:Qd(a)?ng:Pd(a)?kg:Nd(a)?a.Kb:od(a)?a.Kb:a.Kb||Array.isArray(a)&&hd(ee,1)||ee}
function is(a){var b;this.d=a;this.c=new Fu(this.d.b);this.a=this.c;this.b=gs(this);b=a[Xx];this[Xx]=b}
function iq(){++fq;this.n=null;this.j=null;this.i=null;this.d=null;this.b=null;this.k=null;this.a=null}
function Pb(a){Nb();this.I();this.e=a;a!=null&&tv(a,Aw,this);this.f=a==null?Fw:ei(a);this.a='';this.b=a;this.a=''}
function sm(a,b,c,d,e,f,g,h,i){this.a=a;this.b=d;this.c=g;this.d=b;this.e=e;this.f=h;this.i=c;this.j=f;this.k=i}
function jt(a,b,c,d,e,f,g,h){var i;i=c;while(f<g){i>=d||b<c&&h.eb(a[b],a[i])<=0?pd(e,f++,a[b++]):pd(e,f++,a[i++])}}
function on(a,b,c){var d,e,f;for(d=0;d<c;d++){for(e=0;e<c;e++){a.db(d,e)&&(f=d*b.c+(e/32|0),b.a[f]^=1<<(e&31))}}}
function Dr(a,b){var c,d;for(d=a.Y();d.$();){c=d._();if(Ud(b)===Ud(c)||b!=null&&J(b,c)){return true}}return false}
function Uq(a){var b,c;if(a>-129&&a<128){b=a+128;c=(Wq(),Vq)[b];!c&&(c=Vq[b]=new Nq(a));return c}return new Nq(a)}
function Bm(a,b,c){var d;if(b<0){throw Lh(new Iq)}if(c==0){return a.i}d=md($d,Fx,6,b+1,15,1);d[0]=c;return new Om(a,d)}
function Sh(a,b){var c;if(Ph(a)&&Ph(b)){c=a-b;if(Xw<c&&c<Vw){return c}}return Nh(Ad(Ph(a)?Th(a):a,Ph(b)?Th(b):b))}
function Ep(b){var c;V(b);ii(b.k);try{Kp(P(b.k),b)}catch(a){a=Kh(a);if(Od(a,8)){c=a;Fp(b,c.J())}else throw Lh(a)}}
function Cu(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;wt(a.b)}else{++a.d}return d}
function lr(a,b){var c,d,e;qv(b,a.length);e='';for(d=0;d<b;){c=d+10000<b?d+10000:b;e+=ir(a.slice(d,c));d=c}return e}
function Ym(a){var b,c;for(b=0;b<a.a.d;b++){for(c=b+1;c<a.a.b;c++){if(kl(a.a,b,c)!=kl(a.a,c,b)){jl(a.a,c,b);jl(a.a,b,c)}}}}
function it(a,b,c,d){var e,f,g;for(e=b+1;e<c;++e){for(f=e;f>b&&d.eb(a[f-1],a[f])>0;--f){g=a[f];pd(a,f,a[f-1]);pd(a,f-1,g)}}}
function At(a){var b;this.a=(b=Kd(a.e&&a.e(),21),new Ut(b,Kd(Uu(b,b.length),21)));this.b=md(yg,zw,1,this.a.a.length,5,1)}
function So(a,b,c,d,e,f){this.c=a;this.e=new Ys(5);this.f=b;this.i=c;this.j=d;this.b=e;this.d=f;this.a=md($d,Fx,6,3,15,1)}
function S(a,b,c){b>=0&&((ui(),a.s).style['width']=b+'px',undefined);c>=0&&((ui(),a.s).style['height']=c+'px',undefined)}
function ei(a){if(Array.isArray(a)&&a.Mb===fi){return hq(L(a))+'@'+(N(a)>>>0).toString(16)}return a.toString()}
function ai(){_h={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}
function li(){db();var a;!ji&&(ji=Kd(Gh(),57));if(!ji.U()){return null}a=dd($doc);if(!a.canPlayType){return null}return new ki(a)}
function lb(){db();var a;!gb&&(gb=Kd(Eh(),58));if(!gb.G()){return null}a=bd($doc);if(!a.getContext){return null}return new kb(a)}
function Jh(){switch(Dh){case 1:return new fk;case 4:return new ok;case 0:return new ck;case 2:return new ik;}return new lk}
function gi(){$wnd.setTimeout(qw(_j));zi();ow();new Iv;new ew;$wnd.JsQRScannerReady&&$wnd.JsQRScannerReady()}
function Lp(b){if(b.n){var c=b.n;c.stop?c.stop():c.getTracks&&c.getTracks().forEach(function(a){a.stop()});b.n=null}}
function ms(a,b){var c,d;d=new us(a);for(c=0;c<b;++c){jv(d.a<d.c.ob());d.c.sb(d.b=d.a++);pv(d.b!=-1);d.c.tb(d.b);d.a=d.b;d.b=-1}}
function Ir(a,b){var c,d,e;for(d=a.qb().Y();d.$();){c=Kd(d._(),19);e=c.ub();if(Ud(b)===Ud(e)||b!=null&&J(b,e)){return c}}return null}
function $b(){var a;if(Vb!=0){a=Ub();if(a-Wb>2000){Wb=a;Xb=$wnd.setTimeout(ec,10)}}if(Vb++==0){hc((gc(),fc));return true}return false}
function Oq(a){a-=a>>1&1431655765;a=(a>>2&858993459)+(a&858993459);a=(a>>4)+a&252645135;a+=a>>8;a+=a>>16;return a&63}
function an(a){var b,c;if(!a.c){return}b=(nn(),qd(hd(Lf,1),Ex,15,0,[en,fn,gn,hn,jn,kn,ln,mn]))[a.c.a];c=a.a.b;on(b,a.a,c)}
function am(){Xl();return qd(hd(qf,1),Ex,12,0,[Al,Dl,Kl,Ll,Ml,Nl,Ol,Pl,Ql,Rl,El,Fl,Gl,Hl,Il,Jl,Tl,wl,xl,yl,zl,Vl,Ul,ul,vl,Cl,Bl])}
function $n(){$n=ci;Xn=new _n('L',0);Yn=new _n('M',1);Zn=new _n('Q',2);Wn=new _n('H',3);Vn=qd(hd(Nf,1),Ex,42,0,[Yn,Xn,Wn,Zn])}
function Am(){Am=ci;new Gm(4201,4096,1);new Gm(1033,1024,1);new Gm(67,64,1);new Gm(19,16,1);zm=new Gm(285,256,0);new Gm(301,256,1)}
function Bv(a){zv();var b,c,d;c=':'+a;d=yv[c];if(!(d===undefined)){return d}d=wv[c];b=d===undefined?Av(a):d;Cv();yv[c]=b;return b}
function xq(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function Si(){var a=false;for(var b=0;b<$wnd.__gwt_globalEventArray.length;b++){!$wnd.__gwt_globalEventArray[b]()&&(a=true)}return !a}
function qc(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function pp(a,b,c){var d,e;if(c.a==b.a){d=$wnd.Math.abs(c.b-a.a);e=$wnd.Math.abs(b.b-a.a);return d<e?1:d==e?0:-1}else{return c.a-b.a}}
function Mo(a,b,c,d){var e;if($wnd.Math.abs(c-a.d)<=b&&$wnd.Math.abs(d-a.c)<=b){e=$wnd.Math.abs(b-a.a);return e<=1||e<=a.a}return false}
function bp(a,b,c,d){var e;if($wnd.Math.abs(c-a.d)<=b&&$wnd.Math.abs(d-a.c)<=b){e=$wnd.Math.abs(b-a.b);return e<=1||e<=a.b}return false}
function N(a){return Sd(a)?Bv(a):Qd(a)?Vd((lv(a),a)):Pd(a)?(lv(a),a)?1231:1237:Nd(a)?a.v():od(a)?vv(a):!!a&&!!a.hashCode?a.hashCode():vv(a)}
function dq(a,b){aq();return Sd(a)?ar(a,(rv(b==null||Sd(b)),b)):Qd(a)?Bq(a,(rv(b==null||Qd(b)),b)):Pd(a)?bq(a,(rv(b==null||Pd(b)),b)):a.cb(b)}
function ov(a,b){if(a>b){throw Lh(new Yp('fromIndex: 3, toIndex: '+a+', size: '+b))}if(3>a){throw Lh(new Jq('fromIndex: 3 > toIndex: '+a))}}
function eq(a,b,c){ev(a>=0&&a<=1114111);if(a>=_w){b[c++]=55296+(a-_w>>10&1023)&Nw;b[c]=56320+(a-_w&1023)&Nw;return 2}else{b[c]=a&Nw;return 1}}
function Fo(a,b,c){var d,e,f,g,h,i;this.d=a;this.a=b;this.b=c;i=0;g=c[0].b;h=c[0].a;for(e=0,f=h.length;e<f;++e){d=h[e];i+=d.a*(d.b+g)}this.c=i}
function Jd(a,b){if(Sd(a)){return !!Id[b]}else if(a.Lb){return !!a.Lb[b]}else if(Qd(a)){return !!Hd[b]}else if(Pd(a)){return !!Gd[b]}return false}
function pm(a,b,c,d,e,f){var g,h,i,j;for(j=0,h=c*e+b;j<8;++j,h+=e){for(i=0;i<8;i++){(a[h+i]&255)<=d&&(g=(c+j)*f.c+((b+i)/32|0),f.a[g]|=1<<(b+i&31))}}}
function X(a){if(!a.r){Hj();eu(Gj,a)&&Ij(a)}else if(a.r){uj(a.r,a)}else if(a.r){throw Lh(new Lq("This widget's parent does not implement HasWidgets"))}}
function ml(a){var b,c,d,e;c=new qr;for(e=0;e<a.b;e++){for(d=0;d<a.d;d++){pr(c,(b=e*a.c+(d/32|0),(a.a[b]>>>(d&31)&1)!=0?'X ':'  '))}c.a+='\n'}return c.a}
function Hr(a,b){var c,d,e;c=b.ub();e=b.vb();d=a.rb(c);if(!(Ud(e)===Ud(d)||e!=null&&J(e,d))){return false}if(d==null&&!a.pb(c)){return false}return true}
function Tu(a,b,c,d,e){var f,g,h;if(Ud(a)===Ud(c)){a=a.slice(b,b+e);b=0}for(g=b,h=b+e;g<h;){f=g+10000<h?g+10000:h;e=f-g;Su(c,d,e,a.slice(g,f));g=f;d+=e}}
function nd(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Ho(b){Do();if(b%4!=1){throw Lh((Bk(),Bk(),Ak))}try{return Io((b-17)/4|0)}catch(a){a=Kh(a);if(Od(a,11)){throw Lh((Bk(),Bk(),Ak))}else throw Lh(a)}}
function kw(a){var b,c,d,e,f;f=fr(a);e=$wnd;b=0;for(c=f.length-1;b<c;b++){if(!dr(f[b],'client')){e[f[b]]||(e[f[b]]={});e=mw(e,f[b])}}d=mw(e,f[b]);return d}
function Bd(a){var b,c,d;if(vd(a,(Fd(),Ed))<0){return -td((b=~a.l+1&Sw,c=~a.m+(b==0?1:0)&Sw,d=~a.h+(b==0&&c==0?1:0)&Tw,sd(b,c,d)))}return a.l+a.m*Uw+a.h*Vw}
function bk(a,b){var c;ak.call(this,(c=ox+a+') '+px+b+qx+rx==null?Fw:ei(ox+a+') '+px+b+qx+rx),Od(ox+a+') '+px+b+qx+rx,8)?Kd(ox+a+') '+px+b+qx+rx,8):null,c))}
function ol(a,b){if(a<1||b<1){throw Lh(new Jq('Both dimensions must be greater than 0'))}this.d=a;this.b=b;this.c=(a+31)/32|0;this.a=md($d,Fx,6,this.c*b,15,1)}
function Lm(a,b){var c,d,e;if(b==0){return a.b.i}if(b==1){return a}e=a.a.length;d=md($d,Fx,6,e,15,1);for(c=0;c<e;c++){d[c]=Fm(a.b,a.a[c],b)}return new Om(a.b,d)}
function Nm(a,b,c){var d,e,f;if(b<0){throw Lh(new Iq)}if(c==0){return a.b.i}f=a.a.length;e=md($d,Fx,6,f+b,15,1);for(d=0;d<f;d++){e[d]=Fm(a.b,a.a[d],c)}return new Om(a.b,e)}
function _o(a,b,c,d,e){var f,g,h,i,j;h=e-3.5;if(d){f=d.c;g=d.d;i=h-3;j=i}else{f=b.c-a.c+c.c;g=b.d-a.d+c.d;i=h;j=h}return tm(h,i,j,h,a.c,a.d,b.c,b.d,f,g,c.c,c.d)}
function yp(a){var b,c,d,e,f,g,h,i;i=a.f;c=a.e;b=i*c;f=md(Wd,zw,6,b,15,1);for(d=0;d<i;d++)for(e=0;e<c;e++){h=vb(a.b,a.c+d,a.d+e,0);g=h<<24>>24;f[d+e*i]=g}return f}
function vd(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function Zh(b,c,d,e){Yh();var f=Wh;$moduleName=c;$moduleBase=d;Dh=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{qw(g)()}catch(a){b(c,a)}}else{qw(g)()}}
function Go(a){Do();var b,c,d,e,f;b=tw;c=0;for(e=0;e<Co.length;e++){f=Co[e];if(f==a){return Io(e+7)}d=(eo(),Oq(a^f));if(d<b){c=e+7;b=d}}if(b<=3){return Io(c)}return null}
function ld(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=nd(h,k);d!=10&&qd(hd(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=ld(a,b,c,d,e,f,g)}}return l}
function To(a,b,c){var d,e;d=Yo(a,Vd(b.c),Vd(b.d),Vd(c.c),Vd(c.d));e=Yo(a,Vd(c.c),Vd(c.d),Vd(b.c),Vd(b.d));if(isNaN(d)){return e/7}if(isNaN(e)){return d/7}return (d+e)/14}
function xu(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map===sw&&Map.prototype.entries&&b()){return Map}else{return yu()}}
function uj(a,b){var c,d;if(b.r!=a){return false}try{Y(b,null)}finally{c=(ui(),b.s);xc((null,d=(Cc(),c).parentNode,(!d||d.nodeType!=1)&&(d=null),d),c);Nj(a.o,b)}return true}
function qm(a){return new sm(a.e*a.k-a.f*a.j,a.f*a.i-a.d*a.k,a.d*a.j-a.e*a.i,a.c*a.j-a.b*a.k,a.a*a.k-a.c*a.i,a.b*a.i-a.a*a.j,a.b*a.f-a.c*a.e,a.c*a.d-a.a*a.f,a.a*a.e-a.b*a.d)}
function _i(){Yi=qw(ej);Zi=qw(fj);var c=qj;var d=Vi;c(d,function(a,b){d[a]=qw(b)});var e=Xi;c(e,function(a,b){e[a]=qw(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function Ob(a){var b;if(a.c==null){b=Ud(a.b)===Ud(Mb)?null:a.b;a.d=b==null?Fw:Rd(b)?Rb(Md(b)):Sd(b)?'String':hq(L(b));a.a=a.a+': '+(Rd(b)?Qb(Md(b)):b+'');a.c='('+a.d+') '+a.a}}
function W(a){if(!a.p){throw Lh(new Lq("Should only call onDetach when the widget is attached to the browser's document"))}try{a.B()}finally{ui();a.s.__listener=null;a.p=false}}
function wb(a,b){mv(b,'Cannot suppress a null exception.');fv(b!=a,'Exception can not suppress itself.');if(a.i){return}a.j==null?(a.j=qd(hd(Eg,1),zw,8,0,[b])):(a.j[a.j.length]=b)}
function Pn(a){var b,c,d;b=sl(a,8);if((b&128)==0){return b&127}if((b&192)==128){c=sl(a,8);return (b&63)<<8|c}if((b&224)==192){d=sl(a,16);return (b&31)<<16|d}throw Lh((Bk(),Bk(),Ak))}
function Y(a,b){var c;c=a.r;if(!b){try{!!c&&c.p&&W(a)}finally{a.r=null}}else{if(c){throw Lh(new Lq('Cannot set a new parent without first clearing the old parent'))}a.r=b;b.p&&eb(a)}}
function Aj(b,c){yj();var d,e,f,g;d=null;for(g=b.Y();g.b<g.c.b;){f=Qj(g);try{c.Z(f)}catch(a){a=Kh(a);if(Od(a,8)){e=a;!d&&(d=new gu);Tr(d.a,e,d)}else throw Lh(a)}}if(d){throw Lh(new zj(d))}}
function gt(a,b){var c;if(Ud(a)===Ud(b)){return true}if(a==null||b==null){return false}if(a.length!=b.length){return false}for(c=0;c<a.length;++c){if(a[c]!==b[c]){return false}}return true}
function $o(a,b,c,d){var e,f,g;g=ym(wm(a.c,a.d,b.c,b.d)/d);f=ym(wm(a.c,a.d,c.c,c.d)/d);e=((g+f)/2|0)+7;switch(e&3){case 0:++e;break;case 2:--e;break;case 3:throw Lh((Fk(),Fk(),Ek));}return e}
function yd(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return sd(c&Sw,d&Sw,e&Tw)}
function lc(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Nb()&&(c=kc(c,g)):g[0].Nb()}catch(a){a=Kh(a);if(Od(a,8)){d=a;Yb();cc(Od(d,51)?Kd(d,51).L():d)}else throw Lh(a)}}return c}
function rm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,q;n=b.length;c=a.a;d=a.b;e=a.c;f=a.d;g=a.e;h=a.f;i=a.i;j=a.j;k=a.k;for(m=0;m<n;m+=2){o=b[m];q=b[m+1];l=e*o+h*q+k;b[m]=(c*o+f*q+i)/l;b[m+1]=(d*o+g*q+j)/l}}
function nu(a,b,c){var d,e,f,g,h;h=b==null?0:(g=N(b),g|0);e=(d=a.a.get(h),d==null?[]:d);if(e.length==0){a.a.set(h,e)}else{f=ku(b,e);if(f){return f.wb(c)}}pd(e,e.length,new Ms(b,c));++a.c;wt(a.b);return null}
function Oc(a,b){if(a.nodeType!=1&&a.nodeType!=9){return a==b}if(b.nodeType!=1){b=b.parentNode;if(!b){return false}}if(a.nodeType==9){return a===b||a.body&&a.body.contains(b)}else{return a===b||a.contains(b)}}
function Lj(a,b,c){var d,e,f;if(c<0||c>a.b){throw Lh(new Xp)}if(a.b==a.a.length){f=md(Te,zw,22,a.a.length*2,0,1);for(e=0;e<a.a.length;++e){f[e]=a.a[e]}a.a=f}++a.b;for(d=a.b-1;d>c;--d){a.a[d]=a.a[d-1]}a.a[c]=b}
function lt(a,b,c,d,e,f){var g,h,i,j;g=d-c;if(g<7){it(b,c,d,f);return}i=c+e;h=d+e;j=i+(h-i>>1);lt(b,a,i,j,-e,f);lt(b,a,j,h,-e,f);if(f.eb(a[j-1],a[j])<=0){while(c<d){pd(b,c++,a[i++])}return}jt(a,i,j,h,b,c,d,f)}
function Av(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+_q(a,c++)}b=b|0;return b}
function Mp(a){this.o=new Oj;Q(this,cd($doc));this.k=li();this.c=lb();this.d=new Xm;this.e=new Xs;this.f=300;this.j=-1;this.a=true;this.b=a;Rs(this.e,this.d);this.i=new Rp(this);Fj(this,this.k);T(this.k);hi(this.k)}
function lm(a){var b,c,d,e,f,g,h,i;if(a.a){return a.a}f=a.d;i=f.f;c=f.e;if(i>=40&&c>=40){d=yp(f);h=i>>3;(i&7)!=0&&++h;g=c>>3;(c&7)!=0&&++g;b=nm(d,h,g,i,c);e=new ol(i,c);om(d,h,g,i,c,b,e);a.a=e}else{a.a=im(a)}return a.a}
function zp(a,b,c){var d,e,f;if(b<0||b>=a.e){throw Lh(new Jq('Requested row is outside the image: '+b))}e=a.f;(c==null||c.length<e)&&(c=md(Wd,zw,6,e,15,1));f=a.d+b;for(d=0;d<e;d++){c[d]=vb(a.b,a.c+d,f,0)<<24>>24}return c}
function Jm(a,b){var c,d,e,f,g,h,i,j;if(b==0){return a.a[a.a.length-1]}j=a.a.length;if(b==1){i=0;for(d=a.a,e=0,f=d.length;e<f;++e){c=d[e];i=(Am(),i^c)}return i}h=a.a[0];for(g=1;g<j;g++){h=(Am(),Fm(a.b,b,h)^a.a[g])}return h}
function ou(a,b){var c,d,e,f,g,h;g=(f=vv(b),f|0);d=(c=a.a.get(g),c==null?[]:c);for(h=0;h<d.length;h++){e=d[h];if(cu(b,e.ub())){if(d.length==1){d.length=0;a.a[Zx](g)}else{d.splice(h,1)}--a.c;wt(a.b);return e.vb()}}return null}
function ip(a){var b,c,d,e;e=a.d.a.length;if(e<=1){return 0}d=null;for(c=new dt(a.d);c.a<c.c.a.length;){b=Kd(ct(c),16);if(b.a>=2){if(!d){d=b}else{a.b=true;return Vd($wnd.Math.abs(d.c-b.c)-$wnd.Math.abs(d.d-b.d))/2|0}}}return 0}
function Hp(b){var c,d,e,f;if(!(b.a&&b.p))return;try{c=Cp(b);if(c){for(e=new dt(b.e);e.a<e.c.a.length;){d=Kd(ct(e),213);try{f=Wm(d,c);hw(b.b,f);return}catch(a){a=Kh(a);if(!Od(a,10))throw Lh(a)}}}}finally{b.a&&b.p&&Bi(b.i,b.f)}}
function V(a){var b;if(a.p){throw Lh(new Lq("Should only call onAttach when the widget is detached from the browser's document"))}a.p=true;ui();Li(a.s,a);b=a.q;a.q=-1;b>0&&(a.q==-1?yi(a.s,b|(a.s.__eventBits||0)):(a.q|=b));a.A()}
function xo(a){uo();switch(a){case 0:return to;case 1:return ro;case 2:return ko;case 3:return so;case 4:return lo;case 5:return no;case 7:return mo;case 8:return qo;case 9:return oo;case 13:return po;default:throw Lh(new Iq);}}
function Vo(a,b,c,d,e){var f,g,h,i,j,k;k=Vd(e*b);g=0>c-k?0:c-k;h=Xq(a.a.d-1,c+k);if(h-g<b*3){throw Lh((Fk(),Fk(),Ek))}i=0>d-k?0:d-k;f=Xq(a.a.b-1,d+k);if(f-i<b*3){throw Lh((Fk(),Fk(),Ek))}j=new So(a.a,g,i,h-g,f-i,b);return Po(j)}
function Rn(b,c,d){var e,f,g,h,i;h=c.length;e=md($d,Fx,6,h,15,1);for(g=0;g<h;g++){e[g]=c[g]&255}i=c.length-d;try{Qm(b.a,e,i)}catch(a){a=Kh(a);if(Od(a,49)){throw Lh((yk(),yk(),xk))}else throw Lh(a)}for(f=0;f<d;f++){c[f]=e[f]<<24>>24}}
function ho(a,b){var c,d,e,f,g,h,i,j;c=tw;d=0;for(g=co,h=0,i=g.length;h<i;++h){f=g[h];j=f[0];if(j==a||j==b){return new fo(f[1])}e=Oq(a^j);if(e<c){d=f[1];c=e}if(a!=b){e=Oq(b^j);if(e<c){d=f[1];c=e}}}if(c<=3){return new fo(d)}return null}
function zd(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&Ww)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?Tw:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?Tw:0;f=d?Sw:0;e=c>>b-44}return sd(e&Sw,f&Sw,g&Tw)}
function bi(a,b,c){var d=_h,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=_h[b]),di(h));_.Lb=c;!b&&(_.Mb=fi);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.Kb=f)}
function Om(a,b){var c,d;if(b.length==0){throw Lh(new Iq)}this.b=a;c=b.length;if(c>1&&b[0]==0){d=1;while(d<c&&b[d]==0){++d}if(d==c){this.a=qd(hd($d,1),Fx,6,15,[0])}else{this.a=md($d,Fx,6,c-d,15,1);tr(b,d,this.a,0,this.a.length)}}else{this.a=b}}
function uq(a){if(a.lb()){var b=a.c;b.mb()?(a.n='['+b.k):!b.lb()?(a.n='[L'+b.jb()+';'):(a.n='['+b.jb());a.b=b.ib()+'[]';a.j=b.kb()+'[]';return}var c=a.i;var d=a.d;d=d.split('/');a.n=xq('.',[c,xq('$',d)]);a.b=xq('.',[c,xq('.',d)]);a.j=d[d.length-1]}
function yr(a){fv(a!=null,'Null charset name');a=a.toLocaleUpperCase();if(dr(($u(),Xu).a,a)){return Xu}else if(dr(Yu.a,a)){return Yu}else if(dr(Zu.a,a)){return Zu}if(/^[A-Za-z0-9][\w-:\.\+]*$/.test(a)){throw Lh(new Cr(a))}else{throw Lh(new Br(a))}}
function um(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,q,r;n=a-c+e-g;r=b-d+f-h;if(n==0&&r==0){return new sm(c-a,e-c,a,d-b,f-d,b,0,0,1)}else{l=c-e;m=g-e;o=d-f;q=h-f;k=l*q-m*o;i=(n*q-m*r)/k;j=(l*r-n*o)/k;return new sm(c-a+i*c,g-a+j*g,a,d-b+i*d,h-b+j*h,b,i,j,1)}}
function op(a){var b,c,d,e,f;f=0;for(c=0;c<5;c++){b=a[c];if(b==0){return false}f+=b}if(f<7){return false}e=f/7;d=e/2;return $wnd.Math.abs(e-a[0])<d&&$wnd.Math.abs(e-a[1])<d&&$wnd.Math.abs(3*e-a[2])<3*d&&$wnd.Math.abs(e-a[3])<d&&$wnd.Math.abs(e-a[4])<d}
function Sm(a,b,c){var d,e,f,g,h,i,j,k;h=c.length;g=md($d,Fx,6,h,15,1);for(e=0;e<h;e++){k=Dm(a.a,c[e]);d=1;for(f=0;f<h;f++){if(e!=f){i=Fm(a.a,c[f],k);j=(i&1)==0?i|1:i&-2;d=Fm(a.a,d,j)}}g[e]=Fm(a.a,Jm(b,k),Dm(a.a,d));a.a.b!=0&&(g[e]=Fm(a.a,g[e],k))}return g}
function Wm(a,b){var c,d,e,f,g,h,i;e=Uo(new Zo((!b.b&&(b.b=lm(b.a)),b.b)));d=Sn(a.a,e.a);h=e.b;!!d.c&&zo(d.c,h);i=new Ik((g=d.f,g));c=d.a;!!c&&Hk(i,(al(),Rk),c);f=d.b;f!=null&&Hk(i,(al(),Sk),f);if(d.d>=0&&d.e>=0){Hk(i,(al(),Zk),Uq(d.e));Hk(i,Yk,Uq(d.d))}return i}
function Tn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,q,r;r=_m(b);k=$m(b).b;d=Zm(b);j=dn(d,r,k);q=0;for(g=0,i=j.length;g<i;++g){e=j[g];q+=e.b}n=md(Wd,zw,6,q,15,1);o=0;for(f=0,h=j.length;f<h;++f){e=j[f];c=e.a;m=e.b;Rn(a,c,m);for(l=0;l<m;l++){n[o++]=c[l]}}return Jn(n,r,k)}
function Mm(a,b){var c,d,e,f,g,h,i,j;if(a.b!=b.b){throw Lh(new Jq(Lx))}if(a.a[0]==0||b.a[0]==0){return a.b.i}d=a.a;e=d.length;f=b.a;g=f.length;j=md($d,Fx,6,e+g-1,15,1);for(h=0;h<e;h++){c=d[h];for(i=0;i<g;i++){j[h+i]=(Am(),j[h+i]^Fm(a.b,c,f[i]))}}return new Om(a.b,j)}
function Yo(a,b,c,d,e){var f,g,h,i;h=Xo(a,b,c,d,e);i=1;f=b-(d-b);if(f<0){i=b/(b-f);f=0}else if(f>=a.a.d){i=(a.a.d-1-b)/(f-b);f=a.a.d-1}g=Vd(c-(e-c)*i);i=1;if(g<0){i=c/(c-g);g=0}else if(g>=a.a.b){i=(a.a.b-1-c)/(g-c);g=a.a.b-1}f=Vd(b+(f-b)*i);h+=Xo(a,b,c,f,g);return h-1}
function Cp(a){var b,c,d,e,f;f=P(a.k).videoWidth;c=P(a.k).videoHeight;if(f>0&&c>0){if(a.j>0){if(f>c){if(a.j<f){c=c*a.j/f|0;f=a.j}}else{if(a.j<c){f=f*a.j/c|0;c=a.j}}}jb(a.c,f);ib(a.c,c);sb(hb(a.c),P(a.k),0,0,f,c);d=new Ap(a.c);b=new mm(d);e=new rk(b);return e}return null}
function fd(a){var b,c,d,e,f,g,h;c=Wr(a.a);if(c==0){return null}b=new rr(c==1?'Exception caught: ':c+' exceptions caught: ');e=true;for(h=(f=new is((new cs((new zs(a.a)).a)).a),new Ds(f));h.a.b;){g=(d=hs(h.a),Kd(d.ub(),8));e?(e=false):(b.a+='; ',b);pr(b,g.J())}return b.a}
function om(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,q,r,s,t;for(r=0;r<c;r++){s=r<<3;l=e-8;s>l&&(s=l);for(o=0;o<b;o++){q=o<<3;k=d-8;q>k&&(q=k);j=o<2?2:o>b-3?b-3:o;n=r<2?2:r>c-3?c-3:r;m=0;for(t=-2;t<=2;t++){i=f[n+t];m+=i[j-2]+i[j-1]+i[j]+i[j+1]+i[j+2]}h=m/25|0;pm(a,q,s,h,d,g)}}}
function lp(a){var b,c,d,e,f,g,h,i;c=0;i=0;d=a.d.a.length;for(g=new dt(a.d);g.a<g.c.a.length;){e=Kd(ct(g),16);if(e.a>=2){++c;i+=e.b}}if(c<3){return false}b=i/d;h=0;for(f=new dt(a.d);f.a<f.c.a.length;){e=Kd(ct(f),16);h+=$wnd.Math.abs(e.b-b)}return h<=0.05000000074505806*i}
function ed(a){var b,c,d,e,f,g,h,i;Lb.call(this,(g=fd(a),Wr(a.a)==0?null:(i=new is((new cs((new zs(a.a)).a)).a),e=hs((new Ds(i)).a),Kd(e.ub(),8)),g));f=0;for(c=(h=new is((new cs((new zs(a.a)).a)).a),new Ds(h));c.a.b;){b=(d=hs(c.a),Kd(d.ub(),8));if(f++==0){continue}wb(this,b)}}
function hl(a){var b,c,d,e,f,g,h,i,j;g=el(a[0],a[1]);b=el(a[1],a[2]);h=el(a[0],a[2]);if(b>=g&&b>=h){d=a[0];c=a[1];e=a[2]}else if(h>=b&&h>=g){d=a[1];c=a[0];e=a[2]}else{d=a[2];c=a[0];e=a[1]}if((i=d.c,j=d.d,(e.c-i)*(c.d-j)-(e.d-j)*(c.c-i))<0){f=c;c=e;e=f}pd(a,0,c);a[1]=d;pd(a,2,e)}
function Rm(a,b){var c,d,e,f;e=b.a.length-1;if(e==1){return qd(hd($d,1),Fx,6,15,[b.a[b.a.length-1-1]])}f=md($d,Fx,6,e,15,1);c=0;for(d=1;d<a.a.f&&c<e;d++){if(Jm(b,d)==0){f[c]=Dm(a.a,d);++c}}if(c!=e){throw Lh(new Vm('Error locator degree does not match number of roots'))}return f}
function Im(a,b){var c,d,e,f,g,h;if(a.b!=b.b){throw Lh(new Jq(Lx))}if(a.a[0]==0){return b}if(b.a[0]==0){return a}f=a.a;d=b.a;if(f.length>d.length){h=f;f=d;d=h}g=md($d,Fx,6,d.length,15,1);e=d.length-f.length;tr(d,0,g,0,e);for(c=e;c<d.length;c++){g[c]=(Am(),f[c-e]^d[c])}return new Om(a.b,g)}
function Gm(a,b,c){var d,e,f;this.e=a;this.f=b;this.b=c;this.a=md($d,Fx,6,b,15,1);this.c=md($d,Fx,6,b,15,1);f=1;for(e=0;e<b;e++){this.a[e]=f;f*=2;if(f>=b){f^=a;f&=b-1}}for(d=0;d<b-1;d++){this.c[this.a[d]]=d}this.i=new Om(this,qd(hd($d,1),Fx,6,15,[0]));this.d=new Om(this,qd(hd($d,1),Fx,6,15,[1]))}
function $i(){$i=ci;Vi={_default_:ej,dragenter:dj,dragover:dj};Xi={click:cj,dblclick:cj,mousedown:cj,mouseup:cj,mousemove:cj,mouseover:cj,mouseout:cj,mousewheel:cj,keydown:bj,keyup:bj,keypress:bj,touchstart:cj,touchend:cj,touchmove:cj,touchcancel:cj,gesturestart:cj,gestureend:cj,gesturechange:cj}}
function Ro(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;k=b[0]+b[1]+b[2];h=d-b[2]-b[1]/2;g=Oo(a,c,Vd(h),2*b[1],k);if(!isNaN(g)){i=(b[0]+b[1]+b[2])/3;for(f=new dt(a.e);f.a<f.c.a.length;){e=Kd(ct(f),54);if(Mo(e,i,g,h)){return l=(e.c+h)/2,m=(e.d+g)/2,n=(e.a+i)/2,new No(l,m,n)}}j=new No(h,g,i);Rs(a.e,j)}return null}
function Ln(b,c,d,e,f){var g,h,i;if(8*d>8*(b.c.length-b.b)-b.a){throw Lh((Bk(),Bk(),Ak))}i=md(Wd,zw,6,d,15,1);for(h=0;h<d;h++){i[h]=sl(b,8)<<24>>24}!e?(g=vm(i)):(g=e.c!=null?e.c:''+e.d);try{pr(c,cr(i,i.length,jr(g)))}catch(a){a=Kh(a);if(Od(a,50)){throw Lh((Bk(),Bk(),Ak))}else throw Lh(a)}f.a[f.a.length]=i}
function im(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,q,r;m=a.d;n=m.f;c=m.e;g=new ol(n,c);jm(a,n);d=a.b;for(r=1;r<5;r++){l=c*r/5|0;f=zp(m,l,a.c);k=n*4/5|0;for(o=n/5|0;o<k;o++){j=f[o]&255;++d[j>>3]}}b=km(d);e=yp(m);for(q=0;q<c;q++){i=q*n;for(o=0;o<n;o++){j=e[i+o]&255;j<b&&(h=q*g.c+(o/32|0),g.a[h]|=1<<(o&31))}}return g}
function Eo(a){var b,c,d,e,f,g;c=17+4*a.d;b=new nl(c);ll(b,0,0,9,9);ll(b,c-8,0,8,9);ll(b,0,c-8,9,8);e=a.a.length;for(f=0;f<e;f++){d=a.a[f]-2;for(g=0;g<e;g++){if(f==0&&(g==0||g==e-1)||f==e-1&&g==0){continue}ll(b,a.a[g]-2,d,5,5)}}ll(b,6,9,1,c-17);ll(b,9,6,c-17,1);if(a.d>6){ll(b,c-11,0,3,6);ll(b,0,c-11,6,3)}return b}
function sl(a,b){var c,d,e,f,g;if(b<1||b>32||b>8*(a.c.length-a.b)-a.a){throw Lh(new Jq(''+b))}f=0;if(a.a>0){c=8-a.a;g=b<c?b:c;d=c-g;e=255>>8-g<<d;f=(a.c[a.b]&e)>>d;b-=g;a.a+=g;if(a.a==8){a.a=0;++a.b}}if(b>0){while(b>=8){f=f<<8|a.c[a.b]&255;++a.b;b-=8}if(b>0){d=8-b;e=255>>d<<d;f=f<<b|(a.c[a.b]&e)>>d;a.a+=b}}return f}
function wu(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function ll(a,b,c,d,e){var f,g,h,i,j;if(c<0||b<0){throw Lh(new Jq('Left and top must be nonnegative'))}if(e<1||d<1){throw Lh(new Jq('Height and width must be at least 1'))}h=b+d;f=c+e;if(f>a.b||h>a.d){throw Lh(new Jq('The region must fit inside the matrix'))}for(j=c;j<f;j++){g=j*a.c;for(i=b;i<h;i++){a.a[g+(i/32|0)]|=1<<(i&31)}}}
function tm(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;m=qm(um(3.5,3.5,a,3.5,b,c,3.5,d));n=um(e,f,g,h,i,j,k,l);return new sm(n.a*m.a+n.d*m.b+n.i*m.c,n.a*m.d+n.d*m.e+n.i*m.f,n.a*m.i+n.d*m.j+n.i*m.k,n.b*m.a+n.e*m.b+n.j*m.c,n.b*m.d+n.e*m.e+n.j*m.f,n.b*m.i+n.e*m.j+n.j*m.k,n.c*m.a+n.f*m.b+n.k*m.c,n.c*m.d+n.f*m.e+n.k*m.f,n.c*m.i+n.f*m.j+n.k*m.k)}
function Gv(g){var d=(ow(),kw(dy));var e,f=g;$wnd.AsyncQRCallback=qw(function(){var a,b=this,c=arguments;c.length==1&&f.zb(c[0])&&(a=c[0]);b.g=a;pw(a,b);return b});e=$wnd.AsyncQRCallback.prototype=new Object;e.execute=qw(function(a){this.g.yb(a)});if(d)for(p in d)$wnd.AsyncQRCallback[p]===undefined&&($wnd.AsyncQRCallback[p]=d[p])}
function km(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,q;i=a.length;h=0;e=0;f=0;for(o=0;o<i;o++){if(a[o]>f){e=o;f=a[o]}a[o]>h&&(h=a[o])}k=0;l=0;for(q=0;q<i;q++){d=q-e;j=a[q]*d*d;if(j>l){k=q;l=j}}if(e>k){m=e;e=k;k=m}if(k-e<=(i/16|0)){throw Lh((Fk(),Fk(),Ek))}b=k-1;c=-1;for(n=k-1;n>e;n--){g=n-e;j=g*g*(k-n)*(h-a[n]);if(j>c){b=n;c=j}}return b<<3}
function Nn(b,c,d){var e,f,g,h;if(d*13>8*(b.c.length-b.b)-b.a){throw Lh((Bk(),Bk(),Ak))}f=md(Wd,zw,6,2*d,15,1);g=0;while(d>0){h=sl(b,13);e=(h/192|0)<<8|h%192;e<7936?(e+=33088):(e+=49472);f[g]=e>>8<<24>>24;f[g+1]=e<<24>>24;g+=2;--d}try{pr(c,cr(f,f.length,jr(Ix)))}catch(a){a=Kh(a);if(Od(a,50)){throw Lh((Bk(),Bk(),Ak))}else throw Lh(a)}}
function Mn(b,c,d){var e,f,g,h;if(d*13>8*(b.c.length-b.b)-b.a){throw Lh((Bk(),Bk(),Ak))}f=md(Wd,zw,6,2*d,15,1);g=0;while(d>0){h=sl(b,13);e=(h/96|0)<<8|h%96;e<959?(e+=41377):(e+=42657);f[g]=(e>>8&255)<<24>>24;f[g+1]=(e&255)<<24>>24;g+=2;--d}try{pr(c,cr(f,f.length,jr('GB2312')))}catch(a){a=Kh(a);if(Od(a,50)){throw Lh((Bk(),Bk(),Ak))}else throw Lh(a)}}
function Gq(){Gq=ci;Fq=qd(hd(Yd,1),zw,6,15,[1.3407807929942597E154,1.157920892373162E77,3.4028236692093846E38,1.8446744073709552E19,4294967296,_w,256,16,4,2]);Eq=qd(hd(Yd,1),zw,6,15,[7.458340731200207E-155,8.636168555094445E-78,2.9387358770557188E-39,5.421010862427522E-20,2.3283064365386963E-10,1.52587890625E-5,0.00390625,0.0625,0.25,0.5])}
function lj(){$wnd.addEventListener(Iw,qw(function(a){var b=($i(),Wi);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function Sn(b,c){var d,e,f,g,h;g=new bn(c);f=null;d=null;try{return Tn(b,g)}catch(a){a=Kh(a);if(Od(a,63)){e=a;f=e}else if(Od(a,62)){e=a;d=e}else throw Lh(a)}try{an(g);g.d=null;g.c=null;g.b=true;_m(g);$m(g);Ym(g);h=Tn(b,g);bm(h,new Ao);return h}catch(a){a=Kh(a);if(Od(a,63)||Od(a,62)){e=a;if(f){throw Lh(f)}if(d){throw Lh(d)}throw Lh(e)}else throw Lh(a)}}
function wd(a){var b,c,d,e,f,g,h,i;if(isNaN(a)){return Fd(),Ed}if(a<-9223372036854775808){return Fd(),Dd}if(a>=9223372036854775807){return Fd(),Cd}e=false;if(a<0){e=true;a=-a}d=0;if(a>=Vw){d=Vd(a/Vw);a-=d*Vw}c=0;if(a>=Uw){c=Vd(a/Uw);a-=c*Uw}b=Vd(a);f=sd(b,c,d);e&&(g=~f.l+1&Sw,h=~f.m+(g==0?1:0)&Sw,i=~f.h+(g==0&&h==0?1:0)&Tw,f.l=g,f.m=h,f.h=i,undefined);return f}
function Hq(a){var b,c,d,e,f;if(isNaN(a)){return 2143289344}if(a==0){return 1/a==-Infinity?-2147483648:0}f=false;if(a<0){f=true;a=-a}if(!isNaN(a)&&!isFinite(a)){return f?-8388608:2139095040}d=Dq(a);c=Vh(Sh(Mh(Rh(d,52),2047),1023));e=Vh(Rh(Mh(d,{l:Sw,m:Sw,h:255}),29));if(c<=-127){e=(ex|e)>>-127-c+1;c=-127}b=f?2147483648:0;b=Qh(b,c+127<<23);b=Qh(b,e);return Vh(b)}
function fr(a){var b,c,d,e,f,g,h;b=new RegExp('\\.','g');g=md(Dg,zw,2,0,6,1);c=0;h=a;e=null;while(true){f=b.exec(h);if(f==null||h==''){g[c]=h;break}else{g[c]=hr(h,0,f.index);h=hr(h,f.index+f[0].length,h.length);b.lastIndex=0;if(e==h){g[c]=h.substr(0,1);h=h.substr(1)}e=h;++c}}if(a.length>0){d=g.length;while(d>0&&g[d-1]==''){--d}d<g.length&&(g.length=d,undefined)}return g}
function Xo(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r,s;l=(e-c<0?-(e-c):e-c)>(d-b<0?-(d-b):d-b);if(l){m=b;b=c;c=m;m=d;d=e;e=m}f=d-b<0?-(d-b):d-b;g=e-c<0?-(e-c):e-c;h=-f/2|0;q=b<d?1:-1;s=c<e?1:-1;k=0;o=d+q;for(n=b,r=c;n!=o;n+=q){i=l?r:n;j=l?n:r;if(k==1==kl(a.a,i,j)){if(k==2){return xm(n,r,b,c)}++k}h+=g;if(h>0){if(r==e){break}r+=s;h-=f}}if(k==2){return xm(d+q,e,b,c)}return NaN}
function Qm(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,q;k=new Om(a.a,b);q=md($d,Fx,6,c,15,1);i=true;for(h=0;h<c;h++){f=Jm(k,Cm(a.a,h+a.a.b));q[q.length-1-h]=f;f!=0&&(i=false)}if(i){return}o=new Om(a.a,q);n=Tm(a,Bm(a.a,c,1),o,c);m=n[0];j=n[1];d=Rm(a,m);e=Sm(a,j,d);for(g=0;g<d.length;g++){l=b.length-1-Em(a.a,d[g]);if(l<0){throw Lh(new Vm('Bad error location'))}b[l]=(Am(),b[l]^e[g])}}
function al(){al=ci;Vk=new bl('OTHER',0);Uk=new bl('ORIENTATION',1);Rk=new bl('BYTE_SEGMENTS',2);Sk=new bl('ERROR_CORRECTION_LEVEL',3);Tk=new bl('ISSUE_NUMBER',4);$k=new bl('SUGGESTED_PRICE',5);Xk=new bl('POSSIBLE_COUNTRY',6);_k=new bl('UPC_EAN_EXTENSION',7);Wk=new bl('PDF417_EXTRA_METADATA',8);Zk=new bl('STRUCTURED_APPEND_SEQUENCE',9);Yk=new bl('STRUCTURED_APPEND_PARITY',10)}
function em(b,c,d,e){var f,g,h,i,j,k,l,m;if(c<=0||d<=0){throw Lh((Fk(),Fk(),Ek))}f=new ol(c,d);j=md(Zd,zw,6,2*c,15,1);for(m=0;m<d;m++){h=j.length;g=m+0.5;for(l=0;l<h;l+=2){j[l]=(l/2|0)+0.5;j[l+1]=g}rm(e,j);dm(b,j);try{for(k=0;k<h;k+=2){kl(b,Vd(j[k]),Vd(j[k+1]))&&(i=m*f.c+((k/2|0)/32|0),f.a[i]|=1<<((k/2|0)&31))}}catch(a){a=Kh(a);if(Od(a,75)){throw Lh((Fk(),Fk(),Ek))}else throw Lh(a)}}return f}
function Kn(a,b,c,d){var e,f,g;g=b.a.length;while(c>1){if(8*(a.c.length-a.b)-a.a<11){throw Lh((Bk(),Bk(),Ak))}f=sl(a,11);mr(b,Qn(f/45|0));mr(b,Qn(f%45));c-=2}if(c==1){if(8*(a.c.length-a.b)-a.a<6){throw Lh((Bk(),Bk(),Ak))}mr(b,Qn(sl(a,6)))}if(d){for(e=g;e<b.a.length;e++){_q(b.a,e)==37&&(e<b.a.length-1&&_q(b.a,e+1)==37?(b.a=hr(b.a,0,e+1)+''+gr(b.a,e+1+1),b):Tp(b,e,e+1,String.fromCharCode(29)))}}}
function gd(a,b){var c;switch(jd(a)){case 6:return Sd(b);case 7:return Qd(b);case 8:return Pd(b);case 3:return Array.isArray(b)&&(c=jd(b),!(c>=14&&c<=16));case 11:return b!=null&&typeof b===sw;case 12:return b!=null&&(typeof b===rw||typeof b==sw);case 0:return Jd(b,a.__elementTypeId$);case 2:return Td(b)&&!(b.Mb===fi);case 1:return Td(b)&&!(b.Mb===fi)||Jd(b,a.__elementTypeId$);default:return true;}}
function _m(a){var b,c,d,e,f,g,h,i,j,k;if(a.d){return a.d}c=a.a.b;i=(c-17)/4|0;if(i<=6){return Io(i)}k=0;f=c-11;for(h=5;h>=0;h--){for(e=c-9;e>=f;e--){k=(b=a.b?kl(a.a,h,e):kl(a.a,e,h),b?k<<1|1:k<<1)}}j=Go(k);if(!!j&&17+4*j.d==c){a.d=j;return j}k=0;for(d=5;d>=0;d--){for(g=c-9;g>=f;g--){k=(b=a.b?kl(a.a,g,d):kl(a.a,d,g),b?k<<1|1:k<<1)}}j=Go(k);if(!!j&&17+4*j.d==c){a.d=j;return j}throw Lh((Bk(),Bk(),Ak))}
function kp(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r;m=b[0]+b[1]+b[2]+b[3]+b[4];h=d-b[4]-b[3]-b[2]/2;g=gp(a,c,Vd(h),b[2],m);if(!isNaN(g)){h=fp(a,Vd(h),Vd(g),b[2],m);if(!isNaN(h)&&(!e||ep(a,Vd(g),Vd(h),b[2],m))){i=m/7;j=false;for(k=0;k<a.d.a.length;k++){f=Kd(Ss(a.d,k),16);if(bp(f,i,g,h)){Vs(a.d,k,(n=f.a+1,o=(f.a*f.c+h)/n,q=(f.a*f.d+g)/n,r=(f.a*f.b+i)/n,new dp(o,q,r,n)));j=true;break}}if(!j){l=new cp(h,g,i);Rs(a.d,l)}return true}}return false}
function Zm(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,q;h=$m(a);q=_m(a);f=(nn(),qd(hd(Lf,1),Ex,15,0,[en,fn,gn,hn,jn,kn,ln,mn]))[h.a];g=a.a.b;on(f,a.a,g);i=Eo(q);m=true;n=md(Wd,zw,6,q.c,15,1);o=0;e=0;b=0;for(k=g-1;k>0;k-=2){k==6&&--k;for(d=0;d<g;d++){j=m?g-1-d:d;for(c=0;c<2;c++){l=j*i.c+((k-c)/32|0);if((i.a[l]>>>(k-c&31)&1)==0){++b;e<<=1;kl(a.a,k-c,j)&&(e|=1);if(b==8){n[o++]=e<<24>>24;b=0;e=0}}}}m=m^true}if(o!=q.c){throw Lh((Bk(),Bk(),Ak))}return n}
function nm(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r,s,t,u,v,w;h=kd($d,[zw,Fx],[7,6],15,[c,b],2);for(u=0;u<c;u++){v=u<<3;k=e-8;v>k&&(v=k);for(q=0;q<b;q++){r=q<<3;j=d-8;r>j&&(r=j);o=0;l=255;i=0;for(w=0,m=v*d+r;w<8;++w,m+=d){for(t=0;t<8;t++){n=a[m+t]&255;o+=n;n<l&&(l=n);n>i&&(i=n)}if(i-l>24){for(++w,m+=d;w<8;++w,m+=d){for(s=0;s<8;s++){o+=a[m+s]&255}}}}f=o>>6;if(i-l<=24){f=l/2|0;if(u>0&&q>0){g=(h[u-1][q]+2*h[u][q-1]+h[u-1][q-1])/4|0;l<g&&(f=g)}}h[u][q]=f}}return h}
function tr(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;mv(a,'src');mv(c,'dest');m=L(a);i=L(c);iv((m.f&4)!=0,'srcType is not an array');iv((i.f&4)!=0,'destType is not an array');l=m.c;g=i.c;iv((l.f&1)!=0?l==g:(g.f&1)==0,"Array types don't match");n=a.length;j=c.length;if(b<0||d<0||e<0||b+e>n||d+e>j){throw Lh(new Xp)}if((l.f&1)==0&&m!=i){k=Ld(a);f=Ld(c);if(Ud(a)===Ud(c)&&b<d){b+=e;for(h=d+e;h-->d;){pd(f,h,k[--b])}}else{for(h=d+e;d<h;){pd(f,d++,k[b++])}}}else e>0&&Tu(a,b,c,d,e)}
function On(a,b,c){var d,e,f;while(c>=3){if(8*(a.c.length-a.b)-a.a<10){throw Lh((Bk(),Bk(),Ak))}e=sl(a,10);if(e>=1000){throw Lh((Bk(),Bk(),Ak))}mr(b,Qn(e/100|0));mr(b,Qn((e/10|0)%10));mr(b,Qn(e%10));c-=3}if(c==2){if(8*(a.c.length-a.b)-a.a<7){throw Lh((Bk(),Bk(),Ak))}f=sl(a,7);if(f>=100){throw Lh((Bk(),Bk(),Ak))}mr(b,Qn(f/10|0));mr(b,Qn(f%10))}else if(c==1){if(8*(a.c.length-a.b)-a.a<4){throw Lh((Bk(),Bk(),Ak))}d=sl(a,4);if(d>=10){throw Lh((Bk(),Bk(),Ak))}mr(b,Qn(d))}}
function Wo(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,q,r,s,t,u;s=c.b;t=c.c;f=c.a;n=(To(b,s,t)+To(b,s,f))/2;if(n<1){throw Lh((Fk(),Fk(),Ek))}j=$o(s,t,f,n);r=Ho(j);o=17+4*r.d-7;d=null;if(r.a.length>0){g=t.c-s.c+f.c;h=t.d-s.d+f.d;i=1-3/o;k=Vd(s.c+i*(g-s.c));l=Vd(s.d+i*(h-s.d));for(m=4;m<=16;m<<=1){try{d=Vo(b,n,k,l,m);break}catch(a){a=Kh(a);if(!Od(a,61))throw Lh(a)}}}u=_o(s,t,f,d,j);e=ap(b.a,u,j);!d?(q=qd(hd(mf,1),zw,27,0,[f,s,t])):(q=qd(hd(mf,1),zw,27,0,[f,s,t,d]));return new fm(e,q)}
function Bp(a,b,c){var d,e,f,g,h;this.f=b;this.e=c;h=(ui(),a.s).width;g=a.s.height;if(b>h||c>g){throw Lh(new Jq('Crop rectangle does not fit within image data.'))}this.a=lb();S(this.a,h,g);ib(this.a,g);jb(this.a,h);this.b=tb(a.s.getContext('2d'),0,0,b,c);e=this.b.data;for(f=0;f<e.length;f+=4){if(((e[f+3]||0)&255)==0){e[f]=255;e[f+1]=255;e[f+2]=255;e[f+3]=255}else{d=((e[f]||0)+(e[f+1]||0)+(e[f+2]||0))/3|0;e[f]=d;e[f+1]=d;e[f+2]=d}}ub(hb(this.a),this.b,0,0);this.c=0;this.d=0}
function Po(a){var b,c,d,e,f,g,h,i,j,k;j=a.f;d=a.b;h=j+a.j;i=a.i+(d/2|0);k=md($d,Fx,6,3,15,1);for(f=0;f<d;f++){e=i+((f&1)==0?(f+1)/2|0:-((f+1)/2|0));k[0]=0;k[1]=0;k[2]=0;g=j;while(g<h&&!kl(a.c,g,e)){++g}c=0;while(g<h){if(kl(a.c,g,e)){if(c==1){++k[1]}else{if(c==2){if(Qo(a,k)){b=Ro(a,k,e,g);if(b){return b}}k[0]=k[2];k[1]=1;k[2]=0;c=1}else{++k[++c]}}}else{c==1&&++c;++k[c]}++g}if(Qo(a,k)){b=Ro(a,k,e,h);if(b){return b}}}if(a.e.a.length!=0){return Kd(Ss(a.e,0),54)}throw Lh((Fk(),Fk(),Ek))}
function dm(a,b){var c,d,e,f,g,h,i;g=a.d;c=a.b;d=true;for(f=0;f<b.length&&d;f+=2){h=Vd(b[f]);i=Vd(b[f+1]);if(h<-1||h>g||i<-1||i>c){throw Lh((Fk(),Fk(),Ek))}d=false;if(h==-1){b[f]=0;d=true}else if(h==g){b[f]=g-1;d=true}if(i==-1){b[f+1]=0;d=true}else if(i==c){b[f+1]=c-1;d=true}}d=true;for(e=b.length-2;e>=0&&d;e-=2){h=Vd(b[e]);i=Vd(b[e+1]);if(h<-1||h>g||i<-1||i>c){throw Lh((Fk(),Fk(),Ek))}d=false;if(h==-1){b[e]=0;d=true}else if(h==g){b[e]=g-1;d=true}if(i==-1){b[e+1]=0;d=true}else if(i==c){b[e+1]=c-1;d=true}}}
function $m(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(a.c){return a.c}h=0;for(k=0;k<6;k++){h=(c=a.b?kl(a.a,8,k):kl(a.a,k,8),c?h<<1|1:h<<1)}h=(d=a.b?kl(a.a,8,7):kl(a.a,7,8),d?h<<1|1:h<<1);h=(e=a.b?kl(a.a,8,8):kl(a.a,8,8),e?h<<1|1:h<<1);h=(f=a.b?kl(a.a,7,8):kl(a.a,8,7),f?h<<1|1:h<<1);for(m=5;m>=0;m--){h=(b=a.b?kl(a.a,m,8):kl(a.a,8,m),b?h<<1|1:h<<1)}g=a.a.b;i=0;n=g-7;for(l=g-1;l>=n;l--){i=(b=a.b?kl(a.a,l,8):kl(a.a,8,l),b?i<<1|1:i<<1)}for(j=g-8;j<g;j++){i=(b=a.b?kl(a.a,8,j):kl(a.a,j,8),b?i<<1|1:i<<1)}a.c=go(h,i);if(a.c){return a.c}throw Lh((Bk(),Bk(),Ak))}
function dn(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,q,r,s,t,u,v,w,A,B,C,D,F,G;if(a.length!=b.c){throw Lh(new Iq)}j=b.b[c.d];G=0;i=j.a;for(f=0,h=i.length;f<h;++f){d=i[f];G+=d.a}C=md(Cf,zw,74,G,0,1);A=0;for(e=0,g=i.length;e<g;++e){d=i[e];for(l=0;l<d.a;l++){w=d.b;u=j.b+w;C[A++]=new cn(w,md(Wd,zw,6,u,15,1))}}F=C[0].a.length;s=C.length-1;while(s>=0){v=C[s].a.length;if(v==F){break}--s}++s;D=F-j.b;B=0;for(m=0;m<D;m++){for(q=0;q<A;q++){C[q].a[m]=a[B++]}}for(r=s;r<A;r++){C[r].a[D]=a[B++]}t=C[0].a.length;for(k=D;k<t;k++){for(o=0;o<A;o++){n=o<s?k:k+1;C[o].a[n]=a[B++]}}return C}
function Oo(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;g=a.c;h=g.b;m=a.a;m[0]=0;m[1]=0;m[2]=0;f=b;while(f>=0&&(j=f*g.c+(c/32|0),(g.a[j]>>>(c&31)&1)!=0)&&m[1]<=d){++m[1];--f}if(f<0||m[1]>d){return NaN}while(f>=0&&(k=f*g.c+(c/32|0),(g.a[k]>>>(c&31)&1)==0)&&m[0]<=d){++m[0];--f}if(m[0]>d){return NaN}f=b+1;while(f<h&&(l=f*g.c+(c/32|0),(g.a[l]>>>(c&31)&1)!=0)&&m[1]<=d){++m[1];++f}if(f==h||m[1]>d){return NaN}while(f<h&&(i=f*g.c+(c/32|0),(g.a[i]>>>(c&31)&1)==0)&&m[2]<=d){++m[2];++f}if(m[2]>d){return NaN}n=m[0]+m[1]+m[2];if(5*(n-e<0?-(n-e):n-e)>=2*e){return NaN}return Qo(a,m)?f-m[2]-m[1]/2:NaN}
function uo(){uo=ci;to=new wo('TERMINATOR',0,qd(hd($d,1),Fx,6,15,[0,0,0]));ro=new wo('NUMERIC',1,qd(hd($d,1),Fx,6,15,[10,12,14]));ko=new wo('ALPHANUMERIC',2,qd(hd($d,1),Fx,6,15,[9,11,13]));so=new wo('STRUCTURED_APPEND',3,qd(hd($d,1),Fx,6,15,[0,0,0]));lo=new wo('BYTE',4,qd(hd($d,1),Fx,6,15,[8,16,16]));mo=new wo('ECI',5,qd(hd($d,1),Fx,6,15,[0,0,0]));qo=new wo('KANJI',6,qd(hd($d,1),Fx,6,15,[8,10,12]));no=new wo('FNC1_FIRST_POSITION',7,qd(hd($d,1),Fx,6,15,[0,0,0]));oo=new wo('FNC1_SECOND_POSITION',8,qd(hd($d,1),Fx,6,15,[0,0,0]));po=new wo('HANZI',9,qd(hd($d,1),Fx,6,15,[8,10,12]))}
function Dq(a){var b,c,d,e,f,g;if(isNaN(a)){return {l:0,m:0,h:524160}}g=false;if(a==0){return 1/a==-Infinity?{l:0,m:0,h:Ww}:0}if(a<0){g=true;a=-a}if(!isNaN(a)&&!isFinite(a)){return g?{l:0,m:0,h:1048320}:{l:0,m:0,h:524032}}c=0;if(a<1){b=512;for(d=0;d<10;++d,b>>=1){if(a<(Gq(),Eq)[d]&&c-b>=-1023){a*=Fq[d];c-=b}}if(a<1&&c-1>=-1023){a*=2;--c}}else if(a>=2){b=512;for(d=0;d<10;++d,b>>=1){if(a>=(Gq(),Fq)[d]){a*=Eq[d];c+=b}}}c>-1023?(a-=1):(a*=0.5);e=Oh(a*dx);a-=Uh(e)*9.5367431640625E-7;f=Oh(a*4503599627370496);e=Qh(e,c+1023<<20);g&&(e=Qh(e,2147483648));return Qh(Nh(yd(Ph(e)?Th(e):e,32)),f)}
function mp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;l=a.d.a.length;if(l<3){throw Lh((Fk(),Fk(),Ek))}if(l>3){n=0;k=0;for(d=new dt(a.d);d.a<d.c.a.length;){c=Kd(ct(d),16);j=c.b;n+=j;k+=j*j}b=n/l;m=$wnd.Math.sqrt(k/l-b*b);Ws(a.d,new up(b));f=$wnd.Math.max(0.20000000298023224*b,m);for(e=0;e<a.d.a.length&&a.d.a.length>3;e++){g=Kd(Ss(a.d,e),16);if($wnd.Math.abs(g.b-b)>f){Us(a.d,e);--e}}}if(a.d.a.length>3){n=0;for(i=new dt(a.d);i.a<i.c.a.length;){h=Kd(ct(i),16);n+=h.b}b=n/a.d.a.length;Ws(a.d,new qp(b));ls(new vs(a.d,a.d.a.length))}return qd(hd(_f,1),zw,16,0,[Kd(Ss(a.d,0),16),Kd(Ss(a.d,1),16),Kd(Ss(a.d,2),16)])}
function hp(a){var b,c,d,e,f,g,h,i,j,k,l;h=a.c.b;i=a.c.d;f=3*h/228|0;f<3&&(f=3);d=false;l=md($d,Fx,6,5,15,1);for(e=f-1;e<h&&!d;e+=f){l[0]=0;l[1]=0;l[2]=0;l[3]=0;l[4]=0;c=0;for(g=0;g<i;g++){if(kl(a.c,g,e)){(c&1)==1&&++c;++l[c]}else{if((c&1)==0){if(c==4){if(op(l)){b=kp(a,l,e,g,false);if(b){f=2;if(a.b){d=lp(a)}else{k=ip(a);if(k>l[2]){e+=k-l[2]-2;g=i-1}}}else{l[0]=l[2];l[1]=l[3];l[2]=l[4];l[3]=1;l[4]=0;c=3;continue}c=0;l[0]=0;l[1]=0;l[2]=0;l[3]=0;l[4]=0}else{l[0]=l[2];l[1]=l[3];l[2]=l[4];l[3]=1;l[4]=0;c=3}}else{++l[++c]}}else{++l[c]}}}if(op(l)){b=kp(a,l,e,i,false);if(b){f=l[0];a.b&&(d=lp(a))}}}j=mp(a);hl(j);return new xp(j)}
function ep(a,b,c,d,e){var f,g,h,i,j;i=jp(a);f=0;while(b>=f&&c>=f&&kl(a.c,c-f,b-f)){++i[2];++f}if(b<f||c<f){return false}while(b>=f&&c>=f&&!kl(a.c,c-f,b-f)&&i[1]<=d){++i[1];++f}if(b<f||c<f||i[1]>d){return false}while(b>=f&&c>=f&&kl(a.c,c-f,b-f)&&i[0]<=d){++i[0];++f}if(i[0]>d){return false}g=a.c.b;h=a.c.d;f=1;while(b+f<g&&c+f<h&&kl(a.c,c+f,b+f)){++i[2];++f}if(b+f>=g||c+f>=h){return false}while(b+f<g&&c+f<h&&!kl(a.c,c+f,b+f)&&i[3]<d){++i[3];++f}if(b+f>=g||c+f>=h||i[3]>=d){return false}while(b+f<g&&c+f<h&&kl(a.c,c+f,b+f)&&i[4]<d){++i[4];++f}if(i[4]>=d){return false}j=i[0]+i[1]+i[2]+i[3]+i[4];return (j-e<0?-(j-e):j-e)<2*e&&op(i)}
function Tm(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,q,r,s,t,u;if(b.a.length-1<c.a.length-1){u=b;b=c;c=u}l=b;k=c;s=a.a.i;r=a.a.d;while(k.a.length-1>=(d/2|0)){m=l;t=s;l=k;s=r;if(k.a[0]==0){throw Lh(new Vm('r_{i-1} was zero'))}k=m;j=a.a.i;f=Km(l,l.a.length-1);g=Dm(a.a,f);while(k.a.length-1>=l.a.length-1&&k.a[0]!=0){e=k.a.length-1-(l.a.length-1);n=Fm(a.a,Km(k,k.a.length-1),g);j=Im(j,Bm(a.a,e,n));k=Im(k,Nm(l,e,n))}r=Im(Mm(j,r),t);if(k.a.length-1>=l.a.length-1){throw Lh(new Lq('Division algorithm failed to reduce polynomial?'))}}q=r.a[r.a.length-1];if(q==0){throw Lh(new Vm('sigmaTilde(0) was zero'))}h=Dm(a.a,q);o=Lm(r,h);i=Lm(k,h);return qd(hd(wf,1),zw,25,0,[o,i])}
function Jn(b,c,d){In();var e,f,g,h,i,j,k,l,m,n,o,q;e=new tl(b);m=new qr;f=new Ys(1);o=-1;l=-1;try{i=null;j=false;do{8*(e.c.length-e.b)-e.a<4?(k=(uo(),to)):(k=xo(sl(e,4)));if(k!=(uo(),to)){if(k==no||k==oo){j=true}else if(k==so){if(8*(e.c.length-e.b)-e.a<16){throw Lh((Bk(),Bk(),Ak))}o=sl(e,8);l=sl(e,8)}else if(k==mo){q=Pn(e);i=_l(q);if(!i){throw Lh((Bk(),Bk(),Ak))}}else{if(k==po){n=sl(e,4);h=sl(e,vo(k,c));n==1&&Mn(e,m,h)}else{g=sl(e,vo(k,c));if(k==ro){On(e,m,g)}else if(k==ko){Kn(e,m,g,j)}else if(k==lo){Ln(e,m,g,i,f)}else if(k==qo){Nn(e,m,g)}else{throw Lh((Bk(),Bk(),Ak))}}}}}while(k!=(uo(),to))}catch(a){a=Kh(a);if(Od(a,11)){throw Lh((Bk(),Bk(),Ak))}else throw Lh(a)}return new cm(m.a,f.a.length==0?null:f,!d?null:d.c!=null?d.c:''+d.d,o,l)}
function fp(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q;f=a.c;h=f.d;o=jp(a);g=b;while(g>=0&&(j=c*f.c+(g/32|0),(f.a[j]>>>(g&31)&1)!=0)){++o[2];--g}if(g<0){return NaN}while(g>=0&&(k=c*f.c+(g/32|0),(f.a[k]>>>(g&31)&1)==0)&&o[1]<=d){++o[1];--g}if(g<0||o[1]>d){return NaN}while(g>=0&&(l=c*f.c+(g/32|0),(f.a[l]>>>(g&31)&1)!=0)&&o[0]<=d){++o[0];--g}if(o[0]>d){return NaN}g=b+1;while(g<h&&(m=c*f.c+(g/32|0),(f.a[m]>>>(g&31)&1)!=0)){++o[2];++g}if(g==h){return NaN}while(g<h&&(n=c*f.c+(g/32|0),(f.a[n]>>>(g&31)&1)==0)&&o[3]<d){++o[3];++g}if(g==h||o[3]>=d){return NaN}while(g<h&&(i=c*f.c+(g/32|0),(f.a[i]>>>(g&31)&1)!=0)&&o[4]<d){++o[4];++g}if(o[4]>=d){return NaN}q=o[0]+o[1]+o[2]+o[3]+o[4];if(5*(q-e<0?-(q-e):q-e)>=e){return NaN}return op(o)?g-o[4]-o[3]-o[2]/2:NaN}
function gp(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q;g=a.c;h=g.b;o=jp(a);f=b;while(f>=0&&(j=f*g.c+(c/32|0),(g.a[j]>>>(c&31)&1)!=0)){++o[2];--f}if(f<0){return NaN}while(f>=0&&(k=f*g.c+(c/32|0),(g.a[k]>>>(c&31)&1)==0)&&o[1]<=d){++o[1];--f}if(f<0||o[1]>d){return NaN}while(f>=0&&(l=f*g.c+(c/32|0),(g.a[l]>>>(c&31)&1)!=0)&&o[0]<=d){++o[0];--f}if(o[0]>d){return NaN}f=b+1;while(f<h&&(m=f*g.c+(c/32|0),(g.a[m]>>>(c&31)&1)!=0)){++o[2];++f}if(f==h){return NaN}while(f<h&&(n=f*g.c+(c/32|0),(g.a[n]>>>(c&31)&1)==0)&&o[3]<d){++o[3];++f}if(f==h||o[3]>=d){return NaN}while(f<h&&(i=f*g.c+(c/32|0),(g.a[i]>>>(c&31)&1)!=0)&&o[4]<d){++o[4];++f}if(o[4]>=d){return NaN}q=o[0]+o[1]+o[2]+o[3]+o[4];if(5*(q-e<0?-(q-e):q-e)>=2*e){return NaN}return op(o)?f-o[4]-o[3]-o[2]/2:NaN}
function Ii(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return $w;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case Iw:return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return _w;case ax:case 'mousewheel':return bx;case 'contextmenu':return cx;case 'paste':return Ww;case 'touchstart':return dx;case 'touchmove':return 2097152;case 'touchend':return Uw;case 'touchcancel':return ex;case 'gesturestart':return fx;case 'gesturechange':return gx;case 'gestureend':return hx;default:return -1;}}
function Kp(e,f){function g(b){f.n=b;var c=e;function d(){c.removeAttribute('controls')}
try{c.srcObject=b;c.setAttribute('playsinline',true);c.setAttribute('controls',true);setTimeout(d)}catch(a){c.src=$wnd.URL.createObjectURL(b)}f.gb()}
function h(a){var b=a.message;f.fb(b)}
var i=$wnd.navigator;function j(a){var b={audio:false,video:{optional:[{sourceId:a}]}};i.getUserMedia?i.getUserMedia(b,g,h):i.webkitGetUserMedia?i.webkitGetUserMedia(b,g,h):i.mozGetUserMedia&&i.mozGetUserMedia(b,g,h)}
i.mediaDevices&&i.mediaDevices.getUserMedia?i.mediaDevices.getUserMedia({video:{facingMode:Rx},audio:false}).then(g)['catch'](h):MediaStreamTrack.getSources(function(a){var b=null;for(var c=0;c!=a.length;++c){var d=a[c];d.kind==='video'&&d.facing===Rx&&(b=d.id)}j(b)})}
function vm(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,q,r,s,t;g=a.length;b=true;c=true;d=true;r=0;n=0;o=0;q=0;h=0;k=0;j=0;i=0;m=0;l=0;f=0;s=a.length>3&&a[0]==-17&&a[1]==-69&&a[2]==-65;for(e=0;e<g&&(b||c||d);e++){t=a[e]&255;if(d){if(r>0){(t&128)==0?(d=false):--r}else if((t&128)!=0){if((t&64)==0){d=false}else{++r;if((t&32)==0){++n}else{++r;if((t&16)==0){++o}else{++r;(t&8)==0?++q:(d=false)}}}}}b&&(t>127&&t<160?(b=false):t>159&&(t<192||t==215||t==247)&&++f);if(c){if(h>0){t<64||t==127||t>252?(c=false):--h}else if(t==128||t==160||t>239){c=false}else if(t>160&&t<224){++k;i=0;++j;j>m&&(m=j)}else if(t>127){++h;j=0;++i;i>l&&(l=i)}else{j=0;i=0}}}d&&r>0&&(d=false);c&&h>0&&(c=false);if(d&&(s||n+o+q>0)){return Jx}if(c&&(m>=3||l>=3)){return Ix}if(b&&c){return m==2&&k==2||f*10>=g?Ix:Hx}if(b){return Hx}if(c){return Ix}if(d){return Jx}return Jx}
function Qi(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?Ni:null);c&3&&(a.ondblclick=b&3?Mi:null);c&4&&(a.onmousedown=b&4?Ni:null);c&8&&(a.onmouseup=b&8?Ni:null);c&16&&(a.onmouseover=b&16?Ni:null);c&32&&(a.onmouseout=b&32?Ni:null);c&64&&(a.onmousemove=b&64?Ni:null);c&128&&(a.onkeydown=b&128?Ni:null);c&256&&(a.onkeypress=b&256?Ni:null);c&512&&(a.onkeyup=b&512?Ni:null);c&1024&&(a.onchange=b&1024?Ni:null);c&2048&&(a.onfocus=b&2048?Ni:null);c&4096&&(a.onblur=b&4096?Ni:null);c&8192&&(a.onlosecapture=b&8192?Ni:null);c&16384&&(a.onscroll=b&16384?Ni:null);c&$w&&(a.nodeName=='IFRAME'?b&$w?a.attachEvent('onload',Oi):a.detachEvent('onload',Oi):(a.onload=b&$w?Pi:null));c&_w&&(a.onerror=b&_w?Ni:null);c&bx&&(a.onmousewheel=b&bx?Ni:null);c&cx&&(a.oncontextmenu=b&cx?Ni:null);c&Ww&&(a.onpaste=b&Ww?Ni:null)}
function dw(g){var d=(ow(),kw(ey));var e,f=g;$wnd.JsQRScanner=qw(function(){var a,b=this,c=arguments;c.length==1&&f.zb(c[0])?(a=c[0]):c.length==1&&(a=fw(c[0]==null?null:c[0].constructor==$wnd.AsyncQRCallback?c[0].g:new Jv(c[0])));b.g=a;pw(a,b);return b});e=$wnd.JsQRScanner.prototype=new Object;e.appendTo=qw(function(a){this.g.Ab(a)});e.getScanInterval=qw(function(){return this.g.Bb()});e.getSnapImageMaxSize=qw(function(){return this.g.Cb()});e.isActive=qw(function(){return this.g.Db()});e.isScanning=qw(function(){return this.g.Eb()});e.removeFrom=qw(function(a){this.g.Fb(a)});e.resumeScanning=qw(function(){this.g.Gb()});e.setScanInterval=qw(function(a){this.g.Hb(a)});e.setSnapImageMaxSize=qw(function(a){this.g.Ib(a)});e.stopScanning=qw(function(){this.g.Jb()});if(d)for(p in d)$wnd.JsQRScanner[p]===undefined&&($wnd.JsQRScanner[p]=d[p])}
function yu(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[Zx]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!wu()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[Zx]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function zi(){var a,b,c;b=$doc.compatMode;a=qd(hd(Dg,1),zw,2,6,[Zw]);for(c=0;c<a.length;c++){if(dr(a[c],b)){return}}a.length==1&&dr(Zw,a[0])&&dr('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function aj(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?Yi:null);c&2&&(a.ondblclick=b&2?Yi:null);c&4&&(a.onmousedown=b&4?Yi:null);c&8&&(a.onmouseup=b&8?Yi:null);c&16&&(a.onmouseover=b&16?Yi:null);c&32&&(a.onmouseout=b&32?Yi:null);c&64&&(a.onmousemove=b&64?Yi:null);c&128&&(a.onkeydown=b&128?Yi:null);c&256&&(a.onkeypress=b&256?Yi:null);c&512&&(a.onkeyup=b&512?Yi:null);c&1024&&(a.onchange=b&1024?Yi:null);c&2048&&(a.onfocus=b&2048?Yi:null);c&4096&&(a.onblur=b&4096?Yi:null);c&8192&&(a.onlosecapture=b&8192?Yi:null);c&16384&&(a.onscroll=b&16384?Yi:null);c&$w&&(a.onload=b&$w?Zi:null);c&_w&&(a.onerror=b&_w?Yi:null);c&bx&&(a.onmousewheel=b&bx?Yi:null);c&cx&&(a.oncontextmenu=b&cx?Yi:null);c&Ww&&(a.onpaste=b&Ww?Yi:null);c&dx&&(a.ontouchstart=b&dx?Yi:null);c&2097152&&(a.ontouchmove=b&2097152?Yi:null);c&Uw&&(a.ontouchend=b&Uw?Yi:null);c&ex&&(a.ontouchcancel=b&ex?Yi:null);c&fx&&(a.ongesturestart=b&fx?Yi:null);c&gx&&(a.ongesturechange=b&gx?Yi:null);c&hx&&(a.ongestureend=b&hx?Yi:null)}
function eo(){eo=ci;co=qd(hd($d,2),zw,7,0,[qd(hd($d,1),Fx,6,15,[21522,0]),qd(hd($d,1),Fx,6,15,[20773,1]),qd(hd($d,1),Fx,6,15,[24188,2]),qd(hd($d,1),Fx,6,15,[23371,3]),qd(hd($d,1),Fx,6,15,[17913,4]),qd(hd($d,1),Fx,6,15,[16590,5]),qd(hd($d,1),Fx,6,15,[20375,6]),qd(hd($d,1),Fx,6,15,[19104,7]),qd(hd($d,1),Fx,6,15,[30660,8]),qd(hd($d,1),Fx,6,15,[29427,9]),qd(hd($d,1),Fx,6,15,[32170,10]),qd(hd($d,1),Fx,6,15,[30877,11]),qd(hd($d,1),Fx,6,15,[26159,12]),qd(hd($d,1),Fx,6,15,[25368,13]),qd(hd($d,1),Fx,6,15,[27713,14]),qd(hd($d,1),Fx,6,15,[26998,15]),qd(hd($d,1),Fx,6,15,[5769,16]),qd(hd($d,1),Fx,6,15,[5054,17]),qd(hd($d,1),Fx,6,15,[7399,18]),qd(hd($d,1),Fx,6,15,[6608,19]),qd(hd($d,1),Fx,6,15,[1890,20]),qd(hd($d,1),Fx,6,15,[597,21]),qd(hd($d,1),Fx,6,15,[3340,22]),qd(hd($d,1),Fx,6,15,[2107,23]),qd(hd($d,1),Fx,6,15,[13663,24]),qd(hd($d,1),Fx,6,15,[12392,25]),qd(hd($d,1),Fx,6,15,[16177,26]),qd(hd($d,1),Fx,6,15,[14854,27]),qd(hd($d,1),Fx,6,15,[9396,28]),qd(hd($d,1),Fx,6,15,[8579,29]),qd(hd($d,1),Fx,6,15,[11994,30]),qd(hd($d,1),Fx,6,15,[11245,31])])}
function Xl(){Xl=ci;var a,b,c,d,e,f,g,h,i,j,k,l;Al=new $l('Cp437',0,qd(hd($d,1),Fx,6,15,[0,2]),qd(hd(Dg,1),zw,2,6,[]));Dl=new $l('ISO8859_1',1,qd(hd($d,1),Fx,6,15,[1,3]),qd(hd(Dg,1),zw,2,6,[Hx]));Kl=new Zl('ISO8859_2',2,4,qd(hd(Dg,1),zw,2,6,['ISO-8859-2']));Ll=new Zl('ISO8859_3',3,5,qd(hd(Dg,1),zw,2,6,['ISO-8859-3']));Ml=new Zl('ISO8859_4',4,6,qd(hd(Dg,1),zw,2,6,['ISO-8859-4']));Nl=new Zl('ISO8859_5',5,7,qd(hd(Dg,1),zw,2,6,['ISO-8859-5']));Ol=new Zl('ISO8859_6',6,8,qd(hd(Dg,1),zw,2,6,['ISO-8859-6']));Pl=new Zl('ISO8859_7',7,9,qd(hd(Dg,1),zw,2,6,['ISO-8859-7']));Ql=new Zl('ISO8859_8',8,10,qd(hd(Dg,1),zw,2,6,['ISO-8859-8']));Rl=new Zl('ISO8859_9',9,11,qd(hd(Dg,1),zw,2,6,['ISO-8859-9']));El=new Zl('ISO8859_10',10,12,qd(hd(Dg,1),zw,2,6,['ISO-8859-10']));Fl=new Zl('ISO8859_11',11,13,qd(hd(Dg,1),zw,2,6,['ISO-8859-11']));Gl=new Zl('ISO8859_13',12,15,qd(hd(Dg,1),zw,2,6,['ISO-8859-13']));Hl=new Zl('ISO8859_14',13,16,qd(hd(Dg,1),zw,2,6,['ISO-8859-14']));Il=new Zl('ISO8859_15',14,17,qd(hd(Dg,1),zw,2,6,['ISO-8859-15']));Jl=new Zl('ISO8859_16',15,18,qd(hd(Dg,1),zw,2,6,['ISO-8859-16']));Tl=new Zl('SJIS',16,20,qd(hd(Dg,1),zw,2,6,[Ix]));wl=new Zl('Cp1250',17,21,qd(hd(Dg,1),zw,2,6,['windows-1250']));xl=new Zl('Cp1251',18,22,qd(hd(Dg,1),zw,2,6,['windows-1251']));yl=new Zl('Cp1252',19,23,qd(hd(Dg,1),zw,2,6,['windows-1252']));zl=new Zl('Cp1256',20,24,qd(hd(Dg,1),zw,2,6,['windows-1256']));Vl=new Zl('UnicodeBigUnmarked',21,25,qd(hd(Dg,1),zw,2,6,['UTF-16BE','UnicodeBig']));Ul=new Zl('UTF8',22,26,qd(hd(Dg,1),zw,2,6,[Jx]));ul=new $l('ASCII',23,qd(hd($d,1),Fx,6,15,[27,170]),qd(hd(Dg,1),zw,2,6,['US-ASCII']));vl=new Yl;Cl=new Zl('GB18030',25,29,qd(hd(Dg,1),zw,2,6,['GB2312','EUC_CN','GBK']));Bl=new Zl('EUC_KR',26,30,qd(hd(Dg,1),zw,2,6,['EUC-KR']));Wl=new du;Sl=new du;for(b=am(),c=0,d=b.length;c<d;++c){a=b[c];for(j=a.b,k=0,l=j.length;k<l;++k){i=j[k];Tr(Wl,Uq(i),a)}Ur(Sl,a.c!=null?a.c:''+a.d,a);for(f=a.a,g=0,h=f.length;g<h;++g){e=f[g];Ur(Sl,e,a)}}}
function Do(){Do=ci;Co=qd(hd($d,1),Fx,6,15,[31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089,167017]);Bo=qd(hd(Tf,1),zw,9,0,[new Fo(1,qd(hd($d,1),Fx,6,15,[]),qd(hd(Sf,1),zw,5,0,[new Lo(7,qd(hd(Rf,1),zw,4,0,[new Ko(1,19)])),new Lo(10,qd(hd(Rf,1),zw,4,0,[new Ko(1,16)])),new Lo(13,qd(hd(Rf,1),zw,4,0,[new Ko(1,13)])),new Lo(17,qd(hd(Rf,1),zw,4,0,[new Ko(1,9)]))])),new Fo(2,qd(hd($d,1),Fx,6,15,[6,18]),qd(hd(Sf,1),zw,5,0,[new Lo(10,qd(hd(Rf,1),zw,4,0,[new Ko(1,34)])),new Lo(16,qd(hd(Rf,1),zw,4,0,[new Ko(1,28)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(1,22)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(1,16)]))])),new Fo(3,qd(hd($d,1),Fx,6,15,[6,22]),qd(hd(Sf,1),zw,5,0,[new Lo(15,qd(hd(Rf,1),zw,4,0,[new Ko(1,55)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(1,44)])),new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(2,17)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(2,13)]))])),new Fo(4,qd(hd($d,1),Fx,6,15,[6,26]),qd(hd(Sf,1),zw,5,0,[new Lo(20,qd(hd(Rf,1),zw,4,0,[new Ko(1,80)])),new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(2,32)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(2,24)])),new Lo(16,qd(hd(Rf,1),zw,4,0,[new Ko(4,9)]))])),new Fo(5,qd(hd($d,1),Fx,6,15,[6,30]),qd(hd(Sf,1),zw,5,0,[new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(1,108)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(2,43)])),new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(2,15),new Ko(2,16)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(2,11),new Ko(2,12)]))])),new Fo(6,qd(hd($d,1),Fx,6,15,[6,34]),qd(hd(Sf,1),zw,5,0,[new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(2,68)])),new Lo(16,qd(hd(Rf,1),zw,4,0,[new Ko(4,27)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(4,19)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(4,15)]))])),new Fo(7,qd(hd($d,1),Fx,6,15,[6,22,38]),qd(hd(Sf,1),zw,5,0,[new Lo(20,qd(hd(Rf,1),zw,4,0,[new Ko(2,78)])),new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(4,31)])),new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(2,14),new Ko(4,15)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(4,13),new Ko(1,14)]))])),new Fo(8,qd(hd($d,1),Fx,6,15,[6,24,42]),qd(hd(Sf,1),zw,5,0,[new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(2,97)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(2,38),new Ko(2,39)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(4,18),new Ko(2,19)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(4,14),new Ko(2,15)]))])),new Fo(9,qd(hd($d,1),Fx,6,15,[6,26,46]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(2,116)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(3,36),new Ko(2,37)])),new Lo(20,qd(hd(Rf,1),zw,4,0,[new Ko(4,16),new Ko(4,17)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(4,12),new Ko(4,13)]))])),new Fo(10,qd(hd($d,1),Fx,6,15,[6,28,50]),qd(hd(Sf,1),zw,5,0,[new Lo(18,qd(hd(Rf,1),zw,4,0,[new Ko(2,68),new Ko(2,69)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(4,43),new Ko(1,44)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(6,19),new Ko(2,20)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(6,15),new Ko(2,16)]))])),new Fo(11,qd(hd($d,1),Fx,6,15,[6,30,54]),qd(hd(Sf,1),zw,5,0,[new Lo(20,qd(hd(Rf,1),zw,4,0,[new Ko(4,81)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(1,50),new Ko(4,51)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(4,22),new Ko(4,23)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(3,12),new Ko(8,13)]))])),new Fo(12,qd(hd($d,1),Fx,6,15,[6,32,58]),qd(hd(Sf,1),zw,5,0,[new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(2,92),new Ko(2,93)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(6,36),new Ko(2,37)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(4,20),new Ko(6,21)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(7,14),new Ko(4,15)]))])),new Fo(13,qd(hd($d,1),Fx,6,15,[6,34,62]),qd(hd(Sf,1),zw,5,0,[new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(4,107)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(8,37),new Ko(1,38)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(8,20),new Ko(4,21)])),new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(12,11),new Ko(4,12)]))])),new Fo(14,qd(hd($d,1),Fx,6,15,[6,26,46,66]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(3,115),new Ko(1,116)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(4,40),new Ko(5,41)])),new Lo(20,qd(hd(Rf,1),zw,4,0,[new Ko(11,16),new Ko(5,17)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(11,12),new Ko(5,13)]))])),new Fo(15,qd(hd($d,1),Fx,6,15,[6,26,48,70]),qd(hd(Sf,1),zw,5,0,[new Lo(22,qd(hd(Rf,1),zw,4,0,[new Ko(5,87),new Ko(1,88)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(5,41),new Ko(5,42)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(5,24),new Ko(7,25)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(11,12),new Ko(7,13)]))])),new Fo(16,qd(hd($d,1),Fx,6,15,[6,26,50,74]),qd(hd(Sf,1),zw,5,0,[new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(5,98),new Ko(1,99)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(7,45),new Ko(3,46)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(15,19),new Ko(2,20)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(3,15),new Ko(13,16)]))])),new Fo(17,qd(hd($d,1),Fx,6,15,[6,30,54,78]),qd(hd(Sf,1),zw,5,0,[new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(1,107),new Ko(5,108)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(10,46),new Ko(1,47)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(1,22),new Ko(15,23)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(2,14),new Ko(17,15)]))])),new Fo(18,qd(hd($d,1),Fx,6,15,[6,30,56,82]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(5,120),new Ko(1,121)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(9,43),new Ko(4,44)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(17,22),new Ko(1,23)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(2,14),new Ko(19,15)]))])),new Fo(19,qd(hd($d,1),Fx,6,15,[6,30,58,86]),qd(hd(Sf,1),zw,5,0,[new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(3,113),new Ko(4,114)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(3,44),new Ko(11,45)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(17,21),new Ko(4,22)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(9,13),new Ko(16,14)]))])),new Fo(20,qd(hd($d,1),Fx,6,15,[6,34,62,90]),qd(hd(Sf,1),zw,5,0,[new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(3,107),new Ko(5,108)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(3,41),new Ko(13,42)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(15,24),new Ko(5,25)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(15,15),new Ko(10,16)]))])),new Fo(21,qd(hd($d,1),Fx,6,15,[6,28,50,72,94]),qd(hd(Sf,1),zw,5,0,[new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(4,116),new Ko(4,117)])),new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(17,42)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(17,22),new Ko(6,23)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(19,16),new Ko(6,17)]))])),new Fo(22,qd(hd($d,1),Fx,6,15,[6,26,50,74,98]),qd(hd(Sf,1),zw,5,0,[new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(2,111),new Ko(7,112)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(17,46)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(7,24),new Ko(16,25)])),new Lo(24,qd(hd(Rf,1),zw,4,0,[new Ko(34,13)]))])),new Fo(23,qd(hd($d,1),Fx,6,15,[6,30,54,78,102]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(4,121),new Ko(5,122)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(4,47),new Ko(14,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(11,24),new Ko(14,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(16,15),new Ko(14,16)]))])),new Fo(24,qd(hd($d,1),Fx,6,15,[6,28,54,80,106]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(6,117),new Ko(4,118)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(6,45),new Ko(14,46)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(11,24),new Ko(16,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(30,16),new Ko(2,17)]))])),new Fo(25,qd(hd($d,1),Fx,6,15,[6,32,58,84,110]),qd(hd(Sf,1),zw,5,0,[new Lo(26,qd(hd(Rf,1),zw,4,0,[new Ko(8,106),new Ko(4,107)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(8,47),new Ko(13,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(7,24),new Ko(22,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(22,15),new Ko(13,16)]))])),new Fo(26,qd(hd($d,1),Fx,6,15,[6,30,58,86,114]),qd(hd(Sf,1),zw,5,0,[new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(10,114),new Ko(2,115)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(19,46),new Ko(4,47)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(28,22),new Ko(6,23)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(33,16),new Ko(4,17)]))])),new Fo(27,qd(hd($d,1),Fx,6,15,[6,34,62,90,118]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(8,122),new Ko(4,123)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(22,45),new Ko(3,46)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(8,23),new Ko(26,24)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(12,15),new Ko(28,16)]))])),new Fo(28,qd(hd($d,1),Fx,6,15,[6,26,50,74,98,122]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(3,117),new Ko(10,118)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(3,45),new Ko(23,46)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(4,24),new Ko(31,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(11,15),new Ko(31,16)]))])),new Fo(29,qd(hd($d,1),Fx,6,15,[6,30,54,78,102,126]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(7,116),new Ko(7,117)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(21,45),new Ko(7,46)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(1,23),new Ko(37,24)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(19,15),new Ko(26,16)]))])),new Fo(30,qd(hd($d,1),Fx,6,15,[6,26,52,78,104,130]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(5,115),new Ko(10,116)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(19,47),new Ko(10,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(15,24),new Ko(25,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(23,15),new Ko(25,16)]))])),new Fo(31,qd(hd($d,1),Fx,6,15,[6,30,56,82,108,134]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(13,115),new Ko(3,116)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(2,46),new Ko(29,47)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(42,24),new Ko(1,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(23,15),new Ko(28,16)]))])),new Fo(32,qd(hd($d,1),Fx,6,15,[6,34,60,86,112,138]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(17,115)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(10,46),new Ko(23,47)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(10,24),new Ko(35,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(19,15),new Ko(35,16)]))])),new Fo(33,qd(hd($d,1),Fx,6,15,[6,30,58,86,114,142]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(17,115),new Ko(1,116)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(14,46),new Ko(21,47)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(29,24),new Ko(19,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(11,15),new Ko(46,16)]))])),new Fo(34,qd(hd($d,1),Fx,6,15,[6,34,62,90,118,146]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(13,115),new Ko(6,116)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(14,46),new Ko(23,47)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(44,24),new Ko(7,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(59,16),new Ko(1,17)]))])),new Fo(35,qd(hd($d,1),Fx,6,15,[6,30,54,78,102,126,150]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(12,121),new Ko(7,122)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(12,47),new Ko(26,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(39,24),new Ko(14,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(22,15),new Ko(41,16)]))])),new Fo(36,qd(hd($d,1),Fx,6,15,[6,24,50,76,102,128,154]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(6,121),new Ko(14,122)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(6,47),new Ko(34,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(46,24),new Ko(10,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(2,15),new Ko(64,16)]))])),new Fo(37,qd(hd($d,1),Fx,6,15,[6,28,54,80,106,132,158]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(17,122),new Ko(4,123)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(29,46),new Ko(14,47)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(49,24),new Ko(10,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(24,15),new Ko(46,16)]))])),new Fo(38,qd(hd($d,1),Fx,6,15,[6,32,58,84,110,136,162]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(4,122),new Ko(18,123)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(13,46),new Ko(32,47)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(48,24),new Ko(14,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(42,15),new Ko(32,16)]))])),new Fo(39,qd(hd($d,1),Fx,6,15,[6,26,54,82,110,138,166]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(20,117),new Ko(4,118)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(40,47),new Ko(7,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(43,24),new Ko(22,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(10,15),new Ko(67,16)]))])),new Fo(40,qd(hd($d,1),Fx,6,15,[6,30,58,86,114,142,170]),qd(hd(Sf,1),zw,5,0,[new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(19,118),new Ko(6,119)])),new Lo(28,qd(hd(Rf,1),zw,4,0,[new Ko(18,47),new Ko(31,48)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(34,24),new Ko(34,25)])),new Lo(30,qd(hd(Rf,1),zw,4,0,[new Ko(20,15),new Ko(61,16)]))]))])}
var rw='object',sw='function',tw=2147483647,uw='java.lang',vw='com.google.gwt.user.client.ui',ww={35:1,36:1,31:1,30:1,37:1,24:1,22:1},xw='com.google.gwt.canvas.client',yw='com.google.gwt.core.client',zw={3:1},Aw='__java$exception',Bw={3:1,8:1},Cw='__noinit__',Dw={3:1,10:1,8:1},Ew='com.google.gwt.core.client.impl',Fw='null',Gw={29:1},Hw='com.google.gwt.dom.client',Iw='mouseout',Jw='DOMImplTrident',Kw='DOMImplIE8',Lw='DOMImplStandard',Mw='DOMImplStandardBase',Nw=65535,Ow='DOMImplIE9',Pw='DOMImplMozilla',Qw='DOMImplWebkit',Rw='UmbrellaException',Sw=4194303,Tw=1048575,Uw=4194304,Vw=17592186044416,Ww=524288,Xw=-17592186044416,Yw='com.google.gwt.media.client',Zw='CSS1Compat',$w=32768,_w=65536,ax='DOMMouseScroll',bx=131072,cx=262144,dx=1048576,ex=8388608,fx=16777216,gx=33554432,hx=67108864,ix={28:1},jx='com.google.gwt.user.client.impl',kx='.call(this)}',lx='return function() { w.__gwt_dispatchUnhandledEvent_',mx='com.google.gwt.user.client.ui.impl',nx={41:1,60:1},ox='Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (',px='does not match the runtime user.agent value (',qx=').\n',rx='Expect more errors.',sx='com.google.gwt.useragent.client',tx={55:1},ux='gecko1_8',vx='webkit',wx='safari',xx='msie',yx='ie10',zx='ie9',Ax='ie8',Bx='gecko',Cx='unknown',Dx='com.google.zxing',Ex={3:1,21:1},Fx={7:1,3:1},Gx='com.google.zxing.common',Hx='ISO-8859-1',Ix='Shift_JIS',Jx='UTF-8',Kx='com.google.zxing.common.reedsolomon',Lx='GenericGFPolys do not have same GenericGF field',Mx='com.google.zxing.qrcode.decoder',Nx={15:1,3:1,14:1,13:1},Ox='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:',Px='com.google.zxing.qrcode.detector',Qx='com.google.zxing.web',Rx='environment',Sx={3:1,10:1,11:1,8:1},Tx={14:1,32:1},Ux='java.nio.charset',Vx='java.util',Wx={43:1},Xx='_gwt_modCount',Yx={19:1},Zx='delete',$x='javaemul.internal',_x='Invalid UTF8 sequence',ay='fromIndex: 0, toIndex: ',by=', length: ',cy='jb.client',dy='AsyncQRCallback',ey='JsQRScanner',fy='org.timepedia.exporter.client',gy='locale',hy='default',iy='user.agent';var _,_h,Wh,Dh=-1;ai();bi(1,null,{},H);_.t=function I(a){return this===a};_.u=function K(){return this.Kb};_.v=function M(){return vv(this)};_.w=function O(){return hq(L(this))+'@'+(N(this)>>>0).toString(16)};_.equals=function(a){return this.t(a)};_.hashCode=function(){return this.v()};_.toString=function(){return this.w()};var Gd,Hd,Id;bi(77,1,{},iq);_.hb=function jq(a){var b;b=new iq;b.f=4;a>1?(b.c=qq(this,a-1)):(b.c=this);return b};_.ib=function pq(){gq(this);return this.b};_.jb=function rq(){return hq(this)};_.kb=function tq(){gq(this);return this.j};_.lb=function vq(){return (this.f&4)!=0};_.mb=function wq(){return (this.f&1)!=0};_.w=function zq(){return ((this.f&2)!=0?'interface ':(this.f&1)!=0?'':'class ')+(gq(this),this.n)};_.f=0;var fq=1;var yg=lq(uw,'Object',1);var mg=lq(uw,'Class',77);bi(24,1,{30:1,24:1});_.w=function U(){if(!this.s){return '(null handle)'}return yc((ui(),this.s))};var Qe=lq(vw,'UIObject',24);bi(22,24,ww);_.A=function Z(){};_.B=function $(){};_.C=function ab(){V(this)};_.D=function bb(a){var b;switch(ui(),Ii((Cc(),a).type)){case 16:case 32:b=Bc.P(a);if(!!b&&wc(this.s,b)){return}}};_.F=function cb(){W(this)};_.p=false;_.q=0;var Te=lq(vw,'Widget',22);bi(205,22,ww);_.C=function fb(){eb(this)};var Oe=lq(vw,'FocusWidget',205);bi(144,205,ww,kb);var gb;var ce=lq(xw,'Canvas',144);bi(58,1,{58:1});_.G=function mb(){return false};var be=lq(xw,'Canvas/CanvasElementSupportDetector',58);bi(145,58,{58:1},nb);_.G=function ob(){return true};var _d=lq(xw,'Canvas/CanvasElementSupportDetectedMaybe',145);bi(146,58,{58:1},pb);_.G=function qb(){return false};var ae=lq(xw,'Canvas/CanvasElementSupportDetectedNo',146);var ee=lq(yw,'JavaScriptObject$',0);bi(8,1,Bw);_.H=function Bb(a){return new $wnd.Error(a)};_.I=function Cb(){this.k&&this.e!==Cw&&this.K();return this};_.J=function Eb(){return this.f};_.K=function Fb(){var a,b,c;c=this.f==null?null:this.f.replace(new RegExp('\n','g'),' ');b=(a=hq(this.Kb),c==null?a:a+': '+c);xb(this,Db(this.H(b)));oc(this)};_.w=function Gb(){return zb(this,this.J())};_.e=Cw;_.i=false;_.k=true;var Eg=lq(uw,'Throwable',8);bi(10,8,Dw);var qg=lq(uw,'Exception',10);bi(17,10,Dw);var zg=lq(uw,'RuntimeException',17);bi(69,17,Dw);var vg=lq(uw,'JsException',69);bi(100,69,Dw);var ge=lq(Ew,'JavaScriptExceptionBase',100);bi(51,100,{51:1,3:1,10:1,8:1},Pb);_.J=function Sb(){Ob(this);return this.c};_.L=function Tb(){return Ud(this.b)===Ud(Mb)?null:this.b};var Mb;var de=lq(yw,'JavaScriptException',51);bi(185,1,{});var fe=lq(yw,'Scheduler',185);var Vb=0,Wb=0,Xb=-1;bi(108,185,{},jc);var fc;var he=lq(Ew,'SchedulerImpl',108);var mc;bi(196,1,{});var le=lq(Ew,'StackTraceCreator/Collector',196);bi(101,196,{},rc);_.M=function sc(a){var b={},j;var c=[];a['fnStack']=c;var d=arguments.callee.caller;while(d){var e=(nc(),d.name||(d.name=pc(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};var ie=lq(Ew,'StackTraceCreator/CollectorLegacy',101);bi(197,196,{});_.M=function tc(a){};var ke=lq(Ew,'StackTraceCreator/CollectorModern',197);bi(102,197,{},uc);var je=lq(Ew,'StackTraceCreator/CollectorModernNoSourceMap',102);bi(29,1,Gw);_.N=function Ec(a,b){return a.createElement(b)};_.O=function Fc(a){return a.currentTarget};_.R=function Gc(a){return a.tabIndex};_.T=function Hc(a){return a.outerHTML};var Bc;var te=lq(Hw,'DOMImpl',29);bi(209,29,Gw);_.N=function Jc(a,b){var c,d;if(b.indexOf(':')!=-1){c=(!a.__gwt_container&&(a.__gwt_container=a.createElement('div')),a.__gwt_container);c.innerHTML='<'+b+'/>'||'';d=Dc((Cc(),c));c.removeChild(d);return d}return a.createElement(b)};_.O=function Kc(a){return Ic};_.P=function Lc(a){return a.relatedTarget||(a.type==Iw?a.toElement:a.fromElement)};_.Q=function Mc(a){a.returnValue=false};_.S=function Nc(a,b){return Oc(a,b)};var Ic;var re=lq(Hw,Jw,209);bi(147,209,Gw,Pc);var me=lq(Hw,Kw,147);bi(210,29,Gw);_.P=function Qc(a){return a.relatedTarget};_.Q=function Rc(a){a.preventDefault()};_.S=function Sc(a,b){return a.contains(b)};var qe=lq(Hw,Lw,210);bi(211,210,Gw);_.O=function Tc(a){return a.currentTarget||$wnd};_.R=function Uc(a){return typeof a.tabIndex!='undefined'?a.tabIndex:-1};var pe=lq(Hw,Mw,211);bi(150,211,Gw,Vc);_.R=function Wc(a){return a.tabIndex<Nw?a.tabIndex:-(a.tabIndex%Nw)-1};_.S=function Xc(a,b){return Oc(a,b)};var ne=lq(Hw,Ow,150);bi(149,210,Gw,Yc);_.P=function Zc(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};_.S=function $c(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)};_.T=function _c(a){var b=a.ownerDocument;var c=a.cloneNode(true);var d=b.createElement('DIV');d.appendChild(c);outer=d.innerHTML;c.innerHTML='';return outer};var oe=lq(Hw,Pw,149);bi(148,211,Gw,ad);var se=lq(Hw,Qw,148);bi(128,17,Dw);var cf=lq('com.google.web.bindery.event.shared',Rw,128);bi(129,128,Dw);var ue=lq('com.google.gwt.event.shared',Rw,129);var Cd,Dd,Ed;bi(134,205,ww);var ve=lq(Yw,'MediaBase',134);bi(135,134,ww,ki);var ji;var ze=lq(Yw,'Video',135);bi(57,1,{57:1});_.U=function mi(){return false};var ye=lq(Yw,'Video/VideoElementSupportDetector',57);bi(136,57,{57:1},ni);_.U=function oi(){return true};var we=lq(Yw,'Video/VideoElementSupportDetectedMaybe',136);bi(137,57,{57:1},pi);_.U=function qi(){return false};var xe=lq(Yw,'Video/VideoElementSupportDetectedNo',137);var ri=null,si,ti;bi(126,1,{});_.V=function Fi(a){if(a!=this.b){return}this.c||(this.d=null);Hp(this.a)};_.b=0;_.c=false;_.d=null;var Ae=lq('com.google.gwt.user.client','Timer',126);bi(28,1,ix);var Hi=false;var Ie=lq(jx,'DOMImpl',28);bi(206,28,ix);_.W=function Ri(){$wnd.__gwt_globalEventArray==null&&($wnd.__gwt_globalEventArray=new Array);$wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length]=qw(function(){return wi($wnd.event)});var e=qw(function(){var a=(Cc(),Ic);Ic=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Si()){Ic=a;return}}var b=Ki;var c,d=this;while(d&&!(c=b(d))){d=d.parentElement}c&&vi($wnd.event,d,c);Ic=a});var f=qw(function(){var a=$doc.createEventObject();$wnd.event.returnValue==null&&$wnd.event.srcElement.fireEvent&&$wnd.event.srcElement.fireEvent('onclick',a);if(this.__eventBits&2){e.call(this)}else if($wnd.event.returnValue==null){$wnd.event.returnValue=true;Si()}});var g=qw(function(){this.__gwtLastUnhandledEvent=$wnd.event.type;e.call(this)});var h=(Yb(),$moduleName).replace(/\./g,'_');$wnd['__gwt_dispatchEvent_'+h]=e;Ni=(new Function('w','return function() { w.__gwt_dispatchEvent_'+h+'.call(this) }'))($wnd);$wnd['__gwt_dispatchDblClickEvent_'+h]=f;Mi=(new Function('w','return function() { w.__gwt_dispatchDblClickEvent_'+h+kx))($wnd);$wnd['__gwt_dispatchUnhandledEvent_'+h]=g;Pi=(new Function('w',lx+h+kx))($wnd);Oi=(new Function('w',lx+h+'.call(w.event.srcElement)}'))($wnd);var i=qw(function(){e.call($doc.body)});var j=qw(function(){f.call($doc.body)});$doc.body.attachEvent('onclick',i);$doc.body.attachEvent('onmousedown',i);$doc.body.attachEvent('onmouseup',i);$doc.body.attachEvent('onmousemove',i);$doc.body.attachEvent('onmousewheel',i);$doc.body.attachEvent('onkeydown',i);$doc.body.attachEvent('onkeypress',i);$doc.body.attachEvent('onkeyup',i);$doc.body.attachEvent('onfocus',i);$doc.body.attachEvent('onblur',i);$doc.body.attachEvent('ondblclick',j);$doc.body.attachEvent('oncontextmenu',i)};_.X=function Ti(a,b){Ji(this);Qi(a,b)};var Mi,Ni,Oi,Pi;var Ge=lq(jx,Jw,206);bi(140,206,ix,Ui);var Be=lq(jx,Kw,140);bi(207,28,ix);_.W=function hj(){_i()};_.X=function ij(a,b){Ji(this);aj(a,b)};var Vi,Wi,Xi,Yi,Zi;var Fe=lq(jx,Lw,207);bi(208,207,ix);var Ee=lq(jx,Mw,208);bi(141,208,ix,jj);var Ce=lq(jx,Ow,141);bi(142,207,ix,mj);_.W=function nj(){_i();lj()};_.X=function oj(a,b){Ji(this);aj(a,b);b&bx&&a.addEventListener(ax,($i(),Yi),false)};var De=lq(jx,Pw,142);bi(143,208,ix,pj);var He=lq(jx,Qw,143);bi(204,22,ww);_.A=function rj(){Aj(this,(yj(),wj))};_.B=function sj(){Aj(this,(yj(),xj))};var Pe=lq(vw,'Panel',204);bi(122,204,ww);_.Y=function vj(){return new Rj(this.o)};var Me=lq(vw,'ComplexPanel',122);bi(130,129,Dw,zj);var wj,xj;var Le=lq(vw,'AttachDetachException',130);bi(131,1,{},Bj);_.Z=function Cj(a){a.C()};var Je=lq(vw,'AttachDetachException/1',131);bi(132,1,{},Dj);_.Z=function Ej(a){a.F()};var Ke=lq(vw,'AttachDetachException/2',132);bi(88,122,ww);var Ne=lq(vw,'FlowPanel',88);var Gj;bi(139,1,{},Oj);_.Y=function Pj(){return new Rj(this)};_.b=0;var Se=lq(vw,'WidgetCollection',139);bi(89,1,{},Rj);_._=function Tj(){return Qj(this)};_.$=function Sj(){return this.b<this.c.b};_.b=0;var Re=lq(vw,'WidgetCollection/WidgetIterator',89);bi(41,1,{41:1},Xj);var Uj;var Xe=lq(mx,'FocusImpl',41);bi(151,41,{41:1},Yj);var Ue=lq(mx,'FocusImplIE6',151);bi(60,41,nx,Zj);var We=lq(mx,'FocusImplStandard',60);bi(152,60,nx,$j);var Ve=lq(mx,'FocusImplSafari',152);bi(66,8,Bw);var pg=lq(uw,'Error',66);bi(18,66,Bw);var jg=lq(uw,'AssertionError',18);bi(93,18,Bw,bk);var Ye=lq(sx,'UserAgentAsserter/UserAgentAssertionError',93);bi(112,1,tx,ck);_.ab=function dk(){return ux};_.bb=function ek(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(vx)!=-1}())return wx;if(function(){return a.indexOf(xx)!=-1&&b>=10&&b<11}())return yx;if(function(){return a.indexOf(xx)!=-1&&b>=9&&b<11}())return zx;if(function(){return a.indexOf(xx)!=-1&&b>=8&&b<11}())return Ax;if(function(){return a.indexOf(Bx)!=-1||b>=11}())return ux;return Cx};var Ze=lq(sx,'UserAgentImplGecko1_8',112);bi(110,1,tx,fk);_.ab=function gk(){return yx};_.bb=function hk(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(vx)!=-1}())return wx;if(function(){return a.indexOf(xx)!=-1&&b>=10&&b<11}())return yx;if(function(){return a.indexOf(xx)!=-1&&b>=9&&b<11}())return zx;if(function(){return a.indexOf(xx)!=-1&&b>=8&&b<11}())return Ax;if(function(){return a.indexOf(Bx)!=-1||b>=11}())return ux;return Cx};var $e=lq(sx,'UserAgentImplIe10',110);bi(113,1,tx,ik);_.ab=function jk(){return Ax};_.bb=function kk(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(vx)!=-1}())return wx;if(function(){return a.indexOf(xx)!=-1&&b>=10&&b<11}())return yx;if(function(){return a.indexOf(xx)!=-1&&b>=9&&b<11}())return zx;if(function(){return a.indexOf(xx)!=-1&&b>=8&&b<11}())return Ax;if(function(){return a.indexOf(Bx)!=-1||b>=11}())return ux;return Cx};var _e=lq(sx,'UserAgentImplIe8',113);bi(109,1,tx,lk);_.ab=function mk(){return zx};_.bb=function nk(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(vx)!=-1}())return wx;if(function(){return a.indexOf(xx)!=-1&&b>=10&&b<11}())return yx;if(function(){return a.indexOf(xx)!=-1&&b>=9&&b<11}())return zx;if(function(){return a.indexOf(xx)!=-1&&b>=8&&b<11}())return Ax;if(function(){return a.indexOf(Bx)!=-1||b>=11}())return ux;return Cx};var af=lq(sx,'UserAgentImplIe9',109);bi(111,1,tx,ok);_.ab=function pk(){return wx};_.bb=function qk(){var a=navigator.userAgent.toLowerCase();var b=$doc.documentMode;if(function(){return a.indexOf(vx)!=-1}())return wx;if(function(){return a.indexOf(xx)!=-1&&b>=10&&b<11}())return yx;if(function(){return a.indexOf(xx)!=-1&&b>=9&&b<11}())return zx;if(function(){return a.indexOf(xx)!=-1&&b>=8&&b<11}())return Ax;if(function(){return a.indexOf(Bx)!=-1||b>=11}())return ux;return Cx};var bf=lq(sx,'UserAgentImplSafari',111);bi(157,1,{});var df=lq(Dx,'Binarizer',157);bi(155,1,{},rk);_.w=function sk(){try{return ml((!this.b&&(this.b=lm(this.a)),this.b))}catch(a){a=Kh(a);if(Od(a,61)){return ''}else throw Lh(a)}};var ef=lq(Dx,'BinaryBitmap',155);bi(73,10,Dw);_.I=function wk(){return null};var tk;var kf=lq(Dx,'ReaderException',73);bi(62,73,{62:1,3:1,10:1,8:1},zk);var xk;var ff=lq(Dx,'ChecksumException',62);bi(63,73,{63:1,3:1,10:1,8:1},Ck);var Ak;var gf=lq(Dx,'FormatException',63);bi(156,1,{});_.w=function Dk(){var a,b,c,d,e,f;d=md(Wd,zw,6,this.f,15,1);c=new qr;for(f=0;f<this.e;f++){d=zp(this,f,d);for(e=0;e<this.f;e++){b=d[e]&255;b<64?(a=35):b<128?(a=43):b<192?(a=46):(a=32);c.a+=String.fromCharCode(a)}c.a+='\n'}return c.a};_.e=0;_.f=0;var hf=lq(Dx,'LuminanceSource',156);bi(61,73,{61:1,3:1,10:1,8:1},Gk);var Ek;var jf=lq(Dx,'NotFoundException',61);bi(72,1,{},Ik);_.w=function Kk(){return this.b};var nf=lq(Dx,'Result',72);bi(13,1,{3:1,14:1,13:1});_.cb=function Nk(a){return Lk(this,Kd(a,13))};_.t=function Ok(a){return this===a};_.v=function Pk(){return vv(this)};_.w=function Qk(){return this.c!=null?this.c:''+this.d};_.d=0;var og=lq(uw,'Enum',13);bi(20,13,{20:1,3:1,14:1,13:1},bl);var Rk,Sk,Tk,Uk,Vk,Wk,Xk,Yk,Zk,$k,_k;var lf=mq(Dx,'ResultMetadataType',20,cl);bi(27,1,{27:1});_.t=function fl(a){var b;if(Od(a,27)){b=Kd(a,27);return this.c==b.c&&this.d==b.d}return false};_.v=function gl(){return 31*Hq(this.c)+Hq(this.d)};_.w=function il(){var a;a=new qr;a.a+='(';nr(a,this.c);a.a+=',';nr(a,this.d);a.a+=')';return a.a};_.c=0;_.d=0;var mf=lq(Dx,'ResultPoint',27);bi(34,1,{34:1},nl,ol);_.t=function pl(a){var b;if(!Od(a,34)){return false}b=Kd(a,34);return this.d==b.d&&this.b==b.b&&this.c==b.c&&gt(this.a,b.a)};_.v=function ql(){var a;a=this.d;a=31*a+this.d;a=31*a+this.b;a=31*a+this.c;a=31*a+ht(this.a);return a};_.w=function rl(){return ml(this)};_.b=0;_.c=0;_.d=0;var of=lq(Gx,'BitMatrix',34);bi(181,1,{},tl);_.a=0;_.b=0;var pf=lq(Gx,'BitSource',181);bi(12,13,{12:1,3:1,14:1,13:1},Yl,Zl,$l);var ul,vl,wl,xl,yl,zl,Al,Bl,Cl,Dl,El,Fl,Gl,Hl,Il,Jl,Kl,Ll,Ml,Nl,Ol,Pl,Ql,Rl,Sl,Tl,Ul,Vl,Wl;var qf=mq(Gx,'CharacterSetECI',12,am);bi(160,1,{},cm);_.d=0;_.e=0;var rf=lq(Gx,'DecoderResult',160);bi(161,1,{},fm);var sf=lq(Gx,'DetectorResult',161);bi(158,157,{});var gm;var tf=lq(Gx,'GlobalHistogramBinarizer',158);bi(159,158,{},mm);var uf=lq(Gx,'HybridBinarizer',159);bi(64,1,{},sm);_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;_.i=0;_.j=0;_.k=0;var vf=lq(Gx,'PerspectiveTransform',64);bi(48,1,{},Gm);_.w=function Hm(){return 'GF(0x'+(this.e>>>0).toString(16)+','+this.f+')'};_.b=0;_.e=0;_.f=0;var zm;var xf=lq(Kx,'GenericGF',48);bi(25,1,{25:1},Om);_.w=function Pm(){var a,b,c,d;d=new qr;for(c=this.a.length-1;c>=0;c--){b=this.a[this.a.length-1-c];if(b!=0){if(b<0){d.a+=' - ';b=-b}else{d.a.length>0&&(d.a+=' + ',d)}if(c==0||b!=1){a=Em(this.b,b);if(a==0){d.a+='1'}else if(a==1){d.a+='a'}else{d.a+='a^';d.a+=a}}if(c!=0){if(c==1){d.a+='x'}else{d.a+='x^';d.a+=c}}}}return d.a};var wf=lq(Kx,'GenericGFPoly',25);bi(154,1,{},Um);var yf=lq(Kx,'ReedSolomonDecoder',154);bi(49,10,{49:1,3:1,10:1,8:1},Vm);var zf=lq(Kx,'ReedSolomonException',49);bi(138,1,{213:1},Xm);var Af=lq('com.google.zxing.qrcode','QRCodeReader',138);bi(164,1,{},bn);_.b=false;var Bf=lq(Mx,'BitMatrixParser',164);bi(74,1,{74:1},cn);_.b=0;var Cf=lq(Mx,'DataBlock',74);bi(15,13,Nx);var en,fn,gn,hn,jn,kn,ln,mn;var Lf=mq(Mx,'DataMask',15,qn);bi(173,15,Nx,rn);_.db=function sn(a,b){return (a+b&1)==0};var Df=mq(Mx,'DataMask/1',173,null);bi(174,15,Nx,tn);_.db=function un(a,b){return (a&1)==0};var Ef=mq(Mx,'DataMask/2',174,null);bi(175,15,Nx,vn);_.db=function wn(a,b){return b%3==0};var Ff=mq(Mx,'DataMask/3',175,null);bi(176,15,Nx,xn);_.db=function yn(a,b){return (a+b)%3==0};var Gf=mq(Mx,'DataMask/4',176,null);bi(177,15,Nx,zn);_.db=function An(a,b){return ((a/2|0)+(b/3|0)&1)==0};var Hf=mq(Mx,'DataMask/5',177,null);bi(178,15,Nx,Bn);_.db=function Cn(a,b){var c;c=a*b;return (c&1)+c%3==0};var If=mq(Mx,'DataMask/6',178,null);bi(179,15,Nx,Dn);_.db=function En(a,b){var c;c=a*b;return ((c&1)+c%3&1)==0};var Jf=mq(Mx,'DataMask/7',179,null);bi(180,15,Nx,Fn);_.db=function Gn(a,b){return ((a+b&1)+a*b%3&1)==0};var Kf=mq(Mx,'DataMask/8',180,null);var Hn;bi(153,1,{},Un);var Mf=lq(Mx,'Decoder',153);bi(42,13,{42:1,3:1,14:1,13:1},_n);var Vn,Wn,Xn,Yn,Zn;var Nf=mq(Mx,'ErrorCorrectionLevel',42,bo);bi(53,1,{53:1},fo);_.t=function io(a){var b;if(!Od(a,53)){return false}b=Kd(a,53);return this.b==b.b&&this.a==b.a};_.v=function jo(){return this.b.d<<3|this.a};_.a=0;var co;var Of=lq(Mx,'FormatInformation',53);bi(23,13,{23:1,3:1,14:1,13:1},wo);var ko,lo,mo,no,oo,po,qo,ro,so,to;var Pf=mq(Mx,'Mode',23,yo);bi(163,1,{},Ao);_.a=false;var Qf=lq(Mx,'QRCodeDecoderMetaData',163);bi(9,1,{9:1},Fo);_.w=function Jo(){return ''+this.d};_.c=0;_.d=0;var Bo,Co;var Tf=lq(Mx,'Version',9);bi(4,1,{4:1},Ko);_.a=0;_.b=0;var Rf=lq(Mx,'Version/ECB',4);bi(5,1,{5:1},Lo);_.b=0;var Sf=lq(Mx,'Version/ECBlocks',5);bi(54,27,{27:1,54:1},No);_.a=0;var Vf=lq(Px,'AlignmentPattern',54);bi(182,1,{},So);_.b=0;_.d=0;_.f=0;_.i=0;_.j=0;var Uf=lq(Px,'AlignmentPatternFinder',182);bi(162,1,{},Zo);var Wf=lq(Px,'Detector',162);bi(16,27,{27:1,16:1},cp,dp);_.a=0;_.b=0;var _f=lq(Px,'FinderPattern',16);bi(165,1,{},np);_.b=false;var Zf=lq(Px,'FinderPatternFinder',165);bi(167,1,zw,qp);_.eb=function rp(a,b){return pp(this,Kd(a,16),Kd(b,16))};_.t=function sp(a){return this===a};_.a=0;var Xf=lq(Px,'FinderPatternFinder/CenterComparator',167);bi(166,1,zw,up);_.eb=function vp(a,b){return tp(this,Kd(a,16),Kd(b,16))};_.t=function wp(a){return this===a};_.a=0;var Yf=lq(Px,'FinderPatternFinder/FurthestFromAverageComparator',166);bi(168,1,{},xp);var $f=lq(Px,'FinderPatternInfo',168);bi(91,156,{},Ap);_.c=0;_.d=0;var ag=lq(Qx,'CanvasLuminanceSource',91);bi(123,88,ww);_.C=function Np(){Ep(this)};_.F=function Op(){W(this);Lp(this)};_.fb=function Pp(a){Fp(this,a)};_.gb=function Qp(){this.a&&this.p&&Bi(this.i,this.f)};_.a=false;_.f=0;_.j=0;var cg=lq(Qx,'ScannerWidget',123);bi(127,126,{},Rp);var bg=lq(Qx,'ScannerWidget/1',127);bi(99,10,Dw);var dg=lq('java.io','IOException',99);bi(50,99,{3:1,50:1,10:1,8:1},Sp);var eg=lq('java.io','UnsupportedEncodingException',50);bi(78,1,{94:1});_.w=function Vp(){return this.a};var fg=lq(uw,'AbstractStringBuilder',78);bi(84,17,Dw,Wp);var gg=lq(uw,'ArithmeticException',84);bi(26,17,Dw,Xp,Yp);var tg=lq(uw,'IndexOutOfBoundsException',26);bi(75,26,{3:1,75:1,10:1,8:1},Zp);var hg=lq(uw,'ArrayIndexOutOfBoundsException',75);bi(83,17,Dw,$p,_p);var ig=lq(uw,'ArrayStoreException',83);Gd={3:1,96:1,14:1};var kg=lq(uw,'Boolean',96);bi(98,17,Dw,Aq);var lg=lq(uw,'ClassCastException',98);bi(68,1,{3:1,68:1});var xg=lq(uw,'Number',68);Hd={3:1,14:1,97:1,68:1};var ng=lq(uw,'Double',97);var Eq,Fq;bi(11,17,Sx,Iq,Jq);var rg=lq(uw,'IllegalArgumentException',11);bi(45,17,Dw,Kq,Lq);var sg=lq(uw,'IllegalStateException',45);bi(38,68,{3:1,14:1,38:1,68:1},Nq);_.cb=function Qq(a){return Mq(this,Kd(a,38))};_.t=function Rq(a){return Od(a,38)&&Kd(a,38).a==this.a};_.v=function Sq(){return this.a};_.w=function Tq(){return ''+this.a};_.a=0;var ug=lq(uw,'Integer',38);var Vq;bi(82,69,Dw,Yq,Zq);_.H=function $q(a){return new $wnd.TypeError(a)};var wg=lq(uw,'NullPointerException',82);Id={3:1,94:1,14:1,2:1};var Dg=lq(uw,'String',2);bi(39,78,{94:1},qr,rr);var Bg=lq(uw,'StringBuilder',39);bi(104,26,Dw,sr);var Cg=lq(uw,'StringIndexOutOfBoundsException',104);bi(227,1,{});bi(106,17,Dw,ur);var Fg=lq(uw,'UnsupportedOperationException',106);bi(32,1,Tx);_.cb=function wr(a){return vr(this,Kd(a,32))};_.t=function xr(a){var b;if(a===this){return true}if(!Od(a,32)){return false}b=Kd(a,32);return dr(this.a,b.a)};_.v=function zr(){return Bv(this.a)};_.w=function Ar(){return this.a};var Gg=lq(Ux,'Charset',32);bi(105,11,Sx,Br);var Hg=lq(Ux,'IllegalCharsetNameException',105);bi(67,11,{3:1,10:1,11:1,8:1,67:1},Cr);var Ig=lq(Ux,'UnsupportedCharsetException',67);bi(200,1,{});_.nb=function Fr(a){return Dr(this,a)};_.w=function Gr(){var a,b,c;c=new Qu('[',']');for(b=this.Y();b.$();){a=b._();Pu(c,a===this?'(this Collection)':a==null?Fw:ei(a))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};var Jg=lq(Vx,'AbstractCollection',200);bi(199,1,{65:1});_.pb=function Kr(a){return !!Ir(this,a)};_.t=function Lr(a){var b,c,d;if(a===this){return true}if(!Od(a,65)){return false}d=Kd(a,65);if(this.ob()!=d.ob()){return false}for(c=d.qb().Y();c.$();){b=Kd(c._(),19);if(!Hr(this,b)){return false}}return true};_.rb=function Mr(a){return Nr(Ir(this,a))};_.v=function Or(){return nt(this.qb())};_.ob=function Pr(){return this.qb().ob()};_.w=function Qr(){var a,b,c;c=new Qu('{','}');for(b=this.qb().Y();b.$();){a=Kd(b._(),19);Pu(c,Jr(this,a.ub())+'='+Jr(this,a.vb()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};var Wg=lq(Vx,'AbstractMap',199);bi(114,199,{65:1});_.pb=function Xr(a){return Rr(this,a)};_.qb=function Yr(){return new cs(this)};_.rb=function Zr(a){return Sr(this,a)};_.ob=function $r(){return Wr(this)};var Mg=lq(Vx,'AbstractHashMap',114);bi(201,200,Wx);_.t=function _r(a){var b;if(a===this){return true}if(!Od(a,43)){return false}b=Kd(a,43);if(b.ob()!=this.ob()){return false}return Er(this,b)};_.v=function as(){return nt(this)};var Xg=lq(Vx,'AbstractSet',201);bi(46,201,Wx,cs);_.nb=function ds(a){return bs(this,a)};_.Y=function es(){return new is(this.a)};_.ob=function fs(){return Wr(this.a)};var Lg=lq(Vx,'AbstractHashMap/EntrySet',46);bi(47,1,{},is);_._=function ks(){return hs(this)};_.$=function js(){return this.b};_.b=false;var Kg=lq(Vx,'AbstractHashMap/EntrySetIterator',47);var ph=nq(Vx,'List');bi(202,200,{76:1});_.t=function ns(a){var b,c,d,e,f;if(a===this){return true}if(!Od(a,76)){return false}f=Kd(a,76);if(this.ob()!=f.ob()){return false}e=f.Y();for(c=this.Y();c.$();){b=c._();d=e._();if(!(Ud(b)===Ud(d)||b!=null&&J(b,d))){return false}}return true};_.v=function os(){return ot(this)};_.Y=function ps(){return new rs(this)};_.tb=function qs(a){throw Lh(new ur)};var Qg=lq(Vx,'AbstractList',202);bi(85,1,{},rs);_.$=function ss(){return this.a<this.c.ob()};_._=function ts(){return jv(this.a<this.c.ob()),this.c.sb(this.b=this.a++)};_.a=0;_.b=-1;var Ng=lq(Vx,'AbstractList/IteratorImpl',85);bi(117,85,{},us);var Og=lq(Vx,'AbstractList/ListIteratorImpl',117);bi(118,202,{76:1},vs);_.sb=function ws(a){kv(a,this.b);return Ss(this.c,this.a+a)};_.tb=function xs(a){var b;kv(a,this.b);b=Us(this.c,this.a+a);--this.b;return b};_.ob=function ys(){return this.b};_.a=0;_.b=0;var Pg=lq(Vx,'AbstractList/SubList',118);bi(56,201,Wx,zs);_.nb=function As(a){return Rr(this.a,a)};_.Y=function Bs(){var a;return a=new is((new cs(this.a)).a),new Ds(a)};_.ob=function Cs(){return Wr(this.a)};var Sg=lq(Vx,'AbstractMap/1',56);bi(52,1,{},Ds);_.$=function Es(){return this.a.b};_._=function Fs(){var a;return a=hs(this.a),a.ub()};var Rg=lq(Vx,'AbstractMap/1/1',52);bi(115,1,Yx);_.t=function Gs(a){var b;if(!Od(a,19)){return false}b=Kd(a,19);return Nu(this.a,b.ub())&&Nu(this.b,b.vb())};_.ub=function Hs(){return this.a};_.vb=function Is(){return this.b};_.v=function Js(){return Ou(this.a)^Ou(this.b)};_.wb=function Ks(a){var b;b=this.b;this.b=a;return b};_.w=function Ls(){return this.a+'='+this.b};var Tg=lq(Vx,'AbstractMap/AbstractEntry',115);bi(116,115,Yx,Ms);var Ug=lq(Vx,'AbstractMap/SimpleEntry',116);bi(203,1,Yx);_.t=function Ns(a){var b;if(!Od(a,19)){return false}b=Kd(a,19);return Nu(this.ub(),b.ub())&&Nu(this.vb(),b.vb())};_.v=function Os(){return Ou(this.ub())^Ou(this.vb())};_.w=function Ps(){return this.ub()+'='+this.vb()};var Vg=lq(Vx,'AbstractMapEntry',203);bi(59,202,{3:1,76:1},Xs,Ys);_.nb=function Zs(a){return Ts(this,a,0)!=-1};_.sb=function $s(a){return Ss(this,a)};_.Y=function _s(){return new dt(this)};_.tb=function at(a){return Us(this,a)};_.ob=function bt(){return this.a.length};var Zg=lq(Vx,'ArrayList',59);bi(33,1,{},dt);_.$=function et(){return this.a<this.c.a.length};_._=function ft(){return ct(this)};_.a=0;_.b=-1;var Yg=lq(Vx,'ArrayList/1',33);var pt;bi(184,1,zw,st);_.eb=function tt(a,b){return rt(Kd(a,14),Kd(b,14))};_.t=function ut(a){return this===a};var $g=lq(Vx,'Comparators/NaturalOrderComparator',184);bi(133,17,Dw,xt);var _g=lq(Vx,'ConcurrentModificationException',133);bi(169,199,{65:1},At);_.pb=function Bt(a){return St(this.a,a)};_.qb=function Ct(){return new Gt(this)};_.rb=function Dt(a){return St(this.a,a)?this.b[Kd(a,13).d]:null};_.ob=function Et(){return this.a.c};var eh=lq(Vx,'EnumMap',169);bi(170,201,Wx,Gt);_.nb=function Ht(a){return Ft(this,a)};_.Y=function It(){return new Kt(this.a)};_.ob=function Jt(){return this.a.a.c};var bh=lq(Vx,'EnumMap/EntrySet',170);bi(171,1,{},Kt);_._=function Mt(){return this.b=$t(this.a),new Nt(this.c,this.b)};_.$=function Lt(){return Zt(this.a)};var ah=lq(Vx,'EnumMap/EntrySetIterator',171);bi(172,203,Yx,Nt);_.ub=function Ot(){return this.a};_.vb=function Pt(){return this.b.b[this.a.d]};_.wb=function Qt(a){return zt(this.b,this.a.d,a)};var dh=lq(Vx,'EnumMap/MapEntry',172);bi(212,201,Wx);var hh=lq(Vx,'EnumSet',212);bi(183,212,Wx,Ut);_.nb=function Vt(a){return St(this,a)};_.Y=function Wt(){return new _t(this)};_.ob=function Xt(){return this.c};_.c=0;var gh=lq(Vx,'EnumSet/EnumSetImpl',183);bi(92,1,{},_t);_._=function bu(){return $t(this)};_.$=function au(){return Zt(this)};_.a=-1;_.b=-1;var fh=lq(Vx,'EnumSet/EnumSetImpl/IteratorImpl',92);bi(40,114,{3:1,65:1},du);var ih=lq(Vx,'HashMap',40);bi(90,201,{3:1,43:1},gu);_.nb=function hu(a){return eu(this,a)};_.Y=function iu(){var a;return a=new is((new cs((new zs(this.a)).a)).a),new Ds(a)};_.ob=function ju(){return Wr(this.a)};var jh=lq(Vx,'HashSet',90);bi(119,1,{},pu);_.Y=function qu(){return new ru(this)};_.c=0;var lh=lq(Vx,'InternalHashCodeMap',119);bi(86,1,{},ru);_._=function tu(){return this.d=this.a[this.c++],this.d};_.$=function su(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.c=0;_.d=null;var kh=lq(Vx,'InternalHashCodeMap/1',86);var uu;bi(120,1,{},Du);_.Y=function Eu(){return new Fu(this)};_.c=0;_.d=0;var oh=lq(Vx,'InternalStringMap',120);bi(87,1,{},Fu);_._=function Hu(){return this.c=this.a,this.a=this.b.next(),new Iu(this.d,this.c,this.d.d)};_.$=function Gu(){return !this.a.done};var mh=lq(Vx,'InternalStringMap/1',87);bi(121,203,Yx,Iu);_.ub=function Ju(){return this.b.value[0]};_.vb=function Ku(){if(this.a.d!=this.c){return Bu(this.a,this.b.value[0])}return this.b.value[1]};_.wb=function Lu(a){return Cu(this.a,this.b.value[0],a)};_.c=0;var nh=lq(Vx,'InternalStringMap/2',121);bi(71,17,Dw,Mu);var qh=lq(Vx,'NoSuchElementException',71);bi(79,1,{},Qu);_.w=function Ru(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var rh=lq(Vx,'StringJoiner',79);bi(80,32,Tx);var Xu,Yu,Zu;var uh=lq($x,'EmulatedCharset',80);bi(81,80,Tx,av);_.xb=function bv(a,b,c){var d,e;d=md(Xd,zw,6,c,15,1);for(e=0;e<c;++e){d[e]=a[b+e]&255&Nw}return d};var sh=lq($x,'EmulatedCharset/LatinCharset',81);bi(103,80,Tx,cv);_.xb=function dv(a,b,c){var d,e,f,g,h,i,j,k;f=0;for(j=0;j<c;){++f;e=a[b+j];if((e&192)==128){throw Lh(new Jq(_x))}else if((e&128)==0){++j}else if((e&224)==192){j+=2}else if((e&240)==224){j+=3}else if((e&248)==240){j+=4}else{throw Lh(new Jq(_x))}if(j>c){throw Lh(new Yp(_x))}}g=md(Xd,zw,6,f,15,1);k=0;h=0;for(i=0;i<c;){e=a[b+i++];if((e&128)==0){h=1;e&=127}else if((e&224)==192){h=2;e&=31}else if((e&240)==224){h=3;e&=15}else if((e&248)==240){h=4;e&=7}else if((e&252)==248){h=5;e&=3}while(--h>0){d=a[b+i++];if((d&192)!=128){throw Lh(new Jq('Invalid UTF8 sequence at '+(b+i-1)+', byte='+(d>>>0).toString(16)))}e=e<<6|d&63}k+=eq(e,g,k)}return g};var th=lq($x,'EmulatedCharset/UtfCharset',103);var uv=0;var wv,xv=0,yv;var wh=nq(cy,dy);bi(44,1,{44:1},Iv,Jv);_.t=function Kv(a){return a!=null&&Od(a,44)&&rb(this.a,Kd(a,44).a)};_.yb=function Lv(a){Ev(this,a)};_.zb=function Mv(a){return a!=null&&Od(a,44)};var Dv=false;var vh=lq(cy,'AsyncQRCallback_ExporterImpl',44);bi(124,123,ww,Pv);var xh=lq(cy,'JSScannerWidget',124);bi(70,1,{70:1},Sv);_.Ab=function Tv(a){Nv(this.a,a)};_.Bb=function Uv(){return this.a.f};_.Cb=function Vv(){return this.a.j};_.Db=function Wv(){return this.a.a};_.Eb=function Xv(){return Dp(this.a)};_.Fb=function Yv(a){Ov(this.a,a)};_.Gb=function Zv(){Gp(this.a)};_.Hb=function $v(a){Ip(this.a,a)};_.Ib=function _v(a){Jp(this.a,a)};_.Jb=function aw(){this.a.a=false};var zh=lq(cy,ey,70);bi(95,1,{},ew);_.zb=function gw(a){return a!=null&&Od(a,70)};var bw=false;var yh=lq(cy,'JsQRScanner_ExporterImpl',95);bi(125,1,{},iw);var Ah=lq(cy,'ScannerCallback',125);bi(198,1,{});var Ch=lq(fy,'ExporterBaseImpl',198);bi(107,198,{},lw);var Bh=lq(fy,'ExporterBaseActual',107);var nw;var Ag=lq(uw,'StackTraceElement',null);var Xd=oq('char','C');var $d=oq('int','I');var Wd=oq('byte','B');var Yd=oq('double','D');var Zd=oq('float','F');var qw=(Yb(),_b);var gwtOnLoad=gwtOnLoad=Zh;Xh(gi);$h('permProps',[[[gy,hy],[iy,ux]],[[gy,hy],[iy,yx]],[[gy,hy],[iy,Ax]],[[gy,hy],[iy,zx]],[[gy,hy],[iy,wx]]]);if (jsqrscanner) jsqrscanner.onScriptLoad(gwtOnLoad);})();