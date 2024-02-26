import { Box, Flex } from "@chakra-ui/react"
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const PageLayout = ({children}) => {

  const { pathname } = useLocation();
  
  return (
    <Flex>
        {/* {side bar on the left} */}
        {pathname !== "/auth" ? (
            <Box w={{base: "70px", md:"240px"}}>
              <Sidebar/>
            </Box>
        ) : null}


        {/* {the page content of the right} */}
        <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}}>
            <Navbar/>
            {children}
        </Box>

    </Flex>
  )
}

export default PageLayout