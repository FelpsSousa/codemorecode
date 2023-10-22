import { Container, Experiences, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { About } from '../../components/AboutMe';
import { Section } from '../../components/Section';

export function Details () {
  return (
    <Container>

      <Header />
      
      <main>
        
        <About />
        
        <Content>
          
          <Section title="EXPERIÊNCIAS PROFISSIONAIS">
            < Experiences>
              <div>
                <strong>
                  DESENVOLVEDOR FULL-STACK
                </strong>

                <span>
                  O projeto vem de uma iniciativa de parceria com um Engenheiro Eletricista em desenvolver do zero uma plataforma de curso com simuladores de operações integrados que abrangem as especialidades do mesmo compartilhadas no curso.
              
                  <strong>
                    Habilidades:
                  </strong>
              
                  <span>
                    Programação Orientada a Objetos (OOP) · Application Programming Interface (API) · Vue.js · MongoDB · JavaScript · Node.js · Express.js
                  </span>
                </span>
              </div>
            </Experiences>

            < Experiences>
              <div>
                <strong>
                  DESENVOLVEDOR FULL-STACK
                </strong>
                
                <span>
                  Como Desenvolvedor Full Stack, tive a oportunidade de contribuir significativamente para o projeto, trabalhando em um sistema composto por três partes distintas: Educacional, Administrativo e Financeiro. 
                  Fui responsável pelo desenvolvimento do sistema, abrangendo tanto o Frontend quanto o Backend. Isso envolveu a criação de interfaces de usuário atraentes e funcionais, bem como a implementação de cada funcionalidade e operações CRUD. 
                  Lidei com a integração de dados brutos provenientes da captação do site da empresa, que transformados para formatos CSV/JSON, seguidaemente em estatísticas detalhadas, permitindo análises diárias, semanais, mensais e personalizadas em dashbord. Essas informações foram essenciais para otimizar nossas operações, realocando e distribuindo individualmente aos profissionais da empresa para proporcionar e melhorar o atendimento direto aos usuários.
                  Utilizou-se de SQL para para armazenar e gerenciar eficazmente os dados do sistema.
                  Utilizou-se Docker para facilitar o desenvolvimento da aplicação.
                  
                  <strong>
                    Habilidades:
                  </strong>
              
                  <span>
                    Programação Orientada a Objetos (POO) · Front-End · Back-End · Application Programming Interface (API) · PHP · Docker  · SQL · Bash · Git · GitHub · Linux
                  </span>
                </span>
              </div>
            </Experiences>

            < Experiences>
              <div>
                <strong>
                  ENGENHEIRO DE SOFTWARE
                </strong>
                
                <span>
                  CLARA - Laboratório de Automação e Robótica (LARA)
                  O projeto origina-se de pesquisa, desenvolvimento e implementação de um robô voltado para realização de procedimentos cirúrgicos de laparoscopia, sobretudo, para manipulação de endoscópio.
                  Fiquei responsável em dar continuidade nos serviços básicos de rede, que consiste na implementação da nova versão do joystick de radiofrequência. Implementando e depurando os firmwares e softwares que já encontravam-se em andamento, constituindo também em finalizar toda a estrutura hardware do sistema.
                  Os sistemas de comunicação do joystick com o computador principal, baseia-se em conexão bluetooth e radiofrequência.
                  Sendo C e C++ as linguagens de programação principais na implementação da lógica do componente.
                  
                  <strong>
                    Habilidades:
                  </strong>
                  
                  <span>
                    Robótica · Sistemas Embarcados · Desenvolvimento de Software · C++ · Software Embarcado · (POO) · C (Linguagem de Programação) · Sistemas Operacionais · Bluetooth · RF (Radiofrequência) · Diagnóstico de hardware · Eletrônica · Documentação de software · Bash · Git · GitHub · Linux
                  </span>
                </span>
              </div>
            </Experiences>
            
            <Links>
              <li><a href='https://github.com/FelpsSousa'>GitHub</a></li>
              <li><a href='https://linkedin.com/in/felipeluis-felpssousa'>LinkedIn</a></li>
            </Links>

          </Section>

          <Section>
            <h1>PROJETOS</h1>
          </Section>
          
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  );
}