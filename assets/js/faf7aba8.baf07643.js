"use strict";(self.webpackChunkng_leaflet_documentation=self.webpackChunkng_leaflet_documentation||[]).push([[718],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2037:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"Centrar en ubicaci\xf3n",sidebar_position:3,description:"Una vez que ya tenemos controlados los dos primeros aspectos, vamos a especificar el punto en coordenadas donde queremos ubicarnos"},s="Centrar en ubicaci\xf3n",p={unversionedId:"es/aspectos-basicos/centrar-en-ubicacion",id:"es/aspectos-basicos/centrar-en-ubicacion",isDocsHomePage:!1,title:"Centrar en ubicaci\xf3n",description:"Una vez que ya tenemos controlados los dos primeros aspectos, vamos a especificar el punto en coordenadas donde queremos ubicarnos",source:"@site/docs/es/aspectos-basicos/centrar-en-ubicacion.md",sourceDirName:"es/aspectos-basicos",slug:"/es/aspectos-basicos/centrar-en-ubicacion",permalink:"/es/aspectos-basicos/centrar-en-ubicacion",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Centrar en ubicaci\xf3n",sidebar_position:3,description:"Una vez que ya tenemos controlados los dos primeros aspectos, vamos a especificar el punto en coordenadas donde queremos ubicarnos"},sidebar:"tutorialSidebar",previous:{title:"Personalizar tama\xf1o",permalink:"/es/aspectos-basicos/personalizar-tamano"},next:{title:"Posici\xf3n / Textos botones",permalink:"/es/zoom/positions-btn-texts"}},l=[],u={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"centrar-en-ubicaci\xf3n"},"Centrar en ubicaci\xf3n"),(0,a.kt)("p",null,"En este momento queremos centrar la c\xe1mara del mapa en unas coordenadas que nosotros queramos especificar."),(0,a.kt)("p",null,"Hasta el momento, si no a\xf1adimos esta informaci\xf3n utilizar\xe1 una coordenadas por defecto teniendo como referencia un array con dos n\xfameros en los que estar\xe1n la latitud y la longitud."),(0,a.kt)("p",null,"Las coordenadas lo tenemos que introducir en la siguiente estructura de la propiedad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"configMap: IConfigMap = {\n    center: [number, number],\n    // [lat, lng] as  [number, number]\n};\n")),(0,a.kt)("p",null,"Con esta informaci\xf3n a\xf1adida en el componente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\nimport { IConfigMap } from '@mugan86/ng-leaflet';\nimport { PLACES_LIST_LOCATIONS } from './locations';\n\n@Component({\n  selector: 'my-app',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css'],\n})\nexport class AppComponent {\n  locations = PLACES_LIST_LOCATIONS;\n  locationsKeys = Object.keys(this.locations);\n\n  configMap: IConfigMap = {\n    center: this.locations.BARCELONA as [number, number],\n    // [lat, lng] as  [number, number]\n  };\n}\n")),(0,a.kt)("p",null,"A\xf1adiendo la informaci\xf3n  en el HTML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ng-leaflet-map\n  [mapId]="\'center__position\'"\n  [config]="configMap"\n></ng-leaflet-map>\n')),(0,a.kt)("p",null,"Obteniendo el siguiente resultado:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mugan86/i18n-ng-leaflet-doc/master/.gitbook/assets/02-mapa-center.png",alt:"Map in Center"})),(0,a.kt)("p",null,"Y aqu\xed la demo que pod\xe9is usar para probarlo y jugar con ello:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/angular-leaflet-map-basic-set-center-position?embed=1&file=src/app/app.component.ts&theme=dark"},"Stackblitz - Centrar en ubicaci\xf3n")))}m.isMDXComponent=!0}}]);