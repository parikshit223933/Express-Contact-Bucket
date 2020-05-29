var a_tag = document.getElementsByTagName('a')[0];
if (a_tag != undefined)
    a_tag.addEventListener('click', (event) =>
    {
        window.alert('Are you sure you want to delete this contact?');
    });
