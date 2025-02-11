import React from "react"
import CatComponent from "./CatComponent"
import GraceHopperQuoteComponent from "./GraceHopperQuoteComponent"
import MouseComponent from "./MouseComponent"


class App extends React.Component {
	render() {
	  return (
	    <div className="App">
	      <CatComponent />
	      <GraceHopperQuoteComponent />
	      <MouseComponent />
	     </div>
	   );
	}
}

export default App
