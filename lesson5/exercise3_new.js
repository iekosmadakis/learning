window.addEventListener('load', () => {
    const suits = "John";

    console.log(suits);

    const onClick = () =>{
        console.log("Clicked new");
    }
    
    // Event listener
    document.getElementById("header1").addEventListener("click", onClick);

    // Destructuring

    const x = {a: 3, b: 4, c: {d : 6}};
    // const a = x.a;
    // const b = x.b;
    const { b, a, c: {d} } = x;

    // -------------

    const newX = {
      ...x,
      a: 10,
      e: 11
    };

    const myArr = [1,2,3,4];
    const [el1, el2] = myArr;
    const [k, m, ...taYpoloipa] = myArr;

    // Why we do not use var and prefer let
    // for(var i = 0; i < 5; i++) {
    //     setTimeout(()=>{
    //         console.log(i);
    //     }, 3000);
    // }

    // for(let i = 0; i < 5; i++) {
    //     setTimeout(()=>{
    //         console.log(i);
    //     }, 3000);
    // }
  });

// (function(){
//     const suits = "John";

//     console.log(suits);

//     function onCLick(){
//         console.log("Clicked new");
//     }
    
//     // Event listener
//     document.getElementById("header1").addEventListener("click", onClick);
// })()
