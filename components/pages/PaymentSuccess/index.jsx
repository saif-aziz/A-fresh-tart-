import { Alert } from "../../components/elements/Alert";

const PaymentSuccess = () => {
    return (
        <div className="max-w-lg mx-auto p-20 mt-20">
            <Alert variant="success" className="text-xl p-4">
                Your payment was successful
            </Alert>
        </div>
    )
}

export default PaymentSuccess;
