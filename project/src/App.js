import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import logo from './logo.svg';
import './App.css';

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#f7f8fa",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: state.isFocused ? "dark grey" : "white",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "dark grey" : "white"
    }
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0
  })
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const App = () => {

  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    fetch('/api/time').then(res => 
      res.json()).then(data => {
        setCurrentTime(data.time);
    });
  }, []); 

  //const [traits, setTraits] = useState({});
  const [accessoryIOptions, setAccessoryIOptions] = useState({});
  const [accessoryIIOptions, setAccessoryIIOptions] = useState({});
  const [backgroundOptions, setBackgroundOptions] = useState({});
  const [bodyOptions, setBodyOptions] = useState({});
  const [clothesOptions, setClothesOptions] = useState({});
  const [customOptions, setCustomOptions] = useState({});
  const [eyesOptions, setEyesOptions] = useState({});
  const [headOptions, setHeadOptions] = useState({});
  const [mouthOptions, setMouthOptions] = useState({});
  const [nameOptions, setNameOptions] = useState({});

  useEffect(() => {
    fetch('/api/traits').then(res => 
      res.json()).then(data => {

        const traitKeys = Object.keys(data);
        const traitOptions = [];
        for (const traitKey of traitKeys) {
          let temp = Object.keys(data[traitKey]);
          let tempOptions = temp.map(item => {
            return { value: item, label: item };
          });
          traitOptions.push(tempOptions);
        } 
        
        // set all trait options state
        setAccessoryIOptions(traitOptions[0]);
        setAccessoryIIOptions(traitOptions[1]);
        setBackgroundOptions(traitOptions[2]);
        setBodyOptions(traitOptions[3]);
        setClothesOptions(traitOptions[4]);
        setCustomOptions(traitOptions[5]);
        setEyesOptions(traitOptions[6]);
        setHeadOptions(traitOptions[7]);
        setMouthOptions(traitOptions[8]);
        setNameOptions(traitOptions[9]);
    });
  }, []);

  return (
    <React.Fragment>
      <ul className="navbar">
        <li className="logo"><a href="#">Logo</a></li>
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">About</a></li>
        <li className="navbar-item"><a href="#">FAQ</a></li>
      </ul>

      <div className="header">
        <span className="pre-title">Explore</span>
        <div>
          <h1 className="title">RareTraitz</h1>
        </div>
        <p className="description">Here's a description of RareTraitz</p>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <div className="select-dropdown-title"><span>Accessory I</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={accessoryIOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Accessory II</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={accessoryIIOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Background</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={backgroundOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Body</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={bodyOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Clothes</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={clothesOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Custom</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={customOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Eyes</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={eyesOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Head</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={headOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Mouth</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={mouthOptions}
            />
          </div>
          <div className="select-dropdown-title"><span>Name</span></div>
          <div className="wrapper-select-dropdown">
            <Select 
              styles={customStyles} 
              options={nameOptions}
            />
          </div>
          <button className="select-button">Find Traits</button>
        </div>
        <div className="col-lg-9">
          <p>Hello World</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
