import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";

const Login = () => {
    return (
        <>
            <Input
                placeholder='Email'
                fontSize={14}
                type='email'
                size={"sm"}

            />
            <Input
                placeholder='Password'
                fontSize={14}
                size={"sm"}
                type='password'
            />

            <Button
                w={"full"}
                colorScheme='blue'
                size={"sm"}
                fontSize={14}
            >
                Log in
            </Button>
        </>
    )
}

export default Login