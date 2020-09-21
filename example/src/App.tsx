import React, { useEffect, useRef, useState } from 'react';

import 'th-pattern-library/dist/index.css';
import {
  FoldStepper
} from 'th-pattern-library';

const App = () => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [_currentFold, _setCurrentFold] = useState(0);
  const [,_setPrevFold] = useState(0);
  const previousFoldRef = useRef(0);
  const currentFoldRef = useRef(0);

  /**
   * Sets the scroll container's full height when the component is loaded.
   **/
  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    if (containerRef && containerRef.current && containerHeight > 0) {
      containerRef.current.addEventListener('scroll', function(){
        // @ts-ignore
        const newFold = Math.floor(containerRef?.current?.scrollTop / 572);

        if(newFold !== currentFoldRef.current) {
          _setPrevFold(currentFoldRef.current);
          previousFoldRef.current = currentFoldRef.current;
          _setCurrentFold(newFold);
          currentFoldRef.current = newFold;
        }
      });
    }

    return () => {
      containerRef?.current?.removeEventListener('scroll', () => null);
    };
  }, [containerHeight]);

  return (
    <div className='container' ref={containerRef}>

      <div className='step step--blue'/>
      <div className='step step--red'/>
      <div className='step step--blue'/>
      <div className='step step--red'/>

      <div className="foldStepper">
        <FoldStepper totalSteps={4} currentStep={_currentFold}/>
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
