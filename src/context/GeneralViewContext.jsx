import { createContext , useState , useContext} from "react";

export const GeneralViewContext = createContext()

export const GeneralViewProvider = ({ children }) => {
    const [ generalViewContextValue , setGeneralViewContextValue ] = useState({
        PrimaryContainer01: "https://rickandmortyapi.com/api/character/?page=",
        SecondaryContainer01: "https://rickandmortyapi.com/api/episode/?page="
    })

    return (
        <GeneralViewContext.Provider value={{generalViewContextValue,setGeneralViewContextValue}}>
            {children}
        </GeneralViewContext.Provider>
    )
}

export const useGeneralViewContext = () => {
    const context = useContext(GeneralViewContext)
    if(context === undefined){
        throw new Error('useGeneralViewContext must be used within a GeneralViewProvider')
    }
    return context
}