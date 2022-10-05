<script>
export default {

    data(){
        return {
            sliderPosition: 0,
            selectedElementWidth: 0,
            selectedIndex: 0,
            links:[
                {
                id: 1,
                name: "Flexible"
            },
            {
                id: 2,
                name: "Home"
            },
            {
                id: 3,
                name: "About Us"
            },
            {
                id: 4,
                name: "Templates"
            },
            {
                id: 5,
                name: "Questionnaire"
            },
            {
                id: 6,
                name: "Pricing"
            },
            {
                id: 7,
                name: "Contact Us"
            },
            {
                id: 8,
                name: "Sign In"
            },
        ],
        }
    }
}
</script>

<template>
    <ul class="menu">
        <div class="menu-indicator"></div>
        <li class="menu-item" v-for="link in links" :key="link.id">
            <a href="#" class="menu-link">
                <span>{{ link.name }}</span>
            </a>
        </li>
    </ul>
    </template>

<style>
html,body {
    margin: 0;
    padding: 0;
    width: 100%;
}
</style>
   