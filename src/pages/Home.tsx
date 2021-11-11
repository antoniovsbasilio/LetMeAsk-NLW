import { useAuth } from '../hooks/useAuth'

import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'
import { useNavigate } from "react-router-dom"

import '../styles/auth.css'

export function Home() {

  const navigate = useNavigate()
  const {user, signInWithGoogle} = useAuth()

  const handleCreateRoom = () => {
    if (!user) {
      signInWithGoogle()
    }
    navigate('rooms/new')
  }

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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}

