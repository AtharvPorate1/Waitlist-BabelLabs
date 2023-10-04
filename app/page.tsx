import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import MyComponent from '@/components/rings';

import Waitlist from '@/components/waitlist';








export default function Home() {
 
  return (

<div>
    <Waitlist></Waitlist>
              <div className="app">
               
              </div>
          
    <MyComponent></MyComponent>
    
          
  </div>

  )
}

