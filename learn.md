在 Tailwind CSS 中，@layer 是一个特殊的指令，用来将你的自定义样式组织进 Tailwind 的三个核心“层”中：

Tailwind 的三大层（Layers）：
base: 基础样式（类似 CSS Reset） 设置 html { font-family: ... }、全局排版
components: 可复用的组件样式 .btn { ... }、.card { ... }
utilities: 原子工具类样式（Tailwind 的核心） .text-center { text-align: center; }

<!-- @layer base {
        /* 放全局基础样式 */
    }

    @layer components {
        /* 放自定义组件样式 */
    }

    @layer utilities {
     /* 放自定义工具类 */
    }
-->

<!--
@layer base：添加或覆盖全局基础样式
@layer base {
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
  }

  html {
    font-family: "Quicksand", sans-serif;
  }
} -->

<!--
创建自定义组件类
@layer components {
  .btn {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }

  .card {
    @apply p-4 bg-white shadow-lg rounded-lg;
  }
} -->

<!--
创建你自己的工具类（和 Tailwind 风格一致）
@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px #888888;
  }

  .rotate-y-180 {
    transform: rotateY(180deg);
  }
}    -->
