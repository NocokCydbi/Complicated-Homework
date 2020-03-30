'use strict';
let lang = 'ru';
if (lang === 'ru'){
console.log('Пн, вт, ср, чт, пт, сб, вс');
}else if (lang === 'en'){
    console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');
}
else{
    console.log('Error');
}
lang = 'en'
switch(lang){
    case 'ru':
        console.log('Пн, вт, ср, чт, пт, сб, вс');
    break;
    case 'en':
        console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');
}

let lang_arry = []
lang_arry['en'] = ['Mon, Tue, Wed, Thu, Fri, Sat, Sum'];
lang_arry['ru'] = ['Пн, вт, ср, чт, пт сб, вс'];
lang = 'ru';
console.log(lang_arry[lang]);
