# wgmap

google map library version 3.25

**cdn:**  https://gitcdn.xyz/repo/andrew4alive/wgmap/master/wgmap.js


###installation  :

  current only support CDN, add following tag to ur html body body 
        <script src=" https://gitcdn.xyz/repo/andrew4alive/wgmap/master/wgmap.js"></script>
        
  then init using code below:
   var gmap = new wgmap(**apikey**);
   **apikey** need to obtain from google map, and place
   
   ####this is also include google map api cdn in the end of body
   
### how to use:
  
  after init, you can create map using  code below:
  
     var map = gmap(Dom element[Dom], google map option[object]( https://developers.google.com/maps/documentation/javascript/reference#MapOptions)  
     , render yorself location[boolean])
        
        #####example code:
        
        var map=gmap.map(document.getElementById('map'), {
          center: mapcenter(),// location.lat adn lng
          zoom:14 ,
          scrollwheel:false
                },
           true);
           map.setOptions({draggable: false});
           
          code above will render google map and your location in map center. if you want other option , add option to 
            gmap.umoption. umoption refer to [this](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions).
            
            you also can change it later using gmap.mark object;
