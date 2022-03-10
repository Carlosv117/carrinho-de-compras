import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

export const Form = ({ setProducts, products }) => {

    const schema = yup.object().shape({

        code: yup.number().required(),
        name: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required(),
        discount: yup.number().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const createProduct = (data) => {

        setProducts([...products, data])
    }

    return (

        <>
            <form onSubmit={handleSubmit(createProduct)} >

                <p>Cadastrar produtos:</p>

                <input type="number" min="0" placeholder="Código" {...register("code")} />
                <input type="text" placeholder="Nome" {...register("name")} />
                <input type="text" placeholder="Descrição" {...register("description")} />
                <input type="number" min="0" placeholder="Preço" {...register("price")} />
                <input type="number" min="0" placeholder="Desconto" {...register("discount")} />

                <button type="submit">Cadastrar</button>

            </form>
        </>
    )
}