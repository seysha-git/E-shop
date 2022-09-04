const faders = document.querySelectorAll("#fade-in");

const appearOptions = {
  threshold: 0.7,
}

const appearOnscroll = new IntersectionObserver(function(entries, appearOnscroll){
  entries.forEach(entry =>{
    if (!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnscroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader =>{
  appearOnscroll.observe(fader);
})