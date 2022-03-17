import React from 'react';

//components
import Wrapper from './Components/Wrapper/wrapper.js';
import Screen from './Components/Screen/screen.js';
import ButtonBox from './Components/ButtonBox/ButtonBox.js';
import Button from './Components/Button/Button.js';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const App = () => {
  return (
    <Wrapper>
      <Screen value='0' />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === '=' ? 'equals' : ''}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
