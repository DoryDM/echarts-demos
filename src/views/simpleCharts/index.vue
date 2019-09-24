<template>
  <div>
    <p> Echarts demos</p>
    <div ref="echarts" class="simpleDemo">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
  export default {
    data() {
      return {
        chart: null,
        option:  {
            title: {
                text: 'Biu~简单柱状图示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
                 color: ['#66FF99']
            }],
            
        }
      }
    },
    mounted() {
      this.getPage()
    },
    methods: {
      getPage() {
        this.chart = echarts.init(this.$refs.echarts);
        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(this.option);
      }
    }
  }
</script>

<style scoped>
.simpleDemo {
  width: 600px;
  height:400px;
  margin: 0 auto;
}
</style>

