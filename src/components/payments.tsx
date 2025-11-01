import { useContext } from "react";
import { PaymentContext } from "../context/payment-context";

interface Props {
  styles?: string;
}

export const Payments = ({ styles='' }: Props) => {

  const context = useContext(PaymentContext);

  return (
    <div className={`${styles} bg-black/25 border-t-4 border-Lime rounded-lg py-6 px-4`}>
      <h3 className="text-Slate-300 mb-2">Your monthly repayments</h3>
      <p className="text-Lime text-[40px] font-bold mb-4">{`$ ${context.results.monthlyPayment.toFixed(2)}`}</p>
      <hr className="text-Slate-300 mb-4"/>
      <h3 className="text-Slate-300 mb-2">Total you'll repay over the term</h3>
      <p className="text-2xl font-bold">{`$ ${context.results.totalRepay.toFixed(2)}`}</p>
    </div>
  )
}