import { Container, Experiences, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { About } from '../../components/AboutMe';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { SubSection } from '../../components/SubSection';

import imgJava1 from '../../assets/todo-list-java/inicilizando-projeto.jpg';

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

          <Section title="Habilidades">
            <h3>Software Developer | C | C++ | Embedded System | JavaScript | TypeScript | Angular | Vue.js | React | Node.js | Java | Phyton | Software Engineer</h3>
          </Section>

          <Section title="Principais Projetos">

            <Card data={{
              title: 'Portifólio Pessoal',
              description: 'Pequena descrição do projeto...',
              image: 'https://github.com/FelpsSousa.png',
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'Node.js'}
              ]
            }}/>

            <Card data={{
              title: 'Controle de Acesso',
              description: 'Pequena descrição do projeto...',
              image: {imgJava1},
              tags: [
                {id: '1', name: 'React'},
                {id: '2', name: 'Node.js'}
              ]
            }}/>

          </Section>
          
          <Section title="Dados de Contato">
            <Links>
              <li><a href='https://github.com/FelpsSousa' target="_blank">GitHub</a></li>
              <li><a href='https://linkedin.com/in/felipeluis-felpssousa' target="_blank">LinkedIn</a></li>
              <li><a href="https://wa.me/5562994294774" target="_blank">Whatsapp</a></li>
            </Links>
          </Section>

        </Content>
      </main>
    </Container>
  );
}