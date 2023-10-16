import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

export default function SignUp() {
  return (
    <Box>
        <Text fontWeight={600} fontSize={'2rem'}>Sign Up</Text>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your Password"
          />
        </div>
        <Button type="submit" variant={'solid'} bg={'black'} color={'white'} w={'100%'} _hover={{bg:'gray.800'}}>
          Sign Up
        </Button>
      </form>
      <Text my={3} textAlign={'center'}>Already have an Account?<Link to={'/signup'} style={{textDecoration: 'none', color: '#4076ED'}}> Log in</Link> </Text>
    </Box>
  );
}
