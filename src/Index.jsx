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
  const [ cvc, setCvc ] = useState('')

  const handleUser = (evento) => {
    const value = evento.target.value
    const formattedValue = value.replace(/\W/g, '').replace(/\d/g, '').replace(/_/g, '')
    if (formattedValue > 20) {
      setUser(formattedValue.slice(0, 20))
    } else {
      setUser(formattedValue)
    }
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
    const value = evento.target.value
    const formattedValue = value.replace(/\D/g, '')
    if (formattedValue.length > 2) {
      setMonth(formattedValue.slice(0, 2))
    } else {
      setMonth(evento.target.value)
    }
  }

  const handleYear = (evento) => {
    const value = evento.target.value
    const formattedValue = value.replace(/\D/g, '')
    if (formattedValue.length > 2) {
      setYear(formattedValue.slice(0, 2))
    } else {
      setYear(formattedValue)
    }
  }

  const handleCvc = (evento) => {
    const value = evento.target.value
    const formattedValue = value.replace(/\D/g, '')
    if (formattedValue.length > 2) {
      setCvc(value.slice(0, 3))
    } else {
    setCvc(value)
    }
  }

  return (
    <MyContext.Provider value={{ user, handleUser, number, handleNumber, month, handleMonth, year, handleYear, cvc, handleCvc }}>
      <ContentContainer>
        <PageBackground>
          <Form />
        </PageBackground>
      </ContentContainer>
    </MyContext.Provider>
  )
}

export default App