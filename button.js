'use strict';

const e = React.createElement;
const questionNumber = document.querySelector("#question-number");
const questionTitle = document.querySelector("#question-title");
const answerA = document.querySelector('#a');


class AnswerButton extends React.Component {
     constructor(props) {
         super(props);
         this.state = { clicked : false };
        }
     
        

     render() {
     if (this.state.clicked) {
         return (
             <button class = "clicked" onClick = {() => this.setState({ clicked : true})}>
                    
             </button>
         );
        }

         return (
             <button class = "unclicked" onClick = {() => this.setState({ clicked : true})}> 
                    
             </button>
         );
     }
}

/* const quiz = [{
    id : 0,
    question: "qui est batman ?",
    reponse: [
        "gégé",
        "batman",
        "jeanlou",
        "bernard",
    ],
    answer : "gégé",
}] */





// TEST AVEC CORRECTION DE ROMAIN

class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { step: 0 };
    }
  
    render() {
      if (this.state.step === 1) {
          return (
              <React.Fragment>
                  <p>Sure?</p>
                  <button onClick={ () => this.setState({ step: 2 }) }>
                      Yes
                  </button>
                  <button onClick={ () => this.setState({ step: 0 }) }>
                      No
                  </button>
              </React.Fragment>
          );
      }
      if (this.state.step === 2) {
        return 'You liked ' + this.props.name;
      }
  
      return (
          <button onClick={ () => this.setState({ step: 1 }) }>
              Like {this.props.name}
          </button>
      );
    }
  }





// const answers = [
//     "A",
//     "B",
//     "C",
//     "D",
// ];
// for (let i = 0; i < answers.length; i++) {
//     const domContainer = document.createElement('div');
//     document.body.appendChild(domContainer);

//     const answer = answers[i];
//     ReactDOM.render(
//         <AnswerButton  name={answer} />,
//         domContainer
//     );
// }
        
if (this.state.step === 1) {
    return (
        <React.Fragment>
            <p>question 2</p>
            <button onClick={ () => {
                this.setState({ step: 2, score: this.state.score - this.state.multiplicator });
                setTimeout(() => this.setState({step: 3}), 3000);
             } }>
                bad answer
            </button>
            <button onClick={ () => {
                this.setState({ step: 2, score: this.state.score + this.state.multiplicator });
                setTimeout(() => this.setState({step: 3}), 3000);
            } }>
              good answer
            </button>
            <p>{ this.state.score }</p>
        </React.Fragment>
    );
}