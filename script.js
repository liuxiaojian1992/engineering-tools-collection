// 工具数据
const toolsData = [
    // AI开发 - IDE（开发环境）
    {
        id: 1,
        name: 'Visual Studio Code',
        description: '微软轻量级跨平台代码编辑器，通用前端/后端开发',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Visual Studio Code logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://code.visualstudio.com/',
        isFavorite: false
    },
    {
        id: 2,
        name: 'Cursor',
        description: 'AI 原生代码编辑器，基于 VSCode 深度优化',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cursor IDE logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.cursor.com/',
        isFavorite: false
    },
    {
        id: 3,
        name: 'Trae',
        description: '字节跳动 AI 编程 IDE，国内直连、中文友好',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Trae IDE logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.trae.cn/',
        isFavorite: false
    },
    {
        id: 4,
        name: 'PyCharm',
        description: 'Python 专用 IDE，社区版免费',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PyCharm logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.jetbrains.com/zh-cn/pycharm/',
        isFavorite: false
    },
    {
        id: 5,
        name: 'Visual Studio',
        description: '微软全功能集成开发环境，适用于 C/C++/C#/.NET',
        category: 'IDE',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Visual Studio logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://visualstudio.microsoft.com/zh-hans/vs/',
        isFavorite: false
    },
    
    // AI开发 - LLM（大语言模型）
    {
        id: 6,
        name: 'ChatGPT',
        description: 'OpenAI 对话大模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ChatGPT logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://chat.openai.com/',
        isFavorite: false
    },
    {
        id: 7,
        name: '豆包',
        description: '字节跳动通用大模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=豆包 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.doubao.com/',
        isFavorite: false
    },
    {
        id: 8,
        name: '智谱清言',
        description: '智谱 AI 对话模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=智谱清言 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://chatglm.cn/',
        isFavorite: false
    },
    {
        id: 9,
        name: '千问',
        description: '阿里通义千问',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=千问 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://tongyi.aliyun.com/',
        isFavorite: false
    },
    {
        id: 10,
        name: 'Kimi',
        description: 'Moonshot 长文本理解模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kimi logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://kimi.moonshot.cn/',
        isFavorite: false
    },
    {
        id: 11,
        name: '即梦',
        description: '字节即梦多模态模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=即梦 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://jimeng.jianying.com/',
        isFavorite: false
    },
    {
        id: 12,
        name: 'DeepSeek',
        description: '深度求索代码/通用大模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DeepSeek logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.deepseek.com/',
        isFavorite: false
    },
    {
        id: 13,
        name: 'Gemini',
        description: 'Google 官方多模态大模型',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Gemini logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://gemini.google.com/',
        isFavorite: false
    },
    {
        id: 14,
        name: '秘塔 AI',
        description: '秘塔科技专业搜索 / 长文本处理',
        category: 'LLM',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=秘塔 AI logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://metaso.cn/',
        isFavorite: false
    },
    
    // AI开发 - AI平台
    {
        id: 15,
        name: 'TensorFlow',
        description: 'Google 开源深度学习框架',
        category: 'AI平台',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TensorFlow logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.tensorflow.org/',
        isFavorite: false
    },
    {
        id: 16,
        name: 'PyTorch',
        description: 'Meta 开源深度学习框架（工业界主流）',
        category: 'AI平台',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PyTorch logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://pytorch.org/',
        isFavorite: false
    },
    
    // AI开发 - 代码库
    {
        id: 17,
        name: 'GitHub',
        description: '全球最大代码托管平台',
        category: '代码库',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GitHub logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://github.com/',
        isFavorite: false
    },
    {
        id: 18,
        name: 'Hugging Face',
        description: 'AI 模型/数据集开源社区',
        category: '代码库',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hugging Face logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://huggingface.co/',
        isFavorite: false
    },
    
    // 嵌入式开发 - 软件工具
    {
        id: 19,
        name: 'Keil',
        description: '单片机/嵌入式开发主流 IDE',
        category: '嵌入式开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Keil logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.keil.com/',
        isFavorite: false
    },
    {
        id: 20,
        name: 'IAR',
        description: '嵌入式编译器与开发环境',
        category: '嵌入式开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IAR logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.iar.com/',
        isFavorite: false
    },
    {
        id: 21,
        name: 'Eclipse',
        description: '开源跨平台集成开发环境',
        category: '嵌入式开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Eclipse logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.eclipse.org/',
        isFavorite: false
    },
    
    // 嵌入式开发 - 硬件工具
    {
        id: 22,
        name: '半导小芯',
        description: '芯片资料查询、 datasheet 检索',
        category: '硬件开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=半导小芯 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.semiee.com/',
        isFavorite: false
    },
    {
        id: 23,
        name: 'EDA',
        description: '电路设计自动化（推荐Altium Designer）',
        category: '硬件开发',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=EDA logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.altium.com/',
        isFavorite: false
    },
    
    // 学术 - 文献检索
    {
        id: 24,
        name: '知网',
        description: '中文核心期刊/硕博论文库',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=知网 logo, simple, minimalist, red and white, square&image_size=square',
        url: 'https://www.cnki.net/',
        isFavorite: false
    },
    {
        id: 25,
        name: '万方',
        description: '中文科技文献库',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=万方 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://g.wanfangdata.com.cn',
        isFavorite: false
    },
    {
        id: 26,
        name: 'Web of Science',
        description: '国际权威英文期刊库',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Web of Science logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.webofscience.com',
        isFavorite: false
    },
    {
        id: 27,
        name: 'PubMed',
        description: '医学/生物领域文献库',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PubMed logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        isFavorite: false
    },
    {
        id: 28,
        name: 'Scopus',
        description: '爱思唯尔综合学术库',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Scopus logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.scopus.com',
        isFavorite: false
    },
    {
        id: 29,
        name: 'ScienceDirect',
        description: 'Elsevier 期刊全文库',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ScienceDirect logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.sciencedirect.com',
        isFavorite: false
    },
    {
        id: 30,
        name: 'Google Scholar 镜像',
        description: '谷歌学术（国内可访问）',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Google Scholar logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://scholar.google.com.hk/',
        isFavorite: false
    },
    {
        id: 31,
        name: '国家自然科学基金门户',
        description: '基金项目查询',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家自然科学基金 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://kd.nsfc.cn/',
        isFavorite: false
    },
    {
        id: 32,
        name: '国家知识产权局',
        description: '专利检索、下载、法律状态查询',
        category: '文献检索',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家知识产权局 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.cnipa.gov.cn/',
        isFavorite: false
    },
    
    // 学术 - 文献管理
    {
        id: 33,
        name: 'EndNote',
        description: '专业文献管理软件',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=EndNote logo, simple, minimalist, green and white, square&image_size=square',
        url: 'https://endnote.com/',
        isFavorite: false
    },
    {
        id: 34,
        name: 'Zotero',
        description: '开源免费文献管理工具',
        category: '文献管理',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zotero logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.zotero.org/',
        isFavorite: false
    },
    
    // 学术 - 文献分析
    {
        id: 35,
        name: 'ASTA',
        description: 'AI 文献综述与关联分析',
        category: '文献分析',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ASTA logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://asta.allen.ai/',
        isFavorite: false
    },
    {
        id: 36,
        name: 'Connected Papers',
        description: '文献关联可视化分析',
        category: '文献分析',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Connected Papers logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.connectedpapers.com',
        isFavorite: false
    },
    
    // 学术 - 影响因子查询
    {
        id: 37,
        name: 'Journal Citation Reports',
        description: '官方 JCR 期刊影响因子',
        category: '影响因子',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Journal Citation Reports logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://jcr.clarivate.com/',
        isFavorite: false
    },
    {
        id: 38,
        name: '中科院期刊分区表',
        description: '中科院分区查询',
        category: '影响因子',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中科院期刊分区表 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.fenqubiao.com/',
        isFavorite: false
    },
    {
        id: 39,
        name: 'Justscience',
        description: 'JCR+中科院分区一站式查询',
        category: '影响因子',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Justscience logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://sci.justscience.cn/',
        isFavorite: false
    },
    
    // 学术 - 文献下载
    {
        id: 40,
        name: 'Sci-Hub',
        description: '外文论文免费下载',
        category: '文献下载',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sci-Hub logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://sci-hub.se/',
        isFavorite: false
    },
    {
        id: 41,
        name: '国家标准全文公开',
        description: '国家强制性/推荐性标准',
        category: '文献下载',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家标准全文公开 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://openstd.samr.gov.cn/',
        isFavorite: false
    },
    {
        id: 42,
        name: '国家知识产权局',
        description: '专利检索与下载',
        category: '文献下载',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=国家知识产权局 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.cnipa.gov.cn/',
        isFavorite: false
    },
    
    // 学术 - 课程学习
    {
        id: 43,
        name: '中国大学 MOOC',
        description: '国内精品慕课',
        category: '课程学习',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=中国大学MOOC logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.icourse163.org/',
        isFavorite: false
    },
    {
        id: 44,
        name: 'Coursera',
        description: '国际名校在线课程',
        category: '课程学习',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Coursera logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.coursera.org/',
        isFavorite: false
    },
    {
        id: 45,
        name: 'Bilibili',
        description: '学习资源/教程视频',
        category: '课程学习',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bilibili logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.bilibili.com/',
        isFavorite: false
    },
    
    // 工具 - 思维导图
    {
        id: 46,
        name: 'Xmind',
        description: '专业思维导图',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xmind logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://xmind.cn/',
        isFavorite: false
    },
    {
        id: 47,
        name: 'ProcessOn',
        description: '在线流程图/思维导图',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ProcessOn logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.processon.com/',
        isFavorite: false
    },
    {
        id: 48,
        name: '百度脑图',
        description: '百度轻量级脑图',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=百度脑图 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://naotu.baidu.com/',
        isFavorite: false
    },
    {
        id: 49,
        name: 'ImageGP',
        description: '生物信息/科研绘图工具',
        category: '思维导图',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ImageGP logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.bic.ac.cn/BIC/#/',
        isFavorite: false
    },
    
    // 工具 - 文档工具
    {
        id: 50,
        name: 'MarkText',
        description: '开源 Markdown 编辑器',
        category: '文档工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MarkText logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.marktext.app/',
        isFavorite: false
    },
    {
        id: 51,
        name: 'Typora',
        description: '经典 Markdown 编辑器',
        category: '文档工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Typora logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://typora.io/',
        isFavorite: false
    },
    {
        id: 52,
        name: '印象笔记',
        description: '知识笔记管理',
        category: '文档工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=印象笔记 logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://www.yinxiang.com/',
        isFavorite: false
    },
    
    // 工具 - 手写工具
    {
        id: 53,
        name: 'draw.io',
        description: '开源流程图/架构图工具',
        category: '手写工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=draw.io logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://app.diagrams.net/',
        isFavorite: false
    },
    {
        id: 54,
        name: 'Excalidraw',
        description: '手绘风格白板绘图',
        category: '手写工具',
        icon: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Excalidraw logo, simple, minimalist, blue and white, square&image_size=square',
        url: 'https://excalidraw.com/',
        isFavorite: false
    }
];

// DOM元素
const categoryItems = document.querySelectorAll('.category-item');
const searchInput = document.querySelector('.search-box input');
const toolsGrid = document.querySelector('.tools-grid');
const toolsCount = document.querySelector('.tools-count');

// 分类映射
const categoryMap = {
    '1.1 IDE（开发环境）': 'IDE',
    '1.2 LLM（大语言模型）': 'LLM',
    '1.3 AI平台': 'AI平台',
    '1.4 代码库': '代码库',
    '2.1 软件工具': '嵌入式开发',
    '2.2 硬件工具': '硬件开发',
    '3.1 文献检索': '文献检索',
    '3.2 文献管理': '文献管理',
    '3.3 文献分析': '文献分析',
    '3.4 影响因子查询': '影响因子',
    '3.5 文献下载': '文献下载',
    '3.6 课程学习': '课程学习',
    '4.1 思维导图': '思维导图',
    '4.2 文档工具': '文档工具',
    '4.3 手写工具': '手写工具'
};

// 渲染工具列表
function renderTools(tools) {
    toolsGrid.innerHTML = '';
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = '<p class="no-tools">未找到符合条件的工具</p>';
        toolsCount.textContent = `共 0 个工具`;
        return;
    }
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-card-header">
                <div class="tool-icon">
                    <img src="${tool.icon}" alt="${tool.name}">
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <button class="tool-favorite ${tool.isFavorite ? 'favorited' : ''}" data-id="${tool.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="${tool.isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                <span class="tool-tag">${tool.category}</span>
            </div>
            <div class="tool-actions">
                <button class="tool-btn visit-btn">访问网站</button>
            </div>
        `;
        toolsGrid.appendChild(toolCard);
    });
    
    toolsCount.textContent = `共 ${tools.length} 个工具`;
    
    // 添加收藏按钮事件
    addFavoriteListeners();
    
    // 添加访问按钮事件
    addVisitListeners();
}

// 添加收藏按钮事件
function addFavoriteListeners() {
    const favoriteButtons = document.querySelectorAll('.tool-favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolId = parseInt(this.dataset.id);
            const tool = toolsData.find(t => t.id === toolId);
            if (tool) {
                tool.isFavorite = !tool.isFavorite;
                this.classList.toggle('favorited');
                const svg = this.querySelector('svg');
                svg.setAttribute('fill', tool.isFavorite ? 'currentColor' : 'none');
            }
        });
    });
}

// 添加访问按钮事件
function addVisitListeners() {
    const visitButtons = document.querySelectorAll('.visit-btn');
    visitButtons.forEach(button => {
        button.addEventListener('click', function() {
            const toolCard = this.closest('.tool-card');
            const toolName = toolCard.querySelector('.tool-name').textContent;
            const tool = toolsData.find(t => t.name === toolName);
            if (tool && tool.url) {
                window.open(tool.url, '_blank');
            } else {
                alert('该工具暂无访问链接');
            }
        });
    });
}

// 分类筛选
function filterByCategory(categoryText) {
    let filteredTools;
    if (categoryText === '全部工具') {
        filteredTools = toolsData;
    } else {
        const category = categoryMap[categoryText];
        filteredTools = toolsData.filter(tool => tool.category === category);
    }
    renderTools(filteredTools);
}

// 搜索筛选
function searchTools(query) {
    const filteredTools = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase())
    );
    renderTools(filteredTools);
}

// 初始化
function init() {
    // 渲染所有工具
    renderTools(toolsData);
    
    // 分类筛选事件
    categoryItems.forEach(item => {
        // 跳过父分类
        if (item.classList.contains('category-parent')) {
            return;
        }
        
        item.addEventListener('click', function() {
            // 移除所有分类的活跃状态
            categoryItems.forEach(i => i.classList.remove('active'));
            // 添加当前分类的活跃状态
            this.classList.add('active');
            // 筛选工具
            const categoryText = this.querySelector('span').textContent;
            filterByCategory(categoryText);
        });
    });
    
    // 搜索事件
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        searchTools(query);
    });
    
    // 顶部按钮事件
    const remixBtn = document.querySelector('.remix-btn');
    const heartBtn = document.querySelector('.heart-btn');
    const bookBtn = document.querySelector('.book-btn');
    
    remixBtn.addEventListener('click', function() {
        alert('Remix功能待实现');
    });
    
    heartBtn.addEventListener('click', function() {
        alert('收藏功能待实现');
    });
    
    bookBtn.addEventListener('click', function() {
        alert('书签功能待实现');
    });
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
