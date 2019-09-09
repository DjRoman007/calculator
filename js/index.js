    (function(){
    const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    const clear = document.querySelector('.calc .clear');
    const zero = document.querySelector('.calc .zero');
    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        const num = ev.target.innerText;
        display.value += num;
    }
    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        const oper = ev.target.innerText;
        display.value += oper;
    }
    equal.addEventListener('click', () => display.value = eval(display.value) );

//     function clean() {
//         document.input.textview.value = '';
//     }
//     function clean() {
//     $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').let('');
//     $(':checkbox, :radio').prop('checked', false);
// }
// let input = $( "input:reset" );

// function dividend(numerator, denominator) {
//   var dividend = numerator / denominator;
//   if (dividend !== dividend) { throw new Error(numerator + " / " + denominator); }
//   return net;
// }
    clear.addEventListener('click', clearPressed );
    function clearPressed(ev) {
        result = 0;
        display.value = '';
    }
    })();
