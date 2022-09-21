import './App.css';
import Navbar from './componants/Navbar';
import TextForms from './componants/TextForms';


function App() {
  return (
    <>
    
    <Navbar title="Text Utilizer" about="About us"/>
    <div className='container'>

    <TextForms heading="Enter The Text To Analyze" />
    </div>
    
    </>
  );
}

export default App;
