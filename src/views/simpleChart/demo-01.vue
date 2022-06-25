<template>
  <div class="mainContainer">
    <p>设置全局颜色</p>
    <div ref="echarts" class="chartContain">
    </div>
    <div>
      <router-link to="/">返回主页</router-link>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
  export default {
    data() {
      return {
        chart: null,
        option:  {
            title: {
                text: '自定义柱状图'
            },
            tooltip: {},
            legend: {
                data:['销量','支出','收入']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [30, 20, 36, 40, 50, 60],
        
            },
            {
                name: '支出',
                type: 'bar',
                data: [200, 310, 120, 320, 200, 100],
               
            },
            {
                name: '收入',
                type: 'bar',
                data: [100, 200, 600, 300, 400, 800],
               
            }
            ],
            color: ['#66FF99','#FFFF00','#FF00FF'],
        }
      }
    },
    mounted() {
      this.getPage();
    },
    methods: {
      getPage() {
        this.chart = echarts.init(this.$refs.echarts);
        // 使用指定的配置项和数据展示图表
        this.chart.setOption(this.option);
      }
    }
  }
</script>

<style scoped>
.mainContainer {
  width: 600px;
  height: 400px;
  margin: 0 auto;
}
.chartContain {
  width: 100%;
  height: 100%;
}
</style>

