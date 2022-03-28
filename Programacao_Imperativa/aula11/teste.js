// // // (function () {
// // //     var a = b = 5
// // // })()

// // // console.log(b)

// // for (var i = 0; i < 3; i++) {
// //     setTimeout(function() { alert(i); }, 1000 + i);
// //   }
// var x = 0;

// for (var i = 10; i < 15; i++) {

// x += i;

// }
//  var i = 2
//  i += 3
//  i *= 4
//  document.writeIn(i)

function avalia_notas(n1, n2) {
    let media;
    let aprovado;
    if (n1 >= 6) {
        aprovado = true;
    }
    else {
        media = (n1 + n2) / 2;
        aprovado = media < 6 ? false : true;
    }
    return { media, aprovado }
}

avalia_notas(9, 5)