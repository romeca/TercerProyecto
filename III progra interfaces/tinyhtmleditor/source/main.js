var nombresClases;
(function() {
  var File;
  File = (function() {
    function File() {}
    File.prototype.esClase = function(clase, nombresClases){
      for(var i=0; i<nombresClases.length;i++){
        if(clase == nombresClases[i]){
          return 1;
        }
      }
      return 0;
    };
    File.prototype.validarClase = function(nombre1, nombre2, tipo){
    var esta1,esta2, textoAdd;
    esta1 = this.esClase(nombre1, nombresClases);
    esta2 = this.esClase(nombre2, nombresClases);
    var textarea = document.getElementById('textarea');
    var cursor = this.getCaret(textarea);
    var text = textarea.value;
    if(nombre1 !="" && nombre2 !="" && esta1==1 && esta2==1){
      textoAdd = "<conexion clase1='"+nombre1+"'"+" clase2='"+nombre2+"'"+" tipo='"+tipo+"'/>";
    }
    else if(nombre1 !="" && nombre2 !=""){
      alert("Alguna clase es invalida");
	  textoAdd = '';
    }
    else if(nombre1 == "" || nombre2 ==""){
      alert("Ingrese los datos.");
	  textoAdd = '';
    }
    var text = text.substring(0,cursor)+textoAdd+text.substring(cursor,text.length);
    textarea.value = text;
    };
	
	
	
	
	File.prototype.eliminaClase = function(nombreClaseElim) {
          var testValue = document.getElementById('textarea').value;
          var subsValue = "<clase nombre='"+nombreClaseElim+"'";
          var posInit = testValue.indexOf(subsValue);
	  var posEnd = testValue.indexOf('/>', posInit);
	  posEnd++;posEnd++;// elimina caracteres "/>" el cambio de linea y los 2 espacios iniciales
	  //alert(testValue.substring(0,posInit));
	  var textoRes = testValue.substring(0,posInit)+testValue.substring(posEnd,testValue.length);
	  document.getElementById("textarea").value = textoRes;
	}
	
	File.prototype.eliminaConection = function(nomClase1, nomClase2, tipo) {
	  var testValue = document.getElementById('textarea').value;
      var subsValue = "<conexion clase1='"+nomClase1+"' clase2='"+nomClase2+"' "+"tipo='"+tipo+"'/>";
      var posInit = testValue.indexOf(subsValue);
	  if(posInit >=0) {
	    var posEnd = testValue.indexOf('/>', posInit);
	    posEnd++;posEnd++;// elimina caracteres "/>" el cambio de linea y los 2 espacios iniciales
	    var textoRes = testValue.substring(0,posInit)+testValue.substring(posEnd,testValue.length);
	    document.getElementById("textarea").value = textoRes;
	  }
	  else {
	    alert('Conexion inexistente!!');
	  }
	}
	
	
	
	
    File.prototype.getCaret = function(el) {
    if (el.selectionStart) {
      return el.selectionStart;
    } else if (document.selection) {
    el.focus();
    var r = document.selection.createRange();
    if (r == null) return 0;
    var re = el.createTextRange(),
        rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);
    var add_newlines = 0;
    for (var i=0; i<rc.text.length; i++)
      if (rc.text.substr(i, 2) == '\r\n') {
        add_newlines += 2;
        i++;
      }
    return rc.text.length - add_newlines;
    }
     return 0;
    };
    File.prototype.addClass = function(){
      var nombre, metodos, atributos, splitMetodos, splitAtributos, PosX, PosY;
      nombre  = document.getElementById('agregarClaseNombre').value;
      atributos = document.getElementById('agregarClaseAtributos').value;
      metodos = document.getElementById('agregarClaseMetodos').value;
      PosX = document.getElementById('PosX').value;
      PosY = document.getElementById('PosY').value;
      if(nombre == ""){
       alert("La clase debe tener nombre. Reingrese los datos.");
      }
      else if(nombre != ""){
        splitMetodos = metodos.split(",");
        splitAtributos = atributos.split(",");
        var textarea = document.getElementById('textarea');
        var cursor = this.getCaret(textarea);
        var text = textarea.value;
        var texto = "<clase nombre='"+nombre+"'"+" atributos='";
        for (var i=0; i<splitAtributos.length; i++)
        {
          if(i== splitAtributos.length-1){
          texto = texto+splitAtributos[i];
          }
        else
          texto = texto+splitAtributos[i]+'$';
        }
        var texto = texto+"' metodos='";
        for (var i=0; i<splitMetodos.length; i++)
        {
          if(i== splitMetodos.length-1){
          texto = texto+splitMetodos[i];
          }
          else
           texto = texto+splitMetodos[i]+'$';
        }
        var texto = texto+"' posX='"+PosX+"' posY='"+PosY+"'/>";
        var text = text.substring(0,cursor)+texto+text.substring(cursor,text.length);
        textarea.value = text;
      }
    };
    File.prototype.save = function() {
      var fp, nsIFilePicker, res, thefile;
      nsIFilePicker = Components.interfaces.nsIFilePicker;
      fp = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
      fp.init(window, "Save File", nsIFilePicker.modeSave);
      fp.appendFilters(nsIFilePicker.filterText | nsIFilePicker.filterAll);
      res = fp.show();
      if (res === nsIFilePicker.returnOK) {
        thefile = fp.file;
        return this.write(thefile.path, this.xml2string(this.doc));
      }
    };
    File.prototype.write = function(filename, data) {
      var file, nsIFileOutputStream, nsILocalFile, outputStream;
      nsILocalFile = Components.interfaces.nsILocalFile;
      file = Components.classes["@mozilla.org/file/local;1"].createInstance(nsILocalFile);
      nsIFileOutputStream = Components.interfaces.nsIFileOutputStream;
      outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(nsIFileOutputStream);
      file.initWithPath(filename);
      outputStream.init(file, 0x04 | 0x08 | 0x20, 0666, 0);
      outputStream.write(data, data.length);
      return outputStream.close();
    };
    File.prototype.getIndexClass = function(nombre) {
      var indice;
      for(var i = 0; i < nombresClases.length; i++) {
        if(nombre == nombresClases[i])
          return i;
      }return -1;
    }
    File.prototype.makeConnection = function(arregloConexiones, arregloClases) {
      var j, _ref, _results, claseActual, claseEnlazada, uml, initClass, endClass, tipoConec;
      uml = Joint.dia.uml;
      _results = [];
      for (j = 0, _ref = arregloConexiones.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        initClass = this.getIndexClass(arregloConexiones[j].attributes.item(0).nodeValue); // obtiene el i de la clase inicial
        endClass = this.getIndexClass(arregloConexiones[j].attributes.item(1).nodeValue); // obtiene el i de la clase final
        tipoConec = arregloConexiones[j].attributes.item(2).nodeValue; // obtiene el i de la clase final
        claseActual = arregloClases[initClass]; // obtiene el objeto clase de la clase inicial de la conexion
        claseEnlazada = arregloClases[endClass]; // obtiene el objeto clase de la clase donde termina la conexion
        if(initClass >= 0 && endClass >= 0) {// Valida que exista las clases que quiere conectar
          if(tipoConec == 'Herencia')
            _results.push(claseActual.joint(claseEnlazada, uml.generalizationArrow)); // hace la conexion
          else if(tipoConec == 'Asociacion')
            _results.push(claseActual.joint(claseEnlazada, uml.dependencyArrow)); // hace la conexion
          else
            _results.push(claseActual.joint(claseEnlazada, uml.aggregationArrow)); // hace la conexion
          }
        }
      return _results;
    };
    File.prototype.makeClasses = function(array) {
      var j, _ref, _results;
      this.uml = Joint.dia.uml;
      Joint.paper("view", 800, 800);
      _results = [];
      for (j = 0, _ref = array.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        this.nombre = array[j].attributes.item(0).nodeValue; // obtiene el nombre del objeto xml
        this.atributos = array[j].attributes.item(1).nodeValue;
        this.metodos = array[j].attributes.item(2).nodeValue;
        this.posX = array[j].attributes.item(3).nodeValue;
        this.posY = array[j].attributes.item(4).nodeValue;

        _results.push(this.uml.Class.create({
          rect: {
            x: this.posX,
            y: this.posY,
            width: 100,
            height: 120
          },
          shadow: true,
          swimlane1OffsetY: 30,
          attrs: {
            fill: "90-#000-gray:1-#fff"
          },
          labelAttrs: {
            'font-weight': 'bold'
          },
          label: this.nombre,
          methods: this.metodos.split("$"),
          attributes: this.atributos.split("$")
        }));
      }
      return _results;
    };
    File.prototype.makeDiagram = function(data) {
      var clasesXML, conexiones, j, parser, _ref, arregloClases;
      parser = new DOMParser();
      this.doc = parser.parseFromString(data, "application/xml");
      clasesXML = d3.select(this.doc).selectAll("clase")[0];
      arregloClases = this.makeClasses(clasesXML);
      nombresClases = [];
      for (j = 0, _ref = clasesXML.length - 1; 0 <= _ref ? j <= _ref : j >= _ref; 0 <= _ref ? j++ : j--) {
        nombresClases.push(clasesXML[j].attributes.item(0).nodeValue);
      }
      conexiones = d3.select(this.doc).selectAll("conexion")[0];
      return this.makeConnection(conexiones, arregloClases, nombresClases);
    };
    File.prototype.doDL = function(s){
      function dataUrl(data) {return "data:x-application/xml," + escape(data);}
      window.open(dataUrl(s));
    };
    return File;
  })();
  this.file = new File;
}).call(this);
