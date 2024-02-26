import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        placeholder='Email'
        fontSize={14}
        type='email'
        size={"sm"}
      />
      <Input
        placeholder='Username'
        fontSize={14}
        type='text'
        size={"sm"}
      />
      <Input
        placeholder='Full Name'
        fontSize={14}
        type='text'
        size={"sm"}
      />
      <InputGroup>
        <Input
          placeholder='Password'
          fontSize={14}
          type={showPassword ? "text" : "password"}
          size={"sm"}
        />
        <InputRightElement h='full'>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button
        w={"full"}
        colorScheme='blue'
        size={"sm"}
        fontSize={14}
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  )
}

export default Signup