import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const Header = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const HeaderPart = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Section = ({ children }) => (
  <Box display="flex" justifyContent="center" mt={2} as="section">
    <Header>{children}</Header>
  </Box>
);

export default Section;
<Box display="flex" justifyContent="center">
  <HeaderPart>Statistics</HeaderPart>
</Box>;
