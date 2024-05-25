import React from 'react'

export const BreedsSelect = props => {
  const { breeds, selectedBreed, onChangeBreed } = props

  return (
    <>
      <select value={selectedBreed}>
        {Object.keys(breeds).map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
