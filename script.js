function loaderanimation(){
    gsap.from("#bigtext>h1", {
        trigger: "#bigtext>h1",
        scroller: "#main",
        onstart: function() {
            $('#bigtext>h1').textillate({ in: { effect: 'fadeIn' }},{out:{effect:'fadeout'}});
        }
    })
    gsap.from("#bigtext>h2", {
        trigger: "#bigtext>h2",
        scroller: "#main",
        onstart: function() {
            $('#bigtext>h2').textillate({ in: { effect: 'fadeIn' }});
        }
    })
    gsap.to("#loader",{
        y:"-100%",
        duration:0.5,
        delay:3
    })
}
loaderanimation();