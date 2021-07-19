import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';



function ProfileSidebar(propriedades) { 
  console.log(propriedades);
  return(
    <Box>
        <img src = {`https://www.github.com/${propriedades.githubUser}.png`} style={{borderRadius: ' 8px '}}/>
    </Box>

  )
}

export default function Home() {
   const githubUser = 'purplecorolla';
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
        <ProfileSidebar githubUser={githubUser}/>

      </div>
      <div className = "welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
        <h1 className="title">Bem vindo(a)</h1>
        <OrkutNostalgicIconSet/>
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

