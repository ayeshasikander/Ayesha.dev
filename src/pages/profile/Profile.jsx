import React from 'react';
import Laptop from './laptop/Laptop';
import Mobile from './mobile/Mobile';
import { useMediaQuery } from '@chakra-ui/react';

const Profile = () => {
    const [isMobile] = useMediaQuery('(max-width: 500px)');

    return (
        <div>
            {isMobile ? <Mobile /> : <Laptop />}
        </div>
    )
}

export default Profile