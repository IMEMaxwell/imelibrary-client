(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{170:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(26),r=n.n(c),s=n(19),i=n(7),b=(n(74),n(14)),l=n(15),h=n(17),j=n(16),d=n(0),u=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(d.jsx)(s.b,{to:"/",className:"navbar-brand",children:"IME Library"}),Object(d.jsx)("div",{className:"collpase navbar-collapse",children:Object(d.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(d.jsx)("li",{className:"navbar-item",children:Object(d.jsx)(s.b,{to:"/createbook",className:"nav-link",children:"Create Book"})})})})]})}}]),n}(o.Component),m=n(18),O=n.n(m),p=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.book.bookname}),Object(d.jsxs)("td",{children:[e.book.qty," / ",e.book.totalqty]}),Object(d.jsx)("td",{children:e.book.borrowedby.join(", ")}),Object(d.jsxs)("td",{children:[Object(d.jsx)(s.b,{to:"/borrow/"+e.book._id,children:"Borrow"})," | ",Object(d.jsx)(s.b,{to:"/return/"+e.book._id,children:"Return"})]})]})},x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).state={books:[]},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://imelibrary.herokuapp.com/books/").then((function(t){e.setState({books:t.data})})).catch((function(e){console.log(e)}))}},{key:"bookList",value:function(){return this.state.books.map((function(e){return Object(d.jsx)(p,{book:e},e._id)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Books"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{className:"thead-light",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Bookname"}),Object(d.jsx)("th",{children:"Qty / Total"}),Object(d.jsx)("th",{children:"Borrowed By"}),Object(d.jsx)("th",{children:"Action"})]})}),Object(d.jsx)("tbody",{children:this.bookList()})]})]})}}]),n}(o.Component),v=n(9),k=n(23),g=n.n(k),y=(n(33),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).onChangeBookname=o.onChangeBookname.bind(Object(v.a)(o)),o.onChangeQty=o.onChangeQty.bind(Object(v.a)(o)),o.onChangeTotalqty=o.onChangeTotalqty.bind(Object(v.a)(o)),o.onChangeDate=o.onChangeDate.bind(Object(v.a)(o)),o.onSubmit=o.onSubmit.bind(Object(v.a)(o)),o.state={bookname:"",qty:0,totalqty:0,date:new Date},o}return Object(l.a)(n,[{key:"onChangeBookname",value:function(e){this.setState({bookname:e.target.value})}},{key:"onChangeQty",value:function(e){this.setState({qty:e.target.value})}},{key:"onChangeTotalqty",value:function(e){this.setState({totalqty:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={bookname:this.state.bookname,qty:this.state.qty,totalqty:this.state.totalqty,date:this.state.date};console.log(t),O.a.post("https://imelibrary.herokuapp.com/books/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Create New Book"}),Object(d.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Bookname: "}),Object(d.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeBookname})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Qty: "}),Object(d.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeQty})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Total Qty: "}),Object(d.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeTotalqty})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Date: "}),Object(d.jsx)("div",{children:Object(d.jsx)(g.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"submit",value:"Create New Book",className:"btn btn-primary"})})]})]})}}]),n}(o.Component)),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).onChangeBookname=o.onChangeBookname.bind(Object(v.a)(o)),o.onChangeBorrowedby=o.onChangeBorrowedby.bind(Object(v.a)(o)),o.onChangeDate=o.onChangeDate.bind(Object(v.a)(o)),o.onSubmit=o.onSubmit.bind(Object(v.a)(o)),o.state={bookname:"",borrowedby:"",date:new Date},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://imelibrary.herokuapp.com/books/"+this.props.match.params.id).then((function(t){e.setState({bookname:t.data.bookname})})).catch((function(e){console.log(e)}))}},{key:"onChangeBookname",value:function(e){this.setState({bookname:e.target.value})}},{key:"onChangeBorrowedby",value:function(e){this.setState({borrowedby:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={bookname:this.state.bookname,borrowedby:this.state.borrowedby,date:this.state.date};console.log(t),O.a.post("https://imelibrary.herokuapp.com/books/borrow/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Borrow Book"}),Object(d.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Bookname: "}),Object(d.jsx)("input",{type:"text",required:!0,readOnly:!0,className:"form-control",value:this.state.bookname,onChange:this.onChangeBookname})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Borrowed By: "}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{required:!0,value:this.state.borrowedby,onChange:this.onChangeBorrowedby,children:[Object(d.jsx)("option",{value:"Maxwell",children:"Maxwell"}),Object(d.jsx)("option",{value:"Hidayah",children:"Hidayah"}),Object(d.jsx)("option",{value:"Eka",children:"Eka"}),Object(d.jsx)("option",{value:"Ng",children:"Ng"}),Object(d.jsx)("option",{value:"Kit Hong",children:"Kit Hong"}),Object(d.jsx)("option",{value:"Yoke Ling",children:"Yoke Ling"}),Object(d.jsx)("option",{value:"Farra",children:"Farra"})]})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Date: "}),Object(d.jsx)("div",{children:Object(d.jsx)(g.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"submit",value:"Borrow Book",className:"btn btn-primary"})})]})]})}}]),n}(o.Component),C=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).onChangeBookname=o.onChangeBookname.bind(Object(v.a)(o)),o.onChangeBorrowedby=o.onChangeBorrowedby.bind(Object(v.a)(o)),o.onChangeDate=o.onChangeDate.bind(Object(v.a)(o)),o.onSubmit=o.onSubmit.bind(Object(v.a)(o)),o.state={bookname:"",borrowedby:"",date:new Date},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://imelibrary.herokuapp.com/books/"+this.props.match.params.id).then((function(t){e.setState({bookname:t.data.bookname})})).catch((function(e){console.log(e)}))}},{key:"onChangeBookname",value:function(e){this.setState({bookname:e.target.value})}},{key:"onChangeBorrowedby",value:function(e){this.setState({borrowedby:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={bookname:this.state.bookname,borrowedby:this.state.borrowedby,date:this.state.date};console.log(t),O.a.post("https://imelibrary.herokuapp.com/books/return/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Return Book"}),Object(d.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Bookname: "}),Object(d.jsx)("input",{type:"text",required:!0,readOnly:!0,className:"form-control",value:this.state.bookname,onChange:this.onChangeBookname})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Borrowed By: "}),Object(d.jsx)("div",{children:Object(d.jsxs)("select",{required:!0,value:this.state.borrowedby,onChange:this.onChangeBorrowedby,children:[Object(d.jsx)("option",{value:"Maxwell",children:"Maxwell"}),Object(d.jsx)("option",{value:"Hidayah",children:"Hidayah"}),Object(d.jsx)("option",{value:"Eka",children:"Eka"}),Object(d.jsx)("option",{value:"Ng",children:"Ng"}),Object(d.jsx)("option",{value:"Kit Hong",children:"Kit Hong"}),Object(d.jsx)("option",{value:"Yoke Ling",children:"Yoke Ling"}),Object(d.jsx)("option",{value:"Farra",children:"Farra"})]})})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Date: "}),Object(d.jsx)("div",{children:Object(d.jsx)(g.a,{selected:this.state.date,onChange:this.onChangeDate})})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"submit",value:"Return Book",className:"btn btn-primary"})})]})]})}}]),n}(o.Component);var w=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{}),Object(d.jsx)("br",{}),Object(d.jsx)(i.a,{path:"/",exact:!0,component:x}),Object(d.jsx)(i.a,{path:"/createbook",component:y}),Object(d.jsx)(i.a,{path:"/borrow/:id",component:f}),Object(d.jsx)(i.a,{path:"/return/:id",component:C})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),B()}},[[170,1,2]]]);
//# sourceMappingURL=main.436157b0.chunk.js.map