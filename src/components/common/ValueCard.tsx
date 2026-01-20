import type { ElementType } from "react"
import { Card, CardContent, CardHeader } from "../ui/card"


interface CardProps {
    cardTitle: string,
    cardSubTitle: string
    Icon: ElementType,
    iconColor: string
}

const ValueCard = ({cardTitle, cardSubTitle, Icon, iconColor} : CardProps) => {
    return(
        <Card className="w-full cursor-pointer hover:-translate-y-2 transition-all hover:shadow-xl py-10">
            <CardHeader>
                <Icon className={`text-5xl ${iconColor}`}/>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">{cardTitle}</h1>
                <h2 className="text-lg">{cardSubTitle}</h2>
            </CardContent>
        </Card>
    )
}


export default ValueCard