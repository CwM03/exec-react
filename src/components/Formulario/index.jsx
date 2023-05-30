import { useState } from "react"
import style from './Formulario.module.css'

const App = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const valorAltura = (event) => {
        setAltura(event.target.value);
    }

    const valorPeso = (event) => {
        setPeso(event.target.value);
    }

    const calculaIMC = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        const classificacaoCalculada = getClassificacao(imcCalculado)

        setIMC(imcCalculado.toFixed(2));
        setClassificacao(classificacaoCalculada);
    }

    const getClassificacao = (imc, classificacaoCalculada) => {
        if (imc < 17) {
            return 'Muito abaixo do peso'
        } else if (imc >= 17 && imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal'
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso'
        } else if (imc >= 30 && imc < 35) {
            return 'Obsidade grau 1'
        } else if (imc >= 35 && imc < 40) {
            return 'Obsidade grau 2'
        } else if (imc > 40) {
            return 'Obsidade grau 3'
        } else {
            return (
                imc = 'Nenhum número identificado. Digite valores existentes.'
            )
        }
    }

    return (
        <div className={style.container}>
            <h1>Calculadora de IMC</h1>
            <div className={style.formulario}>
                <label htmlFor="altura">Altura(cm):</label>
                <input className={style.input} type="number" id="altura" value={altura} onChange={valorAltura} />
            </div>
            <div className={style.formulario}>
                <label htmlFor="peso">Peso(kg):</label>
                <input className={style.input} type="number" id="peso" value={peso} onChange={valorPeso} />
            </div>
            <button onClick={calculaIMC}>Calcular</button>
            {imc && classificacao && (
                <div>
                    <h2>Resultado:</h2>
                    <p>IMC: {imc}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
    </div>

    )
}

export default App;