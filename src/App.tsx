import React from 'react';
import { isTemplateTail } from 'typescript';
import Box from './components/Box/Box';
import './styles/style.scss';

function App() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleChange = (event?:any) => {
    // set the input value
    setInput(event.target.value);
    // Split the data
    let splitValue = event.target.value.split(',');
    let resultData = new Array;

    if (Array.isArray(splitValue)) {
      splitValue.map(item => {
        // If not empty calculate it
        if (item != '') {
         resultData.push(item * 2);
        }
      })

      setResult(resultData.join(','));
    }
  }

  return (
    <div className="App">
      <h1>Medirecords Front end Code Challenge</h1>
      <h2 className="mt-2">Please try to implement following within one hour</h2>
      
      <div className="row">
        <div className="column">
          <Box title="Input">
            <div className="component-form-group">
              <label>Array</label>
              <input value={input} onChange={handleChange} aria-label="array-input" />
            </div>
          </Box>

          <Box title="Input">
            <div className="component-form-group">
              <label>Output</label>
              <input value={result} disabled={true} aria-label="result-input" />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
