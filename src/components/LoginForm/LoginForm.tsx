import estilo from './LoginForm.module.css';

function LoginForm() {
    return (
        <section className={estilo['form-section']}>
            <h1>LOGIN</h1>

            <form action="" className={estilo['form-login']}>
                <label>
                    E-MAIL
                    <input 
                      type="email" 
                      placeholder='insira seu email'
                      className={estilo['input-email-login']}
                    />
                </label>

                <label>
                    SENHA
                    <input 
                    type="password" 
                    placeholder='informe sua senha'
                    className={estilo['input-password-login']}
                    />
                </label>
                
                <input 
                type="button" 
                value="Entrar"
                className={estilo['input-button-login']}
                />
            </form>
        </section>
    );
}

export default LoginForm;