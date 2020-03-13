import React from 'react';
import { Image, Box, Stack, Button, Link } from '@chakra-ui/core';

const data = {
  logoUrl: 'https://bandungdigitalvalley.com/wp-content/uploads/2019/01/BDVLOGO.png',
  links: [
    { label: 'Pricing', path: '/pricing' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Events', path: '/events' },
    { label: 'Our Podcasts', path: '/podcasts' },
    { label: 'Spotlights', path: '/spotlights' },
  ]
};

const NavBar = ({ isSticky, ...props }) => {
  const outerProps = {
    pos: isSticky ? 'sticky' : 'initial',
    mx: 4,
    zIndex: isSticky ? 'sticky' : 'initial',
    top: 0,
  };
  const innerProps = {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    bg: 'white',
    px: 12,
    py: 2,
  };
  return (
    <Box {...outerProps}>
      <Box {...innerProps} {...props}>
        <Image h={72} src={data.logoUrl}/>
        <Stack spacing={8} isInline shouldWrapChildren alignItems={'center'}>
          {data.links.map((link) => (
            <Link key={link.path} to={link.path}>{link.label}</Link>
          ))}
          <Button variantColor={'blue'}>Register</Button>
        </Stack>
      </Box>
    </Box>
  )
};

export default NavBar;