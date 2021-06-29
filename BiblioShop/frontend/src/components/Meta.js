import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content='{description}' />
      <meta name='keywords' content='{keywords}' />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Bibly',
  description: 'We sell hand bound limited editions of classic books',
  keywords: 'books, limited edition books, hand bound books',
};

export default Meta;
