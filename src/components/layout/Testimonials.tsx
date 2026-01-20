import { MarqueeDemo } from "../common/Marquee"

const TestimonialsSection = () => {
    return(
        <section className="my-5 md:py-20 flex flex-col gap-6">
            <h1 className="text-center text-3xl md:text-5xl font-semibold text-shadow-xs px-5 md:px-24">Resultados reais, de quem usa todos os dias</h1>
            <h2 className="text-lg md:text-2xl text-center px-5 md:px-24">O FlowOne faz parte da rotina de quem precisa clareza financeira.</h2>
            <MarqueeDemo/>
        </section>
    )
}


export default TestimonialsSection

