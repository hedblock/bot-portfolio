import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'

import { getEllipsisTxt } from '../../services/utils';
import useAuth, { connectors } from '../../hooks/useAuth';

const Wallet = () => {

    const { account, connect } = useAuth();

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
                            {
                                connectors.map(connector => (
                                    <MenuItem 
                                        key={connector.title}
                                        onClick={() => connect(connector.connectorId)}
                                    >
                                        {connector.title}
                                    </MenuItem>
                                ))
                            }
                        </>
                    )
                }
                
            </MenuList>
        </Menu>
  )
}


        

export default Wallet