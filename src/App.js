import {Route, Routes} from 'react-router-dom'
import IntoScreen from './IntoScreen'
import InstructionScreen from './InstructionScreen'
import ActivityScreen from './ActivityScreen'

const App = () => ( 
 
    <Routes>
      <Route exact path="/IntroScreen" element={<IntoScreen/>} />
      <Route exact path="/Instruction Screen" element={<InstructionScreen/>} />
      <Route exact path="/ActivityScreen" element={<ActivityScreen/>} />
    </Routes>
  
)
 
export default App
      