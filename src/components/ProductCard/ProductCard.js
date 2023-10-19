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
import React from 'react';
import fan from '../../assets/fan.png';
import fanSmall from '../../assets/fanSmall.png';

export default function ProductCard() {
  return (
    <Card
      overflow="hidden"
      variant="outline"
      p={5}
      fontFamily={"'Poppins', sans-serif"}
    >
      <div className="container">
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
      </div>
    </Card>
  );
}
