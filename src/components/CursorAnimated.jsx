import React from 'react'
import AnimatedCursor from 'react-animated-cursor';
const CursorAnimated = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color='0, 0, 0'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          'svg',
        ]}
        outerStyle={{
          border: '2px solid #00F'
        }}
        innerStyle={{
          backgroundColor: '#00F'
        }}
        
      />
    </div>
  )
}

export default CursorAnimated
