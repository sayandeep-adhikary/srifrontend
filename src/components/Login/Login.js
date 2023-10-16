import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

export default function Login() {
  return (
    <Box>
        <Text fontWeight={600} fontSize={'2rem'}>Log In</Text>
        <Text>New to Speak Up? <Link to={'/signup'} style={{textDecoration: 'none', color: '#4076ED'}}>Sign Up</Link> </Text>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email or Username</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email or username"
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
        <Box className="form-group form-check d-flex" justifyContent={'space-between'}>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            style={{accentColor: 'black'}}
          />
          <label className="form-check-label" htmlFor="exampleCheck1" >
            Remember Me
          </label>
          <Text cursor={'pointer'}>Forget Password</Text>
        </Box>
        <Button type="submit" variant={'solid'} bg={'black'} color={'white'} w={'100%'} _hover={{bg:'gray.800'}}>
          Login
        </Button>
      </form>
      <Flex my={3} justifyContent={'center'} gap={5}>
        <FcGoogle size={30}/>
        <FaFacebook size={30} color='#1877F2'/>
        <FaInstagram size={30} color='#DC3171'/>
      </Flex>
      <Text textAlign={'center'}>Don’t have an Accoount?<Link to={'/signup'} style={{textDecoration: 'none', color: '#4076ED'}}> Sign Up</Link> </Text>
    </Box>
  );
}
