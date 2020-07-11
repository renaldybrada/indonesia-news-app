const BASE_URL=  "https://news-scraper.now.sh/"

const NewsScraper = {
    async fetchNewsChannel() {
        const request = await fetch(BASE_URL + 'channels')
        const response = await request.json()
        return response.data
    },

    async fetchChannelHeadline(channel) {
        const request = await fetch(BASE_URL + 'headline/' + channel)
        const response = await request.json()
        return response.data
    },

    async fetchNews(channel, link) {
        const param = "?link=" + link
        const request = await fetch(BASE_URL + 'news/' + channel + param)
        const response = await request.json()
        return response.data
    }
}

export default NewsScraper