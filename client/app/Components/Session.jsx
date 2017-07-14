import React from 'react';
import Menu from './Menu.jsx';
import * as d3 from 'd3'
import ReactDOM from 'react-dom'
import { click, forceDiagram} from '../../d3/d3helpers.js'

import Graph from './Graph.jsx'


  var nodes = [
    {key: 2, size: 40}
  ]

  //define links
  var links = [
    {source: 0, target: 0, key: 1, size: 2},
  ]

class Session extends React.Component {

  componentDidMount() {
    
  }

  constructor(props) {

    super(props)

    this.state = {
      nodes: nodes,
      links: links
    }
  }

  addNode() {
    const lastKey = nodes[nodes.length - 1].key;
    const lastLinkKey = links[links.length - 1].key
    nodes.push({key: lastKey+1, size: 10, x: 20, y: 20})
    links.push({source: nodes.length-1, target: 0, key: lastLinkKey+1, size: 2})
    this.setState({
      nodes,
      links
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.addNode.bind(this)}>Add Node</button>
        <Graph nodes={this.state.nodes} links={this.state.links} showDetail={this.props.showDetail} /> 
        <div>
          <Menu className="menu-button"
                menuVisible={this.props.menuVisible}
                toggleClick={() => this.props.menuVisible ? this.props.hideMenu() : this.props.showMenu()}
          />
          <button onClick={this.addNode.bind(this)}>Add Node</button>
          <Graph nodes={this.state.nodes} links={this.state.links} />
        </div>
      </div>
    )
  }
}
export default Session;

