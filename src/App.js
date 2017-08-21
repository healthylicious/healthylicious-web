import React, { Component } from 'react';
import './App.css';
import { orange500, green800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: orange500
      },
      appBar: {
        height: 50,
      },
    });

    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    `;

    const Subtitle = styled.p`
    font-size: 1.5em;
    text-align: center;
    `;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Wrapper>
          <Title>
            <span style={{ color: orange500 }}>Healthy</span><span style={{ color: green800 }}>Licious</span>
          </Title>
          <Subtitle>Coming Soon ...</Subtitle>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
