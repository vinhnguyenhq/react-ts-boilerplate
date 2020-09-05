import * as React from 'react'

type Props = {
  title: string
}

const App: React.SFC<Props> = ({ title }: Props) => {
  return <React.Fragment>{title}</React.Fragment>
}

App.defaultProps = {
  title: 'react ts boilerplate'
}

export default App
