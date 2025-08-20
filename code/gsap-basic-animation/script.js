// <!-- Load GSAP Core -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

// <!-- Load ScrollTrigger Plugin -->
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

// <script>
// document.addEventListener("DOMContentLoaded", function() {
//   // Register plugin
//   gsap.registerPlugin(ScrollTrigger);
  
//   // reusable function
//   function animateFromLeft(target, trigger, x=0,y=0, end ) {
//     gsap.from(target, {
//       opacity: 0,
//       x: x,
//       y:y,
//       duration: 1,
//       scrollTrigger: {
//         trigger: trigger,
//         start: "top 80%",
//         end,
//         scrub: 1
//       }
//     });
//   }
  
//   gsap.from("#block-yui_3_17_2_1_1755066907660_3511", {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//   });

//   gsap.from("#block-yui_3_17_2_1_1755066907660_8136", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//   });

//   gsap.from("#block-6d71e5bb4fe5d0dd3af2", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//   });

//   gsap.from("#block-yui_3_17_2_1_1755326890679_1684", {
//     opacity: 0,
//     x: 200,
//     duration: 1,
//   });
  
//   gsap.from("#block-yui_3_17_2_1_1755251617210_67642", {
//     opacity: 0,
//     y: 200,
//     duration: 1,
//   });
  

//   // use it on multiple blocks
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_68125", "#block-yui_3_17_2_1_1755251617210_67642", -200);
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_68658", "#block-yui_3_17_2_1_1755251617210_67642", -200);
//   animateFromLeft("#block-137129a73325a9d7b7fa", "#block-yui_3_17_2_1_1755251617210_67642",0, 200);
//   animateFromLeft("#block-a8fc882364e893c9ba3b", "#block-yui_3_17_2_1_1755251617210_67642",0, 200);
//   animateFromLeft("#block-eb0855119cc056f9ea9d", "#block-yui_3_17_2_1_1755251617210_67642", 200);
//   animateFromLeft("#block-1a7d78dc67e3bfb7637d", "#block-yui_3_17_2_1_1755251617210_67642", 200);
// // image card second row
//   animateFromLeft("#block-0c110f574d8017ce3984", "#block-yui_3_17_2_1_1755251617210_67642", -200);
//   animateFromLeft("#block-20eb675216db020b6a70", "#block-yui_3_17_2_1_1755251617210_67642", -200);
  
//   animateFromLeft("#block-3a0df206a63ebe3e71e9", "#block-yui_3_17_2_1_1755251617210_67642",0, 200);
//   animateFromLeft("#block-60e93bd0a4c4202f498f", "#block-yui_3_17_2_1_1755251617210_67642",0, 200);
//   animateFromLeft("#block-955fe77ba9d27fced578", "#block-yui_3_17_2_1_1755251617210_67642", 200);
//   animateFromLeft("#block-02f997b0b4ae4fb06d61", "#block-yui_3_17_2_1_1755251617210_67642", 200);
//   // image card third row
//   animateFromLeft("#block-977e1adea239bc4dd93e", "#block-yui_3_17_2_1_1755251617210_67642", -200);
//   animateFromLeft("#block-a17ac5d823a9a3ee493c", "#block-yui_3_17_2_1_1755251617210_67642", -200);
//   animateFromLeft("#block-4ff2c4289125c4385cdb", "#block-yui_3_17_2_1_1755251617210_67642",0, 200);
//   animateFromLeft("#block-f5a3313ed7f32d18c0a8", "#block-yui_3_17_2_1_1755251617210_67642",0, 200);
//   animateFromLeft("#block-b3b5a6a67c3240eed61d", "#block-yui_3_17_2_1_1755251617210_67642", 200);
//   animateFromLeft("#block-45958de89fd82916a980", "#block-yui_3_17_2_1_1755251617210_67642", 200);
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_82074", "#block-f5a3313ed7f32d18c0a8",0, -50);
//   // meet our trainers
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_82613", "#block-yui_3_17_2_1_1755251617210_82074",-400, 0);
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_83226", "#block-yui_3_17_2_1_1755251617210_82074",-400, 0);
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_85166", "#block-yui_3_17_2_1_1755251617210_82074",400, 0);
//   // Transformations That Inspire
//   animateFromLeft("#block-79aefe462a2035cd14d1", "#block-yui_3_17_2_1_1755251617210_83226",200, 0);
//   //animateFromLeft(".gallery-grid-wrapper", ".gallery-grid-wrapper",0, 50);
//   // Inside the Rebel Experience
//      animateFromLeft("#block-6b6e1a5329535b3c4621", ".gallery-grid-wrapper",300, 0);
//  // animateFromLeft(".gallery-grid-wrapper", ".gallery-grid-wrapper",0, 50);  
  
//   animateFromLeft("#block-6e2adbd25ed125895378", "#block-6e2adbd25ed125895378",0, 50); 
  
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_202131", "#block-yui_3_17_2_1_1755251617210_202131",-400, 0);   
  
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_86355", "#block-yui_3_17_2_1_1755251617210_86355",-400, 0);  
//    animateFromLeft("#block-f0cbc7523441e8843b14", "#block-f0cbc7523441e8843b14",0, 100);
//    animateFromLeft("#block-8f7ce5b36e90d785342c", "#block-8f7ce5b36e90d785342c",400, 0);  
//    animateFromLeft("#block-471fe9bc71b7be04d7da", "#block-471fe9bc71b7be04d7da",-400, 0,"top 50%");
//    animateFromLeft("#block-71f04989ee690179817d", "#block-71f04989ee690179817d",0, 100,"top 50%" );  
//    animateFromLeft("#block-a0a3046dfaf0a54efdd6", "#block-a0a3046dfaf0a54efdd6",400, 0,"top 50%");  
//   // follow on instragram
//   animateFromLeft("#block-yui_3_17_2_1_1755251617210_86861", "#block-yui_3_17_2_1_1755251617210_86861",400, 0,"top 30%"); 
  
// });
// </script>