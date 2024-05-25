// @ts-check

import DogImage from './DogImage'

// DogImageの親コンポーネント
import { useState } from 'react'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg',
  )

  const fetchImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
  }
  return (
    <div>
      <p>サイトの説明</p>
      <button type="button" onClick={fetchImage}>
        更新
      </button>
      <br />
      <DogImage imageUrl={dogUrl}/>
    </div>
  )
}

export default Description
