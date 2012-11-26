function newfile() {
  //air.trace("Ejecutando newfile..");
  document.getElementById("textarea").value = '';
};
function openfile() {
  /*/air.trace("Ejecutando openfile..");
  var file = air.File.documentsDirectory;
  var filters = new Array();
  //filters.push(new air.FileFilter("HTML Files","*.html"));
  file.browseForOpen(file,filters);
  file.addEventListener(air.Event.SELECT,function() {
    //air.trace("Cargando archivo..");
    var fileStream = new air.FileStream(); 
    fileStream.open(file, air.FileMode.READ); 
    var content = fileStream.readUTFBytes(fileStream.bytesAvailable);
    //document.getElementById("textarea").value = content;
    //makeDiagram();*/
	var xml = AbrirFichero("C:/clases.xml");
	alert(xml);
    update();
  //});
};

function open() {
  var data, fp, nsIFilePicker, res, thefile;
  nsIFilePicker = Components.interfaces.nsIFilePicker;
  fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
  fp.init(window, "Open File", nsIFilePicker.modeOpen);
  fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll);
  res = fp.show();
  if (res === nsIFilePicker.returnOK) {
    thefile = fp.file;
    data = this.read(thefile.path);
  }
  document.getElementById("textarea").value = data;
};


function savefile() {
  //air.trace("Ejecutando openfile..");
  var file = air.File.documentsDirectory;
  var filters = new Array();
  filters.push(new air.FileFilter("HTML Files","*.html"));
  file.browseForSave("Select file");
  file.addEventListener(air.Event.SELECT,function() {
    //air.trace("Guardando archivo..");
    var fileStream = new air.FileStream();
    var textarea =  document.getElementById("textarea");
    fileStream.open(file, air.FileMode.WRITE);
    fileStream.writeMultiByte(textarea.value, "utf-8");
    fileStream.close();
  });
};
function exit() {
  window.nativeWindow.close();
};

function update() {
 var textarea = document.getElementById("textarea");
 var view = document.getElementById("view");
 if ((typeof textarea === "undefined") ||
     (typeof view === "undefined")) return;
 else view.innerHTML = textarea.value;
};

function AbrirFichero(fichXML)
{
        var xmlDoc=undefined;
        try
        {
            if (document.all) //IE
            {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            }
            else //firefox
            {
                xmlDoc = document.implementation.createDocument("","",null);
            }
            xmlDoc.async=false;
            xmlDoc.load(fichXML);
        }
        catch(e)
        {
            try { //otros safari, chrome
                    var xmlhttp = new window.XMLHttpRequest();
                    xmlhttp.open("GET",fichXML,false);
                    xmlhttp.send(null);
                    xmlDoc = xmlhttp.responseXML.documentElement;
                    return xmlDoc;
            }
            catch (e)
            {
                return undefined;
            }
        }
        return xmlDoc;
}



    function makeDiagram() {
      var uml = Joint.dia.uml;
    Joint.paper("view", 800, 450);
    var client = uml.Class.create({
      rect: {x: 260, y: 20, width: 100, height: 50},
      label: "Client",
      shadow: true,
      attrs: {
        fill: "90-#000-#f00:1-#fff"
      },
      labelAttrs: {
        'font-weight': 'bold'
      }
    });
    var aggregate = uml.Class.create({
      rect: {x: 100, y: 100, width: 120, height: 80},
      label: "<<interface>>\nAggregate",
      swimlane1OffsetY: 30,
      shadow: true,
      attrs: {
        fill: "90-#000-yellow:1-#fff"
      },
      labelAttrs: {
        'font-weight': 'bold'
      },
      methods: ["+createIterator()"]
    });

    var iterator = uml.Class.create({
      rect: {x: 400, y: 100, width: 120, height: 80},
      label: "<<interface>>\nIterator",
      swimlane1OffsetY: 30,
      shadow: true,
      attrs: {
        fill: "90-#000-yellow:1-#fff"
      },
      labelAttrs: {
        'font-weight': 'bold'
      },
      methods: ["+next()"]
    });

    var concreteAggregate = uml.Class.create({
      rect: {x: 95, y: 250, width: 130, height: 70},
      label: "Concrete Aggregate",
      shadow: true,
      attrs: {
        fill: "90-#000-green:1-#fff"
      },
      labelAttrs: {
        'font-weight': 'bold'
      },
      methods: ["+createIterator(): Context"]
    });

    var concreteIterator = uml.Class.create({
      rect: {x: 395, y: 250, width: 130, height: 70},
      label: "Concrete Iterator",
      shadow: true,
      attrs: {
        fill: "90-#000-green:1-#fff"
      },
      labelAttrs: {
        'font-weight': 'bold'
      },
      methods: ["+next(): Context"]
    });

    var all = [client, aggregate, iterator, concreteAggregate, concreteIterator];

    client.joint(aggregate, uml.dependencyArrow).setVertices([{x: 159, y: 45}]).register(all);
    client.joint(iterator, uml.dependencyArrow).setVertices([{x: 460, y: 45}]).register(all);
    concreteAggregate.joint(aggregate, uml.generalizationArrow).register(all);
    concreteIterator.joint(iterator, uml.generalizationArrow).register(all);
      /*
	  var array, j, parser, _ref;
      parser = new DOMParser();
      this.doc = parser.parseFromString(data, "application/xml");
      array = d3.select(this.doc).selectAll("clase")[0];
      this.makeClasses(array);
      this.all = [];
      for (j = 0, _ref = array.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        this.all.push(array[j].attributes.item(0).nodeValue);
      }
      array = d3.select(this.doc).selectAll("conexion")[0];
      return this.makeConnection(array, this.all);*/
    };
	
    function makeClasses(array) {
      var j, _ref, _results;
      this.uml = Joint.dia.uml;
      Joint.paper("view", 900, 700);
      this.posY = 20;
      this.posX = 20;
      _results = [];
      for (j = 0, _ref = array.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        this.nombre = array[j].attributes.item(0).nodeValue;
        this.atributos = array[j].attributes.item(1).nodeValue;
        this.metodos = array[j].attributes.item(2).nodeValue;
        this.uml.Class.create({
          rect: {
            x: this.posX,
            y: this.posY,
            width: 100,
            height: 200
          },
          shadow: true,
          swimlane1OffsetY: 30,
          attrs: {
            fill: "90-#000-#f90:1-#fff"
          },
          labelAttrs: {
            'font-weight': 'bold'
          },
          label: this.nombre,
          methods: this.metodos.split("$"),
          attributes: this.atributos.split("$")
        });
        this.posY += 50;
        _results.push(this.posX += 110);
      }
      return _results;
    };
    
    function makeConnection(array, all) {
      var j, _ref, _results;
      this.uml = Joint.dia.uml;
      _results = [];
      for (j = 0, _ref = array.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        this.claseActual = array[j].attributes.item(0).nodeValue;
        this.claseEnlazada = array[j].attributes.item(1).nodeValue;
        alert("Conexion desde " + this.claseActual + " a " + this.claseEnlazada);
        _results.push(this.claseActual.joint(this.claseEnlazada, this.uml.generalizationArrow).register(all));
      }
      return _results;
    };