import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { placeholder } from '@babel/types';

import '../styles/auth.scss';

import { Button } from '../components/Button';
import { useContext } from 'react';
import { TestContext } from '../App';

export function NewRoom() {
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
                    <h2>Criar uma nova Sala</h2>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da Sala"
                        />
                        <Button type="submit" >
                            Criar Sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente <Link to="/">Clique Aqui</Link></p>
                </div>
            </main>
        </div> 
    );
}