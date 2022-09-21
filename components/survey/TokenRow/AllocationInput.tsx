import { FC } from 'react'

import {
    HStack,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'

interface Props {
    allocation: number;
    updateAllocation: (allocation: number) => void;
}

const AllocationInput : FC<Props> = ({ allocation, updateAllocation}) => {

    const handleChange = (value: number) => {
        updateAllocation(value);
    }

    return (
        <HStack
            spacing={4}
            width='100%'
        >
            <Slider
                flex={1}
                focusThumbOnChange={false}
                value={allocation}
                onChange={handleChange}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb
                    boxSize='20px'
                />
            </Slider>
            <NumberInput 
                maxW='100px' 
                value={allocation} 
                onChange={(val_as_string) => handleChange(parseFloat(val_as_string) || 0)}
                min={0}
                max={100}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </HStack>
    )
}

export default AllocationInput