import { Container, Profile  } from "./styles";

export function Header() {

  return (
    <Container>
        <Profile>
          
          <img 
              src="https://github.com/FelpsSousa.png"
            alt="Foto do usuário" 
          />

          <strong>Felipe Sousa</strong>

        </Profile>
    </Container>
  );
}