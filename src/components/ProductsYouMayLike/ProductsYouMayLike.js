import React from 'react';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import fan from '../../assets/fan.png'

export default function ProductsYouMayLike() {
  return (
    <Box mt={20} mb={10} textAlign={'center'}>
      <Text
        fontWeight={600}
        fontSize={'2rem'}
        fontFamily={'"Quicksand", sans-serif'}
        letterSpacing={'1.5px'}
        borderBottom={'3px solid #3A0CA3'}
        display={'inline'}
        pb={2}
      >
        Products You May Like
      </Text>
      <Box px={10} mt={10}>
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
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
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={fan}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'left'}>
                    3 Blades usha fontana 75 watt single 1270 mm ceil..
                  </Heading>
                  <Text
                    color="#3a0ca3"
                    fontSize="xl"
                    textAlign={'left'}
                    fontWeight={600}
                  >
                    Rs 7750/ piece
                  </Text>
                  <Flex align={'center'} justifyContent={'space-between'} color={'#889099'}>
                    <Text>Pushp Traders</Text>
                    <Text>Mumbai Maharashtra</Text>
                  </Flex>
                  <Button
                    size={'md'}
                    bg={'#3A0CA3'}
                    color={'white'}
                    fontFamily={'"Inter", sans-serif'}
                    _hover={{ bg: '#3A0CA3e1' }}
                    letterSpacing={'1.5px'}
                  >
                    Get Price
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={fan}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'left'}>
                    3 Blades usha fontana 75 watt single 1270 mm ceil..
                  </Heading>
                  <Text
                    color="#3a0ca3"
                    fontSize="xl"
                    textAlign={'left'}
                    fontWeight={600}
                  >
                    Rs 7750/ piece
                  </Text>
                  <Flex align={'center'} justifyContent={'space-between'} color={'#889099'}>
                    <Text>Pushp Traders</Text>
                    <Text>Mumbai Maharashtra</Text>
                  </Flex>
                  <Button
                    size={'md'}
                    bg={'#3A0CA3'}
                    color={'white'}
                    fontFamily={'"Inter", sans-serif'}
                    _hover={{ bg: '#3A0CA3e1' }}
                    letterSpacing={'1.5px'}
                  >
                    Get Price
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={fan}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'left'}>
                    3 Blades usha fontana 75 watt single 1270 mm ceil..
                  </Heading>
                  <Text
                    color="#3a0ca3"
                    fontSize="xl"
                    textAlign={'left'}
                    fontWeight={600}
                  >
                    Rs 7750/ piece
                  </Text>
                  <Flex align={'center'} justifyContent={'space-between'} color={'#889099'}>
                    <Text>Pushp Traders</Text>
                    <Text>Mumbai Maharashtra</Text>
                  </Flex>
                  <Button
                    size={'md'}
                    bg={'#3A0CA3'}
                    color={'white'}
                    fontFamily={'"Inter", sans-serif'}
                    _hover={{ bg: '#3A0CA3e1' }}
                    letterSpacing={'1.5px'}
                  >
                    Get Price
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={fan}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'left'}>
                    3 Blades usha fontana 75 watt single 1270 mm ceil..
                  </Heading>
                  <Text
                    color="#3a0ca3"
                    fontSize="xl"
                    textAlign={'left'}
                    fontWeight={600}
                  >
                    Rs 7750/ piece
                  </Text>
                  <Flex align={'center'} justifyContent={'space-between'} color={'#889099'}>
                    <Text>Pushp Traders</Text>
                    <Text>Mumbai Maharashtra</Text>
                  </Flex>
                  <Button
                    size={'md'}
                    bg={'#3A0CA3'}
                    color={'white'}
                    fontFamily={'"Inter", sans-serif'}
                    _hover={{ bg: '#3A0CA3e1' }}
                    letterSpacing={'1.5px'}
                  >
                    Get Price
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={fan}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'left'}>
                    3 Blades usha fontana 75 watt single 1270 mm ceil..
                  </Heading>
                  <Text
                    color="#3a0ca3"
                    fontSize="xl"
                    textAlign={'left'}
                    fontWeight={600}
                  >
                    Rs 7750/ piece
                  </Text>
                  <Flex align={'center'} justifyContent={'space-between'} color={'#889099'}>
                    <Text>Pushp Traders</Text>
                    <Text>Mumbai Maharashtra</Text>
                  </Flex>
                  <Button
                    size={'md'}
                    bg={'#3A0CA3'}
                    color={'white'}
                    fontFamily={'"Inter", sans-serif'}
                    _hover={{ bg: '#3A0CA3e1' }}
                    letterSpacing={'1.5px'}
                  >
                    Get Price
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={fan}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={'left'}>
                    3 Blades usha fontana 75 watt single 1270 mm ceil..
                  </Heading>
                  <Text
                    color="#3a0ca3"
                    fontSize="xl"
                    textAlign={'left'}
                    fontWeight={600}
                  >
                    Rs 7750/ piece
                  </Text>
                  <Flex align={'center'} justifyContent={'space-between'} color={'#889099'}>
                    <Text>Pushp Traders</Text>
                    <Text>Mumbai Maharashtra</Text>
                  </Flex>
                  <Button
                    size={'md'}
                    bg={'#3A0CA3'}
                    color={'white'}
                    fontFamily={'"Inter", sans-serif'}
                    _hover={{ bg: '#3A0CA3e1' }}
                    letterSpacing={'1.5px'}
                  >
                    Get Price
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Text
        color={'#3a0ca3'}
        my={5}
        fontSize={'1.5rem'}
        fontWeight={600}
        cursor={'pointer'}
      >
        See All
      </Text>
    </Box>
  );
}
