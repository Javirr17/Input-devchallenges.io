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
      
          <section className="input-layout">
              <div className="input-div">
                <p>{"<Input />"}</p>
                <Input />
              </div>
              
              <div className="input-div">
                <p>{"<Input error/>"}</p>
                <Input error/>
              </div>

              <div className="input-div">
                <p>{"<Input disabled/>"}</p>
                <Input disabled/>
              </div>
          </section>

          <section className="input-layout">
              <div className="input-div">
                <p>{"<Input helperText=\"Some interesting text\"/>"}</p>
                <Input helperText="Some interesting text"/>
              </div>
              
              <div className="input-div">
                <p>{"<Input helperText=\"Some interesting text\" error/>"}</p>
                <Input helperText="Some interesting text" error/>
              </div>
          </section>          

          <section className="input-layout">
              <div className="input-div">
                <p>{"<Input startIcon=\"Key\"/>"}</p>
                <Input startIcon="Key"/>
              </div>
              
              <div className="input-div">
                <p>{"<Input endIcon=\"Lock\"/>"}</p>
                <Input endIcon="Lock"/>
              </div>
          </section> 

          <section className="input-layout">
              <div className="input-div">
                <p>{"<Input value=\"Text\"/>"}</p>
                <Input value="Text"/>
              </div>
              
              <div className="input-div">
                <p>{"<Input size=\"sm\" endIcon=\"Close\"/>"}</p>
                <Input size="sm" endIcon="close"/>
              </div>

              <div className="input-div">
                <p>{"<Input size=\"md\" error/>"}</p>
                <Input size="md" error/>
              </div>              
          </section>           

          <section className="input-layout">
              <div className="input-div">
                <p>{"<Input fullWidth/>"}</p>
                <Input fullWidth/>
              </div>          
          </section>  

          <section className="input-layout">
              <div className="input-div">
                <p>{"<Input multiline row=\"4\"/>"}</p>
                <Input multiline row="4"/>
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
