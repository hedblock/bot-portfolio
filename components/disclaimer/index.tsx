import React from 'react';

import { Heading, VStack, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const Disclaimer = () => {
    return (
        <VStack
            spacing={4}
            align='flex-start'
        >
            <Heading
                size='2xl'
                mb={'1rem'}
                textAlign='center'
                w={'100%'}
            >
                Disclaimer
            </Heading>
            <Text>
                Real Vision is a publisher of information and opinion on the RealVision.com website and other media outlets, and offers its Pro Crypto community access to certain features, including this Pro Crypto Early Adopter NFT portfolio page.  This page is available to all Pro Crypto members who can demonstrate ownership of the Pro Crypto NFT via a connected MetaMask wallet (the “Hive”). This portfolio page allows all Hive members to vote on the allocation of selected cryptocurrency tokens in accordance with such member’s prediction regarding the future financial performance of such tokens on a weekly basis. The Hive results of such voting will be made available to all Hive members.  Please note that the results on such voting allocation shall not be construed as financial advice, guidance or recommendations to take, or not to take, any actions or decisions in relation to any matter, including in relation to investments or the purchase or sale of any cryptocurrency or other assets of any kind. To the extent the portfolio results may be deemed to be investment advice, such information is impersonal and not adapted to any particular client, investor, investor class or investment program. Accordingly, you acknowledge that the portfolio content is not tailored for you or any specific person and should never be used as a substitute for financial or other professional advice, and any investment decision is made at your sole risk. Real Vision, its affiliates and their respective representatives shall not be responsible or liable for the accuracy, usefulness or availability of any site content. The views, thoughts, and opinions expressed by the individuals featured on this site do not necessarily reflect the views or opinions of Real Vision.
            </Text>
            <Text>
                Certain of the site content may constitute “forward-looking statements” which can be identified by the use of forward-looking terminology such as “may,” “will,” “should,” “expect,” “anticipate,” “project,” “continue” or “believe” or the negatives thereof or other variations thereon or comparable terminology. Due to various risks and uncertainties, actual market events, opportunities or results or strategies may differ materially from those reflected in or contemplated by such forward-looking statements and any such projections, outlooks or assumptions should not be construed to be indicative of the actual events that will occur.
            </Text>
            <Text>
                PLEASE NOTE SPECIFICALLY:  THERE ARE RISKS ASSOCIATED WITH BUYING, TRADING, AND HOLDING CRYPTOCURRENCIES. VOLATILITY IN VALUE IS HIGHLY LIKELY, AND SOME OF THE PROTOCOLS AND TOKENS MAY FAIL ENTIRELY DUE TO FORKING, FLAWS IN THE CODE, HACKING OR OTHER MALICIOUS ATTACKS. YOU SHOULD INDEPENDENTLY CONSIDER ALL RISKS AND WARNINGS CAREFULLY AND SEEK APPROPRIATE PROFESSIONAL ADVICE BEFORE MAKING ANY DECISION TO BUY OR TRADE ANY CRYPTOCURRENCY.
            </Text>
            <Text>
                Finally, we enthusiastically encourage earnest participation of its Hive members in the Hive mind voting process. Because we strive for the highest level of integrity, Real Vision reserves the right to remove any voting input that Real Vision believes to be fraudulent, deceptive, dishonest or manipulative, or in violation of any Real Vision terms of services.  Further, Real Vision reserves the right to modify, suspend or discontinue, temporarily or permanently, all or any part of this portfolio or functionality without notice. Real Vision will not be liable to you or to any third party for any modification, suspension or discontinuance of all or any part of this portfolio or functionality.
            </Text>
        </VStack>
    )
}

export default Disclaimer