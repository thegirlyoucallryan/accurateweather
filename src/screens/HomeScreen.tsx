import { InformationPanel } from "../components/InformationPanel"
import { Searchbar } from "../components/Searchbar"
import { UnitToggle } from "../components/UnitToggle"

export const Home: React.FC = () => {
    return (
        <div className="p-20 flex flex-col justify-between lg:mx-60 md:mx-30 sm:mx-10 h-full">
            <div>
                <Searchbar />
                <InformationPanel />
            </div>
            <UnitToggle />
        </div>
    )
}