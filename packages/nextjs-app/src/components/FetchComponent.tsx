import React from 'react';
import { FetchExample } from '../stencil-web-components';
export default function FetchComponent({ repo }: { repo: string }) {
  console.log('repo', repo);
  return <FetchExample q={repo} />;
}
