import React from 'react'

import 'th-pattern-library/dist/index.css'
import {Button, TrafficSign} from "th-pattern-library";

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
    </div>
  );
}

export default App
