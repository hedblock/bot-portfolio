import { FC } from 'react'

import { HStack, Text, useColorModeValue } from '@chakra-ui/react'

interface Props {
    allocation: number;
    change: number;
}

const AllocationDisplay : FC<Props> = ({ allocation, change}) => {

    const changePositive = useColorModeValue('green.500', 'green.200');
    const changeNegative = useColorModeValue('red.600', 'red.300');

    return (
        <HStack
            flex={1}
        >
            <Text
                fontWeight='bold'
            >
                {allocation}%
            </Text>
            <Text
                fontSize='sm'
                color={change >= 0 ? changePositive : changeNegative}
            >
                ({change > 0 && "+"}{change}%)
            </Text>
        </HStack>
    )
}

export default AllocationDisplay