import { Container, Experiences, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { About } from '../../components/AboutMe';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';
import { SubSection } from '../../components/SubSection';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs'

import accessControl from '../../assets/access-control/identificator.jpg';

export function Details () {
  return (
    <Container>

      <Header />
      
      <main>
        
        <About />
        
        <Content>

          <Section title="Formação Acadêmica">
            <h2>Engenharia Mecatrônica - Engenheiro de Controle e Automação | Universidade de Brasília (UnB) </h2>
            <SubSection title="Julho de 2015 - Cancelado" />

            <h2>Desenvolvedor Full Stack | Rocketseat </h2>
            <SubSection title="Janeiro de 2023 - Presente" />

            <h2>Desenvolvedor Web Full Stack | Cod3r </h2>
            <SubSection title="Janeiro de 2020 - Presente" />
          </Section>

          <Section title="Habilidades" />
          
          <h3>Desenvolvimento de Software  · C  · C++  · Sistemas Embarcados  · JavaScript  · TypeScript  · Angular  · Vue.js  · React  · Node.js  · Phyton · Java  </h3>
          
          <Section title="Principais Projetos">
            
            <Card data={{
              title: 'Portifólio Profissional',
              description: 'O projeto trata-se do meu portifólio profissional, que...',
              image: <BsFillFileEarmarkCodeFill />,
              tags: [
                {id: '1', name: 'React'},
                {id: '1', name: 'Vite'},
                {id: '2', name: 'Node.js'}
              ],
              link: '/portifolio'
            }}/>

            <Card data={{
              title: 'Controle de Acesso',
              description: 'Este projeto consiste em um sistema de controle de acesso e monitoramento',
              image: 'https://github.com/FelpsSousa.png',
              tags: [
                {id: '1', name: 'OpenCV'},
                {id: '2', name: 'C++'},
                {id: '2', name: 'JavaScript'},
              ],
              link: '/controle-de-acesso'
            }}/>

            <Card data={{
              title: 'upload.ai',
              description: 'Projeto inovador que utiliza a inteligência artificial...',
              image: 'https://github.com/FelpsSousa.png',
                tags: [
                  {id: '1', name: 'Inteligência Artificial'},
                  {id: '2', name: 'TypesCript'},
                  {id: '2', name: ''},
                ],
              link: '/controle-de-acesso'
            }}/>

<           Card data={{
              title: 'To-Do List || Java',
              description: 'Neste projeto, exploramos a construção do back-end de uma aplicação de lista de tarefas...',
              image: 'https://github.com/FelpsSousa.png',
              tags: [
                {id: '1', name: 'Java'},
                {id: '2', name: 'Spring Boot'},
                {id: '2', name: 'Maven'},
              ],
              link: '/to-do-list-java-17'
            }}/>

            <Card data={{
              title: 'Rocket Notes',
              description: ' Trata-se de uma aplicação de um método inteligênte de cadastro e notas, com campo...',
              image: 'https://github.com/FelpsSousa.png',
              tags: [
                {id: '1', name: 'Vite'},
                {id: '2', name: 'React JS'},
                {id: '2', name: 'JavaScript'},
              ],
              link: '/rocket-notes'
            }}/>

            <Card data={{
              title: 'Cadastro de Artigos',
              description: 'Aplicação completa para cadastro de Artigos relacionados em cascata (Objetos Pai e Objetos Filhos)...',
              image: 'https://github.com/FelpsSousa.png',
              tags: [
                {id: '1', name: 'Vue.js'},
                {id: '2', name: 'JavaScript'},
                {id: '2', name: 'MongoDB'},
              ],
              link: '/controle-de-acesso'
            }}/>


          </Section>
          
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
  );
}