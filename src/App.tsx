import { useEffect, useState } from "react"
import BEERCARD, {type BeerCardType} from "./components/BeerCard"
import Cart, { type CartItemType } from "./components/cart"


const App = () => {

  
const [beer, setBeer] = useState<BeerCardType[]>([])

const [cart, setCart] = useState<CartItemType[]>([])

  useEffect(() => {

    fetch('data.json')
    .then(res => res.json())
    .then(data => setBeer(data))

  }, [])


  const addToCart = (beer: BeerCardType) => {
    let includes = false
    cart.forEach(element => {
      if(element.item.name === beer.name) includes = true
    })

    if(!includes){
      setCart(prev => [...prev, {item: beer, quantity: 1}])
    }
  }

  return (
    <>
    <Cart cart={cart} />

    <div className="beerCardWrapper">
      {beer.map(curr => <BEERCARD beer={curr} addToCart={addToCart}/>)}
    </div>

    </>
  )
}

export default App