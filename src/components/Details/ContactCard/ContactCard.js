import {
  Button,
  Card,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { PhoneIcon } from '@chakra-ui/icons';

export default function ContactCard() {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      py={5}
      pl={5}
      pr={{ base: 5, sm: 10 }}
      fontFamily={"'Poppins', sans-serif"}
      borderRadius={'xl'}
      my={5}
    >
      <Stack minW={'80vw'}>
        <CardHeader>
          <Heading
            size="lg"
            fontFamily={"'Poppins', sans-serif"}
            fontWeight={600}
          >
            Contact Information
          </Heading>
        </CardHeader>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4 d-flex justify-content-start align-items-center my-3">
              <Flex gap={3} align={'center'}>
                <IconButton
                  bg={'#3a0ca3'}
                  size="lg"
                  icon={<PhoneIcon color={'white'} />}
                  _hover={'none'}
                />
                <Stack>
                  <Text mb={0} fontWeight={600}>
                    Primary Mobile Number
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    8963967489
                  </Text>
                </Stack>
              </Flex>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex justify-content-start align-items-center my-3">
              <Flex gap={3} align={'center'}>
                <IconButton
                  bg={'#3a0ca3'}
                  size="lg"
                  icon={<PhoneIcon color={'white'} />}
                  _hover={'none'}
                />
                <Stack>
                  <Text mb={0} fontWeight={600}>
                    Alternative Mobile Number
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    8963967489
                  </Text>
                </Stack>
              </Flex>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex justify-content-start align-items-center my-3">
              <Flex gap={3} align={'center'}>
                <IconButton
                  bg={'#3a0ca3'}
                  size="lg"
                  icon={<MdEmail color={'white'} size={25} />}
                  _hover={'none'}
                />
                <Stack>
                  <Text mb={0} fontWeight={600}>
                    Primary Email
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    123@gmail.com
                  </Text>
                </Stack>
              </Flex>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4 d-flex justify-content-start align-items-center my-3">
              <Flex gap={3} align={'center'}>
                <IconButton
                  bg={'#3a0ca3'}
                  size="lg"
                  icon={<MdEmail color={'white'} size={25} />}
                  _hover={'none'}
                />
                <Stack>
                  <Text mb={0} fontWeight={600}>
                    Alternative Email
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    123@gmail.com
                  </Text>
                </Stack>
              </Flex>
            </div>
            <div className="col-sm-12 col-lg-4 d-flex justify-content-start align-items-center my-3">
              <Flex gap={3} align={'center'}>
                <IconButton
                  bg={'#3a0ca3'}
                  size="lg"
                  icon={<HiLocationMarker color={'white'} size={25}/>}
                  _hover={'none'}
                />
                <Stack>
                  <Text mb={0} fontWeight={600}>
                    Address
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    Indore,India
                  </Text>
                </Stack>
              </Flex>
            </div>
          </div>
        </div>
      </Stack>
      <Button
        color={'white'}
        bg={'#3a0ca3'}
        size={'lg'}
        ml={{ base: '0', sm: 'auto' }}
        my={'auto'}
        letterSpacing={'1px'}
        _hover={{ bg: '#3a0ca3e1' }}
      >
        Edit
      </Button>
    </Card>
  );
}
