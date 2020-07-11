<template>
    <div class="menu">
        <div class="menu-item" v-if="channels.length == 0">Loading channels ... </div>
        <div class="menu-item" v-for="(channel, index) in channels" 
        v-bind:key="index"
        v-on:click="$emit('chooseChannel', channel)"
        v-bind:class="{ 'menu-item__active': channel == activeChannel}">
            {{ channel.toUpperCase() }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsChannel',
    props: ['channels', 'activeChannel']
}
</script>

<style>
.menu {
    background-color: yellowgreen;
    display: flex;
    text-align: center;
}

.menu-item {
    margin-right: 1em;
    padding: 1em;
    min-width: 5em;
    cursor: pointer;
    font-weight: 500;
}

.menu-item__active {
    background-color: orangered;
}
</style>