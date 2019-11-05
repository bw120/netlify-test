import React, { Component } from 'react'
import content from '../content/home.md';

export default class Home extends Component {
  render() {
    let {html, attributes: {title, summary}} = content;
    console.log(summary);
    return (
      <article>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { summary.map((item, k) => (
                  <li key={k}>
                    <p>{item.description}</p>
                  </li>
              ))}
          </ul>
      </article>
    )
  }
}