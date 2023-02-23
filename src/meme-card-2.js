import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const toph= new URL('tophercover.jpg', import.meta.url).href;

export class MemeCard2 extends LitElement {
    static get properties() {
      return {
        name: {
          type: String,
          reflect: true
        },
        fname: { type: String},
        position: {
          type: String,
        },
        top: {type: String},
        imageDescription: {type: String},
        accentColor:{
          type: String,
          reflect: true,
          attribute: 'accent-color'
        }
    
      }
    }

  static get styles() {
      return css`

  :host([accent-color="blue"]) .card{
    background-color: blueviolet;
    color:white;
  }
  :host([accent-color="green"]) .card{
    background-color: green;
    color:white;
  }
  :host([accent-color="red"]) .card{
    background-color:red;
    color:white;
  }

  .card {
    width: 400px;
    border: 2px solid black;
    display: inline-flex;
  }
  
  .image {
    width: 400px;
  }
  .header {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
  }
  
  .header h3:hover {
    font-style: italic;
    font-size: 1.1em;
  }
  
  .header h3,
  .header h4 {
    margin: 16px;
    font-style: normal;
  }
  
  .buttons button:focus,
  .buttons button:hover {
    background-color: rgba(200, 0, 50, 0.5);
  }
  
  .buttons button:active {
    background-color: rgba(50, 0, 200, 0.5);
  }
  
  .buttons {
    display: block;
  }
  
  button {
    padding: 12px;
    font-size: 32px;
  }
  details {
    margin-left: 24px;
    padding: 10px;
  }
  .details summary {
    font-size: 20px;
    font-weight: bold;
  }
  
  .dupe {
    background-color: white;
    display: inline-block;
    padding: 8px 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 80px;
    font-weight: bold;
    box-shaddow: 10px 5px 5px #ccc;
    text-decoration: none;
    font-family: Papyrus;
  }
  
  .newtitle {
    background-color: white;
    display: inline-block;
    padding: 8px 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 80px;
    font-weight: bold;
    box-shaddow: 10px 5px 5px #ccc;
    text-decoration: none;
  }
  
  .delete {
    background-color: white;
    display: inline-block;
    padding: 8px 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 80px;
    font-weight: bold;
    box-shaddow: 10px 5px 5px #ccc;
    text-decoration: none;
  }
  .data-toggle-btn {
    background-color: white;
    display: inline-block;
    padding: 8px 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 80px;
    font-weight: bold;
    box-shaddow: 10px 5px 5px #ccc;
    text-decoration: none;
  }
  .details {
    background-color: #4caf50;
    display: inline-block;
    padding: 8px 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 80px;
    font-weight: bold;
    box-shaddow: 10px 5px 5px #ccc;
    text-decoration: none;
  }
  .changecolor {
    background-color: #4caf50;
    display: inline-block;
    padding: 8px 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 80px;
    font-weight: bold;
    box-shaddow: 10px 5px 5px #ccc;
    text-decoration: none;
  }
  
  @media only screen and (max-width: 425px) {
    .card {
      font-weight: normal;
    }
    .card .header h3 {
      font-size: 12px;
    }
    .card .header h4 {
      font-size: 10px !important;
    }
    details {
      display: none;
    }
  }
  @media only screen and (max-width: 1200px) {
    .card {
      background-color: pink;
    }
  }
  @media only screen and (max-width: 600px) {
    .card {
      background-color: purple;
    }
  }
  `;
    }

  constructor() {
    super();
    this.name = "Topher";
    this.position = "Powerful Being";
    this.top = "Cool Guy";
    this.accentColor=null;
  }


  render() {
    return html`
   
  <div class="card">
    <div class="container">
    <meme-maker
          image-url="${toph}"
          top-text="${this.top}">
        </meme-maker>

      <div class="header">
      <h3>${this.name}</h3>
          <h4>${this.position}</h4>
      </div>
      <details class="details">
        <summary>Topher Facts</summary>
        <div>
          <ul>
            <li>killed god and took his place</li>
            <li>owns 70% of all rae dunn mugs</li>
            <li>favorite color is teal</li>
            <li>favorite store is tj maxx</li>
          </ul>
        </div>
        </details>
        </div>
        </div>
  </div>
    `;
  }
}

customElements.define('meme-card-2', MemeCard2);