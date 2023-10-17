import React from 'react';
import styles from './Header.module.css';
import { Box, Button, Flex, Input, Select, Text } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={`${styles.textContainer}`}>
        <Text color={'white'} minW={'70vw'} letterSpacing={'1.5px'}>
          Search for products & find <br /> verified sellers near you
        </Text>
        <Text color={'white'} fontSize={'1rem'} letterSpacing={'1px'} >
          Buying a home is a life-changing experience, so <br /> shouldn’t your
          real estate agent be a life changer
        </Text>
        <Button
          size={'lg'}
          bg={'#3A0CA3'}
          color={'white'}
          fontFamily={'"Inter", sans-serif'}
          _hover={{ bg: '#3A0CA3e1' }}
          letterSpacing={'1.5px'}
        >
          EXPLORE NOW
        </Button>
      </div>
      <Box
        className={`${styles.searchBarContainer}`}
        padding={'0 3rem'}
        zIndex={1}
        pos={'absolute'}
        bg={'white'}
        borderRadius={'lg'}
        minW={'70vw'}
        maxW={'100vw'}
        boxShadow={'0 0 10px black'}
      >
        <Flex alignItems={'center'} gap={3}>
          <Select
            variant="unstyled"
            placeholder="All India"
            w={'10rem'}
            color={'#889099'}
          />
          <FiSearch size={40} />
          <Input
            variant={'unstyled'}
            type="text"
            focusBorderColor="none"
            _hover={{ border: 'none' }}
            minH={'5rem'}
          />
          <Button
            size={'lg'}
            bg={'#3A0CA3'}
            color={'white'}
            fontFamily={'"Inter", sans-serif'}
            _hover={{ bg: '#3A0CA3e1' }}
            letterSpacing={'1.5px'}
          >
            Search
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
