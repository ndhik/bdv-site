import React from 'react';
import {Box, CSSReset, ThemeProvider} from '@chakra-ui/core';
import customTheme from '../utlis/theme';

const BasePage = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset/>
      <Box maxW={'100vw'} overflowX={'hidden'}>
        {children}
      </Box>
    </ThemeProvider>
  )
};

export default BasePage;