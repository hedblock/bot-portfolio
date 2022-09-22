import { FC, useEffect, useState } from 'react'

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

    const handleTextChange = (value : string) => {
        if(value == ""){
            updateAllocation(0);
            setInputAsString("0");
        } else if(parseFloat(value) <= 100){
            if(value[-1] !== "."){
                updateAllocation(parseFloat(value));
            } else {
                setInputAsString(value);
            }
        }        
    }

    const [inputAsString, setInputAsString] = useState(allocation?.toString() || "0");

    useEffect(() => {
        console.log(allocation, inputAsString);
        if(allocation && allocation.toString() !== inputAsString){
            setInputAsString(allocation.toString())
        }
    }, [inputAsString, allocation]);

    return (
        <HStack
            spacing={4}
            width='100%'
        >
            <Slider
                flex={1}
                focusThumbOnChange={false}
                value={allocation}
                onChange={updateAllocation}
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
                value={inputAsString}
                onChange={(val) => handleTextChange(val)}
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