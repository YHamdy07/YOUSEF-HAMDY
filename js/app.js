(function () {
    let socials = document.querySelectorAll('.social div')
        
    socials.forEach(function(social, index) {
      social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`
    })
  
 
  }())
  

function changeBg(bg, title) {
const banner = document.querySelector ('.banner');
const contents = document.querySelectorAll('.content');
banner.style.background = 'url("../images/planet/${bg}")';
banner.style.backgroundSize = 'cover';
banner.style.backgroundPosition = 'center';

contents. forEach (content => {
content.classList.remove('active');
if (content.classList.contains(title)) {
content.classList.add('active');
}
  });
}