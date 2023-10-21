import { Container } from './styles';
import { Button } from '../../components/Button'

export function Details () {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Felipe Sousa</span>

      <Button title="Voltar" loading/>
    </Container>
  )
}