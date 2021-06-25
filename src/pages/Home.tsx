import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { placeholder } from '@babel/types';

import '../styles/auth.scss';

import { Button } from '../components/Button';

export function Home() {
    const history = useHistory();

    function handleCreateRom() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result =>{
            console.log(result);

            history.push('/rooms/new');
        })
        
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustracao simbolizando perguntas e respostas" /> 
                <strong>Crie salas de Q&amp;A</strong>
                <p>Tire suas duvidas da audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="leatmeask"/>
                    <button onClick={handleCreateRom} className="create-room">
                        <img src={googleIconImg} alt="logotipo do google"/>
                        Crie sua Sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o Código da Sala"
                        />
                        <Button type="submit" >
                            Entrar na Sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}