import React, { PropsWithChildren } from 'react';
import BaseTemplate from './Base';

const Template = ({ children }: PropsWithChildren<any>) => (
  <BaseTemplate>{children}</BaseTemplate>
);

export default Template;
