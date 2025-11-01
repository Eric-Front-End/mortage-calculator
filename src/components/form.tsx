import { useForm, type SubmitHandler } from "react-hook-form";
import { Input, Radio, Button } from "../components";
import { calculateMortgage, type MortgageType } from "../utils/calculateMortgage";
import { useContext } from "react";
import { PaymentContext } from "../context/payment-context";

interface Props {
  styles?: string;
}

interface Inputs {
  mortgageAmount: number;
  mortgageTerms: number;
  interestRate: number;
  mortgageType: MortgageType;
}

export const Form = ({ styles='' }: Props) => {

  const { 
    register, 
    handleSubmit,
    reset, 
    formState:{errors}, 
  } = useForm<Inputs>();

  const context = useContext(PaymentContext);

  const sendForm: SubmitHandler<Inputs> = (data: Inputs)=> {
    const {mortgageAmount, mortgageTerms, interestRate, mortgageType} = data;
    const {monthlyPayment, totalRepay} = calculateMortgage(mortgageAmount, mortgageTerms, interestRate, mortgageType);
    
    context.setResults({monthlyPayment, totalRepay});

  }

  const clearAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.setResults({
      monthlyPayment:0, 
      totalRepay:0
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(sendForm)} className={`${styles} bg-white px-6 py-8 md:p-10`}>
      <div className="md:flex md:justify-between items-center md:mb-10">
        <h1 className="text-2xl font-bold mb-2 md:mb-0 ">Mortgage Calculator</h1>
        <button
          onClick={clearAll} 
          className="underline text-Slate-700 mb-6 md:mb-0 cursor-pointer">
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-6 mb-6">
        <Input 
          label='Mortgage Amount' 
          unit='$' 
          position="left"
          error={errors.mortgageAmount?.type === 'required'}
          {...register('mortgageAmount', { 
              required: true, 
              valueAsNumber: true, 
              min: { value: 0.01, message: 'El valor debe ser mayor que 0'}})} 
        />
        <div className="md:flex md:gap-6">
          <Input 
            label='Mortgage Terms' 
            unit='years'
            error={errors.mortgageTerms?.type === 'required'}
            {...register('mortgageTerms', { 
                required: true, 
                valueAsNumber: true, 
                min: { value: 0.01, message: 'El valor debe ser mayor que 0'}})}
          />
          <Input 
            label='Interest Rate' 
            unit='%'
            error={errors.interestRate?.type === 'required'}
            {...register('interestRate', { 
              required: true, 
              valueAsNumber: true, 
              min: { value: 0.01, message: 'El valor debe ser mayor que 0'}})}
          />
        </div>
      </div>

      <h2 className="text-Slate-700 mb-3">Mortgage Type</h2>
      <Radio 
        { ...register('mortgageType', {required: true})} 
        label="Repayment" 
      />
      <Radio 
        { ...register('mortgageType', {required: true})} 
        label="Interest Only"
      />
      {errors.mortgageType && <p className="text-Red text-sm my-3">This field is required </p> }
      <Button />
    </form>
  )
}