document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏切换功能
    document.querySelector('.sidebar-toggle').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // 点击侧边栏外部关闭侧边栏
    document.querySelector('.container').addEventListener('click', function(e) {
        if (!e.target.closest('.sidebar') && 
            !e.target.closest('.sidebar-toggle') && 
            document.querySelector('.sidebar').classList.contains('active')) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    });
});
