import { Box, Card, CardFooter, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import delhiImg from '../../assets/delhi.png'

export default function Cities() {
  return (
    <Box my={20} py={10} textAlign={'center'} bg={'#edeff6'}>
      <Text color={'#3a0ca3'} fontSize={'1.2rem'} fontWeight={600}>
        Top Cities  
      </Text>
      <Text
        fontWeight={600}
        fontSize={'2rem'}
        fontFamily={'"Quicksand", sans-serif'}
        letterSpacing={'1.5px'}
        display={'inline'}
        pb={2}
      >
        Explore Real Estate in Popular Indian Cities
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
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card maxW="md">
              <Image
                objectFit="cover"
                src={delhiImg}
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
              >
                <Text mb={0}>Delhi / NCR</Text>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Text color={'#3a0ca3'} my={5} fontSize={'1.5rem'} fontWeight={600} cursor={'pointer'}>See All</Text>
    </Box>
  );
}
