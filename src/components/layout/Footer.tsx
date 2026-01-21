import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook,  FaYoutube, FaInstagram  } from "react-icons/fa";


const FooterComponent = () => {
    return (
        <footer className="px-5 md:px-18 border-t py-10 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between">
                <img src="/logos/logo.png" alt="Logo Flowone" width={150} />
                <ul className="flex gap-3">
                    <li><FaSquareXTwitter className="text-gray-600 cursor-pointer size-7" /></li>
                    <li><FaFacebook className="text-gray-600 cursor-pointer size-7" /></li>
                    <li><FaYoutube className="text-gray-600 cursor-pointer size-7" /></li>
                    <li><FaInstagram className="text-gray-600 cursor-pointer size-7" /></li>
                </ul>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 items-center justify-between text-sm text-gray-600">
                <p>© 2026 Flowone. Todos os direitos reservados.</p>
                <ul className="flex gap-5">
                    <li>Política de Privacidade</li>
                    <li>Termos de Serviço</li>
                </ul>
            </div>
        </footer>
    )
}

export default FooterComponent