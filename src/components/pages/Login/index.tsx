import Button from '@/components/Button'
import Input from '@/components/input'
import * as S from './styles'

export default function Login() {
  return (
    <S.Container>
      <S.ImgLogin src='/img/logo-finance.svg'/>
        <Input name='login' label='Login' placeholder='Digite Seu Login'/>
        <Input name='password' label='Senha' placeholder='Digite Sua Senha'/>
        <Button>
          Entrar
        </Button>
    </S.Container>
    )
}
