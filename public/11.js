(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{380:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(578),i=n(378),l=n.n(i);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(e){if(e.value&&"string"==typeof e.value){var t=l()(e.value,e.format);return r.a.createElement(o.a,h({},e,{value:t}))}return r.a.createElement(o.a,e)}},382:function(e,t,n){"use strict";var a={placeholder:"Chọn thời gian"};function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={lang:r({placeholder:"Chọn thời điểm",rangePlaceholder:["Ngày bắt đầu","Ngày kết thúc"]},{locale:"vi_VN",today:"Hôm nay",now:"Bây giờ",backToToday:"Trở về hôm nay",ok:"Ok",clear:"Xóa",month:"Tháng",year:"Năm",timeSelect:"Chọn thời gian",dateSelect:"Chọn ngày",weekSelect:"Chọn tuần",monthSelect:"Chọn tháng",yearSelect:"Chọn năm",decadeSelect:"Chọn thập kỷ",yearFormat:"YYYY",dateFormat:"D/M/YYYY",dayFormat:"D",dateTimeFormat:"D/M/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Tháng trước (PageUp)",nextMonth:"Tháng sau (PageDown)",previousYear:"Năm trước (Control + left)",nextYear:"Năm sau (Control + right)",previousDecade:"Thập kỷ trước",nextDecade:"Thập kỷ sau",previousCentury:"Thế kỷ trước",nextCentury:"Thế kỷ sau"}),timePickerLocale:r({},a)};t.a=o},592:function(e,t,n){"use strict";n.r(t);var a=n(378),r=n.n(a),o=n(0),i=n.n(o),l=n(381),h=n(379),c=n(383),u=n(375),m=n(376),d=n(382),g=n(380),s=c.a.Option,f=i.a.memo((function(e){var t=e.taiKhoan||[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a.Item,{name:"ngay_hoan_doi",label:"Ngày tháng",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},i.a.createElement(g.a,{style:{width:"100%"},locale:d.a,format:"DD/MM/YYYY"})),i.a.createElement(u.a.Item,{name:"ngay_thanh_toan_hoan_doi",label:"Thanh toán"},i.a.createElement(g.a,{style:{width:"100%"},locale:d.a,format:"DD/MM/YYYY"})),i.a.createElement(u.a.Item,{name:"id_tai_khoan_tra_hoan_doi",label:"TK trả"},i.a.createElement(c.a,{placeholder:"Chọn tài khoản"},t.map((function(e){return i.a.createElement(s,{value:e.id,key:e.id},e.ky_hieu," - ",e.mo_ta)})))),i.a.createElement(u.a.Item,{name:"ngay_hoan_doi_xong",label:"Hoàn đổi xong"},i.a.createElement(g.a,{style:{width:"100%"},locale:d.a,format:"DD/MM/YYYY"})),i.a.createElement(u.a.Item,{name:"ghi_chu",label:"Ghi chú"},i.a.createElement(m.a,null)))}));function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=i.a.memo((function(e){var t=_(Object(o.useState)([]),2),n=t[0],a=t[1];Object(o.useEffect)((function(){axios.get("/api/tai-khoan").then((function(e){e.data.success&&a(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);var c=[{title:"Ngày tháng",dataIndex:"ngay_hoan_doi",width:120,sorter:function(e,t){return r()(e.ngay_hoan_doi,"DD/MM/YYYY").unix()-r()(t.ngay_hoan_doi,"DD/MM/YYYY").unix()}},{title:"Mã hàng",dataIndex:"ma_hang",optFind:!0,width:140},{title:"Tên hàng",dataIndex:"ten_hang",optFind:!0,width:170},{title:"Số lượng",dataIndex:"so_luong",width:120},{title:"Tổng tiền bán",dataIndex:"thanh_tien_ban",render:function(e){return h.e.format(e)},sorter:function(e,t){return e.thanh_tien_ban-t.thanh_tien_ban},width:120},{title:"Khách hàng",dataIndex:"ma_khach_hang",optFilter:!0,width:120},{title:"TT hoàn đổi",dataIndex:"ngay_thanh_toan_hoan_doi",width:120},{title:"TK trả hoàn đổi",dataIndex:"tai_khoan_tra_hoan_doi",width:120,optFilter:!0},{title:"Hoàn đổi xong",dataIndex:"ngay_hoan_doi xong",width:120},{title:"Ghi chú",dataIndex:"ghi_chu",ellipsis:!0,width:170}];return i.a.createElement(l.a,{url:"hoan-doi",filterBox:!0,insertable:!1,selectable:!1,deleteable:!1,columns:c,tableSize:{x:1200},formTemplate:i.a.createElement(f,{taiKhoan:n}),expandedRowRender:function(e){return i.a.createElement("ul",{style:{margin:0}},i.a.createElement("li",null,"Mã hàng: ",e.ma_hang,". Tên hàng: ",e.ten_hang,". Phân loại: ",e.phan_loai,". Nhà cung cấp: ",e.nha_cung_cap),i.a.createElement("li",null,"Đơn giá mua: ",h.e.format(e.don_gia_mua),". Thành tiền mua: ",h.e.format(e.thanh_tien_mua),". Số lượng:"," ",e.so_luong),i.a.createElement("li",null,"Đơn giá bán: ",h.e.format(e.don_gia_ban),". Thành tiền bán: ",h.e.format(e.thanh_tien_ban),". Lãi:"," ",h.e.format(e.lai)),i.a.createElement("li",null,"Ghi chú: ",e.ghi_chu),i.a.createElement("li",null,"Người tạo: ",e.username))}})}));t.default=p}}]);