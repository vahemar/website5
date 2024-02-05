import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
    return (
        <Flex p={8} pl={48} pr={48} color={'white'} fontSize={'18px'} fontWeight={400} justify={'space-between'} bgGradient='linear(to-r,  #CB8D, #0B3F37)' w={'full'}>
           <Flex direction={'row'} gap={8}>
            <Text>"BRAND NAME"</Text>
            <Text>Catalog</Text>
            <Text>News</Text>
            <Text>Delivery</Text>
            <Text>About us</Text>
            <Text>Contacts</Text>
            </Flex>
            <Flex gap={4}>
                <Text>Shopping_cart</Text>
            </Flex>
        </Flex>
    );
}

export default Header;