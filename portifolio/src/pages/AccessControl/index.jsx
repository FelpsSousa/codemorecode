import { Container, Links, Content, Line } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { SubSection } from '../../components/SubSection';
import { Tag } from '../../components/Tag';

import controlAccessIdentificator from '../../assets/access-control/identificator.jpg';
import controlAccessSignup from '../../assets/access-control/signup.jpg';
import controlAccessStudent from '../../assets/access-control/student.png';
import controlAccessTeacher from '../../assets/access-control/teacher.jpg';
import controlAccessRead from '../../assets/access-control/read-face.jpg';


export function AccessControl () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
             
          <h1>
            Sistema de Controle de Acesso
          </h1>

          <Line />

          <p>
            Este projeto consiste em um sistema de controle de acesso e monitoramento a ser usado na entrada dos Laboratórios de Computação (LINF - UnB). O objetivo é monitorar estudantes, professores, pessoal de limpeza, pessoal de segurança (vigilantes), pessoal de suporte técnico do CIC (funcionários, estagiários e professores associados à administração de suporte), bem como pessoas externas (ou pessoal de empresas terceirizadas) que acessam os laboratórios para realizar manutenção na infraestrutura (hardware, cabos, mobília, paredes, ar condicionado, etc.).
          </p>
          <p>
            Os dados de registro serão armazenados em um banco de dados, que conterá as seguintes informações:
            Número de usuário, que pode ser uma identificação de estudante (para estudantes) ou CPF (pessoal externo).
            Nome completo e sobrenome.
            Identificador de disciplinas ou turmas (para estudantes) e outras reservas (pessoal externo).
            Arquivos de imagem facial de cada usuário, que serão usados para validação de acesso.
          </p>
          <p>
            Durante a validação de acesso, os seguintes dados são armazenados:
            Autor da reserva.
            Finalidade da reserva e informações adicionais da reserva.
            Número da sala.
            Horário.
            Se será uma reserva recorrente.
          </p>
          <p>
            <strong>
              Tecnologias Utilizadas:
            </strong>
          </p>
          
          <p >
            <strong>
              OpenCV · 
              C++ ·
              Programação Orientada a Objetos (POO) · 
              JavaScript · 
              Linux / Ubuntu · 
              GitLab
            </strong>
          </p>

          <SubSection>
            <Links>
              <li><a href='https://gitlab.com/junio.batista12/Trabalho2_TP1' target="_blank">GitLab / Documentação do Projeto</a></li>
            </Links>
          </ SubSection>

          <h3>Executando identificador de faces:</h3>
          <img src={controlAccessIdentificator} alt="Executando identificador de faces" />
          <Line />
          <h3>Executando a interface de cadastro:</h3>
          <img src={controlAccessSignup} alt="Executando a interface de cadastro" />
          <Line />
          <h3>Interface inicial de cadastro:</h3>
          <img src={controlAccessStudent} alt="Interface inicial de cadastro" />
          <Line />
          <h3>Cadastrando Professor:</h3>
          <img src={controlAccessTeacher} alt="Cadastrando Professor" />
          <Line />
          <h3>Reconhecendo pessoa na etapa de cadastro:</h3>
          <img src={controlAccessRead} alt="Reconhecendo pessoa na etapa de cadastro" />
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
