const app = getApp()

Page({
  data:{
    files:[]
  },
  chooseImage(e){
    let that = this;
    wx.chooseImage({
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success(res){
        console.log(res)
        that.setData({
          files:that.data.files.concat(res.tempFilePaths)
        })
        //--------
        for(let i= 0;i < res.tempFilePaths.length;i++){
          const filePath = res.tempFilePaths[i]
          let a = filePath.lastindexOf('.')
          let b = filePath.lastindexOf('.' + filePath.length - 7)
          let c = filePath.substring(b+1,a)
          const cloudPath = c + filePath.match(/\.[^.]+?$/);
        }         
        wx.cloud.uploadFile({
          cloudPath, 
          filePath,//文件路径
          success(res) {
            console.log('上传成功',res)
            // do something
          },
          fail(err){
            console.log('失败')
          }
        })
      }
    })
  }, 
  previewImage(e){
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    });
  }
})
