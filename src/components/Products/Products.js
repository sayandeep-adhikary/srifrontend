import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './Products.module.css';
import construction from '../../assets/construction.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import flyash from '../../assets/flyash.png';

export default function Products() {
  return (
    <Box mt={10} textAlign={'center'}>
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
          style={{ filter: 'brightness(75%)' }}
        />
        <Stack
          pos={'absolute'}
          fontSize={'1.2rem'}
          align={'center'}
          className={styles.stack}
          minW={'100vw'}
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
      <Box px={10}>
        <Swiper
          style={{
            backgroundColor: '#ebedf4',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            margin: '1rem 0',
          }}
          modules={[Navigation]}
          loop={true}
          spaceBetween={0}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              Brick Making Machines
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              Plywoods
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              Wooden Door
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              Passenger Lifts
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              Excavator
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              PVC Pipes
            </Text>
          </SwiperSlide>
          <SwiperSlide>
            <Text
              mb={0}
              color={'black'}
              fontWeight={600}
              fontFamily={"'Poppins', sans-serif"}
              letterSpacing={'1px'}
              cursor={'pointer'}
              fontSize={'1rem'}
            >
              Commercials
            </Text>
          </SwiperSlide>
        </Swiper>
        <Swiper
          style={{
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            margin: '1rem 0',
          }}
          modules={[Navigation]}
          loop={true}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Stack gap={10}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack gap={10}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack gap={10}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack gap={10}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="elevated"
                px={5}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: '100%', sm: '200px' }}
                  src={flyash}
                  alt="Caffe Latte"
                />
                <CardBody textAlign={{ base: 'center', sm: 'left' }} my={'auto'} >
                  <Heading size="sm" lineHeight={'1.5rem'}>Fly Ash Brick Making Machine</Heading>
                </CardBody>
              </Card>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
