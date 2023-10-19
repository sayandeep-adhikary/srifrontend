import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetailCard from '../components/ProductDetailCard/ProductDetailCard';
import ProductsYouMayLike from '../components/ProductsYouMayLike/ProductsYouMayLike';

export default function ProductDetails() {
  return (
    <>
      <Box
        m={10}
        mt={5}
        mb={40}
        mx={3}
        bg={'#edeff6'}
        py={5}
        px={{ base: 2, sm: 5 }}
        borderRadius={'lg'}
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/details">
              Detail page
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <ProductCard/>
        <ProductDetailCard/>
        <ProductsYouMayLike/>
      </Box>
      <Footer />
    </>
  );
}
