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
            outputStyle: {
                flex: -1
            }
        };
        _this.mouseX = 0;
        _this.commands = {
            welcome: function welcome() {
                var opacity = 0;
                var timer = setInterval(function () {
                    opacity += .1;
                    _this.setOutput(React.createElement(
                        "span",
                        { id: "textbox", style: { opacity: opacity } },
                        "Welcome"
                    ));
                    if (opacity >= 1) {
                        clearInterval(timer);
                    }
                }, 100);
            },
            clear: function clear() {
                _this.setOutput(null);
            },
            background: function background(color) {
                _this.setStyle({ backgroundColor: color });
            }
        };
        _this.handleInput = _this.handleInput.bind(_this);
        _this.beginResize = _this.beginResize.bind(_this);
        _this.resize = _this.resize.bind(_this);
        _this.endResize = _this.endResize.bind(_this);
        return _this;
    }

    _createClass(ConsoleController, [{
        key: "setOutputAndStyle",
        value: function setOutputAndStyle(jsx, prop) {
            this.setState(function (state, props) {
                return {
                    output: jsx,
                    outputStyle: Object.assign({}, state.outputStyle, prop)
                };
            });
        }
    }, {
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
        key: "beginResize",
        value: function beginResize(e) {
            console.log("Resizer down");
            this.mouseX = e.pageX;
            document.addEventListener("mousemove", this.resize);
            document.addEventListener("mouseup", this.endResize);
        }
    }, {
        key: "resize",
        value: function resize(e) {
            console.log(e.movementX + ", " + e.movementY);
            console.log("offset: " + e.pageX);
            //let consoleOutput = document.getElementById("console-output");
            var root = document.getElementById("root");
            this.setState(function (state, props) {
                return {
                    outputStyle: Object.assign({}, state.outputStyle, { flex: Math.min(Math.max((1 - (e.pageX - root.getBoundingClientRect().x) / root.clientWidth) * 2, 0), 2)
                        /*state.outputStyle.flex * (1 -
                            (e.pageX - this.mouseX) /
                            document.getElementById("console-output").clientWidth)*/
                    })
                };
            });
            this.mouseX = e.pageX;
            console.log(e.pageX - document.getElementById("root").getBoundingClientRect().x);
        }
    }, {
        key: "endResize",
        value: function endResize(e) {
            document.removeEventListener("mousemove", this.resize);
            document.removeEventListener("mouseup", this.endResize);
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.state.outputStyle.flex);

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(Console, { style: { flex: 2 - this.state.outputStyle.flex },
                    onInput: this.handleInput }),
                React.createElement(
                    "span",
                    { id: "console-output", style: this.state.outputStyle },
                    React.createElement("span", { id: "resizer", onMouseDown: this.beginResize,
                        onDragStart: function onDragStart(e) {
                            return e.preventDefault();
                        } }),
                    React.createElement(
                        "span",
                        { id: "output-wrapper" },
                        this.state.output
                    )
                )
            );
        }
    }]);

    return ConsoleController;
}(React.Component);

ReactDOM.render(React.createElement(ConsoleController, null), document.getElementById("root"));