function i(namespace,iface){
 var self=i;
 debugger;
 function isFunction(functionToCheck) {
   var getType = {};
   return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
 }
 function expose(obj,attr){
   
     if(!self.__proto__.hasOwnProperty('ifaces')) { self.__proto__.ifaces={};}
   if(isFunction(obj[attr])){
       console.log('function');
       self.__proto__.ifaces[namespace+"."+attr]=obj[attr];
       $(document).on(namespace+"."+attr,function(ev,data){
         (obj[attr])(data);
       });
   }else{
     
     self.__proto__.ifaces[namespace+"."+attr]=(function(){ return obj[attr]; }) ;
       
   }
 }
 function init(object){  
   for(var index in object) { 
     expose(object,index); 
   }
 }
 if( typeof iface !== "undefined"){
   init(iface);
 }else{
   return self.__proto__.ifaces[namespace]();
 }

};
window.i=i;
