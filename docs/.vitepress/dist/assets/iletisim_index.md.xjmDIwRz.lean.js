import{_ as l,p as o,c as r,o as u,ae as c,j as e,Z as m,af as b,ag as f,t as h}from"./chunks/framework.CAs8kUtx.js";const v={class:"contact-form"},g={class:"form-group"},x=JSON.parse(`{"title":"Contact Us","description":"Get in touch with our team. We're here to help with your questions and feedback.","frontmatter":{"layout":"default","title":"Contact Us","description":"Get in touch with our team. We're here to help with your questions and feedback."},"headers":[],"relativePath":"iletisim/index.md","filePath":"iletisim/index.md"}`),p={name:"iletisim/index.md"},_=Object.assign(p,{setup(y){const a=o({name:"",email:"",subject:"",message:""}),s=o(!1),i=async()=>{s.value=!0;try{await new Promise(n=>setTimeout(n,1e3)),a.value={name:"",email:"",subject:"",message:""},alert("Your message has been sent. We will get back to you soon!")}catch{alert("There was an error sending your message. Please try again.")}finally{s.value=!1}};return(n,t)=>(u(),r("div",null,[t[2]||(t[2]=c("",5)),e("div",v,[e("form",{onSubmit:m(i,["prevent"])},[e("div",g,[t[1]||(t[1]=e("label",{for:"name"},"Name",-1)),b(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=d=>a.value.name=d),required:""},null,512),[[f,a.value.name]])]),e("pre",null,[e("code",null,`<div class="form-group">
  <label for="email">Email</label>
  <input type="email" id="email" v-model="form.email" required>
</div>

<div class="form-group">
  <label for="subject">Subject</label>
  <input type="text" id="subject" v-model="form.subject" required>
</div>

<div class="form-group">
  <label for="message">Message</label>
  <textarea id="message" v-model="form.message" rows="5" required></textarea>
</div>

<button type="submit" class="submit-button" :disabled="submitting">
  `+h(s.value?"Sending...":"Send Message")+`
</button>
`,1)])],32)])]))}}),S=l(_,[["__scopeId","data-v-d14ba8ef"]]);export{x as __pageData,S as default};
