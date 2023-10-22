import { Container, AboutMe } from './styles';

export function About() {

  return (
    <Container>
      <AboutMe>
        <img 
          src="https://github.com/FelpsSousa.png"
          alt="Foto do usuário" 
        />

        <div>
          <strong>SOBRE MIM</strong>
          <p>
            Sou um profissional versátil com uma formação em andamento em Engenharia de Mecatrônica e Desenvolvimento Full Stack com ampla experiência em manutenção de hardware e software, programação (incluindo C, C++, JavaScript, PHP, Python), e desenvolvimento de sistemas educacionais e administrativos.
            Minha experiência abrange desde manutenção de equipamentos eletrônicos até projetos avançados de robótica e automação. Sou apaixonado por solucionar problemas e estou sempre motivado a aprender e contribuir em novos desafios.
            Tenho experiência em ensino e trabalho voluntário em educação de robótica.
            Além disso, sou musicista e entusiasta de tecnologia e em horas vagas gosto de assistir séries e jogar.
            Estou aberto a oportunidades que me permitam aplicar meu conhecimento e paixão.
          </p>
        </div>
      </AboutMe>
    </Container>
  )
}