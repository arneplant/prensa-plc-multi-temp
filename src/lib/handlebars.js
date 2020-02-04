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

module.exports = hbsHelpers;