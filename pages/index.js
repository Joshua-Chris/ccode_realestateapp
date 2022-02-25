import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose, title1, title2, buttonText, buttonText2, linkName, linkName2 }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10' className="main__flex">
    <Box p='5' height={450} className="main__box">
      <Text color='gray.100' fontSize='4xl' fontWeight='medium' textAlign='center'>{purpose}</Text>
      <Button fontSize='3xl' p='9' bg="blue.600" color="white" m='2'>
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
      <Button fontSize='3xl' p='9' bg="blue.600" color="white" m='2'>
        <Link href={linkName2}><a>{buttonText2}</a></Link>
      </Button>
    </Box>
  </Flex>
);


const Home = () => (
  <Box>
    <Banner
      purpose='RENT OR BUY YOUR DREAM HOME TODAY'
      buttonText="I'm Buying"
      linkName='/buy'
      buttonText2="I'm Renting"
      linkName2='/rent'
    />
  </Box>
);

export default Home;
