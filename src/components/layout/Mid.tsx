import { Button } from "../ui/button"
import { AuroraText } from "../ui/aurora-text"

const MidSection = () => {
    return(
        <section className="bg-black flex flex-col items-center text-center py-26 gap-10">
            <AuroraText className="text-4xl md:text-6xl font-semibold">Seus números, sem complicação</AuroraText>
            <h2 className="text-white text-lg md:text-2xl">Visualize dados financeiros essenciais de forma clara e organizada.</h2>
            <Button className="bg-primary-green hover:bg-primary-green/80 text-black hover:text-white rounded-sm py-7 px-10 text-xl mt-5">Explorar insights</Button>
        </section>
    )
}

export default MidSection