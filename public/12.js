(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{380:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(578),i=n(378),l=n.n(i);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){if(e.value&&"string"==typeof e.value){var t=l()(e.value,e.format);return r.a.createElement(o.a,h({},e,{value:t}))}return r.a.createElement(o.a,e)}},382:function(e,t,n){"use strict";var a={placeholder:"Chọn thời gian"};function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={lang:r({placeholder:"Chọn thời điểm",rangePlaceholder:["Ngày bắt đầu","Ngày kết thúc"]},{locale:"vi_VN",today:"Hôm nay",now:"Bây giờ",backToToday:"Trở về hôm nay",ok:"Ok",clear:"Xóa",month:"Tháng",year:"Năm",timeSelect:"Chọn thời gian",dateSelect:"Chọn ngày",weekSelect:"Chọn tuần",monthSelect:"Chọn tháng",yearSelect:"Chọn năm",decadeSelect:"Chọn thập kỷ",yearFormat:"YYYY",dateFormat:"D/M/YYYY",dayFormat:"D",dateTimeFormat:"D/M/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Tháng trước (PageUp)",nextMonth:"Tháng sau (PageDown)",previousYear:"Năm trước (Control + left)",nextYear:"Năm sau (Control + right)",previousDecade:"Thập kỷ trước",nextDecade:"Thập kỷ sau",previousCentury:"Thế kỷ trước",nextCentury:"Thế kỷ sau"}),timePickerLocale:r({},a)};t.a=o},590:function(e,t,n){"use strict";n.r(t);var a=n(378),r=n.n(a),o=n(0),i=n.n(o),l=n(381),h=n(379),u=n(383),c=n(375),g=n(581),m=n(376),s=n(382),d=n(380),f=u.a.Option,p=u.a.OptGroup,y=i.a.memo((function(e){var t=e.hangHoa||[],n=Object.entries(_.groupBy(t,"nha_cung_cap"));return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a.Item,{name:"ngay_thang",label:"Ngày tháng",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},i.a.createElement(d.a,{style:{width:"100%"},locale:s.a,format:"DD/MM/YYYY"})),i.a.createElement(c.a.Item,{name:"id_hang_hoa",label:"Hàng hóa",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},i.a.createElement(u.a,{showSearch:!0,placeholder:"Chọn hàng hóa",filterOption:function(e,t){return!!t.children&&t.children.toLowerCase().indexOf(e.toLowerCase())>=0},onChange:function(n){var a=t.filter((function(e){return e.id===n}))[0];a&&e.onChangeValue(a.don_gia)}},n.map((function(e){return i.a.createElement(p,{label:e[0],key:e[0]},e[1].map((function(e){return i.a.createElement(f,{value:e.id,key:e.id},e.phan_loai," - ",e.ma_hang," (",h.e.format(e.don_gia),")")})))})))),i.a.createElement(c.a.Item,{name:"don_gia",label:"Đơn giá",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},i.a.createElement(g.a,{style:{width:"100%"},min:0,step:1e3,formatter:function(e){return"".concat(e,"₫").replace(/(?=(\d{3})+(?!\d))\B/g,",")},parser:function(e){return e.replace(/\₫\s?|(,*)/g,"")}})),i.a.createElement(c.a.Item,{name:"so_luong",label:"Số lượng",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},i.a.createElement(g.a,{style:{width:"100%"},min:1,step:1,parser:function(e){return e.replace(/\₫\s?|\.(,*)/g,"")}})),i.a.createElement(c.a.Item,{name:"ghi_chu",label:"Ghi chú"},i.a.createElement(m.a,null)))}));function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var b=i.a.memo((function(e){var t=v(Object(o.useState)([]),2),n=t[0],a=t[1],u=v(Object(o.useState)(void 0),2),c=u[0],g=u[1];Object(o.useEffect)((function(){axios.get("/api/hang-hoa").then((function(e){e.data.success&&a(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);var m=[{title:"Ngày tháng",dataIndex:"ngay_thang",width:120,sorter:function(e,t){return r()(e.ngay_thang,"DD/MM/YYYY").unix()-r()(t.ngay_thang,"DD/MM/YYYY").unix()}},{title:"Mã hàng",dataIndex:"ma_hang",optFind:!0,width:140},{title:"Nhà cung cấp",dataIndex:"nha_cung_cap",width:140,optFilter:!0},{title:"Giá mua",dataIndex:"don_gia",render:function(e){return h.e.format(e)},sorter:function(e,t){return e.don_gia-t.don_gia},width:120},{title:"Số lượng",dataIndex:"so_luong",width:120},{title:"Thành tiền",dataIndex:"thanh_tien",render:function(e){return h.e.format(e)},sorter:function(e,t){return e.thanh_tien-t.thanh_tien},width:120},{title:"Thanh toán",dataIndex:"ngay_thanh_toan",width:120},{title:"Ghi chú",dataIndex:"ghi_chu",ellipsis:!0,width:170}];return i.a.createElement(l.a,{url:"mua-vao",filterBox:!0,columns:m,tableSize:{x:1e3},formTemplate:i.a.createElement(y,{hangHoa:n,onChangeValue:function(e){g({don_gia:e})}}),formInitialValues:{so_luong:1,ngay_thang:r()().format("DD/MM/YYYY")},expandedRowRender:function(e){return i.a.createElement("ul",{style:{margin:0}},i.a.createElement("li",null,"Mã hàng: ",e.ma_hang,". Tên hàng: ",e.ten_hang,". Phân loại: ",e.phan_loai,". Nhà cung cấp: ",e.nha_cung_cap),i.a.createElement("li",null,"Đã thanh toán: ",h.e.format(e.da_thanh_toan),". Ngày thanh toán: ",e.ngay_thanh_toan),i.a.createElement("li",null,"Ghi chú: ",e.ghi_chu),i.a.createElement("li",null,"Người tạo: ",e.username))},setFormValues:c,renderFooter:function(e){if(!_.isEmpty(e)){var t=e.reduce((function(e,t){return{thanh_tien:e.thanh_tien+t.thanh_tien}}));return"Tổng tiền: "+h.e.format(t.thanh_tien)}}})}));t.default=b}}]);