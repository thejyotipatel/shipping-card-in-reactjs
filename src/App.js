import { Text } from '@chakra-ui/react'
import OderSummary from './components/OderSummary'
import PaymentInfo from './components/PaymentInfo'
import ShippingInfo from './components/ShippingInfo'
function App() {
  return (
    <div className='container'>
      <ShippingInfo />
      <OderSummary />
    </div>
  )
}

export default App
