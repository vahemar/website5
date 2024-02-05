import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { reasons } from '../../../constants/constants';

const Reason = () => {
    return (
        <Flex w={'full'}>
            <Flex  p={24} direction={'column'} bg={'#F6F6F6'} w={'full'} display={['none', 'none', 'flex', 'flex']}>
                <Flex w={'full'} justify={'center'} align={'center'}>
                    <Text pb={4} color={'black'} fontFamily={'dm mono'} fontSize={'50px'} fontWeight={500} >Choose Us</Text>
                </Flex>
                <Flex w={'full'} flexWrap={'wrap'} pl={'130px'} gap={2} pr={'130px'} justify={'space-between'}>
                    {
                        reasons.map(({ id, name, description, readMore, arrowDown, icon }) => (
                            <Flex  p={2} key={id} direction={'column'} gap={2} w={'320px'}>
                                {icon}
                                <Text fontWeight={700} fontSize={'20px'}>{name}</Text>
                                <Text>{description}</Text>
                                <Flex direction={'row'} align={'center'}  gap={4}>
                                    <Text fontWeight={700}  bgGradient='linear(to-l, #E4A16F, #5E3928)' bgClip='text'>{readMore}</Text>
                                    {arrowDown}
                                </Flex>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex w={'full'} display={['flex', 'flex', 'none', 'none']}></Flex>
        </Flex>
    );
}

export default Reason;