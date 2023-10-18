import React from 'react';
import {
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import testimonial1 from '../../assets/testomonial1.png';
import testimonial2 from '../../assets/testomonial2.png';

export default function Testimonials() {
  return (
    <Box mt={20} mb={40} py={20} textAlign={'center'} bg={'#edeff6'}>
      <Text color={'#3a0ca3'} fontSize={'1.2rem'} fontWeight={600}>
        TESTIMONIALS
      </Text>
      <Text
        fontWeight={600}
        fontSize={'2rem'}
        fontFamily={'"Quicksand", sans-serif'}
        letterSpacing={'1.5px'}
        borderBottom={'3px solid #3A0CA3'}
        display={'inline'}
        pb={2}
      >
        What our customers are saying about 99acres
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
            <Image src={testimonial1} alt="testimonial1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={testimonial2} alt="testimonial2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={testimonial1} alt="testimonial1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={testimonial2} alt="testimonial2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={testimonial1} alt="testimonial1" />
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
