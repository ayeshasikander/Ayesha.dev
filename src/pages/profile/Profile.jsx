import React from 'react';
import Laptop from './laptop/Laptop';
import Mobile from './mobile/Mobile';
import { useMediaQuery,Flex } from '@chakra-ui/react';

const Profile = () => {
    const [isMobile] = useMediaQuery('(max-width: 500px)');

    return (
        <Flex 
        justify="center" 
        align="center" 
        height="100vh" 
        bg="gray.50"
    >
        {isMobile ? <Mobile /> : <Laptop />}
    </Flex>
    )
}

export default Profile