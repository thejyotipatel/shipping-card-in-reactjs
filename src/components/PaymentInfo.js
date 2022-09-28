import { Text, Grid, GridItem, Flex, Select } from '@chakra-ui/react'
import BoxInfo from './BoxInfo'
import InputCmponent from './InputCmponent'
function PaymentInfo() {
  return (
    <>
      <Grid className='shipping-method' gap='1em'>
        <Text fontSize='1em' fontWeight='semibold' textAlign='left'>
          Shipping Method
        </Text>
        <Flex>
          <BoxInfo
            boxHeader='Express $14.99'
            boxDesc='Dispatched in 24 hours'
          />
          <BoxInfo
            boxHeader='Express $14.99'
            boxDesc='Dispatched in 24 hours'
          />
        </Flex>

        <Text fontSize='1em' fontWeight='semibold' textAlign='left'>
          Payment Information
        </Text>

        <Flex>
          <BoxInfo boxHeader='Credit Card' boxDesc='Pay with card via Strip' />
          <BoxInfo boxHeader='PayPal' boxDesc='Pay with PayPal account' />
        </Flex>
      </Grid>

      <Flex>
        <InputCmponent
          value=''
          name='creditnumber'
          type='text'
          labelText='Credit card number'
          handleChange={() => console.log('change')}
          placeholder='Card number'
        />
        <InputCmponent
          value=''
          name='cardnumber'
          type='number'
          labelText='Name on card'
          handleChange={() => console.log('change')}
          placeholder='Card name'
        />
      </Flex>

      <Grid
        templateColumns='repeat(2, auto)'
        gap='1em'
        // m='1em'
        alignItems='center'
      >
        <GridItem>
          <Text fontSize='1em' fontWeight='semibold' textAlign='left'>
            Expiry date
          </Text>
          <Flex my='1em' gap='1em'>
            <Select width='fit-content'>
              <option value='01'> 01</option>
              <option value='02'>02</option>
              <option value='03'>02</option>
            </Select>
            <Select width='fit-content'>
              <option value='2017'> 2017</option>
              <option value='2018'>2018</option>
              <option value='2019'>019</option>
            </Select>
          </Flex>
        </GridItem>
        <GridItem>
          <InputCmponent
            value=''
            name='cvc'
            type='number'
            labelText='CVV/CVC'
            handleChange={() => console.log('change')}
            placeholder='CVC'
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default PaymentInfo
