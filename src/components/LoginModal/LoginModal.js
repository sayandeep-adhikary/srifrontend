import React, { useState } from 'react';
import loginImg from '../../assets/loginImg.png';
import { Button, ButtonGroup, Image, Stack } from '@chakra-ui/react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function LoginModal() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center px-0">
          <Image className="img-fluid" src={loginImg} alt="login/register" />
        </div>
        <div className="col-sm-12 col-lg-6 d-flex align-items-center justify-content-center pt-3">
          <Stack >
            <ButtonGroup
              variant="outline"
              spacing="10"
              bg={'#EBEDF4'}
              borderRadius={'lg'}
              px={10}
              pt={1}
            >
              <Button
                borderRadius="none"
                className={isLogin ? 'activeBtn' : ''}
                _hover={{ bg: 'inherit' }}
                onClick={() => setIsLogin(true)}
              >
                Login
              </Button>
              <Button
                borderRadius="none"
                _hover={{ bg: 'inherit' }}
                className={isLogin === false ? 'activeBtn' : ''}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </Button>
            </ButtonGroup>
            {isLogin ? <Login /> : <SignUp />}
          </Stack>
        </div>
      </div>
    </div>
  );
}
