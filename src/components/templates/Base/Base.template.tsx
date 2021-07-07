import React, { PropsWithChildren } from 'react';
import AppBar from './AppBar';

interface BaseTemplateProps {}

const BaseTemplate = ({ children }: PropsWithChildren<BaseTemplateProps>) => (
  <>
    <AppBar />
    {children}
  </>
);

export default BaseTemplate;
