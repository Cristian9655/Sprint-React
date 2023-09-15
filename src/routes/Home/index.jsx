import './index.css';
export default function Home() {
    return (
        <main className='home'>
            <section className='home__text'>
                <h1 className='home__text__h1'>Vistoria BikeSeguro</h1>
                <h2 className='home__text__h2'>Protegendo sua bicicleta com segurança</h2>
                <p className='home__text__p'>Descubra a maneira mais fácil e segura de proteger sua bicicleta com a Vistoria BikeSeguro. Realize uma inspeção detalhada, registre as características e condição da sua bicicleta, e garanta uma avaliação precisa do seu valor. Simplifique o processo de contratação de um seguro personalizado e tenha tranquilidade ao pedalar. Comece agora mesmo a vistoria da sua bicicleta e proteja seu meio de transporte com confiança!</p>
            </section>
            <section className='home__image'>
                <img className='home__image__img' src="src\assets\img\bikeHome.svg" alt="bikeHome.svg" />
            </section>
            <a className='vistoria__form__enviar' id="home__form__enviar" href="#fazerVistoria" >Iniciar Vistoria</a>

        </main>
    )
}