(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{580:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(379),i=a(511),c=a(375),u=a(376),m=a(575);i.a.Option;function h(){return r.a.createElement("div",null,r.a.createElement(c.a.Item,{name:"loai_phi",label:"Loại phí",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},r.a.createElement(u.a,{disabled:!0})),r.a.createElement(c.a.Item,{name:"muc_phi",label:"Mức phí",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},r.a.createElement(m.a,{style:{width:"100%"},min:1e3,step:1e3,formatter:function(e){return"".concat(e,"₫").replace(/(?=(\d{3})+(?!\d))\B/g,",")},parser:function(e){return e.replace(/\₫\s?|(,*)/g,"")}})),r.a.createElement(c.a.Item,{name:"ghi_chu",label:"Ghi chú"},r.a.createElement(u.a,null)))}var p=r.a.memo((function(){var e=[{title:"Loại phí",dataIndex:"loai_phi",optFind:!0},{title:"Mức phí",dataIndex:"muc_phi",render:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{title:"Ghi chú",dataIndex:"ghi_chu",ellipsis:!0}];return r.a.createElement(l.a,{url:"thue-phi",columns:e,selectable:!1,insertable:!1,deleteable:!1,formTemplate:r.a.createElement(h,null)})}));t.default=p}}]);