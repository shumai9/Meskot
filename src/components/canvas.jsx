// import React, { Component } from 'react';

// class Canvas extends Component {
//   style = {
//     width: 100+ '%',
//     height: 100+'vh'
//   }
//   componentDidMount() {
//     const canvas = this.refs.canvas;
//     const ctx = canvas.getContext('2d');
//     var particles = {},
//         particleIndex = 0,
//         particlesNum = 5;

//     function Particle (){
//       this.x = canvas.width / 2;
//       this.y = canvas.height / 2;
//       this.radius = 4; // Arc radius
//       this.startAngle = 1; // Starting point on circle
//       this.endAngle = Math.PI + (Math.PI * particleIndex) / 2; // End point on circle
//       this.anticlockwise = true; // clockwise or anticlockwise

//       this.vx = Math.random()*10 -3;
//       this.vy = Math.random()*10 +5;
//       particleIndex++;
//       particles[particleIndex] = this;
//       this.id = particleIndex;
//       this.life = 0;
//       this.maxLife = Math.random()*100+ 150;
//       this.gravity = 0.3;
//       this.color = "hsla(" + parseInt(Math.random()*360, 10) + ",100%, 50%, 0.9)";
//     }
//     Particle.prototype.draw = function(){
//       this.x += this.vx;
//       this.y += this.vy;
//       this.vy += this.gravity;
//       this.life++;

//       if (Math.random() < 0.1){
//         this.vy += Math.random()*10 -5;
//         this.vx += Math.random()*10 -5;
//       }

//       if(this.life >= this.maxLife){
//         delete particles[this.id]
//       };

//       if (this.y > 500 ){
//         this.vy *= -0.3;
//         this.vx*= 0.3;
//         this.y = 200;
//         }

//     //   ctx.fillRect(this.x, this.y, 2, 2);
//     ctx.fillStyle = this.color;
//     ctx.strokeStyle = this.color;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius,this.startAngle, this.endAngle,this.anticlockwise);
//     ctx.fill();
//     ctx.beginPath();

//     }
//     setInterval(function(){
//       //to create an overlap of colors effect
//       ctx.globalCompositeOperation = "source-over";
//       ctx.fillStyle = "rgba(5,5,5,0.7)";
//       ctx.fillRect(0,0, canvas.width, canvas.height);

//       for( var i=0; i < particlesNum; i++){
//         new Particle();
//       }

//       ctx.globalCompositeOperation = "lighter";
//       for( var k in particles) {
//         particles[k].draw();
//       }
//     }, 60);
//   }

//   render(){
//     return(
//       <section className="canvas">
//         <canvas ref="canvas" style={this.style} />
//       </section>
//     );
//   }
// }
// export default Canvas;
