document.querySelectorAll('a[download]').forEach(anchor => {
    anchor.removeAttribute('download');
});