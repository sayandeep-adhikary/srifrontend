import {
  chakra,
  Card,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { PhoneIcon } from '@chakra-ui/icons';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg='#3a0ca3'
      rounded={'full'}
      w={6}
      h={6}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function CompanyCard() {
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
            Company Information
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
                    Company Name
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    Google
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
                    Company Website
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    www.website.com
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
                    GSTIN
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    124893354544451
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
                  icon={<PhoneIcon color={'white'} />}
                  _hover={'none'}
                />
                <Stack>
                  <Text mb={0} fontWeight={600}>
                    Pan
                  </Text>
                  <Text mb={0} fontWeight={600} color={'#3a0ca3'}>
                    124893377865
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
                    Social Link
                  </Text>
                  <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'YouTube'} href={'#'}>
                      <FaFacebookF size={15} color='white'/>
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                      <FaInstagram size={15} color='white'/>
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                      <FaTwitter size={15} color='white'/>
                    </SocialButton>
                  </Stack>
                </Stack>
              </Flex>
            </div>
          </div>
        </div>
      </Stack>
    </Card>
  );
}
