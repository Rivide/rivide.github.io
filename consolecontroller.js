var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConsoleController = function (_React$Component) {
    _inherits(ConsoleController, _React$Component);

    function ConsoleController(props) {
        _classCallCheck(this, ConsoleController);

        var _this = _possibleConstructorReturn(this, (ConsoleController.__proto__ || Object.getPrototypeOf(ConsoleController)).call(this, props));

        _this.state = {
            output: null,
            outputStyle: {}
        };
        _this.commands = {
            welcome: function welcome() {
                _this.setOutput(React.createElement(
                    "div",
                    null,
                    "Welcome"
                ));
            },
            clear: function clear() {
                _this.setOutput(null);
            },
            background: function background(color) {
                console.log(color + color.length);
                _this.setStyle({ backgroundColor: color });
            }
        };
        _this.handleInput = _this.handleInput.bind(_this);
        return _this;
    }

    _createClass(ConsoleController, [{
        key: "setStyle",
        value: function setStyle(prop) {
            this.setState(function (state, props) {
                return {
                    outputStyle: Object.assign({}, state.outputStyle, prop)
                };
            });
        }
    }, {
        key: "setOutput",
        value: function setOutput(jsx) {
            this.setState({ output: jsx });
        }
    }, {
        key: "handleInput",
        value: function handleInput(input) {
            console.log("handled");
            var args = input.trim().split(/\s+/);
            var command = this.commands[args[0]];
            console.log(command);
            if (command) {
                command.apply(undefined, _toConsumableArray(args.slice(1)));
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(Console, { onInput: this.handleInput }),
                React.createElement(
                    "span",
                    { id: "console-output", style: this.state.outputStyle },
                    this.state.output
                )
            );
        }
    }]);

    return ConsoleController;
}(React.Component);

ReactDOM.render(React.createElement(ConsoleController, null), document.getElementById("root"));