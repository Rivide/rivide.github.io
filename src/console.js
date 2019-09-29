class Console extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineList: [],
            lineStarter: (
                <span>{"<Console>"}</span>
            )
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.lineRef = React.createRef();
        this.state.lineList.push(this.renderLine(0));
    }
    componentDidUpdate() {
        this.lineRef.current.focus();
    }
    handleKeyPress(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            let target = e.target;
            target.innerHTML += "\n";
            target.setAttribute("contentEditable", "false");
            this.addLine();
        }
    }
    renderLine(i) {
        let state = this.state;
        return (
            <li key={i}>
                {state.lineStarter}
                <span className="line" contentEditable="true" ref={this.lineRef}
                    onKeyPress={this.handleKeyPress}></span>
            </li>
        );
    }
    addLine() {
        this.setState((state, props) => ({
            lineList: state.lineList.concat(this.renderLine(state.lineList.length))
        }));
    }
    render() {
      return (
        <div className="console">
            <ul>{this.state.lineList}</ul>
        </div>
      );
    }
}
ReactDOM.render(<Console />, document.getElementById("root"));
