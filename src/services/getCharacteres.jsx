import { useState , useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export const getCharacteres = (characteresToget) => {
    const [ characters , setCharacteres ] = useState([])
    const { fetchAPI } = useFetch() 

    useEffect(()=> {
        adaptInfo()
    },[])

    const adaptInfo = async() => {
        const characteres = await characteresToget.map(character=> fetchAPI(character))
        setData(await Promise.all(characteres))
    }

    const setData = (characteres) => {
        setCharacteres(characteres)
    }

    return { characters }
}