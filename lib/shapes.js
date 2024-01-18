// Top Level - What each logo shape contains: text, color, background color
class logo {
    constructor(color, background, text) {
        this.color = color;
        this.background = background;
        this.text = text;
        this.svgStart = `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">`;
        this.svgEnd = `</svg>`;
      }
}

// Triangle Shape Render
class Triangle extends logo {
  render() {
      const svgShape = `<polygon points="100,10 200,300 0,300" style="fill:${this.background};" />`;
      const svgText = `<text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" style="font-size: 2rem;">${this.text}</text>`;

      return this.svgStart + svgShape + svgText + this.svgEnd;
  }
}

// Square shape render
class Square extends logo {
  render() {
    const svgShape = `<rect x="25" y="75" width="150" height="150" style="fill:${this.background}" />`;
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" style="font-size: 2rem;">${this.text}</text>`;
    
    return this.svgStart + svgShape + svgText + this.svgEnd;
  }
}

// Circle shape render
class Circle extends logo {
  render() {
    const svgShape = `<circle cx="100" cy="150" r="100" fill="${this.background}" />`;
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}" style="font-size: 2rem;">${this.text}</text>`;
    
    return this.svgStart + svgShape + svgText + this.svgEnd;
  }
}

//Exports them out to be used
module.exports = {Triangle, Square, Circle};