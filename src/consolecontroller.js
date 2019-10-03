class ConsoleController extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Console></Console>
        );
    }
}
ReactDOM.render(<ConsoleController />, document.getElementById("root"));