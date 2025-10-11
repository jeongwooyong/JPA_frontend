import { useLoaderData } from "react-router";
import ModifyComponet from "../../components/products/modifyComponent";

function ModifyPage() {
    const product: ProductDTO = useLoaderData()
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Products Modify Page
            </div>
            <ModifyComponet product={product}></ModifyComponet>
        </div>
    );
}
export default ModifyPage;