export type BeerCardType = {
  image: string,
  name: string,
  abv: string,
  volume: string,
  price: number,
  available: boolean
}

const BeerCard = (props: {beer: BeerCardType, addToCart: (b: BeerCardType)=> void}) => {
  return (
    <div className='beerCard'>
      <img src={props.beer.image} alt="" />
      <strong>{props.beer.name}</strong>
      <p>{props.beer.price} Ft</p>

      {props.beer.available ? <strong className="available">Raktáron</strong> : <strong className="notAvailable">Nincs Raktáron</strong>}
      <button onClick={() => props.addToCart(props.beer)}>Kosárba</button>




    </div>



  )
}

export default BeerCard