export const dashboard_container_schema = {
    type: 'dashboard-container',
    category: 'container',
    icon: 'section',
    internal: true,  /* 内部容器组件！！ */
    widgetList: [],
    options: {
        name: '',
        layout: [],
    },
}


export const ext_chart_containers = [
    dashboard_container_schema,
    {
        type: 'section',
        category: 'container',
        icon: 'section',
        widgetList: [],
        options: {
            name: '',
            title: '',
            showHeader: true,
            showFullscreen: false,
            showRefresh: false,
            showCollapse: false,
            x: 0,
            y: 0,
            w: 4,
            h: 4,
            onCreated: '',
            onMounted: '',
            onRefresh: '',
            setDimensional: "",
        },
    },

]

const chartsList = [
    {
        type: "progressbar",
        title: "进度条条"
    },
    {
        type: "barChart",
        title: "柱状图"
    },
    {
        type: "barXChart",
        title: "条形图"
    },
    {
        type: "lineChart",
        title: "折线图"
    },
    {
        type: "funnelChart",
        title: "漏斗图"
    },
    {
        type: "pieChart",
        title: "饼图"
    },
    {
        type: "radarChart",
        title: "雷达图"
    },
    {
        type: "pivotTable",
        title: "透视表"
    },
    {
        type: "listTable",
        title: "数据列表"
    }
];


// 拥有图标样式的组件
const hasChartStylsType = [
    "barChart",
    "barXChart",
    "lineChart",
    "pieChart",
    "progressbar",
];

const initChaer = () => {
    let newChartList = [];
    chartsList.forEach(el => {
        let chartObj = {
            type: el.type,
            icon: el.type,
            formItemFlag: false,
            options: {
                type: el.type,
                name: '',
                value: 13232.12,
                title: el.title,
                loading: false,
                // 数据实体
                dataEntity: "",
                // 维度指标设置
                setDimensional: {
                    // 维度
                    dimension: [],
                    // 指标
                    metrics: [],
                    // 目标值
                    targetValue: [],
                },
                // 图表设置
                setChartConf: {
                    // 数值显示
                    numShow: true,
                    // 图例显示
                    chartShow: true,
                    // 使用全部数据
                    useAllData: true,
                },
                showHeader: true,
                showFullscreen: false,
                showRefresh: false,
                icon: 'el-icon-star-on',
                iconColor: '#000',
                customClass: [],
                dsEnabled: false,
                dsName: "",
                x: 0,
                y: 0,
                w: 4,
                h: 4,
                onCreated: '',
                onMounted: '',
                onRefresh: '',
            }
        };
        if (hasChartStylsType.includes(el.type)) {
            chartObj.options.chartStyls = 1;
        }
        newChartList.push(chartObj)
    })
    return newChartList
}

export const ext_charts_widgets = [
    {
        type: 'statistic',
        icon: 'statistic',
        formItemFlag: false,
        options: {
            name: '',
            value: 13232.12,
            title: '今年的增长',
            showHeader: true,
            showFullscreen: false,
            showRefresh: false,
            showCollapse: false,
            showIcon: false,
            icon: 'el-icon-star-on',
            iconColor: '#000',
            customClass: [],
            dsEnabled: false,
            dsName: "",
            x: 0,
            y: 0,
            w: 4,
            h: 4,
            onCreated: '',
            onMounted: '',
            onRefresh: '',
        }
    },
    ...initChaer()
]
