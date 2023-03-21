import { MyContext } from './contexts/MyContext'
import { PageBackground } from './components/Background/PageBackground'
import { ContentContainer } from './container/ContentContainer'
import { Form } from './components/Form/Form'
import { useState } from 'react'

function App() {
  const [ user, setUser ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ month, setMonth ] = useState('')
  const [ year, setYear ] = useState('')

  const handleUser = (evento) => {
    setUser(evento.target.value)
  }

  const handleNumber = (evento) => {
    setNumber(evento.target.value)
  }

  const handleMonth = (evento) => {
    setMonth(evento.target.value)
  }

  const handleYear = (evento) => {
    setUser(evento.target.value)
  }

  return (
    <MyContext.Provider value={{ handleUser, user, number, handleNumber, month, setMonth, year, setYear }}>
      <ContentContainer>
        <PageBackground>
          <Form />
        </PageBackground>
      </ContentContainer>
    </MyContext.Provider>
  )
}

export default App