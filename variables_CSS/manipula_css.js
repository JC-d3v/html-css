// TIP:  CSS-OM
// 
// TIP: en el inspector de documentos el obejto seleccionado $0
// TIP: getComputedStyle(element).color
// para leer
// TIP: getComputedStyle(element).getPropertyValue('--var-CSS')
//para setear
// TIP: element.style.setProperty('--var-CSS', 'new-VALUE')

var rootStyle = getComputedStyle(document.documentElement);
console.log(rootStyle);
