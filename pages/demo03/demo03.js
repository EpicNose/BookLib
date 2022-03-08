// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html1:'<a class="tile_item" href="//detail.tmall.com/item.htm?id=666658532868&amp;skuId=4811006037251&amp;pic=//img.alicdn.com/bao/uploaded/i3/167873659/O1CN01gwpJ0Y1ctrwfLLrDl_!!0-item_pic.jpg_400x400Q50s50.jpg_.webp&amp;itemTitle=%E7%99%BE%E4%B8%BD%E6%9D%BE%E7%B3%95%E4%B9%90%E7%A6%8F%E9%9E%8B%E5%A5%B32022%E6%98%A5%E9%A9%AC%E8%A1%94%E6%89%A3%E4%BC%91%E9%97%B2%E9%9E%8B3YZB6AA2&amp;price=589.00&amp;from=h5" data-atp="1,666658532868,201309209,2292607173,srp,1,srp,,," data-rn="rn=0b70d017ef423ffe716c9f5eddcdf53c&amp;q=%C0%D6%B8%A3%D0%AC&amp;bid=4&amp;catid=54138001&amp;prop=&amp;sort=d&amp;disp=&amp;filter=&amp;loc=&amp;n=20&amp;page=1&amp;v=mall_1.0&amp;vmarket=0&amp;machineid=4268720ada4a1b4420eac67691cce8f8&amp;tmalltrackid=&amp;nav=&amp;navlog=&amp;rewq=%C0%D6%B8%A3%D0%AC&amp;rewcatid=54138001&amp;page_type=&amp;stats=qp:1|brand:1|brand-qp:1|pricemodel:fcity|F.itag:0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0|querytype:256|skuahead:2|newproduct:1|itemPage:1|defaultsearch:2|app:tmallsearchquery|industryId:161|industryId:202|industryId:313|industryId:537|industryId:552|industryId:553|industryId:577|industryId:634|initiative:1|GongYingLianDists%3A0&amp;filter_new=sort:d|post_fee:0|support_cod:0|manyPoints:0|wwonline:0|miaosha:0|isCombo:0|vip:0|pic_detail:0|floc:0|fprice:0|new:0|filter_mj:0&amp;from=nav_ct_176_8144_8150&amp;active=0&amp;wq=&amp;suggest=&amp;search_type=search&amp;abtest=&amp;std_query=%C0%D6%B8%A3%D0%AC&amp;top_query=&amp;direct_rc=54138001&amp;"><div class="ti_img_wrap " style="width: 186px;height: 186px"><img class="ti_img" src="//img.alicdn.com/bao/uploaded/i3/167873659/O1CN01gwpJ0Y1ctrwfLLrDl_!!0-item_pic.jpg_400x400Q50s50.jpg_.webp" alt="百丽松糕乐福鞋女2022春马衔扣休闲鞋3YZB6AA2"></div><div class="ti_info"><div class="tii_title"><h3>  百丽松糕乐福鞋女2022春马衔扣休闲鞋3YZB6AA2</h3></div><div class="below_icons" style="display:none">  </div><div class="tii_price">   <i class="list_m_font"></i>  589<span class="tii_small">.00</span>   <span class="tii_sold">月销8000+笔</span>   </div></div>  <i class="list_m_font shop_more_btn j_shop_more_btn" aria-label="更多"></i><div class="j_shop_more shop_more"><span>百丽官方旗舰店</span><hr><span><label>描述相符:</label> <span class="low">    4.79 </span>  <i class="low">低</i>  </span><span><label>服务态度:</label> <span class="low">    4.80 </span>  <i class="low">低</i>  </span><span><label>物流服务:</label> <span class="equal">    4.84 </span>  <i class="equal">平</i>  </span></div>  </a>',
    html:'<div class="sc-EHOje bYwTlh"><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://www.tmall.com/wow/z/heybox/heyboxrax/heybox?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.1&amp;scm=1007.home_icon.tmallxp.d&amp;wh_biz=tm&amp;disableNav=YES"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">天猫新品</p></a><a class="sc-htoDjs dOIweD" href="https://h5.m.taobao.com/trip/home/index.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.6&amp;scm=1007.home_icon.lvx.d&amp;_wx_tpl=http%3A%2F%2Fh5.m.taobao.com%2Fapp%2Ftriprxhome%2Fpages%2Fhome%2Findex.weex.js&amp;wx_navbar_hidden=true&amp;ttid=12mtb0000155"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">机票酒店</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.2&amp;scm=1007.home_icon.juhs.d&amp;_wml_code=9XZq%2Bt%2FxdGk2vxtkbZvNtxIRr1Fl5o%2F4JYkxzjiABZCkN0X4ug9ejN%2FEA0XumFdlCJmui3oZzrfxu2OjRTO%2FUldTSbERTDFnNVuaq4bGXYarnsLycd1U6o4btoe8H%2FSSeBk5iibFKlpytcA4vdUvH%2BU%2BttvWBrsoV0Txewchwr8%3D"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">今日爆款</p></a><a class="sc-htoDjs dOIweD" href="https://market.m.taobao.com/app/tmall-wireless/tjb-2018/index/index.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.7&amp;scm=1007.home_icon.lingjb.d&amp;disableNav=YES#/tjb"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">金币庄园</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://pages.tmall.com/wow/z/import/tmg-rax-home/tmallimportHomewupr-index?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.3&amp;scm=1007.home_icon.tmallgj.d&amp;wh_biz=tm&amp;wh_pid=tmg-rax-home%2FtmallimportHome&amp;disableNav=YES"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">天猫国际</p></a><a class="sc-htoDjs dOIweD" href="https://market.m.taobao.com/app/pm/new-main/home?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.8&amp;scm=1007.home_icon.paim.d&amp;pha=true&amp;disableNav=YES"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">阿里拍卖</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://chaoshi.m.tmall.com/?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.4&amp;scm=1007.home_icon.tmallcs.d2&amp;_ig=shoutao"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">天猫超市</p></a><a class="sc-htoDjs dOIweD" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.9&amp;scm=1007.home_icon.taobch.d&amp;_wml_code=6WHamsDC%2B8ca9ElMubUiQjsRC0O2j4yGgKPCJIKXglo%3D"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">淘宝吃货</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.5&amp;scm=1007.home_icon.chongzzx.d&amp;_wml_code=Vfw8V4IdfflvFcsPv2fKDCLgFlhCoOQ406ZO9WKS70zNVh2FhuClrYZQHV%2BUj8rweMrPJgOrvqON3zeUHJMIALqc03AQZnf3hmtKmJM2g5PuR9UuzwivVDM%2Bil4nBDGBPXlfSqZZA3CdATGQpVOeZMO8SbyJvaZdoC89%2B2Gg8FZsD4wqDUKs7VcgTjZxbgdE&amp;subSource=stcz_1"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">充值中心</p></a><a class="sc-htoDjs dOIweD" href="https://market.m.taobao.com/app/tbsearchwireless-pages/new-catemap/p/s-nx-categories?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.10&amp;scm=1007.home_icon.fenl.d&amp;wh_weex=true"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1nBktVxTpK1RjSZR0XXbEwXXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">分类</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.11&amp;scm=1007.home_icon.xiany.d&amp;_wml_code=2RLfNbB12QpISV%2BL7aiHZwm5noZrOPbYmjwLhlOAmgeK3XKiEERT7ZdlL5lwWrfH8vrxje8x3wcjpFnTBn2bZuI6VIVmz1Ww1SxKMPNxdKnSxkM02klo1Wq1PvanB8MPDB7%2Fxfoi8vf2ert4z%2BOYjJBMsIILVspKvgSN8SN%2BsCg%3D"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1CoEwVrvpK1RjSZFqXXcXUVXa-185-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">闲鱼</p></a><a class="sc-htoDjs dOIweD" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.12&amp;scm=1007.home_icon.tmallsx.d&amp;_wml_code=uxMdTqOeZt4IfBD8ssl15zR25nV9irif72OvYZHv66PlUxWwFw7AI3Y4j1t%2FGJXQYDZlDvAssH0HSvvBn2twyr3u7MVHWWGQZIVPwerViJM0j60YHvZMcG3JG1ZCBQswmg48wSD9%2BC%2FgFzZX0JcgQenoXJca%2B2FpGgRDcldUh%2F4mrO0cKrXo5rF%2Fsyo7cH7G"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1fcOKXkCy2eVjSZSyXXXukVXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">天猫美食</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/18/wupr?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.13&amp;scm=1007.home_icon.88vip.d&amp;wh_pid=daily-186355&amp;disableNav=YES"><img class="sc-dnqmqq egIvnd" src="https://img.alicdn.com/tfs/TB1FyEazAY2gK0jSZFgXXc5OFXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">会员中心</p></a><a class="sc-htoDjs dOIweD" href="https://pages.tmall.com/wow/yao/20485/aljkmh?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.14&amp;scm=1007.home_icon.alijk.d&amp;wh_biz=tm"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1tikBVAPoK1RjSZKbXXX1IXXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">阿里健康</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://m.duanqu.com?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.15&amp;scm=1007.home_icon.zdxh.d&amp;_ariver_appid=6158543"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1xcTYxFT7gK0jSZFpXXaTkpXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">造点新货</p></a><a class="sc-htoDjs dOIweD" href="https://huodong.m.taobao.com/act/snipcode.html?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.16&amp;scm=1007.home_icon.koubsh.d&amp;_wml_code=qeLJPHY5ySO3lef1quOfGhXh%2B8UW1yf1hl95h8wZUjlFlGFkyop3K4Hb%2B95myeqeJT4BYa03LO60S6xd8wO18LZ3%2FVvg2pTGoYLZvdSZu8bbze9cO%2FiQDU%2F6LiQkOXRW6f4DA%2FMN2L81ERi%2Bbsad%2Fk%2BxIGTGkv98p4M7sIG2SpI%3D"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB1h1MnVCrqK1RjSZK9XXXyypXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">口碑生活</p></a></div><div class="sc-gzVnrw jHPDsO"><a class="sc-htoDjs dEOvzQ" href="https://m.duanqu.com?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.17&amp;scm=1007.home_icon.tuhuo.d&amp;_ariver_appid=17570832"><img class="sc-dnqmqq egIvnd" src="https://gw.alicdn.com/tfs/TB11tFkr7L0gK0jSZFxXXXWHVXa-183-144.png?getAvatar=1"><p class="sc-iwsKbI bJdTes">土货鲜食</p></a><!-- empty --></div></div>'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})