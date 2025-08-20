// seat left js
//  <script>
//         function handleReservation() {
//             // Simple alert for demonstration
//             alert('Reservation system would open here! 🏋‍♂️');
//         }

//         // Add some interactive effects
//         document.querySelectorAll('.session').forEach(session => {
//             session.addEventListener('click', function() {
//                 if (!this.classList.contains('full')) {
//                     this.style.transform = 'scale(0.98)';
//                     setTimeout(() => {
//                         this.style.transform = '';
//                     }, 150);
//                 }
//             });
//         });

//         // Add loading animation on page load
//         window.addEventListener('load', function() {
//             const cards = document.querySelectorAll('.day-card');
//             cards.forEach((card, index) => {
//                 card.style.opacity = '0';
//                 card.style.transform = 'translateY(30px)';
                
//                 setTimeout(() => {
//                     card.style.transition = 'all 0.6s ease';
//                     card.style.opacity = '1';
//                     card.style.transform = 'translateY(0)';
//                 }, index * 200);
//             });
//         });

//         // Handle orientation changes
//         window.addEventListener('orientationchange', function() {
//             setTimeout(() => {
//                 // Force a redraw to handle orientation changes properly
//                 document.body.style.display = 'none';
//                 document.body.offsetHeight; // Trigger a reflow
//                 document.body.style.display = '';
//             }, 100);
//         });
//     </script>