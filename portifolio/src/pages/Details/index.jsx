import { Container, Experiences, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { About } from '../../components/AboutMe';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { SubSection } from '../../components/SubSection';

export function Details () {
  return (
    <Container>

      <Header />
      
      <main>
        
        <About />
        
        <Content>

          <Section title="Formação Acadêmica">
            <h2>Engenharia Mecatrônica - Engenharia de Controle e Automação | Universidade de Brasília (UnB) </h2>
            <SubSection title="Julho de 2015 - Presente" />

            <h2>Desenvolvedor Full Stack | Rocketseat </h2>
            <SubSection title="Janeiro de 2023 - Presente" />
          </Section>

          <Section title="Principais Projetos">
            <Card data={{
              title: 'Controle de Acesso',
              description: 'Pequena descrição do projeto...',
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'Node.js'}
              ]
            }}/>
          </Section>
          
          <Section title="Dados de Contato">
            <Links>
              <li><a href='https://github.com/FelpsSousa'>GitHub</a></li>
              <li><a href='https://linkedin.com/in/felipeluis-felpssousa'>LinkedIn</a></li>
            </Links>
          </Section>

        </Content>
      </main>
    </Container>
  );
}