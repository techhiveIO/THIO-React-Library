import React from 'react';

import 'th-pattern-library/dist/index.css';
import {
  FoldStepper
} from 'th-pattern-library';

const App = () => {
  return (
    <div className='container'>

      <div className='step step--blue'/>
      <div className='step step--red'/>
      <div className='step step--blue'/>
      <div className='step step--red'/>

      <div className="foldStepper">
        <FoldStepper totalSteps={5} />
      </div>

      {/*<form>*/}
      {/*  <div className={'form-field'}>*/}
      {/*    <label>Input Label</label>*/}
      {/*    <input*/}
      {/*      type='text'*/}
      {/*      placeholder='Placeholder'*/}
      {/*      name='text'*/}
      {/*      className={'is_error'}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</form>*/}
    </div>
  );
};

export default App;
