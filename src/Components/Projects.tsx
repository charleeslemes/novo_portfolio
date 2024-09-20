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


      function RenderProjects (){
        let i:number =0
   
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
        
      }
   

    return(
<>

<div className="container-projects">
    <Carousel  showDots={true} responsive={responsive}>
        {
          RenderProjects()
        }
   
    </Carousel>
</div>
        
</>
    )
}



export default Projects;