import React from 'react'

import 'th-pattern-library/dist/index.css'
import {Button} from "th-pattern-library";

const App = () => {
  return (
    <div>
      <Button label='Primary Button'/>
      <Button type="secondary" label='Secondary Button'/>
    </div>
  );
}

export default App
