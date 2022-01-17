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

  const [traits, setTraits] = useState({});

  useEffect(() => {
    fetch('/api/traits').then(res => 
      res.json()).then(data => {
        setTraits(data);
    });
  }, []);

  const accessoryI = Object.keys(traits['Accessory I']);
  const accessoryIOptions = accessoryI.map(item => {
    return { value: item, label: item };
  });

  const accessoryII = Object.keys(traits['Accessory II']);
  const accessoryIIOptions = accessoryII.map(item => {
    return { value: item, label: item };
  });

  const background = Object.keys(traits['Background']);
  const backgroundOptions = background.map(item => {
    return { value: item, label: item };
  });

  const body = Object.keys(traits['Body']);
  const bodyOptions = body.map(item => {
    return { value: item, label: item };
  });

  const clothes = Object.keys(traits['Clothes']);
  const clothesOptions = clothes.map(item => {
    return { value: item, label: item };
  });

  const custom = Object.keys(traits['Custom']);
  const customOptions = custom.map(item => {
    return { value: item, label: item };
  });

  const eyes = Object.keys(traits['Eyes']);
  const eyesOptions = eyes.map(item => {
    return { value: item, label: item };
  });

  const head = Object.keys(traits['Head']);
  const headOptions = head.map(item => {
    return { value: item, label: item };
  });

  const mouth = Object.keys(traits['Mouth']);
  const mouthOptions = mouth.map(item => {
    return { value: item, label: item };
  });

  const name = Object.keys(traits['Name']);
  const nameOptions = name.map(item => {
    return { value: item, label: item };
  });

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
