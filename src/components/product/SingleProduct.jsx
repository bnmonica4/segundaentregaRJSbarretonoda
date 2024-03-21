import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const {prodId}=useParams();
    return(
    <>
        <div>
            <h1>Single Prod {prodId}</h1>
        </div>
    </>
    );
}