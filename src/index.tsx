import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate, render } from 'react-dom'
import { App } from './App'
import { ProvideAuth } from './hooks/use-auth'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import theme from './theme'


const root = document.getElementById('root') as any
// Check if the root node has any children to detect if the app has been prerendered
if (root.hasChildNodes()) {
  hydrate(
    <ProvideAuth>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ProvideAuth>,
    root
  )
} else {
  render(
    <ProvideAuth>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </ProvideAuth>,
    root
  )
}

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ChakraProvider theme={theme}>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
