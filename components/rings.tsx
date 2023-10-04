"use client"
import RINGS from 'vanta/src/vanta.rings'
import { useEffect } from '@/client'


function MyComponent() {
    
    useEffect(() => {
      // This code will only run on the client side
      // ...
      RINGS({
        el: '#vanta'
      })
    }, []);
  
    return <div id='vanta'>
        
    </div>;
  }

export default MyComponent
  