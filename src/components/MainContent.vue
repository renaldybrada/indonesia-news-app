<template>
    <div class="main-content">
        <div class="channel-headlines" v-bind:class="{ hidden: newsContent.formated_news != undefined}">
            <span v-if="headlines.length == 0">Loading Headline ...</span>
            <div class="channel-headlines__item" 
            v-for="(headline, index) in headlines.slice(0,5)" 
            v-bind:key="index">
                <img :src="headline.image" :alt="headline.title">
                <h3 v-on:click="$emit('chooseHeadline', headline)">
                    {{ headline.title }}
                </h3>
            </div>
        </div>
        <div class="news-content" v-if="newsContent.formated_news != undefined">
            <div class="news-content__container">
                <h1>{{ newsContent.title }}</h1>
                <img :src="newsContent.image" :alt="newsContent.title"/>
                <p>{{ newsContent.formated_news }}</p>
            </div>
            <button class="back-button" v-on:click="$emit('closeNewsContent')">
                Back
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainContent',
    props: ['headlines', 'newsContent']
}
</script>

<style>
.main-content{
    display: flex;
    padding: 1em;
}

.hidden{
    display: none;
}

.channel-headlines{
    flex-grow: 1;
}

.channel-headlines__item{
    display: flex;
    margin-bottom: 1em;
}

.channel-headlines__item img{
    max-width: 12em;
}

.channel-headlines__item h3{
    margin: 0 1em;
    max-width: 25em;
    cursor: pointer;
}

.news-content{
    flex-grow: 1;
}

.news-content__container{
    max-width: 45em;
    margin-left: 50%;
    transform: translateX(-50%);
}

.news-content__container p{
    word-spacing: .2em;
    line-height: 1.5em;
}

.back-button {
    padding: 1em 2em;
    border: 0;
    border-radius: 5px;
    background-color: #222;
    color:#FFEB2F;
    cursor: pointer;
}

</style>