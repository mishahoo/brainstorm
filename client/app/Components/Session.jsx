import React from 'react';
import * as d3 from 'd3'
import { withFauxDOM } from 'react-faux-dom'
import { click, forceDiagram} from '../../d3/d3helpers.js'

import Graph from './Graph.jsx'


  var nodes = [
    {key: 1, size: 20},
    {key: 2, size: 40},
    {key: 3, size: 20},
    {key: 4, size: 10}
  ]

  //define links
  var links = [
    {source: 0, target: 1, key: 1, size: 2},
    {source: 2, target: 1, key: 2, size: 2},
    {source: 3, target: 1, key: 3, size: 2}
  ]

class Session extends React.Component {

  // componentDidMount() {
  //   const board = this.props.connectFauxDOM('div','board')
  //   d3.select(board)
  //     .append('svg')
  //     .attr("height", "100%")
  //     .attr("width", "100%")
  //   const parentEl = d3.select(board).selectAll("svg")
  //   forceDiagram(parentEl)
  // }

  constructor(props) {
    
    super(props)

    this.state = {
      nodes: nodes,
      links: links
    }
  }

  addNode() {
    const lastKey = nodes[nodes.length - 1].key;
    const lastSource = links[links.length - 1].source;
    const lastLinkKey = links[links.length - 1].key
    nodes.push({key: lastKey+1, size: 10, x: 20, y: 20})
    links.push({source: nodes.length-1, target: 1, key: lastLinkKey+1, size: 2})
    this.setState({
      nodes,
      links
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.addNode.bind(this)}>Add Node</button>
        <Graph nodes={this.state.nodes} links={this.state.links} /> 
      </div>
    )
  }
}

export default withFauxDOM(Session);