import { useAuth } from '../hooks/useAuth'

import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
import { Link } from 'react-router-dom'

import '../styles/auth.css'

export function NewRoom() {

  const { user } = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="ilustracao da home" />
        <strong>Crie salas de chat!</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo da aplicacao" />
          <h1>Bem vindo, {user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
