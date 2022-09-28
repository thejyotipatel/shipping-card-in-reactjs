import { Icon, GridItem, Grid } from '@chakra-ui/react'
import { BsRecordCircleFill } from 'react-icons/bs'
function BoxInfo({ boxHeader, boxDesc }) {
  return (
    <Grid
      templateColumns='repeat(2, auto)'
      gap='1em'
      width='fit-content'
      alignItems='center'
      justifyContent='center'
      m='1em'
    >
      <Icon color='blue.500' as={BsRecordCircleFill} w={6} h={6} />
      <Grid textAlign='left' fontSize='1em' fontWeight='bold' ml={'0.5'}>
        <GridItem fontSize={'1em'}>{boxHeader}</GridItem>
        <GridItem color='gray.400'>{boxDesc}</GridItem>
      </Grid>
    </Grid>
  )
}

export default BoxInfo
