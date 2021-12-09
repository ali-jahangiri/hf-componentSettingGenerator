export const idGenerator = () => {
    return Math.random().toString(36).substr(2, 9);
};

export const selfClearTimeout = (cb , timeout) => {
    let timer = setTimeout(() => {
        cb();
        clearTimeout(timer);
    } , timeout)
}


export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}


export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



export const makeValidDefaultValueForShadowBoxElement = interpolatedValue => {
    const [x , y , blur , spread , color] = interpolatedValue.split(" ");
    const { r , g , b } = hexToRgb(color);
    const manipulatedValueString = `${x}px ${y}px ${blur}px ${spread}px rgba(${r},${g},${b},1)`;
    return manipulatedValueString;
}



export const extractSpace = (spaceClone , passedUnit) => {
    const unit = spaceClone;
    return `${unit?.[`${passedUnit}T`] || 0}px ${unit?.[`${passedUnit}R`] || 0}px ${unit?.[`${passedUnit}B`] || 0}px ${unit?.[`${passedUnit}L`] || 0}px`
}