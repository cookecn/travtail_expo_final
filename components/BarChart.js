import * as React from "react";
import { View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

class BarChartComponent extends React.Component {
  render() {
    const chartConfig = {
      backgroundGradientFrom: "#F2F2F2",
      backgroundGradientTo: "#F2F2F2",
      color: (opacity = 5) => `rgba(135, 65, 244, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 1.0, // optional
      fillShadowGradient: "#593196",
      fillShadowGradientOpacity: 5.0,
      style: {
        borderRadius: 6,
        paddingRight: 10,
      },
    };

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          data: [2104, 2448, 2340, 2808, 2584, 2412, 2332],
        },
      ],
    };

    const graphStyle = {
      marginVertical: 10,
      ...chartConfig.style,
    };
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={300}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          fromZero={true}
          withInnerLines={false}
          showValuesOnTopOfBars={true}
          withHorizontalLabels={false}
        />
      </View>
    );
  }
}

export default BarChartComponent;
