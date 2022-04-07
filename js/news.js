$(function() {
    // 给时间补零
    function padZero(n) {
        if (n < 10) {
            return '0' + n
        } else {
            return n
        }
    }
    // 定义时间过滤器
    template.defaults.imports.dataFormat = function(date) {
        var dt = new Date(date)

        var y = dt.getFullYear()
        var m = padZero(dt.getMonth() + 1)
        var d = padZero(dt.getDate())

        var hh = padZero(dt.getHours())
        var mm = padZero(dt.getMinutes())
        var ss = padZero(dt.getSeconds())

        return y + '-' + m + '-' + d + '   ' + hh + ':' + mm + ':' + ss
    }


    // 获取新闻列表
    function getNews() {
        $.get('http://www.liulongbin.top:3006/api/news', function(e) {
            if (e.status !== 200) return alert('获取失败！')

            for (i = 0; i < e.data.length; i++) {
                e.data[i].tags = e.data[i].tags.split(',');
            }
            console.log(e)

            var htmlStr = template('tpl-news', e)
            $('#news-list').html(htmlStr)
        })

    }
    getNews()
})