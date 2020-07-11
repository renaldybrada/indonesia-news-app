<template>
  <div id="app">
    <h1>News Portal</h1>
    <NewsChannel v-bind:channels="channels"
    v-on:chooseChannel="fetchChannelHeadline"
    v-bind:activeChannel="activeChannel">
    </NewsChannel>
    <MainContent v-bind:headlines="headlines"
    v-on:chooseHeadline="fetchNews"
    v-bind:newsContent="newsContent"
    v-on:closeNewsContent="closeNewsContent">
    </MainContent>
  </div>
</template>

<script>
import NewsChannel from './components/NewsChannel.vue'
import NewsScraper from './services/NewsScraper.js'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',

  components: {
    NewsChannel,
    MainContent
  },

  data: () => {
    return {
      channels: [],
      activeChannel: '',
      headlines: [],
      newsContent: {}
    }
  },

  methods: {
    async fetchChannelHeadline(channel) {
      this.newsContent = {}
      this.headlines = []
      this.activeChannel = channel
      this.headlines = await NewsScraper.fetchChannelHeadline(this.activeChannel)
    },

    async fetchNews(news) {
      this.newsContent = await NewsScraper.fetchNews(news.channel, news.link)
    },

    closeNewsContent() {
      this.newsContent = {}
    }
  },

  mounted: async function() {
    this.channels = await NewsScraper.fetchNewsChannel()
    const randIdx = Math.floor(Math.random() * this.channels.length)
    this.fetchChannelHeadline(this.channels[randIdx])
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
