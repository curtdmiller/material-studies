(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"9eSz":function(a,e,t){"use strict";var c=t("5NKs");e.__esModule=!0,e.default=void 0;var l,s=c(t("XEEL")),i=c(t("v06X")),d=c(t("uDP2")),o=c(t("j8BX")),r=c(t("q1tI")),b=c(t("17x9")),u=function(a){var e=(0,o.default)({},a),t=e.resolutions,c=e.sizes,l=e.critical;return t&&(e.fixed=t,delete e.resolutions),c&&(e.fluid=c,delete e.sizes),l&&(e.loading="eager"),e.fluid&&(e.fluid=N([].concat(e.fluid))),e.fixed&&(e.fixed=N([].concat(e.fixed))),e},n=function(a){var e=a.fluid,t=a.fixed;return(e&&e[0]||t&&t[0]).src},m=Object.create({}),p=function(a){var e=u(a),t=n(e);return m[t]||!1},O="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,j="undefined"!=typeof window,h=j&&window.IntersectionObserver,f=new WeakMap;function v(a){return a.map((function(a){var e=a.src,t=a.srcSet,c=a.srcSetWebp,l=a.media,s=a.sizes;return r.default.createElement(r.default.Fragment,{key:e},c&&r.default.createElement("source",{type:"image/webp",media:l,srcSet:c,sizes:s}),r.default.createElement("source",{media:l,srcSet:t,sizes:s}))}))}function N(a){var e=[],t=[];return a.forEach((function(a){return(a.media?e:t).push(a)})),e.concat(t)}function g(a){return a.map((function(a){var e=a.src,t=a.media,c=a.tracedSVG;return r.default.createElement("source",{key:e,media:t,srcSet:c})}))}function w(a){return a.map((function(a){var e=a.src,t=a.media,c=a.base64;return r.default.createElement("source",{key:e,media:t,srcSet:c})}))}function k(a,e){var t=a.srcSet,c=a.srcSetWebp,l=a.media,s=a.sizes;return"<source "+(e?"type='image/webp' ":"")+(l?'media="'+l+'" ':"")+'srcset="'+(e?c:t)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var y=function(a,e){var t=(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver((function(a){a.forEach((function(a){if(f.has(a.target)){var e=f.get(a.target);(a.isIntersecting||a.intersectionRatio>0)&&(l.unobserve(a.target),f.delete(a.target),e())}}))}),{rootMargin:"200px"})),l);return t&&(t.observe(a),f.set(a,e)),function(){t.unobserve(a),f.delete(a)}},S=function(a){var e=a.src?'src="'+a.src+'" ':'src="" ',t=a.sizes?'sizes="'+a.sizes+'" ':"",c=a.srcSet?'srcset="'+a.srcSet+'" ':"",l=a.title?'title="'+a.title+'" ':"",s=a.alt?'alt="'+a.alt+'" ':'alt="" ',i=a.width?'width="'+a.width+'" ':"",d=a.height?'height="'+a.height+'" ':"",o=a.crossOrigin?'crossorigin="'+a.crossOrigin+'" ':"",r=a.loading?'loading="'+a.loading+'" ':"";return"<picture>"+a.imageVariants.map((function(a){return(a.srcSetWebp?k(a,!0):"")+k(a)})).join("")+"<img "+r+i+d+t+c+e+s+l+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=function(a){var e=a.src,t=a.imageVariants,c=a.generateSources,l=a.spreadProps,s=r.default.createElement(L,(0,o.default)({src:e},l));return t.length>1?r.default.createElement("picture",null,c(t),s):s},L=r.default.forwardRef((function(a,e){var t=a.sizes,c=a.srcSet,l=a.src,s=a.style,i=a.onLoad,b=a.onError,u=a.loading,n=(0,d.default)(a,["sizes","srcSet","src","style","onLoad","onError","loading"]);return r.default.createElement("img",(0,o.default)({sizes:t,srcSet:c,src:l},n,{onLoad:i,onError:b,ref:e,loading:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));L.propTypes={style:b.default.object,onError:b.default.func,onLoad:b.default.func};var I=function(a){function e(e){var t;(t=a.call(this,e)||this).seenBefore=j&&p(e),t.addNoScript=!(e.critical&&!e.fadeIn),t.useIOSupport=!O&&h&&!e.critical&&!t.seenBefore;var c=e.critical||j&&(O||!t.useIOSupport);return t.state={isVisible:c,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&e.fadeIn},t.imageRef=r.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,i.default)((0,i.default)(t))),t.handleRef=t.handleRef.bind((0,i.default)((0,i.default)(t))),t}(0,s.default)(e,a);var t=e.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var a=this.imageRef.current;a&&a.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(a){var e=this;this.useIOSupport&&a&&(this.cleanUpListeners=y(a,(function(){var a=p(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:a}),e.setState({isVisible:!0},(function(){return e.setState({imgLoaded:a,imgCached:!!e.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var a,e,t;a=this.props,e=u(a),t=n(e),m[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var a=u(this.props),e=a.title,t=a.alt,c=a.className,l=a.style,s=void 0===l?{}:l,i=a.imgStyle,d=void 0===i?{}:i,b=a.placeholderStyle,n=void 0===b?{}:b,m=a.placeholderClassName,p=a.fluid,O=a.fixed,j=a.backgroundColor,h=a.durationFadeIn,f=a.Tag,N=a.itemProp,k=a.loading,y=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:y?1:0,transition:I?"opacity "+h+"ms":"none"},d),R="boolean"==typeof j?"lightgray":j,T={transitionDelay:h+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&T,d,n),P={title:e,alt:this.state.isVisible?"":t,style:V,className:m};if(p){var W=p,q=W[0];return r.default.createElement(f,{className:(c||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},r.default.createElement(f,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),R&&r.default.createElement(f,{title:e,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&T)}),q.base64&&r.default.createElement(E,{src:q.base64,spreadProps:P,imageVariants:W,generateSources:w}),q.tracedSVG&&r.default.createElement(E,{src:q.tracedSVG,spreadProps:P,imageVariants:W,generateSources:g}),this.state.isVisible&&r.default.createElement("picture",null,v(W),r.default.createElement(L,{alt:t,title:e,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:k})),this.addNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,o.default)({alt:t,title:e,loading:k},q,{imageVariants:W}))}}))}if(O){var x=O,B=x[0],C=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},s);return"inherit"===s.display&&delete C.display,r.default.createElement(f,{className:(c||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},R&&r.default.createElement(f,{title:e,style:(0,o.default)({backgroundColor:R,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},I&&T)}),B.base64&&r.default.createElement(E,{src:B.base64,spreadProps:P,imageVariants:x,generateSources:w}),B.tracedSVG&&r.default.createElement(E,{src:B.tracedSVG,spreadProps:P,imageVariants:x,generateSources:g}),this.state.isVisible&&r.default.createElement("picture",null,v(x),r.default.createElement(L,{alt:t,title:e,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:N,loading:k})),this.addNoScript&&r.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,o.default)({alt:t,title:e,loading:k},B,{imageVariants:x}))}}))}return null},e}(r.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=b.default.shape({width:b.default.number.isRequired,height:b.default.number.isRequired,src:b.default.string.isRequired,srcSet:b.default.string.isRequired,base64:b.default.string,tracedSVG:b.default.string,srcWebp:b.default.string,srcSetWebp:b.default.string,media:b.default.string}),R=b.default.shape({aspectRatio:b.default.number.isRequired,src:b.default.string.isRequired,srcSet:b.default.string.isRequired,sizes:b.default.string.isRequired,base64:b.default.string,tracedSVG:b.default.string,srcWebp:b.default.string,srcSetWebp:b.default.string,media:b.default.string});I.propTypes={resolutions:z,sizes:R,fixed:b.default.oneOfType([z,b.default.arrayOf(z)]),fluid:b.default.oneOfType([R,b.default.arrayOf(R)]),fadeIn:b.default.bool,durationFadeIn:b.default.number,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),critical:b.default.bool,crossOrigin:b.default.oneOfType([b.default.string,b.default.bool]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,placeholderClassName:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,onError:b.default.func,onStartLoad:b.default.func,Tag:b.default.string,itemProp:b.default.string,loading:b.default.oneOf(["auto","lazy","eager"])};var T=I;e.default=T},HyJh:function(a,e,t){a.exports={albersPillars:"pillars-module--albersPillars--QnnNg",inner:"pillars-module--inner--6r1Xg",imageBlock:"pillars-module--imageBlock--1aXs8",black:"pillars-module--black--3uwMD",white:"pillars-module--white--39-eM",red:"pillars-module--red--3q60Z",row:"pillars-module--row--3fnlD",col1:"pillars-module--col-1--23oVm",col2:"pillars-module--col-2--1q7ca",col3:"pillars-module--col-3--1eslz",col4:"pillars-module--col-4--2F_kZ",col5:"pillars-module--col-5--2S2Ln",col6:"pillars-module--col-6--XvGEg",col7:"pillars-module--col-7--WlFHw",col8:"pillars-module--col-8--OcxPj",col9:"pillars-module--col-9--38tMc",col10:"pillars-module--col-10--1yQ-9",col11:"pillars-module--col-11--tR32g",col12:"pillars-module--col-12--1ai7Z",col13:"pillars-module--col-13--1ys3G",col14:"pillars-module--col-14--LQSym",col15:"pillars-module--col-15--amSQ6",col16:"pillars-module--col-16--2p1aT",col17:"pillars-module--col-17--3WXDb",col18:"pillars-module--col-18--3Eq8D",col19:"pillars-module--col-19--2VTYA",col20:"pillars-module--col-20--2Qpyn",col21:"pillars-module--col-21--2eYRg",col22:"pillars-module--col-22--1Lpll",col23:"pillars-module--col-23--19HcB",col24:"pillars-module--col-24--Q5ZQS",col25:"pillars-module--col-25--2eW15",push1:"pillars-module--push-1--2YsYC",push2:"pillars-module--push-2--1b9IO",push3:"pillars-module--push-3--3dJ2F",push4:"pillars-module--push-4--2g1J6",push5:"pillars-module--push-5--3euJy",push6:"pillars-module--push-6--1t1W-",push7:"pillars-module--push-7--1lDTU",push8:"pillars-module--push-8--ajrKU",push9:"pillars-module--push-9--DIq4j",push10:"pillars-module--push-10--3aIp2",push11:"pillars-module--push-11--2slg6",push12:"pillars-module--push-12--2Bacl",push13:"pillars-module--push-13--3T9zT",push14:"pillars-module--push-14--N1v-Q",push15:"pillars-module--push-15--1Bgt0",push16:"pillars-module--push-16--2TjzB",push17:"pillars-module--push-17--2W47b",push18:"pillars-module--push-18--3SYTc",push19:"pillars-module--push-19--3BPpS",push20:"pillars-module--push-20--2TsWg",push21:"pillars-module--push-21--3Pb3o",push22:"pillars-module--push-22--qjob1",push23:"pillars-module--push-23--6Q7l_",push24:"pillars-module--push-24--33SJa",footer:"pillars-module--footer--Dpua5",aot:"pillars-module--aot--3ojcT",touched:"pillars-module--touched--3_Z_5",pillarSkew:"pillars-module--pillarSkew--3EBQk"}},RDw9:function(a,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return p}));var c=t("wTIg"),l=t("qKvR"),s=(t("q1tI"),t("HyJh")),i=t.n(s),d=t("d1Yz"),o=t.n(d),r=t("+ego"),b=t("Wbzz"),u=t("9eSz"),n=t.n(u),m=t("iuhU"),p="1995055023",O=Object(c.a)("div",{target:"ekcygd30"})({name:"1r12575",styles:"padding:1.5em;"}),j=Object(c.a)("div",{target:"ekcygd31"})({name:"1p8xarb",styles:"margin:0 auto;width:auto;max-width:60em;p{margin:0;a{font-style:italic;}}"});e.default=function(){var a=Object(b.d)(p);return Object(l.d)(r.a,null,Object(l.d)(O,null,Object(l.d)(j,null,Object(l.d)("h1",null,"Pillars"),Object(l.d)("p",null,"Josef Albers, Screenprint, 1970"),Object(l.d)("p",null,Object(l.d)("a",{href:"https://www.artic.edu/artworks/37068/mma-pillars-1928",target:"_blank",rel:"noopener noreferrer"},"Source")))),Object(l.d)("div",{className:o.a.wrapper},Object(l.d)("div",{className:i.a.albersPillars},Object(l.d)("div",{className:i.a.inner},Object(l.d)("div",{className:i.a.imageBlock},Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col15,i.a.push3,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col15,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col15,i.a.push3,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col15,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col9,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col3,i.a.white,i.a.push1)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push8)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push2)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push8)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push4)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.white)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.white)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.red)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push7)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.red,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.white)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.red)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push12)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push9)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.white)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.red)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push7)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.red,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.white)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.red)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push12)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push9)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.white)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.red)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.black,i.a.push7)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.red,i.a.push5)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.white)},Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.red)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push12)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black,i.a.push9)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col13,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col2,i.a.white,i.a.push10)})),Object(l.d)("div",{className:Object(m.a)(i.a.row,i.a.red)},Object(l.d)("div",{className:Object(m.a)(i.a.col13,i.a.black)}),Object(l.d)("div",{className:Object(m.a)(i.a.col5,i.a.white,i.a.push5)}),Object(l.d)("div",{className:Object(m.a)(i.a.col1,i.a.black)})))),Object(l.d)("div",{className:i.a.footer},Object(l.d)("p",null,"The aim of life is living creatures"),Object(l.d)("p",null,"The aim of art is living creations   J.A."),Object(l.d)("p",null,"JOSEF ALBERS, PILLARS, 1928"),Object(l.d)("p",null,"In Commemoration of the One Hundredth Anniversary of The Metropolitan Museum of Art"))),Object(l.d)("div",{className:o.a.caption},Object(l.d)("div",{className:o.a.captionImageWrap},Object(l.d)(n.a,{fluid:a.fileName.childImageSharp.fluid})))))}},d1Yz:function(a,e,t){a.exports={wrapper:"common-styles-module--wrapper--N_vbb",caption:"common-styles-module--caption--1AdpO",captionImageWrap:"common-styles-module--captionImageWrap--2Gxsn",italic:"common-styles-module--italic--2MEe7"}},iuhU:function(a,e,t){"use strict";function c(a){var e,t,l="";if("string"==typeof a||"number"==typeof a)l+=a;else if("object"==typeof a)if(Array.isArray(a))for(e=0;e<a.length;e++)a[e]&&(t=c(a[e]))&&(l&&(l+=" "),l+=t);else for(e in a)a[e]&&(l&&(l+=" "),l+=e);return l}e.a=function(){for(var a,e,t=0,l="";t<arguments.length;)(a=arguments[t++])&&(e=c(a))&&(l&&(l+=" "),l+=e);return l}}}]);
//# sourceMappingURL=component---src-pages-modernist-studies-albers-pillars-tsx-ec76365afef559c0ca4a.js.map