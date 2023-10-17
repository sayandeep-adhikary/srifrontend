import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import styles from './Products.module.css'
import construction from '../../assets/construction.png';

export default function Products() {
  return (
    <Box my={10} textAlign={'center'}>
      <Text color={'#3a0ca3'} fontSize={'1.2rem'} fontWeight={600}>
        Products
      </Text>
      <Text
        fontWeight={600}
        fontSize={'1.5rem'}
        fontFamily={'"Quicksand", sans-serif'}
        letterSpacing={'1.5px'}
        borderBottom={'3px solid #3A0CA3'}
        display={'inline'}
        lineHeight={'3rem'}
        pb={2}
      >
        Building Construction Material & Equipment
      </Text>
      <Box display={'flex'} justifyContent={'center'} my={5} pos={'relative'}>
        <Image
          src={construction}
          alt="xxx"
          className="img-fluid"
          opacity={0.8}
        />
        <Stack
          pos={'absolute'}
          fontSize={'1.2rem'}
          style={{
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          align={'center'}
          className={styles.stack}
        >
          <Flex
            color={'white'}
            fontFamily={"'Quicksand', sans-serif"}
            textShadow={'0 0 2px black'}
            minW={'40vw'}
            justifyContent={'space-between'}
          >
            <Text>Prefabricated Houses</Text>
            <Text>Scaffolding Planks & Plates</Text>
          </Flex>
          <Flex
            color={'white'}
            fontFamily={"'Quicksand', sans-serif"}
            textShadow={'0 0 2px black'}
            minW={'40vw'}
            justifyContent={'space-between'}
          >
            <Text>Construction Machines</Text>
            <Text>Crushing Machines & Plants</Text>
          </Flex>
          <Button
            size={'lg'}
            bg={'#3A0CA3'}
            color={'white'}
            fontFamily={'"Inter", sans-serif'}
            _hover={{ bg: '#3A0CA3e1' }}
            letterSpacing={'1.5px'}
          >
            See All
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
