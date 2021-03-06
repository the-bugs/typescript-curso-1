import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement; // o tipo é o mesmo definido no input do HTML
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionaNegociacao(negociacao);
        console.log(this.negociacoes.listaNegociacoes());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        // Como os valores recebidos do form vêem como String:        
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ',')); // conversão de data        
        const quantidade = parseInt(this.inputQuantidade.value); // conversão de quantidade
        const valor = parseFloat(this.inputValor.value); // conversao de valor
        return new Negociacao(data, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

} 
