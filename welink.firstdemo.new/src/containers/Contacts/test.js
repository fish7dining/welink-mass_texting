window.HWH5.selectContact().then((data)=>{
  console.log(data);
  // document.write('<div>' + data.length + '</div>');
  for (let i = 0; i < data.length; ++i) {
    //document.write('<div>' + data[i].chineseName + '</div>');
    let chineseName = data[i].chineseName; // 鲁晓�?顾伟
    let postsRank = data[i].postsRank; // 高级工程师B, 16�?
    let sex = data[i].sex; // M or F
    let employeeNumber = data[i].employeeNumber; //00368566

    let isBoss = 0;
    if (postsRank.indexOf('主任工程�?) != -1) {
      isBoss = 1;
    }
    if (postsRank.indexOf('高级工程师A/Team Leader') != -1) {
      isBoss = 1;
    }
    if (postsRank.indexOf('高级工程师B/Team Leader') != -1) {
      isBoss = 1;
    }
    if (postsRank.indexOf('部长') != -1) {
      isBoss = 1;
    }
    if (postsRank.indexOf('项目经理') != -1) {
      isBoss = 1;
    }
    if (postsRank.indexOf('技术专�?) != -1) {
      isBoss = 1;
    }
    if (postsRank.indexOf('总裁') != -1) {
      isBoss = 1;
    }

    document.write('<div>' + chineseName + ' ' + postsRank + ' ' + sex + ' ' + isBoss + '</div>');

    let finalname = '';
    if (isBoss == 1) {
      finalname = chineseName.charAt(0) + '�?;
    }
    else {
      if (sex == 'M') {
        finalname = chineseName.charAt(chineseName.length-2) + chineseName.charAt(chineseName.length-1);
      }
      else {
        finalname = chineseName.charAt(0) + 'MM';
      }
    }

    let title = '�?' + finalname + ' Review代码';
    let subTitle = finalname + '~~ 请帮我review一下代�?;
    let url = 'http://47.93.191.168:4300/?title=' + title + '&subtitle=' + subTitle;

    HWH5.sendIMCard({
      receiver: employeeNumber,
      receiveType: '0',
      cardType: 'txt',
      receiveName: 'IM卡片',
      title: title,
      from: 'WeLink',
      subTitle: subTitle,
      iconURL: 'xx',
      sourceUrl: url,
      iOpenURI: '',
      aOpenURI: '',
      handlerH5UriAndroid: '',
      handlerH5UriIOS: '',
      isPCDisplay: 0,
      fileID: 'xx',
      ownerID: 'xx',
      format: 'txt',
      fileSize : 16
    }).catch((error)=>{
      console.log('分享卡片消息异常',error);
    });
  }
}).catch((error)=>{
  console.log('调用通讯录组件异�?,error);
});
