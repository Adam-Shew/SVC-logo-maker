const fs = require('fs');
const inquirer = require('inquirer');

class Svg {
    constructor() {
        this.version = "1.2";
        this.width = "300";
        this.height = "200";
        this.xmlns = "http://www.w3.org/2000/svg";
        this.content = '';
    }

    addContent(content) {
        this.content += content;
    }

    render() {
        return `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}">\n${this.content}\n</svg>`;
    }
    
}

class Circle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />
                <text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Square {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />
                <text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Triangle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />
                <text x="150" y="110" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}


inquirer.prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters to display:',
        name: 'textContent',
        validate: function (input) {
            return input.length <= 3;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:'
    },
    {
      type: 'list',
      message: "Select a shape",
      name: "shape",
      choices: ['circle','square','triangle']
    },
    {
      type: 'input',
      message: "Choose  color for the shape",
      name: "shapeColor"
    }


  ]).then(response => {
    let shape;

    if(response.shape === 'circle'){
       shape = new Circle(response.shapeColor, response.textContent, response.textColor)
    } else if(response.shape === 'square') {
       shape = new Square(response.shapeColor, response.textContent, response.textColor)
    } else if(response.shape === 'triangle') {
       shape = new Triangle(response.shapeColor, response.textContent, response.textColor)
    } 

    const newSvg = new Svg();

    newSvg.addContent(shape.render());

    const svgRender = newSvg.render();

    fs.writeFile('logo.svg', svgRender, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });

  }).catch(error => {
    console.error('Error:', error.message);
});
  