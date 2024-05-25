// @ts-check

import { useEffect } from "react"
import { useState } from 'react'



export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect (() => {
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json()) // レスポンスをjsonに変換
    .then(data => setBreeds(Object.keys(data.message))) //jsonデータから犬種の一覧を取得しbreedsに格納
  }, [])

  return <></>
}

export default DogListContainer
