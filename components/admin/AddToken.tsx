import React from 'react'

import { HStack, VStack, Input, Button, Text } from '@chakra-ui/react';

import TokenOptions from './TokenOptions';
import Card from '../utilities/Card';

import { Token } from '../../hooks/useAdmin';

interface Props {
    addToken: (token: string) => Promise<void>,
    selectOption: (token: Token) => void,
    addOptions: Token[],
    addError: boolean
}

const AddToken : React.FC<Props> = ({ addToken, selectOption, addOptions, addError }) => {

    const [symbol, setSymbol] = React.useState('');

    const submit = async () => {
        await addToken(symbol.toUpperCase());
        setSymbol('');
    }

  return (
    <VStack 
        spacing={4}
    >
        <Card>
            <VStack
                spacing={2}
            >
                <HStack 
                    spacing={2}
                >
                    <Input 
                        placeholder='Token Symbol'
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                        sx={{
                            input: {
                                color: '#FFF'
                            }
                        }}
                    />
                    <Button
                        variant='solid'
                        onClick={submit}
                    >
                        Add
                    </Button>
                </HStack>
                {addError && (
                    <Text 
                        color='red.600'
                    >
                        Token not found.
                    </Text>
                )}
            </VStack>
        </Card>
        {addOptions.length > 0 && (
            <TokenOptions 
                addOptions={addOptions} 
                selectOption={selectOption} 
            />
        )}
    </VStack>
  )
}

export default AddToken