import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';

import './App.css';
import MainForm from './FormComponents/MainForm';
import MainSummary from './SummaryComponents/MainSummary';

// This object will allow us to
// easily convert numbers into US dollar values

export const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      },
      features: {
        Processor: [
          {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200
          }
        ],
        'Operating System': [
          {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          {
            name: 'Bodhi Linux',
            cost: 300
          }
        ],
        'Video Card': [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
          },
        ]
      },
    }
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  // render() {
  //   const features = Object.keys(this.state.features).map((feature, idx) => {
  //     const featureHash = feature + '-' + idx;
  //   const options = this.state.features[feature].map(item => {
  //     const itemHash = slugify(JSON.stringify(item));
  //     return (
  //       <div key={itemHash} className="feature__item">
  //         <input
  //           type="radio"
  //           id={itemHash}
  //           className="feature__option"
  //           name={slugify(feature)}
  //           checked={item.name === this.state.selected[feature].name}
  //           onChange={e => this.updateFeature(feature, item)}
  //         />
  //         <label htmlFor={itemHash} className="feature__label">
  //           {item.name} ({this.state.currencyFormat.format(item.cost)})
  //           </label>
  //       </div>
  //     );
  //   });
  //   })

  // return (
  //   <fieldset className="feature" key={featureHash}>
  //     <legend className="feature__name">
  //       <h3>{feature}</h3>
  //     </legend>
  //     {options}
  //   </fieldset>
  // );
  // });

  // const summary = Object.keys(this.state.selected).map((feature, idx) => {
  //   const featureHash = feature + '-' + idx;
  //   const selectedOption = this.state.selected[feature];

  //   return (
  //     <div className="summary__option" key={featureHash}>
  //       <div className="summary__option__label">{feature} </div>
  //       <div className="summary__option__value">{selectedOption.name}</div>
  //       <div className="summary__option__cost">
  //         {this.state.currencyFormat.format(selectedOption.cost)}
  //       </div>
  //     </div>
  //   );
  // });

  render() {
    return (
      <div className="App" >
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={this.state.features}
            selected={this.state.selected}
            currencyFormat={() => this.USCurrencyFormat()}
            updateFeature={() => this.updateFeature()}
          />
          <MainSummary
            selected={this.state.selected}
          />
        </main>
      </div>
    )
  }
}
export default App;
