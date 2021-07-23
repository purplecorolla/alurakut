import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



function ProfileSidebar(propriedades) { 
  return(
    <Box>
        <img src = {`https://www.github.com/${propriedades.githubUser}.png`} style={{borderRadius: ' 8px '}}/>
        <hr/>
        <p>

        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
        </a>
        </p>
        <hr/>

      
        <AlurakutProfileSidebarMenuDefault />  
    </Box>

  )
}

export default function Home() {
   const usuarioAleatorio = 'purplecorolla';
   const amigos = [
   'w13gehts' , 
   'oatmealbrag' , 
   'w13gehts' , 
   'oatmealbrag' ,
   'w13gehts' , 
   'purplecorolla'  
  ]

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>
      <div className= "profileArea" style={{gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio}/>
      </div>
      <div className = "welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
        <h1 className="title">Bem vindo(a), purple!</h1>
        <OrkutNostalgicIconSet/>
        </Box>

        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>

          <form>
            <div>
              <input 
            placeholder="Qual vai ser o nome da sua comunidade?" 
            name= "title" 
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text" 
             />
            </div>
            

             <div>
            <input 
            placeholder= "Coloque uma URL para usarmos de capa" 
            name= "title" 
            aria-label="Qual vai ser o nome da sua comunidade?"
            type="text"
            />
             </div>
            <button>
              Criar comunidade
            </button>

          </form>

        </Box>
        
        
      </div>

    <div className = "profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper> 
        <h2 className="smallTitle">
          Amigos ({amigos.length})
        </h2>

        <ul>
        {amigos.map((itemAtual) => {
          return (
            <li>
            <a href={`users/${itemAtual}`} key={itemAtual}>
            <img src={`https://github.com/${itemAtual}.png`}/> 
            <span>{itemAtual}</span>
            </a>
          </li>
          )
        }
       )}
       </ul>
      </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  ) 
}

