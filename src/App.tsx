import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Page from "./components/Page";

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
            bgImage="model-Y.jpg" />
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
            bgImage="model-x.jpg" />
        } />
        <Route path='/solarpanels' element={
          <Page
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            bgImage="solar-panel.jpg" />
        } />
        <Route path='/solarroof' element={
          <Page
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            bgImage="solar-roof.jpg"
            information={
              [
                {title: 'SUN', description: 'Beautiful Solar Without Compromise'},
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
