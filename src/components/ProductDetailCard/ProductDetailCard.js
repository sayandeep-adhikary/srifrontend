import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function ProductDetailCard() {
  const [isProduct, setIsProduct] = useState('product');
  return (
    <Card
      overflow="hidden"
      variant="outline"
      p={5}
      fontFamily={"'Poppins', sans-serif"}
      my={5}
    >
      {/* <div className="container">
          <div className="row">
            <Box
              className="col-sm-12 col-lg-6 d-flex align-items-center my-3"
              justifyContent={'space-between'}
            >
              <div className="row">
                <div className="col-sm-12 col-lg-10 my-2 d-flex align-items-center justify-content-center">
                  <Image src={fan} alt="fan" className="img-fluid" maxW={'80%'} />
                </div>
                <div className="col-sm-12 col-lg-2 my-2 d-flex flex-column align-items-center justify-content-center">
                  <Flex
                    gap={2}
                    direction={{ base: 'row', md: 'column-reverse' }}
                    minW={'5vw'}
                  >
                    <Image src={fanSmall} alt="fanSmall" className="img-fluid" />
                    <Image src={fanSmall} alt="fanSmall" className="img-fluid" />
                    <Image src={fanSmall} alt="fanSmall" className="img-fluid" />
                  </Flex>
                </div>
              </div>
            </Box>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center my-3">
              <Stack spacing="4">
                <Box>
                  <Heading
                    size="md"
                    textTransform="uppercase"
                    fontFamily={"'Poppins', sans-serif"}
                    lineHeight={'2rem'}
                    letterSpacing={'1px'}
                  >
                    3 Blades Rich Ivory Usha Air King Ceiling Fan, Sweep Size:
                    1200 mm, Power: 74W
                  </Heading>
                  <Flex
                    gap={5}
                    align={'center'}
                    fontFamily={"'Poppins', sans-serif"}
                    fontWeight={600}
                    letterSpacing={'1px'}
                  >
                    <Text pt="2" fontSize={{ base: "lg", md: "md", lg: "3xl" }} color={'#3a0ca3'}>
                      Rs. 7750/ Piece
                    </Text>
                    <Text pt="2" fontSize={{ base: "md", md: "md", lg: "lg" }}>
                      Get Latest Price
                    </Text>
                  </Flex>
                </Box>
                <Stack
                  divider={<StackDivider />}
                  spacing="2"
                  fontFamily={"'Poppins', sans-serif"}
                  letterSpacing={'1px'}
                >
                  <Flex gap={30} justifyContent={'space-between'}>
                    <Text fontSize="sm" color={'#767676'} mb={0}>
                      Number Of Blades
                    </Text>
                    <Text fontSize="sm" fontWeight={600} mb={0}>
                      3 Blades
                    </Text>
                  </Flex>
                  <Flex gap={30} justifyContent={'space-between'}>
                    <Text fontSize="sm" color={'#767676'} mb={0}>
                      Fan Speed
                    </Text>
                    <Text fontSize="sm" fontWeight={600} mb={0}>
                      350 Rpm
                    </Text>
                  </Flex>
                  <Flex gap={30} justifyContent={'space-between'}>
                    <Text fontSize="sm" color={'#767676'} mb={0}>
                      Sweep Size
                    </Text>
                    <Text fontSize="sm" fontWeight={600} mb={0}>
                      1200 mm
                    </Text>
                  </Flex>
                  <Flex gap={30} justifyContent={'space-between'}>
                    <Text fontSize="sm" color={'#767676'} mb={0}>
                      Color
                    </Text>
                    <Text fontSize="sm" fontWeight={600} mb={0}>
                      Rich Ivory
                    </Text>
                  </Flex>
                </Stack>
                <Box>
                  <Text pt="2" fontSize="sm">
                    Designed to keep you cool and calm, the beautifully composed
                    Usha Air King Ceiling Fan complements your interiors with its
                    electroplated decorative design. It comes in 3 colours,
                    helping you to choose the one most suited to your interior
                    décor.
                  </Text>
                </Box>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#3a0ca3'}>View Complete Details</Text>
                  <Button
                    bg={'#3a0ca3'}
                    color={'white'}
                    _hover={{ bg: '#3a0ca3e1' }}
                    letterSpacing={'1px'}
                  >
                    Get Price
                  </Button>
                </Flex>
              </Stack>
            </div>
          </div>
        </div> */}
      <Box bg={'#ebedf4'} px={5} pt={2} borderRadius={'lg'}>
        <Flex gap={10}>
          <Button
            variant={'unstyled'}
            borderBottom={isProduct === 'product' ? '4px solid #3a0ca3' : ''}
            borderRadius={'none'}
            onClick={() => setIsProduct('product')}
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          >
            Products Details
          </Button>
          <Button
            variant={'unstyled'}
            borderRadius={'none'}
            borderBottom={isProduct === 'company' ? '4px solid #3a0ca3' : ''}
            onClick={() => setIsProduct('company')}
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          >
            Company Details
          </Button>
        </Flex>
      </Box>
      <Stack spacing="4" my={5}>
        <Box fontFamily={"'Poppins', sans-serif"}>
          <Text
            fontWeight={600}
            letterSpacing={'1px'}
            pt="2"
            fontSize={{ base: 'lg', md: 'md', lg: '3xl' }}
            color={'#3a0ca3'}
          >
            Product Specification
          </Text>
        </Box>
        <Stack
          divider={<StackDivider />}
          spacing="2"
          fontFamily={"'Poppins', sans-serif"}
          letterSpacing={'1px'}
        >
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Number Of Blades
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              3 Blades
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Fan Speed
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              350 Rpm
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Power
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              74 W
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Sweep Size
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              1200 mm
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Color
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Rich Ivory
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Warranty
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              1 Year
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Brand
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              USHA
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Air Delivery
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              207 m3/min
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Model Name/Number
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Air King
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Country Of Origin
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Made In India
            </Text>
          </Flex>
        </Stack>
      </Stack>
      <Text
        fontWeight={600}
        letterSpacing={'1px'}
        pt="2"
        fontSize={{ base: 'lg', md: 'md', lg: '3xl' }}
        color={'#3a0ca3'}
      >
        Product Description
      </Text>
      <Text pt="2" fontSize="sm" color={'#767676'} lineHeight={'2rem'}>
        Designed to keep you cool and calm, the beautifully composed Usha Air
        King Ceiling Fan complements your interiors with its electroplated
        decorative design. It comes in 3 colours, helping you to choose the one
        most suited to your interior décor.
      </Text>
      <Text
        fontWeight={600}
        letterSpacing={'1px'}
        pt="2"
        fontSize={{ base: 'lg', md: 'md', lg: '3xl' }}
        color={'#3a0ca3'}
      >
        Features
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={600} letterSpacing={'1px'}>
        High lift angle of blade for wider air spread
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={600} letterSpacing={'1px'}>
        Superior high permeability grade electric steel lamination for improved
        life
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={600} letterSpacing={'1px'}>
        Performs well even at low voltage
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={600} letterSpacing={'1px'}>
        Electroplated decorative for elegant looks
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={600} letterSpacing={'1px'}>
        Glossy powder coated paint for superior finish and longer life
      </Text>
      <Text
        fontWeight={600}
        letterSpacing={'1px'}
        pt="2"
        fontSize={{ base: 'lg', md: 'md', lg: '3xl' }}
        color={'#3a0ca3'}
      >
        Available Color:
      </Text>
      <Text pt="2" fontSize="sm" fontWeight={600} letterSpacing={'1px'}>
        Rich White, Rich Brown
      </Text>
      <Stack spacing="4" my={5}>
        <Box fontFamily={"'Poppins', sans-serif"}>
          <Text
            fontWeight={600}
            letterSpacing={'1px'}
            pt="2"
            fontSize={{ base: 'lg', md: 'md', lg: '3xl' }}
            color={'#3a0ca3'}
          >
            About the Company
          </Text>
        </Box>
        <Stack
          divider={<StackDivider />}
          spacing="2"
          fontFamily={"'Poppins', sans-serif"}
          letterSpacing={'1px'}
        >
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Year of Establishment
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              1935
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Legal Status For Firm
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Limited Company (Ltd./Pvt.Ltd.)
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Nature Of Business
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Manufacturer
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Number of Employees
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Rs. 1000-5000 Crore
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Xyz Member Since
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              oct 2014
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              GST
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              06aa34aa78gh596354
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Import Export Code (IEC)
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              06aa34aa78gh596354
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Air Delivery
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              207 m3/min
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Model Name/Number
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Air King
            </Text>
          </Flex>
          <Flex gap={30} justifyContent={'space-between'}>
            <Text fontSize="sm" color={'#767676'} mb={0}>
              Country Of Origin
            </Text>
            <Text fontSize="sm" fontWeight={600} mb={0}>
              Made In India
            </Text>
          </Flex>
        </Stack>
      </Stack>
      <Text pt="2" fontSize="sm" color={'#767676'} lineHeight={'2rem'}>
      The Siddharth Shriram group was founded by the legendary Lala Shriram in 1889. The group’s businesses extended to textiles, chemicals, sugar, automobiles, engines, nylon tyre cord, automotive components, edible oil, heavy chemicals (fertilizers), engineering foundries, sewing machines, fans and home appliances. In 1989, the group underwent a major transformation, following the segregation of business interests across the new generation - the descendants of Lala Shriram. The group’s proud heritage and achievement over the years have earned it the trust and respect of its consumers both in India and abroad.
      </Text>
      <Text pt="2" fontSize="sm" color={'#767676'} lineHeight={'2rem'} mt={5}>
      Usha International Limited (the Company), a constituent of the Siddharth Shriram group, was formed in 1935 and started doing business under the brand name, Usha. Over the decades, this brand name has become a household name in India while the company has diversified into the business of new age home appliances, sewing machines, fans, power products, water cooler, water dispensers, modern farm equipments and auto components.
      </Text>
    </Card>
  );
}
