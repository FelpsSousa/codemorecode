import { Container, Links, Content, Line } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { SubSection } from '../../components/SubSection';
import { Tag } from '../../components/Tag';

import javaInit from '../../assets/todo-list-java/inicilizando-projeto.jpg';
import javaDB from '../../assets/todo-list-java/java-todo-list-0.jpg';
import javaPUT from '../../assets/todo-list-java/java-todo-list-1.jpg';
import javaValidation from '../../assets/todo-list-java/java-todo-list-2.jpg';

export function Java () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
             
          <h1>
            TO DO List - Java 17
          </h1>

          <Line />

          <p>
          To-Do List desenvolvido durante a semana de eventos da Rocketseat. 
          Neste projeto, exploramos a construção do back-end de uma aplicação de lista de tarefas, aprendendo conceitos essenciais do Spring Boot, criando uma aplicação funcional.
          </p>
          <p>
            <strong>
              Tecnologias Utilizadas:
            </strong>
          </p>
          <p>
            <strong>
              Java 17.0 · 
              Maven · 
              Spring Boot · 
              API Dog ·
              Docker
            </strong>
          </p>

          <SubSection>
            <Links>
              <li><a href='https://github.com/FelpsSousa/Java' target="_blank">GitHub / Documentação do Projeto</a></li>
            </Links>
          </ SubSection>

          <h3>Inicialização do Projeto TO DO List.</h3>
          <img src={javaInit} alt="" />
          <Line />
          <h3>Banco de dados do projeto - H2.</h3>
          <img src={javaDB} alt="" />
          <Line />
          <h3>Alteração tarefas cadastradas na aplicação.</h3>
          <img src={javaPUT} alt="" />
          <Line />
          <h3>Validação de usuário cadastrado</h3>
          <img src={javaValidation} alt="Validação de usuário cadastrado" />
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
