// @flow
import React from "react"
import PropTypes from "prop-types"

// ###########################################################
// #######  React
// ###########################################################

// ## Eg. Stateless

type Props = {
  foo: string,
}

const Comp = ({ foo }: Props) => <div>{foo}</div>

const App = () => <Comp foo="bar" />

// ## Eg. PropTypes

// class MyComponent extends React.Component {
//   static propTypes = {
//     foo: PropTypes.number.isRequired,
//     bar: PropTypes.string,
//   }

//   render() {
//     return <div>{this.props.bar}</div>
//   }
// }

// ## Eg. Type Props

// type Props = {
//   foo: number,
//   bar?: string,
// }

// class MyComponent extends React.Component<Props> {
//   render() {
//     this.props.doesNotExist // Error! You did not define a `doesNotExist` prop.

//     return <div>{this.props.bar}</div>
//   }
// }

// const App = () => <MyComponent foo={42} />

// ## Eg. Type Props and Type State

// type Props = {
//   /* ... */
// }

// type State = {
//   count: number,
// }

// class MyComponent extends React.Component<Props, State> {
//   state = {
//     count: 0,
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//       }))
//     }, 1000)
//   }

//   render() {
//     return <div>Count: {this.state.count}</div>
//   }
// }

// const App = () => <MyComponent />
