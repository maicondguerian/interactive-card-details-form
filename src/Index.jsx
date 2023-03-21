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
    const value = evento.target.value;
    const formattedValue = value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim();
    if (formattedValue.length > 19) {
      setNumber(formattedValue.slice(0, 19));
    } else {
      setNumber(formattedValue);
    }
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