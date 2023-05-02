import React from "react";
import  descobrir  from "../assets/img/descobrir.svg";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Descobrir = () =>{

    return(
        <div className="descobrir" id="descobrir">
        <Container>
            <header>
                <img src={descobrir} alt="Descobrir" />
                <h1>Etapa Descobrir</h1>
                
            </header>
            <main>
                <h3>Módulo 1: Descrição do nosso mundo digital</h3>
                <p>Tempo estimado: 1h30min</p>

                <section>
                    <p>Objetivo: Fazer sondagem inicial sobre o acesso digital dos alunos: meios, aplicativos, percepção de experiência e tempo de uso. 
                    </p>
                    <p>
                    Resultado esperado: Levantamento de dados utilizando técnica de computação desplugada ou fiscalização de dados,  
                    e com o objetivo de direcionar as demais atividades do projeto.
                    </p>
                    <hr></hr>
                </section>

                <section>
                    <h4> O que pode ser feito para chegar ao resultado esperado</h4>
                    <p>Materiais indicados a serem utizados: slides, google form, post-it, canetas, ○	6 folhas de papel madeira ou cartolina um pouco maior do que a convencional (mesma cor)</p>
                    <p>
                    Atividades: 
                    </p>  
                    <ul>
                        <li>Apresentação do projeto,  os objetivos, pessoas</li>
                        <li>Motivação: Todo mundo hoje usa, de alguma forma, uma ou mais tecnologias. Vivemos em um mundo digital… Como é o seu mundo digital?</li>
                        <li>Começando a coleta de dados, idealmente contendo as seguintes perguntas:
                            <ul>
                                <li>Quais tecnologias digitais estão acostumados a usar?(celular, tablet, redes sociais, jogos)</li>
                                <li>Por que essas tecnologias são legais? </li>
                                <li>Temos nosso próprio equipamento ou usamos de outra pessoa?</li>
                                <li>Quantas horas por dia usamos essas tecnologias? E como dividimos esse tempo?</li>
                                <li>Usamos essas tecnologias sozinhos ou temos uma rede de amigos? São pessoas conhecidas ou desconhecidas ou os dois?</li>
                                <li>Qual o nível de conhecimento sobre essas tecnologias? Você se considera: [ ] avançado [ ] intermediário [ ] iniciante</li>
                                
                            </ul>
                            
                        </li>
                        <li>Dinâmica da coleta de dados: Formar duplas e cada um recebe um bloquinho para fazer suas anotações com o que descobrir sobre o colega</li>
                        <li>Apresentando os dados coletados das perguntas anteriores:
                             <ul>
                                <li>Pergunta: Quais tecnologias digitais estão acostumados a usar?(celular, tablet, redes sociais, jogos)
                                    <br></br>Visualização: Criar uma abstração para gráfico de barras. As barras podem ser representadas fisicamente com copos/baldes/sacos transparentes, estreito e comprido, papeis coloridos para representar os quantitativos em cada barra (folha A4 em 4 pedaços). Uma barra para cada uma das categorias: jogos, redes sociais, app mensagens, streaming, e outros caso o resultados mostrar mais.
                                    <br></br>Adicionais: Exemplificar com figuras/recortes de celulares, tablet, etc.
                                
                                </li>
                                <li>Pergunta: Por que essas tecnologias são legais?
                                    <br></br>Visualização:Criar uma abstração de uma nuvem de palavras; as palavras serão escritas no painel e palavras iguais, usar a mesma cor (ideia de frequencia)
                                </li>
                                <li>Quantas horas por dia usamos essas tecnologias? E como dividimos esse tempo?
                                    <br></br>Visualização: Fazer uma sumarização de dados com médias e proporções
                                </li>
                               
                                <li>Qual o nível de conhecimento sobre essas tecnologias? Você se considera: [ ] avançado [ ] intermediário [ ] iniciante
                                    <br></br> Criar um gráfico de donut com 3 cores, uma para cada nível; cada participante recebe uma fita de cada cor, e vamos unindo as fitas de cores iguais e depois todas juntas.
                                </li>
                                
                            </ul>
                        </li>
                        <li> Montagem da decoração na ambientação com os resultados: objetivos ambiente será “decorado” com os painéis que serão construídos ao longo do encontro; a ideia é depois transformar os painéis em slides do google apresentação (construídos por eles mesmo)
                        <li> Atividade para fazer em casa:
                            <ul>
                                <li>Pesquisar o que é ser um cidadão digital</li>
                                <li>Trazer um dica de leitura online sobre o assunto de cidadania digital</li>
                                <li>Pensar em um logotipo para o clubinho digital</li>
                            </ul>

                        </li>

                        </li>
                   </ul>
                </section>
                <footer>
                    <Link>
                    <Button  className="button-next">
                                <h5>Ir para próxima etapa, Analisar</h5>
                            </Button>
                    </Link>
                </footer>

            </main>
            
        </Container> 
       
        </div>
     
    )
}

export default Descobrir;