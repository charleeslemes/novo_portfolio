import '../Pages/home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Projects(props:any){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 800, min: 0 },
          items: 1
        }
      };


     /* 
     
      Função era para renderizar o carrosel, mas só renderização a primeira  linha do projeto
      feito um map no html, funcionou normalmente.
     function RenderProjects (){
        let i:number;
   
          for(i =0; i< props.obj.length; i++){
              return(
                <div className='slider'>
                <div className='container-img'>
                    <div className="informacoes">
                      <p>Texto explicativo sobre o webSite</p>
                      <a target='blank' href={props.obj[i].link}>Visualizar</a>
                      </div>
                    <img src={props.obj[i].img} alt="" />
                    
                    
                </div>
             </div>
              )
          }
        
      }*/
   

    return(
<>

<div className="container-projects">
    <Carousel  showDots={true} responsive={responsive}>
        {

          props.obj.map((n:any,index:number)=>{
            return(
              <>
              <div className='slider'>
                <div className='container-img'>
                    <div className="informacoes">
                      <p>{props.obj[index].description}</p>
                      <h5>{props.obj[index].stacks}</h5>
                      <a target='blank' href={props.obj[index].link}>Visualizar</a>
                     
                      </div>
                    <img src={props.obj[index].img} alt="" />
                    
                    
                </div>
             </div>


              </>
            )
          })
        }
   
    </Carousel>
</div>
        
</>
    )
}



export default Projects;