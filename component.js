function Component (){
	this.elem = null;
	//метод для ініціалізаціїсвойства обєкта elem
	this.init = function (sSelector) {
		this.elem = $(sSelector);

		if (!this.elem.length) {
			console.error("Can not create oject on base ident " + sSelector + " Look at HTML");
		}
	}
	this.findObject = function(sSelector) {
		var object = this.elem.find(sSelector);
		if (!object.length) {
			console.error("Can not create oject on base class " + sSelector + " Recomed look at HTML, corect name of class, or name tag in findobject");
		}
		return object;
	}
}