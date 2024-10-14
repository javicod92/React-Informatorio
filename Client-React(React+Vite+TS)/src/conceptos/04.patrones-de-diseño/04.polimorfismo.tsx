import { ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
  as: 'ul' | 'ol';
};
const LIST_TAGS = {
  ul: 'ul',
  ol: 'ol',
};
function List({ children, as, ...delegated }: ListProps) {
  const Tag = LIST_TAGS[as];

  return <Tag {...delegated}>{children}</Tag>;
}

export default function App() {
  return (
    <main>
      <List as="ul">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
      <List as="ol">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </main>
  );
}
