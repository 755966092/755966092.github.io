var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
var limit = 7;

var option;
var legendData = [];
var seriesData = [];
var selected = {};
var x = [];

var uuid = "";
var localStorageTime = window.localStorage.getItem("time") || null;
if (localStorageTime != moment().format("YYYY-MM-DD")) {
  window.localStorage.clear();
} else {
  uuid = window.localStorage.getItem("uuid");
  for (let i = 0; i < abc.length; i++) {
    const element = abc[i];
    if (uuid == element.toString().substring(2, 8)) {
      document.getElementById("psd-box").setAttribute("class", "none");
      initChart();
    }
  }
}

function showEcharts() {
  var psd = document.getElementById("psd").value;
  for (let i = 0; i < abc.length; i++) {
    const element = abc[i];
    if (psd == element.toString().substring(2, 8)) {
      window.localStorage.setItem("uuid", psd);
      window.localStorage.setItem("time", moment().format("YYYY-MM-DD"));
      document.getElementById("psd-box").setAttribute("class", "none");
      initChart();
    }
  }
}


function initChart() {
  x = time.map((t, i) => {
    return moment(t).format("MM-DD HH:mm");
  });
  lineData.forEach((item, index) => {
    for (let i = 0; i < nameData.length; i++) {
      const nameItem = nameData[i];
      if (item.id === nameItem.id) {
        legendData.push(nameItem.name);
        if (index > 10) {
          // 默认显示前十个数据
          selected[nameItem.name] = false;
        }
        // 不显示赛博老鼠
        if (item.id == 100513784) {
          selected[nameItem.name] = false;
        }
        // 数组倒数第limit个数据

        seriesData.push({
          name: nameItem.name,
          type: "line",
          smooth: true,
          // symbol: 'none',
          showSymbol: false,
          // step: 'start',
          data: item.hisData,
        });
        break;
      }
    }
  });

  option = {
    title: {
      text: "历史价格曲线",
    },
    backgroundColor: {
      //在背景属性中添加
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
      // top: 30,
      bottom: 20,
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