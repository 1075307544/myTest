/* 
    blob
*/
// 二进制大文件对象，一个包含有只读原始数据的类文件，通俗的讲是不可修改的二进制文件
// array:一堆数据构成的数组; options:一些属性设置
let aBlob = new Blob(array, options);
// 属性
console.log(aBlob.size); //只读
console.log(aBlob.type); //MIME类型 只读
// 方法：只有slice方法，对文件分割
// start:分割起点,end：分割的终点,content-type：新的MIME类型
aBlob.slice(start, end, content - type);

/* 
    file
*/
// 继承自blob，也是二进制对象，有自己的属性和方法，通常在input（type="file")中
// array:一堆数据构成的数组; name:文件名; options:一些属性设置
let aFile = new File(array, name, options);
// 属性
console.log(aFile.name);
console.log(aFile.size);
console.log(aFile.lastModified); //时间戳
console.log(aFile.lastModifiedDate); // 时间对象
console.log(aFile.type);
// 方法：继承自Blob的slice方法
aFile.slice(start, end, content - type);

/* 
    ArraryBuffer
*/
// ArrayBuffer是内存上一段二进制数据，我们可以借助工具TypeArray、DataView对它进行读写

// Blob与ArrayBuffer的关系

// ArrayBuffer是底层二进制数据，可以借助工具进行读写，而Blob是对底层二进制数据的封装，我们拿到的就是一个整体，能够读取他的大小，类型，但是不能看到细节
// Blob可以接受一个ArrayBuffer作为参数生成一个Blob对象，此行为就相当于对ArrayBuffer数据做一个封装，之后就是以整体的形式展现了
// Blob作为一个整体文件，适合用于传输；而只有需要关注细节（比如要修改某一段数据时），才需要用到ArrayBuffer

/* 
    文件之间的相互转换 ！！！
*/

// file ----> blob
let myBlob = new Blob([file], { type: file.type });

// blob ----> file
let myFile = new File([Blob], file.name, { type: file.type });

// file/blob ----> base64
function blob2DateURL(blob, cb) {
  // FileReader可以将blob、file读取为不同的格式
  // readAsDataURL读取为base64; readAsText读取为字符串
  let fr = new FileReader();
  a.readAsDataURL(blob);
  a.onload = function (e) {
    cb(e.target.result);
  };
}

// 图片url ----> base64
function img2base64(imgUrl) {
  let image = new Image();
  image.src = imgUrl;
  return new Promise((resolve) => {
    image.onload = () => {
      let canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      var context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      let dataUrl = canvas.toDataURL("image/png");
      resolve(dataUrl);
    };
  });
}

// base64 ----> blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

// base64 ----> file
function dataURLtoFile(dataurl, filename) {//将base64转换为文件
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}
