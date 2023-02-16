import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class MemeCard2 extends LitElement {
    static get properties() {
      return {
        name: {
          type: String,
          reflect: true
        },
        position: {
          type: String,
        }
      }
    }

  static get styles() {
      return css`
  .wrapper {
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
  
  .changecolor {
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
  
  @media only screen and (max-width: 425px) {
    .wrapper {
      font-weight: normal;
    }
    .wrapper .header h3 {
      font-size: 12px;
    }
    .wrapper .header h4 {
      font-size: 10px !important;
    }
    details {
      display: none;
    }
  }
  @media only screen and (max-width: 1200px) {
    .wrapper {
      background-color: pink;
    }
  }
  @media only screen and (max-width: 600px) {
    .wrapper {
      background-color: purple;
    }
  }
  `;
    }



  constructor() {
    super();
    this.name = "Topher";
    this.position = "Powerful Being";
  }



  render() {
    return html`
   
  <div class="wrapper">
    <div class="container">
    <meme-maker alt="Toph" image-url="https://i.kym-cdn.com/entries/icons/mobile/000/043/203/tophercover.jpg" top-text="Topher" bottom-text="my god">
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