const cutToBase64 = (selector: string, x: number, y: number, width: number, height: number, margin: number) => {
  const virCanvas: any = cut(selector, x, y, width, height, margin);
  console.log('virCanvas ', virCanvas);
  return virCanvas.toDataURL();
};

/**
 * 裁剪
 * @param selector
 * @param x
 * @param y
 * @param width
 * @param height
 */
const cut = (selector: string, x: number, y: number, width: number, height: number, margin: number = 0) => {
  const sourceCanvas: any = document.querySelector(selector);
  if (!sourceCanvas) {
    return;
  }

  if (Array.isArray(sourceCanvas)) {
    throw new Error('请确保需要操作的元素唯一');
  }

  console.log('cut params: ', selector, x, y, width, height);

  // 创建新的 Canvas 元素
  const croppedCanvas = document.createElement('canvas');
  const ctx = croppedCanvas.getContext('2d');
  // 设置新 Canvas 的宽度和高度
  croppedCanvas.width = 2 * margin + width;
  croppedCanvas.height = 2 * margin + height;
  // 在新 Canvas 上绘制选取的部分
  ctx.drawImage(sourceCanvas, x, y, width, height, 0 + margin, 0 + margin, width, height);
  return croppedCanvas;
};

//将base64转换为blob
const dataURLtoBlob = (dataurl) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

const cutToBlobUrl = (selector: string, x: number, y: number, width: number, height: number, margin: number) => {
  let base64Data = cutToBase64(selector, x, y, width, height, margin);
  console.log('base64Data ', base64Data);
  const blob = dataURLtoBlob(base64Data);
  const blobUrl = URL.createObjectURL(blob);
  return blobUrl;
};

export { cutToBase64, cut, cutToBlobUrl };
