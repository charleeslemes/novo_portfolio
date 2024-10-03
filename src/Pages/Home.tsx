
import React from "react";
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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


import imgAdvMichel from '../assets/adv-michel.svg'
import imgFormAvancado from '../assets/form-avancado.svg';
import imgGeradorSenha from '../assets/gerador-Senha.svg';
import imgTelaLogin from '../assets/tela-login.svg';
import imgTodoList from '../assets/todo-list.svg';
import imgDashboard from '../assets/dashboard1.svg';




import imgSobre from '../assets/image-sobre.svg';
import Formulario from "../Components/Formulario";

type Projeto ={
    img: string;
    link: string;
    description: string;
    stacks: string;
}



function Home(){
    const logo = "<Charles Lemes/>"
    const imgHabilidades: string[] = [reaect, javascript, typescript, sass, git, node, html,css];

    const imgProjetosReais: Array<Projeto> = [
        {img: imgAdvMichel, description:'Esse projeto consiste em uma lading page de uma advocacia, site foi desenvolvido para ser intuitivo e 100% funcional e responsivo.', stacks:'HTML - Sass - JavaScript', link: 'https://advmichelcantu.com.br/'},
       
        
    ]

    const imgProjetosPessoais: Array<Projeto> = [
        {img: imgGeradorSenha, description:'Este projeto foi desenvolvido para transformar uma senha simples em uma senha mais elaborada, incorporando caracteres especiais, números e a opção de incluir letras maiúsculas.', stacks:'React - TypeScript - css', link: 'https://geradorsenhac.netlify.app/'},
        {img: imgDashboard, description:'Este projeto foi realizado como parte de um teste prático de contratação, no qual foi desenvolvido um dashboard que permite filtrar entre dois gráficos seria um de Barras outro Scatter.', stacks:'React - JavaScript - Styled Components - ApexCharts', link: 'https://testeminehr.netlify.app/'},
        {img: imgFormAvancado, description:'Este projeto foi desenvolvido para aprimorar minhas habilidades na manipulação de formulários dinâmicos. Ele inclui um formulário que permite adicionar ou remover campos conforme necessário.', stacks:'React - TypeScript - HookForm - Zod', link: 'https://testeminehr.netlify.app/'},
        {img: imgTelaLogin,  description:'Este projeto foi desenvolvido para aprimorar minhas habilidades na validação de campos em formulários.', stacks:'HTML - CSS - JavaScript Puro', link: 'https://telalogin02.netlify.app/'},
        {img: imgTodoList, description:'Este projeto consiste em um sistema de tarefas do dia a dia, que permite controlar quantas tarefas ainda precisam ser feitas e quantas já foram concluídas. ', stacks:'React - TypeScript - Sass', link: 'https://testeminehr.netlify.app/'},
        
        
        
    ]

    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');
    const [modalEnviando, setModalEnviando] = React.useState<boolean>(false);


    function sendEmail(e:any){
        e.preventDefault();
       

        if(name === ''){
            toast.warn('Preencha o campo nome!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return
        }

        if(email === ''){
            toast.warn('Preencha o campo e-mail!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return
        }

        if(message === ''){
            toast.warn('Preencha o campo de mensagem!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return
        }

        else{
            setModalEnviando(true);
            const templateParms = {
                from_name: name,
                email: email,
                message: message,
            }

            emailjs.send("service_4yr49ia", "template_82hq4k9", templateParms,"tHzFnkprfUCmUrmuO")
            .then((response) => {
              
              console.log("email enviado", response.status, response.text)
              setModalEnviando(false)
              toast.success('Enviado com sucesso', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
              setEmail('')
              setName('')
              setMessage('')
              
            }, (err) =>{
              console.log("error:", err)
            })
              

        }

       
    }

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
                                    <h2>Charles Lemes</h2>
                                    <h5>Front-End Developer</h5>
                                    <h5 style={{marginTop: '120px'}}>Design e WebSite</h5>
                                    <h5>Desenvolvido</h5>
                                    <h5>Por Charles Lemes</h5>

                            </div>

                            <div className="box-formulario">
                            <form className="form-contato" onSubmit={sendEmail}>
                                    <Formulario 
                                    setName={setName} 
                                    setEmail={setEmail} 
                                    setMessage={setMessage} 
                                    modalEnviando={modalEnviando}
                                    name={name}
                                    email={email}
                                    message={message}
                                    />
                            </form>
                            <ToastContainer />
                            </div>

                            <div className="box-links-contato">
                                <ul>
                                    <li><a target="_blank" href="https://github.com/charleeslemes/">Github</a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/charleeslemes/">Linkedin</a></li>
                                    <li><a target="_blank" href="https://wa.me/5541995458166?text=">WhatsApp</a></li>
                                </ul>
                            </div>

                        </div>
                    
                </div>

            </div>


            <footer className="footer-portfolio">
                <div className="logoFooter">
                        <h2>{logo}</h2>
                </div>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                </ul>
            </footer>






            



            
        </>
    )
}


export default Home;