import ValueCard from "../common/ValueCard"
import { 
  MdDashboard, 
  MdInsights, 
  MdBolt 
} from "react-icons/md"

const cards = [
    {
        title: "Centralização",
        subTitle: "Todos os dados financeiros em um único dashboard.",
        icon: MdDashboard,
        iconColor: "text-purple-300"    
    },
    {
        title: "Análise inteligente",
        subTitle: "Indicadores claros para entender o presente e prever o futuro.",
        icon: MdInsights,
        iconColor: "text-orange-300"   
    },
    {
        title: "Decisão rápida",
        subTitle: "Menos achismo, mais dados para agir com segurança.",
        icon: MdBolt,
        iconColor: "text-green-300"   
    }
]


const ValueSection = () => {
    return(
        <section className="flex flex-col gap-6 items-center justify-center mx-5 md:mx-18 my-5 md:py-20 px-5 md:px-24 ">
            <h1 className="text-center text-3xl md:text-5xl font-semibold text-shadow-xs">Suas decisões financeiras não precisam ser no escuro</h1>
            <h2 className="text-lg md:text-2xl text-center">O FlowOne centraliza seus dados financeiros e transforma números dispersos em insights claros e acionáveis.</h2>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 md:pt-10">
            {cards.map((card, index) => {
                return <ValueCard key={index} cardTitle={card.title} cardSubTitle={card.subTitle} Icon={card.icon} iconColor={card.iconColor} />
            })}
            </div>
        </section>
    )
}


export default ValueSection