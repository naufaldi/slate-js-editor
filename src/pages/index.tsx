import * as React from 'react';
import RichTextExample from '../components/home/Richtext';

import Layout from '../components/layout';

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <Layout>
      <RichTextExample />
    </Layout>
  );
}
