import { Form , Result, Instructions} from "../components";
import { useContext } from "react";
import { PaymentContext } from "../context/payment-context";


interface Props{
  style?: string; 
}


export const Calculator = ( {style=''}:Props ) => {

  const context = useContext(PaymentContext);

  return (
    <div className={`${style} md:max-w-[688px] md:my-10 md:rounded-2xl overflow-hidden lg:flex lg:max-w-[1008px]`}>
      <Form styles="lg:flex-1" />
      <div className="lg:flex-1 bg-White">
        {
          context.results.monthlyPayment === 0 
          ? <Instructions />
          : <Result />
        }
        
      </div>
    </div>
  )
}
