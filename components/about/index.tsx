import { FC } from 'react'

import { Heading, VStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

const AboutComponent : FC = () => {
  return (
    <VStack
      spacing={4}
    >
      <Heading
        size='2xl'
        mb={'1rem'}
      >
        About
      </Heading>
      <Heading
        as='h2'
        size='lg'
      >
        The Portfolio
      </Heading>
      <Text
        textAlign='center'
      >
        The Real Vision Pro Crypto (RVPC) Portfolio is a community driven portfolio, based on the votes in the RVPC survey. It is administered by the Real Vision Bot, which aggregates the weekly votes into an allocation and informs the RVPC community about rebalancings, interesting developments and performance.
      </Text>
      <Heading
        size='lg'
      >
        The Goal
      </Heading>
      <Text
        textAlign='center'
      >
        We've already seen amazing results on our free-for-all Real Vision Bot portfolio survey, which has been running since April 2021. The RVPC Portfolio is the next step in our journey towards harnessing the power of the Hive Mind. The RVPC community gives us the opportunity to truly work on the decentralized signal engine of the future. Our overall goal is to build a soon-to-be investable product that incentivizes top performers in the community and can serve as a benchmark product highlighting the power of the Hive Mind.
      </Text>
      <Heading
        size='lg'
      >
        How to Vote
      </Heading>
      <Text
        textAlign='center'
      >
        Voting is possible via the "Vote" tab. Login is possible by connecting the wallet holding your RVPC NFT via Metmask. Note that no transaction is required for logging into the tool, only a login message has to be confirmed in Metamask. 
      </Text>
      <Text
        textAlign='center'
      >
        Once logged in, voting is possible at any time. Note that if you vote multiple times during the week, your latest vote will be overwritten. Results are aggregated weekly on Sunday night. 
      </Text>
      <Text
        textAlign='center'
      >
        For ease of use, the voting page always showed last weeks portfolio weights as starting points. You can equally allocated to all tokens by clicking "set equal allocation". Participants can allocate between 0 and 100% of the portfolio weights to a token.
      </Text>
      <Heading
        size='lg'
      >
        How is the Portfolio Aggregated?
      </Heading>
      <Text
        textAlign='center'
      >
        The portfolio aggregates the individual votes by averaging and standardizing such that the total weight sums up to 100%.
      </Text>
      <Heading
        size='lg'
      >
        Where Can I View the Results?
      </Heading>
      <Text
        textAlign='center'
      >
        Basic results and statistics can be viewed on the survey page under tab "Results". In addition, the Real Vision Bot keeps the RVPC community up-to-date via the RVPC Discord as well as Email.
      </Text>
      <Heading
        size='lg'
      >
        Will There Be an Investable Product?
      </Heading>
      <Text
        textAlign='center'
      >
        While the RVPC portfolio is not investable in its current format, we're working on a solution that allows interested investors to follow its signals. Ultimately, this will allow us to reward the community members for their insights.
      </Text>
      <Heading
        size='lg'
      >
        Why Can Only Nft Holders Vote?
      </Heading>
      <Text
        textAlign='center'
      >
        In this initial version of the RVPC Portfolio, we make use of the simplicity of using NFTs to access the voting page. We are working on the tech to allow RVPC subscribers to vote on a portfolio of their own, introducing a bit of healthy competition :)
      </Text>
      <Heading
        size='lg'
      >
        The Tokens
      </Heading>
      <Text
        textAlign='center'
      >
       The portfolio consists of 9 tokens. Currently, the following tokens are included in the survey: BTC, ETH, UNI, USDC, BNB, AAVE, MATIC, MKR, FTT. We plan to extend the list of available tokens in coordination with the RVPC community and availability on platforms that we're currently working with to launch an investable product.
      </Text>
    </VStack>
  )
}

export default AboutComponent