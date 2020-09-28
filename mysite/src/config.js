/* 顶部导航菜单 */
const topMenu = [
    {
        name: '网站首页',
        path: 'home'
    },
    {
        name: '前端技术',
        path: 'frontEnd'
    },
    {
        name: '好文推荐',
        path: 'goodArticle'
    },
    {
        name: '前端在线资源',
        path: 'onlineApi'
    },
    {
        name: '后台管理',
        path: 'manage'
    }
]

/* 后台管理页面左侧菜单 */
const manageSideBarMenu = [
    {
        name: "前端技术",
        icon: "el-icon-location",
        childrends: [
            {
                subChildrends: [
                    {
                        name: "文章管理",
                        index: "1-1"
                    },
                    {
                        name: "文章发布",
                        index: "1-2"
                    }
                ]
            }
        ]
    },
    {
        name: "好文推荐",
        icon: "el-icon-menu",
        childrends: [
            {
                subChildrends: [
                    {
                        name: "好文管理",
                        index: "2-1"
                    },
                    {
                        name: "好文发布",
                        index: "2-2"
                    }
                ]
            }
        ]
    }
]

export { manageSideBarMenu, topMenu }