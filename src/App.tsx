import { Calculator } from "./components/calculator"
import { PaymentContextProvider } from "./context/payment-context-provider"


export default function App() {


  return (
    <main className="lg:h-screen lg:grid lg:place-content-center">
      <PaymentContextProvider>
        <Calculator />
      </PaymentContextProvider>
    </main>
  )
}
