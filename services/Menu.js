import API from './API.js'

export const loadData = async () => {
    const data = await API.fetchMenu()
}