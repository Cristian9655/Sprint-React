import './style.css';

export default function Seguros() {
    return (
        <main className='vistoria'>
            <article className='home'>
                <section className='home__text' id="vistoria__text">
                    <h1 className='home__text__h1'>Vistoria de bicicletas</h1>
                    <h2 className='home__text__h2'>Instruções iniciais:</h2>
                    <p className='home__text__p'>Olá! Bem-vindo à Vistoria de Bicicleta para Seguro. Aqui, você pode realizar uma vistoria completa da sua bicicleta para obter a validação necessária. Por favor, preencha o formulário abaixo e envie as imagens solicitadas. Lembre-se de fornecer informações precisas e capturar imagens claras, garantindo uma avaliação adequada do seu meio de transporte.</p>
                    <a className='vistoria__home__text__a' href="#fazerVistoria" >Iniciar Vistoria</a>
                </section>
                <section className='home__image'>
                    <img className='home__image__img' src="src\assets\img\bikeHome.svg" alt="man-lifting-bicycle-above-his-head-silhouette-6263.svg" />
                </section>
            </article>
            <form className='vistoria__form' id='fazerVistoria' action="">
                <h3 className='vistoria__form__infoB__h3'>Informações Básicas</h3>
                <section className='vistoria__form__infoB'>
                    <div className='vistoria__form__infoB__div1'>
                        <label className="vistoria__form__infoB__div__label" htmlFor="">Marca da Bicicleta: <input type='text' /></label>
                        <label className="vistoria__form__infoB__div__label" htmlFor="">Modelo da Bicicleta: <input type='text' /></label>
                        <label className="vistoria__form__infoB__div__label" htmlFor="">Tamanho do Quadro: <input type='text' /></label>
                    </div>
                    <div className='vistoria__form__infoB__div2'>
                        <label className="vistoria__form__infoB__div__label" htmlFor="">Número de Série: <input type='text' /></label>
                        <label className="vistoria__form__infoB__div__label" htmlFor="">Cor da Bicicleta: <input type='text' /></label>
                        <label className="vistoria__form__infoB__div__label" htmlFor="">Ano de Fabricação: <input type='text' /></label>
                    </div>
                </section>

                <h3 className='vistoria__form__infoB__h3'>Condição da Bicicleta</h3>
                <section className='vistoria__form__condB'>
                    <p className='vistoria__form__condB__p'>Descreva a condição geral da bicicleta:</p>
                    <textarea className='vistoria__form__condB__textarea' name="" id="" cols="30" rows="8"></textarea>
                    <textarea id="texarea2" name="" cols="30" rows="5" placeholder='Marca da Bicicleta:'></textarea>
                    <p className='vistoria__form__condB__p'>Histórico de Manutenção:</p>
                    <textarea className='vistoria__form__condB__textarea' name="" id="" cols="30" rows="8"></textarea>
                    <textarea id="texarea2" name="" cols="30" rows="5" placeholder='História de manutenção:'></textarea>
                    <p className='vistoria__form__condB__p'>Descreva quaisquer danos ou desgastes visíveis:</p>
                    <textarea className='vistoria__form__condB__textarea' name="" id="" cols="30" rows="8"></textarea>
                    <textarea id="texarea2" name="" cols="30" rows="5" placeholder='Descreva quaisquer danos ou desgastes visíveis:'></textarea>
                </section>
                <h3 className='vistoria__form__infoB__h3'>Acessórios</h3>
                <section className='vistoria__form__acess'>
                    <div className='vistoria__form__acess__div1'>
                        <label className="vistoria__form__acess__div__label" htmlFor="">Lista de Acessórios Inclusos:<input type='text' placeholder='ex. cadeado, cesto, luzes, etc.' /></label>
                    </div>
                    <div className='vistoria__form__acess__div2'>
                        <label className="vistoria__form__acess__div__label" htmlFor="">Valor estimado dos acessórios:<input type='text' placeholder='ex. 500R$, 1.000R$, etc.' /></label>
                    </div>
                </section>
                <h3 className='vistoria__form__infoB__h3img'>Upload de Imagens</h3>
                <p className='vistoria__form__infoB__h3p'>Por favor, envie imagens claras da sua bicicleta, incluindo o quadro, componentes importantes e detalhes relevantes. Você pode enviar até 6 imagens.</p>
                <section className='vistoria__form__upload'>
                    <div className='vistoria__form__upload__bloco'>
                        <a className='vistoria__form__upload__bloco__a' href="">Selecionar arquivo</a>
                        <div className='vistoria__form__upload__bloco__div'>
                            <img className='vistoria__form__upload__bloco__div__img' src="src\assets\img\download.svg" alt="" />
                        </div>
                    </div>
                    <div className='vistoria__form__upload__bloco'>
                        <a className='vistoria__form__upload__bloco__a' href="">Selecionar arquivo</a>
                        <div className='vistoria__form__upload__bloco__div'>
                            <img className='vistoria__form__upload__bloco__div__img' src="src\assets\img\download.svg" alt="" />
                        </div>
                    </div>
                    <div className='vistoria__form__upload__bloco'>
                        <a className='vistoria__form__upload__bloco__a' href="">Selecionar arquivo</a>
                        <div className='vistoria__form__upload__bloco__div'>
                            <img className='vistoria__form__upload__bloco__div__img' src="src\assets\img\download.svg" alt="" />
                        </div>
                    </div>
                    <div className='vistoria__form__upload__bloco'>
                        <a className='vistoria__form__upload__bloco__a' href="">Selecionar arquivo</a>
                        <div className='vistoria__form__upload__bloco__div'>
                            <img className='vistoria__form__upload__bloco__div__img' src="src\assets\img\download.svg" alt="" />
                        </div>
                    </div>
                    <div className='vistoria__form__upload__bloco'>
                        <a className='vistoria__form__upload__bloco__a' href="">Selecionar arquivo</a>
                        <div className='vistoria__form__upload__bloco__div'>
                            <img className='vistoria__form__upload__bloco__div__img' src="src\assets\img\download.svg" alt="" />
                        </div>
                    </div>
                    <div className='vistoria__form__upload__bloco'>
                        <a className='vistoria__form__upload__bloco__a' href="">Selecionar arquivo</a>
                        <div className='vistoria__form__upload__bloco__div'>
                            <img className='vistoria__form__upload__bloco__div__img' src="src\assets\img\download.svg" alt="" />
                        </div>
                    </div>
                </section>
                <section id='upload__img'>
                    <a href="">Fazer upload da imagem</a>
                    <div>
                        <span>imagem1.png</span>
                        <span>imagem4.png</span>
                        <span>imagem3.png</span>
                    </div>
                </section>
                <a className='vistoria__form__enviar' href="#fazerVistoria" >Enviar</a>

            </form>
        </main>
    )
}