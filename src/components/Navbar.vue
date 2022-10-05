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
:root{
    --active-color: yellow;
    --link-text-color: white;
    --menu-background-color: #1d3557;
    --active-background-color: #132238;
}

html,body {
    margin: 0;
    padding: 0;
    width: 100%;
}

/* ul */
.menu {
    padding: 0;
    margin: 0;
    position: relative;
    background-color: var(--menu-background-color);
    display: inline-flex;
    border-radius: 4px;
    list-style-type: none;
    width: 100%;
}

/* li */
.menu-item {
    display: inline-flex;
}

/* a */
.menu-link { 
    padding: 0.75rem 1rem;
    display: inline-flex;
    align-items: center;
    color: var(--link-text-color);
}
</style>
   