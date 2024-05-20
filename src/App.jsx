// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 *
 */


export const App = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg')
  
  const dogButtonClick = () => {
    setDogUrl('https://images.dog.ceo/breeds/mastiff-english/1.jpg')
  }

  return (
    <div>
      <header>
        <h1>API</h1>
      </header>
      <p>私は犬アレルギーです。ぴえん。</p>
      <button type="button" onClick={dogButtonClick}>更新</button><br/>
      <img src= {dogUrl} alt="Cute dog"></img>
    </div>
  )
}
