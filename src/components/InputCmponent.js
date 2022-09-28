import { Box, Text, Input, SimpleGrid, InputT } from '@chakra-ui/react'

const InputCmponent = ({
  value,
  name,
  type,
  labelText,
  handleChange,
  placeholder,
}) => {
  return (
    <Box maxW='md' fontWeight={'semibold'}>
      <Text textTransform='capitalize' fontSize={'1em'} htmlFor={name}>
        {labelText || name}
      </Text>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder || name}
        size='md'
        my='1em'
      />
    </Box>
  )
}
export default InputCmponent
