import './App.css'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from "./components/header"
import Presentation from './components/presentation'
import Projects from './components/projects'
import Stacks from './components/stacks'

function App() {
  return (
    <>
     <Header/> 
     <Presentation/>
     <Stacks/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
