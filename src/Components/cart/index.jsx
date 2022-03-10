

export const CartList = ({ cart }) => {

    const checkPriceCart = cart.reduce((CurrentValue, ValueActual) => CurrentValue + ValueActual.price, 0)
    const checkDiscountCart = cart.reduce((CurrentValue, ValueActual) => CurrentValue + ValueActual.discount, 0)

    const PriceEnd = checkPriceCart - checkDiscountCart

    return (
        <>
            <h2>Cart:</h2>
            <ul>

                {cart.map((product) =>

                    <li id={product.code}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.discount}</p>
                    </li>

                )}
            </ul>
            <div>
                <p>Total de desconto: {checkDiscountCart.toFixed(2)}</p>
                <p>Preço Final: {PriceEnd.toFixed(2)}</p>
            </div>
        </>
    )
}

