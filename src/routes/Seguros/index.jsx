import './style.css';

export default function Seguros() {
    return (
        <main className="seguros">
            {/*Principal*/}
            <article className='seguros__principal'>
                <section className='seguros__principal__text'>
                    <h1 className='seguros__principal__text__h1'>Opções de Seguro para sua Bicicleta</h1>
                    <p className='seguros__principal__text__p'>Proteja sua bicicleta com segurança! Aqui estão as opções de seguros disponíveis para garantir a proteção do seu meio de transporte preferido. Escolha o plano que melhor atenda às suas necessidades e tenha tranquilidade ao pedalar.</p>
                </section>
                <section className='home__image' id='seguros__image'>
                    <img className='home__image__img' src="src\assets\img\bike.svg" alt="bike.svg" />
                </section>
            </article>

            {/*SEGURO 1*/}
            <article className="seguros__conteudo">
                <section className='seguros__conteudo__imagem'>
                    <img className='seguros__conteudo__imagem__img' src="src\assets\img\seguro1.png" alt="seguro1.png" />
                </section>

                <section className='seguros__conteudo__texto'>
                    <h2>Plano Básico</h2>
                    <div className='seguros__conteudo__texto__div'>
                        <p>O Plano Básico oferece a proteção essencial para a sua bicicleta. Com cobertura contra roubo e indenização em caso de danos acidentais, você terá tranquilidade ao pedalar sabendo que sua bicicleta está protegida. Além disso, garantimos o valor de mercado da sua bicicleta em caso de sinistros. Escolha o Plano Básico e pedale com confiança!</p>
                        <ul>
                            <li>Cobertura contra roubo</li>
                            <li>Indenização em caso de danos acidentais</li>
                            <li>Valor de mercado da bicicleta</li>
                        </ul>
                    </div>
                </section>
            </article>
            {/*SEGURO 2*/}
            <article className="seguros__conteudo">
                <section className='seguros__conteudo__imagem'>
                    <img className='seguros__conteudo__imagem__img' src="src\assets\img\seguro2.png" alt="seguro2.png" />
                </section>

                <section className='seguros__conteudo__texto'>
                    <h2>Plano Completo</h2>
                    <div className='seguros__conteudo__texto__div'>
                        <p>O Plano Completo oferece uma proteção abrangente para a sua bicicleta. Além da cobertura contra roubo e furto, você também estará protegido em caso de danos acidentais e colisões. Com cobertura nacional e internacional em suas viagens, além da assistência 24 horas, você terá suporte completo em qualquer situação. Escolha o Plano Completo e desfrute de pedaladas seguras em todos os lugares!</p>
                        <ul>
                            <li>Cobertura contra roubo e furto</li>
                            <li>IIndenização em caso de danos acidentais e colisões</li>
                            <li>Cobertura em viagens nacionais e internacionais</li>
                            <li>Assistência 24 horas</li>
                        </ul>
                    </div>
                </section>
            </article>  
            {/*SEGURO 3*/}
            <article className="seguros__conteudo">
                <section className='seguros__conteudo__imagem'>
                    <img className='seguros__conteudo__imagem__img' src="src\assets\img\seguro3.png" alt="seguro3.png" />
                </section>

                <section className='seguros__conteudo__texto'>
                    <h2>Plano Premium</h2>
                    <div className='seguros__conteudo__texto__div'>
                        <p>O Plano Premium oferece uma proteção exclusiva para a sua bicicleta. Com cobertura abrangente contra roubo, furto e danos, você terá total tranquilidade em todas as suas pedaladas. Além disso, garantimos o valor de reposição da sua bicicleta em caso de sinistros, e oferecemos cobertura contra acidentes pessoais. Com serviços de manutenção e reparo disponíveis, você terá suporte completo para cuidar da sua bicicleta. Escolha o Plano Premium e desfrute de um nível superior de proteção e serviços personalizados.</p>
                        <ul>
                            <li>Cobertura abrangente contra roubo, furto e danos</li>
                            <li>Valor de reposição da bicicleta</li>
                            <li>Cobertura contra acidentes pessoais</li>
                            <li>Serviços de manutenção e reparo</li>
                        </ul>
                    </div>
                </section>
            </article>
            
        </main>
    )
}