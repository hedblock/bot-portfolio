import { FC } from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
    MenuItem,
    Button
} from '@chakra-ui/react'

import { useMoralis } from 'react-moralis';
import { getEllipsisTxt } from '../../services/utils';

const Wallet = () => {

    const { account, enableWeb3 } = useMoralis();

    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'solid'}
                cursor={'pointer'}
                minW={0}
            >
                {account ? getEllipsisTxt(account) : "Connect Wallet"}
            </MenuButton>
            <MenuList alignItems={'center'}>
                {
                    account ? (
                        <>
                            <MenuItem>
                                Disconnect
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem
                                onClick={() => enableWeb3()}
                            >
                                Metamask
                            </MenuItem>
                            <MenuItem>
                                Coinbase Wallet
                            </MenuItem>
                            
                        </>
                    )
                }
                
            </MenuList>
        </Menu>
  )
}


        

export default Wallet