import { Container } from './styles';
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { About } from '../../components/AboutMe'

export function Details () {
  return (
    <Container>

      <Header />
      <About />
      <Button title="Voltar"/>
      
    </Container>
  )
}