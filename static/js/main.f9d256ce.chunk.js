(this["webpackJsonpstudent-portal"]=this["webpackJsonpstudent-portal"]||[]).push([[0],{61:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),l=a(9),s=a(16),c=a(7),m=a(6),d=a(29),u=a(80),p=a(81),f=a(42),h=function(e){var t=Object(n.useState)(b.nord8),a=Object(c.a)(t,2),o=a[0],i=a[1];return r.a.createElement(f.a,{style:{backgroundColor:o,border:"none"},className:e.className,onMouseOver:function(){return i("#6fb2c6")},onMouseOut:function(){return i(b.nord8)},onClick:e.onClick},e.children)},b={nord0:"#2E3440",nord1:"#3B4252",nord2:"#434C5E",nord3:"#4C566A",nord4:"#D8DEE9",nord5:"#E5E9F0",nord6:"#ECEFF4",nord7:"#8FBCBB",nord8:"#88C0D0",nord9:"#81A1C1",nord10:"#5E81AC",nord11:"#BF616A",nord12:"#D08770",nord13:"#EBCB8B",nord14:"#A3BE8C",nord15:"#B48EAD"},E=function(e){var t=e.icon,a=e.link,o={color:b.nord6},i={color:b.nord8},l={backgroundColor:"#353b49",color:b.nord8},m=Object(n.useState)(o),u=Object(c.a)(m,2),p=u[0],f=u[1],h=a.toLowerCase().replace(/\s/g,"");return"home"==h&&(h="/"),r.a.createElement(d.b,{className:"py-2 pl-3 text-decoration-none",exact:!0,to:h,style:Object(s.a)(Object(s.a)({},p),{transition:"all .15s"}),activeStyle:l,onMouseOver:function(){return f(i)},onMouseOut:function(){return f(o)}},r.a.createElement("div",{className:"d-inline mx-3 my-auto py-0"},t),a)},g=function(e){var t=Object(n.useState)(!0),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)({}),m=Object(c.a)(l,2),p=m[0],f=m[1],h=Object(n.useState)({}),g=Object(c.a)(h,2),y=g[0],v=g[1],w=Object(s.a)({minWidth:"15.5rem",maxWidth:"15.5rem",minHeight:"100vh",backgroundColor:b.nord1,boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.1)",transitionDuration:".4s",fontSize:".9rem"},p),N=Object(s.a)({width:"calc(100% - 15.5rem)",backgroundColor:b.nord6,transition:"all .4s"},y),k=e.data,x=[];for(var O in k.sections){x.push(r.a.createElement("p",{className:"small text-uppercase font-weight-bold pb-3 pt-4 mb-0",style:{color:b.nord4,paddingLeft:"2rem"}},O));var C=k.sections[O];for(var j in C.links){var A=C.links[j],S=r.a.createElement(C.icons[j]);x.push(r.a.createElement(E,{link:A,icon:S}))}}return r.a.createElement("div",{className:"d-flex"},r.a.createElement(d.a,null,r.a.createElement("div",{style:w},r.a.createElement("h5",{className:"pt-4 text-center",style:{color:b.nord4}},k.title),r.a.createElement(u.a,{className:"flex-column"},x)),r.a.createElement("div",{style:N},r.a.cloneElement(e.children[0],{onClick:function(){return o?(f({marginLeft:"-15.5rem"}),v({width:"100%",margin:"0"})):(f({}),v({})),void i(!o)}}),e.children[1])))},y=function(e){var t={cursor:"pointer"},a=Object(n.useState)({color:b.nord3}),o=Object(c.a)(a,2),i=o[0],l=o[1];return e.href?r.a.createElement(d.b,{className:"text-decoration-none",exact:!0,to:e.href,style:Object(s.a)(Object(s.a)({},i),t),activeStyle:{color:b.nord8},onMouseOver:function(){return l({color:b.nord2})},onMouseOut:function(){return l({color:b.nord3})}},e.children):r.a.createElement("div",{className:"text-decoration-none",style:Object(s.a)(Object(s.a)({},i),t),onMouseOver:function(){return l({color:b.nord2})},onMouseOut:function(){return l({color:b.nord3})}},e.children)},v=function(e){return r.a.createElement(p.a,{expand:"lg",className:"rounded bg-white shadow-sm px-4 py-2 mt-3 mx-4",style:{color:b.nord3}},r.a.createElement(y,null,r.a.createElement(m.a,{className:"ml-1",onClick:function(){return e.onClick()}})),r.a.createElement(p.a.Brand,{className:"mx-auto",style:{color:b.nord3}},"Federal Fellows | Global Fellows in Washington, D.C."),r.a.createElement(u.a,{className:"mr-1",style:{fontSize:"1.2rem"}},r.a.createElement(y,{href:"/profile"},r.a.createElement(m.r,{className:"mr-3",style:{cursor:"pointer"}})),r.a.createElement(y,null,r.a.createElement(m.g,null))))},w=function(e){return r.a.createElement(g,{data:e.data},r.a.createElement(v,null),e.children)},N={title:"Menu",sections:{Main:{icons:[m.j,m.l,m.e],links:["Home","Syllabus","Checklist"]},Resources:{icons:[m.d,m.c,m.o],links:["Events","Internships","Office Contact"]},Help:{icons:[m.b,m.i,m.h],links:["Student Handbook","Helpful Documents","Email Archive"]}}},k=a(75),x=a(76),O=a(82),C=a(51),j=function(e){return e.slice(-2)+"/"+e.slice(5,7)+"/"+e.slice(0,4)},A=function(e){return e.slice(0,2)>12?e.slice(0,2)-12+e.slice(2,5)+"pm":e.slice(0,5)+"am"},S=function(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l={position:"absolute",minHeight:250,minWidth:250,backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transition:"all .15s",cursor:"pointer",transform:e.back?"rotateY(180deg)":""};return r.a.createElement(O.a,{className:"py-2 mb-4 mx-4 border-0 rounded shadow-sm "+o,style:l,onClick:e.onClick,onMouseOver:function(){return i("shadow")},onMouseOut:function(){return i("")}},r.a.createElement(O.a.Body,null,e.children))},M=function(e){return r.a.createElement(O.a,{className:"py-2 mb-4 mx-4 border-0 rounded",style:{visibility:"hidden",minWidth:250,minHeight:300}},r.a.createElement(O.a.Body,null,e.children))},F=function(e){var t=e.name,a=e.date,o=e.startTime,i=e.endTime,l=e.location,s=e.description,d=e.rsvp,u=Object(n.useState)(!0),p=Object(c.a)(u,2),f=p[0],h=p[1],E=Object(n.useState)(""),g=Object(c.a)(E,2),y=g[0],v=g[1],w=Object(n.useState)({color:b.nord8}),N=Object(c.a)(w,2),k=N[0],x=N[1];t=t.split(" ").length>6?t.split(" ").splice(0,6).join(" "):t;var O,F=r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-center",style:{fontSize:"3rem"}},r.a.createElement(m.s,null)),r.a.createElement("h5",{className:"text-center my-3 mx-3"},t),r.a.createElement("p",{className:"m-1"},r.a.createElement("b",{className:"mr-3"},"Date: "),j(a)),r.a.createElement("p",{className:"m-1"},r.a.createElement("b",{className:"mr-3"},"Time: "),A(o)+" - "+A(i)),r.a.createElement("div",{className:"mt-3 text-center small"},l)),D=r.a.createElement("div",null,r.a.createElement("p",{className:"m-0"},r.a.createElement("b",{className:"mr-3"},"Description: ")),r.a.createElement("p",{className:"small text-center mx-1 mt-2"},s),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center small mt-2"},r.a.createElement("a",{className:"text-decoration-none",style:k,href:d,target:"_blank",onMouseOver:function(){return x({color:"#5580ab"})},onMouseOut:function(){return x({color:b.nord9})}},"RSVP"))),I=Object(n.useState)(F),B=Object(c.a)(I,2),T=B[0],H=B[1],P={position:"relative",transition:"transform .8s",transformStyle:"preserve-3d",transform:y},_=function(){f?(v("rotateY(-180deg)"),H(D)):(v("rotateY(0deg)"),H(F)),h(!f)};return r.a.createElement(C.a,{md:"4",style:{perspective:1e3}},r.a.createElement("div",{style:P},r.a.createElement(S,{onClick:_},r.a.createElement("div",{className:"d-flex justify-content-center",style:{fontSize:"3rem"}},(O=(O=t).toLowerCase()).includes("internship")?r.a.createElement(m.c,null):O.includes("information")||O.includes("info")?r.a.createElement(m.k,null):O.includes("workshop")?r.a.createElement(m.s,null):r.a.createElement(m.q,null)),r.a.createElement("h5",{className:"text-center my-3 mx-3"},t),r.a.createElement("p",{className:"m-1"},r.a.createElement("b",{className:"mr-3"},"Date: "),j(a)),r.a.createElement("p",{className:"m-1"},r.a.createElement("b",{className:"mr-3"},"Time: "),A(o)+" - "+A(i)),r.a.createElement("div",{className:"mt-3 text-center small"},l)),r.a.createElement(S,{onClick:_,back:!0},r.a.createElement("p",{className:"m-0"},r.a.createElement("b",{className:"mr-3"},"Description: ")),r.a.createElement("p",{className:"small text-center mx-1 mt-2"},s),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center small mt-2"},r.a.createElement("a",{className:"text-decoration-none",style:k,href:d,target:"_blank",onMouseOver:function(){return x({color:"#5580ab"})},onMouseOut:function(){return x({color:b.nord9})}},"RSVP"))),r.a.createElement(M,null,T)))},D=a(52),I=a(53),B=a(60),T=a(59),H=a(78),P=function(e){Object(B.a)(a,e);var t=Object(T.a)(a);function a(){var e;return Object(D.a)(this,a),(e=t.call(this)).state={showModal:!1},e}return Object(I.a)(a,[{key:"componentDidMount",value:function(){localStorage.alreadyVisited?this.setState({showModal:!1}):(localStorage.alreadyVisited=!0,this.setState({showModal:!0}))}},{key:"render",value:function(){var e=this;return r.a.createElement(H.a,{size:"lg",show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}},r.a.createElement("div",{className:"p-4"},r.a.createElement(H.a.Header,{className:"pb-2 border-0",closeButton:!0},r.a.createElement("h5",{className:"font-weight-bold"},"Welcome to my Student Portal!")),r.a.createElement(H.a.Body,{className:"pt-2 pb-3"},r.a.createElement("p",{className:"pl-4 pr-5"},"This is a demo of the FGSM Student Portal Project. Many of features available in the real portal are not present in this demo."),r.a.createElement("p",{className:"pt-2"},r.a.createElement("b",null,"Active Sections: "),r.a.createElement("br",null),r.a.createElement("ul",{className:"my-2"},r.a.createElement("li",{className:"my-1"},"Home"),r.a.createElement("li",{className:"my-1"},"Events"),r.a.createElement("li",{className:"my-1"},"Internships"))),r.a.createElement("p",{className:"pt-2"},r.a.createElement("b",null,"Additional Notes: "),r.a.createElement("br",null),r.a.createElement("ul",{className:"my-2"},r.a.createElement("li",{className:"my-1"},"Click on ",r.a.createElement("em",null,"Event Cards")," for more details"),r.a.createElement("li",{className:"my-1"},"Click on the ",r.a.createElement(m.k,{className:"mx-1",style:{color:b.nord9}})," to reveal more information about ",r.a.createElement("em",null,"Internship Offerings")))))))}}]),a}(r.a.Component),_=[{name:"Congressional Internship Tips",date:"2018-11-15",start_time:"19:00:00:000000",end_time:"20:00:00:000000",location:"Federal and Global Fellows Office, 2407 Marie Mount Hall",description:"The Federal and Global Fellows office is hosting a Congressional internship tips workshop. Program alumni will be presenting on applying and how to succeed at internships at the Capitol Hill based on their personal experiences.",attendance_link:""},{name:"Workshop: Managing Your LinkedIn Profile",date:"2018-11-14",start_time:"11:00:00:000000",end_time:"12:00:00:000000",location:"Federal and Global Fellows Office, 2407 Marie Mount Hall",description:"In today\u2019s ultra-connected world, having a stand-out LinkedIn profile is critical to finding a job post-graduation. Not only is LinkedIn a great place to find job opportunities, but it is your resume for the world to see.",attendance_link:""},{name:"Memo Writing Workshop",date:"2018-11-13",start_time:"11:00:00:000000",end_time:"12:00:00:000000",location:"Federal and Global Fellows Office, 2407 Marie Mount Hall",description:'Do you want to hone your writing skills and learn new tips and tricks? Do you want to learn the differences between academic and professional writing? Are you completely lost and just want someone to explain what a "memorandum" even is?',attendance_link:""},{name:"Department of State Info Session",date:"2018-10-17",start_time:"12:00:00:000000",end_time:"13:00:00:000000",location:"Federal and Global Fellows Office, 2407 Marie Mount Hall",description:"The Federal and Global Semester has scheduled Ms. Elise Kleinwaks, a senior U.S. Department of State official with extensive experience to come to provide a presentation on career options with the department and talk on internship and other student programs.",attendance_link:""},{name:"TA Meeting",date:"2016-09-15",start_time:"09:00:00:000000",end_time:"12:00:00:000000",location:"Federal and Global Fellows Office, 2407 Marie Mount Hall",description:"This is a networking event for the TA's to meet each other and exchange ideas for how to go about TAing the classes.",attendance_link:""}],W=function(){for(var e=[],t=0;t<3;t++){if(_[t]){var a=_[t];e.push(r.a.createElement(F,{name:a.name,date:a.date,startTime:a.start_time,endTime:a.end_time,location:a.location,description:a.description,rsvp:a.attendance_link}))}return r.a.createElement(k.a,null,e)}},L=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{fluid:!0,className:"mt-4",style:{color:b.nord3}},r.a.createElement(O.a,{className:"mb-4 mx-4 border-0 shadow-sm rounded"},r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,"Welcome to the Student Portal!"),r.a.createElement(O.a.Text,null,"Alerts will be posted here for events and deadlines"))),r.a.createElement(O.a,{className:"mb-5 mx-4 border-0 shadow-sm rounded"},r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,{className:"mb-3"},"Quick Links"),r.a.createElement(h,{className:"mx-3"},"Academic Showcase Posters"),r.a.createElement(h,{className:"mx-3"},"COVID-19 Email Archive"))),r.a.createElement("h5",{className:"text-center font-weight-bold pb-4"},"Upcoming Events"),r.a.createElement(W,null)),r.a.createElement(P,null))},z=a(79),q=a(77),G=a(58),R=function(){var e=_.map((function(e){return r.a.createElement(F,{name:e.name,date:e.date,startTime:e.start_time,endTime:e.end_time,location:e.location,description:e.description,rsvp:e.attendance_link})})),t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1];return e=e.filter((function(e){return e.props.name.includes(o)||e.props.name.toLowerCase().includes(o)||e.props.location.includes(o)||e.props.location.toLowerCase().includes(o)})),r.a.createElement(x.a,{fluid:!0,className:"mt-5",style:{color:b.nord3}},r.a.createElement("h5",{className:"text-center font-weight-bold"},"Events"),r.a.createElement(k.a,{className:"mx-5 py-4"},r.a.createElement(C.a,{className:"mx-auto"},r.a.createElement(z.a,{className:"p-1 mb-4 bg-white rounded-pill shadow-sm"},r.a.createElement(q.a,{className:"border-0"},r.a.createElement(q.a.Prepend,null,r.a.createElement("div",{className:"py-1 my-auto px-3"},r.a.createElement(m.p,{color:b.nord8}))),r.a.createElement(G.a,{placeholder:"Find an event",className:"border-0",style:{backgroundColor:"unset"},onChange:function(e){return i(e.target.value)}}))))),r.a.createElement(k.a,null,e))},V=function(e){return e.children&&r.a.createElement("div",{className:"d-flex align-items-center my-2"},r.a.createElement("div",{className:"mx-3",style:{color:b.nord9}},r.a.createElement(e.icon)),e.children)},Y=function(e){var t=e.text,a=e.content;return a&&r.a.createElement("div",{className:"d-flex flex-column my-1"},r.a.createElement("b",null,t),r.a.createElement("small",null,a))},U=function(e){var t=e.tags;if(!t)return!1;var a=t.map((function(e){return r.a.createElement("div",{className:"mx-1 badge text-white",style:{backgroundColor:b.nord9}},e)}));return r.a.createElement("div",{className:"d-flex mr-3 mt-1 justify-content-end"},a.slice(0,6))},J=function(e){return e?e.split("<br />").map((function(e){return r.a.createElement("p",null,e)})):e},Q=function(e){var t=e.name,a=e.office,o=e.location,i=e.season,l=e.description,d=e.relatedFields,u=e.qualifications,p=e.apply,f=e.website,h=e.additionalInfo,E=e.contact,g=Object(n.useState)({color:b.nord9}),y=Object(c.a)(g,2),v=y[0],w=y[1],N=Object(n.useState)(!1),k=Object(c.a)(N,2),x=k[0],C=k[1],j=d&&d.split(","),A=l&&l.split(" ").length>80?l.split(" ").splice(0,80).join(" ").concat("..."):l;return A=J(A),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:"position-relative border-0 rounded shadow-sm my-5 mx-3 p-2"},r.a.createElement(O.a.Body,null,r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("h5",{className:"font-weight-bold"},t),r.a.createElement("div",{className:"flex-grow-1 d-flex justify-content-end mr-3"},r.a.createElement(m.k,{size:18,style:Object(s.a)(Object(s.a)({},v),{},{cursor:"pointer"}),onMouseOver:function(){return w({color:b.nord10})},onMouseOut:function(){return w({color:b.nord9})},onClick:function(){return C(!0)}}))),r.a.createElement("em",null,a),r.a.createElement("div",{className:"my-4"},r.a.createElement("div",null,r.a.createElement(V,{icon:m.f},i),r.a.createElement(V,{icon:m.m},o)),r.a.createElement("div",{className:"mt-4"},A)),r.a.createElement(U,{tags:j}))),r.a.createElement(H.a,{centered:!0,size:"lg",show:x,onHide:function(){return C(!1)}},r.a.createElement("div",{className:"p-4"},r.a.createElement(H.a.Header,{className:"pb-2 border-0",closeButton:!0},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("h5",{className:"font-weight-bold"},t),r.a.createElement("em",null,a))),r.a.createElement(H.a.Body,{className:"pt-2 pb-3"},r.a.createElement("div",null,r.a.createElement(V,{icon:m.f},i),r.a.createElement(V,{icon:m.m},o),r.a.createElement(V,{icon:m.n},E)),r.a.createElement("div",{className:"mt-4"},r.a.createElement(Y,{text:"Description:",content:J(l)}),r.a.createElement(Y,{text:"Qualifications:",content:J(u)}),r.a.createElement(Y,{text:"How to Apply:",content:p}),r.a.createElement("small",null,r.a.createElement("a",{href:f},f)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Y,{text:"Additional Info:",content:h}))))))},K=[{name:"Concerned Black Men of America",office:"Non-Profit Accounting",location:"1313 L Street, NW, Washington DC 20005",season:"Fall, Spring, or Summer",description:"The Non-Profit Finance and Accounting Intern will assist in performing accounts receivable, accounts payable, financial reporting, and will help prepare for the annual audit. Assist with processing mail, bookkeeping, data entry and help improve finance and accounting procedures by drafting an accounting policy and procedures manual. Work closely with the Controller on income processing and related receivable issues. Assist the Controller with weekly preparation and printing of vendor checks. Help the Finance Department in bank reconciliation. Assist with monthly cash flow and with budget management preparation. Additional responsibilities with ad-hoc projects.  Learning reimbursement systems and assisting with revenue processing  Assisting Accountants with financial analysis of actual projected expenses  Assisting with account payables and receivables  Assisting with audit preparation.",relatedFields:"Writing, Research, Finance, Accounting",qualifications:"Major Responsibilities: The Non-Profit Finance and Accounting Intern will assist in performing accounts receivable, accounts payable, financial reporting, and will help prepare for the annual audit. Assist with processing mail, bookkeeping, data entry and help improve finance and accounting procedures by drafting an accounting policy and procedures manual. Work closely with the Controller on income processing and related receivable issues. Assist the Controller with weekly preparation and printing of vendor checks. Help the Finance Department in bank reconciliation. Assist with monthly cash flow and with budget management preparation. Additional responsibilities with ad-hoc projects. \uf0b7 Learning reimbursement systems and assisting with revenue processing \uf0b7 Assisting Accountants with financial analysis of actual projected expenses \uf0b7 Assisting with account payables and receivables \uf0b7 Assisting with audit preparation<br /><br />Qualifications: <br />- Coursework in Accounting, Finance, or Business Administration <br />- Accounting or Business Administration students encouraged to apply<br />- Desire to learn about non-profit media arts administration",apply:"Please provide a resume, cover letter and references. ",website:"www.cbmnational.org",additionalInfo:"Interns are required to fulfill a Performance Evaluation System. Along with supervisors, clear objectives are set and a performance evaluation is done at the end of the period allowing all interns to articulate accomplishments. Interns should view the program as an opportunity to observe and learn. Introduce yourself to your co-workers and share your aspirations with them. Participate in activities outside the office. Create friendly relationships during the internship. Interns are not expected to know everything. Try to understand how your actions have an impact within the macro view of the organization. Apply the theories you\u2019ve learned at university. Your input can help improve processes and create change. Ask yourself how you can help and improve the work in your department. You can make a difference. Give and ask for feedback and contribute.",contact:"Terence Clegg, Director of Prevention Services, tclegg@cbmnational.org"},{name:"Embassy of Bangladesh",office:"Cultural Office",location:"3510 International Dr. NW, Washington, DC 20008",season:null,description:"A student research project intern will be responsible for collecting declassified documents about Bangladesh from U.S. Library of Congress and other U.S. sources to compile and organize information related to U.S. foreign policy and its consequences towards Bangladesh during 1971 War of Liberation. Responsibilities include collecting data, selecting, scanning, organizing, presenting, and writing about relevant information for this major project at the Embassy.",relatedFields:"Research, Writing, Diplomacy, Communication, Communication",qualifications:"Must be organized, eager to learn, possess strong written and oral communication skills, and able to work independently. Bangladeshi citizenship or Bengali language proficiency not required.",apply:"Email Jay Arasan (jarasan@umd.edu)",website:"",additionalInfo:null,contact:null},{name:"Ethiopian Community Development Council, Inc.",office:"CARI",location:"901 S. Highland St. Arlington VA, 22204",season:"Spring",description:"The Communications Intern is responsible for supporting external communication and engagement activities for ECDC\u2019s National Conference, including the creation and dissemination of a set of public relations materials through multiple mediums. <br /><br />1. Create new public relations and outreach materials, including fact sheets, press kits, PowerPoint presentations, and other documents. 2. Research sponsorship opportunities, and submit and follow up with sponsorship requests. 3. Follow up with invited speakers and panelists, confirming participation. <br />4. Conduct market research and outreach to potential conference attendees and vendors. <br />5. Assist in the planning and implementation of advocacy day, including contacting congressional offices to set up meetings. <br />",relatedFields:"Community Development, Refugees, Aid, Immigrants, Africa",qualifications:"Sophomore-level standing at college or university. Focus: communications, marketing, media, graphic design, and/or related field.  Interest in domestic refugee resettlement and/or refugee and immigration policy issues. <br /><br />Competencies:<br />\u2022\tExcellent written and verbal communication and organizational skills. <br />\u2022\tHighly proficient with Microsoft Office Suite, including Publisher. Other presentation design software and website skills are a plus.  <br />\u2022\tExperience with multimedia platforms.  <br />\u2022\tAbility to conduct \u2018cold calls\u2019 and \u2018cold emails\u2019 <br />\u2022\tAbility to plan and manage work to meet deadlines. <br />\u2022\tAbility to relate professionally to and collaborate with diverse individuals in a multicultural environment.  <br />\u2022\tAbility to adjust to changing work tasks and priorities.<br />",apply:"To Apply Please submit, by mail, fax, or e-mail (1) a cover letter; (2) a r\xe9sum\xe9; and (3) a short presentation sample that includes text, and graphics and/or audio (1-2 pages) by December 8, 2017, to: Solace Duncan Ethiopian Community Development Council, Inc. 901 South Highland Street Arlington, VA  22206 Fax: (703) 685-0529 E-mail: sduncan@ecdcus.org Please specify the internship title in the email subject line.",website:"https://www.ecdcus.org/wp-content/uploads/Communications-Internship.pdf https://www.ecdcus.org/get-involved/intern-for-us/",additionalInfo:"They do provide a travel stipend!",contact:"Fax: (703) 685-0529  E-mail: sduncan@ecdcus.org "}],X=function(){var e=K.map((function(e){return r.a.createElement(Q,{name:e.name,office:e.office,location:e.location,season:e.season,description:e.description,relatedFields:e.relatedFields,qualifications:e.qualifications,apply:e.apply,website:e.website,additionalInfo:e.additionalInfo,contact:e.contact})})),t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l=function(e){return e&&(e.includes(o)||e.toLowerCase().includes(o))};return e=e.filter((function(e){return l(e.props.name)||l(e.props.office)||l(e.props.location)||l(e.props.season)||l(e.props.description)||l(e.props.relatedFields)})),r.a.createElement(x.a,{fluid:!0,className:"mt-5",style:{color:b.nord3}},r.a.createElement("h5",{className:"text-center font-weight-bold"},"Internships"),r.a.createElement(k.a,{className:"mx-5 pt-4"},r.a.createElement(C.a,{className:"mx-auto"},r.a.createElement(z.a,{className:"p-1 mb-4 bg-white rounded-pill shadow-sm"},r.a.createElement(q.a,{className:"border-0"},r.a.createElement(q.a.Prepend,null,r.a.createElement("div",{className:"py-1 my-auto px-3"},r.a.createElement(m.p,{color:b.nord8}))),r.a.createElement(G.a,{placeholder:"Search internships",className:"border-0",style:{backgroundColor:"unset"},onChange:function(e){return i(e.target.value)}}))))),r.a.createElement(C.a,null,e))},Z=function(){return r.a.createElement(w,{data:N},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:L}),r.a.createElement(l.a,{path:"/events",exact:!0,component:R}),r.a.createElement(l.a,{path:"/internships",exact:!0,component:X})))};a(72);i.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f9d256ce.chunk.js.map