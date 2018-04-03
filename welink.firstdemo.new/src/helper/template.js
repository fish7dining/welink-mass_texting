export const getRealName = (contact) =>{

  let chineseName = contact.chineseName; // 鲁晓�?顾伟
  let postsRank = contact.postsRank; // 高级工程师B, 16�?
  let sex = contact.sex; // M or F
  let employeeNumber = contact.employeeNumber; //00368566
  let isBoss = 0;
  if (postsRank.indexOf('主任工程�?) !== -1) {
    isBoss = 1;
  }
  if (postsRank.indexOf('高级工程师A/Team Leader') !== -1) {
    isBoss = 1;
  }
  if (postsRank.indexOf('高级工程师B/Team Leader') !== -1) {
    isBoss = 1;
  }
  if (postsRank.indexOf('部长') !== -1) {
    isBoss = 1;
  }
  if (postsRank.indexOf('项目经理') !== -1) {
    isBoss = 1;
  }
  if (postsRank.indexOf('技术专�?) !== -1) {
    isBoss = 1;
  }
  if (postsRank.indexOf('总裁') !== -1) {
    isBoss = 1;
  }

  let finalname = '';
  if (isBoss === 1) {
    finalname = chineseName.charAt(0) + '�?;
  }
  else {
    if (sex === 'M') {
      finalname = chineseName.charAt(chineseName.length-2) + chineseName.charAt(chineseName.length-1);
    }
    else {
      finalname = chineseName.charAt(0) + 'MM';
    }
  }
  return finalname;
}


