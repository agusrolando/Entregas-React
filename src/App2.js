import {Component} from "react";

export default class App2 extends Component {
  render() {
    return (
      <div className="app">
        <h2>Saludos a todos {this.props.descripcion2}!</h2>
      </div>
    )
  }
}