import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App , { replaceCamelWithSpaces } from './App'

render(<App />);

test('button need to contain the initial text and have the initial color', () => { 

    const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});

    expect(button).toHaveStyle({backgroundColor:'MediumVioletRed'});
 })
test('button need to change the text and the color', () => { 

    const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});

    fireEvent.click(button);
    
    expect(button).toHaveStyle({backgroundColor:'MidnightBlue'});

 })

 test('checkbox testing', () => { 

     const checkBox = screen.getByRole('checkbox', { ariaLabel:'firstCheck' });

     expect(checkBox).toHaveProperty('checked', false);
 })

 test('checkbox testing with button enabled/disabled testing', () => { 

    const checkBox = screen.getByRole('checkbox', { ariaLabel:'firstCheck' });
    const button = screen.getByRole('button',  {name: 'Change to Medium Violet Red'});
    expect(button).toBeEnabled();

    fireEvent.click(checkBox);
    expect(checkBox).toHaveProperty('checked', true);
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({backgroundColor:'gray'});
})

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => { 
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
   })
  test('works for one inner capital letters', () => { 
    expect(replaceCamelWithSpaces('RedBlue')).toBe('Red Blue');
   })
  test('works for multiple capital letters', () => { 
    expect(replaceCamelWithSpaces('RedBlueDark')).toBe('Red Blue Dark');
   })
})
