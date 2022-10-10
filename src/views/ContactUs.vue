<script setup>
    window.onload = function() {
        const openModalButton = document.querySelector('[data-modal-target]')
        const closeModalButtons = document.querySelectorAll('[data-close-button]')
        const modal = document.querySelector('.modal')
        const overlay = document.getElementById('overlay')
        let nameInput = document.getElementById('name-input').value
        let emailInput = document.getElementById('email-input').value
        let messageInput = document.getElementById('message-input').value

        console.log(nameInput)
        console.log(emailInput)
        console.log(messageInput)

        openModalButton.addEventListener('click', openModal)

        closeModalButtons.forEach(button => {
            button.addEventListener('click',()=> {
                const modal = button.closest('.modal') 
                closeModal (modal)
            })
        })

        function openModal() {
            console.log(nameInput)
            console.log(emailInput)
            console.log(messageInput)
            // if (nameInput != '' && emailInput != '' && messageInput != '') {
                modal.classList.add('active')
                overlay.classList.add('active')
            // }
            // else {
            //     alert("You must fill out all the boxes")
            // }
        }

        function closeModal() {
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
    }
</script>

<template>
    <header>
        <p>Contact Us</p>
    </header>
    <body>
        <div class="contact-card">
            <div class="contact-name-label">Name</div>
            <input id="name-input" class="name-input" /> <br />
            <div class="contact-email-label">Email</div>
            <input id="email-input" class="email-input" /> <br />
            <div class="contact-message-label">Tell us how we can help</div>
            <textarea id="message-input" class="message-input" /> <br />
            <button data-modal-target="#modal" class="submit-button">Submit</button>
        </div>
        <div class="modal" id="modal">
            <div class="modal-header">
                <div class="title">We appreciate your feedback</div>
                <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-text">
                We got your request and we'll get back to you as soon as possible.
            </div>
            <div data-close-button class="ok-button-container">
                <button class="ok-button">Ok</button>
            </div>
        </div>
        <div id="overlay"></div>
    </body>
</template>