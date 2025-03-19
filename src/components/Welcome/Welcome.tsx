import estilo from './Welcome.module.css'

function Welcome() {
    return (
        <main className={estilo.principal}>
            <p>Bem-vindo(a) à nossa biblioteca</p>
            <p>Para ter uma melhor experiencia , faça o login no sistema</p>
        </main>
    );
}

export default Welcome;