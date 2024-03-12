module.exports = {
  base: `${process.env.VERSIONS_PATH || "/"}`,
  head: [
    [
      'link', { rel: 'icon', href: '/img/logo.svg' }
    ]
  ],
  plugins: ["@vuepress/back-to-top"],
  extend: "@vuepress/theme-default",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "Sermant",
      description: "基于Java字节码增强技术的云原生无代理服务网格",
    },
    "/en/": {
      lang: "en-US",
      title: "Sermant",
      description: "A Proxyless Service Mesh Solution Based on JavaAgent",
    },
  },
  themeConfig: {
    logo: "/img/sermant-logo.png",
    displayAllHeaders: false,
    smoothScroll: true,
    sidebarDepth: 1,
    locales: {
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        lastUpdated: "上次更新",
        nav: [
          { text: "文档", link: "/zh/document/" },
          { text: "博客", link: "/zh/blog/" },
          { text: "Github", link: "https://github.com/huaweicloud/Sermant" },
        ],
        sidebar: {
          "/zh/document/": [
            {
              title: "开始",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: ["", "QuickStart"],
            },
            {
              title: "用户使用手册",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "user-guide/",
                "user-guide/sermant-agent",
                "user-guide/sermant-backend",
                "user-guide/sermant-injector",
                "user-guide/configuration-center"
              ],
            },
            {
              title: "插件使用手册",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "plugin/",
                "plugin/dynamic-config",
                "plugin/flowcontrol",
                "plugin/graceful",
                "plugin/loadbalancer",
                "plugin/monitor",
                "plugin/mq-consume-prohibition",
                "plugin/router",
                "plugin/tag-transmission",
                "plugin/register-migration",
                "plugin/springboot-registry",
                "plugin/database-write-prohibition",
                "plugin/visibility",
                "plugin/removal",
              ],
            },
            {
              title: "开发者指南",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "developer-guide/",
                "developer-guide/bytecode-enhancement",
                "developer-guide/package-structure",
                "developer-guide/plugin-configuration",
                "developer-guide/dynamic-config-func",
                "developer-guide/heartbeat-func",
                "developer-guide/trace-tracking-func",
                "developer-guide/log-func",
                "developer-guide/third-party-copyright",
                "developer-guide/version-manage"
              ],
            },
            {
              title: "加入社区",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "community/",
                "community/contributing",
                "community/vulnerability",
              ],
            },
            {
              title: "FAQ",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "faq/",
                "faq/development-debug",
                "faq/framework",
                "faq/flowcontrol",
                "faq/registry",
                "faq/upgrade",
                "faq/performance",
              ],
            },
          ],
          "/zh/blog/": [""],
        },
      },
      "/en/": {
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        lastUpdated: "Last Updated",
        nav: [
          { text: "Document", link: "/en/document/" },
          { text: "Blog", link: "/en/blog/" },
          { text: "Github", link: "https://github.com/huaweicloud/Sermant" },
        ],
        sidebar: {
          "/en/document/": [
            {
              title: "Start",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: ["", "QuickStart"],
            },
            {
              title: "User Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "user-guide/",
                "user-guide/sermant-agent",
                "user-guide/backend",
                "user-guide/configuration-center",
                "user-guide/injector",
              ],
            },
            {
              title: "Plugin Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "plugin/",
                "plugin/dynamic-config",
                "plugin/flowcontrol",
                "plugin/graceful",
                "plugin/loadbalancer",
                "plugin/monitor",
                "plugin/router",
                "plugin/register-migration",
                "plugin/springboot-registry",
                "plugin/visibility",
                "plugin/removal",
              ],
            },
            {
              title: "Developer Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "developer-guide/",
                "developer-guide/bytecode-enhancement",
                "developer-guide/package-structure",
                "developer-guide/plugin-configuration",
                "developer-guide/dynamic-config-func",
                "developer-guide/heartbeat-func",
                "developer-guide/trace-tracking-func",
                "developer-guide/log-func",
                "developer-guide/third-party-copyright",
                "developer-guide/version-manage"
              ],
            },
            {
              title: "Community Guide",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "community/",
                "community/contributing",
                "community/vulnerability",
              ],
            },
            {
              title: "FAQ",
              path: "",
              collapsable: true,
              sidebarDepth: 1,
              children: [
                "faq/",
                "faq/framework",
                "faq/registry",
                "faq/flowcontrol",
              ],
            },
          ],
          "/en/blog/": [""],
        },
      },
    },
  },
  configureWebpack: {
    node: {
      global: true,
      process: true
    }
  }
};