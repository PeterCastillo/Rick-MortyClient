import { useState , useRef , useEffect  } from "react"

export const useSlider = (page , setPage,characters , apiToUse) => {

    const [ currentElement , setCurrentElement ] = useState(0)
    const [ lasElement , setLasElement ] = useState(1)
    const ref = useRef(null)

    const getCurrenteWitdh = () => {
        if(ref.current != null){
            const newWidth = ref.current.clientWidth;
            if(newWidth < 500){
                setLasElement(1+currentElement)
            } else if(newWidth > 500 && newWidth<900){
                setLasElement(2+currentElement)
            } else if(newWidth > 900 && newWidth<1225){
                setLasElement(3+currentElement)
            } else if(newWidth > 1225 && newWidth < 1300){
                setLasElement(1+currentElement)
            } else if (newWidth > 1300){
                setLasElement(3+currentElement)
            } 
        }
    }

    const handleNext = () => {
        const quantity = (characters.length-6)
        if(currentElement > quantity){
            setPage(page+1)
        }
        const elementsToShow = lasElement - currentElement
        if(currentElement+elementsToShow>=characters.length){
            setCurrentElement(characters.length-elementsToShow)
            setLasElement(characters.length)
        } else {
            setCurrentElement(currentElement+elementsToShow)
            setLasElement(lasElement+elementsToShow)
        }
    }

    const handlePrev = () => {
        const elementsToShow = lasElement - currentElement
        if(currentElement - elementsToShow  < 0){
            setCurrentElement(0)
            setLasElement(0+elementsToShow)
            return
        } else {
            setCurrentElement(currentElement-elementsToShow)
            setLasElement(lasElement-elementsToShow)
        }
        
    }
    useEffect(() => {
        window.addEventListener("resize",()=>{
            if(ref.current && ref.current.scrollWidth && ref.current.clientWidth){
                getCurrenteWitdh()
              }
        });
    }, [lasElement]);
    
    useEffect(()=>{
        const elementsToShow = lasElement - currentElement
        setCurrentElement(0)
        setLasElement(elementsToShow)
    },[apiToUse])

    return { ref , lasElement , currentElement , handleNext , handlePrev }
}