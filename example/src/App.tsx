import React from 'react'

import 'th-pattern-library/dist/index.css'
import {Button, TrafficSign, MainAction} from "th-pattern-library";

const App = () => {
  return (
    <div>
      <Button label='Primary Button'/>
      <Button type="secondary" label='Secondary Button'/>
      <Button type="clear" label='Clear Button'/>
      <Button type="outline" label='Outline Button'/>
      <TrafficSign label='Traffic Signal'/>
      <TrafficSign label='Traffic Signal' type='clear' direction='left'/>
      <TrafficSign label='Traffic Signal' type='outline' direction='left'/>
      <MainAction actionLabel={'Start a Project'}/>

      <form>
        <div className={'form-field'}>
          <label>Input Label</label>
          <input type='text' placeholder='Placeholder' name='text' className={'is_error'}/>
        </div>
      </form>
    </div>
  );
}

export default App
