// const imageWrapper = document.querySelector('.images-feature');

// const arrHeight = allImage.map(item=> {
//   return item.offsetHeight;
// })

// const largeHeight = Math.max(...arrHeight);

// imageWrapper.style.height = largeHeight + 'px';

// window.addEventListener('resize', function () {
//   const allImage = Array.from(document.querySelectorAll('.images-feature img'));
//   const imageWrapper = document.querySelector('.images-feature');

//   const arrHeight = allImage.map(item=> {
//     return item.offsetHeight;
//   })

//   const largeHeight = Math.max(...arrHeight);

//   imageWrapper.style.height = largeHeight + 'px';
// })




const allFeatureLink = document.querySelectorAll('.feature-link span:not(.line)');
const allFeatureText = document.querySelectorAll('.feature-text > div');
const allImage = Array.from(document.querySelectorAll('.images-feature img'));
const line = document.querySelector('.feature-link .line');

allFeatureLink[0].classList.add('active');

line.style.left = allFeatureLink[0].offsetLeft + 'px';
line.style.width = allFeatureLink[0].offsetWidth + 'px';

allFeatureLink.forEach((link, idx)=> {
  link.addEventListener('click', function () {
    line.style.left = this.offsetLeft + 'px';
    line.style.width = this.offsetWidth + 'px';

    allFeatureLink.forEach(i=> {
      i.classList.remove('active');
    })

    allFeatureText.forEach(i=> {
      i.classList.remove('active');
    })

    allImage.forEach(i=> {
      i.classList.remove('active');
    })

    allFeatureText[idx].classList.add('active');
    allImage[idx].classList.add('active');
    this.classList.add('active');
  })
})