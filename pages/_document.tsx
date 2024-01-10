import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
    <title>HTML Generator</title>
    <meta name="description" content="Free AI-Powered Website Code Creation"/>
    <meta name="robots" content="index, follow"/>
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="HTML Generator - Free AI-Powered Website Code Creation" />
    <meta property="og:description" content="Streamline web design with HTMLGenerator.ai: Convert ideas and images to HTML code instantly using AI, with Tailwind, React, and Vue support." />
    <meta property="og:url" content="https://www.htmlgenerator.ai/" />
    <meta property="og:site_name" content="HTML Generator" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="HTML Generator - Free AI-Powered Website Code Creation" />
    <meta name="twitter:description" content="Streamline web design with HTMLGenerator.ai: Convert ideas and images to HTML code instantly using AI, with Tailwind, React, and Vue support." />
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X9M3GLMV8S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X9M3GLMV8S');
</script>
        <script id="inline-script" dangerouslySetInnerHTML={{ __html: `window.EXCALIDRAW_ASSET_PATH = "/"` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
