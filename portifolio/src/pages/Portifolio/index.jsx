import { Container, Links, Content, Line } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { SubSection } from '../../components/SubSection';
import { Tag } from '../../components/Tag';

import portifolioAboutMe from '../../assets/portifolio/sobre-mim.jpg';
import portifolioHelloWorld from '../../assets/portifolio/hello-world.jpg';
import portifolioMainProjects from '../../assets/portifolio/principais-projetos.jpg';


export function Portifolio () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
             
          <h1>
            Portifólio Profissional
          </h1>

          <Line />
          
          <p>
            O projeto trata-se do meu portifólio profissional, que é toda aplicação que você está acessando agora. 
          </p>
          <p>
            E muito obrigado pelo seu acesso! ; )
          </p>
          <p>
            Tecnologias Utilizadas:
  
            React ·
            Node.js ·  
            JavaScript
          </p>

          <SubSection>
            <Links>
              <li><a href='https://github.com/FelpsSousa' target="_blank">GitHub da Aplicação</a></li>
            </Links>
          </ SubSection>

          <h3>HelloWorld:</h3>
          <img src={portifolioHelloWorld} alt="Portifólio HelloWorld" />
          <Line />
          <h3>Sobre Mim:</h3>
          <img src={portifolioAboutMe} alt="Portifólio Sobre Mim" />
          <Line />
          <h3>Principais Projetos:</h3>
          <img src={portifolioMainProjects} alt="Portifólio Principais Projetos" />
          <Line />

          <Section title="Dados de Contato">
            <Links>
              <li><a href='https://github.com/FelpsSousa' target="_blank">GitHub</a></li>
              <li><a href='https://linkedin.com/in/felipeluis-felpssousa' target="_blank">LinkedIn</a></li>
              <li><a href="https://wa.me/5562994294774" target="_blank">WhatsApp</a></li>
            </Links>
          </Section>
       
        </Content>
      </main>
    </Container>
  )
}
