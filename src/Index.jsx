import { MyContext } from './contexts/MyContext'
import { PageBackground } from './components/Background/PageBackground'
import { ContentContainer } from './container/ContentContainer'
import { Form } from './components/Form/Form'

function App() {

  return (
    <MyContext.Provider value={{}}>
      <ContentContainer>
        <PageBackground>
          <Form />
        </PageBackground>
      </ContentContainer>
    </MyContext.Provider>
  )
}

export default App
