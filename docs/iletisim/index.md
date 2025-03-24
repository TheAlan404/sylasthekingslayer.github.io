---
layout: default
title: Contact Us
description: Get in touch with our team. We're here to help with your questions and feedback.
---

# Contact Us

Thank you for your interest in reaching out to us. We're here to help answer your questions and address your concerns.

## Get In Touch

<div class="contact-container">
  <div class="contact-methods">
    <div class="contact-method">
      <h3>Email</h3>
      <p><a href="mailto:sylasthekingslayer@proton.me">sylasthekingslayer@proton.me</a></p>
    </div>
    <div class="contact-method">
      <h3>Uygulamalar</h3>
      <p>Telegram: https://t.me/geris3</p>
      <p>X: https://t.me/geris3</p>

    </div>
    </div>
  </div>
</div>

## Send Us a Message

<div class="contact-form">
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="form.name" required>
    </div>
    
    <div class="form-group">
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
      {{ submitting ? 'Sending...' : 'Send Message' }}
    </button>
  </form>
</div>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)

const submitForm = async () => {
  submitting.value = true
  
  // Replace with your actual form submission logic
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form on success
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    alert('Your message has been sent. We will get back to you soon!')
  } catch (error) {
    alert('There was an error sending your message. Please try again.')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact-container {
  margin: 2rem 0;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-method {
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.contact-method h3 {
  margin-top: 0;
  font-size: 1.2rem;
}

.contact-form {
  max-width: 600px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.submit-button {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>