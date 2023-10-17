import { Box, Card, CardFooter, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Featured() {
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
        Featured categories
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
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
              />

              <CardFooter
              alignItems={'center'}
                justify="center"
                flexWrap="wrap"
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
                fontFamily={"'Poppins', sans-serif"}
                bg={'#3A0CA3'}
                color={'white'}
              >
                <Text mb={0}>Building & Construction</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Text color={'#3a0ca3'} my={5} fontSize={'1.5rem'} fontWeight={600} cursor={'pointer'}>See All</Text>
    </Box>
  );
}
