import HeroSection from "./components/layout/Hero"
import MidSection from "./components/layout/Mid"
import NavbarComponent from "./components/layout/Navbar"
import SidebarComponent from "./components/layout/Sidebar"
import TestimonialsSection from "./components/layout/Testimonials"
import ValueSection from "./components/layout/Value"
import { SidebarProvider } from "./components/ui/sidebar"

const App = () => {

  return (
    <SidebarProvider>
      <main>
        <NavbarComponent/>
        <HeroSection/>
        <ValueSection/>
        <MidSection/>
        <TestimonialsSection/>
      </main>
      <SidebarComponent/>
    </SidebarProvider>
  )
}

export default App
