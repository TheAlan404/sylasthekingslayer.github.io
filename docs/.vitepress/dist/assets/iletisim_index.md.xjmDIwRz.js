import{_ as l,p as o,c as r,o as u,ae as c,j as e,Z as m,af as b,ag as f,t as h}from"./chunks/framework.CAs8kUtx.js";const v={class:"contact-form"},g={class:"form-group"},x=JSON.parse(`{"title":"Contact Us","description":"Get in touch with our team. We're here to help with your questions and feedback.","frontmatter":{"layout":"default","title":"Contact Us","description":"Get in touch with our team. We're here to help with your questions and feedback."},"headers":[],"relativePath":"iletisim/index.md","filePath":"iletisim/index.md"}`),p={name:"iletisim/index.md"},_=Object.assign(p,{setup(y){const a=o({name:"",email:"",subject:"",message:""}),s=o(!1),i=async()=>{s.value=!0;try{await new Promise(n=>setTimeout(n,1e3)),a.value={name:"",email:"",subject:"",message:""},alert("Your message has been sent. We will get back to you soon!")}catch{alert("There was an error sending your message. Please try again.")}finally{s.value=!1}};return(n,t)=>(u(),r("div",null,[t[2]||(t[2]=c(`<h1 id="contact-us" tabindex="-1" data-v-d14ba8ef>Contact Us <a class="header-anchor" href="#contact-us" aria-label="Permalink to &quot;Contact Us&quot;" data-v-d14ba8ef>​</a></h1><p data-v-d14ba8ef>Thank you for your interest in reaching out to us. We&#39;re here to help answer your questions and address your concerns.</p><h2 id="get-in-touch" tabindex="-1" data-v-d14ba8ef>Get In Touch <a class="header-anchor" href="#get-in-touch" aria-label="Permalink to &quot;Get In Touch&quot;" data-v-d14ba8ef>​</a></h2><div class="contact-container" data-v-d14ba8ef><div class="contact-methods" data-v-d14ba8ef><div class="contact-method" data-v-d14ba8ef><h3 data-v-d14ba8ef>Email</h3><p data-v-d14ba8ef><a href="mailto:hello@example.com" data-v-d14ba8ef>hello@example.com</a></p></div><pre data-v-d14ba8ef><code data-v-d14ba8ef>&lt;div class=&quot;contact-method&quot;&gt;
  &lt;h3&gt;Phone&lt;/h3&gt;
  &lt;p&gt;+1 (555) 123-4567&lt;/p&gt;
&lt;/div&gt;

&lt;div class=&quot;contact-method&quot;&gt;
  &lt;h3&gt;Office&lt;/h3&gt;
  &lt;p&gt;
    123 Main Street&lt;br&gt;
    Suite 456&lt;br&gt;
    City, State 12345&lt;br&gt;
    United States
  &lt;/p&gt;
&lt;/div&gt;
</code></pre></div></div><h2 id="send-us-a-message" tabindex="-1" data-v-d14ba8ef>Send Us a Message <a class="header-anchor" href="#send-us-a-message" aria-label="Permalink to &quot;Send Us a Message&quot;" data-v-d14ba8ef>​</a></h2>`,5)),e("div",v,[e("form",{onSubmit:m(i,["prevent"])},[e("div",g,[t[1]||(t[1]=e("label",{for:"name"},"Name",-1)),b(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=d=>a.value.name=d),required:""},null,512),[[f,a.value.name]])]),e("pre",null,[e("code",null,`<div class="form-group">
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
