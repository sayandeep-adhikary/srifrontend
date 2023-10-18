import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import profileImg from '../../../assets/profileImg.png';
import { TiLocation } from 'react-icons/ti';

export default function ProfileCard() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      py={{ base: 5, sm: 10 }}
      pl={5}
      pr={{ base: 5, sm: 10 }}
      fontFamily={"'Poppins', sans-serif"}
      borderRadius={'xl'}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={profileImg}
        alt="profile"
        minW={'20%'}
      />

      <Stack textAlign={{ base: 'center', sm: 'left' }}>
        <CardBody display={'flex'} flexDir={'column'} justifyContent={'center'}>
          <Heading
            size="lg"
            fontFamily={"'Poppins', sans-serif"}
            fontWeight={600}
          >
            Manish Sharma{' '}
          </Heading>

          <Text py="2" color={'#353e5c'}>
            Member since August 2023
          </Text>
        </CardBody>

        <CardFooter mx={{ base: 'auto', sm: '0' }}>
          <Flex align={'center'} gap={2}>
            <TiLocation size={25} color="#3a0ca3" />
            <Text py="2" mb={0}>
              Indore, India
            </Text>
          </Flex>
        </CardFooter>
      </Stack>
      <Button
        color={'white'}
        bg={'#3a0ca3'}
        size={'lg'}
        ml={{ base: '0', sm: 'auto'}}
        my={'auto'}
        letterSpacing={'1px'}
        _hover={{ bg: '#3a0ca3e1' }}
      >
        Edit
      </Button>
    </Card>
  );
}
