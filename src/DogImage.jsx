// @ts-check

// import Declaration from "postcss/lib/declaration"
// Descriptionの子コンポーネント
export const DogImage = props  => {
  return(
    <>
    <img src={props.imageUrl} alt="Cute dog" />
    </>
  )
};

export default DogImage;
