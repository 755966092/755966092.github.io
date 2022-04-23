var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var limit = 7;

var option;
var legendData = [];
var seriesData = [];
var selected = {};
var x = [];

initChart();

function initChart() {
  x = time.map((t, i) => {
    return moment(t).format("MM-DD HH:mm");
  });
  lineData.forEach((item, index) => {
    for (let i = 0; i < nameData.length; i++) {
      const nameItem = nameData[i];
      if (item.id === nameItem.id) {
        legendData.push(nameItem.name);
        seriesData.push({
          name: nameItem.name,
          type: "line",
          smooth: true,
          showSymbol: false,
          data: item.hisData,
        });
        break;
      }
    }
  });

  option = {
    title: {
      text: "实例历史价格曲线",
    },
    backgroundColor: {
      type: "pattern",
      image: initCanvas(),
      repeat: "repeat",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      right: 10,
      top: 30,
      data: legendData,
      selected,
    },
    grid: {
      left: "2%",
      right: 300,
      bottom: "2%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: x,
    },
    yAxis: {
      type: "value",
    },
    series: seriesData,
    dataZoom: [
      {
        type: "inside",
        start: 80,
        end: 100,
      },
      {
        start: 80,
        end: 100,
      },
    ],
  };

  if (option && typeof option === "object") {
    myChart.setOption(option);
  }
}

function initCanvas() {
  const waterMarkText = "ibox-data.cn";
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 400;
  ctx.textBaseline = "middle";
  ctx.globalAlpha = 0.08;
  ctx.font = "50px Microsoft Yahei";
  ctx.translate(50, 50);
  ctx.fillText(waterMarkText, 0, 0);
  return canvas;
}
