import { useEffect, useState } from "react"
import type { BeerCardType } from "./BeerCard"

export type CartItemType = {
    item: BeerCardType,
    quantity: number
}
const cart = (props: {cart: CartItemType[]}) => { 


    const [sum, setSum] = useState(0)

    useEffect(() => {
        let currSum = 0
        props.cart.forEach(beer => currSum += beer.item.price)

        setSum(currSum)
    }, [props])


  return (
    <div>
    {props.cart.length} in cart {sum}

    <ul>
        {props.cart.map(beer => <li>{beer.item.name}</li>)}
    </ul>
    </div>
)
}



export default cart