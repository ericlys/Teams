import { Header } from '@components/Headers';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight 
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
    </Container>
  );
}
