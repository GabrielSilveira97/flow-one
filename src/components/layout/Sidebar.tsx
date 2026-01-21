import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "../ui/sidebar"
import { Button } from "../ui/button"
const SidebarComponent = () => {
    return(
        <Sidebar side="right">
            <SidebarHeader className="flex justify-center items-center py-8">
                <img src="/logos/logo.png" alt="flowone logo" className="w-28 md:w-50" />
            </SidebarHeader>
            <SidebarContent className="px-5">
                <SidebarGroup>  
                    <ul className="flex flex-col gap-2">
                        <li><Button variant="link" className="py-5 transition-all text-md">Por que FlowOne</Button></li>
                        <li><Button variant="link" className="py-5 transition-all text-md">Planos</Button></li>
                        <li><Button variant="link" className="py-5 transition-all text-md">Empresarial</Button></li>
                    </ul>
                </SidebarGroup>
                <SidebarGroup>
                    <ul className="flex flex-col w-full py-3 gap-3">
                        <li>
                            <Button variant="ghost" className="w-full py-5 px-7 text-md">Entrar</Button>
                        </li>
                        <li>
                            <Button variant="outline" className="w-full border-black/40 hover:bg-black hover:text-white rounded-sm py-5 px-7 text-md">Baixar</Button>
                        </li>
                        <li>
                            <Button variant="default" className="w-full hover:bg-primary-green rounded-sm py-5 px-7 text-md">Comece grátis</Button>
                        </li>
                    </ul>
                </SidebarGroup>
                
            </SidebarContent>
            <SidebarFooter>
                <p className="text-xs">© 2026 Flowone. Todos os direitos reservados.</p>
            </SidebarFooter>
        </Sidebar>
    )
}


export default SidebarComponent