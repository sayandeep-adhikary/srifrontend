import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { IconHomeCheck } from '@tabler/icons-react';
import android from '../../assets/android.png'
import ios from '../../assets/ios.png'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
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

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box bg="#0b090a" color="white" pos={'relative'}>
        <Container
          bg={'#3a0ca3'}
          color={'white'}
          borderRadius={'xl'}
          align={'center'}
          maxW={'4xl'}
          py={'3rem'}
          pos={'absolute'}
          style={{left: '50%', transform: 'translate(-50%, -50%)'}}
        >
          <Text fontSize={'1.5rem'}>Download Mobile App</Text>
          <Text fontSize={'1rem'}>And never miss out any update</Text>
          <Text fontSize={'1rem'}>
            We will send you a link, open it on your phone to download the App
          </Text>
          <Flex gap={5} align={'center'} justify={'center'}>
            <Image src={android} alt='android' className='img-fluid'/>
            <Image src={ios} alt='ios' className='img-fluid'/>
          </Flex>
        </Container>
        <Container as={Stack} maxW={'6xl'} pb={10} pt={60}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}
          >
            <Stack spacing={6}>
              <a
                className="navbar-brand d-flex align-items-center mr-4"
                href="/"
                style={{ fontWeight: '600' }}
              >
                <Box
                  className="d-inline-block align-top p-2 mx-2"
                  borderRadius={'full'}
                  bg={'#3A0CA3'}
                >
                  <IconHomeCheck color="white" />
                </Box>
                Logo
              </a>
              <Text fontSize={'sm'} mb={0}>
                2728 Hickory StreetSalt Lake City, UT 84104
              </Text>
              <Flex align={'center'} gap={2}>
                <AiOutlinePhone />
                <Text fontSize={'sm'} as={'flex'} align={'center'} mb={0}>
                  +1 206-214-2298
                </Text>
              </Flex>
              <Flex align={'center'} gap={2}>
                <BiEnvelope />
                <Text fontSize={'sm'} as={'flex'} align={'center'} mb={0}>
                  support@rezilla.com
                </Text>
              </Flex>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Quick Links</ListHeader>
              <Box as="a" href={'#'}>
                Home
              </Box>
              <Box as="a" href={'#'}>
                About
              </Box>
              <Box as="a" href={'#'}>
                Products
              </Box>
              <Box as="a" href={'#'}>
                Testimonials
              </Box>
              <Box as="a" href={'#'}>
                Contact us
              </Box>
              <Box as="a" href={'#'}>
                Feedback
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Category</ListHeader>
              <Box as="a" href={'#'}>
                Building & Construction
              </Box>
              <Box as="a" href={'#'}>
                Electronics & Electrical
              </Box>
              <Box as="a" href={'#'}>
                Drugs & Pharma
              </Box>
              <Box as="a" href={'#'}>
                Industrial Machinery
              </Box>
              <Box as="a" href={'#'}>
                Industrial Supplies
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Subscribe to our Newsletter!</ListHeader>
              <Stack direction={'row'} mb={10}>
                <Input
                  placeholder={'Email address'}
                  bg="white"
                  color={'black'}
                  border={0}
                />
                <IconButton
                  bg="#3a0ca3"
                  color="white"
                  _hover={{
                    bg: '#3a0ca3e1',
                  }}
                  borderRadius={'full'}
                  aria-label="Subscribe"
                  icon={<BsArrowRight size={20} />}
                />
              </Stack>
              <ListHeader>Follow Us on</ListHeader>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaLinkedin size={20} />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaFacebookF size={20} />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram size={20} />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box bg="#3a0ca3" color="white">
          <Container
            as={Stack}
            maxW={'5xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
            color={'#aaa'}
          >
            <Text mb={0}>© Rezilla – All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <Box as="a" href={'#'}>
                Terms and Conditions
              </Box>
              <Box as="a" href={'#'}>
                Privacy Policy
              </Box>
              <Box as="a" href={'#'}>
                Disclaimer
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
