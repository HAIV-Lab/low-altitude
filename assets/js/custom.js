// 阻止手势缩放（iOS 和 Android）
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
  
  // 阻止 Ctrl + 滚轮缩放（桌面端）
  document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });