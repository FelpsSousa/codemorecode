import { Container, Links, Content, Line } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { SubSection } from '../../components/SubSection';
import { Tag } from '../../components/Tag';

export function Portifolio () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
             
          <h1>
            Portifólio Profissional
          </h1>

          <p>
            O projeto trata-se de meu portifólio profissional.
          </p>

          <SubSection>
            <Links>
              <li><a href='https://github.com/FelpsSousa' target="_blank">GitHub</a></li>
            </Links>
          </ SubSection>

          <h3>Inicializando o Projeto TO DO List</h3>
          <img src="https://github.com/FelpsSousa.png" alt="" />
          <Line />
          <h3>Banco de dados do projeto - H2</h3>
          <img src="https://github.com/FelpsSousa.png" alt="" />
          <Line />
          <h3>Banco de dados do projeto - H2</h3>
          <img src="https://github.com/FelpsSousa.png" alt="" />
          <Line />
          <h3>Banco de dados do projeto - H2</h3>
          <img src="../../assets/todo-list-java/" alt="" />
          <Line />

          <Section title="Habilidades Desenvolvidas">
            <Tag title="express"/>
            <Tag title="nodejs"/>
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
  )
}
