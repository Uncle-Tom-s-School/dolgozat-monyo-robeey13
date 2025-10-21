export type BeerCardType = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: number,
  available: boolean
}

const BeerCard = (props: BeerCardType) => {
  return (
    <div className='beerCard'>
      <img src={props.image} alt="" />
      <strong>{props.name}</strong>
      <p>{props.price} Ft</p>

      {props.available ? <strong className="available">Raktáron</strong> : <strong className="notAvailable">Nincs Raktáron</strong>}
      <p></p>


    </div>



  )
}

export default BeerCard