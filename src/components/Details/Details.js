import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './Profilecard/ProfileCard';
import Footer from '../Footer/Footer';
import ContactCard from './ContactCard/ContactCard';
import CompanyCard from './CompanyCard/CompanyCard';

export default function Details() {
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
            <BreadcrumbLink as={Link} to="/profile">
              Profile page
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <ProfileCard />
        <ContactCard/>
        <CompanyCard/>
      </Box>
      <Footer />
    </>
  );
}
