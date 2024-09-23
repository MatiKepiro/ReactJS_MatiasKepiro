import './App.css'
import { Button } from './Components/Button.jsx'
import { Logo } from './Components/Logo.jsx'
import { Home } from './Components/Home.jsx'
import { Products } from './Components/Products.jsx'
import { AboutUs } from './Components/AboutUs.jsx'

function App() {
  const texto = "Click aqui!"
  const color1 = "Red"
  const color2 = "Blue"
  const imagen_logo = "https://www.onlygfx.com/wp-content/uploads/2018/07/8-grunge-x-1.png"
  return (
    // para no crear un <div></div>, podemos usar <React.Fragment></React.Fragment> para no crear ningun elemento.
      <div className='contenedor_principal'> 
        <Logo direccion={imagen_logo} desripcion="imagen del logo de la marca"/>
        <Home />
        <Products />
        <AboutUs />
        <Button texto={texto} color1={color1} color2={color2} />
      </div>

  )
}

export default App
