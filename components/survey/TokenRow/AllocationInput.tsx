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
        console.log(value);
        if(value == ""){
            updateAllocation(0);
            setInputAsString("0");
        } else if(parseFloat(value) <= 100){
            if(value[value.length-1] !== "."){
                updateAllocation(parseFloat(value));
            }
            setInputAsString(value);
        }        
    }

    const [inputAsString, setInputAsString] = useState(allocation?.toString() || "0");

    useEffect(() => {
        if(allocation !== undefined && allocation.toString() !== inputAsString){
            setInputAsString(allocation.toString())
        }
    }, [allocation]);

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
                onBlur={(e) => updateAllocation(parseFloat(e.target.value))}
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