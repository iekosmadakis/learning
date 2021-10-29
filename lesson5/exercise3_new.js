window.addEventListener('load', () => {
    const suits = "John";

    console.log(suits);

    const onClick = () =>{
        console.log("Clicked new");
    }
    
    // Event listener
    document.getElementById("header1").addEventListener("click", onClick);
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
