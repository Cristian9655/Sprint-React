import './style.css';
export default function Integrantes() {
    return (
        <main className='integrantes'>
            <h2>Integrantes</h2>

            <table className='tabela'>
                <thead>
                    <tr>
                        <th>Nome completo:</th>
                        <th>RM:</th>
                    </tr>
                </thead>
                <tbody>
              
                    <tr class="cinza">
                        <td>Diego Seiti Ogita Iacabo</td>
                        <td>551289</td>
                    </tr>
                   
                    <tr class="azul">
                        <td>João Lucas Marques Costa</td>
                        <td>98376</td>
                    </tr>
           
                    <tr class="cinza">
                        <td>Alejandro Rabelo</td>
                        <td>93606</td>
                    </tr>
                 
                    <tr class="azul">
                        <td>Cristian Alvaro Condori Paucara</td>
                        <td>550509</td>
                    </tr>
               
                    <tr class="cinza">
                        <td>Luiz Felipe Azevedo de Oliveira</td>
                        <td>550348</td>
                    </tr>
                    <tr class="azul">
                        <td>ㅤ</td>
                        <td>ㅤ</td>
                    </tr>
                </tbody>
            </table>

        </main>
    )
}