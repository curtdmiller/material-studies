(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"9eSz":function(e,t,a){"use strict";var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r,s=i(a("XEEL")),n=i(a("v06X")),l=i(a("uDP2")),o=i(a("j8BX")),d=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:s}),d.default.createElement("source",{media:r,srcSet:a,sizes:s}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),t.concat(a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function j(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+d+n+l+a+i+t+s+r+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,s=d.default.createElement(R,(0,o.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,i(a),s):s},R=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:i,src:r},f,{onLoad:n,onError:c,ref:t,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var i=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,j=e.loading,E=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:E?1:0,transition:N?"opacity "+b+"ms":"none"},l),T="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&V,l,f),k={title:t,alt:this.state.isVisible?"":a,style:C,className:p};if(m){var q=m,x=q[0];return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),T&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&V)}),x.base64&&d.default.createElement(I,{src:x.base64,spreadProps:k,imageVariants:q,generateSources:w}),x.tracedSVG&&d.default.createElement(I,{src:x.tracedSVG,spreadProps:k,imageVariants:q,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(R,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:j},x,{imageVariants:q}))}}))}if(g){var W=g,P=W[0],B=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},s);return"inherit"===s.display&&delete B.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},T&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:T,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},N&&V)}),P.base64&&d.default.createElement(I,{src:P.base64,spreadProps:k,imageVariants:W,generateSources:w}),P.tracedSVG&&d.default.createElement(I,{src:P.tracedSVG,spreadProps:k,imageVariants:W,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(R,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:j})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:j},P,{imageVariants:W}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:z,sizes:T,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var V=N;t.default=V},a0sm:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var i=a("wTIg"),r=a("qKvR"),s=(a("q1tI"),a("yQrq")),n=a.n(s),l=a("d1Yz"),o=a.n(l),d=a("+ego"),c=a("Wbzz"),u=a("9eSz"),f=a.n(u),p=a("TJpk"),m="4060660211",g=Object(i.a)("div",{target:"e1mczqjt0"})({name:"1r12575",styles:"padding:1.5em;"}),h=Object(i.a)("div",{target:"e1mczqjt1"})({name:"1p8xarb",styles:"margin:0 auto;width:auto;max-width:60em;p{margin:0;a{font-style:italic;}}"});t.default=function(){var e=Object(c.d)(m);return Object(r.d)(d.a,null,Object(r.d)(p.Helmet,null,Object(r.d)("link",{rel:"stylesheet",href:"https://use.typekit.net/moe5wud.css"})),Object(r.d)(g,null,Object(r.d)(h,null,Object(r.d)("h1",null,"The Suites for Orchestra by J.S. Bach"),Object(r.d)("p",null,"Cover design: Alvin Lustig, 1952"),Object(r.d)("p",null,Object(r.d)("a",{href:"https://collection.cooperhewitt.org/objects/18694907/",target:"_blank",rel:"noopener noreferrer"},"Source")))),Object(r.d)("div",{className:o.a.wrapper},Object(r.d)("div",{className:n.a.lustigBach},Object(r.d)("div",{className:n.a.inner},Object(r.d)("div",{className:n.a.header},Object(r.d)("p",null,"J.S.BACH")),Object(r.d)("div",{className:n.a.title},Object(r.d)("p",null,"THE SUITES FOR ORCHESTRA")),Object(r.d)("div",{className:n.a.toc},Object(r.d)("ul",null,Object(r.d)("li",null,Object(r.d)("span",{className:o.a.italic},"Number One in C major")),Object(r.d)("li",null,Object(r.d)("span",{className:o.a.italic},"Number Two in B minor")," ","Jean-Pierre Rampal,"," ",Object(r.d)("span",{className:o.a.italic},"Flute"))),Object(r.d)("p",null,"THE HEWITT ORCHESTRA"),Object(r.d)("div",{className:n.a.footer},Object(r.d)("p",null,"©HAYDN SOCIETY"," ",Object(r.d)("span",{className:o.a.italic},"/ Collection Discophiles Français")," "," HSL-90"," ",Object(r.d)("span",{className:o.a.italic},"Record 1 of Two Records")))))),Object(r.d)("div",{className:o.a.caption},Object(r.d)("div",{className:o.a.captionImageWrap},Object(r.d)(f.a,{fluid:e.fileName.childImageSharp.fluid})))))}},d1Yz:function(e,t,a){e.exports={wrapper:"common-styles-module--wrapper--N_vbb",caption:"common-styles-module--caption--1AdpO",captionImageWrap:"common-styles-module--captionImageWrap--2Gxsn",italic:"common-styles-module--italic--2MEe7"}},yQrq:function(e,t,a){e.exports={lustigBach:"lustig-hewitt-module--lustigBach--ZaGLk",inner:"lustig-hewitt-module--inner--1ffB-",header:"lustig-hewitt-module--header--3RgoX",title:"lustig-hewitt-module--title--bBWpg",toc:"lustig-hewitt-module--toc--2iQmP",footer:"lustig-hewitt-module--footer--1_0Jr",touched:"lustig-hewitt-module--touched--3X14C"}}}]);
//# sourceMappingURL=component---src-pages-modernist-studies-lustig-hewitt-tsx-2f657b2f556cb1815e0b.js.map