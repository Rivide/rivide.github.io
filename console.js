var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Console = function (_React$Component) {
    _inherits(Console, _React$Component);

    function Console(props) {
        _classCallCheck(this, Console);

        var _this = _possibleConstructorReturn(this, (Console.__proto__ || Object.getPrototypeOf(Console)).call(this, props));

        _this.state = {
            lineList: ["hey", "how's", "it", "going"],
            readingInput: true,
            inputPrefix: React.createElement(
                "span",
                null,
                "<Console>"
            )
        };
        _this.inputRef = React.createRef();
        _this.consoleRef = React.createRef();

        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        //this.lineRef = React.createRef();
        //this.state.lineList.push(this.renderLine(0));
        return _this;
    }

    _createClass(Console, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            //this.lineRef.current.focus();
            this.consoleRef.current.scrollTop = this.consoleRef.current.scrollHeight;
        }
    }, {
        key: "handleKeyPress",
        value: function handleKeyPress(e, inputLine, inputSpan) {
            if (e.key === "Enter") {
                e.preventDefault();

                var target = e.target;
                target.innerHTML += "\n";

                var input = inputSpan.current.innerHTML;
                inputSpan.current.innerHTML = "";
                this.setState(function (state, props) {
                    return {
                        lineList: state.lineList.concat(inputLine)
                    };
                });
                this.onInput(input);
                //this.addLine();
            }
        }
    }, {
        key: "onInput",
        value: function onInput(input) {
            console.log(input);
        }
    }, {
        key: "addLine",
        value: function addLine() {
            var _this2 = this;

            this.setState(function (state, props) {
                return {
                    lineList: state.lineList.concat(_this2.renderLine(state.lineList.length))
                };
            });
        }
    }, {
        key: "renderLines",
        value: function renderLines() {
            return this.state.lineList.map(function (line, i) {
                return React.createElement(
                    "li",
                    { key: i },
                    React.createElement(
                        "span",
                        { className: "line" },
                        line
                    )
                );
            });
        }
    }, {
        key: "renderInputLine",
        value: function renderInputLine() {
            var state = this.state;
            if (state.readingInput) {
                var a = React.createElement(Input, { ref: this.inputRef, prefix: this.state.inputPrefix, handleKeyPress: this.handleKeyPress });
                return a;

                /*return (
                    <li key={state.lineList.length}>
                        {state.inputPrefix}
                        <span className="input" contentEditable="true"
                            onKeyPress={this.handleKeyPress}></span>
                    </li>
                );*/
            }
        }
    }, {
        key: "render",
        value: function render() {
            console.log("render console");
            return React.createElement(
                "div",
                { className: "console", ref: this.consoleRef },
                React.createElement(
                    "ul",
                    null,
                    this.renderLines(),
                    this.renderInputLine()
                )
            );
        }
    }]);

    return Console;
}(React.Component);
//ReactDOM.render(<Console />, document.getElementById("root"));