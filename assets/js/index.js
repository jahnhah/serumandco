gsap.registerPlugin(ScrollTrigger,SplitText);


gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom", 
    end: "max",
    pin: true, 
    pinSpacing: false 
  });
});



gsap.set(".clusterPieces.caption", { yPercent: -10});
gsap.set(".clusterPieces.container", { yPercent: -20});
gsap.set(".clusterPieces.container .image", { yPercent: -10});

const containers = document.querySelectorAll('.clusterGreat');

containers.forEach((container) => {
  gsap.to(container.querySelectorAll('.clusterPieces'), {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      start: "top bottom",
      end: "bottom top"
    }, 
  });
  gsap.to(container.querySelectorAll('.clusterPieces.container .image'), {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      start: "top bottom",
      end: "bottom top"
    }, 
  });
});


// burrowin text

/* --- Split the text, Burrowing Owl --- */
function setupSplits() {
  
  const titles = document.querySelectorAll('.titleBurrowing');

  titles.forEach((title) => {
    var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(title, {type:"words,chars"}), 
    chars = SplitBurrowing.chars; //an array of all the divs that wrap each character
  
  
  
    tlSplitBurrowing.from(chars, {
      duration: 0.8,
      opacity:0,
      y:100,
      ease:"circ.out",
      stagger: 0.02,
    scrollTrigger: {
        trigger: title,
    //markers:true,
        start: "top 75%",
      end: "bottom center",
        scrub:1
      }
    //,   onComplete: () => {SplitBurrowing.revert()}
    }, "+=0");

  });

    
  // window.addEventListener('resize', function() {
    // SplitBurrowing.revert();
  // });
    
  };
  
  /*
  ScrollTrigger.addEventListener("scrollEnd", function() {
      SplitBurrowing.revert();
  });
  */
  
  ScrollTrigger.addEventListener("refresh", setupSplits);
  //ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
  setupSplits();
  
  
  /*
  // Alternate way of resizing the cluster elements since they are absolutely positioned
  $(window).resize(function (){
  if(window.matchMedia("(max-width: 500px)").matches){
      gsap.set(".clusterGreat", {scale: 0.2, transformOrigin: "center center"});
  } else {
    gsap.set(".clusterGreat", {scale: 1, transformOrigin: "center center"});
            }
  });
  */
  
  