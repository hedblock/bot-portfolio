import { FC } from 'react'

import { 
  Heading, 
  VStack, 
  Text, 
  UnorderedList, 
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const AboutComponent : FC = () => {
  return (
    <VStack
      spacing={4}
      align='flex-start'
    >
      <Heading
        size='2xl'
        mb={'1rem'}
        w={'100%'}
      >
        About
      </Heading>
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
            >
              The Portfolio
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <VStack
              alignItems='flex-start'
              spacing={2}
            >
              <Text>
                It&apos;s powered by you... 
              </Text>
              <Text
              >
                The Pro Crypto Portfolio is a community-driven crypto portfolio and will serve as a benchmark that highlights the power of the Hive Mind.
              </Text>
              <Text>
                So, how does it work?
              </Text>
              <Text>
                You all will fill out a survey where you&apos;ll indicate your recommended portfolio allocation. Then, the Real Vision Bot will tally up the votes on a weekly basis and create a portfolio based on the results. To make sure we&apos;re all on the same page, we&apos;ll keep you updated on any rebalancing, developments, or performance relating to the portfolio.
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Heading
                size='md'
                mr='auto'
              >
                The Goal
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <VStack
                alignItems='flex-start'
              >
                <Text>
                  The ultimate goal of the Pro Crypto Hive Mind is to take the brilliant thoughts of community members and distill them into a unified set of insights. The Pro Crypto Portfolio is the next big step in our journey towards doing just that.
                </Text>
                <Text>
                  But the journey doesn&apos;t end here...
                </Text>
                <Text>
                  We&apos;re working to take this portfolio to the next level by making the portfolio investable (yep, it&apos;ll be kind of like an index or ETF). And as always, we&apos;ll need your feedback every step of the way.
                </Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
            >
              How to Vote
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <VStack
              alignItems='flex-start'
            >
              <Text>
                To vote, head on over to the &apos;Vote&apos; tab, connect your MetaMask wallet that holds your RVPC NFT and fill out the survey based on how you feel the various tokens will perform over the next week.
              </Text>
              <Text>
                A couple things to note... 
              </Text>
              <UnorderedList>
                <ListItem>If you vote multiple times during the week, only the last vote will be counted toward the portfolio allocation.</ListItem>
                <ListItem>No transaction is required to vote or login, so you don&apos;t have to worry about gas fees.</ListItem>
                <ListItem>The Real Vision Bot will aggregate the results every Sunday night.</ListItem>
                <ListItem>You can equally allocate all tokens by clicking &apos;set equal allocation.&apos;</ListItem>
              </UnorderedList>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
            >
              How is the Portfolio Aggregated?
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text>
              The Real Vision Bot will crunch the numbers and average individual votes, creating a weighted average asset allocation.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
            >
              Where Can I View the Results?
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text>
              You can view results and statistics under the &apos;Results&apos; tab. We&apos;ll share deeper insights and commentary on portfolio developments via the Discord and email.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
            >
              You Mentioned I Can Invest in the Portfolio
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text>
              The Pro Crypto Portfolio is not currently investable, but we&apos;re working on a solution that will allow interested investors to follow its signals. This will put skin in the game and reward community members for their insights.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
              textAlign='left'
            >
              Why Can Only RVPC NFT holders Vote?
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text>
              This is the initial, beta test version of the Pro Crypto Portfolio, and using NFTs to log in members allowed us to roll out the portfolio simply and quickly. We are working on building a similar portfolio, just for Pro Crypto subscribers. Having these 2 portfolios running alongside one another will create healthy competition and allow for multiple investing strategies.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Heading
              size='md'
              mr='auto'
            >
              Which Tokens are Included in the Survey?
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text>
              The portfolio currently consists of 9 tokens: BTC, ETH, UNI, USDC, BNB, AAVE, MATIC, MKR, FTT. This list will be extended based on your feedback and their availability on the platforms we&apos;re currently working with to launch the investable portfolio.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  )
}

export default AboutComponent