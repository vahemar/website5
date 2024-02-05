import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { navigation } from '../../constants/constants';

const Footer = () => {
    return (
        <Flex cont align={'baseline'} justify={'space-between'} w={'full'} p={24} contrast={'50%'} bgGradient='linear(to-r, #CB8D, #0B3F37)' >
            <Flex fontWeight={500} fontSize={'20px'} direction={'column'}>
                <Text pb={4} color={'white'}>"BRAND NAME"</Text>
                <Text fontSize={'16px'}>@ 2021 'BRAND NAME'</Text>
                <Text fontSize={'16px'}>All Rights are Protected</Text>
                <Text textDecoration={'underline'} pt={4} color={'white'}>    Privacy policy</Text>
            </Flex>
            <Flex gap={32}>
                {
                    navigation.map(({ id, name, first, second, third, fourth, fifth }) => (
                        <Flex color={'white'} key={id} w={'full'} direction={'column'} align={'flex-start'}>
                            <Text fontSize={'22px'} fontWeight={600} color={'white'}>{name}</Text>
                            <Text>{first}</Text>
                            <Text>{second}</Text>
                            <Text>{third}</Text>
                            <Text>{fourth}</Text>
                            <Text>{fifth}</Text>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    );
}

export default Footer;