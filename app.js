

var vm = new Vue({
 el: "#vue",
data:  {
    
    menu: [
        {
       "name": "MENU 1",
       "link": '',
       'open': false,
       "submenu": []
     },
       {
       "name": "MENU 2",
       'open': false,
       "submenu": [
         {
           "name": "MENU 2.1",
           "link": "#"
         },
          {
           "name": "MENU 2.2",
           "link": "#"
         },
         {
           "name": "MENU 2.3",
           "link": "#"
         }, 
         {
           "name": "MENU 2.4",
           "link": "#"
         },
         {
           "name": "MENU 2.5",
           "link": "#"
         }
       ]
     },
     {
        "name": "MENU 3",
        'open': false,
        "submenu": [
          {
            "name": "MENU 2.1",
            "link": "#"
          },
           {
            "name": "MENU 2.2",
            "link": "#"
          },
          {
            "name": "MENU 2.3",
            "link": "#"
          }
         
        ]
      }, {
        "name": "MENU 4",
        "link": '',
        'open': false,
        "submenu": []
      }
    ]
 }, 
 methods: {
    toggle: function(item) {

        this.menu.forEach(element => {
            
            if ( item.open !== element.open) {
                return element.open = false;
            }
           
        });
        
        return item.open = !item.open;
       
    }
 }

 });