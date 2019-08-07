//index.js
//获取应用实例
//const app = getApp()

Page({
  data: {
    newsTypes: ['国内', '国际', '财经', '娱乐', '军事', '体育', '其他'],
    type:'',
    date:'',
    firstImage: '',
    source:'',
    title:'',
    firstImage:'',
    hotDate: '',
    hotImage: '',
    hotSource: '',
    hotTitle: '',
    secondPageList:[]
  },
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data:{
        type: 'gn'
      },
      success: res=>{
        let result = res.data.result
        
        //初始化第二个部分的新闻列表
        let secondPageList = []
        //从index=1的位置开始
        for (let i = 1;i<result.length;i++) {
          secondPageList.push({
            date:result[i].date.substring(11, 16),
            firstImage:result[i].firstImage,
            source: result[i].source,
            title: result[i].title
          })
        }
        let hotDate = result[0].date.substring(11, 16)
        let hotImage = result[0].firstImage
        let hotSource = result[0].source
        let hotTitle = result[0].title
        this.setData({
          hotDate: hotDate,
          hotImage: hotImage,
          hotSource: hotSource,
          hotTitle: hotTitle,
          secondPageList: secondPageList
        })

      }

    })
    
  }
 
})
