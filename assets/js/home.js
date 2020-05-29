var a_tags = document.getElementsByTagName('a');
if (a_tags[0] != undefined)
{
    for (let a_tag of a_tags)
    {
        a_tag.addEventListener('click', (event) =>
        {
            window.alert('Are you sure you want to delete this contact?');
        });
    }
}

