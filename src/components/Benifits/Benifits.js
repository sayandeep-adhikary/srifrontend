import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './Benifits.module.css';
import { BiHome } from 'react-icons/bi';

export default function Benifits() {
  return (
    <Box mt={20} mb={10} textAlign={'center'} bg={'#EDEFF6'} py={10}>
      <Text color={'#3a0ca3'} fontSize={'1.2rem'} fontWeight={600}>
        BENEFITS OF XYZ
      </Text>
      <Text
        fontWeight={600}
        fontSize={'2rem'}
        fontFamily={'"Quicksand", sans-serif'}
        letterSpacing={'1.5px'}
        display={'inline'}
        pb={2}
        className={styles.text}
      >
        Why choose XYZ
      </Text>
      <Box className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center my-3">
            <Card
              h={'17rem'}
              w={'17rem'}
              borderRadius={'xl'}
              border={'1px solid #3a0ca3'}
            >
              <CardHeader>
                <BiHome size={70} color="#3a0ca3" />
              </CardHeader>
              <CardFooter display={'block'} textAlign={'left'} pb={0}>
                <Heading size="md">Connect With verified Sellers</Heading>
                <Text color={'#889099'} fontSize={'0.9rem'}>
                Tell us your requirement & let our experts find verified sellers for you
                </Text>
              </CardFooter>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center my-3">
            <Card
              h={'17rem'}
              w={'17rem'}
              borderRadius={'xl'}
              border={'1px solid #3a0ca3'}
            >
              <CardHeader>
                <BiHome size={70} color="#3a0ca3" />
              </CardHeader>
              <CardFooter display={'block'} textAlign={'left'} pb={0}>
                <Heading size="md">Pay with XYZ</Heading>
                <Text color={'#889099'} fontSize={'0.9rem'}>
                Protect your payments for FREE. Pay sellers online via multiple options
                </Text>
              </CardFooter>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center my-3">
            <Card
              h={'17rem'}
              w={'17rem'}
              borderRadius={'xl'}
              border={'1px solid #3a0ca3'}
            >
              <CardHeader>
                <BiHome size={70} color="#3a0ca3" />
              </CardHeader>
              <CardFooter display={'block'} textAlign={'left'} pb={0}>
                <Heading size="md">Sell on XYZ for Free</Heading>
                <Text color={'#889099'} fontSize={'0.9rem'}>
                Reach out to more than 4 crore buyers.Sell with us.
                </Text>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Box>
    </Box>
  );
}
