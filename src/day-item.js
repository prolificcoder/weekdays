var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

var DayItem = React.createClass({
  render: function(){
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function(){
    return {
      color: this.color(),
      fontSize: this.fontSize()
    }
  },
  color: function(){
    var opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, '+ opacity + ')';
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUntil;
  }
});

module.exports = DayItem;
