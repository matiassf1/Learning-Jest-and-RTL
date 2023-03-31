import { useRef, useState } from 'react';

export function replaceCamelWithSpaces(string) {
  return string.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [checkBoxValue, setCheckBoxValue] = useState(false)

  const checkBoxRef = useRef(null)
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'
  const onCheck = () => {
    setCheckBoxValue(checkBoxRef.current?.checked)
  }
  return (
    <div >
      <button 
        disabled={checkBoxValue}
        style={ checkBoxRef.current?.checked ? {backgroundColor: 'gray'} : {backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}>
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>

      <input ref={checkBoxRef} aria-label='firstCheck' type="checkbox" onChange={onCheck}/>
    </div>
  );
}

export default App;
