import React from 'react'

import {
    HStack, 
    IconButton
} from '@chakra-ui/react'

import { IconType } from 'react-icons'
import { FaTwitter, FaLinkedinIn, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa'


interface Social {
    icon: IconType;
    href: string;
}

const socials : Social[] = [
    {
        icon: FaTwitter,
        href: 'https://twitter.com/realvision'
    },
    {
        icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/company/real-vision/'
    },
    {
        icon: FaYoutube,
        href: 'https://www.youtube.com/channel/UCBH5VZE_Y4F3CMcPIzPEB5A'
    },
    {
        icon: FaFacebook,
        href: 'https://www.facebook.com/realvisionvideo/'
    },
    {
        icon: FaInstagram,
        href: 'https://www.instagram.com/realvisiontv/'
    }
]

const Socials = () => {
  return (
    <HStack>
        {
            socials.map((social, index) => (
                <IconButton 
                    key={index}
                    as='a'
                    href={social.href}
                    aria-label={social.href}
                    icon={<social.icon />}
                    bg='gray.500'
                    rounded='full'
                    _hover={{
                        bg: 'gray.300'
                    }}
                    size='xs'
                />
            ))

        }
    </HStack>
  )
}

export default Socials