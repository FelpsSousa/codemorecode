import { Container, Links, Content, Line } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { SubSection } from '../../components/SubSection';
import { Tag } from '../../components/Tag';

import uploadAIScreen from '../../assets/upload-ai/tela-principal.png';
import uploadAIUploaded from '../../assets/upload-ai/video-carregado.png';
import uploadAITitle from '../../assets/upload-ai/gerando-titulo.png';
import uploadAIDescription from '../../assets/upload-ai/gerando-descricao.png';
import uploadAIExecution from '../../assets/upload-ai/saida-descricao.png';


export function UploadAI () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
             
          <h1>
            Geração Automática de Transcrições e Títulos para vídeos do YouTube com Inteligência Artificial - OpenAI
          </h1>

          <Line />

          <p>
            Desenvolvi um projeto inovador que utiliza a inteligência artificial (IA) alimentada pela versão gratuita da OpenAI, o GPT 3.5-turbo 16k, para automatizar a geração de transcrições, títulos e palavras-chave para vídeos do YouTube. O processo é simples e eficiente: os usuários fazem o upload de um vídeo .mp4 diretamente do navegador, otimizando o processamento local. O vídeo é convertido para .mp3 e, por meio de APIs personalizadas, é transformado em texto transcrito.

            Os usuários têm controle total sobre a saída, adicionando palavras-chave que orientam a geração de conteúdo. Eles podem personalizar o título e a descrição do vídeo do YouTube de acordo com suas preferências. Além disso, oferecemos uma opção de "temperatura" que permite ajustar o nível de criatividade da IA, fornecendo resultados específicos ou mais criativos com base na escolha do usuário.
          </p>
          <p>
            Tecnologias Utilizadas:
          </p>
          <p>
            API OpenAI · 
            React · 
            JavaScript · 
            TypeScript · 
            Prisma · 
            Tailwind CSS · 
            FFMPEG · 
            Shadcnui · 
            Axios
          </p>
          <p>
            O projeto é uma solução inovadora que economiza tempo na criação de conteúdo para o YouTube e proporciona uma experiência dinâmica e interativa. Os usuários podem acompanhar o processamento em tempo real, tornando-o uma ferramenta poderosa para criadores de conteúdo e profissionais de marketing.
          </p>

          <SubSection>
            <Links>
              <li><a href='https://github.com/FelpsSousa/nlw-ai' target="_blank">GitHub / Documentação do Projeto</a></li>
            </Links>
          </ SubSection>

          <h3>Tela Principal:</h3>
          <img src={uploadAIScreen} alt="Executando identificador de faces" />
          <Line />
          <h3>Upload de um Vídeo Aleatório:</h3>
          <img src={uploadAIUploaded} alt="Executando a interface de cadastro" />
          <Line />
          <h3>Gerando Possíveis Títulos:</h3>
          <img src={uploadAITitle} alt="Interface inicial de cadastro" />
          <Line />
          <h3>Gerando Descrição:</h3>
          <img src={uploadAIDescription} alt="Cadastrando Professor" />
          <Line />
          <h3>Resultado da Descrição:</h3>
          <img src={uploadAIExecution} alt="Reconhecendo pessoa na etapa de cadastro" />
          <Line />

          <Section title="Habilidades Desenvolvidas">
            
            <Tag title="OpenCV" />
            <Tag title="C++" />
            <Tag title="Desenvolvimento de Software" />
            <Tag title="Programação Orientada a Objetos (POO)" />
            <Tag title="Javascript" />
            <Tag title="Linux / Ubuntu" /> 
            <Tag title="Latex" />
            <Tag title="GitLab" />
            <Tag title="Documentação de Software" />
    
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
