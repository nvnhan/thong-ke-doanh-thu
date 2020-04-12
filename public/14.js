(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(578),o=a(378),i=a.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.a=function(e){if(e.value&&"string"==typeof e.value){var t=i()(e.value,e.format);return r.a.createElement(l.a,c({},e,{value:t}))}return r.a.createElement(l.a,e)}},382:function(e,t,a){"use strict";var n={placeholder:"Chọn thời gian"};function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={lang:r({placeholder:"Chọn thời điểm",rangePlaceholder:["Ngày bắt đầu","Ngày kết thúc"]},{locale:"vi_VN",today:"Hôm nay",now:"Bây giờ",backToToday:"Trở về hôm nay",ok:"Ok",clear:"Xóa",month:"Tháng",year:"Năm",timeSelect:"Chọn thời gian",dateSelect:"Chọn ngày",weekSelect:"Chọn tuần",monthSelect:"Chọn tháng",yearSelect:"Chọn năm",decadeSelect:"Chọn thập kỷ",yearFormat:"YYYY",dateFormat:"D/M/YYYY",dayFormat:"D",dateTimeFormat:"D/M/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Tháng trước (PageUp)",nextMonth:"Tháng sau (PageDown)",previousYear:"Năm trước (Control + left)",nextYear:"Năm sau (Control + right)",previousDecade:"Thập kỷ trước",nextDecade:"Thập kỷ sau",previousCentury:"Thế kỷ trước",nextCentury:"Thế kỷ sau"}),timePickerLocale:r({},n)};t.a=l},588:function(e,t,a){"use strict";a.r(t);var n=a(378),r=a.n(n),l=a(0),o=a.n(l),i=a(40),c=a(381),u=a(383),h=a(64),m=a(23),d=a(375),s=a(581),g=a(376),f=a(382),p=a(380),y=a(379),E=u.a.Option,b=u.a.OptGroup,v=o.a.memo((function(e){var t=e.hangHoa||[],a=Object.entries(_.groupBy(t,"nha_cung_cap"));return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{gutter:[5,5]},o.a.createElement(m.a,{span:24,md:12},o.a.createElement(d.a.Item,{name:"ngay_thang",label:"Ngày tháng",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},o.a.createElement(p.a,{style:{width:"100%"},locale:f.a,format:"DD/MM/YYYY"}))),o.a.createElement(m.a,{span:24,md:12},o.a.createElement(d.a.Item,{name:"id_hang_hoa",label:"Hạng mục",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},o.a.createElement(u.a,{showSearch:!0,placeholder:"Chọn hàng hóa",filterOption:function(e,t){return!!t.children&&t.children.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(a){var n=t.filter((function(e){return e.id===a}))[0];n&&e.onChangeValue(n.don_gia)}},a.map((function(e){return o.a.createElement(b,{label:e[0],key:e[0]},e[1].map((function(e){return o.a.createElement(E,{value:e.id,key:e.id},e.phan_loai," - ",e.ma_hang," (",y.e.format(e.don_gia),")")})))}))))),o.a.createElement(m.a,{span:24,md:12},o.a.createElement(d.a.Item,{name:"don_gia",label:"Đơn giá",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},o.a.createElement(s.a,{style:{width:"100%"},min:0,step:1e3,formatter:function(e){return"".concat(e,"₫").replace(/(?=(\d{3})+(?!\d))\B/g,",")},parser:function(e){return e.replace(/\₫\s?|(,*)/g,"")}}))),o.a.createElement(m.a,{span:24,md:12},o.a.createElement(d.a.Item,{name:"so_luong",label:"Số lượng",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},o.a.createElement(s.a,{style:{width:"100%"},min:1,step:1,parser:function(e){return e.replace(/\₫\s?|\.(,*)/g,"")}}))),o.a.createElement(m.a,{span:24,md:12},o.a.createElement(d.a.Item,{name:"bat_dau",label:"Bắt đầu"},o.a.createElement(p.a,{style:{width:"100%"},locale:f.a,format:"DD/MM/YYYY"}))),o.a.createElement(m.a,{span:24,md:12},o.a.createElement(d.a.Item,{name:"ket_thuc",label:"Kết thúc"},o.a.createElement(p.a,{style:{width:"100%"},locale:f.a,format:"DD/MM/YYYY"}))),o.a.createElement(m.a,{span:24},o.a.createElement(d.a.Item,{labelCol:{md:3,span:6},wrapperCol:{md:21,span:18},name:"ghi_chu",label:"Ghi chú"},o.a.createElement(g.a,null)))))}));function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var k=o.a.memo((function(e){var t=e.location.tour,a=Y(Object(l.useState)([]),2),n=a[0],u=a[1],h=Y(Object(l.useState)(void 0),2),m=h[0],d=h[1];if(void 0===t)return o.a.createElement(i.a,{to:"/"});Object(l.useEffect)((function(){void 0!==t&&axios.get("/api/hang-hoa").then((function(e){e.data.success&&u(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);var s=[{title:"Ngày tháng",dataIndex:"ngay_thang",width:120,sorter:function(e,t){return r()(e.ngay_thang,"DD/MM/YYYY").unix()-r()(t.ngay_thang,"DD/MM/YYYY").unix()}},{title:"Phân loại",dataIndex:"phan_loai",optFilter:!0,width:120},{title:"Mã hàng",dataIndex:"ma_hang",optFind:!0,width:120},{title:"Nhà cung cấp",dataIndex:"nha_cung_cap",optFilter:!0,width:150},{title:"Thành tiền",dataIndex:"thanh_tien",render:function(e){return y.e.format(e)},width:120,sorter:function(e,t){return e-t}},{title:"Thanh toán",dataIndex:"ngay_thanh_toan",width:120},{title:"Ghi chú",dataIndex:"ghi_chu",ellipsis:!0,width:150}];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"filter-box"},"Tour:"," ",o.a.createElement("b",null,t.ma_tour," (",t.ten_tour,")"),". Ngày bắt đầu: ",t.bat_dau,", kết thúc: ",t.ket_thuc),o.a.createElement(c.a,{url:"tour-chi-tiet",filter:{tour:t.id},otherParams:{id_tour:t.id},columns:s,modalWidth:"800px",formTemplate:o.a.createElement(v,{hangHoa:n,onChangeValue:function(e){d({don_gia:e})}}),formInitialValues:{so_luong:1,ngay_thang:r()().format("DD/MM/YYYY"),bat_dau:t.bat_dau,ket_thuc:t.ket_thuc},expandedRowRender:function(e){return o.a.createElement("ul",{style:{margin:0}},o.a.createElement("li",null,"Bắt đầu: ",e.bat_dau,". Kết thúc: ",e.ket_thuc),o.a.createElement("li",null,"Mã hàng: ",e.ma_hang,". Tên hàng: ",e.ten_hang,"."),o.a.createElement("li",null,"Đơn giá: ",y.e.format(e.don_gia),". Số lượng:"," ",e.so_luong),o.a.createElement("li",null,"Đã thanh toán: ",y.e.format(e.da_thanh_toan),". Ngày thanh toán: ",e.ngay_thanh_toan),o.a.createElement("li",null,"Ghi chú: ",e.ghi_chu),o.a.createElement("li",null,"Người tạo: ",e.username))},renderFooter:function(e){if(!_.isEmpty(e)){var t=e.reduce((function(e,t){return{thanh_tien:e.thanh_tien+t.thanh_tien}}));return"Tổng tiền: "+y.e.format(t.thanh_tien)}},setFormValues:m}))}));t.default=Object(i.g)(k)}}]);