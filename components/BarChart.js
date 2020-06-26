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
      },
    };

    const data = {
      labels: ["January", "February", "Jul 16 - 22"],
      datasets: [
        {
          data: [526, 612, 585],
        },
      ],
    };

    const graphStyle = {
      marginVertical: 10,
      ...chartConfig.style,
    };
    return (
      <BarChart
        style={graphStyle}
        data={data}
        width={screenWidth}
        height={300}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero={true}
      />
    );
  }
}

export default BarChartComponent;
