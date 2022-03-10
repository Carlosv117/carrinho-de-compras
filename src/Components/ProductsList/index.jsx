

export const ProductsList = ({ index, name, description, price, discount, handleClick }) => {

    return (

        <>
            <li id={index}>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>{discount}</p>

                <button onClick={() => handleClick(index)}>Adicionar ao carrinho</button>
            </li>
        </>
    )
}