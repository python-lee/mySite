/* 顶部导航菜单 */
const topMenu = [
    {
        title: '网站首页',
        name: 'home',
        path: '/home'
    },
    {
        title: '前端技术',
        name: 'frontEnd',
        path: 'frontEnd'
    },
    {
        title: '好文推荐',
        name: 'goodArticle',
        path: 'goodArticle'
    },
    {
        title: '前端在线资源',
        name: 'onlineApi',
        path: 'onlineApi'
    },
    {
        title: '后台管理',
        name: 'manage',
        path: '/manage/goodArticleManage'
    }
]

/* 后台管理页面左侧菜单 */
const manageSideBarMenu = [
    {
        name: "好文推荐",
        icon: "el-icon-menu",
        childrends: [
            {
                subChildrends: [
                    {
                        name: "好文管理",
                        index: "/manage/goodArticleManage"
                    },
                    {
                        name: "好文发布",
                        index: "/manage/articlePublish"
                    }
                ]
            }
        ]
    },
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

]

export { manageSideBarMenu, topMenu }