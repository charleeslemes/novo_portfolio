
import React from "react";
import './home.css';
import Projects from "../Components/Projects";


import Arrow from '../assets/arrow-rigth.svg';
import reaect from '../assets/React-icon.svg';
import javascript from '../assets/JavaScript-icon.svg'
import typescript from '../assets/TypeScript-icon.svg'
import sass from '../assets/Sass-icon.svg';
import git from '../assets/Git-icon.svg';
import node from '../assets/Node-icon.svg';
import html from '../assets/Html-icon.svg';
import css from '../assets/Css-icon.svg';


import imgAdvMichel from '../assets/AdvMichel.svg'
import imgFormAvancado from '../assets/formAvancado.svg';
import imgGeradorSenha from '../assets/geradorSenha.svg';
import imgTelaLogin from '../assets/telaLogin.svg';
import imgTodoList from '../assets/TodoList.svg';
import imgDashboard from '../assets/dashboard 1.svg';




import imgSobre from '../assets/image-sobre.svg';

type Projeto ={
    img: string;
    link: string;
}

function Home(){
    const logo = "<Charles Lemes/>"
    const imgHabilidades: string[] = [reaect, javascript, typescript, sass, git, node, html,css];

    const imgProjetosReais: Array<Projeto> = [
        {img: imgAdvMichel, link: 'https://advmichelcantu.com.br/'},
       
        
    ]

    const imgProjetosPessoais: Array<Projeto> = [
        {img: imgGeradorSenha, link: 'https://geradorsenhac.netlify.app/'},
        {img: imgDashboard, link: 'https://testeminehr.netlify.app/'},
        {img: imgFormAvancado, link: 'https://testeminehr.netlify.app/'},
        {img: imgTelaLogin, link: 'https://testeminehr.netlify.app/'},
        {img: imgTodoList, link: 'https://testeminehr.netlify.app/'},
        
        
        
    ]

    return(
        <>
            
            <div className="container-banner">
                <div className="desktop-nav">
                    <div className="desktop-logo"><h2>{logo}</h2></div>
                    <nav className="desktop-nav-menu">
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-nav">
                <nav className="mobile-nav-menu">
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>

                </div>

                <div className="box-text-button">
                    <h1>Front-end</h1>
                    <div className="button-link-projetos">
                        <a href="">Projetos</a>
                    </div>
                    <div className="bullet"><img src={Arrow} alt="" /></div>
                </div>

                <div className="text-developer">
                    <h1>Developer</h1>
                </div>

            </div>


            <div className="container-habilidades">
              
                <div className="box-habilidades">
                    <div className="text-habilidades">
                        <h2>Minhas</h2>
                        <h2>Habilidades</h2>
                        <p>Ao lado estão as <b>tecnologias</b> e <b>frameworks</b> que possuo habilidades e conhecimentos.</p>
                    </div>
                    <div className="icons-habilidades">
                        {
                            imgHabilidades.map((img)=>{
                                return(
                                   <div className="box-hb"><img src={img}/></div>
                                )
                            })
                        }

                    </div>
                    
           
                </div>
            </div>




            <div className="container-sobre">
                <h1 className="title_main">.../Sobre mim...</h1>

                <div className="box-sobre">
                    <div className="text-sobre">
                        <div className="text01">
                            <p>Formado em análise e desenvolvimento de sistemas. Possuo experiência com projetos pessoais e freelance, me reconheço como entusiasta em novas tecnologias do mercado, com aprendizado adquirido dia após dia. Possuo foco em desenvolvimento Front-end em React, JavaScript e TypeScript entre outras tecnologias que uso para criar aplicações web de alto nível e valor. Me considero uma pessoa ágil e que não desiste nunca, consistente a aprender tecnologias novas e me adaptar à qualquer mudança para superar qualquer desafio!</p>
                        </div>

                        <div className="text02">
                            <p>Na construção deste site passei por várias dificuldades e ideias, mas sempre pesquisando como eu poderias melhorá-lo e deixando mais minha cara e sempre priorizando o design responsivo e interação do usuário, foram vários testes para chegar nesse resultado, utilizei para fazer esse site React + TypeScript para estilização usei o pré-processador sass</p>
                        </div>

                    </div>

                    <div className="img-sobre">
                        <img src={imgSobre} alt="" />
                    </div>

                </div>
            </div>


            <div className="container-projeto-real">
            <h1 className="title_main">.../Projetos Freelancer ...</h1>
                <Projects obj={imgProjetosReais}/>
            </div>

            <div className="container-projeto-pessoal">
            <h1 className="title_main">.../Projetos Pessoais...</h1>
                <Projects obj={imgProjetosPessoais}/>
            </div>

            
            <div className="container-formulario-email">
                <div className="container-borda">
                    <div className="box-invisivel-cima"></div>
                    <div className="box-invisivel-baixo"></div>
                    <h1 className="title_main title-contato-absolute">.../contato ...</h1>
               


                    <div className="box-principal-contato">
                            <div className="box-descritivo-contato">
                                    <h3>Charles Lemes</h3>
                                    <h4>Front-End Developer</h4>

                                    <h4>Design e WebSite</h4>
                                    <h4>Desenvolvido</h4>
                                    <h4>Por Charles Lemes</h4>

                            </div>

                            <div className="box-formulario">
                                    <form className="form-contato" action="">
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="button" value="Enviar" />
                                    </form>

                            </div>

                            <div className="box-links-contato">
                                <ul>
                                    <li><a href="">Github</a></li>
                                    <li><a href="">Linkedin</a></li>
                                    <li><a href="">WhatsApp</a></li>
                                </ul>
                            </div>

                        </div>
                    
                </div>


           
            

            </div>






            



            
        </>
    )
}


export default Home;