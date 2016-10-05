//gmap lib 
    function wgmap (apikey){
      var self=this;
      
      self.umoption=null;
      self.umark=null;
      window.onload=function(){
        
        
        document.body.appendChild(mapele(apikey));
       
        self.map = function(ele,option,ub){//create google map
            var map = new google.maps.Map(ele, option);
            var my ;
          if(ub==true){
           var my = umarkf(map);
          }
             self.umark = my;
            return map;       
        };
        self.radarS =function(option,su,er ){
            var service = new google.maps.places.PlacesService(map);//change location
            service.radarSearch(option,function(r,s){
                 if(s!==google.maps.places.PlacesServiceStatus.OK){// sheck status
                     er();
                     return;
                     }
                  
                      su(r);
                
            });
        }

      };
      
      function umarkf(map){
        
        var my;
      if(self.umoption !== null){
             my = new google.maps.Marker(self.umoption);
             }else{
             my = new google.maps.Marker({
              position: map.getCenter(),
              icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  scale: 5,
                 strokeColor: 'blue'},
               draggable: false,
               map: map});
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
