export const useInfiniteSrcoller = (page , setPage) => {

    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
                setPage(page+1)
        }
    }
    
    window.addEventListener("scroll" , handleScroll)
}