import {
  Box,
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './Offerings.module.css'
import { BiHome } from 'react-icons/bi';

export default function Offerings() {
  return (
    <Box mt={20} mb={10} textAlign={'center'} bg={'#EDEFF6'} py={10}>
      <Text
        fontWeight={600}
        fontSize={'2rem'}
        fontFamily={'"Quicksand", sans-serif'}
        letterSpacing={'1.5px'}
        borderBottom={'3px solid #3A0CA3'}
        display={'inline'}
        pb={2}
        className={styles.text}
      >
        We Connect Buyers & Sellers
      </Text>
      <Box className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center my-3">
            <Card
              h={'15rem'}
              w={'15rem'}
              borderRadius={'xl'}
              border={'1px solid #3a0ca3'}
            >
              <CardHeader>
                <BiHome size={70} color="#3a0ca3" />
              </CardHeader>
              <CardFooter display={'block'} textAlign={'left'} pb={0}>
                <Heading size="md">Trusted Platform</Heading>
                <Text color={'#889099'} fontSize={'0.9rem'}>
                  Know What Residents Are saying
                </Text>
              </CardFooter>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center my-3">
            <Card
              h={'15rem'}
              w={'15rem'}
              borderRadius={'xl'}
              border={'1px solid #3a0ca3'}
            >
              <CardHeader>
                <BiHome size={70} color="#3a0ca3" />
              </CardHeader>
              <CardFooter display={'block'} textAlign={'left'} pb={0}>
                <Heading size="md">Safe & Secure</Heading>
                <Text color={'#889099'} fontSize={'0.9rem'}>
                  Check Property Transaction Value
                </Text>
              </CardFooter>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center my-3">
          <Card
              h={'15rem'}
              w={'15rem'}
              borderRadius={'xl'}
              border={'1px solid #3a0ca3'}
            >
              <CardHeader>
                <BiHome size={70} color="#3a0ca3" />
              </CardHeader>
              <CardFooter display={'block'} textAlign={'left'} pb={0}>
                <Heading size="md">Quick Assistance</Heading>
                <Text color={'#889099'} fontSize={'0.9rem'}>
                Track Prices & analyse market demands
                </Text>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Box>
    </Box>
  );
}
