# Favicon 生成器

Favicon 生成器是一个简单而强大的工具，可以帮助您为您的网站快速生成各种尺寸和格式的favicon图标。

## 功能特点

- 上传单个图像文件
- 生成多种尺寸和格式的favicon
- 支持拖放文件上传
- 生成的favicon打包为ZIP文件以便下载

## 技术栈

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- favicons 库
- JSZip

## 安装

1. 克隆仓库：

```bash
git clone https://github.com/ViggoZ/favicon-generator.git
```

2. 安装依赖：

```bash
npm install
```

3. 运行开发服务器：

```bash
npm run dev
```

4. 在浏览器中打开 `http://localhost:3000` 查看应用。

## 使用方法

1. 打开应用后，您会看到一个"选择文件"按钮。
2. 点击按钮选择图像文件，或将文件拖放到指定区域。
3. 选择文件后，点击"生成Favicon"按钮。
4. 等待生成过程完成。
5. 生成完成后，点击"下载Favicon"按钮下载ZIP文件。

## 项目结构

主要的项目文件和目录如下：
```
src/
├── app/
│ ├── api/
│ │ └── generate/
│ │ └── route.ts
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── DownloadButton.tsx
│ ├── FileUpload.tsx
│ └── GenerateButton.tsx
└── lib/
└── generateFavicons.ts
```

## 贡献

欢迎贡献！请随时提交问题或拉取请求。

## 许可证

本项目采用 MIT 许可证。详情请参见 [LICENSE](LICENSE) 文件。

## 联系方式

如有任何问题或建议，请通过以下方式联系我：

- GitHub: [ViggoZ](https://github.com/ViggoZ)
- 电子邮件: viggo.zw@gmail.com

感谢您使用 Favicon 生成器！