import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Page from "./components/Page";
import { BsFillSunFill } from "react-icons/bs"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/model3' element={
          <Page
            title="Model 3"
            description=""
            bgImage="model-3.jpg"
            information={
              [
                {title: '3.1s', description: '0-60 mph'},
                {title:'358mi', description:'Range (EPA est.)'},
                {title:'AWD', description:'Dual motor'}
            ]
            } />
        } />
        <Route path='/modely' element={
          <Page
            title="Model Y"
            description="Order Online for Touchless Delivery"
            bgImage="model-Y.jpg" 
            information={
              [
                {title: '76 cuft', description: 'Cargo Space'},
                {title:'330mi', description:'Range (EPA est.)'},
                {title:'AWD', description:'Dual Motor'}
            ]
            }/>
        } />
        <Route path='/models' element={
          <Page
            title="Model S"
            description="Plaid"
            bgImage="model-s.jpg"
            information={
              [
                {title: '396mi', description: 'Range (EPA est.)'},
                {title:'1.99s', description:'0-60 mph'},
                {title:'200mph', description:'Top Speed'}
            ]
            } />
        } />
        <Route path='/modelx' element={
          <Page
            title="Model X"
            description="Order Online for Touchless Delivery"
            bgImage="model-x.jpg"
            information={
              [
                {title: '333mi', description: 'Range (EPA est.)'},
                {title:'2.5s', description:'0-60 mph'},
                {title:'9.9s', description:'1/4 Mile'},
                {title:'1,020hp', description:'Peak Power'},
            ]
            }/>
        } />
        <Route path='/solarpanels' element={
          <Page
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            bgImage="solar-panel.jpg" 
            information={
              [
                {title: <BsFillSunFill />, description: 'Convert Sunlight to Energy'},
                {title:'$', description:'Guaranteed Lowest Price for Solar'},
                {title:'24/7', description:'Energy Monitoring'}
            ]
            }/>
        } />
        <Route path='/solarroof' element={
          <Page
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            bgImage="solar-roof.jpg"
            information={
              [
                {title: <BsFillSunFill />, description: 'Beautiful Solar Without Compromise'},
                {title:'25-Year', description:'Tile Warranty'},
                {title:'24/7', description:'Outage Protection'}
            ]
            } />
        } />
      </Routes>
    </div>
  );
}

export default App;
