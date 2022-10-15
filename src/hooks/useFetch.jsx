export const useFetch = () => {

    const fetchAPI = async(url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return  data
        } catch (error) {
            return "error"
        }
    }
    return { fetchAPI }
}