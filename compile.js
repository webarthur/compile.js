$compile = function(template, escope){
  
  $compile.tags || ($compile.tags = ['{{', '}}']);
 	
  this!==window
    && (escope=template, template=this)
  
  typeof escope!=='Undefined'
    || (escope=window);
  
  return template.replace(new RegExp('{([^\}]*)}', 'g'), function(match, attr){
	//console.log(attr);
      try{
        return escope[attr] || '';
      } catch (e) {
        console.log(e)
        return '';
      }

    });
}

if(!String.prototype.compile)
  String.prototype.compile = $compile;
