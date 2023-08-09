const API = {
    url: '/data/menu.json',
    fetchMenu: async () => {
        const res = await fetch(API.url)
        const data = await res.json()
        return data
    }
}

export default API