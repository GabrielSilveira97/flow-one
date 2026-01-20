import { WordRotate } from "@/components/ui/word-rotate"
import { AnimatedShinyButton } from "../common/ShinyButton"

const HeroSection = () => {
    return(
        <section className="bg-background-secondary md:rounded-4xl flex flex-col gap-10 items-center justify-center md:mx-18 my-3 py-10 px-5 md:px-24 border-[0.2px] border-gray-200">
            <h1 className="text-center text-3xl md:text-5xl font-bold text-shadow-md">Tenha <WordRotate className="text-primary-green " words={["Clareza", "Controle", "Previsibilidade"]} />sobre seus numeros.</h1>
            <h2 className="text-lg md:text-2xl text-center">Visualize receitas, custos e indicadores em tempo real.
Transforme dados financeiros em decisões seguras, sem planilhas complexas.</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <AnimatedShinyButton text="Começar agora"/>
                <AnimatedShinyButton text="Experimentar o FlowOne"/>
            </div>
        </section>
    )
}


export default HeroSection