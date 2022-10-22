<template>
  <body>
    <div class="contact-container">
      <div class="contact-card">
        <div class="card-title bg-[#F1E8E2]">Contact Us</div>
        <div class="card-body">
          <div class="contact-name-label">Name</div>
          <input v-model="name" class="name-input" :class="nameIsEmpty" />
          <br />
          <div class="contact-email-label">Email</div>
          <input v-model="email" class="email-input" :class="emailIsEmpty" />
          <br />
          <div class="contact-message-label">Tell us how we can help</div>
          <textarea
            v-model="message"
            class="message-input"
            :class="messageIsEmpty"
          />
          <br />
          <button
            @click="openModal()"
            data-modal-target="#modal"
            class="submit-button"
          >
            Submit
          </button>
        </div>
      </div>
      <div class="modal" id="modal">
        <div class="modal-text">
          We got your request and we'll get back to you as soon as possible.
        </div>
        <div data-close-button class="ok-button-container">
          <button @click="closeModal()" class="ok-button">Ok</button>
        </div>
      </div>
      <div id="overlay"></div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      modal: document.querySelector('.modal'),
      overlay: document.getElementById('overlay'),
      nameIsEmpty: '',
      emailIsEmpty: '',
      messageIsEmpty: '',
    };
  },
  methods: {
    openModal: function () {
      console.log({
        name: this.name,
        email: this.email,
        message: this.message,
      });
      if (!this.name || !this.email || !this.message) {
        if (!this.name) {
          this.nameIsEmpty = 'errorEmpty';
        } else {
          this.nameIsEmpty = 'notEmpty';
        }
        if (!this.email) {
          this.emailIsEmpty = 'errorEmpty';
        } else {
          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
            this.emailIsEmpty = 'notEmpty';
          else this.emailIsEmpty = 'errorEmpty';
        }
        if (!this.message) {
          this.messageIsEmpty = 'errorEmpty';
        } else {
          this.messageIsEmpty = 'notEmpty';
        }
        alert('You must fill out all the boxes');
      } else {
        this.nameIsEmpty = 'notEmpty';
        this.emailIsEmpty = 'notEmpty';
        this.messageIsEmpty = 'notEmpty';

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          modal.classList.add('active');
          overlay.classList.add('active');
        } else {
          alert('You need to enter a valid email address');
          this.emailIsEmpty = 'errorEmpty';
        }
      }
    },
    closeModal: function () {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    },
  },
};
</script>
