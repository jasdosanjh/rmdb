(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),m=a(5),l=a(7),i=(a(30),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb-logo"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),s=a(15),u=a(17),d=a(8),h=a(9),g=a(11),v=a(10),p=a(12),b="https://api.themoviedb.org/3/",f="019e8f375549e0bbd4a4191862ebc88f",E="http://image.tmdb.org/t/p/",N=(a(39),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0)\n                39%, rgba(0, 0, 0, 0)\n                41%, rgba(0, 0, 0, 0.65)\n                100%),\n                url('".concat(e.image,"'), #1C1C1C")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),S=a(6),y=a.n(S),I=(a(41),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.callback(a.state.value)},500)},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(y.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:this.doSearch,value:this.state.value})))}}]),t}(n.Component)),k=(a(42),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading?c.a.createElement("h1",null,e.header):null,c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map(function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))}),j=(a(43),function(e){return c.a.createElement("div",{className:"rmdb-moviethumb"},e.clickable?c.a.createElement(m.b,{to:{pathname:"/".concat(e.movieId),movieName:"".concat(e.movieName)}},c.a.createElement("img",{src:e.image,alt:"moviethumb"})):c.a.createElement("img",{src:e.image,alt:"moviethumb"}))}),_=(a(44),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),O=(a(45),function(){return c.a.createElement("div",{className:"loader"})}),w=(a(46),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(b,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"):"".concat(b,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(e),a.fetchItems(t)},a.loadMoreItems=function(){var e="";a.setState({loading:!0}),e=""===a.state.searchTerm?"".concat(b,"movie/popular?api_key=").concat(f,"&language=en-US&page=").concat(a.state.currentPage+1):"".concat(b,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(a.state.searchTerm,"&page=").concat(a.state.currentPage+1),a.fetchItems(e)},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(u.a)(a.state.movies),Object(u.a)(e.results)),heroImage:a.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.totalPages},function(){""===a.state.searchTerm&&localStorage.setItem("HomeState",JSON.stringify(a.state))})}).catch(function(e){return console.error("Error:",e)})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("HomeState")){var e=JSON.parse(localStorage.getItem("HomeState"));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(b,"movie/popular?api_key=").concat(f,"&language=en-US&page=1");this.fetchItems(t)}}},{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-home"},this.state.heroImage?c.a.createElement("div",null,c.a.createElement(N,{image:"".concat(E).concat("w1280").concat(this.state.heroImage.backdrop_path),title:this.state.heroImage.original_title,text:this.state.heroImage.overview}),c.a.createElement(I,{callback:this.searchItems})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(k,{header:this.state.searchTerm?"Search Result":"Popular Movies",loading:this.state.loading},this.state.movies.map(function(e,t){return c.a.createElement(j,{key:t,clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),this.state.loading?c.a.createElement(O,null):null,this.state.currentPage<=this.state.totalPages&&!this.state.loading,c.a.createElement(_,{text:"Load More",onClick:this.loadMoreItems})))}}]),t}(n.Component)),x=(a(47),function(e){var t=e.movie;return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,t)))}),P=(a(48),function(e){var t=e.movie,a=e.directors;return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:t.backdrop_path?"url('".concat(E).concat("w1280").concat(t.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(j,{image:t.poster_path?"".concat(E).concat("w500").concat(t.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,t.title),c.a.createElement("h3",null,"Plot:"),c.a.createElement("p",null,t.overview),c.a.createElement("h3",null,"IMDB Rating:"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*t.vote_average}),c.a.createElement("p",{className:"rmdb-score"},t.vote_average)),a.length>1?c.a.createElement("h3",null,"Directors:"):c.a.createElement("h3",null,"Director:"),a.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)})),c.a.createElement(y.a,{className:"fa-film",name:"film",size:"5x"})))}),C=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},M=(a(49),function(e){var t=e.time,a=e.budget,n=e.revenue;return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",C(a))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(y.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",C(n)))))}),T=(a(50),function(e){return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:e.actor.profile_path?"".concat(E).concat("w154").concat(e.actor.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},e.actor.name),c.a.createElement("span",{className:"rmdb-actor-character"},e.actor.character))}),D=(a(51),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(b,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(f);fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:t,loading:!1},function(){localStorage.setItem("".concat(a.props.match.params.movieId),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("".concat(this.props.match.params.movieId))){var e=JSON.parse(localStorage.getItem("".concat(this.props.match.params.movieId)));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(b,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(f,"&language=en-US");this.fetchItems(t)}}},{key:"render",value:function(){var e=this.props.location.movieName,t=this.state,a=t.movie,n=t.directors,r=t.actors,o=t.loading;return c.a.createElement("div",{className:"rmdb-movie"},a?c.a.createElement("div",null,c.a.createElement(x,{movie:e}),c.a.createElement(P,{movie:a,directors:n}),c.a.createElement(M,{time:a.runtime,budget:a.budget,revenue:a.revenue})):null,r?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(k,{header:"Actors"},r.map(function(e,t){return c.a.createElement(T,{key:t,actor:e})}))):null,r||o?null:c.a.createElement("h1",null,"No movie found"),o?c.a.createElement(O,null):null)}}]),t}(n.Component)),U=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whooops. This page doesn't exist."))},J=function(){return c.a.createElement(m.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:w,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:D,exact:!0}),c.a.createElement(l.a,{component:U}))))};a(52);o.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2c8d8efc.chunk.js.map