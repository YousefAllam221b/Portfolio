
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
