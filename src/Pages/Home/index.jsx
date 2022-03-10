import { useState } from "react";
import { CartList } from "../../Components/cart";
import { Form } from "../../Components/Form";
import { Products } from "../../Components/Products";
import "./styles.css"


export const Home = () => {

    const [products, setProducts] = useState([
        {
            code: 10,
            name: "Smart TV Led 50 Semp",
            description:
                "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB",
            price: 2299.99,
            discount: 190.99,
        },
        {
            code: 11,
            name: "Smartphone Samsung Galaxy A72 128GB",
            description:
                "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM",
            price: 1988.4,
            discount: 87.89,
        },
        {
            code: 12,
            name: "Smartwatch Samsung Galaxy Watch Active",
            description:
                "4O Galaxy Watch Active é o smartwatch",
            price: 678.6,
            discount: 110.19,
        },
    ]);

    const [cart, setCart] = useState([])

    const handleClick = (value) => {

        const click = products.find((product) => product.code === value)
        setCart([...cart, click])
    }

    return (

        <>
            <Form products={products} setProducts={setProducts} />
            <Products products={products} handleClick={handleClick} />
            <CartList cart={cart} />
        </>
    )
}