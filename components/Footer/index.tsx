import React from 'react'

import {
    Box, 
    Flex, 
    HStack,
    Image,
    SimpleGrid,
    Text
} from '@chakra-ui/react'
import LinkColumn from './LinkColumn'

import Socials from './Socials'

const columns = [
    {
        title: 'Real Vision',
        links: [
            {
                name: 'About Us',
                href: 'https://www.realvision.com/about'
            },
            {
                name: 'FAQ',
                href: 'https://www.realvision.com/faq'
            },
            {
                name: 'Shop',
                href: 'https://shop.realvision.com',
            },
            {
                name: 'Careers',
                href: 'https://jobs.lever.co/realvision',
            },
            {
                name: 'Real Vision Creative Studios',
                href: 'https://www.realvision.com/creativestudios',
            },
        ]
    },
    {
        title: 'Memberships',
        links: [
            {
                name: 'Essential',
                href: 'https://info.realvision.com/essential'
            },
            {
                name: 'Plus',
                href: 'https://www.realvision.com/the-academy'
            },
            {
                name: 'Pro',
                href: 'https://www.realvision.com/pricing'
            },
            {
                name: 'Daily Briefing',
                href: 'https://www.realvision.com/daily-briefing-welcome',
            },
            {
                name: 'Free Crypto',
                href: 'https://www.realvision.com/crypto',
            },
            {
                name: 'Pricing',
                href: 'https://www.realvision.com/pricing'
            }
        ]
    },
    {
        title: 'Explore',
        links: [
            {
                name: 'Videos',
                href: 'https://www.realvision.com/videos'
            },
            {
                name: 'Shows',
                href: 'https://www.realvision.com/shows'
            },
            {
                name: 'Podcasts',
                href: 'https://www.realvision.com/podcast'
            },
            {
                name: 'Blog',
                href: 'https://www.realvision.com/blog'
            }
        ]
    },
    {
        title: 'Themes',
        links: [
            {
                name: "Global Recession: What's Next?",
                href: "https://www.realvision.com/themes/global-recession-whats-next"
            },
            {
                name: 'China: Danger and Opportunity',
                href: 'https://www.realvision.com/themes/china-danger-and-opportunity'
            },
            {
                name: 'Debt Week',
                href: 'https://www.realvision.com/themes/debt-week'
            },
            {
                name: 'Housing Week',
                href: 'https://www.realvision.com/themes/housing-week'
            },
            {
                name: 'Europe',
                href: 'https://www.realvision.com/themes/a-fragile-europe'
            },
            {
                name: 'Themes',
                href: 'https://www.realvision.com/themes/'
            }
        ]
    },
    {
        title: 'Support',
        links: [
            {
                name: 'Terms and Conditions',
                href: 'https://www.realvision.com/mobile-app/terms'
            },
            {
                name: 'Disclaimer',
                href: 'https://www.realvision.com/mobile-app/disclaimer'
            },
            {
                name: 'Privacy',
                href: 'https://www.realvision.com/mobile-app/privacy'
            },
            {
                name: 'Cookie Policy',
                href: 'https://www.realvision.com/cookie-policy'
            },
            {
                name: 'Contact Us',
                href: 'https://www.realvision.com/contact'
            }
        ]
    }
]

const Footer = () => {
  return (
    <Box
        w='100%'
        bg='white'
        pt={"80px"}
        px={"48px"}
        pb={"56px"}
    >
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems='flex-start'
            gap={{ base: 8, lg: 16 }}
            w='100%'
        >
            <Image 
                src='https://www.realvision.com/wp/app/themes/prospect/images/logos/generic/black/logo-generic2x.png?x27527'
                height={50}
            />
            <SimpleGrid
                alignItems='flex-start'
                columns={{ base: 1, lg: 5 }}
                gap={8}
                flex={1}
                flexWrap='wrap'
            >
                {
                    columns.map((column, index) => {
                        return (
                            <LinkColumn
                                key={index}
                                title={column.title}
                                links={column.links}
                            />
                        )
                    })
                }
            </SimpleGrid>
        </Flex>
        <HStack
            justifyContent='space-between'
        >
            <Socials />
            <Text
                color='gray.500'
            >
                © 2022 Real Vision
            </Text>
        </HStack>
    </Box>
  )
}

export default Footer