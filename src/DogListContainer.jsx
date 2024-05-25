import { useEffect, useState } from 'react'
import './App.css'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
  const [dogImgList, setDogImgList] = useState([])

  const onChangeBreed = e => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(data.message)
      })
      .catch(() => alert('error'))
  }, [])

  const clickButton = () => {
    // console.log("test")
    fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12')
      .then(res => res.json())
      .then(data => {
        setDogImgList(data.message)
      })
      .catch(() => alert('error'))
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChangeBreed={onChangeBreed}
      />
      <button onClick={clickButton}>表示</button>

      {dogImgList.map((dogImg, index) => (
        <ul>
          <li key={index}>
            <img src={dogImg} alt="犬種のリスト" />
          </li>
        </ul>
      ))}
    </>
  )
}

export default DogListContainer
