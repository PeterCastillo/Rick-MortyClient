import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import { useGeneralViewContext } from "../context/GeneralViewContext"
import { ViewGeneralContainer, ViewPrev } from "../StyleComponents/viewGeneralContainer"

const ViewGeneral = () => {

    const { generalViewContextValue } = useGeneralViewContext()

    const { PrimaryContainer01 , SecondaryContainer01 } = generalViewContextValue

    return (
        <ViewGeneralContainer>
            <PrimaryContainer apiToUse={PrimaryContainer01} />
            <ViewPrev>
                <SecondaryContainer apiToUse={SecondaryContainer01}/>
            </ViewPrev>
        </ViewGeneralContainer>
    )
}

export default ViewGeneral