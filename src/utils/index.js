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
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
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

export const borderRadiusGenerator = clone => {
    return `${clone?.TL || 0}px ${clone?.TR || 0}px ${clone?.BR || 0}px ${clone?.BL || 0}px`
}


export const borderGenerator = clone => {
    return `${clone?.width || 0}px ${clone?.style || "solid"} ${clone?.color?.hex}`
}



export const textShadowGenerator = clone => {
    return `${clone.color?.hex ? rgbaStringConvertor(clone.color?.hex): clone.color} ${clone.x || 0}px ${clone.y || 0}px ${clone.blur?.[0] || 0}px `
}


export const rgbaStringConvertor = (hex) => {
    const { r , g , b } = hexToRgb(hex)
    return `rgba(${r || 0},${g || 0},${b || 0},1)`
}


export const removePxFormString = (string = '') => {
    return Number(string.slice(0 , string.indexOf("px")))
}

export function rgbToHex(rgb) {
    return '#' + rgb.match(/[0-9|.]+/g).map((x,i) => i === 3 ? parseInt(255 * parseFloat(x)).toString(16) : parseInt(x).toString(16)).join('')
}



export const filterKeyFromObject = (target = {} , excludeList = []) => {
    const base = {};
    Object.entries(target).map(([key]) => {
        if(!excludeList.includes(key)) base[key] = target[key]
    })
    return base;
}


export const makeSortedArrayForStore = (baseSort = [] , target = '') => {
    const base = {};
    target.split(" ").forEach((el , i) => {
        base[baseSort[i].label] = removePxFormString(el) === 0 ? "" : removePxFormString(el)
    })
    return base;
}