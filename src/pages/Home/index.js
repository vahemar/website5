import { Flex } from '@chakra-ui/react';
import React from 'react';
import BestOnSales from './BestOnSales';
import Production from './Production';
import New from './New';
import Recommendation from './Recommendation';
import Sale from './Sale';
import Opinions from './Opinions';
import Reason from './Reason';
import Offer from './Offer';
import TopSale from './TopSale';

const Home = () => {
    return (
        <Flex w={'full'} direction={'column'} align={'center'} justify={'center'}>
            <Flex w={'98%'} direction={'column'} >
            {/* <TopSale />
            <Production /> */}
            <BestOnSales />
            {/* <New />
            <Offer />
            <Recommendation />
            <Sale />
            <Opinions />
            <Reason /> */}
            </Flex>
        </Flex>
    );
}

export default Home;
