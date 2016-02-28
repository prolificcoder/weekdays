var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var moment = require('moment');
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <Text>
        Days of the week:
        {moment().weekday()}

      </Text>
       {this.days()}
    </View>
  },
  days: function(){
    var dayItems= [];
    for(var i=0;i<7;i++){
      var day = moment().add(i, 'days').format('dddd')
       dayItems.push(<DayItem day={day} daysUntil={i}/>);
    }
    return dayItems;
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
})
