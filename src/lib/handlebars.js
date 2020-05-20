const hbsHelpers = {}


hbsHelpers.json = (content)=>{
    return JSON.stringify(content)
}

hbsHelpers.gt = (a,b)=>{
  return a>b
}

hbsHelpers.first= (lista)=>{
    if(lista.length>0){
        return lista[0]
    }
    return null
}

hbsHelpers.checked = (value)=>{
  return value==true?" checked": ''
}

hbsHelpers.sumUp = (text)=>{
  return text.length > 15? text.substring(0,14)+"..." : text
}

hbsHelpers.times =(n, block) => {
  var accum = '';
  for(var i = 1; i <= n; ++i)
      accum += block.fn(i);
  return accum;
}

module.exports = hbsHelpers;