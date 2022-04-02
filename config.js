module.exports = {
    kafka: {
        host: '192.168.128.185:9092'
    },
    // 爬虫配置
    crawler: {
        // 超时时间
        timeout: 10000000,
        // 失败重试次数
        retries: 10,
        // 失败重试等待时间
        retryTimeout: 1000,
        // 最大并发数
        maxConnections: 1,
         // 两次请求之间将闲置1000ms
        rateLimit: 1000,
    },
    downloadImg: {
        // 文章显示图片图片url前缀
        url: '/uploads/',
        // 图片下载url前缀
        urlDown: '/data/images/uploads/',
        // 图片下载地址表
        sqlName: 'downfile_queue_with_thumb',
        // 分隔符
        separator: '_____' 
    }
}