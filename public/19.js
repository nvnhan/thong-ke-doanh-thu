(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{105:function(e,t,n){"use strict";var r=n(636),a=n(632),o=n(633),i=n(383),c=n(98),l=n(19),u=n(31),f=n(25),s=n(187),d=n(0),m=n.n(d),y=n(190),h=n.n(y);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E=m.a.memo((function(e){var t,n=e.selectedRowKeys,y=e.data,k=e.isLoading,w=e.columns,E=e.selectable,O=e.editable,S=e.deleteable,j=e.primaryKey,x=e.tableSize,I=e.onDelete,A=e.handleEdit,C=e.onChangeSelect,T=e.otherActions,D=e.expandedRowRender,N=e.renderFooter,P=e.renderSummary,R=v(Object(d.useState)([]),2),L=R[0],Y=R[1],F="",M="";Object(d.useEffect)((function(){Y(U())}),[k]);var U=function(){var e=w.map((function(e){return H(e,y)}));return(O||S||!_.isEmpty(T))&&e.push(K()),e},H=function(e,t){if(e.optFilter){var n=g(new Set(t.map((function(t){return t[e.dataIndex]})))).map((function(e){return{text:null!==e?e:"(không có)",value:e}}));Object.assign(e,{filters:n,onFilter:function(t,n){return n[e.dataIndex]===t||null!==n[e.dataIndex]&&0===n[e.dataIndex].indexOf(t)}})}else e.optFind&&Object.assign(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},V(e.dataIndex)));return e},K=function(){return{title:"",key:"action",fixed:"right",align:"center",width:72,render:function(e,t){return m.a.createElement(c.a,{overlay:B(t)},m.a.createElement(l.a,null,m.a.createElement(r.a,null)))}}},B=function(e){return m.a.createElement(u.a,null,!_.isEmpty(T)&&T.map((function(t){return m.a.createElement(u.a.Item,{key:t.key,onClick:function(){return t.onClick(e)},style:{color:t.color}},t.icon," ",t.title)})),O&&m.a.createElement(u.a.Item,{key:"edit",onClick:function(){return A(e)},className:"color-link"},m.a.createElement(a.a,null)," Chỉnh sửa"),S&&m.a.createElement(u.a.Item,{key:"delete",onClick:function(){return I(e[j])},className:"color-danger"},m.a.createElement(o.a,null)," Xóa"))},V=function(e){return{filterDropdown:function(n){var r=n.setSelectedKeys,a=n.selectedKeys,o=n.confirm,c=n.clearFilters;return m.a.createElement("div",{style:{padding:8}},m.a.createElement(f.a,{ref:function(e){t=e},placeholder:"Tìm kiếm...",value:a[0],onChange:function(e){return r(e.target.value?[e.target.value]:[])},onPressEnter:function(){return G(a,o,e)},style:{width:188,marginBottom:8,display:"block"}}),m.a.createElement(l.a,{type:"primary",onClick:function(){return G(a,o,e)},icon:m.a.createElement(i.a,null),size:"small",style:{width:90,marginRight:8}},"Tìm"),m.a.createElement(l.a,{onClick:function(){return z(c)},size:"small",style:{width:90}},"Hủy"))},filterIcon:function(e){return m.a.createElement(i.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e].toString().toLowerCase().includes(t.toLowerCase())},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return t.select()}))},render:function(t){return M===e?m.a.createElement(h.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[F],autoEscape:!0,textToHighlight:t.toString()}):t}}},G=function(e,t,n){t(),M=n,F=e[0]},z=function(e){e(),M="",F=""},$={selectedRowKeys:n,onChange:C,hideDefaultSelections:!0,columnWidth:45,selections:[s.a.SELECTION_ALL,s.a.SELECTION_INVERT,{key:"invert_all",text:"Bỏ chọn tất cả",onSelect:function(){return C([])}}]};return m.a.createElement(s.a,{dataSource:y,columns:L,loading:k,rowKey:function(t){return t[e.primaryKey]},rowSelection:E?$:null,locale:{filterConfirm:"Lọc",filterReset:"Hủy",emptyText:"Không có dữ liệu",cancelSort:"CLick để Bỏ sắp xếp",triggerAsc:"Click để Sắp xếp tăng dần",triggerDesc:"Click để Sắp xếp giảm dần",selectionAll:"Chọn tất cả dữ liệu",selectInvert:"Đảo chọn trang hiện tại"},scroll:x,expandable:D?{expandedRowRender:function(e){return D(e)}}:null,footer:N?function(){return N(y)}:void 0,summary:P?function(){return P(y)}:void 0})}));t.a=E},120:function(e,t,n){"use strict";var r=n(634),a=n(119),o=n(14),i=n(58),c=n(20),l=n(19),u=n(11),f=n(3),s=n.n(f),d=n(0),m=n.n(d),y=n(4);n(384);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=a.a.RangePicker,k=m.a.memo((function(e){var t=e.onFilter,n=e.tuNgayDenNgay,a=e.otherFilter,f=e.filterInitialValue,g=b(o.a.useForm(),1)[0];Object(d.useEffect)((function(){g.setFieldsValue(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f,{thoiGian:[s()().startOf("month"),s()().endOf("month")]}))}),[]);return m.a.createElement("div",{className:"filter-box"},m.a.createElement(o.a,{form:g,onFinish:function(){var e=g.getFieldsValue();e.hasOwnProperty("thoiGian")&&delete(e=Object.assign(e,{bat_dau:e.thoiGian[0],ket_thuc:e.thoiGian[1]})).thoiGian,t(Object(y.b)(e))},labelCol:{span:8},wrapperCol:{span:16}},m.a.createElement(i.a,{gutter:[5,5]},n&&m.a.createElement(c.a,{span:24,md:16,lg:12,xl:7},m.a.createElement(o.a.Item,{name:"thoiGian",label:"Thời gian",labelCol:{span:4,xl:6},wrapperCol:{span:20,xl:18}},m.a.createElement(v,{locale:u.a,style:{width:"100%"},ranges:{"Hôm nay":[s()(),s()()],"Tuần này":[s()().startOf("week"),s()().endOf("week")],"Tháng này":[s()().startOf("month"),s()().endOf("month")]},format:"DD/MM/YYYY",placeholder:["Từ ngày","đến ngày"]}))),!_.isEmpty(a)&&a.map((function(e){return m.a.createElement(c.a,{span:12,md:8,lg:6,xl:5,key:e.name},m.a.createElement(o.a.Item,{name:e.name,label:e.label},e.render))})),m.a.createElement(c.a,{span:12,md:8,lg:6,xl:5},m.a.createElement(l.a,{htmlType:"submit"},m.a.createElement(r.a,null),"Lọc")))))}));t.a=k},121:function(e,t,n){"use strict";var r=n(635),a=n(19),o=n(98),i=n(31),c=n(628),l=n(0),u=n.n(l),f=(n(386),u.a.memo((function(e){var t=e.handleAddNew,n=e.insertable,l=e.selectedRowKeys,f=e.data,s=e.otherButtons,d=e.onMultiDelete,m=e.selectable,y=e.deleteable,h=void 0!==l&&l.length>0,p=function(e){return u.a.createElement(i.a,null,e.map((function(e){return!1===e.selectRequired||h?void 0===e.childs?u.a.createElement(i.a.Item,{key:e.key,onClick:function(){return e.onClick(f,l)}},e.title):u.a.createElement(i.a.SubMenu,{title:e.title,key:e.key},e.childs.map((function(e){return u.a.createElement(i.a.Item,{key:e.key,onClick:function(){return e.onClick(f,l)}},e.title)}))):""})))};return u.a.createElement("div",{className:"tools-button"},n&&u.a.createElement(a.a,{type:"primary",onClick:t},"Thêm mới"),void 0!==s&&s.map((function(e){return void 0!==e.childs||!1!==e.selectRequired&&!h?!1===e.selectRequired||h?u.a.createElement(o.a,{key:e.key,overlay:p(e.childs)},u.a.createElement(a.a,{icon:e.icon},e.title," ",u.a.createElement(r.a,null))):"":u.a.createElement(a.a,{type:"default",key:e.key,icon:e.icon,onClick:function(){return e.onClick(f,l)}},e.title)})),m&&y&&h&&u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{type:"vertical"}),u.a.createElement(a.a,{type:"link",danger:!0,onClick:d},"Xóa ",l.length," mục đã chọn")))})));t.a=f},188:function(e,t){},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(106),a=n.n(r),o=n(59);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){if(!(this instanceof l))return new l;this.SheetNames=[],this.Sheets={}}function u(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r!==e.length;++r)n[r]=255&e.charCodeAt(r);return t}var f=function(e,t){for(var n=new l,r=0,c=Object.entries(e);r<c.length;r++){var f=i(c[r],2),s=f[0],d=f[1],m=a.a.utils.json_to_sheet(d,{skipHeader:!0});n.SheetNames.push(s),n.Sheets[s]=m}var y=a.a.write(n,{bookType:"xlsx",bookSST:!0,type:"binary",Props:{Author:"NVN",Company:"tienve.net"}}),h=window.URL.createObjectURL(new Blob([u(y)],{type:"application/octet-stream"}));Object(o.a)(h,t||"report.xlsx")};t.b=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=new l,i=a.a.utils.json_to_sheet(e,{skipHeader:n});r.SheetNames.push("Export"),r.Sheets.Export=i;var c=a.a.write(r,{bookType:"xlsx",bookSST:!0,type:"binary",Props:{Author:"NVN",Company:"tienve.net"}}),f=window.URL.createObjectURL(new Blob([u(c)],{type:"application/octet-stream"}));Object(o.a)(f,t||"report.xlsx")}},384:function(e,t,n){var r=n(385);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(152)(r,a);r.locals&&(e.exports=r.locals)},385:function(e,t,n){(e.exports=n(151)(!1)).push([e.i,"/* Filter Box */\n.filter-box .ant-form-item {\n  margin: 0;\n}",""])},386:function(e,t,n){var r=n(387);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(152)(r,a);r.locals&&(e.exports=r.locals)},387:function(e,t,n){(e.exports=n(151)(!1)).push([e.i,'@charset "UTF-8";\n/* Button trong form danh mục */\n.tools-button {\n  padding-left: 5px;\n}\n.tools-button button {\n  margin: 10px 5px;\n}',""])},388:function(e,t){},389:function(e,t){},4:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return m}));var r=n(3),a=n.n(r),o=n(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){var t=c(Object(o.useState)(e),2),n=t[0],r=t[1];return[n,function(e){return r((function(t){return Object.assign({},t,e)}))}]},f=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&(void 0===e[n]&&(e[n]=""),t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n])));return t.join("&")},s=function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=c(n[t],2),o=r[0],l=r[1];null!=l&&("object"===i(l)?e[o]=l.format("YYYY-MM-DD HH:mm:ss"):"string"==typeof l&&(l.match(/(.*?):(.*?)\/(.*?)\//g)?e[o]=a()(l,"HH:mm DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss"):l.match(/(.*?)\/(.*?)\//g)&&(e[o]=a()(l,"DD/MM/YYYY").format("YYYY-MM-DD HH:mm:ss"))))}return e},d=function(e,t){if(void 0===e||void 0===t)return!0;var n=!1;for(var r in e)if(e.hasOwnProperty(r)&&t.hasOwnProperty(r)&&e[r]!==t[r]){n=!0;break}return n},m=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"})},59:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var r=n(382),a=n(630),o=n(0),i=n.n(o),c=function(e,t){var n=document.createElement("a");n.href=e,n.download=t,n.click(),window.URL.revokeObjectURL(e)},l=function(e,t,n){r.a.info({title:"Thông báo",centered:!0,icon:null,content:i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(a.a,{percent:100,status:"active",showInfo:!1,strokeColor:"#6dc3a6"}),i.a.createElement("span",null,"Đang tạo báo cáo..."))}),axios.get(e,{params:t,responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data]));c(t,n)})).catch((function(e){return console.log(e)})).then((function(){return r.a.destroyAll()}))};t.a=c},644:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n(105),c=n(120),l=n(121),u=n(104),f=n(26);function s(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=a.a.memo((function(e){var t=d(Object(o.d)({data:{muavao:[],banra:[]},isLoading:!0}),2),n=t[0],m=t[1],y=n.data,h=n.isLoading,p=d(Object(r.useState)(void 0),2),b=p[0],g=p[1],v=!1;Object(r.useEffect)((function(){return v=!0,void 0!==b&&_.isEmpty(b)||(m({data:[],isLoading:!0}),axios.get("/api/tong-hop-cong-no?"+Object(o.c)(b)).then((function(e){v&&e.data.success&&m({data:e.data.data,isLoading:!1})})).catch((function(e){return console.log(e)}))),function(){v=!1}}),[JSON.stringify(b)]);var k=[{key:"export",onClick:function(){var e=y.banra.map((function(e,t){return{stt:t+1,phan_loai:e.phan_loai,khach_hang:e.khach_hang,dau_ky:e.dau_ky,cuoi_ky:e.cuoi_ky,thanh_toan:e.thanh_toan,giao_dich:e.giao_dich}})),t=[{stt:"STT",phan_loai:"Phân loại",khach_hang:"Khách hàng",dau_ky:"Dư - Nợ đầu kỳ",cuoi_ky:"Dư - Nợ cuối kỳ",thanh_toan:"Số tiền thanh toán",giao_dich:"Số tiền giao dịch"}].concat(s(e)),n=y.muavao.map((function(e,t){return{stt:t+1,tai_khoan:e.tai_khoan,dau_ky:e.dau_ky,cuoi_ky:e.cuoi_ky,thanh_toan:e.thanh_toan,giao_dich:e.giao_dich}})),r={"Tổng hợp bán ra":t,"Tổng hợp mua vào":[{stt:"STT",tai_khoan:"Tài khoản",dau_ky:"Dư - Nợ đầu kỳ",cuoi_ky:"Dư - Nợ cuối kỳ",thanh_toan:"Số tiền thanh toán",giao_dich:"Số tiền giao dịch"}].concat(s(n))};Object(f.a)(r,"tong-hop-cong-no.xlsx")},title:"Xuất danh sách ra Excel",selectRequired:!1}],w=[{title:"Phân loại",dataIndex:"phan_loai",optFilter:!0,width:100},{title:"Khách hàng",dataIndex:"khach_hang",optFind:!0,width:170},{title:"Dư - Nợ đầu kỳ",dataIndex:"dau_ky",render:function(e){return o.e.format(e)},width:100},{title:"Dư - Nợ cuối kỳ",dataIndex:"cuoi_ky",render:function(e){return o.e.format(e)},width:100},{title:"Số tiền thanh toán",dataIndex:"thanh_toan",render:function(e){return o.e.format(e)},width:100},{title:"Tổng tiền giao dịch",dataIndex:"giao_dich",render:function(e){return o.e.format(e)},width:100}],E=[{title:"Tài khoản",dataIndex:"tai_khoan",optFind:!0,width:180},{title:"Dư - Nợ đầu kỳ",dataIndex:"dau_ky",render:function(e){return o.e.format(e)},width:100},{title:"Dư - Nợ cuối kỳ",dataIndex:"cuoi_ky",render:function(e){return o.e.format(e)},width:100},{title:"Số tiền thanh toán",dataIndex:"thanh_toan",render:function(e){return o.e.format(e)},width:100},{title:"Tổng tiền giao dịch",dataIndex:"giao_dich",render:function(e){return o.e.format(e)},width:100}];return a.a.createElement("div",{className:"list-form"},a.a.createElement(c.a,{filterBox:!0,tuNgayDenNgay:!0,onFilter:function(e){Object(o.a)(b,e)&&g(e)}}),a.a.createElement(l.a,{insertable:!1,deleteable:!1,selectable:!1,otherButtons:k}),a.a.createElement(u.a,{defaultActiveKey:"1"},a.a.createElement(u.a.TabPane,{tab:"Tổng hợp bán ra",key:1},a.a.createElement(i.a,{tableSize:{x:800},data:y.banra,columns:w,isLoading:h,deleteable:!1,selectable:!1,editable:!1,primaryKey:"id",renderSummary:function(e){if(!_.isEmpty(e)){var t=e.reduce((function(e,t){return{dau_ky:e.dau_ky+t.dau_ky,cuoi_ky:e.cuoi_ky+t.cuoi_ky,giao_dich:e.giao_dich+t.giao_dich,thanh_toan:e.thanh_toan+t.thanh_toan}}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("tr",null,a.a.createElement("th",{colSpan:2},"Tổng cộng"),a.a.createElement("td",null,o.e.format(t.dau_ky)),a.a.createElement("td",null,o.e.format(t.cuoi_ky)),a.a.createElement("td",null,o.e.format(t.thanh_toan)),a.a.createElement("td",null,o.e.format(t.giao_dich))))}}})),a.a.createElement(u.a.TabPane,{tab:"Tổng hợp mua vào",key:2},a.a.createElement(i.a,{tableSize:{x:800},data:y.muavao,columns:E,isLoading:h,deleteable:!1,selectable:!1,editable:!1,primaryKey:"id",renderSummary:function(e){if(!_.isEmpty(e)){var t=e.reduce((function(e,t){return{dau_ky:e.dau_ky+t.dau_ky,cuoi_ky:e.cuoi_ky+t.cuoi_ky,giao_dich:e.giao_dich+t.giao_dich,thanh_toan:e.thanh_toan+t.thanh_toan}}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("tr",null,a.a.createElement("th",null,"Tổng cộng"),a.a.createElement("td",null,o.e.format(t.dau_ky)),a.a.createElement("td",null,o.e.format(t.cuoi_ky)),a.a.createElement("td",null,o.e.format(t.thanh_toan)),a.a.createElement("td",null,o.e.format(t.giao_dich))))}}}))))}))}}]);