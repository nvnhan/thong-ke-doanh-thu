(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{593:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(381),u=a(375),i=a(376),c=a(581);var m=function(){return r.a.createElement("div",null,r.a.createElement(u.a.Item,{name:"ky_hieu",label:"Ký hiệu",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},r.a.createElement(i.a,null)),r.a.createElement(u.a.Item,{name:"mo_ta",label:"Tên tài khoản",rules:[{required:!0,message:"Nhập đầy đủ thông tin!"}]},r.a.createElement(i.a,null)),r.a.createElement(u.a.Item,{name:"so_du_ky_truoc",label:"Số dư ban đầu"},r.a.createElement(c.a,{style:{width:"100%"},min:0,step:1e3,formatter:function(e){return"".concat(e,"₫").replace(/(?=(\d{3})+(?!\d))\B/g,",")},parser:function(e){return e.replace(/\₫\s?|(,*)/g,"")}})),r.a.createElement(u.a.Item,{name:"ghi_chu",label:"Ghi chú"},r.a.createElement(i.a,null)))},o=r.a.memo((function(){var e=[{title:"Ký hiệu",dataIndex:"ky_hieu",optFind:!0},{title:"Tên tài khoản",dataIndex:"mo_ta",optFind:!0},{title:"Số dư ban đầu",dataIndex:"so_du_ky_truoc",render:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{title:"Ngày tạo",dataIndex:"ngay_tao"},{title:"Ghi chú",dataIndex:"ghi_chu",ellipsis:!0}];return r.a.createElement(l.a,{url:"tai-khoan",columns:e,tableSize:{x:600},formTemplate:r.a.createElement(m,null),formInitialValues:{so_du_ky_truoc:0}})}));t.default=o}}]);