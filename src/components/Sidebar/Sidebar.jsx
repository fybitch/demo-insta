import { Box, Flex, Heading, Link, Tooltip } from "@chakra-ui/react"
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      bg="purple.400"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}

    >

      <Heading mb={20} >EventHub</Heading>

      <Flex direction={"column"} gap={10} w='full' height={"full"}>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>

          <Tooltip
            hasArrow
            label={"Create"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}>
            <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              alignItems={"center"}
              gap={15}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <AiFillHome size={25} />
              <Box display={{ base: "none", md: "block" }}>Home</Box>
            </Link>
          </Tooltip>

          <Tooltip
            hasArrow
            label={"Events"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}>
            <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              alignItems={"center"}
              gap={15}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <AiFillHome size={25} />
              <Box display={{ base: "none", md: "block" }}>Events</Box>
            </Link>
          </Tooltip>

          <Tooltip
            hasArrow
            label={"Profile"}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}>
            <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              alignItems={"center"}
              gap={15}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <AiFillHome size={25} />
              <Box display={{ base: "none", md: "block" }}>Profile</Box>
            </Link>
          </Tooltip>


        </Flex>

      </Flex>
    </Box>
  )
}

export default Sidebar