(this.webpackJsonpweb_tnk=this.webpackJsonpweb_tnk||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"a":[{"id":"1","comarca":"Barcelona","nombre":"Hospital Vall d\'Hebr\xf3n","habitaciones":"213","imagen":"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617890084/imgVHB_ldt8dy.png"},{"id":"2","comarca":"Madrid","nombre":"Clinico San Carlos","habitaciones":"543","imagen":"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617890319/imgCSC_gbuwkq.png"},{"id":"3","comarca":"Le\xf3n","nombre":"Hospital de Le\xf3n","habitaciones":"325","imagen":"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617890319/imgHL_z9mqy8.png"}]}')},27:function(e,a,n){},28:function(e,a,n){},29:function(e,a,n){},30:function(e,a,n){},32:function(e,a,n){},35:function(e,a,n){},44:function(e,a,n){"use strict";n.r(a);var t=n(1),s=n.n(t),i=n(18),c=n.n(i),o=(n(27),n(4)),r=n(5),l=n(7),d=n(6),m=(n(28),n(21)),j=n(2),u=(n(29),n(19)),p=(n(30),n(0)),b=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsx)(t.Fragment,{children:Object(p.jsxs)("header",{id:"main-header",children:[Object(p.jsx)("a",{id:"logo-header",href:"/",children:Object(p.jsx)("img",{className:"imgLogo",src:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617948985/logo_fondo_bosenc.png",alt:""})}),Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/",children:"Inicio"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/gestion",children:"Tecnolog\xeda e innovaci\xf3n"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/hospitales",children:"Hospitales"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"/contacto",children:"Contacto"})})]})})]})})}}]),n}(t.Component),h=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=a.call(this)).state={hospitales:u.a},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.hospitales.map((function(e,a){return Object(p.jsx)(t.Fragment,{children:Object(p.jsx)("div",{className:"card mt-3 alignDivCard",children:Object(p.jsxs)("div",{className:"mt-3",children:[Object(p.jsx)("h3",{children:e.nombre}),Object(p.jsx)("span",{className:"badge bg-secondary",children:e.comarca}),Object(p.jsx)("p",{className:"margenP",children:e.habitaciones}),Object(p.jsx)("img",{className:"imgCard",src:e.imagen,width:"30%"})]})},a)})}));return Object(p.jsxs)(t.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row divCard",children:[Object(p.jsx)("div",{className:"lista_hospitales ",children:e}),Object(p.jsx)("div",{})]})})})]})}}]),n}(t.Component),x=(n(32),n(20)),O=n.n(x);function g(){return Object(p.jsx)(t.Fragment,{children:Object(p.jsx)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var a=e.target.user_name.value,n=e.target.user_email.value,t=e.target.message.value;""===a||""===n||""===t?alert("Para poder enviar un mensaje, debe rellenar todos los campos."):O.a.sendForm("service_u5dqbty","template_0uw7uhm",e.target,"user_VHRwVv2wo1dOZEHUpaIKA").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-1"}),Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre...",name:"user_name"})}),Object(p.jsx)("div",{className:"col-1"}),Object(p.jsx)("div",{className:"col-5",children:Object(p.jsx)("input",{type:"email",className:"form-control ",name:"user_email",placeholder:"Email..."})}),Object(p.jsxs)("div",{className:"row marginText",children:[Object(p.jsx)("div",{className:"col-1"}),Object(p.jsx)("div",{className:"col-8",children:Object(p.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"message",placeholder:"Mensaje..."})}),Object(p.jsx)("div",{className:"col-2",children:Object(p.jsx)("input",{type:"submit",value:"Enviar mensaje",className:"btnMsn btn btn-secondary"})})]})]})})})}var v=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(t.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)("section",{id:"main-content",children:Object(p.jsxs)("article",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{className:"marginTop",children:"Contacta con nosotros"})}),Object(p.jsx)("img",{src:"http://afinkados.es/attachments/Image/contacto-1-1024x336.jpg?template=generic",alt:"imagenInicio"}),Object(p.jsx)("div",{className:"container contactIcon",children:Object(p.jsxs)("div",{className:"row row-cols-4",children:[Object(p.jsx)("div",{className:"col-1 paddingIcon",children:Object(p.jsx)("i",{className:"fas fa-home fa-2x",align:"center"})}),Object(p.jsx)("div",{className:"col-7 paddingIcon",children:"C/ Puig dels Tudons, 6, 08210 Barber\xe0 del Vall\xe8s - Barcelona"}),Object(p.jsx)("div",{className:"col-1 paddingIcon",children:Object(p.jsx)("i",{className:"fas fa-phone-volume fa-2x"})}),Object(p.jsx)("div",{className:"col-3 paddingIcon",children:"(+34) 933 638 787"})]})}),Object(p.jsx)("div",{className:"container contactIcon",children:Object(p.jsxs)("div",{className:"row row-cols-4",children:[Object(p.jsx)("div",{className:"col-1 paddingIcon",children:Object(p.jsx)("i",{className:"fas fa-tools fa-2x"})}),Object(p.jsx)("div",{className:"col-7 paddingIcon",children:Object(p.jsx)("a",{href:"mailto:sat@tanaki.es",children:"sat@tanaki.es (Servicio Asistencia T\xe9cnica)"})}),Object(p.jsx)("div",{className:"col-1 paddingIcon",children:Object(p.jsx)("i",{className:"fas fa-at fa-2x"})}),Object(p.jsx)("div",{className:"col-3 paddingIcon",children:Object(p.jsx)("a",{href:"mailto:tanaki@tanaki.es",children:"tanaki@tanaki.es"})})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("h5",{className:" contactUs",children:Object(p.jsxs)("strong",{children:["Para enviarnos tu sugerencia, puede hacerlo clickando sobre el servicio t\xe9cnico que desee contactar, o rellenando los campos siguientes."," "]})})}),Object(p.jsx)(g,{}),Object(p.jsx)("div",{className:"container satisfactionText",children:Object(p.jsxs)("p",{children:["La satisfacci\xf3n del cliente es lo m\xe1s importante para el Grupo TANAKI Visi\xf3n. Todos nuestros departamentos cuentan con profesionales especializados y con las habilidades necesarias para conseguir la excelencia en todos nuestros servicios."," "]})}),Object(p.jsx)("div",{className:"container map",children:Object(p.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.260223499172!2d2.1476466147973508!3d41.52030357925215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4be18d2cb954d%3A0x39181e2ab463ebbd!2sAv.%20Puig%20dels%20Tudons%2C%206%2C%2008210%20Barcelona!5e0!3m2!1ses!2ses!4v1618208432071!5m2!1ses!2ses",width:"600",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy",title:"This is a unique title"})})]})})]})}}]),n}(t.Component),f=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsx)(t.Fragment,{children:Object(p.jsx)("footer",{id:"main-footer",children:Object(p.jsxs)("p",{children:["\xa9 2021 ",Object(p.jsx)("a",{href:"https://www.tanaki.es",children:"Grupo Tanaki Visi\xf3n"})]})})})}}]),n}(t.Component),y=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(t.Fragment,{children:[Object(p.jsx)(b,{}),Object(p.jsx)("section",{id:"main-content",children:Object(p.jsxs)("article",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{className:"marginTop",children:"Amplia experiencia en el sector sanitario"})}),Object(p.jsx)("img",{src:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617963644/SoftwareCd_e3yocm.jpg",alt:"imagenGestion"}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("p",{children:"Todas las empresas del Grupo Tanaki Visi\xf3n est\xe1n dedicadas al desarrollo de la gesti\xf3n, explotaci\xf3n y comercializaci\xf3n de los servicios de televisi\xf3n, telefon\xeda e internet mediante la integraci\xf3n de las \xfaltimas tecnolog\xedas inform\xe1ticas, de imagen y de comunicaciones. El Grupo Tanaki Visi\xf3n cuenta con una amplia experiencia en el sector sanitario de m\xe1s de 28 a\xf1os y con los conocimientos necesarios y de desarrollo de las nuevas tecnolog\xedas, y siempre bas\xe1ndose en soluciones tecnol\xf3gicas innovadoras de f\xe1cil utilizaci\xf3n por parte de los usuarios, que ayudan a los centros sanitarios a mejorar la satisfacci\xf3n de sus pacientes y a incrementar la calidad de sus servicios."}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"Tecnolog\xeda e Innovaci\xf3n"}),Object(p.jsx)("p",{children:"El mundo actual cambia vertiginosamente debido a la aplicaci\xf3n de las nuevas tecnolog\xedas en todos los segmentos de mercado y, evidentemente, nuestro sector no es ajeno a estos cambios. Es por ello que el departamento de I+D de TANAKI a\xfana esfuerzos para mejorar constantemente sus equipos, trabajando siempre con las \xfaltimas tecnolog\xedas y los mejores materiales. Todos los equipos se dise\xf1an de forma minuciosa y analizando siempre el lugar donde ser\xe1n instalados. De ah\xed que se realizen estudios sobre la ergonom\xeda de los distintos equipos, sus formas y color y, ante todo, su facilidad de uso, de manera que resulte sencillo su manejo, sobre todo para ese grupo de usuarios cada vez mayor, la 3\xaa edad."}),Object(p.jsx)("br",{}),Object(p.jsx)("img",{className:"imgSize rounded mx-auto d-block",src:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/01/13/15473348073523.jpg",alt:"imagenInicio"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"Tecnolog\xeda y Dise\xf1o"}),Object(p.jsx)("p",{children:"El Grupo Tanaki Visi\xf3n apuesta por la imagen y modernizaci\xf3n del Centro Sanitario ofreciendo las \xfaltimas novedades tecnol\xf3gicas, como la instalaci\xf3n de televisores preparados para la alta definici\xf3n HD ready para disfrutar de la mejor calidad de imagen y sonido y que incluyen las \xfaltimas tecnolog\xedas que permiten disfrutar de im\xe1genes de gran nitidez y de enorme realismo, de unos colores m\xe1s intensos y reales y de un contraste y claridad superior. El equipo de I+D de Tanaki crea la totalidad de sus propios sistemas de comunicaci\xf3n hospitalaria y ofrece una amplia gama de equipos que cubren todas las preferencias y prestaciones que los Centros Sanitarios necesitan."}),Object(p.jsx)("br",{}),Object(p.jsx)("img",{className:"imgSize rounded mx-auto d-block",src:"https://i1.wp.com/www.seisamed.com/wp-content/uploads/Hospitales-Integran-Entretenimiento-Educativo-En-TV-Tabletas-y-celulares.jpg?resize=600%2C315",alt:"imagenInicio"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"Centro de Control"}),Object(p.jsx)("p",{children:"Gestelnet es un sistema aut\xf3nomo de gesti\xf3n de todas las comunicaciones de los pacientes del sector sanitario y mejora la calidad de la estancia mediante el control de la utilizaci\xf3n de cada servicio en cada habitaci\xf3n. Todos los puntos de venta est\xe1n conectados on-line con el centro de control, de forma que en cualquier momento se puede acceder remotamente para atender cualquier eventualidad, como por ejemplo, activar el servicio de televisi\xf3n de un paciente que no puede levantarse de la cama y/o conectar un televisor de forma gratuita a petici\xf3n del Centro Sanitario. Gestelnet recibe los datos de toda la actividad de los terminales desde cada punto de venta y permite activar o desactivar funciones remotamente o mediante decisiones propias del sistema."})]})]})})]})}}]),n}(t.Component),N=n(17),C=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).state={index:"undefined"!==typeof e.selectedIndex?e.selectedIndex:-1},t.nodes=[],t}return Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){"undefined"!==typeof e.selectedIndex&&this.state.index!==e.selectedIndex&&this.toggle(e.selectedIndex)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"toggle",value:function(e,a){var n=this;if(clearTimeout(this.timeout),!a||(this.props.onChange&&this.props.onChange(e,this.state.index!==e,this.state.index!==e?e:-1),this.props.changeOnClick)){if(this.state.index>-1){var t=this.nodes[this.state.index].ref.children[1];t.style.height="".concat(t.children[0].offsetHeight,"px")}this.state.index===e||-1===e?setTimeout((function(){n.setState({index:-1})}),50):setTimeout((function(){n.setState({index:e}),n.timeout=setTimeout((function(){n.nodes[e].ref.children[1].style.height="auto"}),n.props.transitionDuration)}),50)}}},{key:"getHeight",value:function(e){return e===this.state.index?this.nodes.length>e?this.nodes[e].ref.children[1].children[0].offsetHeight:"auto":0}},{key:"render",value:function(){var e=this,a={overflow:"hidden",transition:"height ".concat(this.props.transitionDuration,"ms ").concat(this.props.transitionTimingFunction)},n=s.a.Children.map(this.props.children,(function(n,t){return Object(p.jsxs)("div",{ref:function(a){e.nodes[t]={ref:a}},className:e.state.index===t?e.props.openClassName:"",children:[Object(p.jsx)("div",{onClick:function(){return e.toggle(t,!0)},children:n.props["data-header"]}),Object(p.jsx)("div",{style:Object(N.a)(Object(N.a)({},a),{},{height:e.getHeight(t)}),children:n})]},t)}));return Object(p.jsx)("div",{className:this.props.className,children:n})}}]),n}(s.a.Component);C.defaultProps={transitionDuration:500,transitionTimingFunction:"ease",openClassName:"open",changeOnClick:!0};var k=C,T=(n(35),function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).state={selectedIndex:0},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsx)(t.Fragment,{children:Object(p.jsx)("section",{id:"main-content",children:Object(p.jsxs)("article",{children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{className:"marginTop",children:"Comunicaci\xf3n Integral para Centros Hospitalarios"})}),Object(p.jsx)("img",{src:"https://res.cloudinary.com/dfb6ivozp/image/upload/v1617961117/Red_ytls3i.jpg",alt:"imagenInicio"}),Object(p.jsxs)(k,{className:"accordion",selectedIndex:this.state.selectedIndex,onChange:function(e,a,n){return console.log("#".concat(e," ").concat(a?"expanded":"collapsed"," (selectedIndex: ").concat(n,")"))},children:[Object(p.jsx)("div",{"data-header":"Trayectoria",className:"accordion-item",children:Object(p.jsx)("p",{children:"Han pasado m\xe1s de trenta a\xf1os desde que Tanaki inici\xf3 su actividad en el \xe1mbito de la comunicaci\xf3n sanitaria. M\xe1s de dos d\xe9cadas en las que nuestra empresa ha ido configur\xe1ndose hasta llegar a crear el Grupo Tanaki Visi\xf3n. Actualmente, la aplicaci\xf3n de la m\xe1s avanzada tecnolog\xeda y la continua investigaci\xf3n del sector hospitalario nos han permitido cubrir ampliamente las diversas necesidades en lo referente a la comunicaci\xf3n en centros sanitarios. Todo ello, unido al esfuerzo e iniciativa de un gran equipo de profesionales, han convertido al Grupo Tanaki Visi\xf3n en la empresa l\xedder de su sector. Y no s\xf3lo las cifras de cuota de mercado lo demuestran: hospitales y centros sanitarios han puesto en nosotros su confianza, alcanzando un alto nivel de integraci\xf3n en la comunicaci\xf3n entre sus dependencias, al mismo tiempo que ofrecen un mejor y m\xe1s c\xf3modo servicio a sus pacientes."})}),Object(p.jsxs)("div",{"data-header":"Canal de Informaci\xf3n Corporativo",className:"accordion-item",children:[Object(p.jsx)("p",{children:"De entre las innovaciones introducidas por el Grupo Tanaki Visi\xf3n en el \xe1mbito de la comunicaci\xf3n sanitaria, cabe destacar los canales de informaci\xf3n internos gratuitos; canales de visi\xf3n libre en los que el Centro Sanitario puede emitir sus propios canales de informaci\xf3n. Los canales culturales no s\xf3lo son un medio de distracci\xf3n, sino que a la vez informan al paciente sobre temas que son de su inter\xe9s. Un ejemplo son los documentales did\xe1cticos que pueden emitirse en las \xe1reas de Pediatr\xeda o Maternidad. En definitiva, los canales culturales suponen una gran aportaci\xf3n a la comunicaci\xf3n sanitaria, ya que contribuyen a mejorar el servicio al paciente proporcion\xe1ndole informaci\xf3n de su inter\xe9s, adem\xe1s de una estancia m\xe1s amena en el hospital."}),Object(p.jsx)("br",{}),Object(p.jsx)("img",{className:"imgSize rounded mx-auto d-block",src:"http://blog.general-valencia.san.gva.es/wp-content/uploads/2014/01/2013_12_18_TV_interactivas_Hospital_General_de_Valencia-e1390837311320.jpg",alt:"imagenInicio"})]}),Object(p.jsxs)("div",{"data-header":"Software de Gesti\xf3n",className:"accordion-item",children:[Object(p.jsx)("p",{children:"El control de cada uno de los servicios contratados se encuentra centralizado en un servidor que facilitada de estad\xedsticas diarias, mensuales, trimestrales y anuales de cada habitaci\xf3n."}),Object(p.jsx)("br",{}),Object(p.jsx)("img",{className:"imgSize rounded mx-auto d-block",src:"https://st2.depositphotos.com/1037987/10279/i/950/depositphotos_102790948-stock-photo-senior-patient-watching-tv-in.jpg",alt:"imagenInicio"})]}),Object(p.jsx)("div",{"data-header":"Centro de Control",className:"accordion-item",children:Object(p.jsx)("p",{children:"Gestelnet es un sistema aut\xf3nomo de gesti\xf3n de todas las comunicaciones de los pacientes del sector sanitario y mejora la calidad de la estancia mediante el control de la utilizaci\xf3n de cada servicio en cada habitaci\xf3n. Todos los puntos de venta est\xe1n conectados on-line con el centro de control, de forma que en cualquier momento se puede acceder remotamente para atender cualquier eventualidad, como por ejemplo, activar el servicio de televisi\xf3n de un paciente que no puede levantarse de la cama y/o conectar un televisor de forma gratuita a petici\xf3n del Centro Sanitario. Gestelnet recibe los datos de toda la actividad de los terminales desde cada punto de venta y permite activar o desactivar funciones remotamente o mediante decisiones propias del sistema."})})]})]})})})}}]),n}(t.Component)),I=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(m.a,{children:[Object(p.jsx)(b,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:["/","/react_web"],exact:!0,children:Object(p.jsx)(T,{})}),Object(p.jsx)(j.a,{path:"/gestion",children:Object(p.jsx)(y,{})}),Object(p.jsx)(j.a,{path:"/hospitales",children:Object(p.jsx)(h,{})}),Object(p.jsx)(j.a,{path:"/contacto",children:Object(p.jsx)(v,{})})]}),Object(p.jsx)(f,{})]})}}]),n}(t.Component),q=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(p.jsx)(t.Fragment,{children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)(I,{})})})}}]),n}(t.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(a){var n=a.getCLS,t=a.getFID,s=a.getFCP,i=a.getLCP,c=a.getTTFB;n(e),t(e),s(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),w()}},[[44,1,2]]]);
//# sourceMappingURL=main.8dd7a7cb.chunk.js.map