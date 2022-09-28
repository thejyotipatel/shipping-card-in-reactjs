import React, { useEffect, useState } from 'react'
import {
  VStack,
  Text,
  Box,
  Flex,
  Grid,
  Image,
  Select,
  Button,
  Input,
  HStack,
  Highlight,
} from '@chakra-ui/react'
import { TbMessageCircle, TbPhone } from 'react-icons/tb'
import InputCmponent from './InputCmponent'
const img1 =
  'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
const img2 =
  'https://images.unsplash.com/photo-1481699143886-e4c9924af63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80'

function OderSummary() {
  const [total, setTotal] = useState(398 + 24.99)
  const [discountCode, setDiscountCode] = useState(false)
  const [message, setMessage] = useState('')
  const [codes, setCodes] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }
  const handleInput = (e) => {
    setCodes(e.target.value)
    // console.log(e.target.value)
  }
  const applyDiscount = () => {
    // setMessage('')
    if (discountCode) {
      setMessage('discount code is applayed already')
      return
    }
    if (codes === '') {
      setMessage('Please add discount code')
      return
    }
    if (codes != '10per') {
      setMessage('Given code is not valid')
    }

    if (codes === '10per') {
      setMessage('10% Discount code is applied')
      setDiscountCode(true)
      let per = (10 / 100) * total
      setTotal(total - per)
      console.log(discountCode, total, message)
    }
  }

  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate('/')
  //     }, 3000)
  //   }
  // }, [user, navigate])

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        // setDiscountCode(false)
        // setCodes('')
        setMessage('')
      }, 3000)
    }
  }, [message])

  return (
    <>
      {/* <Grid> */}
      <VStack w='lg'>
        <Text fontSize='1em' fontWeight='semibold' textAlign='left'>
          Order Summery
        </Text>

        {/* Box */}

        <Flex
          alignItems='center'
          justifyContent='space-between'
          gap='1em'
          width='100%'
        >
          <Image
            src={img2}
            alt='image_2'
            maxWidth='12em'
            w='100%'
            borderRadius='0.5em'
          />
          <Box>
            <Text
              fontSize='1.2em'
              // width='120px'
              fontWeight='semibold'
              // textAlign='left'
            >
              Bomboo Tan
            </Text>
            <Text fontSize='1em' textAlign='left' color='gray.500'>
              Size:20
            </Text>
            <Select width='fit-content'>
              <option value='1'>1</option>
              <option value='2'>3</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Select>
          </Box>
          <Text fontSize='1.2em' fontWeight='semibold' textAlign='left'>
            $199.00
          </Text>
        </Flex>

        <Flex
          alignItems='center'
          justifyContent='space-between'
          gap='1em'
          width='100%'
          paddingBottom='1em'
        >
          <Image
            src={img1}
            alt='image_2'
            maxWidth='12em'
            borderRadius='0.5em'
          />
          <Box>
            <Text
              fontSize='1.2em'
              // width='120px'
              fontWeight='semibold'
              // textAlign='left'
            >
              Bomboo Tan
            </Text>
            <Text fontSize='1em' textAlign='left' color='gray.500'>
              Size:20
            </Text>
            <Select width='fit-content'>
              <option value='1'>1</option>
              <option value='2'>3</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Select>
          </Box>
          <Text fontSize='1.2em' fontWeight='semibold' textAlign='left'>
            $199.00
          </Text>
        </Flex>

        {/* add discount code */}
        {message && (
          <Text
            fontSize='1.2em'
            fontWeight='semibold'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            color='blue.300'
          >
            {message}
          </Text>
        )}
        {discountCode && (
          <Highlight
            query={' 10% Discount code is applied'}
            styles={{ px: '1', py: '1', bg: 'orange.100' }}
          >
            10% Discount code is applied
          </Highlight>
        )}
        <Flex paddingY='2em' width='100%'>
          <Input
            value={codes}
            name='discountCode'
            type='text'
            size='lg'
            // labelText='discount'
            onChange={handleInput}
            placeholder='Discount Code'
          />
          <Button
            bgColor='gray.300'
            // color='gray.500'
            colorScheme='gray'
            marginLeft='1em'
            fontSize='1.3em'
            size='lg'
            onClick={applyDiscount}
            // _hover={(color = 'red')}
          >
            Apply
          </Button>
        </Flex>

        <Box padding='1em' width='100%'>
          <Text
            fontSize='1.2em'
            fontWeight='semibold'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            marginY='1em'
          >
            Subtotal
            <span>${199 + 199}</span>
          </Text>
          <Text
            fontSize='1.2em'
            fontWeight='semibold'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            marginY='1em'
          >
            Shipping cost
            <span>+${24.99}</span>
          </Text>
          <Text
            fontSize='1.2em'
            fontWeight='semibold'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            color='blue.300'
            marginY='1em'
          >
            Discount(20%)
            <span>-${84.59}</span>
          </Text>

          {/* add discount code */}
          {discountCode && (
            <Text
              fontSize='1.2em'
              fontWeight='semibold'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              color='blue.300'
              marginY='1em'
            >
              Discount(10%)
              <span>-${parseFloat((10 / 100) * total).toFixed(2)}</span>
            </Text>
          )}
          <Text
            fontSize='1.2em'
            fontWeight='semibold'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            // color='blue.300'
            marginY='1em'
          >
            Total
            <span>${parseFloat(total).toFixed(2)}</span>
          </Text>

          <Button
            marginY='1em'
            width='100%'
            fontSize='1.3em'
            colorScheme='linkedin'
            size='lg'
            onClick={applyDiscount}
          >
            Place Order
          </Button>
          <Text
            fontSize='1em'
            fontWeight='semibold'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            color='gray.600'
          >
            Have questions? or Need help to complete your order?
          </Text>

          <HStack color='blue.500'>
            <Button bgColor='transparent' leftIcon={<TbMessageCircle />}>
              Live Chat
            </Button>
            <Button bgColor='transparent' leftIcon={<TbPhone />}>
              Phone
            </Button>
            <Button bgColor='transparent' leftIcon={<TbPhone />}>
              Email
            </Button>
          </HStack>
        </Box>
      </VStack>
      {/* </Grid> */}
    </>
  )
}

export default OderSummary