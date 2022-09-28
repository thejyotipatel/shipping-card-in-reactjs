import InputCmponent from './InputCmponent'
import { VStack, Flex, Text } from '@chakra-ui/react'
import PaymentInfo from './PaymentInfo'

function ShippingInfo() {
  return (
    <>
      <div className='contant'>
        <VStack justifyContent='center' alignItems='flex-start'>
          <Text
            fontSize='1em'
            fontWeight='semibold'
            textAlign='left'
            marginY='2em'
            mb='2em'
          >
            Shipping Information
          </Text>
          <InputCmponent
            value=''
            name='name'
            type='text'
            labelText='full name'
            handleChange={() => console.log('change')}
            placeholder='Your first and last name'
          />
          <InputCmponent
            value=''
            name='address'
            type='text'
            labelText='Street address'
            handleChange={() => console.log('change')}
            placeholder='123 Example Street'
          />

          <Flex>
            <InputCmponent
              value=''
              name='xipcode'
              type='number'
              labelText='Zip Code'
              handleChange={() => console.log('change')}
              placeholder='Zip Code'
            />
            <InputCmponent
              value=''
              name='city'
              type='text'
              labelText='city'
              handleChange={() => console.log('change')}
              placeholder='City'
            />
          </Flex>
          <InputCmponent
            value=''
            name='email'
            type='email'
            labelText='email'
            handleChange={() => console.log('change')}
            placeholder='your@exampl.com'
          />
        </VStack>

        <PaymentInfo />
      </div>
    </>
  )
}

export default ShippingInfo
