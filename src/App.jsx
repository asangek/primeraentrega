
import './App.css'
import { navbar } from './assets/components/navbar/navbar.jsx'
import { iteamlistcontainer } from './assets/components/iteamlistcontainer/iteamlistcontainer.jsx'


function App() {
  
  return (
    <>

<iteamlistcontainer />      

<navbar />




const welcomeMessage = 'Bienvenido';

  return (
    <div>

      <itemlistcontainer message={welcomeMessage} />
      
    </div>


    </>
  )
}

export default App
