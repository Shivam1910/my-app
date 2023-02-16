import './App.css';
import Navbar from './Compnonents/Navbar';
import TextFrom from './Compnonents/TextFrom';



function App() {
  return (
    <>

      <Navbar title="TaxtUtils" aboutText="About Us" />
      <div className="container my-3" >
        <TextFrom heading="Enter the text analyze below" />
      </div>



    </>
  );
}

export default App;
