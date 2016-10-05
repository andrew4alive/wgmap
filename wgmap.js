//gmap lib 
    function wgmap (apikey){
      var self=this;
      var wmap;
      self.umoption=null;
      self.umark=null;
      window.onload=function(){
        
        
        document.body.appendChild(mapele(apikey));
       
        self.map = function(ele,option,ub){//create google map
             wmap = new google.maps.Map(ele, option);
            var my ;
          if(ub==true){
           var my = umarkf(wmap);
          }
             self.umark = my;
            return wmap;       
        };
        self.radarS =function(option,su,er ){
            var service = new google.maps.places.PlacesService(wmap);//change location
            service.radarSearch(option,function(r,s){
                 if(s!==google.maps.places.PlacesServiceStatus.OK){// sheck status
                     er();
                     return;
                     }
                  
                      su(r);
            });
        };

      };
      
      function umarkf(wmap){
        
        var my;
      if(self.umoption !== null){
             my = new google.maps.Marker(self.umoption);
             }else{
             my = new google.maps.Marker({
              position: wmap.getCenter(),
              icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 5,
                 strokeColor: 'blue'},
               draggable: false,
               map: wmap});
            }
          return my;
      }
      
      function mapele(ak){// create gmap api
      var scriptEle = document.createElement('script');
      scriptEle.setAttribute('async','');
      scriptEle.setAttribute('defer','');
      scriptEle.setAttribute('src','https://maps.googleapis.com/maps/api/js?key='+ak+'&callback=initMap&libraries=places,visualization');
      return scriptEle; }
      
      
        
      
    };//end wgmap
