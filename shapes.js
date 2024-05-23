const fs = require('fs');
const inquirer = require('inquirer');

//Given by Gary
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
        return `<svg version=${this.version} width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
}

class Circle {
    constructor(color) {
        this.color = color;
    }

    render() {
        //renders the circle tag
        //similar to above
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

inquirer.prompt([
    {
      type: 'list',
      message: "Shape",
      name: "shape"
    },
    {
      type: 'input',
      message: "Color",
      name: "shapeColor"
    }
  ]).then(response => {
    if(response.shape === 'circle'){
      const shape = new Circle(shapeColor)
    }
  })
  