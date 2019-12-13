import * as React from 'react'
import { render } from 'react-dom'
import { Container, CssBaseline } from '@material-ui/core'
import monsters from './Data/monsters.yml'

function App() {
  return (
    <Container>
      <CssBaseline />
      <h1>Pathfinder 2e Encounter Builder</h1>
    </Container>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
