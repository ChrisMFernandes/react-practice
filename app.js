var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// * Some basic components from React docs for more practice

var Header = function Header(props) {
  return React.createElement(
    "header",
    null,
    React.createElement(Clock, null),
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "span",
      { className: "stats" },
      "Players: ",
      props.totalPlayers,
      " "
    )
  );
};

var Player = function Player(props) {
  return React.createElement(
    "div",
    { className: "player" },
    React.createElement(
      "span",
      { className: "player-name" },
      React.createElement(
        "button",
        { className: "remove-player", onClick: function onClick() {
            return props.removePlayer(props.id);
          } },
        "\u2716"
      ),
      props.name
    ),
    React.createElement(Counter, null)
  );
};

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

    _this.incrementScore = function () {
      _this.setState(function (prevState) {
        return {
          score: prevState.score + 1
        };
      });
    };

    _this.decrementScore = function () {
      _this.setState(function (prevState) {
        return {
          score: prevState.score - 1
        };
      });
    };

    _this.state = {
      score: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "counter" },
        React.createElement(
          "button",
          { className: "counter-action decrement", onClick: this.decrementScore },
          " - "
        ),
        React.createElement(
          "span",
          { className: "counter-score" },
          this.state.score
        ),
        React.createElement(
          "button",
          { className: "counter-action increment", onClick: this.incrementScore },
          " + "
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var Clock = function (_React$Component2) {
  _inherits(Clock, _React$Component2);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this2 = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this2.state = {
      date: new Date()
    };
    return _this2;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.timerID = setInterval(function () {
        return _this3.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "span",
        null,
        this.state.date.toLocaleTimeString()
      );
    }
  }]);

  return Clock;
}(React.Component);

var ActionButton = function ActionButton() {
  handleClick = function handleClick(e) {
    e.preventDefault();
    alert('Button is working');
  };

  return React.createElement(
    "button",
    { className: "btn", onClick: handleClick },
    "Click Me"
  );
};

// * main component from teamtreehouse React Basics course

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this4.handleRemovePlayer = function (id) {
      _this4.setState(function (prevState) {
        return {
          players: prevState.players.filter(function (p) {
            return p.id !== id;
          })
        };
      });
    };

    _this4.state = {
      players: [{
        name: "Chris F",
        id: 1
      }, {
        name: "Bob R",
        id: 2
      }, {
        name: "Chuck N",
        id: 3
      }, {
        name: "Jim J",
        id: 4
      }]
    };
    return _this4;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      return React.createElement(
        "div",
        { className: "scoreboard" },
        React.createElement(Header, {
          title: "Scoreboard",
          totalPlayers: this.state.players.length
        }),
        this.state.players.map(function (player) {
          return React.createElement(Player, {
            name: player.name,
            id: player.id,
            key: player.id.toString(),
            removePlayer: _this5.handleRemovePlayer
          });
        }),
        React.createElement(ActionButton, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));