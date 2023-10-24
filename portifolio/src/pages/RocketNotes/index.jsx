import { Container, Links, Content, Line } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { SubSection } from '../../components/SubSection';
import { Tag } from '../../components/Tag';

import notesSignin from '../../assets/rocket-notes/login.png';
import notesSignUp from '../../assets/rocket-notes/register.png';
import notesProfile from '../../assets/rocket-notes/profile.png';
import notesHome from '../../assets/rocket-notes/home.png';
import notesNewNote from '../../assets/rocket-notes/new.png';
import notesDetails from '../../assets/rocket-notes/details.png';

export function RocketNotes () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
             
          <h1>
            Aplicação inteligente para cadastro de Notas com Links e Marcadores
          </h1>

          <Line />

          <p>
            Trata-se de uma aplicação de um método inteligênte de cadastro e notas, com campo de observações (Text-Area), integração de links úteis e com marcadores para os conjuntos de notas cadastradas.
            Na aplicação encontra-se inicialmente a página de cadastro de usuário e página de login do usuário.  Ao efetuar login, as demias páginas são liberadas ao usuário. 
          </p>
          <p>
            Dentre as quais, temos: Página do perfil,  Página Home, Página de acesso as notas criadas e página para criar novas notas.  do usuário com edição dos dados. 
          </p>
          <p>
            A aplicação foi desenvolvida em ReactJS, com Vite para estruturação de arquivos e pastas, estilizado com styled-componentes, navegação com React Router...
          </p>
          <p>
            O backend que estará em conjunto com a aplicação tem como base Node,js, API completa em Node.js e Express. 
            E como parte do desenvolvimento, tem-se o apoio do Insomnia para manipulação das rotas e o banco de dados em SQLite conjunto com Query Builder Knex.js.
          </p>
          
          <p>
            <strong>
            Tecnologias Utilizadas:
            </strong>
          </p>
          <p >
            <strong>
              Vite · 
              React JS · 
              JavaScript · 
              Node.js · 
          
              Express* · 
              SQLite* · 
              Knex.js*
            </strong>
            <h5>
              * : (backend da app)
            </h5>
          </p>

          <SubSection>
            <Links>
              <li><a href='https://github.com/FelpsSousa/rocketnotes/tree/main/frontend' target="_blank">GitHub / Documentação do Projeto</a></li>
            </Links>
          </ SubSection>

          <h3>Página de Login:</h3>
          <img src={notesSignin} alt="Página de Login" />
          <Line />
          <h3>Página de Registro de Usuário:</h3>
          <img src={notesSignUp} alt="Página de Registro de Usuário" />
          <Line />
          <h3>Página Home:</h3>
          <img src={notesHome} alt="Página Home" />
          <Line />
          <h3>Página de Cadastro de Novas Notas:</h3>
          <img src={notesNewNote} alt="Página de Cadastro de Novas Notas" />
          <Line />
          <h3>Página de Detalhes das Notas Cadastradas:</h3>
          <img src={notesDetails} alt="Página de Detalhes das Notas Cadastradas" />
          <Line />
          <h3>Página de Perfil de Usuário:</h3>
          <img src={notesProfile} alt="Página de Perfil de Usuário" />
          <Line />

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
