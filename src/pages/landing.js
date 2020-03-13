import React from 'react';
import { Text, Box, Stack, Link, Image, Button, Flex } from '@chakra-ui/core';
import BasePage from '../components/BasePage';

const NavBar = () => {
  const links = [
    { path: '/pricing', label: 'Pricing' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/podcast', label: 'Podcast' },
    { path: '/spotlight', label: 'Spotlight' },
    { path: '/login', label: 'Login' },
  ];
  return (
    <Box px={8} py={4}>
      <Flex justify={'space-between'} align={'center'}>
        <Stack isInline shouldWrapChildren>
          <Image src={'https://bandungdigitalvalley.com/wp-content/uploads/2019/01/BDVLOGO.png'} h={'76px'}/>
        </Stack>
        <Flex>
          <Stack spacing={12} isInline shouldWrapChildren align={'center'} fontWeight={'semibold'} fontSize={'md'}>
            {links.map((link) => <Link key={link.path}>{link.label}</Link>)}
            <Button variant={'solid'} variantColor={'blue'}>Register</Button>
          </Stack>
          <Button variant={'ghost'}>EN</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

const Landing = () => {
  return (
    <BasePage>
      <NavBar/>
    </BasePage>
  );
}

export default Landing;