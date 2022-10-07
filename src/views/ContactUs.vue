<script>
</script>

<template>
    <header>
        <p>Contact Us</p>
    </header>
    <body>
        <div class="contact-card">
            Name <br />
            <input v-model="text" class="name-input"/> <br />
            Email <br />
            <input v-model="text" class="email-input" /> <br />
            Tell us how we can help <br />
            <input v-model="text" class="message-input" /> <br />
            <button class="submit-button">Submit</button>
        </div>
    </body>
</template>