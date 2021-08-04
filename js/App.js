
let elements = document.getElementsByClassName('navButtons');

function navBarPagesRedirect(text)
{
  if (text == 'Contact me')
    {
      window.location.href =  "Contact.html";
    }
    else
    {
      window.location.href = text + ".html";
    }
}

for (element of elements)
{
    let text = element.innerHTML;
    element.addEventListener("click", function () {navBarPagesRedirect(text); });
}

let facebookElements= document.getElementsByClassName('facebook-item');
for (element of facebookElements)
{
  element.addEventListener('click', function () {window.open('https://www.facebook.com/yousef.moataz/', '_blank');})
}

let githubElements = document.getElementsByClassName('github-item');
for (element of githubElements)
{
  element.addEventListener('click', function () {window.open('https://github.com/YousefAllam221b', '_blank');})
}

let linkedinElements = document.getElementsByClassName('linkedin-item');
for (element of linkedinElements)
{
  element.addEventListener('click', function () {window.open('https://www.linkedin.com/in/yousefallam221b', '_blank');})
}

let emailElements = document.getElementsByClassName('email-item');
for (element of emailElements)
{
  element.addEventListener('click', function () {window. open('mailto:YousefAllam221b@gmail.com', '_blank');})
}

let phoneElements = document.getElementsByClassName('phone-item');
for (element of phoneElements)
{
  element.addEventListener('click', function () {window.location.href = 'tel://+201001097153';})
}
