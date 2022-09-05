import './App.css';
import Input from "./Input.jsx"

function App() {
  return (
    <div className="App">
      <div className="left-navbar">
        <p id="title"><span>Dev</span>challenges.io</p>
        <div className="navbar-text-container">
          <p className="navbar-text">Colors</p>
          <p className="navbar-text">Typography</p>
          <p className="navbar-text">Spaces</p>
          <p className="navbar-text">Buttons</p>
          <p className="navbar-text bold-text">Inputs</p>
          <p className="navbar-text">Grid</p>
        </div>
      </div>
      <div>
        <div className="main-container">
        <h3>Inputs</h3>
    
        <section className="button-layout">
            <div className="button-div">
              <p>{"<Input />"}</p>
              <Input />
            </div>
            
            <div className="button-div">
              <p>{}</p>
              
            </div>

            <div className="button-div">
              <p>{}</p>
              
            </div>

            <div className="button-div">
              <p>{}</p>
              
            </div>

            <div className="button-div">
              <p>{}</p>
              
            </div>

            <div className="button-div">
              <p>{}</p>
              
            </div>

        </section>

        <footer>
          <p>Icons: https://material.io/resources/icons/?style=round</p>
          <p id="creator-msg">created by Javier Romero - devChallenges.io</p>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
