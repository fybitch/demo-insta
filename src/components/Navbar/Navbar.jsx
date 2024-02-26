import { UnlockIcon } from "@chakra-ui/icons"
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from "@chakra-ui/react"


const Navbar = () => {

    const toast = useToast()

    const showToast = () =>{
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 3000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <UnlockIcon/>
        })
    }

  return (

    
    <Flex as='nav' p='10px' mb='40px' alignItems='center' >
            <Heading as='h1'>Ampta Tasks</Heading>
            <Spacer />

            <HStack gap='20px'>
                <Avatar name="Mario" src="/img/mario.png">
                    <AvatarBadge width='1.3em' bg='teal.500'>
                        <Text fontSize='xs' color='white'>3</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>Mario@netninja.com</Text>
                <Button colorScheme="orange" onClick={showToast}>Logout</Button>
            </HStack>
        </Flex>
  )
}

export default Navbar