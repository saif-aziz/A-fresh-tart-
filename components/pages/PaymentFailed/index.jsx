import { Alert } from "../../components/elements/Alert";

const PaymentFailed = () => {
    return (
        <div className="max-w-lg mx-auto p-20 mt-20">
            <Alert variant="danger" className="text-xl p-4">
                Your payment has failed
            </Alert>
        </div>
    )
}

export default PaymentFailed;
