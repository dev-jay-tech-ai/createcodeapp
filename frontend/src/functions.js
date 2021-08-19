export const init = (name) => {
  if (name.includes('구찌')) {
    return 'GC';
  } else if (name.includes('디올')) {
    return 'DR';
  } else if (name.includes('로저비비에')) {
    return 'RV';
  } else if (name.includes('루이비통')) {
    return 'LV';
  } else if (name.includes('마르니')) {
    return 'MR';
  } else if (name.includes('멀버리')) {
    return 'MUL';
  } else if (name.includes('몽클레어')) {
    return 'MC';
  } else if (name.includes('미우미우')) {
    return 'MIU';
  } else if (name.includes('발렌시아가')) {
    return 'BG';
  } else if (name.includes('발렌티노')) {
    return 'VT';
  } else if (name.includes('보테가베네타')) {
    return 'BV';
  } else if (name.includes('생로랑')) {
    return 'YSL';
  } else if (name.includes('샤넬')) {
    return 'CH';
  } else if (name.includes('셀린느')) {
    return 'CEL';
  } else if (name.includes('아르켓')) {
    return 'AK';
  } else if (name.includes('알렉산더맥퀸')) {
    return 'MQ';
  } else if (name.includes('에르메스')) {
    return 'H';
  } else if (name.includes('토리버치')) {
    return 'TORY';
  } else if (name.includes('토즈')) {
    return 'TOD';
  } else if (name.includes('톰브라운')) {
    return 'TB';
  } else if (name.includes('페라가모')) {
    return 'FR';
  } else if (name.includes('펜디')) {
    return 'FD';
  } else if (name.includes('프라다')) {
    return 'PR';
  } else if (name.includes('버버리')) {
    return 'BBR';
  } else if (name.includes('지안비토로시')) {
    return 'GVT';
  } else if (name.includes('아크네스튜디오')) {
    return 'ACN';
  } else if (name.includes('로에베')) {
    return 'LEW';
  } else if (name.includes('디올')) {
    return 'DR';
  } else if (name.includes('스텔라매카트니')) {
    return 'STM';
  } else if (name.includes('마놀로블라닉')) {
    return 'MNB';
  } else if (name.includes('메종 마르지엘라')) {
    return 'MM';
  } else if (name.includes('로로피아나')) {
    return 'LRP';
  } else if (name.includes('막스마라')) {
    return 'MAX';
  } else if (name.includes('캐롤리나 헤레라')) {
    return 'CA';
  } else if (name.includes('비비안웨스트우드')) {
    return 'VW';
  } else if (name.includes('브리오니')) {
    return 'BO';
  } else if (name.includes('크리스찬 루부탱')) {
    return 'CHR';
  } 
}

export const initSize = (size) => {
  if (size.includes('EU')) {
    return size.replace('EU','')
  } else if (size.includes('UK')) {
    return size.replace('UK','')
  } else if (size.includes('US')) {
    return size.replace('UK','')
  } else if (size.includes('.')) {
    return size.replace('.','')
  } else return size;  
}

const nochar = (name) => {
  const pattern = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;                                        
  let text = name.replace(pattern,'')
  return text.trim().toUpperCase();
}

const abbr = (el) => {
  let name = el.toUpperCase();
  if (name.includes('BOTTEGA VENETA')) {
    return name.replace('BOTTEGA VENETA','BOTTEGAVENETA')
  } else if (name.includes('ROGER BIBIER')) {
    return name.replace('ROGER BIBIER','ROGERVIVIER')
  } else if (name.includes('SAINT LAURENT')) {
    return name.replace('SAINT LAURENT','SAINTLAURENT')
  } else if (name.includes('MIU MIU')) {
    return name.replace('MIU MIU','MIUMIU')
  } else if (name.includes('TOM BROWN')) {
    return name.replace('TOM BROWN','TOMBROWN')
  } else if (name.includes('MAX MARA')) {
    return name.replace('MAX MARA','MAXMARA')
  } else if (name.includes('ALEXANDER MCQUEEN')) {
    return name.replace('ALEXANDER MCQUEEN','ALEXANDERMCQUEEN')
  } else if (name.includes('CAROLINA HERRERA ')) {
    return name.replace('CAROLINA HERRERA','CAROLINAHERRERA')
  } else if (name.includes('VIVIENNE WESTWOOD ')) {
    return name.replace('VIVIENNE WESTWOOD ','VIVIENNEWESTWOOD')  
  } else if (name.includes('CHRISTIAN RUBUTIN ')) {
    return name.replace('CHRISTIAN RUBUTIN ','CHRISTIANRUBUTIN')  
  } else if (name.includes('CHRISTIAN RUBOUTIN ')) {
    return name.replace('CHRISTIAN RUBOUTIN ','CHRISTIANRUBOUTIN')  
  } else {
    return name
  }  
}

export const char = (el) => {
  let name = abbr(el);
  let nameOrg = name.split(' ')[1] 
  if (nameOrg.length < 4) {
    nameOrg = name.split(' ')[1] + name.split(' ')[2]
    return nochar(nameOrg.substr(0,4));
  } 
  return nochar(nameOrg.substr(0,4));
} 





