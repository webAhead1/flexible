<script>
</script>

<template>
    <header>
        <p>Contact Us</p>
    </header>
    <body>
        <div class="contact-card">
            <div class="contact-name-label">Name</div>
            <input v-model="text" class="name-input"/> <br />
            <div class="contact-email-label">Email</div>
            <input v-model="text" class="email-input" /> <br />
            <div class="contact-message-label">Tell us how we can help</div>
            <textarea v-model="text" class="message-input" /> <br />
            <button class="submit-button">Submit</button>
        </div>
    </body>
</template>