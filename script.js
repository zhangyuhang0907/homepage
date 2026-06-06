  // 找到按钮元素
  const button = document.getElementById("theme-toggle");

  // 监听点击：每次点击就在 <body> 上切换 dark 这个 class
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // 根据当前是否暗色，改按钮文字
    const isDark = document.body.classList.contains("dark");
    button.textContent = isDark ? "切换亮色" : "切换暗色";
  });