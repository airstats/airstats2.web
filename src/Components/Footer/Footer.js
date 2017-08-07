import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Divider, Grid} from 'semantic-ui-react'
import './Footer.scss'

class Footer extends Component {
  render () {
    return (
      <section>
        <Container>
          <Grid>
            <Grid.Row columns='1'>
              <Grid.Column><Divider />© 2017 by Daniel A. Hawton and Rahul A. Parkar. All Rights Reserved. <Link to='/about/privacy'>Privacy</Link> | <Link to='/faq'>FAQs</Link> | <a href='https://www.aircharts.org'>AirCharts</a> | <a href='https://github.com/airstats'>GitHub</a></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
    )
  }
}

export default Footer
