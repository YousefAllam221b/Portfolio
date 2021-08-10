


[...document.querySelectorAll('.projects-img')].forEach(function(image) {
  var viewProjectButton = document.createElement('button');
  viewProjectButton.innerHTML = 'View Project';
  viewProjectButton.className = 'view-projects';
  viewProjectButton.id = `${image.id}Button`;; //fix this, different id for each button STUPID
  viewProjectButton.style.visibility='hidden';
  image.after(viewProjectButton);
  image.parentElement.addEventListener('mouseover', function() {
      image.style.filter = 'blur(5px)';
      viewProjectButton.style.visibility='visible';
  });
  image.parentElement.addEventListener('mouseout', function() {
      viewProjectButton.style.visibility='hidden';
      image.style.filter = '';
  });
  console.log(image.parentElement);
  viewProjectButton.addEventListener('click', function(){window.location.href = this.id + ".html";})

   });







/*
THIS ADDS BUTTONS WHICH TOGGLES BETWEEN VISIBLE AND HIDDEN WHEN HOVER. IT WORKS
[...document.querySelectorAll('.projects-img')].forEach(function(image) {
  var viewProjectButton = document.createElement('button');
  viewProjectButton.innerHTML = 'View Project';
  viewProjectButton.className = 'view-projects';
  viewProjectButton.id = 'TheScheduler';
  viewProjectButton.style.visibility='hidden';
  image.after(viewProjectButton);
  image.addEventListener('mouseenter', function() {
      viewProjectButton.style.visibility='visible';
  });
  image.addEventListener('mouseout', function() {
      viewProjectButton.style.visibility='hidden';
  });
  viewProjectButton.addEventListener('click', function(){window.location.href = this.id + ".html";})

   });

*/


/*
for (image of projectsImgs)
{
  var newElement = document.createElement('button');
  image.addEventListener('mouseenter', () => {newElement.style.visibility='visible'});
  image.addEventListener('mouseout', () => {newElement.style.visibility='hidden'});
  newElement.innerHTML = 'View Project';
  newElement.style.visibility='hidden';
  image.appendChild(newElement);


}
*/


/*
for (image of projectsImgs)
{

  var el, win = document.getElementById(image.id);

  el = document.createElement('button');
  newElement.style.visibility='hidden';
  el.addEventListener('mouseenter', () => {el.style.visibility='visible'});
  el.addEventListener('mouseout', () => {el.style.visibility='hidden'});
  el.innerHTML = 'asd';
  console.log(el);
  win.after(el);


}
*/










/*
function showProjectButton(imageId)
{
  var check = document.getElementById(`${imageId}Button`);
  if (!check)
  {
    var newElement = document.createElement('button');
    newElement.innerHTML = 'View Project';
    newElement.id = `${imageId}Button`;
    newElement.class = 'view-project';
    console.log(newElement);
    var currentImage = document.getElementById(imageId);
    console.log(newElement);
    currentImage.after(newElement);

  }
}


function removeProjectButton(imageId)
{
  var check = document.getElementById(`${imageId}Button`);
  if (check)
  {
    check.remove();
  }
}


for (image of projectsImgs)
{
  image.addEventListener('mouseenter', () =>{showProjectButton(image.id);});
  image.addEventListener('mouseout', () =>{removeProjectButton(image.id);});
  console.log(image.id);
}
*/


/*
let projectsImgs = document.getElementsByClassName('projects-img');


for (image of projectsImgs)
{
  var viewProjectButton = document.createElement('button');
  viewProjectButton.innerHTML = 'View Project';
  viewProjectButton.className = 'view-projects';
  viewProjectButton.style.visibility='hidden';
  image.after(viewProjectButton);

}

var viewProjectButtons = document.getElementsByClassName('view-projects');
*/
/*
document.getElementsByClassName('projects-img').forEach(function(elem) {
    elem.addEventListener("", function() {
        //this function does stuff
        console.log(item);
    });
});
*/

/*
for (btn of viewProjectButtons)
{
  btn.previousElementSibling.addEventListener('mouseenter', ()=> {  btn.style.visibility='visible';  console.log(btn)});
  btn.previousElementSibling.addEventListener('mouseout', ()=> {  btn.style.visibility='hidden'});
  console.log(btn);
}*/
