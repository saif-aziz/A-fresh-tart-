import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        <div class="box">
            <div class="img">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div class="product-content">
                <h3>{product.name}</h3>
                <p>{product.desciption}</p>
                <AddProduct onAddProduct={addProduct} />
            </div>
        </div>
    )
}