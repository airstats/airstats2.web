import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Container, Grid, Image, Input} from 'semantic-ui-react'
import logo from './logo.png'
import './Header.scss'

export default class Header extends React.Component {
  render () {
    return (
      <section className='blueHeader'>
        <Container>
          <Grid stackable>
            <Grid.Column color='blue' width={2}><Image height='50' src={logo} style={{
              marginRight: '1.5em'
            }} /></Grid.Column>
            <Grid.Column color='blue' verticalAlign='middle' width={9}><Input fluid action={{color: 'orange', icon: 'search'}} placeholder='Search Callsign, CID, Airport ICAO' size='small' /></Grid.Column>
          </Grid>
        </Container>
        <NavBar />
      </section>
    )
  }
}
