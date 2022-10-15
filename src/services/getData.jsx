import { useState , useEffect } from 'react';
import { useFetch } from "../hooks/useFetch"

export const getData = ( apiToUse ) => {
    const [ nextPageEnabled, setNextPageEnabled ] = useState('')
    const [ apiPrev , setApiPrev ] = useState(apiToUse)
    const [ page , setPage ] = useState(1)
    const [ characters , setCharacters ] = useState([])
    const { fetchAPI } = useFetch()

    useEffect(()=> {
        if(apiToUse !== apiPrev){
            setApiPrev(apiToUse)
            setPage(1)
            adaptInfo(apiToUse+1)
            setNextPageEnabled('')
            return
        }
        adaptInfo( apiToUse + page )
    }, [ page , apiToUse])
    

    const adaptInfo = async(url) => {
        if(nextPageEnabled != null){
            const {info , results}= await fetchAPI(url)
            setNextPageEnabled(info.next)
            if(characters.length>1){
                if(Object.keys(results[0]).length!=Object.keys(characters[0]).length){
                    setCharacters(results)
                    return
                } 
            }
            setCharacters(characters.concat(results))
        }
    }

    return { characters , page , setPage }
}