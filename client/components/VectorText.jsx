import React from 'react'
import TextToSVG from 'text-to-svg'

export default class VectorText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { svg: '<svg />' }
  }

  componentWillMount() {
    let self = this
    this.convertToSVG(this.props.text).then(svg => {
      self.setState({ svg })
      // console.log(!!svg, !!this.state.svg)
    })

  }

  render() {
    return <span className="vector-text-wrap" dangerouslySetInnerHTML={{ __html: this.state.svg }}></span>
  }

  convertToSVG() {
    let text = this.props.text
    return new Promise((resolve, reject) => {
      TextToSVG.load('client/fonts/phosphate/hinted-subset-Phosphate-Inline.ttf', (err, textToSVG) => {
        err && reject(err)

        // let svg = '',
        //     metrics = textToSVG.getMetrics(text)

        let svg = text.split(' ').map(word => {
          console.log(word)
          return textToSVG.getSVG(word)
        }).join('')
        // svg = `<svg xmlns="http://www.w3.org/2000/svg"
        //             xmlns:xlink="http://www.w3.org/1999/xlink"
        //             width="${metrics.width}"
        //             height="${metrics.height * text.split(' ').length}">${svg}</svg>`

        resolve(svg)
      })
    })

  }
}
