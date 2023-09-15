import './index.css';
export default function Login() {
    return (
        <form action="#" className='login__form'>
            <article className='login__form__login'>
                <h2>Login</h2>
                <label className="login__form__label" htmlFor="email">Email: <input type='text' id='email'/></label>
                <label className="login__form__label" htmlFor="Lpassword">Password: <input type='password' id='Lpassword' /></label>
                <a href="#">Entrar</a>
            </article>
            <article className='login__form__cadastro'>
                <h2>Cadastre-se</h2>
                <label className="login__form__label" htmlFor="nome">Nome completo: <input type='text' id='nome'/></label>
                <label className="login__form__label" htmlFor="Cemail">Email: <input type='text' id='Cemail'/></label>
                <label className="login__form__label" htmlFor="Cpassword">Password: <input type='password' id='Cpassword'/></label>
                <a href="#">Cadastrar</a>
            </article>
        </form>

    )
}