import { MyContext } from './contexts/MyContext'
import { PageBackground } from './components/Background/PageBackground'
import { ContentContainer } from './container/ContentContainer'
import './Index.scss'

function App() {

  return (
    <MyContext.Provider value={{}}>
      <ContentContainer>
        <PageBackground>
          
        </PageBackground>
      </ContentContainer>
    </MyContext.Provider>
  )
}

export default App
