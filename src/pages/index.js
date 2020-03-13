import React from 'react';
import Head from 'next/head'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Link,
  Icon,
  IconButton,
  AspectRatioBox, PseudoBox, ListItem, ListIcon, List, SimpleGrid, Badge,
} from '@chakra-ui/core';
import NavBar from '../components/NavBar';
import BasePage from '../components/BasePage';
import {FiChevronLeft, FiChevronRight, FiPlay, FiMapPin} from 'react-icons/fi';
import { FaPlay, FaYoutube, FaSpotify, FaCheck, FaRegSmileWink, FaNewspaper, FaTicketAlt, FaCalendarAlt, FaMap, FaMapPin, FaClock, FaRegClock } from 'react-icons/fa';
import moment from 'moment';

const data = {
  hero: {
    title: 'Free Coworking Space',
    title2: 'in Bandung',
    subtitle: 'Bandung Digital Valley is a coworking space and startup incubation under Indigo Creative Nation Program. Have creative and productive work with Bandung city view for FREE',
    imageUrl: 'https://bandungdigitalvalley.com/wp-content/uploads/2019/01/lounge.jpg',
  }
};

const gradientBg = 'linear-gradient(120deg, #4299E1, #F69220)';

const primaryButtonProps = {
  isRound: true,
  variant: 'solid',
  borderColor: 'white',
  color: 'blue.400',
  _active: {
    bg: 'gray.900',
    color: 'yellow.400'
  },
  _focus: {
    bg: 'gray.700',
    color: 'yellow.300'
  },
  _hover: {
    bg: 'gray.700',
    color: 'yellow.300',
    transform: 'scale(1.25, 1.25)'
  },
};

const Home = () => {
  return (
    <BasePage>
      <Head>
        <title>Bandung Digital Valley</title>
      </Head>
      <NavBar isSticky/>
      <Stack spacing={0} shouldWrapChildren>
        <HeroSection/>
        <EventSection/>
        <ContentSection/>
        <PricingSection/>
      </Stack>
    </BasePage>
  );
};

const HeroSection = () => {
  const containerProps = {
    py: 32,
    display: 'flex',
    flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'],
    maxW: '1140px',
    w: 'full',
    mx: 'auto',
    position: 'relative',
  };
  const imageContainerProps = {
    flexGrow: 1,
    flexShrink: 1,
    flex: 2,
    pos: 'relative'
  };
  const imageProps = {
    w: 'full',
    display: 'block',
    pos: 'relative',
    boxShadow: 'xl',
    rounded: [0, 0, 0, 'lg'],
    ml: [0, 0, 0, -4],
    h: 'md',
    objectFit: 'cover',
  };
  const selectorProps = {
    isInline: true,
    shouldWrapChildren: true,
    pos: 'absolute',
    top: ['initial', 'initial', 'initial', '100%'],
    left: ['initial', 'initial', 'initial', '100%'],
    bottom: [4, 4, 4, 'initial'],
    right: [4, 4, 4, 'initial'],
    transform: [
      'initial',
      'initial',
      'initial',
      'translate(-50%, -50%)',
    ],
    bg: 'white',
    rounded: 'lg',
    boxShadow: 'lg',
    p: 2,
    alignItems: 'center',
    color: 'blue.500',
    fontWeight: 'semibold',
  };
  return (
    <PseudoBox as={'header'} {...containerProps}>
      <Box {...imageContainerProps}>
        <Image src={data.hero.imageUrl} {...imageProps}/>
        <Stack {...selectorProps}>
          <IconButton icon={FiChevronLeft} isRound variant={'ghost'}/>
          <Link whiteSpace={'nowrap'}>Lounge area</Link>
          <IconButton icon={FiChevronRight} isRound variant={'ghost'}/>
        </Stack>
      </Box>
      <Stack flex={1} spacing={12} py={12} pl={8} pr={24} minW={'md'} my={'auto'}>
        <Box>
          <Heading color={'#F69220'} fontWeight={'medium'}>{data.hero.title}</Heading>
          <Heading fontWeight={'medium'} color={'blue.400'}>{data.hero.title2}</Heading>
        </Box>
        <Text color={'gray.500'}>{data.hero.subtitle}</Text>
        <Flex>
          <Input placeholder={'Email address'} variant={'filled'} roundedRight={0}/>
          <Button variantColor={'blue'} px={8} roundedLeft={0}>Register</Button>
        </Flex>
      </Stack>
    </PseudoBox>
  );
};

const EventSection = () => {
  const events = [
    {
      category: 'Business series',
      title: 'Business Series #9 "Sales Funneling in 3 Unicorn Startups"',
      date: Date.now(),
      location: 'Bandung Digital Valley',
      imageUrl: 'https://bandungdigitalvalley.com/wp-content/uploads/2020/03/indigo.id_.png',
      url: 'https://goers.co/'
    },
    {
      category: 'Pitch up',
      title: 'Pitch Up #9',
      date: Date.now(),
      location: 'Bandung Digital Valley',
      imageUrl: 'https://bandungdigitalvalley.com/wp-content/uploads/2020/03/indigoid-300x224.png',
      url: 'https://goers.co/'
    },

  ];
  
  return (
    <Box as={'section'}>
      <Stack spacing={16} maxW={'1140px'} w={'full'} mx={'auto'}>
        <Flex alignItems={'center'} direction={'column'} w={'xs'} mx={'auto'}>
          <Heading size={'lg'} color={'#F69220'} fontWeight={'normal'}>{moment().format('MMMM')}'s</Heading>
          <Heading size={'2xl'} color={'blue.400'} fontWeight={'normal'}>Events</Heading>
        </Flex>
        <SimpleGrid columns={[1, 1, events.length]} spacing={8} justifyItems={'center'}>
          {events.map((event) => (
            <Box maxW={events.length > 1 ? 'initial' : 'lg'} w={'full'} borderColor={'gray.100'} borderWidth={'1px'} rounded={'md'}>
              <AspectRatioBox ratio={4/3}>
                <Image src={event.imageUrl} rounded={'md'} size={'100%'} objectFit={'cover'}/>
              </AspectRatioBox>
              <Stack spacing={4} p={4}>
                <Flex justifyContent={'space-between'}>
                  <Badge bg={'#F69220'} color={'white'} fontSize={'sm'} fontWeight={'semibold'}>{event.category}</Badge>
                </Flex>
                <Heading as={Link} size={'lg'} color={'blue.400'}>{event.title}</Heading>
                <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
                  <Stack spacing={2} justifyContent={'flex-end'}>
                    <Stack spacing={2} isInline alignItems={'center'}>
                      <Box color={'#F69220'} display={'inline'} as={FaMapPin}/>
                      <Text>{event.location}</Text>
                    </Stack>
                    <Stack spacing={2} isInline alignItems={'center'}>
                      <Box color={'#F69220'} display={'inline'} as={FaRegClock}/>
                      <Text>{moment(event.date).format('HH:MM, D MMMM YYYY')}</Text>
                    </Stack>
                  </Stack>
                  <Stack spacing={2} justifyContent={'flex-end'}>
                    <Button leftIcon={FaCalendarAlt} variantColor={'blue'} variant={'ghost'} alignSelf={'flex-end'}>View detail</Button>
                    <Button leftIcon={FaTicketAlt} variantColor={'blue'} alignSelf={'flex-end'}>Get RSVP</Button>
                  </Stack>
                </Flex>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
        <PseudoBox mx={'auto'} spacing={0} textAlign={'center'} as={Stack} direction={'row'} spacing={2} shouldWrapChildren p={2} px={4} bg={'white'} mt={2} borderColor={'gray.100'} borderWidth={'1px'} rounded={'md'} boxShadow={'md'} cursor={'pointer'} transition={'150ms ease-out'} _hover={{ boxShadow: 'sm', transform: 'scale(1.15, 1.15)' }}>
          <Text as={'span'}>View more at</Text>
          <Image src={'https://goersapp.com/cd9aac6568a43602ee0b7a23d3239abf.png'} height={['24px', '24px', '24px']} objectFit={'contain'}/>
        </PseudoBox>
      </Stack>
    </Box>
  );

};

const ContentSection = () => {
  const podcasts = [
    { category: 'podcast', title: 'startup knowledge', imageUrl: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80' },
    { category: 'monthly event', title: 'business series', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' },
    { category: 'podcast', title: 'curhat startup', imageUrl: 'https://images.unsplash.com/photo-1581464668603-1b215d0c5469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  ];
  const spotlights = [
    {
      category: 'Technical series',
      title: 'Technical Series #10, Belajar Secure Coding Bareng Cyber Army',
      imageUrl: 'https://bandungdigitalvalley.com/wp-content/uploads/2020/02/IMG_5342-1080x675.jpg',
      date: Date.now(),
      snippets: 'Pemrograman sudah berkembang sangat jauh, menurut studi dari SANS Institute pada tahun 2009 diperoleh informasi bahwa serangan terhadap aplikasi berbasis web mencakup 60% lebih dari total serangan yang diamati di Internet. Tuntutan masa kini bagi seorang programmer adalah mampu menghasilkan aplikasi yang tidak hanya difungsikan sesuai kebutuhan tetapi juga terdapat keamanan yang diperhitungkan. Pada 17-19 Februari 2020, Bandung Digital Valley bekerjasama dengan Cyber Army mengadakan sebuah workshop dengan tema Secure Coding 101. Dengan mengundang Girindo Pringgo Digdo (CEO Cyber Army), Rendy Bustari (DevSecOps Manager Cyber Army), dan Anhar Solehudin (Product Manager Cyber Army) sebagai pemateri.',
    },
    {
      category: 'Company visit',
      title: 'Kunjungan Kementrian Pendidikan dan Kebudayaan',
      imageUrl: 'https://bandungdigitalvalley.com/wp-content/uploads/2020/02/IMG_7011-1-1080x675.jpg',
      date: Date.now(),
      snippets: 'Pada jum’at, 07 Februari 2020 Bandung Digital Valley kedatangan tamu dari Kementrian Pendidikan dan Kebudayaan (Kemendikbud) Pusat Data dan Teknologi Informasi (Pusdatin) untuk melakukan studi banding mengenai best paractise keamanan pada aplikasi di PT. Telkom Indonesia.',
    },
  ];
  return (
    <Stack py={[8, 16, 24, 32]} px={[8, 8, 8, 0]} as={'section'} spacing={[4, 8, 12, 24]} maxW={'1140px'} w={'full'} mx={'auto'} flexShrink={0} shouldWrapChildren>
      <Box>
        <Heading size={'lg'} color={'#F69220'} fontWeight={'medium'}>Listen our</Heading>
        <Heading size={'2xl'} color={'blue.400'} fontWeight={'medium'}>Bandung Digital Podcast!</Heading>
      </Box>
      <VideoPodcast/>
      <ContentItem
        columns={[1, 2, 2, podcasts.length]}
        head={<React.Fragment>
          <Heading size={'lg'} color={'#F69220'} fontWeight={'normal'}>Check us on</Heading>
          <Stack as={Link} href={'#'} isInline alignItems={'center'}>
            <Box as={FaSpotify} color={'green.400'} size={'40px'}/>
            <Text fontSize={'xl'} fontWeight={'bold'}>Spotify</Text>
          </Stack>
        </React.Fragment>}
        body={podcasts.map((podcast, i) => <PodcastItem key={podcast.title} icon={FaPlay} podcast={podcast}/>)}/>
      <ContentItem
        columns={[1, 1, 1, spotlights.length]}
        head={<React.Fragment>
          <Text fontWeight={'semibold'} color={'blue.400'} fontSize={'sm'}>BDV activities</Text>
          <Heading size={'lg'} color={'#F69220'} fontWeight={'semibold'}>Spotlights</Heading>
        </React.Fragment>}
        body={spotlights.map((spotlight, i) => <SpotlightItem key={spotlight.title} icon={FaNewspaper} spotlight={spotlight}/>)}/>
    </Stack>
  )
};

const ContentItem = ({ head, body, columns = 1 }) => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
      <Stack h={'full'} p={[3, 6, 12, 16]} pl={[3, 6, 0, 0]} minW={'2xs'} alignItems={['center', 'center', 'flex-start', 'flex-start']}>
        {head}
      </Stack>
      <SimpleGrid spacing={4} columns={columns}>
        {body}
      </SimpleGrid>
    </Flex>
  );
};

const VideoPodcast = () => {
  const videoPodcastImageUrl = 'https://images.unsplash.com/photo-1557804506-e969d7b32a4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1328&q=80';
  const bgProps = {
    w: 'full',
    h: 'full',
    objectFit: 'cover',
    pos: 'absolute',
    transition: '1000ms ease-out',
    _hover: {
      transform: 'scale(1.2, 1.2)',
    }
  };
  const buttonProps = {
    size: 'lg',
    pos: 'relative',
  };
  const subscribeButton = {
    position: 'absolute',
    bottom: 2,
    right: 2,
    variantColor: 'red',
    leftIcon: FaYoutube,
  };
  return (
    <AspectRatioBox ratio={16/9} bg={'red.500'} rounded={'md'} overflow={'hidden'} boxShadow={'2xl'}>
      <Box pos={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Image src={videoPodcastImageUrl} {...bgProps}/>
        <Box pos={'absolute'} left={0} top={0} h={'full'} w={'full'} bgImage={gradientBg} opacity={.45}/>
        <Text pos={'absolute'} top={0} left={0} right={0} fontSize={'xl'} lineHeight={1} fontWeight={'bold'} color={'white'} opacity={.85} isTruncated m={8}>Startup ceritanya lagi jenuh, begini loh startup A mengakalinya. Yang terakhir mengejutkan!</Text>
        <IconButton {...primaryButtonProps} {...buttonProps} icon={FaPlay}/>
        <Button {...subscribeButton}>Subscribe our YouTube channel</Button>
      </Box>
    </AspectRatioBox>
  );
};

const PodcastItem = ({ podcast, icon }) => {
  const overlayProps = {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: 'full',
    h: 'full',
    bgImage: gradientBg,
    opacity: .45,
    zIndex: 0,
  };
  return (
    <AspectRatioBox as={PseudoBox} ratio={3/4} minW={'3xs'} rounded={'sm'} overflow={'hidden'} bg={'red.500'}>
      <Stack bgImage={`url(${podcast.imageUrl})`} bgSize={'cover'} bgPos={'center'} pos={'relative'} p={4}>
        <Box {...overlayProps}/>
        <Text zIndex={1} fontSize={'sm'} lineHeight={1} fontWeight={'bold'} color={'white'}>{podcast.category}</Text>
        <Text zIndex={1} fontSize={42} lineHeight={1} fontWeight={'black'} color={'white'} whiteSpace={'initial'}>{podcast.title}</Text>
        <IconButton icon={icon} pos={'absolute'} bottom={2} right={2} {...primaryButtonProps}/>
      </Stack>
    </AspectRatioBox>
  )
};

const SpotlightItem = ({ spotlight, icon }) => {
  const overlayProps = {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: 'full',
    h: 'full',
    bgImage: gradientBg,
    opacity: .45,
    zIndex: 0,
  };
  return (
    <AspectRatioBox as={PseudoBox} ratio={4/3} minW={['auto', 'auto', 'sm']} rounded={'sm'} overflow={'hidden'} bg={'red.500'}>
      <Stack bgImage={`url(${spotlight.imageUrl})`} bgSize={'cover'} bgPos={'center'} pos={'relative'} p={4}>
        <Box {...overlayProps}/>
        <Text zIndex={1} fontSize={'sm'} lineHeight={1} fontWeight={'bold'} color={'white'}>{spotlight.category.toLowerCase()}</Text>
        <Text zIndex={1} fontSize={[24, 24, 42]} lineHeight={1} fontWeight={'black'} color={'white'} whiteSpace={'initial'}>{spotlight.title}</Text>
        <IconButton icon={icon} pos={'absolute'} bottom={2} right={2} {...primaryButtonProps}/>
      </Stack>
    </AspectRatioBox>
  );
};

const EventItem = ({ event, icon }) => {
  const overlayProps = {
    pos: 'absolute',
    top: 0,
    left: 0,
    w: 'full',
    h: 'full',
    bgImage: gradientBg,
    opacity: .45,
    zIndex: 0,
  };
  const buttonProps = {
    ...primaryButtonProps,
    _hover: {
      ...primaryButtonProps._hover,
      transform: null
    },
  };
  return (
    <AspectRatioBox as={PseudoBox} ratio={4/3} minW={['auto', 'auto', 'sm']} rounded={'sm'} overflow={'hidden'} bg={'red.500'}>
      <Stack bgImage={`url(${event.imageUrl})`} bgSize={'cover'} bgPos={'center'} pos={'relative'} p={4}>
        <Box {...overlayProps}/>
        <Text zIndex={1} fontSize={'sm'} lineHeight={1} fontWeight={'bold'} color={'white'}>{event.category.toLowerCase()}</Text>
        <Text zIndex={1} fontSize={[24, 24, 42]} lineHeight={1} fontWeight={'black'} color={'white'} whiteSpace={'initial'}>{event.title}</Text>
        <Flex zIndex={1} justifyContent={'space-between'} left={4} right={2} bottom={2} pos={'absolute'} alignItems={'center'}>
          <Badge isTruncated color={'white'} bg={'#F69220'} fontSize={'md'} px={2} fontWeight={'bold'}>FREE</Badge>
          <Button rightIcon={icon} {...buttonProps}>RSVP</Button>
        </Flex>
      </Stack>
    </AspectRatioBox>
  );
};

const PricingSection = () => {
  const items = [
    {
      title: 'Hot desk coworking space',
      subtitle: '60+ non-reservation coworking seat with open space environment',
      price: 'FREE',
      specs: [
        'Shoes only, no sandals',
        'Share the desk with others',
        'Keep your voice quiet'
      ]
    },
    {
      title: 'WiFi access',
      subtitle: '3 Mbps WiFi connection in whole Bandung Digital Valley area',
      price: 'FREE',
      specs: [
        '3 Mbps bandwidth',
        'No time limit',
        'Unlimited device'
      ]
    },
    {
      title: 'Welcome drinks',
      subtitle: 'Refresh yourself to stay focus on your productive work',
      price: 'FREE',
      specs: [
        'Free-flow mineral water',
        'Nestle coffee machine',
        'DIY tea & coffee',
      ]
    },
  ];
  return (
    <Box bg={'#F6922022'}>
      <Stack spacing={16} py={[8, 16, 24, 32]} w={'full'} maxW={'1140px'} mx={'auto'} alignItems={'center'}>
        <Stack textAlign={'center'}>
          <Heading fontWeight={'normal'} color={'#F69220'}>Pricing</Heading>
          <Text>The most affordable coworking space you can find in the city.</Text>
        </Stack>
        <SimpleGrid px={2} w={'full'}  columns={[1, 1, items.length]} spacing={4}>
          {items.map((item) => (
            <Stack key={item.title} flex={1} p={8} py={16} bg={'white'} rounded={'lg'} boxShadow={'xl'} textAlign={'center'}>
              <Text color={'#F69220'} fontWeight={'bold'} fontSize={'xl'}>{item.title}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>{item.subtitle}</Text>
              <Text fontSize={'3xl'} fontWeight={'bold'} color={'blue.400'}>{item.price}</Text>
              <List spacing={4}>
                {item.specs.map((spec) => (
                  <ListItem>
                    <ListIcon icon={FaCheck} color={'green.400'}/>
                    {spec}
                  </ListItem>
                ))}
              </List>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack alignItems={'center'} spacing={4}>
          <Text color={'gray.600'} as={'span'}>Yes, we are free. <Box display={'inline-block'} as={FaRegSmileWink}/></Text>
          <Button size={'lg'} variantColor={'blue'}>Register membership FREE</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home
