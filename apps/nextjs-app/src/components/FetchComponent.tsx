import { FetchExample } from 'component-library-react';

export default function FetchComponent({ repo }: { repo: string }) {
  return <FetchExample q={repo} />;
}
