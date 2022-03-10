import { ProductsList } from "../ProductsList"


export const Products = ({ products, handleClick }) => {

    return (

        <>
            <h2>products:</h2>
            <ul>
                {products.map((product) => <ProductsList key={product.code} index={product.code} name={product.name} description={product.description}
                    price={product.price} discount={product.discount} handleClick={handleClick} />)}
            </ul>
        </>
    )
}