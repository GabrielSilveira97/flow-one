import { Button } from "../ui/button"
import { SidebarTrigger } from "../ui/sidebar"

const NavbarComponent = () => {
    return(
        <nav className="flex justify-between md:justify-between items-center px-5 md:px-18 py-4">
            <img src="/logos/logo.png" alt="flowone logo" className="w-28 md:w-50" />
            <ul className="hidden md:flex items-center gap-5 pt-3">
                <li>Por que FlowOne</li>
                <li>Planos</li>
                <li>Empresarial</li>
            </ul>
            <ul className="items-center gap-4 pt-3 hidden md:flex">
                <li>
                    <Button variant="ghost" className="py-5 px-7 text-md">Entrar</Button>
                </li>
                <li>
                    <Button variant="outline" className="border-black/40 hover:bg-black hover:text-white rounded-sm py-5 px-7 text-md">Baixar</Button>
                </li>
                <li>
                    <Button variant="default" className="hover:bg-primary-green rounded-sm py-5 px-7 text-md">Comece grátis</Button>
                </li>
            </ul>
            <SidebarTrigger className="md:hidden mt-3"/>
        </nav>
    )
}

export default NavbarComponent